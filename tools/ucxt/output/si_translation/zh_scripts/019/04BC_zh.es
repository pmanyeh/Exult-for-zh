#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func09AD 0x9AD (var var0000);

void Func04BC object#(0x4BC) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BC_000F;
	Func0809();
	abort;
labelFunc04BC_000F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF44) != 0x000F))) goto labelFunc04BC_0066;
	UI_item_say(0xFE9C, "@Greetings!@");
	0xFF44->Func07D1();
	Func097F(0xFF44, "@Keep away!@", 0x0005);
	0xFF44->Func07D2();
	UI_set_schedule_type(0xFF44, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF44, [(byte)0x23, (byte)0x55, 0x04BC], 0x000A);
labelFunc04BC_0066:
	if (!(event == 0x0002)) goto labelFunc04BC_00DB;
	if (!(item != UI_get_npc_object(0xFF44))) goto labelFunc04BC_00B0;
	Func097F(0xFF44, "@Keep Away!@", 0x0005);
	0xFF44->Func07D2();
	UI_set_schedule_type(0xFF44, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF44, [(byte)0x23, (byte)0x55, 0x04BC], 0x000A);
	goto labelFunc04BC_00DB;
labelFunc04BC_00B0:
	UI_clear_item_say(0xFF44);
	UI_set_schedule_type(0xFF44, 0x0009);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Thou art not permitted here. It is dangerous here. The forces beyond these doors are not of mortal understanding.\"");
	say();
	Func097F(0xFF44, "@Be on thy way!@", 0x0000);
labelFunc04BC_00DB:
	if (!(event == 0x0000)) goto labelFunc04BC_0138;
	var0001 = UI_get_random(0x000A);
	if (!(var0001 == 0x0006)) goto labelFunc04BC_010A;
	Func097F(0xFF44, "@I asked nicely...@", 0x0000);
	Func09AD(0xFF44);
	abort;
labelFunc04BC_010A:
	if (!(var0001 < 0x0006)) goto labelFunc04BC_0138;
	var0002 = ["@Move on!@", "@Dangers lurk here.@", "@Thou must go!@", "@I beg thee to go...@", "@Please leave.@"];
	Func097F(0xFF44, var0002[var0001], 0x0000);
labelFunc04BC_0138:
	return;
}


