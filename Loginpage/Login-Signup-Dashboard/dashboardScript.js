function showHeadTags() {
    let ulTag = document.querySelector("#orderedList")
    if (ulTag.style.opacity == 0) {
        ulTag.style.opacity = 1;
        ulTag.style.transition = ".5s";
    }
    else {
        ulTag.style.opacity = 0;
        ulTag.style.transition = ".5s";
    }
}