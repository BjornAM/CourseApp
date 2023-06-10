import React, { createContext, useState, useContext } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [newCourse, setNewCourse] = useState({});
  const [courses, setCourses] = useState([
    // {
    //   id: "1",
    //   name: "The ultimate Fooball-package: All levels",
    //   category: "Sport",
    //   image: "https://",
    //   profileName: "Neymar Jr",
    //   profileImage: require("./Images/Neymar.jpg"),
    //   tags: ["", "", ""],
    // },
    {
      id: "2",
      name: "Master the acustic Guitar",
      category: "Music",
      image: "https://i.postimg.cc/bwkNNnYv/Guitar.jpg",
      profileName: "Bjorn Mansson",
      profileImage: "https://i.postimg.cc/657pgSDn/Bjorn.jpg",
      tags: ["Learn how to play a song", "Stämm gitarren", ""],
    },
    // {
    //   id: "3",
    //   name: "Creatine",
    //   category: "Nutrition",
    //   image: require("./Images/Creatine.jpg"),
    //   profileName: "Emil Edmar",
    //   profileImage: require("./Images/Emil.jpg"),
    //   tags: ["", "", ""],
    // },
    // {
    //   id: "4",
    //   name: "Whiskey Sour",
    //   category: "Coctails",
    //   image: require("./Images/Whiskey.jpg"),
    //   profileName: "David Kringlund",
    //   profileImage: require("./Images/David.jpg"),
    //   tags: ["", "", ""],
    // },
  ]);

  const addCourse = (newCourse) => {
    if (Object.keys(newCourse).length === 0) {
      return;
    }
    const courseId = Math.random().toString();
    const course = {
      id: courseId,
      ...newCourse,
    };
    setCourses((prevCourses) => [course, ...prevCourses]);
    setNewCourse({});
  };

  return (
    <CourseContext.Provider
      value={{ courses, setCourses, addCourse, newCourse, setNewCourse }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export { CourseProvider };

export const useCourses = () => useContext(CourseContext);
