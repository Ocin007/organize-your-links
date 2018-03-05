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
    private isSeries: number;
    private isFavorit: number;
    private title: string;
    private categoryList: string[];
    private episodes: Object[];
    private episodes: EpisodeObj;
    private templateList: string[];
}