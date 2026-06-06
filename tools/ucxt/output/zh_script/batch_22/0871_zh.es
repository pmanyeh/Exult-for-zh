#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0871 0x871 ()
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

	var0000 = Func0909();
	UI_push_answers();
	var0001 = true;
	var0002 = ["再看看", "肉乾", "蜂蜜酒", "魚", "火腿", "銀葉草", "麥酒", "葡萄酒"];
	var0003 = [0x0000, 0x0179, 0x0268, 0x0179, 0x0179, 0x0179, 0x0268, 0x0268];
	var0004 = [0xFE99, 0x000F, 0x0000, 0x000D, 0x000B, 0x001F, 0x0003, 0x0005];
	var0005 = [0x0000, 0x0019, 0x0005, 0x0003, 0x000A, 0x0014, 0x0002, 0x0002];
	var0006 = "";
	var0007 = 0x0000;
	var0008 = ["", " (10個)", " (每瓶)", " (每個)", " (每片)", " (每盤)", " (每瓶)", " (每瓶)"];
	var0009 = [0x0000, 0x000A, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	message("「你想要些什麼？」");
	say();
labelFunc0871_00D2:
	if (!var0001) goto labelFunc0871_021E;
	var000A = Func090C(var0002);
	if (!(var000A == 0x0001)) goto labelFunc0871_00F6;
	message("「很好。」");
	say();
	var0001 = false;
	goto labelFunc0871_021B;
labelFunc0871_00F6:
	if (!(var000A == 0x0006)) goto labelFunc0871_010D;
	if (!gflags[0x012B]) goto labelFunc0871_010D;
	message("「我沒有了。不知為何，沒有人送銀葉草給我們，所以我無法用它做飯。」");
	say();
	goto labelFunc0871_0211;
labelFunc0871_010D:
	var000B = Func091B(var0006, var0002[var000A], var0007, var0005[var000A], var0008[var000A]);
	var000C = 0x0000;
	message("\"^");
	message(var000B);
	message(" 這樣可以嗎？」");
	say();
	var000D = Func090A();
	if (!var000D) goto labelFunc0871_01D2;
	if (!(var0003[var000A] == 0x0268)) goto labelFunc0871_017C;
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0000, 0x0001, true);
	goto labelFunc0871_01D2;
labelFunc0871_017C:
	var000B = "你想要多少";
	if (!(var0009[var000A] > 0x0001)) goto labelFunc0871_0199;
	var000B = (var000B + "組");
labelFunc0871_0199:
	var000B = (var000B + "？");
	message("「");
	message(var000B);
	message("」");
	say();
	var000C = Func08F8(var0003[var000A], var0004[var000A], var0009[var000A], var0005[var000A], 0x0014, 0x0001, true);
labelFunc0871_01D2:
	if (!(var000C == 0x0001)) goto labelFunc0871_01E3;
	message("「成交！」");
	say();
	goto labelFunc0871_0211;
labelFunc0871_01E3:
	if (!(var000C == 0x0002)) goto labelFunc0871_01FA;
	message("「但是，");
	message(var0000);
	message("，你不可能拿得動那麼多東西！」");
	say();
	goto labelFunc0871_0211;
labelFunc0871_01FA:
	if (!(var000C == 0x0003)) goto labelFunc0871_0211;
	message("「我很抱歉，");
	message(var0000);
	message("，你沒有足夠的金幣。」");
	say();
	goto labelFunc0871_0211;
labelFunc0871_0211:
	message("「你還要買其他東西嗎？」");
	say();
	var0001 = Func090A();
labelFunc0871_021B:
	goto labelFunc0871_00D2;
labelFunc0871_021E:
	UI_pop_answers();
	return;
}


