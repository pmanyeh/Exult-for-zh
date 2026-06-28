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
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!(!gflags[0x0206])) goto labelFunc04A4_0044;
	message("「你看到一个英俊、坚毅、肌肉发达的男人，令人惊讶的是，他的脸上带着友善的微笑。」");
	say();
	gflags[0x0206] = true;
	goto labelFunc04A4_0060;
labelFunc04A4_0044:
	message("「请，");
	message(var0001);
	message("。来陪我作伴吧。」");
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
	case "职业" attend labelFunc04A4_00AA:
	message("「我周游世界，寻找稀有独特的物品卖给博物馆。我不是 Moonglow 的居民。」");
	say();
	UI_add_answer(["Moonglow", "旅行", "物品"]);
	if (!(gflags[0x01DD] && (!gflags[0x01ED]))) goto labelFunc04A4_00AA;
	UI_add_answer("水晶");
labelFunc04A4_00AA:
	case "旅行" attend labelFunc04A4_00CA:
	message("「我走遍了整个不列颠尼亚，");
	message(var0001);
	message("。这片土地上已经没有什么能让我害怕的了。」~~他咧嘴一笑。「但这里的一些居民就不是这样了。」");
	say();
	UI_add_answer("居民");
	UI_remove_answer("旅行");
labelFunc04A4_00CA:
	case "居民" attend labelFunc04A4_00E3:
	message("「这只是个玩笑，");
	message(var0001);
	message("。」");
	say();
	UI_remove_answer("居民");
labelFunc04A4_00E3:
	case "物品" attend labelFunc04A4_0115:
	message("「我发现了许多奇特的文物。你在音乐厅和 Lycaeum 看到的许多东西都是我带给他们的。」");
	say();
	if (!(!gflags[0x01DD])) goto labelFunc04A4_010E;
	message("「事实上，");
	message(var0001);
	message("，我有一块在 Jhelom 附近的大陆上找到的独特水晶，我希望 Nelson 能出个好价钱。」~~他拿出一块透明的小水晶给你看。~~水晶的切面在光线下闪闪发光。");
	say();
	if (!(!var0002)) goto labelFunc04A4_010E;
	UI_add_answer("Nelson");
labelFunc04A4_010E:
	UI_remove_answer("物品");
labelFunc04A4_0115:
	case "Nelson" attend labelFunc04A4_012C:
	message("「他是 Lycaeum 的负责人。他喜欢些小玩意儿和稀有物品。」");
	say();
	var0002 = true;
	UI_remove_answer("Nelson");
labelFunc04A4_012C:
	case "Moonglow" attend labelFunc04A4_015C:
	message("「恐怕，");
	message(var0001);
	message("，我对这座美丽的城市一无所知。我和我妻子 Penni 住在 Yew，她在那里当训练师。~~「其实，");
	message(var0001);
	message("，除了 Nelson 之外，我在这里还认识两个人。」");
	say();
	UI_remove_answer("Moonglow");
	UI_add_answer(["人们", "Penni"]);
	gflags[0x01DE] = true;
labelFunc04A4_015C:
	case "人们" attend labelFunc04A4_017C:
	message("「我认识了酒保和治疗师。」");
	say();
	UI_remove_answer("人们");
	UI_add_answer(["酒保", "治疗师"]);
labelFunc04A4_017C:
	case "酒保" attend labelFunc04A4_019D:
	message("「Phearcy 很友善。但他确实很喜欢八卦。他向我提出了一个交易，如果我能发现为什么 Nelson 的助手对某个男人有不同的反应，或者是类似的事情，我就能赢得免费的餐点。我不打算去管闲事，但拜托，千万别告诉 Phearcy！」");
	say();
	if (!(!var0002)) goto labelFunc04A4_0196;
	UI_add_answer("Nelson");
labelFunc04A4_0196:
	UI_remove_answer("酒保");
labelFunc04A4_019D:
	case "治疗师" attend labelFunc04A4_01B0:
	message("「Elad 非常慷慨。事实上，我在镇上时，他让我睡在他的一张空床上。他唯一的收费，」他笑着说，「就是我给他讲我的冒险故事。~~「这交易还不错。」他耸了耸肩。");
	say();
	UI_remove_answer("治疗师");
labelFunc04A4_01B0:
	case "Penni" attend labelFunc04A4_01C3:
	message("「她教近战格斗。我在旅途中生存所需知道的一切都是从她那里学来的。」");
	say();
	UI_remove_answer("Penni");
labelFunc04A4_01C3:
	case "水晶" attend labelFunc04A4_0253:
	message("「你是指这个吗？」他从斗篷下的一个小袋子里拿出一颗透明的、多面的小宝石。「我最近刚找到这个。我本来希望能把它卖给 Lycaeum，但是，唉，他们用不着。或许你想要吗？」他满怀希望地问。「我以 20 枚金币卖给你。」");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04A4_0248;
	var0004 = UI_add_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
	var0005 = UI_remove_party_items(0x0014, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0005) goto labelFunc04A4_0227;
	if (!var0004) goto labelFunc04A4_021A;
	message("「谢谢你。」");
	say();
	gflags[0x01ED] = true;
	goto labelFunc04A4_0224;
labelFunc04A4_021A:
	message("「我真的很抱歉，");
	message(var0001);
	message("，但你的空间不够了。」");
	say();
labelFunc04A4_0224:
	goto labelFunc04A4_0245;
labelFunc04A4_0227:
	message("「我真的很抱歉，");
	message(var0001);
	message("，但你的金币不够了。」");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x02EA, 0xFE99, 0xFE99, false);
labelFunc04A4_0245:
	goto labelFunc04A4_024C;
labelFunc04A4_0248:
	message("「好吧。」他失望地叹了口气。");
	say();
labelFunc04A4_024C:
	UI_remove_answer("水晶");
labelFunc04A4_0253:
	case "告辞" attend labelFunc04A4_025E:
	goto labelFunc04A4_0261;
labelFunc04A4_025E:
	goto labelFunc04A4_0060;
labelFunc04A4_0261:
	endconv;
	message("「愿你的每一天都愉快，");
	message(var0001);
	message("。」*");
	say();
labelFunc04A4_026C:
	if (!(event == 0x0000)) goto labelFunc04A4_0275;
	abort;
labelFunc04A4_0275:
	return;
}


