import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAiNtos1vEc7WXXkLGdzBe6Yzu7B7VZegM",
  authDomain: "todo-a7ed3.firebaseapp.com",
  projectId: "todo-a7ed3",
  storageBucket: "todo-a7ed3.firebasestorage.app",
  messagingSenderId: "121555032973",
  appId: "1:121555032973:web:ac782fd18b71bfa262bbc4",
  measurementId: "G-T39V0ECH2N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
