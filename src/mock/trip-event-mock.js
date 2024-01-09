import {Event} from '../const';
import {getRandomArrElement} from '../utils';

function getOffer(teOfferType) {
  const offerType = Event._OFFERS.find((offer) => offer.type === teOfferType);
  return offerType.offers || false;
}

function getRandomTripEvent() {
  const date = new Date(getRandomArrElement(Event._DATES));
  const type = getRandomArrElement(Event._TYPES);
  const travelTime = {
    start: '10:00',
    end: '12:00',
  };
  const offers = getOffer(type);

  return {
    date,
    type,
    travelTime,
    offers,
  };
}

export {getRandomTripEvent};
