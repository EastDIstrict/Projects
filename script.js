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
    
    messageDiv.innerHTML = '<div class="message success">Сообщение успешно отправлено!</div>';
    
    document.getElementById('messageForm').reset();
    
    setTimeout(() => {
        messageDiv.innerHTML = '';
    }, 3000);
});