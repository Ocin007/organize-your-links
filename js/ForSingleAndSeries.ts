class ForSingleAndSeries extends HtmlElementBuilder {
    private id: number;
    private isFavorit: number = 0;
    private title: string = '';
    private categoryList: string[] = [];

    public setId(value: number) {
        console.log(value);
        this.id = value;
    }

    public getId() {
        return this.id;
    }

    public setIsFavorit(value: number) {
        console.log(value);
        this.isFavorit = value;
    }

    public setTitle(value: string) {
        console.log(value);
        this.title = value;
    }

    public setCategoryList(value: string[]) {
        console.log(value);
        this.categoryList = value;
    }
}