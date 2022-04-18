
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}