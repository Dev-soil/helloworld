import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import type { DummyMeal } from "../AvailableMeals";

const MealsItem = ({ props }: { props: DummyMeal }) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.props}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
