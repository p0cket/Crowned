// pageID = 45123134;
// i = pageID;
// var pageContent = [];
//
// pageContent[45123134] = {
//   thisName: "This is what you'll look like",
//   thisImage: "http://i.imgur.com/8Olvbjv.jpg",
// }
//
// function getPost(i) {
//   document.getElementById("text-spot").innerHTML = pageContent[i].thisName;
//   document.getElementById("img-spot").src = pageContent[i].thisImage;
// }
//
// // function sendNewPostToServer(textSpot, imgSpot) {
// //   // next line encodes images so that theres no issues
// //   var imgSpot = encodeURIComponent(imgSpot);
// //   var xhr = new XMLHttpRequest();
// //   xhr.open("POST", '/posting/' + textSpot + "/" + imgSpot, true);
// //   xhr.onreadystatechange = function() {
// //     if(xhr.readyState === 4) {
// //       // RESPONSE
// //       var resp = xhr.responseText;
// //       alert(resp);
// //       // manipulation of response
// //       var results = resp.split(":");
// //       var text = results[0];
// //       var image = results[1];
// //       console.log(text);
// //       console.log(image);
// //     }
// //   }
// //   xhr.send();
// // }
//
// window.onload = function() {
//   getPost(pageID);
// }
