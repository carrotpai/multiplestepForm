import React, { useContext } from 'react';
import { FormControl, Input, TextField } from '@mui/material';
import MultiformContext from '../MultistepFormContext/MultiformContext';
import { useForm } from 'react-hook-form';

function SecondStepForm() {
  const { form, setForm } = useContext(MultiformContext);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name4: form.steps.secondStep.value.name4,
      name5: form.steps.secondStep.value.name5,
      name6: form.steps.secondStep.value.name6,
    },
  });

  console.log(form);

  return (
    <FormControl>
      <TextField variant='outlined' placeholder={'field 4'}></TextField>
      <TextField variant='outlined' placeholder={'field 5'}></TextField>
      <TextField variant='outlined' placeholder={'field 6'}></TextField>
    </FormControl>
  );
}

export default SecondStepForm;
