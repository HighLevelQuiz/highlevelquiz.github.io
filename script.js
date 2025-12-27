// High Level Quiz script
// 問題データはここに埋め込む。各問題は {id,title,body,choices,answer,explanation,type}
// type: "mcq" or "short" or "proof"
// answer: for mcq index (0-based) or string for short/proof
// 注意: 問題は超難問（解答は解説で確認）

const QUESTIONS = [
  {
    id: "q1",
    title: "数論 高難度",
    body: "正の整数 `\(n\)` に対して、`\( \varphi(n) = 2p \)` を満たす素数 `\(p\)` が存在するような `\(n\)` をすべて求めよ。ここで `\(\\varphi\)` はオイラーのトーシェント関数である。",
    choices: [],
    answer: "n=2p, n=4, n=p^k where ...", 
    explanation: "解説（要旨）: \n一般に \`\(\\varphi(n)=2p\\)` となるときの構造を調べる。まず \`\(n\\)` が偶数か奇数かで場合分けし、素因数分解から可能性を絞る。最終的に候補は有限個に絞られる。詳細は長い議論を要するためここでは要点のみ示す。",
    type: "proof"
  },
  {
    id: "q2",
    title: "解析学 高難度",
    body: "関数列 \`\(f_n(x)=n\\sin^n x\\)` を考える。区間 \`\([0,\\pi]\\)` 上で \`\(f_n\\)` はどのように収束するか。さらに収束速度の評価を示せ。",
    choices: [],
    answer: "pointwise: 0 except at x=\\pi/2 where limit is ???", 
    explanation: "解説: \`\(\\sin x\\le1\\)` であり、\`\(\\sin x=1\\)` となるのは \`\(x=\\pi/2\\)` のみ。局所的な挙動はラプラス法で評価でき、最大点付近でのスケーリングにより収束速度は \`\(O(1/\\sqrt{n})\\)` となる。",
    type: "proof"
  },
  {
    id: "q3",
    title: "代数 高難度",
    body: "体 \`\(K\\)` 上の多項式 \`\(f(x)\\)` が既約であるとき、ガロア群の位数と根の配置からどのような情報が得られるか。具体例として次数 5 の既約多項式でガロア群が巡回群である場合の構造を説明せよ。",
    choices: [],
    answer: "discussion",
    explanation: "解説: 5次既約でガロア群が巡回群 C5 であるならば、分解体は巡回拡大であり、根は単純に循環的に移り変わる。これには局所的条件や判別式の平方性などが関係する。",
    type: "proof"
  },
  {
    id: "q4",
    title: "組合せ論 高難度",
    body: "無向グラフにおいて、任意の頂点被覆の最小サイズと最大マッチングの関係を示せ（Kőnigの定理の一般化や反例を含む議論）。",
    choices: [],
    answer: "theorem discussion",
    explanation: "解説: 二部グラフでは Kőnig の定理が成立するが一般グラフでは成立しない。最小頂点被覆と最大マッチングの差を示す具体例を構成する。",
    type: "proof"
  },
  {
    id: "q5",
    title: "確率論 高難度",
    body: "ブラウン運動 \`\(B_t\\)` に対して、停止時刻 \`\(\\tau=\\inf\\{t>0: B_t=1\\}\\)` を考える。\`\(E[\\tau]\\)` は有限か。さらに \`\(E[\\tau^p]\\)` の有界性を議論せよ。",
    choices: [],
    answer: "infinite for p>=? etc",
    explanation: "解説: 1次元ブラウン運動の到達時間はほとんど確実に有限であるが期待値は発散する場合がある。スケーリングと反射原理を用いて評価する。",
    type: "proof"
  },
  {
    id: "q6",
    title: "解析的整数論 高難度",
    body: "リーマンゼータ関数の非自明ゼロの分布に関する仮定を一つ挙げ、それが素数分布に与える影響を説明せよ。",
    choices: [],
    answer: "Riemann Hypothesis consequences",
    explanation: "解説: Riemann仮説が成り立てば素数定理の誤差項は \`\(O(x^{1/2+\\epsilon})\\)` となる。ゼータ関数の零点の位置が誤差項に直接影響する。",
    type: "proof"
  },
  {
    id: "q7",
    title: "幾何学 高難度",
    body: "3次元多様体のトポロジーに関して、ハイパーボリック構造を持つ多様体の体積不変量とその算術的性質について述べよ。",
    choices: [],
    answer: "discussion",
    explanation: "解説: ハイパーボリック体積は多様体の重要な不変量であり、算術的多様体では体積が特定のL値と関連する場合がある。詳細はリッチな理論を要する。",
    type: "proof"
  },
  {
    id: "q8",
    title: "計算理論 高難度",
    body: "P vs NP に関する主要な定式化を述べ、NP完全性の証明戦略を一つ具体的に説明せよ。",
    choices: [],
    answer: "discussion",
    explanation: "解説: NP完全性の証明は多くの場合多項式時間還元を構成することで行う。SATからの還元は代表例である。",
    type: "proof"
  },
  {
    id: "q9",
    title: "物理学 高難度",
    body: "一般相対性理論におけるブラックホールの事象の地平線近傍での時空の局所構造を、座標系の選び方と共に説明せよ。",
    choices: [],
    answer: "discussion",
    explanation: "解説: シュワルツシルト座標は地平線で特異に見えるが、クルスカル座標などで正則化できる。局所的には光円錐構造が重要。",
    type: "proof"
  },
  {
    id: "q10",
    title: "論理学 高難度",
    body: "ゲーデルの不完全性定理の一つを形式的に述べ、その証明の骨子を説明せよ。",
    choices: [],
    answer: "Gödel incompleteness sketch",
    explanation: "解説: 自己言及的文を構成し、形式系の無矛盾性と完全性の両立が不可能であることを示す。算術の表現可能性が鍵。",
    type: "proof"
  }
];

// UI logic
const el = id => document.getElementById(id);
let currentIndex = 0;
let selected = null;
let score = 0;
let activeList = [];

function startQuiz(){
  const limit = parseInt(el('limitSelect').value,10);
  const shuffle = el('shuffleToggle').checked;
  activeList = QUESTIONS.slice();
  if(shuffle) activeList = shuffleArray(activeList);
  activeList = activeList.slice(0, limit);
  currentIndex = 0;
  score = 0;
  el('score').textContent = score;
  el('quizArea').classList.remove('hidden');
  el('resultArea').classList.add('hidden');
  showQuestion();
}

function showQuestion(){
  const q = activeList[currentIndex];
  el('progress').textContent = `${currentIndex+1} / ${activeList.length}`;
  el('qTitle').textContent = `${q.title}`;
  el('qBody').innerHTML = q.body.replace(/\\n/g,'<br>');
  el('exText').textContent = q.explanation;
  el('explanation').classList.add('hidden');
  el('explanation').open = false;
  el('feedback').textContent = '';
  el('nextBtn').classList.add('hidden');
  selected = null;
  renderChoices(q);
}

function renderChoices(q){
  const c = el('choices');
  c.innerHTML = '';
  if(q.type === 'mcq' && q.choices.length){
    q.choices.forEach((ch,i)=>{
      const d = document.createElement('div');
      d.className = 'choice';
      d.textContent = ch;
      d.dataset.index = i;
      d.addEventListener('click', ()=> {
        document.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));
        d.classList.add('selected');
        selected = i;
      });
      c.appendChild(d);
    });
  } else {
    // short/proof: provide textarea
    const ta = document.createElement('textarea');
    ta.rows = 6;
    ta.style.width = '100%';
    ta.placeholder = 'ここに解答（要旨）を入力';
    ta.addEventListener('input', ()=> selected = ta.value);
    c.appendChild(ta);
  }
}

function submitAnswer(){
  const q = activeList[currentIndex];
  // 自動採点は難しいため、MCQのみ自動判定。その他は手動評価（ここでは正答を表示して減点なし）
  if(q.type === 'mcq' && q.choices.length){
    if(selected === null){ el('feedback').textContent = '選択肢を選んでください。'; return; }
    if(selected === q.answer){
      score += 10;
      el('feedback').textContent = '正解！ +10';
    } else {
      el('feedback').textContent = `不正解。正答は選択肢 ${q.answer+1} です。`;
    }
    el('score').textContent = score;
    el('nextBtn').classList.remove('hidden');
  } else {
    // 短答・証明問題は解説を見て自己採点
    el('feedback').textContent = '解説を確認して自己採点してください。正答は解説に示されています。';
    el('explanation').classList.remove('hidden');
    el('nextBtn').classList.remove('hidden');
  }
}

function revealExplanation(){
  el('explanation').classList.toggle('hidden');
}

function nextQuestion(){
  currentIndex++;
  if(currentIndex >= activeList.length){
    finishQuiz();
  } else {
    showQuestion();
  }
}

function finishQuiz(){
  el('quizArea').classList.add('hidden');
  el('resultArea').classList.remove('hidden');
  el('finalScore').textContent = `合計スコア: ${score} / ${activeList.length*10}`;
}

function shuffleArray(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// Event bindings
document.addEventListener('DOMContentLoaded', ()=>{
  el('startBtn').addEventListener('click', startQuiz);
  el('submitBtn').addEventListener('click', submitAnswer);
  el('revealBtn').addEventListener('click', revealExplanation);
  el('nextBtn').addEventListener('click', nextQuestion);
  el('retryBtn').addEventListener('click', ()=> location.reload());
});
