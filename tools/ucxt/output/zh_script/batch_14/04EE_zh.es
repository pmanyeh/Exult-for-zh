#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08CA 0x8CA (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04EE object#(0x4EE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04EE_017C;
	UI_show_npc_face(0xFF12, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0145])) goto labelFunc04EE_003C;
	message("你面前的男人伸了個懶腰，深深吸了一口氣。");
	say();
	goto labelFunc04EE_0046;
labelFunc04EE_003C:
	message("「榮耀的一天，");
	message(var0000);
	message("。」 Perrin 咧嘴笑了。");
	say();
labelFunc04EE_0046:
	converse attend labelFunc04EE_0171;
	case "姓名" attend labelFunc04EE_0069:
	message("「請，");
	message(var0001);
	message("，叫我 Perrin 。我住在 Empath Abbey 這裡。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("同理修道院 (Empath Abbey)");
labelFunc04EE_0069:
	case "職業" attend labelFunc04EE_00BA:
	message("「我是個學者，");
	message(var0001);
	message("。你想要在書本領域接受訓練嗎？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04EE_00B6;
	message("「我的價格是每次訓練 45 金幣，但我還會教你我所知道的一點點魔法。可以接受嗎？」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04EE_00A9;
	Func08CA([0x0002, 0x0006], 0x002D);
	goto labelFunc04EE_00B3;
labelFunc04EE_00A9:
	message("「很好，");
	message(var0001);
	message("。」");
	say();
labelFunc04EE_00B3:
	goto labelFunc04EE_00BA;
labelFunc04EE_00B6:
	message("「原諒我，我在尋找學生方面有點太過熱心了。我希望你未來會回來。」");
	say();
labelFunc04EE_00BA:
	case "同理修道院 (Empath Abbey)" attend labelFunc04EE_00DD:
	message("「這是個令人愉快的地方。我喜歡這種隱私，讓我有機會在需要時專心研究。友誼會就在馬路對面，而且我附近有一位治療師。另外，我開始了一項關於處理死亡對殯葬業者影響的研究。我正以 Tiery 作為案例研究。」");
	say();
	UI_add_answer(["修道院", "治療師", "Tiery"]);
	UI_remove_answer("同理修道院 (Empath Abbey)");
labelFunc04EE_00DD:
	case "修道院" attend labelFunc04EE_0100:
	message("「那是修道院。住在那裡的僧侶以釀造精美葡萄酒的能力而聞名。附近有高等法院和監獄。」");
	say();
	UI_remove_answer("修道院");
	UI_add_answer(["葡萄酒", "高等法院", "監獄"]);
labelFunc04EE_0100:
	case "葡萄酒" attend labelFunc04EE_0113:
	message("「你應該嚐嚐看。僧侶們已經釀造了三百多年！」");
	say();
	UI_remove_answer("葡萄酒");
labelFunc04EE_0113:
	case "高等法院" attend labelFunc04EE_0126:
	message("「那裡的官員名叫 Sir Jeff 。據我所知，他對底下的人管得很嚴。我一點也不羨慕和他一起工作的獄卒。整天跟在這麼嚴格的紀律奉行者身邊一定非常困難。」");
	say();
	UI_remove_answer("高等法院");
labelFunc04EE_0126:
	case "監獄" attend labelFunc04EE_0139:
	message("「它就位於法庭後面。而且，」他咧嘴笑著，「我很自豪地說，那至少是我一無所知的一件事。」");
	say();
	UI_remove_answer("監獄");
labelFunc04EE_0139:
	case "Tiery" attend labelFunc04EE_014C:
	message("「他是住在友誼會北邊的殯葬業者。」");
	say();
	UI_remove_answer("Tiery");
labelFunc04EE_014C:
	case "治療師" attend labelFunc04EE_0163:
	message("「我還沒見過她，但我知道她喜歡動物。我曾看過她和棲息在這個地區的鹿與松鼠玩耍。」");
	say();
	UI_remove_answer("治療師");
	gflags[0x013B] = true;
labelFunc04EE_0163:
	case "告辭" attend labelFunc04EE_016E:
	goto labelFunc04EE_0171;
labelFunc04EE_016E:
	goto labelFunc04EE_0046;
labelFunc04EE_0171:
	endconv;
	message("「再見，");
	message(var0000);
	message("。祝你的旅程順利。」*");
	say();
labelFunc04EE_017C:
	if (!(event == 0x0000)) goto labelFunc04EE_018A;
	Func092E(0xFF12);
labelFunc04EE_018A:
	return;
}


