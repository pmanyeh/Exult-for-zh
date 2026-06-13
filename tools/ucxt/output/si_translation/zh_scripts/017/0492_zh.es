#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0492 object#(0x492) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0492_0028;
	UI_item_say(0xFE9C, "@Hail, Gwani elder!@");
	Func097F(0xFF6E, "@Thou are here.@", 0x0003);
	UI_set_schedule_type(0xFF6E, 0x0003);
labelFunc0492_0028:
	if (!(event == 0x0009)) goto labelFunc0492_028C;
	UI_run_schedule(0xFF6E);
	UI_clear_item_say(0xFF6E);
	UI_show_npc_face0(0xFF6E, 0x0000);
	message("\"It is one foretold by Gwenno!\"");
	say();
	UI_add_answer(["name", "Gwenno", "bye"]);
	if (!gflags[0x0004]) goto labelFunc0492_0079;
	if (!gflags[0x0263]) goto labelFunc0492_0072;
	UI_add_answer("Thanks");
	goto labelFunc0492_0079;
labelFunc0492_0072:
	UI_add_answer("We have been attacked!");
labelFunc0492_0079:
	converse attend labelFunc0492_028B;
	case "name" attend labelFunc0492_00A2:
	UI_remove_answer("name");
	message("\"I Myauri, hunting master. My mate Yenani chieftain of our people. I am father of Neyobi and Kapyundi.\"");
	say();
	UI_add_answer(["Myauri", "Yenani", "Neyobi", "Kapyundi"]);
labelFunc0492_00A2:
	case "Myauri" attend labelFunc0492_00B5:
	UI_remove_answer("Myauri");
	message("\"It is ancient, proud Gwani name. It mean 'Blizzard' in our tongue.\"");
	say();
labelFunc0492_00B5:
	case "Yenani" attend labelFunc0492_00C8:
	UI_remove_answer("Yenani");
	message("\"She mate of Myauri all of life. She not only leader of Gwani people, but keeper of stories, and history of our people.\"");
	say();
labelFunc0492_00C8:
	case "Neyobi" attend labelFunc0492_0105:
	UI_remove_answer("Neyobi");
	var0000 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0000) goto labelFunc0492_0101;
	message("\"Neyobi my only daughter. She very sick. Strange sickness put her to sleep. Now she not wake. If she not cured soon, sleeping sickness kill her.\"");
	say();
	UI_add_answer(["strange sickness", "When did this happen?", "cure"]);
	goto labelFunc0492_0105;
labelFunc0492_0101:
	message("\"Neyobi sickness gone! Avatar cure Neyobi. Myauri never forget great deed Avatar do for Myauri. Great deed for Gwani people!\"");
	say();
labelFunc0492_0105:
	case "strange sickness" attend labelFunc0492_0125:
	UI_remove_answer("strange sickness");
	message("\"Not even our healer Baiyanda know what sickness is, where it come from, how it cured. I worry it be with rest of Gwani people. Maybe nothing to be done. Maybe Gwani die.\"");
	say();
	UI_add_answer(["nothing to be done", "Gwani die"]);
labelFunc0492_0125:
	case "When did this happen?" attend labelFunc0492_0138:
	UI_remove_answer("When did this happen?");
	message("\"It not long ago when Neyobi was well. Then one morning she not wake. That is all I know.\"");
	say();
labelFunc0492_0138:
	case "cure" attend labelFunc0492_014B:
	UI_remove_answer("cure");
	message("\"Speak with Yenani or Baiyanda. They know what to do.\"");
	say();
labelFunc0492_014B:
	case "Kapyundi" attend labelFunc0492_0178:
	UI_remove_answer("Kapyundi");
	var0001 = UI_get_item_flag(0xFF66, 0x0004);
	if (!var0001) goto labelFunc0492_0174;
	message("\"The Trapper killed him. He was great hunter. He fought fiercely for his life and his people. My heart burn at loss of him but he live forever in my memory.\"");
	say();
	goto labelFunc0492_0178;
labelFunc0492_0174:
	message("\"He my son, brave and strong hunter. One day he take my place as Hunting Master of Gwani people. Even now he search for cure for Neyobi sickness.\"");
	say();
labelFunc0492_0178:
	case "nothing to be done" attend labelFunc0492_018B:
	UI_remove_answer("nothing to be done");
	message("\"Not all things in world meant to have answers. Gwani tried to live in balance with world, not force us on nature. Maybe our time is over.\"");
	say();
labelFunc0492_018B:
	case "Gwani die" attend labelFunc0492_019E:
	UI_remove_answer("Gwani die");
	message("\"Maybe time here to face death of our people. All in universe balanced unless man or Gwani intervene. Our people seen great strife, great challenges. Fierce dragons, goblins, hunting humans. We survive all of these things. Still part of great balance of things. Maybe we not meant to survive this. When Gwani no longer part of balance of universe, time for us to leave world. This way of things.\"");
	say();
labelFunc0492_019E:
	case "Gwenno" attend labelFunc0492_01DD:
	UI_remove_answer("Gwenno");
	var0002 = UI_get_schedule_type(0xFF6B);
	if (!(var0002 == 0x000F)) goto labelFunc0492_01D9;
	message("\"Gwenno great friend to our people. It thanks to her that many of our people speak thy tongue. She even told us all about thou. She said thou would come. Her death tragedy.\"");
	say();
	gflags[0x0262] = true;
	UI_add_answer(["How did Gwenno die?", "Where is Gwenno's body?"]);
	goto labelFunc0492_01DD;
labelFunc0492_01D9:
	message("\"All Gwani people very happy to know Gwenno alive again!\"");
	say();
labelFunc0492_01DD:
	case "How did Gwenno die?" attend labelFunc0492_01F7:
	UI_remove_answer("How did Gwenno die?");
	message("\"Gwenno killed by The Trapper's men.\"");
	say();
	UI_add_answer("The Trapper");
labelFunc0492_01F7:
	case "Where is Gwenno's body?" attend labelFunc0492_020A:
	UI_remove_answer("Where is Gwenno's body?");
	message("\"Gwenno's body now at Gwani Death Temple. It place sacred to us, where spirits of dead rest peacefully. Only leaders of tribe, Yenani and Baiyanda go there. But Baiyanda's mate Bwundai may know where it is.\"");
	say();
labelFunc0492_020A:
	case "The Trapper" attend labelFunc0492_022A:
	UI_remove_answer("The Trapper");
	if (!gflags[0x0263]) goto labelFunc0492_0226;
	message("\"I thank thou for killing The Trapper. Maybe now we live in peace!\"");
	say();
	goto labelFunc0492_022A;
labelFunc0492_0226:
	message("\"The Trapper cunning human who hunt us to near extinction. He hunt us for our skins. He live somewhere north. We do not know where.\"");
	say();
labelFunc0492_022A:
	case "Thanks" attend labelFunc0492_023D:
	UI_remove_answer("Thanks");
	message("\"Terrible threat to Gwani people ended thanks to thou! We grateful!\"");
	say();
labelFunc0492_023D:
	case "We have been attacked!" attend labelFunc0492_025D:
	UI_remove_answer("We have been attacked!");
	message("\"The Trapper struck! All Gwani dead but Yenani, Neyobi and I.\"");
	say();
	UI_add_answer(["nothing to be done", "Gwani die"]);
labelFunc0492_025D:
	case "bye" attend labelFunc0492_0288:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFF6E, "@Go in peace, my friend.@", 0x0003);
	goto labelFunc0492_028B;
labelFunc0492_0288:
	goto labelFunc0492_0079;
labelFunc0492_028B:
	endconv;
labelFunc0492_028C:
	return;
}


