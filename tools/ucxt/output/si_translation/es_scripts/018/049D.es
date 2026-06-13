#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func049D object#(0x49D) ()
{
	var var0000;

	if (!(event == 0x0002)) goto labelFunc049D_009E;
	if (!(UI_get_item_flag(0xFF64, 0x0004) || ((Func0994() != 0x0007) || (UI_get_item_flag(0xFF63, 0x0004) || (UI_get_npc_id(0xFF63) > 0x0003))))) goto labelFunc049D_0035;
	abort;
labelFunc049D_0035:
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049D], (0x0064 + UI_get_random(0x01F4)));
	if (!(UI_npc_nearby(0xFF62) || (UI_npc_nearby(0xFF64) || (UI_npc_nearby(0xFF65) || UI_npc_nearby(0xFF61))))) goto labelFunc049D_007D;
	abort;
labelFunc049D_007D:
	var0000 = UI_approach_avatar(0xFF63, 0x0078, 0x0028);
	if (!var0000) goto labelFunc049D_009D;
	UI_set_schedule_type(0xFF63, 0x0016);
labelFunc049D_009D:
	abort;
labelFunc049D_009E:
	if (!(event == 0x0001)) goto labelFunc049D_010D;
	UI_item_say(0xFE9C, "@Pardon me...@");
	0xFF63->Func07D1();
	if (!UI_npc_nearby(0xFF64)) goto labelFunc049D_00E5;
	Func097F(0xFF63, "@Go away!@", 0x0003);
	UI_set_schedule_type(0xFF64, 0x0009);
	Func097F(0xFF64, "@Leave him alone!@", 0x0005);
	goto labelFunc049D_0103;
labelFunc049D_00E5:
	Func097F(0xFF63, "@I am not a spy...@", 0x0003);
	UI_set_npc_id(0xFF63, (UI_get_npc_id(0xFF63) + 0x0001));
labelFunc049D_0103:
	UI_set_schedule_type(0xFF63, 0x0014);
labelFunc049D_010D:
	return;
}


