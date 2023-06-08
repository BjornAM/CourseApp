import React, { createContext, useState, useContext } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [newCourse, setNewCourse] = useState({});
  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "Football",
      category: "Sport",
      image: require("./Images/Football.jpg"),
      profileName: "Neymar Jr",
      profileImage: require("./Images/Neymar.jpg"),
    },
    {
      id: "2",
      name: "Guitar",
      category: "Music",
      image: require("./Images/Guitar.jpg"),
      profileName: "Bjorn Mansson",
      profileImage: require("./Images/Bjorn.jpg"),
      tags: [
        "Learn how to play a song",
        "Stämm gitarren",
        "bli en rockstjärna på två dagar",
      ],
    },
    {
      id: "3",
      name: "Creatine",
      category: "Nutrition",
      image: require("./Images/Creatine.jpg"),
      profileName: "Emil Edmar",
      profileImage: require("./Images/Emil.jpg"),
    },
    {
      id: "4",
      name: "Whiskey Sour",
      category: "Coctails",
      image: require("./Images/Whiskey.jpg"),
      profileName: "David Kringlund",
      profileImage: require("./Images/David.jpg"),
    },
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

  // const [courses, setCourses] = useState([
  //   {
  //     id: "1",
  //     name: "Football",
  //     category: "Sport",
  //     image: require("./Images/Football.jpg"),
  //     profileName: "Neymar Jr",
  //     profileImage: require("./Images/Neymar.jpg"),
  //   },
  //   {
  //     id: "2",
  //     name: "Guitar",
  //     category: "Music",
  //     image: require("./Images/Guitar.jpg"),
  //     profileName: "Bjorn Mansson",
  //     profileImage: require("./Images/Bjorn.jpg"),
  //     tags: [
  //       "Learn how to play a song",
  //       "Stämm gitarren",
  //       "bli en rockstjärna på två dagar",
  //     ],
  //   },
  //   {
  //     id: "3",
  //     name: "Creatine",
  //     category: "Nutrition",
  //     image: require("./Images/Creatine.jpg"),
  //     profileName: "Emil Edmar",
  //     profileImage: require("./Images/Emil.jpg"),
  //   },
  //   {
  //     id: "4",
  //     name: "Whiskey Sour",
  //     category: "Coctails",
  //     image: require("./Images/Whiskey.jpg"),
  //     profileName: "David Kringlund",
  //     profileImage: require("./Images/David.jpg"),
  //   },
  // ]);

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
