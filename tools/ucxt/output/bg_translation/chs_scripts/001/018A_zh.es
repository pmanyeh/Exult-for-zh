#game "blackgate"
void Func018A shape#(0x18A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_schedule_type(UI_get_npc_object(0x018A));
	if (!(event == 0x0001)) goto labelFunc018A_0069;
	UI_show_npc_face(0xFEFE, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	message("你看到一个看起来很强壮的守卫，他非常重视自己的工作。*（你觉得你应该跟他说什么？）");
	say();
labelFunc018A_0034:
	converse attend labelFunc018A_0064;
	case "姓名" attend labelFunc018A_004A:
	message("「我是一名守卫。」");
	say();
	UI_remove_answer("姓名");
labelFunc018A_004A:
	case "职业" attend labelFunc018A_0056:
	message("这个人看你的眼神，好像你根本就是个白痴。「我是守卫，蠢货！你应该滚去做正事了。」");
	say();
	UI_remove_answer("职业");
labelFunc018A_0056:
	case "告辞" attend labelFunc018A_0061:
	goto labelFunc018A_0064;
labelFunc018A_0061:
	goto labelFunc018A_0034;
labelFunc018A_0064:
	endconv;
	message("「再见！」");
	say();
labelFunc018A_0069:
	if (!(event == 0x0000)) goto labelFunc018A_00E0;
	var0001 = UI_get_schedule_type(UI_get_npc_object(0x018A));
	if (!(var0001 == 0x001D)) goto labelFunc018A_00E0;
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0001)) goto labelFunc018A_00A6;
	var0003 = "@继续前进！@";
labelFunc018A_00A6:
	if (!(var0002 == 0x0002)) goto labelFunc018A_00B6;
	var0003 = "@退到一边去！@";
labelFunc018A_00B6:
	if (!(var0002 == 0x0003)) goto labelFunc018A_00C6;
	var0003 = "@滚去做正事去！@";
labelFunc018A_00C6:
	if (!(var0002 == 0x0004)) goto labelFunc018A_00D6;
	var0003 = "@快走开！@";
labelFunc018A_00D6:
	UI_item_say(0x018A, var0003);
labelFunc018A_00E0:
	return;
}


