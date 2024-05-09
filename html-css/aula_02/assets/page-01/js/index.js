window.addEventListener('DOMContentLoaded', async () => {
    const data = await fetch('https://api.github.com/users/cauesooouza').then((response) => response.json());

    const { avatar_url, html_url,
        public_repos, followers } = data

    const fotoPerfilElement = document.getElementById('foto-perfil');
    fotoPerfilElement.src = `${avatar_url}`

    const githubElement = document.getElementById('github');
    githubElement.href=`${html_url}`;

    const seguidoresElement = document.getElementById('seguidores');
    seguidoresElement.innerText=`${followers} Seguidores`;

    const repositoriosElement = document.getElementById('repositorios');
    repositoriosElement.innerText=`${public_repos} Repositorios`
})