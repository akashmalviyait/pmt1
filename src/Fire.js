import firebase from 'firebase'

// const config = {
//         apiKey: "AIzaSyDmgiC0Wg3OWN9vaaKhShwBgSARzom2pGI",
//         authDomain: "forex-48c83.firebaseapp.com",
//         databaseURL: "https://forex-48c83.firebaseio.com",
//         projectId: "forex-48c83",
//         storageBucket: "forex-48c83.appspot.com",
//         messagingSenderId: "8821353145",
//         appId: "1:8821353145:web:e10d5a4a4932e491eb8968",
//         measurementId: "G-H4FW8ZTHBV"
  
// }

const config = {
        apiKey: "AIzaSyBf036mwEaUZtTi16KPcq0GIsd_ykNAPXo",
        authDomain: "paramountinfotechapp.firebaseapp.com",
        databaseURL: "https://paramountinfotechapp.firebaseio.com",
        projectId: "paramountinfotechapp",
        storageBucket: "paramountinfotechapp.appspot.com",
        messagingSenderId: "933646552643",
        appId: "1:933646552643:web:dea1e21d3e86b665e3cef6",
        measurementId: "G-CR1FWRVHT8"
      };

// class firebase{
//         constructor(){
//                 app.initializeApp(config)
//                 this.auth = app.auth
//                 this.db = app.firestore()
//         }

//         async register(name, email, password){
//                 await this.auth.createUser
//         }
// }

firebase.initializeApp(config);
export default firebase;