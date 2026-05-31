#game "blackgate"
void Func0895 0x895 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFEDF, 0x0000);
	message("Bollux stares ahead, almost vacantly. Despite his features and lack of motion, it is apparent by his expression that some of Castambre's magic still resides within.");
	say();
	var0000 = UI_find_nearby(item, 0x03F7, 0x0028, 0x0000);
	enum();
labelFunc0895_0020:
	for (var0003 in var0000 with var0001 to var0002) attend labelFunc0895_0079;
	if (!(UI_get_cont_items(item, 0x031D, 0x00F3, 0x0004) || (UI_get_item_quality(UI_find_nearby(item, 0x031D, 0x0001, 0x00B0)) == 0x00F3))) goto labelFunc0895_0076;
	message("\"Bollux turns to see Adjar standing nearby, quite alive. Instantly, Bollux's expression changes detectably.");
	say();
	UI_remove_npc_face(0xFEDF);
	UI_show_npc_face(0xFEDF, 0x0001);
	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar simply smiles.~\"Greetings, brother.\"");
	say();
labelFunc0895_0076:
	goto labelFunc0895_0020;
labelFunc0895_0079:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0895_0089:
	converse attend labelFunc0895_00D3;
	case "name" attend labelFunc0895_00B7:
	UI_remove_answer("name");
	if (!gflags[0x031D]) goto labelFunc0895_00AF;
	UI_remove_answer("name");
	message("He tilts his head and stares at you quizzicaly.~ \"I apologize. Did I not already tell thee my master called me Bollux?\"");
	say();
	goto labelFunc0895_00B7;
labelFunc0895_00AF:
	message("\"My master named me Bollux.");
	say();
	gflags[0x031D] = true;
labelFunc0895_00B7:
	case "job" attend labelFunc0895_00C3:
	message("\"I am here... to guard the Shrine... of Love.\"");
	say();
labelFunc0895_00C3:
	case "bye" attend labelFunc0895_00D0:
	message("\"Fare thee... well.\"*");
	say();
	abort;
labelFunc0895_00D0:
	goto labelFunc0895_0089;
labelFunc0895_00D3:
	endconv;
	return;
}


