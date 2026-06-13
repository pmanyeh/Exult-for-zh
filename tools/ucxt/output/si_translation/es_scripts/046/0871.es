#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();
extern var Func096F 0x96F (var var0000, var var0001, var var0002);
extern var Func0872 0x872 (var var0000, var var0001);

void Func0871 0x871 ()
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

	UI_push_answers();
	var0000 = true;
	message("\"I accept guilders only!\"");
	say();
	var0001 = "Guilders";
	var0002 = 0x03B8;
labelFunc0871_0018:
	if (!var0000) goto labelFunc0871_03B0;
	message("\"In which circle art thou interested?\"");
	say();
	var0003 = Func0957(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"]);
	var0003 = (var0003 - 0x0001);
	if (!(var0003 == 0x0000)) goto labelFunc0871_005A;
	goto labelFunc0871_03B0;
labelFunc0871_005A:
	if (!(var0003 == 0x0001)) goto labelFunc0871_00A3;
	var0004 = ["nothing", "Detect Trap", "Light"];
	var0005 = [0x0000, 0x0002, 0x0005];
	var0006 = [0x0000, 0x0028, 0x0023];
	var0007 = [0x0000, 0x0014, 0x0014];
	goto labelFunc0871_0292;
labelFunc0871_00A3:
	if (!(var0003 == 0x0002)) goto labelFunc0871_00EC;
	var0004 = ["nothing", "Awaken", "Heal"];
	var0005 = [0x0000, 0x0008, 0x000D];
	var0006 = [0x0000, 0x0041, 0x004B];
	var0007 = [0x0000, 0x001E, 0x0026];
	goto labelFunc0871_0292;
labelFunc0871_00EC:
	if (!(var0003 == 0x0003)) goto labelFunc0871_0135;
	var0004 = ["nothing", "Enchant Missiles", "Translate"];
	var0005 = [0x0000, 0x0012, 0x0017];
	var0006 = [0x0000, 0x0096, 0x00AF];
	var0007 = [0x0000, 0x0050, 0x0055];
	goto labelFunc0871_0292;
labelFunc0871_0135:
	if (!(var0003 == 0x0004)) goto labelFunc0871_01B7;
	if (!gflags[0x00FF]) goto labelFunc0871_0184;
	var0004 = ["nothing", "Create Soul Prism", "Transcribe"];
	var0005 = [0x0000, 0x001B, 0x001E];
	var0006 = [0x0000, 0x012C, 0x00DC];
	var0007 = [0x0000, 0x00C8, 0x0082];
	goto labelFunc0871_01B4;
labelFunc0871_0184:
	var0004 = ["nothing", "Transcribe"];
	var0005 = [0x0000, 0x001E];
	var0006 = [0x0000, 0x00DC];
	var0007 = [0x0000, 0x0082];
labelFunc0871_01B4:
	goto labelFunc0871_0292;
labelFunc0871_01B7:
	if (!(var0003 == 0x0005)) goto labelFunc0871_01F4;
	var0004 = ["nothing", "Great Heal"];
	var0005 = [0x0000, 0x0023];
	var0006 = [0x0000, 0x00FA];
	var0007 = [0x0000, 0x0082];
	goto labelFunc0871_0292;
labelFunc0871_01F4:
	if (!(var0003 == 0x0006)) goto labelFunc0871_0249;
	var0004 = ["nothing", "Betray", "Cause Fear", "Create Automata"];
	var0005 = [0x0000, 0x0028, 0x002A, 0x002F];
	var0006 = [0x0000, 0x011D, 0x012C, 0x02EE];
	var0007 = [0x0000, 0x0096, 0x00AF, 0x0226];
	goto labelFunc0871_0292;
labelFunc0871_0249:
	if (!(var0003 == 0x0007)) goto labelFunc0871_0292;
	var0004 = ["nothing", "Mass Might", "Lightning"];
	var0005 = [0x0000, 0x0033, 0x0037];
	var0006 = [0x0000, 0x0190, 0x015E];
	var0007 = [0x0000, 0x00C8, 0x00C8];
	goto labelFunc0871_0292;
labelFunc0871_0292:
	message("\"What spell art thou interested in?\"");
	say();
	var0008 = Func0957(var0004);
	if (!(var0008 == 0x0001)) goto labelFunc0871_02B0;
	message("\"Very well...\"");
	say();
	goto labelFunc0871_03A3;
labelFunc0871_02B0:
	var0009 = var0005[var0008];
	var000A = var0006[var0008];
	var000B = var0007[var0008];
	var000C = var0004[var0008];
	if (!(var000A == var000B)) goto labelFunc0871_0314;
	message("\"The ");
	message(var000C);
	message(" spell will cost ");
	message(var000A);
	message(" ");
	message(var0001);
	message(". Is this acceptable?\"");
	say();
	var000D = 0x0000;
	if (!(Func0955() == true)) goto labelFunc0871_0311;
	var000D = Func096F(var0009, var0002, var000A);
labelFunc0871_0311:
	goto labelFunc0871_0355;
labelFunc0871_0314:
	message("\"The price for the ");
	message(var000C);
	message(" spell is ");
	message(var000A);
	message(" ");
	message(var0001);
	message(". Dost thou find this acceptable?\"");
	say();
	var000E = Func0872(var000A, var000B);
	var000D = 0x0000;
	if (!(var000E > 0x0000)) goto labelFunc0871_0355;
	var000D = Func096F(var0009, var0002, var000E);
labelFunc0871_0355:
	if (!(var000D == 0x0001)) goto labelFunc0871_0366;
	message("\"Done!\"");
	say();
	goto labelFunc0871_03A3;
labelFunc0871_0366:
	if (!(var000D == 0x0002)) goto labelFunc0871_037B;
	message("\"Thou dost not have a spellbook.\"");
	say();
	var0000 = false;
	goto labelFunc0871_03B0;
labelFunc0871_037B:
	if (!(var000D == 0x0003)) goto labelFunc0871_0392;
	message("\"Thou dost not have enough ");
	message(var0001);
	message(" for that!\"");
	say();
	goto labelFunc0871_03A3;
labelFunc0871_0392:
	if (!(var000D == 0x0004)) goto labelFunc0871_03A3;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc0871_03A3;
labelFunc0871_03A3:
	message("\"Wouldst thou like another spell?\"");
	say();
	var0000 = Func0955();
	goto labelFunc0871_0018;
labelFunc0871_03B0:
	UI_pop_answers();
	return;
}


