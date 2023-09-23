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
          <Text>video</Text>
          <ExpoVideo uri={course.video} />

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
    const [isExpanded, setIsExpanded] = useState(false);
    const [expandedTask, setExpandedTask] = useState(null);
    const [isTaskSelected, setIsTaskSelected] = useState(false);

    const handleLongPress = (task) => {
      if (isTaskSelected) {
        setIsExpanded(!isExpanded);
        setExpandedTask(task);

        if (task.videoUrl) {
          // Öppna videon
        }
      }
    };

    return (
      <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.heading2}>Course Content</Text>
          {course.tasks?.map((task, index) => (
            <LongPressGestureHandler
              key={index}
              onHandlerStateChange={({ nativeEvent }) => {
                if (nativeEvent.state === State.ACTIVE) {
                  setIsTaskSelected(true);
                  handleLongPress(task);
                }
              }}
            >
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => setIsTaskSelected(!isTaskSelected)}
              >
                <Text style={styles.checkIcon}>✓</Text>
                <Text>{task.title}</Text>
                <AntDesign
                  name={isExpanded ? "upcircleo" : "downcircleo"}
                  size={16}
                  color="green"
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
            </LongPressGestureHandler>
          ))}
          {expandedTask && (
            <View style={styles.centeredContainer}>
              {expandedTask.description.map((describe, index) => (
                <Text key={index} style={styles.centeredText}>
                  {describe}
                </Text>
              ))}
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
    { key: "first", title: "route 1" },
    { key: "second", title: "route 2" },
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
  centeredContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    backgroundColor: "white",
    padding: 20,
    zIndex: 1,
  },
  centeredText: {
    textAlign: "center",
  },
});

export default CourseDetailsScreen;

// return (
//   <View style={{ flex: 1, backgroundColor: "darkgrey" }}>
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading2}>Course Content</Text>
//       {course.tasks?.map((task, index) => (
//         <TouchableOpacity
//           style={styles.listItem}
//           key={index}
//           onPress={() => setIsExpanded(!isExpanded)}
//         >
//           <Text style={styles.checkIcon}>✓</Text>
//           <Text>{task.title}</Text>
//           <AntDesign
//             name={isExpanded ? "upcircleo" : "downcircleo"}
//             size={16}
//             color="green"
//             style={{ marginLeft: 5 }}
//           />
//           {isExpanded && (
//             <Text
//               style={{
//                 alignItems: "center",
//                 marginLeft: 15,
//                 marginRight: 15,
//               }}
//             >
//               {task.description}
//             </Text>
//           )}
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   </View>
// );
