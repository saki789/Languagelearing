// Sample language course data
const courses = [
  { id: 1, title: "Course 1", lessons: ["Lesson 1", "Lesson 2", "Lesson 3"] },
  { id: 2, title: "Course 2", lessons: ["Lesson A", "Lesson B", "Lesson C"] },
  // Add more courses here
];

// Function to render the course list
function renderCourseList() {
  const courseList = document.querySelector(".course-list");
  courseList.innerHTML = "";
  courses.forEach(course => {
    const listItem = document.createElement("li");
    listItem.textContent = course.title;
    listItem.addEventListener("click", () => showCourseLessons(course));
    courseList.appendChild(listItem);
  });
}

// Function to display course lessons
function showCourseLessons(course) {
  const lessonsContainer = document.querySelector(".lessons-container");
  lessonsContainer.innerHTML = `<h2>${course.title}</h2><ul>${course.lessons.map(lesson => `<li>${lesson}</li>`).join("")}</ul>`;
}

// Function to initialize the app
function initApp() {
  renderCourseList();
}

// Call the initApp function to start the app
initApp();
