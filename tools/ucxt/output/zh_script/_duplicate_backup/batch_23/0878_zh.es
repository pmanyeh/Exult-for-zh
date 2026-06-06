#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0878 0x878 (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	var0002 = Func0920();
	if (!(var0002 == 0x0000)) goto labelFunc0878_0013;
	goto labelFunc0878_00EB;
labelFunc0878_0013:
	var0003 = 0x0002;
	var0004 = Func0922(var0000, var0001, var0002, var0003);
	if (!(var0004 == 0x0000)) goto labelFunc0878_003C;
	message("「你現在沒有足夠的實戰經驗來跟我學習戰鬥！」他嘲笑著。");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_003C:
	if (!(var0004 == 0x0001)) goto labelFunc0878_0074;
	var0005 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集並清點了金幣，發現你總共有 ");
	message(var0005);
	message(" 枚金幣。");
	say();
	if (!(var0005 < var0001)) goto labelFunc0878_0074;
	message("「嗯……看來你沒有足夠的金幣。當你的金庫更充裕時，我也許能幫你。」他冷笑著。");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_0074:
	if (!(var0004 == 0x0002)) goto labelFunc0878_0085;
	message("「你的技巧已經很接近我了！你的潛力已經達到了頂峰。我無法為你做更多的事了。」");
	say();
	goto labelFunc0878_00EB;
labelFunc0878_0085:
	var0006 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始了。");
	say();
	var0007 = Func090F(var0002);
	var0008 = Func0908();
	if (!(var0007 == var0008)) goto labelFunc0878_00C2;
	var0007 = "你";
labelFunc0878_00C2:
	message("課程包含各種涉及手法和假動作攻擊的技巧，花費了相當短的時間。~ De Snel 突然站直並收起他的刀刃。「現在就這樣。如果你想接受更多訓練，你絕對可以從我的經驗中受益。」他傲慢地打量著");
	message(var0007);
	message("。「你似乎是個聰明的學生。你可以稍後再回來進階你的訓練。」");
	say();
	var0009 = Func0910(var0002, 0x0004);
	if (!(var0009 < 0x001E)) goto labelFunc0878_00EB;
	Func0917(var0002, 0x0002);
labelFunc0878_00EB:
	return;
}


