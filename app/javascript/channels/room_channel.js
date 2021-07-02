import consumer from "./consumer"

document.addEventListener("turbolinks:load", () => {
  const room_element = document.getElementById("room-id")
  const room_id = Number(room_element.getAttribute("data-room-id"))
  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id}, {
    connected() {
      console.log("connected to " + room_id)
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      console.log(data)
      const user_element = document.getElementById("user-id")
      const user_id = Number(user_element.getAttribute("data-user-id"))
      let html;
      if(user_id === data.message.user_id){
        html = data.mine  
        console.log("yes")
      }else{
        html = data.theirs
        console.log("no")
      }
      console.log("user_id", user_id)
      const messageContainer = document.getElementById("messages")
      messageContainer.innerHTML = messageContainer.innerHTML + html 
    }
  });
})

