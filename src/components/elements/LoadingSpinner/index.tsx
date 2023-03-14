import { type FC } from 'react';

import { CircularProgress } from '@mui/material';

import { Container } from './styles';

interface LoadingSpinnerProps {
  isLoading: boolean;
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <Container>
          <CircularProgress />
        </Container>
      )}
    </>
  );
};

export default LoadingSpinner;
