// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIzygzrrkjyGlpUXiTBhOCpv2VLz6oaKM',
  authDomain: 'insta-clone-df87a.firebaseapp.com',
  projectId: 'insta-clone-df87a',
  storageBucket: 'insta-clone-df87a.appspot.com',
  messagingSenderId: '1061915183934',
  appId: '1:1061915183934:web:2df31f579fe4c065973a6f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
