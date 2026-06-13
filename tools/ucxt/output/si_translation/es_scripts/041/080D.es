#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func080D 0x80D (var var0000, var var0001)
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
	var0006 = (0x000F - (UI_get_npc_id(0xFFF3) / 0x0002));
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
	var000B = UI_get_npc_id(0xFFF3);
labelFunc080D_0055:
	if (!var0008) goto labelFunc080D_0448;
	var000C = Func0956(["yes", "no", "haggle"]);
	if (!(var000C == "no")) goto labelFunc080D_007E;
	return 0x0000;
	goto labelFunc080D_0091;
labelFunc080D_007E:
	if (!(var000C == "yes")) goto labelFunc080D_0091;
	var000D = 0x0000;
	goto labelFunc080D_00E0;
labelFunc080D_0091:
	var000E = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000E[0x0004];
	var000D = var000E[0x0003];
	var000F = var0004;
	var0004 = var000E[0x0002];
	var0005 = var000E[0x0001];
labelFunc080D_00E0:
	var0010 = UI_get_random(0x0003);
	if (!(var000D < 0x0002)) goto labelFunc080D_029B;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc080D_0137;
	if (!(var0010 == 0x0001)) goto labelFunc080D_0118;
	message("\"Thou hast better not visit this shop too often, or we shall lose all our money!\"");
	say();
labelFunc080D_0118:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0126;
	message("\"Thou hast bargained me to a bitter price, but then, I do not own this store!\"");
	say();
labelFunc080D_0126:
	if (!(var0010 == 0x0003)) goto labelFunc080D_0134;
	message("\"Well, no one else in town is spending coins, so I must reluctantly accept thine offer.\"");
	say();
labelFunc080D_0134:
	goto labelFunc080D_0209;
labelFunc080D_0137:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc080D_017E;
	if (!(var0010 == 0x0001)) goto labelFunc080D_015B;
	message("\"Believe me, I am allowing thee a fantastic price. Please do not tell anyone!\"");
	say();
labelFunc080D_015B:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0169;
	message("\"Thou must be poor, if thou must bargain me down so low. Very well, I shall have pity on thee.\"");
	say();
labelFunc080D_0169:
	if (!(var0010 == 0x0003)) goto labelFunc080D_017B;
	message("\"I think thou hast talked me into a price that is too low...\"");
	say();
	message("\"But I do not care. Hast thou noticed how beautiful the sunsets have been lately?\"");
	say();
labelFunc080D_017B:
	goto labelFunc080D_0209;
labelFunc080D_017E:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc080D_01CD;
	if (!(var0010 == 0x0001)) goto labelFunc080D_01A2;
	message("\"'Tis a good price, and a great value.\"");
	say();
labelFunc080D_01A2:
	if (!(var0010 == 0x0002)) goto labelFunc080D_01B6;
	message("\"So that will be ");
	message(var0004);
	message(" guilders -- and I will say again that it hath been nice chatting with thee today.\"");
	say();
labelFunc080D_01B6:
	if (!(var0010 == 0x0003)) goto labelFunc080D_01CA;
	message("\"'Tis a fair deal -- only ");
	message(var0004);
	message(" guilders. Be certain to tell all thy friends!\"");
	say();
labelFunc080D_01CA:
	goto labelFunc080D_0209;
labelFunc080D_01CD:
	if (!(var0010 == 0x0001)) goto labelFunc080D_01E7;
	message("\"");
	message(var0004);
	message(" guilders! Thank thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc080D_01E7:
	if (!(var0010 == 0x0002)) goto labelFunc080D_01FB;
	message("\"That is wonderful! ");
	message(var0004);
	message(" whole guilders... why, the owner shall be so proud of me for this sale!\"");
	say();
labelFunc080D_01FB:
	if (!(var0010 == 0x0003)) goto labelFunc080D_0209;
	message("\"As I always say, one must pay high prices to obtain high quality.\"");
	say();
labelFunc080D_0209:
	message("\"");
	message(var0004);
	message(" guilders is the agreed price, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc080D_023E;
	if (!(var000B > 0x0001)) goto labelFunc080D_0237;
	UI_set_npc_id(0xFFF3, (var000B - 0x0002));
labelFunc080D_0237:
	return var0004;
	goto labelFunc080D_029B;
labelFunc080D_023E:
	if (!(var0010 == 0x0001)) goto labelFunc080D_024C;
	message("\"Thou shouldst not jest with me. Simply because I'm only a Mundane doth not mean that thou canst waste my time.\"");
	say();
labelFunc080D_024C:
	if (!(var0010 == 0x0002)) goto labelFunc080D_025A;
	message("\"But we had an agreement!\"");
	say();
labelFunc080D_025A:
	if (!(var0010 == 0x0003)) goto labelFunc080D_026E;
	message("\"Canst thou not make up thy mind, ");
	message(var0002);
	message("?\"");
	say();
labelFunc080D_026E:
	if (!(0x001F < (var000B + 0x000A))) goto labelFunc080D_0289;
	UI_set_npc_id(0xFFF3, 0x001F);
	goto labelFunc080D_0297;
labelFunc080D_0289:
	UI_set_npc_id(0xFFF3, (var000B + 0x000A));
labelFunc080D_0297:
	return 0x0000;
labelFunc080D_029B:
	if (!(var0007 == 0x0001)) goto labelFunc080D_030F;
	if (!(var000D == 0x0005)) goto labelFunc080D_02EA;
	message("\"I have gone as low as I can, ");
	message(var0002);
	message(". ");
	message(var0004);
	message(" guilders. Dost thou accept?\"");
	say();
	if (!(var000B < 0x001C)) goto labelFunc080D_02D7;
	UI_set_npc_id(0xFFF3, (var000B + 0x0004));
labelFunc080D_02D7:
	if (!Func0955()) goto labelFunc080D_02E1;
	return var0004;
labelFunc080D_02E1:
	var0008 = 0x0000;
	goto labelFunc080D_030C;
labelFunc080D_02EA:
	message("\"");
	message(var0004);
	message(" guilders is my final offer. Is this acceptable to thee?\"");
	say();
	if (!(var000B < 0x001E)) goto labelFunc080D_030C;
	UI_set_npc_id(0xFFF3, (var000B + 0x0002));
labelFunc080D_030C:
	goto labelFunc080D_0445;
labelFunc080D_030F:
	if (!(var000D == 0x0002)) goto labelFunc080D_0355;
	if (!(var0010 == 0x0001)) goto labelFunc080D_032D;
	message("\"I see that thou dost appreciate quality goods! Wouldst thou pay ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc080D_032D:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0341;
	message("\"Thou art a most perceptive person. But wouldst thou pay ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc080D_0341:
	if (!(var0010 == 0x0003)) goto labelFunc080D_0355;
	message("\"I can tell that we shall be doing business regularly. Thy price is fair, but I would prefer to receive ");
	message(var0004);
	message(" guilders. Is this acceptable?\"");
	say();
labelFunc080D_0355:
	if (!(var000D == 0x0003)) goto labelFunc080D_039B;
	if (!(var0010 == 0x0001)) goto labelFunc080D_0373;
	message("\"Hmmm... perhaps ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc080D_0373:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0387;
	message("\"I would be more easy if thou wouldst pay at least ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc080D_0387:
	if (!(var0010 == 0x0003)) goto labelFunc080D_039B;
	message("\"Surely, thou hast more funds than this! I think that thou couldst afford ");
	message(var0004);
	message(" guilders. Is this acceptable?\"");
	say();
labelFunc080D_039B:
	if (!(var000D == 0x0004)) goto labelFunc080D_03E1;
	if (!(var0010 == 0x0001)) goto labelFunc080D_03B9;
	message("\"But I would lose mine employment if I sold at such a price! Wouldst thou consider ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc080D_03B9:
	if (!(var0010 == 0x0002)) goto labelFunc080D_03CD;
	message("\"Thou art not serious! Surely, thou canst tell that ");
	message(var0004);
	message(" guilders is a more fair price.\"");
	say();
labelFunc080D_03CD:
	if (!(var0010 == 0x0003)) goto labelFunc080D_03E1;
	message("\"Dost thou think me a simpleton! I must accept no less than ");
	message(var0004);
	message(" guilders, or I should be ashamed of myself. Dost thou accept?\"");
	say();
labelFunc080D_03E1:
	if (!(var000D == 0x0005)) goto labelFunc080D_0445;
	var0004 = var000F;
	if (!(var0010 == 0x0001)) goto labelFunc080D_0405;
	message("\"Of course not. ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc080D_0405:
	if (!(var0010 == 0x0002)) goto labelFunc080D_0419;
	message("\"");
	message(var0004);
	message(" guilders, and no less!\"");
	say();
labelFunc080D_0419:
	if (!(var0010 == 0x0003)) goto labelFunc080D_042D;
	message("\"I should be a fool if I sold at such a price. ");
	message(var0004);
	message(" guilders is where I must stand.\"");
	say();
labelFunc080D_042D:
	if (!(var000B < 0x001F)) goto labelFunc080D_0445;
	UI_set_npc_id(0xFFF3, (var000B + 0x0001));
labelFunc080D_0445:
	goto labelFunc080D_0055;
labelFunc080D_0448:
	return 0;
}


