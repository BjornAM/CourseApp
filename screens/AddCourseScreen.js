import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useCourses } from "../CourseContext.js";

const AddCourseScreen = () => {
  const navigation = useNavigation();

  const { addCourse } = useCourses();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [done, setDone] = useState(false);

  const add = () => {
    addCourse({
      name,
      category,
      image,
      profileName,
      // profileImage,
      //id?
    });
    navigation.navigate("Courses");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Add New Course</Text>

        <TextInput
          placeholder="Enter Course Name.."
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter Category Name.."
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          placeholder="Enter Image URL.."
          value={image}
          onChangeText={setImage}
        />
        <TextInput
          placeholder="Enter Profile Name.."
          value={profileName}
          onChangeText={setProfileName}
        />
        {/* imageInput profileImage */}
        {/* Lägga till CoursDetails  */}

        <TouchableOpacity style={styles.addButton} onPress={add}>
          <Text style={styles.saveCourseButtonText}>+ Save Course</Text>
        </TouchableOpacity>
      </View>
      {done && <Text>Sparad!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {},
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  saveCourseButton: {},
  saveCourseButtonText: {
    fontSize: 15,
    fontWeight: "normal",
    marginBottom: 15,
  },
});

export default AddCourseScreen;
