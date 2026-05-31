#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func08EE 0x8EE ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFFFA, 0x0000);
	message("The ape-like creature slowly and cautiously walks up to you. He, or she, sniffs for a moment, and then points to the honey you are carrying.");
	say();
	UI_add_answer(["Want honey?", "Go away!"]);
labelFunc08EE_001B:
	converse attend labelFunc08EE_007D;
	case "Want honey?" attend labelFunc08EE_006D:
	message("\"Honey will be given by you to me?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc08EE_005B;
	var0001 = UI_remove_party_items(0x0001, 0x0304, 0xFE99, 0xFE99, true);
	message("\"You are thanked.\"");
	say();
	Func0911(0x000A);
	gflags[0x0154] = true;
	goto labelFunc08EE_0060;
labelFunc08EE_005B:
	message("\"`Goodbye' is said to you.\"*");
	say();
	abort;
labelFunc08EE_0060:
	UI_remove_answer(["Want honey?", "Go away!"]);
labelFunc08EE_006D:
	case "Go away!" attend labelFunc08EE_007A:
	message("It does.*");
	say();
	abort;
labelFunc08EE_007A:
	goto labelFunc08EE_001B;
labelFunc08EE_007D:
	endconv;
	return;
}


