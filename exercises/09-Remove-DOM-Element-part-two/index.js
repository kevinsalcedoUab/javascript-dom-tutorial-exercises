let list = document.querySelector("#parentLI");
let childs = list.childNodes;
childs[3].parentNode.removeChild(childs[2]);
