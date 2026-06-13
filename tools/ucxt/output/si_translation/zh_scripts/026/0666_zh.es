#game "serpentisle"
// externs
extern var Func0979 0x979 (var var0000);
extern var Func0951 0x951 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0666 object#(0x666) ()
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
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;

	if (!(event == 0x0001)) goto labelFunc0666_028C;
	var0000 = true;
	var0001 = 0x0000;
	var0002 = UI_get_object_position(0xFE9C);
	var0003 = var0002[0x0001];
	var0004 = var0002[0x0002];
	var0005 = 0x0000;
	var0006 = 0x0000;
	var0007 = Func0979(item);
	UI_halt_scheduled(item);
	UI_item_say(item, "@Kal Wis Corp@");
	if (!Func0951()) goto labelFunc0666_0275;
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0007, (byte)0x58, 0x0043]);
	var0005 = 0x0000;
	var0006 = 0x0000;
	var0009 = UI_find_nearby(item, 0x01FB, 0x000F, 0x00B0);
	enum();
labelFunc0666_0089:
	for (var000C in var0009 with var000A to var000B) attend labelFunc0666_00AB;
	if (!(UI_get_item_quality(var000C) == 0x000D)) goto labelFunc0666_00A8;
	var0001 = var000C;
labelFunc0666_00A8:
	goto labelFunc0666_0089;
labelFunc0666_00AB:
	if (!((0x0927 < var0003) && (var0003 < 0x0947))) goto labelFunc0666_00C3;
	var0005 = 0x0001;
labelFunc0666_00C3:
	if (!((0x012B < var0004) && (var0004 < 0x013F))) goto labelFunc0666_00DB;
	var0006 = 0x0001;
labelFunc0666_00DB:
	var000D = Func097D(0xFE9B, 0x0001, 0x00D1, 0xFE99, 0x0009);
	if (!((var0005 == 0x0001) && ((var0006 == 0x0001) && ((var000D == true) && (var0001 != 0x0000))))) goto labelFunc0666_0142;
	var0008 = UI_set_item_quality(var0001, 0x0000);
	var000E = UI_get_object_position(var0001);
	var000F = UI_create_new_object2(0x0355, var000E);
	UI_set_schedule_type(var000F, 0x0003);
	var0000 = false;
labelFunc0666_0142:
	var0005 = 0x0000;
	var0006 = 0x0000;
	if (!((0x0B45 < var0003) && (var0003 < 0x0B53))) goto labelFunc0666_0166;
	var0005 = 0x0001;
labelFunc0666_0166:
	if (!((0x07C6 < var0004) && (var0004 < 0x07D5))) goto labelFunc0666_017E;
	var0006 = 0x0001;
labelFunc0666_017E:
	var0010 = Func097D(0xFE9B, 0x0001, 0x0280, 0xFE99, 0x0000);
	var0011 = Func097D(0xFE9B, 0x0001, 0x027E, 0xFE99, 0x0000);
	var0012 = Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0002);
	var000D = false;
	if (!((var0010 == true) || ((var0011 == true) || (var0012 == true)))) goto labelFunc0666_01D9;
	var000D = true;
labelFunc0666_01D9:
	var0013 = UI_find_nearby(item, 0x00F3, 0x000F, 0x00B0);
	enum();
labelFunc0666_01EB:
	for (var0016 in var0013 with var0014 to var0015) attend labelFunc0666_020B;
	if (!(UI_get_item_quality(var0016) == 0x0001)) goto labelFunc0666_0208;
	var0017 = true;
labelFunc0666_0208:
	goto labelFunc0666_01EB;
labelFunc0666_020B:
	if (!((var0005 == 0x0001) && ((var0006 == 0x0001) && ((var000D != false) && (var0017 == true))))) goto labelFunc0666_0267;
	UI_set_item_frame(var0016, 0x0005);
	var000E = [0x0B4D, 0x07D0, 0x0005];
	var000F = UI_create_new_object2(0x0175, var000E);
	UI_set_npc_id(var000F, 0x0001);
	UI_set_schedule_type(var000F, 0x0003);
	var0000 = false;
labelFunc0666_0267:
	if (!(var0000 == true)) goto labelFunc0666_0272;
	goto labelFunc0666_0275;
labelFunc0666_0272:
	goto labelFunc0666_028C;
labelFunc0666_0275:
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x59, var0007, (byte)0x55, 0x0606]);
labelFunc0666_028C:
	return;
}


