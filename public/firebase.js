import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDGoEywhEpgrZ84aw_jTWM-kQQXl3ieJ6M',
  authDomain: 'attendance-app-2021.firebaseapp.com',
  projectId: 'attendance-app-2021',
  storageBucket: 'attendance-app-2021.appspot.com',
  messagingSenderId: '1084433436934',
  appId: '1:1084433436934:web:fc3a3d86e8dc59bf2f0e87',
}

const fireDB = firebase.initializeApp(firebaseConfig)
export default fireDB
