import firebase from "firebase/app"
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  }

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => { //child_added will run once first for all the existing data in the reference
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').once('value')
// .then((snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'Roku streaming stick +',
//     amount: 4600,
//     createdAt: 13596516584684
// })

// 
// database.ref('notes').push({ //the push method will add an entry to de DB with a unique ID at its root
//     title: 'Course topics',
//     body: 'node, react, js, python, redux, firebase'
// })

 
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     })

// database.ref().set({
//     name: 'Leon Gonzalez',
//     age: 32,
//     location: {
//         city: 'Medellin',
//         country: 'Colombia'
//     },
//     isSingle: false
// }).then(() => {
//     console.log('User created!')
// }).catch((e) => {
//     console.log(e)
// })


// database.ref().update({
//     name: 'Esteban Rivera',
//     age: 33,
//     job: 'Wannabe something',
//     isSingle: null,
//     'location/city': 'Envigado'
// }).then(() => {
//     console.log('Data updated!')
// }).catch((e) => {
//     console.log(e)
// })
// database.ref('age')
//     .set(null)

// database.ref('location').remove().then(()=> {
//     console.log('location reference removed')
// }).catch((e) => {
//     console.log('This went wrong:',e)
// })