import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import db from '../config';
import firebase from "firebase";

export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      emailId:'',
      password:''
    }
  }

 usersLogin = (emailId,password)=>{
   firebase.auth().signInWithEmailAndPassword(emailId,password).then(()=>{
     alert("login successful")
   })
   .catch((error)=>{
    var errorCode = error.code
    var errorMessage = error.message
    alert(errorMessage)
   })
     
  
 }

  usersSignUp = (emailId,password)=>{
   firebase.auth().createUserWithEmailAndPassword(emailId,password).then((response)=>{
     alert("you are successfully signedup")
   })
   .catch((error)=>{
    var errorCode = error.code
    var errorMessage = error.message
    alert(errorMessage)
   })
     
  
 }

  render(){
  return (
    <View style={styles.container}>
     <View style={styles.profileContainer}>
     <Text style={styles.title}> Barter </Text>
     </View>
     
     <View style={styles.buttonContainer}> 
     <TextInput 
     style = {styles.loginBox}
     placeholder = "example @abc.com"
     placeholderTextColor = "#ffff"
     keyboardType = "email-address"
     onChangeText={(email)=>{
       this.setState({emailId:email})
     }}

     value={this.state.emailId}
     />
    <TextInput 
     style = {styles.loginBox}
     placeholder = "password"
     placeholderTextColor = "#ffff"
     secureTextEntry={true}
     onChangeText={(password)=>{
       this.setState({password:password})
     }}

     value={this.state.password}
     />
    
    <TouchableOpacity
     style={[styles.button,{marginBottom:20,marginTop:20}]}
     onPress={()=>{
       this.usersLogin(this.state.emailId,this.state.password)
     }}
>
<Text style={styles.buttonText}>Login</Text>
</TouchableOpacity>

 <TouchableOpacity
     style={styles.button}
     onPress={()=>{
       this.usersSignUp(this.state.emailId,this.state.password)
     }}
>
<Text style={styles.buttonText}>SignUp</Text>
</TouchableOpacity>
  
     </View>
       
    </View>
  );
  }
}

const styles = StyleSheet.create({ 
   container:{ flex:1, backgroundColor:'#F8BE85' },

   profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },

   title :{ fontSize:65, fontWeight:'300', paddingBottom:30, color : '#ff3d00' },
   
   loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 }, 
   
   button:{ width:300, height:50, justifyContent:'center', alignItems:'center', borderRadius:25, backgroundColor:"#ff9800", shadowColor: "#000", 
   
   shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.30, shadowRadius: 10.32, elevation: 16, },
   
   buttonText:{ color:'#ffff', fontWeight:'200', fontSize:20 },
 
  buttonContainer:{ flex:1, alignItems:'center' } 
  })