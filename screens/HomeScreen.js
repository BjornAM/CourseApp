import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  Switch,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { useCourses } from "../CourseContext";
import { useStateWithDeps } from "../useStateWithDeps";

const CategoryItem = ({ category, toggleCategory }) => (
  <View style={styles.switchContainer}>
    <Switch
      style={styles.switch}
      value={category.selected}
      onValueChange={() => toggleCategory(category.id)}
    />
    <Text>{category.name}</Text>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState([
    { id: "1", name: "Sport", selected: false },
    { id: "2", name: "Music", selected: false },
    { id: "3", name: "Nutrition", selected: false },
    { id: "4", name: "Coctails", selected: false },
  ]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { courses, setCourses } = useCourses();
  const [filteredCourses, setFilteredCourses] = useStateWithDeps(
    () => courses,
    [courses]
  );

  const toggleCategory = (categoryId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  const handleFilter = () => {
    const selected = categories.filter((category) => category.selected);
    setSelectedCategories(selected);

    if (selected.length === 0) {
      setFilteredCourses(courses);
    } else {
      const filteredCourses = courses.filter((course) =>
        selected.some(
          (selectedCategory) => selectedCategory.name === course.category
        )
      );
      setFilteredCourses(filteredCourses);
    }
    setShowCategories(!showCategories);
  };

  const renderCourseItem = ({ item }) => (
    <Pressable
      style={styles.courseItem}
      onPress={() => handleCoursePress(item)}
    >
      <View style={styles.courseImageContainer}>
        <Image source={item.image} style={styles.courseImage} />
      </View>
      <Text style={styles.courseTitle}>{item.name}</Text>
      <View style={styles.profileContainer}>
        <Image source={item.profileImage} style={styles.profileImage} />
        <Text style={styles.profileName}>{item.profileName}</Text>
      </View>
    </Pressable>
  );

  const handleCoursePress = (course) => {
    navigation.navigate("CourseDetails", { course });
  };

  const handleAddCourse = () => {
    navigation.navigate("AddCourse");
  };

  const categoriesContainerStyle = showCategories
    ? {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 50,
        left: 100,
        right: 0,
        zIndex: 2,
        backgroundColor: "gainsboro",
        borderColor: "black",
        flexWrap: "wrap",
        borderWidth: 1,
      }
    : {
        display: "none",
      };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Courses</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowCategories(!showCategories)}
        >
          <AntDesign name="filter" size={15} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddCourse()}
        >
          <Text>+Add Course</Text>
        </TouchableOpacity>
      </View>
      <View style={[categoriesContainerStyle]}>
        {showCategories && (
          <View style={styles.categories}>
            {categories.map((category) => (
              <View style={styles.switchContainer} key={category.id}>
                <CategoryItem
                  category={category}
                  toggleCategory={toggleCategory}
                />
              </View>
            ))}
            <Button
              style={styles.findCoursesButton}
              title="Find Courses"
              onPress={handleFilter}
            />
          </View>
        )}
      </View>
      {(filteredCourses.length > 0 || selectedCategories.length === 0) && (
        <FlatList
          style={styles.courseList}
          data={filteredCourses}
          renderItem={renderCourseItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: "gainsboro",
    padding: 8,
    borderRadius: 5,
    marginRight: 30,
  },
  categories: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  findCoursesButton: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0.1,
  },
  addButton: {
    backgroundColor: "gainsboro",
    padding: 8,
    borderRadius: 5,
  },
  addButtonText: {
    fontsize: 15,
    color: "black",
  },
  courseItem: {
    width: 300,
    padding: 10,
    marginVertical: 5,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    backgroundColor: "gainsboro",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  courseImageContainer: {
    width: "100%",
    height: 200,
    overflow: "hidden",
  },
  courseImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  profileName: {
    fontWeight: "bold",
  },
  courseList: {
    width: "100%",
    marginTop: 50,
  },
});

export default HomeScreen;
