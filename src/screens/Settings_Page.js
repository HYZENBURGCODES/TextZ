import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View,Keyboard,Dimensions,SafeAreaView,TextInput,Alert,TouchableOpacity,FlatList,Image,Pressable } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { MaterialIcons,Entypo,FontAwesome,Ionicons,Feather,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default function Settings_Page({navigation}) {

  let [fontsLoaded] = useFonts({Inter_900Black,});

  const Log_Out=()=>{
    return Alert.alert(
        "Are your sure?",
        "Are you sure you want to Log out from TextZ?",
        [
          // The "Yes" button
          {
            text: "Yes",
            onPress: () => {
              navigation.navigate("Welcome");
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: "No",
          },
        ]
      );
  };

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
      <View style={styles.inner_container}>
        <Text style={styles.discription_text}>Profile</Text>
        
        <View style={{flexDirection:"column"}}>
        <Pressable>
        <Image source={{uri:"https://wallpaperaccess.com/thumb/6550174.jpg"}} style={{width: 150,height:150,borderRadius:80,alignSelf:"center",marginTop:20}}/>
        </Pressable>

        <View style={{flexDirection:"row",alignSelf:"center"}}>
        <AntDesign name="user" size={24} color="black" style={{top:10}}/>
        <Text style={{ fontFamily: 'Inter_900Black',fontSize:15,alignSelf:'center',marginTop:15,paddingHorizontal:10}}>Leo Messi</Text>
        </View>
        <View style={{flexDirection:"row",alignSelf:"center"}}>
        <FontAwesome name="mobile-phone" size={24} color="black" style={{top:10,paddingHorizontal:15}}/>
        <Text style={{fontFamily: 'Inter_900Black',fontSize:15,alignSelf:'center',marginTop:15,}}>0714842136</Text>
        </View>
        </View>

        <View style={{flexDirection:"column",alignSelf:"center",}}>
            <TouchableOpacity style={{width: WIDTH-20,height:50,backgroundColor:"#7bb4c9",borderTopStartRadius:30,borderTopEndRadius:30,marginTop:10,borderWidth:0.2,borderColor:"#fff",justifyContent:"center"}}>
                <Text style={{ fontFamily: 'Inter_900Black',fontSize:15,alignSelf:'center',marginTop:15,paddingHorizontal:10}}>Update Info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: WIDTH-20,height:50,backgroundColor:"#7bb4c9",borderWidth:0.2,borderColor:"#fff",justifyContent:"center"}}>
                <Text style={{ fontFamily: 'Inter_900Black',fontSize:15,alignSelf:'center',marginTop:15,paddingHorizontal:10}}>Terms & Condition</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: WIDTH-20,height:50,backgroundColor:"#7bb4c9",borderWidth:0.2,borderColor:"#fff",justifyContent:"center"}}>
                <Text style={{ fontFamily: 'Inter_900Black',fontSize:15,alignSelf:'center',marginTop:15,paddingHorizontal:10}}>Privacy Policy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: WIDTH-20,height:50,backgroundColor:"#7bb4c9",borderBottomStartRadius:30,borderBottomEndRadius:30,borderWidth:0.2,borderColor:"#fff",justifyContent:"center"}} onPress={()=>{Log_Out()}}>
                <Text style={{ fontFamily: 'Inter_900Black',fontSize:15,alignSelf:'center',marginTop:15,paddingHorizontal:10,color:"#e34530"}}>Log out</Text>
            </TouchableOpacity>
            </View>

            <Text style={{ fontFamily: 'Inter_900Black',fontSize:8,alignSelf:'center',marginTop:40}}>Version 1.0 @2021</Text>
        
      
      <View style={styles.bottom_nav_container}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
      <MaterialCommunityIcons name="message" size={24} color="#fff" style={{paddingHorizontal:60}} />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Call_Screen")}}>
      <Ionicons name="ios-call-sharp" size={24} color="#fff" style={{paddingHorizontal:60}}/>
      </TouchableOpacity>

      <TouchableOpacity>
      <Ionicons name="settings" size={24} color="#fff" style={{paddingHorizontal:60}}/>   
      </TouchableOpacity>
          </View>     

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
  inner_container:{
      height:'100%',
      width:WIDTH,
      backgroundColor:"#fff",
      borderTopStartRadius:60,
      borderTopEndRadius:60,
      top:10,
      alignSelf:"center",
  },
  bottom_nav_container:{
    width: '100%',
    height:65,
    backgroundColor: '#2a4fd9',
    justifyContent: 'center',
    flexDirection:"row",
   alignItems: 'center',
    position:"absolute",
    bottom:0,
  },
  discription_text:{
    fontFamily: 'Inter_900Black', 
    fontSize: 25,
    marginLeft:30,
    marginRight:30,
    marginTop:25,
  },
  username_text:{
    fontFamily: 'Inter_900Black', 
    fontSize: 15,
    marginLeft:15
  },
  message_text:{
   // fontFamily: 'Inter_900Black', 
    fontSize: 15,
    marginLeft:15,
    marginTop:1,
    marginRight:15,
  },
});