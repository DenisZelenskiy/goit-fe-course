export default class Constructor {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        view.on('create', this.createCard.bind(this));
        view.on('loaded', this.loadedPage.bind(this));
        view.on('delete', this.deleteCard.bind(this));
    }

    createCard(value) {
        this.model.addCard(value).then(data => {
            this.view.createMarkup(data)
        });
    }

    deleteCard(id) {
        this.model.deleteCard(id);
        this.view.removeCard(id);
    }

    loadedPage(value) {
        this.view.createMarkup(value)
    }
}