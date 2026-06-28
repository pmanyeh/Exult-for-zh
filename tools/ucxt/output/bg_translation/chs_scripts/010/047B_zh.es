#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0871 0x871 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047B object#(0x47B) ()
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
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;

	if (!(event == 0x0001)) goto labelFunc047B_03DB;
	UI_show_npc_face(0xFF85, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF85));
	var0003 = Func08F7(0xFF86);
	var0004 = false;
	var0005 = UI_is_dead(UI_get_npc_object(0xFF84));
	var0006 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0007 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0008 = UI_is_dead(UI_get_npc_object(0xFF81));
	if (!(var0005 || (var0006 || (var0007 || var0008)))) goto labelFunc047B_0088;
	var0004 = true;
labelFunc047B_0088:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0005 && (!gflags[0x017A]))) goto labelFunc047B_00AA;
	UI_add_answer("赢得的钱");
labelFunc047B_00AA:
	if (!(!gflags[0x0175])) goto labelFunc047B_010A;
	message("你看到一个不满且明显过度劳累的酒馆女侍。她对你敷衍地咕哝了一声算作打招呼。");
	say();
	gflags[0x0175] = true;
	var0009 = Func08F7(0xFFFC);
	if (!var0009) goto labelFunc047B_0107;
	message("「你还在这里啊？」她问 Dupre。");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「我还没完成对妳这家优质酒馆的评估呢！」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「什么？你是 Brommer 不列颠尼亚旅游指南的员工吗？」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「不是的，亲爱的。这项研究完全是为了我个人的消化系统！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF85, 0x0000);
labelFunc047B_0107:
	goto labelFunc047B_0114;
labelFunc047B_010A:
	message("「日安，");
	message(var0000);
	message("。坐下休息一会儿吧。」");
	say();
labelFunc047B_0114:
	converse attend labelFunc047B_03D6;
	case "姓名" attend labelFunc047B_012A:
	message("「我是 Daphne。」");
	say();
	UI_remove_answer("姓名");
labelFunc047B_012A:
	case "职业" attend labelFunc047B_014C:
	message("「这问题很简单。我是舖位与凳子(Bunk and Stool)的驻店老黄牛。当我们的驻店公主在和顾客调情时，所有的煮饭、打扫和端盘子工作都是我做的。」");
	say();
	UI_add_answer(["老黄牛", "公主", "买", "舖位与凳子", "房间"]);
labelFunc047B_014C:
	case "买" attend labelFunc047B_0175:
	if (!(var0002 == 0x0017)) goto labelFunc047B_0164;
	Func0871();
	goto labelFunc047B_016E;
labelFunc047B_0164:
	message("「抱歉，");
	message(var0000);
	message("，我现在不卖食物和饮料。」");
	say();
labelFunc047B_016E:
	UI_remove_answer("买");
labelFunc047B_0175:
	case "老黄牛" attend labelFunc047B_0195:
	message("「自从老板 Sprellic 在伤痕图书馆惹上麻烦后，就没有别人来经营这个地方了。喔，我那痛得要命的背啊！」");
	say();
	UI_remove_answer("老黄牛");
	UI_add_answer(["Sprellic", "伤痕图书馆"]);
labelFunc047B_0195:
	case "公主" attend labelFunc047B_01AF:
	message("「哼！那就是 Ophelia 了。」");
	say();
	UI_remove_answer("公主");
	UI_add_answer("Ophelia");
labelFunc047B_01AF:
	case "房间" attend labelFunc047B_01C2:
	message("「那件事你必须去问 Ophelia。我的领域是厨房！」");
	say();
	UI_remove_answer("房间");
labelFunc047B_01C2:
	case "Ophelia" attend labelFunc047B_022A:
	message("「Ophelia 长、Ophelia 短的！我一整天听到的都是这个！如果你只想谈论她，去跟别人说吧！」");
	say();
	if (!var0003) goto labelFunc047B_0223;
	UI_show_npc_face(0xFF86, 0x0000);
	message("「别因为我长得漂亮就讨厌我嘛，Daphne。」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「我讨厌妳才不是因为那个原因，Ophelia！」*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("「喔，对了，我现在想起来了。妳讨厌我是因为我很漂亮，而妳不是！」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「真是太感谢你了，");
	message(var0000);
	message("，提起了我最喜欢的话题。」*");
	say();
	UI_remove_npc_face(0xFF86);
	UI_show_npc_face(0xFF85, 0x0000);
labelFunc047B_0223:
	UI_remove_answer("Ophelia");
labelFunc047B_022A:
	case "舖位与凳子" attend labelFunc047B_0244:
	message("「舖位与凳子是 Jhelom 战士和流氓们喝酒的地方。要让这群只顾着喝酒、决斗和赌博的人满意，这工作可不轻松。」");
	say();
	UI_remove_answer("舖位与凳子");
	UI_add_answer("赌博");
labelFunc047B_0244:
	case "Sprellic" attend labelFunc047B_025B:
	message("「这傻瓜被抓到从伤痕图书馆的墙上偷走荣誉旗帜！现在挑战他的三个学生要在决斗场上杀了他。这真是一场悲剧。」");
	say();
	gflags[0x016E] = true;
	UI_remove_answer("Sprellic");
labelFunc047B_025B:
	case "伤痕图书馆" attend labelFunc047B_026E:
	message("「那是 Jhelom 的战斗俱乐部，培养出的可能是全不列颠尼亚最坚强的战士。Sprellic 这辈子连一次架都没打过。」");
	say();
	UI_remove_answer("伤痕图书馆");
labelFunc047B_026E:
	case "赌博" attend labelFunc047B_0359:
	if (!var0004) goto labelFunc047B_0283;
	message("「很抱歉，因为这件事已经解决，所有的下注都取消了。」");
	say();
	goto labelFunc047B_0352;
labelFunc047B_0283:
	message("「事实上，我正在接受即将到来的决斗的下注。你想下注赌 Sprellic 会输给那三名决斗者中的任何一个吗？」");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc047B_034E;
	message("「你想下注多少？」");
	say();
labelFunc047B_0297:
	var000B = UI_input_numeric_value(0x0000, 0x00C8, 0x000A, 0x0000);
	if (!(var000B == 0x0000)) goto labelFunc047B_02BB;
	message("「也许你对自己的信念并不那么认真。或许公主会接受你的下注。」");
	say();
	goto labelFunc047B_034B;
labelFunc047B_02BB:
	message("「你要下注 ");
	message(var000B);
	message(" 枚金币赌 Sprellic 会输？」");
	say();
	var000C = Func090A();
	if (!(!var000C)) goto labelFunc047B_02DC;
	message("「很好。你想下注多少？」");
	say();
	goto labelFunc047B_0297;
	goto labelFunc047B_034B;
labelFunc047B_02DC:
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var000B)) goto labelFunc047B_0347;
	var000E = UI_add_party_items((var000B / 0x000A), 0x0399, 0xFE99, 0x0001, false);
	if (!var000E) goto labelFunc047B_0340;
	var000F = UI_remove_party_items(var000B, 0x0284, 0xFE99, 0xFE99, true);
	var0010 = true;
	message("「很好。让我给你代表你金币的筹码。每一个价值 10 枚金币。如果 Sprellic 输了，你可以来找我领取两倍数量的金币。~~如果他赢了，");
	message(var0000);
	message("，你的筹码当然就一文不值了。」");
	say();
	message("「决斗后你可以来找我，如果你赢了就可以用这筹码换取你赢得的钱。」");
	say();
	goto labelFunc047B_0344;
labelFunc047B_0340:
	message("「噢！等你背包有足够空间装这些筹码时，你必须晚点再来。」");
	say();
labelFunc047B_0344:
	goto labelFunc047B_034B;
labelFunc047B_0347:
	message("「你没有你想要下注的金币数量！你是在试图骗我吗？」");
	say();
labelFunc047B_034B:
	goto labelFunc047B_0352;
labelFunc047B_034E:
	message("「那么如果你想赌 Sprellic 赢，你可以去找 Ophelia，但我警告你，你这是在把钱丢进水里！」");
	say();
labelFunc047B_0352:
	UI_remove_answer("赌博");
labelFunc047B_0359:
	case "赢得的钱" attend labelFunc047B_03C8:
	var0011 = UI_count_objects(0xFE9B, 0x0399, 0xFE99, 0x0001);
	var0012 = (var0011 * 0x0014);
	var0013 = UI_add_party_items(var0012, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0013) goto labelFunc047B_03BD;
	message("「这是你赢得的钱，");
	message(var0000);
	message("。但我有理由相信是你杀了可怜的 Sprellic！如果这就是你赚钱的方式，那你应该感到羞耻！」");
	say();
	var0014 = UI_remove_party_items(var0011, 0x0399, 0xFE99, 0x0001, false);
	gflags[0x017A] = true;
	goto labelFunc047B_03C1;
labelFunc047B_03BD:
	message("「你不可能带得走那么多金币。你必须等我能给你适当数量金币的时候再来！」");
	say();
labelFunc047B_03C1:
	UI_remove_answer("赢得的钱");
labelFunc047B_03C8:
	case "告辞" attend labelFunc047B_03D3:
	goto labelFunc047B_03D6;
labelFunc047B_03D3:
	goto labelFunc047B_0114;
labelFunc047B_03D6:
	endconv;
	message("「玩得开心。」*");
	say();
labelFunc047B_03DB:
	if (!(event == 0x0000)) goto labelFunc047B_03E9;
	Func092E(0xFF85);
labelFunc047B_03E9:
	return;
}


