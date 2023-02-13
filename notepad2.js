let texts = [];
let list = document.querySelector('#notes');
let createButton = document.getElementsByTagName('button')[0];
let text = document.querySelector('textarea');
let saveButton = document.getElementsByTagName('button')[1];
let statusMessage = document.querySelector('#status');

let removeBtnClickHandler = function() {
    let sibl = this.previousElementSibling;
    sibl.remove();
    this.remove();
};

saveButton.addEventListener('click', function() {
    let mode = this.dataset.mode;
    
    if (mode == 'create') {
        statusMessage.innerHTML = 'Режим создания';

        note = text.value;
        texts.push(text.value);

        let item = document.createElement('li');
               
        let noteOpen = document.createElement('span');
        noteOpen.textContent = 'Запись ' + (texts.indexOf(note) + 1);
        noteOpen.classList.add('open');
        noteOpen.setAttribute('data-key', texts.indexOf(note))
        item.appendChild(noteOpen);
                
        noteOpen.addEventListener('click', function() {
            saveButton.dataset.mode = 'update';
            statusMessage.textContent = 'Режим редактирования'
            let key = this.dataset.key;
            saveButton.dataset.key = key;
            text.value = texts[key];

            let opens = document.querySelectorAll('.open');
            noteOpen.classList.add('active');

            for (let open of opens) {
                if (open != this) {
                    open.classList.remove('active');
                }
            } 
        }) 
        list.appendChild(item);

        let noteRemove = document.createElement('button');
        noteRemove.textContent = 'Удалить запись';
        noteRemove.dataset.key = texts.indexOf(note);
        noteRemove.classList.add('remove');
        
        noteRemove.addEventListener('click', removeBtnClickHandler);

    }
})