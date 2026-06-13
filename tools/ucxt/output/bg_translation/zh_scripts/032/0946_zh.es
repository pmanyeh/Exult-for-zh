#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091B 0x91B (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0946 0x946 ()
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
	var0001 = ["再看看", "麵包", "鬆餅", "餐包", "糕點"];
	var0002 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179];
	var0003 = [0xFE99, 0x0001, 0x0005, 0x0002, 0x0006];
	var0004 = [0x0000, 0x0004, 0x0003, 0x0004, 0x0003];
	var0005 = "";
	var0006 = [0x0000, 0x0000, 0x0000, 0x0001, 0x0000];
	var0007 = ["", " 每個", " 每片", " 每個", " 每個"];
	var0008 = 0x0001;
	message("「你想買點什麼？」");
	say();
labelFunc0946_0096:
	if (!var0000) goto labelFunc0946_015D;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc0946_00BA;
	message("「好的。」");
	say();
	var0000 = false;
	goto labelFunc0946_015A;
labelFunc0946_00BA:
	var000A = Func091B(var0005, var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message(" 這是個公道的價格，你同意嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0946_011D;
	message("「你想要多少？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0014, 0x0001, true);
labelFunc0946_011D:
	if (!(var000B == 0x0001)) goto labelFunc0946_012E;
	message("「成交！」");
	say();
	goto labelFunc0946_0150;
labelFunc0946_012E:
	if (!(var000B == 0x0002)) goto labelFunc0946_013F;
	message("「你不可能拿得下這麼多！」");
	say();
	goto labelFunc0946_0150;
labelFunc0946_013F:
	if (!(var000B == 0x0003)) goto labelFunc0946_0150;
	message("「你沒有足夠的金幣！」");
	say();
	goto labelFunc0946_0150;
labelFunc0946_0150:
	message("「你還想要點別的嗎？」");
	say();
	var0000 = Func090A();
labelFunc0946_015A:
	goto labelFunc0946_0096;
labelFunc0946_015D:
	UI_pop_answers();
	return;
}


