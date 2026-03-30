// ─────────────────────────────────────────
//  SCORE STATE
// ─────────────────────────────────────────
const scores = {};

function getColor(s) {
  if (s >= 0.70) return '#3fb950';
  if (s >= 0.40) return '#d29922';
  return '#f85149';
}

function getLabel(s) {
  if (s === 0) return { text: 'Belum dijawab', color: '#484f58' };
  if (s >= 0.70) return { text: 'Baik', color: '#3fb950' };
  if (s >= 0.40) return { text: 'Cukup', color: '#d29922' };
  return { text: 'Perlu perbaikan', color: '#f85149' };
}

function updateGlobalStats() {
  const all = Object.values(scores);
  const answered = all.filter(s => s > 0);
  document.getElementById('global-answered').textContent = answered.length;
  if (answered.length > 0) {
    const avg = answered.reduce((a, b) => a + b, 0) / answered.length;
    document.getElementById('global-avg').textContent = (avg * 100).toFixed(0) + '%';
  } else {
    document.getElementById('global-avg').textContent = '—';
  }
}

function updateSummary(type) {
  const container = document.getElementById('summary-' + type);
  container.innerHTML = questions[type].map(q => {
    const s = scores[q.id] || 0;
    const lbl = getLabel(s);
    return `<div class="summary-item">
      <div class="summary-item-name">${q.topic}</div>
      <div class="summary-item-score" style="color:${lbl.color}">${s > 0 ? (s * 100).toFixed(0) + '%' : '—'}</div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────
//  RENDER CARDS
// ─────────────────────────────────────────
function renderCards(type) {
  const container = document.getElementById('cards-' + type);
  const color = type === 'pbo' ? 'pbo' : 'rpl';

  container.innerHTML = questions[type].map((q, idx) => `
    <div class="q-card" id="card-${q.id}">
      <div class="q-header" onclick="toggleCard('${q.id}')">
        <div class="q-num q-num-${color}">${type.toUpperCase()}-${idx + 1}</div>
        <div class="q-meta">
          <div class="q-topic">${q.topic}</div>
          <div class="q-text">${q.soal}</div>
        </div>
        <div class="q-toggle">⌄</div>
      </div>
      <div class="q-body">
        <div class="q-body-inner">
          <div class="answer-label">
            <span>Jawaban kamu</span>
            <span class="char-count" id="cc-${q.id}">0 karakter</span>
          </div>
          <textarea
            id="ta-${q.id}"
            placeholder="Tulis jawabanmu di sini..."
            oninput="handleInput('${q.id}', '${type}')"
          ></textarea>
          <div class="score-row">
            <div class="score-bar-wrap">
              <div class="score-bar" id="bar-${q.id}"></div>
            </div>
            <div class="score-text" id="score-${q.id}" style="color: #484f58">—</div>
            <div class="score-label" id="label-${q.id}" style="background: #21262d; color: #484f58">Belum dijawab</div>
          </div>
          <div class="keyword-row" id="kw-${q.id}">
            <span class="kw-label">Kata kunci:</span>
            ${q.keywords.map(kw => `<span class="kw-chip" id="kw-${q.id}-${kw.replace(/\s+/g,'_')}">${kw}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  updateSummary(type);
}

function toggleCard(id) {
  const card = document.getElementById('card-' + id);
  card.classList.toggle('open');
}

function handleInput(id, type) {
  const ta = document.getElementById('ta-' + id);
  const val = ta.value;

  // Char count
  document.getElementById('cc-' + id).textContent = val.length + ' karakter';

  const q = [...questions.pbo, ...questions.rpl].find(q => q.id === id);
  if (!q) return;

  // Score
  const s = val.trim().length < 10 ? 0 : score(val, q.modelAnswer);
  scores[id] = s;

  // Update bar
  const bar = document.getElementById('bar-' + id);
  const scoreEl = document.getElementById('score-' + id);
  const labelEl = document.getElementById('label-' + id);
  const lbl = getLabel(s);

  if (val.trim().length < 10) {
    bar.style.width = '0%';
    bar.style.background = '#484f58';
    scoreEl.textContent = '—';
    scoreEl.style.color = '#484f58';
    labelEl.textContent = 'Belum dijawab';
    labelEl.style.background = '#21262d';
    labelEl.style.color = '#484f58';
  } else {
    const pct = Math.min(s * 100, 100).toFixed(0);
    bar.style.width = pct + '%';
    bar.style.background = getColor(s);
    scoreEl.textContent = pct + '%';
    scoreEl.style.color = getColor(s);
    labelEl.textContent = lbl.text;
    labelEl.style.background = lbl.color + '22';
    labelEl.style.color = lbl.color;
  }

  // Keywords
  const found = keywordsFound(val, q.keywords);
  found.forEach(({ kw, found }) => {
    const el = document.getElementById('kw-' + id + '-' + kw.replace(/\s+/g,'_'));
    if (el) el.className = 'kw-chip' + (found ? ' found' : '');
  });

  updateSummary(type);
  updateGlobalStats();
}

// ─────────────────────────────────────────
//  TAB SWITCHING
// ─────────────────────────────────────────
let currentTab = 'pbo';

function switchTab(type) {
  currentTab = type;
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + type).classList.add('active');

  document.querySelectorAll('.tab').forEach(t => {
    t.className = 'tab';
  });
  const tabs = document.querySelectorAll('.tab');
  tabs[type === 'pbo' ? 0 : 1].className = 'tab active-' + type;
}

// ─────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────
renderCards('pbo');
renderCards('rpl');
updateGlobalStats();
