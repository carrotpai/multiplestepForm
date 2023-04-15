import React, { useContext, useEffect } from 'react';
import { FormControl, Input, TextField } from '@mui/material';
import MultiformContext from '../MultistepFormContext/MultiformContext';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router';
import produce from 'immer';
import { IStepForm } from '../../../types/types';

function SecondStepForm({ handleBack, handleNext, steps }: IStepForm) {
  const { form, setForm } = useContext(MultiformContext);
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      name4: form.steps.secondStep.value.name4,
      name5: form.steps.secondStep.value.name5,
      name6: form.steps.secondStep.value.name6,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setForm(
      produce((formState) => {
        formState.steps.secondStep = {
          valid: true,
          dirty: false,
          value: data,
        };
      })
    );
    handleNext();
    navigate('/third');
  };

  useEffect(() => {
    return () => {
      setForm(
        produce((form) => {
          form.steps.secondStep.dirty = isDirty;
        })
      );
    };
  }, [isDirty, setForm]);

  console.log(form);

  return (
    <FormControl component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({
          field: { onChange, value },
          fieldState: { invalid, isDirty, error },
        }) => (
          <TextField
            variant='outlined'
            placeholder={'field 4'}
            onChange={onChange}
            value={value}
            error={invalid}
            helperText={
              error ? (error.message ? error.message : error.type) : ''
            }
          />
        )}
        name={'name4'}
        rules={{ required: true }}
        control={control}
      />
      <TextField variant='outlined' placeholder={'field 5'}></TextField>
      <TextField variant='outlined' placeholder={'field 6'}></TextField>
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

export default SecondStepForm;
