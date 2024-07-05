import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CatagoriesScreen from './screens/CatagoriesScreen';
import MealsOverViewScreens from './screens/MealsOverviewScreens';
import { CATEGORIES } from './data/dummy-data';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavourateScreen from './screens/FavorateScreen';
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        headerTitleStyle: { color: 'white' },
        sceneContainerStyle: {
          backgroundColor: '#3f2f25'
        },

        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1'
      }}
    >
      <Drawer.Screen name='Categories' component={CatagoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) =>
            <Ionicons name='list' color={color} size={size} />

        }}
      />
      <Drawer.Screen name='Favriotes' component={FavourateScreen}
        options={{
          title: 'Favriotes',
          drawerIcon: ({color, size}) =>
            <Ionicons name='star' color={color} size={size} />

        }}
      />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            headerTitleStyle: { color: 'white' },
            contentStyle: {
              backgroundColor: '#3f2f25'
            }
          }
        }>
          <Stack.Screen name='DrawerScreens' component={DrawerNavigation} options={{
            title: 'All Categories',
            headerShown: false
          }} />
          <Stack.Screen options={({ route, navigation }) => {
          }} name='MealsOVerView' component={MealsOverViewScreens} />
          <Stack.Screen name='MealDetails' component={MealsDetailsScreen}
            options={{
              title: 'About the Meal',

            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
