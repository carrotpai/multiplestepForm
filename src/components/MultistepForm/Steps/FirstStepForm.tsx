import React, { useContext, useEffect } from 'react';
import { FormControl, Input, TextField } from '@mui/material';
import MultiformContext from '../MultistepFormContext/MultiformContext';
import { useForm, Controller } from 'react-hook-form';
import Button from '@mui/material/Button';
import produce from 'immer';
import Box from '@mui/material/Box';
import { IStepForm } from '../../../types/types';
import { useNavigate } from 'react-router';

function FirstStepForm({ handleBack, handleNext, steps }: IStepForm) {
  const { form, setForm } = useContext(MultiformContext);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      name1: form.steps.firstStep.value.name1,
      name2: form.steps.firstStep.value.name2,
      name3: form.steps.firstStep.value.name3,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setForm(
      produce((formState) => {
        formState.steps.firstStep = {
          valid: true,
          dirty: false,
          value: data,
        };
      })
    );
    navigate('/second');
  };

  useEffect(() => {
    return () => {
      setForm(
        produce((form) => {
          form.steps.firstStep.dirty = isDirty;
        })
      );
    };
  }, [isDirty, setForm]);

  return (
    <>
      <FormControl component={'form'} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({
            field: { onChange, value },
            fieldState: { invalid, isDirty, error },
          }) => (
            <TextField
              variant='outlined'
              placeholder={'field 1'}
              onChange={onChange}
              value={value}
              error={invalid}
              helperText={
                error ? (error.message ? error.message : error.type) : ''
              }
            />
          )}
          name={'name1'}
          rules={{ required: true }}
          control={control}
        />
        <TextField variant='outlined' placeholder={'field 2'}></TextField>
        <TextField variant='outlined' placeholder={'field 3'}></TextField>
        <Button type={'submit'}>123</Button>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color='inherit'
            disabled={form.selectedIndex === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {form.selectedIndex === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

export default FirstStepForm;
