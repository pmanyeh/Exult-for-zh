#game "blackgate"
// externs
extern void Func0639 object#(0x639) ();

void Func01FA shape#(0x1FA) ()
{
	var var0000;

	if (!(event == 0x0002)) goto labelFunc01FA_0041;
	UI_show_npc_face(0xFFE6, 0x0000);
	message("Batlin watches Hook's death with icy resignation. Time seems to slow as he turns to you. \"This battle is not done, Avatar. Dost thou imagine thyself an immortal? The Guardian is far more. Return to your precious Earth and rest.~Sleep, that he may visit your dreams with countless visions of death in the belly of the Great Sea Serpent.\"");
	say();
	message("\"As for me, I shall begone! Thou shalt never find me! Farewell, Avatar!\"");
	say();
	UI_remove_npc_face(0xFFE6);
	var0000 = UI_find_nearby(0xFE9C, 0x0193, 0x0028, 0x0000);
	event = 0x0001;
	var0000[0x0001]->Func0639();
labelFunc01FA_0041:
	return;
}


