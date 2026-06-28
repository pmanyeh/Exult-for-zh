#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func088E 0x88E ();
extern void Func0919 0x919 ();
extern void Func092E 0x92E (var var0000);

void Func0435 object#(0x435) ()
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

	if (!(event == 0x0001)) goto labelFunc0435_01FD;
	UI_show_npc_face(0xFFCB, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCB));
	if (!(var0002 == 0x0007)) goto labelFunc0435_006D;
	var0004 = Func08FC(0xFFCB, 0xFFE6);
	if (!var0004) goto labelFunc0435_0058;
	message("Gaye 正在观看友谊会的集会。她唐突地转向你，把手指放在嘴唇上，示意你安静。*");
	say();
	abort;
	goto labelFunc0435_006D;
labelFunc0435_0058:
	if (!gflags[0x00DA]) goto labelFunc0435_0068;
	message("「我无法想像巴特林在哪里。我很担心他……」");
	say();
	goto labelFunc0435_006D;
	goto labelFunc0435_006D;
labelFunc0435_0068:
	message("「我现在不能说话！我正在前往礼堂参加友谊会集会的路上！」*");
	say();
	abort;
labelFunc0435_006D:
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x00B5]) goto labelFunc0435_008A;
	UI_add_answer("Willy");
labelFunc0435_008A:
	if (!(!gflags[0x00B6])) goto labelFunc0435_009C;
	message("你看见一位散发着半真半假友善气息的女人。");
	say();
	gflags[0x00B6] = true;
	goto labelFunc0435_00A0;
labelFunc0435_009C:
	message("「又见面了，今天我能为你做些什么？」 Gaye 问。");
	say();
labelFunc0435_00A0:
	converse attend labelFunc0435_01F2;
	case "姓名" attend labelFunc0435_00B6:
	message("「我的名字是 Gaye 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0435_00B6:
	case "职业" attend labelFunc0435_00D2:
	message("「当我不在追求友谊会教义的时候，我负责管理这里的服饰店。」");
	say();
	UI_add_answer(["服饰店", "买东西", "友谊会"]);
labelFunc0435_00D2:
	case "服饰店" attend labelFunc0435_00E5:
	message("「在我们的服饰店，我们有你见过最精美的丝绸和服装，从不列颠尼亚的各个角落进口，以迎合所有的品味。」");
	say();
	UI_remove_answer("服饰店");
labelFunc0435_00E5:
	case "买东西" attend labelFunc0435_01AD:
	if (!(!(var0003 == 0x0013))) goto labelFunc0435_00FF;
	message("「非常抱歉，服饰店打烊了。请在正常营业时间再来。我们每天早上九点营业到下午六点。」");
	say();
	goto labelFunc0435_01A6;
labelFunc0435_00FF:
	if (!gflags[0x0067]) goto labelFunc0435_0188;
	message("「别告诉我！是 Raymundo 派你来拿圣者服装的！这要三十枚金币。你想要一件吗？」");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc0435_017E;
	message("她上下打量着你。「是的，我想我们应该能为你找到些什么。」~~在店里翻找了几分钟后， Gaye 回来了。「在这里！剩不多了——最近很抢手！」");
	say();
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0006 < 0x001E)) goto labelFunc0435_013D;
	message("「嗯。也许你可以等你有足够的金币再来。」她把服装放下并微笑着。");
	say();
	goto labelFunc0435_017B;
labelFunc0435_013D:
	var0007 = UI_add_party_items(0x0001, 0x0346, 0xFE99, 0xFE99, false);
	if (!(!var0007)) goto labelFunc0435_015F;
	message("「噢。你身上的东西太多，拿不下这个了。也许你可以处理掉一些东西，然后回来拿服装。」");
	say();
	goto labelFunc0435_017B;
labelFunc0435_015F:
	message("「与您做生意真是我的荣幸，喔伟大的圣者！」她笑着把服装递给你。");
	say();
	var0008 = UI_remove_party_items(0x001E, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0068] = true;
labelFunc0435_017B:
	goto labelFunc0435_0185;
labelFunc0435_017E:
	message("「真奇怪！我还以为你肯定是那种戏剧型的人物！」");
	say();
	Func088E();
labelFunc0435_0185:
	goto labelFunc0435_01A6;
labelFunc0435_0188:
	message("「你今天想买些衣服吗？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0435_01A2;
	message("「我们有许多漂亮的衣服可供选择。」");
	say();
	Func088E();
	goto labelFunc0435_01A6;
labelFunc0435_01A2:
	message("「你可以自己随便看看。如果你改变主意，一定要让我知道。」");
	say();
labelFunc0435_01A6:
	UI_remove_answer("买东西");
labelFunc0435_01AD:
	case "友谊会" attend labelFunc0435_01D1:
	if (!(!var0001)) goto labelFunc0435_01BF;
	Func0919();
labelFunc0435_01BF:
	message("「你会想参加今晚九点的友谊会集会的。聆听我们创始人巴特林的演讲，总是一次令人感动的体验。」");
	say();
	UI_remove_answer("友谊会");
	UI_remove_answer("理念");
labelFunc0435_01D1:
	case "Willy" attend labelFunc0435_01E4:
	message("「是的，他是个非常有趣的人。我很为他着迷，也违背理智地与他见面。不过，他看起来不像是会加入友谊会的那种人。既然友谊会是我生命的全部，我不知道里面是否有他的容身之处。我还没拿定主意。」");
	say();
	UI_remove_answer("Willy");
labelFunc0435_01E4:
	case "告辞" attend labelFunc0435_01EF:
	goto labelFunc0435_01F2;
labelFunc0435_01EF:
	goto labelFunc0435_00A0;
labelFunc0435_01F2:
	endconv;
	message("「祝你有美好的一天，");
	message(var0000);
	message("。」*");
	say();
labelFunc0435_01FD:
	if (!(event == 0x0000)) goto labelFunc0435_0284;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFCB));
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0013)) goto labelFunc0435_027E;
	if (!(var000A == 0x0001)) goto labelFunc0435_0241;
	var000B = "@服饰？靴子？@";
labelFunc0435_0241:
	if (!(var000A == 0x0002)) goto labelFunc0435_0251;
	var000B = "@沼泽靴？@";
labelFunc0435_0251:
	if (!(var000A == 0x0003)) goto labelFunc0435_0261;
	var000B = "@上衣？洋装？@";
labelFunc0435_0261:
	if (!(var000A == 0x0004)) goto labelFunc0435_0271;
	var000B = "@这里有华丽的服装！@";
labelFunc0435_0271:
	UI_item_say(0xFFCB, var000B);
	goto labelFunc0435_0284;
labelFunc0435_027E:
	Func092E(0xFFCB);
labelFunc0435_0284:
	return;
}


