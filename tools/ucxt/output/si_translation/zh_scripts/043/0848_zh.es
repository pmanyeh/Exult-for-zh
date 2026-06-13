#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func0848 0x848 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	message("\"I shall certainly be sad to part with it, but if thou dost claim it, then I must give it to thee.\"");
	say();
	var0000 = UI_remove_cont_items(0xFFB9, 0x0001, 0x01EA, 0xFE99, 0x0000, 0x0000);
	var0000 = Func099B(0xFE9C, 0x0001, 0x01EA, 0xFE99, 0xFE99, 0x0000, true);
	gflags[0x00B2] = true;
	message("\"Now I shall have to find myself another shield...\"");
	say();
	if (!(gflags[0x028A] && Func097D(0xFE9B, 0x0001, 0x02D9, 0xFE99, 0x0000))) goto labelFunc0848_00BF;
	var0001 = Func0992(0x0001, "@But thou canst have this shield which we found!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"That is most gracious of thee! Yes, this is my shield which so strangely disappeared during that storm!\"");
	say();
	var0000 = UI_add_cont_items(0xFFB9, 0x0001, 0x02D9, 0xFE99, 0x0000, 0x0012);
	if (!var0000) goto labelFunc0848_00BF;
	var0000 = UI_create_new_object(0x02D9);
	if (!var0000) goto labelFunc0848_00BF;
	UI_set_item_flag(var0000, 0x0012);
	var0002 = UI_get_object_position(0xFFB9);
	var0003 = UI_update_last_created(var0002);
labelFunc0848_00BF:
	return;
}


