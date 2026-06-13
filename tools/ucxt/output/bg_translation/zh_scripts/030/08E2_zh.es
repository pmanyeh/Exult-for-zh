#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08E2 0x8E2 ()
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
	var0001 = ["再看看", "血苔", "大蒜", "人蔘", "硫磺灰"];
	var0002 = [0x0000, 0x034A, 0x034A, 0x034A, 0x034A];
	var0003 = [0xFE99, 0x0001, 0x0004, 0x0005, 0x0007];
	var0004 = [0x0000, 0x0002, 0x0001, 0x0001, 0x0003];
	var0005 = "";
	var0006 = 0x0000;
	var0007 = ["", " 每次施法", " 每次使用", " 每次使用", " 每次使用"];
	var0008 = 0x0001;
labelFunc08E2_0083:
	if (!var0000) goto labelFunc08E2_0147;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08E2_00A7;
	message("「為可接受。」");
	say();
	var0000 = false;
	goto labelFunc08E2_0144;
labelFunc08E2_00A7:
	var000A = Func091C(var0005, var0001[var0009], var0006, var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message("。要同意此價格嗎？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08E2_0107;
	message("「要購買多少數量？」");
	say();
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0014, 0x0001, true);
labelFunc08E2_0107:
	if (!(var000B == 0x0001)) goto labelFunc08E2_0118;
	message("「為已成交！」");
	say();
	goto labelFunc08E2_013A;
labelFunc08E2_0118:
	if (!(var000B == 0x0002)) goto labelFunc08E2_0129;
	message("「為無法攜帶那麼多！」他搖了搖頭。");
	say();
	goto labelFunc08E2_013A;
labelFunc08E2_0129:
	if (!(var000B == 0x0003)) goto labelFunc08E2_013A;
	message("「為金幣不足以支付！」");
	say();
	goto labelFunc08E2_013A;
labelFunc08E2_013A:
	message("「要需要其他物品嗎？」");
	say();
	var0000 = Func090A();
labelFunc08E2_0144:
	goto labelFunc08E2_0083;
labelFunc08E2_0147:
	UI_pop_answers();
	return;
}