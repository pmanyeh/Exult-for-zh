#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0942 0x942 (var var0000);
extern var Func0955 0x955 ();

var Func0820 0x820 (var var0000, var var0001)
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
	var0006 = (0x000F - (UI_get_npc_id(0xFFD7) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFD7);
labelFunc0820_0055:
	if (!var0008) goto labelFunc0820_045A;
	var000C = Func0956(["yes", "no", "haggle"]);
	if (!(var000C == "no")) goto labelFunc0820_007E;
	return 0x0000;
	goto labelFunc0820_0091;
labelFunc0820_007E:
	if (!(var000C == "yes")) goto labelFunc0820_0091;
	var000D = 0x0000;
	goto labelFunc0820_00E0;
labelFunc0820_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc0820_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc0820_02B3;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0820_015F;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0118;
	message("\"Do not tell Argus... He'll think his mother hath gone soft in the head for giving thee a price like this.\"");
	say();
labelFunc0820_0118:
	if (!(var0010 == 0x0002)) goto labelFunc0820_012C;
	message("\"Thou dost drive a hard bargain, ");
	message(var0002);
	message(". I should sit by the fire and knit!\"");
	say();
labelFunc0820_012C:
	if (!(var0010 == 0x0003)) goto labelFunc0820_015C;
	message("\"It hath been quite a while since I was so defeated!\"");
	say();
	if (!Func0942(0xFFDA)) goto labelFunc0820_015C;
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("\"To hear thee tell it, thou hast never been defeated, mother!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0820_015C:
	goto labelFunc0820_0221;
labelFunc0820_015F:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0820_01A8;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0183;
	message("\"We offer honest prices here at the Sleeping Bull!\"");
	say();
labelFunc0820_0183:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0191;
	message("\"I would quickly have to beg if I offered such prices every day!\"");
	say();
labelFunc0820_0191:
	if (!(var0010 == 0x0003)) goto labelFunc0820_01A5;
	message("\"Thou hast a shrewd head on thy shoulders, ");
	message(var0002);
	message(". Thou dost bargain like a innkeeper!\"");
	say();
labelFunc0820_01A5:
	goto labelFunc0820_0221;
labelFunc0820_01A8:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0820_01EB;
	if (!(var0010 == 0x0001)) goto labelFunc0820_01CC;
	message("\"Fair enough, if I do say so myself.\"");
	say();
labelFunc0820_01CC:
	if (!(var0010 == 0x0002)) goto labelFunc0820_01DA;
	message("\"I shall never make a profit with customers like thee...\"");
	say();
labelFunc0820_01DA:
	if (!(var0010 == 0x0003)) goto labelFunc0820_01E8;
	message("\"We try only to please! Tell thy friends about the Sleeping Bull!\"");
	say();
labelFunc0820_01E8:
	goto labelFunc0820_0221;
labelFunc0820_01EB:
	if (!(var0010 == 0x0001)) goto labelFunc0820_01FF;
	message("\"I am content, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0820_01FF:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0213;
	message("\"Blessing thee and thy companions, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0820_0213:
	if (!(var0010 == 0x0003)) goto labelFunc0820_0221;
	message("\"If the suppliers ever come, I won't have to charge such high prices.\"");
	say();
labelFunc0820_0221:
	message("\"Dost thou agree on a price of ");
	message(var0004);
	message(", ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0820_0256;
	if (!(var000B > 0x0001)) goto labelFunc0820_024F;
	UI_set_npc_id(0xFFD7, (var000B - 0x0002));
labelFunc0820_024F:
	return var0004;
	goto labelFunc0820_02B3;
labelFunc0820_0256:
	if (!(var0010 == 0x0001)) goto labelFunc0820_0264;
	message("\"I must have misunderstood. I thought we had an agreement.\"");
	say();
labelFunc0820_0264:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0272;
	message("\"I have no time for this!\"");
	say();
labelFunc0820_0272:
	if (!(var0010 == 0x0003)) goto labelFunc0820_0286;
	message("\"Then take thy business elsewhere, ");
	message(var0002);
	message("! I do not have all day to stand and argue!\"");
	say();
labelFunc0820_0286:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc0820_02A1;
	UI_set_npc_id(0xFFD7, 0x001F);
	goto labelFunc0820_02AF;
labelFunc0820_02A1:
	UI_set_npc_id(0xFFD7, (var000B + 0x000A));
labelFunc0820_02AF:
	return 0x0000;
labelFunc0820_02B3:
	if (!(var0007 == 0x0001)) goto labelFunc0820_0321;
	if (!(var000D == 0x0005)) goto labelFunc0820_02FC;
	message("\"");
	message(var0004);
	message(" is my final offer. Dost thou accept?\"");
	say();
	if (!(var000B < 0x001C)) goto labelFunc0820_02E9;
	UI_set_npc_id(0xFFD7, (var000B + 0x0004));
labelFunc0820_02E9:
	if (!Func0955()) goto labelFunc0820_02F3;
	return var0004;
labelFunc0820_02F3:
	var0008 = 0x0000;
	goto labelFunc0820_031E;
labelFunc0820_02FC:
	message("\"Very well. ");
	message(var0004);
	message(" is my final offer.\"");
	say();
	if (!(var000B < 0x001E)) goto labelFunc0820_031E;
	UI_set_npc_id(0xFFD7, (var000B + 0x0002));
labelFunc0820_031E:
	goto labelFunc0820_0457;
labelFunc0820_0321:
	if (!(var000D == 0x0002)) goto labelFunc0820_0367;
	if (!(var0010 == 0x0001)) goto labelFunc0820_033F;
	message("\"Thou dost bargain well. How doth ");
	message(var0004);
	message(" sound?\"");
	say();
labelFunc0820_033F:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0353;
	message("\"Thou wouldst make a fine innkeeper... Have we agreed on ");
	message(var0004);
	message(" gold coins?\"");
	say();
labelFunc0820_0353:
	if (!(var0010 == 0x0003)) goto labelFunc0820_0367;
	message("\"My price is ");
	message(var0004);
	message("... Just for thee. Dost thou accept?\"");
	say();
labelFunc0820_0367:
	if (!(var000D == 0x0003)) goto labelFunc0820_03AD;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0385;
	message("\"These are hard times, and goods are scarce... Wouldst thou give ");
	message(var0004);
	message("?\"");
	say();
labelFunc0820_0385:
	if (!(var0010 == 0x0002)) goto labelFunc0820_0399;
	message("\"I don't know... ");
	message(var0004);
	message("?\"");
	say();
labelFunc0820_0399:
	if (!(var0010 == 0x0003)) goto labelFunc0820_03AD;
	message("\"I need to hire more help... Perhaps ");
	message(var0004);
	message("?\"");
	say();
labelFunc0820_03AD:
	if (!(var000D == 0x0004)) goto labelFunc0820_03F3;
	if (!(var0010 == 0x0001)) goto labelFunc0820_03CB;
	message("\"Surely thou dost jest! ");
	message(var0004);
	message(" is as low as I can go. What sayest thou?\"");
	say();
labelFunc0820_03CB:
	if (!(var0010 == 0x0002)) goto labelFunc0820_03DF;
	message("\"With these storms driving our customers away, surely thou canst see that I can accept no less than ");
	message(var0004);
	message(".\"");
	say();
labelFunc0820_03DF:
	if (!(var0010 == 0x0003)) goto labelFunc0820_03F3;
	message("\"I have bargained with better folk than thee and gotten a better deal than that! Not less than ");
	message(var0004);
	message("!\"");
	say();
labelFunc0820_03F3:
	if (!(var000D == 0x0005)) goto labelFunc0820_0457;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc0820_0417;
	message("\"I would rather sell myself to a mage than to accept such a pitiful offer! I insist on ");
	message(var0004);
	message("!\"");
	say();
labelFunc0820_0417:
	if (!(var0010 == 0x0002)) goto labelFunc0820_042B;
	message("\"I am not in my dotage to accept such an offer! ");
	message(var0004);
	message(", and no less!\"");
	say();
labelFunc0820_042B:
	if (!(var0010 == 0x0003)) goto labelFunc0820_043F;
	message("\"May I go to my grave now! ");
	message(var0004);
	message(" is where I stand!\"");
	say();
labelFunc0820_043F:
	if (!(var000B < 0x001F)) goto labelFunc0820_0457;
	UI_set_npc_id(0xFFD7, (var000B + 0x0001));
labelFunc0820_0457:
	goto labelFunc0820_0055;
labelFunc0820_045A:
	return 0;
}


