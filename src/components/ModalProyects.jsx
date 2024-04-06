import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const Stepper = ({ images }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: 'auto', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 'auto',
          pl: 2,
        }}
        className="dark:bg-slate-800"
      >
        <div className='w-full relative flex justify-center'>
        <Typography className="text-white dark:text-white font-semibold text-3xl rounded-md px-3 py-2 w-2/12 text-center">{images[activeStep].label}</Typography>
        </div>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        className='mt-5'
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 'auto',
                  display: 'block',
                  overflow: 'hidden',
                  width: 'auto',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        className="dark:bg-slate-800 mt-3"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            className='pl-3 py-1'
            sx={{ backgroundColor: '#38d49c','&:hover': {
              backgroundColor: '#32bf8c',
            },}}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            className='pr-3 py-1'
            sx={{ backgroundColor: '#38d49c','&:hover': {
              backgroundColor: '#32bf8c',
            },}}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight/>
            ) : (
              <KeyboardArrowLeft/>
            )}
            Anterior
          </Button>
        }
      />
    </Box>
  );
};
