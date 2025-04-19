// auth.js

// Auto-hide form if already signed in
window.onload = function () {
    const user = sessionStorage.getItem('user');
  
    // Always hide modal on load
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
  
    // Toggle button visibility
    const loginLink = document.getElementById('loginLink');
    const logoutLink = document.getElementById('logoutLink');
  
    if (user) {
      if (loginLink) loginLink.style.display = 'none';
      if (logoutLink) logoutLink.style.display = 'inline-block';
  
      const box = document.querySelector('.box');
      if (box) {
        box.innerHTML = `<h2>Welcome, ${user}</h2><button onclick="logout()">Logout</button>`;
      }
    } else {
      if (loginLink) loginLink.style.display = 'inline-block';
      if (logoutLink) logoutLink.style.display = 'none';
    }
  };
  
  
  async function readUsers() {
    const res = await fetch('users.json');
    return await res.json();
  }
  
  async function signIn() {
    const username = document.getElementById('signin-username').value;
    const password = document.getElementById('signin-password').value;
    const users = await readUsers();
  
    const match = users.find(u => u.username === username && u.password === password);
    if (match) {
      sessionStorage.setItem('user', username);
      document.getElementById('message').innerText = `Welcome back, ${username}! Redirecting...`;
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      document.getElementById('message').innerText = 'Invalid credentials.';
    }
  }
  
  async function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const users = await readUsers();
  
    if (users.find(u => u.username === username)) {
      document.getElementById('message').innerText = 'Username already exists.';
      return;
    }
  
    document.getElementById('message').innerText = 'Sign up successful! But changes will not be saved. Add the user manually to users.json.';
  }
  
  function logout() {
    sessionStorage.removeItem('user');
    window.location.reload();
  }

  function openAuthPopup() {
    document.getElementById('authModal').style.display = 'flex';
  }
  
  function closeAuthPopup() {
    document.getElementById('authModal').style.display = 'none';
  }
  