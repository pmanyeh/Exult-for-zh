#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0828 0x828 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0828_001D;
	var0004 = "Milady";
	goto labelFunc0828_0023;
labelFunc0828_001D:
	var0004 = "Milord";
labelFunc0828_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFF1) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFF1);
labelFunc0828_006B:
	if (!var0009) goto labelFunc0828_0487;
	var000D = Func0956(["yes", "no", "haggle"]);
	if (!(var000D == "no")) goto labelFunc0828_0094;
	return 0x0000;
	goto labelFunc0828_00A7;
labelFunc0828_0094:
	if (!(var000D == "yes")) goto labelFunc0828_00A7;
	var000E = 0x0000;
	goto labelFunc0828_00F6;
labelFunc0828_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0828_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0828_02C6;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0828_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0134;
	message("\"Thou art shrewd indeed, ");
	message(var0002);
	message(". Thou wouldst make a fine Master.\"");
	say();
labelFunc0828_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0148;
	message("\"");
	message(var0004);
	message(", this is the fist time in years that I have actually lost money in a deal.\"");
	say();
labelFunc0828_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0828_015C;
	message("\"Thou dost trade well, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0828_015C:
	goto labelFunc0828_0239;
labelFunc0828_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0828_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0189;
	message("\"Do not allow Topo to hear of this, ");
	message(var0002);
	message("! 'Tis not often I lower my prices such...\"");
	say();
labelFunc0828_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0828_019D;
	message("\"");
	message(var0004);
	message(", I must be addled! I do not normally offer such a price...\"");
	say();
labelFunc0828_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0828_01B1;
	message("\"Thou art honorable, ");
	message(var0002);
	message(", I can tell. For thee only will I offer such a price!\"");
	say();
labelFunc0828_01B1:
	goto labelFunc0828_0239;
labelFunc0828_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0828_0203;
	if (!(var0011 == 0x0001)) goto labelFunc0828_01DE;
	message("\"Thou wilt find that my prices are more than fair, ");
	message(var0002);
	message(", once thou hast travelled a bit.\"");
	say();
labelFunc0828_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0828_01F2;
	message("\"'Tis a pleasure to trade with thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0828_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0828_0200;
	message("\"Please come to see me whenever thou art in Moonshade again.\"");
	say();
labelFunc0828_0200:
	goto labelFunc0828_0239;
labelFunc0828_0203:
	if (!(var0011 == 0x0001)) goto labelFunc0828_0217;
	message("\"");
	message(var0004);
	message(", thou art a fine customer!\"");
	say();
labelFunc0828_0217:
	if (!(var0011 == 0x0002)) goto labelFunc0828_022B;
	message("\"Many thanks, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0828_022B:
	if (!(var0011 == 0x0003)) goto labelFunc0828_0239;
	message("\"I fear that I must charge more, now that my raw materials are so limited.\"");
	say();
labelFunc0828_0239:
	message("\"Hast thou agreed to a price of ");
	message(var0005);
	message(" guilders, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0828_026E;
	if (!(var000C > 0x0001)) goto labelFunc0828_0267;
	UI_set_npc_id(0xFFF1, (var000C - 0x0002));
labelFunc0828_0267:
	return var0005;
	goto labelFunc0828_02C6;
labelFunc0828_026E:
	if (!(var0011 == 0x0001)) goto labelFunc0828_027C;
	message("\"'Tis poor form to argue once thou hast agreed on a price!\"");
	say();
labelFunc0828_027C:
	if (!(var0011 == 0x0002)) goto labelFunc0828_028A;
	message("\"What of our bargain? I had expected better of thee...\"");
	say();
labelFunc0828_028A:
	if (!(var0011 == 0x0003)) goto labelFunc0828_0299;
	message("\"Leave immediately! Thou dost not treat a Master so in Moonshade!\"");
	say();
	abort;
labelFunc0828_0299:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0828_02B4;
	UI_set_npc_id(0xFFF1, 0x001F);
	goto labelFunc0828_02C2;
labelFunc0828_02B4:
	UI_set_npc_id(0xFFF1, (var000C + 0x000A));
labelFunc0828_02C2:
	return 0x0000;
labelFunc0828_02C6:
	if (!(var0008 == 0x0001)) goto labelFunc0828_0334;
	if (!(var000E == 0x0005)) goto labelFunc0828_030F;
	message("\"I said that ");
	message(var0005);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0828_02FC;
	UI_set_npc_id(0xFFF1, (var000C + 0x0004));
labelFunc0828_02FC:
	if (!Func0955()) goto labelFunc0828_0306;
	return var0005;
labelFunc0828_0306:
	var0009 = 0x0000;
	goto labelFunc0828_0331;
labelFunc0828_030F:
	message("\"");
	message(var0005);
	message(" guilders is my final offer.\"");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0828_0331;
	UI_set_npc_id(0xFFF1, (var000C + 0x0002));
labelFunc0828_0331:
	goto labelFunc0828_0484;
labelFunc0828_0334:
	if (!(var000E == 0x0002)) goto labelFunc0828_038C;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0358;
	message("\"Thou art a worthy opponent, ");
	message(var0002);
	message(". How does ");
	message(var0005);
	message(" guilders sound?\"");
	say();
labelFunc0828_0358:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0372;
	message("\"");
	message(var0004);
	message(", I like thine honest face. How does ");
	message(var0005);
	message(" guilders sound to thee?\"");
	say();
labelFunc0828_0372:
	if (!(var0011 == 0x0003)) goto labelFunc0828_038C;
	message("\"My price is ");
	message(var0005);
	message(" guilders, ");
	message(var0002);
	message(". Dost thou accept?\"");
	say();
labelFunc0828_038C:
	if (!(var000E == 0x0003)) goto labelFunc0828_03D2;
	if (!(var0011 == 0x0001)) goto labelFunc0828_03AA;
	message("\"I am not sure. Wouldst thou pay ");
	message(var0005);
	message(" guilders?\"");
	say();
labelFunc0828_03AA:
	if (!(var0011 == 0x0002)) goto labelFunc0828_03BE;
	message("\"Not likely... ");
	message(var0005);
	message(" guilders?\"");
	say();
labelFunc0828_03BE:
	if (!(var0011 == 0x0003)) goto labelFunc0828_03D2;
	message("\"I have so little raw material... Perhaps ");
	message(var0005);
	message(" guilders?\"");
	say();
labelFunc0828_03D2:
	if (!(var000E == 0x0004)) goto labelFunc0828_041C;
	if (!(var0011 == 0x0001)) goto labelFunc0828_03F4;
	message("\"");
	message(var0005);
	message(" guilders is as low as I can go.\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc0828_03F4:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0408;
	message("\"I cannot accept less than ");
	message(var0005);
	message(" guilders. Thou must understand my position.\"");
	say();
labelFunc0828_0408:
	if (!(var0011 == 0x0003)) goto labelFunc0828_041C;
	message("\"");
	message(var0005);
	message(" guilders. I am not a charity.\"");
	say();
labelFunc0828_041C:
	if (!(var000E == 0x0005)) goto labelFunc0828_0484;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0828_0440;
	message("\"My previous price stands, at ");
	message(var0005);
	message(" guilders. I will not have it said that Master Ducio is so easily taken!\"");
	say();
labelFunc0828_0440:
	if (!(var0011 == 0x0002)) goto labelFunc0828_0454;
	message("\"");
	message(var0005);
	message(" guilders, and no less! I have to feed that worthless Topo somehow!\"");
	say();
labelFunc0828_0454:
	if (!(var0011 == 0x0003)) goto labelFunc0828_046C;
	message("\"I would rather become a Ranger than accept such an offer!\"");
	say();
	message("\"");
	message(var0005);
	message(" guilders is as low as I will go!\"");
	say();
labelFunc0828_046C:
	if (!(var000C < 0x001F)) goto labelFunc0828_0484;
	UI_set_npc_id(0xFFF1, (var000C + 0x0001));
labelFunc0828_0484:
	goto labelFunc0828_006B;
labelFunc0828_0487:
	return 0;
}


