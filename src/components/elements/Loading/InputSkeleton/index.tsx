import { type FC } from 'react';

import { StyledSkeleton, type InputSkeleton } from './styles';

const InputSkeleton: FC<InputSkeleton> = ({ $isFullWidth }) => {
  return (
    <StyledSkeleton $isFullWidth={$isFullWidth} />
  );
};

export default InputSkeleton;
