import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Ionicons} from '@expo/vector-icons'
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoryMealScreen from "../screens/CategoriesMeal";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealDetailsScreen from "../screens/MealsDetailScreen";
import colors from "../constants/colors";
import FavoriteMealScreen from "../screens/FavouritesScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    navigationOptions:{
      headerTitle: 'Categories',
    }},
    CategoryMeals: CategoryMealScreen,
    MealDetail: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: "white",
    },
  }
);

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: {screen: MealsNavigator, navigationOptions:{
    tabBarIcon:(tabInfo) =>{
      return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
    }
  }},
  Favorites: {screen: FavoriteMealScreen, navigationOptions:{
    tabBarIcon:(tabInfo) =>{
      return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
    }
  }}
}, {
  tabBarOptions:{
    activeTintColor: "brown"
  }
})

export default createAppContainer(MealsFavTabNavigator);
