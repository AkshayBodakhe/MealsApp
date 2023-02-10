import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect , useLayoutEffect} from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
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

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
       id : item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
