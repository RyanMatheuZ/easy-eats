import styled from 'styled-components';

import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const CityAndStateContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const FirstNameAndSurnameContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
