#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04E0 object#(0x4E0) ()
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

	if (!(event == 0x0000)) goto labelFunc04E0_0009;
	abort;
labelFunc04E0_0009:
	UI_show_npc_face(0xFF20, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF20));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x02A1]) goto labelFunc04E0_0047;
	var0005 = var0002;
labelFunc04E0_0047:
	if (!gflags[0x02A2]) goto labelFunc04E0_0053;
	var0005 = var0003;
labelFunc04E0_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04E0_0063;
	message("这个男人惊讶地擡头说：「我现在没在工作，我请求你尊重我的隐私。如果你想和我说话，请在深夜时分到澡堂来。」*");
	say();
	abort;
labelFunc04E0_0063:
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0006 = UI_get_timer(0x0004);
	var0007 = UI_get_timer(0x0002);
	var0008 = UI_get_timer(0x0003);
	if (!((gflags[0x029C] && (var0007 < 0x0002)) || ((gflags[0x029D] && (var0006 < 0x0002)) || (gflags[0x029E] && (var0008 < 0x0002))))) goto labelFunc04E0_00C5;
	message("这个男人惊讶地看着你，说：「等一下，");
	message(var0004);
	message("！你刚才已经享受过了，不是吗？请等你休息好了再来。」*");
	say();
	abort;
	goto labelFunc04E0_0160;
labelFunc04E0_00C5:
	if (!(!gflags[0x02AD])) goto labelFunc04E0_0156;
	message("你看到一位极其英俊，双眼能看穿你灵魂的男人。");
	say();
	if (!var0004) goto labelFunc04E0_00DD;
	message("「哈啰，美女！");
	say();
	goto labelFunc04E0_00F3;
labelFunc04E0_00DD:
	message("「哈啰。嗯，你确定你不是真的想和 Wench 或 Martine 谈谈吗？」");
	say();
	if (!Func090A()) goto labelFunc04E0_00EE;
	message("「好吧，水手，只要能让你热血沸腾……");
	say();
	goto labelFunc04E0_00F3;
labelFunc04E0_00EE:
	message("「那你最好去和他们其中一个说话。他们可能更合你的胃口！」*");
	say();
	abort;
labelFunc04E0_00F3:
	message("「你的名字是什么？」");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04E0_0137;
	if (!var0004) goto labelFunc04E0_0123;
	message("「嗯，我很高兴认识你，");
	message(var0002);
	message("。」");
	say();
	goto labelFunc04E0_012D;
labelFunc04E0_0123:
	message("「哈啰，");
	message(var0002);
	message("。」");
	say();
labelFunc04E0_012D:
	var0005 = var0002;
	gflags[0x02A1] = true;
labelFunc04E0_0137:
	if (!(var0009 == var0003)) goto labelFunc04E0_014F;
	message("Roberto 愣了一下，又看了一眼。「圣者 ，是吗？我还以为我什么都听过了……」");
	say();
	gflags[0x02A2] = true;
	var0005 = var0003;
labelFunc04E0_014F:
	gflags[0x02AD] = true;
	goto labelFunc04E0_0160;
labelFunc04E0_0156:
	message("「又见面了，");
	message(var0005);
	message("，」 Roberto 说。");
	say();
labelFunc04E0_0160:
	converse attend labelFunc04E0_027D;
	case "姓名" attend labelFunc04E0_0180:
	message("「在这一带，人们叫我 Roberto 。」");
	say();
	if (!var0004) goto labelFunc04E0_0179;
	message("Roberto 握住你的手说：「而妳是我见过最美丽的女人！」");
	say();
labelFunc04E0_0179:
	UI_remove_answer("姓名");
labelFunc04E0_0180:
	case "职业" attend labelFunc04E0_0199:
	message("Roberto 灿烂地笑了。「你不是真的想知道那个，对吧？」他摇摇头，忍住笑。「很好——我的工作是确保你在澡堂期间能感到真正的舒适。」");
	say();
	UI_add_answer(["澡堂", "舒适的服务"]);
labelFunc04E0_0199:
	case "澡堂" attend labelFunc04E0_01C7:
	if (!var0004) goto labelFunc04E0_01B0;
	var000A = "美女";
	goto labelFunc04E0_01B6;
labelFunc04E0_01B0:
	var000A = "帅哥";
labelFunc04E0_01B6:
	message("「不错的地方，不是吗？我当然很享受在这里工作！它为我带来许多财富，而且我有很多机会遇见");
	message(var000A);
	message("，例如～像是你呀～！」");
	say();
	UI_remove_answer("澡堂");
labelFunc04E0_01C7:
	case "舒适的服务" attend labelFunc04E0_01ED:
	message("「什么最适合你？我们可以去温泉池里游个泳，或者我可以为你按摩。如果你比较喜欢交谈，我们也可以只是聊聊天。或者如果你愿意，我们可以漫步进入交谊厅，然后……交流！」");
	say();
	UI_remove_answer("舒适的服务");
	UI_add_answer(["游泳", "按摩", "聊天", "交谊厅"]);
labelFunc04E0_01ED:
	case "交谊厅" attend labelFunc04E0_0236:
	message("「你想在交谊厅里和我作伴吗？」");
	say();
	if (!Func090A()) goto labelFunc04E0_0225;
	message("Roberto 带你进入一个私人房间。~~「这根本不是交谊厅。我们将会独处！」~~过了一会儿，在得到这个男人全心全意的服侍后，你走出交谊厅，成为了一个更快乐的圣者 。");
	say();
	gflags[0x029E] = true;
	UI_set_timer(0x0003);
	var000B = UI_remove_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04E0_022F;
labelFunc04E0_0225:
	message("「别担心，");
	message(var0005);
	message("。我们可以做些别的事。」");
	say();
labelFunc04E0_022F:
	UI_remove_answer("交谊厅");
labelFunc04E0_0236:
	case "游泳" attend labelFunc04E0_0249:
	message("Roberto 帮你脱下衣物，引导你进入温暖的泉水中。感觉极好，你很想睡一觉；但你知道你还有任务要完成。过了一会儿， Roberto 扶你出水，你穿上衣服。");
	say();
	UI_remove_answer("游泳");
labelFunc04E0_0249:
	case "按摩" attend labelFunc04E0_025C:
	message("Roberto 帮你脱下衣物，引导你到一张舒适的按摩床上。你脸朝下趴着，这个男人熟练地揉捏和摩擦你酸痛的肌肉，慢慢地让你进入完全放松的状态。过了一会儿， Roberto 扶你起来，你穿上衣服。");
	say();
	UI_remove_answer("按摩");
labelFunc04E0_025C:
	case "聊天" attend labelFunc04E0_026F:
	message("Roberto 笑了。「没关系。我们来聊点什么？冒险？秘密信道和地城？」~~ Roberto 靠近并低声说：「你知道有秘密信道连接海盗巢穴 (Buccaneer's Den)的建筑物吗？这是真的！我相当确定入口是通过赌坊 (House of Games) ，我也很确定有一条路可以进入澡堂。」~~你和 Roberto 聊了许多其他话题，直到你意识到你在温泉里待了太久。还有任务要完成！");
	say();
	UI_remove_answer("聊天");
labelFunc04E0_026F:
	case "告辞" attend labelFunc04E0_027A:
	goto labelFunc04E0_027D;
labelFunc04E0_027A:
	goto labelFunc04E0_0160;
labelFunc04E0_027D:
	endconv;
	message("「我希望能再见到你，");
	message(var0005);
	message("。」*");
	say();
	return;
}


