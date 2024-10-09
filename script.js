let index = 1;
function changeClass() {
    if (index == 1) {
        document.getElementById("Semafor").classList.remove("btn-Danger");
        document.getElementById("Semafor").classList.add("btn-Warning");
    } else if (index == 2) {
        document.getElementById("Semafor").classList.remove("btn-Warning");
        document.getElementById("Semafor").classList.add("btn-Success");
    } else if (index == 3) {
        document.getElementById("Semafor").classList.remove("btn-Success");
        document.getElementById("Semafor").classList.add("btn-Danger");
        index = 0;
    }                
    index++;
}
setInterval(changeClass, 10000);
