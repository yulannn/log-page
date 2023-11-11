document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
  
    // Utilisateur factice pour démo (remplacez cela par une vérification côté serveur)
    const fakeUser = {
      username: 'demo',
      password: 'demo123',
    };
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const usernameInput = document.querySelector('input[name="Username"]');
      const passwordInput = document.querySelector('input[name="Password"]');
      const rememberCheckbox = document.querySelector('.checkbox');
  
      const enteredUsername = usernameInput.value;
      const enteredPassword = passwordInput.value;
  
      // Vérification basique des informations d'identification
      if (enteredUsername === fakeUser.username && enteredPassword === fakeUser.password) {
        alert('Login successful!');
  
        // Enregistrez la session dans le stockage local si la case "Remember me" est cochée
        if (rememberCheckbox.checked) {
          localStorage.setItem('loggedInUser', JSON.stringify(fakeUser));
        }
  
        // Redirection ou autres actions nécessaires après la connexion réussie
      } else {
        alert('Invalid username or password');
      }
    });
  
    // Vérifier s'il existe une session active dans le stockage local
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      // Redirection ou autres actions nécessaires pour une session active
      console.log('User is already logged in:', JSON.parse(storedUser));
    }
  });
  