// 1-promise.js

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous API call
    setTimeout(() => {
      if (success) {
        const response = { status: 200, body: 'Success' };
        resolve(response); // Resolve the promise with the success response
      } else {
        const error = new Error('The fake API is not working currently');
        reject(error); // Reject the promise with an error for failure
      }
    }, 1000);
  });
}
