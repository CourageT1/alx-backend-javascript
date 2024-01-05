// uploadPhoto.js

export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulate some processing logic
    // For simplicity, we'll reject the promise with an error
    // You can replace this with actual photo uploading logic
    if (Math.random() < 0.5) {
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    } else {
      // Resolve the promise if successful
      resolve(`Photo ${fileName} processed successfully`);
    }
  });
}
