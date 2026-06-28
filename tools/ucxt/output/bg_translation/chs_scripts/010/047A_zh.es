#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047A object#(0x47A) ()
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
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;

	if (!(event == 0x0001)) goto labelFunc047A_054A;
	UI_show_npc_face(0xFF86, 0x0000);
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF86));
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0004 = Func08F7(0xFF85);
	if (!(!gflags[0x0174])) goto labelFunc047A_005F;
	message("一位漂亮的女人对你露出友好的笑容，然后羞怯地将目光移开。");
	say();
	gflags[0x0174] = true;
	goto labelFunc047A_0069;
labelFunc047A_005F:
	message("「再次欢迎你，");
	message(var0000);
	message("，」Ophelia 说。");
	say();
labelFunc047A_0069:
	if (!gflags[0x02D7]) goto labelFunc047A_0076;
	UI_add_answer("Cosmo");
labelFunc047A_0076:
	if (!gflags[0x016E]) goto labelFunc047A_0083;
	UI_add_answer("Sprellic");
labelFunc047A_0083:
	var0005 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0006 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0007 = UI_is_dead(UI_get_npc_object(0xFF81));
	var0008 = UI_is_dead(UI_get_npc_object(0xFF84));
	if (!gflags[0x0165]) goto labelFunc047A_00EA;
	if (!(var0005 && (var0006 && var0007))) goto labelFunc047A_00D6;
	UI_add_answer("赢得的钱");
labelFunc047A_00D6:
	if (!var0008) goto labelFunc047A_00EA;
	UI_add_answer("Sprellic 死了");
	UI_remove_answer("Sprellic");
labelFunc047A_00EA:
	converse attend labelFunc047A_053F;
	case "姓名" attend labelFunc047A_0106:
	message("「我的名字是 Ophelia，");
	message(var0000);
	message("。」");
	say();
	UI_remove_answer("姓名");
labelFunc047A_0106:
	case "职业" attend labelFunc047A_0122:
	message("「我是个酒馆女侍。在 Jhelom 这里的舖位与凳子(Bunk and Stool)，大部分的工作都是我在做。」");
	say();
	UI_add_answer(["职业", "舖位与凳子", "Jhelom"]);
labelFunc047A_0122:
	case "职业" attend labelFunc047A_0149:
	message("「自从老板 Sprellic 被伤痕图书馆的那三个学生挑战决斗后，他就一直忙着准备。我一直独自经营这个地方……我想 Daphne 也算是有帮忙啦。」");
	say();
	gflags[0x016E] = true;
	UI_remove_answer("职业");
	UI_add_answer(["Sprellic", "图书馆", "Daphne"]);
labelFunc047A_0149:
	case "Daphne" attend labelFunc047A_01A6:
	message("「说真的，我无法想像你为什么会对她感兴趣。」她发出一阵沙哑的笑声。*");
	say();
	var0004 = Func08F7(0xFF85);
	if (!var0004) goto labelFunc047A_019F;
	UI_show_npc_face(0xFF85, 0x0000);
	message("「我听到了，Ophelia。妳这个恶毒的娘们！」*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("「好了，好了，Daphne。脾气，脾气！我们可不想除了妳难看的脸之外，还用恶劣的脾气把顾客吓跑！」*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「巫婆！」*");
	say();
	UI_remove_npc_face(0xFF85);
	UI_show_npc_face(0xFF86, 0x0000);
labelFunc047A_019F:
	UI_remove_answer("Daphne");
labelFunc047A_01A6:
	case "舖位与凳子" attend labelFunc047A_01CC:
	message("「据说这间酒吧确实发生过许多奇怪的事情。最近，这里除了是提供精美食物和饮料的旅店兼酒馆外，还成了下注场所。」");
	say();
	UI_remove_answer("舖位与凳子");
	UI_add_answer(["奇怪", "食物", "房间", "下注"]);
labelFunc047A_01CC:
	case "Jhelom" attend labelFunc047A_01DF:
	message("「这是一个工作环境相当粗犷的地方，但」她私下对你低语，「我必须承认，我发现自己被生活在这里的那一类男人所吸引。」");
	say();
	UI_remove_answer("Jhelom");
labelFunc047A_01DF:
	case "图书馆" attend labelFunc047A_01F2:
	message("「你现在肯定听说过我们著名的战士学校了！你是哪门子的世界旅行者？别回答。这只是一个修辞问句，」她嗤之以鼻。");
	say();
	UI_remove_answer("图书馆");
labelFunc047A_01F2:
	case "食物" attend labelFunc047A_0205:
	message("「这件事你必须去找 Daphne。你总不会期望我必须进厨房吧？」Ophelia 笑着。");
	say();
	UI_remove_answer("食物");
labelFunc047A_0205:
	case "房间" attend labelFunc047A_02CF:
	if (!(var0003 == 0x0010)) goto labelFunc047A_02C4;
	message("「只要 5 枚金币，你就能得到一间可爱的房间。你想留宿一晚吗？」");
	say();
	if (!Func090A()) goto labelFunc047A_02BD;
	var0009 = UI_get_party_list();
	var000A = 0x0000;
	enum();
labelFunc047A_022F:
	for (var000D in var0009 with var000B to var000C) attend labelFunc047A_0247;
	var000A = (var000A + 0x0001);
	goto labelFunc047A_022F;
labelFunc047A_0247:
	var000E = (var000A * 0x0005);
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var000E)) goto labelFunc047A_02B0;
	var0010 = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var0010) goto labelFunc047A_02A3;
	message("「这是你的钥匙。请注意，它只能在这家店里使用，而且只能用一次。」");
	say();
	var0011 = UI_remove_party_items(var000E, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc047A_02AD;
labelFunc047A_02A3:
	message("「抱歉，");
	message(var0000);
	message("，在你拿走房间钥匙之前，你必须减掉一些重量，呃，一些包袱。」");
	say();
labelFunc047A_02AD:
	goto labelFunc047A_02BA;
labelFunc047A_02B0:
	message("「我真的很抱歉，");
	message(var0000);
	message("，但房间费用比你拥有的金币还多。」");
	say();
labelFunc047A_02BA:
	goto labelFunc047A_02C1;
labelFunc047A_02BD:
	message("「我想是我们的房间不够好吧，」她皱着眉头说。");
	say();
labelFunc047A_02C1:
	goto labelFunc047A_02C8;
labelFunc047A_02C4:
	message("「我现在不在工作，所以请不要用我还在工作的态度对我说话。」");
	say();
labelFunc047A_02C8:
	UI_remove_answer("房间");
labelFunc047A_02CF:
	case "Sprellic" attend labelFunc047A_02E9:
	message("「没有人比我更了解老 Sprellic 了。虽然他看起来不像，但他很可能是全不列颠尼亚(不列颠尼亚)最致命的战斗大师。」");
	say();
	UI_remove_answer("Sprellic");
	UI_add_answer("大师");
labelFunc047A_02E9:
	case "大师" attend labelFunc047A_0303:
	message("「在他击败伤痕图书馆的战士后，他可能会开一所自己的学校来教授他独特的战斗风格。」");
	say();
	UI_remove_answer("大师");
	UI_add_answer("学校");
labelFunc047A_0303:
	case "学校" attend labelFunc047A_031D:
	message("「那将是一所很棒的战斗学校。已经有男女战士来到 Jhelom 成为 Sprellic 的学生。他们都渴望知道我现在就能告诉你的秘密。」");
	say();
	UI_remove_answer("学校");
	UI_add_answer("秘密");
labelFunc047A_031D:
	case "秘密" attend labelFunc047A_033E:
	if (!(!var0001)) goto labelFunc047A_0333;
	message("Ophelia 示意你靠近她。她对你低语。「Sprellic 其实就是经过这么多年后回到我们身边的圣者。」她庄严地点头。");
	say();
	goto labelFunc047A_0337;
labelFunc047A_0333:
	message("Ophelia 示意你靠近她。她对你低语。「Sprellic 可以呼唤圣者来当他的冠军战士。」她庄严地点头。");
	say();
labelFunc047A_0337:
	UI_remove_answer("秘密");
labelFunc047A_033E:
	case "奇怪" attend labelFunc047A_0351:
	message("「以防你没注意到，这是一个粗犷的城镇。我们在这里看过各种类型的古怪人物。」她仔细打量着你。");
	say();
	UI_remove_answer("奇怪");
labelFunc047A_0351:
	case "下注" attend labelFunc047A_044E:
	if (!(var0006 || (var0005 || (var0007 || var0008)))) goto labelFunc047A_0372;
	message("「抱歉，由于……呃，其中一方或多方不幸离世，所有的下注都取消了。」");
	say();
	goto labelFunc047A_0447;
labelFunc047A_0372:
	message("「我正在接受关于 Sprellic 决斗的下注。你想下注吗？」");
	say();
	var0012 = Func090A();
	if (!var0012) goto labelFunc047A_0443;
	message("「你想下多少注，赌 Sprellic 会击败他的所有三名挑战者？」");
	say();
labelFunc047A_0386:
	var0012 = UI_input_numeric_value(0x0000, 0x00C8, 0x000A, 0x0000);
	if (!(var0012 == 0x0000)) goto labelFunc047A_03AA;
	message("「也许你对自己的信念并不那么认真。或许 Daphne 会接受你的下注。」");
	say();
	goto labelFunc047A_0440;
labelFunc047A_03AA:
	message("「你愿意下 ");
	message(var0012);
	message(" 枚金币赌 Sprellic 会赢？」");
	say();
	var0013 = Func090A();
	if (!(!var0013)) goto labelFunc047A_03CB;
	message("「很好。你想下注多少？」");
	say();
	goto labelFunc047A_0386;
	goto labelFunc047A_0440;
labelFunc047A_03CB:
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var0012)) goto labelFunc047A_043C;
	message("「很好。我给你代表你金币的筹码。每个筹码价值 10 枚金币。如果 Sprellic 赢了，你可以来找我拿两倍数量的金币。~~「如果他输了，");
	message(var0000);
	message("，你的筹码当然就一文不值了。」");
	say();
	var0014 = UI_add_party_items((var0012 / 0x000A), 0x0399, 0xFE99, 0x0000, false);
	if (!var0014) goto labelFunc047A_0435;
	var0015 = UI_remove_party_items(var0012, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0165] = true;
	message("「我很快会再见到你的，");
	message(var0000);
	message("。」你注意到她正强忍着咯咯笑。「当你回来领取你赢得的钱时。」有那么一刻，她似乎无法与你眼神交流。");
	say();
	goto labelFunc047A_0439;
labelFunc047A_0435:
	message("「当你背包里有足够空间装这些筹码时，你必须晚点再来。」");
	say();
labelFunc047A_0439:
	goto labelFunc047A_0440;
labelFunc047A_043C:
	message("「你没有你想要下注的金币数量！你是在试图骗我吗？」");
	say();
labelFunc047A_0440:
	goto labelFunc047A_0447;
labelFunc047A_0443:
	message("「那么如果你想赌 Sprellic 输，你可以去找 Daphne，但我警告你，你这是在把钱丢进水里！」");
	say();
labelFunc047A_0447:
	UI_remove_answer("下注");
labelFunc047A_044E:
	case "赢得的钱" attend labelFunc047A_04C5:
	if (!(!gflags[0x016F])) goto labelFunc047A_04BA;
	var0016 = UI_count_objects(0xFE9B, 0x0399, 0xFE99, 0x0000);
	var0017 = (var0016 * 0x0014);
	var0018 = UI_add_party_items(var0017, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0018) goto labelFunc047A_04B3;
	var0019 = UI_remove_party_items(var0016, 0x0399, 0xFE99, 0x0000, false);
	message("「我看到你回来领取你赢得的钱了。」她耸耸肩，把钱付给了你。");
	say();
	gflags[0x016F] = true;
	goto labelFunc047A_04B7;
labelFunc047A_04B3:
	message("「你带不了那么多金币！等你一次拿得走所有赢得的钱再来！」");
	say();
labelFunc047A_04B7:
	goto labelFunc047A_04BE;
labelFunc047A_04BA:
	message("「你已经领过你赢得的钱了！」");
	say();
labelFunc047A_04BE:
	UI_remove_answer("赢得的钱");
labelFunc047A_04C5:
	case "Cosmo" attend labelFunc047A_0519:
	message("「谁？哦，他是个当地的男孩，偶尔会来这里对我发花痴。别管他，我也不管他。」");
	say();
	if (!var0004) goto labelFunc047A_0512;
	UI_show_npc_face(0xFF85, 0x0000);
	message("「哎呀，妳怎么能这样谈论即将成为妳未婚夫的人！终于，我可以让妳搬出我屋子了！和妳共同生活的每一刻都令人难以忍受！」*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("「别高兴得太早，亲爱的 Daphne！我对我们的婚姻提出了一个条件，而可怜的 Cosmo 永远也无法达成它！」");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("「妳永远不知道！想到妳穿着婚纱，新郎 Cosmo 站在妳身边的画面，就实在太美妙了！也许他就是那个最终能教妳成为一个淑女的男人！」");
	say();
	UI_remove_npc_face(0xFF85);
	UI_show_npc_face(0xFF86, 0x0000);
labelFunc047A_0512:
	UI_remove_answer("Cosmo");
labelFunc047A_0519:
	case "Sprellic 死了" attend labelFunc047A_0531:
	message("「哼！如果你赌他输，我想你就要发财了！我敢打赌，杀死他的人也是你！」");
	say();
	message("她带着冷笑转身背对你。*");
	say();
	UI_remove_answer("Sprellic 死了");
	abort;
labelFunc047A_0531:
	case "告辞" attend labelFunc047A_053C:
	goto labelFunc047A_053F;
labelFunc047A_053C:
	goto labelFunc047A_00EA;
labelFunc047A_053F:
	endconv;
	message("「一定要再来拜访我们，");
	message(var0000);
	message("。」*");
	say();
labelFunc047A_054A:
	if (!(event == 0x0000)) goto labelFunc047A_0558;
	Func092E(0xFF86);
labelFunc047A_0558:
	return;
}


