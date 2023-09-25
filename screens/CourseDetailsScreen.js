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
  FlatList,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ExpoVideo from "../components/ExpoVideo";
import { TabView, SceneMap } from "react-native-tab-view";
import { LongPressGestureHandler, State } from "react-native-gesture-handler";

const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;

  const FirstRoute = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
      <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
        <ScrollView contentContainerStyle={styles.container}>
          {course.image && (
            <Image source={{ uri: course.image }} style={styles.image} />
          )}
          <Text style={styles.heading1}>{course.name}</Text>
          {/* <Text>video</Text>
          <ExpoVideo uri={course.video} /> */}

          <Text style={styles.heading2}>Course Content</Text>
          {course.tasks.map((task, index) => (
            <View style={styles.listItem} key={index}>
              <Text style={styles.checkIcon}>✓</Text>
              <Text>{task.title}</Text>
            </View>
          ))}

          <TouchableOpacity
            onPress={() => setIsExpanded(!isExpanded)}
            style={{ flexDirection: "row" }}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Course Description
            </Text>
            <AntDesign
              name={isExpanded ? "upcircleo" : "downcircleo"}
              size={16}
              color="blue"
              style={{ marginLeft: 5 }}
            />
          </TouchableOpacity>
          {isExpanded && (
            <Text style={{ marginLeft: 25, marginRight: 25 }}>
              {course.courseDescriptionText}
            </Text>
          )}
        </ScrollView>
      </View>
    );
  };

  const SecondRoute = () => {
    const [expandedTask, setExpandedTask] = useState(null);
    const [longPressedTask, setLongPressedTask] = useState(null);

    const handleLongPress = (task) => {
      setExpandedTask(null);
      setLongPressedTask(task);
    };

    return (
      <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.heading2}>Course Content</Text>
          {course.tasks?.map((task, index) => (
            <TouchableOpacity
              key={index}
              style={styles.listItem}
              onPress={() => setExpandedTask(task)}
            >
              <Text style={styles.checkIcon}>✓</Text>
              <Text>{task.title}</Text>
              <AntDesign
                name={!!expandedTask ? "upcircleo" : "downcircleo"}
                size={16}
                color="green"
                style={{ marginLeft: 5 }}
              />
            </TouchableOpacity>
          ))}
          {/* modal */}

          {expandedTask && (
            <LongPressGestureHandler
              key={index}
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {
                  handleLongPress(expandedTask);
                }
              }}
            >
              <View style={styles.centeredContainer}>
                <Button title={"close"} onPress={() => setExpandedTask(null)} />
                {expandedTask.description.map((des, index) => (
                  <View style={styles.listItem}>
                    <Text style={styles.checkIcon2}>✓</Text>
                    <Text key={index} style={styles.expandedTaskText}>
                      {des}
                    </Text>
                  </View>
                ))}
                <Text style={styles.videoText}>Hold press for video</Text>
              </View>
            </LongPressGestureHandler>
          )}
          {longPressedTask && (
            <View style={styles.videoContainer}>
              <Button
                title={"close"}
                onPress={() => setLongPressedTask(null)}
              />
              {longPressedTask.video && (
                <View style={styles.videoView}>
                  <ExpoVideo uri={longPressedTask.video} />
                </View>
              )}
            </View>
          )}
        </ScrollView>
      </View>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "tasks" },
    { key: "second", title: "videos" },
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
  checkIcon2: {
    margin: 2,
    color: "blue",
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    color: "gray",
  },
  centeredContainer: {
    margin: 3,
    position: "absolute",
    height: 300,
    width: 200,
    top: 150,
    left: 90,
    backgroundColor: "white",
    padding: 20,
    zIndex: 1,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
  },
  videoContainer: {
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 20,
    height: 500,
    width: 300,
  },
  centeredText: {
    textAlign: "center",
  },
  expandedTaskText: {
    marginTop: 10,
  },
  videoText: {
    marginTop: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
  videoView: {
    height: 300,
    width: 200,
  },
});

export default CourseDetailsScreen;
