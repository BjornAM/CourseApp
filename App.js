import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import CourseContext, { CourseProvider } from "./CourseContext";

import HomeScreen from "./screens/HomeScreen";
import AddCourseScreen from "./screens/AddCourseScreen";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import CourseDescriptionScreen from "./screens/CourseDescriptionScreen";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <CourseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="Courses" component={HomeScreen} />
          <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
          <Stack.Screen
            name="CourseDescriptions"
            component={CourseDescriptionScreen}
          />
          <Stack.Screen name="AddCourse" component={AddCourseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CourseProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 40,
//     backgroundColor: "#fff",
//     alignItems: "center",
//   },
// });
