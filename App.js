import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import React from 'react';




export default function App() {
  return (
  <ScrollView>

     <View>
   {/* red header part */}
          <View style={{height:60,width:400,backgroundColor:'rgba(234, 57, 47, 1)',marginTop:30}}>
             <Text style={{color:'rgba(255, 255, 255, 1)',marginLeft:20,marginTop:20,fontSize:17}}>Android Assignment</Text>
          </View>
     {/*  first box */}        
          <View style={{backgroundColor:'rgba(242, 245, 246, 1)',height:1000}}>
              <Text style={{color:'rgba(0, 0, 0, 1)',marginLeft:32,marginTop:10,fontWeight:500}}>OVERALL SCORE</Text>
          <View style={{height:200,width:330,backgroundColor:'white',marginLeft:30,marginTop:20,borderRadius:10}}>
              <Text style={{marginTop:60,marginLeft:20,fontSize:16,fontWeight:800}}>Overall Score</Text>
              <Text style={{color:'rgba(248, 187, 0, 1)',marginLeft:18}}>AVERAGE</Text>
         <View style={{marginLeft:180,marginTop:-70}}>
         <View style={{height:100,width:100,backgroundColor:'rgba(242, 245, 246, 1)',borderRadius:50,}}>
         <View style={{height:80,width:80,backgroundColor:'white',borderRadius:50,marginLeft:10,marginTop:10}}>
                <Text style={{fontWeight:800,fontSize:20,color:'rgba(248, 187, 0, 1)',marginLeft:28,marginTop:10}}>0</Text>
                <Text style={{marginLeft:25}}>/100</Text>
            </View>      
        </View>
        </View>
        </View>
            <View style={{backgroundColor:'rgba(241, 241, 241, 1)',height:100,width:330,marginLeft:30,marginTop:-10}}>
               <Text style={{marginLeft:20,marginTop:30}}>Search Volume</Text>
               <Text style={{color:'rgba(98, 199, 36, 1)',marginLeft:20,fontWeight:700}}>HIGH</Text>
               <Text style={{marginTop:-38,marginLeft:180}}>Competition</Text>
               <Text style={{color:'rgba(245, 66, 65, 1)',marginLeft:23,fontWeight:700,marginLeft:180}}>HIGH</Text>
           </View>
            
       
             <Text>{"\n"}</Text>
             <Text>{"\n"}</Text>
   {/* second box */}
             <Text style={{marginTop:-50,marginLeft:30,fontWeight:500}}>TITLE</Text>
             <Text>{"\n"}</Text>
      <View style={{height:130,width:330,backgroundColor:'white',marginLeft:30,borderRadius:10}}>
      
           <Text style={{marginLeft:20,marginTop:30}}>This is the title generated</Text>
           <View style={{height:60,width:330,backgroundColor:'rgba(250, 252, 252, 1)',marginTop:20}}>
           <Text style={{color:'rgba(47, 128, 237, 1)',marginLeft:60,fontSize:20,marginTop:10}}>Copy</Text>
           <Text style={{color:'rgba(47, 128, 237, 1)',marginLeft:220,fontSize:20,marginTop:-25}}>Share</Text>
           </View>
      </View>


     {/* third box */}

        <Text style={{marginLeft:30,marginTop:30,fontWeight:500}}>DESCRIPTION</Text>
        <Text>{"\n"}</Text>

    <View style={{height:250,width:330,backgroundColor:'white',marginLeft:30,borderRadius:10}}>
     <Text style={{marginLeft:40,marginTop:30,lineHeight:25}} >Lorpum ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, sapien vel lacinia interdum,  metus nunc interdum metus, eu eleifend mauris orci in enim.          Sed eget mi sem.</Text>
   
    <View style={{height:60,width:330,backgroundColor:'rgba(250, 252, 252, 1)',marginTop:73}}>
    <Text style={{color:'rgba(47, 128, 237, 1)',marginLeft:60,fontSize:20,marginTop:10}}>Copy</Text>
           <Text style={{color:'rgba(47, 128, 237, 1)',marginLeft:220,fontSize:20,marginTop:-25}}>Share</Text>
    </View>


    </View>




    </View> 
    </View>
  </ScrollView>
 
  )
};
