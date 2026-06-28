#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0952 0x952 ();
extern void Func0953 0x953 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0457 object#(0x457) ()
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

	if (!(event == 0x0001)) goto labelFunc0457_02D7;
	UI_show_npc_face(0xFFA9, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA9));
	UI_add_answer(["姓名", "职业", "告辞"]);
	var0003 = Func0931(0xFE9B, 0x0001, 0x02D8, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc0457_005F;
	UI_add_answer("Caddellite");
labelFunc0457_005F:
	if (!(!gflags[0x0112])) goto labelFunc0457_0071;
	message("你看到一个男人，长时间闷热而艰苦的工作让他的脸凝固成僵硬的表情，眼睛像炽热的煤炭。");
	say();
	gflags[0x0112] = true;
	goto labelFunc0457_0075;
labelFunc0457_0071:
	message("「我能为你效劳吗？」Zorn 说。");
	say();
labelFunc0457_0075:
	converse attend labelFunc0457_02CC;
	case "姓名" attend labelFunc0457_008B:
	message("「我是 Zorn 。」");
	say();
	UI_remove_answer("姓名");
labelFunc0457_008B:
	case "职业" attend labelFunc0457_00BC:
	if (!gflags[0x011F]) goto labelFunc0457_00AD;
	message("「我是 Minoc 的铁匠。」");
	say();
	UI_add_answer(["铁匠", "Minoc"]);
	goto labelFunc0457_00BC;
labelFunc0457_00AD:
	message("「你对死者难道没有一点尊重吗？竟然在这样糟糕的时刻来拉客！这时可是有人被发现死在 William 的锯木厂里！」");
	say();
	gflags[0x011F] = true;
	UI_add_answer("谋杀案");
labelFunc0457_00BC:
	case "铁匠" attend labelFunc0457_00D6:
	message("「我制作武器和护甲。」");
	say();
	UI_remove_answer("铁匠");
	UI_add_answer("武器和护甲");
labelFunc0457_00D6:
	case "Minoc" attend labelFunc0457_00F6:
	message("「 Minoc 是个大城市。金钱在这里易手。但它并不能让人们快乐。他们总能找到争吵的理由。而现在这些可怕的谋杀案让每个人都感到害怕。」");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["争吵", "谋杀案"]);
labelFunc0457_00F6:
	case "武器和护甲" attend labelFunc0457_0127:
	if (!(var0002 == 0x000D)) goto labelFunc0457_011C;
	message("「我卖的所有武器和护甲都是我亲手制作的。它们会很好地为你效劳。」");
	say();
	UI_add_answer(["买武器", "买护甲"]);
	goto labelFunc0457_0120;
labelFunc0457_011C:
	message("「也许我们可以改天再谈论这些事情。比如说，也许在我的商店营业时间里？」");
	say();
labelFunc0457_0120:
	UI_remove_answer("武器和护甲");
labelFunc0457_0127:
	case "买武器" attend labelFunc0457_0148:
	if (!(!(var0002 == 0x000D))) goto labelFunc0457_0141;
	message("「铁匠铺目前不对外营业。你得改天再来。」");
	say();
	goto labelFunc0457_0148;
labelFunc0457_0141:
	message("「我有很多非常致命的武器可以给你看。」");
	say();
	Func0952();
labelFunc0457_0148:
	case "买护甲" attend labelFunc0457_0169:
	if (!(!(var0002 == 0x000D))) goto labelFunc0457_0162;
	message("「铁匠铺目前不对外营业。你得改天再来。」");
	say();
	goto labelFunc0457_0169;
labelFunc0457_0162:
	message("「你可以向我购买精良的护甲。」");
	say();
	Func0953();
labelFunc0457_0169:
	case "争吵" attend labelFunc0457_0189:
	message("「例如这个关于 Owen 纪念碑的喧闹声。人们应该管好自己的事，让别人去处理他们自己的事，不管那是否愚蠢。」");
	say();
	UI_add_answer(["Owen", "纪念碑"]);
	UI_remove_answer("争吵");
labelFunc0457_0189:
	case "Owen" attend labelFunc0457_019C:
	message("「他是我们镇上的造船匠。他是个极度自负的人。」");
	say();
	UI_remove_answer("Owen");
labelFunc0457_019C:
	case "纪念碑" attend labelFunc0457_01AF:
	message("「 Owen 正在为自己建造一座纪念碑。它有四十英尺高，描绘他拿着一卷设计图的样子。永远都会有鸽子停在上面了。为什么要为那么不重要的事情争吵呢？」");
	say();
	UI_remove_answer("纪念碑");
labelFunc0457_01AF:
	case "谋杀案" attend labelFunc0457_01C2:
	message("「这个镇上从来没有人真正讨厌过吉普赛人，至少我从来没意识到有。谁会做这种事？」");
	say();
	UI_remove_answer("谋杀案");
labelFunc0457_01C2:
	case "Caddellite" attend labelFunc0457_01DC:
	message("你将 Caddellite 交给 Zorn 。「这太惊人了！我还以为唯一能找到 Caddellite 的地方是失落的 Ambrosia 岛呢。我该用这个做什么？」");
	say();
	UI_remove_answer("Caddellite");
	UI_add_answer("头盔");
labelFunc0457_01DC:
	case "头盔" attend labelFunc0457_02BE:
	message("你描述了你需要的头盔种类，一种可以阻挡来自方块产生器危险声音的头盔。 Zorn 点点头。「是的，我可以为你做一些。我会立刻开始工作。」");
	say();
	var0004 = UI_get_array_size(UI_get_party_list());
	var0005 = UI_count_objects(0xFE9B, 0x02D8, 0xFE99, 0xFE99);
	if (!(var0005 == 0x0000)) goto labelFunc0457_0214;
	message("「但是你没有任何可以用来制作头盔的 Caddellite 矿块！」");
	say();
labelFunc0457_0214:
	if (!(var0004 > var0005)) goto labelFunc0457_022B;
	message("「你的队伍里有 ");
	message(var0004);
	message(" 个人。恐怕你没有足够的 Caddellite 让我制作那么多头盔。」");
	say();
	goto labelFunc0457_02B7;
labelFunc0457_022B:
	var0006 = UI_remove_party_items(var0005, 0x02D8, 0xFE99, 0xFE99, false);
	if (!(var0005 == 0x0001)) goto labelFunc0457_0250;
	message("Zorn 从你手中接过 Caddellite 并开始他的工作。");
	say();
	goto labelFunc0457_025A;
labelFunc0457_0250:
	message("「你有 ");
	message(var0005);
	message(" 块 Caddellite 。这就是我能为你制作的头盔数量。」");
	say();
labelFunc0457_025A:
	message("Zorn 从你手中接过 Caddellite 并开始工作。你着迷地看着这位铁匠大师在火中软化矿石，然后将其塑形。 Zorn 迅速地进行了必要的测量，然后用热材料进行了一些调整。最后，完成了。");
	say();
	if (!(var0005 == 0x0001)) goto labelFunc0457_026F;
	message("Zorn 将头盔浸入水中冷却。");
	say();
	goto labelFunc0457_0273;
labelFunc0457_026F:
	message("Zorn 将头盔浸入水中冷却。");
	say();
labelFunc0457_0273:
	var0007 = UI_add_party_items(var0005, 0x027E, 0xFE99, 0xFE99, false);
	if (!var0007) goto labelFunc0457_02B3;
	gflags[0x0106] = true;
	Func0911(0x00C8);
	message("「给，我已经按照你精确的要求完成了委托。」");
	say();
	if (!(var0005 == 0x0001)) goto labelFunc0457_02AC;
	message("他把头盔交给你。");
	say();
	goto labelFunc0457_02B0;
labelFunc0457_02AC:
	message("他把头盔交给你。");
	say();
labelFunc0457_02B0:
	goto labelFunc0457_02B7;
labelFunc0457_02B3:
	message("「你负重太重了！」");
	say();
labelFunc0457_02B7:
	UI_remove_answer("头盔");
labelFunc0457_02BE:
	case "告辞" attend labelFunc0457_02C9:
	goto labelFunc0457_02CC;
labelFunc0457_02C9:
	goto labelFunc0457_0075;
labelFunc0457_02CC:
	endconv;
	message("「再见，");
	message(var0000);
	message("。」*");
	say();
labelFunc0457_02D7:
	if (!(event == 0x0000)) goto labelFunc0457_0357;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA9));
	if (!(var0002 == 0x000D)) goto labelFunc0457_0351;
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0008 == 0x0001)) goto labelFunc0457_0314;
	var0009 = "@武器？@";
labelFunc0457_0314:
	if (!(var0008 == 0x0002)) goto labelFunc0457_0324;
	var0009 = "@护甲？@";
labelFunc0457_0324:
	if (!(var0008 == 0x0003)) goto labelFunc0457_0334;
	var0009 = "@头盔？盾牌？@";
labelFunc0457_0334:
	if (!(var0008 == 0x0004)) goto labelFunc0457_0344;
	var0009 = "@需要护甲或武器吗？@";
labelFunc0457_0344:
	UI_item_say(0xFFA9, var0009);
	goto labelFunc0457_0357;
labelFunc0457_0351:
	Func092E(0xFFA9);
labelFunc0457_0357:
	return;
}


