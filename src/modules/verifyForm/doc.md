# VerifyForm

This module permit you to verify your form inputs. I do recommend to use it with an onChange props so the verify is in live.

---

## How to use it :

1 - Firstly you need to import the module in a React component, exemple : import verifyForm from `./verifyForm`.

2 - Then create you component as a class and extends it from verifyForm, exemple : `class App extends verifyForm {}`

2.1 - You can now use you class as the same if you've extended is as a React.Component, for exemple you can use the `render()` method.

3 - You will need to create a constructor which take the parameter 'props' and give it to a super, exemple : `constructor(props) { super(props); }`

3.1 - !! IMPORTANT !! : You need to put every steps from 4 to 6.1 in this constructor.

4 - You now have to init the verify, to do this you need to use `this.verify.init(array<string>)`.

4.1 - Exemple : `this.verify.init(['firstInput', 'secInput'])`, it is really important to stay with the same input names everywere in your component.

5 - You can now set the error and success component. To do this you will need to use `this.verify.setErrorComp(callback);` and `this.verify.setSuccessComp(callback);`

5.1 - Theses two method work as the same.

5.2 - To give some props to the component do something like this : `this.verify.setErrorComp((color, value) => <h1 style={{ color }}>{value}</h1>);`

6 - Now you will need to set `this.verify.inputs` a property in your state, exemple : `this.state = { errors: this.verify.inputs };`

6.1 - I do recommend you to put `this.verify.inputs` in a property of your state and not directly in your state or you will not be able to put anything else in it.

7 - Your setup is now down. Now you will need to use it in the jsx of your `render()` method. We will now see how to use it in live.

7.1 - To do so you need to add a onChange props to you input and give it a function.

7.2 - This function will do a setState with a `this.verify.cond` to the property (for exemple) errors of your state.

7.3 - The `this.verify.cond(bool, 'inputNameYouGivedInTheInit')` take a condition as a boolean, and the name of the input.

7.4 - For exemple : `this.verify.cond(e.target.value <= 5, 'firstInput')`, the property of the state will be equal to the boolean you give.

7.5 - Final exemple :

```
onChange={e => {
  this.setState({
    errors: this.verify.cond(e.target.value <= 5, 'firstInput')
  });
}}
```

8 - The final step is to show the error / success component. To do this you will need to a ternary with : `this.state.errors.inputNameYouGivedInTheInit`

8.1 - And return the success and error comp in this ternary.

8.2 - For exemple (in some jsx) :

```
{ this.state.errors.firstInput
  ? this.verify.errorComp('red', 'Wrong value')
  : this.verify.successComp('green', 'This input is right')}
```

9 - You can verify every inputs with the `this.verify.verifyAll` method. This method return a boolean, true if there's an error, and false if there's not.

9.1 - You can use this method (for exemple) for knowing if you can submit you form. See in the exemple file for more informations.

See `verifyForm.exemple.js` for a full working exemple.

You are now done ! \o/
