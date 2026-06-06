#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func0861 0x861 ();
extern void Func0911 0x911 (var var0000);

void Func0862 0x862 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func08F7(0xFFFF);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	message("「那就證明給我看。跟我說話。」");
	say();
	UI_clear_answers();
	var0005 = Func090B(["你好，Chuckles", "你好，傻瓜", "嗨，Chuckles", "嗨，Chuck"]);
	if (!(var0005 == "嗨，Chuck")) goto labelFunc0862_004F;
	message("「嗨！你在想什麼？」");
	say();
	var0001 = true;
	UI_clear_answers();
	goto labelFunc0862_0052;
labelFunc0862_004F:
	Func0861();
labelFunc0862_0052:
	if (!(var0001 == true)) goto labelFunc0862_008B;
	var0005 = Func090B(["麻煩", "太多", "很多問題", "我需要答案"]);
	if (!(var0005 == "太多")) goto labelFunc0862_0088;
	message("「啊，我懂你的意思！你需要幫助，對嗎？」");
	say();
	var0002 = true;
	UI_clear_answers();
	goto labelFunc0862_008B;
labelFunc0862_0088:
	Func0861();
labelFunc0862_008B:
	if (!(var0002 == true)) goto labelFunc0862_00F1;
	var0005 = Func090B(["是的，我需要", "絕對是", "你能幫忙嗎？", "非常肯定"]);
	if (!((var0005 == "是的，我需要") || (var0005 == "你能幫忙嗎？"))) goto labelFunc0862_00EE;
	message("「嗯。我也許能給你一個線索。」");
	say();
	if (!var0000) goto labelFunc0862_00E3;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「真想給 Chuckles 一拳讓他眼眶發黑！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE7, 0x0000);
labelFunc0862_00E3:
	var0003 = true;
	UI_clear_answers();
	goto labelFunc0862_00F1;
labelFunc0862_00EE:
	Func0861();
labelFunc0862_00F1:
	if (!(var0003 == true)) goto labelFunc0862_0132;
	var0005 = Func090B(["那對你來說太偉大了", "我立刻需要它", "那會很值得", "我希望你會"]);
	if (!((var0005 == "那對你來說太偉大了") || (var0005 == "我希望你會"))) goto labelFunc0862_012F;
	message("「你會給我什麼來換取線索？」");
	say();
	var0004 = true;
	UI_clear_answers();
	goto labelFunc0862_0132;
labelFunc0862_012F:
	Func0861();
labelFunc0862_0132:
	if (!(var0004 == true)) goto labelFunc0862_01F5;
	var0005 = Func090B(["我不會殺你", "金幣", "我的友誼", "一個微笑", "什麼都沒有"]);
	if (!(var0005 == "金幣")) goto labelFunc0862_0195;
	message("Chuckles 舉起手。「不對。我免費給你一個線索。就在這個卷軸裡。」");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0001, 0xFE99, false);
	if (!var0006) goto labelFunc0862_0190;
	gflags[0x006F] = true;
	Func0911(0x0032);
	UI_clear_answers();
	message("「再見了，我的朋友！不要忘……我是說，不要忘記怎麼玩遊戲！」*");
	say();
	abort;
	goto labelFunc0862_0195;
labelFunc0862_0190:
	message("「喔！你沒有空間放卷軸了！放下你的東西，我就會把它給你！」*");
	say();
	abort;
labelFunc0862_0195:
	if (!(var0005 == "一個微笑")) goto labelFunc0862_01D8;
	message("「真好！好吧！我會給你一個線索。就在這個卷軸裡。」");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0001, 0xFE99, false);
	if (!var0006) goto labelFunc0862_01D3;
	gflags[0x006F] = true;
	Func0911(0x0032);
	UI_clear_answers();
	message("「再見了，我的朋友！不要忘……我是說，不要忘記怎麼玩遊戲！」*");
	say();
	abort;
	goto labelFunc0862_01D8;
labelFunc0862_01D3:
	message("「喔！你沒有空間放卷軸了！放下一些你的東西，我就能把它給你！」*");
	say();
	abort;
labelFunc0862_01D8:
	if (!((var0005 == "我不會殺你") || ((var0005 == "我的友誼") || (var0005 == "什麼都沒有")))) goto labelFunc0862_01F5;
	Func0861();
labelFunc0862_01F5:
	return;
}


