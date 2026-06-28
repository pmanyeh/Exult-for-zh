#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04DF object#(0x4DF) ()
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

	if (!(event == 0x0000)) goto labelFunc04DF_0009;
	abort;
labelFunc04DF_0009:
	UI_show_npc_face(0xFF21, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF21));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x029A]) goto labelFunc04DF_0047;
	var0005 = var0002;
labelFunc04DF_0047:
	if (!gflags[0x029B]) goto labelFunc04DF_0053;
	var0005 = var0003;
labelFunc04DF_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04DF_0063;
	message("这位女士惊讶地擡头说：「我现在没在工作，我请求你尊重我的隐私。如果你想和我说话，请在深夜时分到澡堂来。」*");
	say();
	abort;
labelFunc04DF_0063:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0006 = UI_get_timer(0x0004);
	var0007 = UI_get_timer(0x0003);
	var0008 = UI_get_timer(0x0002);
	if (!((gflags[0x029D] && (var0006 < 0x0002)) || ((gflags[0x029E] && (var0007 < 0x0002)) || (gflags[0x029C] && (var0008 < 0x0002))))) goto labelFunc04DF_00BF;
	message("这位迷人的女士惊讶地看着你，说道：「亲爱的，你刚才已经享受过了，不是吗？请等你休息好了再来。」*");
	say();
	abort;
	goto labelFunc04DF_016B;
labelFunc04DF_00BF:
	if (!(!gflags[0x02AC])) goto labelFunc04DF_0161;
	message("你看到一位散发热带风情的美丽年轻女子。");
	say();
	if (!(!var0004)) goto labelFunc04DF_00D8;
	message("「哈啰，帅哥！");
	say();
	goto labelFunc04DF_00EE;
labelFunc04DF_00D8:
	message("「哈啰，亲爱的。妳确定妳不想和 Roberto 谈谈吗？」");
	say();
	if (!Func090A()) goto labelFunc04DF_00E9;
	message("「好吧，亲爱的。只要能让妳热血沸腾……」");
	say();
	goto labelFunc04DF_00EE;
labelFunc04DF_00E9:
	message("「那你最好去跟他说话！他可能更合你的胃口。」*");
	say();
	abort;
labelFunc04DF_00EE:
	message("「你的名字是什么？」");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04DF_0133;
	if (!(!var0004)) goto labelFunc04DF_011F;
	message("「你好吗，");
	message(var0002);
	message("？我很高兴见到你！」");
	say();
	goto labelFunc04DF_0129;
labelFunc04DF_011F:
	message("「哈啰，");
	message(var0002);
	message("。」");
	say();
labelFunc04DF_0129:
	var0005 = var0002;
	gflags[0x029A] = true;
labelFunc04DF_0133:
	if (!(var0009 == var0003)) goto labelFunc04DF_015A;
	message("「噢拜托！别又是一个圣者 ！」");
	say();
	if (!(!var0004)) goto labelFunc04DF_0150;
	message("Martine 深吸了一口气，然后笑了。");
	say();
	message("「嗯，亲爱的，你是谁并不重要。无论如何我们都会有一段好时光。」");
	say();
labelFunc04DF_0150:
	gflags[0x029B] = true;
	var0005 = var0003;
labelFunc04DF_015A:
	gflags[0x02AC] = true;
	goto labelFunc04DF_016B;
labelFunc04DF_0161:
	message("「又见面了，");
	message(var0005);
	message("，」 Martine 说。");
	say();
labelFunc04DF_016B:
	converse attend labelFunc04DF_027A;
	case "姓名" attend labelFunc04DF_0181:
	message("「我在这里使用的名字是 Martine 。你懂的……」她对你眨眼。");
	say();
	UI_remove_answer("姓名");
labelFunc04DF_0181:
	case "职业" attend labelFunc04DF_01AC:
	if (!(!var0004)) goto labelFunc04DF_0197;
	message("「亲爱的，我的工作是让你开心。");
	say();
	goto labelFunc04DF_019B;
labelFunc04DF_0197:
	message("「亲爱的，我的工作是服侍妳。");
	say();
labelFunc04DF_019B:
	message("「在澡堂期间感到舒适是很重要的。」");
	say();
	UI_add_answer(["澡堂", "舒适的服务"]);
labelFunc04DF_01AC:
	case "澡堂" attend labelFunc04DF_01CA:
	message("「这是个极好的工作地点。我绝对热爱它。我不会去其他地方工作。我拥有的金币多到花不完。」");
	say();
	if (!(!var0004)) goto labelFunc04DF_01C3;
	message("Martine 对你飞吻。「我也遇到过许多各种有趣的人！」");
	say();
labelFunc04DF_01C3:
	UI_remove_answer("澡堂");
labelFunc04DF_01CA:
	case "舒适的服务" attend labelFunc04DF_01F0:
	message("「你有很多选择。我们可以去温泉池里游个泳。或者我可以为你按摩。或者我们也可以只是聊聊天。~~但如果你想真正地更了解我，我们应该去交谊厅……」");
	say();
	UI_remove_answer("舒适的服务");
	UI_add_answer(["游泳", "按摩", "聊天", "交谊厅"]);
labelFunc04DF_01F0:
	case "交谊厅" attend labelFunc04DF_0233:
	message("「你想在交谊厅里和我作伴吗？」");
	say();
	if (!Func090A()) goto labelFunc04DF_0228;
	message("Martine 带你进入一个私人房间。~~「这根本不是交谊厅。我们将会独处！」~~过了一会儿，在这位女士向你展示了比街头骗子法师还要多的把戏之后，你走出交谊厅，成为了一个更快乐的圣者 。");
	say();
	gflags[0x029C] = true;
	UI_set_timer(0x0002);
	var000A = UI_remove_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04DF_022C;
labelFunc04DF_0228:
	message("「没关系，亲爱的。」");
	say();
labelFunc04DF_022C:
	UI_remove_answer("交谊厅");
labelFunc04DF_0233:
	case "游泳" attend labelFunc04DF_0246:
	message("Martine 帮你脱下衣物，引导你进入温暖的泉水中。感觉棒极了，你很想睡一觉；但你知道你还有任务要完成。过了一会儿， Martine 扶你出水，你穿上衣服。");
	say();
	UI_remove_answer("游泳");
labelFunc04DF_0246:
	case "按摩" attend labelFunc04DF_0259:
	message("Martine 帮你脱下衣物，引导你到一张舒适的按摩床上。你趴着，这位女士熟练地揉捏和摩擦你酸痛的肌肉，慢慢地让你进入一种忘我的状态。过了一会儿， Martine 扶你起来，你穿上衣服。");
	say();
	UI_remove_answer("按摩");
labelFunc04DF_0259:
	case "聊天" attend labelFunc04DF_026C:
	message("Martine 笑了。「我没问题，亲爱的。我敢打赌你有很多关于冒险的故事可以讲，对吧？说！你去过山里的秘密信道吗？你知道它们都是相连的吗？我知道有一扇暗门可以直接通到这栋建筑的后面！」她低声说：「我相信入口就在赌坊 (House of Games) 里。」~~你和 Martine 聊了许多其他话题，直到你意识到你在温泉里待了太久。还有任务要完成！");
	say();
	UI_remove_answer("聊天");
labelFunc04DF_026C:
	case "告辞" attend labelFunc04DF_0277:
	goto labelFunc04DF_027A;
labelFunc04DF_0277:
	goto labelFunc04DF_016B;
labelFunc04DF_027A:
	endconv;
	message("「我希望很快能再见到你，亲爱的！」");
	say();
	if (!(!var0004)) goto labelFunc04DF_028D;
	message("Martine 对你飞吻。*");
	say();
	goto labelFunc04DF_0291;
labelFunc04DF_028D:
	message("Martine 挥手道别。*");
	say();
labelFunc04DF_0291:
	return;
}


