import { createAction } from "@reduxjs/toolkit";

// export const addTask = (newTask) => {
//   return {
//     type: "task/addTask",
//     payload: newTask,
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "task/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: "task/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "task/setStatusFilter",
//     payload: value,
//   };
// };

// 2. Створюємо фабрики екшенів
export const addTask = createAction("tasks/addTask");

export const deleteTask = createAction("tasks/deleteTask");

export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter");
