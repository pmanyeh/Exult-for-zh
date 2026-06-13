#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func0850 0x850 (var var0000, var var0001);

void Func084F 0x84F ()
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

	UI_push_answers();
	var0000 = true;
	message("\"I will accept only guilders in exchange for teaching thee spells.\"");
	say();
labelFunc084F_000C:
	if (!var0000) goto labelFunc084F_0401;
	message("\"In which circle art thou interested?\"");
	say();
	var0001 = Func0957(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"]);
	var0001 = (var0001 - 0x0001);
	if (!(var0001 == 0x0000)) goto labelFunc084F_0054;
	goto labelFunc084F_0401;
labelFunc084F_0054:
	if (!(var0001 == 0x0001)) goto labelFunc084F_0091;
	var0002 = ["nothing", "Telekinesis"];
	var0003 = [0x0000, 0x0007];
	var0004 = [0x0000, 0x0028];
	var0005 = [0x0000, 0x0019];
	goto labelFunc084F_02C1;
labelFunc084F_0091:
	if (!(var0001 == 0x0002)) goto labelFunc084F_00CE;
	var0002 = ["nothing", "Cold Blast"];
	var0003 = [0x0000, 0x000B];
	var0004 = [0x0000, 0x0096];
	var0005 = [0x0000, 0x0064];
	goto labelFunc084F_02C1;
labelFunc084F_00CE:
	if (!(var0001 == 0x0003)) goto labelFunc084F_0117;
	var0002 = ["nothing", "Curse", "Paralyze"];
	var0003 = [0x0000, 0x0011, 0x0015];
	var0004 = [0x0000, 0x0078, 0x008C];
	var0005 = [0x0000, 0x0046, 0x0055];
	goto labelFunc084F_02C1;
labelFunc084F_0117:
	if (!(var0001 == 0x0004)) goto labelFunc084F_0160;
	var0002 = ["nothing", "Blink", "Mass Curse"];
	var0003 = [0x0000, 0x0018, 0x001C];
	var0004 = [0x0000, 0x00C8, 0x00AF];
	var0005 = [0x0000, 0x0082, 0x0064];
	goto labelFunc084F_02C1;
labelFunc084F_0160:
	if (!(var0001 == 0x0005)) goto labelFunc084F_019D;
	var0002 = ["nothing", "Erstam's Surprise"];
	var0003 = [0x0000, 0x0027];
	var0004 = [0x0000, 0x00F0];
	var0005 = [0x0000, 0x00AA];
	goto labelFunc084F_02C1;
labelFunc084F_019D:
	if (!(var0001 == 0x0006)) goto labelFunc084F_01DA;
	var0002 = ["nothing", "Cause Fear"];
	var0003 = [0x0000, 0x002A];
	var0004 = [0x0000, 0x012C];
	var0005 = [0x0000, 0x00D2];
	goto labelFunc084F_02C1;
labelFunc084F_01DA:
	if (!(var0001 == 0x0007)) goto labelFunc084F_0217;
	var0002 = ["nothing", "Mass Might"];
	var0003 = [0x0000, 0x0033];
	var0004 = [0x0000, 0x015E];
	var0005 = [0x0000, 0x00F0];
	goto labelFunc084F_02C1;
labelFunc084F_0217:
	if (!(var0001 == 0x0008)) goto labelFunc084F_026C;
	var0002 = ["nothing", "Mind Blast", "Invoke Serpent", "Serpent Bond"];
	var0003 = [0x0000, 0x0039, 0x003C, 0x003D];
	var0004 = [0x0000, 0x0190, 0x01A9, 0x01C2];
	var0005 = [0x0000, 0x011D, 0x0145, 0x015E];
	goto labelFunc084F_02C1;
labelFunc084F_026C:
	if (!(var0001 == 0x0009)) goto labelFunc084F_02C1;
	var0002 = ["nothing", "Death Vortex", "Mass Death", "Imbalance"];
	var0003 = [0x0000, 0x0040, 0x0041, 0x0047];
	var0004 = [0x0000, 0x01F4, 0x0258, 0x04B0];
	var0005 = [0x0000, 0x01F4, 0x0258, 0x04B0];
	goto labelFunc084F_02C1;
labelFunc084F_02C1:
	message("\"What spell dost thou wish to purchase?\"");
	say();
	var0006 = Func0957(var0002);
	if (!(var0006 == 0x0001)) goto labelFunc084F_02DF;
	message("\"As thou wishest...\"");
	say();
	goto labelFunc084F_03F4;
labelFunc084F_02DF:
	var0007 = var0003[var0006];
	var0008 = var0004[var0006];
	var0009 = var0005[var0006];
	var000A = var0002[var0006];
	var000B = 0x03B8;
	if (!(gflags[0x0215] == true)) goto labelFunc084F_032B;
	var0008 = (var0004[var0006] / 0x0002);
	var0009 = (var0005[var0006] / 0x0002);
labelFunc084F_032B:
	if (!(var0008 == var0009)) goto labelFunc084F_0365;
	message("\"I will sell thee ");
	message(var000A);
	message(" for ");
	message(var0008);
	message(" guilders. Dost thou accept?\"");
	say();
	var000C = 0x0000;
	if (!(Func0955() == true)) goto labelFunc084F_0362;
	var000C = Func096F(var0007, var000B, var0008);
labelFunc084F_0362:
	goto labelFunc084F_03A0;
labelFunc084F_0365:
	message("\"I will sell thee ");
	message(var000A);
	message(" for ");
	message(var0008);
	message(" guilders. Dost thou accept?\"");
	say();
	var000D = Func0850(var0008, var0009);
	var000C = 0x0000;
	if (!(var000D > 0x0000)) goto labelFunc084F_03A0;
	var000C = Func096F(var0007, var000B, var000D);
labelFunc084F_03A0:
	if (!(var000C == 0x0001)) goto labelFunc084F_03B7;
	message("\"The spell ");
	message(var000A);
	message(" is thine!\"");
	say();
	goto labelFunc084F_03F4;
labelFunc084F_03B7:
	if (!(var000C == 0x0002)) goto labelFunc084F_03CC;
	message("\"Thou dost need a spellbook!\"");
	say();
	var0000 = false;
	goto labelFunc084F_0401;
labelFunc084F_03CC:
	if (!(var000C == 0x0003)) goto labelFunc084F_03E3;
	message("\"Thou dost not have enough guilders to buy ");
	message(var000A);
	message("!\"");
	say();
	goto labelFunc084F_03F4;
labelFunc084F_03E3:
	if (!(var000C == 0x0004)) goto labelFunc084F_03F4;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc084F_03F4;
labelFunc084F_03F4:
	message("\"Perhaps another spell?\"");
	say();
	var0000 = Func0955();
	goto labelFunc084F_000C;
labelFunc084F_0401:
	UI_pop_answers();
	return;
}


