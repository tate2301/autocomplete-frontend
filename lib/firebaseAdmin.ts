import * as firebaseAdmin from 'firebase-admin'

import serviceAccount from './secrets/firebase.json'

if (!firebaseAdmin.apps.length) {
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert({
            ...serviceAccount,
            privateKey: process.env.FIREBASE_PRIVATE_KEY,
        },),
    })
}

export { firebaseAdmin }