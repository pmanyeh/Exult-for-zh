#game "serpentisle"
// externs
extern var Func0957 0x957 (var var0000);
extern var Func0955 0x955 ();

void Func0834 0x834 ()
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

	message("\"As thou hast aided me in mine experiments, I shall teach thee spells free of charge.\"");
	say();
	UI_push_answers();
	var0000 = true;
labelFunc0834_000C:
	if (!var0000) goto labelFunc0834_0274;
	message("\"In which circle of magic art thou interested?\"");
	say();
	var0001 = Func0957(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"]);
	var0001 = (var0001 - 0x0001);
	if (!(var0001 == 0x0000)) goto labelFunc0834_0054;
	goto labelFunc0834_0274;
labelFunc0834_0054:
	if (!(var0001 == 0x0001)) goto labelFunc0834_007F;
	var0002 = ["nothing", "Detect Trap", "Create Food"];
	var0003 = [0x0000, 0x0002, 0x0000];
	goto labelFunc0834_01B9;
labelFunc0834_007F:
	if (!(var0001 == 0x0002)) goto labelFunc0834_00AA;
	var0002 = ["nothing", "Cold Blast", "Mass Cure"];
	var0003 = [0x0000, 0x000B, 0x000E];
	goto labelFunc0834_01B9;
labelFunc0834_00AA:
	if (!(var0001 == 0x0003)) goto labelFunc0834_00CF;
	var0002 = ["nothing", "Enchant Missiles"];
	var0003 = [0x0000, 0x0012];
	goto labelFunc0834_01B9;
labelFunc0834_00CF:
	if (!(var0001 == 0x0004)) goto labelFunc0834_00F4;
	var0002 = ["nothing", "Unlock Magic"];
	var0003 = [0x0000, 0x001F];
	goto labelFunc0834_01B9;
labelFunc0834_00F4:
	if (!(var0001 == 0x0005)) goto labelFunc0834_011F;
	var0002 = ["nothing", "Conjure", "Great Heal"];
	var0003 = [0x0000, 0x0020, 0x0023];
	goto labelFunc0834_01B9;
labelFunc0834_011F:
	if (!(var0001 == 0x0006)) goto labelFunc0834_0144;
	var0002 = ["nothing", "Fire Field"];
	var0003 = [0x0000, 0x002B];
	goto labelFunc0834_01B9;
labelFunc0834_0144:
	if (!(var0001 == 0x0007)) goto labelFunc0834_0169;
	var0002 = ["nothing", "Restoration"];
	var0003 = [0x0000, 0x0035];
	goto labelFunc0834_01B9;
labelFunc0834_0169:
	if (!(var0001 == 0x0008)) goto labelFunc0834_018E;
	var0002 = ["nothing", "Delayed Blast"];
	var0003 = [0x0000, 0x003A];
	goto labelFunc0834_01B9;
labelFunc0834_018E:
	if (!(var0001 == 0x0009)) goto labelFunc0834_01B9;
	var0002 = ["nothing", "Spiral Missiles", "Stop Storm"];
	var0003 = [0x0000, 0x0043, 0x0044];
	goto labelFunc0834_01B9;
labelFunc0834_01B9:
	message("\"What spell dost thou wish to learn?\"");
	say();
	var0004 = Func0957(var0002);
	if (!(var0004 == 0x0001)) goto labelFunc0834_01D7;
	message("\"As thou dost wish...\"");
	say();
	goto labelFunc0834_0267;
labelFunc0834_01D7:
	var0005 = var0003[var0004];
	var0006 = var0002[var0004];
	var0007 = UI_find_object(0xFE9B, 0x02F9, 0xFE99, 0xFE99);
	if (!var0007) goto labelFunc0834_0224;
	if (!UI_add_spell(var0005, 0x0000, var0007)) goto labelFunc0834_021B;
	var0008 = 0x0001;
	goto labelFunc0834_0221;
labelFunc0834_021B:
	var0008 = 0x0003;
labelFunc0834_0221:
	goto labelFunc0834_022A;
labelFunc0834_0224:
	var0008 = 0x0002;
labelFunc0834_022A:
	if (!(var0008 == 0x0001)) goto labelFunc0834_0241;
	message("\"The spell ");
	message(var0006);
	message(" is thine.\"");
	say();
	goto labelFunc0834_0267;
labelFunc0834_0241:
	if (!(var0008 == 0x0002)) goto labelFunc0834_0256;
	message("\"Thou dost not have a spellbook! Return to me when thou dost have one.\"");
	say();
	var0000 = false;
	goto labelFunc0834_0274;
labelFunc0834_0256:
	if (!(var0008 == 0x0003)) goto labelFunc0834_0267;
	message("\"I believe thou dost already have that spell.\"");
	say();
	goto labelFunc0834_0267;
labelFunc0834_0267:
	message("\"Perhaps thou wouldst care to learn another spell?\"");
	say();
	var0000 = Func0955();
	goto labelFunc0834_000C;
labelFunc0834_0274:
	UI_pop_answers();
	return;
}


