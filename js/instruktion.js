console.log("Loaded instuctions...");

document.querySelector("#genser2").addEventListener("click", genserF);

function genserF() {
  console.log("genserF er i huset");
  document.querySelector("#genser").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent = "Plet på genser";
  document.querySelector("#efficiency.info-box").textContent =
    "Olie/Fedt: Opvaskemiddel (Zalo). Vask varmt. Rødvin: Varmt vand (hvis muligt) + flydende vaskemiddel. Græs/Jord: Flydende vaskemiddel.     Ketchup/Tomat: Koldt vand først + sæbe. Blod: Koldt vand! Brug enzymsæbe.     Kaffe: Tør med klud dyppet i hvid eddike.";
  document.querySelector("#requirement.info-box").textContent =
    "Husk altid: Tjek vaskemærket på trøjen først. Brug kun lunkent/koldt vand og skånsomme midler til uld og silke.";
}

document.querySelector("#bukse").addEventListener("click", bukseF);

function bukseF() {
  console.log("bukseF er i huset");
  document.querySelector("#bukser").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent = "Plet på bukse";

  document.querySelector(".info-text p").textContent = "Plet på bdddukse";
  document.querySelector("#efficiency.info-box").textContent =
    "Olie/Fedt: Opvaskemiddel (Zalo). Vask varmt. Rødvin: Varmt vand (hvis muligt) + flydende vaskemiddel. Græs/Jord: Flydende vaskemiddel.     Ketchup/Tomat: Koldt vand først + sæbe. Blod: Koldt vand! Brug enzymsæbe.     Kaffe: Tør med klud dyppet i hvid eddike.";
  document.querySelector("#requirement.info-box").textContent =
    "Husk altid: Tjek vaskemærket på trøjen først. Brug kun lunkent/koldt vand og skånsomme midler til uld og silke.";
}

document
  .querySelector("#vaskemaskinen")
  .addEventListener("click", vaskemaskinenF);

function vaskemaskinenF() {
  console.log("vaskemaskinenF er i huset");
  document.querySelector("#therealwasher").classList.add("my_scale");

  document.querySelector(".info-text h2").textContent = "Vaskeprogrammer";
  document.querySelector("#efficiency.info-box").textContent =
    "Olie/Fedt: Opvaskemiddel (Zalo). Vask varmt. Rødvin: Varmt vand (hvis muligt) + flydende vaskemiddel. Græs/Jord: Flydende vaskemiddel. Ketchup/Tomat: Koldt vand først + sæbe. Blod: Koldt vand! Brug enzymsæbe. Kaffe: Tør med klud dyppet i hvid eddike.";
  document.querySelector("#requirement.info-box").textContent =
    "Husk altid: Tjek vaskemærket på trøjen først. Brug kun lunkent/koldt vand og skånsomme midler til uld og silke.";
}

function hardResetSide() {
  // Denne linjen laster HELE nettsiden på nytt fra toppen av.
  location.reload();
}

if (tilbakeKnapp) {
  tilbakeKnapp.addEventListener("click", hardResetSide);
}

/*ULIKE VARIANTER AV Å PRØVE Å TILBAKESTILLE SOM IKKE FUNGERTE
/* document.querySelector("#tilbakeKnapp").addEventListener("click", tilbakeF); 

/*function resetSide(){
    alleValgbareKnapper.forEach(knapp=>)
        knapp.classList.remove("valgt");
}

function tilbakeF() {}

if (tilbakeKnapp) {
  tilbakeKnapp.addEventListener("click", tilbakeF);
}

if (actionKnapp) {
  actionKnapp.addEventListener("click", funcion);
}

if (actionKnapp) {
  tilbakeKnapp.style.display = "block";
}
*/
