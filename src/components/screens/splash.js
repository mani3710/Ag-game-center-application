import React from 'react';
import {View,Text,Image,ActivityIndicator} from 'react-native';
import themeData from '../constants/theme_data'
import images from '../constants/images';

export default class Splash extends React.Component{
    UNSAFE_componentWillMount(){
        setTimeout(()=>{
            this.props.navigation.replace('BottomNav');
        },500);
    }
    render(){
        return(
            <View style={{ 
                backgroundColor: themeData.themeBackGroundColor,
                flex: 1,
                alignItems: "center",
                justifyContent: "center"}}>
                <Image
                    style={{height:250,width:250}}
                    source={images.joyStickImg}
                />
                <ActivityIndicator
                    size={40}
                    color="white"
                />
            </View>
        );
    }
}