import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
console.disableYellowBox = true;

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStoryScreen
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteStory"){
        return(
          <Image
            source={require("./assets/write.png")}
            style={{width: 40, height: 40}}
          />
        )

      }
     else if (routName === "ReadStory"){
       return(
         <Image
          source={require("./assets/read.png")}
          style={{width: 40, height: 40}}
        />)

       }
      }
  })
  }
)

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
