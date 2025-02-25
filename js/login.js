document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

       
        if (!username || !password) {
            errorMessage.textContent = 'Username dan password tidak boleh kosong!';
            return;
        }

        try {
            
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const result = await response.json();

            if (response.ok) {
                alert('Login berhasil!');
                
                window.location.href = '/dashboard.html';
            } else {
                
                errorMessage.textContent = result.message || 'Login gagal!';
            }
        } catch (err) {
            console.error('Error:', err);
            errorMessage.textContent = 'Terjadi kesalahan, coba lagi.';
        }
    });
});
