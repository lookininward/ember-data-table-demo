import { helper } from "@ember/component/helper";
const fixed = function([num]) {
  return `${num.toFixed(2)}%`;
}
export default helper(fixed);
