const firebaseConfig = {
    apiKey: "AIzaSyDF4lF8hP7cWPzK0hV9NJ8Nf-E-QzcajDc",
    authDomain: "kwitter-dd3c6.firebaseapp.com",
    databaseURL: "https://kwitter-dd3c6-default-rtdb.firebaseio.com",
    projectId: "kwitter-dd3c6",
    storageBucket: "kwitter-dd3c6.appspot.com",
    messagingSenderId: "407714668383",
    appId: "1:407714668383:web:a5e33a94286ca97651a0ea",
    measurementId: "G-CV4Y8KZ1DV"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id = " +Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row; 
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschat_page.html"
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}