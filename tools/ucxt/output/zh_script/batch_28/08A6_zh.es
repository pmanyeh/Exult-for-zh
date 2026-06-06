#game "blackgate"
// externs
extern var Func0920 0x920 ();
extern var Func0908 0x908 ();
extern var Func090F 0x90F (var var0000);
extern var Func0922 0x922 (var var0000, var var0001, var var0002, var var0003);
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0915 0x915 (var var0000, var var0001);
extern void Func0917 0x917 (var var0000, var var0001);

void Func08A6 0x8A6 (var var0000, var var0001)
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
	var0003 = Func0908();
	if (!(var0002 == 0x0000)) goto labelFunc08A6_0019;
	goto labelFunc08A6_017C;
labelFunc08A6_0019:
	var0004 = Func090F(var0002);
	if (!(var0004 == var0003)) goto labelFunc08A6_0047;
	var0004 = "you";
	var0005 = "you";
	var0006 = "your";
	var0007 = "find";
	goto labelFunc08A6_0082;
labelFunc08A6_0047:
	var0007 = "finds";
	if (!((var0002 == 0xFFFB) || ((var0002 == 0xFFF8) || (var0002 == 0xFFF7)))) goto labelFunc08A6_0076;
	var0005 = "she";
	var0006 = "her";
	goto labelFunc08A6_0082;
labelFunc08A6_0076:
	var0005 = "he";
	var0006 = "his";
labelFunc08A6_0082:
	var0008 = 0x0003;
	var0009 = Func0922(var0000, var0001, var0002, var0008);
	if (!(var0009 == 0x0000)) goto labelFunc08A6_00B1;
	message("Karenna 看著");
	message(var0004);
	message("並微微一笑。「你並非沒有技巧，但你還沒準備好。」");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_00B1:
	if (!(var0009 == 0x0001)) goto labelFunc08A6_00E9;
	var000A = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	message("你集中你的金幣並數了數，發現你總共有 ");
	message(var000A);
	message(" 枚金幣。");
	say();
	if (!(var000A < var0001)) goto labelFunc08A6_00E9;
	message("Karenna 生氣地看著你。「我不是在開慈善機構。等你有多點錢的時候再來吧！」");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_00E9:
	if (!(var0009 == 0x0002)) goto labelFunc08A6_0100;
	message("Karenna 瞪著");
	message(var0004);
	message("。「你只是在浪費我的時間。你和我一樣敏捷且狡猾，我敢打賭你早就知道了。我沒時間應付你這種人。」");
	say();
	goto labelFunc08A6_017C;
labelFunc08A6_0100:
	var000B = UI_remove_party_items(var0001, 0x0284, 0xFE99, 0xFE99, true);
	message("你支付了 ");
	message(var0001);
	message(" 枚金幣，訓練課程開始了。");
	say();
	message("Karenna 像一隻豹一樣在訓練場的軟墊上跳躍。她的動作快到模糊不清。她發動攻擊。起初她能隨意擊中目標，引起一陣陣疼痛，讓");
	message(var0004);
	message("搖搖晃晃，但隨著課程的進行，");
	message(var0004);
	message("發現自己的反射神經明顯變敏銳了。");
	say();
	message("「我感謝你帶來一場精彩的練習。你會再來的。」她自信地笑著。");
	say();
	var000C = Func0910(var0002, 0x0001);
	var000D = Func0910(var0002, 0x0004);
	if (!(var000C < 0x001E)) goto labelFunc08A6_0169;
	Func0915(var0002, 0x0002);
labelFunc08A6_0169:
	if (!(var000D < 0x001E)) goto labelFunc08A6_017C;
	Func0917(var0002, 0x0001);
labelFunc08A6_017C:
	return;
}


