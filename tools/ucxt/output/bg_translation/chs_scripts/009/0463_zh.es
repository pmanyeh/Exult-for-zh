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
	message("你看到一只没有翅膀的石像鬼，患有可怕的皮肤病。看起来他的脸似乎正一块块地掉下来。");
	say();
	gflags[0x011D] = true;
	goto labelFunc0463_0037;
labelFunc0463_0033:
	message("「要些别的吗？」Fodus 问道。");
	say();
labelFunc0463_0037:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0463_0047:
	converse attend labelFunc0463_00E6;
	case "姓名" attend labelFunc0463_005D:
	message("「名叫 Fodus 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0463_005D:
	case "职业" attend labelFunc0463_0070:
	message("「是矿场里的挖掘工。正在寻找铁矿石和铅，还有……」");
	say();
	UI_add_answer("还有……");
labelFunc0463_0070:
	case "还有……" attend labelFunc0463_0098:
	message("「秘密的矿石……」");
	say();
	message("一阵谵妄袭过这只石像鬼。「现……现在回去工作，Mikos！……要努力工作！……不需要再给我银色液体了……」");
	say();
	gflags[0x0107] = true;
	UI_remove_answer("还有……");
	UI_add_answer(["秘密矿石", "银色液体"]);
labelFunc0463_0098:
	case "秘密矿石" attend labelFunc0463_00B2:
	message("「被称为……黑石。」");
	say();
	UI_remove_answer("秘密矿石");
	UI_add_answer("黑石");
labelFunc0463_00B2:
	case "黑石" attend labelFunc0463_00C5:
	message("「是位于矿场隐藏区域的矿脉……」石像鬼翻了个白眼。他显然病得不轻。");
	say();
	UI_remove_answer("黑石");
labelFunc0463_00C5:
	case "银色液体" attend labelFunc0463_00D8:
	message("「需要毒液……要更多的毒液……」");
	say();
	UI_remove_answer("银色液体");
labelFunc0463_00D8:
	case "告辞" attend labelFunc0463_00E3:
	goto labelFunc0463_00E6;
labelFunc0463_00E3:
	goto labelFunc0463_0047;
labelFunc0463_00E6:
	endconv;
	message("「现在要回去工作了， Mikos ……」*");
	say();
labelFunc0463_00EB:
	return;
}


