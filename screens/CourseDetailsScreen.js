import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";


const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
      <ScrollView contentContainerStyle={styles.container}>
        {course.image && (
          <Image source={{ uri: course.image }} style={styles.image} />
        )}
        <Text style={styles.heading1}>{course.name}</Text>
        <Text style={styles.heading2}>Course Content</Text>
        {course.tasks?.map((task, index) => (
          <View style={styles.listItem} key={index}>
            <Text style={styles.checkIcon}>✓</Text>
            <Text>{task.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  //   const CourseDetails = () => {};

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  heading1: {
    fontSize: 20,
    fontWeight: "normal",
    marginBottom: 20,
  },
  heading2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkIcon: {
    marginRight: 5,
    color: "green",
  },
});

export default CourseDetailsScreen;
