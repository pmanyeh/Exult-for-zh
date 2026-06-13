#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0870 0x870 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0870_001D;
	var0004 = "Milady";
	goto labelFunc0870_0023;
labelFunc0870_001D:
	var0004 = "Milord";
labelFunc0870_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFE0) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0002;
	var000C = UI_get_npc_id(0xFFE0);
labelFunc0870_006B:
	if (!var0009) goto labelFunc0870_0499;
	var000D = Func0956(["yes", "no", "haggle"]);
	if (!(var000D == "no")) goto labelFunc0870_0094;
	return 0x0000;
	goto labelFunc0870_00A7;
labelFunc0870_0094:
	if (!(var000D == "yes")) goto labelFunc0870_00A7;
	var000E = 0x0000;
	goto labelFunc0870_00F6;
labelFunc0870_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0870_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0870_02D8;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0870_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0134;
	message("\"Thou art a shrewd bargainer, ");
	message(var0002);
	message(". I would be hard pressed to make a profit with such a price.\"");
	say();
labelFunc0870_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0148;
	message("\"");
	message(var0004);
	message(", thy skill at bargaining is excellent. I believe I have actually lost money in this deal.\"");
	say();
labelFunc0870_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0870_015C;
	message("\"Thy trading skills are very sharp, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0870_015C:
	goto labelFunc0870_0245;
labelFunc0870_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0870_01B4;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0189;
	message("\"Thou art lucky I am in such a good mood today, ");
	message(var0002);
	message("! 'Tis not often I lower my prices such...\"");
	say();
labelFunc0870_0189:
	if (!(var0011 == 0x0002)) goto labelFunc0870_019D;
	message("\"");
	message(var0004);
	message(", thou art a scoundrel! I would be penniless very soon if I bargained such a price more than a few times!\"");
	say();
labelFunc0870_019D:
	if (!(var0011 == 0x0003)) goto labelFunc0870_01B1;
	message("\"'Tis not often I practically give my goods away! Thou art a skilled trader, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0870_01B1:
	goto labelFunc0870_0245;
labelFunc0870_01B4:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0870_0209;
	if (!(var0011 == 0x0001)) goto labelFunc0870_01DE;
	message("\"My prices are just, ");
	message(var0002);
	message(". Thou shouldst travel to Fawn if thou dost believe mine steep.\"");
	say();
labelFunc0870_01DE:
	if (!(var0011 == 0x0002)) goto labelFunc0870_01F2;
	message("\"'Tis a pleasure to trade with thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0870_01F2:
	if (!(var0011 == 0x0003)) goto labelFunc0870_0206;
	message("\"");
	message(var0004);
	message(", I shall remember thee! Please come to my shop whenever thou art in Monitor!\"");
	say();
labelFunc0870_0206:
	goto labelFunc0870_0245;
labelFunc0870_0209:
	if (!(var0011 == 0x0001)) goto labelFunc0870_021D;
	message("\"");
	message(var0004);
	message(", thou hast my gratitude!\"");
	say();
labelFunc0870_021D:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0231;
	message("\"A blessing upon thee, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0870_0231:
	if (!(var0011 == 0x0003)) goto labelFunc0870_0245;
	message("\"My prices are steep, ");
	message(var0002);
	message(", for supplies are very scarce due to the Goblin raids.\"");
	say();
labelFunc0870_0245:
	message("\"Thou hast agreed to a price of ");
	message(var0005);
	message(" guilders, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0870_027A;
	if (!(var000C > 0x0001)) goto labelFunc0870_0273;
	UI_set_npc_id(0xFFE0, (var000C - 0x0002));
labelFunc0870_0273:
	return var0005;
	goto labelFunc0870_02D8;
labelFunc0870_027A:
	if (!(var0011 == 0x0001)) goto labelFunc0870_0288;
	message("\"Thou shouldst not argue with me only to change thy mind when we have agreed to a firm price!\"");
	say();
labelFunc0870_0288:
	if (!(var0011 == 0x0002)) goto labelFunc0870_029C;
	message("\"What of our bargain? Thou hast disappointed me, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0870_029C:
	if (!(var0011 == 0x0003)) goto labelFunc0870_02AB;
	message("\"This is not honorable! I do not have time to play games with thee! Begone!\"");
	say();
	abort;
labelFunc0870_02AB:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0870_02C6;
	UI_set_npc_id(0xFFE0, 0x001F);
	goto labelFunc0870_02D4;
labelFunc0870_02C6:
	UI_set_npc_id(0xFFE0, (var000C + 0x000A));
labelFunc0870_02D4:
	return 0x0000;
labelFunc0870_02D8:
	if (!(var0008 == 0x0001)) goto labelFunc0870_0346;
	if (!(var000E == 0x0005)) goto labelFunc0870_0321;
	message("\"I said that ");
	message(var0005);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0870_030E;
	UI_set_npc_id(0xFFE0, (var000C + 0x0004));
labelFunc0870_030E:
	if (!Func0955()) goto labelFunc0870_0318;
	return var0005;
labelFunc0870_0318:
	var0009 = 0x0000;
	goto labelFunc0870_0343;
labelFunc0870_0321:
	message("\"");
	message(var0005);
	message(" guilders is my final offer.\"");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0870_0343;
	UI_set_npc_id(0xFFE0, (var000C + 0x0002));
labelFunc0870_0343:
	goto labelFunc0870_0496;
labelFunc0870_0346:
	if (!(var000E == 0x0002)) goto labelFunc0870_039E;
	if (!(var0011 == 0x0001)) goto labelFunc0870_036A;
	message("\"'Tis a pleasure to trade with thee, ");
	message(var0002);
	message(". How doth ");
	message(var0005);
	message(" guilders sound?\"");
	say();
labelFunc0870_036A:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0384;
	message("\"");
	message(var0004);
	message(", only for thee I will give a special price. How doth ");
	message(var0005);
	message(" guilders sound to thee?\"");
	say();
labelFunc0870_0384:
	if (!(var0011 == 0x0003)) goto labelFunc0870_039E;
	message("\"My price is ");
	message(var0005);
	message(" guilders, ");
	message(var0002);
	message(". Dost thou accept?\"");
	say();
labelFunc0870_039E:
	if (!(var000E == 0x0003)) goto labelFunc0870_03E4;
	if (!(var0011 == 0x0001)) goto labelFunc0870_03BC;
	message("\"I am not sure. Wouldst thou consider ");
	message(var0005);
	message(" guilders?\"");
	say();
labelFunc0870_03BC:
	if (!(var0011 == 0x0002)) goto labelFunc0870_03D0;
	message("\"Hmmm... I am not certain... ");
	message(var0005);
	message(" guilders?\"");
	say();
labelFunc0870_03D0:
	if (!(var0011 == 0x0003)) goto labelFunc0870_03E4;
	message("\"The cost of my goods hath increased. Perhaps ");
	message(var0005);
	message(" guilders?\"");
	say();
labelFunc0870_03E4:
	if (!(var000E == 0x0004)) goto labelFunc0870_042E;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0406;
	message("\"If I did not know better, I would believe thou dost jest with me. ");
	message(var0005);
	message(" guilders is as low as I can go.\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc0870_0406:
	if (!(var0011 == 0x0002)) goto labelFunc0870_041A;
	message("\"Even if the storms are driving away my customers, I still cannot accept less than ");
	message(var0005);
	message(" guilders.\"");
	say();
labelFunc0870_041A:
	if (!(var0011 == 0x0003)) goto labelFunc0870_042E;
	message("\"Thou dost think too highly of thyself, my friend. I can accept no less than ");
	message(var0005);
	message(" guilders.\"");
	say();
labelFunc0870_042E:
	if (!(var000E == 0x0005)) goto labelFunc0870_0496;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0870_0452;
	message("\"Thou art touched by the storms if thou dost think I would accept such a ridiculous offer! My previous price stands, at ");
	message(var0005);
	message(" guilders.\"");
	say();
labelFunc0870_0452:
	if (!(var0011 == 0x0002)) goto labelFunc0870_0466;
	message("\"I do not give my goods away! ");
	message(var0005);
	message(" guilders, and no less!\"");
	say();
labelFunc0870_0466:
	if (!(var0011 == 0x0003)) goto labelFunc0870_047E;
	message("\"I would rather belong to the Bear Command than accept such an offer!\"");
	say();
	message("\"");
	message(var0005);
	message(" guilders is as low as I will go!\"");
	say();
labelFunc0870_047E:
	if (!(var000C < 0x001F)) goto labelFunc0870_0496;
	UI_set_npc_id(0xFFE0, (var000C + 0x0001));
labelFunc0870_0496:
	goto labelFunc0870_006B;
labelFunc0870_0499:
	return 0;
}


