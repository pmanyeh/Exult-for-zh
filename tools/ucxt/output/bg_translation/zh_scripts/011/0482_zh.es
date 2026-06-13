#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0855 0x855 ();
extern void Func092E 0x92E (var var0000);

void Func0482 object#(0x482) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;

	if (!(event == 0x0001)) goto labelFunc0482_0499;
	UI_show_npc_face(0xFF7E, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF7E));
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x0180]) goto labelFunc0482_004A;
	UI_add_answer("陌生人");
labelFunc0482_004A:
	if (!gflags[0x017D]) goto labelFunc0482_0057;
	UI_add_answer("吊飾盒");
labelFunc0482_0057:
	if (!gflags[0x0195]) goto labelFunc0482_0072;
	message("「你準備好付清帳單了嗎？」");
	say();
	if (!Func090A()) goto labelFunc0482_006D;
	goto labelFunc0482_00EA;
	goto labelFunc0482_0072;
labelFunc0482_006D:
	message("「那麼，再見！」*");
	say();
	abort;
labelFunc0482_0072:
	if (!(!gflags[0x018B])) goto labelFunc0482_0187;
	message("你看到一個帶著淫笑、姿勢不良的男人，正在自顧自地咯咯笑著。");
	say();
	gflags[0x018B] = true;
	if (!(var0002 == 0x0017)) goto labelFunc0482_0184;
	var0003 = Func08F7(0xFFFC);
	if (!var0003) goto labelFunc0482_0184;
	message("「這不是 Dupre 嗎！現在是 Dupre 『爵士』了，對吧？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「的確如此， Boris 。」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「嗯——在我看來，你似乎還有帳單沒付清？對吧？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「喔？有嗎？」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「當然有！讓我看看……我相信你總共欠了 74 枚金幣。恐怕你必須先付清帳單，我才能和你或是你的同伴說話。」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre 看起來很尷尬。他轉向你。「我的朋友，你能幫我個忙嗎？」");
	say();
	if (!Func090A()) goto labelFunc0482_0171;
labelFunc0482_00EA:
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x004A)) goto labelFunc0482_0165;
	var0005 = UI_remove_party_items(0x004A, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc0482_0159;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「謝謝你，聖者。」");
	say();
	message("你把金幣交給 Boris 。");
	say();
	gflags[0x0195] = false;
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「很高興能和你做生意， Dupre 爵士！歡迎來到我的酒館！」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF7E, 0x0000);
	goto labelFunc0482_0162;
labelFunc0482_0159:
	message("「嗯，我們的金幣跑哪去了？」*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_0162:
	goto labelFunc0482_016E;
labelFunc0482_0165:
	message("「恐怕我們的口袋太空了！」*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_016E:
	goto labelFunc0482_0184;
labelFunc0482_0171:
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「好吧，在你的帳單付清之前，我不會為你服務，也不會和你說話！」*");
	say();
	gflags[0x0195] = true;
	abort;
labelFunc0482_0184:
	goto labelFunc0482_018B;
labelFunc0482_0187:
	message("「又見面了，」Boris 說道。");
	say();
labelFunc0482_018B:
	converse attend labelFunc0482_0494;
	case "姓名" attend labelFunc0482_01A1:
	message("「叫我 Boris 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0482_01A1:
	case "職業" attend labelFunc0482_01BA:
	message("「我在 New Magincia 經營謙遜少女 (The Modest Damsel) 酒館。」");
	say();
	UI_add_answer(["謙遜少女 (Modest Damsel)", "New Magincia"]);
labelFunc0482_01BA:
	case "謙遜少女 (Modest Damsel)" attend labelFunc0482_01EE:
	if (!(var0002 == 0x0017)) goto labelFunc0482_01E3;
	message("「這是一間小客棧和酒館。我是老闆，和我妻子 Magenta 一起經營。你想吃或喝點什麼，還是需要一間房間？」");
	say();
	UI_add_answer(["Magenta", "吃或喝點什麼", "房間"]);
	goto labelFunc0482_01E7;
labelFunc0482_01E3:
	message("「謙遜少女酒館現在打烊了。但請在營業時間再來。」");
	say();
labelFunc0482_01E7:
	UI_remove_answer("謙遜少女 (Modest Damsel)");
labelFunc0482_01EE:
	case "Magenta" attend labelFunc0482_0201:
	message("「幾年前老市長，也就是她父親去世後，她就成了 New Magincia 的市長。她做得非常好，到目前為止還沒有人反對她擔任這個職位。」");
	say();
	UI_remove_answer("Magenta");
labelFunc0482_0201:
	case "吃或喝點什麼" attend labelFunc0482_0210:
	message("「我保證你會喜歡我們的食物和飲料。」");
	say();
	Func0855();
labelFunc0482_0210:
	case "房間" attend labelFunc0482_02C3:
	message("「你何不留宿一晚？只要 3 枚金幣就能租下我們的一間房間。你想留宿一晚嗎？」");
	say();
	if (!Func090A()) goto labelFunc0482_02B8;
	var0006 = UI_get_party_list();
	var0007 = 0x0000;
	enum();
labelFunc0482_0230:
	for (var000A in var0006 with var0008 to var0009) attend labelFunc0482_0248;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0482_0230;
labelFunc0482_0248:
	var000B = (var0007 * 0x0003);
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var000B)) goto labelFunc0482_02B1;
	var000D = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var000D) goto labelFunc0482_02A4;
	message("「這是你的房間鑰匙。只能在這家客棧使用。」");
	say();
	var000E = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc0482_02AE;
labelFunc0482_02A4:
	message("「抱歉，");
	message(var0000);
	message("，你必須卸下一些負重，我才能把房間鑰匙交給你。」");
	say();
labelFunc0482_02AE:
	goto labelFunc0482_02B5;
labelFunc0482_02B1:
	message("「你沒有足夠的金幣租我的房間。」");
	say();
labelFunc0482_02B5:
	goto labelFunc0482_02BC;
labelFunc0482_02B8:
	message("「或許改天晚上吧。」");
	say();
labelFunc0482_02BC:
	UI_remove_answer("房間");
labelFunc0482_02C3:
	case "New Magincia" attend labelFunc0482_02DD:
	message("「在整個不列顛尼亞，你找不到改變這麼少的地方。甚至連這裡的人似乎也總是一樣。」");
	say();
	UI_add_answer("人");
	UI_remove_answer("New Magincia");
labelFunc0482_02DD:
	case "人" attend labelFunc0482_0300:
	message("「有商人、勞工，還有一些新來的人。」");
	say();
	UI_add_answer(["商人", "勞工", "新來的人"]);
	UI_remove_answer("人");
labelFunc0482_0300:
	case "商人" attend labelFunc0482_0323:
	message("「他們是造船匠 Russell 、小販 Henry ，還有賣花的 Sam 。」");
	say();
	UI_add_answer(["Russell", "Henry", "Sam"]);
	UI_remove_answer("商人");
labelFunc0482_0323:
	case "勞工" attend labelFunc0482_0343:
	message("「他們是牧羊女 Katrina ，和挑水工 Constance 。」");
	say();
	UI_add_answer(["Katrina", "Constance"]);
	UI_remove_answer("勞工");
labelFunc0482_0343:
	case "新來的人" attend labelFunc0482_0363:
	message("「除了那三個陌生人之外，島上唯一比較新來的人就是聖人 Alagner 。」");
	say();
	UI_add_answer(["Alagner", "陌生人"]);
	UI_remove_answer("新來的人");
labelFunc0482_0363:
	case "Alagner" attend labelFunc0482_0376:
	message("「當然， Alagner 不是來自 New Magincia ，但他遊歷世界後在這裡定居，因為他深知我們這份和平與寧靜的價值。」");
	say();
	UI_remove_answer("Alagner");
labelFunc0482_0376:
	case "Russell" attend labelFunc0482_0389:
	message("「Russell 是位才華洋溢的藝術家兼工匠，他不太在乎財富或名聲。他只滿足於建造精美的船隻，並看著它們航行。」");
	say();
	UI_remove_answer("Russell");
labelFunc0482_0389:
	case "Katrina" attend labelFunc0482_03F4:
	message("「Katrina 不止一次對這個鎮上的人伸出援手。每當提到你的名字，她臉上總會浮現有趣的笑容。」");
	say();
	var000F = Func08F7(0xFFF7);
	if (!var000F) goto labelFunc0482_03ED;
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「那是因為聖者是我最親密的朋友之一。」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「我不是妳最親密的朋友之一嗎， Katrina ？」");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("「你真是個調情高手， Boris ！Magenta 知道你有多想和島上其他女人成為『最親密的朋友』嗎？」");
	say();
	UI_show_npc_face(0xFF7E, 0x0000);
	message("「妳這是在折磨我， Katrina ！」他笑著說。");
	say();
	UI_remove_npc_face(0xFFF7);
	UI_show_npc_face(0xFF7E, 0x0000);
labelFunc0482_03ED:
	UI_remove_answer("Katrina");
labelFunc0482_03F4:
	case "Henry" attend labelFunc0482_0407:
	message("「Henry 的父母非常窮，他沒餓死真是個奇蹟。我想是 Constance 支持他撐下去的。他從小就愛著她。」");
	say();
	UI_remove_answer("Henry");
labelFunc0482_0407:
	case "Constance" attend labelFunc0482_041A:
	message("「Constance 是個孤兒，主要由 Katrina 撫養長大。她的純真只遜於她的美貌。大家都愛她。」Boris 兩眼發直地凝視著前方幾秒鐘才回過神來。");
	say();
	UI_remove_answer("Constance");
labelFunc0482_041A:
	case "Sam" attend labelFunc0482_042D:
	message("Boris 笑了。「你得親自去見見 Sam 。他是個不可思議的人，正在鑽研享受生活的藝術。」");
	say();
	UI_remove_answer("Sam");
labelFunc0482_042D:
	case "陌生人" attend labelFunc0482_0444:
	message("「一場船難為我們的島帶來了三個陌生人。謠傳其中一個是來自海盜巢穴 (Buccaneer's Den)的有錢紳士，另外兩個是他雇用的劍客。他們有天晚上在這裡喝酒。他們不是我想在店裡接待的那種客人。」");
	say();
	gflags[0x0180] = true;
	UI_remove_answer("陌生人");
labelFunc0482_0444:
	case "吊飾盒" attend labelFunc0482_0486:
	if (!gflags[0x017F]) goto labelFunc0482_0457;
	message("「我再也不想聽到關於那個吊飾盒的事了！別跟我提它！」");
	say();
	abort;
labelFunc0482_0457:
	if (!(!gflags[0x0185])) goto labelFunc0482_0469;
	message("「我很確定我從沒見過這樣的吊飾盒。不過，我很樂意幫你留意。」");
	say();
	gflags[0x0183] = true;
	goto labelFunc0482_047F;
labelFunc0482_0469:
	if (!(!gflags[0x017E])) goto labelFunc0482_047B;
	message("你告訴 Boris 你從海盜 Battles 那裡聽到的事。他冒出一身冷汗。「你看穿了我的謊言。我這就把它交給你。」他打開吧檯後面的一個秘密暗格，往裡面看去。當他轉頭看你時，臉色蒼白。「吊飾盒不見了！我向你發誓，我不知道它在哪裡！」");
	say();
	gflags[0x017E] = true;
	goto labelFunc0482_047F;
labelFunc0482_047B:
	message("「我還是找不到那個吊飾盒！」Boris 看起來像要抓狂了，「但我會繼續找，直到找到為止！」");
	say();
labelFunc0482_047F:
	UI_remove_answer("吊飾盒");
labelFunc0482_0486:
	case "告辭" attend labelFunc0482_0491:
	goto labelFunc0482_0494;
labelFunc0482_0491:
	goto labelFunc0482_018B;
labelFunc0482_0494:
	endconv;
	message("「祝你旅途愉快！」*");
	say();
labelFunc0482_0499:
	if (!(event == 0x0000)) goto labelFunc0482_04A7;
	Func092E(0xFF7E);
labelFunc0482_04A7:
	return;
}


