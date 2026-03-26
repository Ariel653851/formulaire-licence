const formulas = [
    {
        id: "poids",
        title: "Poids d'un corps",
        subject: "physique",
        level: "1ere",
        formula: "P = m \\times g",
        definition: "Relation entre le poids, la masse et l'intensité de la pesanteur.",
        units: "P en Newtons (N), m en kg, g (≈ 9,81 N/kg).",
        tags: ["mécanique", "gravité"]
    },
    {
        id: "vitesse",
        title: "Vitesse moyenne",
        subject: "physique",
        level: "1ere",
        formula: "v = \\frac{d}{t}",
        definition: "Rapport de la distance parcourue par le temps mis à la parcourir.",
        units: "v en m/s, d en mètres (m), t en secondes (s).",
        tags: ["cinématique"]
    },
    {
        id: "ec",
        title: "Énergie cinétique",
        subject: "physique",
        level: "1ere",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "Énergie que possède un corps du fait de son mouvement.",
        units: "Ec en Joules (J), m en kg, v en m/s.",
        tags: ["énergie", "mécanique"]
    },
    {
        id: "epp",
        title: "Énergie potentielle de pesanteur",
        subject: "physique",
        level: "terminale",
        formula: "E_{pp} = m \\times g \\times h",
        definition: "Énergie liée à l'altitude d'un corps.",
        units: "Epp en Joules (J), m en kg, h en mètres (m).",
        tags: ["énergie", "potentielle"]
    },
    {
        id: "newton2",
        title: "Deuxième loi de Newton",
        subject: "physique",
        level: "terminale",
        formula: "\\Sigma \\vec{F} = m \\times \\vec{a}",
        definition: "Relation fondamentale de la dynamique : la somme des forces est égale au produit de la masse par l'accélération.",
        units: "F en N, m en kg, a en m/s².",
        tags: ["mécanique", "dynamique", "forces"]
    },
    {
        id: "ohm",
        title: "Loi d'Ohm",
        subject: "physique",
        level: "1ere",
        formula: "U = R \\times I",
        definition: "Tension aux bornes d'un dipôle ohmique.",
        units: "U en Volts (V), R en Ohms (Ω), I en Ampères (A).",
        tags: ["électricité"]
    },
    {
        id: "quantitematiere",
        title: "Quantité de matière (solide)",
        subject: "chimie",
        level: "1ere",
        formula: "n = \\frac{m}{M}",
        definition: "Nombre de moles contenues dans une masse donnée.",
        units: "n en mol, m en g, M en g/mol.",
        tags: ["moles", "matière"]
    },
    {
        id: "concentration",
        title: "Concentration molaire",
        subject: "chimie",
        level: "1ere",
        formula: "C = \\frac{n}{V}",
        definition: "Quantité de matière dissoute par litre de solution.",
        units: "C en mol/L, n en mol, V en Litres (L).",
        tags: ["solution", "chimie"]
    },
    {
        id: "ph",
        title: "Calcul du pH",
        subject: "chimie",
        level: "terminale",
        formula: "pH = -\\log([H_3O^+])",
        definition: "Potentiel hydrogène d'une solution aqueuse.",
        units: "[H3O+] en mol/L.",
        tags: ["acide-base", "pH"]
    },
    {
        id: "beerlambert",
        title: "Loi de Beer-Lambert",
        subject: "chimie",
        level: "1ere",
        formula: "A = \\epsilon \\times l \\times C",
        definition: "Relation entre l'absorbance d'une solution et sa concentration.",
        units: "A (sans unité), ε en L/mol/cm, l en cm, C en mol/L.",
        tags: ["spectroscopie", "lumière"]
    },
    {
        id: "frequence",
        title: "Relation Fréquence/Période",
        subject: "physique",
        level: "1ere",
        formula: "f = \\frac{1}{T}",
        definition: "Nombre de cycles par seconde.",
        units: "f en Hertz (Hz), T en secondes (s).",
        tags: ["ondes", "périodique"]
    },
    {
        id: "gazparfait",
        title: "Loi des gaz parfaits",
        subject: "physique",
        level: "terminale",
        formula: "P \\times V = n \\times R \\times T",
        definition: "Équation d'état des gaz parfaits.",
        units: "P en Pa, V en m³, n en mol, R = 8,314 J/K/mol, T en Kelvin (K).",
        tags: ["pression", "thermodynamique"]
    },
    {
        id: "snell",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "1ere",
        formula: "n_1 \\sin(i_1) = n_2 \\sin(i_2)",
        definition: "Lois de la réfraction de la lumière.",
        units: "n indices de réfraction (sans unité), i en degrés ou radians.",
        tags: ["optique", "réfraction"]
    },
    {
        id: "kondukt",
        title: "Conductivité d'une solution",
        subject: "chimie",
        level: "terminale",
        formula: "\\sigma = \\sum \\lambda_i \\times [X_i]",
        definition: "Capacité d'une solution à laisser passer le courant électrique.",
        units: "σ en S/m, λi en S⋅m²/mol, [Xi] en mol/m³.",
        tags: ["électricité", "ions"]
    },
    {
        id: "niveau-sonore",
        title: "Niveau d'intensité sonore",
        subject: "physique",
        level: "terminale",
        formula: "L = 10 \\log \\left( \\frac{I}{I_0} \\right)",
        definition: "Mesure du niveau sonore en décibels.",
        units: "L en décibels (dB), I en W/m², I₀ = 10⁻¹² W/m².",
        tags: ["ondes", "son"]
    },
    {
        id: "radioactivite",
        title: "Loi de décroissance radioactive",
        subject: "physique",
        level: "terminale",
        formula: "N(t) = N_0 e^{-\\lambda t}",
        definition: "Évolution du nombre de noyaux radioactifs au cours du temps.",
        units: "N nombre de noyaux, λ constante radioactive (s⁻¹), t en s.",
        tags: ["nucléaire", "temps"]
    },
    {
        id: "photon",
        title: "Énergie d'un photon",
        subject: "physique",
        level: "terminale",
        formula: "E = h \\times f = \\frac{h \\times c}{\\lambda}",
        definition: "Énergie transportée par un quantum de lumière.",
        units: "E en Joules (J), h = 6,63.10⁻³⁴ J.s, f en Hz, λ en m.",
        tags: ["quantique", "lumière"]
    },
    {
        id: "vitesse-volumique",
        title: "Vitesse volumique d'apparition",
        subject: "chimie",
        level: "terminale",
        formula: "v_{app}(P) = \\frac{d[P]}{dt}",
        definition: "Vitesse de formation d'un produit au cours d'une réaction.",
        units: "v en mol/L/s, [P] en mol/L.",
        tags: ["cinétique", "réaction"]
    },
    {
        id: "ka",
        title: "Constante d'acidité Ka",
        subject: "chimie",
        level: "terminale",
        formula: "K_a = \\frac{[A^-]_{eq} \\times [H_3O^+]_{eq}}{[AH]_{eq}}",
        definition: "Caractérise la force d'un acide en solution.",
        units: "Ka sans unité, concentrations en mol/L.",
        tags: ["acide-base", "équilibre"]
    }
];

// State
let currentFilter = 'all';
let currentLevel = 'all';
let searchQuery = '';

const container = document.getElementById('formulas-container');
const searchInput = document.getElementById('formula-search');
const navBtns = document.querySelectorAll('.nav-btn');
const levelBtns = document.querySelectorAll('.level-btn');
const modal = document.getElementById('formula-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

// Functions
function renderFormulas() {
    container.innerHTML = '';
    
    const filtered = formulas.filter(f => {
        const matchesSubject = currentFilter === 'all' || f.subject === currentFilter;
        const matchesLevel = currentLevel === 'all' || f.level === currentLevel;
        const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
                             f.units.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSubject && matchesLevel && matchesSearch;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<div class="loader">Aucune formule trouvée...</div>';
        return;
    }

    filtered.forEach(f => {
        const card = document.createElement('div');
        card.className = `formula-card ${f.subject}`;
        card.innerHTML = `
            <div class="card-header">
                <span class="badge badge-${f.subject}">${f.subject}</span>
                <span class="badge badge-level">${f.level === '1ere' ? 'Première' : 'Terminale'}</span>
            </div>
            <h3>${f.title}</h3>
            <div class="formula-display">
                \\[ ${f.formula} \\]
            </div>
            <div class="card-footer">
                <span>Cliquez pour plus d'infos</span>
                <i data-lucide="chevron-right"></i>
            </div>
        `;
        card.onclick = () => showDetails(f);
        container.appendChild(card);
    });

    // Re-render math
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
    // Re-create icons
    lucide.createIcons();
}

function showDetails(f) {
    modalBody.innerHTML = `
        <h2 style="margin-bottom: 1rem; color: var(--primary)">${f.title}</h2>
        <div style="font-size: 2rem; margin: 2rem 0; text-align: center;">
            \\[ ${f.formula} \\]
        </div>
        <p><strong>Définition :</strong> ${f.definition}</p>
        <p style="margin: 1rem 0;"><strong>Unités :</strong> ${f.units}</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${f.tags.map(t => `<span class="badge badge-level">#${t}</span>`).join('')}
        </div>
    `;
    modal.style.display = 'block';
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}

// Events
searchInput.oninput = (e) => {
    searchQuery = e.target.value;
    renderFormulas();
};

navBtns.forEach(btn => {
    btn.onclick = () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderFormulas();
    };
});

levelBtns.forEach(btn => {
    btn.onclick = () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLevel = btn.dataset.level;
        renderFormulas();
    };
});

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Init
renderFormulas();
