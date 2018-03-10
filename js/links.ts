var settings = {
    categoryList: []
};
var creatingTableStorage = {
    elementList: [],
    newCategories: []
};
const UNDEF_AJAXDATA_SINGLE: SingleEpObj = {
    id: undefined,
    isSeries: 0,
    isFavorit: 0,
    title: '',
    categoryList: [],
    status: 0,
    note: '',
    link: ''
};
const UNDEF_AJAXDATA_SERIES: SeriesObj = {
    id: undefined,
    isSeries: 1,
    isFavorit: 0,
    title: '',
    categoryList: [],
    episodes: [],
    templateList: []
};
document.addEventListener('DOMContentLoaded', function () {
    getSettings();
    addEvents();
});
function getSettings() {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "php/ajax.php", true);
    xhttp.addEventListener('load', function (event) {
        if (xhttp.status >= 200 && xhttp.status < 300) {
            let jsonFile = JSON.parse(xhttp.responseText);
            settings.categoryList = jsonFile.categoryList;
        } else {
            console.log('error in getSettings: '+xhttp.status);
        }
    });
    xhttp.send();
}
function addEvents() {
    let addButtons = document.getElementsByClassName('add-element-event');
    for(let i of addButtons) {
        i.addEventListener('click', function (ev) {
            addNewListElement(ev);
        });
    }
    document.getElementById('option-reset-list-create').addEventListener('click', function () {
        clearListCreate();
    });
    document.getElementById('option-save-list-create').addEventListener('click', function (ev) {
        //TODO: Funktion zum Speichern der erstellten Elemente
    });
}

function addNewListElement(ev) {
    console.log(ev);
    let tr = new Blueprint().singleEpisode(UNDEF_AJAXDATA_SINGLE);
    let helperArray = [tr];
    for(let i of creatingTableStorage.elementList) {
        helperArray.push(i);
    }
    creatingTableStorage.elementList = helperArray;

    let tbody = document.getElementById('list-create-tbody');
    console.log(tbody);
    tbody.insertBefore(tr.get(), tbody.firstElementChild);
}

function buildCreatingTable() {
    let tbody = document.getElementById('list-create-tbody');
    tbody.innerHTML = '';
    for(let i of creatingTableStorage.elementList) {
        tbody.appendChild(i.get());
    }
}

function swapElementOnChecked(element: HTMLElement, swapToSingle: boolean) {
    let tbody = document.getElementById('list-create-tbody');
    let newElement: any;
    let index = getIndexById(parseInt(element.id));
    if(swapToSingle) {
        newElement = new Blueprint().singleEpisode(UNDEF_AJAXDATA_SINGLE);
    } else {
        newElement = new Blueprint().series(UNDEF_AJAXDATA_SERIES);
    }
    tbody.replaceChild(newElement.get(), element);
    creatingTableStorage.elementList[index] = newElement;
}

function getIndexById(id: number) {
    for(let i in creatingTableStorage.elementList) {
        if(creatingTableStorage.elementList[i].getId() === id) {
            return i;
        }
    }
}

function clearListCreate() {
    let tbody = document.getElementById('list-create-tbody');
    tbody.innerHTML = '';
    creatingTableStorage.elementList = [];
}

//TODO: Überprüfung, ob neue Kategorie schon vorhanden ist
function appendToSelectedCategoriesContainer(categoryElement: HtmlElementBuilder, container: HtmlElementBuilder, id: string) {
    container.addChild(categoryElement);
    let containerHtml = document.getElementById(id).children[3].firstElementChild.firstElementChild;
    containerHtml.appendChild(categoryElement.get());
}

function addCategoryToNewCategories(newCategory: string) {
    creatingTableStorage.newCategories.push(newCategory);
    let div = document.getElementById('new-categories');
    let child = new HtmlElementBuilder('div', {innerHTML: newCategory}, {});
    div.appendChild(child.get());
}

function appendToHoverTooltip(categoryElement: HtmlElementBuilder, container: HtmlElementBuilder, id: string) {
    container.addChild(categoryElement);
    let containerHtml = document.getElementById(id).children[3].firstElementChild.children[1].firstElementChild;
    containerHtml.appendChild(categoryElement.get());
}