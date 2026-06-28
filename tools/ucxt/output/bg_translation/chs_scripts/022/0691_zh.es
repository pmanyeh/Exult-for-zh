#game "blackgate"
void Func0691 object#(0x691) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0002)) goto labelFunc0691_004D;
	var0000 = UI_find_nearest(UI_get_npc_object(0xFE9C), 0x029C, 0x0002);
	var0001 = UI_get_object_position(var0000);
	var0002 = UI_execute_usecode_array(item, [(byte)0x58, 0x002D]);
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x27, 0x0001, (byte)0x55, 0x0690]);
labelFunc0691_004D:
	if (!(event == 0x0001)) goto labelFunc0691_00FC;
	var0003 = UI_get_random(0x0064);
	if (!(!gflags[0x032D])) goto labelFunc0691_008D;
	if (!(var0003 > 0x0042)) goto labelFunc0691_008A;
	gflags[0x032D] = true;
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("过了一会儿，你注意到刀刃明显变利了。");
	say();
	UI_remove_npc_face(0xFE9C);
labelFunc0691_008A:
	goto labelFunc0691_00FC;
labelFunc0691_008D:
	if (!(!gflags[0x032E])) goto labelFunc0691_00E6;
	if (!(var0003 > 0x0042)) goto labelFunc0691_00BF;
	gflags[0x032E] = true;
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("你觉得自己已经尽力了，但这把剑感觉还是不太对劲。作为一把武器，它太重、太笨拙了。");
	say();
	gflags[0x0337] = true;
	UI_remove_npc_face(0xFE9C);
	goto labelFunc0691_00E3;
labelFunc0691_00BF:
	if (!(var0003 < 0x0014)) goto labelFunc0691_00E3;
	gflags[0x032D] = false;
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("最后一击可能太重了，需要一段时间才能敲平瑕疵。");
	say();
	UI_remove_npc_face(0xFE9C);
labelFunc0691_00E3:
	goto labelFunc0691_00FC;
labelFunc0691_00E6:
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("刀刃已经被打磨得非常好了。需要某种魔法才能将这把剑胚变成可用的武器。");
	say();
	UI_remove_npc_face(0xFE9C);
labelFunc0691_00FC:
	return;
}


