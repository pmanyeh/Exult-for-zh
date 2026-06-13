#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func090F 0x90F (var var0000);
extern var Func0908 0x908 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0916 0x916 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08D0 0x8D0 (var var0000, var var0001)
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

	var0002 = Func0920();
	var0003 = Func090F(var0002);
	var0004 = "感覺";
	var0005 = Func0908();
	if (!(var0003 == var0005)) goto labelFunc08D0_003A;
	var0003 = "你";
	var0006 = "你";
	var0004 = "感覺";
	goto labelFunc08D0_0063;
labelFunc08D0_003A:
	if (!((var0002 == 0xFFF8) || ((var0002 == 0xFFFB) || (var0002 == 0xFFF7)))) goto labelFunc08D0_005D;
	var0006 = "她";
	goto labelFunc08D0_0063;
labelFunc08D0_005D:
	var0006 = "他";
labelFunc08D0_0063:
	if (!(var0002 == 0x0000)) goto labelFunc08D0_0070;
	goto labelFunc08D0_0177;
labelFunc08D0_0070:
	var0007 = 0x0003;
	var0008 = Func0922(var0000, var0001, var0002, var0007);
	if (!(var0008 == 0x0000)) goto labelFunc08D0_0099;
	message("「我很抱歉，但你目前沒有足夠的經驗可以進行訓練。請改日再試，屆時我很樂意為你主持一場訓練。」");
	say();
	goto labelFunc08D0_0177;
labelFunc08D0_0099:
	if (!(var0008 == 0x0001)) goto labelFunc08D0_00C7;
	var0009 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0009 < var0001)) goto labelFunc08D0_00C7;
	message("「看來你的金幣不夠。等你有錢一點的時候再來吧。」");
	say();
	goto labelFunc08D0_0177;
labelFunc08D0_00C7:
	if (!(var0008 == 0x0002)) goto labelFunc08D0_00D8;
	message("「真是令我驚訝！你的經驗已經和我一樣豐富了！我無法再給你更多的訓練。」");
	say();
	goto labelFunc08D0_0177;
labelFunc08D0_00D8:
	var000A = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message(" Rayburt 收下了你的錢。「訓練要開始了。」");
	say();
	message(" Rayburt 首先指示 ");
	message(var0003);
	message(" 躺在地上並放鬆。他教導 ");
	message(var0006);
	message(" 呼吸練習以及清除心中所有雜念的技巧。");
	say();
	message("過了一會兒，他要求 ");
	message(var0006);
	message(" 站起來，並親自示範平衡與控制，將其與冥想和專注連結在一起。");
	say();
	message("最後，他示範了幾招涵蓋徒手搏擊與劍術的精妙招式。到這一個小時結束時，");
	message(var0003);
	message(" ");
	message(var0004);
	message(" 在這種不尋常的戰鬥方式上理解深刻得多且更加熟練。*");
	say();
	var000B = Func0910(var0002, 0x0001);
	var000C = Func0910(var0002, 0x0002);
	var000D = Func0910(var0002, 0x0004);
	if (!(var000B < 0x001E)) goto labelFunc08D0_0151;
	Func0915(var0002, 0x0001);
labelFunc08D0_0151:
	if (!(var000C < 0x001E)) goto labelFunc08D0_0164;
	Func0916(var0002, 0x0001);
labelFunc08D0_0164:
	if (!(var000D < 0x001E)) goto labelFunc08D0_0177;
	Func0917(var0002, 0x0001);
labelFunc08D0_0177:
	return;
}