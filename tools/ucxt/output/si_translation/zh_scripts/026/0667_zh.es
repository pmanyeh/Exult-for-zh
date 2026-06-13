#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func0667 object#(0x667) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0667_00B0;
	UI_halt_scheduled(item);
	UI_item_say(item, "@Ex Por@");
	if (!Func0951()) goto labelFunc0667_0098;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6A, (byte)0x67, (byte)0x69, (byte)0x58, 0x0014, (byte)0x27, 0x0005, (byte)0x55, 0x0667]);
	var0001 = UI_find_nearby(item, 0xFE99, 0x001E, 0x0008);
	var0002 = UI_get_party_list();
	enum();
labelFunc0667_0056:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0667_0095;
	if (!(!(var0005 in var0002))) goto labelFunc0667_0092;
	var0006 = (UI_get_distance(item, var0005) + 0x000F);
	var0000 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0667], var0006);
labelFunc0667_0092:
	goto labelFunc0667_0056;
labelFunc0667_0095:
	goto labelFunc0667_00B0;
labelFunc0667_0098:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x6A, (byte)0x67, (byte)0x69, (byte)0x55, 0x0606]);
labelFunc0667_00B0:
	if (!(event == 0x0002)) goto labelFunc0667_01F4;
	if (!(item == UI_get_npc_object(0xFE9C))) goto labelFunc0667_0197;
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0xFFFD, 0xFFFD, 0x0004, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0x0000, 0xFFFC, 0x0004, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0x0003, 0xFFFD, 0x0003, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0xFFFC, 0x0000, 0x0002, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0x0004, 0x0000, 0x0001, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0xFFFD, 0x0003, 0x0003, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0x0000, 0x0004, 0x0001, 0x0019);
	UI_obj_sprite_effect(item, 0x0003, 0x0000, 0x0000, 0x0003, 0x0003, 0x0001, 0x0019);
	goto labelFunc0667_01F4;
labelFunc0667_0197:
	var0007 = UI_die_roll(0x0001, 0x0003);
	if (!(var0007 == 0x0001)) goto labelFunc0667_01C6;
	UI_set_schedule_type(item, 0x0000);
	UI_set_attack_mode(item, 0x0007);
	UI_set_oppressor(item, 0xFE9C);
labelFunc0667_01C6:
	if (!(var0007 == 0x0002)) goto labelFunc0667_01DD;
	UI_halt_scheduled(item);
	UI_set_item_flag(item, 0x0001);
labelFunc0667_01DD:
	if (!(var0007 == 0x0003)) goto labelFunc0667_01F4;
	UI_halt_scheduled(item);
	UI_set_item_flag(item, 0x0008);
labelFunc0667_01F4:
	return;
}


