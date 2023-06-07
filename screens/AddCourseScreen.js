import react from "react";
import { View, Text, TouchableOpacity } from "react-native";

const AddCourseScreen = () => {
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
