webSocket = new WebSocket("ws://localhost:8880");
webSocket.onmessage = function(message){
  console.log(message.data);
}



/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "150px";
}
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "100px";
    document.getElementById("main").style.marginLeft = "0px";
}