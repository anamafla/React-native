
import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
// TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback


export default class App extends Component {

  state = {
    people: [],
    refreshing: false,
    page: 1
  }

  async componentDidMount() {
    this.fetchData()
  }
  
  fetchData = async () => {
    this.setState({ refreshing: true})
    try {
      const data = await fetch(`https://swapi.co/api/people?page=${this.state.page}`)
      const json = await data.json()
      console.log('json: ', json)
      this.setState({
        people: json.results,
        page: this.state.page + 1,
        refreshing: false
      })
      this.setState({

      })
    } catch (err) {
      console.log('error fetching data: ', err)

    }
  }


  renderItem = ({ item }) => {
    return(
      <View style= {{ padding: 15, borderBottomColor: '#ddd', borderBottomWidth: 1}}>
        <Text style= {{ fontSize: 20}}>{item.name}</Text>
        <Text style= {{ color: 'rgba(0, 0, 0, .5)'}}>Gender: {item.gender}</Text>
      </View>
    )
  }
 
  render() {

    return (
      <View style={styles.container}>
       <Text>People:</Text>
        <FlatList
          onRefresh= {this.fetchData}
          refreshing= {this.state.refreshing}
          data= {this.state.people}
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
