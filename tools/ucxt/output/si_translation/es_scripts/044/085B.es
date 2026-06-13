#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func085B 0x85B (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = var0000;
	var0004 = ((var0001 / 0x0003) * 0x0002);
	var0005 = (0x000F - (UI_get_npc_id(0xFFE3) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFE3);
labelFunc085B_004E:
	if (!var0007) goto labelFunc085B_043F;
	var000B = Func0956(["yes", "no", "haggle"]);
	if (!(var000B == "no")) goto labelFunc085B_0077;
	return 0x0000;
	goto labelFunc085B_008A;
labelFunc085B_0077:
	if (!(var000B == "yes")) goto labelFunc085B_008A;
	var000C = 0x0000;
	goto labelFunc085B_00D9;
labelFunc085B_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc085B_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc085B_0290;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc085B_0130;
	if (!(var000F == 0x0001)) goto labelFunc085B_0111;
	message("\"I shall never live this down, if thou dost tell anyone...\"");
	say();
labelFunc085B_0111:
	if (!(var000F == 0x0002)) goto labelFunc085B_011F;
	message("\"It is rare to find one who trades as well as thee...\"");
	say();
labelFunc085B_011F:
	if (!(var000F == 0x0003)) goto labelFunc085B_012D;
	message("\"Would that I had more stock, that I might make a better deal!\"");
	say();
labelFunc085B_012D:
	goto labelFunc085B_01FE;
labelFunc085B_0130:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc085B_0173;
	if (!(var000F == 0x0001)) goto labelFunc085B_0154;
	message("\"I offer only the finest merchandise at the fairest prices!\"");
	say();
labelFunc085B_0154:
	if (!(var000F == 0x0002)) goto labelFunc085B_0162;
	message("\"It would do me better to tell everyone that thou hadst stolen this from me!\"");
	say();
labelFunc085B_0162:
	if (!(var000F == 0x0003)) goto labelFunc085B_0170;
	message("\"I could almost suspect thee of charming me...\"");
	say();
labelFunc085B_0170:
	goto labelFunc085B_01FE;
labelFunc085B_0173:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc085B_01C8;
	if (!(var000F == 0x0001)) goto labelFunc085B_019D;
	message("\"I think we have both made a good deal, ");
	message(var0002);
	message(".\"");
	say();
labelFunc085B_019D:
	if (!(var000F == 0x0002)) goto labelFunc085B_01B1;
	message("\"Trading with thee is most challenging, ");
	message(var0002);
	message(".\"");
	say();
labelFunc085B_01B1:
	if (!(var000F == 0x0003)) goto labelFunc085B_01C5;
	message("\"There are not many others who sell such things, ");
	message(var0002);
	message(".\"");
	say();
labelFunc085B_01C5:
	goto labelFunc085B_01FE;
labelFunc085B_01C8:
	if (!(var000F == 0x0001)) goto labelFunc085B_01D6;
	message("\"Thou art a fine customer... Return any time!\"");
	say();
labelFunc085B_01D6:
	if (!(var000F == 0x0002)) goto labelFunc085B_01EA;
	message("\"May fortune favor thee, ");
	message(var0002);
	message("!\"");
	say();
labelFunc085B_01EA:
	if (!(var000F == 0x0003)) goto labelFunc085B_01FE;
	message("\"If I had more stock, ");
	message(var0002);
	message(", I could offer thee a better price. \"");
	say();
labelFunc085B_01FE:
	message("\"Wilt thou agree on a price of ");
	message(var0003);
	message(" guilders, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc085B_0233;
	if (!(var000A > 0x0001)) goto labelFunc085B_022C;
	UI_set_npc_id(0xFFE3, (var000A - 0x0002));
labelFunc085B_022C:
	return var0003;
	goto labelFunc085B_0290;
labelFunc085B_0233:
	if (!(var000F == 0x0001)) goto labelFunc085B_0241;
	message("\"Thou didst agree! I had not thought that thou wouldst go back on thy word!\"");
	say();
labelFunc085B_0241:
	if (!(var000F == 0x0002)) goto labelFunc085B_024F;
	message("\"Is this the way the Avatar deals?\"");
	say();
labelFunc085B_024F:
	if (!(var000F == 0x0003)) goto labelFunc085B_0263;
	message("\"I shall be sure to let the Council know of thine underhanded dealing, ");
	message(var0002);
	message("!\"");
	say();
labelFunc085B_0263:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc085B_027E;
	UI_set_npc_id(0xFFE3, 0x001F);
	goto labelFunc085B_028C;
labelFunc085B_027E:
	UI_set_npc_id(0xFFE3, (var000A + 0x000A));
labelFunc085B_028C:
	return 0x0000;
labelFunc085B_0290:
	if (!(var0006 == 0x0001)) goto labelFunc085B_02FE;
	if (!(var000C == 0x0005)) goto labelFunc085B_02D9;
	message("\"I said that ");
	message(var0003);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000A < 0x001C)) goto labelFunc085B_02C6;
	UI_set_npc_id(0xFFE3, (var000A + 0x0004));
labelFunc085B_02C6:
	if (!Func0955()) goto labelFunc085B_02D0;
	return var0003;
labelFunc085B_02D0:
	var0007 = 0x0000;
	goto labelFunc085B_02FB;
labelFunc085B_02D9:
	message("\"");
	message(var0003);
	message(" guilders is my final offer. Take it or leave it...\"");
	say();
	if (!(var000A < 0x001E)) goto labelFunc085B_02FB;
	UI_set_npc_id(0xFFE3, (var000A + 0x0002));
labelFunc085B_02FB:
	goto labelFunc085B_043C;
labelFunc085B_02FE:
	if (!(var000C == 0x0002)) goto labelFunc085B_0344;
	if (!(var000F == 0x0001)) goto labelFunc085B_031C;
	message("\"None of the Mages care to bargain as thou dost... How doth ");
	message(var0003);
	message(" guilders sound?\"");
	say();
labelFunc085B_031C:
	if (!(var000F == 0x0002)) goto labelFunc085B_0330;
	message("\"Thou art a worthy opponent! Wilt thou agree on ");
	message(var0003);
	message(" guilders?\"");
	say();
labelFunc085B_0330:
	if (!(var000F == 0x0003)) goto labelFunc085B_0344;
	message("\"I offer thee ");
	message(var0003);
	message(" guilders. Dost thou accept?\"");
	say();
labelFunc085B_0344:
	if (!(var000C == 0x0003)) goto labelFunc085B_038A;
	if (!(var000F == 0x0001)) goto labelFunc085B_0362;
	message("\"I have so little to sell now... Perhaps ");
	message(var0003);
	message(" guilders?\"");
	say();
labelFunc085B_0362:
	if (!(var000F == 0x0002)) goto labelFunc085B_0376;
	message("\"Let me think... ");
	message(var0003);
	message(" guilders?\"");
	say();
labelFunc085B_0376:
	if (!(var000F == 0x0003)) goto labelFunc085B_038A;
	message("\"How shall I live! ");
	message(var0003);
	message(" guilders?\"");
	say();
labelFunc085B_038A:
	if (!(var000C == 0x0004)) goto labelFunc085B_03D4;
	if (!(var000F == 0x0001)) goto labelFunc085B_03AC;
	message("\"I cannot possibly accept less than ");
	message(var0003);
	message("\tguilders!\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc085B_03AC:
	if (!(var000F == 0x0002)) goto labelFunc085B_03C0;
	message("\"Supply and demand... ");
	message(var0003);
	message(" guilders, no less.\"");
	say();
labelFunc085B_03C0:
	if (!(var000F == 0x0003)) goto labelFunc085B_03D4;
	message("\"I am not the fool everyone thinks me. I will not accept less than ");
	message(var0003);
	message(" guilders.\"");
	say();
labelFunc085B_03D4:
	if (!(var000C == 0x0005)) goto labelFunc085B_043C;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc085B_03F8;
	message("\"I would rather endure the Mountains of Freedom! ");
	message(var0003);
	message(" guilders is what I offer.\"");
	say();
labelFunc085B_03F8:
	if (!(var000F == 0x0002)) goto labelFunc085B_040C;
	message("\"I am not a child to be so misled! ");
	message(var0003);
	message(" guilders, and no less!\"");
	say();
labelFunc085B_040C:
	if (!(var000F == 0x0003)) goto labelFunc085B_0424;
	message("\"If I accepted such a price, I would have to close my shop and begin begging!\"");
	say();
	message("\"");
	message(var0003);
	message(" guilders is where I stand.\"");
	say();
labelFunc085B_0424:
	if (!(var000A < 0x001F)) goto labelFunc085B_043C;
	UI_set_npc_id(0xFFE3, (var000A + 0x0001));
labelFunc085B_043C:
	goto labelFunc085B_004E;
labelFunc085B_043F:
	return 0;
}


