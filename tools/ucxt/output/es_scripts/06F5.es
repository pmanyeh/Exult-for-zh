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
	message("Erethian's face begins to take on an ashen palor, but he looks contented with a job well done. \"As I have said, I myself once attempted to create an artifact of great power. I crafted the hilt from a dark substance that is immutable, save by magical means. The blade, however, is cast of an alloy of this substance and the purest metals known to Britannia. My artistic skills served me well enough to fashion the hilt but, alas, the strength was not in my arm to beat a good temper into the blade. Perhaps, thou canst finish this great artifact for me...\" He pulls a poorly worked blade with a fine hilt out of thin air. \"Fear not to touch the hilt when the blade is hot, for heat apparently does not travel well across the medium of the pure, black substance. I wish thee good luck.\"");
	say();
	var0000 = UI_create_new_object(0x029C);
	UI_set_item_frame(var0000, 0x000D);
	var0001 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var0001) goto labelFunc06F5_003D;
	message("He hands the sword to you and wearily turns away.*");
	say();
	goto labelFunc06F5_0083;
labelFunc06F5_003D:
	message("He places the sword upon the firepit and wearily turns away.\"*");
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


