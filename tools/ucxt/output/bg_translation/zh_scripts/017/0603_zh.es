#game "blackgate"
// externs
extern void Func0835 0x835 (var var0000, var var0001, var var0002);
extern void Func08FE 0x8FE (var var0000);

void Func0603 object#(0x603) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = UI_set_npc_prop(item, 0x0000, 0xFFFA);
	var0000 = UI_set_npc_prop(item, 0x0001, 0xFFFA);
	var0000 = UI_set_npc_prop(item, 0x0002, 0xFFFA);
	var0001 = UI_get_npc_prop(item, 0x0000);
	var0002 = UI_get_npc_prop(item, 0x0000);
	var0003 = UI_get_npc_prop(item, 0x0000);
	if (!(var0001 < 0x0001)) goto labelFunc0603_005F;
	Func0835(item, 0x0000, 0x0001);
labelFunc0603_005F:
	if (!(var0002 < 0x0001)) goto labelFunc0603_0073;
	Func0835(item, 0x0002, 0x0001);
labelFunc0603_0073:
	if (!(var0003 < 0x0001)) goto labelFunc0603_0087;
	Func0835(item, 0x0001, 0x0001);
labelFunc0603_0087:
	Func08FE("@你看起來氣色不太好。@");
	return;
}


