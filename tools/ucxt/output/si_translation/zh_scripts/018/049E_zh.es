#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);

void Func049E object#(0x49E) ()
{
	var var0000;

	if (!(event == 0x0002)) goto labelFunc049E_00AC;
	if (!(UI_get_item_flag(0xFF64, 0x0004) || ((Func0994() != 0x0007) || (UI_get_item_flag(0xFF62, 0x0004) || (UI_get_npc_id(0xFF62) > 0x0004))))) goto labelFunc049E_0035;
	abort;
labelFunc049E_0035:
	var0000 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x049E], UI_get_random(0x01F4));
	if (!(UI_npc_nearby(0xFF63) || (UI_npc_nearby(0xFF64) || (UI_npc_nearby(0xFF65) || UI_npc_nearby(0xFF61))))) goto labelFunc049E_0079;
	abort;
labelFunc049E_0079:
	var0000 = UI_approach_avatar(0xFF62, 0x0078, 0x0028);
	if (!var0000) goto labelFunc049E_00AB;
	UI_set_schedule_type(0xFF62, 0x0014);
	UI_set_npc_id(0xFF62, (UI_get_npc_id(0xFF62) + 0x0001));
labelFunc049E_00AB:
	abort;
labelFunc049E_00AC:
	if (!(event == 0x0001)) goto labelFunc049E_0138;
	UI_item_say(0xFE9C, "@Greetings!@");
	UI_clear_item_say(0xFF62);
	0xFF62->Func07D1();
	if (!UI_npc_nearby(0xFF64)) goto labelFunc049E_010B;
	Func097F(0xFF62, "@We cannot speak...@", 0x0003);
	UI_set_schedule_type(0xFF64, 0x0009);
	UI_clear_item_say(0xFF64);
	Func097F(0xFF64, "@Go away!@", 0x0005);
	UI_set_schedule_type(0xFF62, 0x0014);
	goto labelFunc049E_0138;
labelFunc049E_010B:
	Func097F(0xFF62, "@I'm no thief!@", 0x0003);
	if (!(UI_get_npc_id(0xFF62) > 0x0003)) goto labelFunc049E_012E;
	Func09AD(0xFF62);
	goto labelFunc049E_0138;
labelFunc049E_012E:
	UI_set_schedule_type(0xFF62, 0x000C);
labelFunc049E_0138:
	return;
}


