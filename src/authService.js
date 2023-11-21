import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from './views/components/firebasecofig';

const authService = {
  login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  },

  logout() {
    return signOut(auth);
  },

  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, (user) => {
      callback(user);
      // Additional logic to handle user information
      // You can modify this based on your actual Firebase user object structure
      
      if (user) {
        const userEmail = user.email || "";
        const userName = user.displayName || ""; // Assuming displayName is used for the user's name
        // You can do something with userEmail and userName, such as storing them in a component's data property
        // For example, you might want to emit an event or update a Vuex store
        // For simplicity, let's log them to the console for now
        console.log("User Email:", userEmail);
        console.log("User Name:", userName);
      } else {
        // User is not authenticated, you may want to reset or clear any user-related data
        console.log("User not authenticated");
      }
    });
  },
};

export default authService;
