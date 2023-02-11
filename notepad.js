let texts = [];
let list = document.querySelector('#notes');
let create = document.querySelector('button')[0];
let text = document.querySelector('textarea');
let saveButton = document.getElementsByTagName('button')[1];

saveButton.addEventListener('click', function() {
    note = text.value;
    texts.push(text.value);
    let item = document.createElement('li');
    item.setAttribute('data-key', texts.indexOf(note));
    console.log(texts)
    item.textContent = 'Запись ' + (texts.indexOf(note) + 1);

    item.addEventListener('click', function() {
        let num = this.dataset.key;
        text.value = texts[num];
        item.classList.add('active');

        let lis = document.querySelectorAll('li');
        for (let li of lis) {
            if (li != this) {
                li.classList.remove('active')
            }
        } 
    }) 
    list.appendChild(item)
});

