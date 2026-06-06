#game "blackgate"
// externs
extern var Func0909 0x909 ();

void Func0463 object#(0x463) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0463_0009;
	abort;
labelFunc0463_0009:
	if (!(event == 0x0001)) goto labelFunc0463_00EB;
	UI_show_npc_face(0xFF9D, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x011D])) goto labelFunc0463_0033;
	message("你看到一隻沒有翅膀的石像鬼，患有可怕的皮膚病。看起來他的臉似乎正一塊塊地掉下來。");
	say();
	gflags[0x011D] = true;
	goto labelFunc0463_0037;
labelFunc0463_0033:
	message("「要些別的嗎？」 Fodus 問道。");
	say();
labelFunc0463_0037:
	UI_add_answer(["姓名", "職業", "告辭"]);
labelFunc0463_0047:
	converse attend labelFunc0463_00E6;
	case "姓名" attend labelFunc0463_005D:
	message("「名叫 Fodus 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0463_005D:
	case "職業" attend labelFunc0463_0070:
	message("「是礦場裡的挖掘工。正在尋找鐵礦石和鉛，還有……」");
	say();
	UI_add_answer("還有……");
labelFunc0463_0070:
	case "還有……" attend labelFunc0463_0098:
	message("「祕密的礦石……」");
	say();
	message("一陣譫妄襲過這隻石像鬼。「現……現在回去工作， Mikos ！……要努力工作！……不需要再給我銀色液體了……」");
	say();
	gflags[0x0107] = true;
	UI_remove_answer("還有……");
	UI_add_answer(["祕密礦石", "銀色液體"]);
labelFunc0463_0098:
	case "祕密礦石" attend labelFunc0463_00B2:
	message("「被稱為……黑岩（blackrock）。」");
	say();
	UI_remove_answer("祕密礦石");
	UI_add_answer("黑岩");
labelFunc0463_00B2:
	case "黑岩" attend labelFunc0463_00C5:
	message("「是位於礦場隱藏區域的礦脈……」石像鬼翻了個白眼。他顯然病得不輕。");
	say();
	UI_remove_answer("黑岩");
labelFunc0463_00C5:
	case "銀色液體" attend labelFunc0463_00D8:
	message("「需要毒液……要更多的毒液……」");
	say();
	UI_remove_answer("銀色液體");
labelFunc0463_00D8:
	case "告辭" attend labelFunc0463_00E3:
	goto labelFunc0463_00E6;
labelFunc0463_00E3:
	goto labelFunc0463_0047;
labelFunc0463_00E6:
	endconv;
	message("「現在要回去工作了， Mikos ……」*");
	say();
labelFunc0463_00EB:
	return;
}


