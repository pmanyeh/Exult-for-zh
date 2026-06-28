#game "blackgate"
void Func02D8 shape#(0x2D8) ()
{
	if (!(event == 0x0001)) goto labelFunc02D8_0027;
	if (!UI_npc_nearby(0xFFFE)) goto labelFunc02D8_0027;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"你得找個鐵匠來做那件事。我敢打賭我爸能做到……我的意思是，如果他還活著，他就能做到……\"");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc02D8_0027:
	return;
}


