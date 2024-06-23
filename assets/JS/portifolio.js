const repositories = document.querySelector('.content-main');

function getApiGitHub() {
    fetch('https://api.github.com/users/dev-andree/repos')
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                let project = document.createElement('div');
                project.className = 'project';

                project.innerHTML = `
                    <div>
                        <h4 class="title">${repo.name}</h4>
                        <span class="date-create">${new Date(repo.created_at).toLocaleDateString()}</span>
                    </div>
                    <div>
                        <a href="${repo.html_url}" target="_blank">${repo.html_url}</a>
                        <span class="language">
                            <span class="circle">●</span>${repo.language || 'N/A'}
                        </span>
                    </div>
                `;

                repositories.appendChild(project);
            });
        })
        .catch(error => console.error('Erro:', error));
}

// Chame a função para carregar os repositórios
getApiGitHub();
