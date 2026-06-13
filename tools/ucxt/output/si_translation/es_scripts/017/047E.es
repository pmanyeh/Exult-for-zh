#game "serpentisle"
// externs
extern void Func0809 0x809 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func047E object#(0x47E) ()
{
	var var0000;

	if (!UI_get_item_flag(item, 0x001E)) goto labelFunc047E_000F;
	Func0809();
	abort;
labelFunc047E_000F:
	if (!(event == 0x0001)) goto labelFunc047E_0035;
	UI_item_say(0xFE9C, "A guard of metal!@");
	Func097F(0xFF82, "@Thou art a fool!@", 0x0003);
	UI_set_schedule_type(item, 0x0003);
labelFunc047E_0035:
	if (!(event == 0x0009)) goto labelFunc047E_0094;
	UI_show_npc_face0(0xFED6, 0x0000);
	message("\"Avatar, thou shalt fail!\"");
	say();
	var0000 = Func0992(0xFFFF, "@Why, Avatar! Canst thou not hear it?! This automaton speaks with Batlin's voice!@", "@I recognize that voice! Batlin!@", false);
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
	message("\"Canst thou hear me, Avatar? Thou art too late! By the time thou hast found the Shrine of Order, I shall have become as powerful as the Guardian himself!\"");
	say();
	message("\"Come! Come and witness mine ascent to power.\"");
	say();
	message("\"Come, Avatar... Come and meet thy death!\"");
	say();
	UI_set_schedule_type(0xFF82, 0x0000);
	UI_set_alignment(0xFF82, 0x0002);
	UI_set_oppressor(0xFE9C, 0xFF82);
	UI_remove_npc_face0();
labelFunc047E_0094:
	return;
}


