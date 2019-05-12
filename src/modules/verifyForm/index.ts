import { Component } from 'react';

interface Verify {
  inputs: object;
  errorComp: () => void;
  successComp: () => void;
  init: (inputsEntry: string[]) => void;
  cond: (cond: boolean, inputName: string) => object;
  verifyAll: () => boolean;
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
    cond: (cond: boolean, inputName: string) => {
      const newInputs = {
        ...this.verify.inputs,
        [inputName]: cond
      };
      this.verify.inputs = newInputs;

      return newInputs;
    },

    verifyAll: () =>
      Object.values(this.verify.inputs).filter(e => e).length > 0,

    // set the error comp
    setErrorComp: (comp: () => void) => (this.verify.errorComp = comp),

    // set the success comp
    setSuccessComp: (comp: () => void) => (this.verify.successComp = comp)
  };

  constructor(props: object) {
    super(props);
  }
}
