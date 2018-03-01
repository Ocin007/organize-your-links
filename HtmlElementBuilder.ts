export class HtmlElementBuilder {
    htmlMainElement: HTMLElement;

    public constructor(tag: string, attributes: Object) {
        this.htmlMainElement = document.createElement(tag);
        for(let key in attributes) {
            this.addAttribute(key, attributes[key]);
        }
    }

    private addAttribute(key: string, attribute: any) {
        if(key == 'classList') {
            for(let j of attribute) {
                this.htmlMainElement.classList.add(j);
            }
        } else {
            this.htmlMainElement[key] = attribute;
        }
    }

    public addChild(child: HTMLElement) {
        this.htmlMainElement.appendChild(child)
    }

    public get() {
        return this.htmlMainElement;
    }
}