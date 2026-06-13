#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0942 0x942 (var var0000);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

var Func0807 0x807 (var var0000, var var0001)
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
	var0006 = (0x000F - (UI_get_npc_id(0xFFDA) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFDA);
labelFunc0807_0055:
	if (!var0008) goto labelFunc0807_04A9;
	var000C = Func0956(["yes", "no", "haggle"]);
	if (!(var000C == "no")) goto labelFunc0807_007E;
	return 0x0000;
	goto labelFunc0807_0091;
labelFunc0807_007E:
	if (!(var000C == "yes")) goto labelFunc0807_0091;
	var000D = 0x0000;
	goto labelFunc0807_00E0;
labelFunc0807_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0807_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0807_02B9;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0807_0165;
	if (!(var0010 == 0x0001)) goto labelFunc0807_013A;
	message("\"Do not tell Devra... She will think her son hath gone soft in the head for giving thee a price like this.\"");
	say();
	if (!Func0942(0xFFD7)) goto labelFunc0807_013A;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("\"Thou woolly-headed wolf! Thine head is fine. 'Tis thine heart that is soft...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0807_013A:
	if (!(var0010 == 0x0002)) goto labelFunc0807_014E;
	message("\"Thou dost drive a hard bargain, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0807_014E:
	if (!(var0010 == 0x0003)) goto labelFunc0807_0162;
	message("\"Thou hast a shrewd tongue, ");
	message(var0002);
	message("! It hath been some time since I was beaten at this game!\"");
	say();
labelFunc0807_0162:
	goto labelFunc0807_022D;
labelFunc0807_0165:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0807_01B4;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0189;
	message("\"Our prices are honest here at the Sleeping Bull!\"");
	say();
labelFunc0807_0189:
	if (!(var0010 == 0x0002)) goto labelFunc0807_019D;
	message("\"Thou hast found me in a generous mood, ");
	message(var0002);
	message("! 'Tis not every day I sell goods at these prices!\"");
	say();
labelFunc0807_019D:
	if (!(var0010 == 0x0003)) goto labelFunc0807_01B1;
	message("\"Thou art a shrewd bargainer, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0807_01B1:
	goto labelFunc0807_022D;
labelFunc0807_01B4:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0807_01F7;
	if (!(var0010 == 0x0001)) goto labelFunc0807_01D8;
	message("\"Fair enough, if I do say so myself.\"");
	say();
labelFunc0807_01D8:
	if (!(var0010 == 0x0002)) goto labelFunc0807_01E6;
	message("\"With customers such as thou, I shall never make a profit...\"");
	say();
labelFunc0807_01E6:
	if (!(var0010 == 0x0003)) goto labelFunc0807_01F4;
	message("\"With these troubled times, I must charge higher prices...\"");
	say();
labelFunc0807_01F4:
	goto labelFunc0807_022D;
labelFunc0807_01F7:
	if (!(var0010 == 0x0001)) goto labelFunc0807_020B;
	message("\"'Tis a pleasure to bargain with thee, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0807_020B:
	if (!(var0010 == 0x0002)) goto labelFunc0807_021F;
	message("\"Thou art most generous with thy money, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0807_021F:
	if (!(var0010 == 0x0003)) goto labelFunc0807_022D;
	message("\"'Tis a shame I must charge high prices like this.\"");
	say();
labelFunc0807_022D:
	message("\"Dost thou agree on a price of ");
	message(var0004);
	message(",\t");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0807_0262;
	if (!(var000B > 0x0001)) goto labelFunc0807_025B;
	UI_set_npc_id(0xFFDA, (var000B - 0x0002));
labelFunc0807_025B:
	return var0004;
	goto labelFunc0807_02B9;
labelFunc0807_0262:
	if (!(var0010 == 0x0001)) goto labelFunc0807_0270;
	message("\"I thought we had an agreement!\"");
	say();
labelFunc0807_0270:
	if (!(var0010 == 0x0002)) goto labelFunc0807_027E;
	message("\"I have no time for this!\"");
	say();
labelFunc0807_027E:
	if (!(var0010 == 0x0003)) goto labelFunc0807_028C;
	message("\"Dost thou take me for a fool?\" ~\"I do not have all day to stand and argue!\"");
	say();
labelFunc0807_028C:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0807_02A7;
	UI_set_npc_id(0xFFDA, 0x001F);
	goto labelFunc0807_02B5;
labelFunc0807_02A7:
	UI_set_npc_id(0xFFDA, (var000B + 0x000A));
labelFunc0807_02B5:
	return 0x0000;
labelFunc0807_02B9:
	if (!(var0007 == 0x0001)) goto labelFunc0807_0327;
	if (!(var000D == 0x0005)) goto labelFunc0807_0302;
	message("\"");
	message(var0004);
	message(" is my final offer.\" ~\"Dost thou accept?\"");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0807_02EF;
	UI_set_npc_id(0xFFDA, (var000B + 0x0004));
labelFunc0807_02EF:
	if (!Func0955()) goto labelFunc0807_02F9;
	return var0004;
labelFunc0807_02F9:
	var0008 = 0x0000;
	goto labelFunc0807_0324;
labelFunc0807_0302:
	message("\"Very well. ");
	message(var0004);
	message(" is my final offer.\"");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0807_0324;
	UI_set_npc_id(0xFFDA, (var000B + 0x0002));
labelFunc0807_0324:
	goto labelFunc0807_04A6;
labelFunc0807_0327:
	if (!(var000D == 0x0002)) goto labelFunc0807_0373;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0345;
	message("\"'Tis a good offer. How doth ");
	message(var0004);
	message(" sound?\"");
	say();
labelFunc0807_0345:
	if (!(var0010 == 0x0002)) goto labelFunc0807_035F;
	message("\"Thou art a shrewd bargainer, ");
	message(var0002);
	message(". Have we agreed on ");
	message(var0004);
	message(" gold coins?\"");
	say();
labelFunc0807_035F:
	if (!(var0010 == 0x0003)) goto labelFunc0807_0373;
	message("\"My price is ");
	message(var0004);
	message(". Dost thou accept?\"");
	say();
labelFunc0807_0373:
	if (!(var000D == 0x0003)) goto labelFunc0807_03B9;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0391;
	message("\"These are perilous times and supplies are low. Wilt thou accept ");
	message(var0004);
	message("?\"");
	say();
labelFunc0807_0391:
	if (!(var0010 == 0x0002)) goto labelFunc0807_03A5;
	message("\"I do not know...\" ~\"Wouldst thou consider ");
	message(var0004);
	message("?\"");
	say();
labelFunc0807_03A5:
	if (!(var0010 == 0x0003)) goto labelFunc0807_03B9;
	message("\"I am not certain... What sayest thou to ");
	message(var0004);
	message("?\"");
	say();
labelFunc0807_03B9:
	if (!(var000D == 0x0004)) goto labelFunc0807_0405;
	if (!(var0010 == 0x0001)) goto labelFunc0807_03D7;
	message("\"");
	message(var0004);
	message(" is as low as I can go. What sayest thou?\"");
	say();
labelFunc0807_03D7:
	if (!(var0010 == 0x0002)) goto labelFunc0807_03EB;
	message("\"Surely thou canst see that I can accept no less than ");
	message(var0004);
	message(".\"");
	say();
labelFunc0807_03EB:
	if (!(var0010 == 0x0003)) goto labelFunc0807_0405;
	message("\"I deserve no less than ");
	message(var0004);
	message(" gold coins, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0807_0405:
	if (!(var000D == 0x0005)) goto labelFunc0807_04A6;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0807_0460;
	message("\"Mother, come and hear this! The customer jests with me!\"");
	say();
	if (!Func0942(0xFFD7)) goto labelFunc0807_0452;
	Func094E(0xFFD7, (((("@" + var0002) + " we cannot possibly accept less than ") + var0004) + " gold coins.@"));
	UI_show_npc_face0(0xFFDA, 0x0000);
	goto labelFunc0807_045C;
labelFunc0807_0452:
	message("\"");
	message(var0004);
	message("  gold coins is as low as I can go.\"");
	say();
labelFunc0807_045C:
	message("\"What dost thou say to this?\"");
	say();
labelFunc0807_0460:
	if (!(var0010 == 0x0002)) goto labelFunc0807_047A;
	message("\"Thou art not bargaining with a fool, ");
	message(var0002);
	message("! ");
	message(var0004);
	message(", and no less!\"");
	say();
labelFunc0807_047A:
	if (!(var0010 == 0x0003)) goto labelFunc0807_048E;
	message("\"If I accepted such a price as this, I could not call myself an innkeeper! ");
	message(var0004);
	message(" is where I stand!\"");
	say();
labelFunc0807_048E:
	if (!(var000B < 0x001F)) goto labelFunc0807_04A6;
	UI_set_npc_id(0xFFDA, (var000B + 0x0001));
labelFunc0807_04A6:
	goto labelFunc0807_0055;
labelFunc0807_04A9:
	return 0;
}


