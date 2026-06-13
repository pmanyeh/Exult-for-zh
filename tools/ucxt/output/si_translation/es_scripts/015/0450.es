#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func0833 0x833 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func0450 object#(0x450) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;

	var0000 = false;
	var0001 = UI_get_item_flag(0xFFB0, 0x001C);
	var0002 = Func0953();
	if (!(event == 0x0007)) goto labelFunc0450_0031;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0450_0031:
	if (!((event == 0x000A) || (event == 0x0002))) goto labelFunc0450_0049;
	0xFFB0->Func07D1();
	Func0833(event);
labelFunc0450_0049:
	if (!(event == 0x0001)) goto labelFunc0450_05AA;
	Func097F(0xFE9C, "@Hail!@", 0x0000);
	0xFFB0->Func07D1();
	UI_clear_item_say(0xFFB0);
	UI_show_npc_face0(0xFFB0, 0x0000);
	if (!(!var0001)) goto labelFunc0450_0113;
	message("\"Halt! Who art thou and what is thy business?\"");
	say();
	var0004 = Func0956(["I am the Avatar", ("I am " + var0002), "Who doth wish to know?"]);
	if (!(var0004 == "I am the Avatar")) goto labelFunc0450_00A3;
	message("\"Who? Never heard of thee.\"");
	say();
labelFunc0450_00A3:
	if (!(var0004 == ("I am " + var0002))) goto labelFunc0450_00B5;
	message("\"I see.\"");
	say();
labelFunc0450_00B5:
	if (!(var0004 == "Who wants to know?")) goto labelFunc0450_00C3;
	message("\"I ask the questions here.\"");
	say();
labelFunc0450_00C3:
	message("\"Another stranger! Most suspicious. There have not been many travellers recently.\"");
	say();
	Func09AC(0xFFBB, 0x0310, 0x0A66, 0x001D);
	Func09AC(0xFFC1, 0x030F, 0x0A64, 0x001D);
	Func09AC(0xFF6A, 0x0310, 0x0A6A, 0x001D);
	Func09AC(0xFFB3, 0x030F, 0x0A68, 0x001D);
	UI_add_answer(["open the gate", "strangers"]);
	goto labelFunc0450_016C;
labelFunc0450_0113:
	message("\"What is it now?\"");
	say();
	UI_add_answer(["name", "duties"]);
	var0005 = UI_get_object_position(0xFFB0);
	var0006 = var0005[0x0001];
	var0007 = var0005[0x0002];
	if (!((var0006 > 0x0310) && ((var0006 < 0x0330) && ((var0007 > 0x0AA0) && (var0007 < 0x0AD0))))) goto labelFunc0450_016C;
	UI_add_answer(["gate"]);
labelFunc0450_016C:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0450_0185;
	UI_add_answer("traitor");
labelFunc0450_0185:
	if (!gflags[0x00CC]) goto labelFunc0450_0192;
	UI_add_answer("Pomdirgun");
labelFunc0450_0192:
	if (!gflags[0x0044]) goto labelFunc0450_019F;
	UI_add_answer("Simon");
labelFunc0450_019F:
	if (!var0001) goto labelFunc0450_01AC;
	UI_add_answer("bye");
labelFunc0450_01AC:
	converse attend labelFunc0450_05A9;
	case "Pomdirgun" attend labelFunc0450_01C2:
	UI_remove_answer("Pomdirgun");
	message("\"Thou hast killed the worst enemy Monitor hath ever faced! Surely the day of his death will be cause for celebration for many years to come. Thou dost have my thanks, and the thanks of all of Monitor.\"");
	say();
labelFunc0450_01C2:
	case "Simon" attend labelFunc0450_01D5:
	UI_remove_answer("Simon");
	message("\"Perhaps now that Simon was exposed as a Goblin spy the city will be safe again. Then again, I have the feeling that as long as there is a Goblin alive somewhere in the world we will never be truly safe.\"");
	say();
labelFunc0450_01D5:
	case "traitor" attend labelFunc0450_01F2:
	UI_remove_answer("traitor");
	message("\"Thou hast mistaken me for someone who wastes time with idle chatter, ");
	message(var0002);
	message(".\"");
	say();
	message("\"If there is a traitor, no doubt Lord Marsten shall unmask him. Meanwhile, I shall do my duty.\"");
	say();
labelFunc0450_01F2:
	case "open the gate" attend labelFunc0450_02EA:
	message("\"Art thou friend or foe?\"");
	say();
	if (!(Func0956(["friend", "foe"]) == "friend")) goto labelFunc0450_02D9;
	message("\"I do not know thou art a friend... I shall let thee in, but thou must have an escort until thou hast spoken to Lord Marsten.\"");
	say();
	message("\"Thou canst find him at the Crematorium, mourning for the dead. Follow the road north.\"");
	say();
	message("\"Remember, we shall be keeping an eye upon thee!\"");
	say();
	Func097F(0xFFB0, "@Pikemen!@", 0x0001);
	var0008 = UI_create_new_object2(0x00E4, [0x032E, 0x0AAF, 0x0000]);
	if (!var0008) goto labelFunc0450_0273;
	UI_set_npc_id(var0008, 0x0003);
	UI_set_schedule_type(var0008, 0x0009);
	UI_set_alignment(var0008, 0x0000);
	var0003 = UI_set_npc_prop(var0008, 0x0001, 0x000A);
labelFunc0450_0273:
	var0008 = UI_create_new_object2(0x00E4, [0x032C, 0x0ABE, 0x0000]);
	if (!var0008) goto labelFunc0450_02BD;
	UI_set_npc_id(var0008, 0x0003);
	UI_set_schedule_type(var0008, 0x0009);
	UI_set_alignment(var0008, 0x0000);
	var0003 = UI_set_npc_prop(var0008, 0x0001, 0x000A);
labelFunc0450_02BD:
	UI_set_item_flag(0xFE9C, 0x0010);
	Func0833(event);
	UI_set_item_flag(0xFFB0, 0x001C);
	abort;
	goto labelFunc0450_02EA;
labelFunc0450_02D9:
	message("\"Then I shall certainly not let thee in.\"");
	say();
	Func097F(0xFFB0, "@Be thou gone!@", 0x0000);
	abort;
labelFunc0450_02EA:
	case "strangers" attend labelFunc0450_0341:
	UI_remove_answer("strangers");
	message("\"The Colored Storms and the Goblins have kept most people off the roads, and so 'tis unusual to see strangers in Monitor.\"");
	say();
	if (!(!var0000)) goto labelFunc0450_030B;
	UI_add_answer("Goblins");
labelFunc0450_030B:
	UI_add_answer("storms");
	if (!(!gflags[0x0078])) goto labelFunc0450_0341;
	message("\"Suspicious, in fact...\"");
	say();
	message("\"Perhaps thou art in league with the enchanter who materialized in the center of town! We promptly jailed him.\"");
	say();
	gflags[0x00A9] = true;
	if (!(!gflags[0x0032])) goto labelFunc0450_0337;
	message("\"But the uproar interrupted the funeral ceremonies.\"");
	say();
	UI_add_answer("funeral");
labelFunc0450_0337:
	UI_add_answer(["enchanter"]);
labelFunc0450_0341:
	case "storms" attend labelFunc0450_0358:
	UI_remove_answer("storms");
	message("\"Didst thou not see the storm which passed by here so recently? Even a Knight must hide from the fury of Nature!\"");
	say();
	message("\"Hast thou noticed the lightning? It comes in many colors, and it hath sinister magical properties!\"");
	say();
labelFunc0450_0358:
	case "gate" attend labelFunc0450_037A:
	UI_remove_answer("gate");
	message("\"Aye, 'tis a gate indeed. And a strong one at that. To repel any foe who dares attempt to breach these walls.\" *\"I suppose thou dost want me to operate it. As if I had naught to do...\"");
	say();
	UI_set_item_flag(0xFE9C, 0x0010);
	Func0833(event);
	abort;
labelFunc0450_037A:
	case "enchanter" attend labelFunc0450_038D:
	UI_remove_answer("enchanter");
	message("\"Thou dost show an unusual interest in this man. Speak to Lord Marsten. I shall say no more to thee about the matter.\"");
	say();
labelFunc0450_038D:
	case "funeral" attend labelFunc0450_03B1:
	UI_remove_answer("funeral");
	message("\"'Tis a sad affair. One of our patrols was ambushed, and the Goblins slew nearly all of them! Only Templar survived to return.\"");
	say();
	message("\"Worse yet, the patrol was led by the Champion Knight, and she remains lost. We must assume that she is slain, and the Helm of Monitor taken!\"");
	say();
	UI_add_answer(["Champion Knight", "Helm of Monitor"]);
labelFunc0450_03B1:
	case "Champion Knight" attend labelFunc0450_03CC:
	UI_remove_answer("Champion Knight");
	message("\"We are lost without Astrid, for she was a Warrior of Warriors!\"");
	say();
	message("\"Only the bravest Knight can be the Champion of Monitor. We compete constantly for the title, and this keeps us fit to battle the Goblin hordes.\"");
	say();
	message("\"Astrid was unique among us, for she had held the title for nearly three years. In the north, they say that women are weak, but not in Monitor!\"");
	say();
labelFunc0450_03CC:
	case "Helm of Monitor" attend labelFunc0450_03F5:
	UI_remove_answer("Helm of Monitor");
	message("\"The Helm is more than symbolic. Yes, the Champion Knight wears it. But it stands for something!\"");
	say();
	message("\"It was once the property of the Goblin chieftain who nearly conquered Monitor!\"");
	say();
	if (!(!gflags[0x002C])) goto labelFunc0450_03F1;
	message("\"Now that they have it again, we are in dire trouble.\"");
	say();
	goto labelFunc0450_03F5;
labelFunc0450_03F1:
	message("\"Since thou hast brought it back, Monitor shall surely never fall.\"");
	say();
labelFunc0450_03F5:
	case "name" attend labelFunc0450_0431:
	UI_remove_answer("name");
	message("\"I am Flicken, and I am a Knight of Monitor. I belong to the Command of the Bear.\"");
	say();
	message("\"We are all Knights here. If thou art not a Knight of Monitor, then thou dost not belong in Monitor!\"");
	say();
	if (!(!gflags[0x007F])) goto labelFunc0450_041D;
	UI_add_answer("Command");
	goto labelFunc0450_042A;
labelFunc0450_041D:
	UI_add_answer(["Wolves", "Leopards"]);
labelFunc0450_042A:
	UI_add_answer("Bears");
labelFunc0450_0431:
	case "Command" attend labelFunc0450_045C:
	UI_remove_answer("Command");
	message("\"The Knights of Monitor are organized into three clans, which are called Commands.\"");
	say();
	message("\"The Bears are the elite, but there are also the Wolves and the Leopards. Thou canst tell us apart by our tattoos.\"");
	say();
	gflags[0x007F] = true;
	UI_add_answer(["Bears", "Wolves", "Leopards"]);
labelFunc0450_045C:
	case "Bears" attend labelFunc0450_0481:
	UI_remove_answer("Bears");
	if (!(!gflags[0x004A])) goto labelFunc0450_047D;
	message("\"If thou dost ever become a Knight of Monitor, then pray that the Ashes of Gurnordir proclaim thee a Knight of the Bears!\"");
	say();
	UI_add_answer("Ashes of Gurnordir");
labelFunc0450_047D:
	message("\"We are the strongest of the Commands. The Goblins shall never break this city, so long as we are here to man the walls!\"");
	say();
labelFunc0450_0481:
	case "Ashes of Gurnordir" attend labelFunc0450_0498:
	UI_remove_answer("Ashes of Gurnordir");
	message("\"I probably should not speak of sacred matters to outsiders, but it is true that the Ashes of the Dead are holy.\"");
	say();
	message("\"If thou wantest to know more, speak to Caladin or Marsten -- they deal with outsiders.\"");
	say();
labelFunc0450_0498:
	case "Wolves" attend labelFunc0450_04AF:
	UI_remove_answer("Wolves");
	message("\"Bah! If they had their way, the Wolves would waste all our men defending the highways, and leave Monitor defenseless!\"");
	say();
	message("\"Their leader, Brendann, is a profligate. Spending too much time with loose women is bad for a warrior -- mark my words!\"");
	say();
labelFunc0450_04AF:
	case "Leopards" attend labelFunc0450_04DB:
	UI_remove_answer("Leopards");
	if (!(!gflags[0x0038])) goto labelFunc0450_04D7;
	message("\"No one knows what the Leopards stand for anymore! Marsten used to be strong and virile, but now he rules the city from his desk.\"");
	say();
	message("\"As for Spektor, he would rather pick up a quill than a sword. With such leaders, how can the Leopards amount to much!\"");
	say();
	UI_add_answer("ruler");
	goto labelFunc0450_04DB;
labelFunc0450_04D7:
	message("\"With Marsten in prison, the Leopards must needs be restored to what they once were! But Shazzana is a she-tiger... she will set things aright.\"");
	say();
labelFunc0450_04DB:
	case "ruler" attend labelFunc0450_04F2:
	UI_remove_answer("ruler");
	message("\"Monitor hath no King or Queen -- we do not believe in such things, and left our ancient homeland to escape a tyrant who thought otherwise.\"");
	say();
	message("\"The Lords of the Commands take turns ruling Monitor. Currently, Marsten doth have that duty. Next year it shall be Caladin, then after that we must suffer a year under Brendann's yoke.\"");
	say();
labelFunc0450_04F2:
	case "duties" attend labelFunc0450_0516:
	UI_remove_answer("duties");
	message("\"I am the Chief Pikeman, and my station is the Southwest Gate. The task of the Pikemen of Monitor is to man the city walls, and watch for Goblins.\"");
	say();
	if (!(!var0000)) goto labelFunc0450_0516;
	UI_add_answer(["Goblins"]);
labelFunc0450_0516:
	case "Goblins" attend labelFunc0450_053A:
	UI_remove_answer("Goblins");
	message("\"Foul creatures! They are the bane of our existence. We are at war with the Goblins, and have been for many generations. If it were not for the Pikemen patrolling the roads, one could never travel anywhere!\"");
	say();
	var0000 = true;
	UI_add_answer(["roads", "travel"]);
labelFunc0450_053A:
	case "roads" attend labelFunc0450_0555:
	UI_remove_answer("roads");
	message("\"Dost thou know nothing?! Why, we Monitorians have rebuilt the ancient highways, and added new trails and byways.\"");
	say();
	message("\"Each of our Commands supplies the men to guard the Towers which protect the trade routes.\"");
	say();
	message("\"But it is all foolishness! Fawn Tower hath been conquered, and the Goblins will not stop there!\"");
	say();
labelFunc0450_0555:
	case "travel" attend labelFunc0450_0570:
	UI_remove_answer("travel");
	message("\"Why would anyone bother with going anywhere beyond Monitor? This is where Courage thrives -- out there, frivolity reigns...\"");
	say();
	message("\"Moonshade is nothing more than a city of mages. Who needs magic? It pales before a sharply honed sword.\"");
	say();
	message("\"As for Fawn, the place is obsessed with strange customs. And they worship Beauty -- now, how can that compare to Courage?\"");
	say();
labelFunc0450_0570:
	case "bye" attend labelFunc0450_05A6:
	if (!(!gflags[0x004A])) goto labelFunc0450_0587;
	message("\"Do not be surprised if most people do not talk to thee! Since thou art not a Knight of Monitor, thou dost not belong here.\"");
	say();
	message("\"Only the bravest of the brave can be a member of our community!\"");
	say();
labelFunc0450_0587:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thank thee.@", 0x0000);
	Func097F(0xFFB0, "@Courage!@", 0x0002);
	goto labelFunc0450_05A9;
labelFunc0450_05A6:
	goto labelFunc0450_01AC;
labelFunc0450_05A9:
	endconv;
labelFunc0450_05AA:
	return;
}


