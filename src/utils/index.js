export { FTGetFileType } from "./FTFormat";
export { FTApi } from "./FTApi";

export function FTLoadSvg(svg) {
  let f = document.createDocumentFragment(),
    div = document.createElement("div"),
    full = true;
  svg = String(svg);
  if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
    svg = "<svg>" + svg + "</svg>";
    full = false;
  }
  div.innerHTML = svg;
  svg = div.getElementsByTagName("svg")[0];
  if (svg) {
    if (full) {
      f = svg;
    } else {
      while (svg.firstChild) {
        f.appendChild(svg.firstChild);
      }
    }
  }
  return f.children[0];
}

export function formatNumber(n) {
  const str = n.toString();
  return str[1] ? str : `0${str}`;
}

export function formatTime(date) {
  console.log(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const t1 = [year, month, day].map(formatNumber).join("/");
  const t2 = [hour, minute, second].map(formatNumber).join(":");
  return `${t1} ${t2}`;
}
