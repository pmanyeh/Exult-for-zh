#game "blackgate"
// externs
extern void Func08AD 0x8AD ();

void Func02F2 shape#(0x2F2) ()
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

	if (!(event == 0x0001)) goto labelFunc02F2_00D1;
	if (!(UI_get_item_frame(item) == 0x0005)) goto labelFunc02F2_00D1;
	var0000 = UI_click_on_item();
	var0001 = UI_get_item_shape(var0000);
	if (!gflags[0x01AF]) goto labelFunc02F2_00D1;
	if (!((var0001 == 0x0207) || (var0001 == 0x02EB))) goto labelFunc02F2_00D1;
	var0002 = UI_find_nearby(item, 0x02EB, 0x0028, 0x0000);
	if (!var0002) goto labelFunc02F2_00BA;
	var0003 = UI_execute_usecode_array(var0002, [(byte)0x46, 0x0001, (byte)0x58, 0x002D, (byte)0x27, 0x0002, (byte)0x58, 0x0025, (byte)0x0B, 0xFFFC, 0x0007, (byte)0x58, 0x0009, (byte)0x2D]);
	var0004 = UI_get_object_position(var0002);
	UI_sprite_effect(0x000C, (var0004[0x0001] - 0x0002), (var0004[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_remove_item(item);
labelFunc02F2_00BA:
	var0003 = UI_execute_usecode_array(0xFE9C, [(byte)0x27, 0x001C, (byte)0x55, 0x02F2]);
labelFunc02F2_00D1:
	if (!(event == 0x0002)) goto labelFunc02F2_012C;
	gflags[0x01AA] = true;
	var0005 = [0xFF71, 0xFF70, 0xFF74, 0xFF6F, 0xFF6E, 0xFF6D, 0xFF73];
	enum();
labelFunc02F2_00F9:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc02F2_011B;
	UI_clear_item_flag(var0008, 0x0001);
	UI_set_schedule_type(var0008, 0x000F);
	goto labelFunc02F2_00F9;
labelFunc02F2_011B:
	UI_show_npc_face(0xFF73, 0x0001);
	message("As the Soul Cage dissolves into dust, a great transformation comes upon the Liche. Where the evil spirit was caged you see the form of a familiar person. It's Horance! He's a ghost, but he much more resembles a man than an undead terror. ");
	say();
	Func08AD();
labelFunc02F2_012C:
	return;
}


