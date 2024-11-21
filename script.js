
function catering(pocetLudi, nazovSpolocnosti, cenaZaOsobu)
{
    const cenaCelkom = cenaZaOsobu * pocetLudi;
    return `Catering od ${nazovSpolocnosti} pre ${pocetLudi} ľudí za ${cenaCelkom} CZK`;
}

function justFood(pocetLudi) {
    const cenaZaOsobu = 150; 
    return catering(pocetLudi, "Just Food", cenaZaOsobu);
}

function yourMama(pocetLudi) {
    const cenaZaOsobu = 400; 
    return catering(pocetLudi, "Your Mama", cenaZaOsobu);
}

function flavourHaven(pocetLudi) {
    const cenaZaOsobu = 700; 
    return catering(pocetLudi, "Flavour Haven", cenaZaOsobu);
}

function createEvent(nazovUdalosti, pocetLudi, cateringFunkcia) {
    const cateringSprava = cateringFunkcia(pocetLudi);
    return `Udalosť ${nazovUdalosti} s ${cateringSprava}`;
}

//príklad ako to má vyzerať
console.log(createEvent("Gala večer", 100, flavourHaven));


