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
        {
          title: "Strategies",
          video: "https://www.youtube.com/watch?v=uAk-S8y48Yg",
          description: [
            "Rules in fotball",
            "Formations in fotball",
            "Offense and defense in fotball",
          ],
        },
        { title: "Football all around the world" },
        { title: "Kick the ball" },
        { title: "Dribbling" },
        { title: "Shots" },
        { title: "Penalties" },
        { title: "How to react" },
        { title: "Keeping it simple" },
        { title: "Gameplan" },
        { title: "How to score goals" },
        { title: "Listen to the pro: Eric Cantona" },
        { title: "Listen to the pro: Paul Gascoigne" },
      ],
      courseDescriptionText:
        "In this course you will learn everything there is to know about fotball. You start of with strategies to learn the basics of fotball. You will learn the rules and the consequences.",
      // courseVideoInfo: [
      //   { title: "Rules in fotball"},
      //   { title: "Formations in fotball"},
      //   { title: "Offense and defense in fotball"}
      // ]
    },
    {
      id: "2",
      name: "Master the acustic Guitar",
      category: "Music",
      image: "https://i.postimg.cc/bwkNNnYv/Guitar.jpg",
      profileName: "Bjorn Mansson",
      profileImage: "https://i.postimg.cc/657pgSDn/Bjorn.jpg",
      tasks: [
        { title: "Learn how to play a song" },
        { title: "Chords" },
        { title: "Guitars" },
      ],
      courseDescriptionText: "You will learn how to play the acustic guitar.",
      courseVideoInfo: [
        { title: "How to hold the guitarr" },
        { title: "Play the melody" },
        { title: "Tempo your song" },
      ],
    },
    {
      id: "3",
      name: "Creatine",
      category: "Nutrition",
      image: "https://i.postimg.cc/CK0MZKds/Creatine.jpg",
      profileName: "Emil Edmar",
      profileImage: "https://i.postimg.cc/NFFjgPLh/Emil.jpg",
      tasks: [
        { title: "How to supplement" },
        { title: "Research" },
        { title: "Creatine for athletes" },
      ],
      courseDescriptionText:
        "Creatine is probably on of the best supplement to take. It enhances both strength and cognitive ability.",
      courseVideoInfo: [
        { title: "Amounts" },
        { title: "The daily" },
        { title: "Tempo your song" },
      ],
    },
    {
      id: "4",
      name: "Whiskey Sour",
      category: "Coctails",
      image: "https://i.postimg.cc/m26FF7GN/Whiskey.jpg",
      profileName: "David Kringlund",
      profileImage: "https://i.postimg.cc/CMrKvY6w/David.jpg",
      tasks: [
        { title: "The perfect Whiskey Sour" },
        { title: "Ingredients" },
        { title: "Whiskey" },
      ],
      courseDescriptionText: "Learn how to make the perfect whiskey Sour.",
      courseVideoInfo: [{ title: "" }],
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
