#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0718 object#(0x718) ()
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

	if (!(event == 0x0002)) goto labelFunc0718_01D4;
	UI_show_npc_face0(0xFF68, 0x0000);
	message("\"I am undone -- I am outside the Temple, and now the years burden me...\"");
	say();
	message("\"Take the Chaos Stone from my dead body... it shall be the token that thou needest to summon the shade...\"");
	say();
	message("\"The body lies in the garden of the Temple of Enthusiasm, in the northeast by the Gate of the Serpent...\"");
	say();
	message("\"Now I go into the Void!\"");
	say();
	var0000 = UI_get_object_position(0xFF68);
	var0000[0x0001] = (var0000[0x0001] - (var0000[0x0003] / 0x0002));
	var0000[0x0002] = (var0000[0x0002] - (var0000[0x0003] / 0x0002));
	UI_sprite_effect(0x0009, var0000[0x0001], var0000[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0000 = UI_get_object_position(0xFF68);
	UI_remove_npc(0xFF68);
	var0001 = UI_create_new_object(0x019E);
	if (!var0001) goto labelFunc0718_01CA;
	UI_set_item_frame(var0001, 0x0018);
	var0002 = UI_update_last_created(var0000);
	if (!(!var0002)) goto labelFunc0718_00D5;
	var0002 = UI_update_last_created([(var0000[0x0001] - 0x0002), var0000[0x0002], var0000[0x0003]]);
labelFunc0718_00D5:
	if (!(!var0002)) goto labelFunc0718_00FC;
	var0002 = UI_update_last_created([var0000[0x0001], (var0000[0x0002] - 0x0002), var0000[0x0003]]);
labelFunc0718_00FC:
	if (!(!var0002)) goto labelFunc0718_0123;
	var0002 = UI_update_last_created([(var0000[0x0001] + 0x0002), var0000[0x0002], var0000[0x0003]]);
labelFunc0718_0123:
	if (!(!var0002)) goto labelFunc0718_014A;
	var0002 = UI_update_last_created([var0000[0x0001], (var0000[0x0002] + 0x0002), var0000[0x0003]]);
labelFunc0718_014A:
	if (!var0002) goto labelFunc0718_01C3;
	var0003 = UI_get_cont_items(0xFF68, 0xFE99, 0xFE99, 0xFE99);
	enum();
labelFunc0718_0164:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc0718_0196;
	var0007 = UI_set_last_created(var0006);
	if (!var0007) goto labelFunc0718_0193;
	UI_set_item_flag(var0006, 0x000B);
	var0007 = UI_give_last_created(var0001);
labelFunc0718_0193:
	goto labelFunc0718_0164;
labelFunc0718_0196:
	if (!UI_get_cont_items(var0001, 0xFE99, 0xFE99, 0xFE99)) goto labelFunc0718_01C0;
	UI_clear_item_say(0xFE9C);
	var0007 = Func0992(0xFFFD, "@Something in the ashes?@", "@Something in the ashes?@", true);
labelFunc0718_01C0:
	goto labelFunc0718_01CA;
labelFunc0718_01C3:
	UI_remove_item(var0001);
labelFunc0718_01CA:
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc0718_01D4:
	if (!(event == 0x0003)) goto labelFunc0718_023F;
	var0008 = UI_get_party_list2();
	if (!(UI_get_npc_object(0xFF68) in var0008)) goto labelFunc0718_023F;
	UI_remove_from_party(0xFF68);
	UI_set_schedule_type(0xFF68, 0x000F);
	UI_set_item_flag(0xFE9C, 0x0010);
	var0002 = UI_execute_usecode_array(0xFF68, [(byte)0x23, (byte)0x52, "@The weight of the years!@", (byte)0x6C, (byte)0x27, 0x0002, (byte)0x6D, (byte)0x27, 0x0002, (byte)0x6E, (byte)0x27, 0x0002, (byte)0x55, 0x0718]);
	UI_remove_item(item);
labelFunc0718_023F:
	return;
}


