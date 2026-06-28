#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func0326 shape#(0x326) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0000)) goto labelFunc0326_0009;
	abort;
labelFunc0326_0009:
	var0000 = UI_get_schedule_type(UI_get_npc_object(item));
	UI_show_npc_face(0xFEFD, 0x0000);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x003D]) goto labelFunc0326_003C;
	UI_add_answer("口令");
labelFunc0326_003C:
	message("你看到一个看起来很强壮的守卫，他非常重视自己的工作。*（你觉得你应该跟他说什么？）");
	say();
labelFunc0326_0040:
	converse attend labelFunc0326_00D5;
	case "姓名" attend labelFunc0326_0056:
	message("「我的名字不重要。」");
	say();
	UI_remove_answer("姓名");
labelFunc0326_0056:
	case "职业" attend labelFunc0326_0069:
	message("「我负责阻止恶棍进入 Trinsic，并记录所有离开的人。你必须有口令才能离开。」");
	say();
	UI_add_answer("口令");
labelFunc0326_0069:
	case "口令" attend labelFunc0326_00C7:
	message("「口令是？」");
	say();
	var0001 = ["嗯，我不知道", "国王万岁", "拜托"];
	if (!gflags[0x003D]) goto labelFunc0326_0094;
	var0001 = (var0001 & "Blackbird");
labelFunc0326_0094:
	var0002 = Func090B(var0001);
	if (!(var0002 == "Blackbird")) goto labelFunc0326_00BF;
	var0003 = Func0834();
	var0003 = true;
	if (!var0003) goto labelFunc0326_00BC;
	message("「非常好，你可以通过了。」");
	say();
	abort;
labelFunc0326_00BC:
	goto labelFunc0326_00C7;
labelFunc0326_00BF:
	message("「你不知道口令。抱歉。市长可以给你正确的口令。」");
	say();
	gflags[0x0042] = true;
labelFunc0326_00C7:
	case "告辞" attend labelFunc0326_00D2:
	goto labelFunc0326_00D5;
labelFunc0326_00D2:
	goto labelFunc0326_0040;
labelFunc0326_00D5:
	endconv;
	message("「再见！」");
	say();
	return;
}


