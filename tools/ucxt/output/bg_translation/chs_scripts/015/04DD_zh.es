#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04DD object#(0x4DD) ()
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

	if (!(event == 0x0000)) goto labelFunc04DD_0009;
	abort;
labelFunc04DD_0009:
	UI_show_npc_face(0xFF23, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF23));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x029F]) goto labelFunc04DD_0047;
	var0005 = var0002;
labelFunc04DD_0047:
	if (!gflags[0x02A0]) goto labelFunc04DD_0053;
	var0005 = var0003;
labelFunc04DD_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04DD_0063;
	message("这位女士惊讶地擡头说：「我现在没在工作，我请求你尊重我的隐私。如果你想和我说话，请在深夜时分到澡堂来。」*");
	say();
	abort;
labelFunc04DD_0063:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0006 = UI_get_timer(0x0002);
	var0007 = UI_get_timer(0x0003);
	var0008 = UI_get_timer(0x0004);
	if (!((gflags[0x029C] && (var0006 < 0x0002)) || ((gflags[0x029E] && (var0007 < 0x0002)) || (gflags[0x029D] && (var0008 < 0x0002))))) goto labelFunc04DD_00BF;
	message("这位迷人的女士惊讶地看着你，说道：「等一下！你刚才已经享受过了，不是吗？请等你休息好了再来。」*");
	say();
	abort;
	goto labelFunc04DD_016E;
labelFunc04DD_00BF:
	if (!(!gflags[0x02AA])) goto labelFunc04DD_0164;
	message("你看到一位有着诱人双眼的华丽年轻女子。");
	say();
	if (!(!var0004)) goto labelFunc04DD_00D8;
	message("「哈啰，帅哥！");
	say();
	goto labelFunc04DD_00EE;
labelFunc04DD_00D8:
	message("「哈啰。妳确定妳不是真的想和 Roberto 谈谈吗？」");
	say();
	if (!Func090A()) goto labelFunc04DD_00E9;
	message("「好吧，甜心。只要能让你热血沸腾……");
	say();
	goto labelFunc04DD_00EE;
labelFunc04DD_00E9:
	message("「那你最好去和 Roberto 说话！他可能更符合妳的类型。」*");
	say();
	abort;
labelFunc04DD_00EE:
	message("你是谁？」");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04DD_0133;
	if (!(!var0004)) goto labelFunc04DD_011F;
	message("「嗯，我很高兴认识你，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc04DD_0129;
labelFunc04DD_011F:
	message("「哈啰，");
	message(var0002);
	message("。」");
	say();
labelFunc04DD_0129:
	var0005 = var0002;
	gflags[0x029F] = true;
labelFunc04DD_0133:
	if (!(var0009 == var0003)) goto labelFunc04DD_015D;
	message("「噢吼！一个活生生的圣者 ？");
	say();
	if (!(!var0004)) goto labelFunc04DD_014F;
	message("「嘿，我们应该更好地了解彼此！」");
	say();
	goto labelFunc04DD_0153;
labelFunc04DD_014F:
	message("「还是个女的！我还以为我什么都见过了……」");
	say();
labelFunc04DD_0153:
	var0005 = var0003;
	gflags[0x02A0] = true;
labelFunc04DD_015D:
	gflags[0x02AA] = true;
	goto labelFunc04DD_016E;
labelFunc04DD_0164:
	message("「又见面了，");
	message(var0005);
	message("，」 Wench 说。");
	say();
labelFunc04DD_016E:
	converse attend labelFunc04DD_0281;
	case "姓名" attend labelFunc04DD_018F:
	message("「你可以叫我…… Wench (侍女) 。」");
	say();
	if (!(!var0004)) goto labelFunc04DD_0188;
	message("她对你飞吻。");
	say();
labelFunc04DD_0188:
	UI_remove_answer("姓名");
labelFunc04DD_018F:
	case "职业" attend labelFunc04DD_01A8:
	message("她大笑出声。「你一定在开玩笑！」她让自己平静下来，说道：「确保你在澡堂期间感到舒适是我的职责。」");
	say();
	UI_add_answer(["澡堂", "舒适的服务"]);
labelFunc04DD_01A8:
	case "澡堂" attend labelFunc04DD_01C6:
	message("「我从这里开张就一直工作到现在。我爱死它了。我一点也没有被剥削。我赚了一堆金币，过着很棒的生活。」 ");
	say();
	if (!(!var0004)) goto labelFunc04DD_01BF;
	message("她对你眨眼。「我也遇到过许多好男人！」");
	say();
labelFunc04DD_01BF:
	UI_remove_answer("澡堂");
labelFunc04DD_01C6:
	case "舒适的服务" attend labelFunc04DD_01EC:
	message("「嗯，我们可以去温泉池里游个泳，或者妳可以享受按摩。或者我们也可以只是聊聊天。~~或者……妳可以跟我去交谊厅，我『展示』我的『职业』给妳看！」");
	say();
	UI_remove_answer("舒适的服务");
	UI_add_answer(["游泳", "按摩", "聊天", "交谊厅"]);
labelFunc04DD_01EC:
	case "交谊厅" attend labelFunc04DD_0225:
	message("「你想在交谊厅里和我作伴吗？」");
	say();
	if (!Func090A()) goto labelFunc04DD_0214;
	message("Wench 带你进入一个私人房间。~~「这根本不是交谊厅。我们将会独处，」她咯咯笑着。~~「顺带一提，你选择我是件好事。 Roberto 和 Martine 喜欢偷客人的金币。我可能有道德上的问题，但我不是小偷！现在，让我们办正事吧，好吗？」");
	say();
	message("过了一会儿，在这位女士向你展示了比舞台上的法师还要多的把戏之后，你走出交谊厅，成为了一个更快乐的圣者 。");
	say();
	gflags[0x029D] = true;
	UI_set_timer(0x0004);
	goto labelFunc04DD_021E;
labelFunc04DD_0214:
	message("「这不是问题，");
	message(var0005);
	message("。」");
	say();
labelFunc04DD_021E:
	UI_remove_answer("交谊厅");
labelFunc04DD_0225:
	case "游泳" attend labelFunc04DD_0238:
	message("Wench 帮你脱下衣物，引导你进入温暖的泉水中。感觉极好，你很想睡一觉，但你知道你还有任务要完成。过了一会儿， Wench 扶你出水，你穿上衣服。");
	say();
	UI_remove_answer("游泳");
labelFunc04DD_0238:
	case "按摩" attend labelFunc04DD_024B:
	message("Wench 帮你脱下衣物，引导你到一张舒适的按摩床上。你趴着，这位女士熟练地揉捏和摩擦你酸痛的肌肉，慢慢地让你进入完全放松的状态。过了一会儿， Wench 扶你起来，你穿上衣服。");
	say();
	UI_remove_answer("按摩");
labelFunc04DD_024B:
	case "聊天" attend labelFunc04DD_0273:
	message("Wench 耸耸肩。「我没问题！我们要聊什么？我知道了！想知道一个秘密吗？」");
	say();
	if (!Func090A()) goto labelFunc04DD_0264;
	message("「你知道有秘密信道连接海盗巢穴 (Buccaneer's Den)的建筑物吗？这是真的！我相当确定入口是通过赌坊 (House of Games) ，我也知道有一条路可以从信道进入澡堂！」");
	say();
	goto labelFunc04DD_0268;
labelFunc04DD_0264:
	message("Wench 撅起嘴。「那就算了！」");
	say();
labelFunc04DD_0268:
	message("你和 Wench 聊了许多其他话题，这时你意识到你在温泉里待了太久。还有任务要完成！");
	say();
	UI_remove_answer("聊天");
labelFunc04DD_0273:
	case "告辞" attend labelFunc04DD_027E:
	goto labelFunc04DD_0281;
labelFunc04DD_027E:
	goto labelFunc04DD_016E;
labelFunc04DD_0281:
	endconv;
	message("「喔，请尽快再来，");
	message(var0005);
	message("！」");
	say();
	if (!(!var0004)) goto labelFunc04DD_029A;
	message("Wench 对你飞吻。*");
	say();
	goto labelFunc04DD_029E;
labelFunc04DD_029A:
	message("Wench 挥手道别。*");
	say();
labelFunc04DD_029E:
	return;
}


