#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func087C 0x87C ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE5, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc087C_0015;
	message("The ape-like creature slowly and cautiously walks up to you. He, or she, sniffs for a moment, and then points to the honey you are carrying.");
	say();
labelFunc087C_0015:
	UI_add_answer(["Want honey?", "Go away!"]);
labelFunc087C_0022:
	converse attend labelFunc087C_0098;
	case "Want honey?" attend labelFunc087C_007B:
	message("\"Honey will be given by you to me?\"");
	say();
	var0000 = Func090A();
	if (!var0000) goto labelFunc087C_0069;
	var0001 = UI_remove_party_items(0x0001, 0x0304, 0xFE99, 0xFE99, true);
	message("\"You are thanked.\"");
	say();
	if (!(!gflags[0x0154])) goto labelFunc087C_0066;
	Func0911(0x000A);
	gflags[0x0154] = true;
labelFunc087C_0066:
	goto labelFunc087C_007B;
labelFunc087C_0069:
	if (!gflags[0x0154]) goto labelFunc087C_0076;
	message("The Emp appears very disappointed.\"");
	say();
	goto labelFunc087C_007B;
labelFunc087C_0076:
	message("\"`Goodbye' is said to you.\"*");
	say();
	abort;
labelFunc087C_007B:
	case "Go away!" attend labelFunc087C_0088:
	message("It does.*");
	say();
	abort;
labelFunc087C_0088:
	UI_remove_answer(["Want honey?", "Go away!"]);
	goto labelFunc087C_0022;
labelFunc087C_0098:
	endconv;
	return;
}


