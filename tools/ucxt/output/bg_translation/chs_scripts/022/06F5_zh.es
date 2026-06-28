#game "blackgate"
// externs
extern var Func0881 0x881 ();

void Func06F5 object#(0x6F5) ()
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

	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian 的脸色转为死灰，但他似乎对这件经由他之手完成的工作感到满意。他那双无神的眼睛转向你，缓缓说道：「正如我所言，我本人曾尝试打造一件拥有强大力量的神器。我以一种除魔法外便无法改变的深色物质制成了剑柄。然而，剑刃的部分，是由这种物质与不列颠尼亚所知最纯净的金属合金铸成。我的天赋足以让我雕琢出这柄剑柄，但遗憾的是，我的臂力不足，无法将剑刃锤炼出完美的韧度。或许，你能替我完成这件伟大的神器...」他凭空取出一柄做工粗糙、但剑柄却极为精致的剑身。「当剑刃灼热时，不必担心触碰剑柄，因为热量似乎无法传导过那种纯净的黑色物质。愿好运与君同在。」");
	say();
	var0000 = UI_create_new_object(0x029C);
	UI_set_item_frame(var0000, 0x000D);
	var0001 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var0001) goto labelFunc06F5_003D;
	message("他把剑交给你，然后疲倦地转过身去。*");
	say();
	goto labelFunc06F5_0083;
labelFunc06F5_003D:
	message("他把剑放在火坑上，然后疲倦地转过身去。*");
	say();
	var0002 = UI_find_nearest(item, 0x02E3, 0x000A);
	var0003 = UI_get_object_position(var0002);
	var0003[0x0002] = (var0003[0x0002] - 0x0001);
	var0003[0x0003] = (var0003[0x0003] + 0x0002);
	var0004 = UI_update_last_created(var0003);
labelFunc06F5_0083:
	UI_remove_npc_face(0xFEE2);
	UI_set_schedule_type(item, 0x001D);
	UI_clear_item_flag(UI_get_npc_object(0xFE9C), 0x0010);
	var0005 = UI_execute_usecode_array(item, [(byte)0x27, 0x000D]);
	var0006 = Func0881();
	var0007 = UI_delayed_execute_usecode_array(var0006, [(byte)0x2C, (byte)0x2D], 0x000D);
	var0008 = UI_execute_usecode_array(UI_get_npc_object(0xFE9C), [(byte)0x27, 0x000B, (byte)0x55, 0x069D]);
	gflags[0x0312] = true;
	return;
}


