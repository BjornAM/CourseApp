import react from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useCourses } from "../CourseContext.js";

const AddCourseScreen = () => {
  const { addCourse } = useCourses(); //spara
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* ... */}
        <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
          <Text style={styles.addButtonText}>+ Add Course</Text>
        </TouchableOpacity>
      </View>
      {/* ... */}
    </View>
  );
};

export default AddCourseScreen;
