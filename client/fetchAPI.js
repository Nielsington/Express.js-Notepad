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
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const createTime = document.createElement('p');
    createTime.classList.add('timestamp');

    title.innerText = idea.title;
    description.innerText = idea.description;
    createTime.innerText = idea.created_at;

    ideaContainer.appendChild(title);
    ideaContainer.appendChild(description);
    ideaContainer.appendChild(createTime);
}