#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0919 0x919 ();
extern void Func092E 0x92E (var var0000);

void Func0458 object#(0x458) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0458_01FE;
	UI_show_npc_face(0xFFA8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0113])) goto labelFunc0458_0048;
	message("你看到一位英俊、看起来很有创造力的年轻人。");
	say();
	gflags[0x0113] = true;
	goto labelFunc0458_0052;
labelFunc0458_0048:
	message("「你好，");
	message(var0000);
	message("，」Seara 说。");
	say();
labelFunc0458_0052:
	converse attend labelFunc0458_01F3;
	case "姓名" attend labelFunc0458_006E:
	message("「我叫做 Seara ，");
	message(var0000);
	message("。很高兴见到你。」");
	say();
	UI_remove_answer("姓名");
labelFunc0458_006E:
	case "职业" attend labelFunc0458_00A5:
	if (!gflags[0x011F]) goto labelFunc0458_0090;
	message("「我是 Minoc 当地艺术家公会的成员。」");
	say();
	UI_add_answer(["艺术家公会", "Minoc"]);
	goto labelFunc0458_00A5;
labelFunc0458_0090:
	message("「拜托，");
	message(var0000);
	message("，现在可不是用这种随便的语气说话的时候！就在离这里不远的地方，发生了不只一起，而是两起谋杀案！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc0458_00A5:
	case "艺术家公会" attend labelFunc0458_00C8:
	message("「是的，我们 Minoc 这里有一个艺术家公会。我是其中一员。其他成员还有 Xanthia 和 Gladstone 。你可以在那里买到不列颠尼亚各地能找到的最精美的工艺品。例如我，就是制作时钟的。」");
	say();
	UI_add_answer(["Xanthia", "Gladstone", "时钟"]);
	UI_remove_answer("艺术家公会");
labelFunc0458_00C8:
	case "Xanthia" attend labelFunc0458_00DB:
	message("「 Xanthia 是个非常有才华的年轻女子。她制作非常精致且独特的烛台。」");
	say();
	UI_remove_answer("Xanthia");
labelFunc0458_00DB:
	case "Gladstone" attend labelFunc0458_00EE:
	message("「 Gladstone 是一位雕塑家兼吹玻璃工。他也负责公会大部分的商业决策。」");
	say();
	UI_remove_answer("Gladstone");
labelFunc0458_00EE:
	case "时钟" attend labelFunc0458_0101:
	message("「我制作各种类型的时钟和手表，它们能可靠地将时间精确到秒。我很乐意卖给你一个，但现在我积压了两年的订单要赶。」");
	say();
	UI_remove_answer("时钟");
labelFunc0458_0101:
	case "Minoc" attend labelFunc0458_0121:
	message("「在要建造纪念碑以及现在发生这些谋杀案之前，我一直认为这个城镇是个适合居住的好地方。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["纪念碑", "谋杀案"]);
labelFunc0458_0121:
	case "谋杀案" attend labelFunc0458_013B:
	message("「这太可怕了。 Frederico 和 Tania 当时正在寻找他们的儿子 Sasha 。他离家出走去加入友谊会了。这种事怎么会发生在他们身上？」Seara 缓缓地摇了摇头。");
	say();
	UI_remove_answer("谋杀案");
	UI_add_answer("Sasha");
labelFunc0458_013B:
	case "Sasha" attend labelFunc0458_017B:
	if (!(!gflags[0x00FF])) goto labelFunc0458_0169;
	message("「几个星期前，当他来到镇上寻找当地友谊会分会时，我见过他。我曾让他在公会大厅住过一晚。他说如果他父亲知道他想加入友谊会，就会打他，我相信他的话。 Sasha 的父亲可能是个残酷的人。他基本上是个好小伙子，就像我们很多人一样，只是在寻找真理。不幸的是，他找错了地方。」");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer(["吉普赛人", "友谊会"]);
	gflags[0x00FF] = true;
	goto labelFunc0458_017B;
labelFunc0458_0169:
	message("「自从我们上次谈到 Sasha 之后，我就再也没见过或听说过他的消息了。我不知道他是否加入了友谊会。」");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer("友谊会");
labelFunc0458_017B:
	case "吉普赛人" attend labelFunc0458_018E:
	message("「他们的营地就在镇外不远处。他们剩下的人不多了。我知道 Sasha 的姑姑 Margareta 是个不可思议的占卜师。只要几枚金币，她就能告诉你很多可能对你非常有用的事情。」");
	say();
	UI_remove_answer("吉普赛人");
labelFunc0458_018E:
	case "友谊会" attend labelFunc0458_01B8:
	if (!var0001) goto labelFunc0458_01A3;
	message("「无意冒犯，但我不认同你的信仰。事实上，我认为你们友谊会里很少有成员是真心诚意地谈论团结、信任和价值的。不过 Sasha 已经够大，能自己做决定了，虽然我很后悔那天晚上没有把他送回家。」");
	say();
	goto labelFunc0458_01B1;
labelFunc0458_01A3:
	Func0919();
	message("「不，我不是成员之类的，但我听 Sasha 说过那么多次基本教义，我都能背下来了。我从未试图劝阻他加入友谊会，即使我根本不信那一套。我认为 Sasha 已经大到可以开始为自己做决定了。现在我真的很后悔在看到他的那一刻没有把他送回家。」");
	say();
	UI_remove_answer("理念");
labelFunc0458_01B1:
	UI_remove_answer("友谊会");
labelFunc0458_01B8:
	case "纪念碑" attend labelFunc0458_01D2:
	message("「那个造船匠 Owen 是个自以为是的傻瓜。他的雕像只不过是他为这个城镇带来所有伤害与反感的纪念碑而已。我简直不敢相信，这种毫无意义且明显的闹剧，竟然会危及我们公会的未来。」");
	say();
	UI_remove_answer("纪念碑");
	UI_add_answer("未来");
labelFunc0458_01D2:
	case "未来" attend labelFunc0458_01E5:
	message("「这件事你最好去问 Gladstone 。」");
	say();
	UI_remove_answer("未来");
labelFunc0458_01E5:
	case "告辞" attend labelFunc0458_01F0:
	goto labelFunc0458_01F3;
labelFunc0458_01F0:
	goto labelFunc0458_0052;
labelFunc0458_01F3:
	endconv;
	message("「祝你有个愉快的一天，");
	message(var0000);
	message("。一定要再来看我们。」*");
	say();
labelFunc0458_01FE:
	if (!(event == 0x0000)) goto labelFunc0458_020C;
	Func092E(0xFFA8);
labelFunc0458_020C:
	return;
}


