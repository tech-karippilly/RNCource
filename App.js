import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItems';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible,setIsModalVisible] = useState(false)

  function addGoalHandler(entereGoalText) {
    setCourseGoals(currentCouseGoals => [...currentCouseGoals, {text:entereGoalText,id:Math.random().toString()}]);
    endGoalHandler()
  }

  function removeGoalHandler(id){
    setCourseGoals(currentCourseGoals=>{
      return currentCourseGoals.filter((goals)=>goals.id !==id)
    })
  }

  function handleModalVisible(){
    setIsModalVisible(true)
  }

  function endGoalHandler(){
    setIsModalVisible(false)
  }


  return (
    <>
    <StatusBar  style='light'/>
    <View style={styles.appContainer} >
      <Button title='Add New Goal' color={'#a065ec'} onPress={handleModalVisible} />
      <GoalInput visible={isModalVisible}  AddGoals={addGoalHandler} closeModel={endGoalHandler} />
      <View style={styles.goalsContianer}>
        <FlatList data={courseGoals} alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return <GoalItem data={itemData} onDelete={removeGoalHandler}  />
          }}
          keyExtractor={(item,index)=>item.id}
        />
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContianer: {
    flex: 5
  },

});
