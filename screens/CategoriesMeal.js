import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text>No meals found!</Text>
      </View>
    );
  }

  return (
    <MealList displayedMeals={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
