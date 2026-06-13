#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func062B object#(0x62B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x000A)) goto labelFunc062B_0170;
	var0000 = UI_execute_usecode_array(0xFE9C, [(byte)0x6C, (byte)0x61]);
	var0001 = UI_get_object_position(0xFE9C);
	var0002 = UI_get_item_frame(item);
	var0003 = UI_get_item_quality(item);
	if (!(var0003 > 0x0000)) goto labelFunc062B_0052;
	UI_close_gumps();
	var0004 = Func0992(0xFFFE, "@'Tis difficult to acquire! Thou shouldst save it.@", "@'Tis difficult to acquire! Mayhaps I should save it.@", false);
	abort;
labelFunc062B_0052:
	if (!(var0002 < 0x0006)) goto labelFunc062B_0064;
	UI_set_item_frame(item, 0x0000);
labelFunc062B_0064:
	if (!((var0002 == 0x0001) || (var0002 == 0x0006))) goto labelFunc062B_00AB;
	var0005 = UI_create_new_object(0x0390);
	if (!var0005) goto labelFunc062B_00AB;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(var0005, UI_die_roll(0x0010, 0x0013));
	var0005 = UI_update_last_created(var0001);
labelFunc062B_00AB:
	if (!(var0002 == 0x0002)) goto labelFunc062B_00EA;
	var0005 = UI_create_new_object(0x0390);
	if (!var0005) goto labelFunc062B_00EA;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(var0005, UI_die_roll(0x0000, 0x0003));
	var0005 = UI_update_last_created(var0001);
labelFunc062B_00EA:
	if (!(var0002 == 0x0003)) goto labelFunc062B_0129;
	var0005 = UI_create_new_object(0x0390);
	if (!var0005) goto labelFunc062B_0129;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(var0005, UI_die_roll(0x0014, 0x0017));
	var0005 = UI_update_last_created(var0001);
labelFunc062B_0129:
	if (!((var0002 == 0x0004) || (var0002 == 0x0005))) goto labelFunc062B_0170;
	var0005 = UI_create_new_object(0x0390);
	if (!var0005) goto labelFunc062B_0170;
	UI_set_item_flag(var0005, 0x0012);
	UI_set_item_frame(var0005, UI_die_roll(0x000C, 0x000F));
	var0005 = UI_update_last_created(var0001);
labelFunc062B_0170:
	return;
}


