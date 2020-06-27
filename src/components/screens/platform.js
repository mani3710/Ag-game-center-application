import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { setSelectedCategory } from '../../Redux';
import { connect } from 'react-redux';
import themeData from '../constants/theme_data';
import { Card ,Icon} from 'react-native-elements';
import images from '../constants/images';
import categoryData from '../constants/kCategory';
import kPlatform from '../constants/kPlatform';
import Header from '../constants/header';

class Platform extends React.Component {
   
   
    moveToDetails(id,name){
       // this.props.setSelectedCategory(cat);
        this.props.navigation.navigate("platformdatalist",{gameid:id,userSelectedPlatformName:name});
    }
   

    render() {
        return (
            <View




                style={{ flex: 1, backgroundColor: themeData.themeBackGroundColor }}>
                <StatusBar />
                
                <Header
                  description={"Choose your device"}
                    title={"Platform"}
                    navigation={this.props.navigation}  
               />
                {/* </View> */}


                <FlatList

                    
                    style={{ flex: 1, marginBottom: 10,marginTop:10 }}
                    
                    data={kPlatform}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Card

                                containerStyle={{ backgroundColor: "#1F2430", width: "43%", height: 200, elevation: 20, borderColor: "transparent",  borderRadius: 10,padding:0  }}
                            >
                           
                            <TouchableOpacity 
                            onPress={()=>{this.moveToDetails(item.id,item.name)}}
                            style={{width:"100%",height:"100%"}}>
                            <ImageBackground
                            style={{width:"100%",height:"100%",borderRadius: 10,justifyContent:"flex-end"}}
                            source={{uri:item.image_background}}
                            imageStyle={{borderRadius: 10}}
                            >
                            <View style={{marginLeft:15}}>
                            <Text style={{color: themeData.white, fontSize: 20, fontWeight:"bold",marginBottom:10 }}>
                                {item.name}
                            </Text>
                           
                            </View>

                            </ImageBackground>
                            </TouchableOpacity>
                           

                            

                            </Card>
                        );
                    }}
                    // onEndReachedThreshold={()=>{this.props.fetchListGameData(this.props.pageNo)}}
                   
                    
                />
               
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
        setSelectedCategory:(cat)=>dispatch(setSelectedCategory(cat))
        
    }
}
export default connect( mapDispatchToProps)(Platform);