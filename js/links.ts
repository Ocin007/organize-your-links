var settings = {
    categoryList: []
};
var creatingTableStorage = {
    elementList: [],
    newCategories: []
};
document.addEventListener('DOMContentLoaded', function () {
    getSettings();
    addEvents();
});
function getSettings() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "../php/ajax.php", true);
    xhttp.addEventListener('load', function (event) {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            let jsonFile = JSON.parse(xhttp.responseText);
            settings.categoryList = jsonFile.categoryList;
        }
    });
    xhttp.send();
}
function addEvents() {
    let elements = document.getElementsByClassName('add-element-event');
    for(let i of elements) {
        i.addEventListener('click', function (ev) {
            addNewListElement(ev);
        });
    }
}

function addNewListElement(ev) {
    let tr = blueprintSingleEpisode();
    creatingTableStorage.elementList.push(tr);
    let tbody = document.getElementById('list-create-tbody');
    tbody.appendChild(tr.get());
}
function blueprintSingleEpisode() {
    let id = new Date().getTime();
    let tr = new SingleEpisode('tr', {
        id: id,
        classList: ['list-create-tr']
    }, {});


    let th1 = new SingleEpisode('th', {}, {});
    let inputth1 = new SingleEpisode('input', {
        type: 'checkbox'
        //checked: ''
    }, {});
    inputth1.addNewEventListener('click', function (ev) {
        console.log(ev);
        console.log('checkbox clicked');
        swapElementOnChecked(ev.target.parentElement.parentElement, ev.target.checked);
    });
    th1.addChild(inputth1);


    let th2 = new SingleEpisode('th', {}, {});
    let imgth2 = new SingleEpisode('img', {
        src: 'icons/star-empty-border.ico',
        alt: 'star-empty'
    }, {});
    imgth2.addNewEventListener('click', function (ev) {
        if(ev.currentTarget.alt === 'star-empty') {
            ev.currentTarget.alt = 'star-full';
            ev.currentTarget.src = 'icons/star-full-border.ico';
            console.log(this);
            tr.setIsFavorit(1);
        } else {
            ev.currentTarget.alt = 'star-empty';
            ev.currentTarget.src = 'icons/star-empty-border.ico';
            console.log(this);
            tr.setIsFavorit(0);
        }
    });
    th2.addChild(imgth2);


    let th3 = new SingleEpisode('th', {}, {});
    let textth3 = new SingleEpisode('textarea', {
        rows: '5',
        cols: '15',
        wrap: 'hard'
    }, {});
    textth3.addNewEventListener('keyup', function (ev) {
        tr.setTitle(ev.target.value);
    });
    th3.addChild(textth3);


    let th4 = new SingleEpisode('th', {}, {});
    let divth4 = new SingleEpisode('div', {classList: ['create-list-category']}, {});
    let div1th4 = new SingleEpisode('div', {classList: ['selected-categories-container']}, {});
    let div2th4 = new SingleEpisode('div', {
        classList: ['categorie-hover'],
        innerHTML: 'Kategorien wählen...'
    }, {});
    let div3th4 = new SingleEpisode('div', {classList: ['categorie-hover-tooltip']}, {});
    div2th4.addChild(div3th4);
    let div4th4 = new SingleEpisode('div', {}, {});
    let inputdiv4th4 = new SingleEpisode('input', {
        type: 'text',
        placeholder: 'Neue Kategorie'
    }, {});
    let imgdiv4th4 = new SingleEpisode('img', {
        classList: ['add-subtr-button'],
        src: 'icons/add-button.ico',
        alt: 'add'
    }, {});
    div4th4.addChild(inputdiv4th4);
    div4th4.addChild(imgdiv4th4);


    divth4.addChild(div1th4);
    divth4.addChild(div2th4);
    divth4.addChild(div4th4);
    th4.addChild(divth4);


    let th5 = new SingleEpisode('th', {classList: ['is-not-series']}, {});
    let img1th5 = new SingleEpisode('img', {
        classList: ['status-selected'],
        src: 'icons/not-watched.ico',
        alt: 'nicht gesehen'
    }, {});
    let img2th5 = new SingleEpisode('img', {
        src: 'icons/a-bit-watched.ico',
        alt: 'angefangen'
    }, {});
    let img3th5 = new SingleEpisode('img', {
        src: 'icons/watched.ico',
        alt: 'gesehen'
    }, {});
    th5.addChild(img1th5);
    th5.addChild(img2th5);
    th5.addChild(img3th5);


    let th6 = new SingleEpisode('th', {classList: ['is-not-series']}, {});
    let textth6 = new SingleEpisode('textarea', {
        rows: '5',
        cols: '15',
        wrap: 'hard'
    }, {});
    textth6.addNewEventListener('keyup', function (ev) {
        tr.setNote(ev.target.value);
    });
    th6.addChild(textth6);

    let th7 = new SingleEpisode('th', {classList: ['is-not-series']}, {});
    let textth7 = new SingleEpisode('textarea', {
        rows: '5',
        cols: '15',
        wrap: 'hard'
    }, {});
    textth7.addNewEventListener('keyup', function (ev) {
        tr.setLink(ev.target.value);
    });
    th7.addChild(textth7);


    let th8 = new SingleEpisode('th', {classList: ['add-subtr']}, {});
    let img1th8 = new SingleEpisode('img', {
        classList: ['add-subtr-button'],
        src: 'icons/add-button.ico',
        alt: 'add'
    }, {});
    let img2th8 = new SingleEpisode('img', {
        classList: ['add-subtr-button'],
        src: 'icons/subtr-button.ico',
        alt: 'subtr'
    }, {});
    th8.addChild(img1th8);
    th8.addChild(img2th8);

    tr.addChild(th1);
    tr.addChild(th2);
    tr.addChild(th3);
    tr.addChild(th4);
    tr.addChild(th5);
    tr.addChild(th6);
    tr.addChild(th7);
    tr.addChild(th8);

    return tr;
}
function blueprintSeries() {

}
function swapElementOnChecked(element: HTMLElement, swapToSeries: boolean) {

}