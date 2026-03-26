const formulas = [
    {
        id: "poids",
        title: "Poids d'un corps",
        subject: "physique",
        level: "1ere",
        formula: "P = m \\times g",
        definition: "Le poids est la force d'attraction gravitationnelle exercée par un astre (comme la Terre) sur un objet possédant une masse. C'est une grandeur vectorielle toujours dirigée vers le centre de l'astre.",
        properties: "Le poids dépend du lieu (car g change avec l'altitude et la latitude), alors que la masse est une constante intrinsèque à l'objet. Sur Terre, g ≈ 9,81 N/kg.",
        units: "P en Newtons (N), m en kg, g en N/kg.",
        tags: ["mécanique", "gravité"]
    },
    {
        id: "vitesse",
        title: "Vitesse moyenne",
        subject: "physique",
        level: "1ere",
        formula: "v = \\frac{d}{t}",
        definition: "La vitesse moyenne est le rapport entre la distance totale parcourue et la durée écoulée pour parcourir cette distance. Elle ne rend pas compte des variations de vitesse pendant le trajet.",
        properties: "Pour obtenir la vitesse en m/s (unité légale), la distance doit être en mètres et le temps en secondes. Pour passer de km/h à m/s, on divise par 3,6.",
        units: "v en m/s, d en mètres (m), t en secondes (s).",
        tags: ["cinématique"]
    },
    {
        id: "ec",
        title: "Énergie cinétique",
        subject: "physique",
        level: "1ere",
        formula: "E_c = \\frac{1}{2} m v^2",
        definition: "L'énergie cinétique est l'énergie que possède un système du fait de son mouvement par rapport à un référentiel donné. Elle est toujours positive ou nulle.",
        properties: "Elle est proportionnelle au carré de la vitesse : si la vitesse double, l'énergie cinétique est multipliée par quatre. Importante pour les calculs de distance d'arrêt.",
        units: "Ec en Joules (J), m en kg, v en m/s.",
        tags: ["énergie", "mécanique"]
    },
    {
        id: "epp",
        title: "Énergie potentielle de pesanteur",
        subject: "physique",
        level: "terminale",
        formula: "E_{pp} = m \\times g \\times z",
        definition: "L'énergie potentielle de pesanteur est l'énergie que possède un système du fait de sa position (hauteur) par rapport à la Terre. Elle dépend du choix de l'origine des altitudes.",
        properties: "La variation d'énergie potentielle ne dépend que de la variation de hauteur, pas du chemin suivi. ΔEpp = m.g.(zB - zA).",
        units: "Epp en Joules (J), m en kg, z en mètres (m).",
        tags: ["énergie", "potentielle"]
    },
    {
        id: "newton2",
        title: "Deuxième loi de Newton",
        subject: "physique",
        level: "terminale",
        formula: "\\Sigma \\vec{F}_{ext} = m \\times \\vec{a}",
        definition: "Dans un référentiel galiléen, la somme vectorielle des forces extérieures appliquées à un système est égale au produit de sa masse par le vecteur accélération de son centre de masse.",
        properties: "C'est la loi fondamentale de la dynamique (RFD). Elle permet de déterminer la trajectoire d'un objet si on connaît toutes les forces qui s'exercent sur lui.",
        units: "F en N, m en kg, a en m/s².",
        tags: ["mécanique", "dynamique", "forces"]
    },
    {
        id: "ph",
        title: "Calcul du pH",
        subject: "chimie",
        level: "terminale",
        formula: "pH = -\\log([H_3O^+]/c^0)",
        definition: "Le pH (potentiel Hydrogène) mesure l'acidité d'une solution aqueuse. Il est lié à la concentration molaire des ions oxonium H3O+.",
        properties: "L'échelle de pH va généralement de 0 à 14. Une solution est acide si pH < 7, basique si pH > 7 et neutre si pH = 7 (à 25°C). Relation inverse : [H3O+] = 10^-pH.",
        units: "[H3O+] en mol/L, c0 = 1 mol/L (standard).",
        tags: ["acide-base", "pH"]
    },
    {
        id: "ohm",
        title: "Loi d'Ohm",
        subject: "physique",
        level: "1ere",
        formula: "U = R \\times I",
        definition: "La tension U aux bornes d'un conducteur ohmique (résistor) est proportionnelle à l'intensité I du courant qui le traverse.",
        properties: "Le coefficient de proportionnalité R est la résistance, exprimée en Ohms. Elle traduit l'opposition du matériau au passage du courant.",
        units: "U en Volts (V), R en Ohms (Ω), I en Ampères (A).",
        tags: ["électricité"]
    },
    {
        id: "beerlambert",
        title: "Loi de Beer-Lambert",
        subject: "chimie",
        level: "1ere",
        formula: "A = \\epsilon \\times l \\times C",
        definition: "L'absorbance A d'une solution colorée est proportionnelle à la concentration C de l'espèce chimique colorée, pour une longueur d'onde donnée.",
        properties: "Valable uniquement pour des solutions diluées (C < 0,1 mol/L). ε est le coefficient d'extinction molaire, dépendant de l'espèce et de la longueur d'onde.",
        units: "A (sans unité), ε en L/mol/cm, l en cm, C en mol/L.",
        tags: ["spectroscopie", "lumière"]
    },
    {
        id: "radioactivite",
        title: "Loi de décroissance radioactive",
        subject: "physique",
        level: "terminale",
        formula: "N(t) = N_0 \\cdot e^{-\\lambda t}",
        definition: "La loi de décroissance radioactive donne le nombre de noyaux radioactifs restant dans un échantillon à un instant t donné.",
        properties: "λ est la constante radioactive. Le temps de demi-vie t1/2 est la durée au bout de laquelle la moitié des noyaux initiaux ont été désintégrés : t1/2 = ln(2)/λ.",
        units: "N nombre de noyaux (sans unité), λ en s⁻¹ (ou h⁻¹, an⁻¹), t en s (ou h, an).",
        tags: ["nucléaire", "temps"]
    },
    {
        id: "quantitematiere",
        title: "Quantité de matière (solide)",
        subject: "chimie",
        level: "1ere",
        formula: "n = m / M",
        definition: "Nombre de moles contenues dans une masse précise d'un corps pur.",
        properties: "M est la masse molaire atomique ou moléculaire, elle se trouve dans le tableau périodique.",
        units: "n en mol, m en grammes (g), M en g/mol.",
        tags: ["moles", "chimie"]
    },
    {
        id: "concentration",
        title: "Concentration molaire",
        subject: "chimie",
        level: "1ere",
        formula: "C = n / V",
        definition: "Définit la quantité de soluté présente dans un litre de solution.",
        properties: "À ne pas confondre avec la concentration massique Cm = m/V. On a la relation Cm = C * M.",
        units: "C en mol/L, n en mol, V en Litres (L).",
        tags: ["solutions", "molaire"]
    },
    {
        id: "snell",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "1ere",
        formula: "n_1 \\sin(i_1) = n_2 \\sin(i_2)",
        definition: "Décrit le changement de direction d'un rayon lumineux passant d'un milieu transparent à un autre.",
        properties: "L'indice de réfraction n est sans unité et toujours ≥ 1 (n air ≈ 1,00).",
        units: "i1 et i2 en degrés ou radians.",
        tags: ["optique", "lumière"]
    },
    {
        id: "gazparfait",
        title: "Loi des gaz parfaits",
        subject: "physique",
        level: "terminale",
        formula: "P \\times V = n \\times R \\times T",
        definition: "Modèle thermodynamique décrivant le comportement des gaz à basse pression.",
        properties: "Attention aux unités ! P en Pascal (Pa), V en m³ (et non litres), T en Kelvin (K = °C + 273,15).",
        units: "R = 8,314 J/K/mol.",
        tags: ["thermodynamique", "gaz"]
    },
    {
        id: "photon",
        title: "Énergie d'un photon",
        subject: "physique",
        level: "terminale",
        formula: "E = h \\cdot f = \\frac{h \\cdot c}{\\lambda}",
        definition: "Énergie transportée par un grain de lumière (quantum).",
        properties: "L'énergie est inversement proportionnelle à la longueur d'onde : plus la longueur d'onde est courte (UV), plus le photon est énergétique.",
        units: "E en Joules (J), h = 6,63.10⁻³⁴ J.s.",
        tags: ["quantique", "lumière"]
    },
    {
        id: "niveau-sonore",
        title: "Niveau d'intensité sonore",
        subject: "physique",
        level: "terminale",
        formula: "L = 10 \\log(I / I_0)",
        definition: "Échelle logarithmique permettant de mesurer le niveau sonore perçu par l'oreille humaine.",
        properties: "Si l'intensité sonore I est doublée, le niveau sonore L n'augmente que de 3 dB.",
        units: "L en décibels (dB), I0 = 10⁻¹² W/m².",
        tags: ["ondes", "son"]
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
        const searchLow = searchQuery.toLowerCase();
        const matchesSearch = f.title.toLowerCase().includes(searchLow) || 
                             f.tags.some(t => t.toLowerCase().includes(searchLow)) ||
                             f.definition.toLowerCase().includes(searchLow) ||
                             f.units.toLowerCase().includes(searchLow);
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
                <span>Détails & Définitions</span>
                <i data-lucide="chevron-right"></i>
            </div>
        `;
        card.onclick = () => showDetails(f);
        container.appendChild(card);
    });

    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
    lucide.createIcons();
}

function showDetails(f) {
    modalBody.innerHTML = `
        <div id="section-formula" class="modal-section active">
            <h2 style="margin-bottom: 2rem; color: var(--primary)">${f.title}</h2>
            <div style="font-size: 2.3rem; margin: 3rem 0; text-align: center;">
                \\[ ${f.formula} \\]
            </div>
            <p><strong>Unités :</strong> ${f.units}</p>
        </div>
        
        <div id="section-definition" class="modal-section">
            <h2 style="margin-bottom: 1.5rem; color: var(--primary)">Définition</h2>
            <p style="font-size: 1.1rem; line-height: 1.8;">${f.definition}</p>
        </div>
        
        <div id="section-properties" class="modal-section">
            <h2 style="margin-bottom: 1.5rem; color: var(--primary)">Propriétés & Conseils</h2>
            <p style="font-size: 1.1rem; line-height: 1.8;">${f.properties}</p>
            <div style="margin-top: 2rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                ${f.tags.map(t => `<span class="badge badge-level">#${t}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Reset tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabBtns[0].classList.add('active');
    
    modal.style.display = 'block';
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
}

function switchTab(tabId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        if (btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const sections = document.querySelectorAll('.modal-section');
    sections.forEach(s => {
        if (s.id === `section-${tabId}`) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
}

window.switchTab = switchTab;

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

renderFormulas();
