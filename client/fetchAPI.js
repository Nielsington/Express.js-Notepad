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
    
    const trashCan = document.createElement('img');
    trashCan.classList.add('trashCan');
    trashCan.src = './trash.png';

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
    ideaDiv.appendChild(trashCan);
    ideaDiv.appendChild(description);
    ideaDiv.appendChild(createTime);
    ideaDiv.appendChild(linebreak);
    ideaDiv.appendChild(horizontalRule);

    trashCan.addEventListener('click', async(req, res) =>{
        ideaContainer.removeChild(ideaDiv);
        try{
        const response = await fetch(`http://localhost:3000/delete-row/${idea.id}`);
        const deleteRow = await response.json();
        }catch(err){
            throw err;
        }
    });
}



