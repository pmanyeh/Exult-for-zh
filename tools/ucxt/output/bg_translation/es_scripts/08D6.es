#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func08D6 0x8D6 ()
{
	var var0000;
	var var0001;

	var0000 = Func0909();
	var0001 = Func08F7(0xFF72);
	if (!(!var0001)) goto labelFunc08D6_001E;
	message("\"Where, oh where has my dear husband gone. I cannot stand to be away from him!\"*");
	say();
	abort;
	goto labelFunc08D6_0089;
labelFunc08D6_001E:
	message("As far as you can tell, the couple haven't released their embrace since they were first reunited, and they show no sign of doing so at any time in the near future.");
	say();
	UI_add_answer("bye");
labelFunc08D6_0029:
	converse attend labelFunc08D6_0088;
	case "sacrifice" attend labelFunc08D6_0078:
	UI_remove_answer("sacrifice");
	if (!(!gflags[0x019D])) goto labelFunc08D6_006E;
	UI_show_npc_face(0xFF72, 0x0001);
	message("\"No, ");
	message(var0000);
	message(". She is my life. If thou takest her, thou takest mine heart.\" Trent holds on tightly to his wife.");
	say();
	gflags[0x019D] = true;
	UI_remove_npc_face(0xFF72);
	UI_show_npc_face(0xFF70, 0x0001);
	goto labelFunc08D6_0078;
labelFunc08D6_006E:
	message("\"I cannot leave my lord like this. Surely thou canst understand, ");
	message(var0000);
	message(".\"");
	say();
labelFunc08D6_0078:
	case "bye" attend labelFunc08D6_0085:
	message("The couple continue staring into one another's eyes as if to make up for all of the years they lost.*");
	say();
	abort;
labelFunc08D6_0085:
	goto labelFunc08D6_0029;
labelFunc08D6_0088:
	endconv;
labelFunc08D6_0089:
	return;
}


