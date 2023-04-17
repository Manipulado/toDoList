const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.flex');

cards.forEach((card) => {
   card.addEventListener('dragstart', dragstart) 
   card.addEventListener('dragend', dragend) 
});

function dragstart(){
    this.classList.add('is-dragging')
}

function dragend(){
    this.classList.remove('is-dragging')
}

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
});

function dragover(){
    this.classList.add('over')
    const cardBeingDragged = document.querySelector('.is-dragging');
    this.appendChild(cardBeingDragged);
}

function dragleave(){
    this.classList.remove('over')
}
