const urlParams = new URLSearchParams(window.location.search);
const ideaId = urlParams.get('id');

(async () =>{
    const editTitle = document.querySelector('.editTitle');
    const editDescription = document.querySelector('.editDescription');
    try{
        const response = await fetch(`http://localhost:3000/edit-idea/${ideaId}`);
        const updateRow = await response.json();

        editTitle.value = updateRow[0].title ;
        editDescription.value = updateRow[0].description ;
    }catch(err){
        throw err;
    }
})();

const updateForm = document.querySelector('form');
updateForm.setAttribute('action', `http://localhost:3000/update-idea/${ideaId}`)



