#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0847 0x847 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0845 0x845 ()
{
	var var0000;
	var var0001;
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	UI_push_answers();
	var0002 = true;
	var0003 = ["nothing", "poultry", "beef", "ribs", "bread", "fish", "sausage", "cake"];
	var0004 = [0x0000, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179, 0x0179];
	var0005 = [0xFE99, 0x000A, 0x0009, 0x0017, 0x0000, 0x000C, 0x0007, 0x0004];
	var0006 = [0x0000, 0x0008, 0x000C, 0x000D, 0x0004, 0x0006, 0x0009, 0x0004];
	var0007 = [0x0000, 0x0005, 0x0008, 0x0008, 0x0002, 0x0004, 0x0006, 0x0002];
	var0008 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001, 0x0001];
	var000A = 0x03B7;
	message("\"Name thine appetites, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0845_00F7:
	if (!var0002) goto labelFunc0845_0404;
	var000B = Func0957(var0003);
	if (!(var000B == 0x0001)) goto labelFunc0845_0128;
	if (!var0001) goto labelFunc0845_011D;
	message("\"As thou dost wish.\"");
	say();
	goto labelFunc0845_0121;
labelFunc0845_011D:
	message("\"As thou dost wish, love.\"");
	say();
labelFunc0845_0121:
	var0002 = false;
	goto labelFunc0845_0401;
labelFunc0845_0128:
	var000C = var0006[var000B];
	var000D = 0x0000;
	var000E = UI_die_roll(0x0001, 0x0006);
	if (!(var000E == 0x0001)) goto labelFunc0845_0154;
	var000F = "Doth that sound good?";
labelFunc0845_0154:
	if (!(var000E == 0x0002)) goto labelFunc0845_0164;
	var000F = "Dost thou take this price?";
labelFunc0845_0164:
	if (!(var000E == 0x0003)) goto labelFunc0845_0174;
	var000F = "Dost thou find the price agreeable?";
labelFunc0845_0174:
	if (!(var000E == 0x0004)) goto labelFunc0845_0184;
	var000F = "Dost thou agree?";
labelFunc0845_0184:
	if (!(var000E == 0x0005)) goto labelFunc0845_0194;
	var000F = "How doth that sound?";
labelFunc0845_0194:
	if (!(var000E == 0x0006)) goto labelFunc0845_01A4;
	var000F = "Wilt thou agree to my price?";
labelFunc0845_01A4:
	if (!(var000B == 0x0002)) goto labelFunc0845_01C8;
	message("\"");
	message(var000C);
	message(" monetari for the most delectable fowl thou hast ever tasted.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "fowl";
labelFunc0845_01C8:
	if (!(var000B == 0x0003)) goto labelFunc0845_01EC;
	message("\"The beef dinner costs ");
	message(var000C);
	message(" monetari, a bargain at twice the price.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "beef dinners";
labelFunc0845_01EC:
	if (!(var000B == 0x0004)) goto labelFunc0845_0210;
	message("\"The ribs are a specialty of mine. Special spices, thou seest... They cost ");
	message(var000C);
	message(" monetari.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "ribs";
labelFunc0845_0210:
	if (!(var000B == 0x0005)) goto labelFunc0845_0234;
	message("\"My bread is baked fresh every day. ");
	message(var000C);
	message(" monetari is my price.\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "loaves of bread";
labelFunc0845_0234:
	if (!(var000B == 0x0006)) goto labelFunc0845_025E;
	message("\"The fish dinner costs ");
	message(var000C);
	message(" monetari. 'Tis grilled trout with a nice butter sauce to top it. Very delicious, ");
	message(var0000);
	message(".\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "fish dinners";
labelFunc0845_025E:
	if (!(var000B == 0x0007)) goto labelFunc0845_0288;
	message("\"");
	message(var000C);
	message(" monetari for my fine sausage dinner, ");
	message(var0000);
	message(".\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "sausages";
labelFunc0845_0288:
	if (!(var000B == 0x0008)) goto labelFunc0845_02B2;
	message("\"");
	message(var000C);
	message(" monetari is a low price to pay for my cake, ");
	message(var0000);
	message(", if thou dost like things that are sweet...\"");
	say();
	message("\"");
	message(var000F);
	message("\"");
	say();
	var0010 = "cakes";
labelFunc0845_02B2:
	if (!(var000C == var0007[var000B])) goto labelFunc0845_02D7;
	if (!Func0955()) goto labelFunc0845_02CE;
	var0011 = var000C;
	goto labelFunc0845_02D4;
labelFunc0845_02CE:
	var0011 = 0x0000;
labelFunc0845_02D4:
	goto labelFunc0845_02E9;
labelFunc0845_02D7:
	var0011 = Func0847(var0006[var000B], var0007[var000B]);
labelFunc0845_02E9:
	if (!(var0011 > 0x0000)) goto labelFunc0845_0354;
	if (!(var0009[var000B] == 0x0001)) goto labelFunc0845_0332;
	message("\"How many ");
	message(var0010);
	message(" wouldst thou like?\"");
	say();
	var000D = Func0943(var0004[var000B], var0005[var000B], var0008[var000B], var000A, var0011, 0x000A, 0x0001, false);
	goto labelFunc0845_0354;
labelFunc0845_0332:
	var000D = Func0943(var0004[var000B], var0005[var000B], 0x0001, var000A, var0011, 0x0000, 0x0001, false);
labelFunc0845_0354:
	if (!(var000D == 0x0001)) goto labelFunc0845_0365;
	message("\"Enjoy thy meal!\"");
	say();
	goto labelFunc0845_03F7;
labelFunc0845_0365:
	if (!(var000D == 0x0002)) goto labelFunc0845_037C;
	message("\"I believe thou canst not carry so much food, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0845_03F7;
labelFunc0845_037C:
	if (!(var000D == 0x0003)) goto labelFunc0845_03F7;
	var0012 = Func0992(0x0001, (("@But " + var0000) + ", we have not the monetari to pay for this.@"), 0x0000, false);
	if (!(var0012 != 0xFE9C)) goto labelFunc0845_03BF;
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("\"I am truly sorry, but thou dost not have enough money to pay for that, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc0845_03C3;
labelFunc0845_03BF:
	message("\"It would appear thou dost not have enough monetari for that...\"");
	say();
labelFunc0845_03C3:
	if (!(0x001F < (UI_get_npc_id(0xFFBA) + 0x0006))) goto labelFunc0845_03E2;
	UI_set_npc_id(0xFFBA, 0x001F);
	goto labelFunc0845_03F4;
labelFunc0845_03E2:
	UI_set_npc_id(0xFFBA, (UI_get_npc_id(0xFFBA) + 0x0006));
labelFunc0845_03F4:
	goto labelFunc0845_03F7;
labelFunc0845_03F7:
	message("\"Wouldst thou care for more?\"");
	say();
	var0002 = Func0955();
labelFunc0845_0401:
	goto labelFunc0845_00F7;
labelFunc0845_0404:
	UI_pop_answers();
	return;
}


