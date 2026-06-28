#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func08BD 0x8BD (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0414 object#(0x414) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0414_00F3;
	UI_show_npc_face(0xFFEC, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFEC));
	UI_add_answer(["姓名", "职业", "谋杀", "告辞"]);
	if (!(!gflags[0x0054])) goto labelFunc0414_004C;
	message("你看到一个看起来很强壮的守卫，他非常重视自己的工作。*（你觉得你应该跟他说什么？）");
	say();
	gflags[0x0054] = true;
	goto labelFunc0414_0050;
labelFunc0414_004C:
	message("「是的？\" Markus 回答.");
	say();
labelFunc0414_0050:
	converse attend labelFunc0414_00EE;
	case "姓名" attend labelFunc0414_0066:
	message("「我是训练家 Markus。」");
	say();
	UI_remove_answer("姓名");
labelFunc0414_0066:
	case "职业" attend labelFunc0414_007F:
	message("「我是这里的训练家，\"他粗聲粗氣地說。\"如果你想提升你的战斗技巧，我可以帮助你。」");
	say();
	UI_add_answer(["Trinsic", "训练"]);
labelFunc0414_007F:
	case "谋杀" attend labelFunc0414_0092:
	message("「我听说了，但我向你保证，我对细节一无所知。\" Markus 打了個哈欠。");
	say();
	UI_remove_answer("谋杀");
labelFunc0414_0092:
	case "Trinsic" attend labelFunc0414_00A5:
	message("这位战士耸了耸肩。「小镇还不错。」 他吸了吸鼻子。");
	say();
	UI_remove_answer("Trinsic");
labelFunc0414_00A5:
	case "训练" attend labelFunc0414_00E0:
	if (!(var0001 == 0x0007)) goto labelFunc0414_00D5;
	message("「跟我训练需要20金币。太贵了，对吧？」");
	say();
	if (!(!Func090A())) goto labelFunc0414_00CE;
	Func08BD(0x0004, 0x0014);
	goto labelFunc0414_00D2;
labelFunc0414_00CE:
	message("Markus 打了个哈欠。「非常好！」");
	say();
labelFunc0414_00D2:
	goto labelFunc0414_00E0;
labelFunc0414_00D5:
	message("「请在正常的工作时间来我的店里。」");
	say();
	UI_remove_answer("训练");
labelFunc0414_00E0:
	case "告辞" attend labelFunc0414_00EB:
	goto labelFunc0414_00EE;
labelFunc0414_00EB:
	goto labelFunc0414_0050;
labelFunc0414_00EE:
	endconv;
	message("「再见！」这位战士鞠了个躬。*");
	say();
labelFunc0414_00F3:
	if (!(event == 0x0000)) goto labelFunc0414_0101;
	Func092E(0xFFEC);
labelFunc0414_0101:
	return;
}


