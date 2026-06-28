#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func0889 0x889 ();
extern var Func090A 0x90A ();
extern void Func092F 0x92F (var var0000);

void Func04BD object#(0x4BD) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04BD_0345;
	UI_show_npc_face(0xFF43, 0x0000);
	var0000 = false;
	var0001 = false;
	var0002 = Func08F7(0xFFFC);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!var0002) goto labelFunc04BD_00C4;
	message("「向你问候，人类，」石像鬼对 Dupre 说。「请问研究进展如何？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「进展得很顺利，朋友 Forbrak。」");
	say();
	var0003 = Func08F7(0xFFFD);
	if (!(var0003 && (!gflags[0x024E]))) goto labelFunc04BD_00B3;
	UI_remove_npc_face(0xFF43);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「『什么』研究？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「哎呀，呃，你肯定听说过那些为 Brommer 编纂的著名指南！」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「对，我听过。但如果有哪一本详细记载了各种酒馆，我就把名字倒过来写！」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「嗯，是的，呃，这是，啊，一些新东西。现在，来喝一杯如何！」");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「新的？那就像我的屁股一样新……」Shamino 咕哝着。");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc04BD_00B3:
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF43, 0x0000);
labelFunc04BD_00C4:
	if (!(!gflags[0x024E])) goto labelFunc04BD_00D6;
	message("在吧台服务的石像鬼向你举起酒杯。");
	say();
	gflags[0x024E] = true;
	goto labelFunc04BD_00DA;
labelFunc04BD_00D6:
	message("「请问是什么风把你们吹来这间优质的酒馆？」Forbrak 问。");
	say();
labelFunc04BD_00DA:
	converse attend labelFunc04BD_0340;
	case "姓名" attend labelFunc04BD_00F7:
	message("「我是 Forbrak。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("Forbrak");
labelFunc04BD_00F7:
	case "Forbrak" attend labelFunc04BD_0111:
	message("「在石像鬼语中是『强壮手臂』的意思。」");
	say();
	UI_remove_answer("Forbrak");
	UI_add_answer("石像鬼");
labelFunc04BD_0111:
	case "职业" attend labelFunc04BD_0124:
	message("他摊开手向房间四周比划。~~ 「在恢复大厅 (Hall of Refreshment) 提供食物和饮料。」");
	say();
	UI_add_answer("购买");
labelFunc04BD_0124:
	case "购买" attend labelFunc04BD_014E:
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFF43));
	if (!(var0004 == 0x0007)) goto labelFunc04BD_014A;
	Func0889();
	goto labelFunc04BD_014E;
labelFunc04BD_014A:
	message("「请你在我店铺营业时再来。」");
	say();
labelFunc04BD_014E:
	case "石像鬼" attend labelFunc04BD_016E:
	message("「认识镇上的许多居民，也知道一些麻烦事。」");
	say();
	UI_add_answer(["居民", "麻烦"]);
	UI_remove_answer("石像鬼");
labelFunc04BD_016E:
	case "麻烦" attend labelFunc04BD_018E:
	message("「只知道两件事。看到神殿和友谊会之间的冲突，也知道无翼者的挣扎。」");
	say();
	UI_add_answer(["神殿与友谊会", "无翼与有翼"]);
	UI_remove_answer("麻烦");
labelFunc04BD_018E:
	case "神殿与友谊会" attend labelFunc04BD_01CC:
	message("「相信新旧理念之间存在分歧。不期望有暴力冲突，但请你去找训练师和治疗师。知道他们观察敏锐，或许看到了什么。同时也建议你与友谊会的成员谈谈。」");
	say();
	gflags[0x023C] = true;
	UI_remove_answer("神殿与友谊会");
	if (!(!var0001)) goto labelFunc04BD_01B3;
	UI_add_answer("训练师");
labelFunc04BD_01B3:
	if (!(!var0000)) goto labelFunc04BD_01C1;
	UI_add_answer("治疗师");
labelFunc04BD_01C1:
	UI_add_answer("成员");
	gflags[0x0244] = true;
labelFunc04BD_01CC:
	case "成员" attend labelFunc04BD_01EC:
	message("「建议你和他们的领袖与店员谈谈。」");
	say();
	UI_add_answer(["领袖", "店员"]);
	UI_remove_answer("成员");
labelFunc04BD_01EC:
	case "无翼与有翼" attend labelFunc04BD_021F:
	message("「看着没有翅膀的朋友对自己的命运感到不满。想知道为什么，但从来没问过。去跟治疗师和训练师谈谈吧。如果真有证据的话，预计他们会看到过。」");
	say();
	UI_remove_answer("无翼与有翼");
	if (!(!var0000)) goto labelFunc04BD_020D;
	UI_add_answer("治疗师");
labelFunc04BD_020D:
	if (!(!var0001)) goto labelFunc04BD_021B;
	UI_add_answer("训练师");
labelFunc04BD_021B:
	gflags[0x0244] = true;
labelFunc04BD_021F:
	case "居民" attend labelFunc04BD_0259:
	message("「认识很多石像鬼。想了解他们之中的谁吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc04BD_024E;
	message("「确定你已经认识我们的领袖了。想知道你是否见过 Teregus ，或者是学习中心的主管。~~说点实际的，你可能会需要物资商人，」他点点头。");
	say();
	UI_add_answer(["学习中心", "Teregus", "物资商人"]);
	goto labelFunc04BD_0252;
labelFunc04BD_024E:
	message("「如果你想知道，晚点再告诉你关于他们的事。」");
	say();
labelFunc04BD_0252:
	UI_remove_answer("居民");
labelFunc04BD_0259:
	case "训练师" attend labelFunc04BD_0270:
	message("「叫做 Inforlem。非常强壮。」");
	say();
	var0001 = true;
	UI_remove_answer("训练师");
labelFunc04BD_0270:
	case "治疗师" attend labelFunc04BD_0287:
	message("「叫做 Inmanilem。」");
	say();
	var0000 = true;
	UI_remove_answer("治疗师");
labelFunc04BD_0287:
	case "领袖" attend labelFunc04BD_029A:
	message("「非常友善。叫做 Quan。」");
	say();
	UI_remove_answer("领袖");
labelFunc04BD_029A:
	case "店员" attend labelFunc04BD_02C5:
	message("「极度暴力。」他摇了摇头。「名字叫 Runeb，意思是『红色迷雾』。因为这是他在战斗后留给敌人的唯一东西。」");
	say();
	UI_remove_answer("店员");
	var0006 = UI_is_dead(UI_get_npc_object(0xFF48));
	if (!var0006) goto labelFunc04BD_02C5;
	message("「不过现在已经死了。」");
	say();
labelFunc04BD_02C5:
	case "学习中心" attend labelFunc04BD_02DF:
	message("「是个获取知识和锻炼的绝佳地点。由名叫 Quaeven 的石像鬼管理。这个 Quaeven 非常有学问。而且，像 Silamo 一样，也是无翼的。」");
	say();
	UI_remove_answer("学习中心");
	UI_add_answer("Silamo");
labelFunc04BD_02DF:
	case "物资商人" attend labelFunc04BD_02F9:
	message("「叫做 Betra。是两位店主之一。另外一位是 Sarpling。」");
	say();
	UI_remove_answer("物资商人");
	UI_add_answer("Sarpling");
labelFunc04BD_02F9:
	case "Teregus" attend labelFunc04BD_030C:
	message("「是一位贤者。像 Quaeven 一样受过良好教育。在这里住了很长一段时间。」");
	say();
	UI_remove_answer("Teregus");
labelFunc04BD_030C:
	case "Silamo" attend labelFunc04BD_031F:
	message("「是住在山脉东边的园丁。」");
	say();
	UI_remove_answer("Silamo");
labelFunc04BD_031F:
	case "Sarpling" attend labelFunc04BD_0332:
	message("「对他了解不多，也从没去过他的店，因此无法告诉你他卖什么。知道他的名字是『蛇信』的意思。」");
	say();
	UI_remove_answer("Sarpling");
labelFunc04BD_0332:
	case "告辞" attend labelFunc04BD_033D:
	goto labelFunc04BD_0340;
labelFunc04BD_033D:
	goto labelFunc04BD_00DA;
labelFunc04BD_0340:
	endconv;
	message("「祝你好运，人类。」*");
	say();
labelFunc04BD_0345:
	if (!(event == 0x0000)) goto labelFunc04BD_0353;
	Func092F(0xFF43);
labelFunc04BD_0353:
	return;
}


