import { helper } from "@ember/component/helper";
import moment from 'moment';
export function date([date]) {
  if (!date) { return; }
  return moment(date).utc().format('YYYY-MM-DD hh:mm:ss');
}
export default helper(date);
