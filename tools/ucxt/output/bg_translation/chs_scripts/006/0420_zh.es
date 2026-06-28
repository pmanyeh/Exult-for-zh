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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A1])) goto labelFunc0420_0034;
	message("这个蹒跚学步的孩子充满活力，当他看到你时正玩得很起劲。他停下了手边的动作。");
	say();
	gflags[0x00A1] = true;
	goto labelFunc0420_0038;
labelFunc0420_0034:
	message("「嗨！」 Max 对你咧嘴一笑。");
	say();
labelFunc0420_0038:
	converse attend labelFunc0420_0103;
	case "姓名" attend labelFunc0420_007C:
	message("「Makth 。」");
	say();
	var0000 = Func08F7(0xFFDE);
	if (!var0000) goto labelFunc0420_0075;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("「他说他的名字叫 Max。」");
	say();
	UI_remove_npc_face(0xFFDE);
	UI_show_npc_face(0xFFE0, 0x0000);
labelFunc0420_0075:
	UI_remove_answer("姓名");
labelFunc0420_007C:
	case "职业" attend labelFunc0420_00B5:
	var0001 = UI_get_schedule_type(0xFFE0);
	if (!(var0001 == 0x0019)) goto labelFunc0420_00A4;
	message("「玩鬼抓人！」");
	say();
	message("男孩从你身边跑开去抓另一个孩子。*");
	say();
	abort;
	goto labelFunc0420_00B5;
labelFunc0420_00A4:
	message("「我是个搞笑的男孩！」 Max 歇斯底里地大笑。「Makth 也会唱歌！」");
	say();
	UI_add_answer(["搞笑的男孩", "唱歌"]);
labelFunc0420_00B5:
	case "搞笑的男孩" attend labelFunc0420_00CF:
	message("「你也是，搞笑的男孩，-也- 是！」 Max 疯狂地笑着，把他的奶嘴丢向你。他指着奶嘴说：「Binky ！」");
	say();
	UI_add_answer("Binky");
	UI_remove_answer("搞笑的男孩");
labelFunc0420_00CF:
	case "Binky" attend labelFunc0420_00E2:
	message("Max 拼命地点头。「Binky ！拿 Binky ！拿 Binky ！」~~你意识到这个男孩想让你把它捡起来。显然这是一种只有幼童才懂的游戏。你捡起奶嘴递给他。他立刻把它塞进嘴里。");
	say();
	UI_remove_answer("Binky");
labelFunc0420_00E2:
	case "唱歌" attend labelFunc0420_00F5:
	message("Max 站得笔直，大声吼道：「老不列颠王有个农场，-e-i-e-i-o-！在这个农场里他有一只公鸭，-e-i-e-i-o-！这里 -嘎- -嘎-，那里 -嘎- -嘎-，到处都是 -嘎- -嘎-！老不列颠王有个农场，-e-i-e-i-o-！」");
	say();
	UI_remove_answer("唱歌");
labelFunc0420_00F5:
	case "告辞" attend labelFunc0420_0100:
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
	var0003 = "@鬼抓人！当鬼啰！@";
labelFunc0420_0145:
	if (!(var0002 == 0x0002)) goto labelFunc0420_0155;
	var0003 = "@抓不到我！@";
labelFunc0420_0155:
	if (!(var0002 == 0x0003)) goto labelFunc0420_0165;
	var0003 = "@啦啦！当鬼啰！@";
labelFunc0420_0165:
	if (!(var0002 == 0x0004)) goto labelFunc0420_0175;
	var0003 = "@有本事来抓我呀！@";
labelFunc0420_0175:
	UI_item_say(0xFFE0, var0003);
labelFunc0420_017F:
	return;
}


