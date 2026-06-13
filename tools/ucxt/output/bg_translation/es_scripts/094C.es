#game "blackgate"
// externs
extern var Func090C 0x90C (var var0000);
extern var Func0924 0x924 (var var0000, var var0001);
extern var Func090A 0x90A ();

void Func094C 0x94C ()
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
	var0001 = [0x001E, 0x0032, 0x0046, 0x005A, 0x0078, 0x008C];
labelFunc094C_0020:
	if (!var0000) goto labelFunc094C_0257;
	message("\"To be interested in which circle?\"");
	say();
	var0002 = Func090C(["none", "First", "Second", "Third", "Fourth", "Fifth", "Sixth"]);
	var0002 = (var0002 - 0x0001);
	if (!(var0002 == 0x0000)) goto labelFunc094C_0070;
	if (!gflags[0x0003]) goto labelFunc094C_0069;
	message("\"To understand.\"");
	say();
	goto labelFunc094C_006D;
labelFunc094C_0069:
	message("\"To wonder why you bother me so!\"");
	say();
labelFunc094C_006D:
	goto labelFunc094C_0257;
labelFunc094C_0070:
	if (!(var0002 == 0x0001)) goto labelFunc094C_00A7;
	var0003 = ["nothing", "Great Ignite", "Great Douse", "Locate", "Light"];
	var0004 = [0x0000, 0x000C, 0x000B, 0x000E, 0x000D];
	goto labelFunc094C_01AD;
labelFunc094C_00A7:
	if (!(var0002 == 0x0002)) goto labelFunc094C_00DE;
	var0003 = ["nothing", "Fire Blast", "Enchant", "Destroy Trap", "Great Light"];
	var0004 = [0x0000, 0x0012, 0x0011, 0x0010, 0x0013];
	goto labelFunc094C_01AD;
labelFunc094C_00DE:
	if (!(var0002 == 0x0003)) goto labelFunc094C_0115;
	var0003 = ["nothing", "Paralyze", "Poison", "Curse", "Swarm"];
	var0004 = [0x0000, 0x001C, 0x001E, 0x0018, 0x001A];
	goto labelFunc094C_01AD;
labelFunc094C_0115:
	if (!(var0002 == 0x0004)) goto labelFunc094C_014C;
	var0003 = ["nothing", "Lightning", "Mass Curse", "Reveal", "Conjure"];
	var0004 = [0x0000, 0x0021, 0x0023, 0x0025, 0x0020];
	goto labelFunc094C_01AD;
labelFunc094C_014C:
	if (!(var0002 == 0x0005)) goto labelFunc094C_0183;
	var0003 = ["nothing", "Mass Sleep", "Explosion", "Dispel Field", "Fire Field"];
	var0004 = [0x0000, 0x002F, 0x002B, 0x002A, 0x002E];
	goto labelFunc094C_01AD;
labelFunc094C_0183:
	var0003 = ["nothing", "Fire Ring", "Clone", "Flame Strike", "Tremor"];
	var0004 = [0x0000, 0x0032, 0x0031, 0x0033, 0x0037];
labelFunc094C_01AD:
	message("\"To buy which spell?\"");
	say();
	var0005 = Func090C(var0003);
	if (!(var0005 == 0x0001)) goto labelFunc094C_01CB;
	message("\"To be fine.\"");
	say();
	goto labelFunc094C_0257;
labelFunc094C_01CB:
	var0006 = var0004[var0005];
	var0007 = var0001[var0002];
	var0008 = var0003[var0005];
	message("\"To cost ");
	message(var0007);
	message(" gold for ");
	message(var0008);
	message(" spell.\"");
	say();
	var0009 = Func0924(var0006, var0007);
	if (!(var0009 == 0x0001)) goto labelFunc094C_0213;
	message("\"To agree!\"");
	say();
	goto labelFunc094C_024A;
labelFunc094C_0213:
	if (!(var0009 == 0x0002)) goto labelFunc094C_0228;
	message("\"To be without a spellbook, human.\"");
	say();
	var0000 = false;
	goto labelFunc094C_0257;
labelFunc094C_0228:
	if (!(var0009 == 0x0003)) goto labelFunc094C_0239;
	message("\"To have not have enough gold for that!\"");
	say();
	goto labelFunc094C_024A;
labelFunc094C_0239:
	if (!(var0009 == 0x0004)) goto labelFunc094C_024A;
	message("\"To see you already have that spell.\"");
	say();
	goto labelFunc094C_024A;
labelFunc094C_024A:
	message("\"To be interested in another spell?\"");
	say();
	var0000 = Func090A();
	goto labelFunc094C_0020;
labelFunc094C_0257:
	UI_pop_answers();
	return;
}


