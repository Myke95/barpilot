const container = document.getElementById("app");
const search = document.getElementById("search");
const selectIngrediente = document.getElementById("select-ingrediente");

let savedScrollY = 0;

let activeFilters = { ingrediente: "" };
let searchText = "";

function render(list) {
  container.replaceChildren();

  if (!list.length) {
    container.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; color: #9ca3af;'>Nessun risultato trovato.</p>";
    return;
  }

  const fragment = document.createDocumentFragment();

  list.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";

    const bottoneChiudi = document.createElement("button");
    bottoneChiudi.className = "close-card-btn";
    bottoneChiudi.innerHTML = "&times;";

    const foto = document.createElement("img");
    foto.className = "card-thumb";
    foto.src = c.immagine;
    foto.alt = c.nome;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titolo = document.createElement("h2");
    titolo.textContent = c.nome;

    const tagContainer = document.createElement("div");
    tagContainer.className = "tags-container";

   if (c.tag) {
  c.tag.forEach((t) => {
    const tagSpan = document.createElement("span");
    tagSpan.className = "tag-badge";
    tagSpan.textContent = t;
    tagContainer.append(tagSpan);
  });
}

if (!c.alcolico) {
  const tagAnalcolico = document.createElement("span");
  tagAnalcolico.className = "tag-badge";
  tagAnalcolico.textContent = "Analcolico";
  tagContainer.append(tagAnalcolico);
}

   
    const ingredientiContainer = document.createElement("div");
    ingredientiContainer.className = "ingredients-container";

c.ingredienti.forEach((ing) => {
  const ingredienteSpan = document.createElement("span");
  ingredienteSpan.className = "ingredient-badge";

  ingredienteSpan.innerHTML = `
    <span class="qty">${ing.quantita}</span>
    <span class="ing-name">${ing.nome}</span>
  `;

  ingredientiContainer.append(ingredienteSpan);
});

    const bicchiere = document.createElement("p");
    bicchiere.className = "bicchiere";
    bicchiere.innerHTML = `<strong>Bicchiere:</strong> ${c.bicchiere}`;

    const preparazione = document.createElement("p");
    preparazione.className = "preparazione";
    preparazione.innerHTML = `<strong>Preparazione:</strong> ${c.preparazione}`;

    cardBody.append(
      titolo,
      tagContainer,
      ingredientiContainer,
      bicchiere,
      preparazione
    );

    card.append(bottoneChiudi, foto, cardBody);

    card.addEventListener("click", (e) => {
      if (!card.classList.contains("modal-mode")) {
        e.stopPropagation();
        savedScrollY = window.scrollY;

        card.classList.add("modal-mode");
        document.body.classList.add("modal-open");
        document.body.style.overflow = "hidden";
      }
    });

    bottoneChiudi.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.remove("modal-mode");
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      window.scrollTo(0, savedScrollY);
    });

    fragment.append(card);
  });

  container.append(fragment);
}

function applicaFiltri() {
  let filtered = cocktails;

  if (searchText) {
    filtered = filtered.filter((c) =>
      c.nome.toLowerCase().includes(searchText)
    );
  }

  if (activeFilters.ingrediente) {
    filtered = filtered.filter((c) =>
      c.ingredienti.some(
        (ing) => ing.nome.toLowerCase() === activeFilters.ingrediente
      )
    );
  }

  render(filtered);
}

search.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase().trim();
  applicaFiltri();
});

selectIngrediente.addEventListener("change", (e) => {
  activeFilters.ingrediente = e.target.value.toLowerCase().trim();
  applicaFiltri();
});

selectIngrediente.value = "";

applicaFiltri();