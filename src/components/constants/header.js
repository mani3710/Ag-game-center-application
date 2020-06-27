import React from 'react';
import {Text,View,Image,TouchableOpacity} from 'react-native';
import themeData from './theme_data';
import images from './images';
export default class Header extends React.Component{
    render(){
        return(
            <View style={{ marginTop: 15, marginLeft: 15,flexDirection:"row" }}>
            <View style={{}}>
            <Text style={{ color: "#2C2E49", fontSize: 15 }}>{this.props.description}</Text>
            <Text style={{ color: themeData.white, fontSize: 24, fontWeight: "bold" }}>{this.props.title}</Text>
            </View>
            <View style={{flex:1,alignItems:"flex-end",marginRight:20}}>
            <TouchableOpacity 
            onPress={()=>{this.props.navigation.navigate("AboutStack")}}>
            <Image
                source={images.joyStickImg}
                style={{width:50,height:50}}
            />
            </TouchableOpacity>
            </View>
          
        </View>
        );
    }
}