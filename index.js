function klik() {
    document.getElementById("tlacitko").innerHTML = "Výborně!";
}

function generuj() {
    let text = document.getElementById("text").value;
    let cislo = document.getElementById("cislo").value;

    let vysledek = "";
    for (let i = 0; i < cislo; i++) {
        vysledek += text;
    }

    document.getElementById("vysledek").innerHTML = vysledek;
}



