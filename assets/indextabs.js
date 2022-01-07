let isMobile = window.matchMedia("(max-width: 900px)");
function collapse(el) {

    if (document.getElementsByClassName("dissapearer").length !== 0) {
        document.getElementsByClassName("dissapearer")[0].style.display = "none";
        document.getElementsByClassName("dissapearer")[0].classList.remove("dissapearer");
        document.getElementById("focus").classList.remove("expand");
    }

    let focussedVar = document.getElementById("focus");

    // Page is open is to the right of clicked element ie moving left and
    // The Open Pages Link is to the right of it
    if (retPos(focussedVar) > retPos(el) && retPos(focussedVar) < retPos(getByColor(focussedVar)) && !isMobile.matches) {
        // Move the focused var down one ie to the left
        focussedVar.parentNode.insertBefore(focussedVar.nextElementSibling, focussedVar);
    }

    // Page is open is to the left of clicked element ie. moving right and
    // The Open Pages Link is to the left of it
    if (retPos(focussedVar) < retPos(el) && retPos(focussedVar) > retPos(getByColor(focussedVar)) && !isMobile.matches) {
        // Move the focused var down one ie to the left
        focussedVar.parentNode.insertBefore(focussedVar, focussedVar.previousElementSibling);
    }

    //focussedVar.nextElementSibling.style.display = "flex";
    getByColor(focussedVar).style.display = "flex";
    getByColor(el).style.display = "flex";
    getByColor(el).id = "focus";
    // el.previousElementSibling.style.display = "flex";
    // el.previousElementSibling.classList.add("expand");
    // el.previousElementSibling.id = "focus";
    el.style.display = "none";

    if (!isMobile.matches) {
        getByColor(el).classList.add("expand");
        focussedVar.classList.add("dissapearer");
    }

    focussedVar.id = "";
}

function retPos(el) {
    for (let i = 0; i < document.getElementsByClassName("line-container")[0].children.length; i++) {
        if (document.getElementsByClassName("line-container")[0].children[i] === el) {
            return i;
        }
    }
}

const colors = new Set(["smoke", "beige", "purple", "green"]);

function getByColor(el) {
    let colToFind = "";
    el.classList.forEach(element => {
        if (colors.has(element)) {
            colToFind = element;
        }
    });

    let posEls = document.getElementsByClassName(colToFind);

    if (posEls[0] !== el) {
        return posEls[0];
    } else {
        return posEls[1];
    }
}