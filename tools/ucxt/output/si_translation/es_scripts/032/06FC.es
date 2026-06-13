#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func06FC object#(0x6FC) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!gflags[0x025C]) goto labelFunc06FC_000C;
	UI_remove_item(item);
	abort;
labelFunc06FC_000C:
	if (!(!UI_npc_nearby(0xFFFE))) goto labelFunc06FC_0018;
	abort;
labelFunc06FC_0018:
	UI_play_music(0x0038, Func09A0(0x0005, 0x0001));
	var0000 = UI_create_new_object2(0x01E2, UI_get_object_position(item));
	UI_set_alignment(var0000, 0x0001);
	UI_play_sound_effect(0x0039);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x01A8, 0x0005, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x0359, 0x0002, 0xFE99, 0x0012);
	var0001 = UI_add_cont_items(var0000, 0x0001, 0x02A4, 0x0005, 0xFE99, 0x0012);
	var0002 = UI_get_item_quality(item);
	UI_remove_item(item);
	UI_show_npc_face0(0xFEE2, 0x0000);
	if (!(var0002 == 0x0000)) goto labelFunc06FC_00CC;
	message("\"So, thou didst finally think to return, King? It is too late! All are dead, the Goblins conquered all...\"");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@Too late!@"]);
labelFunc06FC_00CC:
	if (!(var0002 == 0x0001)) goto labelFunc06FC_00F2;
	message("\"Here is where my body did lie, until the Goblins pillaged the tomb...\"");
	say();
	message("\"I died of a broken heart, waiting for thy return...\"");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@Betrayer!@"]);
labelFunc06FC_00F2:
	if (!(var0002 == 0x0002)) goto labelFunc06FC_0114;
	message("\"To think I loved thee once! I wrote thee notes of love, letters of trust -- but thou didst remember me no more, when Lord British summoned thee to his aid!\"");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@Damn British!@"]);
labelFunc06FC_0114:
	if (!(var0002 > 0x0002)) goto labelFunc06FC_0136;
	message("\"Welcome to the Castle of King Shamino, the Betrayer! Let me greet thee...\"");
	say();
	var0001 = UI_execute_usecode_array(var0000, [(byte)0x23, (byte)0x52, "@Die, King!@"]);
labelFunc06FC_0136:
	UI_set_alignment(var0000, 0x0002);
	UI_set_schedule_type(var0000, 0x0000);
	UI_set_opponent(var0000, 0xFFFE);
	UI_set_oppressor(var0000, 0xFE9C);
	UI_set_item_flag(var0000, 0x001D);
	UI_set_item_flag(var0000, 0x0012);
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x01E2], 0x0014);
	UI_set_item_flag(0xFFFE, 0x001D);
	gflags[0x025B] = true;
	return;
}


