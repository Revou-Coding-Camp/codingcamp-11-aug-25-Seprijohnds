console.log("Script Loaded");

WelcomeSpeech();

function WelcomeSpeech() {
    let userName = prompt('Please enter your name:');
    if (userName != "") {
        document.getElementById('user-greeting').textContent = userName;
    }
}

function sendMessage() {
    let message = document.getElementById('user-message').value;
    if (message != '') {
        alert("Message sent: " + message);
    } else {
        alert("Please enter a message before sending.");
    }
}

function sendMessage() {
    const messageInput = document.getElementById('user-message');
    const responseDiv = document.getElementById('message-response');
                
        if (messageInput.value.trim() !== '') {
            responseDiv.innerHTML = ``;
            messageInput.value = '';
        }
}

const fullscreenIconContainer = document.getElementById('fullscreenIconContainer');

fullscreenIconContainer.addEventListener('click', () => {
  if (document.fullscreenElement) {
    // If already in fullscreen, exit fullscreen
    document.exitFullscreen();
  } else {
    // Request fullscreen for the container
    fullscreenIconContainer.requestFullscreen().catch(err => {
      console.error(`Error attempting to enable fullscreen: ${err.message} (${err.name})`);
    });
  }
});