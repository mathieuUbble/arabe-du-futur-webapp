import * as React from "react";
const API_URL = "https://arabe-du-fur-new-api.herokuapp.com/";
// const API_URL = "";

export async function handleSubmitSignin(
  event: React.FormEvent<HTMLFormElement>,
  updateCookie: (newValue: string) => void
) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get("email");
  const password = data.get("password");
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
  });
  if (response.status !== 201) {
    console.log(response.status);
    return false;
  }
  const dataJSON = await response.json();
  updateCookie(dataJSON.token);
  return true;
}

export async function handleSubmitSignUp(
  event: React.FormEvent<HTMLFormElement>,
  updateCookie: (newValue: string) => void
) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = data.get("email");
  const password = data.get("password");
  const name = data.get("lastName");

  console.log({
    email: email,
    password: password,
    name: name,
  });
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password, name: name }),
  });
  if (response.status !== 201) {
    console.log(response.status);
    return false;
  }
  const dataJSON = await response.json();
  updateCookie(dataJSON.token);
  return true;
}

export async function getQuizz(
  value: string | null,
  navigate: (value: string) => void
) {
  const response = await fetch(`${API_URL}/user`, {
    method: "GET",
    headers: { "x-access-token": value !== null ? value : "value" },
  });
  if (response.status !== 200) {
    return true;
  }
  return false;
}
