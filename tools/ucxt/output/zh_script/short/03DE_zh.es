#game "blackgate"
void Func03DE shape#(0x3DE) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc03DE_007E;
	if (!(!gflags[0x0301])) goto labelFunc03DE_006F;
	gflags[0x0301] = true;
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("你感覺自己的大腦正在被探測，起初很輕柔，然後越來越強烈。久遠回憶的畫面在你眼前掠過，舊有的情緒重新湧上心頭。在某個時刻，畫面暫停了，你想起了愛、太陽、雙月和死亡這些詞，然後一種奇怪的既視感襲來，幻象來到了現在。畫面停止，一股巨大的力量淹沒了你。一道黑暗之牆落下...");
	say();
	UI_remove_npc_face(0xFE9C);
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x6C, (byte)0x27, 0x0001, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x6E, (byte)0x27, 0x0001, (byte)0x0B, 0xFFFE, 0x0005]);
	var0000 = UI_execute_usecode_array(item, [(byte)0x27, 0x0005, (byte)0x55, 0x02C3]);
	goto labelFunc03DE_007E;
labelFunc03DE_006F:
	UI_show_npc_face(0xFE9C, UI_is_pc_female());
	message("你的大腦被快速探測了一下，然後被拋開，讓你感到有些不適，並充滿了一種不理性的不祥預感。");
	say();
labelFunc03DE_007E:
	if (!(event == 0x0002)) goto labelFunc03DE_00B9;
	UI_fade_palette(0x000C, 0x0001, 0x0001);
	var0000 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x0003, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61]);
labelFunc03DE_00B9:
	return;
}


