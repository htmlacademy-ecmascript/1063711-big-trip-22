import {getRandomTripEvent} from '../mock/trip-event-mock';

const TE_COUNT = 4;

export default class TripEventModel {
  _tripEvents = Array.from({length: TE_COUNT}, getRandomTripEvent);

  getTripEvents() {
    return this._tripEvents;
  }
}
