#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func087A 0x87A ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = ["再看看", "火把", "油瓶", "背包", "袋子", "鏟子", "鋤頭", "火藥桶", "十字鎬", "鋪蓋卷"];
	var0002 = [0x0000, 0x0253, 0x030E, 0x0321, 0x0322, 0x0271, 0x0272, 0x02C0, 0x0270, 0x0247];
	var0003 = [0x0000, 0x0003, 0x0030, 0x000A, 0x0003, 0x000A, 0x000A, 0x001E, 0x000C, 0x0010];
	var0004 = ["", "", "", "", "", "", "", "", "", ""];
	var0005 = 0x0000;
	var0006 = ["", "", " 一打", "", "", "", "", "", "", ""];
	var0007 = 0xFE99;
	var0008 = [0x0000, 0x0001, 0x000C, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「我能賣給您什麼？」");
	say();
labelFunc087A_00F0:
	if (!var0000) goto labelFunc087A_01FF;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc087A_0114;
	message("「非常好。」");
	say();
	var0000 = false;
	goto labelFunc087A_01FC;
labelFunc087A_0114:
	var000A = Func091B(var0004[var0009], var0001[var0009], var0005, var0003[var0009], var0006);
	var000B = 0x0000;
	message("\"^");
	message(var000A);
	message("。這樣可以接受嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc087A_01BF;
	if (!((var0002[var0009] == 0x0253) || (var0002[var0009] == 0x030E))) goto labelFunc087A_01A0;
	if (!(var0002[var0009] == 0x030E)) goto labelFunc087A_017A;
	message("「您想要多少打？」");
	say();
	goto labelFunc087A_017E;
labelFunc087A_017A:
	message("「您想要多少個？」");
	say();
labelFunc087A_017E:
	var000B = Func08F8(var0002[var0009], var0007, var0008, var0003[var0009], 0x0014, 0x0001, true);
	goto labelFunc087A_01BF;
labelFunc087A_01A0:
	var000B = Func08F8(var0002[var0009], var0007, var0008, var0003[var0009], 0x0000, 0x0001, false);
labelFunc087A_01BF:
	if (!(var000B == 0x0001)) goto labelFunc087A_01D0;
	message("「非常好！」");
	say();
	goto labelFunc087A_01F2;
labelFunc087A_01D0:
	if (!(var000B == 0x0002)) goto labelFunc087A_01E1;
	message("「抱歉，但您不可能拿得動那麼重的東西！」");
	say();
	goto labelFunc087A_01F2;
labelFunc087A_01E1:
	if (!(var000B == 0x0003)) goto labelFunc087A_01F2;
	message("「您沒有足夠的金幣買這個，」他搖著頭說。~~「手裡鳥太多，還不如一整片樹叢。」");
	say();
	goto labelFunc087A_01F2;
labelFunc087A_01F2:
	message("「您還想買些別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc087A_01FC:
	goto labelFunc087A_00F0;
labelFunc087A_01FF:
	UI_pop_answers();
	return;
}


