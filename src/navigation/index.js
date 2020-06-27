import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import Splash from '../components/screens/splash';
import About from '../components/screens/about';
import Search from '../components/screens/search';
import Home from '../components/screens/home';
import Platform from '../components/screens/platform';
import PlatformDataList from '../components/screens/platformDataList';
import GameDetails from '../components/screens/gameDetails';
import ListGame from '../components/screens/listGame';
import Category from '../components/screens/category';
import CategoryDataList from '../components/screens/categoryDataList'
import ThemeData from '../components/constants/theme_data';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function PlatformStack() {
    
  return (  
      <Stack.Navigator>
        <Stack.Screen 
         options={{headerShown:false}}
        name="platform"
        component={Platform} 
        />
         <Stack.Screen 
        options={{headerShown:false}}
        name="platformdatalist"
        component={PlatformDataList} 
        />
         <Stack.Screen 
          options={{headerShown:false}}
          name="gameDetails"
          component={GameDetails} 
          />
       
      </Stack.Navigator>
   
  );
}
function SearchStack() {
    
    return (  
        <Stack.Navigator>
          <Stack.Screen 
           options={{headerShown:false}}
          name="Search"
          component={Search} 
          />
           <Stack.Screen 
          options={{headerShown:false}}
          name="gameDetails"
          component={GameDetails} 
          />
           
         
        </Stack.Navigator>
     
    );
  }
  function HomeStack() {
    
    return (  
        <Stack.Navigator>
          <Stack.Screen 
          options={{headerShown:false}}
          name="home"
          component={Home} 
          />
           <Stack.Screen 
          options={{headerShown:false}}
          name="gameDetails"
          component={GameDetails} 
          />
          <Stack.Screen 
          options={{headerShown:false}}
          name="listgame"
          component={ListGame} 
          />
          <Stack.Screen 
          options={{headerShown:false}}
          name="category"
          component={Category} 
          />
           <Stack.Screen 
          options={{headerShown:false}}
          name="categorydatalist"
          component={CategoryDataList} 
          />
           
         
        </Stack.Navigator>
     
    );
  }
  function AboutStack() {
    
    return (  
        <Stack.Navigator>
          <Stack.Screen 
           options={{headerShown:false}}
          name="about"
          component={About} 
          />
           
         
        </Stack.Navigator>
     
    );
  }
  function BottomNav() {
    return (
     
      <Tab.Navigator
      screenOptions={{}}
      
      tabBarOptions={{
        style:{
          backgroundColor:ThemeData.themeBackGroundColor,
          paddingBottom:5,
          height:60,
          borderTopWidth:1,
            borderTopColor:'#1F2430'
          
        },
        activeTintColor:ThemeData.purple,
        showLabel:false
       
        }}
      >
      <Tab.Screen 
        options={{
            tabBarLabel: 'Recent',
            tabBarIcon: ({ color, size }) => (
              <Icon name="games" color={color} size={color!=ThemeData.purple ? size:40}  />
            ),
          }}
      name="HomeStack" component={HomeStack} />
      <Tab.Screen 
      options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Icon name="search" color={color} size={color!=ThemeData.purple ? size:40} />
            ),
          }}
      name="SearchStack" component={SearchStack} />
      <Tab.Screen 
      options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({ color, size }) => (
              <Icon name="videogame-asset" color={color} size={color!=ThemeData.purple ? size:40} />
            ),
          }}
      name="platformstack" component={PlatformStack} />
       <Tab.Screen 
      options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={color!=ThemeData.purple ? size:40} />
            ),
          }}
      name="AboutStack" component={AboutStack} />
    </Tab.Navigator>
     
    );
  }
export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      options={{headerShown:false}}
      name="splash" component={Splash} />
      <Stack.Screen
      options={{headerShown:false}}
       name="BottomNav" component={BottomNav} />
     
    </Stack.Navigator>
      
      </NavigationContainer>
    );
  }