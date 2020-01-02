import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: 'AIzaSyAxqvsK6DPNqICFVdIGnpn0f1Ee-zCwcWI',
    authDomain:'fblamobileapp2020.firebaseapp.com',
    databaseURL: "https://fblamobileapp2020.firebaseio.com",    
//  projectId: "YOUR_PROJECT_ID",
//  storageBucket: "YOUR_STORAGE_BUCKET",
//  messagingSenderId: "YOUR_MESSAGING_ID"
};
//firebase.initializeApp(config);

//firebase.firestore().settings(settings);
if (!firebase.apps.length) 
    { 
        firebase.initializeApp(config);
        //firebase.firestore().settings(settings);
    } 
else
    {
        firebase.app()                    ;
    }   
export default firebase;
