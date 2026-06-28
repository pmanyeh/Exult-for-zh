#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0430 object#(0x430) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0430_0009;
	abort;
labelFunc0430_0009:
	UI_show_npc_face(0xFFD0, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFFF1);
	if (!(!gflags[0x02C5])) goto labelFunc0430_0034;
	message("你看见一位穿着盔甲、带着一小批武器的迷人女子。");
	say();
	gflags[0x02C5] = true;
	goto labelFunc0430_0038;
labelFunc0430_0034:
	message("「有什么我能帮你的吗？」 Amanda 问。");
	say();
labelFunc0430_0038:
	if (!gflags[0x02DC]) goto labelFunc0430_004C;
	if (!(!gflags[0x02DE])) goto labelFunc0430_004C;
	UI_add_answer("住手！");
labelFunc0430_004C:
	UI_add_answer(["姓名", "职业", "告辞"]);
labelFunc0430_005C:
	converse attend labelFunc0430_0213;
	case "姓名" attend labelFunc0430_0072:
	message("「我的名字是 Amanda 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0430_0072:
	case "职业" attend labelFunc0430_00A0:
	if (!gflags[0x02DE]) goto labelFunc0430_008E;
	message("「我同父异母的姊妹和我目前没有工作。既然我们的任务已经终止，我们正在旅行以寻求内心的平静。」");
	say();
	UI_add_answer("内心平静");
	goto labelFunc0430_0099;
labelFunc0430_008E:
	message("「除了为我们的任务服务之外，我同父异母的姊妹和我没有其他工作。」");
	say();
	UI_add_answer("任务");
labelFunc0430_0099:
	UI_add_answer("同父异母姊妹");
labelFunc0430_00A0:
	case "同父异母姊妹" attend labelFunc0430_00F3:
	if (!gflags[0x02DE]) goto labelFunc0430_00B7;
	var0002 = "原本";
	goto labelFunc0430_00BD;
labelFunc0430_00B7:
	var0002 = "未来";
labelFunc0430_00BD:
	message("「我同父异母的姊妹是 Eiko 。她和我一样，是个受过 Karenna 战斗方式训练的战士。我们一起长久而艰苦地学习，以掌握");
	message(var0002);
	message("达成我们复仇所需的技能。」");
	say();
	if (!var0001) goto labelFunc0430_00EC;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("「我们两人在父亲去世前甚至没有见过面。但我们在 Minoc 的训练员 Karenna 教导我们的严格纪律中，像姊妹般结下了不解之缘。」*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_00EC:
	UI_remove_answer("同父异母姊妹");
labelFunc0430_00F3:
	case "内心平静" attend labelFunc0430_00FF:
	message("「是的。我们的生活长期以来一直致力于复仇，以至于没有它我们会感到漂泊、漫无目的。我们必须找到新的生存理由。~~「我们正在考虑加入友谊会，因为他们为迷失的灵魂提供指引。但我们必须再考虑一下。我们还不确定。」");
	say();
labelFunc0430_00FF:
	case "任务" attend labelFunc0430_0119:
	message("「我们正在追踪杀害我们父亲的凶手。」");
	say();
	UI_remove_answer("任务");
	UI_add_answer("凶手");
labelFunc0430_0119:
	case "凶手" attend labelFunc0430_013F:
	message("「我们的父亲被一个凶恶可怕的独眼巨人以最暴力的手段杀害。他被长矛刺穿。他花了几个小时才死去。」~~她擡起头，眼睛闪烁着泪光。「你曾经看过任何人死于腹部伤口吗，");
	message(var0000);
	message("？那种痛苦是无法想像的。」");
	say();
	UI_remove_answer("凶手");
	UI_add_answer(["独眼巨人", "刺穿"]);
labelFunc0430_013F:
	case "独眼巨人" attend labelFunc0430_0177:
	message("「自从我们完成训练以来，我们已经追踪这只怪物好几年了。我们从不列颠尼亚的一端跟随他到另一端。有时候他只领先我们一步。但现在我们知道，我们比以前任何时候都更接近他。」");
	say();
	if (!var0001) goto labelFunc0430_0170;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("「当我们找到他时，他将无处可逃。我们要复仇，而且我们一定会得到它！」*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_0170:
	UI_remove_answer("独眼巨人");
labelFunc0430_0177:
	case "刺穿" attend labelFunc0430_01AF:
	message("「我们的父亲为了生存勇敢地战斗。他并没有轻易死去。他死得像个英雄。虽然我们可能都会在这场努力中死去，但我们打算给杀他的凶手一个真正恶棍应得的死法。」");
	say();
	if (!var0001) goto labelFunc0430_01A8;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("Eiko 邪恶地笑了。*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
labelFunc0430_01A8:
	UI_remove_answer("刺穿");
labelFunc0430_01AF:
	case "住手！" attend labelFunc0430_0205:
	message("你向 Amanda 解释你所了解到的事。 Kalideth 在和 Iskander 战斗时已经疯了，而导致魔法和法师心智出现问题的根源——真正杀死 Kalideth 的东西——已经被摧毁了。~~「你剥夺了我应得的复仇！你怎么敢！」");
	say();
	if (!var0001) goto labelFunc0430_01F5;
	UI_show_npc_face(0xFFF1, 0x0000);
	message("Eiko 叹了口气，肩膀垮了下来。「算了吧，姊姊。随着我们父亲英年早逝的事情现在得到解决，我们终于可以放下了。现在我们可以把生命奉献给自己，而不是继续被困在过去。这是最好的结果，妳必须相信我。」*");
	say();
	UI_show_npc_face(0xFFD0, 0x0000);
	message("Amanda 摇摇头，茫然且困惑。「也许妳是对的， Eiko 。我必须想一想。」*");
	say();
	UI_remove_npc_face(0xFFF1);
	UI_show_npc_face(0xFFD0, 0x0000);
	gflags[0x02DE] = true;
	goto labelFunc0430_01FD;
labelFunc0430_01F5:
	message("Amanda 转身一拳打在墙上，然后伴随着啜泣倒在上面。过了一会儿，她站直了身体，但没有转身面对你。~~「不要害怕我会继续对独眼巨人进行复仇。我还没病态到会杀死一个出于自卫而行动的生物。~「但我现在必须有一些自己的时间。请离开。我必须想一想。」");
	say();
	gflags[0x02DE] = true;
labelFunc0430_01FD:
	abort;
	UI_remove_answer("住手！");
labelFunc0430_0205:
	case "告辞" attend labelFunc0430_0210:
	goto labelFunc0430_0213;
labelFunc0430_0210:
	goto labelFunc0430_005C;
labelFunc0430_0213:
	endconv;
	message("「祝你旅途顺利，");
	message(var0000);
	message("。」*");
	say();
	return;
}


