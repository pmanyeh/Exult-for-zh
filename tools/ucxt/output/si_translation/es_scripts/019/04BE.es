#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern var Func0955 0x955 ();
extern var Func0954 0x954 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func09AD 0x9AD (var var0000);

void Func04BE object#(0x4BE) ()
{
	var var0000;
	var var0001;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc04BE_000F;
	Func0809();
	abort;
labelFunc04BE_000F:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF42) != 0x000F))) goto labelFunc04BE_0066;
	UI_item_say(0xFE9C, "@Pardon me...@");
	0xFF42->Func07D1();
	Func097F(0xFF42, "@Hold!@", 0x0005);
	0xFF42->Func07D2();
	UI_set_schedule_type(0xFF42, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF42, [(byte)0x23, (byte)0x55, 0x04BE], 0x000A);
labelFunc04BE_0066:
	if (!(event == 0x0002)) goto labelFunc04BE_0141;
	if (!(item != UI_get_npc_object(0xFF42))) goto labelFunc04BE_00B0;
	Func097F(0xFF42, "@Hold!@", 0x0005);
	0xFF42->Func07D2();
	UI_set_schedule_type(0xFF42, 0x000F);
	var0000 = UI_delayed_execute_usecode_array(0xFF42, [(byte)0x23, (byte)0x55, 0x04BE], 0x000A);
	goto labelFunc04BE_0141;
labelFunc04BE_00B0:
	UI_clear_item_say(0xFF42);
	UI_run_schedule(0xFF42);
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Thou art not permitted here! I and my kind are the only beings allowed to prowl these tunnels. We are here to maintain Order.\"");
	say();
	message("\"Unless thou canst show me thy Medallion of Order, I shall have to slay thee. Dost thou have one?\"");
	say();
	if (!Func0955()) goto labelFunc04BE_012B;
	var0000 = (("@But " + Func0954()) + ", we have no such thing!@");
	var0001 = Func0992(0x0001, var0000, 0x0000, false);
	if (!(var0001 != 0xFE9C)) goto labelFunc04BE_0118;
	UI_set_conversation_slot(0x0000);
	message("\"Aha! Then die, Spawn of Chaos!\"");
	say();
	Func097F(0xFF42, "@To battle!@", 0x0000);
	goto labelFunc04BE_0128;
labelFunc04BE_0118:
	message("\"Thou dost lie! Now I must certainly slay thee.\"");
	say();
	Func097F(0xFF42, "@Die, Spawn of Chaos!@", 0x0000);
labelFunc04BE_0128:
	goto labelFunc04BE_013B;
labelFunc04BE_012B:
	message("\"Then die, Spawn of Chaos!\"");
	say();
	Func097F(0xFF42, "@To battle!@", 0x0000);
labelFunc04BE_013B:
	Func09AD(0xFF42);
labelFunc04BE_0141:
	return;
}


