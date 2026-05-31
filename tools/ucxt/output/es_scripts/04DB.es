#game "blackgate"
// externs
extern void Func084C 0x84C ();
extern void Func092F 0x92F (var var0000);

void Func04DB object#(0x4DB) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04DB_014E;
	UI_show_npc_face(0xFF25, 0x0000);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0298])) goto labelFunc04DB_0034;
	message("The gargoyle standing before you has a sour expression on his face.");
	say();
	gflags[0x0298] = true;
	goto labelFunc04DB_0038;
labelFunc04DB_0034:
	message("\"To offer you greetings, human,\" says Aurvidlem.");
	say();
labelFunc04DB_0038:
	converse attend labelFunc04DB_0149;
	case "name" attend labelFunc04DB_004E:
	message("\"To be called Aurvidlem. To recognize you to be the Avatar.\"");
	say();
	UI_remove_answer("name");
labelFunc04DB_004E:
	case "job" attend labelFunc04DB_006A:
	message("\"To provide provisions for others in Vesper.\"");
	say();
	UI_add_answer(["buy provisions", "others", "Vesper"]);
labelFunc04DB_006A:
	case "Vesper" attend labelFunc04DB_007D:
	message("\"To be a town filled with prejudice and hatred. To know the humans expect us to begin a violent confrontation.~~\"To believe the humans deserve it,\" he shrugs, \"but to hope my brethren display more control than that.\"");
	say();
	UI_remove_answer("Vesper");
labelFunc04DB_007D:
	case "buy provisions" attend labelFunc04DB_00E7:
	var0000 = UI_get_schedule_type(UI_get_npc_object(0xFF25));
	if (!(!(var0000 == 0x0007))) goto labelFunc04DB_00A5;
	message("\"To be not selling at this time. To come back tomorrow to buy provisions.\"");
	say();
	goto labelFunc04DB_00E0;
labelFunc04DB_00A5:
	var0001 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	Func084C();
	var0002 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!((var0001 - var0002) > 0x001D)) goto labelFunc04DB_00E0;
	gflags[0x027F] = true;
labelFunc04DB_00E0:
	UI_remove_answer("buy provisions");
labelFunc04DB_00E7:
	case "others" attend labelFunc04DB_010E:
	if (!gflags[0x027F]) goto labelFunc04DB_0103;
	message("\"To have only a few gargoyles living in town. To know mainly Wis-Sur, and,\" he gives a slight grunt, \"Ansikart. Also to know of some wingless ones.\"");
	say();
	UI_add_answer("Ansikart");
	goto labelFunc04DB_0107;
labelFunc04DB_0103:
	message("\"To have only a few gargoyles living in town. To know mainly Wis-Sur and Ansikart, and to know of some wingless ones.\"");
	say();
labelFunc04DB_0107:
	UI_remove_answer("others");
labelFunc04DB_010E:
	case "Ansikart" attend labelFunc04DB_0128:
	message("His eyes shift quickly from left to right before finally settling on you.~~\"To know since change in Wis-Sur, Ansikart gained too much respect. To be sure that I have studied more and would be a wiser and better leader here. To be dissatisfied with Ansikart as choice.\"");
	say();
	UI_add_answer("change");
	UI_remove_answer("Ansikart");
labelFunc04DB_0128:
	case "change" attend labelFunc04DB_013B:
	message("\"To be unsure when change happened, but has affected Wis-Sur greatly. To now see him avoid others and shut himself away. To be concerned for Wis-Sur.\"");
	say();
	UI_remove_answer("change");
labelFunc04DB_013B:
	case "bye" attend labelFunc04DB_0146:
	goto labelFunc04DB_0149;
labelFunc04DB_0146:
	goto labelFunc04DB_0038;
labelFunc04DB_0149:
	endconv;
	message("\"To bid you goodbye.\"*");
	say();
labelFunc04DB_014E:
	if (!(event == 0x0000)) goto labelFunc04DB_015C;
	Func092F(0xFF25);
labelFunc04DB_015C:
	return;
}


