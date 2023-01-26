import { useRouter } from 'next/router';

import { render, waitFor, fireEvent } from '@utils/tests';

import SignUp from '@pages/sign-up/index.page';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockReturnValue({
      back: jest.fn()
    })
  };
});

describe('Sign Up page', () => {
  it('should render a page with all the informations', () => {
    const { getByTestId, getByText } = render(<SignUp />);

    const backButton = getByTestId('back-button');
    const headerText = getByText(/Já possui uma conta?/i);

    const title = getByText(/Crie sua conta!/i);
    const text = getByText(/Desfrute do melhor da tecnologia para o seu negócio.../i);

    const fantasyNameField = getByTestId('fantasy-name');
    const cnpjField = getByTestId('cnpj');
    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');

    expect(backButton).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();

    expect(fantasyNameField).toBeInTheDocument();
    expect(cnpjField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('should redirect the user to PREVIOUS page to access that page and click on the back button', async () => {
    const { getByTestId } = render(<SignUp />);
    const router = useRouter();

    const backButton = getByTestId('back-button');

    fireEvent.click(backButton);

    await waitFor(() => {
      expect(router.back).toHaveBeenCalled();
      expect(router.back).toBeCalledTimes(1);
    });
  });

  // ! TODO: add test for submission after submission

  it.each`
    FIELD             | MESSAGE
    ${'fantasy-name'} | ${/Você deve inserir o nome fantasia!/i}
    ${'cnpj'}         | ${/Você deve inserir o CNPJ!/i}
    ${'email'}        | ${/Você deve inserir um e-mail!/i}
    ${'password'}     | ${/Você deve inserir uma senha!/i}
  `(
    'should show error <MESSSAGE> for each <FIELD>',
    async ({ FIELD, MESSAGE }) => {
      const { getByRole, getByTestId } = render(<SignUp />);

      const signUpButton = getByRole('button', { name: /cadastrar-se/i });

      fireEvent.click(signUpButton);

      await waitFor(() => {
        expect(getByTestId(`${FIELD}-error-message`)).toHaveTextContent(MESSAGE);
      });
    }
  );
});
