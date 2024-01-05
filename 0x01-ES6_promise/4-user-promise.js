// signUpUser.js

function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    const userObject = {
      firstName: firstName,
      lastName: lastName,
    };
    resolve(userObject);
  });
}

export default signUpUser;
