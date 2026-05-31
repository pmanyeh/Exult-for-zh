#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern var Func090E 0x90E ();
extern var Func0910 0x910 (var var0000, var var0001);
extern void Func0912 0x912 (var var0000, var var0001, var var0002);

void Func089D 0x89D (var var0000, var var0001, var var0002)
{
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;
	var var000C;
	var var000D;
	var var000E;
	var var000F;
	var var0010;
	var var0011;
	var var0012;

	message("\"To be able to heal, cure poison, and resurrect. To be interested in one of these services?\"");
	say();
	UI_push_answers();
	var0003 = Func090A();
	if (!var0003) goto labelFunc089D_022B;
	message("\"To need which of my services?\"");
	say();
	var0004 = ["heal", "cure poison", "resurrect"];
	var0005 = Func090B(var0004);
	if (!((var0005 == "heal") || (var0005 == "cure poison"))) goto labelFunc089D_008F;
	if (!(var0005 == "heal")) goto labelFunc089D_0058;
	var0006 = "healed";
	var0007 = var0000;
labelFunc089D_0058:
	if (!(var0005 == "cure poison")) goto labelFunc089D_006E;
	var0006 = "cured of poison";
	var0007 = var0001;
labelFunc089D_006E:
	message("\"To want to ");
	message(var0006);
	message(" whom?\"");
	say();
	var0008 = Func090E();
	if (!(var0008 == 0x0000)) goto labelFunc089D_008F;
	message("\"To have no need for my healing.\"");
	say();
	goto labelFunc089D_022F;
labelFunc089D_008F:
	if (!(var0005 == "resurrect")) goto labelFunc089D_00E5;
	var0009 = UI_get_avatar_ref();
	var000A = UI_find_nearest(var0009, 0x0190, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc089D_00DB;
	var000A = UI_find_nearest(var0009, 0x019E, 0x0019);
	if (!(var000A == 0x0000)) goto labelFunc089D_00DB;
	message("\"To not see anyone who is in need of resurrection. To have to see the body to save the spirit. To lay your companion on the ground so that I may return them to this world.\"*");
	say();
	goto labelFunc089D_022F;
labelFunc089D_00DB:
	message("\"To be sorely wounded. To attempt to restore them to this world.\"");
	say();
	var0007 = var0002;
labelFunc089D_00E5:
	message("\"To charge ");
	message(var0007);
	message(" gold. To still want my services?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc089D_0224;
	var000C = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000C >= var0007)) goto labelFunc089D_021D;
	if (!(var0005 == "heal")) goto labelFunc089D_018D;
	var000D = Func0910(var0008, 0x0000);
	var000E = Func0910(var0008, 0x0003);
	if (!(var000D > var000E)) goto labelFunc089D_0175;
	var000F = (var000D - var000E);
	Func0912(var0008, 0x0003, var000F);
	var0010 = UI_remove_party_items(var0007, 0x0284, 0xFE99, 0xFE99, true);
	message("\"To have healed the wounds.\"");
	say();
	goto labelFunc089D_018A;
labelFunc089D_0175:
	if (!(var0008 == 0xFE9C)) goto labelFunc089D_0186;
	message("\"To seem quite healthy!\"");
	say();
	goto labelFunc089D_018A;
labelFunc089D_0186:
	message("\"To be already healthy!\"");
	say();
labelFunc089D_018A:
	goto labelFunc089D_021A;
labelFunc089D_018D:
	if (!(var0005 == "cure poison")) goto labelFunc089D_01DA;
	var0011 = UI_get_npc_object(var0008);
	if (!UI_get_item_flag(var0011, 0x0008)) goto labelFunc089D_01D3;
	UI_clear_item_flag(var0011, 0x0008);
	var0010 = UI_remove_party_items(var0007, 0x0284, 0xFE99, 0xFE99, true);
	message("\"To have healed the wounds.\"");
	say();
	goto labelFunc089D_01D7;
labelFunc089D_01D3:
	message("\"To not need curing!\"");
	say();
labelFunc089D_01D7:
	goto labelFunc089D_021A;
labelFunc089D_01DA:
	if (!(var0005 == "resurrect")) goto labelFunc089D_021A;
	var0012 = UI_resurrect(var000A);
	if (!(var0012 == 0x0000)) goto labelFunc089D_01FF;
	message("\"To not be able to save them. To give them a proper burial    for you.\"");
	say();
	goto labelFunc089D_0217;
labelFunc089D_01FF:
	message("\"To breathe again. To be alive!\"");
	say();
	var0010 = UI_remove_party_items(var0007, 0x0284, 0xFE99, 0xFE99, true);
labelFunc089D_0217:
	goto labelFunc089D_021A;
labelFunc089D_021A:
	goto labelFunc089D_0221;
labelFunc089D_021D:
	message("\"To have not that much gold! To perhaps return with more and purchase the service then.\"");
	say();
labelFunc089D_0221:
	goto labelFunc089D_0228;
labelFunc089D_0224:
	message("\"Sorry. To look elsewhere for that service then.\"");
	say();
labelFunc089D_0228:
	goto labelFunc089D_022F;
labelFunc089D_022B:
	message("\"To be here later if you need me.\"");
	say();
labelFunc089D_022F:
	UI_pop_answers();
	return;
}


