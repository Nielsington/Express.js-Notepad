const getAPI = async () => {
    try {
    const response = await fetch("http://localhost:3000/ideas");
    const data = await response.json();

    return data;
    }catch(err) {
        throw err;
    }
};

const apiData = await getAPI();
console.log(apiData);

const ideaContainer = document.querySelector('.ideaContainer');

for (let idea of apiData){
    const ideaDiv = document.createElement('div');
    ideaDiv.classList.add(`${idea.id}`);

    const title = document.createElement('h3');
    
    const editIcon = document.createElement('img');
    editIcon.classList.add('editIcon');
    editIcon.src = './edit.png';

    const trashCanIcon = document.createElement('img');
    trashCanIcon.classList.add('trashCanIcon');
    trashCanIcon.src = './trash.png';

    const description = document.createElement('p');
    const createTime = document.createElement('p');
    createTime.classList.add('timestamp');

    const linebreak = document.createElement('br');
    const horizontalRule = document.createElement('hr');
    horizontalRule.style.borderColor = "black";

    title.innerText = idea.title;
    description.innerText = idea.description;
    createTime.innerText = idea.created_at;

    ideaContainer.appendChild(ideaDiv)
    ideaDiv.appendChild(title);
    ideaDiv.appendChild(editIcon);
    ideaDiv.appendChild(trashCanIcon);
    ideaDiv.appendChild(description);
    ideaDiv.appendChild(createTime);
    ideaDiv.appendChild(linebreak);
    ideaDiv.appendChild(horizontalRule);

    trashCanIcon.addEventListener('click', async() =>{
        ideaContainer.removeChild(ideaDiv);
        try{
        const response = await fetch(`http://localhost:3000/delete-row/${idea.id}`);
        const deleteRow = await response.json();
        }catch(err){
            throw err;
        }
    });

    editIcon.addEventListener('click', async() => {
        window.location = `http://127.0.0.1:5500/client/updatePage.html?id=${idea.id}`;
    });
}



