#game "blackgate"
void Func06A0 object#(0x6A0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;

	var0000 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	enum();
labelFunc06A0_0022:
	for (var0007 in var0000 with var0005 to var0006) attend labelFunc06A0_00D8;
	var0008 = UI_get_item_quality(var0007);
	var0009 = UI_get_item_frame(var0007);
	var000A = UI_get_object_position(var0007);
	if (!(var0009 == 0x0006)) goto labelFunc06A0_00D5;
	if (!(var0008 == 0x0003)) goto labelFunc06A0_0095;
	var000B = UI_find_nearest(var0007, 0x02A3, 0x0001);
	var000C = UI_get_item_frame(var000B);
	if (!var000B) goto labelFunc06A0_0095;
	if (!(var000C == 0x0010)) goto labelFunc06A0_0095;
	var0001 = var000B;
	var0002 = var000A;
labelFunc06A0_0095:
	if (!(var0008 == 0x0007)) goto labelFunc06A0_00D5;
	var000B = UI_find_nearest(var0007, 0x03E7, 0x0001);
	var000C = UI_get_item_frame(var000B);
	if (!var000B) goto labelFunc06A0_00D5;
	if (!(var000C == 0x0001)) goto labelFunc06A0_00D5;
	var0003 = var000B;
	var0004 = var000A;
labelFunc06A0_00D5:
	goto labelFunc06A0_0022;
labelFunc06A0_00D8:
	if (!var0001) goto labelFunc06A0_0188;
	if (!var0003) goto labelFunc06A0_0185;
	UI_show_npc_face(0xFEE2, 0x0001);
	message("在抱怨以太的無用和討厭的跨次元生物的低聲咒罵中，Erethian 吟唱起魔法咒語，");
	say();
	message("\"An Vas Ailem!   Kal Bet Ailem!\"*");
	say();
	UI_remove_npc_face(0xFEE2);
	var000D = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x27, 0x0004, (byte)0x70, (byte)0x27, 0x0003, (byte)0x61, (byte)0x27, 0x0003, (byte)0x55, 0x06A1]);
	UI_remove_item(var0001);
	UI_remove_item(var0003);
	UI_sprite_effect(0x0005, (var0002[0x0001] - 0x0002), (var0002[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_sprite_effect(0x0004, (var0004[0x0001] - 0x0001), (var0004[0x0002] - 0x0002), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0008);
labelFunc06A0_0185:
	goto labelFunc06A0_02B7;
labelFunc06A0_0188:
	var000E = false;
	var0000 = UI_find_nearby(item, 0x0113, 0x000A, 0x0010);
	enum();
labelFunc06A0_019E:
	for (var0007 in var0000 with var000F to var0010) attend labelFunc06A0_0220;
	var0008 = UI_get_item_quality(var0007);
	var0009 = UI_get_item_frame(var0007);
	var000A = UI_get_object_position(var0007);
	if (!(var0009 == 0x0006)) goto labelFunc06A0_021D;
	if (!(var0008 == 0x000A)) goto labelFunc06A0_021D;
	var0011 = UI_find_nearby(var0007, 0x0320, 0x0001, 0x0000);
	if (!var0011) goto labelFunc06A0_021D;
	enum();
labelFunc06A0_01F5:
	for (var0014 in var0011 with var0012 to var0013) attend labelFunc06A0_021D;
	var0015 = UI_get_object_position(var0014);
	if (!(var0015 == var000A)) goto labelFunc06A0_021A;
	var000E = var0014;
labelFunc06A0_021A:
	goto labelFunc06A0_01F5;
labelFunc06A0_021D:
	goto labelFunc06A0_019E;
labelFunc06A0_0220:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("年邁法師佈滿皺紋的眉頭上出現了小汗珠。「這比我預期的還要難一點。」他停下來用袖子尖擦了擦額頭，「我得引導一條地下小河，讓水井打水。那麼，現在你需要一些工具，才能使用這些設備，不是嗎？」他自問自答，同時再次準備向這個世界釋放他的意志。");
	say();
	if (!var000E) goto labelFunc06A0_024C;
	var0016 = UI_get_item_quality(var000E);
	if (!(var0016 == 0x0064)) goto labelFunc06A0_024C;
	message("他停頓了一下，然後說，「如果碰巧你有將某些東西放在這裡的地板上，你可以在那邊的箱子裡找到它。」他指了指地上的箱子，然後繼續他的法術。*");
	say();
labelFunc06A0_024C:
	UI_remove_npc_face(0xFEE2);
	if (!gflags[0x0003]) goto labelFunc06A0_027F;
	var000D = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x70, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0002, (byte)0x55, 0x06A1]);
	goto labelFunc06A0_02B7;
labelFunc06A0_027F:
	var000D = UI_execute_usecode_array(item, [(byte)0x27, 0x0002, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0003, (byte)0x6C, (byte)0x27, 0x0002, (byte)0x61, (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0004, (byte)0x55, 0x06A2]);
labelFunc06A0_02B7:
	return;
}


