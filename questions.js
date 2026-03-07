const quizData = {
    ronpyo_vocab: {
        title: "論理・表現 ボキャブラリー確認",
        parts: {
            part1: {
                title: "Lesson 13: 観光・旅行 (ボキャブラリー)",
                questions: [
                    { id: "v1_1", question: "「観光客を誘致する」に適切な英語は？", options: ["attract tourists", "invite tourists", "catch tourists", "pull tourists"], answer: 0, explanation: "attract は「〜を惹きつける、誘致する」という意味です。" },
                    { id: "v1_2", question: "「･･･を見晴らせる」に適切な英語は？", options: ["have a fine view of", "look a good sight of", "watch a great view of", "see a fine sight over"], answer: 0, explanation: "have a fine view of 〜 で「〜を見晴らせる、〜のよい景色が見える」となります。" },
                    { id: "v1_3", question: "「･･･に指定される」に適切な英語は？", options: ["be designated as", "be named as", "be called as", "be marked as"], answer: 0, explanation: "be designated as 〜 で「〜として指定される」となります。" },
                    { id: "v1_4", question: "「･･･に登録される」に適切な英語は？", options: ["be registered as", "be recorded as", "be listed as", "be joined as"], answer: 0, explanation: "be registered as 〜 で「〜に登録される」となります。" },
                    { id: "v1_5", question: "「日帰り旅行に行く」に適切な英語は？", options: ["go on a day trip", "go a day travel", "have a day tour", "make a day voyage"], answer: 0, explanation: "go on a day trip で「日帰り旅行に行く」となります。" },
                    { id: "v1_6", question: "「1泊2日の旅行をする」に適切な英語は？", options: ["have a two-day trip", "stay a one-night trip", "go a one-night travel", "make two days stay"], answer: 0, explanation: "have a two-day trip で「1泊2日の旅行をする」と表現します。" },
                    { id: "v1_7", question: "「･･･への道の教える」に適切な英語は？", options: ["show me the way to", "tell me the road to", "teach me the street for", "show me how go to"], answer: 0, explanation: "show me the way to 〜 で「〜への道を教える」となります。" },
                    { id: "v1_8", question: "「･･･を横断する」に適切な英語は？", options: ["go across", "pass cross", "walk over", "run through"], answer: 0, explanation: "go across で「〜を横断する」という意味です。" },
                    { id: "v1_9", question: "「･･･を通り過ぎる」に適切な英語は？", options: ["go past", "pass by", "go over", "walk out"], answer: 0, explanation: "go past で「〜を通り過ぎる」という意味になります。" },
                    { id: "v1_10", question: "「運賃」に適切な英語は？", options: ["a fare", "a fee", "a cost", "a price"], answer: 0, explanation: "a fare は交通機関の「運賃」を指します。" },
                    { id: "v1_11", question: "「時刻表」に適切な英語は？", options: ["a timetable", "a watch table", "a time chart", "a schedule book"], answer: 0, explanation: "a timetable は列車の「時刻表」を表します。" },
                    { id: "v1_12", question: "「･･･行きの電車」に適切な英語は？", options: ["a train bound for", "a train going to", "a train leaving for", "a train arriving at"], answer: 0, explanation: "bound for 〜 で「〜行きの」。交通機関の目的地を表す際によく使われます。" },
                    { id: "v1_13", question: "「･･･行きの電車」に適切な英語は？", options: ["a train bound for", "a train going to", "a train leaving for", "a train arriving at"], answer: 0, explanation: "bound for 〜 で「〜行きの」。交通機関の目的地を表す際によく使われます。" },
                    { id: "v1_14", question: "「レジ係」に適切な英語は？", options: ["a cashier", "a clerk", "a register", "a staff"], answer: 0, explanation: "レジでお金を扱う係員のことを a cashier（キャッシャー）と呼びます。" },
                    { id: "v1_15", question: "「クレジットカードで支払う」に適切な英語は？", options: ["pay by credit card", "pay with credit card", "pay in credit card", "pay on credit card"], answer: 0, explanation: "支払い手段には by を使います。現金で支払う場合は pay in cash です。" },
                    { id: "v1_16", question: "「･･･のシンボルになる」に適切な英語は？", options: ["become a symbol of", "be a mark of", "grow into a symbol for", "turn to a symbol in"], answer: 0, explanation: "symbol of 〜 で「〜のシンボル・象徴」という意味になります。" },
                    { id: "v1_17", question: "「地元の人たちと触れ合う」に適切な英語は？", options: ["interact with local people", "communicate to local people", "touch with local people", "meet to local people"], answer: 0, explanation: "interact with 〜 で「〜と交流する、触れ合う」という意味になります。" },
                    { id: "v1_18", question: "「口コミで広がる」に適切な英語は？", options: ["be spread by word of mouth", "be shared by talking", "spread by rumor", "be expanded by speakers"], answer: 0, explanation: "word of mouth で「口コミ」。by word of mouth で「口コミによって」となります。" },
                    { id: "v1_19", question: "「地元の人々に愛されている」に適切な英語は？", options: ["be loved by local people", "be liked with locals", "are loved of local people", "is famous for local people"], answer: 0, explanation: "受動態 (be + 過去分詞 + by) を使って「〜によって愛される」と表現します。" },
                    { id: "v1_20", question: "「季節ごとに異なる景色を楽しむ」に適切な英語は？", options: ["enjoy different views in each season", "enjoy changing sights every season", "enjoy other views in all seasons", "have different views every season"], answer: 0, explanation: "in each season で「それぞれの季節ごとに（季節に）」という意味を表します。" }
                ]
            },
            part2: {
                title: "Lesson 14: 健康・医療 (ボキャブラリー)",
                questions: [
                    { id: "v2_1", question: "「健康に影響する」に適切な英語は？", options: ["affect one's health", "effect one's health", "influence to one's health", "impact on one's health"], answer: 0, explanation: "affect は動詞で「〜に影響を与える」。effect は名詞形なので注意です。" },
                    { id: "v2_2", question: "「悪い影響を与える」に適切な英語は？", options: ["have a negative effect", "have a bad affect", "give a bad effect", "make a negative affect"], answer: 0, explanation: "have an effect on 〜 で「〜に影響を与える」。悪い影響なので negative effect を使います。" },
                    { id: "v2_3", question: "「バランスのとれた食事をとる」に適切な英語は？", options: ["have a balanced diet", "eat a balancing meal", "take a balance food", "have a equal diet"], answer: 0, explanation: "diet は「日常の食事」という意味があります。balanced diet で「バランスの取れた食事」。" },
                    { id: "v2_4", question: "「十分に睡眠をとる」に適切な英語は？", options: ["get enough sleep", "take enough sleeping", "have many sleeps", "make enough sleep"], answer: 0, explanation: "「睡眠をとる」は get sleep または have sleep と表現します。" },
                    { id: "v2_5", question: "「医療」に適切な英語は？", options: ["medical care", "health care", "hospital care", "doctor's cure"], answer: 0, explanation: "medical care は「医療、医療ケア」という意味で広く使われる表現です。" },
                    { id: "v2_6", question: "「精密検査」に適切な英語は？", options: ["a thorough examination", "a detail check", "a careful test", "a deep inspection"], answer: 0, explanation: "thorough は「徹底的な、完全な」。examination は「検査、診察」です。" },
                    { id: "v2_7", question: "「X線」に適切な英語は？", options: ["X-ray", "X-line", "X-beam", "X-light"], answer: 0, explanation: "レントゲンを指す「X線」は英語で X-ray と言います。" },
                    { id: "v2_8", question: "「CTスキャン」に適切な英語は？", options: ["a CT scan", "a CT test", "a CT check", "a CT picture"], answer: 0, explanation: "そのまま a CT scan と表現します。（Computed Tomography）" },
                    { id: "v2_9", question: "「足首をくじく」に適切な英語は？", options: ["twist one's ankle", "break one's ankle", "sprain one's foot", "bend one's foot"], answer: 0, explanation: "twist は「ねじる、くじく」。ankle は「足首」です。" },
                    { id: "v2_10", question: "「突き指をする」に適切な英語は？", options: ["sprain one's finger", "twist one's finger", "hit one's finger", "push one's finger"], answer: 0, explanation: "sprain は「〜を捻挫する」という意味で、突き指にも使われます。" },
                    { id: "v2_11", question: "「定期的に運動する」に適切な英語は？", options: ["exercise regularly", "do sports sometimes", "exercise periodic", "play regular"], answer: 0, explanation: "regularly は「定期的に、規則正しく」という副詞です。" },
                    { id: "v2_12", question: "「繊維質の多い食品を食べる」に適切な英語は？", options: ["eat high-fiber food", "eat much fiber food", "have long fiber food", "eat strong fiber food"], answer: 0, explanation: "fiber は「食物繊維」。多く含まれているものを high-fiber と言います。" },
                    { id: "v2_13", question: "「低炭水化物ダイエットを続ける」に適切な英語は？", options: ["follow a low-carb diet", "continue a low-carb diet", "keep a small-carb diet", "have a short-carb diet"], answer: 0, explanation: "「（食事療法など）を守る・続ける」には follow を使います。carb は炭水化物 (carbohydrate) の略。" },
                    { id: "v2_14", question: "「カロリーを計算する」に適切な英語は？", options: ["calculate calories", "count calories", "measure calories", "check calories"], answer: 0, explanation: "「計算する」は calculate です。count calories でも意味は通じます。" },
                    { id: "v2_15", question: "「カロリーを消費する」に適切な英語は？", options: ["burn off calories", "use up calories", "spend calories", "lose calories"], answer: 0, explanation: "ダイエット等でのカロリー消費は「燃焼する」という意味で burn off を使います。" },
                    { id: "v2_16", question: "「体重が増える／減る」に適切な英語は？", options: ["gain/lose weight", "increase/decrease weight", "add/reduce weight", "get/drop weight"], answer: 0, explanation: "「体重が増える」は gain weight、「減る」は lose weight を使います。" },
                    { id: "v2_17", question: "「ダイエット中である」に適切な英語は？", options: ["be on a diet", "be in a diet", "be doing a diet", "are dieting"], answer: 0, explanation: "「ダイエット中（食事制限中）」であることは on a diet で表します。" },
                    { id: "v2_18", question: "「体重を測る」に適切な英語は？", options: ["weigh oneself", "measure one's weight", "check one's weight", "weigh one's body"], answer: 0, explanation: "weigh は「〜の重さを量る」という動詞。weigh oneself で「自分の体重を測る」となります。" },
                    { id: "v2_19", question: "「肉を使わない食事をとる」に適切な英語は？", options: ["eat a meat-free diet", "have a no-meat food", "eat a without-meat diet", "eat a non-meat meal"], answer: 0, explanation: "「〜が入っていない、使われていない」は名詞の後に -free をつけて表します（例：sugar-free）。" },
                    { id: "v2_20", question: "「糖分の多い飲食を控える」に適切な英語は？", options: ["cut down on sugary food or drinks", "cut off sugary food or drinks", "reduce much sugar food or drinks", "save sugar foods and drinks"], answer: 0, explanation: "cut down on 〜 で「〜の量などを減らす、控える」という意味の熟語になります。" }
                ]
            },
            part3: {
                title: "Lesson 15: 社会課題・SDGs (ボキャブラリー)",
                questions: [
                    { id: "v3_1", question: "「問題を解決する」に適切な英語は？", options: ["solve a problem", "answer a problem", "clear a problem", "resolve a question"], answer: 0, explanation: "「問題を解決する」は solve を使います。" },
                    { id: "v3_2", question: "「目標を達成する」に適切な英語は？", options: ["achieve a goal", "reach an aim", "finish a target", "complete a goal"], answer: 0, explanation: "「目標を達成する」は achieve a goal または reach a goal と表現します。" },
                    { id: "v3_3", question: "「･･･に貢献する」に適切な英語は？", options: ["contribute to", "support to", "help for", "assist in"], answer: 0, explanation: "contribute to 〜 で「〜に貢献する、寄与する」という意味になります。" },
                    { id: "v3_4", question: "「平等な社会を実現する」に適切な英語は？", options: ["achieve an equal society", "make an equal society", "realize a fair society", "build an equal world"], answer: 0, explanation: "「実現する（達成する）」という意味で achieve が使われます。equal は「平等な」です。" },
                    { id: "v3_5", question: "「措置を講じる」(take steps を使用して) に適切な英語は？", options: ["take steps to do", "make steps for", "take actions to", "do steps to"], answer: 0, explanation: "take steps to do で「〜する手段（措置）を講じる」という熟語です。" },
                    { id: "v3_6", question: "「･･･に対する戦略を立てる」に適切な英語は？", options: ["plan a strategy for/to", "make a tactic for", "build a plan to", "set a route for"], answer: 0, explanation: "「戦略」は strategy。「計画する、立てる」は plan を使います。" },
                    { id: "v3_7", question: "「･･･の解決策を探す」に適切な英語は？", options: ["seek a solution to/for", "search an answer to", "look for a reply to", "find a solve to"], answer: 0, explanation: "「探す・追求する」は seek。「解決策」は solution です。" },
                    { id: "v3_8", question: "「･･･に対する措置を取る」(take measures を使用して)に適切な英語は？", options: ["take measures against", "make measures for", "do measures to", "take measures to"], answer: 0, explanation: "take measures against 〜 で「〜に対する措置（対策）を取る」という意味になります。" },
                    { id: "v3_9", question: "「改善策をもたらす」に適切な英語は？", options: ["provide a remedy to do", "make a change to do", "give a solution to do", "bring an improvement for"], answer: 0, explanation: "remedy には「治療法」以外にも「改善策、救済策」という意味があります。" },
                    { id: "v3_10", question: "「･･･間の差を縮める」に適切な英語は？", options: ["close the gap between", "reduce the difference of", "shorten the space in", "narrow the gap among"], answer: 0, explanation: "「格差・ズレ（gap）を縮める（close）」というコロケーション（よく使われる組み合わせ）です。" },
                    { id: "v3_11", question: "「公正」に適切な英語は？", options: ["justice", "fair", "public", "equality"], answer: 0, explanation: "SDGsの目標16「平和と『公正』をすべての人に」などに出てくる「公正、正義」は justice です。" },
                    { id: "v3_12", question: "「幸福、満足のいく状態、安寧」に適切な英語は？", options: ["well-being", "happiness", "wellness", "health"], answer: 0, explanation: "SDGsでよく用いられる「身体的、精神的、社会的に良好な状態（幸福）」を well-being と呼びます。" },
                    { id: "v3_13", question: "「質の高い教育」に適切な英語は？", options: ["quality education", "high-level education", "good education", "class education"], answer: 0, explanation: "SDGs目標4。quality は名詞ですが、形容詞的に「質の高い、良質な」という意味でも使われます。" },
                    { id: "v3_14", question: "「クリーンエネルギー」に適切な英語は？", options: ["clean energy", "clear energy", "pure energy", "green energy"], answer: 0, explanation: "SDGs目標7。そのまま clean energy と言います。" },
                    { id: "v3_15", question: "「手ごろな価格のエネルギー」に適切な英語は？", options: ["affordable energy", "cheap energy", "low-price energy", "reasonable energy"], answer: 0, explanation: "affordable は「（価格が）手頃な、手が出せる」という意味の重要な単語です。" },
                    { id: "v3_16", question: "「経済成長」に適切な英語は？", options: ["economic growth", "economy going", "financial growth", "business up"], answer: 0, explanation: "economic は「経済の」。growth は「成長」です。" },
                    { id: "v3_17", question: "「社会基盤（インフラ）」に適切な英語は？", options: ["infrastructure", "base system", "groundwork", "social base"], answer: 0, explanation: "水道、電気、道路、通信などの社会基盤を infrastructure（インフラストラクチャー）と言います。" },
                    { id: "v3_18", question: "「気候変動に対する行動」に適切な英語は？", options: ["climate action", "weather action", "climate movement", "weather change"], answer: 0, explanation: "SDGs目標13。climate は「気候」です（天気 weather とは異なります）。" },
                    { id: "v3_19", question: "「やりがいのある仕事」に適切な英語は？", options: ["decent work", "good job", "worthy work", "rewarding job"], answer: 0, explanation: "SDGs目標8。decent には「きちんとした、働きがいのある」という意味があります。" },
                    { id: "v3_20", question: "「責任ある消費」に適切な英語は？", options: ["responsible consumption", "right spending", "careful consumption", "duty user"], answer: 0, explanation: "SDGs目標12「つくる責任、つかう責任」。responsible は「責任がある」、consumption は「消費」です。" }
                ]
            }
        }
    },
    ronpyo_grammar: {
        title: "論理・表現 熟語・文法・表現",
        parts: {
            partx1: {
                title: "語彙・熟語の運用（穴埋め）",
                questions: [
                    { id: "g1_1", question: "ホテルへの行き方を教えていただけますか。\nCould you tell me (　) (　) (　) (　) the hotel?", options: ["how to get to", "what to do to", "way to go to", "how I go to"], answer: 0, explanation: "「〜への行きかた」は how to（〜の方法）と get to（〜に到着する）を組み合わせて how to get to 〜 となります。" },
                    { id: "g1_2", question: "左に曲がって道を横断してください。\nTurn left and (　) (　) the street.", options: ["go across", "walk over", "pass cross", "run to"], answer: 0, explanation: "「〜を横断する」は go across を使います。前置詞 across に「〜を横切って」という意味があります。" },
                    { id: "g1_3", question: "名古屋城は1930年に国宝に指定された最初の城郭だった。\nNagoya Castle was the first castle structure to (　) (　) (　) a national treasure in 1930.", options: ["be designated as", "be appointed to", "have designed for", "be designed as"], answer: 0, explanation: "「〜として指定される」は受動態で be designated as となります。" },
                    { id: "g1_4", question: "可能であればクレジットカードで支払いたいのですが。\nI'd like to (　) (　) (　) (　) if possible.", options: ["pay by credit card", "pay in credit card", "buy with credit card", "buy on credit card"], answer: 0, explanation: "支払い手段を示すときは前置詞 by を使い、pay by credit card（クレジットカードで支払う）となります。" },
                    { id: "g1_5", question: "彼はようやくロンドン行きの列車に乗り込んだ。\nHe eventually boarded (　) (　) (　) (　) London.", options: ["a train bound for", "the train going to", "a train leave for", "the train directed to"], answer: 0, explanation: "「〜行きの」は形容詞句 bound for 〜 を名詞の直後に置いて修飾し、a train bound for London となります。" },
                    { id: "g1_6", question: "私たちは定期的に運動することが重要だ。\nIt's important for us to (　) (　).", options: ["exercise regularly", "do exercise time", "play sports regular", "exercise sometimes"], answer: 0, explanation: "exercise（運動する）という動詞を regularly（定期的に）という副詞が修飾します。" },
                    { id: "g1_7", question: "十分に睡眠をとっていないようですね。\nI guess you didn't (　) (　) (　).", options: ["get enough sleep", "take enough bed", "have fully sleep", "make well sleep"], answer: 0, explanation: "「睡眠をとる」は get sleep。「十分な睡眠」なので enough sleep を挟んで get enough sleep となります。" },
                    { id: "g1_8", question: "彼女は後ろへ下がったとき、たまたま足首をくじいてしまった。\nAs she stepped back, she happened to (　) (　) (　).", options: ["twist her ankle", "break her leg", "sprain her toes", "bend her feet"], answer: 0, explanation: "happen to do で「たまたま〜する」。「足首をくじく」は twist one's ankle です。" },
                    { id: "g1_9", question: "私はダイエット中であるはずなのにケーキを1切れ食べてしまった。\nI'm supposed to (　) (　) (　) (　) but I ate a piece of cake.", options: ["be on a diet", "have in a diet", "make for a diet", "be doing a diet"], answer: 0, explanation: "「ダイエット中である」は前置詞 on を使って be on a diet と表します。（be supposed to は「〜するはずである」）" },
                    { id: "g1_10", question: "彼はカロリーを消費するためにジョギングを始めた。\nHe started jogging in order to (　) (　) (　).", options: ["burn off calories", "lose off calories", "use much calories", "drop down calories"], answer: 0, explanation: "「カロリーを消費（燃焼）する」は burn off calories です。（in order to do「〜するために」）" },
                    { id: "g1_11", question: "人口増加は経済成長に影響を与え得る。\nPopulation growth can affect (　) (　).", options: ["economic growth", "finance big", "economy up", "economic grow"], answer: 0, explanation: "「経済成長」は economic growth。affect は他動詞で「〜に影響を与える」なので直接目的語をとります。" },
                    { id: "g1_12", question: "技能にかかわらず、だれでもそのプロジェクトに貢献することができる。\nAnyone can (　) (　) the project regardless of their skills.", options: ["contribute to", "support for", "assist in", "help with"], answer: 0, explanation: "「〜に貢献する」は contribute to です。（regardless of 〜「〜に関わらず」）" },
                    { id: "g1_13", question: "彼は彼らの安全を確保するのに必要な措置を講じると約束した。\nHe promised to (　) (　) (　) ensure their security.", options: ["take steps to", "make actions for", "do steps to", "take measures for"], answer: 0, explanation: "「（〜するための）手段・措置を講じる」は take steps to (do) と表現します。" },
                    { id: "g1_14", question: "その研究者たちは食品ロスの解決策を探し続けた。\nThe researchers continued to (　) (　) (　) (　) food loss.", options: ["seek a solution for", "find an answer to", "look an answer to", "search a solve to"], answer: 0, explanation: "「〜に対する解決策を探す」は seek a solution for (または to) です。" }
                ]
            },
            partx2: {
                title: "ディクテーション問題",
                questions: [
                    { id: "g2_1", question: "温泉は海外からの観光客の間で人気になりつつある。\nHot spring baths, or onsen, (　) (　) popular among tourists from abroad.", options: ["are becoming", "is becoming", "have become", "were getting"], answer: 0, explanation: "主語が Hot spring baths（複数形）なので動詞は are。現在進行系で「なりつつある」を表します。" },
                    { id: "g2_2", question: "温泉旅館に泊まれば、部屋に浴衣がある。\nIf you stay in an onsen ryokan, (　) (　) a kimono called a yukata in your room.", options: ["there is", "we have", "it has", "there are"], answer: 0, explanation: "「〜がある」は There is/are 構文。a kimono（単数）が主語の働きをするため there is が正解です。" },
                    { id: "g2_3", question: "浴場は2つのセクションに分かれている。1つは服を脱ぐためのものだ。\nEvery onsen bath has two sections. One is for (　) undressed...", options: ["getting", "being", "making", "taking"], answer: 0, explanation: "for（前置詞）の後は動名詞になります。get undressed で「服を脱ぐ」。よって getting を使います。" },
                    { id: "g2_4", question: "多くの国で、親は子供に1日3食食べさせる。\nIn many countries, parents (　) their children (　) three meals a day...", options: ["have / eat", "make / eat", "let / eat", "get / to eat"], answer: 0, explanation: "使役動詞「have + 人 + 原形」で「（当然のこととして）人に〜させる／してもらう」。ここは have / eat です。" },
                    { id: "g2_5", question: "彼らは、より少量の健康的な食事を1日6回とることを勧めている。\nThey (　) people eat six smaller, healthier meals each day.", options: ["recommend", "suggest", "advise", "tell"], answer: 0, explanation: "「〜することを勧める」は recommend です。文法的には recommend (that) people (should) eat 〜 という形です。" },
                    { id: "g2_6", question: "日本の水の汚染と乱獲が、海を健康に保つことを妨げている。\n...overfishing have (　) us (　) keeping our oceans healthy.", options: ["prevented / from", "kept / away", "stopped / in", "banned / over"], answer: 0, explanation: "「Aが〜するのを妨げる」は prevent A from doing の形をとります。" },
                    { id: "g2_7", question: "教育は、私たちがその目標を達成することを可能にするだろう。\n...education will (　) us to achieve the goal.", options: ["enable", "make", "allow", "provide"], answer: 0, explanation: "「Aが〜するのを可能にする（無生物主語でよく使われる）」は enable A to do の形をとります。make の場合は to はつきません。" }
                ]
            },
            partx3: {
                title: "表現・文法問題（基礎・応用）",
                questions: [
                    { id: "g3_1", question: "「コンサートには何人いましたか。」\nHow many (　) (　) (　) at the concert?", options: ["people were there", "people are there", "person are present", "persons was there"], answer: 0, explanation: "there is/are 構文の疑問文。過去形なので were there となり、How many people + were there という語順になります。" },
                    { id: "g3_2", question: "「私たちの学校には、長い歴史があります。」\n(　) (　) (　) a long history.", options: ["Our school has", "Our school is", "There is a", "We has in"], answer: 0, explanation: "無生物主語（Our school）を主語に置き、所有を表す動詞 has を使って表現します。" },
                    { id: "g3_3", question: "「私がその絵を描くのに5ヵ月かかりました。」\nIt (　) five months for me (　) paint that picture.", options: ["took / to", "takes / to", "cost / to", "spent / for"], answer: 0, explanation: "「（時間）がかかる」は It takes (時間) to do。過去形なので took になります。" },
                    { id: "g3_4", question: "「姉は高校でバイオリンが弾けるようになりました。」\nMy sister (　) (　) play the violin in high school.", options: ["learned to", "came to", "became to", "was able to"], answer: 0, explanation: "「（学んで／努力して）〜できるようになる」は learn to do で表現します。" },
                    { id: "g3_5", question: "「母は弟に自分の部屋を片付けさせた。」\nMy mother (　) my brother (　) his room.", options: ["made / clean", "had / cleaned", "let / clean", "got / to clean"], answer: 0, explanation: "使役動詞 make + 人 + 原形で「（強制的に）〜させる」。ここでは made my brother clean となります。" },
                    { id: "g3_6", question: "「私に、あなたが空いている時間を教えて（知らせて）ください。」\nPlease (　) me (　) when you are free.", options: ["let / know", "tell / me", "teach / to know", "make / know"], answer: 0, explanation: "使役動詞 let + 人 + 原形で「（本人が望む通りに）〜させてあげる」。let me know は「知らせてください」の定番フレーズです。" },
                    { id: "g3_7", question: "並べ替え：「私は父に車でそこへ連れていってもらいました。」\n( got / take / my father / to / me / I ) there by car.", options: ["I got my father to take me", "I got take me to my father", "I got my father take to me", "I took my father to get me"], answer: 0, explanation: "「（説得したり頼んだりして）〜してもらう」は got + 人 + to do の形になります。" },
                    { id: "g3_8", question: "「メアリーは自分の息子を台所で手伝わせました（現在分詞を使用）。」\nMary (　) her son (　) her in the kitchen.", options: ["had / helping", "got / helping", "made / help", "kept / to help"], answer: 0, explanation: "使役動詞 have + 人 + doing（現在分詞）で、「人に〜させておく、人に〜してもらう」という状況を表します。" },
                    { id: "g3_9", question: "並べ替え：「私は彼のポケットから何かが落ちるのを見ました。」\nI ( drop / something / pocket / saw / his / from ).", options: ["I saw something drop from his pocket", "I saw drop something from his pocket", "I saw his pocket drop from something", "I something saw drop from his pocket"], answer: 0, explanation: "知覚動詞 see + 目的語 + 原形で「目的語が〜するのを見る」。ここでは saw something drop (from...) となります。" },
                    { id: "g3_10", question: "「観客の中には泣いているひともいた。」\n(　) (　) in the audience were crying.", options: ["Some people", "Any people", "Several person", "A people"], answer: 0, explanation: "「〜する人もいる（一部の人）」は Some people と表します。Some だけでも可能です。" },
                    { id: "g3_11", question: "「この本を読んだ学生はまだいない。」\n(　) (　) have read this book yet.", options: ["No students", "Not students", "None student", "Zero students"], answer: 0, explanation: "「〜な人は一人もいない」は No + 名詞（複数形も可）を主語に置いて No students と表現します。" },
                    { id: "g3_12", question: "並べ替え：「この道路を行くと、市の中心部に着きます。」\n( will take / you / to / this road ) the center of the city.", options: ["This road will take you to", "You will take this road to", "This road will take to you", "You will take to this road"], answer: 0, explanation: "無生物主語を用いた文。This road（この道路が）will take you（あなたを連れて行く）to the center（中心部へ）。" },
                    { id: "g3_13", question: "並べ替え：「今朝は大雪のため、外出できませんでした。」\nThe ( snow / me / going out / from / heavy / kept ) this morning.", options: ["heavy snow kept me from going out", "snow kept me heavy from going out", "heavy snow from going out kept me", "heavy snow kept going out from me"], answer: 0, explanation: "「主語 + keep + 目的語 + from doing」で「主語のせいで目的語は〜できない」。ここでは heavy snow kept me from going out となります。" },
                    { id: "g3_14", question: "【使役動詞 make】そのニュースを聞いて、私は悲しくなった。\nThe news (　) me (　).", options: ["made / sad", "made / sadness", "make / sad", "had / sadly"], answer: 0, explanation: "make + 目的語 + 形容詞 で「OをC（の状態に）する」。文脈から過去形で made me sad です。" },
                    { id: "g3_15", question: "【使役動詞 have + 過去分詞】私は昨日、自転車を修理してもらった。\nI (　) my bike (　) yesterday.", options: ["had / repaired", "got / repair", "have / to repair", "had / repairing"], answer: 0, explanation: "have + 物 + 過去分詞 で「（物を専門家などに）〜してもらう」。I had my bike repaired となります。" },
                    { id: "g3_16", question: "【無生物主語 help】インターネットのおかげで、私たちは情報を簡単に見つけることができる。\nThe internet (　) us (　) information easily.", options: ["helps / find", "helped / to find", "makes / find", "lets / finding"], answer: 0, explanation: "help + 人 + (to) 原形 で「人が〜するのを手伝う→おかげで〜できる」。ここでは helps us find となります。" },
                    { id: "g3_17", question: "【無生物主語 remind】この写真は私に子供時代を思い出させる。\nThis picture (　) me (　) my childhood.", options: ["reminds / of", "remembers / from", "reminds / for", "makes / about"], answer: 0, explanation: "remind A of B で「AにBを思い出させる」。無生物主語の定番表現です。" },
                    { id: "g3_18", question: "【義務・予定 be supposed to】私たちはここで靴を脱ぐことになっています。\nWe (　) (　) (　) take off our shoes here.", options: ["are supposed to", "are supposing to", "are planned to", "have supposed to"], answer: 0, explanation: "be supposed to do は「〜することになっている（ルールや予定などを表す）」という熟語です。" },
                    { id: "g3_19", question: "【知覚動詞 hear + 原形】私は彼女がピアノを弾くのを一度も聞いたことがない。\nI have never (　) her (　) the piano.", options: ["heard / play", "listened / play", "heard / played", "listening / playing"], answer: 0, explanation: "知覚動詞 hear + 目的語 + 原形 で「〜が〜するのを聞く」。現在完了形なので heard her play となります。" }
                ]
            }
        }
    },
    ronpyo_upgrade: {
        title: "論理・表現 アップグレード",
        parts: {
            partu1: {
                title: "多義語・基本動詞の熟語",
                questions: [
                    { id: "u1_1", question: "どんなことがあっても、約束を守らなければならない。\nWhatever may happen, you must (　) your promise.", options: ["keep", "give", "defend", "hold"], answer: 0, explanation: "「約束を守る」は keep one's promise と言います。「破る」は break one's promise です。" },
                    { id: "u1_2", question: "The editor hit (　) a good title for a new novel by a famous writer.", options: ["upon", "at", "over", "with"], answer: 0, explanation: "和訳：その編集者は、有名な作家による新しい小説の素晴らしいタイトルをふと思いついた。\r\n\r\nhit (up)on 〜 で「（考えなど）をふと思いつく」という熟語です。" },
                    { id: "u1_3", question: "Keiko (　) with an American girl.", options: ["made friends", "became a friend", "came friends", "made a friend"], answer: 0, explanation: "和訳：ケイコはアメリカ人の女の子と友達になった。\r\n\r\nmake friends with 〜 で「〜と友達になる」。必ず friends（複数形）を使います。" },
                    { id: "u1_4", question: "Kazu studied hard for many years in order to (　) his ambition of becoming a dentist.", options: ["realize", "proceed", "succeed", "obtain"], answer: 0, explanation: "和訳：カズは歯医者になるという野望（夢）を実現するために、何年も一生懸命勉強した。\r\n\r\nrealize は「〜に気づく」のほか、「（夢や野望などを）実現する」という意味があります。" },
                    { id: "u1_5", question: "He may well take pride (　) his talent.", options: ["in", "about", "of", "with"], answer: 0, explanation: "和訳：彼が自分の才能を誇りに思うのももっともだ。\r\n\r\ntake pride in 〜 または be proud of 〜 で「〜を誇りに思う」となります。（may well = 〜するのももっともだ）" },
                    { id: "u1_6", question: "Will you (　) after my cats while I'm away from home?", options: ["look", "keep", "put", "catch"], answer: 0, explanation: "和訳：私が留守の間、猫の世話をしてくれませんか。\r\n\r\nlook after 〜 で「〜の世話をする」という意味です。" },
                    { id: "u1_7", question: "Jane has been working very hard, so I think she (　) a long vacation.", options: ["deserves", "conserves", "reserves", "preserves"], answer: 0, explanation: "和訳：ジェーンはずっと一生懸命働いているので、長い休暇をとるに値すると思う。\r\n\r\ndeserve は「〜に値する、ふさわしい」という意味です。" },
                    { id: "u1_8", question: "The job wasn't very interesting, but (　) it was well-paid.", options: ["on the other hand", "all the more", "on the contrary", "in addition"], answer: 0, explanation: "和訳：その仕事はあまり面白くなかったが、他方では給料はよかった。\r\n\r\n「他方では、その一方で」を表す on the other hand が適しています。" },
                    {
                        id: "u1_9",
                        type: "sort",
                        question: "どの子にも尊敬できる人が必要だ。\n(  ) (  ) (  ) (  ) (  ) (  ) (  ) (  ).",
                        words: ["needs", "look", "someone", "to", "to", "child", "every", "up"],
                        correctOrder: ["every", "child", "needs", "someone", "to", "look", "up", "to"],
                        explanation: "look up to 〜 で「〜を尊敬する」。ここでの to look up to は someone を修飾する不定詞の形容詞的用法です。Every child needs someone to look up to."
                    },
                    {
                        id: "u1_10",
                        type: "sort",
                        question: "その男は窃盗罪で告発された。\nThe (  ) (  ) (  ) (  ) (  ).",
                        words: ["theft", "with", "was", "man", "charged"],
                        correctOrder: ["man", "was", "charged", "with", "theft"],
                        explanation: "「The man was charged with theft.」となるように並べます。be charged with 〜 で「〜の罪で告発される、非難される」となります。"
                    },
                    {
                        id: "u1_11",
                        type: "sort",
                        question: "タロウは大学を出たらすぐに父親の仕事を継ぐだろう。\nTaro (  ) (  ) (  ) (  ) (  ) (  ) as soon as he leaves college.",
                        words: ["will", "business", "his", "father's", "over", "take"],
                        correctOrder: ["will", "take", "over", "his", "father's", "business"],
                        explanation: "「Taro (will take over his father's business) as soon as...」の順です。take over 〜 で「引き継ぐ」という意味の重要な熟語です。"
                    },
                    {
                        id: "u1_12",
                        type: "sort",
                        question: "ジョンは国際問題にまったく興味を示さない。他国の苦しみに対してどうしてそんなに無関心でいられるのかわからない。\n... I don't know how he (  ) (  ) (  ) (  ) (  ) suffering in other countries.",
                        words: ["can", "indifferent", "so", "to", "be"],
                        correctOrder: ["can", "be", "so", "indifferent", "to"],
                        explanation: "「how he (can be so indifferent to) suffering」の順になります。be indifferent to 〜 で「〜に無関心である」。"
                    },
                    {
                        id: "u1_13",
                        type: "sort",
                        question: "台風が洪水を引き起こした。\n(  ) (  ) (  ) (  ) (  ).",
                        words: ["the flood", "rise", "the typhoon", "to", "gave"],
                        correctOrder: ["the typhoon", "gave", "rise", "to", "the flood"],
                        explanation: "「The typhoon gave rise to the flood.」の順になります。give rise to 〜 は「（望ましくない事態など）を引き起こす、生じさせる」という熟語です。"
                    },
                    {
                        id: "u1_14",
                        type: "sort",
                        question: "We had a hard time (  ) (  ) (  ) (  ).",
                        words: ["meet", "ends", "both", "making"],
                        correctOrder: ["making", "both", "ends", "meet"],
                        explanation: "和訳：私たちは生活をやりくりするのにとても苦労した。\r\n\r\n「We had a hard time making both ends meet.」となります。make both ends meet で「収支を合わせる（収入の範囲内でやりくりする）」という慣用句です。have a hard time doing（〜するのに苦労する）に繋がります。"
                    },
                    {
                        id: "u1_15",
                        type: "sort",
                        question: "I was upset, but I (  ) (  ) (  ) (  ) (  ).",
                        words: ["for", "free", "got", "lunch", "my"],
                        correctOrder: ["got", "my", "lunch", "for", "free"],
                        explanation: "和訳：私は怒っていたが、無料の昼食を手に入れた。\r\n\r\n「I was upset, but I got my lunch for free.」の順になります。for free で「無料で、タダで」という意味になります。"
                    },
                    { id: "u1_16", question: "適切な語に直す問題。誤りがある部分の正しい形は？\nMary had a hard time understanding the new words... she decided to *look up them* in her dictionary instead.", options: ["look them up", "look for them", "lookup them", "look over them"], answer: 0, explanation: "和訳：メアリーは新しい単語を理解するのに苦労したので、代わりに辞書でそれらを調べることにした。\r\n\r\n他動詞＋副詞の熟語（look up 等）の目的語が代名詞 (them) の場合、代名詞は必ず間に挟んで look them up とします。" },
                    { id: "u1_17", question: "下線部と同意のものを選びなさい：\nHe decided to *get rid of* all the magazines in his room.", options: ["discard", "tear", "classify", "submit"], answer: 0, explanation: "和訳：彼は部屋にある雑誌をすべて処分することに決めた。\r\n\r\nget rid of 〜 は「〜を取り除く、捨てる」。これは discard（捨てる）と同意です。" },
                    { id: "u1_18", question: "下線部と同意のものを選びなさい：\nAs civilization grew more *complex*, better methods of communication were needed.", options: ["complicated", "comprehensive", "composed", "complete"], answer: 0, explanation: "和訳：文明がより複雑になるにつれて、コミュニケーションのより良い方法が必要とされた。\r\n\r\ncomplex（複雑な）は complicated と同意語です。" },
                    { id: "u1_19", question: "下線部と同意のものを選びなさい：\nToday the *term* computer usually refers to highly complex electronic devices.", options: ["word with a special meaning", "charge", "semester", "fixed or limited period of time"], answer: 0, explanation: "和訳：今日、「コンピューター」という用語は通常、極めて複雑な電子機器を指す。\r\n\r\nここでの term は「用語、専門用語（特別な意味を持つ言葉）」を意味します。" },
                    { id: "u1_20", question: "下線部と同意のものを選びなさい：\nA friend of mine decided not to wait till his company *fired* him.", options: ["force somebody to leave his or her job", "shoot bullets from a gun", "make somebody feel very excited", "provide fuel for somebody"], answer: 0, explanation: "和訳：私の友人は、会社が彼を解雇するまで待たないと決めた。\r\n\r\nここでの fire は「〜を解雇する、クビにする」という意味です（誰かに仕事を辞めさせること）。" }
                ]
            },
            partu2: {
                title: "前置詞でつかむ熟語・重要熟語",
                questions: [
                    { id: "u2_1", question: "Our school is within ten minutes (　) my house.", options: ["of", "to", "in", "for"], answer: 0, explanation: "和訳：私たちの学校は家から10分以内のところにあります。\r\n\r\nwithin (距離/時間) of 〜 で「〜から（距離/時間）の範囲内で」となります。" },
                    { id: "u2_2", question: "A: What do you think of the manager's new plan, Paul?\nB: (　), I don't think it is going to work.", options: ["Between you and me", "At the last minute", "At the same time", "On the other hand"], answer: 0, explanation: "和訳：A「マネージャーの新しい計画についてどう思う、ポール？」B「ここだけの話、上手くいくとは思えないな。」\r\n\r\nbetween you and me は「ここだけの話（内緒の話）」という慣用句です。" },
                    { id: "u2_3", question: "I waited for two hours at the station but he never (　).", options: ["showed up", "turned in", "appeared on", "arrived on"], answer: 0, explanation: "和訳：駅で2時間待ったが、彼はついに姿を見せなかった。\r\n\r\nshow up は「姿を現す、登場する」です。" },
                    { id: "u2_4", question: "It is rude to stare (　) someone.", options: ["at", "into", "on", "to"], answer: 0, explanation: "和訳：誰かをじろじろ見るのは失礼だ。\r\n\r\nstare at 〜 で「〜をじっと見る、凝視する」という意味です。" },
                    { id: "u2_5", question: "She craved solitude and yet she was longing (　) an exciting life.", options: ["for", "of", "on", "with"], answer: 0, explanation: "和訳：彼女は孤独を渇望していたが、一方で刺激的な人生に憧れていた。\r\n\r\nlong for 〜 で「〜を切望する、憧れる」です。" },
                    { id: "u2_6", question: "He played an active (　) in business until he was over eighty.", options: ["part", "position", "service", "use"], answer: 0, explanation: "和訳：彼は80歳を過ぎるまで、ビジネスにおいて現役で（中心的な）役割を果たした。\r\n\r\nplay a part (in 〜) で「（〜において）役割を果たす」です。" },
                    { id: "u2_7", question: "This car is superior (　) that one in handling.", options: ["to", "by", "from", "than"], answer: 0, explanation: "和訳：この車は操作性の面で、あの車よりも優れている。\r\n\r\nsuperior to 〜 で「〜より優れている」。比較対象には than ではなく to を用います。" },
                    { id: "u2_8", question: "「彼が窓を割ったやつだと思うかい？」 「それは（間違いないよ）。」\n\"That's (　).\"", options: ["for sure", "to be sure", "certainly", "certainty"], answer: 0, explanation: "for sure は「確かに、確実に」という意味の口語的な表現です。" },
                    { id: "u2_9", question: "(　) working. You're almost finished.", options: ["Keep on", "Try on", "Come on", "From now on"], answer: 0, explanation: "和訳：作業を続けなさい。あともう少しで終わりですから。\r\n\r\nkeep on doing で「〜し続ける」という意味になります。" },
                    {
                        id: "u2_10",
                        type: "sort",
                        question: "市長は次の選挙を心配しているようだ。\nThe mayor (  ) (  ) (  ) (  ) (  ) (  ) (  ) (  ).",
                        words: ["be", "election", "about", "seems", "next", "concerned", "to", "the"],
                        correctOrder: ["seems", "to", "be", "concerned", "about", "the", "next", "election"],
                        explanation: "seems to be concerned about the next election の順になります。be concerned about 〜 は「〜について心配している、気にかける」という熟語です。"
                    },
                    {
                        id: "u2_11",
                        type: "sort",
                        question: "議長は協定を結ぶ可能性があることを否定しなかった。\nThe chairman (  ) (  ) (  ) (  ) (  ) (  ) of an agreement.",
                        words: ["did", "not", "the", "rule", "possibility", "out"],
                        correctOrder: ["did", "not", "rule", "out", "the", "possibility"],
                        explanation: "did not rule out the possibility の順になります。rule out 〜 は「（可能性など）を排除する、除外する、ありえないとする」。"
                    },
                    {
                        id: "u2_12",
                        type: "sort",
                        question: "なぜあなたは私が言ったようにやらなかったのか。\nWhy didn't you do it (  ) (  ) (  ) (  ) (  )?",
                        words: ["told", "the", "I", "you", "way"],
                        correctOrder: ["the", "way", "I", "told", "you"],
                        explanation: "the way I told you と繋ぎます。the way + S + V で「SがVするように（方法で）」という副詞節を導く慣用的な表現です。"
                    },
                    {
                        id: "u2_13",
                        type: "sort",
                        question: "フランス国旗の3色は「自由、平等、友愛」を表す。\nThe three (  ) (  ) (  ) (  ) (  ) (  ) (  ) (  ) \"liberty, equality, and fraternity.\"",
                        words: ["for", "colors", "French", "of", "the", "flag", "stand", "national"],
                        correctOrder: ["national", "colors", "of", "the", "French", "flag", "stand", "for"],
                        explanation: "(The three) national colors of the French flag stand for の順になります。stand for 〜 は「〜を表す、象徴する」という意味です。"
                    },
                    {
                        id: "u2_14",
                        type: "sort",
                        question: "It is (  ) (  ) (  ) (  ) (  ) (  ) (  ) (  ) (  ) the growing debt.",
                        words: ["the", "government", "to", "take", "on", "action", "up", "to", "immediate"],
                        correctOrder: ["up", "to", "the", "government", "to", "take", "immediate", "action", "on"],
                        explanation: "和訳：増大する負債に対して早急な手段をとるのは政府の責任だ。\r\n\r\n「It is up to the government to take immediate action on the growing debt.」となります。be up to A to do で「〜するのはA次第だ、Aの責任だ」。take action on は「〜に対処（措置）する」です。"
                    },
                    { id: "u2_15", question: "適切な語に直す問題。誤りがある部分の正しい形は？\nI prefer postponing the whole business *than* getting into debt.", options: ["to", "from", "for", "over"], answer: 0, explanation: "和訳：私は借金をするよりも、すべての事業を延期する方がいいと思う。\r\n\r\nprefer A to B で「BよりAを好む」。比較ですが than ではなく to を用いるのがポイントです。" },
                    { id: "u2_16", question: "下線部と同意のものを選びなさい：\nThis regulation should *be done away with*.", options: ["be abolished", "be modified", "be renewed", "be remade"], answer: 0, explanation: "和訳：この規制は廃止されるべきだ。\r\n\r\ndo away with 〜 で「〜を廃止する」。受動態になっているので be abolished と同意です。" },
                    { id: "u2_17", question: "下線部と同意のものを選びなさい：\nI have to *cut down* my expenses.", options: ["reduce", "repeat", "report", "return"], answer: 0, explanation: "和訳：私は出費を切り詰めなければならない。\r\n\r\ncut down 〜 で「〜を切り詰める、削減する」。reduce と同じ意味です。" },
                    { id: "u2_18", question: "下線部と同意のものを選びなさい：\nTony is *anxious to* join Big Mike's gang.", options: ["wants to", "hates to", "is apt to", "is reckless to"], answer: 0, explanation: "和訳：トニーはビッグマイクの一団（チーム）に参加することを切望している。\r\n\r\nbe anxious to do は「〜することを切望している」。つまり wants to (do) と非常に近い意味になります。" },
                    { id: "u2_19", question: "下線部と同意のものを選びなさい：\nThe boys had no money, so it was *out of the question* for them to go to the movies.", options: ["impossible", "disagreeable", "dishonest", "unusual"], answer: 0, explanation: "和訳：少年たちはお金を持っていなかったため、彼らが映画に行くなど論外だ。\r\n\r\nout of the question は「問題外の→不可能で、絶対に無理で」という意味を持つイディオムです。" },
                    { id: "u2_20", question: "下線部と同意のものを選びなさい：\nThey'll surely *carry out* their plan without difficulty.", options: ["perform", "transform", "uniform", "inform"], answer: 0, explanation: "和訳：彼らは困難なしにきっと計画を実行するだろう。\r\n\r\ncarry out は「（計画・業務など）を実行する、遂行する」。perform も同様に「実行する」の意味で使われます。" }
                ]
            }
        }
    }
};
