import React from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground,Linking,Dimensions } from 'react-native';
import { callWebsites,fetchCompleteGamaData } from '../../Redux';
import { connect } from 'react-redux';
import themeData from '../constants/theme_data';
import { Card, Icon } from 'react-native-elements';
import images from '../constants/images';
import { WebView } from 'react-native-webview';
import ImageView from 'react-native-image-view';


class GameDetails extends React.Component {
    constructor(props){
        super(props);
        this.state={
            imagesData:[
                {
                    source: {
                        uri: 'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
                    },
                   
                    width:Dimensions.get('window').width ,
                    height: 200,
                },
            ],
            isShowGallery:false
        }
    }
    componentDidMount(){
       this.props.fetchCompleteGamaData(this.props.selectedGameData.id)
    }
    UNSAFE_componentWillMount(){
        var data=[];
     
    }
    onPressedData(){
        var data=[];
        for(var k of this.props.selectedGameData.short_screenshots){
            var m = {
                source: {
                    uri: k.image,
                },
               
                width:Dimensions.get('window').width ,
                height: 200,
            };
            data.push(m);
            
        }
        this.setState({imagesData:data,isShowGallery:true});
    }
   

  
    callSite(url1){
       
        var url = url1 ? url1:"htt://werwe";
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
    render() {

        if(!this.props.isShowSpinner && this.props.completedGameData){
        return (
            <ScrollView




                style={{ flex: 1, backgroundColor: themeData.themeBackGroundColor }}>
                <ImageView
    images={this.state.imagesData}
    imageIndex={0}
    isVisible={this.state.isShowGallery}
    onClose={()=>{this.setState({isShowGallery:false})}}
/>

                <Image
                    source={{ uri: this.props.selectedGameData.short_screenshots[1].image }}
                    style={{ width: "100%", height: 180 }}
                />
                <Card containerStyle={{ width: 120, height: 90, borderRadius: 10, alignSelf: "center", padding: 0, elevation: 100, marginTop: -40, borderColor: "transparent" }}>
                    <Image
                        source={{ uri: this.props.selectedGameData.background_image }}
                        style={{ width: 120, height: 90, borderRadius: 10, alignSelf: "center" }}
                    />

                </Card>
                <Text style={{ color: themeData.white, fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 15 }}>{this.props.completedGameData.name}</Text>
                <Text style={{ color: "gray", fontSize: 12,marginTop:5,textAlign:"center" }}>( released :{this.props.selectedGameData.released} )</Text>
                <View style={{ flexDirection: "row", margin: 15, height: 80, width: "90%", alignSelf: "center" }}>
                    <View
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    >
                        <Icon
                            color="orange"
                            size={25}
                            name="stars"

                        />
                        <Text style={{ color: "gray", fontSize: 13, marginTop: 5 }}>{this.props.selectedGameData.rating}</Text>
                    </View>
                    <View
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    >
                     <Icon
                            color="gray"
                            size={25}
                            name="vertical-align-bottom"

                        />
                        <Text style={{ color: "gray", fontSize: 13, marginTop: 5 }}>{this.props.selectedGameData.added_by_status?this.props.selectedGameData.added_by_status.owned:0}</Text>

                    </View>
                    <View
                        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                    >
                    <Icon
                            color="gray"
                            size={25}
                            name="videogame-asset"

                        />
                        <Text style={{ color: "gray", fontSize: 13, marginTop: 5 }}>{this.props.selectedGameData.playtime} hrs</Text>

                    </View>
                    <View
                        style={{ flex: 1, alignItems: "center", justifyContent: "center"  }}
                    >
                    <Icon
                            color="gray"
                            size={25} 
                            name="rate-review"

                        />
                        <Text style={{ color: "gray", fontSize: 13, marginTop: 5 }}>{this.props.selectedGameData.reviews_count}</Text>
                    

                    </View>

                </View>
                <View style={{width:"100%",height:1,backgroundColor:"#2C2E49"}}>

                </View>
                <View style={{flexDirection:"row",marginLeft:15,marginTop:10,width:"100%"}}>
    <Text style={{ color: "gray", fontSize: 15 }}>Tags :</Text>
    <FlatList
         horizontal
                   style={{width:"100%",margin:15,marginTop:-5}}
                    data={this.props.selectedGameData.genres}
                    renderItem={({item,index})=>{
                        return(
                       <Text style={{backgroundColor:"#2C2E49",padding:10,color:"gray",marginLeft:15,borderRadius:30,fontSize:12}}>{item.name}</Text>
                        );
                    }}
    />
    </View>
                <FlatList
                   horizontal
                   style={{width:"100%",margin:15}}
                    data={this.props.selectedGameData.short_screenshots}
                    renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity
                            onPress={()=>{this.onPressedData()}}>
                        <Image
                        
                            style={{width:180,height:110,borderRadius:10,marginLeft:15,marginRight:15}}
                            source={{uri:item.image}}
                        />
                        </TouchableOpacity>
                        );
                    }}
                />
                <WebView
                    automaticallyAdjustContentInsets={true}
                    style={{ width:"90%",height:this.props.selectedGameData.clip ? 200:0,alignSelf:"center",borderRadius:20,backgroundColor:themeData.themeBackGroundColor }}
                    
                    allowsFullscreenVideo={true}
                    allowsInlineMediaPlayback={true}
                    mediaPlaybackRequiresUserAction={false}
                    
                    
                    // source={{ uri: this.props.selectedGameData.clip.clips.full }}
                    source={{
        html: `
        <video width="100%" height="100%" style="background-color:${themeData.themeCardColor}" controls>
            <source src="${this.props.selectedGameData.clip ? this.props.selectedGameData.clip.clips.full :"https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"}" type="video/mp4">
        </video>
        `,
    }}
                    

                    />
                    {/* this.props.selectedGameData.clip.clips.full */}
                    <Text style={{ color: "white", fontSize: 15,marginTop:15,fontWeight:"bold",marginLeft:15 }}>Description :</Text>
                    <Text style={{ color: "gray", fontSize: 15,marginTop:15,marginLeft:25,lineHeight:20 }}>{this.props.completedGameData.description_raw}</Text>
                    <Text style={{ color: "gray", fontSize: 15,marginTop:15,textAlign:"center",fontWeight:"bold" }}>Available Platform & Download Store :</Text>
                    <Text style={{ color: "gray", fontSize: 12,marginTop:5,textAlign:"center" }}>( Direct Links )</Text>
                     <FlatList
                   
                   style={{width:"100%",margin:15}}
                    data={this.props.completedGameData.stores}
                    renderItem={({item,index})=>{
                        // if(item.url_en){
                        return(
                   
                    <TouchableOpacity 
                       onPress={()=>{this.callSite(item.url)}}
                       style={{width:"85%",height: 100,flexDirection:"row",borderColor:"gray",borderRadius:10,borderWidth:1,marginTop:15,alignSelf:"center",marginRight:15}}
                       >
                       
                       
                       <Image
                            style={{width:90,height:item.store.name == "Google Play"?70:50,borderRadius:10,marginLeft:15,marginRight:15,marginTop:20}}
                            source={{uri: item.store.name == "Google Play"?"http://clipart-library.com/images_k/google-play-icon-transparent/google-play-icon-transparent-19.png":item.store.image_background}}
                        />
                        <View style={{alignItems:"center",justifyContent:"center",height:"100%",marginLeft:15}}>
                        <Text style={{ color: themeData.white, fontSize: 15, fontWeight: "bold"  }}>{item.store.name}</Text>
                        <Text style={{ color: "gray", fontSize: 12,marginTop:5 }}>( {item.store.domain})</Text>
                        </View>
                       

                       </TouchableOpacity>

                        );
                    // }else{
                    //     return null;
                    // }
                    }}
                />


                    <View style={{height:20}}/>

                   
  
            </ScrollView>
        
        );
    }else{
        return(
            <View style={{flex:1,backgroundColor:themeData.themeBackGroundColor,alignItems:"center",justifyContent:"center"}}>
                 <ActivityIndicator
                size={40}
                color="white"
            />
            </View>
        );
    }
    }
}
const mapStateToProps = state => {
    return {
        selectedGameData: state.home.selectedGameData,
        completedGameData:state.home.completedGameData,
        isShowSpinner:state.home.isShowSpinner



    }
}
const mapDispatchToProps = dispatch =>{
    return{
        callWebsites:(url)=>dispatch(callWebsites(url)),
        fetchCompleteGamaData:(id)=>dispatch(fetchCompleteGamaData(id)),
        

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GameDetails);