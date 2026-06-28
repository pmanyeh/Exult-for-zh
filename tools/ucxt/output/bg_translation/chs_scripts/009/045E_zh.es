#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func08A6 0x8A6 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func045E object#(0x45E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc045E_0263;
	UI_show_npc_face(0xFFA2, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA2));
	UI_add_answer(["姓名", "职业", "告辞", "谋杀"]);
	if (!gflags[0x00F4]) goto labelFunc045E_004D;
	UI_add_answer("吉普赛人");
labelFunc045E_004D:
	if (!gflags[0x00F5]) goto labelFunc045E_005A;
	UI_add_answer("有魅力");
labelFunc045E_005A:
	if (!(!gflags[0x0119])) goto labelFunc045E_006C;
	message("你看到一个神情鬼祟的女人，全身穿着绿色。她脸上带着邪恶的笑容。");
	say();
	gflags[0x0119] = true;
	goto labelFunc045E_0070;
labelFunc045E_006C:
	message("「再次见到你真好，」Karenna 说。");
	say();
labelFunc045E_0070:
	converse attend labelFunc045E_025E;
	case "姓名" attend labelFunc045E_0086:
	message("「我只回应 Karenna 这个名字，其他一概不理。」");
	say();
	UI_remove_answer("姓名");
labelFunc045E_0086:
	case "职业" attend labelFunc045E_00C0:
	if (!gflags[0x011F]) goto labelFunc045E_00AB;
	message("「我是 Minoc 的教师，和 Jakher 一起。」");
	say();
	UI_add_answer(["教师", "Minoc", "Jakher"]);
	goto labelFunc045E_00C0;
labelFunc045E_00AB:
	message("「在这种时候问这个问题真是奇怪，");
	message(var0000);
	message("。你知道有两个人死在那座锯木厂里，而且他们死于身分不明的凶手或凶手们的手中吗？」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀");
labelFunc045E_00C0:
	case "Minoc" attend labelFunc045E_00E0:
	message("「Minoc 通常很忙碌，但很安静。然后我们的城镇就被 Owen 纪念碑这些无稽之谈给困扰，现在又发生了这些谋杀案。」");
	say();
	UI_add_answer(["纪念碑", "谋杀"]);
	UI_remove_answer("Minoc");
labelFunc045E_00E0:
	case "谋杀" attend labelFunc045E_00F3:
	message("「令人震惊！这种事通常不会发生在这里。这充分证明了懂得如何自卫的价值。」");
	say();
	UI_remove_answer("谋杀");
labelFunc045E_00F3:
	case "Jakher" attend labelFunc045E_0146:
	message("「他本身是个相当能干的训练师。当然没有我这么熟练。但我确实觉得他很可爱，不过我求你，别告诉他我说过这事。那只会助长他的气焰。」");
	say();
	var0003 = Func08F7(0xFFA1);
	if (!var0003) goto labelFunc045E_013B;
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「你是在说我吗？我的耳朵在发烫呢！」*");
	say();
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「没什么你需要担心的事，Jakher。」她对你眨了眨眼。*");
	say();
	UI_remove_npc_face(0xFFA1);
	UI_show_npc_face(0xFFA2, 0x0000);
labelFunc045E_013B:
	gflags[0x00F6] = true;
	UI_remove_answer("Jakher");
labelFunc045E_0146:
	case "教师" attend labelFunc045E_018D:
	if (!(var0002 == 0x001B)) goto labelFunc045E_0182;
	message("「我教授那种能让人在过程中不致丧命、从而学习所有人生课题的奇特技能。战斗！~~「我每次训练将向你收取 20 枚金币。你还有兴趣吗？」");
	say();
	if (!Func090A()) goto labelFunc045E_0174;
	Func08A6([0x0001, 0x0004], 0x0014);
	goto labelFunc045E_017F;
labelFunc045E_0174:
	message("「很好。如果你运气好，你将不会有后悔的理由。」");
	say();
	UI_remove_answer("教师");
labelFunc045E_017F:
	goto labelFunc045E_018D;
labelFunc045E_0182:
	message("「我们的店现在已经打烊了。请在营业时间过来。」");
	say();
	UI_remove_answer("教师");
labelFunc045E_018D:
	case "纪念碑" attend labelFunc045E_01A7:
	message("「我听说它会有三十英尺高，并展示我们当地的造船匠高举六分仪的样子。你不会相信这么无害的东西竟然能惹出这么大麻烦。」");
	say();
	UI_remove_answer("纪念碑");
	UI_add_answer("麻烦");
labelFunc045E_01A7:
	case "麻烦" attend labelFunc045E_01C1:
	message("「看来良好市民之间对我们造船匠纪念碑日益增加的敌意，让许多当地民众充满了学习战斗技能的强烈渴望。生意从来没这么好过！」");
	say();
	UI_remove_answer("麻烦");
	UI_add_answer("敌意");
labelFunc045E_01C1:
	case "敌意" attend labelFunc045E_01D4:
	message("「镇上每个人都为了这事那事大动肝火。但其他人肯定比我更了解这些地方政治。我才不在乎。」");
	say();
	UI_remove_answer("敌意");
labelFunc045E_01D4:
	case "有魅力" attend labelFunc045E_0223:
	message("「Jakher 告诉你他觉得我有魅力？他当然否认，但我很多年前就知道他对我有感觉。」");
	say();
	var0003 = Func08F7(0xFFA1);
	if (!var0003) goto labelFunc045E_021C;
	UI_show_npc_face(0xFFA1, 0x0000);
	message("「什么？你说什么？」*");
	say();
	UI_show_npc_face(0xFFA2, 0x0000);
	message("「没事，Jakher。走开。」她对你发出心照不宣的咯咯笑声。*");
	say();
	UI_remove_npc_face(0xFFA1);
	UI_show_npc_face(0xFFA2, 0x0000);
labelFunc045E_021C:
	UI_remove_answer("有魅力");
labelFunc045E_0223:
	case "吉普赛人" attend labelFunc045E_023D:
	message("「吉普赛人的首领 Frederico 和他妻子 Tania 都是好人。哎，我所知道他们做过最糟糕的事，也不过是个简单的恶作剧罢了。」");
	say();
	UI_remove_answer("吉普赛人");
	UI_add_answer("恶作剧");
labelFunc045E_023D:
	case "恶作剧" attend labelFunc045E_0250:
	message("「有一次 Frederico 丢石头砸破了当地友谊会分会的窗户……喔，好吧，我觉得那满有趣的！」");
	say();
	UI_remove_answer("恶作剧");
labelFunc045E_0250:
	case "告辞" attend labelFunc045E_025B:
	goto labelFunc045E_025E;
labelFunc045E_025B:
	goto labelFunc045E_0070;
labelFunc045E_025E:
	endconv;
	message("「再会。愿你所有的旅程都充满乐趣。」*");
	say();
labelFunc045E_0263:
	if (!(event == 0x0000)) goto labelFunc045E_0271;
	Func092E(0xFFA2);
labelFunc045E_0271:
	return;
}


