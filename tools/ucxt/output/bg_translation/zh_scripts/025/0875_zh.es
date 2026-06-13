#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0918 0x918 (var var0000, var var0001);

void Func0875 0x875 (var var0000, var var0001)
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0002 = Func0920();
	var0003 = Func090F(var0002);
	var0004 = Func0908();
	if (!(var0003 == var0004)) goto labelFunc0875_0025;
	var0003 = "你";
labelFunc0875_0025:
	if (!(var0002 == 0x0000)) goto labelFunc0875_0032;
	goto labelFunc0875_01BA;
labelFunc0875_0032:
	var0005 = 0x0003;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc0875_005B;
	message("「我很抱歉，但你目前沒有足夠的實戰經驗可以進行訓練。如果你能在日後回來，我會很高興為你訓練。」");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_005B:
	if (!(var0006 == 0x0001)) goto labelFunc0875_0093;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金幣並數了數，發現你總共有 ");
	message(var0007);
	message(" 枚金幣。");
	say();
	if (!(var0007 < var0001)) goto labelFunc0875_0093;
	message("「很遺憾，你似乎沒有足夠的金幣在這裡訓練。也許下次，當你手頭更寬裕的時候……」");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_0093:
	if (!(var0006 == 0x0002)) goto labelFunc0875_00A4;
	message("「你已經和我一樣精通了！恐怕在這方面我無法再對你進行進一步的訓練。」");
	say();
	goto labelFunc0875_01BA;
labelFunc0875_00A4:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始了。");
	say();
	if (!(var0003 == "你")) goto labelFunc0875_00ED;
	var0009 = "完成";
	var000A = "感覺到";
	var000B = "你的";
	var000C = "花費";
	var000D = "你";
	goto labelFunc0875_010B;
labelFunc0875_00ED:
	var0009 = "完成";
	var000A = "感覺到";
	var000B = "他們的";
	var000C = "花費";
	var000D = "他們";
labelFunc0875_010B:
	message("Denby 遞給");
	message(var0003);
	message("一張印有盧恩符文的圖表。「研究這些符文並把它們記下來，」他說。在");
	message(var0003);
	message("完成這項任務後，");
	message(var0003);
	message("感覺到腦海中多了一些以前沒有的知識。~~「現在我們要練習。每天至少練習兩次，我教你的東西。這樣你就會變得更敏捷、更柔軟。」^");
	message(var0003);
	message("花了一段時間模仿 Denby 示範的動作。最後，Denby 教了");
	message(var0003);
	message("幾句用於冥想的魔法咒語。當訓練課程結束時，");
	message(var0003);
	message("感覺充滿了活力，準備好迎接可能出現的任何挑戰……*");
	say();
	var000E = Func0910(var0002, 0x0001);
	var000F = Func0910(var0002, 0x0002);
	var0010 = Func0910(var0002, 0x0006);
	if (!(var000E < 0x001E)) goto labelFunc0875_0194;
	Func0915(var0002, 0x0001);
labelFunc0875_0194:
	if (!(var000F < 0x001E)) goto labelFunc0875_01A7;
	Func0916(var0002, 0x0001);
labelFunc0875_01A7:
	if (!(var0010 < 0x001E)) goto labelFunc0875_01BA;
	Func0918(var0002, 0x0001);
labelFunc0875_01BA:
	return;
}


