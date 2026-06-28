#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047C object#(0x47C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc047C_0448;
	UI_show_npc_face(0xFF84, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = false;
	var0003 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0004 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0005 = UI_is_dead(UI_get_npc_object(0xFF81));
	if (!(var0003 && (var0004 && var0005))) goto labelFunc047C_005F;
	var0002 = true;
labelFunc047C_005F:
	if (!(gflags[0x0168] && (!gflags[0x016A]))) goto labelFunc047C_0071;
	UI_add_answer("我有假旗帜");
labelFunc047C_0071:
	if (!(var0002 || gflags[0x016A])) goto labelFunc047C_0089;
	UI_add_answer("你现在安全了");
	UI_remove_answer("我有假旗帜");
labelFunc047C_0089:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0176])) goto labelFunc047C_00B6;
	message("你看到一个骨瘦如柴且看起来胆小的男人，他恐惧地看着你。");
	say();
	message("「喔，天啊！」他大叫。「这次真的是圣者！请不要伤害我，圣者！」");
	say();
	gflags[0x0176] = true;
	UI_add_answer("这次");
	goto labelFunc047C_00C0;
labelFunc047C_00B6:
	message("「再次问候你，");
	message(var0000);
	message("，」Sprellic 说。");
	say();
labelFunc047C_00C0:
	if (!gflags[0x0186]) goto labelFunc047C_00DB;
	if (!(!gflags[0x0170])) goto labelFunc047C_00DB;
	if (!(!gflags[0x016A])) goto labelFunc047C_00DB;
	UI_add_answer("冠军战士");
labelFunc047C_00DB:
	converse attend labelFunc047C_0443;
	case "姓名" attend labelFunc047C_00F1:
	message("「我的名字是 Sprellic。」");
	say();
	UI_remove_answer("姓名");
labelFunc047C_00F1:
	case "职业" attend labelFunc047C_010A:
	message("「我是 Jhelom 这里舖位与凳子(Bunk and Stool)的老板。」");
	say();
	UI_add_answer(["舖位与凳子", "Jhelom"]);
labelFunc047C_010A:
	case "舖位与凳子" attend labelFunc047C_0143:
	message("「这是当地的一家旅店，所有来自伤痕图书馆的战士都会来这里喝酒。如果不是 Ophelia 和 Daphne，他们每晚都会把这地方拆了。」");
	say();
	if (!(!(gflags[0x016A] || var0002))) goto labelFunc047C_012C;
	message("「但那已经不重要了，因为我很快就会死了。」");
	say();
	UI_add_answer("死了？");
labelFunc047C_012C:
	UI_remove_answer("舖位与凳子");
	UI_add_answer(["伤痕图书馆", "Ophelia", "Daphne"]);
labelFunc047C_0143:
	case "Jhelom" attend labelFunc047C_0156:
	message("「这是一个战士们通过血腥决斗来打发时间的城镇。这地方不适合我。我真不该离开 Minoc 的！」");
	say();
	UI_remove_answer("Jhelom");
labelFunc047C_0156:
	case "伤痕图书馆" attend labelFunc047C_0169:
	message("「那是 De Snel 大师经营的战士俱乐部！是全不列颠尼亚最凶猛、最无情的战士们的第二个家。」");
	say();
	UI_remove_answer("伤痕图书馆");
labelFunc047C_0169:
	case "Ophelia" attend labelFunc047C_017C:
	message("「Ophelia 是我的一位酒馆女侍。她很漂亮。如果 Daphne 无法应付那些变得不守规矩的顾客，Ophelia 会简单地用魅力迷住他们。」");
	say();
	UI_remove_answer("Ophelia");
labelFunc047C_017C:
	case "Daphne" attend labelFunc047C_018F:
	message("「Daphne 是我的一位酒馆女侍。她，呃，体型相当庞大。如果 Ophelia 无法迷住那些变得不守规矩的顾客，Daphne 就会把他们摔倒在地。」");
	say();
	UI_remove_answer("Daphne");
labelFunc047C_018F:
	case "这次", "死了？" attend labelFunc047C_01B2:
	message("「说来话长。我可能还没说完就死了。」");
	say();
	UI_remove_answer(["这次", "死了？"]);
	UI_add_answer("故事");
labelFunc047C_01B2:
	case "故事" attend labelFunc047C_01F3:
	message("「我的故事很离奇。这可能会让你感到不安和困惑。你确定你想听吗？」");
	say();
	var0006 = Func090A();
	if (!(!var0006)) goto labelFunc047C_01D9;
	message("「好吧，那么希望我曾对你有所帮助。永远别了，");
	message(var0000);
	message("。」*");
	say();
	abort;
	goto labelFunc047C_01EC;
labelFunc047C_01D9:
	message("「这一切都从前天晚上开始。我让 Ophelia 和 Daphne 放了一晚的假。一个陌生人来到了我的旅店……一个非常古怪的陌生人。");
	say();
	message("「他……他声称他是——圣者——！");
	say();
	message("「……而且我还相信了他，这证明了我有多容易上当！」");
	say();
	UI_add_answer("陌生人");
labelFunc047C_01EC:
	UI_remove_answer("故事");
labelFunc047C_01F3:
	case "陌生人" attend labelFunc047C_0224:
	message("「他的财富似乎是他唯一比古怪更胜一筹的地方。他订下了旅店里的两个房间，这样他就能试睡每张床，然后自己决定哪一张最舒服。至于食物，他简直是饥不择食。");
	say();
	if (!var0001) goto labelFunc047C_020C;
	message("「无意冒犯，但他也是友谊会的成员！」");
	say();
	goto labelFunc047C_0210;
labelFunc047C_020C:
	message("「他也是友谊会的成员！」");
	say();
labelFunc047C_0210:
	UI_remove_answer("陌生人");
	UI_add_answer(["古怪", "食物"]);
labelFunc047C_0224:
	case "古怪" attend labelFunc047C_0237:
	message("「我担心这个陌生人根本不是他所声称的那个人。我是一个巨大且可怕的骗局的受害者。」");
	say();
	UI_remove_answer("古怪");
labelFunc047C_0237:
	case "食物" attend labelFunc047C_0257:
	message("「这个陌生人点了菜单上每一种食物和饮料。这样如果他想吃什么，食物就在那里。我做了好几个小时的饭。但接着情况变得更糟了。他去睡觉了。」");
	say();
	UI_remove_answer("食物");
	UI_add_answer(["做饭", "睡觉"]);
labelFunc047C_0257:
	case "做饭" attend labelFunc047C_026A:
	message("「当然，他留下的大部分食物都没吃！一旦食物开始变坏，我就不得不把它们送人！」");
	say();
	UI_remove_answer("做饭");
labelFunc047C_026A:
	case "睡觉" attend labelFunc047C_0284:
	message("「他上床睡觉后，抱怨说太冷了。我给他拿了越来越多的毯子，但还是不够。最后，他把旅店里所有的毯子都拿走了。而且他还是觉得冷！」");
	say();
	UI_remove_answer("睡觉");
	UI_add_answer("冷");
labelFunc047C_0284:
	case "冷" attend labelFunc047C_02A4:
	message("「在绝望中，我跑到街上。那是半夜。所有的商店都关门了。我唯一能找到的，就是一块挂在墙上的旧挂毯。所以我就把它拿了下来。」");
	say();
	UI_remove_answer("冷");
	UI_add_answer(["夜晚", "挂毯"]);
labelFunc047C_02A4:
	case "夜晚" attend labelFunc047C_02B7:
	message("「其实，现在回想起来，在夜晚的空气中外出，那是一个相当宜人的夜晚。唉，当时我满脑子只想着为那位陌生人服务能赚到一笔可观的钱。我真悲哀！」");
	say();
	UI_remove_answer("夜晚");
labelFunc047C_02B7:
	case "挂毯" attend labelFunc047C_02D7:
	message("「我接下来记得的是，有一个愤怒的女人追着我。不知为何她想杀了我！我设法逃脱了她，回到旅店，用挂毯把陌生人盖上。最后他终于睡着了。」");
	say();
	UI_remove_answer("挂毯");
	UI_add_answer(["愤怒的女人", "睡着"]);
labelFunc047C_02D7:
	case "愤怒的女人" attend labelFunc047C_02EA:
	message("「其实，我以前见过这个愤怒的女人。她偶尔会光顾我的店。不幸的是，这是我们第一次正式打交道。」");
	say();
	UI_remove_answer("愤怒的女人");
labelFunc047C_02EA:
	case "睡着" attend labelFunc047C_030A:
	message("「我也睡着了，只是我睡过头了。当我醒来时，客人已经走了。他没付帐单，还拿走了所有的毯子，甚至那块挂毯。在我能去找他之前，我有了一位访客。」");
	say();
	UI_remove_answer("睡着");
	UI_add_answer(["走了", "访客"]);
labelFunc047C_030A:
	case "走了" attend labelFunc047C_031D:
	message("「就像我说的，我被一个专业人士骗了。毫无疑问是个犯罪大师——而且他现在还消遥法外！」");
	say();
	UI_remove_answer("走了");
labelFunc047C_031D:
	case "访客" attend labelFunc047C_033D:
	message("「是前天晚上追我的那个女人。她的名字叫 Syria。她说我从伤痕图书馆的墙上偷走了荣誉旗帜。她还向我挑战一场生死决斗，除非我把旗帜还回去。而且她比我高大多了！当我试图解释我无法还回去时，她打了我。很痛。非常痛！」");
	say();
	UI_remove_answer("访客");
	UI_add_answer(["打", "决斗"]);
labelFunc047C_033D:
	case "打" attend labelFunc047C_0350:
	message("「我必须说 Syria 女士这点。她生气的时候非常漂亮……至少，她打了我之后，在我脑海中盘旋的她的幻影是非常漂亮的。可悲的是，我醒了。」");
	say();
	UI_remove_answer("打");
labelFunc047C_0350:
	case "决斗" attend labelFunc047C_037E:
	message("「那天晚些时候，我遇到了一个名叫 Vokes 的男人。他是伤痕图书馆的一名战士。他要求我归还荣誉旗帜，当我试图告诉他我办不到时，他打了我。然后他向我挑战一场生死决斗，要在我和 Syria 的决斗之后马上进行。");
	say();
	message("「Vokes 离开后，我遇到了一个名叫 Timmons 的男人。他要求我将荣誉旗帜归还给伤痕图书馆。我告诉他我办不到，他也向我挑战一场生死决斗。我告诉他我很忙，但他把挑战安排在我和 Vokes 的决斗之后马上进行。");
	say();
	message("「Timmons、Vokes 和 Syria 是 Jhelom 最强悍的三名战士。我连对抗他们其中一个都无法存活，更何况是三个。那个神秘的客人和荣誉旗帜都不知去向。就连现在，我的酒馆女侍们都在拿我的死法下注！」");
	say();
	UI_remove_answer("决斗");
	UI_add_answer(["Timmons", "Vokes", "Syria", "死法"]);
labelFunc047C_037E:
	case "Timmons" attend labelFunc047C_0391:
	message("「Timmons 最近才来到 Jhelom。关于他，我无法告诉你更多了。」");
	say();
	UI_remove_answer("Timmons");
labelFunc047C_0391:
	case "Vokes" attend labelFunc047C_03A4:
	message("「他是一个无所畏惧的战士，珍惜任何战斗的机会。要小心他。」");
	say();
	UI_remove_answer("Vokes");
labelFunc047C_03A4:
	case "Syria" attend labelFunc047C_03B7:
	message("「她并没有看起来那么糟。毫无疑问，那个女人脾气不好。但我确信，一旦你有机会了解她，她其实是相当不错的。如果不是这些悲惨的情况，我们也许有机会更进一步认识彼此。」");
	say();
	UI_remove_answer("Syria");
labelFunc047C_03B7:
	case "死法" attend labelFunc047C_03D5:
	message("「我唯一的生存希望是找到一位能与 Jhelom 最凶猛战士对抗的冠军战士。」");
	say();
	gflags[0x0186] = true;
	UI_remove_answer("死法");
	UI_add_answer("冠军战士");
labelFunc047C_03D5:
	case "冠军战士" attend labelFunc047C_0403:
	message("「你愿意成为我的冠军战士吗，圣者？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc047C_03F8;
	message("Sprellic 充满感激地跪在你面前。「圣者，你救了我的命！我对你感激不尽！」");
	say();
	gflags[0x0170] = true;
	goto labelFunc047C_03FC;
labelFunc047C_03F8:
	message("「喔，好吧。我别无选择，只能问问。」");
	say();
labelFunc047C_03FC:
	UI_remove_answer("冠军战士");
labelFunc047C_0403:
	case "你现在安全了" attend labelFunc047C_041E:
	message("你告诉 Sprellic 情况已经解决了，以及事情是如何解决的。");
	say();
	message("Sprellic 几乎要亲吻你的脚了。");
	say();
	message("「我该如何感谢你？你是我见过最高尚的人！我将永远欠你一份情！谢谢你！」");
	say();
	UI_remove_answer("你现在安全了");
labelFunc047C_041E:
	case "我有假旗帜" attend labelFunc047C_0435:
	message("你告诉 Sprellic，Kliftin 为你做了一面假旗帜。");
	say();
	message("「多么巧妙啊！拜托你！请尽快把它交给 Syria！感谢你费心帮我！」");
	say();
	UI_remove_answer("我有假旗帜");
labelFunc047C_0435:
	case "告辞" attend labelFunc047C_0440:
	goto labelFunc047C_0443;
labelFunc047C_0440:
	goto labelFunc047C_00DB;
labelFunc047C_0443:
	endconv;
	message("「祝你有个美好的一天，圣者。」");
	say();
labelFunc047C_0448:
	if (!(event == 0x0000)) goto labelFunc047C_0456;
	Func092E(0xFF84);
labelFunc047C_0456:
	return;
}


