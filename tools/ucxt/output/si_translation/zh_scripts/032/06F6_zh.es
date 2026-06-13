#game "serpentisle"
// externs
extern void Func09AD 0x9AD (var var0000);

void Func06F6 object#(0x6F6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_get_object_position(item);
	if (!(event == 0x0003)) goto labelFunc06F6_016F;
	var0001 = UI_get_item_quality(item);
	UI_sprite_effect(0x000D, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	if (!(var0001 == 0x0000)) goto labelFunc06F6_0048;
	UI_error_message("Egg quality not set.");
labelFunc06F6_0048:
	if (!(var0001 == 0x0001)) goto labelFunc06F6_0089;
	var0002 = UI_create_new_object2(0x016B, var0000);
	if (!var0002) goto labelFunc06F6_006B;
	Func09AD(var0002);
labelFunc06F6_006B:
	var0002 = UI_set_item_quality(item, 0x0003);
	var0002 = UI_delayed_execute_usecode_array(item, [(byte)0x55, 0x06F6], 0x000A);
labelFunc06F6_0089:
	if (!(var0001 == 0x0002)) goto labelFunc06F6_00C4;
	var0003 = UI_create_new_object2(0x01F5, var0000);
	if (!var0003) goto labelFunc06F6_00C4;
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_oppressor(var0003, 0xFE9C);
labelFunc06F6_00C4:
	if (!(var0001 == 0x0003)) goto labelFunc06F6_011B;
	var0000[0x0002] = (var0000[0x0002] - 0x000A);
	UI_sprite_effect(0x000D, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_create_new_object2(0x016B, var0000);
	if (!var0002) goto labelFunc06F6_0116;
	Func09AD(var0002);
labelFunc06F6_0116:
	UI_remove_item(item);
labelFunc06F6_011B:
	var0002 = UI_find_nearby(item, 0x025F, 0x0014, 0x0010);
	if (!var0002) goto labelFunc06F6_016F;
	var0000 = UI_get_object_position(var0002);
	UI_sprite_effect(0x000D, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0002 = UI_execute_usecode_array(var0002, [(byte)0x23, (byte)0x52, "@Kal Xen!@"]);
labelFunc06F6_016F:
	return;
}


