// 0-promise.js

export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      const data = { message: "API response data" };
      resolve(data); // Resolve the promise with the API response data
    }, 1000);
  });
}
