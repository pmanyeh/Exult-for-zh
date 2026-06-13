#game "blackgate"
// externs
extern var Func080E 0x80E (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func0937 0x937 (var var0000);
extern void Func083F 0x83F (var var0000, var var0001);

void Func0631 object#(0x631) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0007)) goto labelFunc0631_02F5;
	var0000 = UI_get_item_quality(item);
	var0001 = UI_find_nearby(item, 0x0366, 0x000F, 0x0000);
	var0002 = UI_find_nearby(item, 0x0203, 0x000F, 0x0000);
	var0001 = (var0001 & var0002);
	var0002 = [];
	enum();
labelFunc0631_0043:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0631_0069;
	if (!(UI_get_item_quality(var0005) == var0000)) goto labelFunc0631_0066;
	var0002 = (var0002 & var0005);
labelFunc0631_0066:
	goto labelFunc0631_0043;
labelFunc0631_0069:
	if (!Func080E(var0002)) goto labelFunc0631_00AD;
	var0006 = UI_execute_usecode_array(item, [(byte)0x46, 0x0001, (byte)0x4E, (byte)0x0B, 0xFFFF, 0x0004]);
	var0006 = UI_execute_usecode_array(0xFE9C, [(byte)0x59, 0x0006, (byte)0x01, (byte)0x6C, (byte)0x61, (byte)0x0B, 0xFFFE, 0x0002]);
	return;
labelFunc0631_00AD:
	if (!gflags[0x003D]) goto labelFunc0631_024E;
	if (!(Func08F7(0xFFF2) && (!gflags[0x0057]))) goto labelFunc0631_0135;
	if (!(Func0937(0xFFF2) && Func0937(0xFE9C))) goto labelFunc0631_011F;
	var0006 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF2), [(byte)0x23, (byte)0x52, "@What's the password?@"], 0x0001);
	var0006 = UI_delayed_execute_usecode_array(UI_get_avatar_ref(), [(byte)0x23, (byte)0x52, "@Blackbird@"], 0x0005);
	var0006 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF2), [(byte)0x23, (byte)0x52, "@Pass.@"], 0x000B);
labelFunc0631_011F:
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0631], 0x000A);
	return;
labelFunc0631_0135:
	if (!(Func08F7(0xFFE5) && (!gflags[0x0057]))) goto labelFunc0631_01B7;
	if (!(Func0937(0xFFE5) && Func0937(0xFE9C))) goto labelFunc0631_01A1;
	var0006 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFE5), [(byte)0x23, (byte)0x52, "@What's the password?@"], 0x0001);
	var0006 = UI_delayed_execute_usecode_array(UI_get_avatar_ref(), [(byte)0x23, (byte)0x52, "@Blackbird@"], 0x0005);
	var0006 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFE5), [(byte)0x23, (byte)0x52, "@Pass.@"], 0x000B);
labelFunc0631_01A1:
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0631], 0x000A);
	return;
labelFunc0631_01B7:
	if (!(UI_find_nearest(0xFE9C, 0x0326, 0xFFFF) && (!gflags[0x0057]))) goto labelFunc0631_0246;
	var0007 = UI_find_nearest(item, 0x0326, 0x0014);
	if (!(Func0937(var0007) && Func0937(0xFE9C))) goto labelFunc0631_0230;
	var0006 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x52, "@What's the password?@"], 0x0001);
	var0006 = UI_delayed_execute_usecode_array(UI_get_avatar_ref(), [(byte)0x23, (byte)0x52, "@Blackbird@"], 0x0005);
	var0006 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x52, "@Pass.@"], 0x000B);
labelFunc0631_0230:
	var0006 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0631], 0x000A);
	return;
labelFunc0631_0246:
	Func083F(item, true);
	goto labelFunc0631_02F5;
labelFunc0631_024E:
	if (!Func0937(0xFFF2)) goto labelFunc0631_0280;
	if (!(Func08F7(0xFFF2) && (!gflags[0x0057]))) goto labelFunc0631_0280;
	var0006 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF2), [(byte)0x23, (byte)0x52, "@What's the password?@"], 0x0001);
labelFunc0631_0280:
	if (!(Func08F7(0xFFE5) && (!gflags[0x0057]))) goto labelFunc0631_02B2;
	if (!Func0937(0xFFE5)) goto labelFunc0631_02B2;
	var0006 = UI_delayed_execute_usecode_array(UI_get_npc_object(0xFFF2), [(byte)0x23, (byte)0x52, "@What's the password?@"], 0x0001);
labelFunc0631_02B2:
	if (!(UI_find_nearest(0xFE9C, 0x0326, 0xFFFF) && (!gflags[0x0057]))) goto labelFunc0631_02F5;
	var0007 = UI_find_nearest(item, 0x0326, 0x0014);
	if (!Func0937(var0007)) goto labelFunc0631_02F5;
	var0006 = UI_delayed_execute_usecode_array(var0007, [(byte)0x23, (byte)0x52, "@What's the password?@"], 0x0001);
labelFunc0631_02F5:
	if (!(event == 0x0002)) goto labelFunc0631_0302;
	Func083F(item, true);
labelFunc0631_0302:
	return;
}


