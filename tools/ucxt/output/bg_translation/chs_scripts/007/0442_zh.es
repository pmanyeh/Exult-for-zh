#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08EC 0x8EC ();

void Func0442 object#(0x442) ()
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

	if (!(event == 0x0001)) goto labelFunc0442_01E3;
	UI_show_npc_face(0xFFBE, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x00C3])) goto labelFunc0442_0046;
	message("你看见一只非常巨大的老鼠，散发出一种卓越智能的气息。~~「圣者！」她惊呼道。「我不敢相信你在这里，");
	message(var0000);
	message("！」");
	say();
	gflags[0x00C3] = true;
	goto labelFunc0442_0050;
labelFunc0442_0046:
	message("「你好，");
	message(var0000);
	message("！」老鼠 Sherry 惊呼道。");
	say();
labelFunc0442_0050:
	converse attend labelFunc0442_01D8;
	case "姓名" attend labelFunc0442_006C:
	message("「怎么，你不记得 Sherry 了吗，");
	message(var0000);
	message("？」");
	say();
	UI_remove_answer("姓名");
labelFunc0442_006C:
	case "职业" attend labelFunc0442_00A4:
	var0002 = UI_get_schedule_type(0xFFBE);
	if (!(var0002 == 0x0019)) goto labelFunc0442_0090;
	message("「我正努力跟上这些孩子！我们在城堡里玩鬼抓人！我得跑了！晚点在育婴室跟我说话！」*");
	say();
	abort;
	goto labelFunc0442_00A4;
labelFunc0442_0090:
	message("「白天我主要在皇家育婴室协助 Nanna。晚上当 Nanna 去吃晚餐并参加她的友谊会集会时，我会单独看顾孩子们。其他时间我则在城堡里跑来跑去寻找老鼠食物！」");
	say();
	UI_add_answer(["皇家育婴室", "城堡", "老鼠食物"]);
labelFunc0442_00A4:
	case "皇家育婴室" attend labelFunc0442_00C4:
	message("「孩子们太有趣了。我喜欢读他们最喜欢的故事给他们听。碰巧那也是不列颠王最喜欢的童话故事！很多很多年前，他也曾读给我听过。」");
	say();
	UI_remove_answer("皇家育婴室");
	UI_add_answer(["孩子们", "故事"]);
labelFunc0442_00C4:
	case "孩子们" attend labelFunc0442_00D7:
	message("「如果你还没有机会，请务必四处看看并见见他们。他们非常棒，也很逗趣。」");
	say();
	UI_remove_answer("孩子们");
labelFunc0442_00D7:
	case "城堡" attend labelFunc0442_00EA:
	message("「这跟妳上次来的时候差不多。有稍微改建了一下。毕竟，距离你上次来已经两百年了！我相信不列颠王有一个里面装了不少装备的储藏室。」");
	say();
	UI_remove_answer("城堡");
labelFunc0442_00EA:
	case "老鼠食物" attend labelFunc0442_019F:
	message("「嗯，起司是我的最爱。如果你有起司可以给我的话，我会很乐意吃掉它的。但我通常什么都吃。你有带起司给我吗？」");
	say();
	if (!Func090A()) goto labelFunc0442_0194;
	var0003 = Func0931(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x001A);
	var0004 = Func0931(0xFE9B, 0x0001, 0x0179, 0xFE99, 0x001B);
	if (!(var0003 || var0004)) goto labelFunc0442_018D;
	message("「想给我一些吗？」");
	say();
	if (!Func090A()) goto labelFunc0442_0186;
	var0005 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001A, true);
	var0006 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0x001B, true);
	if (!(var0005 || var0006)) goto labelFunc0442_0179;
	message("「谢谢你，");
	message(var0000);
	message("！」");
	say();
	goto labelFunc0442_0183;
labelFunc0442_0179:
	message("「我现在拿不下你的起司，");
	message(var0001);
	message("。」");
	say();
labelFunc0442_0183:
	goto labelFunc0442_018A;
labelFunc0442_0186:
	message("「哼！我还以为我们是朋友呢！」");
	say();
labelFunc0442_018A:
	goto labelFunc0442_0191;
labelFunc0442_018D:
	message("「但你根本没有起司啊！」");
	say();
labelFunc0442_0191:
	goto labelFunc0442_0198;
labelFunc0442_0194:
	message("「太可惜了！如果你找到了，请随时想到我！」");
	say();
labelFunc0442_0198:
	UI_remove_answer("老鼠食物");
labelFunc0442_019F:
	case "故事" attend labelFunc0442_01CA:
	message("「你想听这个故事吗？它叫做『Hubert 的惊悚冒险』。」");
	say();
	if (!Func090A()) goto labelFunc0442_01BF;
	message("Sherry 用后腿站立，深吸了一口气，然后凭着记忆——非常、非常快地背诵了起来：");
	say();
	UI_push_answers();
	Func08EC();
	goto labelFunc0442_01C3;
labelFunc0442_01BF:
	message("「那就下次吧！」");
	say();
labelFunc0442_01C3:
	UI_remove_answer("故事");
labelFunc0442_01CA:
	case "告辞" attend labelFunc0442_01D5:
	goto labelFunc0442_01D8;
labelFunc0442_01D5:
	goto labelFunc0442_0050;
labelFunc0442_01D8:
	endconv;
	message("「再见，");
	message(var0001);
	message("！」*");
	say();
labelFunc0442_01E3:
	if (!(event == 0x0000)) goto labelFunc0442_025A;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFBE));
	if (!(var0002 == 0x0019)) goto labelFunc0442_025A;
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0007 == 0x0001)) goto labelFunc0442_0220;
	var0008 = "@抓到了！当鬼！@";
labelFunc0442_0220:
	if (!(var0007 == 0x0002)) goto labelFunc0442_0230;
	var0008 = "@抓不到我！@";
labelFunc0442_0230:
	if (!(var0007 == 0x0003)) goto labelFunc0442_0240;
	var0008 = "@捏捏！当鬼！@";
labelFunc0442_0240:
	if (!(var0007 == 0x0004)) goto labelFunc0442_0250;
	var0008 = "@有本事就来抓我啊！@";
labelFunc0442_0250:
	UI_item_say(0xFFBE, var0008);
labelFunc0442_025A:
	return;
}


