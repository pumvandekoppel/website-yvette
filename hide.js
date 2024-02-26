var hidden = new Boolean(false);

function hide() {
    if (hidden == false) {
        document.getElementById("hidethisheader").style.display = "none";
        document.getElementById("hidethisfooter").style.display = "none";
        hidden = true
        document.getElementById("focus").style.cursor = "zoom-out"
    }
    else {
        document.getElementById("hidethisheader").style.display = "flex";
        document.getElementById("hidethisfooter").style.display = "flex";
        hidden = false
        document.getElementById("focus").style.cursor = "zoom-in"
    }

}