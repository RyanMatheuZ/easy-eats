import { type FC } from 'react';

import StyledButton from '@components/elements/StyledButton/styles';

import { Container } from './styles';

interface SubmitButtonProps {
  title: string;
  $primary?: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ title, $primary }) => {
  return (
    <Container>
      <StyledButton
        type="submit"
        $primary={$primary}
      >
        {title}
      </StyledButton>
    </Container>
  );
};

export default SubmitButton;
