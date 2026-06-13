#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0841 0x841 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0840 0x840 ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "wine", "ice wine", "vintage wine"];
	var0004 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0005 = [0xFE99, 0x0001, 0x0010, 0x0011];
	var0006 = [0x0000, 0x000F, 0x0019, 0x0032];
	var0007 = [0x0000, 0x0009, 0x000F, 0x001E];
	var0008 = 0x03B8;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	message("\"What wouldst thou care to try, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0840_00A2:
	if (!var0002) goto labelFunc0840_028B;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0840_00CC;
	message("\"If thou art thirsty again, return, ");
	message(var0000);
	message("!\"");
	say();
	var0002 = false;
	goto labelFunc0840_0288;
labelFunc0840_00CC:
	var000C = var0006[var000B];
	var000D = 0x0000;
	if (!(var000B == 0x0002)) goto labelFunc0840_00F9;
	message("\"Our wine is the finest in all of Serpent Isle! l can sell thee a bottle for ");
	message(var000C);
	message(" guilders.\"");
	say();
	message("\"Dost thou accept?\"");
	say();
	var000E = "wine bottles";
labelFunc0840_00F9:
	if (!(var000B == 0x0003)) goto labelFunc0840_011B;
	message("\"The ice wine is special indeed! I will not tell thee the secret of how it is made, but be assured that it is most flavorful!\"");
	say();
	message("\"I charge ");
	message(var000C);
	message(" guilders for a bottle.\"");
	say();
	message("\"Dost thou agree?\"");
	say();
	var000E = "bottles of ice wine";
labelFunc0840_011B:
	if (!(var000B == 0x0004)) goto labelFunc0840_0139;
	message("\"The vintage stock hath been aged for over ten years, and is quite delicious. For ");
	message(var000C);
	message(" guilders, I can sell thee a bottle.\"");
	say();
	message("\"Is the price acceptable?\"");
	say();
	var000E = "bottles of vintage wine";
labelFunc0840_0139:
	if (!(var000C == var0007[var000B])) goto labelFunc0840_015E;
	if (!Func0955()) goto labelFunc0840_0155;
	var000F = var000C;
	goto labelFunc0840_015B;
labelFunc0840_0155:
	var000F = 0x0000;
labelFunc0840_015B:
	goto labelFunc0840_0170;
labelFunc0840_015E:
	var000F = Func0841(var0006[var000B], var0007[var000B]);
labelFunc0840_0170:
	if (!(var000F > 0x0000)) goto labelFunc0840_01DB;
	if (!(var000A[var000B] == 0x0001)) goto labelFunc0840_01B6;
	message("\"How many ");
	message(var000E);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], 0x0001, var0008, var000F, 0x000A, 0x0001, false);
	goto labelFunc0840_01DB;
labelFunc0840_01B6:
	var000D = Func0943(var0004[var000B], var0005[var000B], var0009[var000B], var0008, var000F, 0x0000, 0x0001, false);
labelFunc0840_01DB:
	if (!(var000D == 0x0001)) goto labelFunc0840_01F2;
	message("\"To thine health, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0840_027E;
labelFunc0840_01F2:
	if (!(var000D == 0x0002)) goto labelFunc0840_0209;
	message("\"Thou canst not carry thy purchase, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0840_027E;
labelFunc0840_0209:
	if (!(var000D == 0x0003)) goto labelFunc0840_027E;
	var0010 = Func0992(0x0001, (("@But " + var0001) + ", we lack adequate funds!@"), 0x0000, false);
	if (!(var0010 != 0xFE9C)) goto labelFunc0840_0246;
	UI_show_npc_face0(0xFFE9, 0x0000);
	message("\"Thou dost not have the guilders to buy that!\"");
	say();
	goto labelFunc0840_024A;
labelFunc0840_0246:
	message("\"Thou dost not have the guilders to buy that!\"");
	say();
labelFunc0840_024A:
	if (!(0x001F < (UI_get_npc_id(0xFFE9) + 0x0006))) goto labelFunc0840_0269;
	UI_set_npc_id(0xFFE9, 0x001F);
	goto labelFunc0840_027B;
labelFunc0840_0269:
	UI_set_npc_id(0xFFE9, (UI_get_npc_id(0xFFE9) + 0x0006));
labelFunc0840_027B:
	goto labelFunc0840_027E;
labelFunc0840_027E:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc0840_0288:
	goto labelFunc0840_00A2;
labelFunc0840_028B:
	UI_pop_answers();
	return;
}


