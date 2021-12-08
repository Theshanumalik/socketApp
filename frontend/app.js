const socket = io();

const form = document.getElementById('chat-form');
const myMsg = document.getElementById('my-message');
const chatContainer = document.getElementById('chat-container');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (myMsg.value) {
        socket.emit('chat message', myMsg.value);
        chatbox = document.createElement('div');
        chatbox.setAttribute('class', 'd-flex justify-content-end')
        chatbox.innerHTML = `<span class="py-2 px-2 bg-primary text-white rounded my-2">${myMsg.value}</span>`;
        chatContainer.appendChild(chatbox);
        console.log(chatbox)
        myMsg.value = '';
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
})


socket.on('chat message', function(msg) {
    console.log(msg)
});


socket.on('user-connected', function(msg) {
    chatbox = document.createElement('div');
    chatbox.setAttribute('class', 'd-flex justify-content-start')
    chatbox.innerHTML = `<span class="py-2 px-2 bg-secondary text-white rounded my-2">${msg}</span>`;
    chatContainer.appendChild(chatbox)
    console.log(chatbox)
    console.log(msg)
    chatContainer.scrollTop = chatContainer.scrollHeight;
});
socket.on('messege', function(msg) {
    chatbox = document.createElement('div');
    chatbox.setAttribute('class', 'd-flex justify-content-start')
    chatbox.innerHTML = `<span class="py-2 px-2 bg-secondary text-white rounded my-2">${msg}</span>`;
    chatContainer.appendChild(chatbox)
    console.log(chatbox)
    console.log(msg)
    chatContainer.scrollTop = chatContainer.scrollHeight;
});