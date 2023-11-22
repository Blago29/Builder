
class WebPage {
    constructor(title, header, content, footer) {
        this.title = title;
        this.header = header;
        this.content = content;
        this.footer = footer;
    }
}


class WebPageBuilder {
    constructor() {
        this.webPage = new WebPage("", "", "", "");
    }

    setTitle(title) {
        this.webPage.title = title;
        return this;
    }

    setHeader(header) {
        this.webPage.header = header;
        return this;
    }

    setContent(content) {
        this.webPage.content = content;
        return this;
    }

    setFooter(footer) {
        this.webPage.footer = footer;
        return this;
    }

    build() {
        return this.webPage;
    }
}

class WebPageDirector {
    createArticle(content) {
        return new WebPageBuilder()
            .setTitle("Статия")
            .setHeader("Статия Хедър")
            .setContent(content)
            .setFooter("Статия Футър")
            .build();
    }

    createForm(title, fields) {
        return new WebPageBuilder()
            .setTitle(title)
            .setHeader("Форма Хедър")
            .setContent("Полета: " + fields)
            .build();
    }
}


const director = new WebPageDirector();


const articlePage = director.createArticle("Съдържание на статията.");
printWebPage(articlePage);


const formPage = director.createForm("Контактна форма", "Име, Електронна поща, Съобщение");
printWebPage(formPage);

function printWebPage(webPage) {
    console.log("Заглавие: " + webPage.title);
    console.log("Хедър: " + webPage.header);
    console.log("Съдържание: " + webPage.content);
    console.log("Футър: " + webPage.footer);
    console.log();
}
