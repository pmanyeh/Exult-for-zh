#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);

void Func089F 0x89F (var var0000, var var0001)
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
	var0003 = Func090F(var0002);
	var0004 = Func0908();
	if (!(var0003 == var0004)) goto labelFunc089F_0025;
	var0003 = "你";
labelFunc089F_0025:
	if (!(var0002 == 0x0000)) goto labelFunc089F_0032;
	goto labelFunc089F_0110;
labelFunc089F_0032:
	var0005 = 0x0002;
	var0006 = Func0922(var0000, var0001, var0002, var0005);
	if (!(var0006 == 0x0000)) goto labelFunc089F_005B;
	message("Jakher 注視著你的雙眼，在智力上對你進行評估。「你需要在戰場上學習更多。如果我們現在交談，我只是在白費唇舌。你連我說的一個字都不會懂。」");
	say();
	goto labelFunc089F_0110;
labelFunc089F_005B:
	if (!(var0006 == 0x0001)) goto labelFunc089F_0093;
	var0007 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金幣並數了數，發現你總共有 ");
	message(var0007);
	message(" 枚金幣。");
	say();
	if (!(var0007 < var0001)) goto labelFunc089F_0093;
	message("「你似乎沒有我在此訓練所需數量的金幣。也許下次，當你手頭更寬裕的時候……」");
	say();
	goto labelFunc089F_0110;
labelFunc089F_0093:
	if (!(var0006 == 0x0002)) goto labelFunc089F_00A4;
	message("「你已經精通戰場戰術了。恐怕我無法在這方面為你提供進一步的訓練。」");
	say();
	goto labelFunc089F_0110;
labelFunc089F_00A4:
	var0008 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始了。");
	say();
	message("當 Jakher 開始解釋過去偉大軍事領袖在驚人戰役中所使用的策略時，他的眼睛閃爍著光芒。他在地上畫著地圖，神祕兮兮地對著");
	message(var0003);
	message("耳語。過了一段時間，");
	message(var0003);
	message("幾乎能感覺到自己開始吸收了他的一些精明。");
	say();
	var0009 = Func0910(var0002, 0x0002);
	var000A = Func0910(var0002, 0x0000);
	if (!(var0009 < 0x001E)) goto labelFunc089F_00FD;
	Func0916(var0002, 0x0001);
labelFunc089F_00FD:
	if (!(var000A < 0x001E)) goto labelFunc089F_0110;
	Func0914(var0002, 0x0001);
labelFunc089F_0110:
	message("「我期待你的歸來。」");
	say();
	return;
}


