const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.createNewUser = functions.auth.user().onCreate(event => {
    const user = event.data;
    console.log('Creating data for user', user);
    const userData = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber
    };

    const firestore = admin.firestore();
    return firestore.collection('users').doc(user.uid).set(userData);
})