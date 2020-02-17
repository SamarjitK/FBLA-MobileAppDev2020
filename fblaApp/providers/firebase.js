
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


export class FirebaseDataClass {

  //Creates a new profile for Member
  createMemberProfile(name, email, grade, chapterName, shirtSize) {
    var userProfile = {
      name: name,
      email: email,
      grade: grade,
      chapterName: chapterName,
      shirtSize: shirtSize
    }

    try{
        var ref = firebase.database().ref(`members/${firebase.auth().currentUser.uid}`);
        ref.child('Profile').set(null);
        ref.child('Profile').push(userProfile);
        global.userProfile = userProfile;
        return true;
    }
    catch(e)
    {
       // alert(e.message);
        console.log("createMemberProfile:", e)
        return false;
    }
  }

  //Gets profile details of Member
  getMemberProfile() {
    try{
        var ref = firebase.database().ref(`members/${firebase.auth().currentUser.uid}`);
          ref.child('Profile').on('value', (snap) => {
                  snap.forEach((child) => {
                      var userProfile = {
                        name: child.val().name,
                        email: child.val().email,
                        grade: child.val().grade,
                        chapterName: child.val().chapterName,
                        shirtSize: child.val().shirtSize
                    };
                    global.userProfile = userProfile;
                    return userProfile;
                  });
        });
    }
    catch(e)
    {
        //alert(e.message);
        console.log("getTesterUserProfile:", e)
        return null;
    }
  }

  signUpForEvent(name)
  {
    var eventProfile = {
      eventName: name
    }

    try{
        var ref = firebase.database().ref(`members/${firebase.auth().currentUser.uid}`);
        ref.child('Events').push(eventProfile);
        return true;
    }
    catch(e)
    {
       // alert(e.message);
        console.log("signUpForEvent:", e)
        return false;
    }
  }

  getListOfRegisteredEventsForCurrentMember()
  {
    var ref = firebase.database().ref(`members/${firebase.auth().currentUser.uid}`);
    ref.child('Events').on('value', (snap) => {
    let events = [];
      snap.forEach((child) => {
        events.push({
          eventName: name
        });
      });
      global.memberEvents = events;
      return events;
    });
  }
}

/*updateEvents()
{

  try
  {
      var ref = firebase.database().ref(`members/${firebase.auth().currentUser.uid}`);
      ref.child('Events').set(null);
      for (var i=0; i < global.memberEvents.length; i++)
      {
        var eventProfile = {eventName: global.memberEvents[i]}
        ref.child('Events').push(eventProfile);
      }
      return true;
  }
  catch(e)
  {
     // alert(e.message);
      console.log("updateEvents:", e)
      return false;
  }
}
*/

export let FirebaseData = new FirebaseDataClass;
