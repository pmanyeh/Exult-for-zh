#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();

var Func0819 0x819 (var var0000, var var0001)
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
	var0005 = (0x000F - (UI_get_npc_id(0xFFD1) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFD1);
labelFunc0819_004E:
	if (!var0007) goto labelFunc0819_0467;
	var000B = Func0956(["yes", "no", "haggle"]);
	if (!(var000B == "no")) goto labelFunc0819_0077;
	return 0x0000;
	goto labelFunc0819_008A;
labelFunc0819_0077:
	if (!(var000B == "yes")) goto labelFunc0819_008A;
	var000C = 0x0000;
	goto labelFunc0819_00D9;
labelFunc0819_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc0819_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc0819_02A6;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0819_013C;
	if (!(var000F == 0x0001)) goto labelFunc0819_0117;
	message("\"Thou art a shrewd bargainer, ");
	message(var0002);
	message(". Please do not tell anyone in town of this!\"");
	say();
labelFunc0819_0117:
	if (!(var000F == 0x0002)) goto labelFunc0819_012B;
	message("\"Thy skill at trading is unsurpassed, ");
	message(var0002);
	message("...\"");
	say();
labelFunc0819_012B:
	if (!(var000F == 0x0003)) goto labelFunc0819_0139;
	message("\"Troublesome are the times that force me to agree to such bargains!\"");
	say();
labelFunc0819_0139:
	goto labelFunc0819_021A;
labelFunc0819_013C:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0819_0195;
	if (!(var000F == 0x0001)) goto labelFunc0819_0160;
	message("\"Ah... My prices are fair here. Fair indeed.\"");
	say();
labelFunc0819_0160:
	if (!(var000F == 0x0002)) goto labelFunc0819_016E;
	message("\"Thou art a rogue! I would not believe mine ears if I were told I had sold goods at this price!\"");
	say();
labelFunc0819_016E:
	if (!(var000F == 0x0003)) goto labelFunc0819_0192;
	message("\"Let me see... Ah, I do believe thou wouldst make a good shopkeeper, ");
	message(var0002);
	message("! 'Tis not often I make such unwise bargains!\"");
	say();
	var000B = Func0992(0x0001, "@A shopkeeper? Surely thou art jesting?\r\n\t\t\t\t\t\t The Avatar is embarked on a Quest!@", 0x0000, false);
labelFunc0819_0192:
	goto labelFunc0819_021A;
labelFunc0819_0195:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0819_01E4;
	if (!(var000F == 0x0001)) goto labelFunc0819_01B9;
	message("\"Most fair, if I do say so myself.\"");
	say();
labelFunc0819_01B9:
	if (!(var000F == 0x0002)) goto labelFunc0819_01CD;
	message("\"'Tis a pleasure to bargain with thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0819_01CD:
	if (!(var000F == 0x0003)) goto labelFunc0819_01E1;
	message("\"What were we discussing? Ah, yes... 'Tis a fairer price than most would give, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0819_01E1:
	goto labelFunc0819_021A;
labelFunc0819_01E4:
	if (!(var000F == 0x0001)) goto labelFunc0819_01F8;
	message("\"Thou hast made me a happy man, ");
	message(var0002);
	message("! Walk with Beauty!\"");
	say();
labelFunc0819_01F8:
	if (!(var000F == 0x0002)) goto labelFunc0819_020C;
	message("\"Ah... A blessing upon thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0819_020C:
	if (!(var000F == 0x0003)) goto labelFunc0819_021A;
	message("\"Hmmm... In these trying times, I must charge steep prices or become a pauper.\"");
	say();
labelFunc0819_021A:
	message("\"We have agreed on a price of ");
	message(var0003);
	message(" filari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0819_024F;
	if (!(var000A > 0x0001)) goto labelFunc0819_0248;
	UI_set_npc_id(0xFFD1, (var000A - 0x0002));
labelFunc0819_0248:
	return var0003;
	goto labelFunc0819_02A6;
labelFunc0819_024F:
	if (!(var000F == 0x0001)) goto labelFunc0819_025D;
	message("\"What? I thought we had an agreement.\"");
	say();
labelFunc0819_025D:
	if (!(var000F == 0x0002)) goto labelFunc0819_026B;
	message("\"Thou hast sorely disappointed me. What of our bargain?\"");
	say();
labelFunc0819_026B:
	if (!(var000F == 0x0003)) goto labelFunc0819_0279;
	message("\"Is this honorable? What of our agreement?\"");
	say();
labelFunc0819_0279:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc0819_0294;
	UI_set_npc_id(0xFFD1, 0x001F);
	goto labelFunc0819_02A2;
labelFunc0819_0294:
	UI_set_npc_id(0xFFD1, (var000A + 0x000A));
labelFunc0819_02A2:
	return 0x0000;
labelFunc0819_02A6:
	if (!(var0006 == 0x0001)) goto labelFunc0819_031A;
	if (!(var000C == 0x0005)) goto labelFunc0819_02F5;
	message("\"");
	message(var0002);
	message(", I said that ");
	message(var0003);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000A < 0x001C)) goto labelFunc0819_02E2;
	UI_set_npc_id(0xFFD1, (var000A + 0x0004));
labelFunc0819_02E2:
	if (!Func0955()) goto labelFunc0819_02EC;
	return var0003;
labelFunc0819_02EC:
	var0007 = 0x0000;
	goto labelFunc0819_0317;
labelFunc0819_02F5:
	message("\"Very well. ");
	message(var0003);
	message(" filari is my final offer.\"");
	say();
	if (!(var000A < 0x001E)) goto labelFunc0819_0317;
	UI_set_npc_id(0xFFD1, (var000A + 0x0002));
labelFunc0819_0317:
	goto labelFunc0819_0464;
labelFunc0819_031A:
	if (!(var000C == 0x0002)) goto labelFunc0819_0366;
	if (!(var000F == 0x0001)) goto labelFunc0819_0338;
	message("\"Ah, hmmm... It pleases me to bargain with such a worthy soul. How doth ");
	message(var0003);
	message(" filari sound?\"");
	say();
labelFunc0819_0338:
	if (!(var000F == 0x0002)) goto labelFunc0819_0352;
	message("\"May the Truth of Beauty guide thee, ");
	message(var0002);
	message(". So, have we agreed on ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc0819_0352:
	if (!(var000F == 0x0003)) goto labelFunc0819_0366;
	message("\"My price is ");
	message(var0003);
	message(" filari. Dost thou accept?\"");
	say();
labelFunc0819_0366:
	if (!(var000C == 0x0003)) goto labelFunc0819_03AC;
	if (!(var000F == 0x0001)) goto labelFunc0819_0384;
	message("\"These are trying times, and goods are scarce... Wouldst thou consider ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc0819_0384:
	if (!(var000F == 0x0002)) goto labelFunc0819_0398;
	message("\"Hmmm... I am not certain... Dost thou like the sound of ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc0819_0398:
	if (!(var000F == 0x0003)) goto labelFunc0819_03AC;
	message("\"But I must earn enough to pay my debts! ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc0819_03AC:
	if (!(var000C == 0x0004)) goto labelFunc0819_03FC;
	if (!(var000F == 0x0001)) goto labelFunc0819_03CE;
	message("\"I cannot possibly accept less than ");
	message(var0003);
	message(" filari!\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc0819_03CE:
	if (!(var000F == 0x0002)) goto labelFunc0819_03E2;
	message("\"My costs are soaring! Surely thou canst see that I can go no lower than ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc0819_03E2:
	if (!(var000F == 0x0003)) goto labelFunc0819_03FC;
	message("\"Ah, hmmm... ");
	message(var0002);
	message(", thou art not talking to a fool. I deserve no less than ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc0819_03FC:
	if (!(var000C == 0x0005)) goto labelFunc0819_0464;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc0819_0420;
	message("\"I would rather be thrown into the canals than accept such a pitiful offer! My previous price stands, at ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc0819_0420:
	if (!(var000F == 0x0002)) goto labelFunc0819_0434;
	message("\"Thou must think that I am an imbecile to accept such a bargain. ");
	message(var0003);
	message(" filari, and no less!\"");
	say();
labelFunc0819_0434:
	if (!(var000F == 0x0003)) goto labelFunc0819_044C;
	message("\"Why, if I accepted such a price, I would have to close my shop and move away!\"");
	say();
	message("\"");
	message(var0003);
	message(" filari is where I stand.\"");
	say();
labelFunc0819_044C:
	if (!(var000A < 0x001F)) goto labelFunc0819_0464;
	UI_set_npc_id(0xFFD1, (var000A + 0x0001));
labelFunc0819_0464:
	goto labelFunc0819_004E;
labelFunc0819_0467:
	return 0;
}


