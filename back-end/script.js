document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".like-btn");
    const commentButtons = document.querySelectorAll(".comment-btn");
    const sendButtons = document.querySelectorAll(".comment-box .btn");
  
    // === Função de Like ===
    likeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        let liked = btn.classList.toggle("liked");
        let text = btn.textContent.match(/\d+/); // número atual de likes
        let count = text ? parseInt(text[0]) : 0;
        count = liked ? count + 1 : count - 1;
        btn.innerHTML = `❤️ ${count}`;
      });
    });
  
    // === Mostrar/ocultar caixa de comentário ===
    commentButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const log = btn.closest(".log");
        const commentBox = log.querySelector(".comment-box");
        commentBox.classList.toggle("visible");
      });
    });
  
    // === Enviar comentário ===
    sendButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const commentBox = btn.closest(".comment-box");
        const input = commentBox.querySelector("input[type='text']");
        const log = btn.closest(".log");
        const text = input.value.trim();
  
        if (text === "") return alert("Digite um comentário!");
  
        // cria o comentário
        const newComment = document.createElement("p");
        newComment.textContent = text;
        newComment.classList.add("user-comment");
  
        // adiciona no final do log
        log.appendChild(newComment);
  
        // limpa o campo
        input.value = "";
      });
    });
  });
  