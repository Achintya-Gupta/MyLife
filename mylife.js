
var user_name = document.getElementById("user_name")


function  addRoom(){
  room_name = document.getElementById("room_name").value
  firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
  localStorage.setItem("room name" , room_name)
   window.location = "Mylife_page.html";
  }
 

  var firebaseConfig = {
    apiKey: "AIzaSyCB4dyfuN8zPKf7djGWYa7mFgBIqWUGT38",
    authDomain: "mylife-ea1a9.firebaseapp.com",
    projectId: "mylife-ea1a9",
    storageBucket: "mylife-ea1a9.appspot.com",
    messagingSenderId: "694833822348",
    appId: "1:694833822348:web:2fa14c1a85b89ff45e59a9",
    measurementId: "G-GH3FZZ9MT0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    firebase_message_id = childKey;
message_data = childData;

console.log(firebase_message_id)
console.log(firebase_data)
name =message_data['name']
like = message_data['like']
message = message_data['message']

name_with_tag = "<h4>" + name + "<img class='user_tick' src='hyt.jpg'></h4>"
message_with_tag = "<h4 class='message_h4'> " + message + "</h4>"
like_button =  "<button class = 'btn btn-warning' id=" + firebase_message_id +" value="+like+" onclick = 'updateLike(this.id)'>"
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like +"  </span> </button> <hr>"

row = name_with_tag + message_with_tag +like_button + span_with_tag; document.getElementById("output").innerHTML += row 
   console.log("room_name =  " + Room_names)
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHtml += row;  

   
   });});}
getData();

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
} 


if(document.getElementById("i1").value === null){
  document.getElementById("i1").innerHTML = "Name Is Required";
}


function redirectToRoomName(name){
  console.log(name)
  localStorage.setItem("room name" , name)
  window.location(Mylife_room.html)
}

function logout(){
localStorage.removeItem("room_name");
localStorage.removeItem("user_name");
window.location = "Mylife.html";
}

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref("room_name").push({
  name:user_name,
  message:msg,
  like:0
})
document.getElementById("msg").value = "";
}



function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes  
 });

}

