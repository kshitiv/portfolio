/* ============================================================
   HOME PAGE CLICK: change brightness
   ============================================================ */
document.addEventListener('click', () => {
  if (document.body.id === 'homeBody') {
    const current = document.body.style.filter;
    document.body.style.filter =
      current === "brightness(0.85)" ? "brightness(1)" : "brightness(0.85)";
  }
});

/* ============================================================
   AUTO-LOAD GITHUB PROJECTS
   ============================================================ */
(function loadProjects(){
  const USER = "kshitiv";
  const container = document.getElementById("projectsContainer");
  if (!container) return;

  fetch(`https://api.github.com/users/${USER}/repos?sort=updated`)
    .then(r => r.json())
    .then(repos => {
      container.innerHTML = repos.map(repo => `
        <div class="project-card">
          <img class="project-img" src="https://opengraph.githubassets.com/1/${USER}/${repo.name}">
          <h3>${repo.name}</h3>
          <p>${repo.description || ""}</p>
          <p><a href="${repo.html_url}" target="_blank" style="font-weight:700;color:#000;text-decoration:none;">View on GitHub</a></p>
        </div>
      `).join("");
    })
})();
/* ============================================================
   CONTACT PAGE: KEEP ME SIGNED UP
   ============================================================ */
(function setupSignup(){
  const btn = document.getElementById("signupBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;

    const gmailLink =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=kshitivinod@gmail.com` +
      `&su=${encodeURIComponent("Website Signup")}` +
      `&body=${encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\nSigned up from portfolio website."
      )}`;

    // Create hidden anchor for guaranteed Chrome-safe click
    const a = document.createElement("a");
    a.href = gmailLink;
    a.target = "_blank";
    a.rel = "noopener";

    document.body.appendChild(a);
    a.click();
    a.remove();
  });
})();
