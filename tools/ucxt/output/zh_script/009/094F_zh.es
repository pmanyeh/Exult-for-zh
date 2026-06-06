#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0914 0x914 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func094F 0x94F (var var0000, var var0001)
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
	var0003 = UI_get_npc_name(var0002);
	if (!(var0002 == 0x0000)) goto labelFunc094F_001D;
	goto labelFunc094F_0151;
labelFunc094F_001D:
	var0004 = 0x0003;
	var0005 = Func0922(var0000, var0001, var0002, var0004);
	if (!(var0005 == 0x0000)) goto labelFunc094F_0046;
	message("經過非常快速的跑步後，他轉身說道：「你的耐力還不夠。如果你願意，我以後可以訓練你。」");
	say();
	goto labelFunc094F_0151;
labelFunc094F_0046:
	if (!(var0005 == 0x0001)) goto labelFunc094F_007E;
	var0006 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中精神數了數你的金幣，發現你總共有 ");
	message(var0006);
	message(" 枚金幣。");
	say();
	if (!(var0006 < var0001)) goto labelFunc094F_007E;
	message("「看來你現在沒有足夠的金幣來進行訓練。」");
	say();
	goto labelFunc094F_0151;
labelFunc094F_007E:
	if (!(var0005 == 0x0002)) goto labelFunc094F_008F;
	message("經過短暫的跑步後，他轉身說道：「你已經和我一樣強壯了！恐怕我沒有什麼可以教你的了。」");
	say();
	goto labelFunc094F_0151;
labelFunc094F_008F:
	var0007 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始。");
	say();
	if (!(var0002 == 0xFE9C)) goto labelFunc094F_00C0;
	var0008 = "你覺得 ";
	goto labelFunc094F_00CA;
labelFunc094F_00C0:
	var0008 = (var0003 + "覺得 ");
labelFunc094F_00CA:
	if (!(var0002 == 0xFE9C)) goto labelFunc094F_00DD;
	var0009 = "你已經 ";
	goto labelFunc094F_0103;
labelFunc094F_00DD:
	var000A = UI_is_pc_female();
	if (!var000A) goto labelFunc094F_00F3;
	var000B = "她已經 ";
	goto labelFunc094F_00F9;
labelFunc094F_00F3:
	var000B = "他已經 ";
labelFunc094F_00F9:
	var0009 = var000B;
labelFunc094F_0103:
	message("經過半小時的對打，");
	message(var0008);
	message("彷彿");
	message(var0009);
	message("學會了在戰鬥中更好地施加力量。");
	say();
	var000C = Func0910(var0002, 0x0000);
	if (!(var000C < 0x001E)) goto labelFunc094F_0132;
	Func0914(var0002, 0x0001);
labelFunc094F_0132:
	var000D = Func0910(var0002, 0x0004);
	if (!(var000D < 0x001E)) goto labelFunc094F_0151;
	Func0917(var0002, 0x0002);
labelFunc094F_0151:
	return;
}


