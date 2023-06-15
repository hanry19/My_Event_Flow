class dataModel {
    constructor(selectedId, translate = '') {
        this.selectedId = selectedId
        this.translate = translate;
    }

    getAllModel() {
        return {
            selectedId: this.selectedId,
            translate: this.translate,
        }
    }

    getModel(name) {
        return this[name];
    }

    setModel(name, value) {
        this[name] = value;
    }
}