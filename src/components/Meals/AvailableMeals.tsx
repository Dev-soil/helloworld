import React from "react";

import Card from "../UI/Card";
import MealsItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

export type DummyMeal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const DUMMY_MEALS: DummyMeal[] = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meal: DummyMeal) => (
    <MealsItem key={meal.id} props={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
