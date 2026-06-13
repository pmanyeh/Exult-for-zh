#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func081C 0x81C (var var0000, var var0001)
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
	var0005 = (0x000F - (UI_get_npc_id(0xFFD0) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFD0);
labelFunc081C_004E:
	if (!var0007) goto labelFunc081C_043B;
	var000B = Func0956(["yes", "no", "haggle"]);
	if (!(var000B == "no")) goto labelFunc081C_0077;
	return 0x0000;
	goto labelFunc081C_008A;
labelFunc081C_0077:
	if (!(var000B == "yes")) goto labelFunc081C_008A;
	var000C = 0x0000;
	goto labelFunc081C_00D9;
labelFunc081C_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc081C_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc081C_0290;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc081C_0136;
	if (!(var000F == 0x0001)) goto labelFunc081C_0117;
	message("\"Thou dost drive a hard bargain, ");
	message(var0002);
	message(". Do not tell anyone about this... They think little enough of me already!\"");
	say();
labelFunc081C_0117:
	if (!(var000F == 0x0002)) goto labelFunc081C_0125;
	message("\"Thou hast a good eye for a bargain...\"");
	say();
labelFunc081C_0125:
	if (!(var000F == 0x0003)) goto labelFunc081C_0133;
	message("\"I would never agree to such a price, if times were not so bad!\"");
	say();
labelFunc081C_0133:
	goto labelFunc081C_0204;
labelFunc081C_0136:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc081C_017F;
	if (!(var000F == 0x0001)) goto labelFunc081C_015A;
	message("\"My prices are reasonable, given my limited supply.\"");
	say();
labelFunc081C_015A:
	if (!(var000F == 0x0002)) goto labelFunc081C_0168;
	message("\"Thou couldst talk a beggar out of his begging bowl! I cannot believe I have agreed to such a price!\"");
	say();
labelFunc081C_0168:
	if (!(var000F == 0x0003)) goto labelFunc081C_017C;
	message("\"Thou shouldst have been a shopkeeper, ");
	message(var0002);
	message("...\"");
	say();
labelFunc081C_017C:
	goto labelFunc081C_0204;
labelFunc081C_017F:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc081C_01CE;
	if (!(var000F == 0x0001)) goto labelFunc081C_01A3;
	message("\"A fair deal...\"");
	say();
labelFunc081C_01A3:
	if (!(var000F == 0x0002)) goto labelFunc081C_01B7;
	message("\"'Tis a pleasure to deal with thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc081C_01B7:
	if (!(var000F == 0x0003)) goto labelFunc081C_01CB;
	message("\"There are few people left who specialize in herbs, ");
	message(var0002);
	message(". Thou wilt find no better price, I assure thee.\"");
	say();
labelFunc081C_01CB:
	goto labelFunc081C_0204;
labelFunc081C_01CE:
	if (!(var000F == 0x0001)) goto labelFunc081C_01E2;
	message("\"Thou hast made me a happy woman, ");
	message(var0002);
	message("! Walk with Beauty!\"");
	say();
labelFunc081C_01E2:
	if (!(var000F == 0x0002)) goto labelFunc081C_01F6;
	message("\"May Beauty follow thee ever, ");
	message(var0002);
	message(".\"");
	say();
labelFunc081C_01F6:
	if (!(var000F == 0x0003)) goto labelFunc081C_0204;
	message("\"I fear that the storms have driven my prices up. I have no choice unless I wish to starve.\"");
	say();
labelFunc081C_0204:
	message("\"We have agreed on a price of ");
	message(var0003);
	message(" filari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc081C_0239;
	if (!(var000A > 0x0001)) goto labelFunc081C_0232;
	UI_set_npc_id(0xFFD0, (var000A - 0x0002));
labelFunc081C_0232:
	return var0003;
	goto labelFunc081C_0290;
labelFunc081C_0239:
	if (!(var000F == 0x0001)) goto labelFunc081C_0247;
	message("\"Thou canst not change thy mind! Thou didst agree!\"");
	say();
labelFunc081C_0247:
	if (!(var000F == 0x0002)) goto labelFunc081C_0255;
	message("\"What of our bargain? I thought better of thee...\"");
	say();
labelFunc081C_0255:
	if (!(var000F == 0x0003)) goto labelFunc081C_0263;
	message("\"Where is thine honor?  What of our agreement?\"");
	say();
labelFunc081C_0263:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc081C_027E;
	UI_set_npc_id(0xFFD0, 0x001F);
	goto labelFunc081C_028C;
labelFunc081C_027E:
	UI_set_npc_id(0xFFD0, (var000A + 0x000A));
labelFunc081C_028C:
	return 0x0000;
labelFunc081C_0290:
	if (!(var0006 == 0x0001)) goto labelFunc081C_02FE;
	if (!(var000C == 0x0005)) goto labelFunc081C_02D9;
	message("\"I said that ");
	message(var0003);
	message(" was my final offer. Dost thou accept or not?\"");
	say();
	if (!(var000A < 0x001C)) goto labelFunc081C_02C6;
	UI_set_npc_id(0xFFD0, (var000A + 0x0004));
labelFunc081C_02C6:
	if (!Func0955()) goto labelFunc081C_02D0;
	return var0003;
labelFunc081C_02D0:
	var0007 = 0x0000;
	goto labelFunc081C_02FB;
labelFunc081C_02D9:
	message("\"Very well. ");
	message(var0003);
	message(" filari is my final offer.\"");
	say();
	if (!(var000A < 0x001E)) goto labelFunc081C_02FB;
	UI_set_npc_id(0xFFD0, (var000A + 0x0002));
labelFunc081C_02FB:
	goto labelFunc081C_0438;
labelFunc081C_02FE:
	if (!(var000C == 0x0002)) goto labelFunc081C_0344;
	if (!(var000F == 0x0001)) goto labelFunc081C_031C;
	message("\"How doth ");
	message(var0003);
	message(" filari sound? Thou dost bargain well...\"");
	say();
labelFunc081C_031C:
	if (!(var000F == 0x0002)) goto labelFunc081C_0330;
	message("\"So, have we agreed on ");
	message(var0003);
	message(" filari? Thou wilt no doubt see the Beauty of such an offer.\"");
	say();
labelFunc081C_0330:
	if (!(var000F == 0x0003)) goto labelFunc081C_0344;
	message("\"My price is ");
	message(var0003);
	message(" filari. Dost thou accept?\"");
	say();
labelFunc081C_0344:
	if (!(var000C == 0x0003)) goto labelFunc081C_038A;
	if (!(var000F == 0x0001)) goto labelFunc081C_0362;
	message("\"Wouldst thou consider ");
	message(var0003);
	message(" filari? I have such a limited stock...\"");
	say();
labelFunc081C_0362:
	if (!(var000F == 0x0002)) goto labelFunc081C_0376;
	message("\"I am not sure... Wouldst thou give ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc081C_0376:
	if (!(var000F == 0x0003)) goto labelFunc081C_038A;
	message("\"");
	message(var0003);
	message(" filari? I must have enough to tithe to the Temple.\"");
	say();
labelFunc081C_038A:
	if (!(var000C == 0x0004)) goto labelFunc081C_03D4;
	if (!(var000F == 0x0001)) goto labelFunc081C_03AC;
	message("\"I cannot possibly accept less than ");
	message(var0003);
	message(" filari!\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc081C_03AC:
	if (!(var000F == 0x0002)) goto labelFunc081C_03C0;
	message("\"Surely thou canst see that I can go no lower than ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc081C_03C0:
	if (!(var000F == 0x0003)) goto labelFunc081C_03D4;
	message("\"I deserve no less than ");
	message(var0003);
	message(" filari. It doth take much work to prepare these things!\"");
	say();
labelFunc081C_03D4:
	if (!(var000C == 0x0005)) goto labelFunc081C_0438;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc081C_03F8;
	message("\"I would rather walk into the Goblin camp than accept such a paltry sum! My previous price stands, at ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc081C_03F8:
	if (!(var000F == 0x0002)) goto labelFunc081C_040C;
	message("\"");
	message(var0003);
	message(" filari, and no less! I may be a woman, but I am no fool!\"");
	say();
labelFunc081C_040C:
	if (!(var000F == 0x0003)) goto labelFunc081C_0420;
	message("\"");
	message(var0003);
	message(" filari is where I stand. I know the value of my wares.\"");
	say();
labelFunc081C_0420:
	if (!(var000A < 0x001F)) goto labelFunc081C_0438;
	UI_set_npc_id(0xFFD0, (var000A + 0x0001));
labelFunc081C_0438:
	goto labelFunc081C_004E;
labelFunc081C_043B:
	return 0;
}


