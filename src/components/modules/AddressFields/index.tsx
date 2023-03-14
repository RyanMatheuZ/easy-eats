import { type FC, type ChangeEvent, type MutableRefObject } from 'react';

import { type FormikProps } from 'formik';

import { MenuItem } from '@mui/material';

import { TextField, SelectField, StyledLabel } from '@components/elements';
import { TwoThirdContainer } from '@components/modules';

import { useAddress } from '@hooks/index';

import { states } from '@utils/datas/states';
import { formatCEP } from '@utils/inputs/cep';

interface AddressFieldsProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  formikRef: MutableRefObject<FormikProps<any> | null | undefined>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}

const AddressFields: FC<AddressFieldsProps> = ({ formikRef, setFieldValue }) => {
  const { handleGetAdress, isLoadingAddress } = useAddress();

  const handleCEPAutoComplete = (cep: string) => {
    if (cep.length < 9) return;

    handleGetAdress(cep).then((response) => {
      if (!response?.erro) {
        formikRef.current?.setFieldValue('address', response?.logradouro);
        formikRef.current?.setFieldValue('district', response?.bairro);
        formikRef.current?.setFieldValue('city', response?.localidade);
        formikRef.current?.setFieldValue('state', response?.uf);
      }
    });
  };

  return (
    <>
      <StyledLabel>Localização:</StyledLabel>
      <TextField
        type="tel" // Numeric keyboard without parsing to number
        dataTestId="zip-code"
        name="zipCode"
        label="CEP"
        fullWidth
        onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
          setFieldValue('zipCode', formatCEP(e.target.value));
          handleCEPAutoComplete(e.target.value);
        }}
        disabled={isLoadingAddress}
      />
      <TextField
        type="text"
        dataTestId="address"
        name="address"
        label="Endereço"
        fullWidth
        disabled={isLoadingAddress}
      />
      <TwoThirdContainer>
        <TextField
          type="text"
          dataTestId="district"
          name="district"
          label="Bairro"
          fullWidth
          disabled={isLoadingAddress}
        />
        <TextField
          type="tel" // Numeric keyboard without parsing to number
          dataTestId="locationNumber"
          name="locationNumber"
          label="Número"
          fullWidth
        />
        <TextField
          type="text"
          dataTestId="city"
          name="city"
          label="Cidade"
          fullWidth
          disabled={isLoadingAddress}
        />
        <SelectField
          dataTestId="state"
          name="state"
          label="Estado"
          fullWidth
          disabled={isLoadingAddress}
        >
          {states.map((state, index) => (
            <MenuItem
              key={index}
              value={state}
            >
              {state}
            </MenuItem>
          ))}
        </SelectField>
      </TwoThirdContainer>
    </>
  );
};

export default AddressFields;
