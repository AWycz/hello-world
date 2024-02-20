// Pobieranie wszystkich elementów typu radio z atrybutem name="czyPaczek"
var czyPaczek = document.getElementsByName("czyPaczek");
var czyPaczekOpdowiedz = document.getElementById("czyPaczekOpdowiedz");

// Dodanie zdarzenia onchange dla każdego z radio buttonów
czyPaczek.forEach(function(radioButton) {
    radioButton.addEventListener("change", function() {
        // Sprawdzenie, który radio button został zaznaczony
        if (this.value === "tak") {
            czyPaczekOpdowiedz.value ="Brawo, jesteś pączkiem!";
        } else {
            czyPaczekOpdowiedz.value ="Czy aby na pewno nie jesteś pączkiem?";
        }
    });
});

function generujLinkPowrotu(){
    var linkPowrotu = document.createElement("a");
    linkPowrotu.href = "../test.html";
    linkPowrotu.textContent = "Do głównej";
    return linkPowrotu;
}
var funkcjaDoWracania = document.getElementById("funkcjaDoWracania");
funkcjaDoWracania.appendChild(generujLinkPowrotu());

//kod dla quizu
function papiez(){
    if(document.getElementsByName("kolor") != null){
        
    }
    var czytToPapaj
}