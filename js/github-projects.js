"use strict";

const container = document.querySelector(".section-p");
const apiUrl = "https://api.github.com/users/lbsierra/repos";

fetch(apiUrl)
    .then(response => response.json())
    .then(repos => {
        repos.forEach(repo => {
            if (repo.fork || !repo.name || !repo.description) return; 
            const project = document.createElement("div");
            project.classList.add("item-p");
            project.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            container.appendChild(project);
        });
    })
    .catch(error => {
        console.error("Error fetching repositories:", error);
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Failed to load projects. Please try again later.";
        container.appendChild(errorMessage);
    });