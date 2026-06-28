#game "blackgate"
void Func03DE shape#(0x3DE) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc03DE_007E;
	if (!(!gflags[0x0301])) goto labelFunc03DE_006F;
	gflags[0x0301] = true;
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("你感觉自己的大脑正在被探测，起初很轻柔，然后越来越强烈。久远回忆的画面在你眼前掠过，旧有的情绪重新涌上心头。在某个时刻，画面暂停了，你想起了爱、太阳、双月和死亡这些词，然后一种奇怪的既视感袭来，幻象来到了现在。画面停止，一股巨大的力量淹没了你。一道黑暗之墙落下...");
	say();
	UI_remove_npc_face(0xFE9C);
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x6E, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFE, 0x0005]);
	var0000 = UI_execute_usecode_array(item, [(byte)0x27, 0x0005, (byte)0x55, 0x02C3]);
	goto labelFunc03DE_007E;
labelFunc03DE_006F:
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("你的大脑被快速探测了一下，然后被抛开，让你感到有些不适，并充满了一种不理性的不祥预感。");
	say();
labelFunc03DE_007E:
	if (!(event == 0x0002)) goto labelFunc03DE_00B9;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x0003, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
labelFunc03DE_00B9:
	return;
}


