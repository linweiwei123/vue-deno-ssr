import { dew as _emptyDewDew } from "https://dev.jspm.io/npm:@jspm/core@1/nodelibs/@empty.dew.js";
import { dew as _packageJsonDewDew } from "https://dev.jspm.io/npm:vue-server-renderer@2.6.11/package.json.dew.js";
import { dew as _buildDevDewDew } from "./build.dev.dew.js";
var exports = {},
  _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  try {
    var vueVersion = _emptyDewDew().version;
  } catch (e) {}

  var packageName = _packageJsonDewDew().name;

  var packageVersion = _packageJsonDewDew().version;

  if (vueVersion && vueVersion !== packageVersion) {
    throw new Error(
      "\n\nVue packages version mismatch:\n\n" + "- vue@" + vueVersion + "\n" +
        "- " + packageName + "@" + packageVersion + "\n\n" +
        "This may cause things to work incorrectly. Make sure to use the same version for both.\n",
    );
  }

  {
    exports = _buildDevDewDew();
  }
  return exports;
}
