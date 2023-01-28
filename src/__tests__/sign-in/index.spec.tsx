import { useRouter } from 'next/router';

import { faker } from '@faker-js/faker';

import { render, waitFor, fireEvent } from '@utils/tests';

import axiosInstance from '@services/axios';

import SignIn from '@pages/sign-in/index.page';

jest.mock('@services/axios');
const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockReturnValue({
      back: jest.fn()
    })
  };
});

const FAKE_SIGN_IN_DATA = {
  cnpj: '82514016000187',
  password: faker.internet.password(10),
};

describe('Sign In page', () => {
  it('should render a page with all the informations', () => {
    const { getByTestId, getByText, getByRole } = render(<SignIn />);

    const backButton = getByTestId('back-button');
    const headerText = getByText(/Ainda não possui uma conta?/i);

    const title = getByText(/Olá novamente!/i);
    const text = getByText(/Desfrute do melhor da tecnologia para o seu negócio.../i);

    const cnpjField = getByTestId('cnpj');
    const passwordField = getByTestId('password');

    const signInButton = getByRole('button', { name: /Entrar/i });

    expect(backButton).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(cnpjField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();

    expect(signInButton).toBeInTheDocument();
  });

  it('should redirect the user to PREVIOUS page to access that page and click on the back button', async () => {
    const { getByTestId } = render(<SignIn />);
    const router = useRouter();

    const backButton = getByTestId('back-button');

    fireEvent.click(backButton);

    await waitFor(() => {
      expect(router.back).toHaveBeenCalled();
      expect(router.back).toBeCalledTimes(1);
    });
  });

  it('should correctly fill the fields and submit data for sign in', async () => {
    const { getByRole, getByTestId } = render(<SignIn />);

    const cnpjField = getByTestId('cnpj');
    const passwordField = getByTestId('password');

    const signInButton = getByRole('button', { name: /Entrar/i });

    const { cnpj, password } = FAKE_SIGN_IN_DATA;

    fireEvent.change(cnpjField, {
      target: { value: cnpj }
    });
    fireEvent.change(passwordField, {
      target: { value: password }
    });

    mockedAxios.post.mockResolvedValueOnce(FAKE_SIGN_IN_DATA);

    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/company/sign-in', FAKE_SIGN_IN_DATA);
      expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    });
  });

  it.each`
    FIELD         | MESSAGE
    ${'cnpj'}     | ${/Você deve inserir o CNPJ!/i}
    ${'password'} | ${/Você deve inserir uma senha!/i}
  `(
    'should show error <MESSSAGE> for each <FIELD>',
    async ({ FIELD, MESSAGE }) => {
      const { getByRole, getByTestId } = render(<SignIn />);

      const signInButton = getByRole('button', { name: /Entrar/i });

      fireEvent.click(signInButton);

      await waitFor(() => {
        expect(getByTestId(`${FIELD}-error-message`)).toHaveTextContent(MESSAGE);
      });
    }
  );
});
