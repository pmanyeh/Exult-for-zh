#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0956 0x956 (var var0000);

void Func0887 0x887 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(UI_get_item_frame(var0000) == 0x0000)) goto labelFunc0887_006A;
	var0001 = UI_get_object_position(var0000);
	UI_remove_item(var0000);
	var0002 = UI_create_new_object(0x03BE);
	if (!var0002) goto labelFunc0887_005B;
	var0003 = UI_remove_party_items(0x0001, 0x0289, 0xFE99, 0x000D, true);
	UI_set_item_frame(var0002, 0x0003);
	var0004 = UI_update_last_created(var0001);
	gflags[0x02FF] = true;
labelFunc0887_005B:
	var0005 = [0x091F, 0x0BA1, 0x0000];
labelFunc0887_006A:
	if (!(UI_get_item_frame(var0000) == 0x0001)) goto labelFunc0887_00CE;
	var0006 = Func0992(0x0001, 0x0000, 0x0000, false);
	UI_show_npc_face0(var0006, 0x0000);
	message("\"Up or down?\"");
	say();
	if (!(Func0956(["Up", "Down"]) == "Up")) goto labelFunc0887_00BB;
	var0005 = [0x092D, 0x0B71, 0x0000];
	goto labelFunc0887_00CA;
labelFunc0887_00BB:
	var0005 = [0x094D, 0x0BC1, 0x0000];
labelFunc0887_00CA:
	UI_remove_npc_face0();
labelFunc0887_00CE:
	if (!(UI_get_item_frame(var0000) == 0x0002)) goto labelFunc0887_00EB;
	var0005 = [0x091F, 0x0BA1, 0x0000];
labelFunc0887_00EB:
	if (!(UI_get_item_frame(var0000) == 0x0003)) goto labelFunc0887_0108;
	var0005 = [0x091F, 0x0BA1, 0x0000];
labelFunc0887_0108:
	UI_fade_palette(0x000C, 0x0001, 0x0000);
	UI_move_object(0xFE9B, var0005);
	var0002 = UI_delayed_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x55, 0x060D], 0x0003);
	return;
}


