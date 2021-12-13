import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View,Keyboard,Dimensions,SafeAreaView,TextInput,Alert,TouchableOpacity } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { MaterialIcons,Entypo,Ionicons,Feather } from '@expo/vector-icons';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function Register({navigation}) {
    
    let [fontsLoaded] = useFonts({Inter_900Black,});
    const [number, onChangenumber] = React.useState("");
    const [name, onChangename] = React.useState("");
    const [number_Width, setNumberWidth] = React.useState(0);
    const [name_Width, setNameWidth] = React.useState(0);

    const sign_up=()=>{

      var length_number= number.length;

      if(!number || !name)
      {
          Alert.alert("Invalid","Empty Field Detected")
      }
      if(length_number!==10)
      {
        Alert.alert("Invalid","Number Incorrect")
      }
      else{
        Alert.alert("Success","Registration Successfull!")
        navigation.navigate("Chat_Page");
      }
    }

    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#2a4fd9"
        translucent={false}
      />
        <Text style={styles.signature_text}>Sign Up with {'\n'} TextZ</Text>
        <View style={styles.inner_container}>
          <Text style={styles.discription_text}>TextZ is a Worlwide Available Online Text and Calling Application, whcih will be completly free and with End-To-End Encryption Audio and Video Calls.</Text>
        
          <TextInput
          onFocus={() => setNumberWidth(1)}
          onBlur={() => setNumberWidth(0)}
          placeholder="Enter Your User Name"
          placeholderTextColor="#8E929C"
          returnKeyType="done"
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          style={{
            ...styles.input,
            borderBottomWidth: name_Width,
            borderColor: "#2a4fd9",
            top:25,
            marginLeft:50,
            marginRight:50,
          }}
          onChangeText={onChangename}
          value={name}/>
     
          <TextInput
          onFocus={() => setNumberWidth(1)}
          onBlur={() => setNumberWidth(0)}
          placeholder="Enter Your Contact Number"
          placeholderTextColor="#8E929C"
          returnKeyType="done"
          blurOnSubmit={true}
          keyboardType='numeric'
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          style={{
            ...styles.input,
            borderBottomWidth: number_Width,
            borderColor: "#2a4fd9",
            top:60,
            marginLeft:50,
            marginRight:50,
          }}
          onChangeText={onChangenumber}
          value={number}/>
     
        <TouchableOpacity style={styles.login_button} onPress={sign_up}>
          <Text style={{...styles.discription_text,color:"#fff",alignSelf:"center",bottom:10}}>
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
            <Text style={{...styles.discription_text,color:"#000",alignSelf:"center",}}>
                Terms & Condiitions 
            </Text>
        </TouchableOpacity>


        <Text style={{...styles.discription_text,alignSelf:"center",marginTop:40,fontSize:30,color:"#2a4fd9"}}>
            TextZ <Text style={{...styles.discription_text,alignSelf:"center",marginTop:40,fontSize:30,color:"#000"}}>Offers you</Text>
          </Text>

          <View style={{flexDirection:"row",alignSelf:"center",padding:25}}>
          <MaterialIcons name="sms" size={24} color="black"  style={{paddingHorizontal:20}}/>
          <Feather name="video" size={24} color="black" style={{paddingHorizontal:20}}/>
          <Feather name="phone-call" size={24} color="black" style={{paddingHorizontal:20}}/>
          <Entypo name="folder-images" size={24} color="black" style={{paddingHorizontal:20}}/>
          <Ionicons name="document" size={24} color="black"style={{paddingHorizontal:20}} />
          
          </View>

          <Text style={{...styles.discription_text,alignSelf:"center",marginTop:10}}>
            Powered by @Sudarshana Jobs 2021
          </Text>

        </View>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a4fd9',
  },
  input_style:{
      width:WIDTH/1.5,
      height:50,
      backgroundColor:"#000",
      borderRadius:40,
  },
  inner_container:{
      height:HEIGHT,
      width:WIDTH,
      backgroundColor:"#fff",
      borderTopStartRadius:60,
      borderTopEndRadius:60,
      top:10,
      alignSelf:"center",
  },
  signature_text:{
    fontFamily: 'Inter_900Black', 
    fontSize: 40,
    color:"#fff",
    marginLeft:30,
    marginTop:10,
  },
  discription_text:{
    fontFamily: 'Inter_900Black', 
    fontSize: 13,
    marginLeft:30,
    marginRight:30,
    marginTop:25,
  },
  login_button:{
    width:WIDTH/2,
    height:50,
    backgroundColor:"#2a4fd9",
    alignSelf:"center",
    borderRadius:50,
    marginTop:100
  }
});