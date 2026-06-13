#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern void Func094E 0x94E (var var0000, var var0001);

var Func0860 0x860 (var var0000, var var0001)
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
	var var0011;
	var var0012;
	var var0013;

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = var0000;
	var0005 = ((var0001 / 0x0003) * 0x0002);
	var0006 = (0x000F - (UI_get_npc_id(0xFFE2) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFE2);
labelFunc0860_0055:
	if (!var0008) goto labelFunc0860_04FF;
	var000C = Func0956(["yes", "no", "haggle"]);
	if (!(var000C == "no")) goto labelFunc0860_007E;
	return 0x0000;
	goto labelFunc0860_0091;
labelFunc0860_007E:
	if (!(var000C == "yes")) goto labelFunc0860_0091;
	var000D = 0x0000;
	goto labelFunc0860_00E0;
labelFunc0860_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0860_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0860_02F4;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0860_0166;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0118;
	message("\"Please do not mention this to Petra -- she would never forgive me for lowering my prices like this.\"");
	say();
labelFunc0860_0118:
	if (!(var0010 == 0x0002)) goto labelFunc0860_012C;
	message("\"At this price, I might as well sell the inn and go live in a hut! Thou dost drive a hard bargain, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0860_012C:
	if (!(var0010 == 0x0003)) goto labelFunc0860_0163;
	message("\"I cannot believe that thou hast out-bargained me so...\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc0860_0163;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"Thou art too old to be an innkeeper, Rocco! Thy mind grows soft, like an over-ripe fruit.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"Isn't that the truth...\"");
	say();
labelFunc0860_0163:
	goto labelFunc0860_0268;
labelFunc0860_0166:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0860_01F5;
	if (!(var0010 == 0x0001)) goto labelFunc0860_018A;
	message("\"Our prices are fair here at the Blue Boar, eh?\"");
	say();
labelFunc0860_018A:
	if (!(var0010 == 0x0002)) goto labelFunc0860_0198;
	message("\"Yesterday, thou wouldst not have found me in such a generous mood as this. I should starve, if I sold goods at this price every day!\"");
	say();
labelFunc0860_0198:
	if (!(var0010 == 0x0003)) goto labelFunc0860_01F2;
	message("\"Thou hast a bargaining tongue, my friend. It reminds me of when I was thine age...\"");
	say();
	if (!var0003) goto labelFunc0860_01B5;
	var0011 = "lass";
	goto labelFunc0860_01BB;
labelFunc0860_01B5:
	var0011 = "lad";
labelFunc0860_01BB:
	message("\"Hast thou ever considered a change of employment? I'll be retiring someday, and perhaps a young ");
	message(var0011);
	message(" such as thyself might be interested in running an inn...\"");
	say();
	if (!var0003) goto labelFunc0860_01D4;
	var0012 = "her";
	goto labelFunc0860_01DA;
labelFunc0860_01D4:
	var0012 = "his";
labelFunc0860_01DA:
	var0013 = Func0992(0x0001, (("@I think not, innkeeper. The Avatar is not one to let grass grow under " + var0012) + " feet.@"), 0x0000, false);
labelFunc0860_01F2:
	goto labelFunc0860_0268;
labelFunc0860_01F5:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0860_0238;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0219;
	message("\"Most fair, if I do say so myself.\"");
	say();
labelFunc0860_0219:
	if (!(var0010 == 0x0002)) goto labelFunc0860_0227;
	message("\"I shall not become a rich man from customers like thee...\"");
	say();
labelFunc0860_0227:
	if (!(var0010 == 0x0003)) goto labelFunc0860_0235;
	message("\"And let me remind thee that we give service with a smile around here. 'Tis why the Blue Boar Inn is famous throughout these parts.\"");
	say();
labelFunc0860_0235:
	goto labelFunc0860_0268;
labelFunc0860_0238:
	if (!(var0010 == 0x0001)) goto labelFunc0860_024C;
	message("\"Thou hast made me a happy man, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0860_024C:
	if (!(var0010 == 0x0002)) goto labelFunc0860_025A;
	message("\"Thou art a blessing to this inn, thee and thy companions!\"");
	say();
labelFunc0860_025A:
	if (!(var0010 == 0x0003)) goto labelFunc0860_0268;
	message("\"In times like these, I must charge high prices or close...\"");
	say();
labelFunc0860_0268:
	message("\"We have agreed on a price of ");
	message(var0004);
	message(" guilders, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0860_029D;
	if (!(var000B > 0x0001)) goto labelFunc0860_0296;
	UI_set_npc_id(0xFFE2, (var000B - 0x0002));
labelFunc0860_0296:
	return var0004;
	goto labelFunc0860_02F4;
labelFunc0860_029D:
	if (!(var0010 == 0x0001)) goto labelFunc0860_02AB;
	message("\"What? I thought we had an agreement.\"");
	say();
labelFunc0860_02AB:
	if (!(var0010 == 0x0002)) goto labelFunc0860_02B9;
	message("\"Then be gone with thee -- I have no time to play games.\"");
	say();
labelFunc0860_02B9:
	if (!(var0010 == 0x0003)) goto labelFunc0860_02C7;
	message("\"Dost thou think me a fool, to argue with me only to change thy mind? I shall spread the word about thee in this town, wait and see!\"");
	say();
labelFunc0860_02C7:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0860_02E2;
	UI_set_npc_id(0xFFE2, 0x001F);
	goto labelFunc0860_02F0;
labelFunc0860_02E2:
	UI_set_npc_id(0xFFE2, (var000B + 0x000A));
labelFunc0860_02F0:
	return 0x0000;
labelFunc0860_02F4:
	if (!(var0007 == 0x0001)) goto labelFunc0860_0368;
	if (!(var000D == 0x0005)) goto labelFunc0860_0343;
	message("\"Look, ");
	message(var0002);
	message(", I said that ");
	message(var0004);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0860_0330;
	UI_set_npc_id(0xFFE2, (var000B + 0x0004));
labelFunc0860_0330:
	if (!Func0955()) goto labelFunc0860_033A;
	return var0004;
labelFunc0860_033A:
	var0008 = 0x0000;
	goto labelFunc0860_0365;
labelFunc0860_0343:
	message("\"Very well. ");
	message(var0004);
	message(" guilders is my final offer.\"");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0860_0365;
	UI_set_npc_id(0xFFE2, (var000B + 0x0002));
labelFunc0860_0365:
	goto labelFunc0860_04FC;
labelFunc0860_0368:
	if (!(var000D == 0x0002)) goto labelFunc0860_03AE;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0386;
	message("\"It pleases me to do business with such a worthy soul. How doth ");
	message(var0004);
	message(" guilders sound?\"");
	say();
labelFunc0860_0386:
	if (!(var0010 == 0x0002)) goto labelFunc0860_039A;
	message("\"May the Spirit of Truth light thy way, dear friend. So, have we agreed on ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0860_039A:
	if (!(var0010 == 0x0003)) goto labelFunc0860_03AE;
	message("\"My price is ");
	message(var0004);
	message(" guilders -- a special price for my good friend, if I may call thee friend. Dost thou accept?\"");
	say();
labelFunc0860_03AE:
	if (!(var000D == 0x0003)) goto labelFunc0860_03F4;
	if (!(var0010 == 0x0001)) goto labelFunc0860_03CC;
	message("\"These are hard times, and goods are scarce... ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0860_03CC:
	if (!(var0010 == 0x0002)) goto labelFunc0860_03E0;
	message("\"I'm not certain... Perhaps ");
	message(var0004);
	message("?\"");
	say();
labelFunc0860_03E0:
	if (!(var0010 == 0x0003)) goto labelFunc0860_03F4;
	message("\"But I must make enough to pay for repairs on this inn, which is drafty in the winter... Perhaps ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0860_03F4:
	if (!(var000D == 0x0004)) goto labelFunc0860_046F;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0441;
	message("\"Petra, come and hear this! The customer jests with me!\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc0860_0433;
	Func094E(0xFFE4, (("@We cannot possibly accept less than " + var0004) + " guilders.@"));
	UI_show_npc_face0(0xFFE2, 0x0000);
	goto labelFunc0860_043D;
labelFunc0860_0433:
	message("\"");
	message(var0004);
	message(" guilders is as low as I can go.\"");
	say();
labelFunc0860_043D:
	message("\"What dost thou say to this?\"");
	say();
labelFunc0860_0441:
	if (!(var0010 == 0x0002)) goto labelFunc0860_0455;
	message("\"But the storms have severed contact with the mainland, and my costs are soaring! Surely thou canst see that I can go no lower than ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc0860_0455:
	if (!(var0010 == 0x0003)) goto labelFunc0860_046F;
	message("\"Thou art not talking to a fool, ");
	message(var0002);
	message(". I deserve no less than ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc0860_046F:
	if (!(var000D == 0x0005)) goto labelFunc0860_04FC;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0860_0493;
	message("\"I would rather be eaten by rats than accept such a pitiful offer. My previous price stands, at ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc0860_0493:
	if (!(var0010 == 0x0002)) goto labelFunc0860_04A7;
	message("\"Thou must think that I am deaf, blind and stupid, to accept such a deal. ");
	message(var0004);
	message(" guilders, and no less!\"");
	say();
labelFunc0860_04A7:
	if (!(var0010 == 0x0003)) goto labelFunc0860_04E4;
	message("\"Why, if I accepted such a price as this, I should have to break Petra into scrap metal and sell her to make ends meet!\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc0860_04DA;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"This person is a lout, my dear. Cast the fool out the door.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE2, 0x0000);
labelFunc0860_04DA:
	message("\"");
	message(var0004);
	message(" guilders is where I stand.\"");
	say();
labelFunc0860_04E4:
	if (!(var000B < 0x001F)) goto labelFunc0860_04FC;
	UI_set_npc_id(0xFFE2, (var000B + 0x0001));
labelFunc0860_04FC:
	goto labelFunc0860_0055;
labelFunc0860_04FF:
	return 0;
}


