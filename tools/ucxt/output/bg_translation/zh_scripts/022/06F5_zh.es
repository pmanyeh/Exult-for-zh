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
	message("Erethian 的臉色轉為死灰，但他似乎對這件經由他之手完成的工作感到滿意。他那雙無神的眼睛轉向你，緩緩說道：「正如我所言，我本人曾嘗試打造一件擁有強大力量的神器。我以一種除魔法外便無法改變的深色物質製成了劍柄。然而，劍刃的部分，是由這種物質與不列顛尼亞所知最純淨的金屬合金鑄成。我的天賦足以讓我雕琢出這柄劍柄，但遺憾的是，我的臂力不足，無法將劍刃錘煉出完美的韌度。或許，你能替我完成這件偉大的神器...」他憑空取出一柄做工粗糙、但劍柄卻極為精緻的劍身。「當劍刃灼熱時，不必擔心觸碰劍柄，因為熱量似乎無法傳導過那種純淨的黑色物質。願好運與君同在。」");
	say();
	var0000 = UI_create_new_object(0x029C);
	UI_set_item_frame(var0000, 0x000D);
	var0001 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var0001) goto labelFunc06F5_003D;
	message("他把劍交給你，然後疲倦地轉過身去。*");
	say();
	goto labelFunc06F5_0083;
labelFunc06F5_003D:
	message("他把劍放在火坑上，然後疲倦地轉過身去。*");
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


