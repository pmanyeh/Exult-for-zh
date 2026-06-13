#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func091C 0x91C (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090A 0x90A ();
extern var Func08F8 0x8F8 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func08E1 0x8E1 ()
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
	var0001 = ["再看看", "黃金角帽", "金項鍊", "金耳環", "金爪戒", "黑色藥水", "白色藥水"];
	var0002 = [0x0000, 0x03A9, 0x03A9, 0x03A9, 0x03A9, 0x0154, 0x0154];
	var0003 = [0xFE99, 0x0002, 0x0004, 0x0005, 0x0006, 0x0007, 0x0006];
	var0004 = [0x0000, 0x001E, 0x0014, 0x0005, 0x000A, 0x003C, 0x006E];
	var0005 = ["", "", "", "", "", "", ""];
	var0006 = [0x0000, 0x0001, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000];
	var0007 = ["", " 每對", "", "", "", "", ""];
	var0008 = 0x0001;
	message("「要購買什麼物品？」");
	say();
labelFunc08E1_00CF:
	if (!var0000) goto labelFunc08E1_0195;
	var0009 = Func090C(var0001);
	if (!(var0009 == 0x0001)) goto labelFunc08E1_00F3;
	message("「為可接受。」");
	say();
	var0000 = false;
	goto labelFunc08E1_0192;
labelFunc08E1_00F3:
	var000A = Func091C(var0005[var0009], var0001[var0009], var0006[var0009], var0004[var0009], var0007[var0009]);
	var000B = 0x0000;
	message("「^");
	message(var000A);
	message("。為可接受之價格？」");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08E1_0155;
	var000B = Func08F8(var0002[var0009], var0003[var0009], var0008, var0004[var0009], 0x0000, 0x0001, false);
labelFunc08E1_0155:
	if (!(var000B == 0x0001)) goto labelFunc08E1_0166;
	message("「為已成交！」");
	say();
	goto labelFunc08E1_0188;
labelFunc08E1_0166:
	if (!(var000B == 0x0002)) goto labelFunc08E1_0177;
	message("「為無法攜帶那麼多！」他搖了搖頭。");
	say();
	goto labelFunc08E1_0188;
labelFunc08E1_0177:
	if (!(var000B == 0x0003)) goto labelFunc08E1_0188;
	message("「為金幣不足以支付！」");
	say();
	goto labelFunc08E1_0188;
labelFunc08E1_0188:
	message("「要需要其他物品嗎？」");
	say();
	var0000 = Func090A();
labelFunc08E1_0192:
	goto labelFunc08E1_00CF;
labelFunc08E1_0195:
	UI_pop_answers();
	return;
}