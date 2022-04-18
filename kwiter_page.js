//YOUR FIREBASE LINKS
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBj_gWgZwtBeayFngdS_lmTiFtdfGPrOqs",
    authDomain: "kwitter-74078.firebaseapp.com",
    databaseURL: "https://kwitter-74078-default-rtdb.firebaseio.com",
    projectId: "kwitter-74078",
    storageBucket: "kwitter-74078.appspot.com",
    messagingSenderId: "246668479292",
    appId: "1:246668479292:web:293c1025a3e04e29a16c39",
    measurementId: "G-WZH1JC8FB1"
  };
   firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    })
    document.getElementById("msg").value = "";
}

function logOut(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location = "kwitter.html"
}
