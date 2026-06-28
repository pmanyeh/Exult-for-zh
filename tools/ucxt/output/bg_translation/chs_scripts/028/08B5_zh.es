#game "blackgate"
void Func08B5 0x8B5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	message("「如果你想寻找这座岛屿，你可以使用我的船。它现在停泊在 Vesper 的南岸，名为黄金安卡号（Golden Ankh）。只要你有需要，请随时使用它。」");
	say();
	var0000 = UI_create_new_object(0x031D);
	UI_set_item_frame(var0000, 0x0001);
	var0001 = UI_set_item_quality(var0000, 0x002C);
	var0002 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	var0003 = false;
	if (!var0002) goto labelFunc08B5_0044;
	message("不列颠王将船契交给了你。");
	say();
	goto labelFunc08B5_005A;
labelFunc08B5_0044:
	var0002 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("不列颠王将船契交给你，但它从你手中滑落，掉到了地上。");
	say();
	var0003 = true;
labelFunc08B5_005A:
	message("「我还调整了一颗魔法水晶，将其对准烈焰城堡（Castle of Fire）的入口，那是在你与 Exodus 战斗后我重新整修的。来，拿着。也许它能给你一些启发。不过要注意，它非常不稳定，越靠近它所对准的位置，就越容易碎裂。」");
	say();
	var0004 = UI_create_new_object(0x02F8);
	UI_set_item_frame(var0004, 0x000E);
	var0005 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var0005) goto labelFunc08B5_008D;
	message("不列颠王将水晶交给了你。");
	say();
	goto labelFunc08B5_00AD;
labelFunc08B5_008D:
	var0005 = UI_update_last_created(UI_get_object_position(0xFE9C));
	if (!(!var0003)) goto labelFunc08B5_00A9;
	message("不列颠王将水晶交给你，但它从你手中滑落，掉到了地上。幸运的是，它完好无损。");
	say();
	goto labelFunc08B5_00AD;
labelFunc08B5_00A9:
	message("不列颠王将水晶交给你，而你超载的状态再次让你变得笨拙。幸运的是，在摔了一下之后，它依然完好无损。");
	say();
labelFunc08B5_00AD:
	gflags[0x02FE] = true;
	return;
}


