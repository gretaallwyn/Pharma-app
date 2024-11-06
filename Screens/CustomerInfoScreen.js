import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Alert,
  FlatList,
} from 'react-native';
import { SearchBar, Header } from 'react-native-elements';
import db from '../config';
import MyHeader from '../components/MyHeader'

export default class CustomerInfoScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allCustomers: [],
      dataSource: [],
      search: '',
    };
  }
  retrieveCustomers = () => {
    var allCustomers = [];
    var customers = db
      .collection('customer_details')
      .get()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          allCustomers.push(doc.data());
        });
        this.setState({ allCustomers: allCustomers });
      });
  };
  componentDidMount() {
    this.retrieveCustomers();
  }
  searchFilterFunction(text) {
     const newData = this.state.allCustomers.filter((item) => {
      const itemData = item.customer_name ? item.customer_name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }
  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Header
          backgroundColor={'red'}
          centerComponent={{
            text: ' Search Cusotmer contact ',
            style: { color: 'black', fontSize: 20 },
          }}
        />
        <View style={{ height: 20, width: '100%',marginBottom:50 }}>
          <SearchBar
            placeholder="Type Here"
            onChangeText={(text) => this.searchFilterFunction(text)}
            onClear={(text) => this.searchFilterFunction('')}
            value={this.state.search}
          />
        </View>
        <FlatList
          data={
            this.state.search === ''
              ? this.state.allCustomers
              : this.state.dataSource
          }
          renderItem={({ item }) => (
           <View style={{ borderBottomWidth: 2 }}>
              <Text>{'Contact: ' + item.contact}</Text>
              <Text>{'Date: ' + item.date.toDate()}</Text>
              <Text>{'Customer Name: ' + item.customer_name}</Text>
              <Text>{'Medicine 1: ' + item.medicine1}</Text>
              <Text>{'Ailment 1: ' + item.ailment1}</Text>
              <Text>{'Medicine 2: ' + item.medicine2}</Text>
              <Text>{'Ailment 2: ' + item.ailment2}</Text>
              <Text>{'Medicine 3: ' + item.medicine3}</Text>
              <Text>{'Ailment 3: ' + item.ailment3}</Text>
             
            </View>
          )}
        />
      </View>
    );
  }
}