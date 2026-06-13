#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func08ED 0x8ED ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFF9C, 0x0000);
	message("The ape-like creature slowly and cautiously walks up to you. He, or she, sniffs for a moment, and then points to the honey you are carrying.");
	say();
	UI_add_answer(["Want honey?", "Go away!"]);
labelFunc08ED_001B:
	converse attend labelFunc08ED_007D;
	case "Want honey?" attend labelFunc08ED_0060:
	message("\"Honey will be given by you to me?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc08ED_005B;
	var0001 = UI_remove_party_items(0x0001, 0x0304, 0xFE99, 0xFE99, true);
	message("\"You are thanked.\"");
	say();
	Func0911(0x000A);
	gflags[0x0154] = true;
	goto labelFunc08ED_0060;
labelFunc08ED_005B:
	message("\"`Goodbye' is said to you.\"*");
	say();
	abort;
labelFunc08ED_0060:
	case "Go away!" attend labelFunc08ED_006D:
	message("It does.*");
	say();
	abort;
labelFunc08ED_006D:
	UI_remove_answer(["Want honey?", "Go away!"]);
	goto labelFunc08ED_001B;
labelFunc08ED_007D:
	endconv;
	return;
}


