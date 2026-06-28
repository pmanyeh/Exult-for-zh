#game "blackgate"
void Func069E object#(0x69E) ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 布满皱纹的脸上露出冷酷坚决的神情。他卷起袖子，就像个准备为容易紧张的马匹钉马蹄铁的铁匠，");
	say();
	message("「现在要小心。」这位老法师关切地说：「我即将释放的力量是变化无常的。我不希望看到有什么不幸的事情发生在你身上。」");
	say();
	if (!gflags[0x0003]) goto labelFunc069E_001F;
	message("当法师从周围汲取力量时，你感觉到以太的一阵强烈涌动。*");
	say();
	goto labelFunc069E_0023;
labelFunc069E_001F:
	message("你感觉到以太的一阵强烈涌动，这似乎暂时稳定了这个区域的以太。*");
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


