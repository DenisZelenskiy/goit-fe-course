import * as storage from "./storage/storage";
import axios from "axios";

export default class Model {
    constructor() {
        this.bookmarks = storage.get("bookmarks") || [];
    }

    addCard(value) {
        let result;

        return new Promise((resolve, err) => setTimeout(() => {
            resolve(axios
                .get(`https://api.linkpreview.net/?key=5bfac41586ca505c353b82c68b844317d858f00d0518e&q=${value}`)
                .then(resolve => {
                    console.log(resolve);
                    return this.dataFromStorage(resolve.data);
                })
                .catch(err => console.log(err)))
        }, 200))

    }

    dataFromStorage({ title, url, image }) {
        let id = Date.now()
        this.bookmarks = [{ id, title, url, image }, ...this.bookmarks];

        storage.set(this.bookmarks);
        return this.bookmarks;
    }

    deleteCard(value) {
        this.bookmarks = this.bookmarks.filter(el => el.id !== Number(value));
        console.log(this.bookmarks);
        storage.set(this.bookmarks);
    }
}