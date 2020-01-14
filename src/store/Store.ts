export default class Store {
    localStorage: Storage;

    constructor(name: any, callback?: () => {}) {
        this.localStorage = window.localStorage;
        this.getLocalStorage(name) || this.setLocalStorage(name, {});

        callback && callback();
    }

    getLocalStorage(name: any) {
        const item = this.localStorage.getItem(name);
        return item ? JSON.parse(item) : {};
    }

    setLocalStorage(name: any, item: any) {
        this.localStorage.setItem(name, JSON.stringify(item));
    }
};
