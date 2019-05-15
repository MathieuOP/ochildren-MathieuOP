import { Component } from 'react';

interface Verify {
  inputs: object;
  errorComp: () => void;
  successComp: () => void;
  init: (inputsEntry: string[]) => void;
  cond: (cond: boolean, inputName: string) => object;
  verifyAll: () => boolean;
  verifyOne: (
    inputName: string,
    inputValue: string,
    callback: (error: boolean) => object
  ) => void;
  setErrorComp: (comp: () => void) => void;
  setSuccessComp: (comp: () => void) => void;
}

export default class VerifyForm extends Component {
  public verify: Verify = {
    inputs: undefined,
    errorComp: undefined,
    successComp: undefined,

    // init the verify
    init: inputsEntry =>
      (this.verify.inputs = inputsEntry.reduce(
        (acc, cur) => ({ ...acc, [cur]: true }),
        {}
      )),

    // cond
    cond: (cond, inputName) => {
      const newInputs = {
        ...this.verify.inputs,
        [inputName]: cond
      };
      this.verify.inputs = newInputs;

      return newInputs;
    },

    verifyAll: () =>
      Object.values(this.verify.inputs).filter(e => e).length > 0,

    verifyOne: (inputName, inputValue, callback) => {
      if (inputValue.length <= 0) return;
      return callback((this.verify.inputs as any)[inputName]);
    },

    // set the error comp
    setErrorComp: comp => (this.verify.errorComp = comp),

    // set the success comp
    setSuccessComp: comp => (this.verify.successComp = comp)
  };

  constructor(props: object) {
    super(props);
  }
}
