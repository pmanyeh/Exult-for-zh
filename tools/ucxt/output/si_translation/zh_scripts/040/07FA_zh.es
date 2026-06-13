#game "serpentisle"
// externs
extern void Func08A2 0x8A2 ();
extern void Func08A3 0x8A3 ();
extern void Func08A4 0x8A4 ();
extern void Func08A5 0x8A5 ();
extern var Func08A0 0x8A0 (var var0000);

void Func07FA object#(0x7FA) ()
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
	var var0009;
	var var000A;

	if (!(UI_get_item_quality(item) == 0x00C8)) goto labelFunc07FA_0368;
	var0000 = UI_find_nearby(item, 0x0314, 0x000F, 0x00B0);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x46, 0x0008, (byte)0x2C], 0x0002);
	enum();
labelFunc07FA_0033:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc07FA_0095;
	if (!(UI_get_item_quality(var0004) == 0x00D1)) goto labelFunc07FA_005A;
	var0005 = (UI_get_item_frame(var0004) % 0x0002);
labelFunc07FA_005A:
	if (!(UI_get_item_quality(var0004) == 0x00D0)) goto labelFunc07FA_0076;
	var0006 = (UI_get_item_frame(var0004) % 0x0002);
labelFunc07FA_0076:
	if (!(UI_get_item_quality(var0004) == 0x00CE)) goto labelFunc07FA_0092;
	var0007 = (UI_get_item_frame(var0004) % 0x0002);
labelFunc07FA_0092:
	goto labelFunc07FA_0033;
labelFunc07FA_0095:
	if (!((!var0005) && ((!var0006) && ((!var0007) && (!gflags[0x02C4]))))) goto labelFunc07FA_0110;
	var0000 = UI_find_nearby(item, 0x0382, 0x0019, 0x0000);
	var0008 = UI_get_object_position(var0000);
	UI_sprite_effect(0x0012, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0055);
	var0001 = UI_set_item_quality(item, 0x00C9);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07FA], 0x0005);
	gflags[0x02C4] = true;
labelFunc07FA_0110:
	if (!(var0005 && ((!var0006) && ((!var0007) && (!gflags[0x02C5]))))) goto labelFunc07FA_01BD;
	var0000 = UI_find_nearby(item, 0x0382, 0x000F, 0x0000);
	var0004 = UI_create_new_object(0x032A);
	if (!var0004) goto labelFunc07FA_01BD;
	UI_set_item_frame(var0004, 0x0003);
	var0008 = UI_get_object_position(var0000);
	var0008[0x0003] = 0x0001;
	var0001 = UI_update_last_created(var0008);
	if (!var0001) goto labelFunc07FA_01BD;
	UI_sprite_effect(0x0012, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0001 = UI_set_item_quality(item, 0x00CA);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07FA], 0x0005);
	gflags[0x02C5] = true;
labelFunc07FA_01BD:
	if (!((!var0005) && (var0006 && ((!var0007) && (!gflags[0x02C6]))))) goto labelFunc07FA_0260;
	var0000 = UI_find_nearby(item, 0x0382, 0x000F, 0x0000);
	var0004 = UI_create_new_object(0x02F8);
	if (!var0004) goto labelFunc07FA_0260;
	var0008 = UI_get_object_position(var0000);
	var0008[0x0003] = 0x0001;
	var0001 = UI_update_last_created(var0008);
	if (!var0001) goto labelFunc07FA_0260;
	UI_sprite_effect(0x0012, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0001 = UI_set_item_quality(item, 0x00CB);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07FA], 0x0005);
	gflags[0x02C6] = true;
labelFunc07FA_0260:
	if (!(var0005 && (var0006 && ((!var0007) && (!gflags[0x02C7]))))) goto labelFunc07FA_0302;
	var0000 = UI_find_nearby(item, 0x0382, 0x000F, 0x0000);
	var0004 = UI_create_new_object(0x0179);
	if (!var0004) goto labelFunc07FA_0302;
	var0008 = UI_get_object_position(var0000);
	var0008[0x0003] = 0x0001;
	var0001 = UI_update_last_created(var0008);
	if (!var0001) goto labelFunc07FA_0302;
	UI_sprite_effect(0x0012, var0008[0x0001], var0008[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0039);
	var0001 = UI_set_item_quality(item, 0x00CC);
	var0001 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x07FA], 0x0005);
	gflags[0x02C7] = true;
labelFunc07FA_0302:
	if (!((!var0005) && ((!var0006) && (var0007 && (!gflags[0x02C8]))))) goto labelFunc07FA_031D;
	Func08A2();
	goto labelFunc07FA_0368;
labelFunc07FA_031D:
	if (!(var0005 && ((!var0006) && var0007))) goto labelFunc07FA_0332;
	Func08A3();
	goto labelFunc07FA_0368;
labelFunc07FA_0332:
	if (!((!var0005) && (var0006 && (var0007 && (!gflags[0x02CA]))))) goto labelFunc07FA_034C;
	Func08A4();
	goto labelFunc07FA_0368;
labelFunc07FA_034C:
	if (!(var0005 && (var0006 && (var0007 && (!gflags[0x02CB]))))) goto labelFunc07FA_0365;
	Func08A5();
	goto labelFunc07FA_0368;
labelFunc07FA_0365:
	Func08A3();
labelFunc07FA_0368:
	if (!(event == 0x0002)) goto labelFunc07FA_0432;
	var0009 = UI_get_item_quality(item);
	var000A = Func08A0(0x0003);
	if (!(var000A != 0x0045)) goto labelFunc07FA_0427;
	if (!(var0009 == 0x00C9)) goto labelFunc07FA_03AB;
	UI_show_npc_face0(var000A, 0x0000);
	message("\"What pleasant music! 'Tis strangely soothing... I could stand here for hours and listen to it...\"");
	say();
	message("\"Surely it would not hurt to tarry for a bit...\"");
	say();
	UI_remove_npc_face0();
labelFunc07FA_03AB:
	if (!(var0009 == 0x00CA)) goto labelFunc07FA_03CB;
	UI_show_npc_face0(var000A, 0x0000);
	message("\"Wine! Praise the Virtues! I could use a drink right now...\"");
	say();
	message("\"Come, let us toast our friendship and hope for a speedy end to this journey!\"");
	say();
	UI_remove_npc_face0();
labelFunc07FA_03CB:
	if (!(var0009 == 0x00CB)) goto labelFunc07FA_03EB;
	UI_show_npc_face0(var000A, 0x0000);
	message("\"Look! A wondrous gem! This would easily buy enough provisions to last the entire quest!\"");
	say();
	message("\"Or think what a fine gift this would be for Lord British! He would be impressed, to be sure.\"");
	say();
	UI_remove_npc_face0();
labelFunc07FA_03EB:
	if (!(var0009 == 0x00CC)) goto labelFunc07FA_040B;
	UI_show_npc_face0(var000A, 0x0000);
	message("\"I have not seen food this rich in a long time! The aroma is marvelous!\"");
	say();
	message("\"'Twould be a shame for all this to go to waste...\"");
	say();
	UI_remove_npc_face0();
labelFunc07FA_040B:
	if (!(var0009 == 0x00CD)) goto labelFunc07FA_0427;
	UI_show_npc_face0(var000A, 0x0000);
	message("\"Perhaps something more needs to be done.\"");
	say();
	UI_remove_npc_face0();
labelFunc07FA_0427:
	var0001 = UI_set_item_quality(item, 0x00C8);
labelFunc07FA_0432:
	return;
}


