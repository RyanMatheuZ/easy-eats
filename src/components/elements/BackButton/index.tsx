import type { FC } from 'react';

import { useRouter } from 'next/router';

import { IconButton } from '@mui/material';

import { StyledBackButton } from './styles';

const BackButton: FC = () => {
  const router = useRouter();

  const handleRedirectToPreviousPage = () => {
    router.back();
  };

  return (
    <IconButton
      data-testid="back-button"
      onClick={handleRedirectToPreviousPage}
    >
      <StyledBackButton />
    </IconButton>
  );
};

export default BackButton;
