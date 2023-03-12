import { BASE_URL } from "../constants";
import { apiServiceHandler } from "./api";

export const getEmployees = () => {
  return apiServiceHandler(`${BASE_URL}employees`);
};

export const getEmployee = (id) => {
  return apiServiceHandler(
    `${BASE_URL}employees/${id}`
  );
};

export const addEmployee = (employee) => {
  return apiServiceHandler(`${BASE_URL}employees`, {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const editEmployee = (id, updatedEmployee) => {
  return apiServiceHandler(
    `${BASE_URL}employees/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(updatedEmployee),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteEmployee = (id) => {
  return apiServiceHandler(
    `${BASE_URL}employees/${id}`,
    {
      method: "DELETE",
    }
  );
};