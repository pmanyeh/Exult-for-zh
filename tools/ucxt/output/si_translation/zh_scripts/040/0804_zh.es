#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0804 0x804 (var var0000, var var0001)
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
	if (!UI_is_pc_female()) goto labelFunc0804_001D;
	var0004 = "Milady";
	goto labelFunc0804_0023;
labelFunc0804_001D:
	var0004 = "Milord";
labelFunc0804_0023:
	var0005 = var0000;
	var0006 = ((var0001 / 0x0003) * 0x0002);
	var0007 = (0x000F - (UI_get_npc_id(0xFFD2) / 0x0002));
	var0008 = 0x0000;
	var0009 = 0x0001;
	var000A = 0x0000;
	var000B = 0x0001;
	var000C = UI_get_npc_id(0xFFD2);
labelFunc0804_006B:
	if (!var0009) goto labelFunc0804_0486;
	var000D = Func0956(["yes", "no", "haggle"]);
	if (!(var000D == "no")) goto labelFunc0804_0094;
	return 0x0000;
	goto labelFunc0804_00A7;
labelFunc0804_0094:
	if (!(var000D == "yes")) goto labelFunc0804_00A7;
	var000E = 0x0000;
	goto labelFunc0804_00F6;
labelFunc0804_00A7:
	var000F = Func0999(var0005, var0001, var000B, var0006, var000A, var0007, var0008);
	var000A = (var000A + 0x0001);
	var0008 = var000F[0x0004];
	var000E = var000F[0x0003];
	var0010 = var0005;
	var0005 = var000F[0x0002];
	var0006 = var000F[0x0001];
labelFunc0804_00F6:
	var0011 = UI_get_random(0x0003);
	if (!(var000E < 0x0002)) goto labelFunc0804_02BF;
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0804_015F;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0134;
	message("\"Thou art a shrewd bargainer, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0804_0134:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0148;
	message("\"");
	message(var0004);
	message(", Father would blush if he learned I had sold our goods to thee at such a price...\"");
	say();
labelFunc0804_0148:
	if (!(var0011 == 0x0003)) goto labelFunc0804_015C;
	message("\"Thou hast a quick tongue, ");
	message(var0002);
	message(", to bring me to this price.\"");
	say();
labelFunc0804_015C:
	goto labelFunc0804_022D;
labelFunc0804_015F:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0804_01A8;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0183;
	message("\"Our prices are fair here.\"");
	say();
labelFunc0804_0183:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0197;
	message("\"");
	message(var0004);
	message(", Father would not believe I had sold goods at this price!\"");
	say();
labelFunc0804_0197:
	if (!(var0011 == 0x0003)) goto labelFunc0804_01A5;
	message("\"Father must make some profit!\"");
	say();
labelFunc0804_01A5:
	goto labelFunc0804_022D;
labelFunc0804_01A8:
	if (!(var0005 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0804_01F7;
	if (!(var0011 == 0x0001)) goto labelFunc0804_01D2;
	message("\"Thou couldst not obtain a better deal from Father, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0804_01D2:
	if (!(var0011 == 0x0002)) goto labelFunc0804_01E6;
	message("\"Father enjoys bargaining much more than I, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0804_01E6:
	if (!(var0011 == 0x0003)) goto labelFunc0804_01F4;
	message("\"I am sure Father would be pleased with this price.\"");
	say();
labelFunc0804_01F4:
	goto labelFunc0804_022D;
labelFunc0804_01F7:
	if (!(var0011 == 0x0001)) goto labelFunc0804_020B;
	message("\"This is a good price ");
	message(var0002);
	message(". I am sure Father will be pleased.\"");
	say();
labelFunc0804_020B:
	if (!(var0011 == 0x0002)) goto labelFunc0804_021F;
	message("\"");
	message(var0004);
	message(", I am sure Father will be happy with this price.\"");
	say();
labelFunc0804_021F:
	if (!(var0011 == 0x0003)) goto labelFunc0804_022D;
	message("\"Father must charge reasonably high prices or we will be made paupers!\"");
	say();
labelFunc0804_022D:
	message("\"Thou dost agree to a price of ");
	message(var0005);
	message(" filari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0804_0262;
	if (!(var000C > 0x0001)) goto labelFunc0804_025B;
	UI_set_npc_id(0xFFD2, (var000C - 0x0002));
labelFunc0804_025B:
	return var0005;
	goto labelFunc0804_02BF;
labelFunc0804_0262:
	if (!(var0011 == 0x0001)) goto labelFunc0804_0276;
	message("\"");
	message(var0004);
	message(", thou hast broken our agreement!\"");
	say();
labelFunc0804_0276:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0284;
	message("\"I am disappointed. What of our bargain?\"");
	say();
labelFunc0804_0284:
	if (!(var0011 == 0x0003)) goto labelFunc0804_0292;
	message("\"Father will be most upset to learn of this...\"");
	say();
labelFunc0804_0292:
	if (!(0x001F < (var000C + 0x000A))) goto labelFunc0804_02AD;
	UI_set_npc_id(0xFFD2, 0x001F);
	goto labelFunc0804_02BB;
labelFunc0804_02AD:
	UI_set_npc_id(0xFFD2, (var000C + 0x000A));
labelFunc0804_02BB:
	return 0x0000;
labelFunc0804_02BF:
	if (!(var0008 == 0x0001)) goto labelFunc0804_032D;
	if (!(var000E == 0x0005)) goto labelFunc0804_0308;
	message("\"");
	message(var0005);
	message(" is my final offer. Dost thou accept?\"");
	say();
	if (!(var000C < 0x001C)) goto labelFunc0804_02F5;
	UI_set_npc_id(0xFFD2, (var000C + 0x0004));
labelFunc0804_02F5:
	if (!Func0955()) goto labelFunc0804_02FF;
	return var0005;
labelFunc0804_02FF:
	var0009 = 0x0000;
	goto labelFunc0804_032A;
labelFunc0804_0308:
	message("\"So be it. ");
	message(var0005);
	message(" filari is my final offer.\"");
	say();
	if (!(var000C < 0x001E)) goto labelFunc0804_032A;
	UI_set_npc_id(0xFFD2, (var000C + 0x0002));
labelFunc0804_032A:
	goto labelFunc0804_0483;
labelFunc0804_032D:
	if (!(var000E == 0x0002)) goto labelFunc0804_037F;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0351;
	message("\"Father would be pleased to bargain with thee, ");
	message(var0002);
	message(". How doth ");
	message(var0005);
	message(" filari sound?\"");
	say();
labelFunc0804_0351:
	if (!(var0011 == 0x0002)) goto labelFunc0804_036B;
	message("\"");
	message(var0004);
	message(", have we agreed on ");
	message(var0005);
	message(" filari?\"");
	say();
labelFunc0804_036B:
	if (!(var0011 == 0x0003)) goto labelFunc0804_037F;
	message("\"My price is ");
	message(var0005);
	message(" filari. Dost thou accept?\"");
	say();
labelFunc0804_037F:
	if (!(var000E == 0x0003)) goto labelFunc0804_03C5;
	if (!(var0011 == 0x0001)) goto labelFunc0804_039D;
	message("\"Father would say that these are trying times, and goods are scarce... Wouldst thou consider ");
	message(var0005);
	message(" filari?\"");
	say();
labelFunc0804_039D:
	if (!(var0011 == 0x0002)) goto labelFunc0804_03B1;
	message("\"I am not sure... Wouldst thou consider ");
	message(var0005);
	message(" filari?\"");
	say();
labelFunc0804_03B1:
	if (!(var0011 == 0x0003)) goto labelFunc0804_03C5;
	message("\"Father would not accept such a price! Wouldst thou consider ");
	message(var0005);
	message(" filari?\"");
	say();
labelFunc0804_03C5:
	if (!(var000E == 0x0004)) goto labelFunc0804_0415;
	if (!(var0011 == 0x0001)) goto labelFunc0804_03E7;
	message("\"I cannot possibly accept less than ");
	message(var0005);
	message(" filari!\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc0804_03E7:
	if (!(var0011 == 0x0002)) goto labelFunc0804_03FB;
	message("\"Father's costs are soaring! I\tcan go no lower than ");
	message(var0005);
	message(" filari.\"");
	say();
labelFunc0804_03FB:
	if (!(var0011 == 0x0003)) goto labelFunc0804_0415;
	message("\"");
	message(var0004);
	message(", thou art sweet, but Father deserves no less than ");
	message(var0005);
	message(" filari.\"");
	say();
labelFunc0804_0415:
	if (!(var000E == 0x0005)) goto labelFunc0804_0483;
	var0005 = var0010;
	if (!(var0011 == 0x0001)) goto labelFunc0804_0439;
	message("\"Father would be stricken if he learned I had accepted such a pitiful offer! My previous price stands, at ");
	message(var0005);
	message(" filari.\"");
	say();
labelFunc0804_0439:
	if (!(var0011 == 0x0002)) goto labelFunc0804_0453;
	message("\"I may be new to trading, ");
	message(var0002);
	message(", but this offer is shameful! ");
	message(var0005);
	message(" filari, and no less!\"");
	say();
labelFunc0804_0453:
	if (!(var0011 == 0x0003)) goto labelFunc0804_046B;
	message("\"I am certain Father would not approve of such a deal.\"");
	say();
	message("\"");
	message(var0005);
	message(" filari is where I stand.\"");
	say();
labelFunc0804_046B:
	if (!(var000C < 0x001F)) goto labelFunc0804_0483;
	UI_set_npc_id(0xFFD2, (var000C + 0x0001));
labelFunc0804_0483:
	goto labelFunc0804_006B;
labelFunc0804_0486:
	return 0;
}


