// import {HtmlElementBuilder} from './HtmlElementBuilder';
document.addEventListener('DOMContentLoaded', function () {
    addEvents();
});
function addEvents() {
    var elements = document.getElementsByClassName('add-element-event');
    for(let i of elements) {
        i.addEventListener('click', function (ev) {
            addNewListElement(ev);
        });
    }
}

function addNewListElement(ev) {
    let id = new Date().getTime();
    let tr = new HtmlElementBuilder('tr', {
        id: id,
        classList: ['list-create-tr']
    }, {});


    let th1 = new HtmlElementBuilder('th', {}, {});
    let inputth1 = new HtmlElementBuilder('input', {
        type: 'checkbox'
    }, {});
    inputth1.addNewEventListener('click', function (ev) {
        console.log(ev);
        console.log('checkbox clicked');
    });
    th1.addChild(inputth1);


    let th2 = new HtmlElementBuilder('th', {}, {});
    let imgth2 = new HtmlElementBuilder('img', {
        src: 'icons/star-empty-border.ico',
        alt: 'star-empty'
    }, {});
    imgth2.addNewEventListener('click', function (ev) {
        if(ev.currentTarget.alt === 'star-empty') {
            ev.currentTarget.alt = 'star-full';
            ev.currentTarget.src = 'icons/star-full-border.ico';
        } else {
            ev.currentTarget.alt = 'star-empty';
            ev.currentTarget.src = 'icons/star-empty-border.ico';
        }
    });
    th2.addChild(imgth2);


    let th3 = new HtmlElementBuilder('th', {}, {});
    let textth3 = new HtmlElementBuilder('textarea', {
        rows: '5',
        cols: '15',
        wrap: 'hard'
    }, {});
    th3.addChild(textth3);


    let th4 = new HtmlElementBuilder('th', {}, {});
    let divth4 = new HtmlElementBuilder('div', {classList: ['create-list-category']}, {});
    let div1th4 = new HtmlElementBuilder('div', {classList: ['selected-categories-container']}, {});
    let div2th4 = new HtmlElementBuilder('div', {
        classList: ['categorie-hover'],
        innerHTML: 'Kategorien wählen...'
    }, {});
    let div3th4 = new HtmlElementBuilder('div', {classList: ['categorie-hover-tooltip']}, {});
    div2th4.addChild(div3th4);
    let div4th4 = new HtmlElementBuilder('div', {}, {});
    let inputdiv4th4 = new HtmlElementBuilder('input', {
        type: 'text',
        placeholder: 'Neue Kategorie'
    }, {});
    let imgdiv4th4 = new HtmlElementBuilder('img', {
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


    let th5 = new HtmlElementBuilder('th', {classList: ['is-not-series']}, {});
    let img1th5 = new HtmlElementBuilder('img', {
        classList: ['status-selected'],
        src: 'icons/not-watched.ico',
        alt: 'nicht gesehen'
    }, {});
    let img2th5 = new HtmlElementBuilder('img', {
        src: 'icons/a-bit-watched.ico',
        alt: 'angefangen'
    }, {});
    let img3th5 = new HtmlElementBuilder('img', {
        src: 'icons/watched.ico',
        alt: 'gesehen'
    }, {});
    th5.addChild(img1th5);
    th5.addChild(img2th5);
    th5.addChild(img3th5);


    let th6 = new HtmlElementBuilder('th', {classList: ['is-not-series']}, {});
    th6.addChild(textth3);


    let th8 = new HtmlElementBuilder('th', {classList: ['add-subtr']}, {});
    let img1th8 = new HtmlElementBuilder('img', {
        classList: ['add-subtr-button'],
        src: 'icons/add-button.ico',
        alt: 'add'
    }, {});
    let img2th8 = new HtmlElementBuilder('img', {
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
    tr.addChild(th6);
    tr.addChild(th8);

    console.log(tr);
    let tbody = document.getElementById('list-create-tbody');
    tbody.appendChild(tr.get());
}