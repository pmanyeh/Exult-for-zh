#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08C8 0x8C8 (var var0000, var var0001)
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
	if (!(var0002 == 0x0000)) goto labelFunc08C8_001D;
	goto labelFunc08C8_0149;
labelFunc08C8_001D:
	var0004 = 0x0002;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc08C8_0046;
	message("「我很抱歉，但你的肌肉過度緊繃了。如果你能改日再來，我很願意為你提供訓練。」");
	say();
	goto labelFunc08C8_0149;
labelFunc08C8_0046:
	if (!(var0005 == 0x0001)) goto labelFunc08C8_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你聚集並清點了你所擁有的金幣，發現總共有 ");
	message(var0006);
	message(" 個金幣。");
	say();
	if (!(var0006 < var0001)) goto labelFunc08C8_007E;
	message("「我很遺憾，你似乎沒有足夠的金幣在這裡接受訓練。也許換個時間，等你的荷包更滿的時候……」");
	say();
	goto labelFunc08C8_0149;
labelFunc08C8_007E:
	if (!(var0005 == 0x0002)) goto labelFunc08C8_008F;
	message("她顯得十分驚訝。~~「你已經比我還要強壯了！我很抱歉，但我無法再幫你提升更多了。」");
	say();
	goto labelFunc08C8_0149;
labelFunc08C8_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 個金幣，訓練隨之開始。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc08C8_00C0;
	var0008 = "你";
	goto labelFunc08C8_00C6;
labelFunc08C8_00C0:
	var0008 = var0003;
labelFunc08C8_00C6:
	if (!(var0002 == 0xFE9C)) goto labelFunc08C8_00D9;
	var0009 = "你";
	goto labelFunc08C8_00DF;
labelFunc08C8_00D9:
	var0009 = var0003;
labelFunc08C8_00DF:
	if (!(var0002 == 0xFE9C)) goto labelFunc08C8_00F2;
	var000A = "";
	goto labelFunc08C8_00F8;
labelFunc08C8_00F2:
	var000A = "";
labelFunc08C8_00F8:
	message(var0008);
	message(" 和 Penni 一起鍛鍊並對練了一段時間。在拉筋伸展之後，");
	message(var0009);
	message("感覺");
	message(var000A);
	message("到更強壯了一些，且戰鬥技巧也稍微進步了。");
	say();
	var000B = Func0910(var0002, 0x0000);
	if (!(var000B < 0x001E)) goto labelFunc08C8_012A;
	Func0914(var0002, 0x0001);
labelFunc08C8_012A:
	var000C = Func0910(var0002, 0x0004);
	if (!(var000C < 0x001E)) goto labelFunc08C8_0149;
	Func0917(var0002, 0x0001);
labelFunc08C8_0149:
	return;
}