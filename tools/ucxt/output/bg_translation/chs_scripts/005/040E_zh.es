#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func0834 0x834 ();

void Func040E object#(0x40E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc040E_0009;
	abort;
labelFunc040E_0009:
	UI_show_npc_face(0xFFF2, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc040E_0042;
	var0001 = Func08FC(0xFFF2, 0xFFF0);
	if (!var0001) goto labelFunc040E_003D;
	message("「友谊会的会议结束后，我会和你谈谈。」");
	say();
	goto labelFunc040E_0041;
labelFunc040E_003D:
	message("「我得赶去参加友谊会的会议！我迟到了！我们明天再谈，好吗？」");
	say();
labelFunc040E_0041:
	abort;
labelFunc040E_0042:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x003D]) goto labelFunc040E_005F;
	UI_add_answer("口令");
labelFunc040E_005F:
	if (!gflags[0x003C]) goto labelFunc040E_006C;
	UI_add_answer("谋杀");
labelFunc040E_006C:
	if (!gflags[0x003F]) goto labelFunc040E_0082;
	UI_add_answer(["友谊会", "Klog", "Hook"]);
labelFunc040E_0082:
	if (!gflags[0x0040]) goto labelFunc040E_008F;
	UI_add_answer("皇冠宝石号 (The Crown Jewel)");
labelFunc040E_008F:
	if (!(!gflags[0x004E])) goto labelFunc040E_00A1;
	message("你看到一位警觉、一丝不苟的卫兵。 ");
	say();
	gflags[0x004E] = true;
	goto labelFunc040E_00A5;
labelFunc040E_00A1:
	message("「那是什么事？」 Johnson 语气严厉地问道。 ");
	say();
labelFunc040E_00A5:
	converse attend labelFunc040E_01E6;
	case "姓名" attend labelFunc040E_00BB:
	message("「Johnson.」");
	say();
	UI_remove_answer("姓名");
labelFunc040E_00BB:
	case "职业" attend labelFunc040E_00CE:
	message("「我负责守卫码头的早班。我会检查每一艘进出的船。」");
	say();
	UI_add_answer("船只");
labelFunc040E_00CE:
	case "谋杀" attend labelFunc040E_00E1:
	message("「我确实听说了这件事。日出时分我到达岗位时，发现 Gilberto 倒在地上。如果你是问我是否看到了什么——我没有。自从我到达码头以来，没有人从我身边经过。」");
	say();
	UI_remove_answer("谋杀");
labelFunc040E_00E1:
	case "皇冠宝石号 (The Crown Jewel)" attend labelFunc040E_00F4:
	message("「那艘船在日出后不久就离开了。我相信它是航行到不列颠去了。你可以去问船匠 Gargan。」");
	say();
	UI_remove_answer("皇冠宝石号 (The Crown Jewel)");
labelFunc040E_00F4:
	case "友谊会" attend labelFunc040E_011E:
	message("「是的，我是会员。你想加入吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc040E_0113;
	message("「那你就应该去不列颠城找巴特林。」");
	say();
	goto labelFunc040E_0117;
labelFunc040E_0113:
	message("「那是你的损失。」");
	say();
labelFunc040E_0117:
	UI_remove_answer("友谊会");
labelFunc040E_011E:
	case "Klog" attend labelFunc040E_0131:
	message("「好人。他是我们 Trinsic 分会的领导人。」");
	say();
	UI_remove_answer("Klog");
labelFunc040E_0131:
	case "船只" attend labelFunc040E_0151:
	message("「如果你想要一艘船，你必须从船匠那里拿到一张船契。你还必须有离开城镇的口令。」");
	say();
	UI_add_answer(["口令", "船契"]);
	UI_remove_answer("船只");
labelFunc040E_0151:
	case "口令" attend labelFunc040E_01B2:
	message("「口令是什么？」");
	say();
	var0003 = ["我不知道...", "国王万岁...？", "拜托..."];
	if (!gflags[0x003D]) goto labelFunc040E_017C;
	var0003 = (var0003 & "Blackbird");
labelFunc040E_017C:
	var0002 = Func090B(var0003);
	if (!(var0002 == "Blackbird")) goto labelFunc040E_01AA;
	var0004 = Func0834();
	if (!var0004) goto labelFunc040E_01A2;
	message("「很好，你可以通过了。」");
	say();
	goto labelFunc040E_01A6;
labelFunc040E_01A2:
	message("「你不能通过。」");
	say();
labelFunc040E_01A6:
	abort;
	goto labelFunc040E_01B2;
labelFunc040E_01AA:
	message("「你不知道口令。很抱歉。镇长可以给你正确的口令。」");
	say();
	gflags[0x0042] = true;
labelFunc040E_01B2:
	case "Hook" attend labelFunc040E_01C5:
	message("「一个装着钩子的男人？ 不，我从昨晚到早上都没看到任何人。」");
	say();
	UI_remove_answer("Hook");
labelFunc040E_01C5:
	case "船契" attend labelFunc040E_01D8:
	message("「你可以从船匠 Gargan 那里买到。」");
	say();
	UI_remove_answer("船契");
labelFunc040E_01D8:
	case "告辞" attend labelFunc040E_01E3:
	goto labelFunc040E_01E6;
labelFunc040E_01E3:
	goto labelFunc040E_00A5;
labelFunc040E_01E6:
	endconv;
	message("「再会」");
	say();
	return;
}


