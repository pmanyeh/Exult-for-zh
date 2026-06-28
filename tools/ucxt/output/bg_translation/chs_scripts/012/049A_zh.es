#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func049A object#(0x49A) ()
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

	if (!(event == 0x0001)) goto labelFunc049A_03B1;
	UI_show_npc_face(0xFF66, 0x0000);
	UI_add_answer(["姓名", "职业", "友谊会", "告辞"]);
	var0000 = Func08F7(0xFFFF);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFF10);
	var0003 = Func08F7(0xFF24);
	var0004 = Func0909();
	var0005 = Func0908();
	UI_set_alignment(UI_get_npc_object(0xFF66), 0x0002);
	if (!(!gflags[0x02BE])) goto labelFunc049A_0075;
	message("食人妖对着你咆哮，显然对你的出现感到不悦。");
	say();
	gflags[0x02BE] = true;
	goto labelFunc049A_0079;
labelFunc049A_0075:
	message("「你要什么？」Grod 问。");
	say();
labelFunc049A_0079:
	converse attend labelFunc049A_03AC;
	case "姓名" attend labelFunc049A_0175:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049A_0122;
	message("「我 Grod。你为什么想知道？声音不高兴吗？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc049A_011B;
	message("他似乎真的在担心。~~「我会把工作做好。我保证！我会打得更用力、更频繁！」");
	say();
	if (!var0002) goto labelFunc049A_00EF;
	message("*");
	say();
	UI_show_npc_face(0xFF10, 0x0000);
	if (!gflags[0x02C3]) goto labelFunc049A_00C8;
	var0008 = "Anton，";
	goto labelFunc049A_00CE;
labelFunc049A_00C8:
	var0008 = "一名囚犯，";
labelFunc049A_00CE:
	message("「非常感谢你，");
	message(var0004);
	message("，」");
	message(var0008);
	message("讽刺地说。*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_00EF:
	if (!(var0002 && var0003)) goto labelFunc049A_0118;
	UI_show_npc_face(0xFF24, 0x0000);
	message("「好啦，好啦，Anton，这位好心人只是在回答问题。」*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_0118:
	goto labelFunc049A_011F;
labelFunc049A_011B:
	message("「很好。我工作做得很好！」");
	say();
labelFunc049A_011F:
	goto labelFunc049A_016E;
labelFunc049A_0122:
	message("「我 Grod。你谁？」");
	say();
	var0005 = Func0908();
	var0009 = "圣者";
	var000A = Func090B([var0005, var0009, var0004]);
	if (!(var000A == var0005)) goto labelFunc049A_0152;
	message("「我不认识你。」他耸了耸肩。");
	say();
labelFunc049A_0152:
	if (!(var000A == var0004)) goto labelFunc049A_0160;
	message("「好笑的名字。不过，所有人类的名字都很好笑。」他耸了耸肩。");
	say();
labelFunc049A_0160:
	if (!(var000A == var0009)) goto labelFunc049A_016E;
	message("「圣者？」他开始大笑。「圣者已经有……」他开始掰着手指数。试了几次后，他放弃了，说：「有好多年没来了！~~你不是圣者。」");
	say();
labelFunc049A_016E:
	UI_remove_answer("姓名");
labelFunc049A_0175:
	case "职业" attend labelFunc049A_026C:
	message("「我折磨囚犯，」他骄傲地捶着胸口说。*");
	say();
	if (!var0001) goto labelFunc049A_01A6;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 眼睛一亮。~「折磨？哇！」他迅速看了你一眼并改变表情。~~「我、呃、我是说，那真是太糟糕了。」*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_01A6:
	var000B = UI_wearing_fellowship();
	if (!var000B) goto labelFunc049A_025F;
	message("「想帮忙吗？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc049A_025A;
	if (!(var0003 && var0002)) goto labelFunc049A_0253;
	message("他指着其中一名囚犯。~~「他不像另一个那么有趣。先折磨另一个。」*");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「什么？不，没关系，");
	message(var0004);
	message("。先折磨我。」*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF10, 0x0000);
	message("「对，");
	message(var0004);
	message("。先折磨他。」*");
	say();
	UI_remove_npc_face(0xFF10);
	UI_show_npc_face(0xFF24, 0x0000);
	message("「我感谢你，」他对另一个人说。*");
	say();
	UI_remove_npc_face(0xFF24);
	UI_show_npc_face(0xFF66, 0x0000);
	message("「动手吧，」Grod 说。*");
	say();
	var000D = UI_add_party_items(0x0001, 0x026E, 0xFE99, 0xFE99, true);
	if (!var000D) goto labelFunc049A_024B;
	message("他递给你一条鞭子。");
	say();
	goto labelFunc049A_024F;
labelFunc049A_024B:
	message("「你太懦弱了，用不了鞭子！」");
	say();
labelFunc049A_024F:
	abort;
	goto labelFunc049A_0257;
labelFunc049A_0253:
	message("「这里没有人可以虐待。」他显得很失望。");
	say();
labelFunc049A_0257:
	goto labelFunc049A_025F;
labelFunc049A_025A:
	message("「你开了个好笑的玩笑。去吧，折磨他们。」*");
	say();
	abort;
labelFunc049A_025F:
	UI_add_answer(["折磨", "囚犯"]);
labelFunc049A_026C:
	case "友谊会" attend labelFunc049A_02AA:
	var000E = UI_wearing_fellowship();
	if (!var000E) goto labelFunc049A_0298;
	message("「是的，」他点点头。「我也是一员。我致力合一。我价值先行于报偿。而且我信赖我的兄弟。」~~他笑了，显然对自己很满意。");
	say();
	UI_add_answer(["致力合一", "价值", "信赖"]);
	goto labelFunc049A_02A3;
labelFunc049A_0298:
	message("「大团体，很多人。你应该加入！」");
	say();
	UI_add_answer("加入");
labelFunc049A_02A3:
	UI_remove_answer("友谊会");
labelFunc049A_02AA:
	case "致力合一", "价值", "信赖" attend labelFunc049A_02CC:
	message("「你不知道？」他皱起眉头。~~「你应该在声音生气之前学会！」");
	say();
	UI_remove_answer(["致力合一", "价值", "信赖"]);
labelFunc049A_02CC:
	case "加入" attend labelFunc049A_02DF:
	message("「好，加入。去找 Abraham 或 Danag 加入。」");
	say();
	UI_remove_answer("加入");
labelFunc049A_02DF:
	case "囚犯" attend labelFunc049A_0338:
	if (!(gflags[0x02E2] && gflags[0x02E1])) goto labelFunc049A_02F8;
	message("「现在这里没有……」他显得有些不安。");
	say();
	goto labelFunc049A_0331;
labelFunc049A_02F8:
	message("「那里有一个！」他指着一个男人说。*");
	say();
	if (!(!(gflags[0x02E1] && (!gflags[0x02E2])))) goto labelFunc049A_0327;
	message("「那里还有一个！」他指着另一个男人说。");
	say();
	UI_show_npc_face(0xFF24, 0x0000);
	message("「你今天过得好吗，");
	message(var0004);
	message("？」他微笑着说。");
	say();
	UI_remove_npc_face(0xFF24);
labelFunc049A_0327:
	UI_show_npc_face(0xFF66, 0x0000);
labelFunc049A_0331:
	UI_remove_answer("囚犯");
labelFunc049A_0338:
	case "折磨" attend labelFunc049A_0391:
	message("「很好玩！囚犯会大声尖叫。」*");
	say();
	if (!var0003) goto labelFunc049A_034E;
	message("「除了那个。他不尖叫。他只会说话。说个不停。我无聊到快疯了。所以我折磨得更多。结果，」他摊开双手，「他说得更多了！我不知道该怎么办。」*");
	say();
labelFunc049A_034E:
	if (!var0000) goto labelFunc049A_038A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「那太糟糕了，");
	message(var0005);
	message("。我们必须命令他停止！」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF66, 0x0000);
	if (!var0003) goto labelFunc049A_0383;
	message("「我试着让他停下来。但他一直说。你来试试？也许他会停下来。」");
	say();
labelFunc049A_0383:
	UI_add_answer("停止折磨");
labelFunc049A_038A:
	UI_remove_answer("折磨");
labelFunc049A_0391:
	case "停止折磨" attend labelFunc049A_039E:
	message("「喔，不！Grod 喜欢工作！Grod 永远不会停。你现在走开。」*");
	say();
	abort;
labelFunc049A_039E:
	case "告辞" attend labelFunc049A_03A9:
	goto labelFunc049A_03AC;
labelFunc049A_03A9:
	goto labelFunc049A_0079;
labelFunc049A_03AC:
	endconv;
	message("「回来看看 Grod 吧。听听受害者的尖叫声！」*");
	say();
labelFunc049A_03B1:
	if (!(event == 0x0000)) goto labelFunc049A_03BA;
	abort;
labelFunc049A_03BA:
	return;
}


