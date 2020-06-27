import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { setSelectedGame,fetchSearchGameData} from '../../Redux';
import { connect } from 'react-redux';
import themeData from '../constants/theme_data';
import { Card ,Icon,SearchBar} from 'react-native-elements';
import images from '../constants/images';
import Header from '../constants/header';
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           gameText:""
        }
        
    }
    
   
    moveToDetails(data){
        this.props.setSelectedGame(data);
        this.props.navigation.navigate("gameDetails");
    }
    isShowActivityIndicator(){
        if(this.props.isShowSpinner){
            return(
                <ActivityIndicator
                size={40}
                color="white"
            />
            );
        }else{
            return null;
        }
    }

    render() {
        return (
            <View




                style={{ flex: 1, backgroundColor: themeData.themeBackGroundColor }}>
                <StatusBar />

                
               <Header
                  description={"Find your game"}
                    title={"Search"}
                    navigation={this.props.navigation}  
               />
                    
                
                {/* </View> */}
                <SearchBar
                    placeholder="Enter game name"
                    containerStyle={{width:"90%",height:60,alignSelf:"center",borderRadius:30,marginTop:15}}
                    inputContainerStyle={{backgroundColor:"transparent",height:40}}
                    inputStyle={{ color: themeData.white }}
                    value={this.state.gameText}
                    onChangeText={(e)=>{this.setState({gameText:e})}}
                    onSubmitEditing={()=>{this.props.fetchSearchGameData(this.state.gameText)}}
                />
 {this.isShowActivityIndicator()}

                <FlatList


                    style={{ flex: 1, marginBottom: 10,marginTop:10 }}

                    data={this.props.data}
                    renderItem={({ item, index }) => {
                        return (
                            <Card

                                containerStyle={{ backgroundColor: "#1F2430", width: "90%", height: 200, elevation: 20, borderColor: "transparent",  borderRadius: 10,padding:0,alignSelf:"center"  }}
                            >
                           
                            <TouchableOpacity 
                            onPress={()=>{this.moveToDetails(item)}}
                            style={{width:"100%",height:"100%"}}>
                            <ImageBackground
                            style={{width:"100%",height:"100%",borderRadius: 10,justifyContent:"flex-end"}}
                            source={{uri:item.background_image}}
                            imageStyle={{borderRadius: 10}}
                            >
                            <View style={{marginLeft:15}}>
                            <Text style={{color: themeData.white, fontSize: 20, fontWeight:"bold" }}>
                                {item.name}
                            </Text>
                            <View style={{flexDirection:"row",marginTop:10,marginBottom:10}}>

                             <Icon
                                 color={themeData.white}
                                 size={20}
                                 name="vertical-align-bottom"
                                 
                             />
                             <Text style={{color:themeData.white,marginLeft:5}}>{item.added_by_status ? item.added_by_status.owned:0}</Text>
                             <Icon
                                 color="orange"
                                 size={20}
                                 name={"stars"}
                                 style={{fontWeight:"bold",marginLeft:15}}
                                 
                             />
                             <Text style={{color:themeData.white,marginLeft:5}}>{item.rating}</Text>
                            </View>
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
const mapStateToProps = state => {
    return {
        data: state.search.data,
        isShowSpinner: state.search.isShowSpinner,
        errorMessage: state.search.error,
       

    }
}
const mapDispatchToProps = dispatch => {
    return {
        
        setSelectedGame:(game)=>dispatch(setSelectedGame(game)),
        fetchSearchGameData:(gameText)=>dispatch(fetchSearchGameData(gameText))
        
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);