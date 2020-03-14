import { helper } from "@ember/component/helper";
export function fixed([num]) {
  return `${num.toFixed(2)}%`;
}
export default helper(fixed);
