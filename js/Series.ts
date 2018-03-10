interface EpisodeObj {
    isGeneric: number,
    isFavorit: number,
    status: number,
    note: string,
    link: LinkObj
}
interface LinkObj {
    s: number,
    ep: number,
    template: any
}
class Series extends HtmlElementBuilder {
    // Ajax Data
    private id: number;
    private isSeries: number = 1;
    private isFavorit: number = 0;
    private title: string = '';
    private categoryList: string[] = [];
    private episodes: EpisodeObj[] = [];
    private templateList: string[] = [];

    public getAjaxData() {
        return JSON.stringify({
            id: this.id,
            isSeries: this.isSeries,
            isFavorit: this.isFavorit,
            title: this.title,
            categoryList: this.categoryList,
            episodes: this.episodes,
            templateList: this.templateList
        });
    }

    public setId(value: number) {
        console.log(value);
        this.id = value;
    }

    public getId() {
        return this.id;
    }

    public setTitle(value: string) {
        console.log(value);
        this.title = value;
    }

    public setIsFavorit(value: number) {
        console.log(value);
        this.isFavorit = value;
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
}