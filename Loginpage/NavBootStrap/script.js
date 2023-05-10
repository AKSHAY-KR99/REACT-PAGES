function showHeadTags() {
    let ulTag = document.querySelector("#orderedList")
    if (ulTag.style.left == "100%") {
        ulTag.style.left = "0";
    }
    else if (ulTag.style.left == "0") {
        ulTag.style.left = "100%";
    }
    else {
        ulTag.style.left = "100%";
    }
}