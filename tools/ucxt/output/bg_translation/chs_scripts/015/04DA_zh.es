#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);

void Func04DA object#(0x4DA) ()
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

	if (!(event == 0x0001)) goto labelFunc04DA_01A4;
	UI_show_npc_face(0xFF26, 0x0000);
	var0000 = UI_get_npc_object(0xFF26);
	var0001 = UI_get_npc_object(0xFF27);
	var0002 = Func0908();
	var0003 = Func0909();
	var0004 = "the Avatar";
	var0005 = UI_get_alignment(var0001);
	if (!(var0005 == 0x0001)) goto labelFunc04DA_0068;
	message("这只石像鬼的愤怒如此强烈，以至于他抵抗了法术。*");
	say();
	UI_set_alignment(var0000, 0x0002);
	UI_set_alignment(var0001, 0x0002);
	abort;
	goto labelFunc04DA_01A4;
labelFunc04DA_0068:
	var0006 = UI_get_schedule_type(var0000);
	if (!(var0006 == 0x0010)) goto labelFunc04DA_019F;
	UI_add_answer(["姓名", "职业", "告辞"]);
	message("这只石像鬼显然对你的打扰感到不悦。");
	say();
labelFunc04DA_0090:
	converse attend labelFunc04DA_019B;
	case "姓名" attend labelFunc04DA_0178:
	message("「没有意愿告诉你。要求知道你是谁！」");
	say();
	UI_remove_answer("姓名");
	var0007 = Func090B([var0002, var0004, var0003]);
	if (!(var0007 == var0004)) goto labelFunc04DA_0173;
	var0008 = 0x0000;
	var0009 = UI_get_party_list();
	enum();
labelFunc04DA_00D0:
	for (var000C in var0009 with var000A to var000B) attend labelFunc04DA_00E8;
	var0008 = (var0008 + 0x0001);
	goto labelFunc04DA_00D0;
labelFunc04DA_00E8:
	if (!(var0008 == 0x0001)) goto labelFunc04DA_00FB;
	var000D = "人类";
	goto labelFunc04DA_0101;
labelFunc04DA_00FB:
	var000D = "人类";
labelFunc04DA_0101:
	message("石像鬼转头看你时发出低吼。他站起来，");
	say();
	var000E = Func08F7(0xFF27);
	if (!var000E) goto labelFunc04DA_013D;
	message("将手放在他旁边的石像鬼的肩膀上。*");
	say();
	UI_show_npc_face(0xFF27, 0x0000);
	message("另一只石像鬼也站了起来。愤怒闪过他的脸庞，他用手指着你。~~「是造成我们不快乐的原因，");
	message(var000D);
	message("!」*");
	say();
	UI_remove_npc_face(0xFF27);
	UI_show_npc_face(0xFF26, 0x0000);
labelFunc04DA_013D:
	message("「是造成我们贫穷的原因。去死吧，");
	message(var000D);
	message("，去死吧！」*");
	say();
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0001, 0x0002);
	UI_set_alignment(var0000, 0x0002);
	abort;
	goto labelFunc04DA_0178;
labelFunc04DA_0173:
	message("「叫你走开！」*");
	say();
	abort;
labelFunc04DA_0178:
	case "职业" attend labelFunc04DA_018B:
	message("「没有！」他凶狠地瞪着你。");
	say();
	UI_remove_answer("职业");
labelFunc04DA_018B:
	case "告辞" attend labelFunc04DA_0198:
	message("他咕哝了一声以示打发。*");
	say();
	abort;
labelFunc04DA_0198:
	goto labelFunc04DA_0090;
labelFunc04DA_019B:
	endconv;
	goto labelFunc04DA_01A4;
labelFunc04DA_019F:
	message("这只石像鬼只停下脚步足够长的时间来给你一个威胁的瞪视。*");
	say();
	abort;
labelFunc04DA_01A4:
	if (!(event == 0x0000)) goto labelFunc04DA_01AD;
	abort;
labelFunc04DA_01AD:
	return;
}


