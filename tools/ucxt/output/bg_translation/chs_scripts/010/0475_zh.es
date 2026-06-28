#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0475 object#(0x475) ()
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

	if (!(event == 0x0001)) goto labelFunc0475_02DF;
	UI_show_npc_face(0xFF8B, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x014F])) goto labelFunc0475_003A;
	message("这个小眼睛的男人对你冷笑。");
	say();
	gflags[0x014F] = true;
	goto labelFunc0475_003E;
labelFunc0475_003A:
	message("「你现在又想要什么？」 Goth 啐了一口。");
	say();
labelFunc0475_003E:
	if (!gflags[0x012C]) goto labelFunc0475_004B;
	UI_add_answer("买钥匙");
labelFunc0475_004B:
	converse attend labelFunc0475_02DA;
	case "姓名" attend labelFunc0475_0061:
	message("「Goth 。虽然这不关你的事！」");
	say();
	UI_remove_answer("姓名");
labelFunc0475_0061:
	case "职业" attend labelFunc0475_007A:
	message("「你看我像在做什么？」他举起一串钥匙说。「园艺吗？」");
	say();
	UI_add_answer(["钥匙", "园艺"]);
labelFunc0475_007A:
	case "园艺" attend labelFunc0475_0094:
	message("「什么？你疯了吗？」他摇摇头。「嗯，至少你来对了适合园艺的地方。」");
	say();
	UI_add_answer("区域");
	UI_remove_answer("园艺");
labelFunc0475_0094:
	case "区域" attend labelFunc0475_00AE:
	message("「人神修道院，笨蛋！」");
	say();
	UI_add_answer("人神修道院");
	UI_remove_answer("区域");
labelFunc0475_00AE:
	case "人神修道院" attend labelFunc0475_00DB:
	message("「事实上，我对住在这的人了解不少。而且我说不定会告诉你。对你来说这值多少金币？」");
	say();
	UI_push_answers();
	UI_add_answer(["什么都不给", "2", "3", "4", "5"]);
	UI_remove_answer("人神修道院");
labelFunc0475_00DB:
	case "什么都不给" attend labelFunc0475_00EB:
	UI_pop_answers();
	message("「我没意见！」");
	say();
labelFunc0475_00EB:
	case "2", "3", "4" attend labelFunc0475_00FD:
	message("他对你怒目而视。「你得多给点才行，蠢货！」");
	say();
labelFunc0475_00FD:
	case "5" attend labelFunc0475_015A:
	UI_pop_answers();
	var0001 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0001 > 0x0004)) goto labelFunc0475_0143;
	var0002 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0x0000, 0x0000);
	message("「我会告诉你我所知道的： Jeff 爵士掌管高等法院。他是个真正的恶棍，所以我建议你离他远点。附近的僧侣酿的酒很棒，而且 Aimi 能温暖男人的……心。还有不管你做什么，别浪费时间跟那个棺材佬说话——他脑袋有问题。」");
	say();
	goto labelFunc0475_0147;
labelFunc0475_0143:
	message("「你没有足够的金币，癞蛤蟆。」");
	say();
labelFunc0475_0147:
	UI_remove_answer(["2", "3", "4", "5"]);
labelFunc0475_015A:
	case "钥匙" attend labelFunc0475_017A:
	message("「这些？这是牢房的钥匙，无脑的恶棍！」");
	say();
	UI_add_answer(["囚犯", "买钥匙"]);
	UI_remove_answer("钥匙");
labelFunc0475_017A:
	case "囚犯" attend labelFunc0475_01E4:
	message("「给我 5 个金币我就告诉你。有兴趣吗？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0475_01D8;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 > 0x0004)) goto labelFunc0475_01D1;
	var0005 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	message("「其中一个叫 D'Rel 。他是个海盗，来自海盗巢穴。」");
	say();
	UI_add_answer("另一个囚犯");
	goto labelFunc0475_01D5;
labelFunc0475_01D1:
	message("「你没有足够的钱，石头脑袋。」");
	say();
labelFunc0475_01D5:
	goto labelFunc0475_01DD;
labelFunc0475_01D8:
	message("「小气鬼！」*");
	say();
	abort;
labelFunc0475_01DD:
	UI_remove_answer("囚犯");
labelFunc0475_01E4:
	case "另一个囚犯" attend labelFunc0475_024E:
	message("「还要另一个消息，嗯。你还有 5 个金币给我吗？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0475_0242;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0007 > 0x0004)) goto labelFunc0475_023B;
	message("「另一个是个巨魔 (troll) 。他不怎么说话，但这是我第一次见到巨魔囚犯。」");
	say();
	var0008 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	UI_remove_answer("另一个囚犯");
	goto labelFunc0475_023F;
labelFunc0475_023B:
	message("「你骗不了我，无脑的笨蛋。你没有足够的金币！」");
	say();
labelFunc0475_023F:
	goto labelFunc0475_0247;
labelFunc0475_0242:
	message("「很好，鼻涕虫！」*");
	say();
	abort;
labelFunc0475_0247:
	UI_remove_answer("另一个囚犯");
labelFunc0475_024E:
	case "买钥匙" attend labelFunc0475_02CC:
	message("「你想要这些，嗯？」他举起钥匙问。「这要花你…… 20 个金币。还想要吗？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0475_02C0;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A > 0x0013)) goto labelFunc0475_02B9;
	message("「成交！」");
	say();
	var000B = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, false);
	var000C = UI_add_party_items(0x0001, 0x0281, 0x00F8, 0xFE99, false);
	UI_remove_answer("买钥匙");
	goto labelFunc0475_02BD;
labelFunc0475_02B9:
	message("他残忍地笑了笑。「恐怕你没有足够的金币。」");
	say();
labelFunc0475_02BD:
	goto labelFunc0475_02C5;
labelFunc0475_02C0:
	message("\"Fine. Rot for all I care!*");
	say();
	abort;
labelFunc0475_02C5:
	UI_remove_answer("买钥匙");
labelFunc0475_02CC:
	case "告辞" attend labelFunc0475_02D7:
	goto labelFunc0475_02DA;
labelFunc0475_02D7:
	goto labelFunc0475_004B;
labelFunc0475_02DA:
	endconv;
	message("「的确，恶棍。快滚吧！」*");
	say();
labelFunc0475_02DF:
	if (!(event == 0x0000)) goto labelFunc0475_02E8;
	abort;
labelFunc0475_02E8:
	return;
}


