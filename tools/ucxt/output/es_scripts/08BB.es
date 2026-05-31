#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08BB 0x8BB (var var0000)
{
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

	UI_push_answers();
	var0001 = true;
	var0002 = [0x0014, 0x0028, 0x003C, 0x0050, 0x0064, 0x0082, 0x0096, 0x00B4];
labelFunc08BB_0026:
	if (!var0001) goto labelFunc08BB_02C0;
	message("\"Which circle art thou interested in?\"");
	say();
	var0003 = Func090C(["nothing", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"]);
	var0003 = (var0003 - 0x0001);
	if (!(var0003 == 0x0000)) goto labelFunc08BB_006B;
	goto labelFunc08BB_02C0;
labelFunc08BB_006B:
	if (!(var0003 == 0x0001)) goto labelFunc08BB_00A2;
	var0004 = ["nothing", "Light", "Create Food", "Cure", "Detect Trap"];
	var0005 = [0x0000, 0x000D, 0x0008, 0x0009, 0x000A];
	goto labelFunc08BB_0216;
labelFunc08BB_00A2:
	if (!(var0003 == 0x0002)) goto labelFunc08BB_00D9;
	var0004 = ["nothing", "Wizard Eye", "Telekinesis", "Protection", "Destroy Trap"];
	var0005 = [0x0000, 0x0017, 0x0016, 0x0015, 0x0010];
	goto labelFunc08BB_0216;
labelFunc08BB_00D9:
	if (!(var0003 == 0x0003)) goto labelFunc08BB_0110;
	var0004 = ["nothing", "Heal", "Peer", "Sleep", "Protect All"];
	var0005 = [0x0000, 0x0019, 0x001D, 0x001F, 0x001B];
	goto labelFunc08BB_0216;
labelFunc08BB_0110:
	if (!(var0003 == 0x0004)) goto labelFunc08BB_0147;
	var0004 = ["nothing", "Mark", "Recall", "Seance", "Unlock Magic"];
	var0005 = [0x0000, 0x0022, 0x0024, 0x0026, 0x0027];
	goto labelFunc08BB_0216;
labelFunc08BB_0147:
	if (!(var0003 == 0x0005)) goto labelFunc08BB_017E;
	var0004 = ["nothing", "Invisibility", "Charm", "Fire Field", "Dance"];
	var0005 = [0x0000, 0x002D, 0x0028, 0x002E, 0x0029];
	goto labelFunc08BB_0216;
labelFunc08BB_017E:
	if (!(var0003 == 0x0006)) goto labelFunc08BB_01B5;
	var0004 = ["nothing", "Clone", "Sleep Field", "Cause Fear", "Magic Storm"];
	var0005 = [0x0000, 0x0031, 0x0036, 0x0030, 0x0034];
	goto labelFunc08BB_0216;
labelFunc08BB_01B5:
	if (!(var0003 == 0x0007)) goto labelFunc08BB_01EC;
	var0004 = ["nothing", "Mass Might", "Energy Mist", "Restoration", "Energy Field"];
	var0005 = [0x0000, 0x003E, 0x003C, 0x003F, 0x003B];
	goto labelFunc08BB_0216;
labelFunc08BB_01EC:
	var0004 = ["nothing", "Resurrect", "Time Stop", "Sword Strike", "Invisible All"];
	var0005 = [0x0000, 0x0044, 0x0047, 0x0046, 0x0043];
labelFunc08BB_0216:
	message("\"What spell wouldst thou like to buy?\"");
	say();
	var0006 = Func090C(var0004);
	if (!(var0006 == 0x0001)) goto labelFunc08BB_0234;
	message("\"Fine.\"");
	say();
	goto labelFunc08BB_02C0;
labelFunc08BB_0234:
	var0007 = var0005[var0006];
	var0008 = var0002[var0006];
	var0009 = var0004[var0006];
	message("\"The ");
	message(var0009);
	message(" spell will cost ");
	message(var0008);
	message(" gold.\"");
	say();
	var000A = Func0923(var0007, var0008);
	if (!(var000A == 0x0001)) goto labelFunc08BB_027C;
	message("\"Done!\"");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_027C:
	if (!(var000A == 0x0002)) goto labelFunc08BB_0291;
	message("\"Thou dost not have a spellbook.\"");
	say();
	var0001 = false;
	goto labelFunc08BB_02C0;
labelFunc08BB_0291:
	if (!(var000A == 0x0003)) goto labelFunc08BB_02A2;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_02A2:
	if (!(var000A == 0x0004)) goto labelFunc08BB_02B3;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc08BB_02B3;
labelFunc08BB_02B3:
	message("\"Wouldst thou like another spell?\"");
	say();
	var0001 = Func090A();
	goto labelFunc08BB_0026;
labelFunc08BB_02C0:
	UI_pop_answers();
	return;
}


