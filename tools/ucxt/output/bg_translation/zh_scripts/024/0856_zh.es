#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);

void Func0856 0x856 (var var0000, var var0001)
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
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_0020;
	var0003 = "你";
labelFunc0856_0020:
	if (!(var0002 == 0x0000)) goto labelFunc0856_002D;
	goto labelFunc0856_015A;
labelFunc0856_002D:
	if (!((var0002 == 0xFFFF) || (var0002 == 0xFFF6))) goto labelFunc0856_004D;
	var0001 = (var0001 / 0x0002);
	message("「我不能向像你這樣的大師收取全額費用。」");
	say();
labelFunc0856_004D:
	var0004 = 0x0002;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc0856_0076;
	message("經過一點標靶練習後，他說：「我很遺憾地說，在我能夠訓練你之前，你需要更多的練習。也許以後你會處於更好的狀態來接受我的指導。」");
	say();
	goto labelFunc0856_015A;
labelFunc0856_0076:
	if (!(var0005 == 0x0001)) goto labelFunc0856_00AE;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你收集了你的金幣並數了數，發現你總共有 ");
	message(var0006);
	message(" 枚金幣。");
	say();
	if (!(var0006 < var0001)) goto labelFunc0856_00AE;
	message("「你沒有金幣來訓練。」");
	say();
	goto labelFunc0856_015A;
labelFunc0856_00AE:
	if (!(var0005 == 0x0002)) goto labelFunc0856_00BF;
	message("經過幾次射擊後，他驚呼：「你已經和我一樣熟練了！我無法做任何事情來改善你的手眼協調！」");
	say();
	goto labelFunc0856_015A;
labelFunc0856_00BF:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_00F0;
	var0008 = "你";
	goto labelFunc0856_00F6;
labelFunc0856_00F0:
	var0008 = var0003;
labelFunc0856_00F6:
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_0109;
	var0009 = "你";
	goto labelFunc0856_010F;
labelFunc0856_0109:
	var0009 = var0003;
labelFunc0856_010F:
	if (!(var0002 == 0xFE9C)) goto labelFunc0856_0122;
	var000A = "";
	goto labelFunc0856_0128;
labelFunc0856_0122:
	var000A = "s";
labelFunc0856_0128:
	message(var0008);
	message(" 和 Bradman 花了一些時間用弓進行標靶練習。不久之後，");
	message(var0009);
	message(" 注意到");
	#message(var000A);
	message(" 手眼協調能力有顯著提升。");
	say();
	var000B = Func0910(var0002, 0x0001);
	if (!(var000B < 0x001E)) goto labelFunc0856_015A;
	Func0915(var0002, 0x0002);
labelFunc0856_015A:
	return;
}


