
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

import CustomHeaderButton from "../Components/HeaderButton";
import CategoriesScreen from "../Screens/CategoriesScreen";
import FiltersScreen from "../Screens/FiltersScreen";
import FavouriteScreen from "../Screens/FavouriteScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealsDetailsScreen from "../Screens/MealsDetailsScreen";
import Colors from "../constants/Colors";
import { toggleFavorite } from "../store/actions/meals";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const toggleFavoriteHandler = () => {
  Dispatch(toggleFavorite())
}


const MealsNavigator = (drawerNav) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
            height : 50
          },
          headerTintColor: Colors.textColor,
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "boldFont",
          },
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
           
            headerLeft : () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                title="Menu"
                iconName="menu"
                onPress={() => {
                  drawerNav.openDrawer();
                }}
                />
              </HeaderButtons>
            )
       
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({ title: route.params.categoryTitle })}
        />
        <Stack.Screen
          name="MealsDetails"
          component={MealsDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const FavStackNavigator = (drawerNav) => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
          },
          headerTintColor: Colors.textColor,
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "boldFont",
          },
          tabBarActiveTintColor: Colors.textColor,
          tabBarStyle: {
            backgroundColor: Colors.tabBarColor,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontFamily: "boldFont",
          },
        }}
      >
        <Stack.Screen name="Favourites" component={FavouriteScreen} 
        options={{
          headerLeft : () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item 
              title="Menu"
              iconName="menu"
              onPress={() => {
                drawerNav.openDrawer();
              }}
              />
            </HeaderButtons>
          )
        }}
       />
        <Stack.Screen
          name="MealsDetails"
          component={MealsDetailsScreen}
          options={({ route }) => ({
            title: route.params.mealTitle,
            headerRight: () => (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="Favourite"
                  iconName="heart-sharp"
                  onPress={() => {
                  }}
                />
              </HeaderButtons>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const TabNavigator = ({navigation : drawerNavigation}) => {
  return (
    <NavigationContainer independent={true}>
      <Tabs.Navigator
        screenOptions={{
          headerTintColor: Colors.textColor,
          tabBarActiveTintColor: Colors.textColor,
          tabBarStyle: {
            backgroundColor: Colors.tabBarColor,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontFamily: "boldFont",
          },
        }}
      >
        <Tabs.Screen
          name="Meals"
          children={() => MealsNavigator(drawerNavigation)}
          // component={() => }
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Ionicons
                  name="restaurant"
                  size={24}
                  color={Colors.textColor}
                />
              );
            },
          }}
        />
        <Tabs.Screen
          name="Favourites"
          children={() => FavStackNavigator(drawerNavigation)}
          // component={FavStackNavigator(navigation)}
          options={{
            headerShown: false,
            tabBarIcon: () => {
              return (
                <Ionicons name="heart" size={24} color={Colors.textColor} />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



const MainNavigator = () => {
  return (
    <NavigationContainer >
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="MealsCategory"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primaryColor,
            
          },
          headerTintColor: Colors.textColor,
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: "boldFont",
          },
      
        }}
      >
          <Drawer.Screen
            name="Meals App"
            component={TabNavigator}
            options={{ headerShown: false}}
          />
          <Drawer.Screen name="Filters" component={FiltersScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
