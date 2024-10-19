import { makeAutoObservable } from "mobx";

export default class ActivityStore {
  title = "Hello Mobx";

  constructor() {
    makeAutoObservable(this);
  }

  setTitle = () => {
    this.title = this.title + "!!!";
  };
}
