// asyncFunctions.js
import { uploadPhoto, createUser } from "./utils.js";

export async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return {
      photo,
      user,
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      photo: null,
      user: null,
    };
  }
}
