#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func06AE object#(0x6AE) ()
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
	var var000B;
	var var000C;
	var var000D;

	var0000 = UI_find_nearby(item, 0x0212, 0x0014, 0x0000);
	var0001 = UI_find_nearby(item, 0x0373, 0x0014, 0x0000);
	var0002 = UI_find_nearby(item, 0x01FB, 0x0014, 0x0000);
	if (!(event == 0x0003)) goto labelFunc06AE_0118;
	if (!var0000) goto labelFunc06AE_005E;
	var0003 = Func0992(0xFFFD, 0x0000, 0x0000, false);
	UI_item_say(var0003, "@Snakes!@");
	goto labelFunc06AE_00E7;
labelFunc06AE_005E:
	if (!var0001) goto labelFunc06AE_0081;
	var0003 = Func0992(0xFFFE, 0x0000, 0x0000, false);
	UI_item_say(var0003, "@Hmmm...@");
	goto labelFunc06AE_00E7;
labelFunc06AE_0081:
	if (!var0002) goto labelFunc06AE_00E6;
	var0003 = Func0992(0xFFFF, 0x0000, 0x0000, false);
	UI_item_say(var0003, "@Damned bones!@");
	var0004 = UI_find_nearby(item, 0x0113, 0x000F, 0x0010);
	var0005 = 0x0000;
	enum();
labelFunc06AE_00B9:
	for (var0008 in var0004 with var0006 to var0007) attend labelFunc06AE_00DB;
	if (!(UI_get_item_frame(var0008) == 0x0000)) goto labelFunc06AE_00D8;
	var0005 = var0008;
labelFunc06AE_00D8:
	goto labelFunc06AE_00B9;
labelFunc06AE_00DB:
	if (!(!var0005)) goto labelFunc06AE_00E3;
	abort;
labelFunc06AE_00E3:
	goto labelFunc06AE_00E7;
labelFunc06AE_00E6:
	abort;
labelFunc06AE_00E7:
	if (!((var0003 != 0xFE9C) && ((var0003 != 0xFED3) && (var0003 != 0xFED6)))) goto labelFunc06AE_0118;
	var0009 = UI_delayed_execute_usecode_array(var0003, [(byte)0x23, (byte)0x55, 0x06AE], 0x0007);
labelFunc06AE_0118:
	if (!(event == 0x0002)) goto labelFunc06AE_0257;
	UI_clear_item_say(item);
	UI_show_npc_face0(UI_get_npc_number(item), 0x0000);
	if (!((!var0000) && ((!var0001) && (!var0002)))) goto labelFunc06AE_0151;
	message("\"Oh, mindest thou not.\"");
	say();
	Func097F(item, "@I am so confused...@", 0x0000);
	abort;
labelFunc06AE_0151:
	if (!var0000) goto labelFunc06AE_0172;
	message("\"Snakes! Why did it have to be snakes? Why could not Lord British have sent thee somewhere akin to 'Daisy Isle' instead?\"");
	say();
	Func097F(item, "@Why me?@", 0x0000);
	Func097F(0xFE9C, "@Oh, desist...@", 0x0005);
	abort;
labelFunc06AE_0172:
	var0004 = UI_find_nearby(item, 0x0113, 0x000F, 0x0010);
	var0005 = 0x0000;
	enum();
labelFunc06AE_018A:
	for (var0008 in var0004 with var000A to var000B) attend labelFunc06AE_01AC;
	if (!(UI_get_item_frame(var0008) == 0x0000)) goto labelFunc06AE_01A9;
	var0005 = var0008;
labelFunc06AE_01A9:
	goto labelFunc06AE_018A;
labelFunc06AE_01AC:
	if (!(var0002 && var0005)) goto labelFunc06AE_0207;
	message("\"Skeletons! The foul things! At least they are not moving about and terrorizing the living! Let those who have died rest, and not bother those of us that live on...\"");
	say();
	var0009 = UI_delayed_execute_usecode_array(var0005, [(byte)0x48], 0x0003);
	var000C = UI_get_object_position(var0005);
	UI_sprite_effect(0x001A, var000C[0x0001], var000C[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_show_npc_face1(0xFE9C, 0x0000);
	message("\"Perhaps thou didst speak too soon, my friend...\"");
	say();
	UI_remove_npc_face1();
labelFunc06AE_0207:
	if (!var0001) goto labelFunc06AE_0252;
	var000D = [0xFFFD, 0xFFFE, 0xFFFF, 0xFF6B];
	if (!(UI_get_npc_number(item) in var000D)) goto labelFunc06AE_0244;
	message("\"A hall of sleeping gargoyles...\"");
	say();
	message("\"'Tis reminiscent of the problems that are occurring in Britannia this very instant!\"");
	say();
	Func097F(item, "@The emps...@", 0x0000);
	gflags[0x0206] = true;
	goto labelFunc06AE_0252;
labelFunc06AE_0244:
	message("\"A hall of sleeping Daemons...\"");
	say();
	Func097F(item, "@Let us go...@", 0x0000);
labelFunc06AE_0252:
	UI_remove_npc_face0();
	abort;
labelFunc06AE_0257:
	return;
}


