import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { fetchCategoryGameData,setSelectedGame,removeOldDataCategory} from '../../Redux';
import { connect } from 'react-redux';
import themeData from '../constants/theme_data';
import { Card ,Icon} from 'react-native-elements';
import images from '../constants/images';

class CategoryDataList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollParent: true,
            isScrollChild: true
        }
        
    }
    componentWillUnmount(){
        this.props.removeOldDataCategory();
    }
    componentDidMount() {
        
        this.props.fetchCategoryGameData(this.props.pageNo,this.props.route.params.userSelected);
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
                
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Text style={{ color: themeData.white, fontSize: 18, fontWeight: "bold", marginLeft: 10, width: "75%" }}>
                        {this.props.route.params.userSelectedGameName}
                </Text>
                    
                </View>
                {/* </View> */}


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
                    onEndReached={() => { 
                    
                        this.props.fetchCategoryGameData(this.props.pageNo,this.props.route.params.userSelected);
                 }}
                 onEndReachedThreshold={0.5}
                    
                />
                {this.isShowActivityIndicator()}
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.category.data,
        isShowSpinner: state.category.isShowSpinner,
        errorMessage: state.category.error,
        pageNo: state.category.pageNo,
        selectedCategory:state.category.selectedCategory

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchCategoryGameData:(page,cat)=>dispatch(fetchCategoryGameData(page,cat)),
        setSelectedGame:(game)=>dispatch(setSelectedGame(game)),
        removeOldDataCategory:()=>dispatch(removeOldDataCategory())
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDataList);