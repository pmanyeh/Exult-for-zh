#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);

void Func08B6 0x8B6 (var var0000, var var0001)
{
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

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc08B6_0013;
	goto labelFunc08B6_0128;
labelFunc08B6_0013:
	var0003 = 0x0001;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc08B6_003C;
	message("「啊！但你此時還沒有足夠的實戰經驗來接受我的訓練！去體驗人生，以後再來吧。」");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_003C:
	if (!(var0004 == 0x0001)) goto labelFunc08B6_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集並清點了你所擁有的金幣，發現總共有");
	message(var0005);
	message("個金幣。");
	say();
	if (!(var0005 < var0001)) goto labelFunc08B6_0074;
	message("「嗯。你的金幣有點不足。也許你可以去 House of Games 贏些戰利品，然後再回來！」");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_0074:
	if (!(var0004 == 0x0002)) goto labelFunc08B6_0085;
	message("「你已經跟我一樣有天賦了！你不需要我的服務！」");
	say();
	goto labelFunc08B6_0128;
labelFunc08B6_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了");
	message(var0001);
	message("個金幣，訓練課程開始了。");
	say();
	message("Lucky 拿出一副牌、三個貝殼和一塊石頭，以及一對骰子。接著，這位海盜依序拿起每一樣物品，並開始展示各種利用它們的方法。他展示了如何從牌堆底部發牌，以及如何做假洗牌。利用貝殼和石頭，他展示了快如閃電的手法，將石頭藏在貝殼下——藏在它不可能在的那個貝殼裡。最後，他展示了如何用唾液讓骰子加重，使其總能擲出好運。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08B6_0109;
	var0007 = Func0931(0xFE9B, 0x0001, 0x03BB, 0xFE99, 0x0000);
	if (!var0007) goto labelFunc08B6_00E1;
	var0008 = "高興地將你的生命護符(Ankh)還給你，它在";
	var0009 = "課程期間";
	var000A = "從你脖子上滑落了。";
	goto labelFunc08B6_00F3;
labelFunc08B6_00E1:
	var0008 = "高興地伸出手想與你握手，";
	var0009 = "但當你準備要握手時，";
	var000A = "他又迅速地縮回去了。";
labelFunc08B6_00F3:
	message("訓練課程結束時，Lucky ");
	message(var0008);
	message("");
	message(var0009);
	message(" ");
	message(var000A);
	message("");
	say();
labelFunc08B6_0109:
	var000B = Func0910(var0002, 0x0002);
	if (!(var000B < 0x001E)) goto labelFunc08B6_0128;
	Func0916(var0002, 0x0001);
labelFunc08B6_0128:
	return;
}