import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { fetchGame,setSelectedGame } from '../../Redux';
import { connect } from 'react-redux';
import themeData from '../constants/theme_data';
import { Card ,Icon} from 'react-native-elements';
import images from '../constants/images';
import Header from '../constants/header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrollParent: true,
            isScrollChild: true
        }
    }
    componentDidMount() {
        this.props.fetchGame();
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
                    description={"Welcome Back"}
                    title={"Gamer"}
                    navigation={this.props.navigation}
                />
               
                {/* <View> 1F2430*/}
                <Card

                    containerStyle={{ backgroundColor: "#1F2430", width: "90%", height: 140, elevation: 20, borderColor: "transparent", alignSelf: "center", borderRadius: 10,  }}
                   
                >
                 <View style={{width:"100%",flexDirection:"row"}}>
                 <TouchableOpacity
                        onPress={()=>{
                            this.props.navigation.navigate(
                                "categorydatalist",
                                {
                                    userSelected:"action",
                                    userSelectedGameName:"Action"
                                });
                        }}
                         style={{ width:"20%",alignItems:"center",justifyContent:"center"}}>
                            <Image
                                source={images.actionImg}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ color: themeData.white }}>Action</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigation.navigate(
                                "categorydatalist",
                                {
                                    userSelected:"indie",
                                    userSelectedGameName:"Indie"
                                });
                        }}
                        style={{ width:"20%",alignItems:"center",justifyContent:"center"}}>
                            <Image
                                source={images.warImg}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ color: themeData.white, textAlign: "center" }}>Indie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigation.navigate(
                                "categorydatalist",
                                {
                                    userSelected:"racing",
                                    userSelectedGameName:"Racing"
                                });
                        }}
                        style={{ width:"20%",alignItems:"center",justifyContent:"center"}}>
                            <Image
                                source={images.sportImg}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ color: themeData.white, textAlign: "center" }}>Racing</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress={()=>{
                            this.props.navigation.navigate(
                                "categorydatalist",
                                {
                                    userSelected:"card",
                                    userSelectedGameName:"Card"
                                });
                        }}
                        style={{ width:"20%",alignItems:"center",justifyContent:"center"}}>
                            <Image
                                source={images.cardImg}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ color: themeData.white, textAlign: "center" }}>Card</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={()=>{
                            this.props.navigation.navigate(
                                "categorydatalist",
                                {
                                    userSelected:"role-playing-games-rpg",
                                    userSelectedGameName:"Role playing games"
                                });
                        }}
                        style={{ width:"20%",alignItems:"center",justifyContent:"center"}}>
                            <Image
                                source={images.rpgImg}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={{ color: themeData.white, textAlign: "center" }}>RPG</Text>
                        </TouchableOpacity>
                        </View>
                    
                    <View style={{ width:"100%", alignItems:"center",marginTop:15 }}>
                        <TouchableOpacity 
                         onPress={()=>{this.props.navigation.navigate("category")}}
                        >
                            <Text style={{ color: themeData.white,fontWeight:"bold",padding:10 }}>More</Text>
                        </TouchableOpacity>
                    </View>

                </Card>
                <View style={{ flexDirection: "row", marginTop: 15 }}>
                    <Text style={{ color: themeData.white, fontSize: 18, fontWeight: "bold", marginLeft: 10, width: "75%" }}>
                        Popular games
                </Text>
                    <TouchableOpacity
                    onPress={()=>{this.props.navigation.navigate("listgame")}}
                     >
                        <Text style={{ color: themeData.purple, fontSize: 15, paddingTop: 5 }}>View all</Text>
                    </TouchableOpacity>
                </View>
                {/* </View> */}
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
                />
               
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        data: state.home.data,
        isShowSpinner: state.home.isShowSpinner,
        errorMessage: state.home.errorMessage,
        pageNo: state.home.pageNo

    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchGame: () => dispatch(fetchGame()),
        setSelectedGame:(game)=>dispatch(setSelectedGame(game))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);