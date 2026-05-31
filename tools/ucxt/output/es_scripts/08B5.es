#game "blackgate"
void Func08B5 0x8B5 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	message("\"If thou wishest to seek out this isle, thou mayest use my ship. It now sits upon the southern shore of Vesper and is called the Golden Ankh. Please, feel free to use it for as long as thou hast need of it.\"");
	say();
	var0000 = UI_create_new_object(0x031D);
	UI_set_item_frame(var0000, 0x0001);
	var0001 = UI_set_item_quality(var0000, 0x002C);
	var0002 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	var0003 = false;
	if (!var0002) goto labelFunc08B5_0044;
	message("Lord British hands you the deed to the ship.");
	say();
	goto labelFunc08B5_005A;
labelFunc08B5_0044:
	var0002 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("Lord British hands you the deed to the ship, but it slips from your hands and falls to the floor.");
	say();
	var0003 = true;
labelFunc08B5_005A:
	message("\"I have also focused a magical crystal to the entrance of the Castle of Fire which I refurbished after thy battle with Exodus. Here, take it. Perhaps it will give thee some insight. Although, be warned, it is not at all stable and might be prone to shatter the nearer thou findest thyself to the location to which it is tuned.\"");
	say();
	var0004 = UI_create_new_object(0x02F8);
	UI_set_item_frame(var0004, 0x000E);
	var0005 = UI_give_last_created(UI_get_npc_object(0xFE9C));
	if (!var0005) goto labelFunc08B5_008D;
	message("Lord British gives you the crystal.");
	say();
	goto labelFunc08B5_00AD;
labelFunc08B5_008D:
	var0005 = UI_update_last_created(UI_get_object_position(0xFE9C));
	if (!(!var0003)) goto labelFunc08B5_00A9;
	message("Lord British gives you the crystal, but it slips from your hands and falls to the floor. Luckily, it remains intact.");
	say();
	goto labelFunc08B5_00AD;
labelFunc08B5_00A9:
	message("Lord British gives you the crystal, and once again your overloaded condition makes you clumsy. Luckily, it remains intact after its little fall.");
	say();
labelFunc08B5_00AD:
	gflags[0x02FE] = true;
	return;
}


