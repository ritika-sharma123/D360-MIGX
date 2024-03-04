import { appConfigLocal, appConfigDemo } from "./appConfig";


let getLocation = function(href) {
    let path = document.createElement("a");
    path.href = href;
    return path;
};
let appConfig = '';
let path = getLocation(window.location.href);
if (path.hostname === 'localhost') {
    appConfig = appConfigLocal;
} else if (
  path.hostname === "dewta.dvconsulting.org" &&
  window.location.href.split("/")[3] !== "development" &&
  window.location.href.split("/")[3] !== "qa"
) {
  appConfig = appConfigDemo;
} else if (
  window.location.href.split("/")[3] === "development" ||
  window.location.href.split("/")[3] === "qa"
) {
  appConfig = appConfigLocal;
} else {
  appConfig = appConfigLocal;
}

export const env = { appConfig };