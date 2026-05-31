#game "blackgate"
void Func03B2 shape#(0x3B2) ()
{
	var var0000;

	var0000 = UI_get_schedule_type(UI_get_npc_object(item));
	if (!(event == 0x0000)) goto labelFunc03B2_0015;
	abort;
labelFunc03B2_0015:
	UI_show_npc_face(0xFEFE, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	message("You see a tough-looking guard who takes his job -very- seriously.");
	say();
labelFunc03B2_0033:
	converse attend labelFunc03B2_0063;
	case "name" attend labelFunc03B2_0049:
	message("\"I am a guard.\"");
	say();
	UI_remove_answer("name");
labelFunc03B2_0049:
	case "job" attend labelFunc03B2_0055:
	message("The man looks at you like you are an ignoramus. \"I am a guard, idiot. Thou shouldst go about thy business.\"");
	say();
labelFunc03B2_0055:
	case "bye" attend labelFunc03B2_0060:
	goto labelFunc03B2_0063;
labelFunc03B2_0060:
	goto labelFunc03B2_0033;
labelFunc03B2_0063:
	endconv;
	message("\"Goodbye.\"*");
	say();
	return;
}


