
import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
// TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback


const people = [
  { name: 'Ana', age: 35 },
  { name: 'Paula', age: 25},
  { name: 'Mercedes', age: 30},
  { name: 'James', age: 35 },
  { name: 'Amanda', age: 25},
  { name: 'Jamie', age: 30},
]


export default class App extends Component {

  renderItem = ({ item }) => {
    return(
      <View style= {{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1}}>
        <Text style= {{ fontSize: 20}}>{item.name}</Text>
        <Text style= {{ color: 'rgba(0, 0, 0, .5)'}}>Age: {item.age}</Text>
      </View>
    )
  }
 
  render() {

    return (
      <View style={styles.container}>
       <FlatList
         data= {people}
         keyExtractor={item => item.name}
         renderItem= {this.renderItem}
       />

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center'
  },

  text: {
    fontSize: 22
  }

  
});
