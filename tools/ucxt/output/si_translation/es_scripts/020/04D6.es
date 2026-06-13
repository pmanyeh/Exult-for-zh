#game "serpentisle"
// externs
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func04D6 object#(0x4D6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04D6_00A2;
	UI_set_schedule_type(0xFF2A, 0x0014);
	var0000 = UI_find_nearby(0xFF2A, 0x00FA, 0x000A, 0x0000);
	if (!(UI_get_npc_object(0xFF2A) in var0000)) goto labelFunc04D6_0043;
	var0000 = Func0988(UI_get_npc_object(0xFF2A), var0000);
labelFunc04D6_0043:
	if (!(UI_get_npc_object(0xFF30) in var0000)) goto labelFunc04D6_0061;
	var0000 = Func0988(UI_get_npc_object(0xFF30), var0000);
labelFunc04D6_0061:
	if (!(UI_get_npc_object(0xFF2E) in var0000)) goto labelFunc04D6_007F;
	var0000 = Func0988(UI_get_npc_object(0xFF2E), var0000);
labelFunc04D6_007F:
	if (!var0000) goto labelFunc04D6_00A2;
	var0001 = var0000[UI_get_random(UI_get_array_size(var0000))];
	Func097F(var0001, "@He cannot speak.@", 0x0000);
labelFunc04D6_00A2:
	return;
}


