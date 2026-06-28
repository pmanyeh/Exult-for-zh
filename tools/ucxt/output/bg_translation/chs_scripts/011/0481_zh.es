#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0481 object#(0x481) ()
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

	if (!(event == 0x0001)) goto labelFunc0481_0367;
	UI_show_npc_face(0xFF7F, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF7F));
	var0003 = UI_wearing_fellowship();
	UI_add_answer(["姓名", "职业", "告辞"]);
	if (!gflags[0x017D]) goto labelFunc0481_0051;
	UI_add_answer("吊饰盒");
labelFunc0481_0051:
	if (!var0003) goto labelFunc0481_005E;
	UI_add_answer("奖章");
labelFunc0481_005E:
	if (!gflags[0x0127]) goto labelFunc0481_0071;
	UI_add_answer(["Hook", "皇冠宝石号 (Crown Jewel)"]);
labelFunc0481_0071:
	if (!gflags[0x0180]) goto labelFunc0481_007E;
	UI_add_answer("陌生人");
labelFunc0481_007E:
	if (!(!gflags[0x018A])) goto labelFunc0481_0090;
	message("在你面前的是一位看起来很精明的工匠，显然对平静的生活充满满足感。");
	say();
	gflags[0x018A] = true;
	goto labelFunc0481_0094;
labelFunc0481_0090:
	message("「我能为你做什么？」Russell 说道。");
	say();
labelFunc0481_0094:
	converse attend labelFunc0481_035C;
	case "姓名" attend labelFunc0481_00AA:
	message("「我是 Russell ，一名造船匠。」");
	say();
	UI_remove_answer("姓名");
labelFunc0481_00AA:
	case "职业" attend labelFunc0481_00C6:
	message("「我在 New Magincia 造船。这是我非常喜欢的职业。我也贩售船的契据，以及能在大海中航行的六分仪。」");
	say();
	UI_add_answer(["New Magincia", "契据", "六分仪"]);
labelFunc0481_00C6:
	case "契据" attend labelFunc0481_017D:
	if (!(var0002 == 0x0007)) goto labelFunc0481_0172;
	if (!gflags[0x0193]) goto labelFunc0481_00E5;
	message("「但我已经把『小仙女号 (The Nymphet)』的契据卖给你了！恐怕那是我现在唯一的一艘船。」");
	say();
	goto labelFunc0481_016F;
labelFunc0481_00E5:
	message("「你想买我的船『小仙女号 (The Nymphet)』吗？契据要价 600 枚金币。」");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0481_0165;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0005 >= 0x0258)) goto labelFunc0481_0158;
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0011, 0xFE99, false);
	if (!var0006) goto labelFunc0481_0151;
	message("「『小仙女号 (The Nymphet)』是你的了，");
	message(var0000);
	message("。好好享受航海吧。」");
	say();
	var0007 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0193] = true;
	goto labelFunc0481_0155;
labelFunc0481_0151:
	message("「你带太多东西，拿不动契据了。放下一些东西再来吧。」");
	say();
labelFunc0481_0155:
	goto labelFunc0481_0162;
labelFunc0481_0158:
	message("「我很抱歉，");
	message(var0000);
	message("，你没有足够的金币。」");
	say();
labelFunc0481_0162:
	goto labelFunc0481_016F;
labelFunc0481_0165:
	message("「我了解，");
	message(var0000);
	message("，不是每个人都适合出海。」");
	say();
labelFunc0481_016F:
	goto labelFunc0481_0176;
labelFunc0481_0172:
	message("「等我的店再次营业时，我会很乐意为你服务。」");
	say();
labelFunc0481_0176:
	UI_remove_answer("契据");
labelFunc0481_017D:
	case "六分仪" attend labelFunc0481_021F:
	if (!(var0002 == 0x0007)) goto labelFunc0481_0214;
	message("「你想买我精良的六分仪吗？要价 40 枚金币。」");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0481_0207;
	var0009 = Func0931(0xFE9B, 0x0028, 0x0284, 0xFE99, 0xFE99);
	if (!var0009) goto labelFunc0481_01FA;
	message("「这是你的了，");
	message(var0000);
	message("。好好享受航海吧。」");
	say();
	var000A = UI_remove_party_items(0x0028, 0x0284, 0xFE99, 0xFE99, true);
	var000B = UI_add_party_items(0x0001, 0x028A, 0xFE99, 0xFE99, true);
	if (!(!var000B)) goto labelFunc0481_01F7;
	message("「我很乐意把六分仪交给你，但你必须放下一些东西！你带太多东西，拿不动了。」");
	say();
labelFunc0481_01F7:
	goto labelFunc0481_0204;
labelFunc0481_01FA:
	message("「我很抱歉，");
	message(var0000);
	message("，你没有足够的金币。」");
	say();
labelFunc0481_0204:
	goto labelFunc0481_0211;
labelFunc0481_0207:
	message("「我了解，");
	message(var0000);
	message("，我们之中有些人光靠肉眼看星星就能航行了！」");
	say();
labelFunc0481_0211:
	goto labelFunc0481_0218;
labelFunc0481_0214:
	message("「目前我的店打烊了。如果你在营业时间回来，我会很乐意为你服务。」");
	say();
labelFunc0481_0218:
	UI_remove_answer("六分仪");
labelFunc0481_021F:
	case "New Magincia" attend labelFunc0481_0239:
	message("「New Magincia 一直很平静。最近很少有外地人惹麻烦。」");
	say();
	UI_add_answer("外地人");
	UI_remove_answer("New Magincia");
labelFunc0481_0239:
	case "外地人" attend labelFunc0481_0253:
	message("「在你抵达之前，除了船难的幸存者，New Magincia 已经好几年没有陌生人来过了。」");
	say();
	UI_add_answer("船难");
	UI_remove_answer("外地人");
labelFunc0481_0253:
	case "船难" attend labelFunc0481_0273:
	message("「我找到了残骸。有三个人正紧抓着它保命。」");
	say();
	UI_add_answer(["残骸", "三个人"]);
	UI_remove_answer("船难");
labelFunc0481_0273:
	case "残骸" attend labelFunc0481_0286:
	message("「我以前从没见过那样的船。标记显示它是由一位名叫 Owen 的 Minoc 造船匠建造的。它的结构不是很好。」");
	say();
	UI_remove_answer("残骸");
labelFunc0481_0286:
	case "三个人", "陌生人" attend labelFunc0481_02AD:
	message("「他们来自海盗巢穴 (Buccaneer's Den)。大多数来这里的人，都是因为在前往或离开海盗巢穴 (Buccaneer's Den)的途中迷路了。」");
	say();
	gflags[0x0180] = true;
	UI_add_answer("海盗巢穴");
	UI_remove_answer(["陌生人", "三个人"]);
labelFunc0481_02AD:
	case "海盗巢穴" attend labelFunc0481_02C4:
	message("「那三个人想回去。他们说海盗巢穴 (Buccaneer's Den)有一间赌场。」Russell 耸耸肩。「好像这能成为去那里的理由似的。」");
	say();
	message("「我提议卖给他们一艘船，但他们没有钱。当我不愿免费给他们时，他们看起来竟然觉得被冒犯了！」");
	say();
	UI_remove_answer("海盗巢穴");
labelFunc0481_02C4:
	case "吊饰盒" attend labelFunc0481_02DE:
	message("「那三个陌生人试图拿某种小饰品来跟我换，要我建造或卖给他们一艘船。听起来就像你描述的吊饰盒。」");
	say();
	UI_add_answer("小饰品");
	UI_remove_answer("吊饰盒");
labelFunc0481_02DE:
	case "小饰品" attend labelFunc0481_02F1:
	message("「我本来就不会接受他们的提议，但我很好奇。后来当我想再看那件小饰品时，他们就什么也没说了。我怀疑他们是否真的有那个东西。」");
	say();
	UI_remove_answer("小饰品");
labelFunc0481_02F1:
	case "奖章" attend labelFunc0481_0304:
	message("「我忍不住注意到你的奖章。它看起来有点邪恶。我不记得以前见过类似的东西。」");
	say();
	UI_remove_answer("奖章");
labelFunc0481_0304:
	case "皇冠宝石号 (Crown Jewel)" attend labelFunc0481_0329:
	if (!(!gflags[0x0181])) goto labelFunc0481_031E;
	message("「皇冠宝石号不久前才刚离开这里。我不知道它要去哪里。」");
	say();
	gflags[0x0181] = true;
	goto labelFunc0481_0322;
labelFunc0481_031E:
	message("「自从我们上次谈到皇冠宝石号之后，我就再也没听到关于它的消息了。」");
	say();
labelFunc0481_0322:
	UI_remove_answer("皇冠宝石号 (Crown Jewel)");
labelFunc0481_0329:
	case "Hook" attend labelFunc0481_034E:
	if (!(!gflags[0x0182])) goto labelFunc0481_0343;
	message("「就在皇冠宝石号离开时，我看到一个带着铁钩的男人跳上了船。有一只石像鬼和他同行。」");
	say();
	gflags[0x0182] = true;
	goto labelFunc0481_0347;
labelFunc0481_0343:
	message("「自从我们上次谈到这个叫 Hook 的男人之后，我就再也没听到关于他的消息了。」");
	say();
labelFunc0481_0347:
	UI_remove_answer("Hook");
labelFunc0481_034E:
	case "告辞" attend labelFunc0481_0359:
	goto labelFunc0481_035C;
labelFunc0481_0359:
	goto labelFunc0481_0094;
labelFunc0481_035C:
	endconv;
	message("「一路平安，");
	message(var0000);
	message("。」*");
	say();
labelFunc0481_0367:
	if (!(event == 0x0000)) goto labelFunc0481_0375;
	Func092E(0xFF7F);
labelFunc0481_0375:
	return;
}


