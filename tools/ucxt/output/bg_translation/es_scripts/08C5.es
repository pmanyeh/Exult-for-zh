#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08C5 0x8C5 ()
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

	UI_push_answers();
	var0000 = true;
	var0001 = [0x0023, 0x0037, 0x0055, 0x005F, 0x007D, 0x0091, 0x00A5, 0x00C3];
labelFunc08C5_0026:
	if (!var0000) goto labelFunc08C5_02C0;
	message("\"In which circle dost thou wish to study?\"");
	say();
	var0002 = Func090C(["none", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc08C5_006B;
	goto labelFunc08C5_02C0;
labelFunc08C5_006B:
	if (!(var0002 == 0x0001)) goto labelFunc08C5_00A2;
	var0003 = ["nothing", "Create Food", "Great Douse", "Light", "Locate"];
	var0004 = [0x0000, 0x0008, 0x000B, 0x000D, 0x000E];
	goto labelFunc08C5_0216;
labelFunc08C5_00A2:
	if (!(var0002 == 0x0002)) goto labelFunc08C5_00D9;
	var0003 = ["nothing", "Enchant", "Mass Cure", "Protection", "Telekinesis"];
	var0004 = [0x0000, 0x0011, 0x0014, 0x0015, 0x0016];
	goto labelFunc08C5_0216;
labelFunc08C5_00D9:
	if (!(var0002 == 0x0003)) goto labelFunc08C5_0110;
	var0003 = ["nothing", "Heal", "Swarm", "Protect All", "Sleep"];
	var0004 = [0x0000, 0x0019, 0x001A, 0x001B, 0x001F];
	goto labelFunc08C5_0216;
labelFunc08C5_0110:
	if (!(var0002 == 0x0004)) goto labelFunc08C5_0147;
	var0003 = ["nothing", "Conjure", "Mass Curse", "Reveal", "Unlock Magic"];
	var0004 = [0x0000, 0x0020, 0x0023, 0x0025, 0x0027];
	goto labelFunc08C5_0216;
labelFunc08C5_0147:
	if (!(var0002 == 0x0005)) goto labelFunc08C5_017E;
	var0003 = ["nothing", "Dispel Field", "Great Heal", "Invisibility", "Fire Field"];
	var0004 = [0x0000, 0x002A, 0x002C, 0x002D, 0x002E];
	goto labelFunc08C5_0216;
labelFunc08C5_017E:
	if (!(var0002 == 0x0006)) goto labelFunc08C5_01B5;
	var0003 = ["nothing", "Cause Fear", "Fire Ring", "Flame Strike", "Sleep Field"];
	var0004 = [0x0000, 0x0030, 0x0032, 0x0033, 0x0036];
	goto labelFunc08C5_0216;
labelFunc08C5_01B5:
	if (!(var0002 == 0x0007)) goto labelFunc08C5_01EC;
	var0003 = ["nothing", "Death Bolt", "Energy Field", "Energy Mist", "Mass Might"];
	var0004 = [0x0000, 0x0039, 0x003B, 0x003C, 0x003E];
	goto labelFunc08C5_0216;
labelFunc08C5_01EC:
	var0003 = ["nothing", "Death Vortex", "Mass Death", "Invisible All", "Time Stop"];
	var0004 = [0x0000, 0x0041, 0x0042, 0x0043, 0x0047];
labelFunc08C5_0216:
	message("\"What spell wouldst thou like to buy?\"");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc08C5_0234;
	message("\"Fine.\"");
	say();
	goto labelFunc08C5_02C0;
labelFunc08C5_0234:
	var0006 = var0004[var0005];
	var0007 = var0001[var0002];
	var0008 = var0003[var0005];
	message("\"The ");
	message(var0008);
	message(" spell will cost ");
	message(var0007);
	message(" gold.\"");
	say();
	var0009 = Func0923(var0006, var0007);
	if (!(var0009 == 0x0001)) goto labelFunc08C5_027C;
	message("\"Done!\"");
	say();
	goto labelFunc08C5_02B3;
labelFunc08C5_027C:
	if (!(var0009 == 0x0002)) goto labelFunc08C5_0291;
	message("\"Thou dost not have a spellbook.\"");
	say();
	var0000 = false;
	goto labelFunc08C5_02C0;
labelFunc08C5_0291:
	if (!(var0009 == 0x0003)) goto labelFunc08C5_02A2;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08C5_02B3;
labelFunc08C5_02A2:
	if (!(var0009 == 0x0004)) goto labelFunc08C5_02B3;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc08C5_02B3;
labelFunc08C5_02B3:
	message("\"Would you like another spell?\"");
	say();
	var0000 = Func090A();
	goto labelFunc08C5_0026;
labelFunc08C5_02C0:
	UI_pop_answers();
	return;
}


