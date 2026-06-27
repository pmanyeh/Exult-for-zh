#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func04A4 object#(0x4A4) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc04A4_026C;
	UI_show_npc_face(0xFF5C, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["姓名", "職業", "告辭"]);
	if (!(!gflags[0x0206])) goto labelFunc04A4_0044;
	message("「你看到一個英俊、堅毅、肌肉發達的男人，令人驚訝的是，他的臉上帶著友善的微笑。」");
	say();
	gflags[0x0206] = true;
	goto labelFunc04A4_0060;
labelFunc04A4_0044:
	message("「請，");
	message(var0001);
	message("。來陪我作伴吧。」");
	say();
	if (!(gflags[0x01DD] && (!gflags[0x01ED]))) goto labelFunc04A4_0060;
	UI_add_answer("水晶");
labelFunc04A4_0060:
	converse attend labelFunc04A4_0261;
	case "姓名" attend labelFunc04A4_007C:
	message("「我叫 Addom，");
	message(var0001);
	message("。");
	say();
	UI_remove_answer("姓名");
labelFunc04A4_007C:
	case "職業" attend labelFunc04A4_00AA:
	message("「我周遊世界，尋找稀有獨特的物品賣給博物館。我不是 Moonglow 的居民。」");
	say();
	UI_add_answer(["Moonglow", "旅行", "物品"]);
	if (!(gflags[0x01DD] && (!gflags[0x01ED]))) goto labelFunc04A4_00AA;
	UI_add_answer("水晶");
labelFunc04A4_00AA:
	case "旅行" attend labelFunc04A4_00CA:
	message("「我走遍了整個不列顛尼亞，");
	message(var0001);
	message("。這片土地上已經沒有什麼能讓我害怕的了。」~~他咧嘴一笑。「但這裡的一些居民就不是這樣了。」");
	say();
	UI_add_answer("居民");
	UI_remove_answer("旅行");
labelFunc04A4_00CA:
	case "居民" attend labelFunc04A4_00E3:
	message("「這只是個玩笑，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("居民");
labelFunc04A4_00E3:
	case "物品" attend labelFunc04A4_0115:
	message("「我發現了許多奇特的文物。你在音樂廳和 Lycaeum 看到的許多東西都是我帶給他們的。」");
	say();
	if (!(!gflags[0x01DD])) goto labelFunc04A4_010E;
	message("「事實上，");
	message(var0001);
	message("，我有一塊在 Jhelom 附近的大陸上找到的獨特水晶，我希望 Nelson 能出個好價錢。」~~他拿出一塊透明的小水晶給你看。~~水晶的切面在光線下閃閃發光。");
	say();
	if (!(!var0002)) goto labelFunc04A4_010E;
	UI_add_answer("Nelson");
labelFunc04A4_010E:
	UI_remove_answer("物品");
labelFunc04A4_0115:
	case "Nelson" attend labelFunc04A4_012C:
	message("「他是 Lycaeum 的負責人。他喜歡些小玩意兒和稀有物品。」");
	say();
	var0002 = true;
	UI_remove_answer("Nelson");
labelFunc04A4_012C:
	case "Moonglow" attend labelFunc04A4_015C:
	message("「恐怕，");
	message(var0001);
	message("，我對這座美麗的城市一無所知。我和我妻子 Penni 住在 Yew，她在那裡當訓練師。~~「其實，");
	message(var0001);
	message("，除了 Nelson 之外，我在這裡還認識兩個人。」");
	say();
	UI_remove_answer("Moonglow");
	UI_add_answer(["人們", "Penni"]);
	gflags[0x01DE] = true;
labelFunc04A4_015C:
	case "人們" attend labelFunc04A4_017C:
	message("「我認識了酒保和治療師。」");
	say();
	UI_remove_answer("人們");
	UI_add_answer(["酒保", "治療師"]);
labelFunc04A4_017C:
	case "酒保" attend labelFunc04A4_019D:
	message("「Phearcy 很友善。但他確實很喜歡八卦。他向我提出了一個交易，如果我能發現為什麼 Nelson 的助手對某個男人有不同的反應，或者是類似的事情，我就能贏得免費的餐點。我不打算去管閒事，但拜託，千萬別告訴 Phearcy！」");
	say();
	if (!(!var0002)) goto labelFunc04A4_0196;
	UI_add_answer("Nelson");
labelFunc04A4_0196:
	UI_remove_answer("酒保");
labelFunc04A4_019D:
	case "治療師" attend labelFunc04A4_01B0:
	message("「Elad 非常慷慨。事實上，我在鎮上時，他讓我睡在他的一張空床上。他唯一的收費，」他笑著說，「就是我給他講我的冒險故事。~~「這交易還不錯。」他聳了聳肩。");
	say();
	UI_remove_answer("治療師");
labelFunc04A4_01B0:
	case "Penni" attend labelFunc04A4_01C3:
	message("「她教近戰格鬥。我在旅途中生存所需知道的一切都是從她那裡學來的。」");
	say();
	UI_remove_answer("Penni");
labelFunc04A4_01C3:
	case "水晶" attend labelFunc04A4_0253:
	message("「你是指這個嗎？」他從斗篷下的一個小袋子裡拿出一顆透明的、多面的小寶石。「我最近剛找到這個。我本來希望能把它賣給 Lycaeum，但是，唉，他們用不著。或許你想要嗎？」他滿懷希望地問。「我以 20 枚金幣賣給你。」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04A4_0248;
	var0004 = UI_add_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
	var0005 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04A4_0227;
	if (!var0004) goto labelFunc04A4_021A;
	message("「謝謝你。」");
	say();
	gflags[0x01ED] = true;
	goto labelFunc04A4_0224;
labelFunc04A4_021A:
	message("「我真的很抱歉，");
	message(var0001);
	message("，但你的空間不夠了。」");
	say();
labelFunc04A4_0224:
	goto labelFunc04A4_0245;
labelFunc04A4_0227:
	message("「我真的很抱歉，");
	message(var0001);
	message("，但你的金幣不夠了。」");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
labelFunc04A4_0245:
	goto labelFunc04A4_024C;
labelFunc04A4_0248:
	message("「好吧。」他失望地嘆了口氣。");
	say();
labelFunc04A4_024C:
	UI_remove_answer("水晶");
labelFunc04A4_0253:
	case "告辭" attend labelFunc04A4_025E:
	goto labelFunc04A4_0261;
labelFunc04A4_025E:
	goto labelFunc04A4_0060;
labelFunc04A4_0261:
	endconv;
	message("「願你的每一天都愉快，");
	message(var0001);
	message("。」*");
	say();
labelFunc04A4_026C:
	if (!(event == 0x0000)) goto labelFunc04A4_0275;
	abort;
labelFunc04A4_0275:
	return;
}


