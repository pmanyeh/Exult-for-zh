#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func082B 0x82B (var var0000, var var0001)
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

	var0002 = var0000;
	var0003 = ((var0001 / 0x0003) * 0x0002);
	var0004 = Func0954();
	var0005 = (0x000F - (UI_get_npc_id(0x03F7) / 0x0002));
	var0006 = 0x0000;
	var0007 = 0x0001;
	var0008 = 0x0000;
	var0009 = 0x0002;
	var000A = UI_get_npc_id(0x03F7);
labelFunc082B_004E:
	if (!var0007) goto labelFunc082B_0423;
	var000B = Func0956(["yes", "no", "haggle"]);
	if (!(var000B == "no")) goto labelFunc082B_0077;
	return 0x0000;
	goto labelFunc082B_008A;
labelFunc082B_0077:
	if (!(var000B == "yes")) goto labelFunc082B_008A;
	var000C = 0x0000;
	goto labelFunc082B_00D9;
labelFunc082B_008A:
	var000D = Func0999(var0002, var0001, var0009, var0003, var0008, var0005, var0006);
	var0008 = (var0008 + 0x0001);
	var0006 = var000D[0x0004];
	var000C = var000D[0x0003];
	var000E = var0002;
	var0002 = var000D[0x0002];
	var0003 = var000D[0x0001];
labelFunc082B_00D9:
	var000F = UI_get_random(0x0003);
	if (!(var000C < 0x0002)) goto labelFunc082B_027A;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc082B_0130;
	if (!(var000F == 0x0001)) goto labelFunc082B_0111;
	message("\"Normally I would never accept such an offer, but who do I have to train here? I hope this war ends soon...\"");
	say();
labelFunc082B_0111:
	if (!(var000F == 0x0002)) goto labelFunc082B_011F;
	message("\"I have no choice but to accept it at thy price. Assuredly, I have no other offers.\"");
	say();
labelFunc082B_011F:
	if (!(var000F == 0x0003)) goto labelFunc082B_012D;
	message("\"I will accept\tthine offer. But I shall deny it to my dying day... I have a reputation to uphold, thou knowest.\"");
	say();
labelFunc082B_012D:
	goto labelFunc082B_01F2;
labelFunc082B_0130:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc082B_017F;
	if (!(var000F == 0x0001)) goto labelFunc082B_015A;
	message("\"Times are strange, ");
	message(var0004);
	message(". But thou hast the spell, and I have a bit more gold.\"");
	say();
labelFunc082B_015A:
	if (!(var000F == 0x0002)) goto labelFunc082B_016E;
	message("\"Thou dost bargain well, ");
	message(var0004);
	message(". I will accept this price.\"");
	say();
labelFunc082B_016E:
	if (!(var000F == 0x0003)) goto labelFunc082B_017C;
	message("\"I hope thou dost realize that thou art getting a bargain with this price.\"");
	say();
labelFunc082B_017C:
	goto labelFunc082B_01F2;
labelFunc082B_017F:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc082B_01C8;
	if (!(var000F == 0x0001)) goto labelFunc082B_01A9;
	message("\"Only ");
	message(var0002);
	message("??! All right, all right... I will accept this price.\"");
	say();
labelFunc082B_01A9:
	if (!(var000F == 0x0002)) goto labelFunc082B_01B7;
	message("\"A decent price.\"");
	say();
labelFunc082B_01B7:
	if (!(var000F == 0x0003)) goto labelFunc082B_01C5;
	message("\"How else shall I make money, eh? I will accept this price.\"");
	say();
labelFunc082B_01C5:
	goto labelFunc082B_01F2;
labelFunc082B_01C8:
	if (!(var000F == 0x0001)) goto labelFunc082B_01D6;
	message("\"I accept thine offer!\"");
	say();
labelFunc082B_01D6:
	if (!(var000F == 0x0002)) goto labelFunc082B_01E4;
	message("\"I accept thine offer. Thou hast a fine eye for a bargain!\"");
	say();
labelFunc082B_01E4:
	if (!(var000F == 0x0003)) goto labelFunc082B_01F2;
	message("\"Yes, a good price that is!\"");
	say();
labelFunc082B_01F2:
	message("\"So, dost thou agree to a price of ");
	message(var0002);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc082B_0223;
	if (!(var000A > 0x0001)) goto labelFunc082B_021C;
	UI_set_npc_id(0x03F7, (var000A - 0x0002));
labelFunc082B_021C:
	return var0002;
	goto labelFunc082B_027A;
labelFunc082B_0223:
	if (!(var000F == 0x0001)) goto labelFunc082B_0231;
	message("\"I am bored, 'tis true. But I do not take kindly to wasting my time!\"");
	say();
labelFunc082B_0231:
	if (!(var000F == 0x0002)) goto labelFunc082B_023F;
	message("\"Now thou hast taken all sport out of the deal!\"");
	say();
labelFunc082B_023F:
	if (!(var000F == 0x0003)) goto labelFunc082B_024D;
	message("\"Where are thy manners\"?!\"");
	say();
labelFunc082B_024D:
	if (!(0x001F < (var000A + 0x000A))) goto labelFunc082B_0268;
	UI_set_npc_id(0x03F7, 0x001F);
	goto labelFunc082B_0276;
labelFunc082B_0268:
	UI_set_npc_id(0x03F7, (var000A + 0x000A));
labelFunc082B_0276:
	return 0x0000;
labelFunc082B_027A:
	if (!(var0006 == 0x0001)) goto labelFunc082B_02EA;
	if (!(var000C == 0x0005)) goto labelFunc082B_02C5;
	message("\"");
	message(var0002);
	message(" is my final offer. Dost thou want it at this price?\"");
	say();
	if (!(var000A < 0x001C)) goto labelFunc082B_02B0;
	UI_set_npc_id(0x03F7, (var000A + 0x0004));
labelFunc082B_02B0:
	if (!(Func0955() == true)) goto labelFunc082B_02BC;
	return var0002;
labelFunc082B_02BC:
	var0007 = 0x0000;
	goto labelFunc082B_02E7;
labelFunc082B_02C5:
	message("\"");
	message(var0002);
	message(".  I will go no lower.\"");
	say();
	if (!(var000A < 0x001E)) goto labelFunc082B_02E7;
	UI_set_npc_id(0x03F7, (var000A + 0x0002));
labelFunc082B_02E7:
	goto labelFunc082B_0420;
labelFunc082B_02EA:
	if (!(var000C == 0x0002)) goto labelFunc082B_0330;
	if (!(var000F == 0x0001)) goto labelFunc082B_0308;
	message("\"Thou dost barter well. How does ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc082B_0308:
	if (!(var000F == 0x0002)) goto labelFunc082B_031C;
	message("\"I see thou dost understand the value of this fine spell. How does ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc082B_031C:
	if (!(var000F == 0x0003)) goto labelFunc082B_0330;
	message("\"I shall make thee a deal. For thee only I offer it for ");
	message(var0002);
	message(".\"");
	say();
labelFunc082B_0330:
	if (!(var000C == 0x0003)) goto labelFunc082B_0376;
	if (!(var000F == 0x0001)) goto labelFunc082B_034E;
	message("\"Hmmm.... Wouldst thou pay ");
	message(var0002);
	message("?\"");
	say();
labelFunc082B_034E:
	if (!(var000F == 0x0002)) goto labelFunc082B_0362;
	message("\"Thou dost drive a hard bargain. ");
	message(var0002);
	message("?\"");
	say();
labelFunc082B_0362:
	if (!(var000F == 0x0003)) goto labelFunc082B_0376;
	message("\"What dost thou say to ");
	message(var0002);
	message("?\"");
	say();
labelFunc082B_0376:
	if (!(var000C == 0x0004)) goto labelFunc082B_03BC;
	if (!(var000F == 0x0001)) goto labelFunc082B_0394;
	message("\"Better I should fling my spells to the Chaos hordes! ");
	message(var0002);
	message(".\"");
	say();
labelFunc082B_0394:
	if (!(var000F == 0x0002)) goto labelFunc082B_03A8;
	message("\"Thou dost mock my years of training with such an offer! I can go no lower than ");
	message(var0002);
	message(".\"");
	say();
labelFunc082B_03A8:
	if (!(var000F == 0x0003)) goto labelFunc082B_03BC;
	message("\"I am no fool! This fine spell is worth at least ");
	message(var0002);
	message(".\"");
	say();
labelFunc082B_03BC:
	if (!(var000C == 0x0005)) goto labelFunc082B_0420;
	var0002 = var000E;
	if (!(var000F == 0x0001)) goto labelFunc082B_03E0;
	message("\"My previous offer stands, at ");
	message(var0002);
	message(". This spell is not some paltry bauble that thou mayest find anywhere.\"");
	say();
labelFunc082B_03E0:
	if (!(var000F == 0x0002)) goto labelFunc082B_03F4;
	message("\"Do not be insulting! ");
	message(var0002);
	message("!\"");
	say();
labelFunc082B_03F4:
	if (!(var000F == 0x0003)) goto labelFunc082B_0408;
	message("\"My offer stands at ");
	message(var0002);
	message(". Thou art a stranger, after all. I know not what use thou wilt make of this.\"");
	say();
labelFunc082B_0408:
	if (!(var000A < 0x001F)) goto labelFunc082B_0420;
	UI_set_npc_id(0x03F7, (var000A + 0x0001));
labelFunc082B_0420:
	goto labelFunc082B_004E;
labelFunc082B_0423:
	return 0;
}


