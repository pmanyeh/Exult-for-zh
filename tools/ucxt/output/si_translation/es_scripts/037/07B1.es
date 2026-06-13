#game "serpentisle"
// externs
extern var Func097E 0x97E (var var0000);
extern void Func0982 0x982 (var var0000, var var0001);

void Func07B1 object#(0x7B1) ()
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

	var0000 = UI_get_object_position(0xFE9C);
	var0001 = UI_get_object_position(item);
	if (!((event == 0x0003) && (Func097E((var0000[0x0003] - var0001[0x0003])) < 0x0003))) goto labelFunc07B1_01B0;
	var0002 = UI_get_item_quality(item);
	if (!(var0002 == 0x0000)) goto labelFunc07B1_0048;
	UI_error_message("Error: Quality not set for usecode egg. (uegg_269)");
labelFunc07B1_0048:
	if (!((var0002 == 0x0001) || (var0002 == 0x000B))) goto labelFunc07B1_00C0;
	if (!(var0002 == 0x0001)) goto labelFunc07B1_006D;
	var0003 = 0x0003;
	goto labelFunc07B1_0073;
labelFunc07B1_006D:
	var0003 = 0x0010;
labelFunc07B1_0073:
	var0004 = UI_find_nearby(item, 0x009F, var0003, 0x0000);
	var0005 = UI_get_item_quantity(item, 0x0000);
	if (!var0004) goto labelFunc07B1_00C0;
	var0006 = UI_delayed_execute_usecode_array(var0004, [(byte)0x23, (byte)0x4D, (byte)0x58, 0x0035, (byte)0x55, 0x07B1, (byte)0x0B, 0xFFFA, 0x0011, (byte)0x46, 0x0000], var0005);
labelFunc07B1_00C0:
	if (!((var0002 == 0x0002) || (var0002 == 0x000C))) goto labelFunc07B1_0138;
	if (!(var0002 == 0x0002)) goto labelFunc07B1_00E5;
	var0003 = 0x0003;
	goto labelFunc07B1_00EB;
labelFunc07B1_00E5:
	var0003 = 0x0010;
labelFunc07B1_00EB:
	var0007 = UI_find_nearby(item, 0x00F2, var0003, 0x0000);
	var0005 = UI_get_item_quantity(item, 0x0000);
	if (!var0007) goto labelFunc07B1_0138;
	var0006 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x4E, (byte)0x58, 0x0005, (byte)0x55, 0x07B1, (byte)0x0B, 0xFFFA, 0x0008, (byte)0x46, 0x0000], var0005);
labelFunc07B1_0138:
	if (!((var0002 == 0x0003) || (var0002 == 0x000D))) goto labelFunc07B1_01B0;
	if (!(var0002 == 0x0003)) goto labelFunc07B1_015D;
	var0003 = 0x0003;
	goto labelFunc07B1_0163;
labelFunc07B1_015D:
	var0003 = 0x0010;
labelFunc07B1_0163:
	var0007 = UI_find_nearby(item, 0x019A, var0003, 0x0000);
	var0005 = UI_get_item_quantity(item, 0x0000);
	if (!var0007) goto labelFunc07B1_01B0;
	var0006 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x4E, (byte)0x58, 0x0005, (byte)0x55, 0x07B1, (byte)0x0B, 0xFFFA, 0x000A, (byte)0x46, 0x0000], var0005);
labelFunc07B1_01B0:
	if (!(event == 0x0002)) goto labelFunc07B1_0223;
	var0008 = UI_find_nearby(item, 0xFE99, 0x0003, 0x0000);
	enum();
labelFunc07B1_01CA:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc07B1_0223;
	if (!(!((UI_get_item_shape(var000B) == 0x00F2) || ((UI_get_item_shape(var000B) == 0x009F) || (UI_get_item_shape(var000B) == 0x019A))))) goto labelFunc07B1_0220;
	if (!UI_is_npc(var000B)) goto labelFunc07B1_0220;
	if (!(UI_get_npc_prop(var000B, 0x0003) >= 0x0006)) goto labelFunc07B1_0220;
	Func0982(var000B, 0x0005);
labelFunc07B1_0220:
	goto labelFunc07B1_01CA;
labelFunc07B1_0223:
	return;
}


