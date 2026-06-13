#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern var Func0908 0x908 ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func08B4 0x8B4 (var var0000, var var0001, var var0002)
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

	message("\"I can still heal, cure poison, and sometimes resurrect. Art thou in need of one of these?\"");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc08B4_00F1;
	message("\"Of which service dost thou have need?\"");
	say();
	var0004 = ["heal", "cure poison", "resurrect"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "heal") || (var0005 == "cure poison"))) goto labelFunc08B4_008F;
	if (!(var0005 == "heal")) goto labelFunc08B4_0058;
	var0006 = "healed";
	var0007 = var0000;
labelFunc08B4_0058:
	if (!(var0005 == "cure poison")) goto labelFunc08B4_006E;
	var0006 = "cured of poison";
	var0007 = var0001;
labelFunc08B4_006E:
	message("\"Who dost thou wish to be ");
	message(var0006);
	message("?\"");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc08B4_008F;
	message("\"'Tis good to hear that thou art well. Do not hesitate to come and see me if thou dost need healing of any kind.\"");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_008F:
	if (!(var0005 == "resurrect")) goto labelFunc08B4_00E7;
	var0009 = Func0908();
	var000A = UI_get_avatar_ref();
	var000B = UI_find_nearest(var000A, 0x0190, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc08B4_00D0;
	var000B = UI_find_nearest(var000A, 0x019E, 0x0019);
labelFunc08B4_00D0:
	if (!(var000B == 0x0000)) goto labelFunc08B4_00E7;
	message("\"I do apologize, ");
	message(var0009);
	message(", but I do not see anyone who must be resurrected. I must be able to see the body. If thou art carrying thine unlucky companion, please lay them on the ground.\"");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_00E7:
	message("\"Indeed, this person is badly wounded. I will attempt to return them to health.\"");
	say();
	var0007 = var0002;
labelFunc08B4_00F1:
	message("\"Of course, it will never cost thee anything to use mine healing services.\"");
	say();
	if (!(var0005 == "heal")) goto labelFunc08B4_010F;
	Func091D(var0008, var0007);
	message("\"Done!\"");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_010F:
	if (!(var0005 == "cure poison")) goto labelFunc08B4_0129;
	Func091E(var0008, var0007);
	message("\"Done!\"");
	say();
	goto labelFunc08B4_014A;
labelFunc08B4_0129:
	if (!(var0005 == "resurrect")) goto labelFunc08B4_0146;
	Func091F(var000B, var0007);
	message("\"Done!\"");
	say();
	goto labelFunc08B4_014A;
	goto labelFunc08B4_014A;
labelFunc08B4_0146:
	message("\"If thou hast need of my services later, I will be here.\"");
	say();
labelFunc08B4_014A:
	UI_pop_answers();
	return;
}


