import { CATEGORIES, MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet, Text } from "react-native";

import { useLayoutEffect } from "react";
import MealItem from "../components/MealList/MealItem";
import MealsList from "../components/MealList/MealsList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(catId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
