#game "blackgate"
// externs
extern var Func0865 0x865 ();
extern var Func0866 0x866 ();
extern var Func086C 0x86C ();
extern var Func086D 0x86D ();
extern var Func0867 0x867 ();
extern var Func0868 0x868 ();
extern var Func0869 0x869 ();
extern var Func086A 0x86A ();
extern var Func086B 0x86B ();
extern var Func086E 0x86E ();

var Func086F 0x86F ()
{
	var var0000;
	var var0001;
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
	var var0011;
	var var0012;
	var var0013;

	if (!UI_die_roll(0x0000, 0x0003)) goto labelFunc086F_002C;
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0023;
	var0000 = Func0865();
	goto labelFunc086F_0029;
labelFunc086F_0023:
	var0000 = Func0866();
labelFunc086F_0029:
	goto labelFunc086F_0048;
labelFunc086F_002C:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0042;
	var0000 = Func086C();
	goto labelFunc086F_0048;
labelFunc086F_0042:
	var0000 = Func086D();
labelFunc086F_0048:
	var0001 = var0000[0x0001];
	var0002 = var0000[0x0002];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0070;
	var0003 = Func0865();
	goto labelFunc086F_0076;
labelFunc086F_0070:
	var0003 = Func0866();
labelFunc086F_0076:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_008C;
	var0004 = Func0865();
	goto labelFunc086F_0092;
labelFunc086F_008C:
	var0004 = Func0866();
labelFunc086F_0092:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_00A8;
	var0005 = Func0865();
	goto labelFunc086F_00AE;
labelFunc086F_00A8:
	var0005 = Func0866();
labelFunc086F_00AE:
	var0005 = var0005[0x0002];
	var0000 = Func0867();
	var0006 = var0000[0x0001];
	var0007 = var0000[0x0002];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_00E5;
	var0000 = Func0868();
	goto labelFunc086F_00EB;
labelFunc086F_00E5:
	var0000 = Func0869();
labelFunc086F_00EB:
	var0008 = var0000[0x0001];
	var0009 = var0000[0x0002];
	var000A = var0000[0x0003];
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_011C;
	var000B = Func086A();
	goto labelFunc086F_0122;
labelFunc086F_011C:
	var000B = Func086B();
labelFunc086F_0122:
	if (!UI_die_roll(0x0000, 0x0001)) goto labelFunc086F_0138;
	var0000 = Func086C();
	goto labelFunc086F_013E;
labelFunc086F_0138:
	var0000 = Func086D();
labelFunc086F_013E:
	var000C = var0000[0x0001];
	var000D = var0000[0x0002];
	var000E = Func086E();
	var0000 = UI_die_roll(0x0000, 0x0024);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0183;
	var000F = ("如果你給我看你的，我就給你看我的" + var0006 + "的" + var0001 + "。");
labelFunc086F_0183:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_01BD;
	var000F = ("我所有" + var0006 + "的" + var0002 + var000A + var000B + "。");
labelFunc086F_01BD:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_01EF;
	var000F = ("請停止" + var000A + "我" + var0006 + "的" + var0001 + "。");
labelFunc086F_01EF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0221;
	var000F = ("你看過我的" + var0001 + "嗎？它" + var000A + var000B + "。");
labelFunc086F_0221:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_024B;
	var000F = ("今天沒有" + var0001 + "給你，小" + var000C + "，只有死亡。");
labelFunc086F_024B:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0287;
	var0010 = UI_a_or_an(var0006);
	var000F = ("我現在有" + var0006 + "的" + var0001 + "了嗎？");
labelFunc086F_0287:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_02C3;
	var0010 = UI_a_or_an(var0006);
	var000F = ("我的律師在哪裡？我立刻需要" + var0006 + "的" + var0001 + "。");
labelFunc086F_02C3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_02FD;
	var000F = ("你從" + var0001 + "手中拯救了我" + var0006 + "的" + var000C + "，" + var000E + "。我該如何報答你？");
labelFunc086F_02FD:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0351;
	var0010 = UI_a_or_an(var0001);
	var000F = (var0001 + "，" + var0001 + "，用我的王國換取" + var0001 + "！");
labelFunc086F_0351:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0385;
	var0010 = UI_a_or_an(var0001);
	var000F = ("坦白說，親愛的，我一點也不在乎" + var0001 + "。");
labelFunc086F_0385:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_03AF;
	var000F = ("有" + var0002 + "為證，我再也不會變得" + var0006 + "了。");
labelFunc086F_03AF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_03D1;
	var000F = ("我的天，" + var000E + "，我想我們已經不在堪薩斯了。");
labelFunc086F_03D1:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0403;
	var000F = ("可以借用你的" + var0001 + "嗎？我的似乎變得" + var0006 + "了" + var000B + "。");
labelFunc086F_0403:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0435;
	var000F = ("我的" + var000D + var000A + var000B + "。");
labelFunc086F_0435:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0467;
	var000F = ("你必認識" + var0001 + "，這" + var0001 + "必使你變得" + var0006 + "。");
labelFunc086F_0467:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_04AB;
	var0010 = UI_a_or_an(var000C);
	var000F = ("你不可" + var0008 + "於" + var000C + "，" + var000E + "。");
labelFunc086F_04AB:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_04D5;
	var000F = ("當孝敬父母與你的" + var0001 + "，" + var000E + "。");
labelFunc086F_04D5:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_04FF;
	var000F = ("你不可貪戀鄰舍的" + var0001 + "，" + var000E + "。");
labelFunc086F_04FF:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0533;
	var0010 = UI_a_or_an(var0001);
	var000F = ("不借錢給人，也不要做" + var0001 + "。");
labelFunc086F_0533:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0565;
	var000F = ("絕對不要" + var0008 + "禮物" + var000C + "在" + var0001 + "裡。");
labelFunc086F_0565:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_058F;
	var000F = ("傻瓜和他的" + var0001 + "很快就會變得" + var0006 + "。");
labelFunc086F_058F:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_05B9;
	var000F = ("全世界的工人，" + var0008 + "吧！你們失去的只有你們的" + var0002 + "！");
labelFunc086F_05B9:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_05DB;
	var000F = ("我是一個" + var0001 + "er。");
labelFunc086F_05DB:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0605;
	var000F = ("該死的" + var0002 + "！" + var0006 + "全速前進！");
labelFunc086F_0605:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_063F;
	var000F = ("不要問你" + var0006 + "的" + var0001 + "能為你做什麼，而要問你能為你" + var0006 + "的" + var0001 + "做什麼。");
labelFunc086F_063F:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0671;
	var000F = (var000E + "！" + var000E + "！你這該死的" + var000C + "。");
labelFunc086F_0671:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_06A3;
	var000F = ("讓我提醒你，" + var0003 + "的" + var0002 + "可能比表面上看起來更" + var0006 + "。");
labelFunc086F_06A3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_06D5;
	var000F = ("摧毀你" + var0006 + "又" + var0007 + "的生活，趁還來得及，" + var000E + "。");
labelFunc086F_06D5:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0723;
	var0010 = UI_a_or_an(var0006);
	var0011 = UI_a_or_an(var0001);
	var000F = ("我的頭感覺像個" + var0006 + "，被" + var0001 + "指著。");
labelFunc086F_0723:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0755;
	var000F = ("太美了，" + var000E + "，我會讓我的" + var0001 + "打給你的" + var0001 + "。");
labelFunc086F_0755:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0777;
	var000F = ("不，謝謝，我正在注意我的" + var0001 + "攝取量。");
labelFunc086F_0777:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 >= 0x0000)) goto labelFunc086F_0977;
	var0010 = UI_a_or_an(var0006);
	var0012 = ("致" + var0006 + "的" + var0001 + "頌歌。 ");
	if (!(var0000 == 0x0000)) goto labelFunc086F_07F3;
	var000F = ("喔，" + var0001 + "的" + var000D + "如何在" + var0006 + "的" + var0003 + "中" + var0008 + var000B + "。");
labelFunc086F_07F3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0837;
	var0010 = UI_a_or_an(var0006);
	var000F = ("我該將你比作" + var0006 + "的" + var0001 + "嗎？你遠比它" + var0007 + "。");
labelFunc086F_0837:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_08A3;
	var0013 = UI_a_or_an(var0001);
	var000F = ("成為" + var0001 + "，或是不成為。這是一個" + var0003 + "。究竟是在" + var0004 + "中" + var0008 + "那" + var0006 + "的" + var0003 + "之" + var0002 + "與" + var0005 + "更高尚，還是...");
labelFunc086F_08A3:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_08E9;
	var000F = ("今天早上我看到一個小小的" + var0001 + var000A + var000B + "。" + var0006 + "的" + var0003 + "季節如何來去。死亡終將降臨我們所有人。");
labelFunc086F_08E9:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_0913;
	var000F = ("憤怒，對" + var0001 + "的" + var000A + "感到憤怒。");
labelFunc086F_0913:
	var0000 = (var0000 - 0x0001);
	if (!(var0000 == 0x0000)) goto labelFunc086F_096D;
	var000F = ("在轉動的" + var0001 + "中的愛。小小的" + var000D + var0008 + var000B + "。" + var0006 + "的" + var0005 + "低語著她們" + var0007 + "的繆斯。喔，轉動的" + var0001 + "。");
labelFunc086F_096D:
	var0000 = (var0000 - 0x0001);
labelFunc086F_0977:
	return (var0012 + var000F);
	return 0;
}


