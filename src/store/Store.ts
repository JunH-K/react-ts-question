export default class Store {
    localStorage: Storage;

    constructor(name: string, callback?: () => {}) {
        this.localStorage = window.localStorage;
        this.getLocalStorage(name) || this.setLocalStorage(name, {});

        callback && callback();
    }

    getLocalStorage(name: string) {
        return JSON.parse(this.localStorage.getItem(name) || '');
    }

    setLocalStorage(name:string, item:Object) {
        this.localStorage.setItem(name, JSON.stringify(item));
    }
};
