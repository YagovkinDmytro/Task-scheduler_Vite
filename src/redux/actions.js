// import { createAction } from "@reduxjs/toolkit";

// export const addTask = createAction("tasks/addTask", (text) => {
// return {
//   payload: {
//     id: crypto.randomUUID(),
//     completed: false,
//     text,
//   },
// };
// });

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export const setStatusFilter = createAction("filters/setStatusFilter");

///////////////////////////////////////////////////////////////////////////////

// Оголошення фабрик екшенів це рутинна задача де багато шаблонного коду,
// тому бібліотека Redux Toolkit надає нам допоміжну функцію createAction(type) яка спрощує цей процес.
// В якості аргументу вона приймає рядок який описує тип екшену та повертає функцію створення екшену (фабрику).

// Значення властивості type це рядок який передається при оголошенні фабрики.
// Значення властивості payload це значення аргументу що передається при виклику фабрики.

// console.log(toggleCompleted(1));
// // { type: "tasks/toggleCompleted", payload: 1 }

// console.log(setStatusFilter("hello"));
// // { type: "filters/setStatusFilter", payload: "hello" }

// Action Factories

// export const addTask = (newTask) => {
//   return {
//     type: "tasks/addTask",
//     payload: newTask,
//   };
// };

// export const deleteTask = (taskId) => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = (taskId) => {
//   return {
//     type: "tasks/toggleCompleted",
//     payload: taskId,
//   };
// };

// export const setStatusFilter = (value) => {
//   return {
//     type: "filters/setStatusFilter",
//     payload: value,
//   };
// };
