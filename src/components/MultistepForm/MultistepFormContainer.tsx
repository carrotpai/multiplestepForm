import React, { useCallback, useState } from 'react';
import FORM_STATE from './constants/formData';
import STEPS from './constants/formSteps';
import MultiformContext from './MultistepFormContext/MultiformContext';
import MultistepForm from './MultistepForm';
import FirstStepForm from './Steps/FirstStepForm';
import SecondStepForm from './Steps/SecondStepFrom';
import ThirdStepForm from './Steps/ThirdStepForm';
import produce from 'immer';
import { Route, Routes } from 'react-router';

function MultistepFormContainer() {
  const [form, setForm] = useState(FORM_STATE);
  const onComplete = useCallback(() => {
    //...
  }, []);

  const handleNext = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex += 1;
      })
    );
  }, [setForm]);

  const handleBack = useCallback(() => {
    setForm(
      produce((form) => {
        form.selectedIndex -= 1;
      })
    );
  }, [setForm]);

  return (
    <MultiformContext.Provider value={{ form, setForm }}>
      <MultistepForm steps={STEPS} />
      <Routes>
        <Route
          index
          element={
            <FirstStepForm
              handleNext={handleNext}
              handleBack={handleBack}
              steps={STEPS}
            />
          }
        />
        <Route
          element={
            <SecondStepForm
              handleNext={handleNext}
              handleBack={handleBack}
              steps={STEPS}
            />
          }
          path={'/second'}
        />
        <Route
          element={
            <ThirdStepForm
              handleNext={handleNext}
              handleBack={handleBack}
              steps={STEPS}
            />
          }
          path={'/third'}
        />
      </Routes>
    </MultiformContext.Provider>
  );
}

export default MultistepFormContainer;
