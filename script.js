function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    var chatBox = document.getElementById("chat-box");

    // Display user message
    var userMessage = document.createElement("div");
    userMessage.className = "chat-message user-message";
    userMessage.innerHTML = userInput;
    chatBox.appendChild(userMessage);

    // Simulate bot response (replace with actual bot logic)
    var botMessage = document.createElement("div");
    botMessage.className = "chat-message bot-message";
    botMessage.innerHTML = "I'm just a demo bot. Replace me with real AI!";
    chatBox.appendChild(botMessage);

    // Clear user input
    document.getElementById("user-input").value = "";
}
