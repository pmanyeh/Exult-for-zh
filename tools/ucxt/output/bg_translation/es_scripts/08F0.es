#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func08F0 0x8F0 ()
{
	var var0000;
	var var0001;

	var0000 = Func0909();
	var0001 = Func08F7(0xFF70);
	if (!var0001) goto labelFunc08F0_0083;
	message("The couple haven't released their embrace since they were first reunited as far as you can tell, and they show no sign of doing so any time in the near future.");
	say();
	UI_add_answer("bye");
labelFunc08F0_0020:
	converse attend labelFunc08F0_007F;
	case "sacrifice" attend labelFunc08F0_006F:
	if (!(!gflags[0x019E])) goto labelFunc08F0_005E;
	UI_show_npc_face(0xFF70, 0x0001);
	message("\"No, ");
	message(var0000);
	message(". Wouldst thou take my beloved from me so shortly after our reunion? Another will have to perform this terrible task.\" Rowena holds on tightly to her husband.");
	say();
	gflags[0x019E] = true;
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF72, 0x0001);
	goto labelFunc08F0_0068;
labelFunc08F0_005E:
	message("\"I cannot leave my lady like this. Surely thou dost understand, ");
	message(var0000);
	message(".\"");
	say();
labelFunc08F0_0068:
	UI_remove_answer("sacrifice");
labelFunc08F0_006F:
	case "bye" attend labelFunc08F0_007C:
	message("The couple continue staring into one another's eyes as if to make up for all of the years they lost.*");
	say();
	abort;
labelFunc08F0_007C:
	goto labelFunc08F0_0020;
labelFunc08F0_007F:
	endconv;
	goto labelFunc08F0_0088;
labelFunc08F0_0083:
	message("\"Why, I must again find my darling Rowena! Where could she have gone to?*");
	say();
	abort;
labelFunc08F0_0088:
	return;
}


