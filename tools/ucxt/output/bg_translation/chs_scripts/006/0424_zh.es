#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0950 0x950 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0424 object#(0x424) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0424_0148;
	UI_show_npc_face(0xFFDC, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDC));
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00A5])) goto labelFunc0424_0049;
	message("你看见一位身材精瘦、带有几分潇洒气质的年轻战士。");
	say();
	gflags[0x00A5] = true;
	goto labelFunc0424_004D;
labelFunc0424_0049:
	message("「又见面了！」 Zella 说。");
	say();
labelFunc0424_004D:
	converse attend labelFunc0424_0143;
	case "姓名" attend labelFunc0424_0063:
	message("「我的名字是 Zella。」");
	say();
	UI_remove_answer("姓名");
labelFunc0424_0063:
	case "职业" attend labelFunc0424_007C:
	message("「我是个训练员。我专精于肉搏战。毕竟，一个战士永远不知道何时可能会遇到对手，却突然意识到自己手无寸铁。我称之为『拳击』。拳击不仅是一种战斗方法——它是一门艺术。」");
	say();
	UI_add_answer(["战斗", "训练"]);
labelFunc0424_007C:
	case "战斗" attend labelFunc0424_009C:
	message("「战场包含许多竞技场。几乎任何情况都可能发生。每个战士都应该了解并精通多种战斗形式。我有我自己的战斗理论。」");
	say();
	UI_remove_answer("战斗");
	UI_add_answer(["竞技场", "理论"]);
labelFunc0424_009C:
	case "竞技场" attend labelFunc0424_00AF:
	message("「所有不同的战斗竞技场，以及在用不同武器战斗时可能学到的所有不同风格，都不是最纯粹形式的战斗。要真正成为一名伟大的战士，必须追溯到所有战斗知识的源头。」");
	say();
	UI_remove_answer("竞技场");
labelFunc0424_00AF:
	case "理论" attend labelFunc0424_00CF:
	message("「就像城堡是从地基往上建的一样，战士也是如此。不能一开始就学习用武器战斗。武器只是人体末端的延伸。一个真正的战士首先学会使用他的四肢。」");
	say();
	UI_remove_answer("理论");
	UI_add_answer(["战士", "四肢"]);
labelFunc0424_00CF:
	case "战士" attend labelFunc0424_00E2:
	message("「别搞错了。战士是后天训练出来的，而不是天生的。如果没有求胜的心和意志，世界上所有天赋都无济于事。那种意志的一部分，是去寻找自己的极限并努力超越它们的勇气。」");
	say();
	UI_remove_answer("战士");
labelFunc0424_00E2:
	case "四肢" attend labelFunc0424_00F5:
	message("「你的手臂。你的双腿。你的拳头。这就是『拳击』的基础。」");
	say();
	UI_remove_answer("四肢");
labelFunc0424_00F5:
	case "训练" attend labelFunc0424_0135:
	if (!(var0001 == 0x001D)) goto labelFunc0424_012A;
	message("「我的训练价格是 45 金币。可以吗？」");
	say();
	if (!Func090A()) goto labelFunc0424_0123;
	Func0950([0x0001, 0x0004], 0x002D);
	goto labelFunc0424_0127;
labelFunc0424_0123:
	message("「那么你或许可以在其他地方找到更便宜的训练。」");
	say();
labelFunc0424_0127:
	goto labelFunc0424_0135;
labelFunc0424_012A:
	message("「麻烦你在正常的训练时间再来，好吗？」");
	say();
	UI_remove_answer("训练");
labelFunc0424_0135:
	case "告辞" attend labelFunc0424_0140:
	goto labelFunc0424_0143;
labelFunc0424_0140:
	goto labelFunc0424_004D;
labelFunc0424_0143:
	endconv;
	message("「祝你有美好的一天。」*");
	say();
labelFunc0424_0148:
	if (!(event == 0x0000)) goto labelFunc0424_0156;
	Func092E(0xFFDC);
labelFunc0424_0156:
	return;
}


