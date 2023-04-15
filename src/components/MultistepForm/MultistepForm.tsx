import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ReactNode, useCallback, useContext } from 'react';
import MultiformContext from './MultistepFormContext/MultiformContext';
import { Outlet } from 'react-router';

interface IProps {
  children?: ReactNode;
  steps: Array<string>;
}

export default function MultistepForm({ children, steps }: IProps) {
  const { form, setForm } = useContext(MultiformContext);

  return (
    <div className='multistepForm__container'>
      <div className='multistepForm__progress'>
        <Stepper activeStep={form.selectedIndex}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <React.Fragment>
        <div className='forms__container'>
          <Outlet />
        </div>
      </React.Fragment>
    </div>
  );
}
