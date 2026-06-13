#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func0847 0x847 (var var0000, var var0001);
extern var Func0943 0x943 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006, var var0007);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0846 0x846 ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	UI_push_answers();
	var0003 = true;
	var0004 = ["nothing", "wine", "mead", "ale"];
	var0005 = [0x0000, 0x0268, 0x0268, 0x0268];
	var0006 = [0xFE99, 0x0000, 0x0005, 0x0003];
	var0007 = [0x0000, 0x0005, 0x0006, 0x0003];
	var0008 = [0x0000, 0x0002, 0x0004, 0x0001];
	var0009 = [0x0000, 0x0001, 0x0001, 0x0001];
	var000A = [0x0000, 0x0001, 0x0001, 0x0001];
	var000B = 0x03B7;
	message("\"So what hast thou a thirst for, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0846_00A9:
	if (!var0003) goto labelFunc0846_0297;
	var000C = Func0957(var0004);
	if (!(var000C == 0x0001)) goto labelFunc0846_00E0;
	if (!var0002) goto labelFunc0846_00D5;
	message("\"If thou dost become thirsty, ask me again, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0846_00D9;
labelFunc0846_00D5:
	message("\"Ask me again, handsome, if thou dost become... thirsty.\"");
	say();
labelFunc0846_00D9:
	var0003 = false;
	goto labelFunc0846_0294;
labelFunc0846_00E0:
	var000D = var0007[var000C];
	var000E = 0x0000;
	if (!(var000C == 0x0002)) goto labelFunc0846_010D;
	message("\"The wine is a bit dry and a little sweet. I will sell thee a bottle for ");
	message(var000D);
	message(" monetari.\"");
	say();
	message("\"Dost thou accept?\"");
	say();
	var000F = "wine bottles";
labelFunc0846_010D:
	if (!(var000C == 0x0003)) goto labelFunc0846_0131;
	message("\"Our mead is flavorful and very filling, ");
	message(var0000);
	message(".\"");
	say();
	message("\"For the price of ");
	message(var000D);
	message(" monetari, thou wilt accept some?\"");
	say();
	var000F = "bottles of mead";
labelFunc0846_0131:
	if (!(var000C == 0x0004)) goto labelFunc0846_014B;
	message("\"");
	message(var000D);
	message(" monetari for a mug of ale. All the men seem to enjoy it! Dost thou want any?\"");
	say();
	var000F = "mugs of ale";
labelFunc0846_014B:
	if (!(var000D == var0008[var000C])) goto labelFunc0846_0170;
	if (!Func0955()) goto labelFunc0846_0167;
	var0010 = var000D;
	goto labelFunc0846_016D;
labelFunc0846_0167:
	var0010 = 0x0000;
labelFunc0846_016D:
	goto labelFunc0846_0182;
labelFunc0846_0170:
	var0010 = Func0847(var0007[var000C], var0008[var000C]);
labelFunc0846_0182:
	if (!(var0010 > 0x0000)) goto labelFunc0846_01ED;
	if (!(var000A[var000C] == 0x0001)) goto labelFunc0846_01CB;
	message("\"How many ");
	message(var000F);
	message(" wouldst thou like?\"");
	say();
	var000E = Func0943(var0005[var000C], var0006[var000C], var0009[var000C], var000B, var0010, 0x000A, 0x0001, false);
	goto labelFunc0846_01ED;
labelFunc0846_01CB:
	var000E = Func0943(var0005[var000C], var0006[var000C], 0x0001, var000B, var0010, 0x0000, 0x0001, false);
labelFunc0846_01ED:
	if (!(var000E == 0x0001)) goto labelFunc0846_0204;
	message("\"To thine health, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0846_028A;
labelFunc0846_0204:
	if (!(var000E == 0x0002)) goto labelFunc0846_0215;
	message("\"Thou shouldst not travel so heavily burdened -- I do not think that thou canst bear the bottles that thou desirest!\"");
	say();
	goto labelFunc0846_028A;
labelFunc0846_0215:
	if (!(var000E == 0x0003)) goto labelFunc0846_028A;
	var0011 = Func0992(0x0001, (("@But " + var0001) + ", we lack adequate funds!@"), 0x0000, false);
	if (!(var0011 != 0xFE9C)) goto labelFunc0846_0252;
	UI_show_npc_face0(0xFFBA, 0x0000);
	message("\"Then thy thirst will not be quenched here.\"");
	say();
	goto labelFunc0846_0256;
labelFunc0846_0252:
	message("\"It seems thou dost not have the funds to pay me...\"");
	say();
labelFunc0846_0256:
	if (!(0x001F < (UI_get_npc_id(0xFFBA) + 0x0006))) goto labelFunc0846_0275;
	UI_set_npc_id(0xFFBA, 0x001F);
	goto labelFunc0846_0287;
labelFunc0846_0275:
	UI_set_npc_id(0xFFBA, (UI_get_npc_id(0xFFBA) + 0x0006));
labelFunc0846_0287:
	goto labelFunc0846_028A;
labelFunc0846_028A:
	message("\"Wouldst thou care for more?\"");
	say();
	var0003 = Func0955();
labelFunc0846_0294:
	goto labelFunc0846_00A9;
labelFunc0846_0297:
	UI_pop_answers();
	return;
}


