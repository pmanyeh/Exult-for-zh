#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0877 0x877 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0450 object#(0x450) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0450_0182;
	UI_show_npc_face(0xFFB0, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!gflags[0x00E3]) goto labelFunc0450_002F;
	UI_add_answer("Nastassia");
labelFunc0450_002F:
	if (!gflags[0x00E4]) goto labelFunc0450_0042;
	if (!gflags[0x00F2]) goto labelFunc0450_0042;
	UI_add_answer("Zinaida");
labelFunc0450_0042:
	if (!(!gflags[0x00ED])) goto labelFunc0450_0058;
	message("這位華麗的吟遊詩人散發著一種歡樂的氣息。");
	say();
	message("「我在許多歌曲中都歌頌過你！而你竟然活生生地出現在這裡！我立刻就認出你了。」男人鞠躬。「歡迎，聖者！」");
	say();
	gflags[0x00ED] = true;
	goto labelFunc0450_005C;
labelFunc0450_0058:
	message("「再次問候，聖者！」 De Maria 鞠躬。");
	say();
labelFunc0450_005C:
	converse attend labelFunc0450_017D;
	case "姓名" attend labelFunc0450_0083:
	message("「我是 De Maria，吟遊詩人。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc0450_007F;
	UI_add_answer("Zinaida");
labelFunc0450_007F:
	gflags[0x00F2] = true;
labelFunc0450_0083:
	case "職業" attend labelFunc0450_00AA:
	message("「我編織故事，也高唱歌曲！」");
	say();
	if (!(!gflags[0x00E3])) goto labelFunc0450_00AA;
	message("「我對 Cove 的鎮民也瞭若指掌。」");
	say();
	UI_add_answer(["故事", "歌曲", "鎮民"]);
labelFunc0450_00AA:
	case "故事", "歌曲", "鎮民" attend labelFunc0450_00EE:
	message("「如果我把這三者結合起來呢？要我唱一首關於 Cove 鎮民故事的歌嗎？」");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc0450_00DA;
	message("「非常好！」");
	say();
	UI_push_answers();
	Func0877();
	UI_pop_answers();
	goto labelFunc0450_00DE;
labelFunc0450_00DA:
	message("「這是你的選擇……而且是個錯誤的選擇！」");
	say();
labelFunc0450_00DE:
	UI_remove_answer(["故事", "歌曲", "鎮民"]);
labelFunc0450_00EE:
	case "Nastassia" attend labelFunc0450_012A:
	message("「啊，親愛的 Nastassia。你想聽聽她的故事嗎？」");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0450_011F;
	message("「非常好！」");
	say();
	UI_push_answers();
	Func0877();
	UI_pop_answers();
	UI_remove_answer("Nastassia");
	goto labelFunc0450_012A;
labelFunc0450_011F:
	message("「喔。我以為你會好奇。那就算了。」");
	say();
	UI_remove_answer("Nastassia");
labelFunc0450_012A:
	case "Zinaida" attend labelFunc0450_016F:
	message("「我的愛！我的花朵！我的天使！她提供了我嘗過最甜美的甘露！她是我白晝的光芒！我歌曲的音符！我的肉體……」~~");
	say();
	var0002 = Func08F7(0xFFB1);
	if (!var0002) goto labelFunc0450_0164;
	UI_show_npc_face(0xFFB1, 0x0000);
	message("「夠了，親愛的。我想聖者已經明白你的意思了！」*");
	say();
	UI_remove_npc_face(0xFFB1);
	UI_show_npc_face(0xFFB0, 0x0000);
labelFunc0450_0164:
	message("De Maria 停止了他的幻想，嘆了口氣，對著你微笑。「你明白我的意思了……」");
	say();
	UI_remove_answer("Zinaida");
labelFunc0450_016F:
	case "告辭" attend labelFunc0450_017A:
	goto labelFunc0450_017D;
labelFunc0450_017A:
	goto labelFunc0450_005C;
labelFunc0450_017D:
	endconv;
	message("「請多保重！」*");
	say();
labelFunc0450_0182:
	if (!(event == 0x0000)) goto labelFunc0450_0190;
	Func092E(0xFFB0);
labelFunc0450_0190:
	return;
}


