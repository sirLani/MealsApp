import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const FavoriteMealScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <Text>No favorite meals found. Start adding some!</Text>
      </View>
    );
  }

  return <MealList displayedMeals={favMeals} navigation={props.navigation} />;
};

FavoriteMealScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteMealScreen;
