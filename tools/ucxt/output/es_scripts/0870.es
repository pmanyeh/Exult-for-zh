#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0870 0x870 (var var0000, var var0001, var var0002)
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
	if (!var0003) goto labelFunc0870_0169;
	message("\"Which of my services dost thou have need of?\"");
	say();
	var0004 = ["heal", "cure poison", "resurrect"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "heal") || (var0005 == "cure poison"))) goto labelFunc0870_008F;
	if (!(var0005 == "heal")) goto labelFunc0870_0058;
	var0006 = "healed";
	var0007 = var0000;
labelFunc0870_0058:
	if (!(var0005 == "cure poison")) goto labelFunc0870_006E;
	var0006 = "cured of poison";
	var0007 = var0001;
labelFunc0870_006E:
	message("\"Who dost thou wish to be ");
	message(var0006);
	message("?\"");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc0870_008F;
	message("\"Very well. It pleases me that thou art healthy.\"");
	say();
	goto labelFunc0870_016D;
labelFunc0870_008F:
	if (!(var0005 == "resurrect")) goto labelFunc0870_00E3;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc0870_00D9;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc0870_00D9;
	message("\"I do not see anyone who needs resurrecting. I must be able to see the body to resurrect. If thou art carrying thy friend, pray lay them on the ground so that I may attend to them.\"");
	say();
	abort;
labelFunc0870_00D9:
	message("\"Thy friend is badly wounded. I will attempt to restore them.\"");
	say();
	var0007 = var0002;
labelFunc0870_00E3:
	message("\"My price is ");
	message(var0007);
	message(" gold. Is this price agreeable?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0870_0162;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc0870_015B;
	if (!(var0005 == "heal")) goto labelFunc0870_012C;
	Func091D(var0008, var0007);
	goto labelFunc0870_0158;
labelFunc0870_012C:
	if (!(var0005 == "cure poison")) goto labelFunc0870_0142;
	Func091E(var0008, var0007);
	goto labelFunc0870_0158;
labelFunc0870_0142:
	if (!(var0005 == "resurrect")) goto labelFunc0870_0158;
	Func091F(var000A, var0007);
	goto labelFunc0870_0158;
labelFunc0870_0158:
	goto labelFunc0870_015F;
labelFunc0870_015B:
	message("\"Tsk, tsk. Thou dost not have enough gold for the service. I do hope I may help thee another day.\"");
	say();
labelFunc0870_015F:
	goto labelFunc0870_0166;
labelFunc0870_0162:
	message("\"Then thou must look elsewhere for that service.\"");
	say();
labelFunc0870_0166:
	goto labelFunc0870_016D;
labelFunc0870_0169:
	message("\"If thou hast need of my services later, I will be here.\"");
	say();
labelFunc0870_016D:
	UI_pop_answers();
	return;
}


