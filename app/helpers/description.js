import { helper } from "@ember/component/helper";
import { map } from "suitepad/data/descriptions";
export function description([token]) {
  return map[token];
}
export default helper(description);
