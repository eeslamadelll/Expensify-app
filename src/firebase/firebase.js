import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};


///////////////// Generating an array based data from the provided object.
///////////////// using functions like forEach on snapshot
// firebase.database().ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

///////////////// Exploring other events provided to on()
// firebase.database().ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// firebase.database().ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// firebase.database().ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

///////////////// Manipulating the behavior of the object
///////////////// to get working with lists each item has a unique identifier
///////////////// This idendifier generated with push()
///////////////// which taking an obj and give it a unique id
// firebase.database().ref('expenses').push({
//   description: "Rent",
//   note: "this is a note",
//   amount: 9500,
//   createdAt: 94584093580493
// });

// firebase.database().ref('expenses').push({
//   description: "Shopping",
//   note: "this is a note",
//   amount: 9500,
//   createdAt: 94584093580493
// });

// firebase.database().ref('expenses').push({
//   description: "Cofee",
//   note: "this is a note",
//   amount: 9500,
//   createdAt: 94584093580493
// });

///////////////// Reading data and Making the subscribe to lestin on data while changing
// firebase.database().ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//   console.log('Error fetching data ', e);
// });

// setTimeout(() => {
//   firebase.database().ref('job/company').set('Google');
// }, 20000);


///////////////// Reading the whole data once
// firebase.database().ref('location/city').once('value').then((snapshot) => {
//   console.log(snapshot.val());
// }).catch((e) => {
//   console.log('Error fetching data', e);
// });


///////////////// setting data to firebase
// firebase.database().ref().set({
//   name: "Eslam Adel",
//   age: 25,
//   isFat: false,
//   exp: 3,
//   job: {
//     title: "Software developer",
//     company: "CodeBlocks"
//   },
//   location: {
//     city: "Zagazig",
//     country: "Egypt"
//   }
// }).then(() => {
//   console.log('Data Saved...');
// }).catch((e) => {
//   console.log('Data Failed: ', e);
// });


///////////////// Removing a specific peice of data from the object
// // firebase.database().ref('isFat').remove().then(() => {
// //   console.log('removed');
// // }).catch((e) => {
// //   console.log('Error: ', e);
// // });


///////////////// Updating data
// firebase.database().ref().update({
//   name: "Eslam Adel Abdelrahman",
//   age: 30,
//   isFat: null,
//   exp: 8,
//   'job/title': "Software team-leader",
//   'job/company': "DevHouse",
//   'location/city': "Cairo",
//   'location/country': "Egypt."
// }).then(() => {
//   console.log('records updated');
// }).catch((e) => {
//   console.log('Error: ', e);
// });


///////////////// Was tweaking around the data 
// // firebase.database().ref('name').set('Eslam Adel Abdelrahman');
// // firebase.database().ref('location/city').set('Cairo');

// // firebase.database().ref('attr').set({
// //   height: 183,
// //   weight: 85
// // }).then(() => {
// //   console.log('Data Saved..');
// // }, (e) => {
// //   console.log('Failed :', e);
// // });