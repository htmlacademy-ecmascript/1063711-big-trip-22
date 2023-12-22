// Utils
import { render } from './render';

// Views
import FiltersView from './view/filters-view';
import TripPresenter from './presenter/trip-presenter';

const filtersContainer = document.querySelector('[data-filters="container"]');
const tripContainer = document.querySelector('[data-trip="container"]');
const tripPresenter = new TripPresenter({tripContainer});


/**
 * Рендер блока Фильтров:
 * находится вне Презентера, т.к. отрисовывается
 * внутри Хедера, а не внутри блока ".trip-events".
*/
render(new FiltersView(), filtersContainer);


/**
 * Отрисовка всех основных компонентов
 * с помощью Презентера.
*/
tripPresenter.init();
