#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0923 0x923 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func08DB 0x8DB ()
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
	var0001 = [0x0019, 0x002D, 0x0041, 0x0055, 0x0073, 0x0087, 0x009B, 0x00B9];
labelFunc08DB_0026:
	if (!var0000) goto labelFunc08DB_02C0;
	message("\"In which circle dost thou wish to study?\"");
	say();
	var0002 = Func090C(["none", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc08DB_006B;
	goto labelFunc08DB_02C0;
labelFunc08DB_006B:
	if (!(var0002 == 0x0001)) goto labelFunc08DB_00A2;
	var0003 = ["nothing", "Cure", "Detect Trap", "Light", "Awaken All"];
	var0004 = [0x0000, 0x0009, 0x000A, 0x000D, 0x000F];
	goto labelFunc08DB_0216;
labelFunc08DB_00A2:
	if (!(var0002 == 0x0002)) goto labelFunc08DB_00D9;
	var0003 = ["nothing", "Destroy Trap", "Fire Blast", "Great Light", "Telekinesis"];
	var0004 = [0x0000, 0x0010, 0x0012, 0x0013, 0x0016];
	goto labelFunc08DB_0216;
labelFunc08DB_00D9:
	if (!(var0002 == 0x0003)) goto labelFunc08DB_0110;
	var0003 = ["nothing", "Curse", "Heal", "Paralyze", "Poison"];
	var0004 = [0x0000, 0x0018, 0x0019, 0x001C, 0x001E];
	goto labelFunc08DB_0216;
labelFunc08DB_0110:
	if (!(var0002 == 0x0004)) goto labelFunc08DB_0147;
	var0003 = ["nothing", "Lightning", "Mark", "Recall", "Seance"];
	var0004 = [0x0000, 0x0021, 0x0022, 0x0024, 0x0026];
	goto labelFunc08DB_0216;
labelFunc08DB_0147:
	if (!(var0002 == 0x0005)) goto labelFunc08DB_017E;
	var0003 = ["nothing", "Charm", "Dance", "Explosion", "Great Heal"];
	var0004 = [0x0000, 0x0028, 0x0029, 0x002B, 0x002C];
	goto labelFunc08DB_0216;
labelFunc08DB_017E:
	if (!(var0002 == 0x0006)) goto labelFunc08DB_01B5;
	var0003 = ["nothing", "Clone", "Magic Storm", "Poison Field", "Sleep Field"];
	var0004 = [0x0000, 0x0031, 0x0034, 0x0035, 0x0036];
	goto labelFunc08DB_0216;
labelFunc08DB_01B5:
	if (!(var0002 == 0x0007)) goto labelFunc08DB_01EC;
	var0003 = ["nothing", "Create Gold", "Delayed Blast", "Mass Charm", "Restoration"];
	var0004 = [0x0000, 0x0038, 0x003A, 0x003D, 0x003F];
	goto labelFunc08DB_0216;
labelFunc08DB_01EC:
	var0003 = ["nothing", "Armageddon", "Resurrect", "Summon", "Swordstrike"];
	var0004 = [0x0000, 0x0040, 0x0044, 0x0045, 0x0046];
labelFunc08DB_0216:
	message("\"What spell wouldst thou like to buy?\"");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc08DB_0234;
	message("\"Fine.\"");
	say();
	goto labelFunc08DB_02C0;
labelFunc08DB_0234:
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
	if (!(var0009 == 0x0001)) goto labelFunc08DB_027C;
	message("\"Done!\"");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_027C:
	if (!(var0009 == 0x0002)) goto labelFunc08DB_0291;
	message("\"Thou dost not have a spellbook.\"");
	say();
	var0000 = false;
	goto labelFunc08DB_02C0;
labelFunc08DB_0291:
	if (!(var0009 == 0x0003)) goto labelFunc08DB_02A2;
	message("\"Thou dost not have enough gold for that!\"");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_02A2:
	if (!(var0009 == 0x0004)) goto labelFunc08DB_02B3;
	message("\"Thou dost already have that spell!\"");
	say();
	goto labelFunc08DB_02B3;
labelFunc08DB_02B3:
	message("\"Wouldst thou like another spell?\"");
	say();
	var0000 = Func090A();
	goto labelFunc08DB_0026;
labelFunc08DB_02C0:
	UI_pop_answers();
	return;
}


