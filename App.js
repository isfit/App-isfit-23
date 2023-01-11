import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome5 } from "@expo/vector-icons";
import EventScreen from './src/screens/EventScreen';
import MapScreen from './src/screens/MapScreen';
import ThemeScreen from './src/screens/ThemeScreen';
import FAQScreen from './src/screens/FAQScreen';
import InformationScreen from './src/screens/InformationScreen';
import MarkerInfoScreen from './src/screens/MarkerInfoScreen';

const MapsStack = createStackNavigator();
//Make to have a visible tabbar on these screens
function MapsStackScreen() {
  return (
    <MapsStack.Navigator screenOptions={{ headerShown: false }}>
      <MapsStack.Screen name="MapsScreen" component={MapScreen} options={{
          headerTitle: (props) => <LogoTitle {...props} />,
          headerLeft: () => (
            <Button
              onPress={() => MapsStack.na}
              title="Info"
              color="#F68D1E"
            />
          ),
        }}
      />
      <MapsStack.Screen name="MarkerInfoScreen" component={MarkerInfoScreen} />
    </MapsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Events" 
      component={EventScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="calendar" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="Theme" 
      component={ThemeScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="map" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="Map" 
      component={MapsStackScreen}
      options={{
        headerTitle: "Explore Trondheim",
        headerTintColor: "#FFFF",
        headerStyle: {
          backgroundColor: "#99499C",
        },
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="map" size={20} color={color} />
        ),
      }} />
      <Tab.Screen name="FAQ" 
      component={FAQScreen}
      options={{
        headerTintColor: "#FFFFFF",
        headerStyle: {
          backgroundColor: "#0197CC",
        },
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="question" size={20} color={color} />
        ),
      }} />
    </Tab.Navigator>
    
  );
}

//creates the main stack navigation for the app and removes the default header
const MainStack = createStackNavigator();
//get white default backgroundcolor on all pages


function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        <MainStack.Screen name="HomeTabs" component={HomeTabs} />
        <MainStack.Screen name="Info" component={InformationScreen} />
        <MainStack.Screen name="Show" component={EventScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
export default App;




