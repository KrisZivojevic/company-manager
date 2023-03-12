import { BASE_URL } from "../constants";
import { apiServiceHandler } from "./api";

export const getTasks = () => {
  return apiServiceHandler(`${BASE_URL}tasks`);
};

export const getTask = (id) => {
  return apiServiceHandler(
    `${BASE_URL}tasks/${id}`
  );
};

export const addTask = (task) => {
  return apiServiceHandler(`${BASE_URL}tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const editTask = (id, updatedTask) => {
  return apiServiceHandler(
    `${BASE_URL}tasks/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(updatedTask),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteTask = (id) => {
  return apiServiceHandler(
    `${BASE_URL}tasks/${id}`,
    {
      method: "DELETE",
    }
  );
};