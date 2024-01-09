import {getFormEditData} from '../mock/form-edit-mock';

export default class FormEditModel {
  _formEditData = getFormEditData();

  getData() {
    return this._formEditData;
  }
}
