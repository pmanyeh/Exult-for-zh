#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func09AD 0x9AD (var var0000);

void Func04BA object#(0x4BA) ()
{
	var var0000;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BA_000F;
	Func0809();
	abort;
labelFunc04BA_000F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF46) != 0x000F))) goto labelFunc04BA_0066;
	UI_item_say(0xFE9C, "@Hello!@");
	0xFF46->Func07D1();
	Func097F(0xFF46, "@Intruder!@", 0x0005);
	0xFF46->Func07D2();
	UI_set_schedule_type(0xFF46, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF46, [(byte)0x23, (byte)0x55, 0x04BA], 0x000A);
labelFunc04BA_0066:
	if (!(event == 0x0002)) goto labelFunc04BA_00E8;
	if (!(item != UI_get_npc_object(0xFF46))) goto labelFunc04BA_00B0;
	Func097F(0xFF46, "@Intruder!@", 0x0005);
	0xFF46->Func07D2();
	UI_set_schedule_type(0xFF46, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF46, [(byte)0x23, (byte)0x55, 0x04BA], 0x000A);
	goto labelFunc04BA_00E8;
labelFunc04BA_00B0:
	UI_clear_item_say(0xFF46);
	UI_run_schedule(0xFF46);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"These doors have been sealed by the Serpent of Order, and none shall enter. By approaching thus far, thou hath shown thyself to be mine enemy.\"");
	say();
	message("\"Now I must kill thee, lest the Serpent judge me unworthy. Bless my blade, master!\"");
	say();
	Func097F(0xFF46, "@I shall prevail!@", 0x0000);
	Func09AD(0xFF46);
	Func09AD(0xFF45);
labelFunc04BA_00E8:
	return;
}


