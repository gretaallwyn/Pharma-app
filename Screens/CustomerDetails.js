import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class CustomerDetailsScreen extends Component{
  constructor(){
    super();
    this.state ={
      customerName:"",
      contact:"",
      medicine1:"",
      medicine2:"",
      medicine3:"",
      ailment1:"",
      ailment2:"",
      ailment3:""

    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  addCustomerDetails =()=>{

    db.collection('customer_details').add({
      "contact":this.state.contact,
        "customer_name": this.state.customerName,
        
        "medicine1":this.state.medicine1,
        "ailment1":this.state.ailment1,
        "medicine2":this.state.medicine2,
        "ailment2":this.state.ailment2,
        "medicine3":this.state.medicine3,
        "ailment3":this.state.ailment3,
        "date":firebase.firestore.Timestamp.now().toDate(),
        "customer_id":this.createUniqueId()

    })

    this.setState({
      customerName:"",
      contact:"",
      medicine1:"",
      medicine2:"",
      medicine3:"",
      ailment1:"",
      ailment2:"",
      ailment3:""
    })

    return alert("Customer Details Added Successfully")
  }


  render(){
    return(
        <View style={{flex:1}}>
        
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
             <TextInput
                style={styles.formTextInput}
                placeholder={'Contact Number'}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text) => {
                  this.setState({
                    contact: text,
                  });
                }}
              />
               <TextInput
                style={styles.formTextInput}
                placeholder={'Customer Name'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    customerName: text,
                  });
                }}
              />
             
             
               <TextInput
                style={styles.formTextInput}
                placeholder={'Medcine 1'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    medicine1: text,
                  });
                }}
              />
               <TextInput
                style={styles.formTextInput}
                placeholder={'Ailment 1'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    ailment1: text,
                  });
                }}
              />

              <TextInput
                style={styles.formTextInput}
                placeholder={'Medcine 2'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    medicine2: text,
                  });
                }}
              />
               <TextInput
                style={styles.formTextInput}
                placeholder={'Ailment 2'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    ailment2: text,
                  });
                }}
              /><TextInput
                style={styles.formTextInput}
                placeholder={'Medcine 3'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    medicine3: text,
                  });
                }}
              />
               <TextInput
                style={styles.formTextInput}
                placeholder={'Ailment 3'}
                maxLength={20}
                onChangeText={(text) => {
                  this.setState({
                    ailment3: text,
                  });
                }}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={this.addCustomerDetails}
                >
                <Text>Add</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)