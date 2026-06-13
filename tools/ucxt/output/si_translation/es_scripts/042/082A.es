#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func082B 0x82B (var var0000, var var0001);
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();

void Func082A 0x82A ()
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
	var0001 = 0x0284;
	message("\"I can only accept gold coins. I hope that is acceptable with thee.\"");
	say();
labelFunc082A_0012:
	if (!var0000) goto labelFunc082A_025D;
	message("\"In which circle art thou interested?\"");
	say();
	var0002 = Func0957(["nothing", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc082A_004E;
	goto labelFunc082A_025D;
labelFunc082A_004E:
	if (!(var0002 == 0x0001)) goto labelFunc082A_008B;
	var0003 = ["nothing", "Mass Sleep"];
	var0004 = [0x0000, 0x0025];
	var0005 = [0x0000, 0x00FA];
	var0006 = [0x0000, 0x0082];
	goto labelFunc082A_018B;
labelFunc082A_008B:
	if (!(var0002 == 0x0002)) goto labelFunc082A_00C8;
	var0003 = ["nothing", "Create Ammunition"];
	var0004 = [0x0000, 0x002E];
	var0005 = [0x0000, 0x012C];
	var0006 = [0x0000, 0x00B4];
	goto labelFunc082A_018B;
labelFunc082A_00C8:
	if (!(var0002 == 0x0003)) goto labelFunc082A_0105;
	var0003 = ["nothing", "Vibrate"];
	var0004 = [0x0000, 0x0036];
	var0005 = [0x0000, 0x015E];
	var0006 = [0x0000, 0x00FA];
	goto labelFunc082A_018B;
labelFunc082A_0105:
	if (!(var0002 == 0x0004)) goto labelFunc082A_014E;
	var0003 = ["nothing", "Invoke Serpent", "Serpent Bond"];
	var0004 = [0x0000, 0x003C, 0x003D];
	var0005 = [0x0000, 0x017C, 0x01C2];
	var0006 = [0x0000, 0x00A0, 0x0113];
	goto labelFunc082A_018B;
labelFunc082A_014E:
	if (!(var0002 == 0x0005)) goto labelFunc082A_018B;
	var0003 = ["nothing", "Imbalance"];
	var0004 = [0x0000, 0x0047];
	var0005 = [0x0000, 0x0320];
	var0006 = [0x0000, 0x0320];
	goto labelFunc082A_018B;
labelFunc082A_018B:
	message("\"What spell dost thou wish to buy?\"");
	say();
	var0007 = Func0957(var0003);
	if (!(var0007 == 0x0001)) goto labelFunc082A_01A9;
	message("\"So be it...\"");
	say();
	goto labelFunc082A_0250;
labelFunc082A_01A9:
	var0008 = var0004[var0007];
	var0009 = var0005[var0007];
	var000A = var0006[var0007];
	var000B = var0003[var0007];
	message("\"I will sell thee ");
	message(var000B);
	message(" for ");
	message(var0009);
	message(" gold. Dost thou accept?\"");
	say();
	var000C = Func082B(var0009, var000A);
	var000D = 0x0000;
	if (!(var000C > 0x0000)) goto labelFunc082A_0208;
	var000D = Func096F(var0008, var0001, var000C);
labelFunc082A_0208:
	if (!(var000D == 0x0001)) goto labelFunc082A_0219;
	message("\"'Tis thine!\"");
	say();
	goto labelFunc082A_0250;
labelFunc082A_0219:
	if (!(var000D == 0x0002)) goto labelFunc082A_022E;
	message("\"Ask me again when thou dost have a spellbook!\"");
	say();
	var0000 = false;
	goto labelFunc082A_025D;
labelFunc082A_022E:
	if (!(var000D == 0x0003)) goto labelFunc082A_023F;
	message("\"Thou dost not have enough gold to buy that spell!\"");
	say();
	goto labelFunc082A_0250;
labelFunc082A_023F:
	if (!(var000D == 0x0004)) goto labelFunc082A_0250;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc082A_0250;
labelFunc082A_0250:
	message("\"Wouldst thou care for another spell?\"");
	say();
	var0000 = Func0955();
	goto labelFunc082A_0012;
labelFunc082A_025D:
	UI_pop_answers();
	return;
}


