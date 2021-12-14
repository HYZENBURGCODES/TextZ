import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View,Keyboard,Dimensions,SafeAreaView,TextInput,Alert,TouchableOpacity,FlatList,Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { MaterialIcons,Entypo,Ionicons,Feather,MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds();

const date_format= date+' '+month+' '+year
const time_format= hours+':'+min

const DATA = [
  {
    id: '1',
    title: 'Leo Messi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/6550174.jpg'
  },
  {
    id: '2',
    title: 'Arunodya Pathumi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/24487.jpg'
  },
  {
    id: '3',
    title: 'React Native Dev',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/full/1709814.jpg'
  },
  {
    id: '4',
    title: 'Leo Messi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/6550174.jpg'
  },
  {
    id: '5',
    title: 'Arunodya Pathumi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/24487.jpg'
  },
  {
    id: '6',
    title: 'React Native Dev',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/full/1709814.jpg'
  },  {
    id: '7',
    title: 'Leo Messi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/6550174.jpg'
  },
  {
    id: '8',
    title: 'Arunodya Pathumi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/24487.jpg'
  },
  {
    id: '9',
    title: 'React Native Dev',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/full/1709814.jpg'
  },  {
    id: '10',
    title: 'Leo Messi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/6550174.jpg'
  },
  {
    id: '11',
    title: 'Arunodya Pathumi',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/thumb/24487.jpg'
  },
  {
    id: '12',
    title: 'React Native Dev',
    time:'Last Call :'+date_format+' '+time_format,
    user_image:'https://wallpaperaccess.com/full/1709814.jpg'
  },
];

const Item = ({ title,user_image,time }) => (
  <View style={{flexDirection:"row", height:70,borderWidth:0.5 ,borderColor:"#000",marginTop:1,borderRadius:10,padding:8,}}>
    <Image source={{uri: user_image}} style={{width:50,height:50,borderRadius:30}}/>
    <View style={{flexDirection:"column",}}>
    <Text style={styles.username_text}>{title}</Text>
    <Text style={styles.message_text}>{time}</Text>
    </View>
    <TouchableOpacity style={{top:15,position:"absolute",right:60}}>
    <MaterialIcons name="add-call" size={24} color="black" />
    </TouchableOpacity>

    <TouchableOpacity style={{top:12,position:"absolute",right:15}}>
    <MaterialIcons name="video-call" size={29} color="black" />
    </TouchableOpacity>
  </View>
);


export default function Call_Screen({navigation}) {

  let [fontsLoaded] = useFonts({Inter_900Black,});

  const renderItem = ({ item }) => (
    <Item 
    title={item.title}
    user_image={item.user_image}
    time={item.time} />
  );

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
        <Text style={styles.discription_text}>Call Logs</Text>

        <ScrollView  contentContainerStyle={{ paddingBottom: 70 }}>
      <FlatList style={{marginTop:10}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </ScrollView>
        
      <View style={styles.bottom_nav_container}>
      <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
      <MaterialCommunityIcons name="message" size={24} color="#fff" style={{paddingHorizontal:60}} />
      </TouchableOpacity>

      <TouchableOpacity>
      <Ionicons name="ios-call-sharp" size={24} color="#fff" style={{paddingHorizontal:60}}/>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{navigation.navigate("Settings_Page")}}>
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