const botResponses = {
    "Manager Bot": {
        "start": "What is your query related to management?",
        "team coordination": "Effective team coordination requires clear goals and communication. Do you need tools or tips?",
        "project planning": "For project planning, consider Agile or Waterfall methodology. Do you need details on either?"
    },
    "HR Bot": {
        "start": "What HR-related help do you need?",
        "leave policy": "Our leave policy allows 20 annual leaves and 10 sick leaves. Would you like to apply for leave?",
        "payroll issues": "Payroll is processed on the 1st of every month. Are you facing a salary delay?"
    },
    "Support Bot": {
        "start": "What kind of support do you need?",
        "technical issue": "For technical issues, please describe the problem so we can assist you better.",
        "general inquiry": "For general inquiries, please specify your question."
    },
    "Company Info Bot": {
        "start": "What company information do you need?",
        "office location": "Our office is located at 123 Business St, Tech City, Country.",
        "company policies": "Our company policies cover workplace ethics, data security, and employee benefits."
    }
};

let currentBot = "";
let conversationState = "start";

function openChat(botName) {
    document.getElementById("chat-box").style.display = "block";
    document.getElementById("bot-name").innerText = botName;
    currentBot = botName;
    conversationState = "start";
    startChat(botName);
}

function closeChat() {
    document.getElementById("chat-box").style.display = "none";
}

function startChat(botName) {
    const chatBody = document.getElementById("chat-body");
    chatBody.innerHTML = `<p><strong>Bot:</strong> ${botResponses[botName]["start"]}</p>`;
}

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");
    let userMessage = inputField.value.trim().toLowerCase();

    if (userMessage === "") return;

    chatBody.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    inputField.value = "";

    // Check if bot has a predefined response
    let botReply = botResponses[currentBot][userMessage] || "I didn't understand that. Can you try again?";

    setTimeout(() => {
        chatBody.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}