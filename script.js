console.log('hallo')

const drinkKnop = document.querySelector('#buttonDrinken')
const eetKnop = document.querySelector('#buttonEten')
const katKnop = document.querySelector('#katMidden')

const katAfbeelding = document.querySelector('#kat')
const katGeluid = document.querySelector('#spinnendeKat')

let getal = 0

let scoreDrinken = document.querySelector('#getalDrinken')
let scoreEten = document.querySelector('#getalEten')
let scoreAaien = document.querySelector('#getalAaien')


function katDrinken(){
    getal = getal + 1
    scoreDrinken.textContent = getal
}

drinkKnop.addEventListener('click', katDrinken)

function katEten(){
    getal = getal + 1
    scoreEten.textContent = getal
}

eetKnop.addEventListener('click', katEten)

function speelGeluid(){
    katGeluid.play()
}

katAfbeelding.addEventListener('click', speelGeluid)


// Selecteer de XP-balken
const drinkenXPBalk = document.querySelector('#drinkenXP .xp-bar');
const etenXPBalk = document.querySelector('#etenXP .xp-bar');
const aaienXPBalk = document.querySelector('#aaienXP .xp-bar');

// Variabelen om bij te houden hoeveel XP er is verkregen
let drinkenXP = 0;
let etenXP = 0;
let aaienXP = 0;

// Functie om XP toe te voegen aan de XP-balken en deze bij te werken
function updateXP() {
    // Bereken de nieuwe breedte van de XP-balken
    const drinkenXPBreedte = (drinkenXP / 100) * 100; // Aanpassen aan je behoeften
    const etenXPBreedte = (etenXP / 100) * 100; // Aanpassen aan je behoeften
    const aaienXPBreedte = (aaienXP / 100) * 100; // Aanpassen aan je behoeften

    // Pas de breedte van de XP-balken aan
    drinkenXPBalk.style.width = drinkenXPBreedte + '%';
    etenXPBalk.style.width = etenXPBreedte + '%';
    aaienXPBalk.style.width = aaienXPBreedte + '%';
}

// Event listener voor drinkknop
drinkKnop.addEventListener('click', function() {
    drinkenXP += 10; // Voeg bijvoorbeeld 10 XP toe wanneer er op de drinkknop wordt geklikt
    updateXP(); // Werk de XP-balken bij
});

// Event listener voor eetknop
eetKnop.addEventListener('click', function() {
    etenXP += 10; // Voeg bijvoorbeeld 10 XP toe wanneer er op de eetknop wordt geklikt
    updateXP(); // Werk de XP-balken bij
});

// Event listener voor aaienknop
aaienKnop.addEventListener('click', function() {
    aaienXP += 10; // Voeg bijvoorbeeld 10 XP toe wanneer er op de aaienknop wordt geklikt
    updateXP(); // Werk de XP-balken bij
});