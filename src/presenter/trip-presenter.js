// Utils
import { render } from '../render';

// Views
import TripEventsListView from '../view/trip-events-list-view';
import TripEventView from '../view/trip-event-view';
import SortView from '../view/sort-view';
import FormCreateView from '../view/form-create-view';
import FormEditView from '../view/form-edit-view';

export default class TripPresenter {
  _tripEventsListComponent = new TripEventsListView();

  constructor ({tripContainer}) {
    this._container = tripContainer;
  }

  init() {
    render(this._tripEventsListComponent, this._container);
    render(new SortView(), this._tripEventsListComponent.getElement());
    render(new FormEditView(), this._tripEventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new TripEventView(), this._tripEventsListComponent.getElement());
    }

    render(new FormCreateView(), this._tripEventsListComponent.getElement());
  }
}
