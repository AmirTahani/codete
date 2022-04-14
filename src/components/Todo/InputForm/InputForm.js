import React, {useState} from 'react';

import Button from '../../Button/Button';
import styles from './InputForm.module.css';

const emptyRegex = /^(?!\s*$).+/;

const InputForm = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [showError, setShowError] = useState(false);

  const reType = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (props.shouldValidateEmptyString) {
      if (emptyRegex.test(enteredValue)) {
        setShowError(false);
        return props.onAddItem(enteredValue);
      } else {
        return setShowError(true);
      }
    }
    return props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles['form-control']}`}
      >
        <label>Todo list</label>
        <input type="text" onChange={reType} />
        {
          showError && <span className={styles.errorMessage}>{props.errorMessage}</span>
        }
      </div>
      <Button type="submit">Add todo item</Button>
    </form>
  );
};

export default InputForm;
