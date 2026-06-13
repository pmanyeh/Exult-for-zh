#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0817 0x817 (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = (0x000F - (UI_get_npc_id(0xFFF2) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFF2);
labelFunc0817_0048:
	if (!var0006) goto labelFunc0817_040B;
	var000A = Func0956(["yes", "no", "haggle"]);
	if (!(var000A == "no")) goto labelFunc0817_0071;
	return 0x0000;
	goto labelFunc0817_0084;
labelFunc0817_0071:
	if (!(var000A == "yes")) goto labelFunc0817_0084;
	var000B = 0x0000;
	goto labelFunc0817_00D3;
labelFunc0817_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc0817_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc0817_0262;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0817_012A;
	if (!(var000E == 0x0001)) goto labelFunc0817_010B;
	message("\"Thou art a shrewd and crafty bargainer, to convince me to accept this price...\"");
	say();
labelFunc0817_010B:
	if (!(var000E == 0x0002)) goto labelFunc0817_0119;
	message("\"Art thou certain thou hast not cast a dweomer upon me? I usually do not lower my prices so.\"");
	say();
labelFunc0817_0119:
	if (!(var000E == 0x0003)) goto labelFunc0817_0127;
	message("\"'Tis truly amazing... thou hast a facile tongue to convince me to lower my price by so much.\"");
	say();
labelFunc0817_0127:
	goto labelFunc0817_01DA;
labelFunc0817_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0817_016D;
	if (!(var000E == 0x0001)) goto labelFunc0817_014E;
	message("\"'Tis lower than I expected... but I shall agree to this price.\"");
	say();
labelFunc0817_014E:
	if (!(var000E == 0x0002)) goto labelFunc0817_015C;
	message("\"Thou art very good at bargaining. I will accept this price.\"");
	say();
labelFunc0817_015C:
	if (!(var000E == 0x0003)) goto labelFunc0817_016A;
	message("\"I see.\" *\"Very well, I will agree to this price even though 'tis lower than I did expect.\"");
	say();
labelFunc0817_016A:
	goto labelFunc0817_01DA;
labelFunc0817_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0817_01B0;
	if (!(var000E == 0x0001)) goto labelFunc0817_0191;
	message("\"Hmm...\" ~\"I suppose one must accept such a price -- though it could have been higher.\"");
	say();
labelFunc0817_0191:
	if (!(var000E == 0x0002)) goto labelFunc0817_019F;
	message("\"'Tis not such an indecent offer.\" ~\"I accept.\"");
	say();
labelFunc0817_019F:
	if (!(var000E == 0x0003)) goto labelFunc0817_01AD;
	message("\"I will accept\tthis price.\" ~\"I can always use the extra funds for research.\"");
	say();
labelFunc0817_01AD:
	goto labelFunc0817_01DA;
labelFunc0817_01B0:
	if (!(var000E == 0x0001)) goto labelFunc0817_01BE;
	message("\"Very well.\" *\"I accept thine offer!\"");
	say();
labelFunc0817_01BE:
	if (!(var000E == 0x0002)) goto labelFunc0817_01CC;
	message("\"It hath been a pleasure!\" *\"I will accept thine offer.\"");
	say();
labelFunc0817_01CC:
	if (!(var000E == 0x0003)) goto labelFunc0817_01DA;
	message("\"Yes...\"*\"'Tis a very good price.\"");
	say();
labelFunc0817_01DA:
	message("\"So, have we agreed on the price of ");
	message(var0002);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0817_020B;
	if (!(var0009 > 0x0001)) goto labelFunc0817_0204;
	UI_set_npc_id(0xFFF2, (var0009 - 0x0002));
labelFunc0817_0204:
	return var0002;
	goto labelFunc0817_0262;
labelFunc0817_020B:
	if (!(var000E == 0x0001)) goto labelFunc0817_0219;
	message("\"Pray, resolve thy mind!\"");
	say();
labelFunc0817_0219:
	if (!(var000E == 0x0002)) goto labelFunc0817_0227;
	message("\"Dost thou waste the time of other mages as well?\"");
	say();
labelFunc0817_0227:
	if (!(var000E == 0x0003)) goto labelFunc0817_0235;
	message("\"Thou art most rude to renege on an offer!\"");
	say();
labelFunc0817_0235:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc0817_0250;
	UI_set_npc_id(0xFFF2, 0x001F);
	goto labelFunc0817_025E;
labelFunc0817_0250:
	UI_set_npc_id(0xFFF2, (var0009 + 0x000A));
labelFunc0817_025E:
	return 0x0000;
labelFunc0817_0262:
	if (!(var0005 == 0x0001)) goto labelFunc0817_02D2;
	if (!(var000B == 0x0005)) goto labelFunc0817_02AD;
	message("\"");
	message(var0002);
	message(" is my final offer. Dost thou want it at this price?\"");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc0817_0298;
	UI_set_npc_id(0xFFF2, (var0009 + 0x0004));
labelFunc0817_0298:
	if (!(Func0955() == true)) goto labelFunc0817_02A4;
	return var0002;
labelFunc0817_02A4:
	var0006 = 0x0000;
	goto labelFunc0817_02CF;
labelFunc0817_02AD:
	message("\"");
	message(var0002);
	message(" is my final offer.  I will go no lower.\"");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc0817_02CF;
	UI_set_npc_id(0xFFF2, (var0009 + 0x0002));
labelFunc0817_02CF:
	goto labelFunc0817_0408;
labelFunc0817_02D2:
	if (!(var000B == 0x0002)) goto labelFunc0817_0318;
	if (!(var000E == 0x0001)) goto labelFunc0817_02F0;
	message("\"'Tis pleasant to find thee amenable. Wouldst thou consider ");
	message(var0002);
	message("?\"");
	say();
labelFunc0817_02F0:
	if (!(var000E == 0x0002)) goto labelFunc0817_0304;
	message("\"Thou seemest to appreciate the finer spells and what they are truly worth. How does ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc0817_0304:
	if (!(var000E == 0x0003)) goto labelFunc0817_0318;
	message("\"What a pleasure it is to deal with thee. I offer thee ");
	message(var0002);
	message(".\"");
	say();
labelFunc0817_0318:
	if (!(var000B == 0x0003)) goto labelFunc0817_035E;
	if (!(var000E == 0x0001)) goto labelFunc0817_0336;
	message("\"I am not totally certain.... How about ");
	message(var0002);
	message("?\"");
	say();
labelFunc0817_0336:
	if (!(var000E == 0x0002)) goto labelFunc0817_034A;
	message("\"Thou wilt not obtain the spell so cheaply. I will give thee ");
	message(var0002);
	message("?\"");
	say();
labelFunc0817_034A:
	if (!(var000E == 0x0003)) goto labelFunc0817_035E;
	message("\"I suppose I must needs take thy money,...\" *\"but not at that price. ");
	message(var0002);
	message("?\"");
	say();
labelFunc0817_035E:
	if (!(var000B == 0x0004)) goto labelFunc0817_03A4;
	if (!(var000E == 0x0001)) goto labelFunc0817_037C;
	message("\"This is not a price that inspires me to appreciate thy finer qualities. For ");
	message(var0002);
	message(" I will like thee better.\"");
	say();
labelFunc0817_037C:
	if (!(var000E == 0x0002)) goto labelFunc0817_0390;
	message("\"For such a pitiful sum I could not even gain a tenth of what this spell cost me to learn! I can go no lower than ");
	message(var0002);
	message(".\"");
	say();
labelFunc0817_0390:
	if (!(var000E == 0x0003)) goto labelFunc0817_03A4;
	message("\"I am not certain who is the more foolish...\"*\"Thou for offering such a wretched amount, or myself for continuing to bargain with thee. I will offer thee ");
	message(var0002);
	message(".\"");
	say();
labelFunc0817_03A4:
	if (!(var000B == 0x0005)) goto labelFunc0817_0408;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc0817_03C8;
	message("\"Art thou jesting? My previous offer stands, at ");
	message(var0002);
	message(".\"");
	say();
labelFunc0817_03C8:
	if (!(var000E == 0x0002)) goto labelFunc0817_03DC;
	message("\"Art thou deaf, or merely an imbecile? I offer ");
	message(var0002);
	message(", and no less!\"");
	say();
labelFunc0817_03DC:
	if (!(var000E == 0x0003)) goto labelFunc0817_03F0;
	message("\"Thine offer is an insult to any mage! My offer doth stand at ");
	message(var0002);
	message(".\"");
	say();
labelFunc0817_03F0:
	if (!(var0009 < 0x001F)) goto labelFunc0817_0408;
	UI_set_npc_id(0xFFF2, (var0009 + 0x0001));
labelFunc0817_0408:
	goto labelFunc0817_0048;
labelFunc0817_040B:
	return 0;
}


