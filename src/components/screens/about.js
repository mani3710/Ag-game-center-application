import React from 'react';
import {View,Text,StatusBar,ScrollView,Linking,TouchableOpacity} from 'react-native';
import themeData from '../constants/theme_data';
import {Icon} from 'react-native-elements';
import Header from '../constants/header';
export default class About extends React.Component{
    callSite(url1){
       
        var url = url1;
        debugger;
        console.log("url",url);
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
            
          });
    
    }
    render(){
        return(
            <ScrollView




                style={{ flex: 1, backgroundColor:themeData.themeBackGroundColor }}>
                <StatusBar />
                
                <Header
                    description={"Know about me"}
                    title={"About"}
                    navigation={this.props.navigation}
                />
               
               
           
            <Icon
                    size={150}
                    color="gray"
                    name="person"
                />
                <View style={{alignSelf:"center"}}>
                <Text style={{fontSize:12,color:"gray",textAlign:"center",fontWeight:'bold'}}>Developer</Text>
                    <Text style={{fontSize:25,fontWeight:"bold",color:themeData.white,textAlign:"center"}}>E. Manikandan </Text>
                    <Text style={{fontSize:15,color:"gray",textAlign:"center"}}>( Master of Computer Applications )</Text>
                </View>
                
                <Text style={{color:"gray",lineHeight:25,fontSize:15,marginLeft:20,marginTop:20}}>
                AG (All Games) Game centre is an application that shows all available games in all platform devices. 
Applications contain the preview videos ,description, screenshots and direct you to official websites that help you to  know more about the game before play.
This application helps a lot of gamers to find new games and for new gamers it gives some ideas about the games.

                </Text>
                <View style={{ width: "100%",marginBottom:40 }}>
                <Text style={{ color: themeData.white, fontWeight: "bold", fontSize: 18, marginTop: 15, marginLeft: 15 }}>contacts : </Text>
                <View style={{ width: "100%", flexDirection: "row", marginLeft: 20,marginTop:10 }}>
                            <Text style={{ color: themeData.white, fontWeight: "bold", fontSize: 15, marginTop: 15, marginLeft: 15 ,width:80}}>Email  </Text>
                            <View 
                            
                            style={{flexDirection:"row"}}>
                           <Text style={{ color: "#BDBDBD", fontWeight: "bold", fontSize: 15, marginTop: 15, marginLeft: 15 }}>:   mani37105@gmail.com</Text>
                            </View>
                        </View>
                        <View 
                        
                        style={{ width: "100%", flexDirection: "row", marginLeft: 20,marginTop:10 }}>
                            <Text style={{ color: themeData.white, fontWeight: "bold", fontSize: 15, marginTop: 15, marginLeft: 15 ,width:80}}>LinkedIn  </Text>
                            <TouchableOpacity 
                            onPress={()=>{this.callSite("https://www.linkedin.com/in/manikandan-erulappan-67832a132")}}
                            style={{flexDirection:"row"}}>
                            <Text style={{ color: themeData.white, fontWeight: "bold", fontSize: 15, marginTop: 15, marginLeft: 15 }}>:  manikandan-67832a132 </Text>
                            <Icon 
                                name="link"
                                color="gray"
                                size={20}
                                style={{marginLeft:10,marginTop:15}}
                            />
                            </TouchableOpacity>
                        </View>
                        <View 
                        
                        style={{ width: "100%", flexDirection: "row", marginLeft: 20,marginTop:10 }}>
                            <Text style={{ color: themeData.white, fontWeight: "bold", fontSize: 15, marginTop: 15, marginLeft: 15 ,width:80}}>API  </Text>
                            <TouchableOpacity 
                            onPress={()=>{this.callSite("https://api.rawg.io/docs/")}}
                            style={{flexDirection:"row"}}>
                            <Text style={{ color: themeData.white, fontWeight: "bold", fontSize: 15, marginTop: 15, marginLeft: 15 }}>:   api.rawg.io</Text>
                            <Icon
                                name="link"
                                color="gray"
                                size={20}
                                style={{marginLeft:10,marginTop:15}}
                            />
                            </TouchableOpacity>
                        </View>
                        </View>
              
            </ScrollView>
        );
    }
}