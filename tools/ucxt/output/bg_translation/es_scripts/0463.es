#game "blackgate"
// externs
extern var Func0909 0x909 ();

void Func0463 object#(0x463) ()
{
	var var0000;

	if (!(event == 0x0000)) goto labelFunc0463_0009;
	abort;
labelFunc0463_0009:
	if (!(event == 0x0001)) goto labelFunc0463_00EB;
	UI_show_npc_face(0xFF9D, 0x0000);
	var0000 = Func0909();
	if (!(!gflags[0x011D])) goto labelFunc0463_0033;
	message("You see a wingless gargoyle with a terrible skin disease. It looks as if his face is falling off in patches.");
	say();
	gflags[0x011D] = true;
	goto labelFunc0463_0037;
labelFunc0463_0033:
	message("\"To want something else?\" Fodus asks.");
	say();
labelFunc0463_0037:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0463_0047:
	converse attend labelFunc0463_00E6;
	case "name" attend labelFunc0463_005D:
	message("\"To be named Fodus.\"");
	say();
	UI_remove_answer("name");
labelFunc0463_005D:
	case "job" attend labelFunc0463_0070:
	message("\"To be a digger in the mines. To be looking for iron ore and lead and...\"");
	say();
	UI_add_answer("and...");
labelFunc0463_0070:
	case "and..." attend labelFunc0463_0098:
	message("\"The secret ore...\"");
	say();
	message("A wave of delirium passes over the gargoyle. \"To... to be going back to work now, Mikos!... To be working hard!... To have no need to give me any more of the the silver fluid...\"");
	say();
	gflags[0x0107] = true;
	UI_remove_answer("and...");
	UI_add_answer(["secret ore", "silver fluid"]);
labelFunc0463_0098:
	case "secret ore" attend labelFunc0463_00B2:
	message("\"To be called... blackrock.\"");
	say();
	UI_remove_answer("secret ore");
	UI_add_answer("blackrock");
labelFunc0463_00B2:
	case "blackrock" attend labelFunc0463_00C5:
	message("\"To be the lode located in a hidden area of the mine...\" The gargoyle's eyes roll up into his head. He is obviously sick.");
	say();
	UI_remove_answer("blackrock");
labelFunc0463_00C5:
	case "silver fluid" attend labelFunc0463_00D8:
	message("\"To need the venom... to have more venom...\"");
	say();
	UI_remove_answer("silver fluid");
labelFunc0463_00D8:
	case "bye" attend labelFunc0463_00E3:
	goto labelFunc0463_00E6;
labelFunc0463_00E3:
	goto labelFunc0463_0047;
labelFunc0463_00E6:
	endconv;
	message("\"To be going back to work now, Mikos...\"*");
	say();
labelFunc0463_00EB:
	return;
}


