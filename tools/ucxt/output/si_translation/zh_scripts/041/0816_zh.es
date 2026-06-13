#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func0817 0x817 (var var0000, var var0001);

void Func0816 0x816 ()
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

	UI_push_answers();
	var0000 = true;
	message("\"What coin wilt thou pay with?\"");
	say();
	var0001 = Func0956(["Guilders", "Gold Coins"]);
	if (!(var0001 == "Guilders")) goto labelFunc0816_002B;
	var0002 = 0x03B8;
labelFunc0816_002B:
	if (!(var0001 == "Gold Coins")) goto labelFunc0816_0041;
	var0002 = 0x0284;
	var0003 = 0x0001;
labelFunc0816_0041:
	if (!var0000) goto labelFunc0816_03E0;
	message("\"In which circle of magic art thou interested?\"");
	say();
	var0004 = Func0957(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"]);
	var0004 = (var0004 - 0x0001);
	if (!(var0004 == 0x0000)) goto labelFunc0816_0083;
	goto labelFunc0816_03E0;
labelFunc0816_0083:
	if (!(var0004 == 0x0001)) goto labelFunc0816_00CC;
	var0005 = ["nothing", "Great Ignite", "Locate"];
	var0006 = [0x0000, 0x0004, 0x0006];
	var0007 = [0x0000, 0x001E, 0x0023];
	var0008 = [0x0000, 0x0012, 0x0014];
	goto labelFunc0816_028E;
labelFunc0816_00CC:
	if (!(var0004 == 0x0002)) goto labelFunc0816_0121;
	var0005 = ["nothing", "Destroy Trap", "Great Light", "Protection"];
	var0006 = [0x0000, 0x0009, 0x000C, 0x000F];
	var0007 = [0x0000, 0x0032, 0x003C, 0x0050];
	var0008 = [0x0000, 0x001E, 0x001E, 0x0032];
	goto labelFunc0816_028E;
labelFunc0816_0121:
	if (!(var0004 == 0x0003)) goto labelFunc0816_0176;
	var0005 = ["nothing", "Curse", "Columna's Intuition", "Mass Protect"];
	var0006 = [0x0000, 0x0011, 0x0013, 0x0014];
	var0007 = [0x0000, 0x004B, 0x0078, 0x0064];
	var0008 = [0x0000, 0x0028, 0x0050, 0x003C];
	goto labelFunc0816_028E;
labelFunc0816_0176:
	if (!(var0004 == 0x0004)) goto labelFunc0816_01BF;
	var0005 = ["nothing", "Mass Curse", "Unlock Magic"];
	var0006 = [0x0000, 0x001C, 0x001F];
	var0007 = [0x0000, 0x006E, 0x0078];
	var0008 = [0x0000, 0x003C, 0x0046];
	goto labelFunc0816_028E;
labelFunc0816_01BF:
	if (!(var0004 == 0x0005)) goto labelFunc0816_01FC;
	var0005 = ["nothing", "Invisibility"];
	var0006 = [0x0000, 0x0024];
	var0007 = [0x0000, 0x009B];
	var0008 = [0x0000, 0x005A];
	goto labelFunc0816_028E;
labelFunc0816_01FC:
	if (!(var0004 == 0x0006)) goto labelFunc0816_0245;
	var0005 = ["nothing", "Dispel Illusion", "Create Ammunition"];
	var0006 = [0x0000, 0x0029, 0x002E];
	var0007 = [0x0000, 0x00A5, 0x00AF];
	var0008 = [0x0000, 0x006E, 0x0078];
	goto labelFunc0816_028E;
labelFunc0816_0245:
	if (!(var0004 == 0x0007)) goto labelFunc0816_028E;
	var0005 = ["nothing", "Energy Mist", "Poison Mist"];
	var0006 = [0x0000, 0x0031, 0x0034];
	var0007 = [0x0000, 0x00FA, 0x0118];
	var0008 = [0x0000, 0x00B4, 0x00BE];
	goto labelFunc0816_028E;
labelFunc0816_028E:
	message("\"What spell art thou interested in buying?\"");
	say();
	var0009 = Func0957(var0005);
	if (!(var0009 == 0x0001)) goto labelFunc0816_02AC;
	message("\"If that is what thou dost wish...\"");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_02AC:
	var000A = var0006[var0009];
	var000B = (var0007[var0009] * var0003);
	var000C = (var0008[var0009] * var0003);
	var000D = var0005[var0009];
	if (!(var0001 == "Guilders")) goto labelFunc0816_0304;
	var000B = ((var0007[var0009] * 0x0003) / 0x0002);
	var000C = ((var0008[var0009] * 0x0003) / 0x0002);
labelFunc0816_0304:
	if (!(var000B == var000C)) goto labelFunc0816_0344;
	message("\"");
	message(var000D);
	message(" will cost ");
	message(var000B);
	message(" ");
	message(var0001);
	message(". Wilt thou pay my price?\"");
	say();
	var000E = 0x0000;
	if (!(Func0955() == true)) goto labelFunc0816_0341;
	var000E = Func096F(var000A, var0002, var000B);
labelFunc0816_0341:
	goto labelFunc0816_0385;
labelFunc0816_0344:
	message("\"");
	message(var000D);
	message(" will cost thee ");
	message(var000B);
	message(" ");
	message(var0001);
	message(". Dost thou find this acceptable?\"");
	say();
	var000F = Func0817(var000B, var000C);
	var000E = 0x0000;
	if (!(var000F > 0x0000)) goto labelFunc0816_0385;
	var000E = Func096F(var000A, var0002, var000F);
labelFunc0816_0385:
	if (!(var000E == 0x0001)) goto labelFunc0816_0396;
	message("\"The spell is thine.\"");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_0396:
	if (!(var000E == 0x0002)) goto labelFunc0816_03AB;
	message("\"Thou dost not have a spellbook.\"");
	say();
	var0000 = false;
	goto labelFunc0816_03E0;
labelFunc0816_03AB:
	if (!(var000E == 0x0003)) goto labelFunc0816_03C2;
	message("\"Thou dost not have enough ");
	message(var0001);
	message(" for that!\"");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_03C2:
	if (!(var000E == 0x0004)) goto labelFunc0816_03D3;
	message("\"I believe thou dost already have that spell.\"");
	say();
	goto labelFunc0816_03D3;
labelFunc0816_03D3:
	message("\"Another spell perhaps?\"");
	say();
	var0000 = Func0955();
	goto labelFunc0816_0041;
labelFunc0816_03E0:
	UI_pop_answers();
	return;
}


