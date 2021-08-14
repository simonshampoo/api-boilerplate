import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAllUsers = (request, response) => {
  response.send(users);
};

export const postUser = (request, response) => {
  const user = request.body;
  users.push({ ...user, id: uuidv4() });
  response.send(
    `We used the POST method to add ${user.firstName} with id ${user.id} to our mock database.`
  );
};

export const getSpecificUser = (request, response) => {
  const { id } = request.params;
  const foundUser = users.find((user) => user.id === id);
  response.send(foundUser);
};

export const deleteUser = (request, response) => {
  const { id } = request.params;
  users = users.filter((user) => user.id !== id);
  response.send(`User with id ${id} has been deleted from the database.`);
};

export const patchUser = (request, response) => {
  const { id } = request.params;
  const { firstName, lastName, age } = request.body;
  const userToBeUpdated = users.find((user) => user.id === id);

  if (userToBeUpdated && firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (userToBeUpdated && lastName) {
    userToBeUpdated.lastName = lastName;
  }
  if (userToBeUpdated && id) {
    userToBeUpdated.age = age;
  }
  response.send(`User with user id ${id} has been updated`);
};
