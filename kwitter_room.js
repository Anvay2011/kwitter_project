var firebaseConfig = {
      apiKey: "AIzaSyBg_deDKOMqyo-Mq2q7PbCBepkOSItCmIY",
      authDomain: "kwitter-project-e3e2f.firebaseapp.com",
      databaseURL: "https://kwitter-project-e3e2f-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-e3e2f",
      storageBucket: "kwitter-project-e3e2f.appspot.com",
      messagingSenderId: "763138139002",
      appId: "1:763138139002:web:cf23eb9ed7c46e6bf8ecc3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
