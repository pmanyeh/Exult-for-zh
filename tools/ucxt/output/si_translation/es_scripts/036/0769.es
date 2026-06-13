#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0998 0x998 (var var0000, var var0001);

void Func0769 object#(0x769) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0003)) goto labelFunc0769_014B;
	var0000 = UI_create_new_object2(0x03D5, [0x0BC7, 0x0A0C, 0x0001]);
	if (!var0000) goto labelFunc0769_014B;
	UI_clear_item_flag(var0000, 0x0012);
	var0001 = Func099B(var0000, 0x0001, 0x0281, 0x00E6, 0x0007, 0x0000, false);
	var0001 = Func099B(var0000, 0x0001, 0x0281, 0x00DF, 0x0009, 0x0000, false);
	UI_set_alignment(var0000, 0x0002);
	UI_set_schedule_type(var0000, 0x0000);
	var0002 = UI_get_npc_prop(var0000, 0x0000);
	var0003 = (0x0019 - var0002);
	var0001 = UI_set_npc_prop(var0000, 0x0000, var0003);
	var0002 = UI_get_npc_prop(var0000, 0x0001);
	var0003 = (0x0015 - var0002);
	var0001 = UI_set_npc_prop(var0000, 0x0001, var0003);
	var0002 = UI_get_npc_prop(var0000, 0x0002);
	var0003 = (0x001E - var0002);
	var0001 = UI_set_npc_prop(var0000, 0x0002, var0003);
	var0002 = UI_get_npc_prop(var0000, 0x0004);
	var0003 = (0x001E - var0002);
	var0001 = UI_set_npc_prop(var0000, 0x0004, var0003);
	var0002 = UI_get_npc_prop(var0000, 0x0003);
	var0003 = (0x001E - var0002);
	var0001 = UI_set_npc_prop(var0000, 0x0003, var0003);
	Func0998(UI_get_npc_object(0xFE9C), 0x037F);
	UI_play_sound_effect(0x002A);
labelFunc0769_014B:
	return;
}


