#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
 void Func04D5 object#(0x4D5) ()
{
	var var0000;
	var var0001;
	var var0002;
 	if (!(event == 0x0001)) goto labelFunc04D5_0148;
	UI_show_npc_face(0xFF2B, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0001 = Func08F7(0xFF2A);
	if (!var0001) goto labelFunc04D5_003E;
	UI_add_answer("石像鬼");
labelFunc04D5_003E:
	if (!gflags[0x0285]) goto labelFunc04D5_0052;
	UI_remove_answer("石像鬼");
	UI_add_answer("For-Lem");
labelFunc04D5_0052:
	if (!(!gflags[0x0292])) goto labelFunc04D5_0064;
	message("你看到面前有一个表情无忧无虑的年轻女孩。当她注意到你时，她的眼睛睁得很大，惊呼道：「你就是 For……我的其中一本故事书里的那个人！你是圣者 ！」");
	say();
	gflags[0x0292] = true;
	goto labelFunc04D5_006E;
labelFunc04D5_0064:
	message("「你好吗，");
	message(var0000);
	message(" 圣者 ？」她屈膝行礼。");
	say();
labelFunc04D5_006E:
	converse attend labelFunc04D5_013D;
	case "姓名" attend labelFunc04D5_008A:
	message("「我的名字是 Catherine ，");
	message(var0000);
	message(" 圣者 。」");
	say();
	UI_remove_answer("姓名");
labelFunc04D5_008A:
	case "职业" attend labelFunc04D5_00AC:
	message("「我没有职业，");
	message(var0000);
	message(" 圣者 。我和父母一起住在 Vesper 这里。」");
	say();
	UI_add_answer(["父亲", "母亲", "Vesper"]);
labelFunc04D5_00AC:
	case "父亲" attend labelFunc04D5_00DD:
	message("「他是矿区的监督，");
	message(var0000);
	message(" 圣者 。」");
	say();
	var0002 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0002) goto labelFunc04D5_00D6;
	message("「当然，他现在已经不在了……」她低头看着自己的脚。");
	say();
labelFunc04D5_00D6:
	UI_remove_answer("父亲");
labelFunc04D5_00DD:
	case "母亲" attend labelFunc04D5_00F6:
	message("「是的，");
	message(var0000);
	message(" 圣者 。她现在就在那里。」她指着，显然是指她的家。");
	say();
	UI_remove_answer("母亲");
labelFunc04D5_00F6:
	case "Vesper" attend labelFunc04D5_010F:
	message("「那是我们城市的名字，");
	message(var0000);
	message(" 圣者 。如果你迷路了，你也许会想去跟镇里的书记员谈谈。」");
	say();
	UI_remove_answer("Vesper");
labelFunc04D5_010F:
	case "石像鬼" attend labelFunc04D5_0122:
	message("「对不起，");
	message(var0000);
	message(" 圣者 ，我妈妈告诉我永远不要跟陌生人说话。」她迅速转身离开。*");
	say();
	abort;
labelFunc04D5_0122:
	case "For-Lem" attend labelFunc04D5_012F:
	message("一滴泪水在她的脸颊上闪烁滑落。「他不在了。我——我父亲因为他和说话而杀了他，而且——而且这都是你的错！」她转过身，啜泣着。*");
	say();
	abort;
labelFunc04D5_012F:
	case "告辞" attend labelFunc04D5_013A:
	goto labelFunc04D5_013D;
labelFunc04D5_013A:
	goto labelFunc04D5_006E;
labelFunc04D5_013D:
	endconv;
	message("「再见，");
	message(var0000);
	message(" 圣者 。」*");
	say();
labelFunc04D5_0148:
	if (!(event == 0x0000)) goto labelFunc04D5_0151;
	abort;
labelFunc04D5_0151:
	return;
}
 