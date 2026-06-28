#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0429 object#(0x429) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc0429_023D;
	UI_show_npc_face(0xFFD7, 0x0000);
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFFD7));
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	if (!(var0002 == 0x0007)) goto labelFunc0429_0067;
	var0003 = Func08FC(0xFFD7, 0xFFE6);
	if (!var0003) goto labelFunc0429_0052;
	message("Candice 正专心聆听友谊会的聚会。*");
	say();
	abort;
	goto labelFunc0429_0067;
labelFunc0429_0052:
	if (!gflags[0x00DA]) goto labelFunc0429_0062;
	message("「你有看到巴特林吗？他没有出席友谊会的聚会！」");
	say();
	goto labelFunc0429_0067;
	goto labelFunc0429_0067;
labelFunc0429_0062:
	message("「喔！我不能停下来跟你说话！我去参加友谊会聚会要迟到了！」*");
	say();
	abort;
labelFunc0429_0067:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00AA])) goto labelFunc0429_008D;
	message("这是一位看起来比实际年龄年轻许多的聪慧女子。");
	say();
	message("「哎呀！你真是名不虚传！圣者本尊！你来到不列颠城的消息已经传开了！」");
	say();
	gflags[0x00AA] = true;
	goto labelFunc0429_00B9;
labelFunc0429_008D:
	if (!(var0002 == 0x0000)) goto labelFunc0429_00B5;
	var0004 = Func08F7(0xFFD5);
	if (!var0004) goto labelFunc0429_00AE;
	message("Candice 看起来对某件事感到心虚。她向你轻轻挥了挥手，但什么也没说。她看着 Patterson，希望由他来发言。*");
	say();
	abort;
	goto labelFunc0429_00B2;
labelFunc0429_00AE:
	message("「是，圣者？」 Candice 说。");
	say();
labelFunc0429_00B2:
	goto labelFunc0429_00B9;
labelFunc0429_00B5:
	message("「是，圣者？」 Candice 说。");
	say();
labelFunc0429_00B9:
	converse attend labelFunc0429_0238;
	case "姓名" attend labelFunc0429_00CF:
	message("「我的名字是 Candice ，」她轻快地说。「我必须说我很荣幸能见到圣者！」她屈膝行礼。");
	say();
	UI_remove_answer("姓名");
labelFunc0429_00CF:
	case "职业" attend labelFunc0429_0104:
	message("「我是皇家博物馆的馆长。」");
	say();
	if (!(var0000 == 0x0007)) goto labelFunc0429_00EC;
	message("「欢迎随时询问关于展品的任何事。」");
	say();
	goto labelFunc0429_00F0;
labelFunc0429_00EC:
	message("「我希望在博物馆开放时能在那里见到你。」");
	say();
labelFunc0429_00F0:
	message("「我把其余的时间都花在与友谊会合作上。」");
	say();
	UI_add_answer(["皇家博物馆", "展品", "友谊会"]);
labelFunc0429_0104:
	case "皇家博物馆" attend labelFunc0429_0124:
	message("「它在不列颠城已经很多很多年了。它收藏了历史文物，以及艺术品。」");
	say();
	UI_remove_answer("皇家博物馆");
	UI_add_answer(["文物", "艺术品"]);
labelFunc0429_0124:
	case "展品" attend labelFunc0429_014F:
	if (!(var0000 == 0x0007)) goto labelFunc0429_0144;
	message("「我们刚开放了一个你可能会感兴趣的特别区域——『圣者文物』特展！」");
	say();
	UI_add_answer("圣者文物");
	goto labelFunc0429_0148;
labelFunc0429_0144:
	message("「在博物馆开放时过来参观吧！」");
	say();
labelFunc0429_0148:
	UI_remove_answer("展品");
labelFunc0429_014F:
	case "文物" attend labelFunc0429_0162:
	message("「那里有早期不列颠尼亚的遗物，甚至还有黑暗三时期 (Three Ages of Darkness) 的遗物——那是不列颠尼亚还被称为 Sosaria 时的事。」");
	say();
	UI_remove_answer("文物");
labelFunc0429_0162:
	case "圣者文物" attend labelFunc0429_01A3:
	message("「嗯，你肯定认得它们。它们应该是真品！像是银角 (Silver Horn) 和八颗石头。据我了解，这些石头曾用于发送，如果现今的法师脑子没那么有问题，他们可以在石头上施放『唤回术（Recall）』法术发送到不列颠尼亚各地的特定地点。我相信如果有人在上面施放『标记术（Mark）』法术，你就能重新指定发送地点！但我想现在这些都不起作用了。」");
	say();
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0429_019C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo 对你耳语：「呃，圣者，你知道我不赞同偷窃。但是，呃，我确实相信这些石头对我们会有用。也许我们该等博物馆关门后再来，如果你懂我的意思？毕竟～从技术上来说，这些物品是属于你的！」");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFD7, 0x0000);
labelFunc0429_019C:
	UI_remove_answer("圣者文物");
labelFunc0429_01A3:
	case "艺术品" attend labelFunc0429_01B6:
	message("「不列颠尼亚为那些将作品捐赠给博物馆的艺术家感到自豪。你将会在全国各地看到由不列颠尼亚艺术家 Watson、Richard Fox、Randi Frank、Glen Johnson 和 Denis Loubet 所创作的作品。」");
	say();
	UI_remove_answer("艺术品");
labelFunc0429_01B6:
	case "友谊会" attend labelFunc0429_01E8:
	if (!(!var0001)) goto labelFunc0429_01CC;
	message("「我们每晚在大厅聚会。你一定要来参观！");
	say();
	goto labelFunc0429_01D0;
labelFunc0429_01CC:
	message("「你现在一定已经完全了解了吧！我希望能在晚间的聚会上见到你！");
	say();
labelFunc0429_01D0:
	message("「友谊会给了我一个伟大的人生目标。我结交了新朋友，甚至找到了爱情！」她咯咯地笑。「糟糕！我泄漏了我的秘密！我不能谈论这个。请忘掉我说的话，好吗？」");
	say();
	UI_remove_answer("友谊会");
	UI_add_answer(["目标", "秘密"]);
labelFunc0429_01E8:
	case "目标" attend labelFunc0429_0202:
	message("「我想要在友谊会中获得更高层次的认可。我想要听到『声音』。那是我唯一真正的目标。」");
	say();
	UI_remove_answer("目标");
	UI_add_answer("声音");
labelFunc0429_0202:
	case "声音" attend labelFunc0429_0219:
	message("「你不知道吗？成为友谊会成员的时间越长，听到『声音』的机会就越大。据说，你将会听到一个男人的声音——也许在你的梦中，也许当你在专注于其他事情时——这是一个告诉你事情、给你建议的声音。我真的不知道。我还没听过，所以我只是说说从其他比我幸运的人那里听来的事。」");
	say();
	UI_remove_answer("声音");
	gflags[0x008C] = true;
labelFunc0429_0219:
	case "秘密" attend labelFunc0429_022A:
	message("「什么秘密？我 -没有- 秘密！那是口误。我真的不能跟任何人谈论它。哎呀，如果市长和我的事传出去……我是说，嗯，-可不可以- 请你……呃，请你忘记我说过的话？」~~Candice 羞得满脸通红，转过身去。*");
	say();
	gflags[0x0080] = true;
	abort;
labelFunc0429_022A:
	case "告辞" attend labelFunc0429_0235:
	goto labelFunc0429_0238;
labelFunc0429_0235:
	goto labelFunc0429_00B9;
labelFunc0429_0238:
	endconv;
	message("「祝你有美好的一天，圣者。」*");
	say();
labelFunc0429_023D:
	if (!(event == 0x0000)) goto labelFunc0429_024B;
	Func092E(0xFFD7);
labelFunc0429_024B:
	return;
}


