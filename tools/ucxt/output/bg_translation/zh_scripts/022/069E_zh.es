#game "blackgate"
void Func069E object#(0x69E) ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 佈滿皺紋的臉上露出冷酷堅決的神情。他捲起袖子，就像個準備為容易緊張的馬匹釘馬蹄鐵的鐵匠，");
	say();
	message("「現在要小心。」這位老法師關切地說：「我即將釋放的力量是變化無常的。我不希望看到有什麼不幸的事情發生在你身上。」");
	say();
	if (!gflags[0x0003]) goto labelFunc069E_001F;
	message("當法師從周圍汲取力量時，你感覺到以太的一陣強烈湧動。*");
	say();
	goto labelFunc069E_0023;
labelFunc069E_001F:
	message("你感覺到以太的一陣強烈湧動，這似乎暫時穩定了這個區域的以太。*");
	say();
labelFunc069E_0023:
	UI_remove_npc_face(0xFEE2);
	var0000 = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0009, (byte)0x6C, (byte)0x27, 0x0001, (byte)0x61, (byte)0x27, 0x0001, (byte)0x70, (byte)0x27, 0x0001, (byte)0x6F, (byte)0x55, 0x069F]);
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x0011, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x003E);
	return;
}


