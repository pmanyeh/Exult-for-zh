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
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x014F])) goto labelFunc0475_003A;
	message("這個小眼睛的男人對你冷笑。");
	say();
	gflags[0x014F] = true;
	goto labelFunc0475_003E;
labelFunc0475_003A:
	message("「你現在又想要什麼？」 Goth 啐了一口。");
	say();
labelFunc0475_003E:
	if (!gflags[0x012C]) goto labelFunc0475_004B;
	UI_add_answer("買鑰匙");
labelFunc0475_004B:
	converse attend labelFunc0475_02DA;
	case "姓名" attend labelFunc0475_0061:
	message("「Goth 。雖然這不關你的事！」");
	say();
	UI_remove_answer("姓名");
labelFunc0475_0061:
	case "職業" attend labelFunc0475_007A:
	message("「你看我像在做什麼？」他舉起一串鑰匙說。「園藝嗎？」");
	say();
	UI_add_answer(["鑰匙", "園藝"]);
labelFunc0475_007A:
	case "園藝" attend labelFunc0475_0094:
	message("「什麼？你瘋了嗎？」他搖搖頭。「嗯，至少你來對了適合園藝的地方。」");
	say();
	UI_add_answer("區域");
	UI_remove_answer("園藝");
labelFunc0475_0094:
	case "區域" attend labelFunc0475_00AE:
	message("「共情修道院，笨蛋！」");
	say();
	UI_add_answer("共情修道院");
	UI_remove_answer("區域");
labelFunc0475_00AE:
	case "共情修道院" attend labelFunc0475_00DB:
	message("「事實上，我對住在這的人了解不少。而且我說不定會告訴你。對你來說這值多少金幣？」");
	say();
	UI_push_answers();
	UI_add_answer(["什麼都不給", "2", "3", "4", "5"]);
	UI_remove_answer("共情修道院");
labelFunc0475_00DB:
	case "什麼都不給" attend labelFunc0475_00EB:
	UI_pop_answers();
	message("「我沒意見！」");
	say();
labelFunc0475_00EB:
	case "2", "3", "4" attend labelFunc0475_00FD:
	message("他對你怒目而視。「你得多給點才行，蠢貨！」");
	say();
labelFunc0475_00FD:
	case "5" attend labelFunc0475_015A:
	UI_pop_answers();
	var0001 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0001 > 0x0004)) goto labelFunc0475_0143;
	var0002 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0x0000, 0x0000);
	message("「我會告訴你我所知道的： Jeff 爵士掌管高等法院。他是個真正的惡棍，所以我建議你離他遠點。附近的僧侶釀的酒很棒，而且 Aimi 能溫暖男人的……心。還有不管你做什麼，別浪費時間跟那個棺材佬說話——他腦袋有問題。」");
	say();
	goto labelFunc0475_0147;
labelFunc0475_0143:
	message("「你沒有足夠的金幣，癩蛤蟆。」");
	say();
labelFunc0475_0147:
	UI_remove_answer(["2", "3", "4", "5"]);
labelFunc0475_015A:
	case "鑰匙" attend labelFunc0475_017A:
	message("「這些？這是牢房的鑰匙，無腦的惡棍！」");
	say();
	UI_add_answer(["囚犯", "買鑰匙"]);
	UI_remove_answer("鑰匙");
labelFunc0475_017A:
	case "囚犯" attend labelFunc0475_01E4:
	message("「給我 5 個金幣我就告訴你。有興趣嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0475_01D8;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 > 0x0004)) goto labelFunc0475_01D1;
	var0005 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	message("「其中一個叫 D'Rel 。他是個海盜，來自海盜巢穴。」");
	say();
	UI_add_answer("另一個囚犯");
	goto labelFunc0475_01D5;
labelFunc0475_01D1:
	message("「你沒有足夠的錢，石頭腦袋。」");
	say();
labelFunc0475_01D5:
	goto labelFunc0475_01DD;
labelFunc0475_01D8:
	message("「小氣鬼！」*");
	say();
	abort;
labelFunc0475_01DD:
	UI_remove_answer("囚犯");
labelFunc0475_01E4:
	case "另一個囚犯" attend labelFunc0475_024E:
	message("「還要另一個消息，嗯。你還有 5 個金幣給我嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc0475_0242;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0007 > 0x0004)) goto labelFunc0475_023B;
	message("「另一個是個巨魔 (troll) 。他不怎麼說話，但這是我第一次見到巨魔囚犯。」");
	say();
	var0008 = UI_remove_party_items(0x0005, 0x0284, 0xFE99, 0xFE99, true);
	UI_remove_answer("另一個囚犯");
	goto labelFunc0475_023F;
labelFunc0475_023B:
	message("「你騙不了我，無腦的笨蛋。你沒有足夠的金幣！」");
	say();
labelFunc0475_023F:
	goto labelFunc0475_0247;
labelFunc0475_0242:
	message("「很好，鼻涕蟲！」*");
	say();
	abort;
labelFunc0475_0247:
	UI_remove_answer("另一個囚犯");
labelFunc0475_024E:
	case "買鑰匙" attend labelFunc0475_02CC:
	message("「你想要這些，嗯？」他舉起鑰匙問。「這要花你…… 20 個金幣。還想要嗎？」");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0475_02C0;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000A > 0x0013)) goto labelFunc0475_02B9;
	message("「成交！」");
	say();
	var000B = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, false);
	var000C = UI_add_party_items(0x0001, 0x0281, 0x00F8, 0xFE99, false);
	UI_remove_answer("買鑰匙");
	goto labelFunc0475_02BD;
labelFunc0475_02B9:
	message("他殘忍地笑了笑。「恐怕你沒有足夠的金幣。」");
	say();
labelFunc0475_02BD:
	goto labelFunc0475_02C5;
labelFunc0475_02C0:
	message("\"Fine. Rot for all I care!*");
	say();
	abort;
labelFunc0475_02C5:
	UI_remove_answer("買鑰匙");
labelFunc0475_02CC:
	case "告辭" attend labelFunc0475_02D7:
	goto labelFunc0475_02DA;
labelFunc0475_02D7:
	goto labelFunc0475_004B;
labelFunc0475_02DA:
	endconv;
	message("「的確，惡棍。快滾吧！」*");
	say();
labelFunc0475_02DF:
	if (!(event == 0x0000)) goto labelFunc0475_02E8;
	abort;
labelFunc0475_02E8:
	return;
}


