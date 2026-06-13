#game "serpentisle"
// externs
extern var Func0951 0x951 ();

void Func065A object#(0x65A) ()
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

	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_npc_object(0xFE9C);
	if (!(event == 0x0001)) goto labelFunc065A_0083;
	UI_halt_scheduled(item);
	UI_item_say(item, "@In Vas Lor@");
	if (!Func0951()) goto labelFunc065A_006B;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x69, (byte)0x66, (byte)0x6A, (byte)0x58, 0x0043, (byte)0x55, 0x065A]);
	UI_obj_sprite_effect(var0001, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc065A_0083;
labelFunc065A_006B:
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x69, (byte)0x66, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc065A_0083:
	if (!(event == 0x0002)) goto labelFunc065A_02AA;
	UI_obj_sprite_effect(var0001, 0x0007, 0xFFFE, 0xFFFE, 0x0000, 0x0000, 0x0000, 0xFFFF);
	var0003 = UI_find_nearby(item, 0xFE99, 0x0028, 0x0008);
	var0004 = UI_get_party_list();
	var0005 = 0x000C;
	var0006 = UI_get_item_flag(item, 0x0006);
	enum();
labelFunc065A_00D1:
	for (var0009 in var0003 with var0007 to var0008) attend labelFunc065A_02AA;
	if (!((!var0006) || (!(var0009 in var0004)))) goto labelFunc065A_02A7;
	var000A = 0x0000;
	var000B = "";
labelFunc065A_00F8:
	if (!(var000A < var0005)) goto labelFunc065A_0293;
	var000C = UI_die_roll(0x0000, 0x0008);
	if (!(var000C == 0x0000)) goto labelFunc065A_0131;
	var000D = [(byte)0x6D, (byte)0x6C, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_0131:
	if (!(var000C == 0x0001)) goto labelFunc065A_0153;
	var000D = [(byte)0x6D, (byte)0x61, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_0153:
	if (!(var000C == 0x0002)) goto labelFunc065A_0175;
	var000D = [(byte)0x6C, (byte)0x6E, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_0175:
	if (!(var000C == 0x0003)) goto labelFunc065A_0197;
	var000D = [(byte)0x61, (byte)0x61, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_0197:
	if (!(var000C == 0x0004)) goto labelFunc065A_01B9;
	var000D = [(byte)0x6D, (byte)0x64, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_01B9:
	if (!(var000C == 0x0005)) goto labelFunc065A_01DB;
	var000D = [(byte)0x64, (byte)0x6D, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_01DB:
	if (!(var000C == 0x0006)) goto labelFunc065A_0214;
	var000E = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000D = [(byte)0x59, var000E, (byte)0x6C, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_0214:
	if (!(var000C == 0x0007)) goto labelFunc065A_024D;
	var000E = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000D = [(byte)0x59, var000E, (byte)0x6D, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_024D:
	if (!(var000C == 0x0008)) goto labelFunc065A_0286;
	var000E = ((byte)0x30 + (UI_die_roll(0x0000, 0x0003) * 0x0002));
	var000D = [(byte)0x59, var000E, (byte)0x64, (byte)0x61];
	var000B = [var000B, var000D];
labelFunc065A_0286:
	var000A = (var000A + 0x0001);
	goto labelFunc065A_00F8;
labelFunc065A_0293:
	UI_halt_scheduled(var0009);
	var0002 = UI_execute_usecode_array(var0009, var000B);
labelFunc065A_02A7:
	goto labelFunc065A_00D1;
labelFunc065A_02AA:
	return;
}


