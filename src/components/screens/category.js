import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { setSelectedCategory } from '../../Redux';
import { connect } from 'react-redux';
import themeData from '../constants/theme_data';
import { Card ,Icon} from 'react-native-elements';
import images from '../constants/images';
import categoryData from '../constants/kCategory';

class Category extends React.Component {
   
   
    moveToDetails(cat,name){
       // this.props.setSelectedCategory(cat);
        this.props.navigation.navigate("categorydatalist",{userSelected:cat,userSelectedGameName:name});
    }
   

    render() {
        return (
            <View




                style={{ flex: 1, backgroundColor: themeData.themeBackGroundColor }}>
                <StatusBar />
                
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Text style={{ color: themeData.white, fontSize: 18, fontWeight: "bold", marginLeft: 10, width: "75%" }}>
                        Categories
                </Text>
                    
                </View>
                {/* </View> */}


                <FlatList

                    
                    style={{ flex: 1, marginBottom: 10,marginTop:10}}
                    contentContainerStyle={{width:"100%"}}
                    data={categoryData}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Card

                                containerStyle={{ backgroundColor: "#1F2430", width: "43%", height: 200, elevation: 20, borderColor: "transparent",  borderRadius: 10,padding:0 ,alignSelf:"center"}}
                            >
                           
                            <TouchableOpacity 
                            onPress={()=>{this.moveToDetails(item.slug,item.name)}}
                            style={{width:"100%",height:"100%"}}>
                            <ImageBackground
                            style={{width:"100%",height:"100%",borderRadius: 10,justifyContent:"flex-end"}}
                            source={{uri:item.image_background}}
                            imageStyle={{borderRadius: 10}}
                            >
                            <View style={{marginLeft:15}}>
                            <Text style={{color: themeData.white, fontSize: 20, fontWeight:"bold" }}>
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
export default connect( mapDispatchToProps)(Category);