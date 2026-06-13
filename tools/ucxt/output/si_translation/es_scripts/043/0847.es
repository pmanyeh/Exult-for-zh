#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0847 0x847 (var var0000, var var0001)
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

	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	if (!var0003) goto labelFunc0847_001C;
	var0004 = "Milady";
	goto labelFunc0847_0022;
labelFunc0847_001C:
	var0004 = "Milord";
labelFunc0847_0022:
	if (!(gflags[0x0048] == true)) goto labelFunc0847_0076;
	if (!var0003) goto labelFunc0847_0039;
	var0004 = "Milady Knight";
	goto labelFunc0847_0076;
labelFunc0847_0039:
	var0005 = UI_die_roll(0x0001, 0x0003);
	if (!(var0005 == 0x0001)) goto labelFunc0847_0056;
	var0004 = "My brave knight";
labelFunc0847_0056:
	if (!(var0005 == 0x0002)) goto labelFunc0847_0066;
	var0004 = "My valiant knight";
labelFunc0847_0066:
	if (!(var0005 == 0x0003)) goto labelFunc0847_0076;
	var0004 = "My sweet knight";
labelFunc0847_0076:
	var0006 = var0000;
	var0007 = ((var0001 / 0x0003) * 0x0002);
	var0008 = (0x000F - (UI_get_npc_id(0xFFBA) / 0x0002));
	var0009 = 0x0000;
	var000A = 0x0001;
	var000B = 0x0000;
	var000C = 0x0002;
	var000D = UI_get_npc_id(0xFFBA);
labelFunc0847_00BE:
	if (!var000A) goto labelFunc0847_074B;
	var000E = Func0956(["yes", "no", "haggle"]);
	if (!(var000E == "no")) goto labelFunc0847_00E7;
	return 0x0000;
	goto labelFunc0847_00FA;
labelFunc0847_00E7:
	if (!(var000E == "yes")) goto labelFunc0847_00FA;
	var000F = 0x0000;
	goto labelFunc0847_0149;
labelFunc0847_00FA:
	var0010 = Func0999(var0006, var0001, var000C, var0007, var000B, var0008, var0009);
	var000B = (var000B + 0x0001);
	var0009 = var0010[0x0004];
	var000F = var0010[0x0003];
	var0011 = var0006;
	var0006 = var0010[0x0002];
	var0007 = var0010[0x0001];
labelFunc0847_0149:
	var0012 = UI_get_random(0x0003);
	if (!(var000F < 0x0002)) goto labelFunc0847_0464;
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0847_01E5;
	if (!var0003) goto labelFunc0847_01B2;
	if (!(var0012 == 0x0001)) goto labelFunc0847_018D;
	message("\"");
	message(var0004);
	message(", thou art very good at this... If I listened to thee much more, I would be penniless.\"");
	say();
labelFunc0847_018D:
	if (!(var0012 == 0x0002)) goto labelFunc0847_01A1;
	message("\"Thou dost bargain as well as any, ");
	message(var0002);
	message(". 'Tis truly a very low price I have agreed to!\"");
	say();
labelFunc0847_01A1:
	if (!(var0012 == 0x0003)) goto labelFunc0847_01AF;
	message("\"Oh, if I were better at this, perhaps I could make more monetari.\"");
	say();
labelFunc0847_01AF:
	goto labelFunc0847_01E2;
labelFunc0847_01B2:
	if (!(var0012 == 0x0001)) goto labelFunc0847_01C0;
	message("\"If thou dost bargain so well as to bring my price this low, perhaps thou art better at other things as well...\"");
	say();
labelFunc0847_01C0:
	if (!(var0012 == 0x0002)) goto labelFunc0847_01D4;
	message("\"");
	message(var0004);
	message(", thy words are very powerful... Perhaps thou dost wish to wrestle somewhat differently?\"");
	say();
labelFunc0847_01D4:
	if (!(var0012 == 0x0003)) goto labelFunc0847_01E2;
	message("\"Ah, my sweet... Thou hast a very quick wit to bargain me so low. Are other parts of thee as well-equipped as thy tongue?\"");
	say();
labelFunc0847_01E2:
	goto labelFunc0847_0384;
labelFunc0847_01E5:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0847_0277;
	if (!var0003) goto labelFunc0847_023A;
	if (!(var0012 == 0x0001)) goto labelFunc0847_020F;
	message("\"A low price, but thou hast bargained well, dost thou not think?\"");
	say();
labelFunc0847_020F:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0223;
	message("\"");
	message(var0004);
	message(", thou hast bargained fairly, but this is a very low price.\"");
	say();
labelFunc0847_0223:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0237;
	message("\"A bit lower than I had hoped, ");
	message(var0002);
	message(", but 'twill do.\"");
	say();
labelFunc0847_0237:
	goto labelFunc0847_0274;
labelFunc0847_023A:
	if (!(var0012 == 0x0001)) goto labelFunc0847_024E;
	message("\"");
	message(var0004);
	message(", thou art getting a very good value for thy monetari, even if thy clever tongue did lower my price...\"");
	say();
labelFunc0847_024E:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0262;
	message("\"'Tis not often a man gets the better of me! Thou shouldst enjoy thyself, ");
	message(var0002);
	message(", taking advantage of a poor girl so...\"");
	say();
labelFunc0847_0262:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0274;
	message("\"Oooh...\"");
	say();
	message("\"Thou didst certainly haggle a good price from me! Thou art naughty...\"");
	say();
labelFunc0847_0274:
	goto labelFunc0847_0384;
labelFunc0847_0277:
	if (!(var0006 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0847_0309;
	if (!var0003) goto labelFunc0847_02D2;
	if (!(var0012 == 0x0001)) goto labelFunc0847_02A7;
	message("\"A fair enough price, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0847_02A7:
	if (!(var0012 == 0x0002)) goto labelFunc0847_02BB;
	message("\"It hath a been pleasure to trade with thee, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0847_02BB:
	if (!(var0012 == 0x0003)) goto labelFunc0847_02CF;
	message("\"Thou hast made a good bargain, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0847_02CF:
	goto labelFunc0847_0306;
labelFunc0847_02D2:
	if (!(var0012 == 0x0001)) goto labelFunc0847_02EA;
	message("\"Oooh...\"");
	say();
	message("\"Thou hast given me goose bumps, ");
	message(var0002);
	message(". Perhaps thou wilt spend more?\"");
	say();
labelFunc0847_02EA:
	if (!(var0012 == 0x0002)) goto labelFunc0847_02F8;
	message("\"It hath been a pleasure trading with thee! Most men would try to take advantage of my sweet nature and lower my price even further!\"");
	say();
labelFunc0847_02F8:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0306;
	message("\"Ah, my sweet, thou dost know how to make a girl feel well-liked!\"");
	say();
labelFunc0847_0306:
	goto labelFunc0847_0384;
labelFunc0847_0309:
	if (!var0003) goto labelFunc0847_034E;
	if (!(var0012 == 0x0001)) goto labelFunc0847_0323;
	message("\"");
	message(var0004);
	message(", thou mayest buy from me anytime!\"");
	say();
labelFunc0847_0323:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0337;
	message("\"Thou art most generous to offer such a price, ");
	message(var0002);
	message("!\"");
	say();
labelFunc0847_0337:
	if (!(var0012 == 0x0003)) goto labelFunc0847_034B;
	message("\"Enjoy thy stay in Monitor, ");
	message(var0002);
	message(". Thou art most welcome at The Slashing Blade!\"");
	say();
labelFunc0847_034B:
	goto labelFunc0847_0384;
labelFunc0847_034E:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0362;
	message("\"");
	message(var0004);
	message(", thou hast made me cry! 'Tis most generous of thee!\"");
	say();
labelFunc0847_0362:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0376;
	message("\"Dost thou give all of thy money to other girls too, ");
	message(var0002);
	message(", or only to me?\"");
	say();
labelFunc0847_0376:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0384;
	message("\"'Tis sweet of thee to agree to this price, love...\"");
	say();
labelFunc0847_0384:
	if (!var0003) goto labelFunc0847_039D;
	message("\"Thou hast agreed to a price of ");
	message(var0006);
	message(" monetari, ");
	message(var0002);
	message("?\"");
	say();
	goto labelFunc0847_03A7;
labelFunc0847_039D:
	message("\"So, handsome, thou hast agreed to ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_03A7:
	if (!Func0955()) goto labelFunc0847_03CC;
	if (!(var000D > 0x0001)) goto labelFunc0847_03C5;
	UI_set_npc_id(0xFFBA, (var000D - 0x0002));
labelFunc0847_03C5:
	return var0006;
	goto labelFunc0847_0464;
labelFunc0847_03CC:
	if (!var0003) goto labelFunc0847_0405;
	if (!(var0012 == 0x0001)) goto labelFunc0847_03E0;
	message("\"Thou art a vindictive woman to argue with me and then change thy mind out of spite!\"");
	say();
labelFunc0847_03E0:
	if (!(var0012 == 0x0002)) goto labelFunc0847_03F3;
	message("\"We in Monitor do not forget those who cross us!\"");
	say();
	message("\"I do not think I shall be thy friend unless thou dost acquire better manners!\"");
	say();
	abort;
labelFunc0847_03F3:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0402;
	message("\"Art thou jealous of me to change thy mind so? If so, I am not amused!\"");
	say();
	abort;
labelFunc0847_0402:
	goto labelFunc0847_0437;
labelFunc0847_0405:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0414;
	message("\"Oooh! Thou dost infuriate me! Just like a man to lead a poor girl on so!\"");
	say();
	abort;
labelFunc0847_0414:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0423;
	message("\"Do not think that I am fooled by thine handsome features! Thou art merely a mean- spirited man, the same as any other!\"");
	say();
	abort;
labelFunc0847_0423:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0437;
	message("\"");
	message(var0004);
	message(", what of our bargain?! Dost thou think to take advantage of me?\"");
	say();
labelFunc0847_0437:
	if (!(0x001F < (var000D + 0x000A))) goto labelFunc0847_0452;
	UI_set_npc_id(0xFFBA, 0x001F);
	goto labelFunc0847_0460;
labelFunc0847_0452:
	UI_set_npc_id(0xFFBA, (var000D + 0x000A));
labelFunc0847_0460:
	return 0x0000;
labelFunc0847_0464:
	if (!(var0009 == 0x0001)) goto labelFunc0847_04D2;
	if (!(var000F == 0x0005)) goto labelFunc0847_04AD;
	message("\"I said that ");
	message(var0006);
	message(" was my final offer. Dost thou accept?\"");
	say();
	if (!(var000D < 0x001C)) goto labelFunc0847_049A;
	UI_set_npc_id(0xFFBA, (var000D + 0x0004));
labelFunc0847_049A:
	if (!Func0955()) goto labelFunc0847_04A4;
	return var0006;
labelFunc0847_04A4:
	var000A = 0x0000;
	goto labelFunc0847_04CF;
labelFunc0847_04AD:
	message("\"");
	message(var0006);
	message(" monetari is my final offer.\"");
	say();
	if (!(var000D < 0x001E)) goto labelFunc0847_04CF;
	UI_set_npc_id(0xFFBA, (var000D + 0x0002));
labelFunc0847_04CF:
	goto labelFunc0847_0748;
labelFunc0847_04D2:
	if (!(var000F == 0x0002)) goto labelFunc0847_056F;
	if (!var0003) goto labelFunc0847_052D;
	if (!(var0012 == 0x0001)) goto labelFunc0847_04FC;
	message("\"'Tis a pleasure to barter with thee, ");
	message(var0002);
	message(". ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_04FC:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0516;
	message("\"");
	message(var0004);
	message(", we are both women and know good prices when we see them. How doth ");
	message(var0006);
	message(" monetari sound to thee?\"");
	say();
labelFunc0847_0516:
	if (!(var0012 == 0x0003)) goto labelFunc0847_052A;
	message("\"As one woman to another, wouldst thou consider ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_052A:
	goto labelFunc0847_056F;
labelFunc0847_052D:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0541;
	message("\"Sweetie, thou art a pleasure to trade with... How doth ");
	message(var0006);
	message(" monetari sound?\"");
	say();
labelFunc0847_0541:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0555;
	message("\"Well, handsome, how doth ");
	message(var0006);
	message(" monetari sound to thee?\"");
	say();
labelFunc0847_0555:
	if (!(var0012 == 0x0003)) goto labelFunc0847_056F;
	message("\"");
	message(var0004);
	message(", thou hast offered a goodly price... Wouldst thou pay ");
	message(var0006);
	message(" monetari instead?\"");
	say();
labelFunc0847_056F:
	if (!(var000F == 0x0003)) goto labelFunc0847_0604;
	if (!var0003) goto labelFunc0847_05BE;
	if (!(var0012 == 0x0001)) goto labelFunc0847_0593;
	message("\"I am not quite certain, though 'tis not a bad offer. I would ask ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_0593:
	if (!(var0012 == 0x0002)) goto labelFunc0847_05A7;
	message("\"I need to make some profit... How doth ");
	message(var0006);
	message(" monetari sound to thee?\"");
	say();
labelFunc0847_05A7:
	if (!(var0012 == 0x0003)) goto labelFunc0847_05BB;
	message("\"Thou dost understand better than men how we women make less in our dealings... Perhaps ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_05BB:
	goto labelFunc0847_0604;
labelFunc0847_05BE:
	if (!(var0012 == 0x0001)) goto labelFunc0847_05D2;
	message("\"Well, my sweet, 'tis not the highest amount thou couldst offer a girl. Perhaps ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_05D2:
	if (!(var0012 == 0x0002)) goto labelFunc0847_05E6;
	message("\"Certainly mine handsome warrior could offer a better price than that! How doth ");
	message(var0006);
	message(" monetari sound to thee?\"");
	say();
labelFunc0847_05E6:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0604;
	message("\"");
	message(var0004);
	message(", how thy muscles do bulge! Thou art certainly the stongest man in Monitor...\"");
	say();
	message("\"Perhaps thou wilt agree to ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_0604:
	if (!(var000F == 0x0004)) goto labelFunc0847_0697;
	if (!var0003) goto labelFunc0847_0653;
	if (!(var0012 == 0x0001)) goto labelFunc0847_0628;
	message("\"What sort of offer is this?! How doth ");
	message(var0006);
	message(" monetari sound to thy shrewish ears?\"");
	say();
labelFunc0847_0628:
	if (!(var0012 == 0x0002)) goto labelFunc0847_063C;
	message("\"Thou dost not offer more than a selfish man would! ");
	message(var0006);
	message(" monetari?\"");
	say();
labelFunc0847_063C:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0650;
	message("\"Thou art a very deceptive female! And I thought thou wert better than most! I can offer no less than ");
	message(var0006);
	message(" monetari.\"");
	say();
labelFunc0847_0650:
	goto labelFunc0847_0697;
labelFunc0847_0653:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0667;
	message("\"Certainly, thou wouldst not offer such a low price to me... How doth ");
	message(var0006);
	message(" monetari sound to thee?\"");
	say();
labelFunc0847_0667:
	if (!(var0012 == 0x0002)) goto labelFunc0847_067F;
	message("\"And I thought thou wert different than the other men in Monitor! This is not an acceptable price. ");
	message(var0006);
	message(" monetari is what I offer thee.\"");
	say();
	message("\"What dost thou say?\"");
	say();
labelFunc0847_067F:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0697;
	message("\"Didst thou think thou couldst sweet-talk me like any simple country girl and convince me to lower my price?\"");
	say();
	message("\"I want no fewer than ");
	message(var0006);
	message(" monetari. What dost thou think?\"");
	say();
labelFunc0847_0697:
	if (!(var000F == 0x0005)) goto labelFunc0847_0748;
	var0006 = var0011;
	if (!var0003) goto labelFunc0847_06F0;
	if (!(var0012 == 0x0001)) goto labelFunc0847_06C1;
	message("\"Thou art most ungenerous! My previous price stands, at ");
	message(var0006);
	message(" monetari.\"");
	say();
labelFunc0847_06C1:
	if (!(var0012 == 0x0002)) goto labelFunc0847_06D5;
	message("\"Spiteful wench! I offer ");
	message(var0006);
	message(" monetari, and no less!\"");
	say();
labelFunc0847_06D5:
	if (!(var0012 == 0x0003)) goto labelFunc0847_06ED;
	message("\"I cannot accept such an offer!\"");
	say();
	message("\"I stand at my price of ");
	message(var0006);
	message(" monetari, and no lower!\"");
	say();
labelFunc0847_06ED:
	goto labelFunc0847_0730;
labelFunc0847_06F0:
	if (!(var0012 == 0x0001)) goto labelFunc0847_0704;
	message("\"Hmmpf! Just like a man to offer a ridiculous price! Well, I am no simpleton to accept such! My previous price stands, at ");
	message(var0006);
	message(" monetari.\"");
	say();
labelFunc0847_0704:
	if (!(var0012 == 0x0002)) goto labelFunc0847_0718;
	message("\"I would not accept such a price even if thou wert the most handsome man in Monitor! I want ");
	message(var0006);
	message(" monetari, and no less!\"");
	say();
labelFunc0847_0718:
	if (!(var0012 == 0x0003)) goto labelFunc0847_0730;
	message("\"Ugh! Thou hast the manners of a man -- if not a goblin, to offer a girl such a pitiful sum!\"");
	say();
	message("\"I will make this very clear -- ");
	message(var0006);
	message(" monetari is as low as I will go!\"");
	say();
labelFunc0847_0730:
	if (!(var000D < 0x001F)) goto labelFunc0847_0748;
	UI_set_npc_id(0xFFBA, (var000D + 0x0001));
labelFunc0847_0748:
	goto labelFunc0847_00BE;
labelFunc0847_074B:
	return 0;
}


