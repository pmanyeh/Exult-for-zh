#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0812 0x812 (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	if (!UI_is_pc_female()) goto labelFunc0812_001D;
	var0004 = "Milady";
	goto labelFunc0812_0023;
labelFunc0812_001D:
	var0004 = "Milord";
labelFunc0812_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFBF) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFBF);
labelFunc0812_006B:
	if (!var0009) goto labelFunc0812_048D;
	var000D = Func0956(["yes", "no", "haggle"]);
	if (!(var000D == "no")) goto labelFunc0812_0094;
	return 0x0000;
	goto labelFunc0812_00A7;
labelFunc0812_0094:
	if (!(var000D == "yes")) goto labelFunc0812_00A7;
	var000E = 0x0000;
	goto labelFunc0812_00F6;
labelFunc0812_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0812_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0812_02CC;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0812_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0812_0134;
	message("\"Thou dost not know what a good bargain thou hast made, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0812_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0812_0148;
	message("\"");
	message(var0004);
	message(", I have not lost money on a deal since I was a young girl.\"");
	say();
labelFunc0812_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0812_015C;
	message("\"Thou art shrewd indeed, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0812_015C:
	goto labelFunc0812_0239;
labelFunc0812_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0812_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0812_0189;
	message("\"I must be taken with thee, ");
	message(var0002);
	message("! To offer such a price...\"");
	say();
labelFunc0812_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0812_019D;
	message("\"");
	message(var0004);
	message(", thou wilt put me out of business if thou dost stay much longer!\"");
	say();
labelFunc0812_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0812_01B1;
	message("\"I have met my match in thee, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0812_01B1:
	goto labelFunc0812_0239;
labelFunc0812_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0812_0203;
	if (!(var0011 == 0x0001)) goto labelFunc0812_01DE;
	message("\"No one else is willing to put such care into their work as I do, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0812_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0812_01F2;
	message("\"Thou art a worthy opponent, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0812_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0200;
	message("\"Remember me, if thou dost ever need any more furs!\"");
	say();
labelFunc0812_0200:
	goto labelFunc0812_0239;
labelFunc0812_0203:
	if (!(var0011 == 0x0001)) goto labelFunc0812_0217;
	message("\"Thou art always welcome in my shop, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0812_0217:
	if (!(var0011 == 0x0002)) goto labelFunc0812_022B;
	message("\"May it give thee great pleasure, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0812_022B:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0239;
	message("\"'Tis hard to offer lower prices these days. The Goblins have hurt everyone's business.\"");
	say();
labelFunc0812_0239:
	message("\"Thou hast agreed to a price of ");
	message(var0005);
	message(" monetari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0812_026E;
	if (!(var000C > 0x0001)) goto labelFunc0812_0267;
	UI_set_npc_id(0xFFBF, (var000C - 0x0002));
labelFunc0812_0267:
	return var0005;
	goto labelFunc0812_02CC;
labelFunc0812_026E:
	if (!(var0011 == 0x0001)) goto labelFunc0812_027C;
	message("\"Take care that thou dost not seek to play me for the fool!\"");
	say();
labelFunc0812_027C:
	if (!(var0011 == 0x0002)) goto labelFunc0812_0290;
	message("\"What of our bargain? Thou art rash, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0812_0290:
	if (!(var0011 == 0x0003)) goto labelFunc0812_029F;
	message("\"I will not deal with dishonorable people! Be gone!\"");
	say();
	abort;
labelFunc0812_029F:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0812_02BA;
	UI_set_npc_id(0xFFBF, 0x001F);
	goto labelFunc0812_02C8;
labelFunc0812_02BA:
	UI_set_npc_id(0xFFBF, (var000C + 0x000A));
labelFunc0812_02C8:
	return 0x0000;
labelFunc0812_02CC:
	if (!(var0008 == 0x0001)) goto labelFunc0812_033A;
	if (!(var000E == 0x0005)) goto labelFunc0812_0315;
	message("\"I said that ");
	message(var0005);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0812_0302;
	UI_set_npc_id(0xFFBF, (var000C + 0x0004));
labelFunc0812_0302:
	if (!Func0955()) goto labelFunc0812_030C;
	return var0005;
labelFunc0812_030C:
	var0009 = 0x0000;
	goto labelFunc0812_0337;
labelFunc0812_0315:
	message("\"");
	message(var0005);
	message(" monetari is my final offer.\"");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0812_0337;
	UI_set_npc_id(0xFFBF, (var000C + 0x0002));
labelFunc0812_0337:
	goto labelFunc0812_048A;
labelFunc0812_033A:
	if (!(var000E == 0x0002)) goto labelFunc0812_0392;
	if (!(var0011 == 0x0001)) goto labelFunc0812_035E;
	message("\"Thou knowest fine wares when thou dost see them, ");
	message(var0002);
	message(". How does ");
	message(var0005);
	message(" monetari sound?\"");
	say();
labelFunc0812_035E:
	if (!(var0011 == 0x0002)) goto labelFunc0812_0378;
	message("\"");
	message(var0004);
	message(", for a person of thy fine taste I will offer a special price. How does ");
	message(var0005);
	message(" monetari sound to thee?\"");
	say();
labelFunc0812_0378:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0392;
	message("\"My price is ");
	message(var0005);
	message(" monetari, ");
	message(var0002);
	message(". Dost thou accept?\"");
	say();
labelFunc0812_0392:
	if (!(var000E == 0x0003)) goto labelFunc0812_03D8;
	if (!(var0011 == 0x0001)) goto labelFunc0812_03B0;
	message("\"I must think about my business. Wouldst thou consider ");
	message(var0005);
	message(" monetari?\"");
	say();
labelFunc0812_03B0:
	if (!(var0011 == 0x0002)) goto labelFunc0812_03C4;
	message("\"I don't know... ");
	message(var0005);
	message(" monetari?\"");
	say();
labelFunc0812_03C4:
	if (!(var0011 == 0x0003)) goto labelFunc0812_03D8;
	message("\"Perhaps ");
	message(var0005);
	message(" monetari? Such furs are rare...\"");
	say();
labelFunc0812_03D8:
	if (!(var000E == 0x0004)) goto labelFunc0812_0422;
	if (!(var0011 == 0x0001)) goto labelFunc0812_03FA;
	message("\"");
	message(var0005);
	message(" monetari is as low as I can go.\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc0812_03FA:
	if (!(var0011 == 0x0002)) goto labelFunc0812_040E;
	message("\"I still cannot accept less than ");
	message(var0005);
	message(" monetari. I must pay for my shop...\"");
	say();
labelFunc0812_040E:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0422;
	message("\"I can accept no less than ");
	message(var0005);
	message(" monetari... No matter how well I like thee.\"");
	say();
labelFunc0812_0422:
	if (!(var000E == 0x0005)) goto labelFunc0812_048A;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0812_0446;
	message("\"My previous price stands, at ");
	message(var0005);
	message(" monetari. I would be a fool to take less.\"");
	say();
labelFunc0812_0446:
	if (!(var0011 == 0x0002)) goto labelFunc0812_045A;
	message("\"Better I should simply throw the furs into the street! ");
	message(var0005);
	message(" monetari, and no less!\"");
	say();
labelFunc0812_045A:
	if (!(var0011 == 0x0003)) goto labelFunc0812_0472;
	message("\"What dost thou take me for, a bear?! I am not that witless!\"");
	say();
	message("\"");
	message(var0005);
	message(" monetari is as low as I will go!\"");
	say();
labelFunc0812_0472:
	if (!(var000C < 0x001F)) goto labelFunc0812_048A;
	UI_set_npc_id(0xFFBF, (var000C + 0x0001));
labelFunc0812_048A:
	goto labelFunc0812_006B;
labelFunc0812_048D:
	return 0;
}


