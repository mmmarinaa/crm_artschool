import { makeAutoObservable } from "mobx";

export default class ScheduleStore {
  constructor() {
    this._schedule = [];
    makeAutoObservable(this);
  }

  setSchedule(schedule) {
    this._schedule = schedule;
  }

  get schedule() {
    return this._schedule;
  }
}
