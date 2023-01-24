import { useRouter } from 'next/router';

import { render, waitFor } from '@utils/tests';
import userEvent from '@testing-library/user-event';

import Welcome from '..';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn()
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

    const signInButton = getByRole('button', { name: /entrar/i });
    const signUpButton = getByRole('button', { name: /cadastrar-se/i });

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(signInButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it('should redirect to the SIGN IN page on clicking the button', async () => {
    const { getByRole } = render(<Welcome />);
    const router = useRouter();

    const signInButton = getByRole('button', { name: /entrar/i });

    userEvent.click(signInButton);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/sign-in');
      expect(router.push).toBeCalledTimes(1);
    });
  });

  it('should redirect to the SIGN UP page on clicking the button', async () => {
    const { getByRole } = render(<Welcome />);
    const router = useRouter();

    const signUpButton = getByRole('button', { name: /cadastrar-se/i });

    userEvent.click(signUpButton);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith('/sign-up');
      expect(router.push).toBeCalledTimes(1);
    });
  });
});
