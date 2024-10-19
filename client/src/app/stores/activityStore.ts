import { makeObservable, observable } from "mobx";

export default class ActivityStore {
  title = "Hello Mobx"
  
  constructor() {
    makeObservable(this, {
        title: observable
    });
  }
}
