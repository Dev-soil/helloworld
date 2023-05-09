import React, { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

type Props = {
  id: string;
  onAddToCart: (enteredAmountNumber: number) => void;
};

const MealItemForm = (props: Props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const mealSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredAmount = amountInputRef?.current?.value;
    const enteredAmountNumber = +enteredAmount!;

    if (enteredAmount?.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={mealSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>error, enter a valid amount (1~5)</p>}
    </form>
  );
};

export default MealItemForm;
