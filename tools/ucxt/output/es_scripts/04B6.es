#game "blackgate"
// externs
extern void Func089D 0x89D (var var0000, var var0001, var var0002);
extern void Func092F 0x92F (var var0000);

void Func04B6 object#(0x4B6) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04B6_01E6;
	UI_show_npc_face(0xFF4A, 0x0000);
	var0000 = 0xFF4A;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0247])) goto labelFunc04B6_003A;
	message("You are greeted by a friendly gargoyle.");
	say();
	gflags[0x0247] = true;
	goto labelFunc04B6_003E;
labelFunc04B6_003A:
	message("\"To see you are doing well, human,\" says Inmanilem.");
	say();
labelFunc04B6_003E:
	converse attend labelFunc04B6_01E1;
	case "name" attend labelFunc04B6_0061:
	message("\"To be called Inmanilem, human. To wish information about Terfin?\"");
	say();
	UI_remove_answer("name");
	UI_add_answer(["information", "Inmanilem"]);
labelFunc04B6_0061:
	case "Inmanilem" attend labelFunc04B6_0074:
	message("\"To be Gargoyle for `make healed one.'\"");
	say();
	UI_remove_answer("Inmanilem");
labelFunc04B6_0074:
	case "job" attend labelFunc04B6_0094:
	message("\"To be the healer.\"");
	say();
	UI_add_answer("heal");
	if (!gflags[0x0244]) goto labelFunc04B6_0094;
	UI_add_answer("conflicts");
labelFunc04B6_0094:
	case "heal" attend labelFunc04B6_00DF:
	var0001 = UI_part_of_day();
	if (!((var0001 == 0x0002) || ((var0001 == 0x0003) || ((var0001 == 0x0004) || (var0001 == 0x0005))))) goto labelFunc04B6_00D4;
	Func089D(0x0019, 0x000A, 0x01AE);
	goto labelFunc04B6_00D8;
labelFunc04B6_00D4:
	message("\"To feel sorry, but to be busy with other things now. To ask you to come back when I have the time to heal you.\"");
	say();
labelFunc04B6_00D8:
	UI_remove_answer("Heal");
labelFunc04B6_00DF:
	case "information" attend labelFunc04B6_0102:
	message("\"To tell you to seek out Draxinusom, human, or Forbrak. To have much information about Terfin.\"");
	say();
	UI_remove_answer("information");
	UI_add_answer(["Draxinusom", "Forbrak", "Terfin"]);
labelFunc04B6_0102:
	case "Forbrak" attend labelFunc04B6_0115:
	message("\"To be the tavernkeeper. To be very strong of body, and of mind.\"");
	say();
	UI_remove_answer("Forbrak");
labelFunc04B6_0115:
	case "Terfin" attend labelFunc04B6_012F:
	message("\"To be the city of gargoyles. To be the one of two towns where many gargoyles live. To like it here,\" he adds, smiling.");
	say();
	UI_remove_answer("Terfin");
	UI_add_answer("one?");
labelFunc04B6_012F:
	case "one?" attend labelFunc04B6_0142:
	message("\"To tell you the other is called Vesper. To be in the desert in northeastern Britannia. To have also humans living there, unlike here.\"");
	say();
	UI_remove_answer("one?");
labelFunc04B6_0142:
	case "Draxinusom" attend labelFunc04B6_015C:
	message("\"To be our leader. To live near the Hall of Knowledge.\"");
	say();
	UI_remove_answer("Draxinusom");
	UI_add_answer("Hall");
labelFunc04B6_015C:
	case "Hall" attend labelFunc04B6_0176:
	message("\"To be where the three altars of singularity are kept.\"");
	say();
	UI_remove_answer("Hall");
	UI_add_answer("altars");
labelFunc04B6_0176:
	case "altars" attend labelFunc04B6_0196:
	message("\"To be Passion, Control, and Diligence. To be the values that most gargoyles hold as the key of our existence.\"");
	say();
	UI_remove_answer("altars");
	UI_add_answer(["most gargoyles", "key"]);
labelFunc04B6_0196:
	case "key" attend labelFunc04B6_01A9:
	message("He nods his head emphatically. \"To be quite similar to the human concept of virtues.\"");
	say();
	UI_remove_answer("key");
labelFunc04B6_01A9:
	case "most gargoyles" attend labelFunc04B6_01BC:
	message("\"There is a rival now -- The Fellowship. To know not if it is good or bad, but to know I do not follow it!\"");
	say();
	UI_remove_answer("most gargoyles");
labelFunc04B6_01BC:
	case "conflicts" attend labelFunc04B6_01D3:
	message("\"To know only of one dissatisfied gargoyle. To have always been problem, but now acting hostile and aggressive. To be named Silamo, the gardener.~~\"To recommend you talk to Silamo.\"");
	say();
	UI_remove_answer("conflicts");
	gflags[0x023D] = true;
labelFunc04B6_01D3:
	case "bye" attend labelFunc04B6_01DE:
	goto labelFunc04B6_01E1;
labelFunc04B6_01DE:
	goto labelFunc04B6_003E;
labelFunc04B6_01E1:
	endconv;
	message("\"To wish you good health, human.\"*");
	say();
labelFunc04B6_01E6:
	if (!(event == 0x0000)) goto labelFunc04B6_01F4;
	Func092F(0xFF4A);
labelFunc04B6_01F4:
	return;
}


