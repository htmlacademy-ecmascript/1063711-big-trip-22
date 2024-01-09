import {Event} from '../const';
import {getRandomArrElement} from '../utils';

function getOffer(teOfferType) {
  const offerType = Event._OFFERS.find((offer) => offer.type === teOfferType);
  return offerType.offers || false;
}

function getFormEditData() {
  const type = getRandomArrElement(Event._TYPES);
  const offers = getOffer(type);
  const destination = getRandomArrElement(Event._DESTINATIONS);

  return {
    type,
    offers,
    destination,
  };
}

export {getFormEditData};
