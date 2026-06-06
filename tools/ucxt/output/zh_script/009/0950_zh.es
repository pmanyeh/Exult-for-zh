#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func0950 0x950 (var var0000, var var0001)
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
	var var0011;
	var var0012;

	var0002 = Func0920();
	var0003 = UI_get_npc_name(var0002);
	var0004 = UI_is_pc_female();
	if (!(var0002 == 0xFE9C)) goto labelFunc0950_005A;
	var0003 = "你";
	var0005 = "你";
	var0006 = "模仿";
	var0007 = "培養出";
	var0008 = "你們";
	var0009 = "你已經";
	var000A = "覺得";
	var000B = "掌握了";
	var000C = "學會了";
	goto labelFunc0950_009F;
labelFunc0950_005A:
	if (!var0004) goto labelFunc0950_006F;
	var0005 = "她";
	var0009 = "她已經";
	goto labelFunc0950_007B;
labelFunc0950_006F:
	var0005 = "他";
	var0009 = "他已經";
labelFunc0950_007B:
	var0006 = "模仿";
	var0007 = "培養出";
	var0008 = "他們";
	var000A = "覺得";
	var000B = "掌握了";
	var000C = "學會了";
labelFunc0950_009F:
	if (!(var0002 == 0x0000)) goto labelFunc0950_00AC;
	goto labelFunc0950_01C6;
labelFunc0950_00AC:
	var000D = 0x0002;
	var000E = Func0922(var0000, var0001, var0002, var000D);
	if (!(var000E == 0x0000)) goto labelFunc0950_00D5;
	message("「看來你現在沒有足夠的實戰經驗來進行訓練。如果你能獲得更多經驗後再來，我就可以幫助你。」");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_00D5:
	if (!(var000E == 0x0001)) goto labelFunc0950_010D;
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中精神數了數你的金幣，發現你總共有 ");
	message(var000F);
	message(" 枚金幣。");
	say();
	if (!(var000F < var0001)) goto labelFunc0950_010D;
	message("「看來你似乎沒有足夠的金幣在這裡訓練。如果你能等口袋滿了之後再來……」");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_010D:
	if (!(var000E == 0x0002)) goto labelFunc0950_011E;
	message("「看來你已經和我一樣精通了！恐怕我不能再教你什麼了。」");
	say();
	goto labelFunc0950_01C6;
labelFunc0950_011E:
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣。");
	say();
	var0010 = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("Zella 開始課程，向");
	message(var0003);
	message("展示『拳擊』的正確姿勢。~~「這全都取決於平衡。利用你的體重來控制動作。腳步要輕。這幾乎就像跳舞一樣。」Zella 向");
	message(var0003);
	message("示範了一些步法，並對著空氣揮拳。");
	message(var0005);
	message("");
	message(var0006);
	message("著他，並慢慢");
	message(var0007);
	message("對這種技巧的感覺。過了一會兒，這成為了第二天性。");
	message(var0008);
	message("兩人互相揮拳，而");
	message(var0003);
	message("");
	message(var000C);
	message("了正確的防禦動作。課程結束時，");
	message(var0009);
	message("");
	message(var000A);
	message("");
	message(var0009);
	message("");
	message(var000B);
	message("更好地理解了『拳擊』的概念。");
	say();
	var0011 = Func0910(var0002, 0x0001);
	var0012 = Func0910(var0002, 0x0004);
	if (!(var0011 < 0x001E)) goto labelFunc0950_01B3;
	Func0915(var0002, 0x0001);
labelFunc0950_01B3:
	if (!(var0012 < 0x001E)) goto labelFunc0950_01C6;
	Func0917(var0002, 0x0001);
labelFunc0950_01C6:
	return;
}


