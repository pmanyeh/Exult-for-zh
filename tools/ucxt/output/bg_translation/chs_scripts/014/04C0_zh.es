#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08BE 0x8BE (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04C0 object#(0x4C0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04C0_01B4;
	UI_show_npc_face(0xFF40, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF40));
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0269])) goto labelFunc04C0_004F;
	message("这位肌肉发达的大汉对你愉快地微笑。");
	say();
	gflags[0x0269] = true;
	goto labelFunc04C0_0059;
labelFunc04C0_004F:
	message("「你好，");
	message(var0000);
	message("！」 Menion 说。");
	say();
labelFunc04C0_0059:
	converse attend labelFunc04C0_01AF;
	case "姓名" attend labelFunc04C0_0075:
	message("「我是 Menion ，");
	message(var0000);
	message("。」他跟你握手。");
	say();
	UI_remove_answer("姓名");
labelFunc04C0_0075:
	case "职业" attend labelFunc04C0_0091:
	message("「我是名训练师。我帮助战士变得更强壮，成为更好的战斗者。我也会打造与我学生手臂力量相匹配的剑。」");
	say();
	UI_add_answer(["训练", "打造", "学生"]);
labelFunc04C0_0091:
	case "学生" attend labelFunc04C0_00AB:
	message("「我教过许多战士如何运用他——或她——的力量对抗对手。」");
	say();
	UI_remove_answer("学生");
	UI_add_answer("力量");
labelFunc04C0_00AB:
	case "力量" attend labelFunc04C0_00D1:
	message("「是的，");
	message(var0000);
	message("。有效战斗的关键是重击并准确地击中对手。」");
	say();
	UI_remove_answer("力量");
	UI_add_answer(["重击", "准确"]);
labelFunc04C0_00D1:
	case "重击" attend labelFunc04C0_00E4:
	message("「体力让攻击者有更好的机会穿透另一名战斗者的盔甲。很明显，在生死战斗中，这是一个重要的目标。」");
	say();
	UI_remove_answer("重击");
labelFunc04C0_00E4:
	case "准确" attend labelFunc04C0_00F7:
	message("「不用说，人体上的某些目标会比其他目标更好。最好总是能击中让对手严重丧失行动能力，或制造足够疼痛让他分心的部位。」");
	say();
	UI_remove_answer("准确");
labelFunc04C0_00F7:
	case "训练" attend labelFunc04C0_0130:
	if (!(var0001 == 0x0007)) goto labelFunc04C0_012C;
	message("「我会以 45 金币训练你。你愿意付钱吗？」");
	say();
	if (!Func090A()) goto labelFunc04C0_0125;
	Func08BE([0x0000, 0x0004], 0x002D);
	goto labelFunc04C0_0129;
labelFunc04C0_0125:
	message("「好吧。」");
	say();
labelFunc04C0_0129:
	goto labelFunc04C0_0130;
labelFunc04C0_012C:
	message("「或许等我上班时再谈这个话题会比较合适。」");
	say();
labelFunc04C0_0130:
	case "打造" attend labelFunc04C0_01A1:
	message("「你想打造一把剑吗？」");
	say();
	if (!((var0002 == 0x0003) || ((var0002 == 0x0004) || (var0002 == 0x0005)))) goto labelFunc04C0_0196;
	var0003 = Func090A();
	if (!(!var0003)) goto labelFunc04C0_016A;
	message("「或许等你比较有空的时候。」");
	say();
	goto labelFunc04C0_0193;
labelFunc04C0_016A:
	message("他微笑着。「我非常乐意向你展示打造一把好剑的必要步骤。」他迅速在卷轴上写下一些东西，然后转身交给你。*");
	say();
	var0004 = UI_add_party_items(0x0001, 0x031D, 0x000D, 0x0000, true);
	if (!var0004) goto labelFunc04C0_018F;
	message("「愿你的剑坚固锐利！」*");
	say();
	goto labelFunc04C0_0193;
labelFunc04C0_018F:
	message("「或许当你的背包空出点位子时，我再给你这个。」");
	say();
labelFunc04C0_0193:
	goto labelFunc04C0_019A;
labelFunc04C0_0196:
	message("「等我上班时再帮你处理。」");
	say();
labelFunc04C0_019A:
	UI_remove_answer("打造");
labelFunc04C0_01A1:
	case "告辞" attend labelFunc04C0_01AC:
	goto labelFunc04C0_01AF;
labelFunc04C0_01AC:
	goto labelFunc04C0_0059;
labelFunc04C0_01AF:
	endconv;
	message("「愿你手臂的力量永远与你意志的力量相匹配。」*");
	say();
labelFunc04C0_01B4:
	if (!(event == 0x0000)) goto labelFunc04C0_01C2;
	Func092E(0xFF40);
labelFunc04C0_01C2:
	return;
}


