function paleoPaper(){
    const container = document.getElementById('left-bar-embeds');
    container.innerHTML = '';

    const title = document.createElement('div');
    title.textContent = 'Paleovirus Capstone Paper';
    title.classList.add('job-title');
    container.appendChild(title);

    const embed = document.createElement('embed');
    embed.src = 'files/phage.pdf';
    container.appendChild(embed);
}

function mlPaper(){
    const container = document.getElementById('left-bar-embeds');
    container.innerHTML = '';

    const title = document.createElement('div');
    title.textContent = 'Machine Learning Research';
    title.classList.add('job-title');
    container.appendChild(title);

    const embed = document.createElement('embed');
    embed.src = 'files/njgss.pdf';
    container.appendChild(embed);
}

function selfSite(){
    const container = document.getElementById('left-bar-embeds');
    container.innerHTML = '';

    const title = document.createElement('div');
    title.textContent = 'Personal Website';
    title.classList.add('job-title');
    container.appendChild(title);

    const img = document.createElement('img');
    img.src = 'files/site-screenshot.png';
    container.appendChild(img);
}