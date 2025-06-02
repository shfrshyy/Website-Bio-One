console.log("Website Bio One telah dibuat oleh kelompok 3!");
// Proteksi akses halaman 'about'
if (window.location.pathname.includes("about.html")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

// Fungsi login
function handleLogin(event) {
  event.preventDefault();
  localStorage.setItem("loggedIn", "true");
  window.location.href = "about.html";
  return false;
}

// Fungsi register
function handleRegister(event) {
  event.preventDefault();
  localStorage.setItem("loggedIn", "true");
  window.location.href = "about.html";
  return false;
}
<script>
  // Cek apakah user sudah login, kalau belum redirect
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }

  // Fungsi logout
  function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user"); // kalau kamu simpan nama user juga
    window.location.href = "login.html";
  }

  // Sembunyikan tombol logout jika belum login
  window.onload = function() {
    if (!isLoggedIn) {
      const logoutBtn = document.getElementById("logoutBtn");
      if (logoutBtn) logoutBtn.style.display = "none";
    }
    const loginWithGoogle = () => {
  const googleLoginUrl =
    "https://accounts.google.com/o/oauth2/v2/auth?" +
    "client_id=76934902395-26iqn3urk6tooo6a5g3kto033ake21vr.apps.googleusercontent.com" +
    "&redirect_uri=https://shfrshyy.github.io/Website-Bio-One/login.html" + // HARUS persis sama
    "&response_type=token" +
    "&scope=email%20profile";

  window.location.href = googleLoginUrl;
};

  };
</script>
</body>
</html>

