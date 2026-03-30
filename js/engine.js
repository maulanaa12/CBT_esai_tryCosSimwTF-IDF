// ─────────────────────────────────────────
//  TF-IDF + COSINE SIMILARITY ENGINE
// ─────────────────────────────────────────
const STOPWORDS = new Set([
  'yang','dan','di','ke','dari','ini','itu','untuk','dengan','pada','adalah','dalam','tidak','akan',
  'jika','saat','apa','agar','karena','oleh','atau','juga','sudah','dapat','bisa','lebih','sebuah',
  'sehingga','secara','menjadi','telah','satu','ada','harus','semua','setiap','hal','cara','ber',
  'ter','me','mem','per','pem','nya','lah','kah','pun','pula','namun','tetapi','tapi','maka',
  'kita','mereka','dia','kami','saya','kamu','ia','belum','jadi','hingga','yaitu','yakni',
  'seperti','misalnya','contoh','antara','setelah','sebelum','kemudian','lalu','maupun','baik',
  'makin','sangat','terlalu','selalu','sudah','masih','hanya','paling','sama','sendiri','diri',
  'atas','bawah','kiri','kanan','depan','belakang','dalam','luar','seluruh','berbagai','beberapa',
  'suatu','tiap','masing','mana','siapa','kapan','bagaimana','mengapa','dimana','apakah','oleh',
  'tentang','tersebut','sesuai','setiap','lain','baru','kini','kembali','melalui','terhadap'
]);

function tokenize(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !STOPWORDS.has(w));
}

function termFreq(tokens) {
  const tf = {};
  tokens.forEach(t => tf[t] = (tf[t] || 0) + 1);
  const total = tokens.length || 1;
  Object.keys(tf).forEach(k => tf[k] /= total);
  return tf;
}

function buildIDF(docs) {
  const df = {};
  const N = docs.length;
  docs.forEach(doc => {
    const unique = new Set(tokenize(doc));
    unique.forEach(t => df[t] = (df[t] || 0) + 1);
  });
  const idf = {};
  Object.keys(df).forEach(t => {
    idf[t] = Math.log((N + 1) / (df[t] + 1)) + 1;
  });
  return idf;
}

function tfidfVector(tokens, idf) {
  const tf = termFreq(tokens);
  const vec = {};
  Object.keys(tf).forEach(t => {
    vec[t] = tf[t] * (idf[t] || Math.log(2) + 1);
  });
  return vec;
}

function cosineSim(vecA, vecB) {
  const keys = new Set([...Object.keys(vecA), ...Object.keys(vecB)]);
  let dot = 0, magA = 0, magB = 0;
  keys.forEach(k => {
    const a = vecA[k] || 0;
    const b = vecB[k] || 0;
    dot += a * b;
    magA += a * a;
    magB += b * b;
  });
  if (magA === 0 || magB === 0) return 0;
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

// Build global IDF corpus from all model answers
const allDocs = [
  ...questions.pbo.map(q => q.modelAnswer),
  ...questions.rpl.map(q => q.modelAnswer)
];
const globalIDF = buildIDF(allDocs);

function score(userText, modelText) {
  const uTokens = tokenize(userText);
  const mTokens = tokenize(modelText);
  if (uTokens.length === 0) return 0;
  const uVec = tfidfVector(uTokens, globalIDF);
  const mVec = tfidfVector(mTokens, globalIDF);
  return cosineSim(uVec, mVec);
}

function keywordsFound(userText, keywords) {
  const lower = userText.toLowerCase();
  return keywords.map(kw => ({
    kw,
    found: lower.includes(kw.toLowerCase())
  }));
}
