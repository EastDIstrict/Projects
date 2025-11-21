document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const messageDiv = document.getElementById('message');
    
    if (!name || !email || !comment) {
        messageDiv.innerHTML = '<div class="message error">Пожалуйста, заполните все поля</div>';
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        messageDiv.innerHTML = '<div class="message error">Пожалуйста, введите корректный email</div>';
        return;
    }
    
    messageDiv.innerHTML = `
        <div class="message success" style="background-color: #e8f5e9; border: 1px solid #c8e6c9; padding: 15px; border-radius: 8px; font-size: 16px; color: #2e7d32;">
            Здравствуй, ${name}! Спасибо за твой комментарий: "${comment}". Мы свяжемся с тобой по адресу: ${email}
        </div>
    `;
    
    document.getElementById('messageForm').reset();
});