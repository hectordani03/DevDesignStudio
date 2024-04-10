import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import '../index.css';

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
    <Box sx={{ width: 'auto', flexGrow: 1 ,
    '@media screen and (max-width: 436px)': {
        width: '100%',
    },}}>
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 5,
        '@media screen and (max-width: 436px)': {
            mt: 0,
        },
        }}
      >
        <img
          src={images[activeStep].imgPath}
          alt={images[activeStep].label}
          style={{
            height: 'auto',
            display: 'block',
            overflow: 'hidden',
            width: 'auto',
          }}
          
        />
      </Box>
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
