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
        properties: "À ne pas confondre avec la concentration massique Cm = m/V.",
        units: "C en mol/L, n en mol, V en Litres (L).",
        tags: ["solutions", "molaire"]
    },
    {
        id: "snell",
        title: "Loi de Snell-Descartes",
        subject: "physique",
        level: "1ere",
        formula: "n_1 \\sin(i_1) = n_2 \\sin(i_2)",
        definition: "Décrit le changement de direction d'un rayon lumineux passant d'un milieu à l'autre.",
        properties: "L'indice de réfraction n est sans unité et toujours ≥ 1.",
        units: "i1 et i2 en degrés ou radians.",
        tags: ["optique", "lumière"]
    },
    {
        id: "gazparfait",
        title: "Loi des gaz parfaits",
        subject: "physique",
        level: "terminale",
        formula: "P \\times V = n \\times R \\times T",
        definition: "Modèle thermodynamique décrivant le comportement des gaz.",
        properties: "P en Pascal (Pa), V en m³, T en Kelvin (K).",
        units: "R = 8,314 J/K/mol.",
        tags: ["thermodynamique", "gaz"]
    },
    {
        id: "photon",
        title: "Énergie d'un photon",
        subject: "physique",
        level: "terminale",
        formula: "E = h \\cdot f = \\frac{h \\cdot c}{\\lambda}",
        definition: "Énergie transportée par un grain de lumière.",
        properties: "h = 6,63.10⁻³⁴ J.s.",
        units: "E en Joules (J).",
        tags: ["quantique", "lumière"]
    },
    {
        id: "niveau-sonore",
        title: "Niveau d'intensité sonore",
        subject: "physique",
        level: "terminale",
        formula: "L = 10 \\log(I / I_0)",
        definition: "Mesure du niveau sonore perçu par l'oreille humaine.",
        properties: "I0 = 10⁻¹² W/m².",
        units: "L en décibels (dB).",
        tags: ["ondes", "son"]
    }
];

// Functions
function renderFormulas() {
    const cont = document.getElementById('formulas-container');
    cont.innerHTML = '';
    
    const filtered = formulas.filter(f => {
        const matchesSubject = currentFilter === 'all' || f.subject === currentFilter;
        const matchesLevel = currentLevel === 'all' || f.level === currentLevel;
        const searchLow = (searchQuery || "").toLowerCase();
        return matchesSubject && matchesLevel && f.title.toLowerCase().includes(searchLow);
    });

    filtered.forEach(f => {
        const card = document.createElement('div');
        card.className = `formula-card ${f.subject}`;
        card.innerHTML = `
            <div class="card-header"><span class="badge badge-${f.subject}">${f.subject}</span></div>
            <h3>${f.title}</h3>
            <div class="formula-display">\\[ ${f.formula} \\]</div>
            <div class="card-footer"><span>Détails</span><i data-lucide="chevron-right"></i></div>
        `;
        card.onclick = () => showDetails(f);
        cont.appendChild(card);
    });

    if (window.MathJax) window.MathJax.typesetPromise();
    lucide.createIcons();
}

function showDetails(f) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div id="section-formula" class="modal-section active">
            <h2 style="color:var(--primary)">${f.title}</h2>
            <div style="font-size:2.3rem;margin:2rem 0;text-align:center">\\[ ${f.formula} \\]</div>
            <p><strong>Unités:</strong> ${f.units}</p>
        </div>
        <div id="section-definition" class="modal-section">
            <h2 style="color:var(--primary)">Définition</h2>
            <p>${f.definition}</p>
        </div>
        <div id="section-properties" class="modal-section">
            <h2 style="color:var(--primary)">Propriétés</h2>
            <p>${f.properties}</p>
        </div>
    `;
    document.getElementById('formula-modal').style.display = 'block';
    if (window.MathJax) window.MathJax.typesetPromise();
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.toggle('active', btn.getAttribute('onclick').includes(tabId)));
    document.querySelectorAll('.modal-section').forEach(s => s.classList.toggle('active', s.id === `section-${tabId}`));
}

window.switchTab = switchTab;
document.getElementById('formula-search').oninput = (e) => { searchQuery = e.target.value; renderFormulas(); };
document.querySelectorAll('.nav-btn').forEach(btn => btn.onclick = () => { document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentFilter = btn.dataset.filter; renderFormulas(); });
document.querySelectorAll('.level-btn').forEach(btn => btn.onclick = () => { document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); currentLevel = btn.dataset.level; renderFormulas(); });
document.querySelector('.close-modal').onclick = () => document.getElementById('formula-modal').style.display = 'none';
window.onclick = (e) => { if (e.target.className === 'modal') e.target.style.display = 'none'; };

renderFormulas();
