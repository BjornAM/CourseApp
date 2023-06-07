import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import CourseContext, { CourseProvider } from "./CourseContext";
import AddCourseScreen from "./screens/AddCourseScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <CourseProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="Courses" component={HomeScreen} />
          <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
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
