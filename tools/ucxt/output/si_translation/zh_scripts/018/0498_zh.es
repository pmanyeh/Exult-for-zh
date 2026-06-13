#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0498 object#(0x498) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc0498_004F;
	UI_item_say(0xFE9C, "@Greetings, friend!@");
	0xFF68->Func07D1();
	if (!gflags[0x0279]) goto labelFunc0498_0039;
	Func097F(0xFF68, "@I know thee...@", 0x0002);
	goto labelFunc0498_0045;
labelFunc0498_0039:
	Func097F(0xFF68, "@Don't hurt me!@", 0x0002);
labelFunc0498_0045:
	UI_set_schedule_type(0xFF68, 0x0003);
labelFunc0498_004F:
	if (!(event == 0x0009)) goto labelFunc0498_03A0;
	UI_clear_item_say(0xFF68);
	UI_show_npc_face0(0xFF68, 0x0000);
	if (!UI_get_item_flag(0xFF68, 0x0006)) goto labelFunc0498_0090;
	message("\"We must hasten to the Serpent Gate!\"");
	say();
	UI_set_schedule_type(0xFF68, 0x001F);
	UI_add_answer("leave");
	goto labelFunc0498_00F0;
	goto labelFunc0498_0097;
labelFunc0498_0090:
	UI_run_schedule(0xFF68);
labelFunc0498_0097:
	var0002 = UI_get_item_flag(0xFF68, 0x001C);
	if (!gflags[0x0279]) goto labelFunc0498_00BE;
	message("\"Thou art late! I have been waiting for thee for a very long time...\"");
	say();
	UI_add_answer(["waiting", "long time"]);
	goto labelFunc0498_00F0;
labelFunc0498_00BE:
	if (!UI_get_item_flag(0xFF68, 0x001C)) goto labelFunc0498_00D2;
	message("\"Thou art returned! What tortures hast thou devised for me, Order dog?\"");
	say();
	goto labelFunc0498_00E0;
labelFunc0498_00D2:
	message("\"I knew that thou wouldst come for me, Order dog! Thou canst take my life, but the key is gone! Gone!\" *\"Sethys shall not fail the Chaos Hierophant!\"");
	say();
	UI_set_item_flag(0xFF68, 0x001C);
labelFunc0498_00E0:
	UI_add_answer(["Order dog", "key", "Chaos Hierophant"]);
labelFunc0498_00F0:
	UI_add_answer("bye");
labelFunc0498_00F7:
	converse attend labelFunc0498_039F;
	case "Order dog" attend labelFunc0498_011A:
	message("\"Thou canst not be satisfied with winning the war! No, thou must slaughter all who dared to believe in something other than what thou dost hold dear!\" *\"Fine warriors who kill cripples and children!\"");
	say();
	UI_remove_answer("Order dog");
	UI_add_answer(["winning the war", "cripples and children"]);
labelFunc0498_011A:
	case "winning the war" attend labelFunc0498_0142:
	message("\"Thy kind hath destroyed the Balance... All power now rests with the Order villains!\"");
	say();
	message("\"The Temples have been desecrated, and the altars have been thrown down...\"");
	say();
	message("\"See how thou wilt use it... To slay an unarmed man!\"");
	say();
	UI_remove_answer("winning the war");
	UI_add_answer(["destroyed the Balance", "desecrated"]);
labelFunc0498_0142:
	case "desecrated" attend labelFunc0498_0159:
	UI_remove_answer("desecrated");
	message("\"Do not deny it, fiend! I know how thy mind works. Even now, thou doth lust to topple the altar of this temple.\"");
	say();
	message("\"But I shall not tell thee where it lies! I shall not aid thee in stopping the glorious waters which flow from it, nor shall I aid thee in placing the sacred containers upon it...\"");
	say();
labelFunc0498_0159:
	case "destroyed the Balance" attend labelFunc0498_016C:
	UI_remove_answer("destroyed the Balance");
	message("\"I'm certain it was thy pack of jackals that killed the Great Hierophant! Without Ssithnos' guidance, we are lost... Even thee, dog!\"");
	say();
labelFunc0498_016C:
	case "cripples and children" attend labelFunc0498_017F:
	message("\"I was at the Temple of Enthusiasm as thy forces marched on it! I saw the children fall to thy soldiers' blades!\" *\"And now that thou art here -- where all are misfits and crippled... I'm certain thou wilt slay us with as little regard!\"");
	say();
	UI_remove_answer("cripples and children");
labelFunc0498_017F:
	case "key" attend labelFunc0498_019F:
	UI_remove_answer("key");
	message("\"Thou knowest of the key? The Chaos Hierophant sent thee!\" *\"Alas, I have failed my duty... The key that I was to guard and hide is gone!\"");
	say();
	UI_add_answer(["hide and guard", "gone"]);
labelFunc0498_019F:
	case "hide and guard" attend labelFunc0498_01B2:
	message("\"Our Master gave me the key as the Order soldiers came. He bade me guard the key with my life, and hide it from their filthy grasp.\" *\"I have not seen our Master since... And thus far I have eluded the Order scum.\"");
	say();
	UI_remove_answer("hide and guard");
labelFunc0498_01B2:
	case "gone" attend labelFunc0498_01D2:
	UI_remove_answer("gone");
	message("\"Now my soul will never enter the Void! Long ago, or so it seems to me, a vicious rat came and gnashed its long teeth at me.\" *\"I dropped the key as I tried to fend the beast off. The rat, seeing a shiny treasure, took the key and fled!\"");
	say();
	UI_add_answer(["Void", "fled"]);
labelFunc0498_01D2:
	case "Void" attend labelFunc0498_01E9:
	UI_remove_answer("Void");
	message("\"It is the goal of the devout to live pure lives, so that we can ascend to the Void and merge with the Greater One.\"");
	say();
	message("\"But I stand condemned, for the key is lost!\"");
	say();
labelFunc0498_01E9:
	case "fled" attend labelFunc0498_020C:
	message("\"Down that small tunnel in the wall...\" *\"I have tried to enlarge the hole so that I might retrieve the key... But I have nothing as strong and sharp as a rat's teeth.\" *\"Oh, I am doomed!\"");
	say();
	Func097F(0xFF68, "@Doomed!@", 0x0000);
	UI_set_schedule_type(0xFF68, 0x0014);
	abort;
labelFunc0498_020C:
	case "Chaos Hierophant" attend labelFunc0498_022C:
	UI_remove_answer("Chaos Hierophant");
	message("\"The Chaos Hierophant charged me with an important task... Who would have ever thought that I would be found worthy?\"");
	say();
	UI_add_answer(["worthy", "task"]);
labelFunc0498_022C:
	case "worthy" attend labelFunc0498_0243:
	UI_remove_answer("worthy");
	message("\"I must confess that in mine humility, it never occurred to me that the Hierophant even knew my name!\"");
	say();
	message("\"And then, in the hour of need, he selected me! Such an honor!\"");
	say();
labelFunc0498_0243:
	case "task" attend labelFunc0498_0267:
	UI_remove_answer("task");
	message("\"I shall not tell thee... At last, I, Sethys, have something important, something of value.\" *\"I have a secret!\"");
	say();
	UI_push_answers();
	UI_add_answer(["share it with me", "don't care"]);
labelFunc0498_0267:
	case "share it with me" attend labelFunc0498_0277:
	message("\"A secret! A secret! I have a secret! And I won't tell!\"");
	say();
	UI_pop_answers();
labelFunc0498_0277:
	case "don't care" attend labelFunc0498_0287:
	message("\"Ah, but I can tell that thou dost want mine hidden knowledge. It will do thee no good! I shall keep my secret.\"");
	say();
	UI_pop_answers();
labelFunc0498_0287:
	case "waiting" attend labelFunc0498_02A5:
	UI_remove_answer("waiting");
	message("\"How canst thou have forgotten? It is time for us to bring the key to the Master.\"");
	say();
	message("\"Sadly, I have lost the key, so I shall have to beg for forgiveness...\"");
	say();
	UI_add_answer("Master");
labelFunc0498_02A5:
	case "long time" attend labelFunc0498_02B8:
	UI_remove_answer("long time");
	message("\"Why, I have been in this place for... centuries, it doth seem. The aura of this place must have preserved me to fulfill my duty.\"");
	say();
labelFunc0498_02B8:
	case "Master" attend labelFunc0498_02DC:
	message("\"Only I know where our Master lies, dear friend, for I am the sole survivor of that horrible battle. I could show thee the place, but I am loathe to leave the Temple... I have been here so long.\"");
	say();
	UI_remove_answer("Master");
	UI_push_answers();
	UI_add_answer(["show me", "never mind"]);
labelFunc0498_02DC:
	case "never mind" attend labelFunc0498_02F3:
	UI_remove_answer("never mind");
	message("\"I am so relieved! There is so much to be done here.\"");
	say();
	UI_pop_answers();
labelFunc0498_02F3:
	case "leave" attend labelFunc0498_0306:
	UI_remove_answer("leave");
	message("\"Oh, but I cannot leave thee now! I have pledged to show thee the resting place of the Hierophant, and I shall not disappoint thee.\"");
	say();
labelFunc0498_0306:
	case "show me" attend labelFunc0498_034F:
	UI_remove_answer("show me");
	message("\"I should remain here. This place must be cleaned before the Master of Tolerance returns... Look at what those filthy Order monsters did to our home!\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list2()) < 0x0005)) goto labelFunc0498_0347;
	message("\"But I would like to return the key to the Chaos Hierophant. Perhaps it would not hurt to go to the Temple of Enthusiasm, briefly.\"");
	say();
	message("\"Very well! I shall join with thee.\"");
	say();
	UI_add_to_party(0xFF68);
	Func097F(0xFF68, "@Onward!@", 0x0000);
	abort;
	goto labelFunc0498_034F;
labelFunc0498_0347:
	message("\"Ah, but thou hast so many companions! Surely I would only be a nuisance to thee...\"");
	say();
	UI_pop_answers();
labelFunc0498_034F:
	case "bye" attend labelFunc0498_039C:
	UI_remove_npc_face0();
	if (!UI_get_item_flag(0xFF68, 0x0006)) goto labelFunc0498_0383;
	Func097F(0xFE9C, "@Thank thee!@", 0x0000);
	Func097F(0xFF68, "@Hasten!@", 0x0002);
	goto labelFunc0498_039B;
labelFunc0498_0383:
	Func097F(0xFE9C, "@Farewell, ancient!@", 0x0000);
	Func097F(0xFF68, "@Go in Chaos!@", 0x0002);
labelFunc0498_039B:
	abort;
labelFunc0498_039C:
	goto labelFunc0498_00F7;
labelFunc0498_039F:
	endconv;
labelFunc0498_03A0:
	return;
}


