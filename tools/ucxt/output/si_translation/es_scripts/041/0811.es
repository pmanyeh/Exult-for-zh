#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0812 0x812 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0811 0x811 ()
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
	var var0011;
	var var0012;
	var var0013;

	var0000 = Func0954();
	var0001 = Func0953();
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "bear pelt", "beaver pelt", "muskrat pelt", "snow leopard pelt", "gwani pelt", "bear cloak", "leopard cloak", "gwani cloak", "fur cap", "fur boots"];
	var0004 = [0x0000, 0x03D1, 0x03D1, 0x03D1, 0x03D1, 0x03D1, 0x00E3, 0x00E3, 0x00E3, 0x03EC, 0x024B];
	var0005 = [0xFE99, 0x0001, 0x0002, 0x0004, 0x0008, 0x0009, 0x0001, 0x0002, 0x0004, 0x0001, 0x0003];
	var0006 = [0x0000, 0x0050, 0x003C, 0x002D, 0x005A, 0x0064, 0x0078, 0x0096, 0x00AF, 0x0016, 0x001E];
	var0007 = [0x0000, 0x002D, 0x001E, 0x001B, 0x0032, 0x0032, 0x004B, 0x0055, 0x0050, 0x000D, 0x0011];
	var0008 = 0x03B7;
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0x0001, 0x0001];
	if (!UI_is_pc_female()) goto labelFunc0811_0141;
	var000B = "menfolk";
	var000C = "Milady";
	goto labelFunc0811_014D;
labelFunc0811_0141:
	var000B = "ladies";
	var000C = "Milord";
labelFunc0811_014D:
	message("\"What wouldst thou care to purchase, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0811_0157:
	if (!var0002) goto labelFunc0811_047F;
	var000D = Func0957(var0003);
	if (!(var000D == 0x0001)) goto labelFunc0811_017B;
	message("\"Some other time then.\"");
	say();
	var0002 = false;
	goto labelFunc0811_047C;
labelFunc0811_017B:
	var000E = var0006[var000D];
	var000F = 0x0000;
	var0010 = UI_die_roll(0x0001, 0x0005);
	if (!(var0010 == 0x0001)) goto labelFunc0811_01A7;
	var0011 = "Dost thou accept?";
labelFunc0811_01A7:
	if (!(var0010 == 0x0002)) goto labelFunc0811_01B7;
	var0011 = "Will this be fine with thee?";
labelFunc0811_01B7:
	if (!(var0010 == 0x0003)) goto labelFunc0811_01C7;
	var0011 = "What dost thou say?";
labelFunc0811_01C7:
	if (!(var0010 == 0x0004)) goto labelFunc0811_01DB;
	var0011 = (var000C + ", dost thou agree?");
labelFunc0811_01DB:
	if (!(var0010 == 0x0005)) goto labelFunc0811_01EF;
	var0011 = (var000C + ", is the price acceptable?");
labelFunc0811_01EF:
	if (!(var000D == 0x0002)) goto labelFunc0811_0213;
	message("\"I can let thee have it for ");
	message(var000E);
	message(" monetari. It will keep thy toes warm on a frosty night, ");
	message(var0000);
	message(".\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_0213:
	if (!(var000D == 0x0003)) goto labelFunc0811_0231;
	message("\"");
	message(var000E);
	message(" monetari for a nice beaver rug is not much.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_0231:
	if (!(var000D == 0x0004)) goto labelFunc0811_024F;
	message("\"My muskrat pelts are cheap if thou dost care about saving thy money. ");
	message(var000E);
	message(" monetari is what I charge.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_024F:
	if (!(var000D == 0x0005)) goto labelFunc0811_0273;
	message("\"Ah, the ");
	message(var000B);
	message(" enjoy a good romp on snow leopard skin! ");
	message(var000E);
	message(" monetari is my price.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_0273:
	if (!(var000D == 0x0006)) goto labelFunc0811_0297;
	message("\"There is something very exotic about Gwani pelts, ");
	message(var0000);
	message(". For ");
	message(var000E);
	message(" monetari I will sell thee one.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_0297:
	if (!(var000D == 0x0007)) goto labelFunc0811_02B5;
	message("\"If thou dost want something to keep thee warm on cold winter days, thou shouldst buy one of my bear cloaks. I can sell it to thee for ");
	message(var000E);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_02B5:
	if (!(var000D == 0x0008)) goto labelFunc0811_02D3;
	message("\"There is nothing finer than the feel of snow leopard skin upon thine own! For ");
	message(var000E);
	message(" monetari it is thine.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_02D3:
	if (!(var000D == 0x0009)) goto labelFunc0811_02F1;
	message("\"A Gwani cloak will protect thee from the cold better than any other type of fur! For ");
	message(var000E);
	message(" monetari I can sell thee one.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_02F1:
	if (!(var000D == 0x000A)) goto labelFunc0811_030F;
	message("\"I will sell thee a nice warm fur cap for ");
	message(var000E);
	message(" monetari.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_030F:
	if (!(var000D == 0x000B)) goto labelFunc0811_0333;
	message("\"For ");
	message(var000E);
	message(" monetari, thou canst purchase fur-lined boots, ");
	message(var0000);
	message(". A pair will keep thee warm even in the frozen north.\"");
	say();
	message("\"");
	message(var0011);
	message("\"");
	say();
labelFunc0811_0333:
	if (!(var000E == var0007[var000D])) goto labelFunc0811_0358;
	if (!Func0955()) goto labelFunc0811_034F;
	var0012 = var000E;
	goto labelFunc0811_0355;
labelFunc0811_034F:
	var0012 = 0x0000;
labelFunc0811_0355:
	goto labelFunc0811_036A;
labelFunc0811_0358:
	var0012 = Func0812(var0006[var000D], var0007[var000D]);
labelFunc0811_036A:
	if (!(var0012 > 0x0000)) goto labelFunc0811_03CF;
	if (!(var000A[var000D] == 0x0001)) goto labelFunc0811_03AA;
	message("\"How many wouldst thou like?\"");
	say();
	var000F = Func0943(var0004[var000D], var0005[var000D], 0x0001, var0008, var0012, 0x0005, 0x0001, false);
	goto labelFunc0811_03CF;
labelFunc0811_03AA:
	var000F = Func0943(var0004[var000D], var0005[var000D], var0009[var000D], var0008, var0012, 0x0000, 0x0001, false);
labelFunc0811_03CF:
	if (!(var000F == 0x0001)) goto labelFunc0811_03E6;
	message("\"Enjoy thy purchase, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0811_0472;
labelFunc0811_03E6:
	if (!(var000F == 0x0002)) goto labelFunc0811_03FD;
	message("\"Thou canst not carry thy purchase, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0811_0472;
labelFunc0811_03FD:
	if (!(var000F == 0x0003)) goto labelFunc0811_0472;
	var0013 = Func0992(0x0001, (("@But " + var0001) + ", we lack adequate funds!@"), 0x0000, false);
	if (!(var0013 != 0xFE9C)) goto labelFunc0811_043A;
	UI_show_npc_face0(0xFFBF, 0x0000);
	message("\"I am sorry, but I must make a living.\"");
	say();
	goto labelFunc0811_043E;
labelFunc0811_043A:
	message("\"Thou dost not have the monetari to pay me.\"");
	say();
labelFunc0811_043E:
	if (!(0x001F < (UI_get_npc_id(0xFFBF) + 0x0006))) goto labelFunc0811_045D;
	UI_set_npc_id(0xFFBF, 0x001F);
	goto labelFunc0811_046F;
labelFunc0811_045D:
	UI_set_npc_id(0xFFBF, (UI_get_npc_id(0xFFBF) + 0x0006));
labelFunc0811_046F:
	goto labelFunc0811_0472;
labelFunc0811_0472:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc0811_047C:
	goto labelFunc0811_0157;
labelFunc0811_047F:
	UI_pop_answers();
	return;
}


