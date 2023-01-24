import { useRouter } from 'next/router';

import { render, waitFor } from '@utils/tests';
import userEvent from '@testing-library/user-event';

import SignUp from '..';

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

    const establishmentNameField = getByTestId('establishment-name');
    const cnpjField = getByTestId('cnpj');
    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');

    expect(backButton).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();

    expect(establishmentNameField).toBeInTheDocument();
    expect(cnpjField).toBeInTheDocument();
    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
  });

  it('should redirect the user to PREVIOUS page to access that page and click on the back button', async () => {
    const { getByTestId } = render(<SignUp />);
    const router = useRouter();

    const backButton = getByTestId('back-button');

    userEvent.click(backButton);

    await waitFor(() => {
      expect(router.back).toHaveBeenCalled();
      expect(router.back).toBeCalledTimes(1);
    });
  });

  it.each`
    FIELD                   | MESSAGE
    ${'establishment-name'} | ${/Você deve inserir o nome do seu estabelecimento!/i}
    ${'cnpj'}               | ${/Você deve inserir o CNPJ!/i}
    ${'email'}              | ${/Você deve inserir seu e-mail!/i}
    ${'password'}           | ${/Você deve inserir uma senha!/i}
  `(
    'should show error <MESSSAGE> for each <FIELD>',
    async ({ FIELD, MESSAGE }) => {
      const { getByRole, getByTestId } = render(<SignUp />);

      const signUpButton = getByRole('button', { name: /cadastrar-se/i });

      userEvent.click(signUpButton);

      await waitFor(() => {
        expect(getByTestId(`${FIELD}-error-message`)).toHaveTextContent(MESSAGE);
      });
    }
  );
});
