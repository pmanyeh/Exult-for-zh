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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0145])) goto labelFunc04EE_003C;
	message("你面前的男人伸了个懒腰，深深吸了一口气。");
	say();
	goto labelFunc04EE_0046;
labelFunc04EE_003C:
	message("「荣耀的一天，");
	message(var0000);
	message("。」 Perrin 咧嘴笑了。");
	say();
labelFunc04EE_0046:
	converse attend labelFunc04EE_0171;
	case "姓名" attend labelFunc04EE_0069:
	message("「请，");
	message(var0001);
	message("，叫我 Perrin 。我住在人神修道院这里。」");
	say();
	UI_remove_answer("姓名");
	UI_add_answer("人神修道院");
labelFunc04EE_0069:
	case "职业" attend labelFunc04EE_00BA:
	message("「我是个学者，");
	message(var0001);
	message("。你想要在书本领域接受训练吗？」");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04EE_00B6;
	message("「我的价格是每次训练 45 金币，但我还会教你我所知道的一点点魔法。可以接受吗？」");
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
	message("「原谅我，我在寻找学生方面有点太过热心了。我希望你未来会回来。」");
	say();
labelFunc04EE_00BA:
	case "人神修道院" attend labelFunc04EE_00DD:
	message("「这是个令人愉快的地方。我喜欢这种隐私，让我有机会在需要时专心研究。友谊会就在马路对面，而且我附近有一位治疗师。另外，我开始了一项关于处理死亡对殡葬业者影响的研究。我正以 Tiery 作为案例研究。」");
	say();
	UI_add_answer(["修道院", "治疗师", "Tiery"]);
	UI_remove_answer("人神修道院");
labelFunc04EE_00DD:
	case "修道院" attend labelFunc04EE_0100:
	message("「那是修道院。住在那里的僧侣以酿造精美葡萄酒的能力而闻名。附近有高等法院和监狱。」");
	say();
	UI_remove_answer("修道院");
	UI_add_answer(["葡萄酒", "高等法院", "监狱"]);
labelFunc04EE_0100:
	case "葡萄酒" attend labelFunc04EE_0113:
	message("「你应该尝尝看。僧侣们已经酿造了三百多年！」");
	say();
	UI_remove_answer("葡萄酒");
labelFunc04EE_0113:
	case "高等法院" attend labelFunc04EE_0126:
	message("「那里的官员名叫 Sir Jeff 。据我所知，他对底下的人管得很严。我一点也不羡慕和他一起工作的狱卒。整天跟在这么严格的纪律奉行者身边一定非常困难。」");
	say();
	UI_remove_answer("高等法院");
labelFunc04EE_0126:
	case "监狱" attend labelFunc04EE_0139:
	message("「它就位于法庭后面。而且，」他咧嘴笑着，「我很自豪地说，那至少是我一无所知的一件事。」");
	say();
	UI_remove_answer("监狱");
labelFunc04EE_0139:
	case "Tiery" attend labelFunc04EE_014C:
	message("「他是住在友谊会北边的殡葬业者。」");
	say();
	UI_remove_answer("Tiery");
labelFunc04EE_014C:
	case "治疗师" attend labelFunc04EE_0163:
	message("「我还没见过她，但我知道她喜欢动物。我曾看过她和栖息在这个地区的鹿与松鼠玩耍。」");
	say();
	UI_remove_answer("治疗师");
	gflags[0x013B] = true;
labelFunc04EE_0163:
	case "告辞" attend labelFunc04EE_016E:
	goto labelFunc04EE_0171;
labelFunc04EE_016E:
	goto labelFunc04EE_0046;
labelFunc04EE_0171:
	endconv;
	message("「再见，");
	message(var0000);
	message("。祝你的旅程顺利。」*");
	say();
labelFunc04EE_017C:
	if (!(event == 0x0000)) goto labelFunc04EE_018A;
	Func092E(0xFF12);
labelFunc04EE_018A:
	return;
}


