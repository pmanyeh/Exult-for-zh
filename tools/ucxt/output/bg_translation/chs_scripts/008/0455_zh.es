#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0455 object#(0x455) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0455_01D9;
	UI_show_npc_face(0xFFAB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0110])) goto labelFunc0455_0041;
	message("你看到一位英俊的工匠，有着强烈、敏锐的目光。");
	say();
	gflags[0x0110] = true;
	goto labelFunc0455_0045;
labelFunc0455_0041:
	message("Gladstone 和你握手，你能感觉到他的手掌上还沾着一丝雕塑用的黏土。虽然他几乎不认识你，但他把你当老朋友一样对待。");
	say();
labelFunc0455_0045:
	converse attend labelFunc0455_01D4;
	case "姓名" attend labelFunc0455_0061:
	message("「我的名字是 Gladstone ，");
	message(var0000);
	message("。为你服务。」");
	say();
	UI_remove_answer("姓名");
labelFunc0455_0061:
	case "职业" attend labelFunc0455_0095:
	if (!gflags[0x011F]) goto labelFunc0455_0086;
	message("「我是一名吹玻璃工和雕塑家。我主要制作瓶子和碗。但在过去，我也用玻璃制作过各种雕像。」");
	say();
	UI_add_answer(["玻璃", "艺术家公会", "Minoc"]);
	goto labelFunc0455_0095;
labelFunc0455_0086:
	message("男人的眼睛打量了你一会儿。「你不知道发生了什么事吗？我们当地的锯木工 William 在他的锯木厂里发现两个吉普赛人被谋杀了。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc0455_0095:
	case "Minoc" attend labelFunc0455_00BB:
	message("「 Minoc 这里活跃的商业足以让艺术家公会在财务上保持偿付能力。但在最近几个星期里，我开始担心我们可能撑不了多久。不像友谊会或是 Owen 的纪念碑，我们没有太大的政治权力。现在发生的其他事件让我们的麻烦显得不那么重要了。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["友谊会", "纪念碑", "权力", "事件"]);
labelFunc0455_00BB:
	case "权力" attend labelFunc0455_00CE:
	message("「艺术家公会被不列颠尼亚税务委员会无情地征税。即使在我们情况最好的一年，要维持收支平衡也是一场挣扎。看来我们并没有被认为重要到能获得公平的机会。」");
	say();
	UI_remove_answer("权力");
labelFunc0455_00CE:
	case "事件" attend labelFunc0455_00E8:
	message("「你肯定听说过 Frederico 和 Tania 的谋杀案了吧？！」");
	say();
	UI_remove_answer("事件");
	UI_add_answer("谋杀案");
labelFunc0455_00E8:
	case "艺术家公会" attend labelFunc0455_00FB:
	message("「艺术家公会是一群当地工匠的组织。我们在 Minoc 这里贩卖我们的商品。虽然我们是一个由平等成员组成的公会，但我暂时担任公会的会长。」");
	say();
	UI_remove_answer("艺术家公会");
labelFunc0455_00FB:
	case "谋杀案" attend labelFunc0455_0115:
	message("「一想到在我们美丽的城镇里竟会如此轻易地发生这种卑劣的行为，我就不寒而栗。你正在调查这件事吗？我祝你在追查犯人时一切顺利。我几乎不认识 Frederico 或 Tania ，但我确实见过他们的儿子 Sasha 一次。」");
	say();
	UI_add_answer("Sasha");
	UI_remove_answer("谋杀案");
labelFunc0455_0115:
	case "Sasha" attend labelFunc0455_0128:
	message("「他与 Seara 交了朋友，并在我们这里住过一晚。他似乎是个不错的年轻人，但误入歧途了。」");
	say();
	UI_remove_answer("Sasha");
labelFunc0455_0128:
	case "友谊会" attend labelFunc0455_015D:
	message("「我们和那些人相处得不是很好。我相信自从艺术家公会的所有成员都拒绝 Elynor 的入会邀请后，我们就已经被非正式地标记为友谊会的敌人了。他们不喜欢我们，因为他们认为我们无意于团结。」");
	say();
	if (!var0001) goto labelFunc0455_0156;
	message("「你把我们当作你的敌人吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0455_0152;
	message("「那就从我眼前消失！我不想跟你说话！」");
	say();
	abort;
	goto labelFunc0455_0156;
labelFunc0455_0152:
	message("「那么我暂且相信你。但要知道，为了保护我们的公会，我必须做我该做的事。」");
	say();
labelFunc0455_0156:
	UI_remove_answer("友谊会");
labelFunc0455_015D:
	case "纪念碑" attend labelFunc0455_0186:
	if (!(!gflags[0x00F7])) goto labelFunc0455_017A;
	message("「造船匠 Owen 正委托人在城镇中心建造一座他自己的雕像。艺术家公会当然决定与这种愚蠢的行为毫无牵扯。但光是这座雕像的消息传开，现在订单就从不列颠尼亚各地涌来。商人们希望由『著名的』 Minoc 造船大师 Owen 来建造船只。」");
	say();
	UI_add_answer("雕像");
	goto labelFunc0455_017F;
labelFunc0455_017A:
	message("「哦，对了，这提醒了我！恐怕我不能聊太久。毕竟，城镇中心有一块空荡荡的石板，现在上面什么也没有。镇长委托我们创作一些东西来填补那个空白。除了这会是非常棒的作品之外，我不想多说什么。还需要相当长的一段时间才能准备好，但一旦完成，我希望你那时候能回到 Minoc 来看看它。也许在更好的时机。那么，再会了。」*");
	say();
	abort;
labelFunc0455_017F:
	UI_remove_answer("纪念碑");
labelFunc0455_0186:
	case "雕像" attend labelFunc0455_01A0:
	message("「我担心我们严重地失算了，以为如果我们抵制这座雕像，它就不会被建造。似乎所有的谈论已经把 Owen 变成了这个地区某种奇怪的传奇人物，而那该死的雕像甚至还没立起来呢！但我担心，这还不是情况最糟糕的部分。」");
	say();
	UI_remove_answer("雕像");
	UI_add_answer("最糟糕");
labelFunc0455_01A0:
	case "最糟糕" attend labelFunc0455_01B3:
	message("「一旦雕像建成，造船的订单肯定会增加得更多！用不了多久，所有当地的商业都会受到影响。 Owen 将会购买更多当地资源，这会导致价格上涨，特别是在锯木厂，而那肯定会迫使艺术家公会破产。」");
	say();
	UI_remove_answer("最糟糕");
labelFunc0455_01B3:
	case "玻璃" attend labelFunc0455_01C6:
	message("「我很遗憾目前没有任何作品可供出售。就像我们其他的艺术家一样，我积压了许多订单，在可预见的未来里我都会很忙碌。但在公会大厅里展出着几件我最引以为傲的作品。如果你有兴趣，请去看看。」");
	say();
	UI_remove_answer("玻璃");
labelFunc0455_01C6:
	case "告辞" attend labelFunc0455_01D1:
	goto labelFunc0455_01D4;
labelFunc0455_01D1:
	goto labelFunc0455_0045;
labelFunc0455_01D4:
	endconv;
	message("「旅途顺利，我的朋友。」*");
	say();
labelFunc0455_01D9:
	if (!(event == 0x0000)) goto labelFunc0455_01E7;
	Func092E(0xFFAB);
labelFunc0455_01E7:
	return;
}


