import { makeAutoObservable } from "mobx";

export default class JournalStore {
  constructor() {
    this._classes = [];
    this._people = [];
    makeAutoObservable(this);
  }

  setClasses(classes) {
    this._classes = classes;
  }

  setPeople(people) {
    this._people = people;
  }

  get classes() {
    return this._classes;
  }

  get people() {
    return this._people;
  }
}
