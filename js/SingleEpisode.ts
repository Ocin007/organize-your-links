class SingleEpisode extends HtmlElementBuilder {
    // Ajax Data
    private id: number;
    private isSeries: number = 0;
    private isFavorit: number = 0;
    private title: string = '';
    private categoryList: string[] = [];
    private status: number = 0;
    private note: string = '';
    private link: string = '';

    public getAjaxData() {
        return JSON.stringify({
            id: this.id,
            isSeries: this.isSeries,
            isFavorit: this.isFavorit,
            title: this.title,
            categoryList: this.categoryList,
            status: this.status,
            note: this.note,
            link: this.link
        });
    }

    public setIsFavorit(value: number) {
        console.log(value);
        this.isFavorit = value;
    }

    public setTitle(value: string) {
        console.log(value);
        this.title = value;
    }

    public setNote(value: string) {
        console.log(value);
        this.note = value;
    }

    public setLink(value: string) {
        console.log(value);
        this.link = value;
    }

    public setStatus(value: number) {
        console.log(value);
        this.status = value;
    }

    public setCategoryList(value: string[]) {
        console.log(value);
        this.categoryList = value;
    }

    public appendCategoryList(value: string) {
        console.log(value);
        this.categoryList.push(value);
    }

    public removeFromCategoryList(value: string) {
        console.log(value);
        let helper = [];
        for(let i of this.categoryList) {
            if(i !== value) {
                helper.push(i);
            }
        }
        this.setCategoryList(helper);
    }

    public setId(value: number) {
        console.log(value);
        this.id = value;
    }

    public getId() {
        return this.id;
    }
}