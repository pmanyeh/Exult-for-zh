#game "blackgate"
void Func08B5 0x8B5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	message("「如果你想尋找這座島嶼，你可以使用我的船。它現在停泊在 Vesper 的南岸，名為黃金安卡號（Golden Ankh）。只要你有需要，請隨時使用它。」");
	say();
	var0000 = UI_create_new_object(0x031D);
	UI_set_item_frame(var0000, 0x0001);
	var0001 = UI_set_item_quality(var0000, 0x002C);
	var0002 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	var0003 = false;
	if (!var0002) goto labelFunc08B5_0044;
	message("不列顛王將船契交給了你。");
	say();
	goto labelFunc08B5_005A;
labelFunc08B5_0044:
	var0002 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("不列顛王將船契交給你，但它從你手中滑落，掉到了地上。");
	say();
	var0003 = true;
labelFunc08B5_005A:
	message("「我還調整了一顆魔法水晶，將其對準烈焰城堡（Castle of Fire）的入口，那是在你與 Exodus 戰鬥後我重新整修的。來，拿著。也許它能給你一些啟發。不過要注意，它非常不穩定，越靠近它所對準的位置，就越容易碎裂。」");
	say();
	var0004 = UI_create_new_object(0x02F8);
	UI_set_item_frame(var0004, 0x000E);
	var0005 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var0005) goto labelFunc08B5_008D;
	message("不列顛王將水晶交給了你。");
	say();
	goto labelFunc08B5_00AD;
labelFunc08B5_008D:
	var0005 = UI_update_last_created(UI_get_object_position(0xFE9C));
	if (!(!var0003)) goto labelFunc08B5_00A9;
	message("不列顛王將水晶交給你，但它從你手中滑落，掉到了地上。幸運的是，它完好無損。");
	say();
	goto labelFunc08B5_00AD;
labelFunc08B5_00A9:
	message("不列顛王將水晶交給你，而你超載的狀態再次讓你變得笨拙。幸運的是，在摔了一下之後，它依然完好無損。");
	say();
labelFunc08B5_00AD:
	gflags[0x02FE] = true;
	return;
}


