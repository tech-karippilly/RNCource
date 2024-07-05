import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CatagoriesScreen from './screens/CatagoriesScreen';
import MealsOverViewScreens from './screens/MealsOverviewScreens';
import { CATEGORIES } from './data/dummy-data';
import MealsDetailsScreen from './screens/MealsDetailsScreen';

const Stack = createNativeStackNavigator()




export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            headerStyle:{ backgroundColor:'#351401'},
            headerTintColor:'white',
            headerTitleStyle:{color:'white'},
            contentStyle:{
              backgroundColor:'#3f2f25'
            }
          }
        }>
          <Stack.Screen name='MealsCatagories'  component={CatagoriesScreen} options={{
            title:'All Categories',

          }} />
          <Stack.Screen options={({route,navigation})=>{
          }} name='MealsOVerView' component={MealsOverViewScreens}/>
          <Stack.Screen name='MealDetails' component={MealsDetailsScreen}/>
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
