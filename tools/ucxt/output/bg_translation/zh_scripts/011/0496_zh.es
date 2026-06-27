#game "blackgate"
// externs
extern var Func08C9 0x8C9 ();
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func0496 object#(0x496) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0000)) goto labelFunc0496_0009;
	abort;
labelFunc0496_0009:
	UI_show_npc_face(0xFF6A, 0x0000);
	gflags[0x01E2] = Func08C9();
	var0000 = Func0908();
	var0001 = Func0931(0xFE9B, 0x0001, 0x02F7, 0xFE99, 0xFE99);
	var0002 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x01DF]) goto labelFunc0496_0057;
	UI_add_answer("黑石");
labelFunc0496_0057:
	if (!gflags[0x01E0]) goto labelFunc0496_0064;
	UI_add_answer("戒指");
labelFunc0496_0064:
	if (!(!gflags[0x01F8])) goto labelFunc0496_009B;
	message("這位沉睡了 200 年的法師看起來就像你上次造訪不列顛尼亞時一樣。~~「聖者！真不敢相信是你！你來喚醒我了！我就知道你會來！」");
	say();
	message("突然， Penumbra 痛苦地抱住頭。「哦！」她喊道。「我的頭！好痛！發生了什麼事？你對我做了什麼？」她閉上眼睛集中精神。「以太有擾動！我能感覺到我的魔力在消退！幫幫我，");
	message(var0000);
	message("！幫幫我！！」");
	say();
	UI_set_schedule_type(UI_get_npc_object(0xFF6A), 0x000B);
	UI_add_answer("以太");
	gflags[0x01F8] = true;
	Func0911(0x0320);
	goto labelFunc0496_00CE;
labelFunc0496_009B:
	if (!(!gflags[0x0003])) goto labelFunc0496_00BD;
	if (!(!gflags[0x01E2])) goto labelFunc0496_00B6;
	message("Penumbra 痛得幾乎無法說話。「是的，");
	message(var0000);
	message("？」");
	say();
	goto labelFunc0496_00BA;
labelFunc0496_00B6:
	message("「哦！我感覺好多了！疼痛正在消退。現在我們可以更輕鬆地交談了。」");
	say();
labelFunc0496_00BA:
	goto labelFunc0496_00C7;
labelFunc0496_00BD:
	message("「是的，");
	message(var0000);
	message("？」");
	say();
labelFunc0496_00C7:
	UI_add_answer("以太");
labelFunc0496_00CE:
	converse attend labelFunc0496_0357;
	case "姓名" attend labelFunc0496_00E4:
	message("「我是 Penumbra 。你一定還記得我吧？」");
	say();
	UI_remove_answer("姓名");
labelFunc0496_00E4:
	case "職業" attend labelFunc0496_00FE:
	if (!(!gflags[0x01E2])) goto labelFunc0496_00FA;
	message("Penumbra 很痛苦。「以太受到干擾時我無法正常思考。在它再次順暢流動之前我什麼都做不了！」");
	say();
	goto labelFunc0496_00FE;
labelFunc0496_00FA:
	message("「我是一名執業法師。一旦我的生意重新開張，我應該就能賣法術和法藥了。畢竟，我已經沉睡了 200 年！」");
	say();
labelFunc0496_00FE:
	case "以太" attend labelFunc0496_015B:
	if (!(!gflags[0x0003])) goto labelFunc0496_014A;
	if (!(!gflags[0x01E2])) goto labelFunc0496_0122;
	message("「以太控制著世界上所有的魔法。當以太受到干擾時，沒有法師能成功施展法術。經過很長一段時間後，法師甚至可能會失去理智！你必須找到保護我免受扭曲以太波影響的方法！」");
	say();
	UI_add_answer("保護");
	goto labelFunc0496_0147;
labelFunc0496_0122:
	message("「我感覺好多了。受損的以太波沒有再衝擊我的大腦。但現在我們必須摧毀造成這個問題的根源！」");
	say();
	if (!(!gflags[0x0000])) goto labelFunc0496_013C;
	message("Penumbra 想了一會兒。「我感覺受損的以太波來自離這裡非常近的地方。我懷疑這些島嶼上的某個地城裡有某種東西正在製造浩劫。去欺瞞地城 (Dungeon Deceit) 試試看。我強烈感覺到你的目標就在那裡。");
	say();
	message("她閉上了眼睛一會兒。");
	say();
	message("「在我的腦海中，我看到一個形狀像四面體 (tetrahedron) 的巨大物體。我開始明白這是什麼了。」");
	say();
	goto labelFunc0496_0140;
labelFunc0496_013C:
	message("「在我的腦海中，我看到北邊某個地城裡有一個巨大的物體。你知道我在說什麼，對吧？」");
	say();
labelFunc0496_0140:
	UI_add_answer("四面體 (Tetrahedron)");
labelFunc0496_0147:
	goto labelFunc0496_0154;
labelFunc0496_014A:
	message("「現在以太流動順暢了。我感謝你，");
	message(var0000);
	message("。你拯救了各地的所有法師！」");
	say();
labelFunc0496_0154:
	UI_remove_answer("以太");
labelFunc0496_015B:
	case "Draxinusom" attend labelFunc0496_016E:
	message("「你可以在 Terfin 島上找到他。向他詢問關於戒指的事。」");
	say();
	UI_remove_answer("Draxinusom");
labelFunc0496_016E:
	case "四面體 (Tetrahedron)" attend labelFunc0496_01D2:
	if (!(!gflags[0x0003])) goto labelFunc0496_01C7;
	if (!(!gflags[0x01E2])) goto labelFunc0496_018B;
	message("「拜託！在我受到保護免於受損以太的影響之前，我無法幫助你！」");
	say();
	goto labelFunc0496_01C4;
labelFunc0496_018B:
	message("「是的，那就是我在腦海中看到的物體的形狀。它似乎是某種會破壞以太流動的魔法產生器。」");
	say();
	message("Penumbra 想了一會兒。「這個產生器正在產生危險的以太波。你必須找到以太戒指 (Ethereal Ring) 並戴上它，以打破產生器的防禦。現在，那枚戒指在哪裡……？」");
	say();
	if (!(!var0001)) goto labelFunc0496_01AC;
	message("Penumbra 查閱了一些書籍並將它們與地圖交叉比對。「我相信以太戒指最後是在石像鬼國王 Draxinusom 手中。一旦你找到了戒指，你必須把它帶回來給我。我必須對它進行附魔，這樣它才能為你所用。」");
	say();
	UI_add_answer("Draxinusom");
	gflags[0x01E0] = true;
	goto labelFunc0496_01C4;
labelFunc0496_01AC:
	if (!gflags[0x01E1]) goto labelFunc0496_01B9;
	message("「附魔戒指將會保護你。」");
	say();
	goto labelFunc0496_01C4;
labelFunc0496_01B9:
	message("「以太戒指必須被附魔。」");
	say();
	UI_add_answer("戒指");
labelFunc0496_01C4:
	goto labelFunc0496_01CB;
labelFunc0496_01C7:
	message("「你已經摧毀它了！所有的法師都感謝你！」");
	say();
labelFunc0496_01CB:
	UI_remove_answer("四面體 (Tetrahedron)");
labelFunc0496_01D2:
	case "保護" attend labelFunc0496_023A:
	message("「我需要某種屏障來保護我免受以太波的傷害。一定有我們可以使用的材料！」~~ Penumbra 緊抓著她的太陽穴。她顯然非常痛苦。");
	say();
	message("「你知道有什麼無法穿透的材料嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0496_0227;
	message("「那是什麼？」");
	say();
	UI_push_answers();
	var0004 = Func090B(["鐵礦", "金", "黑石", "鉛"]);
	if (!(var0004 == "黑石")) goto labelFunc0496_021C;
	message("「是的！這就是我們需要的！");
	say();
	goto labelFunc0496_0220;
labelFunc0496_021C:
	message("「不，我不認為那行得通。哦，我沒法思考，實在太痛了！");
	say();
labelFunc0496_0220:
	UI_pop_answers();
	goto labelFunc0496_022B;
labelFunc0496_0227:
	message("「一定有什麼東西！哦，我沒法思考，實在太痛了！");
	say();
labelFunc0496_022B:
	message("「拜託——你能找到幾塊黑石放在我的房間周圍嗎？我需要四塊！但要快！我想我撐不了多久了！請快去！」");
	say();
	gflags[0x01DF] = true;
	UI_remove_answer("保護");
labelFunc0496_023A:
	case "黑石" attend labelFunc0496_0294:
	if (!(!gflags[0x0003])) goto labelFunc0496_0289;
	if (!(!gflags[0x01E2])) goto labelFunc0496_027B;
	var0005 = Func0931(0xFE9B, 0x0004, 0x0392, 0xFE99, 0xFE99);
	if (!var0005) goto labelFunc0496_0273;
	message("「你帶來了黑石！我以為我快撐不下去了！快點！把這些石塊放在房間東、西、南、北四個角落的基座上！我會在這裡等！」*");
	say();
	abort;
	goto labelFunc0496_0278;
labelFunc0496_0273:
	message("「但你沒有黑石！你必須找到四塊來幫助我！你需要把石塊放在房間東、西、南、北四個角落的基座上！快點！」*");
	say();
	abort;
labelFunc0496_0278:
	goto labelFunc0496_0286;
labelFunc0496_027B:
	message("「黑石起作用了！我不再感覺到痛苦的以太了！」");
	say();
	UI_remove_answer("黑石");
labelFunc0496_0286:
	goto labelFunc0496_0294;
labelFunc0496_0289:
	message("「這是種很棒的材料，不是嗎？我想它可以用在很多魔法物品上。」");
	say();
	UI_remove_answer("黑石");
labelFunc0496_0294:
	case "戒指" attend labelFunc0496_0349:
	if (!(!gflags[0x0003])) goto labelFunc0496_033E;
	if (!(!gflags[0x01E1])) goto labelFunc0496_0337;
	var0001 = Func0931(0xFE9B, 0x0001, 0x02F7, 0xFE99, 0x0000);
	if (!var0001) goto labelFunc0496_032F;
	message("「你拿到了以太戒指？太好了！我必須為它附魔！快點！」~~Penumbra 從你手中接過戒指，對著它吟唱了幾句咒語。過了一會兒，她把戒指還給了你。");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x02F7, 0xFE99, 0x0000, false);
	var0007 = UI_add_party_items(0x0001, 0x02F7, 0xFE99, 0x0001, false);
	gflags[0x01E1] = true;
	Func0911(0x00C8);
	message("「現在你必須前往產生器。確保你戴著這枚戒指！它現在應該可以保護你免受以太攻擊。請注意，它只有在四面體附近才有效。並告訴你的同伴在範圍外等待。你必須獨自進入產生器！」");
	say();
	message("Penumbra 想了一會兒。「順便問一下。你是怎麼知道為這個問題來找我的？」");
	say();
	var0004 = Func090B(["Nicodemus", "時間領主 (Time Lord)"]);
	if (!((var0004 == "Nicodemus") || (var0004 == "時間領主 (Time Lord)"))) goto labelFunc0496_032C;
	message("你告訴 Penumbra 關於你需要給沙漏附魔的故事。");
	say();
	message("「我明白了。嗯，你最好趕快上路，這樣你才能真正讓你的沙漏被附魔！」");
	say();
labelFunc0496_032C:
	goto labelFunc0496_0334;
labelFunc0496_032F:
	message("「戒指在哪裡？你沒有拿到嗎？沒有戒指我們什麼都做不了！快去找！拜託！」*");
	say();
	abort;
labelFunc0496_0334:
	goto labelFunc0496_033B;
labelFunc0496_0337:
	message("「你想要什麼？我已經給戒指附魔了！」");
	say();
labelFunc0496_033B:
	goto labelFunc0496_0342;
labelFunc0496_033E:
	message("「你想要什麼？我已經為戒指附魔了。它不能再為你做什麼了！」");
	say();
labelFunc0496_0342:
	UI_remove_answer("戒指");
labelFunc0496_0349:
	case "告辭" attend labelFunc0496_0354:
	goto labelFunc0496_0357;
labelFunc0496_0354:
	goto labelFunc0496_00CE;
labelFunc0496_0357:
	endconv;
	if (!(!gflags[0x01E2])) goto labelFunc0496_0366;
	message("Penumbra 對你揮手，然後痛苦地閉上眼睛。*");
	say();
	goto labelFunc0496_0370;
labelFunc0496_0366:
	message("「再會，");
	message(var0000);
	message("！祝你好運！」*");
	say();
labelFunc0496_0370:
	return;
}


