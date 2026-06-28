#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func04E6 object#(0x4E6) ()
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

	if (!(event == 0x0001)) goto labelFunc04E6_0241;
	UI_show_npc_face(0xFF1A, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_wearing_fellowship();
	var0002 = Func0909();
	var0003 = Func0908();
	var0004 = "Avatar";
	var0005 = "a pseudonym";
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(gflags[0x0104] || gflags[0x0135])) goto labelFunc04E6_0059;
	UI_add_answer("Hook");
labelFunc04E6_0059:
	if (!(!gflags[0x02B3])) goto labelFunc04E6_006B;
	message("你看到一个穿着优雅且明显富有的海盗。他身上散发着发油的味道。");
	say();
	gflags[0x02B3] = true;
	goto labelFunc04E6_006F;
labelFunc04E6_006B:
	message("「什么事？」 Gordy 问。");
	say();
labelFunc04E6_006F:
	converse attend labelFunc04E6_023C;
	case "姓名" attend labelFunc04E6_0085:
	message("「我是 Gordy 。」他咧嘴大笑，向你伸出手。你注意到他的手不太干净。");
	say();
	UI_remove_answer("姓名");
labelFunc04E6_0085:
	case "职业" attend labelFunc04E6_0138:
	message("「我是游戏之屋的『老板 (The Mister) 』。在我的屋内你可以挑战你在几率游戏上的技巧。」他仔细地打量你，衡量你的价值和好骗程度。");
	say();
	if (!((var0000 == 0x0005) || ((var0000 == 0x0006) || ((var0000 == 0x0007) || (var0000 == 0x0000))))) goto labelFunc04E6_011A;
	message("「进来享受吧！但首先你必须登记。请在簿子上签名，这样我们才能核实你所声称的身价。」你签哪个名字？");
	say();
	var0006 = [var0003, var0004, var0005];
	var0007 = Func090B(var0006);
	if (!(var0007 == var0003)) goto labelFunc04E6_00E3;
	message("你签了你的名字。「很好，");
	message(var0003);
	message("。欢迎来到赌坊 (House of Games) ！」 Gordy 张开双臂做了一个夸张的姿势，显然很高兴能欢迎你的钱来到他的赌场。");
	say();
labelFunc04E6_00E3:
	if (!(var0007 == var0004)) goto labelFunc04E6_0103;
	message("当 Gordy 看到你写的名字时皱起眉头。「圣者，是吗？我们一周前才刚有一个。他在牌桌上作弊被抓到了！」他退后一步并怒视着。「你要给我们惹麻烦吗？」");
	say();
	if (!Func090A()) goto labelFunc04E6_00FF;
	message("「那你不能进来！」*");
	say();
	abort;
	goto labelFunc04E6_0103;
labelFunc04E6_00FF:
	message("「我们走着瞧！」");
	say();
labelFunc04E6_0103:
	if (!(var0007 == var0005)) goto labelFunc04E6_0117;
	message("你签了一个假名字。「好的，");
	message(var0002);
	message("。我很高兴欢迎你！」 Gordy 张开双臂做了一个夸张的姿势，显然很高兴能欢迎你的钱来到他的赌场。");
	say();
labelFunc04E6_0117:
	goto labelFunc04E6_011E;
labelFunc04E6_011A:
	message("「我希望在营业时间能在那里见到你。」");
	say();
labelFunc04E6_011E:
	if (!gflags[0x0006]) goto labelFunc04E6_0128;
	message("「啊，你是友谊会的成员。你肯定会在这里的牌桌上找到你的报偿！」 Gordy 眨眼并用手肘推了你一下，然后大声狂笑。");
	say();
labelFunc04E6_0128:
	UI_add_answer(["老板 (The Mister)", "赌坊 (House of Games)", "技巧"]);
labelFunc04E6_0138:
	case "赌坊 (House of Games)" attend labelFunc04E6_0158:
	message("「赌坊 (House of Games) 是六年前用……一位利益相关者的资金创建的。它吸引了来自全不列颠尼亚想要用他们的钱过危险生活的人。这门生意非常有利可图。」他拍了拍他的袋子，发出金币叮当的声音。「非常有利可图。」他笑着说。");
	say();
	UI_remove_answer("赌坊 (House of Games)");
	UI_add_answer(["靠山", "有利可图"]);
labelFunc04E6_0158:
	case "老板 (The Mister)" attend labelFunc04E6_0176:
	message("「这是指我是监督，但这里的每个人都一直叫我『老板 (The Mister) 』。我不确定为什么。但它很吸引我。」他像只小公鸡一样挺起胸膛，试图看起来很重要。他几乎成功了。");
	say();
	message("「而对你来说，那是『Gordy 先生』！」");
	say();
	UI_remove_answer("老板 (The Mister)");
	UI_add_answer("Gordy 先生");
labelFunc04E6_0176:
	case "Gordy 先生" attend labelFunc04E6_018D:
	message("「是的，我能为你做什么？」");
	say();
	message("他咧嘴笑了，对自己非常满意。");
	say();
	UI_remove_answer("Gordy 先生");
labelFunc04E6_018D:
	case "技巧" attend labelFunc04E6_01B0:
	message("「每个游戏都需要明确的技巧来决定最有利润的下注方式。许多来游戏之屋的访客发现他们有这种技巧。其他人，很可悲地，没有。」");
	say();
	if (!gflags[0x0006]) goto labelFunc04E6_01A9;
	if (!var0001) goto labelFunc04E6_01A9;
	message("他指着你的友谊会奖章。「你应该不会有任何问题。」他眨眨眼并挑了挑眉。");
	say();
labelFunc04E6_01A9:
	UI_remove_answer("技巧");
labelFunc04E6_01B0:
	case "有利可图" attend labelFunc04E6_01C3:
	message("「嗯，海盗巢穴 (Buccaneer's Den)不在不列颠尼亚税务委员会的管辖范围内。我们不受不列颠尼亚的税收约束。」 Gordy 邪恶地笑着。「而那……非常有利可图！」");
	say();
	UI_remove_answer("有利可图");
labelFunc04E6_01C3:
	case "Hook" attend labelFunc04E6_01F8:
	var0008 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc04E6_01ED;
	message("方块震动了一会儿。「是的，我非常了解 Hook 。他住在赌坊 (House of Games) 下面。去跟 Sintag 谈谈。他可以为你指路。」");
	say();
	goto labelFunc04E6_01F1;
labelFunc04E6_01ED:
	message("「我不认识符合那描述的人。」 Gordy 紧张地环顾四周，松了松衣领，好像它突然变紧了一样。");
	say();
labelFunc04E6_01F1:
	UI_remove_answer("Hook");
labelFunc04E6_01F8:
	case "靠山" attend labelFunc04E6_022E:
	var0008 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	if (!var0008) goto labelFunc04E6_0222;
	message("方块震动了一会儿。「当然是友谊会 。」");
	say();
	goto labelFunc04E6_0227;
labelFunc04E6_0222:
	message("「嗯，现在，……那样就会泄漏我的生意和利润的秘密了，不是吗？」当他向你靠近并咆哮时，他的举止变得具有威胁性：「去自己找靠山吧，小狗！」*");
	say();
	abort;
labelFunc04E6_0227:
	UI_remove_answer("靠山");
labelFunc04E6_022E:
	case "告辞" attend labelFunc04E6_0239:
	goto labelFunc04E6_023C;
labelFunc04E6_0239:
	goto labelFunc04E6_006F;
labelFunc04E6_023C:
	endconv;
	message("「再会，朋友。我期待你的归来。」*");
	say();
labelFunc04E6_0241:
	if (!(event == 0x0000)) goto labelFunc04E6_024F;
	Func092E(0xFF1A);
labelFunc04E6_024F:
	return;
}


