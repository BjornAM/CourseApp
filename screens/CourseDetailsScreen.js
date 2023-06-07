import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { CourseContext } from "../CourseContext.js";

const CourseDetailsScreen = ({ route }) => {
  const { course } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={course.image} style={styles.image} />
      <Text style={styles.heading1}>Learn {course.name}</Text>
      <Text style={styles.heading2}>Course Content</Text>
      {course.tags?.map((tag, index) => (
        <View style={styles.listItem} key={index}>
          <Text style={styles.checkIcon}>✓</Text>
          <Text>{tag}</Text>
        </View>
      ))}
    </ScrollView>
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
