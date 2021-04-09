
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCSCyJXHfWmj17GMAI_7Qv2LjmcExCkfxo",
      authDomain: "coronavirus-rbxi.firebaseapp.com",
      databaseURL: "https://coronavirus-rbxi-default-rtdb.firebaseio.com",
      projectId: "coronavirus-rbxi",
      storageBucket: "coronavirus-rbxi.appspot.com",
      messagingSenderId: "596515754697",
      appId: "1:596515754697:web:1319a0eb93eea102167318",
      measurementId: "G-B11HYW70QM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
