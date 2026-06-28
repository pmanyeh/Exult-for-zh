#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045A object#(0x45A) ()
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

	if (!(event == 0x0001)) goto labelFunc045A_0598;
	UI_show_npc_face(0xFFA6, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFA6));
	var0002 = Func0909();
	var0003 = false;
	var0004 = UI_wearing_fellowship();
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc045A_0073;
	if (!(!(var0001 == 0x000F))) goto labelFunc045A_0073;
	var0005 = Func08FC(0xFFA6, 0xFFAF);
	if (!var0005) goto labelFunc045A_006E;
	message("Owen 不会中断他参与友谊会的集会来和你说话。*");
	say();
	abort;
	goto labelFunc045A_0073;
labelFunc045A_006E:
	message("「我参加友谊会集会迟到了！我现在不能和你说话！」*");
	say();
	abort;
labelFunc045A_0073:
	var0002 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x0040]) goto labelFunc045A_00A6;
	if (!gflags[0x0123]) goto labelFunc045A_00A6;
	UI_add_answer(["Crown Jewel", "Hook"]);
	var0003 = true;
labelFunc045A_00A6:
	if (!gflags[0x00FB]) goto labelFunc045A_00B3;
	UI_add_answer("船");
labelFunc045A_00B3:
	if (!gflags[0x00F7]) goto labelFunc045A_00C0;
	UI_add_answer("雕像被取消了");
labelFunc045A_00C0:
	if (!(!gflags[0x0115])) goto labelFunc045A_00E0;
	message("你看到一位穿着昂贵外衣的年轻男子。他非常严肃。");
	say();
	gflags[0x0115] = true;
	UI_set_schedule_type(UI_get_npc_object(0xFFA6), 0x000B);
	goto labelFunc045A_00E4;
labelFunc045A_00E0:
	message("Owen 看着你并哼了一声。「看来你又想和我说话了。」");
	say();
labelFunc045A_00E4:
	converse attend labelFunc045A_0585;
	case "姓名" attend labelFunc045A_0104:
	message("「我的名字是，");
	message(var0002);
	message(", Owen。我猜你未来会更常听到这个名字。」");
	say();
	gflags[0x0123] = true;
	UI_remove_answer("姓名");
labelFunc045A_0104:
	case "职业", "雕像被取消了" attend labelFunc045A_0171:
	if (!gflags[0x011F]) goto labelFunc045A_0162;
	if (!(!gflags[0x00F7])) goto labelFunc045A_014D;
	message("他直视你的眼睛，毫无谦虚地说。「我是，」他说，「Minoc 历史上最伟大的造船匠。我是有史以来最伟大的造船匠！」");
	say();
	UI_add_answer(["最伟大", "Minoc", "购买"]);
	if (!gflags[0x0040]) goto labelFunc045A_014A;
	if (!(!var0003)) goto labelFunc045A_014A;
	UI_add_answer(["Crown Jewel", "Hook"]);
labelFunc045A_014A:
	goto labelFunc045A_0158;
labelFunc045A_014D:
	message("「在辛劳多年试图为这个忘恩负义的小镇做点什么之后，我放弃了。我发誓我这辈子再也不会造船了。这会给他们一个教训！不管他们怎么乞求或恳求，我都不会做的。」");
	say();
	UI_add_answer("忘恩负义");
labelFunc045A_0158:
	UI_remove_answer("雕像被取消了");
	goto labelFunc045A_0171;
labelFunc045A_0162:
	message("「好吧，我当然会原谅你粗劣的举止，因为我知道能见到我你一定觉得很荣幸。但你必须知道，刚才在锯木厂发现了两个人，他们被谋杀了！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀");
labelFunc045A_0171:
	case "最伟大" attend labelFunc045A_0191:
	message("「你知道我是怎么变成这样的吗？我告诉你！我开始听到脑海里有一个声音！喔，我知道你会觉得我疯了……」");
	say();
	UI_remove_answer("最伟大");
	UI_add_answer(["疯了", "声音"]);
labelFunc045A_0191:
	case "声音" attend labelFunc045A_01A4:
	message("「这些声音不是我认识的任何人的。但这些声音仍然对我有深远的影响……」");
	say();
	UI_remove_answer("声音");
labelFunc045A_01A4:
	case "疯了" attend labelFunc045A_01C4:
	message("「在寻找这声音的意义时——这很困难，因为你怎么能告诉别人，尤其是一个陌生人，你脑海里听到声音呢——我遇见了友谊会。他们教导我那声音是什么。」");
	say();
	UI_remove_answer("疯了");
	UI_add_answer(["单一声音", "友谊会"]);
labelFunc045A_01C4:
	case "单一声音" attend labelFunc045A_01DE:
	message("「这是我脑海中的理智之声，试图引导我的人生走向正确的方向。友谊会教我如何信任这个声音并倾听它所说的。你可以在我的生活中看到结果！我掌握了我的技艺，并通过我设计的方法推进了造船技术。」");
	say();
	UI_remove_answer("单一声音");
	UI_add_answer("方法");
labelFunc045A_01DE:
	case "购买" attend labelFunc045A_02F9:
	if (!(var0001 == 0x0007)) goto labelFunc045A_02EE;
	if (!(!gflags[0x00F7])) goto labelFunc045A_0281;
	message("Owen 看着你，突然显得有些慌乱。「呃，我目前没有船可以卖。我正在进行一些改进。但如果你愿意，你可以委托我为你建造一艘。我建造的一艘船的船契要价 1000 枚金币。你想买一艘吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc045A_027D;
	var0007 = UI_remove_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0007) goto labelFunc045A_0276;
	gflags[0x00FB] = true;
	message("「你会发现这笔钱花得很值得的！我会立刻开始工作。我将根据我最近的一些设计来建造。我会提前把船契给你。」");
	say();
	var0008 = UI_add_party_items(0x0001, 0x031D, 0x0010, 0x0002, false);
	if (!var0008) goto labelFunc045A_024A;
	message("「它将被命名为『卓越号（Excellencia）』。」");
	say();
	goto labelFunc045A_0273;
labelFunc045A_024A:
	message("「我很想把船契给你，但你带了太多东西了。」");
	say();
	var0009 = UI_add_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0009) goto labelFunc045A_026F;
	message("「把你的金币拿回去吧！我不能昧着良心留下它！」");
	say();
	goto labelFunc045A_0273;
labelFunc045A_026F:
	message("「我很想把金币还给你，但我似乎忘记放哪了。」");
	say();
labelFunc045A_0273:
	goto labelFunc045A_027A;
labelFunc045A_0276:
	message("「我非常抱歉，」他哼了一声说，「但你没有足够的金币。」");
	say();
labelFunc045A_027A:
	goto labelFunc045A_0281;
labelFunc045A_027D:
	message("「你确定吗？在整个不列颠尼亚你绝对找不到更好的船了！那好吧！」");
	say();
labelFunc045A_0281:
	message("「你也许有兴趣购买一个精良的六分仪？我有一个愿意以好价格割爱。价格是 150 枚金币。你有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc045A_02E7;
	message("「太好了！我就知道你会欣赏拥有造船匠 Owen 的六分仪。你是个了不起的人，能够辨别那些值得多花一点钱的优质物品。」");
	say();
	var000A = UI_remove_party_items(0x0096, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var000A)) goto labelFunc045A_02B1;
	message("「你这无赖！让我满怀希望，却又残忍地打破它们。你没有足够的金币来买我的宝物。如果你带着更多钱回来，『也许』我会让你再次出价。」");
	say();
	goto labelFunc045A_02E4;
labelFunc045A_02B1:
	var000B = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	if (!(!var000B)) goto labelFunc045A_02E4;
	message("「你没有足够的力气把我的宝物放进背包。你必须丢掉一些毫无价值的垃圾，腾出空间来装这个美丽的东西。我会等你回来以这个实惠的低价购买六分仪。」");
	say();
	var000C = UI_add_party_items(0x0096, 0x0284, 0xFE99, 0xFE99, true);
labelFunc045A_02E4:
	goto labelFunc045A_02EB;
labelFunc045A_02E7:
	message("「哼。好吧，你要知道你错过了购买著名造船匠 Owen 六分仪的机会，你将会以你的无赖和愚蠢而闻名。」");
	say();
labelFunc045A_02EB:
	goto labelFunc045A_02F2;
labelFunc045A_02EE:
	message("「我的店铺目前已经打烊了。我现在不想谈生意。」");
	say();
labelFunc045A_02F2:
	UI_remove_answer("购买");
labelFunc045A_02F9:
	case "方法" attend labelFunc045A_038E:
	message("「我甚至写了一本书，描述我在造船方法上取得的进展。这非常高深，但我试图写得让外行人也能看懂。你有兴趣买一本吗？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc045A_0383;
	message("「是的，你当然有。」");
	say();
	var000E = UI_remove_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	if (!var000E) goto labelFunc045A_037C;
	var000F = UI_add_party_items(0x0001, 0x0282, 0x003B, 0xFE99, false);
	if (!var000F) goto labelFunc045A_0350;
	message("「拿去吧。」");
	say();
	goto labelFunc045A_0379;
labelFunc045A_0350:
	message("「你带太多东西了，拿不动你的书。」");
	say();
	var0010 = UI_add_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0010) goto labelFunc045A_0375;
	message("「我会把钱退给你。」");
	say();
	goto labelFunc045A_0379;
labelFunc045A_0375:
	message("「我很想把金币退给你，但你拿不了。」");
	say();
labelFunc045A_0379:
	goto labelFunc045A_0380;
labelFunc045A_037C:
	message("「你没有足够的钱！」");
	say();
labelFunc045A_0380:
	goto labelFunc045A_0387;
labelFunc045A_0383:
	message("「哼！我想这反正也超出了你的理解范围。」");
	say();
labelFunc045A_0387:
	UI_remove_answer("方法");
labelFunc045A_038E:
	case "船" attend labelFunc045A_03ED:
	if (!(!gflags[0x00F7])) goto labelFunc045A_03A5;
	message("「我很能理解你的不耐烦，但我才刚开始工作。等我完成它时，它自然就准备好了。现在，在此之前，如果你能不浪费我宝贵的时间，我会很感激的。」*");
	say();
	abort;
	goto labelFunc045A_03E6;
labelFunc045A_03A5:
	if (!(!gflags[0x00FC])) goto labelFunc045A_03E2;
	message("「我无法为你造一艘船，我想我们都知道这点。」");
	say();
	if (!gflags[0x00FB]) goto labelFunc045A_03DF;
	message("「我也不能收你买船的钱。来，我还给你。」");
	say();
	var0011 = UI_add_party_items(0x03E8, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0011) goto labelFunc045A_03DB;
	gflags[0x00FC] = true;
	goto labelFunc045A_03DF;
labelFunc045A_03DB:
	message("「哦，天啊，你负担太重了，拿不回你的 1000 枚金币！等你手比较空的时候再来吧！」");
	say();
labelFunc045A_03DF:
	goto labelFunc045A_03E6;
labelFunc045A_03E2:
	message("「我帮不了你。」");
	say();
labelFunc045A_03E6:
	UI_remove_answer("船");
labelFunc045A_03ED:
	case "Minoc" attend labelFunc045A_040D:
	message("「尽管发生了这些谋杀案，我必须承认我很喜欢这里。这是我出生的地方。他们爱我。他们将要为我创建一座纪念碑。我想我是受之无愧的，但我还是忍不住感到受宠若惊。」");
	say();
	UI_add_answer(["谋杀", "纪念碑"]);
	UI_remove_answer("Minoc");
labelFunc045A_040D:
	case "忘恩负义" attend labelFunc045A_0427:
	message("「显然，建造史上最伟大的航行船只以及为 Minoc 所做的一切已经不够了！不！多亏了那个自大白痴的镇长，我被剥夺了理应属于我的致敬，我早就证明我完全受之无愧。设计缺陷，呸！Burnside 镇长在他那悲惨的一生中到底造过几艘船？！」");
	say();
	UI_add_answer("那里有人死亡");
	UI_remove_answer("忘恩负义");
labelFunc045A_0427:
	case "谋杀" attend labelFunc045A_0448:
	if (!(!gflags[0x0122])) goto labelFunc045A_043D;
	message("「没错。锯木厂位于镇的东南方。镇上几乎每个人都在那里。如果你想查明更多，你也许应该去那里。我痛恨暴力。」");
	say();
	goto labelFunc045A_0441;
labelFunc045A_043D:
	message("他缓缓摇头。「他们不久后就要为我的纪念碑揭幕了。你认为谈论这些事件会让人们不参加典礼吗？那会是个悲剧！」");
	say();
labelFunc045A_0441:
	UI_remove_answer("谋杀");
labelFunc045A_0448:
	case "那里有人死亡" attend labelFunc045A_0466:
	message("你告诉他许多无辜平民在他建造的船上丧生。Owen 缓缓摇头。「我不知道。我完全不知道这怎么会发生。很难想像如此巨大的生命损失给这个世界带来的痛苦。但在建造那些船时，我已经尽力了。我不想那些人死。你必须相信我。」");
	say();
	message("Owen 显得非常痛苦。「给我的致敬现在不过是一块墓碑。」");
	say();
	UI_remove_answer("那里有人死亡");
	UI_add_answer("致敬");
labelFunc045A_0466:
	case "友谊会" attend labelFunc045A_0498:
	if (!(!gflags[0x00F7])) goto labelFunc045A_0486;
	Func0919();
	message("「它在我的私生活中所带来的改变，对我有极大的帮助。」");
	say();
	UI_add_answer("私生活");
	goto labelFunc045A_0491;
labelFunc045A_0486:
	message("「除非她也不跟你说话，否则你可以去问 Elynor。也许你的私生活细节会比我的更能娱乐她。」");
	say();
	UI_add_answer("私生活");
labelFunc045A_0491:
	UI_remove_answer("友谊会");
labelFunc045A_0498:
	case "理念" attend labelFunc045A_04AA:
	Func091A();
	UI_remove_answer("理念");
labelFunc045A_04AA:
	case "私生活" attend labelFunc045A_04CB:
	if (!(!gflags[0x00F7])) goto labelFunc045A_04C4;
	message("「我的朋友，曾几何时我以为我的生命已经到了尽头。我觉得自己仿佛被吞噬进一个冰冷、深邃的黑暗洞穴中。」");
	say();
	UI_add_answer("黑暗");
labelFunc045A_04C4:
	UI_remove_answer("私生活");
labelFunc045A_04CB:
	case "黑暗" attend labelFunc045A_04EC:
	if (!(!gflags[0x00F7])) goto labelFunc045A_04E1;
	message("「我的灵魂仿佛沉入了一个光芒无法进入的地方……不久之后我发现了友谊会。它在我生命中造成的改变是奇迹般的。」");
	say();
	goto labelFunc045A_04E5;
labelFunc045A_04E1:
	message("「最近我很难和 Elynor 说上话。她似乎没时间理我。以前当我为纪念碑做准备时，她总是顺道拜访，并且愿意跟我聊聊。」");
	say();
labelFunc045A_04E5:
	UI_remove_answer("黑暗");
labelFunc045A_04EC:
	case "纪念碑" attend labelFunc045A_04FF:
	message("「喔，你可以去问镇上的任何人。他们全都知道。」");
	say();
	UI_remove_answer("纪念碑");
labelFunc045A_04FF:
	case "致敬" attend labelFunc045A_0521:
	message("「我知道！我的作品将成为我的纪念碑！我的名字将在任何雕像化为尘土之后长久留存！人们会记住 -我-，我向你保证！」");
	say();
	message("接着，带着戏剧性的浮夸，Owen 拿出一把匕首。在你来不及阻止他之前，他将匕首刺入了自己的胸膛。他大声咳嗽，鲜血从他嘴里喷出，将他精致的亚麻外衣染成了酒红色的罪恶。片刻之后，一切都结束了。Owen，有史以来最伟大的造船匠，死了。*");
	say();
	UI_kill_npc(UI_get_npc_object(0xFFA6));
	Func0911(0x0064);
	abort;
labelFunc045A_0521:
	case "Crown Jewel" attend labelFunc045A_054C:
	if (!(!gflags[0x00F9])) goto labelFunc045A_053B;
	message("「Crown Jewel 曾在镇上，并于今天清晨离开了。它预定航向 Paws。」");
	say();
	gflags[0x00F9] = true;
	goto labelFunc045A_0545;
labelFunc045A_053B:
	message("「自从我们上次谈到 Crown Jewel 以来，我再也没听过它的消息，");
	message(var0002);
	message("。\"");
	say();
labelFunc045A_0545:
	UI_remove_answer("Crown Jewel");
labelFunc045A_054C:
	case "Hook" attend labelFunc045A_0577:
	if (!(!gflags[0x00FA])) goto labelFunc045A_0566;
	message("「我昨晚看到一个手是铁钩的男人在镇上徘徊。」");
	say();
	gflags[0x00FA] = true;
	goto labelFunc045A_0570;
labelFunc045A_0566:
	message("「自从我们上次谈到那个叫 Hook 的男人以来，我再也没听过他的消息，");
	message(var0002);
	message("。\"");
	say();
labelFunc045A_0570:
	UI_remove_answer("Hook");
labelFunc045A_0577:
	case "告辞" attend labelFunc045A_0582:
	goto labelFunc045A_0585;
labelFunc045A_0582:
	goto labelFunc045A_00E4;
labelFunc045A_0585:
	endconv;
	if (!(!gflags[0x00F7])) goto labelFunc045A_0594;
	message("「受惠于我的存在感到厌倦了吗？很好。我希望还能再见到你！」*");
	say();
	goto labelFunc045A_0598;
labelFunc045A_0594:
	message("「那就上路吧。时光飞逝，名声亦然。」*");
	say();
labelFunc045A_0598:
	if (!(event == 0x0000)) goto labelFunc045A_05A6;
	Func092E(0xFFA6);
labelFunc045A_05A6:
	return;
}


