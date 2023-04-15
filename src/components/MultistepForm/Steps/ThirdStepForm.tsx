import React, { useContext } from 'react';
import { FormControl, Input, TextField } from '@mui/material';
import MultiformContext from '../MultistepFormContext/MultiformContext';
import { useForm } from 'react-hook-form';

function ThirdStepForm(/*props: React.PropsWithChildren<{ onNext: () => void }>*/) {
  const { form, setForm } = useContext(MultiformContext);
  const { register, handleSubmit } = useForm({
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
    </FormControl>
  );
}

export default ThirdStepForm;
