#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);

void Func08A2 0x8A2 (var var0000, var var0001)
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
	var var000C;

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc08A2_001D;
	goto labelFunc08A2_012F;
labelFunc08A2_001D:
	var0004 = 0x0002;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc08A2_0046;
	message("「很抱歉，但看來你目前沒有足夠的基礎學識來進行訓練。如果你未來能再來，我那時就可以指導你。」");
	say();
	goto labelFunc08A2_012F;
labelFunc08A2_0046:
	if (!(var0005 == 0x0001)) goto labelFunc08A2_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金幣並數了數，發現你總共有 ");
	message(var0006);
	message(" 枚金幣。");
	say();
	if (!(var0006 < var0001)) goto labelFunc08A2_007E;
	message("「很抱歉，但你似乎沒有足夠的金幣來進行訓練。」");
	say();
	goto labelFunc08A2_012F;
labelFunc08A2_007E:
	if (!(var0005 == 0x0002)) goto labelFunc08A2_008F;
	message("在問了幾個測試問題後，她驚呼：「你的學識簡直和我一樣淵博！我沒有什麼能幫助你的了。」");
	say();
	goto labelFunc08A2_012F;
labelFunc08A2_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始了。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08A2_00CC;
	var0008 = "你";
	var0009 = "你";
	var000A = "";
	goto labelFunc08A2_00DE;
labelFunc08A2_00CC:
	var0008 = var0003;
	var0009 = var0003;
	var000A = "s";
labelFunc08A2_00DE:
	message(var0008);
	message("和 Jillian 學習了一段時間。此外，她還教授了一些魔法理論。之後，");
	message(var0009);
	message("注意到知識與魔法理解力的提升。");
	say();
	var000B = Func0910(var0002, 0x0006);
	if (!(var000B < 0x001E)) goto labelFunc08A2_0110;
	Func0918(var0002, 0x0001);
labelFunc08A2_0110:
	var000C = Func0910(var0002, 0x0002);
	if (!(var000C < 0x001E)) goto labelFunc08A2_012F;
	Func0916(var0002, 0x0001);
labelFunc08A2_012F:
	return;
}


