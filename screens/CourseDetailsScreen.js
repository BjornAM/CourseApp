import * as React from "react";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <ScrollView contentContainerStyle={styles.container}>
        {course.image && (
          <Image source={{ uri: course.image }} style={styles.image} />
        )}
        <Text style={styles.heading1}>{course.name}</Text>
        <Text style={styles.heading2}>Course Content</Text>
        {course.tasks?.map((task, index) => (
          <View style={styles.listItem} key={index}>
            <Text style={styles.checkIcon}>✓</Text>
            <Text>{task}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const SecondRoute = () => {
    const [expandedTasks, setExpandedTasks] = useState([]);
    const toggleTask = (index) => {
      if (expandedTasks.includes(index)) {
        setExpandedTasks(
          expandedTasks.filter((taskIndex) => taskIndex !== index)
        );
      } else {
        setExpandedTasks([...expandedTasks, index]);
      }
    };

    <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading2}>Course Content</Text>
        {course.tasks?.map((task, index) => (
          <TouchableOpacity
            style={styles.listItem}
            key={index}
            onPress={() => toggleTask(index)}
          >
            <Text style={styles.checkIcon}>✓</Text>
            <Text>{task}</Text>
            {expandedTasks.includes(index) && (
              <Text style={styles.description}>{task.description}</Text>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>;
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]); // styla den blåa bannern

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
  description: {
    fontSize: 16,
    marginTop: 5,
    color: "gray",
  },
});

export default CourseDetailsScreen;
