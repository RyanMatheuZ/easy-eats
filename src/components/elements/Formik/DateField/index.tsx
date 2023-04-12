import { type FC } from 'react';

import { type DateFieldProps } from '@mui/x-date-pickers';

import { Field, useFormikContext } from 'formik';

import StyledDateField from '@components/elements/StyledDateField';

import ErrorMessage from '../ErrorMessage';

import { Container } from '../styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DateField: FC<DateFieldProps<any> & { dataTestId: string }> = ({
  name,
  label,
  dataTestId,
  required = false,
  fullWidth = false,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <Container>
      <Field
        id={name}
        name={name}
        label={label}
        required={required}
        fullWidth={fullWidth}
        as={StyledDateField}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(value: any) => setFieldValue(name as string, value)}
        {...props}
      />
      <ErrorMessage
        name={name as string}
        dataTestId={dataTestId}
      />
    </Container>
  );
};

export default DateField;
