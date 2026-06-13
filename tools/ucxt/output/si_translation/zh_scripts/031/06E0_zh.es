#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08AC 0x8AC (var var0000);
extern void Func09AD 0x9AD (var var0000);

void Func06E0 object#(0x6E0) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc06E0_006A;
	var0000 = UI_get_object_position(0xFE9C);
	if (!(var0000[0x0003] < 0x0002)) goto labelFunc06E0_006A;
	gflags[0x01A6] = true;
	Func097F(0xFFCD, "@Ah, 'tis thee...@", 0x0000);
	UI_set_item_flag(0xFE9C, 0x0010);
	UI_clear_item_flag(0xFFCD, 0x001D);
	var0001 = UI_execute_usecode_array(0xFFCD, [(byte)0x61, (byte)0x01, (byte)0x59, 0x0000, (byte)0x27, 0x0007, (byte)0x23, (byte)0x55, 0x06E0]);
	UI_remove_item(item);
labelFunc06E0_006A:
	if (!(event == 0x0002)) goto labelFunc06E0_00D8;
	UI_clear_item_say(0xFFCD);
	var0002 = Func08AC(false);
	UI_show_npc_face0(0xFFCD, 0x0000);
	message("\"Kylista, the levers have been set, and the traitor's fate is sealed...\"");
	say();
	message("\"Wait, thou art not Kylista!\"");
	say();
	message("\"So, thou hast found out our little scheme, hast thou?\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc06E0_00B0;
	message("\"I'm certain that thou hadst help from thy companions to come this far, girl.\"");
	say();
	Func097F(0xFFCD, "@Die, wench!@", 0x0000);
	goto labelFunc06E0_00C4;
labelFunc06E0_00B0:
	message("\"Thou shouldst have understood -- a woman cannot be left to control a city! They have not the brains for such matters!\"");
	say();
	message("\"But thou hast no doubt been swayed by the ploys of a woman... Did Alyssand give her favors willingly, or did she force thee to bargain for them?\"");
	say();
	Func097F(0xFFCD, "@Ha ha ha!@", 0x0000);
labelFunc06E0_00C4:
	message("\"Of course, I can never allow thee to leave this chamber alive...\"");
	say();
	Func09AD(0xFFCD);
	UI_clear_item_flag(0xFE9C, 0x0010);
labelFunc06E0_00D8:
	return;
}


