#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);

var Func0854 0x854 (var var0000, var var0001)
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
	var0006 = 0x0005;
	var0007 = 0x0000;
	var0008 = 0x0001;
	var0009 = 0x0000;
	var000A = 0x0002;
labelFunc0854_003F:
	if (!var0008) goto labelFunc0854_03C8;
	var000B = Func0956(["yes", "no", "haggle"]);
	if (!(var000B == "no")) goto labelFunc0854_0068;
	return 0x0000;
	goto labelFunc0854_007B;
labelFunc0854_0068:
	if (!(var000B == "yes")) goto labelFunc0854_007B;
	var000C = 0x0000;
	goto labelFunc0854_00CA;
labelFunc0854_007B:
	var000D = Func0999(var0004, var0001, var000A, var0005, var0009, var0006, var0007);
	var0009 = (var0009 + 0x0001);
	var0007 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0004;
	var0004 = var000D[0x0002];
	var0005 = var000D[0x0001];
labelFunc0854_00CA:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc0854_0228;
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0854_0127;
	if (!(var000F == 0x0001)) goto labelFunc0854_0102;
	message("\"Rocco would have me scrapped for lowering my prices like this. Please do not tell him...\"");
	say();
labelFunc0854_0102:
	if (!(var000F == 0x0002)) goto labelFunc0854_0116;
	message("\"Thou art most forceful, ");
	message(var0002);
	message("! We will not be in business long at this rate!\"");
	say();
labelFunc0854_0116:
	if (!(var000F == 0x0003)) goto labelFunc0854_0124;
	message("\"Rocco would never have been out-bargained so!\"");
	say();
labelFunc0854_0124:
	goto labelFunc0854_01DD;
labelFunc0854_0127:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0854_016A;
	if (!(var000F == 0x0001)) goto labelFunc0854_014B;
	message("\"The Blue Boar doth have the finest prices, eh?\"");
	say();
labelFunc0854_014B:
	if (!(var000F == 0x0002)) goto labelFunc0854_0159;
	message("\"Today hath gone well, so I will be generous. On another day thou mayest not be so lucky!\"");
	say();
labelFunc0854_0159:
	if (!(var000F == 0x0003)) goto labelFunc0854_0167;
	message("\"Perhaps it is a human trait... To bargain so well.\"");
	say();
labelFunc0854_0167:
	goto labelFunc0854_01DD;
labelFunc0854_016A:
	if (!(var0004 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0854_01AD;
	if (!(var000F == 0x0001)) goto labelFunc0854_018E;
	message("\"Even Rocco would consider this a fair deal...\"");
	say();
labelFunc0854_018E:
	if (!(var000F == 0x0002)) goto labelFunc0854_019C;
	message("\"We shall not profit this way...\"");
	say();
labelFunc0854_019C:
	if (!(var000F == 0x0003)) goto labelFunc0854_01AA;
	message("\"Good service and fair prices is what hath made the Blue Boar famous!\"");
	say();
labelFunc0854_01AA:
	goto labelFunc0854_01DD;
labelFunc0854_01AD:
	if (!(var000F == 0x0001)) goto labelFunc0854_01C1;
	message("\"I am pleased, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0854_01C1:
	if (!(var000F == 0x0002)) goto labelFunc0854_01CF;
	message("\"Thou art a fine person!\"");
	say();
labelFunc0854_01CF:
	if (!(var000F == 0x0003)) goto labelFunc0854_01DD;
	message("\"If times were not so bad, our prices would be far lower...\"");
	say();
labelFunc0854_01DD:
	message("\"Dost thou agree to ");
	message(var0004);
	message(" guilders, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0854_01FA;
	return var0004;
	goto labelFunc0854_0228;
labelFunc0854_01FA:
	if (!(var000F == 0x0001)) goto labelFunc0854_0208;
	message("\"I thought thou didst agree to that price!\"");
	say();
labelFunc0854_0208:
	if (!(var000F == 0x0002)) goto labelFunc0854_0216;
	message("\"Take thy slick ways elsewhere then! I have more important things to do!\"");
	say();
labelFunc0854_0216:
	if (!(var000F == 0x0003)) goto labelFunc0854_0224;
	message("\"Be gone... Before I fetch Rocco to break thy thick head for thee!\"");
	say();
labelFunc0854_0224:
	return 0x0000;
labelFunc0854_0228:
	if (!(var0007 == 0x0001)) goto labelFunc0854_0266;
	if (!(var000C == 0x0005)) goto labelFunc0854_0259;
	message("\"");
	message(var0004);
	message(" is my final offer. Dost thou accept?\"");
	say();
	if (!Func0955()) goto labelFunc0854_0250;
	return var0004;
labelFunc0854_0250:
	var0008 = 0x0000;
	goto labelFunc0854_0263;
labelFunc0854_0259:
	message("\"Fine... ");
	message(var0004);
	message(" guilders is my final offer.\"");
	say();
labelFunc0854_0263:
	goto labelFunc0854_03C5;
labelFunc0854_0266:
	if (!(var000C == 0x0002)) goto labelFunc0854_02AC;
	if (!(var000F == 0x0001)) goto labelFunc0854_0284;
	message("\"It is so interesting bargaining with thee. How doth ");
	message(var0004);
	message(" guilders sound?\"");
	say();
labelFunc0854_0284:
	if (!(var000F == 0x0002)) goto labelFunc0854_0298;
	message("\"Thou art a gem among customers. Have we agreed on ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0854_0298:
	if (!(var000F == 0x0003)) goto labelFunc0854_02AC;
	message("\"I offer thee a price of ");
	message(var0004);
	message(" guilders -- a special deal for those I consider good customers. Dost thou accept?\"");
	say();
labelFunc0854_02AC:
	if (!(var000C == 0x0003)) goto labelFunc0854_02F2;
	if (!(var000F == 0x0001)) goto labelFunc0854_02CA;
	message("\"We have so little in stock... Perhaps ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0854_02CA:
	if (!(var000F == 0x0002)) goto labelFunc0854_02DE;
	message("\"");
	message(var0004);
	message("? I should charge more, though...\"");
	say();
labelFunc0854_02DE:
	if (!(var000F == 0x0003)) goto labelFunc0854_02F2;
	message("\"I must consider what Rocco will say. Perhaps ");
	message(var0004);
	message(" guilders?\"");
	say();
labelFunc0854_02F2:
	if (!(var000C == 0x0004)) goto labelFunc0854_0338;
	if (!(var000F == 0x0001)) goto labelFunc0854_0310;
	message("\"");
	message(var0004);
	message(" guilders is as low as I can go. Wilt thou agree?\"");
	say();
labelFunc0854_0310:
	if (!(var000F == 0x0002)) goto labelFunc0854_0324;
	message("\"Surely thou canst see that I can go no lower than ");
	message(var0004);
	message(" guilders. We must pay for the upkeep on the inn.\"");
	say();
labelFunc0854_0324:
	if (!(var000F == 0x0003)) goto labelFunc0854_0338;
	message("\"I may be an automaton, but I am no fool! I will accept no less than ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc0854_0338:
	if (!(var000C == 0x0005)) goto labelFunc0854_03C5;
	var0004 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc0854_035C;
	message("\"I would rather Rocco sell me for scrap! My previous price stands, at ");
	message(var0004);
	message(" guilders.\"");
	say();
labelFunc0854_035C:
	if (!(var000F == 0x0002)) goto labelFunc0854_0370;
	message("\"");
	message(var0004);
	message(" guilders! I shall not be tricked into accepting less!\"");
	say();
labelFunc0854_0370:
	if (!(var000F == 0x0003)) goto labelFunc0854_03C5;
	message("\"Thou must think me witless!\"");
	say();
	if (!Func0942(0xFFE2)) goto labelFunc0854_03BB;
	var0010 = "his";
	if (!var0003) goto labelFunc0854_0399;
	var0010 = "her";
labelFunc0854_0399:
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("\"If this person is bothering thee, Petra, I shall be happy to soften ");
	message(var0010);
	message(" skull for thee.\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE4, 0x0000);
labelFunc0854_03BB:
	message("\"");
	message(var0004);
	message(" guilders is where I stand.\"");
	say();
labelFunc0854_03C5:
	goto labelFunc0854_003F;
labelFunc0854_03C8:
	return 0;
}


