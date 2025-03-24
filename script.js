// 🎶 播放生日歌
function playMusic() {
    var music = document.getElementById("music");
    music.play();
}

// ❤️ 点赞功能
document.getElementById("like-btn").addEventListener("click", function() {
    var count = document.getElementById("like-count");
    count.textContent = parseInt(count.textContent) + 1;
});

// 🎆 发送弹幕
document.getElementById("danmu-btn").addEventListener("click", function() {
    var danmuContainer = document.getElementById("danmu-container");
    danmuContainer.style.display = (danmuContainer.style.display === "none" || danmuContainer.style.display === "") ? "block" : "none"; // 切换显示和隐藏

    var input = document.getElementById("danmu-input");
    var text = input.value.trim();
    if (text === "") return;

    var danmu = document.createElement("div");
    danmu.className = "danmu";
    danmu.textContent = text;
    danmuContainer.appendChild(danmu);

    input.value = "";
    setTimeout(() => danmu.remove(), 5000);
});

// 💬 在线聊天室
document.getElementById("chat-toggle").addEventListener("click", function() {
    var chatBox = document.getElementById("chat-box-container");
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
});

document.getElementById("chat-send").addEventListener("click", function() {
    var input = document.getElementById("chat-input");
    var message = input.value.trim();
    if (message === "") return;

    var chatBox = document.getElementById("chat-box");
    var msg = document.createElement("div");
    msg.textContent = message;
    chatBox.appendChild(msg);

    input.value = "";
});
