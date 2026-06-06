#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func0420 object#(0x420) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0420_0108;
	UI_show_npc_face(0xFFE0, 0x0000);
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x00A1])) goto labelFunc0420_0034;
	message("這個蹣跚學步的孩子充滿活力，當他看到你時正玩得很起勁。他停下了手邊的動作。");
	say();
	gflags[0x00A1] = true;
	goto labelFunc0420_0038;
labelFunc0420_0034:
	message("「嗨！」 Max 對你咧嘴一笑。");
	say();
labelFunc0420_0038:
	converse attend labelFunc0420_0103;
	case "姓名" attend labelFunc0420_007C:
	message("「Makth 。」");
	say();
	var0000 = Func08F7(0xFFDE);
	if (!var0000) goto labelFunc0420_0075;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「他說他的名字叫 Max。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE0, 0x0000);
labelFunc0420_0075:
	UI_remove_answer("姓名");
labelFunc0420_007C:
	case "職業" attend labelFunc0420_00B5:
	var0001 = UI_get_schedule_type(0xFFE0);
	if (!(var0001 == 0x0019)) goto labelFunc0420_00A4;
	message("「玩鬼抓人！」");
	say();
	message("男孩從你身邊跑開去抓另一個孩子。*");
	say();
	abort;
	goto labelFunc0420_00B5;
labelFunc0420_00A4:
	message("「我是個搞笑的男孩！」 Max 歇斯底里地大笑。「Makth 也會唱歌！」");
	say();
	UI_add_answer(["搞笑的男孩", "唱歌"]);
labelFunc0420_00B5:
	case "搞笑的男孩" attend labelFunc0420_00CF:
	message("「你也是，搞笑的男孩，-也- 是！」 Max 瘋狂地笑著，把他的奶嘴丟向你。他指著奶嘴說：「Binky ！」");
	say();
	UI_add_answer("Binky");
	UI_remove_answer("搞笑的男孩");
labelFunc0420_00CF:
	case "Binky" attend labelFunc0420_00E2:
	message("Max 拼命地點頭。「Binky ！拿 Binky ！拿 Binky ！」~~你意識到這個男孩想讓你把它撿起來。顯然這是一種只有幼童才懂的遊戲。你撿起奶嘴遞給他。他立刻把它塞進嘴裡。");
	say();
	UI_remove_answer("Binky");
labelFunc0420_00E2:
	case "唱歌" attend labelFunc0420_00F5:
	message("Max 站得筆直，大聲吼道：「老 Lord British 有個農場，-e-i-e-i-o-！在這個農場裡他有一隻公鴨，-e-i-e-i-o-！這裡 -嘎- -嘎-，那裡 -嘎- -嘎-，到處都是 -嘎- -嘎-！老 Lord British 有個農場，-e-i-e-i-o-！」");
	say();
	UI_remove_answer("唱歌");
labelFunc0420_00F5:
	case "告辭" attend labelFunc0420_0100:
	goto labelFunc0420_0103;
labelFunc0420_0100:
	goto labelFunc0420_0038;
labelFunc0420_0103:
	endconv;
	message("「掰掰！」*");
	say();
labelFunc0420_0108:
	if (!(event == 0x0000)) goto labelFunc0420_017F;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFE0));
	if (!(var0001 == 0x0019)) goto labelFunc0420_017F;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc0420_0145;
	var0003 = "@鬼抓人！當鬼囉！@";
labelFunc0420_0145:
	if (!(var0002 == 0x0002)) goto labelFunc0420_0155;
	var0003 = "@抓不到我！@";
labelFunc0420_0155:
	if (!(var0002 == 0x0003)) goto labelFunc0420_0165;
	var0003 = "@啦啦！當鬼囉！@";
labelFunc0420_0165:
	if (!(var0002 == 0x0004)) goto labelFunc0420_0175;
	var0003 = "@有本事來抓我呀！@";
labelFunc0420_0175:
	UI_item_say(0xFFE0, var0003);
labelFunc0420_017F:
	return;
}


