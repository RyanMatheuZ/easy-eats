import styled from 'styled-components';

import { StyledButton } from '@components/elements';

import { Star } from '@mui/icons-material';

interface StarIconProps {
  $isRated: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  text-align: center;
  text-decoration: wavy underline ${({ theme }) => theme.palette.primary.main} 2px;
`;

export const StarsContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
`;

export const StarIcon = styled(Star) <StarIconProps>`
  fill: ${({ theme, $isRated }) => $isRated ? theme.palette.primary.main : theme.palette.common.black};
  opacity: ${({ $isRated }) => !$isRated && 0.5};
  cursor: pointer;
  height: 30px;
  width: 30px;
`;

export const SendRateButton = styled(StyledButton)`
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(1)};

  &.MuiButtonBase-root.Mui-disabled {
    color: ${({ theme }) => theme.palette.primary.light}
  }
`;
