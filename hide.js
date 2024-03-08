var hidden = new Boolean(false);

function hide() {
    if (hidden == false) {
        document.getElementById("hidethisheader").style.visibility = "hidden";
        document.getElementById("hidethisfooter").style.visibility = "hidden";
        hidden = true
        document.getElementById("focus").style.cursor = "zoom-out"
    }
    else {
        document.getElementById("hidethisheader").style.visibility = "visible";
        document.getElementById("hidethisfooter").style.visibility = "visible";
        hidden = false
        document.getElementById("focus").style.cursor = "zoom-in"
    }

}