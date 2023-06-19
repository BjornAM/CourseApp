import React, { createContext, useState, useContext } from "react";

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [newCourse, setNewCourse] = useState({});
  const [courses, setCourses] = useState([
    {
      id: "1",
      name: "The ultimate Fooball-package: All levels",
      category: "Sport",
      image: "https://i.postimg.cc/gkf2WsW-5/Football.jpg",
      profileName: "Neymar Jr",
      profileImage: "https://i.postimg.cc/bYmZK1dc/Neymar.jpg",
      tasks: [
        "Strategies",
        "Football all around the world",
        "Passing",
        "Dribbling",
        "Shots",
        "How to score goals",
        "Listen to the pro: Eric Cantona",
        "Listen to the pro: Paul Gascoigne",
      ],
    },
    {
      id: "2",
      name: "Master the acustic Guitar",
      category: "Music",
      image: "https://i.postimg.cc/bwkNNnYv/Guitar.jpg",
      profileName: "Bjorn Mansson",
      profileImage: "https://i.postimg.cc/657pgSDn/Bjorn.jpg",
      tasks: ["Learn how to play a song", "Chords", "Guitars"],
    },
    {
      id: "3",
      name: "Creatine",
      category: "Nutrition",
      image: "https://i.postimg.cc/CK0MZKds/Creatine.jpg",
      profileName: "Emil Edmar",
      profileImage: "https://i.postimg.cc/NFFjgPLh/Emil.jpg",
      tasks: ["How to supplement", "Research", "Creatine for athletes"],
    },
    {
      id: "4",
      name: "Whiskey Sour",
      category: "Coctails",
      image: "https://i.postimg.cc/m26FF7GN/Whiskey.jpg",
      profileName: "David Kringlund",
      profileImage: "https://i.postimg.cc/CMrKvY6w/David.jpg",
      tasks: ["The perfect Whiskey Sour", "Ingredients", "Whiskey"],
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
