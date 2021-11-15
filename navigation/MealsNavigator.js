import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoryMealScreen from "../screens/CategoriesMeal";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailsScreen from "../screens/MealsDetailScreen";
import colors from "../constants/colors";
import FavoriteMealScreen from "../screens/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import { createDrawerNavigator } from "react-navigation-drawer";

const defaultStackNAvOptions = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: "white",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      // navigationOptions: {
      //   headerTitle: "Categories",
      // },
    },
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNAvOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteMealScreen,
    MealsDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNAvOptions,
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "brown",
    },
  }
);

const FiltersNavigator = createStackNavigator({
  Filters: FiltersScreen,
});

const MainNavigator =createDrawerNavigator({
  MealsFav: MealsFavTabNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNavigator);
