import Component from "@glimmer/component";
import { set, action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import { sort } from '@ember/object/computed';

export default class DataTable extends Component {
  constructor(...args) {
    super(...args);
    set(this, 'data', this.args.services);
  }

  @tracked sortKey = 'down';
  @tracked descending = false;

  @sort('data', ['sortKey'], function(a, b) {
    if (a[this.sortKey] > b[this.sortKey]) {
      return this.descending ? 1 : -1;
    }
    if (a[this.sortKey] < b[this.sortKey]) {
      return this.descending ? -1 : 1;
    }
    return 0;
  })
  sortedData;

  @action
  setSortKey(sortKey) {
    this.descending = sortKey === this.sortKey ? !this.descending : true;
    this.sortKey = sortKey;
  }
}
