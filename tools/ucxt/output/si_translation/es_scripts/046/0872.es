#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0999 0x999 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();

var Func0872 0x872 (var var0000, var var0001)
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
	var0004 = (0x000F - (UI_get_npc_id(0xFFDF) / 0x0002));
	var0005 = 0x0000;
	var0006 = 0x0001;
	var0007 = 0x0000;
	var0008 = 0x0002;
	var0009 = UI_get_npc_id(0xFFDF);
labelFunc0872_0048:
	if (!var0006) goto labelFunc0872_0411;
	var000A = Func0956(["yes", "no", "haggle"]);
	if (!(var000A == "no")) goto labelFunc0872_0071;
	return 0x0000;
	goto labelFunc0872_0084;
labelFunc0872_0071:
	if (!(var000A == "yes")) goto labelFunc0872_0084;
	var000B = 0x0000;
	goto labelFunc0872_00D3;
labelFunc0872_0084:
	var000C = Func0999(var0002, var0001, var0008, var0003, var0007, var0004, var0005);
	var0007 = (var0007 + 0x0001);
	var0005 = var000C[0x0004];
	var000B = var000C[0x0003];
	var000D = var0002;
	var0002 = var000C[0x0002];
	var0003 = var000C[0x0001];
labelFunc0872_00D3:
	var000E = UI_get_random(0x0003);
	if (!(var000B < 0x0002)) goto labelFunc0872_0268;
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0004)))) goto labelFunc0872_012A;
	if (!(var000E == 0x0001)) goto labelFunc0872_010B;
	message("\"I do not know why, but I accept thine offer. Thou dost bargain well, friend.\"");
	say();
labelFunc0872_010B:
	if (!(var000E == 0x0002)) goto labelFunc0872_0119;
	message("\"'Twill not do my reputation any good, but I accept thine offer.\"");
	say();
labelFunc0872_0119:
	if (!(var000E == 0x0003)) goto labelFunc0872_0127;
	message("\"If thou dost tell anyone that I accepted such an offer, I will say that thou art a liar.\"");
	say();
labelFunc0872_0127:
	goto labelFunc0872_01E0;
labelFunc0872_012A:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0003)))) goto labelFunc0872_016D;
	if (!(var000E == 0x0001)) goto labelFunc0872_014E;
	message("\"I have not had much business of late. I will accept thine offer.\"");
	say();
labelFunc0872_014E:
	if (!(var000E == 0x0002)) goto labelFunc0872_015C;
	message("\"Thou dost bargain well. I will accept this price.\"");
	say();
labelFunc0872_015C:
	if (!(var000E == 0x0003)) goto labelFunc0872_016A;
	message("\"I hope thou dost know that thou art getting a good bargain at this price.\"");
	say();
labelFunc0872_016A:
	goto labelFunc0872_01E0;
labelFunc0872_016D:
	if (!(var0002 < (var0001 + ((var0000 - var0001) / 0x0002)))) goto labelFunc0872_01B6;
	if (!(var000E == 0x0001)) goto labelFunc0872_0197;
	message("\"Only ");
	message(var0002);
	message("??! I may as well give this away...\"");
	say();
labelFunc0872_0197:
	if (!(var000E == 0x0002)) goto labelFunc0872_01A5;
	message("\"Not bad...\"");
	say();
labelFunc0872_01A5:
	if (!(var000E == 0x0003)) goto labelFunc0872_01B3;
	message("\"Thou canst not fault me for trying to make a profit. I will accept this price.\"");
	say();
labelFunc0872_01B3:
	goto labelFunc0872_01E0;
labelFunc0872_01B6:
	if (!(var000E == 0x0001)) goto labelFunc0872_01C4;
	message("\"I accept thine offer!\"");
	say();
labelFunc0872_01C4:
	if (!(var000E == 0x0002)) goto labelFunc0872_01D2;
	message("\"Thou art a fine customer. Please stop by any time.\"");
	say();
labelFunc0872_01D2:
	if (!(var000E == 0x0003)) goto labelFunc0872_01E0;
	message("\"'Tis a fine price by me!\"");
	say();
labelFunc0872_01E0:
	message("\"So, dost thou agree to a price of ");
	message(var0002);
	message("?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0872_0211;
	if (!(var0009 > 0x0001)) goto labelFunc0872_020A;
	UI_set_npc_id(0xFFDF, (var0009 - 0x0002));
labelFunc0872_020A:
	return var0002;
	goto labelFunc0872_0268;
labelFunc0872_0211:
	if (!(var000E == 0x0001)) goto labelFunc0872_021F;
	message("\"Then why didst thou come here?!\"");
	say();
labelFunc0872_021F:
	if (!(var000E == 0x0002)) goto labelFunc0872_022D;
	message("\"Thou art an ill-mannered buffoon!\"");
	say();
labelFunc0872_022D:
	if (!(var000E == 0x0003)) goto labelFunc0872_023B;
	message("\"I shall remember thy poor manners in the future! Mark my words!\"");
	say();
labelFunc0872_023B:
	if (!(0x001F < (var0009 + 0x000A))) goto labelFunc0872_0256;
	UI_set_npc_id(0xFFDF, 0x001F);
	goto labelFunc0872_0264;
labelFunc0872_0256:
	UI_set_npc_id(0xFFDF, (var0009 + 0x000A));
labelFunc0872_0264:
	return 0x0000;
labelFunc0872_0268:
	if (!(var0005 == 0x0001)) goto labelFunc0872_02D8;
	if (!(var000B == 0x0005)) goto labelFunc0872_02B3;
	message("\"");
	message(var0002);
	message(" is my final offer. Dost thou agree or not?\"");
	say();
	if (!(var0009 < 0x001C)) goto labelFunc0872_029E;
	UI_set_npc_id(0xFFDF, (var0009 + 0x0004));
labelFunc0872_029E:
	if (!(Func0955() == true)) goto labelFunc0872_02AA;
	return var0002;
labelFunc0872_02AA:
	var0006 = 0x0000;
	goto labelFunc0872_02D5;
labelFunc0872_02B3:
	message("\"I can offer no lower than ");
	message(var0002);
	message(".\"");
	say();
	if (!(var0009 < 0x001E)) goto labelFunc0872_02D5;
	UI_set_npc_id(0xFFDF, (var0009 + 0x0002));
labelFunc0872_02D5:
	goto labelFunc0872_040E;
labelFunc0872_02D8:
	if (!(var000B == 0x0002)) goto labelFunc0872_031E;
	if (!(var000E == 0x0001)) goto labelFunc0872_02F6;
	message("\"I am minded to give thee a good deal. How doth ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc0872_02F6:
	if (!(var000E == 0x0002)) goto labelFunc0872_030A;
	message("\"I like the way thou dost barter. How doth ");
	message(var0002);
	message(" sound?\"");
	say();
labelFunc0872_030A:
	if (!(var000E == 0x0003)) goto labelFunc0872_031E;
	message("\"For thee only I offer ");
	message(var0002);
	message(".\"");
	say();
labelFunc0872_031E:
	if (!(var000B == 0x0003)) goto labelFunc0872_0364;
	if (!(var000E == 0x0001)) goto labelFunc0872_033C;
	message("\"Hmmm.... Perhaps ");
	message(var0002);
	message("?\"");
	say();
labelFunc0872_033C:
	if (!(var000E == 0x0002)) goto labelFunc0872_0350;
	message("\"");
	message(var0002);
	message("? I have many expenses.\"");
	say();
labelFunc0872_0350:
	if (!(var000E == 0x0003)) goto labelFunc0872_0364;
	message("\"");
	message(var0002);
	message("? I cannot afford to be overly generous these days.\"");
	say();
labelFunc0872_0364:
	if (!(var000B == 0x0004)) goto labelFunc0872_03AA;
	if (!(var000E == 0x0001)) goto labelFunc0872_0382;
	message("\"Who dost thou think thou art dealing with -- a Mundane?! ");
	message(var0002);
	message(" and no less!\"");
	say();
labelFunc0872_0382:
	if (!(var000E == 0x0002)) goto labelFunc0872_0396;
	message("\"I will go no lower than ");
	message(var0002);
	message(". Thou dost not appreciate the work involved.\"");
	say();
labelFunc0872_0396:
	if (!(var000E == 0x0003)) goto labelFunc0872_03AA;
	message("\"This is worth at least ");
	message(var0002);
	message(". I think that thou shouldst reconsider.\"");
	say();
labelFunc0872_03AA:
	if (!(var000B == 0x0005)) goto labelFunc0872_040E;
	var0002 = var000D;
	if (!(var000E == 0x0001)) goto labelFunc0872_03CE;
	message("\"Thou must not want this very badly... My previous offer stands, at ");
	message(var0002);
	message(".\"");
	say();
labelFunc0872_03CE:
	if (!(var000E == 0x0002)) goto labelFunc0872_03E2;
	message("\"Thou art a fool if thou dost think that I will go lower than ");
	message(var0002);
	message(".\"");
	say();
labelFunc0872_03E2:
	if (!(var000E == 0x0003)) goto labelFunc0872_03F6;
	message("\"I would sooner starve! Mine offer stands at ");
	message(var0002);
	message(".\"");
	say();
labelFunc0872_03F6:
	if (!(var0009 < 0x001F)) goto labelFunc0872_040E;
	UI_set_npc_id(0xFFDF, (var0009 + 0x0001));
labelFunc0872_040E:
	goto labelFunc0872_0048;
labelFunc0872_0411:
	return 0;
}


