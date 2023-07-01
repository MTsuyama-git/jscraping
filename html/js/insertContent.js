const insertContent = (url, element) => {
    let tmp_element = document.createElement("div");
    fetch(url).then((response) => response.text()).then((data) => {
        tmp_element.innerHTML = data;
        let nodes = [tmp_element];
        let excerption = null;
        while (nodes.length !== 0 && excerption === null) {
            let n = nodes.splice(0, 1)[0];
            if (n === undefined) {
                break;
            }
            if (!(n instanceof Element)) {
                continue;
            }
            if (n.classList.contains("excerption")) {
                excerption = n;
            }
            else {
                nodes.push(...n.childNodes);
            }
        }
        if (excerption !== null) {
            element.appendChild(excerption);
        }
    });
}