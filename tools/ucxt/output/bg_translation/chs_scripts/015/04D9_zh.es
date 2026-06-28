#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);

void Func04D9 object#(0x4D9) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;

	if (!(event == 0x0001)) goto labelFunc04D9_01BD;
	UI_show_npc_face(0xFF27, 0x0000);
	var0000 = UI_get_npc_object(0xFF27);
	var0001 = UI_get_npc_object(0xFF26);
	var0002 = Func0908();
	var0003 = Func0909();
	var0004 = "the Avatar";
	var0005 = UI_get_alignment(var0000);
	if (!(var0005 == 0x0001)) goto labelFunc04D9_0068;
	message("这只石像鬼的仇恨如此强烈，以至于他抵抗了法术。*");
	say();
	UI_set_alignment(var0000, 0x0002);
	UI_set_alignment(var0001, 0x0002);
	abort;
	goto labelFunc04D9_01BD;
labelFunc04D9_0068:
	var0006 = UI_get_schedule_type(var0000);
	if (!(var0006 == 0x0010)) goto labelFunc04D9_01B8;
	UI_add_answer(["姓名", "职业", "告辞"]);
	message("石像鬼盯着你，对被打断感到不悦。");
	say();
labelFunc04D9_0090:
	converse attend labelFunc04D9_01B4;
	case "姓名" attend labelFunc04D9_0191:
	message("「没有意愿告诉你。要求知道你是谁！」");
	say();
	UI_remove_answer("姓名");
	var0007 = Func090B([var0002, var0004, var0003]);
	if (!(var0007 == var0004)) goto labelFunc04D9_018C;
	message("当这只石像鬼擡头看你时，愤怒闪过他的脸庞。他迅速站起来，打翻了他的饮料。");
	say();
	var0008 = 0x0000;
	var0009 = UI_get_party_list();
	enum();
labelFunc04D9_00D4:
	for (var000C in var0009 with var000A to var000B) attend labelFunc04D9_00EC;
	var0008 = (var0008 + 0x0001);
	goto labelFunc04D9_00D4;
labelFunc04D9_00EC:
	if (!(var0008 == 0x0001)) goto labelFunc04D9_0105;
	var000D = "人类";
	var000E = "，他说，手指着你。";
	goto labelFunc04D9_0111;
labelFunc04D9_0105:
	var000D = "人类";
	var000E = "，他说，手指着你和你的同伴们。";
labelFunc04D9_0111:
	message("\"^");
	message(var000D);
	message("！」");
	message(var000E);
	message(" 「是造成我们不快乐的原因。」");
	say();
	var000F = Func08F7(0xFF26);
	if (!var000F) goto labelFunc04D9_015C;
	UI_show_npc_face(0xFF26, 0x0000);
	message("他身边的石像鬼也站了起来。~~「是造成我们贫穷的原因。去死吧，");
	message(var000D);
	message("，去死吧！」*");
	say();
	UI_remove_npc_face(0xFF26);
	UI_show_npc_face(0xFF27, 0x0000);
	message("这两只石像鬼轻松推开挡路的桌子，冲向你发起攻击。*");
	say();
	goto labelFunc04D9_0160;
labelFunc04D9_015C:
	message("他轻松推开挡路的桌子，冲向你发起攻击。*");
	say();
labelFunc04D9_0160:
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0000, 0x0002);
	UI_set_alignment(var0001, 0x0002);
	abort;
	goto labelFunc04D9_0191;
labelFunc04D9_018C:
	message("「叫你走开！」*");
	say();
	abort;
labelFunc04D9_0191:
	case "职业" attend labelFunc04D9_01A4:
	message("「没有！」他凶狠地瞪着你。");
	say();
	UI_remove_answer("职业");
labelFunc04D9_01A4:
	case "告辞" attend labelFunc04D9_01B1:
	message("他咕哝了一声以示打发。*");
	say();
	abort;
labelFunc04D9_01B1:
	goto labelFunc04D9_0090;
labelFunc04D9_01B4:
	endconv;
	goto labelFunc04D9_01BD;
labelFunc04D9_01B8:
	message("虽然他经过时瞪着你，但这只石像鬼似乎太专注于抵达目的地，而不想理会你。*");
	say();
	abort;
labelFunc04D9_01BD:
	if (!(event == 0x0000)) goto labelFunc04D9_01C6;
	abort;
labelFunc04D9_01C6:
	return;
}


