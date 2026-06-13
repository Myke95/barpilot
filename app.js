const container = document.getElementById("app");
const search = document.getElementById("search");
const selectIngrediente = document.getElementById("select-ingrediente");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

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

    cardBody.append(titolo, tagContainer, ingredientiContainer);
    card.append(foto, cardBody);

    card.addEventListener("click", () => {
      openModal(c);
    });

    fragment.append(card);
  });

  container.append(fragment);
}

function openModal(c) {
  modalBody.innerHTML = `
    <img class="modal-img" src="${c.immagine}" alt="${c.nome}">

    <div class="modal-info">
      <h2>${c.nome}</h2>

      <div class="tags-container">
        ${(c.tag || "")
          ? c.tag.map((t) => `<span class="tag-badge">${t}</span>`).join("")
          : ""}
        ${
          !c.alcolico
            ? `<span class="tag-badge">Analcolico</span>`
            : ""
        }
      </div>

      <div class="ingredients-container">
        ${c.ingredienti
          .map(
            (ing) => `
            <span class="ingredient-badge">
              <span class="qty">${ing.quantita}</span>
              <span class="ing-name">${ing.nome}</span>
            </span>
          `
          )
          .join("")}
      </div>

      <p class="bicchiere"><strong>Bicchiere:</strong> ${c.bicchiere}</p>

      ${
        c.garnish
          ? `<p class="garnish"><strong>Garnish:</strong> ${c.garnish}</p>`
          : ""
      }


      ${
        c.note
          ? `
            <div class="note">
              <strong>Note:</strong>
              <ul>
                ${c.note.map((n) => `<li>${n}</li>`).join("")}
              </ul>
            </div>
          `
          : ""
      }

      <p class="preparazione">
        <strong>Preparazione:</strong> ${c.preparazione}
      </p>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

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