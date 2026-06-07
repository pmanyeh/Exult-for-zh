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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0200])) goto labelFunc049E_0040;
	message("你面前的男人害羞地移開視線。");
	say();
	gflags[0x0200] = true;
	goto labelFunc049E_0051;
labelFunc049E_0040:
	message("「我、我、我能幫、幫、幫你什麼，");
	message(var0001);
	message("？」");
	say();
	UI_add_answer("口吃");
labelFunc049E_0051:
	converse attend labelFunc049E_0167;
	case "口吃" attend labelFunc049E_0061:
	message("「什、什、什麼口吃？」他轉身準備離開。*");
	say();
	abort;
labelFunc049E_0061:
	case "Moonglow" attend labelFunc049E_0074:
	message("他指著地面。「就是這裡！」");
	say();
	UI_remove_answer("Moonglow");
labelFunc049E_0074:
	case "姓名" attend labelFunc049E_008E:
	message("「M、M、Morz。」");
	say();
	UI_add_answer("口吃");
	UI_remove_answer("姓名");
labelFunc049E_008E:
	case "職業" attend labelFunc049E_00AD:
	message("「我和 C、C、Cubolt 一起工作，在、在、在這裡務農。」");
	say();
	UI_add_answer(["Cubolt", "C-C-Cubolt", "口吃", "這裡"]);
labelFunc049E_00AD:
	case "這裡" attend labelFunc049E_00C7:
	message("「M、M、Moonglow。」");
	say();
	UI_add_answer("Moonglow");
	UI_remove_answer("這裡");
labelFunc049E_00C7:
	case "C-C-Cubolt", "T-T-Tolemac" attend labelFunc049E_00D7:
	message("「這、這、這一點都不好、好、好笑！」他臉紅了，生氣地轉過身去。*");
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
	message("「T、T、Tolemac 是我、我、我的朋、朋、朋友。我認、認、認識他很、很、很久了。他剛加入兄、兄、友誼會。他也想讓、讓、讓我加入。」");
	say();
	UI_add_answer("友誼會");
	UI_remove_answer(["Tolemac", "T-T-Tolemac"]);
labelFunc049E_0120:
	case "友誼會" attend labelFunc049E_0140:
	message("「T、T、Tolemac 說他們做、做、做很多好、好、好事，而且他們能幫、幫、幫助我更容、容、容易交到朋、朋、朋友。C、C、Cubolt 認為他們很壞、壞、壞。我不、不、不知道該怎、怎、怎麼辦。」");
	say();
	if (!gflags[0x01D7]) goto labelFunc049E_0139;
	UI_add_answer("不要加入");
labelFunc049E_0139:
	UI_remove_answer("友誼會");
labelFunc049E_0140:
	case "不要加入" attend labelFunc049E_0159:
	message("「你覺、覺、覺得我不應該加入嗎？C、C、Cubolt 也不想讓、讓、讓我加入。我想我是不、不、不會了。我謝謝你。」");
	say();
	Func0911(0x0014);
	UI_remove_answer("不要加入");
labelFunc049E_0159:
	case "告辭" attend labelFunc049E_0164:
	goto labelFunc049E_0167;
labelFunc049E_0164:
	goto labelFunc049E_0051;
labelFunc049E_0167:
	endconv;
	message("「再、再、再見。」*");
	say();
labelFunc049E_016C:
	if (!(event == 0x0000)) goto labelFunc049E_0175;
	abort;
labelFunc049E_0175:
	return;
}


