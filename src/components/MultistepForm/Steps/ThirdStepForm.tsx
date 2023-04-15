import React, { useContext } from 'react';
import { FormControl, Input, TextField } from '@mui/material';
import MultiformContext from '../MultistepFormContext/MultiformContext';
import { useForm } from 'react-hook-form';
import { IStepForm } from '../../../types/types';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';

function ThirdStepForm({ handleBack, handleNext, steps }: IStepForm) {
  const { form, setForm } = useContext(MultiformContext);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      name7: form.steps.thirdStep.value.name7,
      name8: form.steps.thirdStep.value.name8,
      name9: form.steps.thirdStep.value.name9,
    },
  });

  return (
    <FormControl>
      <TextField variant='outlined' placeholder={'field 7'}></TextField>
      <TextField variant='outlined' placeholder={'field 8'}></TextField>
      <TextField variant='outlined' placeholder={'field 9'}></TextField>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color='inherit'
          disabled={form.selectedIndex === 0}
          onClick={() => {
            handleBack();
            navigate(-1);
          }}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button type={'submit'}>
          {form.selectedIndex === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </FormControl>
  );
}

export default ThirdStepForm;
