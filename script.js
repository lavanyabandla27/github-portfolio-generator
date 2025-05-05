async function generatePortfolio() {
    const username = document.getElementById("github-username").value;
    const portfolioDiv = document.getElementById("portfolio");
    portfolioDiv.innerHTML = "Loading...";
  
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
  
      if (data.message === "Not Found") {
        portfolioDiv.innerHTML = `<p>User not found.</p>`;
        return;
      }
  
      const reposRes = await fetch(data.repos_url);
      const repos = await reposRes.json();
  
      portfolioDiv.innerHTML = `
        <h2>${data.name || data.login}</h2>
        <p>${data.bio || "No bio available."}</p>
        <img src="${data.avatar_url}" alt="Avatar" width="100" />
        <h3>Repositories:</h3>
        <ul>
          ${repos.map(repo => `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`).join("")}
        </ul>
      `;
    } catch (err) {
      portfolioDiv.innerHTML = `<p>Error loading profile.</p>`;
      console.error(err);
    }
  }
  