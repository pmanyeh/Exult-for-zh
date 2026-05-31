#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090C 0x90C (var var0000);
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func089E 0x89E (var var0000, var var0001, var var0002)
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;

	var0003 = UI_get_npc_object(0xFFFB);
	var0004 = UI_get_party_list();
	message("\"I am able to heal, cure poison, and resurrect. Art thou interested in one of these services?\"");
	say();
	UI_push_answers();
	var0005 = Func090A();
	if (!var0005) goto labelFunc089E_0295;
	message("\"Which of my services dost thou have need of?\"");
	say();
	var0006 = ["heal", "cure poison", "resurrect"];
	var0007 = Func090B(var0006);
	if (!((var0007 == "heal") || (var0007 == "cure poison"))) goto labelFunc089E_012E;
	if (!(var0007 == "heal")) goto labelFunc089E_0069;
	var0008 = "healed";
	var0009 = var0000;
labelFunc089E_0069:
	if (!(var0007 == "cure poison")) goto labelFunc089E_007F;
	var0008 = "cured of poison";
	var0009 = var0001;
labelFunc089E_007F:
	message("\"Who dost thou wish to be ");
	message(var0008);
	message("?\"");
	say();
	var000A = UI_get_npc_name(UI_get_party_list2());
	var000B = UI_get_party_list2();
	var000C = [];
	var000D = [];
	enum();
labelFunc089E_00A8:
	for (var0010 in var000B with var000E to var000F) attend labelFunc089E_00DC;
	if (!(var0010 != UI_get_npc_object(0xFFFB))) goto labelFunc089E_00D9;
	var000C = (var000C & UI_get_npc_name(var0010));
	var000D = (var000D & var0010);
labelFunc089E_00D9:
	goto labelFunc089E_00A8;
labelFunc089E_00DC:
	var0011 = [0x0000, var000D];
	var0012 = Func090C(["Nobody", var000C]);
	var0013 = var0011[var0012];
	if (!(var0013 == 0x0000)) goto labelFunc089E_0113;
	var0014 = 0x0000;
	goto labelFunc089E_011D;
labelFunc089E_0113:
	var0014 = UI_get_npc_number(var0013);
labelFunc089E_011D:
	if (!(var0014 == 0x0000)) goto labelFunc089E_012E;
	message("\"Avatar! Thou dost tell me to prepare to heal and then thou dost tell me 'Nobody'! Is this thine idea of a joke? Healing is a serious business!\"");
	say();
	goto labelFunc089E_0299;
labelFunc089E_012E:
	if (!(var0007 == "resurrect")) goto labelFunc089E_019B;
	var0015 = UI_get_avatar_ref();
	var0016 = UI_find_nearest(var0015, 0x0190, 0x0019);
	if (!(var0016 == 0x0000)) goto labelFunc089E_0178;
	var0016 = UI_find_nearest(var0015, 0x019E, 0x0019);
	if (!(var0016 == 0x0000)) goto labelFunc089E_0178;
	message("\"I do believe I am going blind. I do not see anyone who is in need of resurrection. Art thou fooling me again, or art thou hiding the injured one? I must be able to see the person to help them. If thou art carrying thy friend in thy pack, pray lay them on the ground so that I may perform my duties as thou hast requested.\"");
	say();
	abort;
labelFunc089E_0178:
	message("\"Indeed, thy friend is grievously wounded. Make room here, and I will heal them to the best of mine abilities.\"");
	say();
	if (!(var0003 in var0004)) goto labelFunc089E_018F;
	var0002 = 0x0000;
	goto labelFunc089E_0195;
labelFunc089E_018F:
	var0002 = 0x0190;
labelFunc089E_0195:
	var0009 = var0002;
labelFunc089E_019B:
	if (!(var0003 in var0004)) goto labelFunc089E_020F;
	message("\"Since I am travelling in thy group, I shall waive my fee.\"");
	say();
	if (!(var0007 == "heal")) goto labelFunc089E_01CA;
	Func091D(var0014, var0009);
	gflags[0x0029] = true;
	UI_set_timer(0x000A);
	goto labelFunc089E_0292;
labelFunc089E_01CA:
	if (!(var0007 == "cure poison")) goto labelFunc089E_01EB;
	Func091E(var0014, var0009);
	gflags[0x0029] = true;
	UI_set_timer(0x000A);
	goto labelFunc089E_0292;
labelFunc089E_01EB:
	if (!(var0007 == "resurrect")) goto labelFunc089E_020C;
	Func091F(var0016, var0009);
	gflags[0x0029] = true;
	UI_set_timer(0x000A);
	goto labelFunc089E_0292;
labelFunc089E_020C:
	goto labelFunc089E_0292;
labelFunc089E_020F:
	message("\"My price is ");
	message(var0009);
	message(" gold. Is this price agreeable?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc089E_028E;
	var0017 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0017 >= var0009)) goto labelFunc089E_0287;
	if (!(var0007 == "heal")) goto labelFunc089E_0258;
	Func091D(var0014, var0009);
	goto labelFunc089E_0292;
labelFunc089E_0258:
	if (!(var0007 == "cure poison")) goto labelFunc089E_026E;
	Func091E(var0014, var0009);
	goto labelFunc089E_0292;
labelFunc089E_026E:
	if (!(var0007 == "resurrect")) goto labelFunc089E_0284;
	Func091F(var0016, var0009);
	goto labelFunc089E_0292;
labelFunc089E_0284:
	goto labelFunc089E_028B;
labelFunc089E_0287:
	message("\"Thou dost not have that much gold! Mayhaps thou couldst return with more and purchase the service then.\"");
	say();
labelFunc089E_028B:
	goto labelFunc089E_0292;
labelFunc089E_028E:
	message("\"Then thou must look elsewhere for that service.\"");
	say();
labelFunc089E_0292:
	goto labelFunc089E_0299;
labelFunc089E_0295:
	message("\"If thou hast need of my services later, I will be here.\"");
	say();
labelFunc089E_0299:
	UI_pop_answers();
	return;
}


