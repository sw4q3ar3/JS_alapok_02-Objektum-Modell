// addEventListener: eseménykezelőt rendelhetünk vele egy adott elemhez.
// az események sokfélék lehetnek:
    // -ablak betöltődése -> load
    // -egér kattintás -> click
    // -billentyű lenyomás -> keyup

// Az alábbi utasitásban az ablak betöltődéséhez rendeljük hozzá a "load" eseményt
// amikor megtörtént az esemény, csak akkor fogja meghivni az "init" függvényt 
window.addEventListener("load", init);
// Tehát amikor az init függvény lefut, akkor már biztos létezik az az elem,
// amibe irni szeretnénk az "innerHTML"-el 

function init(){
    // meg();
    hello();
}

// Röviditő függvény a "document.getElementById("uzenet")" elemhez
// Így tehát használhatjuk a "documentum.getElementById" helyett az "ID" függvényt
function ID(elem){
    return document.getElementById(elem);
}

var kepeim = [
    {
        cim: "Elso kep cime",
        leiras: "1. kep hosszu leirasa",
        eleresiUt: "kepek/kismacska1.jpg"
    },
    {
        cim: "Masodik kep cime",
        leiras: "2. kep hosszu leirasa",
        eleresiUt: "kepek/kismacska1.jpg"
    },
    {
        cim: "Harmadik kep cime",
        leiras: "3. kep hosszu leirasa",
        eleresiUt: "kepek/kismacska1.jpg"
    }
]

function meg(){
    var txt = "";
    for (let i = 0; i < kepeim.length; i++) {
        txt += "<h3>" + kepeim[i].cim + "</h3>";
        txt += "img src='" + kepeim[i].eleresiUt + "'alt='" + kepeim[i].cim + "'>";
        txt += "<p>" + kepeim[i].leiras + "</p>";
    }
    ID("galeria").innerHTML = txt;
}


function hello(){
    ID("demo").innerHTML = "Hello World";
}
