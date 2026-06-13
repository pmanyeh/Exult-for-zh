#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func0860 0x860 (var var0000, var var0001, var var0002)
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

	var0003 = Func0909();
	message("\"I am able to heal, cure poison, and resurrect. Art thou in need of one of these services?\"");
	say();
	UI_push_answers();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0860_0175;
	message("\"Which of my services dost thou need?\"");
	say();
	var0005 = ["heal", "cure poison", "resurrect"];
	var0006 = Func090B(var0005);
	if (!((var0006 == "heal") || (var0006 == "cure poison"))) goto labelFunc0860_0095;
	if (!(var0006 == "heal")) goto labelFunc0860_005E;
	var0007 = "healed";
	var0008 = var0000;
labelFunc0860_005E:
	if (!(var0006 == "cure poison")) goto labelFunc0860_0074;
	var0007 = "cured of poison";
	var0008 = var0001;
labelFunc0860_0074:
	message("\"Who dost thou wish to be ");
	message(var0007);
	message("?\"");
	say();
	var0009 = Func090E();
	if (!(var0009 == 0x0000)) goto labelFunc0860_0095;
	message("\"So thou art healthy? 'Tis good news. If thou dost need my services in the future, do not hesitate to return.\"");
	say();
	goto labelFunc0860_0179;
labelFunc0860_0095:
	if (!(var0006 == "resurrect")) goto labelFunc0860_00EF;
	var000A = UI_get_avatar_ref();
	var000B = UI_find_nearest(var000A, 0x0190, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc0860_00E5;
	var000B = UI_find_nearest(var000A, 0x019E, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc0860_00E5;
	message("\"I apologize, ");
	message(var0003);
	message(", but I do not see anyone who is in need of resurrection. I must be able to see the body to save the spirit. If thou art carrying thy misfortunate friend, pray lay them on the ground so that I may return them to this world.\"");
	say();
	abort;
labelFunc0860_00E5:
	message("\"Indeed, thy friend has departed this life. I will attempt to restore them to this world.\"");
	say();
	var0008 = var0002;
labelFunc0860_00EF:
	message("\"My price is ");
	message(var0008);
	message(" gold. Is this satisfactory?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0860_016E;
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var0008)) goto labelFunc0860_0167;
	if (!(var0006 == "heal")) goto labelFunc0860_0138;
	Func091D(var0009, var0008);
	goto labelFunc0860_0164;
labelFunc0860_0138:
	if (!(var0006 == "cure poison")) goto labelFunc0860_014E;
	Func091E(var0009, var0008);
	goto labelFunc0860_0164;
labelFunc0860_014E:
	if (!(var0006 == "resurrect")) goto labelFunc0860_0164;
	Func091F(var000B, var0008);
	goto labelFunc0860_0164;
labelFunc0860_0164:
	goto labelFunc0860_016B;
labelFunc0860_0167:
	message("\"Thou dost not have any gold. I am truly sorry. I cannot help thee until thou canst provide the proper fee.\" Chantu bows respectfully.");
	say();
labelFunc0860_016B:
	goto labelFunc0860_0172;
labelFunc0860_016E:
	message("\"Then I am truly sorry. I must charge what I must charge. We do not live in prosperous times.\"");
	say();
labelFunc0860_0172:
	goto labelFunc0860_0179;
labelFunc0860_0175:
	message("\"Well, if thou dost decide that my services are needed, I am always here.\"");
	say();
labelFunc0860_0179:
	UI_pop_answers();
	return;
}


