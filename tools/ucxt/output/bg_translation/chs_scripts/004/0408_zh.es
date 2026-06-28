#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0408 object#(0x408) ()
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
	var talked_book;

	if (!(event == 0x0001)) goto labelFunc0408_0482;
	talked_book = false;
	UI_show_npc_face(0xFFF8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFF8);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x010B]) goto labelFunc0408_0055;
	UI_add_answer("设计图");
labelFunc0408_0055:
	if (!var0004) goto labelFunc0408_0069;
	if (!(!gflags[0x0121])) goto labelFunc0408_0069;
	UI_add_answer("Spark");
labelFunc0408_0069:
	if (!(var0002 in var0001)) goto labelFunc0408_007A;
	UI_add_answer("离队");
labelFunc0408_007A:
	if (!gflags[0x0101]) goto labelFunc0408_0087;
	UI_add_answer("加入");
labelFunc0408_0087:
	if (!(!gflags[0x001B])) goto labelFunc0408_0099;
	message("你看到了 Julia ，她是你之前某次造访不列颠尼亚时冒险队伍的成员。");
	say();
	gflags[0x001B] = true;
	goto labelFunc0408_00A3;
labelFunc0408_0099:
	message("「很高兴能再次跟你说话，");
	message(var0003);
	message("，」 Julia 向你打招呼。");
	say();
labelFunc0408_00A3:
	if (gflags[0x0345] && (UI_count_objects(0xFE9B, 0x0282, 149, 0) == 0) && !talked_book) {
		UI_add_answer("古文译本");
	}
	converse attend labelFunc0408_0477;
	case "古文译本" attend labelFunc0408_TransBook:
	message("「身为一名修补匠，我对各种精密的工具都有兴趣。这本古文译本就像是一把能够拆解语言结构的万能扳手！有了它，我们就不用在那些布满灰尘的石碑前浪费时间瞎猜了，赶快去拿到手吧！」");
	say();
	talked_book = true;
	UI_remove_answer("古文译本");
labelFunc0408_TransBook:
	case "姓名" attend labelFunc0408_00BF:
	message("「真的过那么久了吗，");
	message(var0003);
	message("？是我， Julia 啊！」");
	say();
	UI_remove_answer("姓名");
labelFunc0408_00BF:
	case "职业" attend labelFunc0408_010E:
	if (!gflags[0x011F]) goto labelFunc0408_00F3;
	message("「自从上次在不列颠尼亚陪伴你冒险之后，我成了 Minoc 的修补匠。我为镇上的人修理东西。但我的职责和义务并没有紧迫到会阻止我再次加入你，只要你愿意的话。毕竟，当你在不列颠尼亚时，你通常是来修复非常重要的事情，并协助让世界恢复正常的。」");
	say();
	UI_add_answer(["修补匠", "Minoc"]);
	if (!(!(var0002 in var0001))) goto labelFunc0408_00F0;
	UI_add_answer("加入");
labelFunc0408_00F0:
	goto labelFunc0408_010E;
labelFunc0408_00F3:
	message("「现在可不是欢乐重逢的好时机，");
	message(var0003);
	message("。这个小镇被一种神秘的邪恶所笼罩。 Minoc 发生了谋杀案。」");
	say();
	gflags[0x011F] = true;
	UI_add_answer(["谋杀案", "Minoc"]);
labelFunc0408_010E:
	case "修补匠" attend labelFunc0408_0121:
	message("「这其实不是我余生想做的事。我没有耐性成为一个称职的修补匠。如果你问我的话，我会说我已经牺牲够多了！」");
	say();
	UI_remove_answer("修补匠");
labelFunc0408_0121:
	case "加入" attend labelFunc0408_019D:
	var0005 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0408_0137:
	for (var0008 in var0001 with var0006 to var0007) attend labelFunc0408_014F;
	var0005 = (var0005 + 0x0001);
	goto labelFunc0408_0137;
labelFunc0408_014F:
	if (!(var0005 < 0x0006)) goto labelFunc0408_0192;
	if (!gflags[0x0101]) goto labelFunc0408_0166;
	message("「嗯……好吧。但我不喜欢你叫我离开！」");
	say();
	goto labelFunc0408_016A;
labelFunc0408_0166:
	message("「好啊！这是我的荣幸！」");
	say();
labelFunc0408_016A:
	gflags[0x0108] = true;
	UI_add_to_party(0xFFF8);
	UI_add_answer(["Iolo", "Shamino", "Dupre", "离队"]);
	UI_remove_answer("加入");
	goto labelFunc0408_0196;
labelFunc0408_0192:
	message("「我相信你的队伍中旅行的成员已经够多了。」");
	say();
labelFunc0408_0196:
	UI_remove_answer("加入");
labelFunc0408_019D:
	case "离队" attend labelFunc0408_0225:
	message("「你确定你要我离开吗？」");
	say();
	if (!Func090A()) goto labelFunc0408_021A;
	message("「你是想让我在这里等，还是想让我回家？」");
	say();
	UI_clear_answers();
	var0009 = Func090B(["在这里等", "回家"]);
	if (!(var0009 == "在这里等")) goto labelFunc0408_01F5;
	message("「很好。我会在这里等你回来。」*");
	say();
	gflags[0x0101] = true;
	gflags[0x0108] = false;
	UI_remove_from_party(0xFFF8);
	UI_set_schedule_type(UI_get_npc_object(0xFFF8), 0x000F);
	abort;
	goto labelFunc0408_0217;
labelFunc0408_01F5:
	message("「哼！好吧，如果那是你的愿望，那我就离开！」*");
	say();
	gflags[0x0101] = true;
	gflags[0x0108] = false;
	UI_remove_from_party(0xFFF8);
	UI_set_schedule_type(UI_get_npc_object(0xFFF8), 0x000B);
	abort;
labelFunc0408_0217:
	goto labelFunc0408_021E;
labelFunc0408_021A:
	message("「那我就留下。」");
	say();
labelFunc0408_021E:
	UI_remove_answer("离队");
labelFunc0408_0225:
	case "Minoc" attend labelFunc0408_0245:
	message("「我们镇上发生这些谋杀案，真是太可怕了。 Minoc 曾经是个安全又安静的地方。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["安全又安静", "谋杀案"]);
labelFunc0408_0245:
	case "安全又安静" attend labelFunc0408_0265:
	message("「嗯，至少是安全的，虽然不一定安静。特别是因为 Owen 和他的纪念碑引起了所有的骚动。」");
	say();
	UI_remove_answer("安全又安静");
	UI_add_answer(["Owen", "纪念碑"]);
labelFunc0408_0265:
	case "Owen" attend labelFunc0408_0278:
	message("「Owen 是我们当地的造船匠。坦白说，我觉得他有点像个傻瓜。」");
	say();
	UI_remove_answer("Owen");
labelFunc0408_0278:
	case "纪念碑" attend labelFunc0408_0295:
	message("「友谊会想为 Owen 建一座雕像。这样他们就可以用他作为友谊会理念成功的范例。这也会增加 Owen 的生意，甚至会扰乱当地经济，导致艺术家公会破产！」");
	say();
	if (!gflags[0x00F7]) goto labelFunc0408_028E;
	message("「如果你没有阻止他们的计划，他们就得逞了。」");
	say();
labelFunc0408_028E:
	UI_remove_answer("纪念碑");
labelFunc0408_0295:
	case "谋杀案" attend labelFunc0408_02B5:
	message("「Frederico 和 Tania 在 Minoc 的锯木厂以极其可怕的方式被杀害了。」");
	say();
	UI_remove_answer("谋杀案");
	UI_add_answer(["Frederico 和 Tania", "可怕"]);
labelFunc0408_02B5:
	case "Frederico 和 Tania" attend labelFunc0408_02C8:
	message("「Frederico 是吉普赛人的首领， Tania 是他的妻子。他们住在镇外。我对他们的了解仅止于此。」");
	say();
	UI_remove_answer("Frederico 和 Tania");
labelFunc0408_02C8:
	case "可怕" attend labelFunc0408_02DB:
	message("「Frederico 和 Tania 被谋杀的方式暗示着一场仪式性杀戮。从我听到的消息来看，它与你在 Trinsic 遇到的那起，以及前阵子在不列颠城发生的那起很相似。这是个最令人困惑的谜团。」");
	say();
	UI_remove_answer("可怕");
labelFunc0408_02DB:
	case "设计图" attend labelFunc0408_0314:
	var000A = Func0931(0xFE9B, 0x0001, 0x031D, 0x000B, 0xFE99);
	if (!var000A) goto labelFunc0408_0309;
	message("「我可以看看吗？」她仔细检查了设计图的每一条线。「这些设计有缺陷。按照这些规格建造的船只很容易倾覆并沉没。你应该把这些设计图给镇长看。」");
	say();
	gflags[0x00FD] = true;
	goto labelFunc0408_030D;
labelFunc0408_0309:
	message("「Karl 有 Owen 建造的那些沉船的设计图？！我非常想看看它们。也许我能帮忙找出那些悲剧发生的原因。」");
	say();
labelFunc0408_030D:
	UI_remove_answer("设计图");
labelFunc0408_0314:
	case "Iolo" attend labelFunc0408_035D:
	var000B = Func08F7(0xFFFF);
	if (!(!var000B)) goto labelFunc0408_0333;
	message("「也许我们该去找 Iolo ，让他跟我们一起走。」");
	say();
	goto labelFunc0408_0356;
labelFunc0408_0333:
	message("「哈啰， Iolo 。」*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("「很高兴能再次见到妳， Julia 。」*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_0356:
	UI_remove_answer("Iolo");
labelFunc0408_035D:
	case "Shamino" attend labelFunc0408_03A6:
	var000C = Func08F7(0xFFFD);
	if (!(!var000C)) goto labelFunc0408_037C;
	message("「也许我们该去找 Shamino ，让他跟我们一起走。」");
	say();
	goto labelFunc0408_039F;
labelFunc0408_037C:
	message("「哈啰， Shamino ！」*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("「噢， Julia ！妳能再次加入我们真是太好了！」*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_039F:
	UI_remove_answer("Shamino");
labelFunc0408_03A6:
	case "Dupre" attend labelFunc0408_0411:
	var000D = Func08F7(0xFFFC);
	if (!(!var000D)) goto labelFunc0408_03C5;
	message("「也许我们该去找 Dupre 爵士，让他跟我们一起走。」");
	say();
	goto labelFunc0408_040A;
labelFunc0408_03C5:
	message("「我们的道路再次交会了， Dupre 爵士！」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「Julia ！我正想着我们是否还能再见到妳呢！」*");
	say();
	UI_show_npc_face(0xFFF8, 0x0000);
	message("「好吧，你不用再想了， Dupre 。」*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"");
	message(var0003);
	message("，只有你、我跟路灯知道就好，你最好小心点 Julia 。她脾气可不小。」*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF8, 0x0000);
labelFunc0408_040A:
	UI_remove_answer("Dupre");
labelFunc0408_0411:
	case "Spark" attend labelFunc0408_0469:
	message("「这位优秀的年轻小伙子是谁？」");
	say();
	if (!var0004) goto labelFunc0408_0462;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("「我的名字是 Spark ，女士。」*");
	say();
	UI_show_npc_face(0xFFF8, 0x0000);
	message("「他真可爱！而且很有礼貌！」");
	say();
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark 的脸涨得像甜菜一样红。");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFF8, 0x0000);
	gflags[0x0121] = true;
labelFunc0408_0462:
	UI_remove_answer("Spark");
labelFunc0408_0469:
	case "告辞" attend labelFunc0408_0474:
	goto labelFunc0408_0477;
labelFunc0408_0474:
	goto labelFunc0408_00A3;
labelFunc0408_0477:
	endconv;
	message("「再见，");
	message(var0003);
	message("。」*");
	say();
labelFunc0408_0482:
	if (!(event == 0x0000)) goto labelFunc0408_0490;
	Func092E(0xFFF8);
labelFunc0408_0490:
	return;
}


