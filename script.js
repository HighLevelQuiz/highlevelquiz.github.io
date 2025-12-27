const QUESTIONS = [
  {
    id: "q1",
    title: "数論 高難度",
    body: "正の整数 \`\(n\\)` に対して、\`\(\\varphi(n)=2p\\)` を満たす素数 \`\(p\\)` が存在するような \`\(n\\)` をすべて求めよ。ここで \`\(\\varphi\\)` はオイラーのトーシェント関数である。",
    choices: [],
    answer: "構造的議論（解説参照）",
    explanation: "解説（要旨）: \`\(\\varphi(n)=2p\\)` の場合、\`\(n\\)` の素因数は限定される。偶奇の場合分けと原始根の存在、\`\(p\\)` の形に関する議論から候補を絞る。詳細は長い議論を要する。",
    type: "proof"
  },
  {
    id: "q2",
    title: "解析学 高難度",
    body: "関数列 \`\(f_n(x)=n\\sin^n x\\)` を考える。区間 \`\([0,\\pi]\\)` 上で \`\(f_n\\)` はどのように収束するか。さらに収束速度の評価を示せ。",
    choices: [],
    answer: "点ごとの収束と最大点近傍の評価（解説参照）",
    explanation: "解説: \`\(\\sin x\\le1\\)` であり、等号は \`\(x=\\pi/2\\)` のみ。ラプラス法的評価により、最大点近傍での寄与は \`\(O(1/\\sqrt{n})\\)` 程度となる。",
    type: "proof"
  },
  {
    id: "q3",
    title: "代数 高難度",
    body: "次数 5 の既約多項式でガロア群が巡回群 \`\(C_5\\)` である場合の分解体の構造と判別式の性質を説明せよ。",
    choices: [],
    answer: "巡回拡大の構造と判別式の条件（解説参照）",
    explanation: "解説: ガロア群が \`\(C_5\\)` であるとき、分解体は巡回拡大であり、判別式の平方性や局所的分解の条件が重要となる。",
    type: "proof"
  },
  {
    id: "q4",
    title: "組合せ論 高難度",
    body: "一般グラフにおける最小頂点被覆と最大マッチングの関係について、Kőnigの定理の範囲と反例を示せ。",
    choices: [],
    answer: "二部グラフでは等号、一般グラフでは差が生じる（解説参照）",
    explanation: "解説: 二部グラフでは Kőnig の定理が成立するが、奇サイクルを含む一般グラフでは差が生じる。具体的構成を示す。",
    type: "proof"
  },
  {
    id: "q5",
    title: "確率論 高難度",
    body: "1次元ブラウン運動 \`\(B_t\\)` に対して、停止時刻 \`\(\\tau=\\inf\\{t>0: B_t=1\\}\\)` の期待値 \`\(E[\\tau]\\)` は有限か。さらに高次モーメントの有界性を議論せよ。",
    choices: [],
    answer: "到達時間の性質と期待値の評価（解説参照）",
    explanation: "解説: 到達時間はほとんど確実に有限だが、期待値は発散する場合がある。反射原理やスケーリング則を用いて評価する。",
    type: "proof"
  },
  {
    id: "q6",
    title: "解析的整数論 高難度",
    body: "リーマンゼータ関数の非自明ゼロの分布に関する仮定が素数分布の誤差項に与える影響を説明せよ。",
    choices: [],
    answer: "Riemann仮説が誤差項を \`\(O(x^{1/2+\\epsilon})\\)` に制限する（解説参照）",
    explanation: "解説: ゼータ関数零点の位置が素数定理の誤差項に直接影響する。RH成立時の誤差評価とその帰結を述べる。",
    type: "proof"
  },
  {
    id: "q7",
    title: "幾何学 高難度",
    body: "ハイパーボリック3次元多様体の体積不変量と算術性の関係について述べよ。",
    choices: [],
    answer: "体積と算術的性質の関連（解説参照）",
    explanation: "解説: ハイパーボリック体積は重要な不変量であり、算術的多様体では特定のL値や算術的不変量と結びつく場合がある。",
    type: "proof"
  },
  {
    id: "q8",
    title: "計算理論 高難度",
    body: "P vs NP の定式化を述べ、NP完全性を示すための還元戦略を SAT を例に説明せよ。",
    choices: [],
    answer: "多項式時間還元の構成（解説参照）",
    explanation: "解説: NP完全性の証明は多項式時間還元を構成することに帰着する。SAT からの還元は代表例である。",
    type: "proof"
  },
  {
    id: "q9",
    title: "一般相対性理論 高難度",
    body: "シュワルツシルトブラックホールの事象の地平線近傍での時空構造を、座標変換を用いて説明せよ。",
    choices: [],
    answer: "座標特異性の除去と局所構造（解説参照）",
    explanation: "解説: シュワルツシルト座標は地平線で特異に見えるが、クルスカル座標で正則化できる。光円錐と因果構造が鍵。",
    type: "proof"
  },
  {
    id: "q10",
    title: "論理学 高難度",
    body: "ゲーデルの不完全性定理の一つを形式的に述べ、その証明の骨子を説明せよ。",
    choices: [],
    answer: "自己言及文の構成と無矛盾性の議論（解説参照）",
    explanation: "解説: 自己言及的文を構成し、形式系の無矛盾性と完全性の両立が不可能であることを示す。算術の表現可能性が鍵。",
    type: "proof"
  },

  /* ここから追加問題（11〜20） */
  {
    id: "q11",
    title: "微分方程式 高難度",
    body: "非線形常微分方程式 \`\(y^\prime^\prime+y+y^3=0\\)` の周期解の存在と安定性について議論せよ。ポアンカレ・ベンディクソン理論を用いて示せ。",
    choices: [],
    answer: "周期解の存在条件と安定性の議論（解説参照）",
    explanation: "解説: エネルギー保存則と位相平面解析を用いて周期解の存在を示し、線形化による安定性判定を行う。非線形項の影響を評価する。",
    type: "proof"
  },
  {
    id: "q12",
    title: "複素解析 高難度",
    body: "正則関数 \`\(f\\)` が単位円盤上で有界かつ \`\(|f(e^{i\\theta})|=1\\)` がほとんど至る所で成り立つとき、\`\(f\\)` の形を決定せよ（内外分解やブレントの定理を用いる）。",
    choices: [],
    answer: "内関数×外関数の分解とブレント条件（解説参照）",
    explanation: "解説: 有界正則関数の内外分解を用い、境界値がほとんど至る所で絶対値1であることから内関数であることを導く議論を示す。",
    type: "proof"
  },
  {
    id: "q13",
    title: "位相空間論 高難度",
    body: "ノルム空間と位相ベクトル空間の間の関係を議論し、局所凸性と双対空間の性質について述べよ。具体例としてフレーシェ空間を扱え。",
    choices: [],
    answer: "局所凸性と双対の構造（解説参照）",
    explanation: "解説: 局所凸位相の定義、双対空間の位相、フレーシェ空間の例とその双対の特徴を示す。",
    type: "proof"
  },
  {
    id: "q14",
    title: "代数幾何 高難度",
    body: "射影曲線の正則微分形式の次元（種）と Riemann–Roch の定理を用いて、種 \`\(g\\)` の曲線上の線型系の次元を評価せよ。",
    choices: [],
    answer: "Riemann–Roch による次元公式の応用（解説参照）",
    explanation: "解説: Riemann–Roch の公式を導入し、特定のディバイザに対する線型系の次元を計算する手順を示す。",
    type: "proof"
  },
  {
    id: "q15",
    title: "数理最適化 高難度",
    body: "凸最適化問題における双対性ギャップがゼロとなる条件（強双対性）を示し、スレータ条件の役割を説明せよ。",
    choices: [],
    answer: "強双対性とスレータ条件の説明（解説参照）",
    explanation: "解説: 凸性とスレータ条件が満たされれば強双対性が成立することを示し、例と反例を挙げる。",
    type: "proof"
  },
  {
    id: "q16",
    title: "情報理論 高難度",
    body: "チャンネル容量の定義を与え、連続値ガウスチャネルに対する容量公式を導出せよ。ノイズと電力制約の影響を議論せよ。",
    choices: [],
    answer: "ガウスチャネル容量 \`\(C=\\frac{1}{2}\\log(1+S/N)\\)` の導出（解説参照）",
    explanation: "解説: 情報量の定義と最大化問題を解き、ガウス分布が最適であることを示して容量公式を導出する。",
    type: "proof"
  },
  {
    id: "q17",
    title: "確率過程 高難度",
    body: "マルコフ連鎖の漸近分布の存在条件を示し、周期性や再帰性が漸近挙動に与える影響を説明せよ。",
    choices: [],
    answer: "漸近分布の存在条件と周期性の影響（解説参照）",
    explanation: "解説: エルゴード性、不可約性、非周期性が定常分布の存在と一意性を保証することを示す。",
    type: "proof"
  },
  {
    id: "q18",
    title: "数論（代数的数論） 高難度",
    body: "代数体の整数環におけるイデアル分解とクラス群の定義を述べ、クラス数が 1 である条件の例とその意味を説明せよ。",
    choices: [],
    answer: "クラス群とクラス数の意義（解説参照）",
    explanation: "解説: イデアルの一意分解の欠如をクラス群で測り、クラス数 1 は一意分解整域に対応することを示す。例: \`\(\\mathbb{Q}(\\sqrt{-1})\\)` 等。",
    type: "proof"
  },
  {
    id: "q19",
    title: "統計学 高難度",
    body: "漸近統計学における効率性の概念（クラメール・ラオ下限）を述べ、正規分布族に対する最尤推定量の効率性を示せ。",
    choices: [],
    answer: "クラメール・ラオ下限と最尤推定の効率性（解説参照）",
    explanation: "解説: 情報量行列を導入し、クラメール・ラオ不等式を示して最尤推定量が下限を達成する条件を議論する。",
    type: "proof"
  },
  {
    id: "q20",
    title: "量子情報 高難度",
    body: "量子ビットのエンタングルメント測度の一つ（例えばエントロピーに基づく測度）を定義し、2量子ビット系での計算例を示せ。",
    choices: [],
    answer: "エントロピーに基づくエンタングルメント測度の定義と例（解説参照）",
    explanation: "解説: 量子状態の部分トレースを取り、フォン・ノイマンエントロピーを計算してエンタングルメントを評価する手順を示す。ベル状態の例を計算する。",
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
