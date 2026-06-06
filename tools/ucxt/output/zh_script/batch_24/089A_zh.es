#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func089A 0x89A (var var0000, var var0001)
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

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc089A_001D;
	goto labelFunc089A_0112;
labelFunc089A_001D:
	var0004 = 0x0003;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc089A_0046;
	message("「看來你目前需要更多的經驗才能訓練。」");
	say();
	goto labelFunc089A_0112;
labelFunc089A_0046:
	if (!(var0005 == 0x0001)) goto labelFunc089A_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集並清點了你的金幣，發現你總共有 ");
	message(var0006);
	message(" 枚金幣。");
	say();
	if (!(var0006 < var0001)) goto labelFunc089A_007E;
	message("「你沒有足夠的金幣在這裡訓練。」");
	say();
	goto labelFunc089A_0112;
labelFunc089A_007E:
	if (!(var0005 == 0x0002)) goto labelFunc089A_008F;
	message("問了幾個問題後，他驚呼道：「看來你已經和我一樣博學了。對於無法增加你的知識我感到抱歉，但我無能為力。」");
	say();
	goto labelFunc089A_0112;
labelFunc089A_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，然後訓練課程開始了。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc089A_00C0;
	var0008 = "你開始";
	goto labelFunc089A_00CA;
labelFunc089A_00C0:
	var0008 = (var0003 + "開始");
labelFunc089A_00CA:
	message("石像鬼從一些密集的記憶練習開始，最終引導到法術理論的概念。在結束時，");
	message(var0008);
	message("注意到心智能力和思維反應速度有了改變。");
	say();
	var0009 = Func0910(var0002, 0x0002);
	if (!(var0009 < 0x001E)) goto labelFunc089A_00F3;
	Func0916(var0002, 0x0002);
labelFunc089A_00F3:
	var000A = Func0910(var0002, 0x0006);
	if (!(var000A < 0x001E)) goto labelFunc089A_0112;
	Func0918(var0002, 0x0001);
labelFunc089A_0112:
	return;
}


