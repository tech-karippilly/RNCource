import { FlatList } from 'react-native';
import {CATEGORIES,} from '../data/dummy-data'
import CatagorieGridTile from '../componets/CatagorieGridTile';


function CatagoriesScreen({navigation}){
    function renderCategorItem({item}){
        function pressHandler(){
            navigation.navigate('MealsOVerView',{
                catagoriesId:item.id
            })
        }
        return <CatagorieGridTile title={item.title} color={item.color} OnPress={pressHandler}/>
    }
    return <FlatList data={CATEGORIES} 
    keyExtractor={(item)=>item.id} 
    renderItem={renderCategorItem}
    numColumns={2}
    />
}

export default CatagoriesScreen;