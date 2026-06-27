#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func08CB 0x8CB ();
extern void Func08CC 0x8CC ();
extern void Func092E 0x92E (var var0000);

void Func04A3 object#(0x4A3) ()
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

	if (!(event == 0x0001)) goto labelFunc04A3_0420;
	UI_show_npc_face(0xFF5D, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = Func08F7(0xFFFC);
	var0003 = UI_part_of_day();
	var0004 = false;
	if (!(var0003 == 0x0007)) goto labelFunc04A3_0067;
	var0005 = Func08FC(0xFF5D, 0xFF06);
	if (!var0005) goto labelFunc04A3_005C;
	message("「抱歉，");
	message(var0001);
	message("，我晚點再跟你聊。但我現在想專心開會。」");
	say();
	abort;
	goto labelFunc04A3_0067;
labelFunc04A3_005C:
	message("「抱歉，");
	message(var0001);
	message("，我得去參加友誼會的集會！」");
	say();
	abort;
labelFunc04A3_0067:
	UI_add_answer(["姓名", "職業", "友誼會", "告辭"]);
	if (!var0002) goto labelFunc04A3_00A3;
	message("「哎呀，你好，Dupre 爵士。一切都好吧？」");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("「你好，親愛的 Phearcy。是的，謝謝你，一切都好。」");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF5D, 0x0000);
labelFunc04A3_00A3:
	if (!(!gflags[0x0205])) goto labelFunc04A3_00B5;
	message("「你看到一個對你友善微笑的男人。」");
	say();
	gflags[0x0205] = true;
	goto labelFunc04A3_00BF;
labelFunc04A3_00B5:
	message("「我能為您效勞嗎，");
	message(var0001);
	message("？」Phearcy 問道。");
	say();
labelFunc04A3_00BF:
	if (!gflags[0x01DA]) goto labelFunc04A3_0138;
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0138;
	message("「你找到 Zelda 情緒波動的原因了嗎？」");
	say();
	var0006 = Func090A();
	if (!var0006) goto labelFunc04A3_012E;
	message("「太好了。在我去拿你的點心時告訴我吧。」當他為你準備餐點時，你告訴他你所知道關於 Zelda 和 Brion 的事。");
	say();
	var0007 = UI_add_party_items(0x0005, 0x0179, 0xFE99, 0x000F, true);
	if (!(!var0007)) goto labelFunc04A3_0108;
	message("「太糟糕了，");
	message(var0001);
	message("。等你的行囊輕一點時，我再把肉乾給你。」");
	say();
	goto labelFunc04A3_010C;
labelFunc04A3_0108:
	gflags[0x01D9] = true;
labelFunc04A3_010C:
	var0008 = UI_add_party_items(0x0005, 0x0268, 0xFE99, 0x0000, true);
	if (!(!var0008)) goto labelFunc04A3_012B;
	message("「等你的負重輕一點時，我才能把飲料給你。」");
	say();
labelFunc04A3_012B:
	goto labelFunc04A3_0138;
labelFunc04A3_012E:
	message("「真可惜，");
	message(var0001);
	message("。也許你下次就會知道了。」");
	say();
labelFunc04A3_0138:
	converse attend labelFunc04A3_041B;
	case "姓名" attend labelFunc04A3_014E:
	message("「我是 Phearcy，為您效勞。」他微微鞠了個躬。");
	say();
	UI_remove_answer("姓名");
labelFunc04A3_014E:
	case "職業" attend labelFunc04A3_0167:
	message("「我是 Moonglow 這裡的酒保。」");
	say();
	UI_add_answer(["Moonglow", "買東西"]);
labelFunc04A3_0167:
	case "友誼會" attend labelFunc04A3_0181:
	message("「哦，你是指這個？」他指著他的徽章問道。「你沒聽說過友誼會嗎？我強烈建議你去分會辦公室和 Rankin 或 Balayna 談談。友誼會為我們鎮上，甚至整個不列顛尼亞做了許多事。我是一個堅定的新現實主義信徒。」");
	say();
	UI_add_answer("新現實主義");
	UI_remove_answer("友誼會");
labelFunc04A3_0181:
	case "新現實主義" attend labelFunc04A3_0194:
	message("「這是友誼會的基本原則。它由內在力量的三位一體組成，也就是努力團結、信任你的兄弟，還有……另一個是……喔，對了，善有善報，諸如此類的。」");
	say();
	UI_remove_answer("新現實主義");
labelFunc04A3_0194:
	case "Moonglow" attend labelFunc04A3_01CA:
	message("「你想打聽鎮上的某個人？你問對人了。我對 Moonglow 這裡的居民瞭如指掌。我很樂意告訴你住在這裡的任何店主、學者或農夫。還是你對訓練師、治療師、法師或友誼會領袖感興趣？」");
	say();
	UI_remove_answer("Moonglow");
	UI_push_answers();
	UI_add_answer(["沒有人", "店主", "學者", "農夫們", "訓練師", "治療師", "法師", "領袖"]);
labelFunc04A3_01CA:
	case "學者" attend labelFunc04A3_01F0:
	message("「啊，博學的學者們。我可以告訴你關於 Brion、Nelson、Zelda 和 Jillian 的事。」");
	say();
	UI_push_answers();
	UI_add_answer(["沒有人", "Brion", "Nelson", "Zelda", "Jillian"]);
labelFunc04A3_01F0:
	case "領袖" attend labelFunc04A3_0210:
	message("「你想知道關於負責人還是他的書記的事？」");
	say();
	UI_push_answers();
	UI_add_answer(["沒有人", "負責人", "書記"]);
labelFunc04A3_0210:
	case "法師" attend labelFunc04A3_023B:
	message("「啊，對了，Mariah 人很好。」");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_0229;
	message("「她可以賣給你很多法術。」");
	say();
	goto labelFunc04A3_0234;
labelFunc04A3_0229:
	if (!(!var0004)) goto labelFunc04A3_0234;
	message("「但我更想討論 Zelda。」");
	say();
labelFunc04A3_0234:
	UI_remove_answer("法師");
labelFunc04A3_023B:
	case "店主" attend labelFunc04A3_0260:
	message("「她是一位裁縫。可愛的女人，那個 Carlyn。晚上我去參加友誼會集會時，她會幫忙看管酒吧。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0259;
	if (!(!var0004)) goto labelFunc04A3_0259;
	message("「但我寧願討論 Zelda。」");
	say();
labelFunc04A3_0259:
	UI_remove_answer("店主");
labelFunc04A3_0260:
	case "Jillian" attend labelFunc04A3_028C:
	message("「很棒的學者。非常好的人。與 Effrem 結了婚。」");
	say();
	UI_add_answer("Effrem");
	if (!(!gflags[0x01D9])) goto labelFunc04A3_0285;
	if (!(!var0004)) goto labelFunc04A3_0285;
	message("「但我更想討論 Zelda。」");
	say();
labelFunc04A3_0285:
	UI_remove_answer("Jillian");
labelFunc04A3_028C:
	case "Effrem" attend labelFunc04A3_02B7:
	message("「友善的傢伙——我喜歡他。」");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_02A5;
	message("「他待在家裡照顧他們的兒子。」");
	say();
	goto labelFunc04A3_02B0;
labelFunc04A3_02A5:
	if (!(!var0004)) goto labelFunc04A3_02B0;
	message("「但我更想討論 Brion。」");
	say();
labelFunc04A3_02B0:
	UI_remove_answer("Effrem");
labelFunc04A3_02B7:
	case "訓練師" attend labelFunc04A3_02DC:
	message("「Chad 是個友善的傢伙——我喜歡他。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_02D5;
	if (!(!var0004)) goto labelFunc04A3_02D5;
	message("「但我寧願討論 Brion。」");
	say();
labelFunc04A3_02D5:
	UI_remove_answer("訓練師");
labelFunc04A3_02DC:
	case "農夫們" attend labelFunc04A3_0301:
	message("「Tolemac 和 Cubolt 是兄弟。在 Morz 的幫助下，他們經營著一個農場。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_02FA;
	if (!(!var0004)) goto labelFunc04A3_02FA;
	message("「但我更想談談 Brion。」");
	say();
labelFunc04A3_02FA:
	UI_remove_answer("農夫們");
labelFunc04A3_0301:
	case "治療師" attend labelFunc04A3_032C:
	message("「友善的傢伙——我喜歡他。他的名字是 Elad。」");
	say();
	if (!gflags[0x01D9]) goto labelFunc04A3_031A;
	message("「可悲的是，他真正的願望是離開 Moonglow 去尋找冒險。但他不會離開，因為他覺得對他的病人有太多的責任。」Phearcy 聳了聳肩。~「也許這並非沒有道理。」");
	say();
	goto labelFunc04A3_0325;
labelFunc04A3_031A:
	if (!(!var0004)) goto labelFunc04A3_0325;
	message("「但 Brion 對我來說更有趣。」");
	say();
labelFunc04A3_0325:
	UI_remove_answer("治療師");
labelFunc04A3_032C:
	case "Nelson" attend labelFunc04A3_0351:
	message("「他是 Brion 的雙胞胎兄弟。」");
	say();
	if (!(!gflags[0x01D9])) goto labelFunc04A3_034A;
	if (!(!var0004)) goto labelFunc04A3_034A;
	message("「說到這個，我想討論一下 Brion。」");
	say();
labelFunc04A3_034A:
	UI_remove_answer("Nelson");
labelFunc04A3_0351:
	case "負責人" attend labelFunc04A3_0364:
	message("「Rankin 負責整個當地分會。如果你對友誼會有任何疑問，他都能為你解答。」");
	say();
	UI_remove_answer("負責人");
labelFunc04A3_0364:
	case "書記" attend labelFunc04A3_0377:
	message("「如果你對友誼會有任何疑問，Balayna 都能為你解答。」");
	say();
	UI_remove_answer("書記");
labelFunc04A3_0377:
	case "Brion", "Zelda" attend labelFunc04A3_03A4:
	if (!gflags[0x01D9]) goto labelFunc04A3_038F;
	message("「嗯，如你所知，Brion 是天文台的負責人，而 Lyceaum 的顧問 Zelda 愛上了他。」");
	say();
	goto labelFunc04A3_03A4;
labelFunc04A3_038F:
	message("「啊，原來你也很好奇。我只知道每次有人對 Zelda 提起 Brion 的名字時，她嚴肅的表情就會變成微笑。~~「我們來做個交易吧。找出他們的故事，我就請你和你的朋友們免費吃喝一頓。你可以在天文台找到 Brion，在 Lyceaum 找到 Zelda。」");
	say();
	var0004 = true;
	UI_remove_answer(["Brion", "Zelda"]);
labelFunc04A3_03A4:
	case "沒有人" attend labelFunc04A3_03B7:
	UI_pop_answers();
	UI_add_answer("告辭");
labelFunc04A3_03B7:
	case "買東西" attend labelFunc04A3_03E1:
	message("「食物還是飲料，");
	message(var0001);
	message("？」");
	say();
	UI_push_answers();
	UI_add_answer(["食物", "飲料"]);
	UI_remove_answer("買東西");
labelFunc04A3_03E1:
	case "食物" attend labelFunc04A3_03F7:
	Func08CB();
	UI_pop_answers();
	UI_remove_answer("食物");
labelFunc04A3_03F7:
	case "飲料" attend labelFunc04A3_040D:
	Func08CC();
	UI_pop_answers();
	UI_remove_answer("飲料");
labelFunc04A3_040D:
	case "告辭" attend labelFunc04A3_0418:
	goto labelFunc04A3_041B;
labelFunc04A3_0418:
	goto labelFunc04A3_0138;
labelFunc04A3_041B:
	endconv;
	message("「記住！告訴他們你是在『親切惡棍酒館』吃的！」*");
	say();
labelFunc04A3_0420:
	if (!(event == 0x0000)) goto labelFunc04A3_042E;
	Func092E(0xFF5D);
labelFunc04A3_042E:
	return;
}


