#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090D 0x90D ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0879 0x879 (var var0000, var var0001, var var0002)
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

	message("\"Art thou in need of healing, curing, or resurrection?\"");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0879_0167;
	message("\"Which of my services dost thou have need of?\"");
	say();
	var0004 = ["heal", "cure poison", "resurrect"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "heal") || (var0005 == "cure poison"))) goto labelFunc0879_008F;
	if (!(var0005 == "heal")) goto labelFunc0879_0058;
	var0006 = "healed";
	var0007 = var0000;
labelFunc0879_0058:
	if (!(var0005 == "cure poison")) goto labelFunc0879_006E;
	var0006 = "cured of poison";
	var0007 = var0001;
labelFunc0879_006E:
	message("\"Whom dost thou wish to have ");
	message(var0006);
	message("?\"");
	say();
	var0008 = Func090D();
	if (!(var0008 == 0x0000)) goto labelFunc0879_008F;
	message("\"Though I want thy business, I am pleased to see my services are not needed!\"");
	say();
	goto labelFunc0879_016B;
labelFunc0879_008F:
	if (!(var0005 == "resurrect")) goto labelFunc0879_00E1;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc0879_00CA;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
labelFunc0879_00CA:
	if (!(var000A == 0x0000)) goto labelFunc0879_00DB;
	message("\"Well, I do not seem to see anyone who needs mine assistance. Unless thou art carrying someone in thy packs....\" He laughs.*");
	say();
	goto labelFunc0879_016B;
labelFunc0879_00DB:
	var0007 = var0002;
labelFunc0879_00E1:
	message("\"My price is ");
	message(var0007);
	message(" gold. Dost thou agree?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0879_0160;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc0879_0159;
	if (!(var0005 == "heal")) goto labelFunc0879_012A;
	Func091D(var0008, var0007);
	goto labelFunc0879_0156;
labelFunc0879_012A:
	if (!(var0005 == "cure poison")) goto labelFunc0879_0140;
	Func091E(var0008, var0007);
	goto labelFunc0879_0156;
labelFunc0879_0140:
	if (!(var0005 == "resurrect")) goto labelFunc0879_0156;
	Func091F(var000A, var0007);
	goto labelFunc0879_0156;
labelFunc0879_0156:
	goto labelFunc0879_015D;
labelFunc0879_0159:
	message("\"Thou dost not have that much gold! Mayhaps thou couldst return with more and purchase the service then.\"");
	say();
labelFunc0879_015D:
	goto labelFunc0879_0164;
labelFunc0879_0160:
	message("\"Then thou must look elsewhere for that service.\"");
	say();
labelFunc0879_0164:
	goto labelFunc0879_016B;
labelFunc0879_0167:
	message("\"Very well. If thou hast need of my services later, I will be available.\"");
	say();
labelFunc0879_016B:
	UI_pop_answers();
	return;
}


