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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00E3]) goto labelFunc0450_002F;
	UI_add_answer("Nastassia");
labelFunc0450_002F:
	if (!gflags[0x00E4]) goto labelFunc0450_0042;
	if (!gflags[0x00F2]) goto labelFunc0450_0042;
	UI_add_answer("Zinaida");
labelFunc0450_0042:
	if (!(!gflags[0x00ED])) goto labelFunc0450_0058;
	message("这位华丽的吟游诗人散发着一种欢乐的气息。");
	say();
	message("「我在许多歌曲中都歌颂过你！而你竟然活生生地出现在这里！我立刻就认出你了。」男人鞠躬。「欢迎，圣者！」");
	say();
	gflags[0x00ED] = true;
	goto labelFunc0450_005C;
labelFunc0450_0058:
	message("「再次问候，圣者！」 De Maria 鞠躬。");
	say();
labelFunc0450_005C:
	converse attend labelFunc0450_017D;
	case "姓名" attend labelFunc0450_0083:
	message("「我是 De Maria，吟游诗人。」");
	say();
	UI_remove_answer("姓名");
	if (!gflags[0x00E4]) goto labelFunc0450_007F;
	UI_add_answer("Zinaida");
labelFunc0450_007F:
	gflags[0x00F2] = true;
labelFunc0450_0083:
	case "职业" attend labelFunc0450_00AA:
	message("「我编织故事，也高唱歌曲！」");
	say();
	if (!(!gflags[0x00E3])) goto labelFunc0450_00AA;
	message("「我对 Cove 的镇民也了若指掌。」");
	say();
	UI_add_answer(["故事", "歌曲", "镇民"]);
labelFunc0450_00AA:
	case "故事", "歌曲", "镇民" attend labelFunc0450_00EE:
	message("「如果我把这三者结合起来呢？要我唱一首关于 Cove 镇民故事的歌吗？」");
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
	message("「这是你的选择……而且是个错误的选择！」");
	say();
labelFunc0450_00DE:
	UI_remove_answer(["故事", "歌曲", "镇民"]);
labelFunc0450_00EE:
	case "Nastassia" attend labelFunc0450_012A:
	message("「啊，亲爱的 Nastassia。你想听听她的故事吗？」");
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
	message("「喔。我以为你会好奇。那就算了。」");
	say();
	UI_remove_answer("Nastassia");
labelFunc0450_012A:
	case "Zinaida" attend labelFunc0450_016F:
	message("「我的爱！我的花朵！我的天使！她提供了我尝过最甜美的甘露！她是我白昼的光芒！我歌曲的音符！我的肉体……」~~");
	say();
	var0002 = Func08F7(0xFFB1);
	if (!var0002) goto labelFunc0450_0164;
	UI_show_npc_face(0xFFB1, 0x0000);
	message("「够了，亲爱的。我想圣者已经明白你的意思了！」*");
	say();
	UI_remove_npc_face(0xFFB1);
	UI_show_npc_face(0xFFB0, 0x0000);
labelFunc0450_0164:
	message("De Maria 停止了他的幻想，叹了口气，对着你微笑。「你明白我的意思了……」");
	say();
	UI_remove_answer("Zinaida");
labelFunc0450_016F:
	case "告辞" attend labelFunc0450_017A:
	goto labelFunc0450_017D;
labelFunc0450_017A:
	goto labelFunc0450_005C;
labelFunc0450_017D:
	endconv;
	message("「请多保重！」*");
	say();
labelFunc0450_0182:
	if (!(event == 0x0000)) goto labelFunc0450_0190;
	Func092E(0xFFB0);
labelFunc0450_0190:
	return;
}


