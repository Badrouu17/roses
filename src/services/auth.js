import Axios from "axios";

export async function callAuth(data, type) {
  try {
    const response = await Axios.post(
      `https://roses-api.herokuapp.com/api/v1/auth/${type}`,
      data
    );
    return response;
  } catch (error) {
    return { error, isError: true };
  }
}

export async function signUp(data) {
  return await callAuth(data, "signup");
}

export async function login(data) {
  return await callAuth(data, "login");
}

export function storeTheUser(data, token = null) {
  if (token) {
    localStorage.setItem("token", token);
  }
  localStorage.setItem("user", JSON.stringify(data));
}

export function getTheUserFromStorage() {
  return JSON.parse(localStorage.getItem("user"));
}

export function getTheTokenFromStorage() {
  return localStorage.getItem("token");
}

export function deleteTheUserAndTokenFromStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
