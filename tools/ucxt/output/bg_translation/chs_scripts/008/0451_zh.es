#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func087B 0x87B ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0451 object#(0x451) ()
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

	if (!(event == 0x0001)) goto labelFunc0451_048E;
	UI_show_npc_face(0xFFAF, 0x0000);
	var0000 = UI_wearing_fellowship();
	var0001 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	var0002 = Func0909();
	var0003 = UI_part_of_day();
	var0004 = UI_get_schedule_type(UI_get_npc_object(0xFFAF));
	if (!(var0003 == 0x0007)) goto labelFunc0451_0064;
	if (!(var0004 == 0x001C)) goto labelFunc0451_0064;
	message("「仪式开始的时间到了。」Elynor 说。");
	say();
	Func087B();
labelFunc0451_0064:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0087]) goto labelFunc0451_0081;
	UI_add_answer("Elizabeth 和 Abraham");
labelFunc0451_0081:
	var0005 = Func08F7(0xFFAE);
	if (!var0005) goto labelFunc0451_00A1;
	if (!(var0004 == 0x0010)) goto labelFunc0451_00A1;
	UI_add_answer("Gregor");
labelFunc0451_00A1:
	if (!gflags[0x0125]) goto labelFunc0451_00AE;
	UI_add_answer("烛台");
labelFunc0451_00AE:
	if (!(!gflags[0x010C])) goto labelFunc0451_00C0;
	message("你看到一位举止优雅但带有一丝傲慢的女人。");
	say();
	gflags[0x010C] = true;
	goto labelFunc0451_00CA;
labelFunc0451_00C0:
	message("「你是在跟我说话吗，");
	message(var0002);
	message("？」Elynor 问道。");
	say();
labelFunc0451_00CA:
	converse attend labelFunc0451_0489;
	case "姓名" attend labelFunc0451_00E0:
	message("她挺直了肩膀，直视着你的眼睛。~~「我是 Elynor 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0451_00E0:
	case "职业" attend labelFunc0451_0161:
	if (!gflags[0x011F]) goto labelFunc0451_0152;
	message("「我是 Minoc 这里友谊会分会的首席顾问。我们是一个寻求灵性成长的社团，致力于发挥我们的最高潜力，提升自我价值，以及兄弟之间的团结和信任。");
	say();
	if (!(!gflags[0x0096])) goto labelFunc0451_0111;
	message("「也许你希望加入我们的友谊会？」");
	say();
	if (!Func090A()) goto labelFunc0451_010A;
	message("「这对友谊会来说的确是个伟大的一天！去不列颠城找巴特林。他是我们的创始人。让圣者加入友谊会这份莫大的荣耀，理应只保留给他。」");
	say();
	goto labelFunc0451_010E;
labelFunc0451_010A:
	message("「从你的眼神我能看出，你缺乏勇气迈出你生命中这至关重要的一步。也许很快有一天你会准备好。」~~她轻蔑地看着你。「我们等着看……」");
	say();
labelFunc0451_010E:
	goto labelFunc0451_0115;
labelFunc0451_0111:
	message("「啊——不过这些你都知道了。」");
	say();
labelFunc0451_0115:
	if (!(gflags[0x008F] && (!(gflags[0x0109] || (gflags[0x0102] || gflags[0x011E]))))) goto labelFunc0451_0133;
	message("「我现在想起巴特林给我的一条信息。我一直在等你。你被派来运送我们的包裹。你现在可以把它交出来了。」");
	say();
	UI_add_answer("交货");
labelFunc0451_0133:
	if (!(var0000 && (!gflags[0x0006]))) goto labelFunc0451_0142;
	message("Elynor 注意到你的护身符。「我认为你还不应该戴着这个护身符。你还没有被正式引入友谊会！恐怕我必须通知巴特林你的谎言！」");
	say();
labelFunc0451_0142:
	UI_add_answer(["Minoc", "友谊会"]);
	goto labelFunc0451_0161;
labelFunc0451_0152:
	message("「你挑了一个最不合适的时间来进行这种闲聊。也许你会对刚在这座锯木厂里发现的两起谋杀案感兴趣！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc0451_0161:
	case "Minoc" attend labelFunc0451_0199:
	if (!(!gflags[0x00F7])) goto labelFunc0451_0187;
	message("「我们应该努力把这些谋杀案抛在脑后。 Minoc 很快就会作为一个建造宏伟船只的城市在不列颠尼亚闻名。在市中心甚至将竖立一座雕像来纪念我们的造船匠 Owen 。他是我们社区中技术娴熟且受人重视的成员，当然，他也是友谊会的成员。」");
	say();
	UI_add_answer(["谋杀案", "Owen", "友谊会"]);
	goto labelFunc0451_0192;
labelFunc0451_0187:
	message("「我们的城市不像不列颠城那么伟大，但作为商业中心和矿产而广为人知。 Owen 遗产带来的小小尴尬会随着时间消退。」");
	say();
	UI_add_answer("Owen");
labelFunc0451_0192:
	UI_remove_answer("Minoc");
labelFunc0451_0199:
	case "谋杀案" attend labelFunc0451_01D3:
	message("「我对生命的消逝感到悲伤，但不能说我感到惊讶。 Frederico 和 Tania 是充满敌意的人。大多数吉普赛人也是如此。当然，我个人对他们没有意见。」");
	say();
	UI_add_answer(["敌意", "吉普赛人"]);
	UI_remove_answer("谋杀案");
	if (!gflags[0x0040]) goto labelFunc0451_01C6;
	UI_add_answer("皇冠宝石号");
labelFunc0451_01C6:
	if (!gflags[0x0043]) goto labelFunc0451_01D3;
	UI_add_answer("Hook");
labelFunc0451_01D3:
	case "交货" attend labelFunc0451_0379:
	var0006 = false;
	var0007 = UI_find_object(0xFE9B, 0x031E, 0x0001, 0xFE99);
	var0008 = UI_find_object(0xFE9B, 0x031F, 0x0001, 0xFE99);
	var0009 = 0x0000;
	if (!var0008) goto labelFunc0451_0227;
	var0009 = UI_find_object(var0008, 0x031D, 0x0008, 0xFE99);
	goto labelFunc0451_0240;
labelFunc0451_0227:
	if (!var0007) goto labelFunc0451_0240;
	var0009 = UI_find_object(var0007, 0x031D, 0x0008, 0xFE99);
labelFunc0451_0240:
	if (!var0009) goto labelFunc0451_024A;
	var0006 = true;
labelFunc0451_024A:
	if (!(var0007 || var0008)) goto labelFunc0451_036E;
	message("你拿出包裹并把它举在 Elynor 面前。她的目光从你身上移到包裹，然后又回到你身上。~~「你肯定被指示过不要打开包裹。尽管如此，你打开它了吗？」");
	say();
	if (!Func090A()) goto labelFunc0451_02E8;
	message("「你很清楚你被指示要原封不动地送达包裹。身为友谊会的成员，你明白我们必须配得上我们追求的回报。既然你辜负了巴特林的信任，任何报酬都被没收了。他将会被告知这个轻率的举动，而他不会高兴的。」~~她从你手中接过盒子。");
	say();
	if (!var0007) goto labelFunc0451_02AC;
	message("「胡说八道。这包裹仍然密封得很好。」她怀疑地盯着你。~~「我不知道你为什么要声称它被打开了，但你必须学会更好地信任你的兄弟。既然盒子完好无损，你将会得到你的奖赏，但你的行为将会被向上报告。小心点，我的兄弟。」");
	say();
	var000A = UI_add_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc0451_02A5;
	message("她交给你 50 枚金币。");
	say();
	gflags[0x0109] = true;
	Func0911(0x01F4);
	UI_remove_item(var0009);
	UI_remove_item(var0007);
	goto labelFunc0451_02A9;
labelFunc0451_02A5:
	message("「你拿不下你的奖赏了！天啊，你的旅行的确很成功。那么，你必须忍受进一步的考验。等你拿得动额外的金币时，把密封的盒子还给我，你就会得到你应得的报酬。」");
	say();
labelFunc0451_02A9:
	goto labelFunc0451_02E5;
labelFunc0451_02AC:
	if (!var0006) goto labelFunc0451_02CA;
	message("她检查了盒子内部。~~「啊，很好。至少里面的东西还完好无损。有罪的人只是他自己好奇心的受害者，而不是真正的小偷。」~~她上下打量着你。「你很可能还是会学着成为我们杰出会员中相称的一员。我们等着看。」");
	say();
	UI_remove_item(var0009);
	gflags[0x0102] = true;
	Func0911(0x01F4);
	goto labelFunc0451_02DE;
labelFunc0451_02CA:
	message("她检查了盒子内部。~~「我看到盒子里面的东西不见了。你若不是个小偷，或者至少，作为一个信使非常不尽责。不管怎样，");
	message(var0002);
	message("，盒子被洗劫一空了！」~~她上下打量着你。「巴特林将会被告知这项……进展。」");
	say();
	gflags[0x011E] = true;
	Func0911(0x01F4);
labelFunc0451_02DE:
	UI_remove_item(var0008);
labelFunc0451_02E5:
	goto labelFunc0451_036B;
labelFunc0451_02E8:
	if (!var0007) goto labelFunc0451_032E;
	var000A = UI_add_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000A) goto labelFunc0451_0327;
	message("Elynor 从你手中接过包裹。~~「你做得非常好。现在如约定的，这是你的报酬。」");
	say();
	gflags[0x0109] = true;
	Func0911(0x01F4);
	UI_remove_item(var0009);
	UI_remove_item(var0007);
	goto labelFunc0451_032B;
labelFunc0451_0327:
	message("「你拿不下你的奖赏了！天啊，你的旅行的确很成功。那么，你必须忍受进一步的考验。等你拿得动额外的金币时，把密封的盒子还给我，你就会得到你应得的报酬。」");
	say();
labelFunc0451_032B:
	goto labelFunc0451_036B;
labelFunc0451_032E:
	message("Elynor 从你手中接过包裹。检查它时，她立刻注意到它被打开过了。~~「^");
	message(var0002);
	message("！盒子是开着的！像你这样尽责的人，肯定不会被抢了吧？」");
	say();
	if (!var0006) goto labelFunc0451_0356;
	message("她检查了盒子内部。~~「啊，很好。至少里面的东西还完好无损。有罪的人只是他自己好奇心的受害者，而不是真正的小偷。」~~她上下打量着你。「你很可能还是会学着成为我们杰出会员中相称的一员。我们等着看。」~~她哼了一声。「当然，这将会被报告给巴特林。」");
	say();
	UI_remove_item(var0009);
	gflags[0x0102] = true;
	Func0911(0x01F4);
	goto labelFunc0451_0364;
labelFunc0451_0356:
	message("窥视里面，她勃然大怒。「看起来你被抢了。显然，既然你辜负了巴特林托付给你的责任，你将不会收到任何报酬。」~~「巴特林将会被告知这个轻率的举动。」");
	say();
	gflags[0x011E] = true;
	Func0911(0x01F4);
labelFunc0451_0364:
	UI_remove_item(var0008);
labelFunc0451_036B:
	goto labelFunc0451_0372;
labelFunc0451_036E:
	message("「你现在没有把它带在身上吗？直到你亲手交给我，你才会得到报酬。我真希望你把它藏在一个安全的地方。」");
	say();
labelFunc0451_0372:
	UI_remove_answer("交货");
labelFunc0451_0379:
	case "Owen" attend labelFunc0451_039A:
	if (!(!gflags[0x00F7])) goto labelFunc0451_038F;
	message("「他是友谊会为一个人的生命带来巨大改变的典型例子。在他加入友谊会之前，他缺乏自信，并准备放弃他的手艺。现在，他即将被公认为世界上最优秀的手艺人。」");
	say();
	goto labelFunc0451_0393;
labelFunc0451_038F:
	message("Elynor 翻了个白眼。「哦，拜托！」她说，听起来很恼火。「这些天我不关心像他这样的人。」");
	say();
labelFunc0451_0393:
	UI_remove_answer("Owen");
labelFunc0451_039A:
	case "敌意" attend labelFunc0451_03AD:
	message("「 Frederico 和 Tania 把我们友谊会的所有成员当作有病一样对待。特别是 Frederico 经常欺负我们的成员。你也知道，我们是和平主义者，这是常识。他甚至在他自己的人民中都有残酷的名声。他落得暴毙的下场并不令人惊讶。」");
	say();
	UI_remove_answer("敌意");
labelFunc0451_03AD:
	case "友谊会" attend labelFunc0451_03C0:
	message("「友谊会在 Minoc 备受推崇。甚至连镇长本人也是成员。是我亲自带他加入友谊会的。他是我们当地分会的第一位新成员。这里友谊会的负责人 Gregor ，主管着不列颠尼亚矿业公司。许多友谊会的成员都会经过 Minoc 。」");
	say();
	UI_remove_answer("友谊会");
labelFunc0451_03C0:
	case "Elizabeth 和 Abraham" attend labelFunc0451_03E5:
	if (!(!gflags[0x0217])) goto labelFunc0451_03DA;
	message("「你刚好错过他们了！他们在这里筹集资金。他们已经前往 Paws 去拜访我们在那里的庇护所。」");
	say();
	gflags[0x0105] = true;
	goto labelFunc0451_03DE;
labelFunc0451_03DA:
	message("「自从他们上次来这里之后，我就没见过 Elizabeth 和 Abraham 了。」");
	say();
labelFunc0451_03DE:
	UI_remove_answer("Elizabeth 和 Abraham");
labelFunc0451_03E5:
	case "Hook" attend labelFunc0451_0405:
	if (!var0001) goto labelFunc0451_03FA;
	message("方块震动着。「 Hook 住在大海盗窝的某个地方。我不知道在哪里。」");
	say();
	goto labelFunc0451_03FE;
labelFunc0451_03FA:
	message("「一个叫 Hook 的男人？我确定我会记得见过那样的人，而且…我肯定，这与我曾经接触过的任何友谊会成员的描述…都不相符。」");
	say();
labelFunc0451_03FE:
	UI_remove_answer("Hook");
labelFunc0451_0405:
	case "皇冠宝石号" attend labelFunc0451_0425:
	if (!var0001) goto labelFunc0451_041A;
	message("方块震动着。「那是 Hook 的船。我有一段时间没看到它了。」");
	say();
	goto labelFunc0451_041E;
labelFunc0451_041A:
	message("「在我们繁忙的港口里有许多船只来来去去。我不知道有哪一艘特定的船。也许你应该去问 Owen 。」");
	say();
labelFunc0451_041E:
	UI_remove_answer("皇冠宝石号");
labelFunc0451_0425:
	case "Gregor" attend labelFunc0451_0438:
	message("「你竟敢偷窥我和 Gregor 共享我们的时光？！你没有羞耻心吗？！我和 Gregor 也有像任何恋人一样享有隐私的权利！」");
	say();
	UI_remove_answer("Gregor");
labelFunc0451_0438:
	case "烛台" attend labelFunc0451_0468:
	if (!var0001) goto labelFunc0451_044D;
	message("方块震动着。「那个烛台被不小心留在了谋杀现场。 Hook 和 Forskis 变得粗心大意了。」");
	say();
	goto labelFunc0451_0461;
labelFunc0451_044D:
	message("「是的，友谊会委托 Xanthia 制作了你所描述的烛台。它的设计融入了我们的三个宗旨：代表团结（Unity）的『U』，代表信任（Trust）的『T』，和代表价值（Worthiness）的『W』。」");
	say();
	message("你告诉 Elynor 它是在谋杀现场被发现的。 Elynor 显得有些惊讶。");
	say();
	message("「我无法想像为什么它会在那里。肯定是有人试图牵连友谊会！」");
	say();
	message("她想了一会儿。");
	say();
	message("「如果你问我，我敢打赌 Frederico 和 Tania 是被他们自己人谋杀的，然后另一个吉普赛人把烛台放在现场以牵连我们。那些吉普赛人为了得到一点黄金，连自己的母亲都敢杀！」");
	say();
labelFunc0451_0461:
	UI_remove_answer("烛台");
labelFunc0451_0468:
	case "吉普赛人" attend labelFunc0451_047B:
	message("「他们在城镇东南方扎营。靠近锯木厂。你难道不觉得这很可疑吗？」");
	say();
	UI_remove_answer("吉普赛人");
labelFunc0451_047B:
	case "告辞" attend labelFunc0451_0486:
	goto labelFunc0451_0489;
labelFunc0451_0486:
	goto labelFunc0451_00CA;
labelFunc0451_0489:
	endconv;
	message("「我有一种感觉，我们还会再见面的。」*");
	say();
labelFunc0451_048E:
	if (!(event == 0x0000)) goto labelFunc0451_049C;
	Func092E(0xFFAF);
labelFunc0451_049C:
	return;
}


