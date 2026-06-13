#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0838 0x838 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0838_0016;
	var0003 = "Milady";
	goto labelFunc0838_001C;
labelFunc0838_0016:
	var0003 = "Milord";
labelFunc0838_001C:
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFBD) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFBD);
labelFunc0838_0064:
	if (!var0008) goto labelFunc0838_045D;
	var000C = Func0956(["yes", "no", "haggle"]);
	if (!(var000C == "no")) goto labelFunc0838_008D;
	return 0x0000;
	goto labelFunc0838_00A0;
labelFunc0838_008D:
	if (!(var000C == "yes")) goto labelFunc0838_00A0;
	var000D = 0x0000;
	goto labelFunc0838_00EF;
labelFunc0838_00A0:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0838_00EF:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0838_02AC;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0838_0152;
	if (!(var0010 == 0x0001)) goto labelFunc0838_012D;
	message("\"Please do not tell anyone in town of this, ");
	message(var0002);
	message("! Else I will no longer be able to make a living...\"");
	say();
labelFunc0838_012D:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0141;
	message("\"");
	message(var0003);
	message(", thou hast the heart of a true trader...\"");
	say();
labelFunc0838_0141:
	if (!(var0010 == 0x0003)) goto labelFunc0838_014F;
	message("\"I must be losing my mind to agree to such a price!\"");
	say();
labelFunc0838_014F:
	goto labelFunc0838_0220;
labelFunc0838_0152:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0838_019B;
	if (!(var0010 == 0x0001)) goto labelFunc0838_0176;
	message("\"Thou canst see that my prices are fair...\"");
	say();
labelFunc0838_0176:
	if (!(var0010 == 0x0002)) goto labelFunc0838_018A;
	message("\"");
	message(var0003);
	message(", thou hast charmed me, I am certain! I would never offer prices this low!\"");
	say();
labelFunc0838_018A:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0198;
	message("\"Who would have thought I would lose my mind so young! To accept such a price...\"");
	say();
labelFunc0838_0198:
	goto labelFunc0838_0220;
labelFunc0838_019B:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0838_01EA;
	if (!(var0010 == 0x0001)) goto labelFunc0838_01BF;
	message("\"A good deal, if I do say so myself.\"");
	say();
labelFunc0838_01BF:
	if (!(var0010 == 0x0002)) goto labelFunc0838_01D3;
	message("\"Thou art a worthy customer, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0838_01D3:
	if (!(var0010 == 0x0003)) goto labelFunc0838_01E7;
	message("\"'Tis a pleasure doing business with thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0838_01E7:
	goto labelFunc0838_0220;
labelFunc0838_01EA:
	if (!(var0010 == 0x0001)) goto labelFunc0838_01FE;
	message("\"Thou hast made me a happy woman, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0838_01FE:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0212;
	message("\"I appreciate thy business, ");
	message(var0002);
	message(".");
	say();
labelFunc0838_0212:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0220;
	message("\"I hate charging such prices, but times are hard...\"");
	say();
labelFunc0838_0220:
	message("\"Wilt thou agree to a price of ");
	message(var0004);
	message(" monetari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0838_0255;
	if (!(var000B > 0x0001)) goto labelFunc0838_024E;
	UI_set_npc_id(0xFFBD, (var000B - 0x0002));
labelFunc0838_024E:
	return var0004;
	goto labelFunc0838_02AC;
labelFunc0838_0255:
	if (!(var0010 == 0x0001)) goto labelFunc0838_0263;
	message("\"But what of our agreement?\"");
	say();
labelFunc0838_0263:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0271;
	message("\"Why hast thou changed thy mind?\"");
	say();
labelFunc0838_0271:
	if (!(var0010 == 0x0003)) goto labelFunc0838_027F;
	message("\"I thought thou wert in need of my produce!\"");
	say();
labelFunc0838_027F:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0838_029A;
	UI_set_npc_id(0xFFBD, 0x001F);
	goto labelFunc0838_02A8;
labelFunc0838_029A:
	UI_set_npc_id(0xFFBD, (var000B + 0x000A));
labelFunc0838_02A8:
	return 0x0000;
labelFunc0838_02AC:
	if (!(var0007 == 0x0001)) goto labelFunc0838_0320;
	if (!(var000D == 0x0005)) goto labelFunc0838_02FB;
	message("\"Wert thou not listening, ");
	message(var0002);
	message(", I said that ");
	message(var0004);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0838_02E8;
	UI_set_npc_id(0xFFBD, (var000B + 0x0004));
labelFunc0838_02E8:
	if (!Func0955()) goto labelFunc0838_02F2;
	return var0004;
labelFunc0838_02F2:
	var0008 = 0x0000;
	goto labelFunc0838_031D;
labelFunc0838_02FB:
	message("\"Very well. ");
	message(var0004);
	message(" monetari is my final offer.\"");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0838_031D;
	UI_set_npc_id(0xFFBD, (var000B + 0x0002));
labelFunc0838_031D:
	goto labelFunc0838_045A;
labelFunc0838_0320:
	if (!(var000D == 0x0002)) goto labelFunc0838_0366;
	if (!(var0010 == 0x0001)) goto labelFunc0838_033E;
	message("\"Thou art a challenge to deal with... How does ");
	message(var0004);
	message(" monetari sound?\"");
	say();
labelFunc0838_033E:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0352;
	message("\"So, have we agreed on ");
	message(var0004);
	message(" monetari?\"");
	say();
labelFunc0838_0352:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0366;
	message("\"I offer thee ");
	message(var0004);
	message(" monetari. Dost thou accept?\"");
	say();
labelFunc0838_0366:
	if (!(var000D == 0x0003)) goto labelFunc0838_03AC;
	if (!(var0010 == 0x0001)) goto labelFunc0838_0384;
	message("\"I must make a living... Wouldst thou pay ");
	message(var0004);
	message(" monetari?\"");
	say();
labelFunc0838_0384:
	if (!(var0010 == 0x0002)) goto labelFunc0838_0398;
	message("\"Let me consider... ");
	message(var0004);
	message(" monetari?\"");
	say();
labelFunc0838_0398:
	if (!(var0010 == 0x0003)) goto labelFunc0838_03AC;
	message("\"");
	message(var0004);
	message(" monetari, then? I must show some profit or become a beggar.\"");
	say();
labelFunc0838_03AC:
	if (!(var000D == 0x0004)) goto labelFunc0838_03F6;
	if (!(var0010 == 0x0001)) goto labelFunc0838_03CE;
	message("\"I cannot accept less than ");
	message(var0004);
	message(" monetari!\"");
	say();
	message("\"Wilt thou agree?\"");
	say();
labelFunc0838_03CE:
	if (!(var0010 == 0x0002)) goto labelFunc0838_03E2;
	message("\"Surely thou canst see that I can go no lower than ");
	message(var0004);
	message(" monetari. It is difficult to garden because of the Goblin raids...\"");
	say();
labelFunc0838_03E2:
	if (!(var0010 == 0x0003)) goto labelFunc0838_03F6;
	message("\"My produce is worth no less than ");
	message(var0004);
	message(" monetari.\"");
	say();
labelFunc0838_03F6:
	if (!(var000D == 0x0005)) goto labelFunc0838_045A;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0838_041A;
	message("\"My previous price stands, at ");
	message(var0004);
	message(" monetari. I am at risk from the Goblins while gardening!\"");
	say();
labelFunc0838_041A:
	if (!(var0010 == 0x0002)) goto labelFunc0838_042E;
	message("\"");
	message(var0004);
	message(" monetari, and no less! Thou shalt find no one with a better price, I will warrant.\"");
	say();
labelFunc0838_042E:
	if (!(var0010 == 0x0003)) goto labelFunc0838_0442;
	message("\"");
	message(var0004);
	message(" monetari is where I stand. I must pay someone to stand watch while I garden.\"");
	say();
labelFunc0838_0442:
	if (!(var000B < 0x001F)) goto labelFunc0838_045A;
	UI_set_npc_id(0xFFBD, (var000B + 0x0001));
labelFunc0838_045A:
	goto labelFunc0838_0064;
labelFunc0838_045D:
	return 0;
}


