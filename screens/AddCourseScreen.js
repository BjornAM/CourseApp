import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  Modal,
} from "react-native";
import { useCourses } from "../CourseContext.js";
import shortid from "shortid";

const AddCourseScreen = () => {
  const navigation = useNavigation();

  const { addCourse } = useCourses();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [tasks, setTasks] = useState([{ title: "100 tips", id: "1" }]);
  const [done, setDone] = useState(false);
  const [opened, setOpened] = useState(false);

  const [newTask, setNewTask] = useState("");
  const [newTaskDescription, setNewTaskdesciption] = useState("");

  // const imageUrl = ""; Kolla Demos/Navigation/components/MealItem.js kolla på const{} = props;

  const saveCours = () => {
    addCourse({ name, category, image, profileName, tasks });
    navigation.navigate("Courses");
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((x) => x.id !== task.id));
  };

  const openTask = () => {
    setOpened(true);
  };

  const saveTask = () => {
    //skicka med tasks (hårdkodade)
    let task = {
      title: newTask,
      description: newTaskDescription,
      id: shortid(),
    };
    setTasks((prevTasks) => [task, ...prevTasks]);
    setNewTask("");
    setNewTaskdesciption("");
    setOpened(false);
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
        {/* <View>
          <Image source={{ uri: imageUrl }} style={styles.image}/>
        </View> */}

        {/* Lägga till CoursDetails-tags + vidare till CoursStagesScreen  */}
        <Pressable onPress={openTask}>
          <Text>Add Task</Text>
        </Pressable>

        {tasks.map((task) => (
          <View style={styles.task} key={task.id}>
            <Text>✓ {task.title}</Text>
            <Pressable onPress={() => deleteTask(task)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </Pressable>
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={saveCours}>
          <Text style={styles.saveCourseButtonText}>+ Save Course</Text>
        </TouchableOpacity>
      </View>
      {done && <Text>Sparad!</Text>}
      <Modal
        animationType="slide"
        transparent={true}
        visible={opened}
        // onRequestClose={() => {
        //   setOpened(false);
        // }}
      >
        {/* <View style={styles.centeredView}> */}
        <View style={styles.modalView}>
          <Text style={styles.taskHeading}>Course Task</Text>
          <TextInput
            style={styles.taskNameText}
            placeholder="Task Name.."
            value={newTask}
            onChangeText={setNewTask}
          ></TextInput>
          <TextInput
            style={styles.taskDescriptionText}
            placeholder="Task Description.."
            value={newTaskDescription}
            onChangeText={setNewTaskdesciption}
          ></TextInput>

          <View style={styles.buttonsContainer}>
            <Pressable style={styles.saveButton} onPress={saveTask}>
              <Text style={styles.buttonsText}>Save</Text>
            </Pressable>
            <Pressable
              style={styles.cancelButton}
              onPress={() => setOpened(!opened)}
            >
              <Text style={styles.buttonsText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
        {/* </View> */}
      </Modal>
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
  image: {},
  task: {
    flexDirection: "row",
    margin: 15,
  },
  modalView: {
    alignSelf: "center",
    marginTop: 200,
    height: 300,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  saveButton: {
    width: 75,
    backgroundColor: "gainsboro",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  cancelButton: {
    width: 75,
    backgroundColor: "gainsboro",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonsText: {
    alignSelf: "center",
  },
  taskHeading: {
    alignSelf: "center",
    marginBottom: 50,
  },
  taskNameText: {
    alignSelf: "center",
    marginBottom: 15,
  },
  taskDescriptionText: {
    alignSelf: "center",
    marginBottom: 35,
  },
  deleteButton: {
    marginLeft: 10,
    fontStyle: "italic",
  },
});

export default AddCourseScreen;
