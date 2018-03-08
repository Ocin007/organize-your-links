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
    private isFavorit: number;
    private title: string;
    private categoryList: string[];
    private episodes: EpisodeObj[];
    private templateList: string[];

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

    public setTitle(value: string) {
        console.log(value);
        this.title = value;
    }
}