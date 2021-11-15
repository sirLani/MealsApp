import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoriteMealScreen = (props) => {
  const favMeals = MEALS.filter(
    (meals) => meals.id === "m1" || meals.id === "m2"
  );
  return <MealList displayedMeals={favMeals} navigation={props.navigation}/>;
};

FavoriteMealScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoriteMealScreen;
