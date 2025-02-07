To-Do-List

Overview

The ToDo List App enables users to manage tasks seamlessly through React.

Input

Users enter task descriptions into a text field and click "Add Task" to add them to the list. Each task in the list includes a "Delete" button for removal

Process

The App component uses React's useState hook to manage the task list state, adding new tasks via the handleAddTask function and removing tasks through handleDeleteTask. The app is composed of three primary components: App, which oversees state and functionality; AddTask, which handles user input and task submission; and TaskList, which displays the tasks and provides deletion functionality.

Output

The app renders a user-friendly interface, displaying tasks in the center of the webpage. Each task is presented with a checkbox and a delete button for efficient task management. The application uses CSS to ensure a clean and visually appealing layout.