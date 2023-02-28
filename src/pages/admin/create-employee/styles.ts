import styled from 'styled-components';

import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FirstNameAndSurnameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
`;
