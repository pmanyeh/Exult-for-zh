#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func016B shape#(0x16B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!((event == 0x0000) && (Func0994() == 0x000E))) goto labelFunc016B_0058;
	UI_clear_item_say(item);
	var0000 = ["@I want an eyeball!@", "@Yes, mistress!@", "@We must hurry!@", "@Break his bones...@", "@I cannot wait!@", "@Skin him alive!@"];
	Func097F(item, var0000[UI_get_random(UI_get_array_size(var0000))], 0x0000);
	if (!(UI_get_random(0x000A) == 0x0001)) goto labelFunc016B_0058;
	UI_set_schedule_type(item, 0x0004);
labelFunc016B_0058:
	if (!(event == 0x0002)) goto labelFunc016B_00D0;
	var0001 = UI_find_nearby(item, 0x016B, 0x001E, 0x0000);
	if (!var0001) goto labelFunc016B_00D0;
	var0002 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x016B], UI_get_random(0x0014));
	var0003 = UI_get_object_position(var0001);
	UI_sprite_effect(0x001B, (var0003[0x0001] - 0x0001), (var0003[0x0002] - 0x0003), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_kill_npc(var0001);
labelFunc016B_00D0:
	return;
}


