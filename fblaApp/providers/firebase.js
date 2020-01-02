
import firebase from './firebaseConfig';

class FirebaseAuthClass {

//returns the information about signed in user
    getAuth() {      
        return firebase.auth();
    }

//Sign-in existing users
    login(email, password) {      
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
//Sign-out logged in user
    logout() {    
        return firebase.auth().signOut();
    }

//Sign-up new user using email and password
    createAccount(email, password) {  
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    getUserID() {    
        return firebase.auth().currentUser.uid;
    }

    getUser() {   
        return firebase.auth().currentUser;
    }

    deleteAccount() {   
        return firebase.auth().currentUser.delete();
    }

    async reAuth(password){
        var credential = firebase.auth.EmailAuthProvider.credential(this.getUser().email, password);

        return await this.getUser().reauthenticateAndRetrieveDataWithCredential(credential)
        .then(() => {return true;})
        .catch(() => {return false;});
    }


}
export let FirebaseAuth = new FirebaseAuthClass;


