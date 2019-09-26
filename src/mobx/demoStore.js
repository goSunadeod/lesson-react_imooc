import { observable, action, computed, toJS } from 'mobx';


class demoStore {
    @observable data = [];

    @computed get getData() {
        return this.data;
    }

    @action setDate(data) {
        this.data = data;
    }
}

export default new demoStore();
