// State Management
let currentWorkKey = null;
let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let roundScore = 0;

// User Progress Structure: { work: { correct: [], incorrect: [], unattempted: [] } }
let userProgress = {};

// Storage Key
const STORAGE_KEY = 'ronpyo_quiz_progress_v1';

// DOM Elements
const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const workList = document.getElementById('work-list');

const quizPartTitle = document.getElementById('quiz-part-title');
const progressBar = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const answerResult = document.getElementById('answer-result');
const explanationText = document.getElementById('explanation-text');
const nextBtn = document.getElementById('next-btn');
const quizBackBtn = document.getElementById('quiz-back-btn');

const finalScore = document.getElementById('final-score');
const totalQuestionsDisplay = document.getElementById('total-questions');
const resultMessage = document.getElementById('result-message');
const retryBtn = document.getElementById('retry-btn');
const menuBtn = document.getElementById('menu-btn');

// Level System DOM Elements
const statusLevel = document.getElementById('status-level');
const statusExp = document.getElementById('status-exp');
const levelUpBtn = document.getElementById('level-up-btn');
const levelUpMsg = document.getElementById('level-up-msg');

// Initialize
function init() {
    loadProgress();
    renderWorkSelection();
    updateHeaderStats();

    quizBackBtn.addEventListener('click', showMenu);
    nextBtn.addEventListener('click', nextQuestion);
    retryBtn.addEventListener('click', startQuiz);
    menuBtn.addEventListener('click', showMenu);
    levelUpBtn.addEventListener('click', performLevelUp);
    document.getElementById('reset-progress-btn').addEventListener('click', resetQuizProgress);
}

function resetQuizProgress() {
    if (!confirm('全大問の問題進捗をリセットしますか？\nレベルとEXPはそのまま残ります。')) return;

    // レベル・EXPだけ保持して各大問の進捗を削除
    const savedLevel = userProgress.level;
    const savedExp = userProgress.exp;
    userProgress = { level: savedLevel, exp: savedExp };

    saveProgress();
    renderWorkSelection();
}

function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            userProgress = JSON.parse(saved);
        } catch (e) {
            console.warn('進捗データの読み込みに失敗しました。リセットします。', e);
            userProgress = {};
        }
    }
    // Initialize global stats if missing
    if (typeof userProgress.exp === 'undefined') {
        userProgress.exp = 0;
    }
    if (typeof userProgress.level === 'undefined') {
        userProgress.level = 1;
    }
}

function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
}

function initWorkProgress(workKey) {
    if (!userProgress[workKey]) {
        let allQuestions = [];
        const parts = quizData[workKey].parts;
        Object.keys(parts).forEach(partKey => {
            allQuestions = allQuestions.concat(parts[partKey].questions);
        });

        userProgress[workKey] = {
            correct: [],
            incorrect: [],
            unattempted: allQuestions.map(q => q.id)
        };
    }
}

function renderWorkSelection() {
    workList.innerHTML = '';

    Object.keys(quizData).forEach(workKey => {
        const work = quizData[workKey];

        let totalCount = 0;
        Object.keys(work.parts).forEach(partKey => {
            totalCount += work.parts[partKey].questions.length;
        });

        // initWorkProgressが行われていない場合（初回）の対策
        let correctCount = 0;
        let percentage = 0;
        if (userProgress[workKey]) {
            correctCount = userProgress[workKey].correct.length;
            percentage = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;
        }

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${work.title}</h3>
            <div class="card-progress-text">${correctCount} / ${totalCount} 問正解</div>
            <div class="card-progress-bg">
                <div class="card-progress-fill" style="width: ${percentage}%;"></div>
            </div>
        `;
        card.onclick = () => selectWork(workKey);
        workList.appendChild(card);
    });
}

function selectWork(workKey) {
    currentWorkKey = workKey;
    startQuiz();
}

function startQuiz() {
    initWorkProgress(currentWorkKey);
    const progress = userProgress[currentWorkKey];

    let allQuestionsPool = [];
    const parts = quizData[currentWorkKey].parts;
    Object.keys(parts).forEach(partKey => {
        allQuestionsPool = allQuestionsPool.concat(parts[partKey].questions);
    });

    // Priority: Incorrect > Unattempted > Correct
    let selectionIds = [];

    // 1. Incorrect
    selectionIds = [...progress.incorrect];

    // 2. Unattempted
    if (selectionIds.length < 5) {
        const needed = 5 - selectionIds.length;
        const shuffledUnattempted = [...progress.unattempted].sort(() => Math.random() - 0.5);
        selectionIds = selectionIds.concat(shuffledUnattempted.slice(0, needed));
    }

    // 3. Correct (if still not 5)
    if (selectionIds.length < 5) {
        const needed = 5 - selectionIds.length;
        // Shuffle correct ones to avoid same order
        const shuffledCorrect = [...progress.correct].sort(() => Math.random() - 0.5);
        selectionIds = selectionIds.concat(shuffledCorrect.slice(0, needed));
    }

    // Limit to 5
    selectionIds = selectionIds.slice(0, 5);

    // Map IDs to actual question objects (undefinedは除外して古い進捗データとの不整合に対処)
    const validQuestions = selectionIds
        .map(id => allQuestionsPool.find(q => q.id === id))
        .filter(q => q !== undefined);

    // 不整合なIDを発見した場合、進捗データを修復して再スタート
    if (validQuestions.length < selectionIds.length) {
        const validIds = new Set(allQuestionsPool.map(q => q.id));
        progress.correct = progress.correct.filter(id => validIds.has(id));
        progress.incorrect = progress.incorrect.filter(id => validIds.has(id));
        progress.unattempted = allQuestionsPool
            .map(q => q.id)
            .filter(id => !progress.correct.includes(id) && !progress.incorrect.includes(id));
        saveProgress();
        startQuiz(); // 修復後に再実行
        return;
    }

    currentRoundQuestions = validQuestions;

    if (currentRoundQuestions.length === 0) {
        alert("問題がありません。");
        showMenu();
        return;
    }

    // 問題の選択肢をシャッフルし、正解インデックスを更新するロジックを追加
    currentRoundQuestions = currentRoundQuestions.map(q => {
        if (q.type === "sort") {
            return q;
        }

        const shuffled = q.options
            .map((opt, index) => ({ opt, index }))
            .sort(() => Math.random() - 0.5);

        const newOptions = shuffled.map(item => item.opt);
        const newAnswer = shuffled.findIndex(item => item.index === q.answer);

        return {
            ...q,
            options: newOptions,
            displayAnswer: newAnswer // 画面表示用の正解インデックス
        };
    });

    currentQuestionIndex = 0;
    roundScore = 0;

    quizPartTitle.textContent = quizData[currentWorkKey].title;
    showScreen(quizScreen);
    resetBackgroundColor();
    showQuestion();
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
    document.body.classList.remove('dark-bg');
}

function updateBackgroundColor() {
    const neutral = [240, 244, 248]; // --bg-color (#F0F4F8)
    const targetGreen = [46, 125, 50]; // correct
    const targetPink = [216, 27, 96]; // incorrect (reddish pink)
    const maxQ = 5;

    const correctCount = roundScore;
    const incorrectCount = (currentQuestionIndex + 1) - roundScore;
    const neutralCount = Math.max(0, maxQ - (currentQuestionIndex + 1));

    const r = Math.round((neutral[0] * neutralCount + targetGreen[0] * correctCount + targetPink[0] * incorrectCount) / maxQ);
    const g = Math.round((neutral[1] * neutralCount + targetGreen[1] * correctCount + targetPink[1] * incorrectCount) / maxQ);
    const b = Math.round((neutral[2] * neutralCount + targetGreen[2] * correctCount + targetPink[2] * incorrectCount) / maxQ);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // Adjust text color if background is dark
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if (brightness < 140) {
        document.body.classList.add('dark-bg');
    } else {
        document.body.classList.remove('dark-bg');
    }
}

function showQuestion() {
    const question = currentRoundQuestions[currentQuestionIndex];
    if (!question) return;

    feedbackContainer.classList.add('hidden');
    feedbackContainer.classList.remove('show-correct', 'show-incorrect');
    optionsContainer.innerHTML = '';

    const progressPerc = (currentQuestionIndex / currentRoundQuestions.length) * 100;
    progressBar.style.width = `${progressPerc}%`;
    questionNumber.textContent = `${currentQuestionIndex + 1} / ${currentRoundQuestions.length}`;

    questionText.textContent = question.question;

    if (question.type === "sort") {
        // 並べ替え問題のUI構築
        const sortContainer = document.createElement('div');
        sortContainer.className = 'sort-container';

        const answerArea = document.createElement('div');
        answerArea.className = 'sort-answer-area';
        answerArea.id = 'sort-answer-area';

        const wordPool = document.createElement('div');
        wordPool.className = 'sort-word-pool';
        wordPool.id = 'sort-word-pool';

        let selectedWords = [];

        // シャッフルした単語をプールに並べる
        const shuffledWords = [...question.words].sort(() => Math.random() - 0.5);
        shuffledWords.forEach(word => {
            const wordBtn = document.createElement('button');
            wordBtn.className = 'sort-word-btn';
            wordBtn.textContent = word;
            wordBtn.onclick = () => {
                // Return to pool if in answer area, move to answer area if in pool
                if (wordBtn.parentElement === answerArea) {
                    wordPool.appendChild(wordBtn);
                    selectedWords = selectedWords.filter(w => w !== wordBtn);
                } else {
                    answerArea.appendChild(wordBtn);
                    selectedWords.push(wordBtn);
                }
            };
            wordPool.appendChild(wordBtn);
        });

        const controls = document.createElement('div');
        controls.className = 'sort-controls';

        const submitBtn = document.createElement('button');
        submitBtn.className = 'sort-submit-btn';
        submitBtn.textContent = '解答する';
        submitBtn.onclick = () => {
            if (answerArea.children.length !== question.words.length) {
                alert('すべての単語を使用してください。');
                return;
            }
            handleSortAnswer(selectedWords.map(btn => btn.textContent), selectedWords);
        };

        const resetBtn = document.createElement('button');
        resetBtn.className = 'sort-reset-btn';
        resetBtn.textContent = 'やり直す';
        resetBtn.onclick = () => {
            selectedWords.forEach(btn => wordPool.appendChild(btn));
            selectedWords = [];
        };

        controls.appendChild(resetBtn);
        controls.appendChild(submitBtn);

        sortContainer.appendChild(answerArea);
        sortContainer.appendChild(wordPool);
        sortContainer.appendChild(controls);
        optionsContainer.appendChild(sortContainer);
    } else {
        // 通常の4択問題
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => handleAnswer(index, btn);
            optionsContainer.appendChild(btn);
        });
    }
}

function handleSortAnswer(userOrderList, selectedButtons) {
    const question = currentRoundQuestions[currentQuestionIndex];
    const isCorrect = userOrderList.join(' ') === question.correctOrder.join(' ');

    // 共通の進捗更新と画面演出ロジックを呼び出す
    processAnswerResult(isCorrect, question);

    const submitBtn = document.querySelector('.sort-submit-btn');
    const resetBtn = document.querySelector('.sort-reset-btn');
    if (submitBtn) submitBtn.disabled = true;
    if (resetBtn) resetBtn.disabled = true;

    selectedButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add(isCorrect ? 'correct' : 'incorrect');
    });
}

function handleAnswer(selectedIndex, selectedBtn) {
    const question = currentRoundQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.displayAnswer;

    processAnswerResult(isCorrect, question);

    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    selectedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
    if (!isCorrect) {
        buttons[question.displayAnswer].classList.add('correct');
    }
}

function processAnswerResult(isCorrect, question) {
    if (isCorrect) roundScore++;

    // Any answer grants EXP
    userProgress.exp += 30;
    updateHeaderStats();

    // Update Progress
    const progress = userProgress[currentWorkKey];
    const questionId = question.id;

    // Remove from all pools first
    progress.unattempted = progress.unattempted.filter(id => id !== questionId);
    progress.incorrect = progress.incorrect.filter(id => id !== questionId);
    progress.correct = progress.correct.filter(id => id !== questionId);

    if (isCorrect) {
        progress.correct.push(questionId);
    } else {
        progress.incorrect.push(questionId);
    }
    saveProgress();

    answerResult.innerHTML = isCorrect ? '✨ Excellent!' : '💦 Oops...';
    answerResult.className = isCorrect ? 'correct' : 'incorrect';
    feedbackContainer.classList.add(isCorrect ? 'show-correct' : 'show-incorrect');
    explanationText.innerHTML = question.explanation.replace(/\n|\r\n/g, '<br>');
    feedbackContainer.classList.remove('hidden');

    updateBackgroundColor();

    setTimeout(() => {
        feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    if (currentQuestionIndex === currentRoundQuestions.length - 1) {
        progressBar.style.width = '100%';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentRoundQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    finalScore.textContent = roundScore;
    totalQuestionsDisplay.textContent = currentRoundQuestions.length;

    const percentage = (roundScore / currentRoundQuestions.length) * 100;

    // 大問全体の習熟度ゲージ（メニューカードと同じ計算）
    const gaugeFill = document.getElementById('result-gauge-fill');
    const gaugeLabel = document.getElementById('result-gauge-label');

    const progress = userProgress[currentWorkKey];
    const parts = quizData[currentWorkKey].parts;
    let totalCount = 0;
    Object.keys(parts).forEach(partKey => {
        totalCount += parts[partKey].questions.length;
    });
    const correctCount = progress.correct.length;
    const masteryPerc = totalCount > 0 ? (correctCount / totalCount) * 100 : 0;

    // 習熟度に応じて色を変える
    if (masteryPerc >= 100) {
        gaugeFill.style.background = 'linear-gradient(90deg, #66bb6a, #2e7d32)';
    } else if (masteryPerc >= 60) {
        gaugeFill.style.background = 'linear-gradient(90deg, #29B6F6, #0288D1)'; // Blueish
    } else {
        gaugeFill.style.background = 'linear-gradient(90deg, #4caf50, #2e7d32)';
    }

    gaugeFill.style.width = '0%';
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            gaugeFill.style.width = `${masteryPerc}%`;
        });
    });
    gaugeLabel.textContent = `マスター度 ${correctCount} / ${totalCount} 問 (${Math.round(masteryPerc)}%)`;

    // コメントの調整
    if (percentage === 100) {
        resultMessage.textContent = '🌟 Perfect!! 英語の神様ですね！この調子なら論理・表現のテストもバッチリです✨';
    } else if (percentage >= 80) {
        resultMessage.textContent = '🎊 Great job!! あと少しでパーフェクト！素晴らしい英語力です。自信をもっていきましょう！';
    } else if (percentage >= 60) {
        resultMessage.textContent = '😊 Good effort!! 半分以上解けました。復習を重ねればさらに伸びますよ！💕';
    } else if (percentage >= 40) {
        resultMessage.textContent = '💪 Nice try!! 惜しいところもありました。文法や熟語をもう一度確認してみましょう！';
    } else {
        resultMessage.textContent = '🌈 Don\'t worry!! なかなか難しかったですね。解説をよく読んで、少しずつ覚えていけば大丈夫です！💖';
    }

    showScreen(resultScreen);
}

function showMenu() {
    resetBackgroundColor();
    renderWorkSelection();
    showScreen(menuScreen);
    workList.parentElement.classList.remove('hidden');
}

function showScreen(screen) {
    [menuScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// ---- Level System Logic ----

function getRequiredExp(level) {
    // nレベルからn+1レベルの時、2n+8xp (Lv1->2=10, Lv2->3=12)
    return 2 * level + 8;
}

function updateHeaderStats() {
    statusLevel.textContent = userProgress.level;
    statusExp.textContent = userProgress.exp;

    // update button text to show required exp
    const req = getRequiredExp(userProgress.level);
    if (userProgress.exp >= req) {
        levelUpBtn.textContent = `レベルアップ可能！(${req} EXP必要)`;
        levelUpBtn.classList.add('can-level-up');
    } else {
        levelUpBtn.textContent = `レベルアップ (あと ${req - userProgress.exp} EXP)`;
        levelUpBtn.classList.remove('can-level-up');
    }

    applyLevelColors(statusLevel, userProgress.level);
}

function applyLevelColors(element, level) {
    element.className = ''; // remove all existing classes
    if (level >= 100) {
        element.classList.add('level-rainbow');
    } else if (level >= 50) {
        element.classList.add('level-gold');
    } else if (level >= 20) {
        element.classList.add('level-silver');
    } else if (level >= 10) {
        element.classList.add('level-bronze');
    } else {
        element.classList.add('level-normal');
    }
}

function performLevelUp() {
    let reqExp = getRequiredExp(userProgress.level);

    if (userProgress.exp < reqExp) {
        levelUpMsg.textContent = '経験値が足りません！';
        levelUpMsg.className = 'level-msg-error';
        setTimeout(() => levelUpMsg.className = 'level-msg-hidden', 2000);
        return;
    }

    let targetLevel = userProgress.level;
    let currentExp = userProgress.exp;
    let lvlsGained = 0;

    // 計算
    while (currentExp >= getRequiredExp(targetLevel)) {
        currentExp -= getRequiredExp(targetLevel);
        targetLevel++;
        lvlsGained++;
    }

    userProgress.exp = currentExp;
    saveProgress();

    // 演出用
    levelUpBtn.disabled = true;
    levelUpMsg.textContent = `Lv.${userProgress.level} ➜ Lv.${targetLevel} にレベルアップ！🎉`;
    levelUpMsg.className = 'level-msg-success';

    let currentAnimLevel = userProgress.level;
    const animInterval = setInterval(() => {
        if (currentAnimLevel < targetLevel) {
            currentAnimLevel++;
            statusLevel.textContent = currentAnimLevel;
            statusLevel.classList.remove('level-up-anim');
            // Trigger reflow to restart animation css
            void statusLevel.offsetWidth;
            statusLevel.classList.add('level-up-anim');
            applyLevelColors(statusLevel, currentAnimLevel);
        } else {
            clearInterval(animInterval);
            userProgress.level = targetLevel; // 正式に更新
            updateHeaderStats();
            levelUpBtn.disabled = false;
        }
    }, 100); // 0.1秒ごとにカウントアップ
}

document.addEventListener('DOMContentLoaded', init);
