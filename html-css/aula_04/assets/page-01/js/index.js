window.addEventListener('DOMContentLoaded', async () => {
    const data = await fetch('https://api.github.com/users/cauesooouza').then((response) => response.json());

    const { avatar_url, html_url,
        public_repos, followers } = data

    const fotoPerfilElement = document.getElementById('foto-perfil');
    fotoPerfilElement.src = `${avatar_url}`

    const githubElement = document.getElementById('github');
    githubElement.href = `${html_url}`;

    const seguidoresElement = document.getElementById('seguidores');
    seguidoresElement.innerText = `${followers} Seguidores`;

    const repositoriosElement = document.getElementById('repositorios');
    repositoriosElement.innerText = `${public_repos} Repositorios`
})

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const [nome, email, assunto, mensagem] = contactForm.elements;

    const data = {
        nome: nome.value,
        email: email.value,
        assunto: assunto.value,
        mensagem: mensagem.value
    }

    alert(`Olá ${nome.value} sua mensagem foi enviada com sucesso!`)

    console.log(data)
})