let checkbox = document.createElement("input");
checkbox.type = "checkbox";

const alternativer = [
  {
    id: "oljeflekker",
    verdi: "olje",
    tekst: "Oljeflekker",
    sjekket: false,
    instruksjonTittel: "Fjerning av Oljeflekker",
    instruksjonInnhold: `
      <h4>Steg 1:</h4>
      <p>Skrap forsiktig bort overflødig olje.</p>
      <h4>Steg 2:</h4>
      <p>Påfør Zalo (eller annet flytende oppvaskmiddel) direkte på flekken, og gni forsiktig inn.</p>
      <h4>Steg 3:</h4>
      <p>La det virke i 10-15 minutter.</p>
      <h4>Steg 4:</h4>
      <p>Vask plagget i henhold til vaskeanvisningen, gjerne på høyest tillatt temperatur.</p>
    `,
  },
  {
    id: "rødvinsflekker",
    verdi: "rødvin",
    tekst: "Rødvinsflekker",
    sjekket: false,
  },
  { id: "grønske", verdi: "gronske", tekst: "Grønske", sjekket: false },
  { id: "matflekker", verdi: "mat", tekst: "Matflekker", sjekket: false },
];

// Funksjon for å lage ett sett (checkbox + label)
function lagAvkrysningsboksElement(data) {
  // Wrapper for styling (bruker div som i forrige eksempel)
  const wrapper = document.createElement("div");
  // Du kan legge til en klasse her for å style dem som i bildet
  wrapper.classList.add("flekk-valg-boks-item");

  // 1. Opprett avkrysningsboksen
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = data.id;
  checkbox.value = data.verdi;
  checkbox.checked = data.sjekket;

  // 2. Opprett label-elementet
  const label = document.createElement("label");
  label.htmlFor = data.id;
  label.appendChild(document.createTextNode(data.tekst));

  // 3. Sett dem sammen i wrapperen
  wrapper.appendChild(checkbox);
  wrapper.appendChild(label);

  return wrapper;
}

// --- Hovedlogikk for å koble til HTML ---

// 4. Hent referanse til HTML-beholderen din: "flekk-valg-boks"
const flekkValgBoks = document.getElementById("flekk-valg-boks");

// 5. Legg alle elementene til i HTML-siden
if (flekkValgBoks) {
  alternativer.forEach((alternativ) => {
    const element = lagAvkrysningsboksElement(alternativ);
    flekkValgBoks.appendChild(element);
  });
} else {
  console.error("Finner ikke #flekk-valg-boks i HTML-dokumentet.");
}

// --- Bonus: Aktiver 'Neste'-knappen når noe er valgt ---

const nesteKnapp = document.getElementById("neste-knapp");

// Legger til en "change" lytter til hele beholderen (event delegation)
flekkValgBoks.addEventListener("change", function () {
  // Sjekk om minst én boks er sjekket
  // QuerySelectorAll finner alle input[type="checkbox"] innenfor beholderen
  const checkboxes = flekkValgBoks.querySelectorAll('input[type="checkbox"]');
  let minstEnSjekket = false;

  checkboxes.forEach((cb) => {
    if (cb.checked) {
      minstEnSjekket = true;
    }
  });

  // Aktiver eller deaktiver knappen basert på om noe er sjekket
  if (minstEnSjekket) {
    nesteKnapp.disabled = false;
  } else {
    nesteKnapp.disabled = true;
  }
});
