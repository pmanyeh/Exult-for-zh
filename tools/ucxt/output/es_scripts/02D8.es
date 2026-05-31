#game "blackgate"
void Func02D8 shape#(0x2D8) ()
{
	if (!(event == 0x0001)) goto labelFunc02D8_0027;
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc02D8_0027;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Thou dost need a blacksmith to do that. I wager my dad could do it... I mean, could have... if he were still alive...\"");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc02D8_0027:
	return;
}


