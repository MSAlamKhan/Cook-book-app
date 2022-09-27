import { MEALS } from "../../Data/dummy-data";
import { SET_FILTERS, TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) { 

    case TOGGLE_FAVORITE:

      const existingIndex = state.favouriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeals = [...state.favouriteMeals];
        updateFavMeals.splice(existingIndex, 1);
        return {
          ...state,
          favouriteMeals: updateFavMeals,
        };
      }
      else {
        const favMeal = state.meals.find(meal => meal.id === action.mealId);
        return {
            ...state,
            favouriteMeals : state.favouriteMeals.concat(favMeal)
        }
      }
      
      case SET_FILTERS : 

      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
      if (appliedFilters.glutenFree && !meal.isGultenFree) {
        return false;
      }
      if (appliedFilters.vegetarian && !meal.isVegetarian) {
        return false;
      }
      if (appliedFilters.vegan && !meal.isVegan) {
        return false;
      }
      if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
        return false;
      } 
      else {
        return true;
      }
      });

      return {
        ...state, filteredMeals : updatedFilteredMeals
      }



    default:
      return state;
  } 
};

export default mealsReducer;
