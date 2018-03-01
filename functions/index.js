const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.createNewUser = functions.auth.user().onCreate(event => {
    const user = event.data;
    const userData = {
        id: user.uid,
        name: user.displayName || null,
        email: user.email || null,
        avatar: user.photoURL || null,
        phoneNumber: user.phoneNumber || null
    };

    console.log('Creating data for user', userData);

    const firestore = admin.firestore();
    return firestore.collection('users').doc(user.uid).set(userData);
})