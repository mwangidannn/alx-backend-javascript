import { uploadPhoto, createUser } from "./utils.js";

async function asyncUploadUser() {
    try {
        const photoResponse = await uploadPhoto();
        const userResponse = await createUser();
        
        return {
            photo: photoResponse,
            user: userResponse
        };
    } catch (error) {
        // Handle error if any of the async functions fail
        console.error("Error:", error);
        return {}; // Return empty object
    }
}

export default asyncUploadUser;
