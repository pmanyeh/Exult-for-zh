#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern void Func091D 0x91D (var var0000, var var0001);
extern void Func091E 0x91E (var var0000, var var0001);
extern void Func091F 0x91F (var var0000, var var0001);

void Func08D2 0x8D2 (var var0000, var var0001, var var0002)
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
	message("\"Dost thou want mine aid?\"");
	say();
	UI_push_answers();
	var0004 = Func090A();
	if (!var0004) goto labelFunc08D2_0179;
	message("\"What is thy need?\"");
	say();
	var0005 = ["healing", "curing", "resurrection"];
	var0006 = Func090B(var0005);
	if (!((var0006 == "healing") || (var0006 == "curing"))) goto labelFunc08D2_0095;
	if (!(var0006 == "healing")) goto labelFunc08D2_005E;
	var0007 = "healed";
	var0008 = var0000;
labelFunc08D2_005E:
	if (!(var0006 == "curing")) goto labelFunc08D2_0074;
	var0007 = "cured";
	var0008 = var0001;
labelFunc08D2_0074:
	message("\"Who needs to be ");
	message(var0007);
	message("?\"");
	say();
	var0009 = Func090E();
	if (!(var0009 == 0x0000)) goto labelFunc08D2_0095;
	message("\"None of you seem to require mine aid.\"~~She appears pleased.");
	say();
	goto labelFunc08D2_0183;
labelFunc08D2_0095:
	if (!(var0006 == "resurrection")) goto labelFunc08D2_00E7;
	var000A = UI_get_avatar_ref();
	var000B = UI_find_nearest(var000A, 0x0190, 0x0019);
	var0008 = var0002;
	if (!(var000B == 0x0000)) goto labelFunc08D2_00E7;
	var000B = UI_find_nearest(var000A, 0x019E, 0x0019);
	if (!(var000B == 0x0000)) goto labelFunc08D2_00E7;
	message("\"I am sorry, but thou hast not presented anyone to me who requires mine assistance. If there is someone who truly needs my skills, I must have a closer look.\"");
	say();
	goto labelFunc08D2_0183;
labelFunc08D2_00E7:
	message("\"I must charge thee ");
	message(var0008);
	message(" gold. Is this price agreeable?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc08D2_016C;
	var000D = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000D >= var0008)) goto labelFunc08D2_015F;
	if (!(var0006 == "healing")) goto labelFunc08D2_0130;
	Func091D(var0009, var0008);
	goto labelFunc08D2_015C;
labelFunc08D2_0130:
	if (!(var0006 == "curing")) goto labelFunc08D2_0146;
	Func091E(var0009, var0008);
	goto labelFunc08D2_015C;
labelFunc08D2_0146:
	if (!(var0006 == "resurrection")) goto labelFunc08D2_015C;
	Func091F(var000B, var0008);
	goto labelFunc08D2_015C;
labelFunc08D2_015C:
	goto labelFunc08D2_0169;
labelFunc08D2_015F:
	message("\"I am sorry, ");
	message(var0003);
	message(", but thou dost not have enough gold. Perhaps, I will be able to aid thee next time.\"");
	say();
labelFunc08D2_0169:
	goto labelFunc08D2_0176;
labelFunc08D2_016C:
	message("\"Then I cannot help thee, ");
	message(var0003);
	message(". I am truly sorry, but my fees are set.\"");
	say();
labelFunc08D2_0176:
	goto labelFunc08D2_0183;
labelFunc08D2_0179:
	message("\"I am glad of that, ");
	message(var0003);
	message(". I am happy to help those in need, but I would be far happier if there were never a need!\"");
	say();
labelFunc08D2_0183:
	UI_pop_answers();
	return;
}


