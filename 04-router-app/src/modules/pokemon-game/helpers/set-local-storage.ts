export class HandleLocalStorage {
    public static setInLocalStorage(name: string, value: any) {
        if (!name || !value) return;
        console.log('en local storage');

        localStorage.setItem(name, JSON.stringify(value));
    }

    public static getFromLocalStorage(name: string) {
        if (!name) return;
        return JSON.parse(localStorage.getItem(name) ?? '');
    }

    public static clearLocalStorage() {
        localStorage.clear();
    }
}
