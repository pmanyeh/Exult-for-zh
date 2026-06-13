#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0841 0x841 (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFE9) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFE9);
labelFunc0841_0055:
	if (!var0008) goto labelFunc0841_044B;
	var000C = Func0956(["yes", "no", "haggle"]);
	if (!(var000C == "no")) goto labelFunc0841_007E;
	return 0x0000;
	goto labelFunc0841_0091;
labelFunc0841_007E:
	if (!(var000C == "yes")) goto labelFunc0841_0091;
	var000D = 0x0000;
	goto labelFunc0841_00E0;
labelFunc0841_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0841_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0841_0298;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0841_0137;
	if (!(var0010 == 0x0001)) goto labelFunc0841_0118;
	message("\"If thou sayest a word about this price to anyone, I will deny it!\"");
	say();
labelFunc0841_0118:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0126;
	message("\"Perhaps I should give this away in the streets, after agreeing to this price!\"");
	say();
labelFunc0841_0126:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0134;
	message("\"Thou art certainly a fast talker. I will have to watch thee carefully...\"");
	say();
labelFunc0841_0134:
	goto labelFunc0841_01FF;
labelFunc0841_0137:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0841_017A;
	if (!(var0010 == 0x0001)) goto labelFunc0841_015B;
	message("\"A good price for such fine wine, eh?\"");
	say();
labelFunc0841_015B:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0169;
	message("\"I am feeling generous today... Thou art lucky!\"");
	say();
labelFunc0841_0169:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0177;
	message("\"I shall have to count my fingers after thou dost leave. Thou art a slick bargainer, indeed!\"");
	say();
labelFunc0841_0177:
	goto labelFunc0841_01FF;
labelFunc0841_017A:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0841_01C3;
	if (!(var0010 == 0x0001)) goto labelFunc0841_019E;
	message("\"Good price. Good wine.\"");
	say();
labelFunc0841_019E:
	if (!(var0010 == 0x0002)) goto labelFunc0841_01AC;
	message("\"I shall have no profit today, it seems.\"");
	say();
labelFunc0841_01AC:
	if (!(var0010 == 0x0003)) goto labelFunc0841_01C0;
	message("\"Tell everyone thou dost meet about our wine, ");
	message(var0002);
	message("... and about our fair prices!\"");
	say();
labelFunc0841_01C0:
	goto labelFunc0841_01FF;
labelFunc0841_01C3:
	if (!(var0010 == 0x0001)) goto labelFunc0841_01D7;
	message("\"A well-made bargain, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0841_01D7:
	if (!(var0010 == 0x0002)) goto labelFunc0841_01EB;
	message("\"Enjoy thy stay here in Moonshade, ");
	message(var0002);
	message(". I am certain that I shall not have any trouble from thee.\"");
	say();
labelFunc0841_01EB:
	if (!(var0010 == 0x0003)) goto labelFunc0841_01FF;
	message("\"Our wine is in great demand during these hard times, ");
	message(var0002);
	message(". So our prices are higher than they once were.\"");
	say();
labelFunc0841_01FF:
	message("\"Wilt thou agree to ");
	message(var0004);
	message(" guilders, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0841_0234;
	if (!(var000B > 0x0001)) goto labelFunc0841_022D;
	UI_set_npc_id(0xFFE9, (var000B - 0x0002));
labelFunc0841_022D:
	return var0004;
	goto labelFunc0841_0298;
labelFunc0841_0234:
	if (!(var0010 == 0x0001)) goto labelFunc0841_0242;
	message("\"Thou art a fine one! I thought we had an agreement.\"");
	say();
labelFunc0841_0242:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0256;
	message("\"Thou art about to make me angry, ");
	message(var0002);
	message(". 'Tis a dangerous thing to break a deal...\"");
	say();
labelFunc0841_0256:
	if (!(var0010 == 0x0003)) goto labelFunc0841_026B;
	message("\"I am a busy woman, ");
	message(var0002);
	message(". I do not take it kindly when someone wastes my time. Thou hadst best walk carefully here in Moonshade from now on.\"");
	say();
	abort;
labelFunc0841_026B:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0841_0286;
	UI_set_npc_id(0xFFE9, 0x001F);
	goto labelFunc0841_0294;
labelFunc0841_0286:
	UI_set_npc_id(0xFFE9, (var000B + 0x000A));
labelFunc0841_0294:
	return 0x0000;
labelFunc0841_0298:
	if (!(var0007 == 0x0001)) goto labelFunc0841_0306;
	if (!(var000D == 0x0005)) goto labelFunc0841_02E1;
	message("\"That ");
	message(var0004);
	message(" was my final offer. I have no more time to deal with thee. Dost thou accept?\"");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0841_02CE;
	UI_set_npc_id(0xFFE9, (var000B + 0x0004));
labelFunc0841_02CE:
	if (!Func0955()) goto labelFunc0841_02D8;
	return var0004;
labelFunc0841_02D8:
	var0008 = 0x0000;
	goto labelFunc0841_0303;
labelFunc0841_02E1:
	message("\"");
	message(var0004);
	message(" guilders... Or take thy business elsewhere.\"");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0841_0303;
	UI_set_npc_id(0xFFE9, (var000B + 0x0002));
labelFunc0841_0303:
	goto labelFunc0841_0448;
labelFunc0841_0306:
	if (!(var000D == 0x0002)) goto labelFunc0841_034C;
	if (!(var0010 == 0x0001)) goto labelFunc0841_0324;
	message("\"I like thee... How does ");
	message(var0004);
	message(" guilders sound?\"");
	say();
labelFunc0841_0324:
	if (!(var0010 == 0x0002)) goto labelFunc0841_0338;
	message("\"Thou art a fine sort. How about ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0841_0338:
	if (!(var0010 == 0x0003)) goto labelFunc0841_034C;
	message("\"I will make thee a special deal -- How does ");
	message(var0004);
	message(" guilders sound?\"");
	say();
labelFunc0841_034C:
	if (!(var000D == 0x0003)) goto labelFunc0841_0392;
	if (!(var0010 == 0x0001)) goto labelFunc0841_036A;
	message("\"Wilt thou consider ");
	message(var0004);
	message(" guilders? I must pay the MageLord, after all.\"");
	say();
labelFunc0841_036A:
	if (!(var0010 == 0x0002)) goto labelFunc0841_037E;
	message("\"");
	message(var0004);
	message("? Any less and I shall have to face the Council.\"");
	say();
labelFunc0841_037E:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0392;
	message("\"Perhaps ");
	message(var0004);
	message(" guilders? 'Tis not a great amount.\"");
	say();
labelFunc0841_0392:
	if (!(var000D == 0x0004)) goto labelFunc0841_03DE;
	if (!(var0010 == 0x0001)) goto labelFunc0841_03B0;
	message("\"");
	message(var0004);
	message(" guilders is as low as I can go. I dare not take any less, if I am to pay the taxes.\"");
	say();
labelFunc0841_03B0:
	if (!(var0010 == 0x0002)) goto labelFunc0841_03CA;
	message("\"This is the only magical wine thou wilt ever find, ");
	message(var0002);
	message(". Surely thou canst see that I can go no lower than ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc0841_03CA:
	if (!(var0010 == 0x0003)) goto labelFunc0841_03DE;
	message("\"Even the MageLord pays ");
	message(var0004);
	message(" guilders. I can go no lower than that.\"");
	say();
labelFunc0841_03DE:
	if (!(var000D == 0x0005)) goto labelFunc0841_0448;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0841_0408;
	message("\"My previous price stands, at ");
	message(var0004);
	message(" guilders. I am no fool, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0841_0408:
	if (!(var0010 == 0x0002)) goto labelFunc0841_041C;
	message("\"");
	message(var0004);
	message(" guilders, and no less! Thou wilt not take advantage of my good nature so!\"");
	say();
labelFunc0841_041C:
	if (!(var0010 == 0x0003)) goto labelFunc0841_0430;
	message("\"I have a reputation to consider... ");
	message(var0004);
	message(" guilders is where I stand.\"");
	say();
labelFunc0841_0430:
	if (!(var000B < 0x001F)) goto labelFunc0841_0448;
	UI_set_npc_id(0xFFE9, (var000B + 0x0001));
labelFunc0841_0448:
	goto labelFunc0841_0055;
labelFunc0841_044B:
	return 0;
}


