#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func087A 0x87A ();

void Func04CE object#(0x4CE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04CE_01BA;
	UI_show_npc_face(0xFF32, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF32));
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x028B])) goto labelFunc04CE_0048;
	message("A very neat, well-groomed, kindly man stands before you.");
	say();
	gflags[0x028B] = true;
	goto labelFunc04CE_0052;
labelFunc04CE_0048:
	message("\"Greetings, ");
	message(var0000);
	message(". How may I help thee?\"");
	say();
labelFunc04CE_0052:
	converse attend labelFunc04CE_01AF;
	case "name" attend labelFunc04CE_006E:
	message("He smiles at you. \"Ah, excellent. Thou art not afraid to ask question. Remember, there are no stupid questions, only dumb ones. My name is Eldroth, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc04CE_006E:
	case "job" attend labelFunc04CE_008D:
	message("\"I, my friend, am the provisioner. And, if I may be immodest, also a counselor for Vesper. Perhaps I can someday give thee advice, ");
	message(var0000);
	message(". For remember, that which does not kill us, makes us wounded.\"");
	say();
	UI_add_answer(["Vesper", "buy"]);
labelFunc04CE_008D:
	case "Vesper" attend labelFunc04CE_00B3:
	message("\"Yes, ");
	message(var0000);
	message(", this town is full of wonderful people to whom I have given advice.\"");
	say();
	UI_add_answer(["people", "advice"]);
	UI_remove_answer("Vesper");
labelFunc04CE_00B3:
	case "advice" attend labelFunc04CE_00C6:
	message("\"Early to bed, early to rise, makes Jack a dull boy.\"");
	say();
	UI_remove_answer("advice");
labelFunc04CE_00C6:
	case "buy" attend labelFunc04CE_00F3:
	UI_remove_answer("buy");
	if (!(var0001 == 0x0007)) goto labelFunc04CE_00E9;
	message("\"Thou wishest to make a purchase. Excellent. But remember, a gold piece saved is a gold piece not spent.\"");
	say();
	Func087A();
	goto labelFunc04CE_00F3;
labelFunc04CE_00E9:
	message("\"Perhaps thou couldst wait until my shop is open, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04CE_00F3:
	case "people" attend labelFunc04CE_0123:
	message("\"About whom doth thou wish to know? Auston? The gargoyles? Liana? Cador? Perhaps Yongi?\"");
	say();
	UI_push_answers();
	UI_add_answer(["Auston", "gargoyles", "Liana", "Yongi", "Cador", "no one"]);
	UI_remove_answer("people");
labelFunc04CE_0123:
	case "Liana" attend labelFunc04CE_0136:
	message("\"Liana is a very fine young woman who clerks at the townhall.\"");
	say();
	UI_remove_answer("Liana");
labelFunc04CE_0136:
	case "Yongi" attend labelFunc04CE_0149:
	message("\"He is the bartender at the Glided Gizzard.\" He stops, shakes his head, and then corrects himself. \"I mean the Lilded Lizard,\" he frowns. \"No, that's the Gilded Lizard. Yes that's it!\"");
	say();
	UI_remove_answer("Yongi");
labelFunc04CE_0149:
	case "Cador" attend labelFunc04CE_015C:
	message("\"Cador oversees the mines. He and his wife, Yvella, have a lovely daughter named Catherine.\"");
	say();
	UI_remove_answer("Cador");
labelFunc04CE_015C:
	case "Auston" attend labelFunc04CE_0175:
	message("\"The mayor? I would have thought thou wouldst have met him by now, ");
	message(var0000);
	message(". He is performing an excellent job. Thou mayest not realize this,\" he blushes, \"but 'tis I who suggested he run for the office.\"");
	say();
	UI_remove_answer("Auston");
labelFunc04CE_0175:
	case "gargoyles" attend labelFunc04CE_018E:
	message("\"I fear they will stage an uprising. I know Auston holds the same thoughts, for very recently he approached me and asked for my guidance to prepare for just such an incident. I will warn thee just as I warned him. Always remember, ");
	message(var0000);
	message(", the best defense is a good defense!\"");
	say();
	UI_remove_answer("gargoyles");
labelFunc04CE_018E:
	case "no one" attend labelFunc04CE_01A1:
	UI_pop_answers();
	UI_remove_answer("people");
labelFunc04CE_01A1:
	case "bye" attend labelFunc04CE_01AC:
	goto labelFunc04CE_01AF;
labelFunc04CE_01AC:
	goto labelFunc04CE_0052;
labelFunc04CE_01AF:
	endconv;
	message("\"Farewell, ");
	message(var0000);
	message(". Never forget, the grass is always greener when it rains.\"");
	say();
labelFunc04CE_01BA:
	if (!(event == 0x0000)) goto labelFunc04CE_0252;
	var0002 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF32));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 >= 0x0002) || (var0002 <= 0x0006))) goto labelFunc04CE_0252;
	if (!((var0001 == 0x0007) || (var0001 == 0x0005))) goto labelFunc04CE_0248;
	if (!(var0003 == 0x0001)) goto labelFunc04CE_0218;
	var0004 = "@A stitch in time uses more thread.@";
labelFunc04CE_0218:
	if (!(var0003 == 0x0002)) goto labelFunc04CE_0228;
	var0004 = "@Never hit a man when thou cannot.@";
labelFunc04CE_0228:
	if (!(var0003 == 0x0003)) goto labelFunc04CE_0238;
	var0004 = "@The early bird wakes up first.@";
labelFunc04CE_0238:
	if (!(var0003 == 0x0004)) goto labelFunc04CE_0248;
	var0004 = "@A bird in the hand squirms.@";
labelFunc04CE_0248:
	UI_item_say(0xFF32, var0004);
labelFunc04CE_0252:
	return;
}


