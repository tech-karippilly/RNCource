import { Pressable, StyleSheet, Text, View } from "react-native";
function GoalItem({data,onDelete}:any) {
    return (
        
        <Pressable android_ripple={{color:'#ddddd'}} style={styles.goalIten} onPress={()=>onDelete(data.item.id)} >
            <Text style={styles.goalText} >{data.item.text}</Text>
        </Pressable>
    )

}
export default GoalItem;

const styles = StyleSheet.create({
    goalIten: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    
      },
      goalText: {
        color: 'white'
      }
})