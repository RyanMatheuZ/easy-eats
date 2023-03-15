import { type FC } from 'react';

import { StyledSkeleton } from './styles';

interface InputSkeletonProps {
  $isFullWidth?: boolean;
}

const InputSkeleton: FC<InputSkeletonProps> = ({ $isFullWidth }) => {
  return (
    <StyledSkeleton $isFullWidth={$isFullWidth} />
  );
};

export default InputSkeleton;
