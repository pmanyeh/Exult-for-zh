#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0869 0x869 (var var0000, var var0001)
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

	var0002 = "friend";
	var0003 = UI_get_item_flag(0xFFB2, 0x001C);
	if (!(!var0003)) goto labelFunc0869_0020;
	var0002 = "stranger";
labelFunc0869_0020:
	var0004 = UI_is_pc_female();
	if (!UI_is_pc_female()) goto labelFunc0869_0037;
	var0005 = "Milady";
	goto labelFunc0869_003D;
labelFunc0869_0037:
	var0005 = "Milord";
labelFunc0869_003D:
	var0006 = var0000;
	var0007 = ((var0001 / 0x0003) * 0x0002);
	var0008 = (0x000F - (UI_get_npc_id(0xFFB2) / 0x0002));
	var0009 = 0x0000;
	var000A = 0x0001;
	var000B = 0x0000;
	var000C = 0x0002;
	var000D = UI_get_npc_id(0xFFB2);
labelFunc0869_0085:
	if (!var000A) goto labelFunc0869_04AF;
	var000E = Func0956(["yes", "no", "haggle"]);
	if (!(var000E == "no")) goto labelFunc0869_00AE;
	return 0x0000;
	goto labelFunc0869_00C1;
labelFunc0869_00AE:
	if (!(var000E == "yes")) goto labelFunc0869_00C1;
	var000F = 0x0000;
	goto labelFunc0869_0110;
labelFunc0869_00C1:
	var0010 = Func0999(var0006, var0001, var000C, var0007, var000B, var0008, var0009);
	var000B = (var000B + 0x0001);
	var0009 = var0010[0x0004];
	var000F = var0010[0x0003];
	var0011 = var0006;
	var0006 = var0010[0x0002];
	var0007 = var0010[0x0001];
labelFunc0869_0110:
	var0012 = UI_get_random(0x0003);
	if (!(var000F < 0x0002)) goto labelFunc0869_02F2;
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0869_0179;
	if (!(var0012 == 0x0001)) goto labelFunc0869_014E;
	message("\"Thou hast a good eye for a bargain, ");
	message(var0002);
	message(". I am thankful that more of my customers are not like thee.\"");
	say();
labelFunc0869_014E:
	if (!(var0012 == 0x0002)) goto labelFunc0869_0162;
	message("\"");
	message(var0005);
	message(", thou hast good bargaining sense. I fear I have actually lost money in this deal.\"");
	say();
labelFunc0869_0162:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0176;
	message("\"Thy trading skills are as sharp as one of my blades, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0869_0176:
	goto labelFunc0869_025F;
labelFunc0869_0179:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0869_01CE;
	if (!(var0012 == 0x0001)) goto labelFunc0869_01A3;
	message("\"Thou shouldst be glad that I like thee, ");
	message(var0002);
	message("! 'Tis not often I lower my prices...\"");
	say();
labelFunc0869_01A3:
	if (!(var0012 == 0x0002)) goto labelFunc0869_01B7;
	message("\"");
	message(var0005);
	message(", I hope thou dost leave town soon! If thou stayest much longer I will be penniless!\"");
	say();
labelFunc0869_01B7:
	if (!(var0012 == 0x0003)) goto labelFunc0869_01CB;
	message("\"I hope thou art as fine a warrior as thou art as a trader, ");
	message(var0002);
	message("! Thou wilt do my products honor.\"");
	say();
labelFunc0869_01CB:
	goto labelFunc0869_025F;
labelFunc0869_01CE:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0869_0223;
	if (!(var0012 == 0x0001)) goto labelFunc0869_01F8;
	message("\"Thou art paying for quality work, ");
	message(var0002);
	message(". If thou dost not agree, then thou shouldst leave.\"");
	say();
labelFunc0869_01F8:
	if (!(var0012 == 0x0002)) goto labelFunc0869_020C;
	message("\"'Tis not often I have such a challenge in bargaining, ");
	message(var0002);
	message(". Please come again!\"");
	say();
labelFunc0869_020C:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0220;
	message("\"");
	message(var0005);
	message(", remember that we take great pride in our work!\"");
	say();
labelFunc0869_0220:
	goto labelFunc0869_025F;
labelFunc0869_0223:
	if (!(var0012 == 0x0001)) goto labelFunc0869_0237;
	message("\"Many thanks, ");
	message(var0005);
	message("!\"");
	say();
labelFunc0869_0237:
	if (!(var0012 == 0x0002)) goto labelFunc0869_024B;
	message("\"May it serve thee well, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0869_024B:
	if (!(var0012 == 0x0003)) goto labelFunc0869_025F;
	message("\"I fear the Goblin raids have raised my prices, ");
	message(var0002);
	message(". It takes time to produce quality goods, and demand hath been great.\"");
	say();
labelFunc0869_025F:
	message("\"Thou hast agreed to a price of ");
	message(var0006);
	message(" monetari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc0869_0294;
	if (!(var000D > 0x0001)) goto labelFunc0869_028D;
	UI_set_npc_id(0xFFB2, (var000D - 0x0002));
labelFunc0869_028D:
	return var0006;
	goto labelFunc0869_02F2;
labelFunc0869_0294:
	if (!(var0012 == 0x0001)) goto labelFunc0869_02A2;
	message("\"'Tis unwise to change thy mind after agreeing to a firm price!\"");
	say();
labelFunc0869_02A2:
	if (!(var0012 == 0x0002)) goto labelFunc0869_02B6;
	message("\"Take care, ");
	message(var0002);
	message(". I am as skilled a warrior as I am a weaponsmith.\"");
	say();
labelFunc0869_02B6:
	if (!(var0012 == 0x0003)) goto labelFunc0869_02C5;
	message("\"Thou hast no honor! Leave, before I take thine head from thy shoulders!\"");
	say();
	abort;
labelFunc0869_02C5:
	if (!(0x001F < (var000D + 0x000A))) goto labelFunc0869_02E0;
	UI_set_npc_id(0xFFB2, 0x001F);
	goto labelFunc0869_02EE;
labelFunc0869_02E0:
	UI_set_npc_id(0xFFB2, (var000D + 0x000A));
labelFunc0869_02EE:
	return 0x0000;
labelFunc0869_02F2:
	if (!(var0009 == 0x0001)) goto labelFunc0869_0360;
	if (!(var000F == 0x0005)) goto labelFunc0869_033B;
	message("\"I said that ");
	message(var0006);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000D < 0x001C)) goto labelFunc0869_0328;
	UI_set_npc_id(0xFFB2, (var000D + 0x0004));
labelFunc0869_0328:
	if (!Func0955()) goto labelFunc0869_0332;
	return var0006;
labelFunc0869_0332:
	var000A = 0x0000;
	goto labelFunc0869_035D;
labelFunc0869_033B:
	message("\"");
	message(var0006);
	message(" monetari is my final offer.\"");
	say();
	if (!(var000D < 0x001E)) goto labelFunc0869_035D;
	UI_set_npc_id(0xFFB2, (var000D + 0x0002));
labelFunc0869_035D:
	goto labelFunc0869_04AC;
labelFunc0869_0360:
	if (!(var000F == 0x0002)) goto labelFunc0869_03B8;
	if (!(var0012 == 0x0001)) goto labelFunc0869_0384;
	message("\"'Tis a pleasure to trade with such an honorable person, ");
	message(var0002);
	message(". How doth ");
	message(var0006);
	message(" monetari sound?\"");
	say();
labelFunc0869_0384:
	if (!(var0012 == 0x0002)) goto labelFunc0869_039E;
	message("\"");
	message(var0005);
	message(", I shall offer thee a special price. How doth ");
	message(var0006);
	message(" monetari sound to thee?\"");
	say();
labelFunc0869_039E:
	if (!(var0012 == 0x0003)) goto labelFunc0869_03B8;
	message("\"My price is ");
	message(var0006);
	message(" monetari, ");
	message(var0002);
	message(". Wilt thou accept?\"");
	say();
labelFunc0869_03B8:
	if (!(var000F == 0x0003)) goto labelFunc0869_03FE;
	if (!(var0012 == 0x0001)) goto labelFunc0869_03D6;
	message("\"Let me think... Perhaps ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0869_03D6:
	if (!(var0012 == 0x0002)) goto labelFunc0869_03EA;
	message("\"I must reconsider... ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0869_03EA:
	if (!(var0012 == 0x0003)) goto labelFunc0869_03FE;
	message("\"Thou dost realize that I make only quality products. Perhaps ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0869_03FE:
	if (!(var000F == 0x0004)) goto labelFunc0869_0448;
	if (!(var0012 == 0x0001)) goto labelFunc0869_0420;
	message("\"");
	message(var0006);
	message(" monetari is as low as I can go. I must keep some honor for myself.\"");
	say();
	message("\"What dost thou say to this?\"");
	say();
labelFunc0869_0420:
	if (!(var0012 == 0x0002)) goto labelFunc0869_0434;
	message("\"I cannot accept less than ");
	message(var0006);
	message(" monetari. I have a business to run.\"");
	say();
labelFunc0869_0434:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0448;
	message("\"I can accept no less than ");
	message(var0006);
	message(" monetari. What would the townsfolk say?\"");
	say();
labelFunc0869_0448:
	if (!(var000F == 0x0005)) goto labelFunc0869_04AC;
	var0006 = var0011;
	if (!(var0012 == 0x0001)) goto labelFunc0869_046C;
	message("\"My previous price stands, at ");
	message(var0006);
	message(" monetari. I am no fool!\"");
	say();
labelFunc0869_046C:
	if (!(var0012 == 0x0002)) goto labelFunc0869_0480;
	message("\"I am not a charity! ");
	message(var0006);
	message(" monetari, and no less!\"");
	say();
labelFunc0869_0480:
	if (!(var0012 == 0x0003)) goto labelFunc0869_0494;
	message("\"\"");
	message(var0006);
	message(" monetari is as low as I will go! I must eat and pay for my supplies...\"");
	say();
labelFunc0869_0494:
	if (!(var000D < 0x001F)) goto labelFunc0869_04AC;
	UI_set_npc_id(0xFFB2, (var000D + 0x0001));
labelFunc0869_04AC:
	goto labelFunc0869_0085;
labelFunc0869_04AF:
	return 0;
}


