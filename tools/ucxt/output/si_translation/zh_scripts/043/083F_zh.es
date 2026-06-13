#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern var Func0942 0x942 (var var0000);

var Func083F 0x83F (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = var0000;
	var0004 = ((var0001 / 0x0003) * 0x0002);
	var0005 = (0x000F - (UI_get_npc_id(0xFFCC) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0xFFCC);
labelFunc083F_004E:
	if (!var0007) goto labelFunc083F_045A;
	var000B = Func0956(["yes", "no", "haggle"]);
	if (!(var000B == "no")) goto labelFunc083F_0077;
	return 0x0000;
	goto labelFunc083F_008A;
labelFunc083F_0077:
	if (!(var000B == "yes")) goto labelFunc083F_008A;
	var000C = 0x0000;
	goto labelFunc083F_00D9;
labelFunc083F_008A:
	var000D = Func0999(var0003, var0001, var0009, var0004, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0003;
	var0003 = var000D[0x0002];
	var0004 = var000D[0x0001];
labelFunc083F_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc083F_0284;
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc083F_0136;
	if (!(var000F == 0x0001)) goto labelFunc083F_0111;
	message("\"Shh! Don't let Olon hear what price thou didst pay. He would never let me hear the last of it!\"");
	say();
labelFunc083F_0111:
	if (!(var000F == 0x0002)) goto labelFunc083F_0125;
	message("\"Thou dost drive a hard bargain, ");
	message(var0002);
	message(". I should sell the inn an' become one o' them monks!\"");
	say();
labelFunc083F_0125:
	if (!(var000F == 0x0003)) goto labelFunc083F_0133;
	message("\"Out-bargained by a stranger! What be next, a goblin?\"");
	say();
labelFunc083F_0133:
	goto labelFunc083F_01F8;
labelFunc083F_0136:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc083F_0179;
	if (!(var000F == 0x0001)) goto labelFunc083F_015A;
	message("\"Fairest prices thou wilt find hereabouts...\"");
	say();
labelFunc083F_015A:
	if (!(var000F == 0x0002)) goto labelFunc083F_0168;
	message("\"I must be going slack-witted, ta offer thee a price like this!\"");
	say();
labelFunc083F_0168:
	if (!(var000F == 0x0003)) goto labelFunc083F_0176;
	message("\"Art thou sure thou art not a wizard... Ta talk me into a price such as this?\"");
	say();
labelFunc083F_0176:
	goto labelFunc083F_01F8;
labelFunc083F_0179:
	if (!(var0003 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc083F_01C2;
	if (!(var000F == 0x0001)) goto labelFunc083F_019D;
	message("\"Not bad... Not bad at all.\"");
	say();
labelFunc083F_019D:
	if (!(var000F == 0x0002)) goto labelFunc083F_01AB;
	message("\"If this is the best I can get, I had best take it.\"");
	say();
labelFunc083F_01AB:
	if (!(var000F == 0x0003)) goto labelFunc083F_01BF;
	message("\"Remember me, if thou dost need anythin' more, ");
	message(var0002);
	message(".\"");
	say();
labelFunc083F_01BF:
	goto labelFunc083F_01F8;
labelFunc083F_01C2:
	if (!(var000F == 0x0001)) goto labelFunc083F_01D6;
	message("\"Not a bad piece of business, ");
	message(var0002);
	message(".\"");
	say();
labelFunc083F_01D6:
	if (!(var000F == 0x0002)) goto labelFunc083F_01E4;
	message("\"Thou art tough... like an ol' sailor!\"");
	say();
labelFunc083F_01E4:
	if (!(var000F == 0x0003)) goto labelFunc083F_01F8;
	message("\"I wish things were better, ");
	message(var0002);
	message(". Thou wouldst find me prices fairer, ta be sure.\"");
	say();
labelFunc083F_01F8:
	message("\"Dost thou agree ta a price of ");
	message(var0003);
	message(" filari, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc083F_022D;
	if (!(var000A > 0x0001)) goto labelFunc083F_0226;
	UI_set_npc_id(0xFFCC, (var000A - 0x0002));
labelFunc083F_0226:
	return var0003;
	goto labelFunc083F_0284;
labelFunc083F_022D:
	if (!(var000F == 0x0001)) goto labelFunc083F_023B;
	message("\"Hast thou forgotten already? We had an agreement!\"");
	say();
labelFunc083F_023B:
	if (!(var000F == 0x0002)) goto labelFunc083F_0249;
	message("\"Then be gone with thee -- I have no time ta play games.\"");
	say();
labelFunc083F_0249:
	if (!(var000F == 0x0003)) goto labelFunc083F_0257;
	message("\"Dost thou think me a fool, ta argue with me only ta change thy mind? I shall spread the word about thee in this town, wait and see!\"");
	say();
labelFunc083F_0257:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc083F_0272;
	UI_set_npc_id(0xFFCC, 0x001F);
	goto labelFunc083F_0280;
labelFunc083F_0272:
	UI_set_npc_id(0xFFCC, (var000A + 0x000A));
labelFunc083F_0280:
	return 0x0000;
labelFunc083F_0284:
	if (!(var0006 == 0x0001)) goto labelFunc083F_02F8;
	if (!(var000C == 0x0005)) goto labelFunc083F_02D3;
	message("\"Look, ");
	message(var0002);
	message(", I said that ");
	message(var0003);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000A < 0x001C)) goto labelFunc083F_02C0;
	UI_set_npc_id(0xFFCC, (var000A + 0x0004));
labelFunc083F_02C0:
	if (!Func0955()) goto labelFunc083F_02CA;
	return var0003;
labelFunc083F_02CA:
	var0007 = 0x0000;
	goto labelFunc083F_02F5;
labelFunc083F_02D3:
	message("\"Well... ");
	message(var0003);
	message(" filari is my final offer.\"");
	say();
	if (!(var000A < 0x001E)) goto labelFunc083F_02F5;
	UI_set_npc_id(0xFFCC, (var000A + 0x0002));
labelFunc083F_02F5:
	goto labelFunc083F_0457;
labelFunc083F_02F8:
	if (!(var000C == 0x0002)) goto labelFunc083F_033E;
	if (!(var000F == 0x0001)) goto labelFunc083F_0316;
	message("\"It pleases me ta do business with such a worthy soul. How does ");
	message(var0003);
	message(" filari sound?\"");
	say();
labelFunc083F_0316:
	if (!(var000F == 0x0002)) goto labelFunc083F_032A;
	message("\"May the Beauty bless thee, friend. So, have we agreed on ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc083F_032A:
	if (!(var000F == 0x0003)) goto labelFunc083F_033E;
	message("\"My price is ");
	message(var0003);
	message(" filari -- A price I would never offer strangers. Dost thou accept?\"");
	say();
labelFunc083F_033E:
	if (!(var000C == 0x0003)) goto labelFunc083F_0384;
	if (!(var000F == 0x0001)) goto labelFunc083F_035C;
	message("\"I have few customers left these days... ");
	message(var0003);
	message(" filari?\"");
	say();
labelFunc083F_035C:
	if (!(var000F == 0x0002)) goto labelFunc083F_0370;
	message("\"Wouldst thou pay ");
	message(var0003);
	message("?\"");
	say();
labelFunc083F_0370:
	if (!(var000F == 0x0003)) goto labelFunc083F_0384;
	message("\"Perhaps ");
	message(var0003);
	message(" filari? Thou wilt find no better...\"");
	say();
labelFunc083F_0384:
	if (!(var000C == 0x0004)) goto labelFunc083F_03CA;
	if (!(var000F == 0x0001)) goto labelFunc083F_03A2;
	message("\"I will take no less than ");
	message(var0003);
	message(". How doth that suit thee?\"");
	say();
labelFunc083F_03A2:
	if (!(var000F == 0x0002)) goto labelFunc083F_03B6;
	message("I have no supplies coming, with these storms. ");
	message(var0003);
	message(" filari, no less.\"");
	say();
labelFunc083F_03B6:
	if (!(var000F == 0x0003)) goto labelFunc083F_03CA;
	message("\"Sharper folks than thee have tried ta cheat me! ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc083F_03CA:
	if (!(var000C == 0x0005)) goto labelFunc083F_0457;
	var0003 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc083F_03EE;
	message("\"I would rather be eaten by rats than accept such a pitiful offer. My previous price stands, at ");
	message(var0003);
	message(" filari.\"");
	say();
labelFunc083F_03EE:
	if (!(var000F == 0x0002)) goto labelFunc083F_0402;
	message("\"What dost thou take me for? ");
	message(var0003);
	message(" filari, and no less!\"");
	say();
labelFunc083F_0402:
	if (!(var000F == 0x0003)) goto labelFunc083F_043F;
	message("\"Why, if I accepted such a price as this, I may as well sell the inn ta Olon!\"");
	say();
	if (!Func0942(0xFFC6)) goto labelFunc083F_0435;
	UI_show_npc_face1(0xFFC6, 0x0000);
	message("\"Sounds good ta me!\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFCC, 0x0000);
labelFunc083F_0435:
	message("\"");
	message(var0003);
	message(" filari is where I stand.\"");
	say();
labelFunc083F_043F:
	if (!(var000A < 0x001F)) goto labelFunc083F_0457;
	UI_set_npc_id(0xFFCC, (var000A + 0x0001));
labelFunc083F_0457:
	goto labelFunc083F_004E;
labelFunc083F_045A:
	return 0;
}


