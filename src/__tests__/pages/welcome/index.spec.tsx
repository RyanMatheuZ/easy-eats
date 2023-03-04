import { useRouter } from 'next/router';

import { render, waitFor, fireEvent } from '@utils/tests';

import Welcome from '@pages/welcome/index.page';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
      replace: jest.fn()
    })
  };
});

describe('Welcome page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render a page with all the informations', () => {
    const { getByRole, getByText } = render(<Welcome />);

    const title = getByText(/bem-vindo!/i);
    const text = getByText(/agora seus clientes podem realizar pedidos com muita facilidade e rapidez. Tudo isso aliado à nossa flexibilidade e cuidado!/i);

    const signInButton = getByRole('button', { name: /Entrar/i });
    const signUpButton = getByRole('button', { name: /Cadastrar-se/i });

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it.each([
    {
      label: /Entrar/i,
      redirect: '/sign-in'
    },
    {
      label: /Cadastrar-se/i,
      redirect: '/sign-up'
    }
  ])('should redirect to <REDIRECT> when clicking on each button <LABEL>', async ({ label, redirect }) => {
    const { getByRole } = render(<Welcome />);
    const router = useRouter();

    const button = getByRole('button', { name: label });

    fireEvent.click(button);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith(redirect);
      expect(router.push).toBeCalledTimes(1);
    });
  });
});
