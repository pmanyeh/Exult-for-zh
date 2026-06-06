#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func089B 0x89B (var var0000, var var0001)
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
	if (!(var0002 == 0xFE9C)) goto labelFunc089B_0023;
	var0004 = "your";
	goto labelFunc089B_0029;
labelFunc089B_0023:
	var0004 = "their";
labelFunc089B_0029:
	if (!(var0002 == 0x0000)) goto labelFunc089B_0036;
	goto labelFunc089B_0150;
labelFunc089B_0036:
	var0005 = 0x0003;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc089B_005F;
	message("「沒有足夠的實戰經驗可以在此時進行訓練。」");
	say();
	goto labelFunc089B_0150;
labelFunc089B_005F:
	if (!(var0006 == 0x0001)) goto labelFunc089B_0097;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金幣並數了數，發現你總共有 ");
	message(var0007);
	message(" 枚金幣。");
	say();
	if (!(var0007 < var0001)) goto labelFunc089B_0097;
	message("「需要比你擁有的更多的金幣。需要 50 枚金幣。」");
	say();
	goto labelFunc089B_0150;
labelFunc089B_0097:
	if (!(var0006 == 0x0002)) goto labelFunc089B_00AE;
	message("在檢查了");
	message(var0003);
	message("的肌肉之後，他說：「比我還要強壯。不需要在戰鬥上進行進一步的訓練了。」");
	say();
	goto labelFunc089B_0150;
labelFunc089B_00AE:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始了。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc089B_00DF;
	var0009 = "you begin";
	goto labelFunc089B_00E9;
labelFunc089B_00DF:
	var0009 = (var0003 + "begins");
labelFunc089B_00E9:
	message("石像鬼開始進行一些高強度的舉重，接著進行擲斧的標靶練習。最後，");
	message(var0003);
	message("開始注意到體能和手眼協調能力的改變。");
	say();
	var000A = Func0910(var0002, 0x0000);
	if (!(var000A < 0x001E)) goto labelFunc089B_0112;
	Func0914(var0002, 0x0001);
labelFunc089B_0112:
	var000B = Func0910(var0002, 0x0001);
	if (!(var000B < 0x001E)) goto labelFunc089B_0131;
	Func0915(var0002, 0x0001);
labelFunc089B_0131:
	var000C = Func0910(var0002, 0x0004);
	if (!(var000C < 0x001E)) goto labelFunc089B_0150;
	Func0917(var0002, 0x0001);
labelFunc089B_0150:
	return;
}


