// auth.js

window.onload = function () {
    const user = sessionStorage.getItem('user');
  
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
  
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
  
  // ✅ LocalStorage-based user handling
  function readUsersFromLocal() {
    const localUsers = localStorage.getItem('users');
    return localUsers ? JSON.parse(localUsers) : [];
  }
  
  function saveUsersToLocal(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
  
  async function readUsers() {
    const localUsers = readUsersFromLocal();
    if (localUsers.length > 0) return localUsers;
  
    try {
      const res = await fetch('users.json');
      return await res.json();
    } catch (err) {
      console.warn("Could not fetch users.json, falling back to empty list.");
      return [];
    }
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
  
  function signUp() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const users = readUsersFromLocal();
  
    if (users.find(u => u.username === username)) {
      document.getElementById('message').innerText = 'Username already exists.';
      return;
    }
  
    users.push({ username, password });
    saveUsersToLocal(users);
  
    document.getElementById('message').innerText = 'Sign up successful! You can now sign in.';
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
  