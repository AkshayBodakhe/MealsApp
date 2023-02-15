import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect , useLayoutEffect} from "react";
import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";
// import { useRoute } from "@react-navigation/native"; // alternative for route param

function MealsOverviewScreen({ route, navigation }) {
  // const route = useRoute(); // alternative
  // route.params
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    // return mealItem.categoryIds.indexOf(catId) >= -1 || mealItem.categoryIds.indexOf(catId) >= 0 // this shows all meals 
    return mealItem.categoryIds.indexOf(catId) >= 0 ;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId,navigation]);

  return <MealsList items={displayedMeals}/>

}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
 
});
