import { useState, type FC } from 'react';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import { RateUs } from '@components/modules';

import { StepperCardContainer, Stepper, StepperButton } from './styles';

const StepperCard: FC = () => {
  const stepperContent = [<RateUs key={0} />];
  const stepperLength = stepperContent.length;

  const [activeStep, setActiveStep] = useState(stepperContent.length);

  const handlePreviousStep = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  const handleNextStep = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  return (
    <StepperCardContainer>
      {stepperContent[0]}
      <Stepper
        activeStep={0}
        steps={stepperLength}
        variant="dots"
        position="static"
        backButton={
          <StepperButton
            onClick={handlePreviousStep}
            disabled={activeStep === 1}
          >
            <ChevronLeft />
          </StepperButton>
        }
        nextButton={
          <StepperButton
            onClick={handleNextStep}
            disabled={activeStep === stepperLength}
          >
            <ChevronRight />
          </StepperButton>
        }
      />
    </StepperCardContainer>
  );
};

export default StepperCard;
