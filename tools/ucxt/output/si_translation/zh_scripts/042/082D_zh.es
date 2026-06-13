#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func082E 0x82E (var var0000, var var0001);

void Func082D 0x82D ()
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
	message("\"With what coinage dost thou wish to pay?\"");
	say();
	var0001 = Func0956(["Guilders", "Gold Coins"]);
	if (!(var0001 == "Guilders")) goto labelFunc082D_002B;
	var0002 = 0x03B8;
labelFunc082D_002B:
	if (!(var0001 == "Gold Coins")) goto labelFunc082D_0041;
	var0002 = 0x0284;
	var0003 = 0x0001;
labelFunc082D_0041:
	if (!var0000) goto labelFunc082D_0454;
	message("\"In which circle art thou interested?\"");
	say();
	var0004 = Func0957(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"]);
	var0004 = (var0004 - 0x0001);
	if (!(var0004 == 0x0000)) goto labelFunc082D_0089;
	goto labelFunc082D_0454;
labelFunc082D_0089:
	if (!(var0004 == 0x0001)) goto labelFunc082D_00DE;
	var0005 = ["nothing", "Create Food", "Great Douse", "Locate"];
	var0006 = [0x0000, 0x0000, 0x0003, 0x0006];
	var0007 = [0x0000, 0x0014, 0x0012, 0x001A];
	var0008 = [0x0000, 0x000C, 0x0009, 0x000D];
	goto labelFunc082D_0302;
labelFunc082D_00DE:
	if (!(var0004 == 0x0002)) goto labelFunc082D_011B;
	var0005 = ["nothing", "False Coin"];
	var0006 = [0x0000, 0x000A];
	var0007 = [0x0000, 0x0050];
	var0008 = [0x0000, 0x0032];
	goto labelFunc082D_0302;
labelFunc082D_011B:
	if (!(var0004 == 0x0003)) goto labelFunc082D_0164;
	var0005 = ["nothing", "Paralyze", "Sleep"];
	var0006 = [0x0000, 0x0015, 0x0016];
	var0007 = [0x0000, 0x0046, 0x003C];
	var0008 = [0x0000, 0x0023, 0x0022];
	goto labelFunc082D_0302;
labelFunc082D_0164:
	if (!(var0004 == 0x0004)) goto labelFunc082D_01A1;
	var0005 = ["nothing", "Deter"];
	var0006 = [0x0000, 0x0019];
	var0007 = [0x0000, 0x005A];
	var0008 = [0x0000, 0x0032];
	goto labelFunc082D_0302;
labelFunc082D_01A1:
	if (!(var0004 == 0x0005)) goto labelFunc082D_01EA;
	var0005 = ["nothing", "Mass Sleep", "Erstam's Surprise"];
	var0006 = [0x0000, 0x0025, 0x0027];
	var0007 = [0x0000, 0x0091, 0x00A0];
	var0008 = [0x0000, 0x0050, 0x0064];
	goto labelFunc082D_0302;
labelFunc082D_01EA:
	if (!(var0004 == 0x0006)) goto labelFunc082D_0227;
	var0005 = ["nothing", "Fire Ring"];
	var0006 = [0x0000, 0x002C];
	var0007 = [0x0000, 0x00B4];
	var0008 = [0x0000, 0x006E];
	goto labelFunc082D_0302;
labelFunc082D_0227:
	if (!(var0004 == 0x0007)) goto labelFunc082D_0264;
	var0005 = ["nothing", "Vibrate"];
	var0006 = [0x0000, 0x0036];
	var0007 = [0x0000, 0x00DC];
	var0008 = [0x0000, 0x006E];
	goto labelFunc082D_0302;
labelFunc082D_0264:
	if (!(var0004 == 0x0008)) goto labelFunc082D_02AD;
	var0005 = ["nothing", "Mind Blast", "Swordstrike"];
	var0006 = [0x0000, 0x0039, 0x003F];
	var0007 = [0x0000, 0x012C, 0x011D];
	var0008 = [0x0000, 0x00B9, 0x00A5];
	goto labelFunc082D_0302;
labelFunc082D_02AD:
	if (!(var0004 == 0x0009)) goto labelFunc082D_0302;
	var0005 = ["nothing", "Death Vortex", "Mass Death", "Spiral Missiles"];
	var0006 = [0x0000, 0x0040, 0x0041, 0x0043];
	var0007 = [0x0000, 0x015E, 0x0190, 0x01A9];
	var0008 = [0x0000, 0x00DC, 0x00FA, 0x0104];
	goto labelFunc082D_0302;
labelFunc082D_0302:
	message("\"What spell dost thou wish to buy?\"");
	say();
	var0009 = Func0957(var0005);
	if (!(var0009 == 0x0001)) goto labelFunc082D_0320;
	message("\"So be it...\"");
	say();
	goto labelFunc082D_0447;
labelFunc082D_0320:
	var000A = var0006[var0009];
	var000B = (var0007[var0009] * var0003);
	var000C = (var0008[var0009] * var0003);
	var000D = var0005[var0009];
	if (!(var0001 == "Guilders")) goto labelFunc082D_0378;
	var000B = ((var0007[var0009] * 0x0003) / 0x0002);
	var000C = ((var0008[var0009] * 0x0003) / 0x0002);
labelFunc082D_0378:
	if (!(var000B == var000C)) goto labelFunc082D_03B8;
	message("\"I will sell thee ");
	message(var000D);
	message(" for ");
	message(var000B);
	message(" ");
	message(var0001);
	message(". Dost thou accept?\"");
	say();
	var000E = 0x0000;
	if (!(Func0955() == true)) goto labelFunc082D_03B5;
	var000E = Func096F(var000A, var0002, var000B);
labelFunc082D_03B5:
	goto labelFunc082D_03F9;
labelFunc082D_03B8:
	message("\"I will sell thee ");
	message(var000D);
	message(" for ");
	message(var000B);
	message(" ");
	message(var0001);
	message(". Dost thou accept?\"");
	say();
	var000F = Func082E(var000B, var000C);
	var000E = 0x0000;
	if (!(var000F > 0x0000)) goto labelFunc082D_03F9;
	var000E = Func096F(var000A, var0002, var000F);
labelFunc082D_03F9:
	if (!(var000E == 0x0001)) goto labelFunc082D_040A;
	message("\"'Tis thine!\"");
	say();
	goto labelFunc082D_0447;
labelFunc082D_040A:
	if (!(var000E == 0x0002)) goto labelFunc082D_041F;
	message("\"Find thyself a spellbook before thou dost seek to buy from me again!\"");
	say();
	var0000 = false;
	goto labelFunc082D_0454;
labelFunc082D_041F:
	if (!(var000E == 0x0003)) goto labelFunc082D_0436;
	message("\"Thou dost not have enough ");
	message(var0001);
	message(" to buy that spell!\"");
	say();
	goto labelFunc082D_0447;
labelFunc082D_0436:
	if (!(var000E == 0x0004)) goto labelFunc082D_0447;
	message("\"If thou wilt look, thou wilt find thou dost already have that spell!\"");
	say();
	goto labelFunc082D_0447;
labelFunc082D_0447:
	message("\"Wouldst thou care for another spell?\"");
	say();
	var0000 = Func0955();
	goto labelFunc082D_0041;
labelFunc082D_0454:
	UI_pop_answers();
	return;
}


