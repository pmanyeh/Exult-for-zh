#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func082E 0x82E (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = (0x000F - (UI_get_npc_id(0xFFAF) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFAF);
labelFunc082E_0048:
	if (!var0006) goto labelFunc082E_0411;
	var000A = Func0956(["yes", "no", "haggle"]);
	if (!(var000A == "no")) goto labelFunc082E_0071;
	return 0x0000;
	goto labelFunc082E_0084;
labelFunc082E_0071:
	if (!(var000A == "yes")) goto labelFunc082E_0084;
	var000B = 0x0000;
	goto labelFunc082E_00D3;
labelFunc082E_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc082E_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc082E_0268;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc082E_012A;
	if (!(var000E == 0x0001)) goto labelFunc082E_010B;
	message("\"Thou dost drive a hard bargain, indeed. But I must accept in order to be able to continue drinking...\"");
	say();
labelFunc082E_010B:
	if (!(var000E == 0x0002)) goto labelFunc082E_0119;
	message("\"'Twill hurt, but I have no choice but to accept it at this price.\"");
	say();
labelFunc082E_0119:
	if (!(var000E == 0x0003)) goto labelFunc082E_0127;
	message("\"I must be a fool for doing this, but I will accept thine offer. Please, do not tell anyone about this...\"");
	say();
labelFunc082E_0127:
	goto labelFunc082E_01E0;
labelFunc082E_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc082E_016D;
	if (!(var000E == 0x0001)) goto labelFunc082E_014E;
	message("\"One must have money to drink, eh? I will accept this price.\"");
	say();
labelFunc082E_014E:
	if (!(var000E == 0x0002)) goto labelFunc082E_015C;
	message("\"Thou dost bargain well, hero. I will accept this price.\"");
	say();
labelFunc082E_015C:
	if (!(var000E == 0x0003)) goto labelFunc082E_016A;
	message("\"Ummph. Thou art getting a good bargain with this price.\"");
	say();
labelFunc082E_016A:
	goto labelFunc082E_01E0;
labelFunc082E_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc082E_01B6;
	if (!(var000E == 0x0001)) goto labelFunc082E_0197;
	message("\"Only ");
	message(var0002);
	message("??! All right, all right... I will accept this price.\"");
	say();
labelFunc082E_0197:
	if (!(var000E == 0x0002)) goto labelFunc082E_01A5;
	message("\"A decent price.\"");
	say();
labelFunc082E_01A5:
	if (!(var000E == 0x0003)) goto labelFunc082E_01B3;
	message("\"One must make a living, must one not? I will accept this price.\"");
	say();
labelFunc082E_01B3:
	goto labelFunc082E_01E0;
labelFunc082E_01B6:
	if (!(var000E == 0x0001)) goto labelFunc082E_01C4;
	message("\"I accept thine offer!\"");
	say();
labelFunc082E_01C4:
	if (!(var000E == 0x0002)) goto labelFunc082E_01D2;
	message("\"I accept thine offer. And did I say how much of a pleasure it is doing business with thee?\"");
	say();
labelFunc082E_01D2:
	if (!(var000E == 0x0003)) goto labelFunc082E_01E0;
	message("\"Yes, a good price that is!\"");
	say();
labelFunc082E_01E0:
	message("\"So, have we agreed on the price of ");
	message(var0002);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc082E_0211;
	if (!(var0009 > 0x0001)) goto labelFunc082E_020A;
	UI_set_npc_id(0xFFAF, (var0009 - 0x0002));
labelFunc082E_020A:
	return var0002;
	goto labelFunc082E_0268;
labelFunc082E_0211:
	if (!(var000E == 0x0001)) goto labelFunc082E_021F;
	message("\"Thou didst do this for jest?!\"");
	say();
labelFunc082E_021F:
	if (!(var000E == 0x0002)) goto labelFunc082E_022D;
	message("\"I did not enjoy this waste of my time!\"");
	say();
labelFunc082E_022D:
	if (!(var000E == 0x0003)) goto labelFunc082E_023B;
	message("\"Do not expect me to be so courteous to thee next time!\"");
	say();
labelFunc082E_023B:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc082E_0256;
	UI_set_npc_id(0xFFAF, 0x001F);
	goto labelFunc082E_0264;
labelFunc082E_0256:
	UI_set_npc_id(0xFFAF, (var0009 + 0x000A));
labelFunc082E_0264:
	return 0x0000;
labelFunc082E_0268:
	if (!(var0005 == 0x0001)) goto labelFunc082E_02D8;
	if (!(var000B == 0x0005)) goto labelFunc082E_02B3;
	message("\"I said that ");
	message(var0002);
	message(" is my final offer. Dost thou want it at this price?\"");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc082E_029E;
	UI_set_npc_id(0xFFAF, (var0009 + 0x0004));
labelFunc082E_029E:
	if (!(Func0955() == true)) goto labelFunc082E_02AA;
	return var0002;
labelFunc082E_02AA:
	var0006 = 0x0000;
	goto labelFunc082E_02D5;
labelFunc082E_02B3:
	message("\"");
	message(var0002);
	message(" is my final offer.  I will go no lower.\"");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc082E_02D5;
	UI_set_npc_id(0xFFAF, (var0009 + 0x0002));
labelFunc082E_02D5:
	goto labelFunc082E_040E;
labelFunc082E_02D8:
	if (!(var000B == 0x0002)) goto labelFunc082E_031E;
	if (!(var000E == 0x0001)) goto labelFunc082E_02F6;
	message("\"Ahhh, I see thou hast a fine understanding of bartering. How does ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc082E_02F6:
	if (!(var000E == 0x0002)) goto labelFunc082E_030A;
	message("\"I see thou dost understand the value of this fine spell. How does ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc082E_030A:
	if (!(var000E == 0x0003)) goto labelFunc082E_031E;
	message("\"What a pleasure it is to deal with thee. I offer thee ");
	message(var0002);
	message(".\"");
	say();
labelFunc082E_031E:
	if (!(var000B == 0x0003)) goto labelFunc082E_0364;
	if (!(var000E == 0x0001)) goto labelFunc082E_033C;
	message("\"Hmmm.... Wouldst thou pay ");
	message(var0002);
	message("?\"");
	say();
labelFunc082E_033C:
	if (!(var000E == 0x0002)) goto labelFunc082E_0350;
	message("\"Thou dost drive a hard bargain. ");
	message(var0002);
	message("?\"");
	say();
labelFunc082E_0350:
	if (!(var000E == 0x0003)) goto labelFunc082E_0364;
	message("\"I must make a living, thou knowest. What dost thou say to ");
	message(var0002);
	message("?\"");
	say();
labelFunc082E_0364:
	if (!(var000B == 0x0004)) goto labelFunc082E_03AA;
	if (!(var000E == 0x0001)) goto labelFunc082E_0382;
	message("\"I spit upon thy pittance! Does ");
	message(var0002);
	message(" better please thy miserly nature?\"");
	say();
labelFunc082E_0382:
	if (!(var000E == 0x0002)) goto labelFunc082E_0396;
	message("\"I worked for more years than thou hast lived to acquire this knowledge! I can go no lower than ");
	message(var0002);
	message(".\"");
	say();
labelFunc082E_0396:
	if (!(var000E == 0x0003)) goto labelFunc082E_03AA;
	message("\"Dost thou take me for a fool? This fine spell is worth at least ");
	message(var0002);
	message(".\"");
	say();
labelFunc082E_03AA:
	if (!(var000B == 0x0005)) goto labelFunc082E_040E;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc082E_03CE;
	message("\"Thou must not be serious about this... My previous offer stands, at ");
	message(var0002);
	message(".\"");
	say();
labelFunc082E_03CE:
	if (!(var000E == 0x0002)) goto labelFunc082E_03E2;
	message("\"I will not be insulted! I can go no lower than ");
	message(var0002);
	message(".\"");
	say();
labelFunc082E_03E2:
	if (!(var000E == 0x0003)) goto labelFunc082E_03F6;
	message("\"Dog! I could not even afford a decent glass of ale for what thou hast offered! I will not lower my prices for such a fiend as thou. My offer stands at ");
	message(var0002);
	message(".\"");
	say();
labelFunc082E_03F6:
	if (!(var0009 < 0x001F)) goto labelFunc082E_040E;
	UI_set_npc_id(0xFFAF, (var0009 + 0x0001));
labelFunc082E_040E:
	goto labelFunc082E_0048;
labelFunc082E_0411:
	return 0;
}


