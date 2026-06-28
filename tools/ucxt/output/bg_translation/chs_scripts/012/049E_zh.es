#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);

void Func049E object#(0x49E) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc049E_016C;
	UI_show_npc_face(0xFF62, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0200])) goto labelFunc049E_0040;
	message("你面前的男人害羞地移开视线。");
	say();
	gflags[0x0200] = true;
	goto labelFunc049E_0051;
labelFunc049E_0040:
	message("「我、我、我能帮、帮、帮你什么，");
	message(var0001);
	message("？」");
	say();
	UI_add_answer("口吃");
labelFunc049E_0051:
	converse attend labelFunc049E_0167;
	case "口吃" attend labelFunc049E_0061:
	message("「什、什、什么口吃？」他转身准备离开。*");
	say();
	abort;
labelFunc049E_0061:
	case "Moonglow" attend labelFunc049E_0074:
	message("他指着地面。「就是这里！」");
	say();
	UI_remove_answer("Moonglow");
labelFunc049E_0074:
	case "姓名" attend labelFunc049E_008E:
	message("「M、M、Morz。」");
	say();
	UI_add_answer("口吃");
	UI_remove_answer("姓名");
labelFunc049E_008E:
	case "职业" attend labelFunc049E_00AD:
	message("「我和 C、C、Cubolt 一起工作，在、在、在这里务农。」");
	say();
	UI_add_answer(["Cubolt", "C-C-Cubolt", "口吃", "这里"]);
labelFunc049E_00AD:
	case "这里" attend labelFunc049E_00C7:
	message("「M、M、Moonglow。」");
	say();
	UI_add_answer("Moonglow");
	UI_remove_answer("这里");
labelFunc049E_00C7:
	case "C-C-Cubolt", "T-T-Tolemac" attend labelFunc049E_00D7:
	message("「这、这、这一点都不好、好、好笑！」他脸红了，生气地转过身去。*");
	say();
	abort;
labelFunc049E_00D7:
	case "Cubolt" attend labelFunc049E_0100:
	message("「他是 T、T、Tolemac 的哥、哥、哥哥。我相、相、相信他。」");
	say();
	UI_add_answer(["Tolemac", "T-T-Tolemac", "口吃"]);
	UI_remove_answer(["Cubolt", "C-C-Cubolt"]);
labelFunc049E_0100:
	case "Tolemac" attend labelFunc049E_0120:
	message("「T、T、Tolemac 是我、我、我的朋、朋、朋友。我认、认、认识他很、很、很久了。他刚加入兄、兄、友谊会。他也想让、让、让我加入。」");
	say();
	UI_add_answer("友谊会");
	UI_remove_answer(["Tolemac", "T-T-Tolemac"]);
labelFunc049E_0120:
	case "友谊会" attend labelFunc049E_0140:
	message("「T、T、Tolemac 说他们做、做、做很多好、好、好事，而且他们能帮、帮、帮助我更容、容、容易交到朋、朋、朋友。C、C、Cubolt 认为他们很坏、坏、坏。我不、不、不知道该怎、怎、怎么办。」");
	say();
	if (!gflags[0x01D7]) goto labelFunc049E_0139;
	UI_add_answer("不要加入");
labelFunc049E_0139:
	UI_remove_answer("友谊会");
labelFunc049E_0140:
	case "不要加入" attend labelFunc049E_0159:
	message("「你觉、觉、觉得我不应该加入吗？C、C、Cubolt 也不想让、让、让我加入。我想我是不、不、不会了。我谢谢你。」");
	say();
	Func0911(0x0014);
	UI_remove_answer("不要加入");
labelFunc049E_0159:
	case "告辞" attend labelFunc049E_0164:
	goto labelFunc049E_0167;
labelFunc049E_0164:
	goto labelFunc049E_0051;
labelFunc049E_0167:
	endconv;
	message("「再、再、再见。」*");
	say();
labelFunc049E_016C:
	if (!(event == 0x0000)) goto labelFunc049E_0175;
	abort;
labelFunc049E_0175:
	return;
}


