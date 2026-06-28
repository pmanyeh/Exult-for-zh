#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func08B7 0x8B7 ();
extern void Func092E 0x92E (var var0000);

void Func0425 object#(0x425) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0425_02BA;
	UI_show_npc_face(0xFFDB, 0x0000);
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFDB));
	var0004 = Func0909();
	if (!gflags[0x0083]) goto labelFunc0425_0045;
	var0005 = var0000;
labelFunc0425_0045:
	if (!gflags[0x0084]) goto labelFunc0425_0051;
	var0005 = var0001;
labelFunc0425_0051:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(var0003 == 0x0017)) goto labelFunc0425_007B;
	UI_add_answer(["饮料", "食物", "购买"]);
labelFunc0425_007B:
	if (!(!gflags[0x00A6])) goto labelFunc0425_011D;
	message("你看见一位五十多岁、颇具魅力的女人。她带着温暖的微笑。「欢迎！陌生人，你是谁？」");
	say();
	var0006 = Func090B([var0000, var0001]);
	if (!(var0006 == var0000)) goto labelFunc0425_00B3;
	message("「哎呀！哈啰～");
	message(var0000);
	message("。」");
	say();
	gflags[0x0083] = true;
	var0005 = var0000;
labelFunc0425_00B3:
	if (!(var0006 == var0001)) goto labelFunc0425_0116;
	if (!(var0003 == 0x0017)) goto labelFunc0425_0108;
	message("「哇喔！大家听好！这位就是圣者！」");
	say();
	message("蓝野猪酒馆 (Blue Boar) 里的每个人都笑了。");
	say();
	message("「我敢打赌你需要来杯饮料，对吧？」");
	say();
	gflags[0x0084] = true;
	var0007 = Func08F7(0xFFFC);
	if (!var0007) goto labelFunc0425_0105;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「该死！她怎么知道的？」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFDB, 0x0000);
labelFunc0425_0105:
	goto labelFunc0425_0110;
labelFunc0425_0108:
	message("「喔，真的吗？」她故作惊讶地说。「哎呀，我一直都很想见见圣者！」");
	say();
	gflags[0x0084] = true;
labelFunc0425_0110:
	var0005 = var0001;
labelFunc0425_0116:
	gflags[0x00A6] = true;
	goto labelFunc0425_0146;
labelFunc0425_011D:
	if (!((var0002 < 0x0001) || (var0002 > 0x0002))) goto labelFunc0425_013C;
	message("「要点什么，");
	message(var0005);
	message("？」Lucy 问。");
	say();
	goto labelFunc0425_0146;
labelFunc0425_013C:
	message("「有什么我能为你效劳的，");
	message(var0005);
	message("？」Lucy 问。");
	say();
labelFunc0425_0146:
	converse attend labelFunc0425_02B5;
	case "姓名" attend labelFunc0425_015C:
	message("「我是 Lucy！」");
	say();
	UI_remove_answer("姓名");
labelFunc0425_015C:
	case "职业" attend labelFunc0425_01C0:
	message("「我经营蓝野猪酒馆。不列颠尼亚最古老的酒馆。」");
	say();
	if (!(var0003 == 0x0017)) goto labelFunc0425_01BC;
	message("「如果你想吃点或喝点什么，只要说一声！」");
	say();
	UI_add_answer("蓝野猪酒馆");
	var0007 = Func08F7(0xFFFC);
	if (!var0007) goto labelFunc0425_01B9;
	message("她对 Dupre 说。「那你呢，帅哥？想吃点什么吗？」她眨了眨眼。*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「亲爱的，妳会让任何男人都感到饥饿！」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFDB, 0x0000);
	message("「我喜欢你的朋友，");
	message(var0005);
	message("。」");
	say();
labelFunc0425_01B9:
	goto labelFunc0425_01C0;
labelFunc0425_01BC:
	message("「如果你在营业时间来酒馆，我很乐意为你服务！」");
	say();
labelFunc0425_01C0:
	case "蓝野猪酒馆" attend labelFunc0425_01E6:
	message("「这是个适合狂欢的绝佳场所！它已经在这里很久了！我从我祖父那里继承了它。我喜欢这里是因为我热爱烹饪。还有吃。」她笑着说。「还有喝！」她再次大笑。~~「但最主要的是，我喜欢这里是因为能遇到这么多有趣的人。就像你一样，");
	message(var0005);
	message("！」");
	say();
	UI_remove_answer("蓝野猪酒馆");
	UI_add_answer(["狂欢", "人"]);
labelFunc0425_01E6:
	case "狂欢" attend labelFunc0425_021D:
	message("「你看起来就像是那种喜欢好好狂欢一下的人！");
	say();
	if (!(!(var0002 == 0x0007))) goto labelFunc0425_020B;
	message("「晚上回到酒馆来听我们的驻唱乐团，『圣者旅团』的表演吧！」");
	say();
	UI_add_answer("圣者旅团");
	goto labelFunc0425_020F;
labelFunc0425_020B:
	message("「我们的驻唱乐团『圣者旅团』正在另一个房间表演！」");
	say();
labelFunc0425_020F:
	UI_remove_answer("狂欢");
	UI_add_answer("狂欢");
labelFunc0425_021D:
	case "狂欢" attend labelFunc0425_0230:
	message("Lucy 笑了。「狂欢！唱歌！跳舞！吃东西！喝酒！在一个可以让人停下来享受生活的地方和时刻！我看得出来，你已经很久没有品尝不列颠尼亚生活中简单的乐趣了！」");
	say();
	UI_remove_answer("狂欢");
labelFunc0425_0230:
	case "圣者旅团" attend labelFunc0425_0249:
	message("「他们是当地受欢迎的合唱团。我相信你会喜欢他们的，");
	message(var0005);
	message("！」");
	say();
	UI_remove_answer("圣者旅团");
labelFunc0425_0249:
	case "人" attend labelFunc0425_025C:
	message("「喔，我好喜欢认识那些喜欢出门『杀』东西的男人！」");
	say();
	UI_remove_answer("人");
labelFunc0425_025C:
	case "食物" attend labelFunc0425_0276:
	message("「我这里提供的每样东西都很美味。我强烈推荐你尝尝『银树叶』这道菜。保证物超所值！」");
	say();
	UI_remove_answer("食物");
	UI_add_answer("银树叶");
labelFunc0425_0276:
	case "饮料" attend labelFunc0425_0289:
	message("「我提供不列颠城最棒的麦酒和葡萄酒。」");
	say();
	UI_remove_answer("饮料");
labelFunc0425_0289:
	case "银树叶" attend labelFunc0425_029C:
	message("「它是用一种非常稀有树木的叶子做成的。非常棒！」");
	say();
	UI_remove_answer("银树叶");
labelFunc0425_029C:
	case "购买" attend labelFunc0425_02A7:
	Func08B7();
labelFunc0425_02A7:
	case "告辞" attend labelFunc0425_02B2:
	goto labelFunc0425_02B5;
labelFunc0425_02B2:
	goto labelFunc0425_0146;
labelFunc0425_02B5:
	endconv;
	message("「晚点聊！」*");
	say();
labelFunc0425_02BA:
	if (!(event == 0x0000)) goto labelFunc0425_02C8;
	Func092E(0xFFDB);
labelFunc0425_02C8:
	return;
}


