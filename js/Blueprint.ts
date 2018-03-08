interface SingleEpObj {
    id: number,
    isSeries: number,
    isFavorit: number,
    title: string,
    categoryList: string[],
    status: number,
    note: string,
    link: string
}
interface SeriesObj {
    id: number,
    isSeries: number,
    isFavorit: number,
    title: string,
    categoryList: string[],
    episodes: EpisodeObj[],
    templateList: string[]
}
class Blueprint {
    public singleEpisode(ajaxData: SingleEpObj) {
        let id = new Date().getTime();
        let tr = new SingleEpisode('tr', {
            id: id,
            classList: ['list-create-tr']
        }, {});
        tr.setId(id);
        let th1 = this.columnSeriesCheckbox(false);
        let th2 = this.columnFav(tr, ajaxData.isFavorit);
        let th3 = this.columnTextarea(function (ev) {
            tr.setTitle(ev.target.value);
        });
        let th4 = this.columnCategory(tr);
        let th5 = this.columnStatus(tr);
        let th6 = this.columnTextarea(function (ev) {
            tr.setNote(ev.target.value);
        });
        let th7 = this.columnTextarea(function (ev) {
            tr.setLink(ev.target.value);
        });
        let th8 = this.columnAddSubtr();
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

    public series(ajaxData: SeriesObj) {

        //TODO
        //code for testing

        let id = new Date().getTime();
        let tr = new SingleEpisode('tr', {
            id: id,
            classList: ['list-create-tr']
        }, {});
        tr.setId(id);
        let th1 = this.columnSeriesCheckbox(true);
        let th2 = this.columnFav(tr, ajaxData.isFavorit);
        let th3 = this.columnTextarea(function (ev) {
            tr.setTitle(ev.target.value);
        });
        tr.addChild(th1);
        tr.addChild(th2);
        tr.addChild(th3);
        return tr;
    }

    public seriesElementGeneric() {

    }

    public seriesElementNotGeneric() {

    }



    private columnTextarea(callback: Function) {
        let th = new SingleEpisode('th', {}, {});
        let text = new SingleEpisode('textarea', {
            rows: '5',
            cols: '15',
            wrap: 'hard'
        }, {});
        text.addNewEventListener('keyup', callback);
        th.addChild(text);
        return th;
    }

    private columnCategory(parent: Object) {
        let th = new SingleEpisode('th', {}, {});
        let div = new SingleEpisode('div', {classList: ['create-list-category']}, {});
        let div1 = new SingleEpisode('div', {classList: ['selected-categories-container']}, {});
        let div2 = new SingleEpisode('div', {
            classList: ['categorie-hover'],
            innerHTML: 'Kategorien wählen...'
        }, {});
        let div3 = new SingleEpisode('div', {classList: ['categorie-hover-tooltip']}, {});
        div3.addNewEventListener('click', function (ev) {
            //TODO
        });
        div2.addChild(div3);
        let div4 = new SingleEpisode('div', {}, {});
        let input = new SingleEpisode('input', {
            type: 'text',
            placeholder: 'Neue Kategorie'
        }, {});
        let img = new SingleEpisode('img', {
            classList: ['add-subtr-button'],
            src: 'icons/add-button.ico',
            alt: 'add'
        }, {});
        img.addNewEventListener('click', function (ev) {
            //TODO
        });
        div4.addChild(input);
        div4.addChild(img);

        div.addChild(div1);
        div.addChild(div2);
        div.addChild(div4);
        th.addChild(div);

        return th;
    }

    private columnSeriesCheckbox(bool: boolean) {
        let th = new SingleEpisode('th', {}, {});
        let input = new SingleEpisode('input', {
            type: 'checkbox',
            checked: bool
        }, {});
        input.addNewEventListener('click', function (ev) {
            console.log(ev);
            console.log('checkbox clicked');
            swapElementOnChecked(ev.target.parentElement.parentElement, bool);
        });
        th.addChild(input);
        return th;
    }

    private columnFav(parent: any, value: number) {
        // let index = getIndexById(id);
        let th = new SingleEpisode('th', {}, {});
        let attributes = (value === 1) ? {
            src: 'icons/star-full-border.ico',
            alt: 'star-full'
        } : {
            src: 'icons/star-empty-border.ico',
            alt: 'star-empty'
        };
        let img = new SingleEpisode('img', attributes, {});
        img.addNewEventListener('click', function (ev) {
            // let index = getIndexById(id);
            if(ev.currentTarget.alt === 'star-empty') {
                ev.currentTarget.alt = 'star-full';
                ev.currentTarget.src = 'icons/star-full-border.ico';
                // creatingTableStorage.elementList[index].setIsFavorit(1);
                parent.setIsFavorit(1);
            } else {
                ev.currentTarget.alt = 'star-empty';
                ev.currentTarget.src = 'icons/star-empty-border.ico';
                // creatingTableStorage.elementList[index].setIsFavorit(0);
                parent.setIsFavorit(0);
            }
        });
        th.addChild(img);
        return th;
    }

    private columnStatus(parent: any) {
        let changeStatus = (status: number, ev: any) => {
            parent.setStatus(status);
            let imgs = th.getChild(-1);
            for(let i of imgs) {
                i.editClassList('status-selected');
            }
            for(let i of ev.target.offsetParent.children) {
                i.classList.remove('status-selected');
            }
            ev.target.classList.add('status-selected');
        };
        let th = new SingleEpisode('th', {}, {});
        let img1 = new SingleEpisode('img', {
            classList: ['status-selected'],
            src: 'icons/not-watched.ico',
            alt: 'nicht gesehen'
        }, {});
        img1.addNewEventListener('click', function (ev) {
            changeStatus(0, ev);
        });
        let img2 = new SingleEpisode('img', {
            classList: [],
            src: 'icons/a-bit-watched.ico',
            alt: 'angefangen'
        }, {});
        img2.addNewEventListener('click', function (ev) {
            changeStatus(1, ev);
        });
        let img3 = new SingleEpisode('img', {
            classList: [],
            src: 'icons/watched.ico',
            alt: 'gesehen'
        }, {});
        img3.addNewEventListener('click', function (ev) {
            changeStatus(2, ev);
        });
        th.addChild(img1);
        th.addChild(img2);
        th.addChild(img3);
        return th;
    }

    private columnAddSubtr() {
        let th = new SingleEpisode('th', {classList: ['add-subtr']}, {});
        let img1 = new SingleEpisode('img', {
            classList: ['add-subtr-button'],
            src: 'icons/add-button.ico',
            alt: 'add'
        }, {});
        img1.addNewEventListener('click', function (ev) {
            //TODO
        });
        let img2 = new SingleEpisode('img', {
            classList: ['add-subtr-button'],
            src: 'icons/subtr-button.ico',
            alt: 'subtr'
        }, {});
        img2.addNewEventListener('click', function (ev) {
            //TODO
        });
        th.addChild(img1);
        th.addChild(img2);
        return th;
    }
}