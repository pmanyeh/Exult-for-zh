#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0870 0x870 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func0423 object#(0x423) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0423_01DF;
	UI_show_npc_face(0xFFDD, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFDD));
	UI_add_answer(["姓名", "职业", "服务", "告辞"]);
	if (!(!gflags[0x00A4])) goto labelFunc0423_0049;
	message("你看见一位看起来睿智而诚实的治疗师。");
	say();
	message("「我一直期待你的到来，圣者。消息传得很快。很高兴见到你！」");
	say();
	gflags[0x00A4] = true;
	goto labelFunc0423_004D;
labelFunc0423_0049:
	message("「又见面了，圣者！」 Csil 微笑着说。");
	say();
labelFunc0423_004D:
	converse attend labelFunc0423_01DA;
	case "姓名" attend labelFunc0423_006A:
	message("「我是治疗师 Csil ，虽然在过去的生活中我被称为 Abrams 。当我晋升时我变成了 Csil 。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("晋升");
labelFunc0423_006A:
	case "职业" attend labelFunc0423_0076:
	message("「我是不列颠城的治疗师，已经很多年了。如果你希望雇用我的服务，请告诉我。我非常乐意帮忙。」");
	say();
labelFunc0423_0076:
	case "晋升" attend labelFunc0423_0096:
	message("「当我的名字是 Abrams 时，我住在 New Magincia 岛并在那里做学徒。我的诊所发展壮大，很快我就乘船去 Moonglow 看那里的病人了。」");
	say();
	UI_remove_answer("晋升");
	UI_add_answer(["病人", "诊所"]);
labelFunc0423_0096:
	case "病人" attend labelFunc0423_00B0:
	message("「很快我在三个岛上都有了病人。就在那时，不列颠王听说了我的诊所。」");
	say();
	UI_remove_answer("病人");
	UI_add_answer("不列颠王");
labelFunc0423_00B0:
	case "诊所" attend labelFunc0423_012A:
	message("「我的诊所发展迅速。我是个谦虚的人，但我不介意说我是一个受欢迎的治疗师。」");
	say();
	UI_remove_answer("诊所");
	var0001 = Func08F7(0xFFFD);
	if (!var0001) goto labelFunc0423_012A;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「他可能是全不列颠尼亚最好的治疗师。哎呀，他立刻治好了我的一个，呃，特殊问题。」*");
	say();
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc0423_0119;
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「喔？什么问题？」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「别在意。全世界不需要知道这件事。」*");
	say();
labelFunc0423_0119:
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFDD, 0x0000);
labelFunc0423_012A:
	case "不列颠王" attend labelFunc0423_014A:
	message("「嗯，不列颠王自己也感染了某种疾病。他派人找我。我一离开病人就赶到城堡检查了国王。在我看来，似乎有什么东西侵入了他的血液。我对此有一个理论，我坚信它是正确的。然而，其他人并不认同我的观点。」");
	say();
	UI_remove_answer("不列颠王");
	UI_add_answer(["理论", "其他人"]);
labelFunc0423_014A:
	case "理论" attend labelFunc0423_0174:
	message("「我相信大多数疾病是由微小的生物引起的。我们无法用肉眼看到这些东西。然而，我正在致力于开发一种仪器，可以 -看到- 这些生物。我相信总有一天，治疗将完全不依赖魔法，而是依赖某种形式的治疗，使人不容易受到这些生物的感染。由于这些动物是生物，我称这种理论上的治疗为『抗生素疗法』。你觉得呢，圣者？我走在正确的道路上吗？」");
	say();
	UI_remove_answer("理论");
	var0003 = Func090A();
	if (!var0003) goto labelFunc0423_0170;
	message("「很好。我也这么认为。」");
	say();
	goto labelFunc0423_0174;
labelFunc0423_0170:
	message("「不？嗯。」 Csil 看起来很忧虑。「好吧，我无法相信传统的放血疗法，直到疾病离开他的身体。一定有另一种方法……」~~Csil 看着他的笔记，担心他的理论是无效的。");
	say();
labelFunc0423_0174:
	case "其他人" attend labelFunc0423_01A5:
	message("「有一群人不鼓励我的研究。我们完全合不来。我认为他们对治疗师有一种超越单纯不信任的反感。你知道我指谁吗？」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0423_0193;
	message("Csil 点点头。「我也这么想。友谊会并不……像他们看起来的那样。」");
	say();
	goto labelFunc0423_0197;
labelFunc0423_0193:
	message("「不知道？」 Csil 压低声音说。「是友谊会。」");
	say();
labelFunc0423_0197:
	UI_remove_answer("其他人");
	UI_add_answer("友谊会");
labelFunc0423_01A5:
	case "友谊会" attend labelFunc0423_01B8:
	message("「他们有一套概述其信仰的教义。他们相信如果一个人面临痛苦，那么他别无选择，只能经历它才能成为一个『更好的人』。我不同意这点。没有人应该经历不必要的痛苦。但是……他们有权保留自己的意见。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0423_01B8:
	case "服务" attend labelFunc0423_01CC:
	Func0870(0x0028, 0x001E, 0x01C2);
labelFunc0423_01CC:
	case "告辞" attend labelFunc0423_01D7:
	goto labelFunc0423_01DA;
labelFunc0423_01D7:
	goto labelFunc0423_004D;
labelFunc0423_01DA:
	endconv;
	message("「再见，圣者。」*");
	say();
labelFunc0423_01DF:
	if (!(event == 0x0000)) goto labelFunc0423_01ED;
	Func092E(0xFFDD);
labelFunc0423_01ED:
	return;
}


