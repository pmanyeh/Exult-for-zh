#game "blackgate"
// externs
extern var Func090F 0x90F (var var0000);
extern var Func090A 0x90A ();
extern var Func0932 0x932 (var var0000);

var Func094B 0x94B (var var0000, var var0001)
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

	var0002 = 0x0000;
	var0003 = var0000;
	var0004 = var0000;
	var0005 = true;
	var0006 = false;
	var0007 = 0x0000;
labelFunc094B_0020:
	if (!var0005) goto labelFunc094B_02A4;
	if (!var0006) goto labelFunc094B_0039;
	message("「這是我最後的報價—— ");
	message(var0003);
	message("。」");
	say();
	goto labelFunc094B_004C;
labelFunc094B_0039:
	var0008 = Func090F(var0001);
	message("「想要 ");
	message(var0003);
	message(" 枚金幣。」");
	say();
labelFunc094B_004C:
	var0009 = (var0003 * 0x0003);
	var0009 = (var0009 / 0x0002);
	var000A = (var0003 / 0x0002);
	var000B = (var0003 / 0x0004);
	var000C = [var0009, var0003, var000A, var000B];
	if (!var0006) goto labelFunc094B_00B2;
	message("「接受嗎？」");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc094B_00A7;
	message("「成交。」");
	say();
	return var0003;
	goto labelFunc094B_00AF;
labelFunc094B_00A7:
	message("「懷疑你為何要來煩我。」");
	say();
	return 0x0000;
labelFunc094B_00AF:
	goto labelFunc094B_00CF;
labelFunc094B_00B2:
	var0002 = var0004;
	message("「有其他報價嗎？」");
	say();
	var0004 = UI_input_numeric_value(0x0000, var0009, 0x0001, 0x0000);
labelFunc094B_00CF:
	if (!(var0004 == 0x0000)) goto labelFunc094B_00E1;
	message("「注意到你顯然不感興趣。」");
	say();
	return 0x0000;
labelFunc094B_00E1:
	if (!(var0004 >= var0003)) goto labelFunc094B_00F3;
	message("「接受你的報價。」");
	say();
	return var0004;
labelFunc094B_00F3:
	if (!(var0004 < var000C[0x0004])) goto labelFunc094B_0109;
	message("「很高興，」他說。「反正我本來就想留著！告訴你離開。」");
	say();
	abort;
	return 0x0000;
labelFunc094B_0109:
	var0007 = UI_get_random(0x0064);
	if (!(var0002 == 0x0000)) goto labelFunc094B_0126;
	var0002 = var000C[0x0003];
labelFunc094B_0126:
	if (!(var0004 >= var000C[0x0003])) goto labelFunc094B_01D9;
	if (!(var0007 >= 0x005A)) goto labelFunc094B_0184;
	var0006 = true;
	var000D = Func0932(((var0004 - var0002) * 0x0002));
	var000D = UI_get_random(var000D);
	if (!((var0003 - var000D) <= var0004)) goto labelFunc094B_0177;
	var0003 = (var0004 + 0x0001);
	goto labelFunc094B_0181;
labelFunc094B_0177:
	var0003 = (var0003 - var000D);
labelFunc094B_0181:
	goto labelFunc094B_029D;
labelFunc094B_0184:
	if (!(var0007 >= 0x001E)) goto labelFunc094B_01D1;
	var000D = Func0932(((var0004 - var0002) * 0x0002));
	var000D = UI_get_random(var000D);
	if (!((var0003 - var000D) <= var0004)) goto labelFunc094B_01C4;
	var0003 = (var0004 + 0x0001);
	goto labelFunc094B_01CE;
labelFunc094B_01C4:
	var0003 = (var0003 - var000D);
labelFunc094B_01CE:
	goto labelFunc094B_029D;
labelFunc094B_01D1:
	message("「同意！」");
	say();
	return var0004;
labelFunc094B_01D9:
	if (!(var0004 >= var000C[0x0004])) goto labelFunc094B_029D;
	if (!(var0007 >= 0x0028)) goto labelFunc094B_0237;
	var0006 = true;
	var000D = Func0932(((var0004 - var0002) * 0x0002));
	var000D = UI_get_random(var000D);
	if (!((var0003 - var000D) <= var0004)) goto labelFunc094B_022A;
	var0003 = (var0004 + 0x0001);
	goto labelFunc094B_0234;
labelFunc094B_022A:
	var0003 = (var0003 - var000D);
labelFunc094B_0234:
	goto labelFunc094B_029D;
labelFunc094B_0237:
	if (!(var0007 >= 0x000F)) goto labelFunc094B_0284;
	var000D = Func0932(((var0004 - var0002) * 0x0002));
	var000D = UI_get_random(var000D);
	if (!((var0003 - var000D) <= var0004)) goto labelFunc094B_0277;
	var0003 = (var0004 + 0x0001);
	goto labelFunc094B_0281;
labelFunc094B_0277:
	var0003 = (var0003 - var000D);
labelFunc094B_0281:
	goto labelFunc094B_029D;
labelFunc094B_0284:
	if (!(var0007 >= 0x0005)) goto labelFunc094B_0296;
	message("「接受這麼少太愚蠢了！」");
	say();
	return 0x0000;
labelFunc094B_0296:
	message("「下次要收多一點。賣給你太便宜了！」");
	say();
	goto labelFunc094B_029D;
labelFunc094B_029D:
	return var0003;
	goto labelFunc094B_0020;
labelFunc094B_02A4:
	return 0;
}


