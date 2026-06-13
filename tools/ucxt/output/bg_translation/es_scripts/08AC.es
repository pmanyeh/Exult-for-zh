#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func08AC 0x8AC (var var0000, var var0001, var var0002)
{
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

	message("\"I am qualified to heal, cure poison, and resurrect. Art thou interested in one of these services?\"");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08AC_016B;
	message("\"Which of my services dost thou have need of?\"");
	say();
	var0004 = ["heal", "cure poison", "resurrect"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "heal") || (var0005 == "cure poison"))) goto labelFunc08AC_008F;
	if (!(var0005 == "heal")) goto labelFunc08AC_0058;
	var0006 = "healed";
	var0007 = var0000;
labelFunc08AC_0058:
	if (!(var0005 == "cure poison")) goto labelFunc08AC_006E;
	var0006 = "cured of poison";
	var0007 = var0001;
labelFunc08AC_006E:
	message("\"Who dost thou wish to have ");
	message(var0006);
	message("?\"");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc08AC_008F;
	message("\"Excellent, thou art uninjured!\"");
	say();
	goto labelFunc08AC_016F;
labelFunc08AC_008F:
	if (!(var0005 == "resurrect")) goto labelFunc08AC_00E5;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc08AC_00DB;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc08AC_00DB;
	message("\"There seems to be no one who needs such assistance. Perhaps, if I have overlooked anyone, thou couldst set him or her before me.\"*");
	say();
	goto labelFunc08AC_016F;
labelFunc08AC_00DB:
	var0007 = var0002;
	message("\"Indeed, this individual needs restoration!\"");
	say();
labelFunc08AC_00E5:
	message("\"My price is ");
	message(var0007);
	message(" gold. Art thou interested?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc08AC_0164;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc08AC_015D;
	if (!(var0005 == "heal")) goto labelFunc08AC_012E;
	Func091D(var0008, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_012E:
	if (!(var0005 == "cure poison")) goto labelFunc08AC_0144;
	Func091E(var0008, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_0144:
	if (!(var0005 == "resurrect")) goto labelFunc08AC_015A;
	Func091F(var000A, var0007);
	goto labelFunc08AC_015A;
labelFunc08AC_015A:
	goto labelFunc08AC_0161;
labelFunc08AC_015D:
	message("\"Thou dost not have enough gold! Mayhaps thou couldst return when thou hast more.\"");
	say();
labelFunc08AC_0161:
	goto labelFunc08AC_0168;
labelFunc08AC_0164:
	message("\"Then thou must go elsewhere.\"");
	say();
labelFunc08AC_0168:
	goto labelFunc08AC_016F;
labelFunc08AC_016B:
	message("\"If thou needest my services later, I will be here.\"");
	say();
labelFunc08AC_016F:
	UI_pop_answers();
	return;
}


