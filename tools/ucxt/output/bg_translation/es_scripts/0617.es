#game "blackgate"
void Func0617 object#(0x617) ()
{
	var var0000;
	var var0001;

	gflags[0x01A8] = true;
	if (!(event == 0x0001)) goto labelFunc0617_0048;
	var0000 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x2C, (byte)0x55, 0x0617], 0x0014);
	var0001 = UI_find_nearest(item, 0x02EB, 0x0028);
	var0000 = UI_delayed_execute_usecode_array(var0001, [(byte)0x2C, (byte)0x46, 0x0001], 0x0013);
labelFunc0617_0048:
	if (!(event == 0x0002)) goto labelFunc0617_0078;
	UI_set_schedule_type(item, 0x000F);
	if (!UI_npc_nearby(0xFF72)) goto labelFunc0617_0074;
	UI_show_npc_face(0xFF72, 0x0001);
	message("\"There. It is done. Now take the blasted thing to Mordra. She will instruct thee in its use.\"");
	say();
	abort;
	goto labelFunc0617_0078;
labelFunc0617_0074:
	gflags[0x01CE] = true;
labelFunc0617_0078:
	return;
}


