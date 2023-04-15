interface IStepForm {
  handleBack: () => void;
  handleNext: () => void;
  steps: Array<string>;
}

export type { IStepForm };
