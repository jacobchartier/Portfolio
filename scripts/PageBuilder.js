function loadPage(path) {
    // Remove the previous page content
    document.querySelector('#header-links').innerHTML = '';
    document.querySelector('main').innerHTML = '';

    // Load the content of the page
    fetch(path).then(response => response.json()).then(data => {
        headerBuilder(data.header);
        data.sections.forEach(section => { sectionBuilder(section); });
    });
}

function headerBuilder(data) {
    const header = document.querySelector('header');

    document.getElementById('header-title').innerHTML = `${data.title}`;
    document.getElementById('header-description').innerHTML = `${data.description}`;

    if (data.links) {
        data.links.forEach(link => {
            document.getElementById('header-links').innerHTML += `<a href="${link.href}">${link.text}</a>\n`
        })
    }
}

function sectionBuilder(data) {
    const main = document.querySelector('main');
    const section = document.createElement('section');

    if(data.class) section.classList.add(data.class);
    if(data.id) section.id = data.id;
    
    if (data.title) { 
        var temp = document.createElement('h2');
        temp.classList.add('section-title');
        temp.innerHTML = `${data.title}`;
        section.appendChild(temp);
    }

    if (data.description) {
        var temp = document.createElement('h2');
        temp.classList.add('section-description');
        temp.innerHTML = `${data.description}`;
        section.appendChild(temp);
    }

    if (data.content) {
        var temp = document.createElement('div');
        temp.classList.add('card');
        temp.innerHTML = `${data.content}`;
        section.appendChild(temp);
    }

    main.appendChild(section);
}
