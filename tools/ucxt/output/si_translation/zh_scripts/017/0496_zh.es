#game "serpentisle"
// externs
extern void Func091B 0x91B ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func08F1 0x8F1 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D2 object#(0x7D2) ();
extern void Func07D1 object#(0x7D1) ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0496 object#(0x496) ()
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
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;
	var var0018;
	var var0019;
	var var001A;
	var var001B;

	var0000 = UI_get_object_position(item);
	if (!((var0000[0x0001] >= 0x0432) && ((var0000[0x0001] <= 0x0439) && ((var0000[0x0002] >= 0x03E4) && ((var0000[0x0002] <= 0x03EB) && (var0000[0x0003] < 0x0005)))))) goto labelFunc0496_0045;
	Func091B();
	abort;
labelFunc0496_0045:
	var0001 = Func0954();
	var0002 = Func0953();
	var0003 = false;
	var0004 = UI_get_item_flag(0xFFB8, 0x0004);
	if (!(gflags[0x003D] && ((UI_get_schedule_type(0xFF6A) == 0x000E) && (Func08F1() < 0x000F)))) goto labelFunc0496_00AA;
	var0005 = true;
	if (!((!UI_npc_nearby(0xFFFD)) && ((!UI_npc_nearby(0xFFFF)) && ((!UI_npc_nearby(0xFFFE)) && (!UI_npc_nearby(0xFFDE)))))) goto labelFunc0496_00AA;
	var0006 = true;
labelFunc0496_00AA:
	if (!(event == 0x0007)) goto labelFunc0496_017D;
	if (!gflags[0x0083]) goto labelFunc0496_016B;
	var0007 = UI_get_oppressor(0xFF6A);
	var0007 = (0x0000 - var0007);
	if (!(!var0007)) goto labelFunc0496_00D9;
	var0007 = 0xFE9C;
labelFunc0496_00D9:
	if (!((var0007 != 0xFE9C) && (!(var0007 in Func098D())))) goto labelFunc0496_0144;
	var0008 = Func098D();
	var0008 = (var0008 & 0xFE9C);
	enum();
labelFunc0496_00FD:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0496_0117;
	if (!Func0932(var000B)) goto labelFunc0496_0114;
	goto labelFunc0496_011D;
labelFunc0496_0114:
	goto labelFunc0496_00FD;
labelFunc0496_0117:
	var000B = 0xFE9C;
labelFunc0496_011D:
	UI_set_opponent(0xFF6A, var000B);
	UI_set_opponent(var0007, var000B);
	Func0976(0xFF6A, 0x0003);
	Func0976(var0007, 0x0003);
	return;
labelFunc0496_0144:
	if (!(!gflags[0x0007])) goto labelFunc0496_0161;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0007), UI_get_npc_object(0xFF6A));
	return;
labelFunc0496_0161:
	Func092E(var0007);
	return;
	goto labelFunc0496_017D;
labelFunc0496_016B:
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0496_017D:
	if (!(event == 0x0000)) goto labelFunc0496_0350;
	var000C = [0xFFC1];
	if (!(!gflags[0x0038])) goto labelFunc0496_01A2;
	var000C = (var000C & 0xFFBB);
	goto labelFunc0496_01AC;
labelFunc0496_01A2:
	var000C = (var000C & 0xFFB6);
labelFunc0496_01AC:
	if (!(!gflags[0x0092])) goto labelFunc0496_01BD;
	var000C = (var000C & 0xFFB3);
labelFunc0496_01BD:
	enum();
labelFunc0496_01BE:
	for (var000F in var000C with var000D to var000E) attend labelFunc0496_01E3;
	if (!(!UI_npc_nearby(var000F))) goto labelFunc0496_01E0;
	var000C = Func0988(var000F, var000C);
labelFunc0496_01E0:
	goto labelFunc0496_01BE;
labelFunc0496_01E3:
	if (!(var000C == [])) goto labelFunc0496_01EE;
	abort;
labelFunc0496_01EE:
	UI_clear_item_say(0xFF6A);
	var0010 = var000C[UI_get_random(UI_get_array_size(var000C))];
	UI_clear_item_say(var0010);
	var0011 = UI_get_random(0x0006);
	if (!(var0011 == 0x0001)) goto labelFunc0496_0239;
	Func097F(0xFF6A, "@Protect the roads!@", 0x0000);
	Func097F(var0010, "@Protect the city!@", 0x0003);
labelFunc0496_0239:
	if (!(var0011 == 0x0002)) goto labelFunc0496_024F;
	Func097F(0xFF6A, "@We should adjourn!@", 0x0000);
labelFunc0496_024F:
	if (!(var0011 == 0x0003)) goto labelFunc0496_0292;
	if (!gflags[0x00CC]) goto labelFunc0496_027A;
	Func097F(var0010, "@The Goblin King is dead!@", 0x0000);
	Func097F(0xFF6A, "@Long live the Avatar!@", 0x0003);
	goto labelFunc0496_0292;
labelFunc0496_027A:
	Func097F(var0010, "@The Goblins are coming!@", 0x0000);
	Func097F(0xFF6A, "@Then we must attack.@", 0x0003);
labelFunc0496_0292:
	if (!(var0011 == 0x0004)) goto labelFunc0496_02D6;
	if (!(!gflags[0x00B4])) goto labelFunc0496_02BE;
	Func097F(0xFF6A, "@The storms grow worse.@", 0x0000);
	Func097F(var0010, "@Nothing we can do.@", 0x0003);
	goto labelFunc0496_02D6;
labelFunc0496_02BE:
	Func097F(0xFF6A, "@Who is the thief?@", 0x0000);
	Func097F(var0010, "@Do not look at me!@", 0x0003);
labelFunc0496_02D6:
	if (!(var0011 == 0x0005)) goto labelFunc0496_033A;
	if (!gflags[0x0044]) goto labelFunc0496_0301;
	Func097F(0xFF6A, "@Simon was the traitor!@", 0x0000);
	Func097F(var0010, "@I rejoice in his death...@", 0x0002);
	goto labelFunc0496_033A;
labelFunc0496_0301:
	if (!gflags[0x0038]) goto labelFunc0496_0322;
	Func097F(0xFF6A, "@Execute Marsten!@", 0x0000);
	Func097F(var0010, "@We must consider...@", 0x0002);
	goto labelFunc0496_033A;
labelFunc0496_0322:
	Func097F(0xFF6A, "@There is a traitor.@", 0x0000);
	Func097F(var0010, "@Difficult to believe.@", 0x0002);
labelFunc0496_033A:
	if (!(var0011 == 0x0006)) goto labelFunc0496_0350;
	Func097F(0xFF6A, "@The Bears are wrong!@", 0x0000);
labelFunc0496_0350:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFF6A) != 0x000F))) goto labelFunc0496_0414;
	if (!(gflags[0x003D] && (((UI_get_schedule_type(0xFF6A) == 0x000E) || (UI_get_schedule_type(0xFF6A) == 0x000A)) && (Func08F1() < 0x000F)))) goto labelFunc0496_03EC;
	0xFF6A->Func07D2();
	0xFF6A->Func07D1();
	UI_set_schedule_type(0xFF6A, 0x000F);
	Func097F(0xFF6A, "@At last!@", 0x0002);
	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	UI_set_npc_id(0xFF6A, 0x0000);
	gflags[0x0007] = false;
	gflags[0x0008] = false;
	gflags[0x0009] = false;
	var0000 = UI_delayed_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0496], 0x000A);
	goto labelFunc0496_0414;
labelFunc0496_03EC:
	Func097F(0xFE9C, "@Greetings, sir.@", 0x0000);
	0xFF6A->Func07D1();
	Func097F(0xFF6A, "@Hello.@", 0x0002);
	UI_set_schedule_type(0xFF6A, 0x0003);
labelFunc0496_0414:
	if (!(event == 0x0002)) goto labelFunc0496_0430;
	var0000 = UI_execute_usecode_array(0xFF6A, [(byte)0x23, (byte)0x55, 0x0235]);
labelFunc0496_0430:
	if (!(event == 0x0009)) goto labelFunc0496_0ED6;
	UI_run_schedule(0xFF6A);
	UI_clear_item_say(0xFF6A);
	UI_show_npc_face0(0xFF6A, 0x0000);
	if (!(!UI_get_item_flag(0xFF6A, 0x001C))) goto labelFunc0496_0489;
	if (!(gflags[0x0079] == false)) goto labelFunc0496_046D;
	message("\"I am Brendann, stranger.\"");
	say();
	goto labelFunc0496_0471;
labelFunc0496_046D:
	message("\"I am Brendann. I did meet thee at the Banquet Hall.\"");
	say();
labelFunc0496_0471:
	if (!UI_is_pc_female()) goto labelFunc0496_047C;
	message("\"And thou art the most beautiful creature I have ever seen.\"");
	say();
labelFunc0496_047C:
	UI_set_item_flag(0xFF6A, 0x001C);
	goto labelFunc0496_04B3;
labelFunc0496_0489:
	message("\"So we meet again, ");
	message(var0002);
	message(".\"");
	say();
	if (!(gflags[0x003E] && (!gflags[0x003F]))) goto labelFunc0496_04B3;
	if (!UI_is_pc_female()) goto labelFunc0496_04B3;
	message("\"And thy tattoo makes thee even more desirable than before, ");
	message(var0001);
	message(".\"");
	say();
	gflags[0x003F] = true;
labelFunc0496_04B3:
	UI_add_answer(["duties"]);
	if (!(gflags[0x0046] && (!gflags[0x002C]))) goto labelFunc0496_04CF;
	UI_add_answer("Goblin raid");
labelFunc0496_04CF:
	if (!gflags[0x003D]) goto labelFunc0496_04DC;
	UI_add_answer("ready to spar");
labelFunc0496_04DC:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc0496_04F5;
	UI_add_answer("traitor");
labelFunc0496_04F5:
	if (!(gflags[0x0093] && (!gflags[0x0038]))) goto labelFunc0496_0507;
	UI_add_answer("know traitor");
labelFunc0496_0507:
	if (!(gflags[0x0099] && (!gflags[0x028D]))) goto labelFunc0496_0519;
	UI_add_answer("stockings");
labelFunc0496_0519:
	if (!gflags[0x0032]) goto labelFunc0496_0526;
	UI_add_answer("Gwenno");
labelFunc0496_0526:
	if (!gflags[0x0048]) goto labelFunc0496_0533;
	UI_add_answer("Welcome to the Wolf Command");
labelFunc0496_0533:
	if (!(gflags[0x0038] && (!gflags[0x0078]))) goto labelFunc0496_0545;
	UI_add_answer("Iolo");
labelFunc0496_0545:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0496_055E;
	UI_add_answer("brown bottle");
labelFunc0496_055E:
	if (!gflags[0x002C]) goto labelFunc0496_056B;
	UI_add_answer("Helm of Monitor");
labelFunc0496_056B:
	UI_add_answer("bye");
labelFunc0496_0572:
	converse attend labelFunc0496_0ED5;
	case "Helm of Monitor" attend labelFunc0496_0588:
	UI_remove_answer("Helm of Monitor");
	message("\"As thou hast won back the helm of Monitor, thou art truly deserved of the title Champion Knight of Monitor. I salute thee!\"");
	say();
labelFunc0496_0588:
	case "change subject" attend labelFunc0496_0598:
	UI_pop_answers();
	message("\"Of what shall we speak?\"");
	say();
labelFunc0496_0598:
	case "brown bottle" attend labelFunc0496_05D9:
	UI_remove_answer("brown bottle");
	message("\"What clear thinking, ");
	message(var0002);
	message("! Now I understand the wisdom of the Test of Knighthood, when it proclaimed thee a member of our Command.\"");
	say();
	message("\"Surely this proves Krayg's innocence, for he is not a drinking man.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0496_05D5;
	message("\"'Tis certainly a unique bottle, unlike common ale bottles.\"");
	say();
	message("\"If I were thee, I would take this to Luther and confront him. I have always suspected him, and a drunkard like him might well drop a bottle in the woods!\"");
	say();
	goto labelFunc0496_05D9;
labelFunc0496_05D5:
	message("\"Perhaps someone could identify the bottle, if thou wert to show it around. Lucilla at the pub might recognize it.\"");
	say();
labelFunc0496_05D9:
	case "Gwenno" attend labelFunc0496_05EC:
	UI_remove_answer("Gwenno");
	message("\"A fine looking woman, but I know nothing more of her. Simon would be the one to ask concerning information of the strangers passing through town.\"");
	say();
labelFunc0496_05EC:
	case "Welcome to the Wolf Command" attend labelFunc0496_0605:
	UI_remove_answer("Welcome to the Wolf Command");
	message("\"'Tis good to have thee as one of us, ");
	message(var0002);
	message(". Again, congratulations on receiving thy Knighthood.\"");
	say();
labelFunc0496_0605:
	case "duties" attend labelFunc0496_064F:
	UI_remove_answer("duties");
	message("\"I am the leader of the Command of the Wolf. Like all of the Wolves, I am a warrior of cunning as well as strength.\"");
	say();
	if (!gflags[0x002C]) goto labelFunc0496_0625;
	message("\"Why, I daresay I may be the most capable knight in all of Monitor... Save for thee, Champion Knight. Now that thou hast undeniably won that honor, the ladies will certainly fawn on thee!\"");
	say();
	goto labelFunc0496_062D;
labelFunc0496_0625:
	message("\"When I recover the Helm of Monitor from the Goblins, then my prowess will be known to all, and I shall become the next Champion Knight of Monitor!\"");
	say();
	message("\"Then glory will be mine. And the ladies will truly fawn on me!\"");
	say();
labelFunc0496_062D:
	if (!(!gflags[0x0048])) goto labelFunc0496_063C;
	message("\"But I should not be speaking with thee until thou dost become a Knight of Monitor. Speak with Marsten about that.\"");
	say();
	abort;
	goto labelFunc0496_064F;
labelFunc0496_063C:
	UI_add_answer(["Wolves", "cunning", "Champion Knight", "ladies"]);
labelFunc0496_064F:
	case "Wolves" attend labelFunc0496_0669:
	message("\"The Wolves are the most canny fighters in Monitor. We are quick, silent, and deadly. We are experts at tracking and hunting our prey, and when we attack -- nothing can withstand us. Someday all of Serpent Isle will belong to Monitor, and it will be because of the Command of the Wolf!\"");
	say();
	UI_remove_answer("Wolves");
	UI_add_answer("Serpent Isle");
labelFunc0496_0669:
	case "Serpent Isle" attend labelFunc0496_0697:
	UI_remove_answer("Serpent Isle");
	UI_push_answers();
	message("\"I do not see why we stay down here in the south! Undoubtedly, the climate is warmer here, but the entire continent is ours for the taking! The Bears merely want to hide here and stagnate. And the Leopards have no ambition at all!\"");
	say();
	UI_remove_answer("Serpent Isle");
	UI_add_answer(["Bears", "Leopards", "change subject"]);
labelFunc0496_0697:
	case "Bears" attend labelFunc0496_06D1:
	message("\"I believe one of them is a traitor! Didst thou hear that their patrol was ambushed at Fawn Tower? Our beloved Champion Knight was slain by goblins in that battle.\"");
	say();
	message("\"She may have been a Bear, but she was beautiful...\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_06B8;
	message("\"But, er, thou art even more beautiful, ");
	message(var0001);
	message(".\"");
	say();
labelFunc0496_06B8:
	message("\"The patrol was betrayed. And who could have known the plans? Why, another Bear, of course!\"");
	say();
	UI_remove_answer("Bears");
	if (!(!var0003)) goto labelFunc0496_06D1;
	UI_add_answer("traitor");
labelFunc0496_06D1:
	case "traitor" attend labelFunc0496_0783:
	UI_remove_answer("traitor");
	var0003 = true;
	if (!gflags[0x0048]) goto labelFunc0496_06EE;
	message("\"The charges against Krayg are odious. Simply because a man is different, doth not make him a criminal! He is not the traitor.\"");
	say();
labelFunc0496_06EE:
	if (!(gflags[0x00C0] && (!gflags[0x0045]))) goto labelFunc0496_0700;
	message("\"So Krayg hath told thee of a secret rendezvous site in the woods? By all means, investigate! Surely, thou wilt find evidence there to convict the traitor.\"");
	say();
	goto labelFunc0496_0783;
labelFunc0496_0700:
	if (!gflags[0x0038]) goto labelFunc0496_0717;
	message("\"I cannot still believe that Marsten would betray the entire city to the Goblins. Still, thine evidence is most convincing...\"");
	say();
	if (!gflags[0x0092]) goto labelFunc0496_0714;
	message("\"And Marsten would surely need an accomplice to his evil deeds. It seems that is the role Spektor chose to play in this tragic little drama.\"");
	say();
labelFunc0496_0714:
	goto labelFunc0496_071F;
labelFunc0496_0717:
	message("\"I would not be surprised to find that one of the Bears did play traitor to their own Command! Inspect closely the actions of Luther. He is not to be trusted. He is a braggart and a buffoon. He thinks he shall be the next Champion Knight. But he hath never beaten me!\"");
	say();
	gflags[0x00AD] = true;
labelFunc0496_071F:
	UI_add_answer(["Luther", "List Field"]);
	if (!((!gflags[0x0038]) && (!gflags[0x0092]))) goto labelFunc0496_0783;
	if (!(UI_get_item_flag(0xFFB8, 0x0004) || UI_get_item_flag(0xFFB5, 0x0004))) goto labelFunc0496_0783;
	UI_push_answers();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc0496_0768;
	UI_add_answer("Was Lydia the traitor?");
labelFunc0496_0768:
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc0496_077C;
	UI_add_answer("Was Shmed the traitor?");
labelFunc0496_077C:
	UI_add_answer("change subject");
labelFunc0496_0783:
	case "Was Lydia the traitor?" attend labelFunc0496_079E:
	UI_remove_answer("Was Lydia the traitor?");
	message("\"I find it hard to believe that any member of my Command could be a traitor to Monitor.\"");
	say();
	message("\"How could she betray the patrol? She was a tattoo artist, not a warrior...\"");
	say();
	message("\"No, Luther is still the most likely suspect. Continue on thy quest to find the traitor, my friend. As thy commander, I order it.\"");
	say();
labelFunc0496_079E:
	case "Was Shmed the traitor?" attend labelFunc0496_07D1:
	UI_remove_answer("Was Shmed the traitor?");
	message("\"I do not pretend to know what happened in the Knighthood Dungeon, but it sounds more like wizardry than Goblin mischief.\"");
	say();
	message("\"Dost thou have enemies in the City of Mages, ");
	message(var0002);
	message("? Hast thou been to Moonshade?\"");
	say();
	message("\"Lord Marsten may want us to believe that the traitor hath been caught, but I do not believe it.\"");
	say();
	if (!(!UI_get_item_flag(0xFFB8, 0x0004))) goto labelFunc0496_07D1;
	message("\"As a favor to me, please continue searching for the spy. Surely, conclusive evidence shall appear sooner or later...\"");
	say();
labelFunc0496_07D1:
	case "Luther" attend labelFunc0496_07E4:
	UI_remove_answer("Luther");
	message("\"He may be a Bear, but he doth act like a pig! Ha!\"");
	say();
labelFunc0496_07E4:
	case "List Field" attend labelFunc0496_0810:
	message("\"If thou dost feel like a skirmish, I shall be happy to meet thee there at the List Field. I often give lessons in combat, teaching how to strike quickly. I am there every day\tat three o' clock. Thou dost look like thou art capable of a couple of rounds!\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_0803;
	message("\"And if thou dost meet me at my barracks at next midnight, I shall show thee another way to spar...\"");
	say();
	message("\"My room is at the corner of Kosric Street and Roland Street, facing the List Field.\"");
	say();
	gflags[0x003D] = true;
labelFunc0496_0803:
	UI_remove_answer(["List Field", "ready to spar"]);
labelFunc0496_0810:
	case "Leopards" attend labelFunc0496_0823:
	message("\"Oh, they are all right. At least they listen to us and try to see our point of view. It is time that we dispense with the notion of 'all-for-one and one-for-all' and adopt the concept of -- may the best Knight win!\"");
	say();
	UI_remove_answer("Leopards");
labelFunc0496_0823:
	case "cunning" attend labelFunc0496_0836:
	UI_remove_answer("cunning");
	message("\"Stealth and cunning are primary attributes of a fighter. The Wolves are specialists in these regards. To be stalked and caught by a Wolf patrol would be a ghastly, but altogether honorable, death.\"");
	say();
labelFunc0496_0836:
	case "Champion Knight" attend labelFunc0496_086F:
	if (!gflags[0x002C]) goto labelFunc0496_0859;
	message("\"And a fine champion thou dost make, as well. A true pride to the Wolf Command.\"");
	say();
	if (!(gflags[0x0044] && gflags[0x00CC])) goto labelFunc0496_0856;
	message("\"Not only didst thou root out the imposter in our midst, but thou hast slain our longtime enemy Pomdirgun, the Goblin King. Thou shalt be the stuff of legend one day, surely! Thy place in the history of Monitor is assured.\"");
	say();
labelFunc0496_0856:
	goto labelFunc0496_0868;
labelFunc0496_0859:
	message("\"Astrid was a brave woman. But the next Champion Knight shall be me.\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_0868;
	message("\"Unless, my dear, thou shalt claim the title thyself.\"");
	say();
labelFunc0496_0868:
	UI_remove_answer("Champion Knight");
labelFunc0496_086F:
	case "ladies" attend labelFunc0496_08C0:
	UI_remove_answer("ladies");
	UI_push_answers();
	if (!UI_is_pc_female()) goto labelFunc0496_0898;
	message("\"None of the ladies in Monitor are as beautiful as thou! When I gaze upon thy lovely features, I no longer remember that I have had relations with nearly every woman in this town.\"");
	say();
	message("\"What were their names? Lydia, Lucilla, Shazzana, Cellia... and dost thou not see the resemblance between myself and young Cantra? But I should not speak of this...\"");
	say();
	message("\"Well, they mean nothing to me now that thou art in my life.\"");
	say();
	goto labelFunc0496_08A0;
labelFunc0496_0898:
	message("\"Ah, the ladies of Monitor. All are governed by their own particular passions.\"");
	say();
	message("\"Lydia, Lucilla, Shazzana, Cellia, Harnna...\"");
	say();
labelFunc0496_08A0:
	UI_remove_answer("ladies");
	UI_add_answer(["Lydia", "Lucilla", "Shazzana", "Cellia", "Harnna", "change subject"]);
labelFunc0496_08C0:
	case "Lydia" attend labelFunc0496_08E4:
	if (!var0004) goto labelFunc0496_08D5;
	message("\"Lydia was a strange woman, beautiful but dangerous.\"");
	say();
	goto labelFunc0496_08D9;
labelFunc0496_08D5:
	message("\"She is a spicy wench, that one! Hath quite a temper and is very opinionated.\"");
	say();
labelFunc0496_08D9:
	message("\"They say her sister was even more beautiful, but the sorcerers took her away to their city. 'Twould certainly be an experience to meet her, I am certain of that!\"");
	say();
	UI_remove_answer("Lydia");
labelFunc0496_08E4:
	case "Lucilla" attend labelFunc0496_0907:
	message("\"She is quite a flirt, that one. A true tease, if thou dost know what I mean. Quite good-looking, and fun, too.");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0496_08FC;
	message("\"Perhaps thou mayest enjoy her company?\"");
	say();
labelFunc0496_08FC:
	message("\"To tell the truth, I believe she must be interested in someone else. A secret, torrid affair, perhaps? Now, who could her lover be? I haven't a clue.\"");
	say();
	UI_remove_answer("Lucilla");
labelFunc0496_0907:
	case "Shazzana" attend labelFunc0496_091A:
	message("\"Now that Astrid is dead, Shazzana deeply desires to be the new Champion Knight of Monitor. This is not such a great revelation, of course. Any of us would gladly welcome such an honor.\"");
	say();
	UI_remove_answer("Shazzana");
labelFunc0496_091A:
	case "Cellia" attend labelFunc0496_0939:
	message("\"She is more quiet. Yet she is not unaffected by the often lonely life of a Monitor knight.\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0496_0932;
	message("\"Her skin is smooth and soft. Finer than any luxuriant mane or hide thou wilt find in her shop, I can assure thee... Harrumph, excuse me!\"");
	say();
labelFunc0496_0932:
	UI_remove_answer("Cellia");
labelFunc0496_0939:
	case "Harnna" attend labelFunc0496_095A:
	UI_remove_answer("Harnna");
	message("\"She is a widow now, and hath a fine daughter.\"");
	say();
	message("\"These days, she keeps to herself and dabbles in magic, canst thou imagine? Hah!\"");
	say();
	if (!gflags[0x0079]) goto labelFunc0496_095A;
	message("\"I hope Cantra can be found. The Goblins must have taken her -- they eat children, as thou knowest.\"");
	say();
labelFunc0496_095A:
	case "ready to spar" attend labelFunc0496_096D:
	UI_remove_answer("ready to spar");
	message("\"If thou dost mean what I think thou dost mean, please, meet me in my barracks tonight.\"");
	say();
labelFunc0496_096D:
	case "Goblin raid" attend labelFunc0496_09B5:
	UI_remove_answer("Goblin raid");
	if (!gflags[0x002C]) goto labelFunc0496_0989;
	message("\"Thy raid of the Goblin camp and recovery of the Helm of Monitor will live in our history forever. Astrid is avenged!\"");
	say();
	goto labelFunc0496_09B5;
labelFunc0496_0989:
	message("\"Thou dost plan to raid the Goblin camp? I fear it may be too dangerous, ");
	message(var0001);
	message(". Best leave it to more experienced fighters.\"");
	say();
	var0012 = Func0956(["I will go!", "I beg thy pardon!"]);
	message("\"Well, if that is the way thou dost feel... Go thou. Prove thyself worthy! Go on!\"");
	say();
	if (!UI_is_pc_female()) goto labelFunc0496_09B1;
	message("\"I shall miss thee if thou dost not return...\"");
	say();
labelFunc0496_09B1:
	message("\"Templar is the expert on the Goblins. Thou mightest consider seeking his advice, before risking thy life.\"");
	say();
labelFunc0496_09B5:
	case "know traitor" attend labelFunc0496_0D9E:
	UI_remove_answer("know traitor");
	message("\"Aha! I always knew that buffoon Luther was the criminal. Those Bears shall sing a different tune now!\"");
	say();
	message("\"But dost thou have proof?\"");
	say();
	var0010 = Func0992(0xFFFF, "@We found evidence among the Goblins. Documents signed by the traitor!@", "@I found evidence in the Goblin camp.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"May I see?\"");
	say();
	if (!(Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) || (Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99) || Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)))) goto labelFunc0496_0D76;
	if (!(((Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) + Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) + Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) > 0x0001)) goto labelFunc0496_0A74;
	var0010 = Func0992(0xFFFD, "@Here are the scrolls.@", "@Here are the scrolls.@", false);
	goto labelFunc0496_0A84;
labelFunc0496_0A74:
	var0010 = Func0992(0xFFFD, "@Here it is.@", "@Here it is.@", false);
labelFunc0496_0A84:
	UI_set_conversation_slot(0x0000);
	message("\"But this is not what I expected...\"");
	say();
	var0000 = 0x0000;
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99)) goto labelFunc0496_0ABC;
	message("\"This is proof that Lord Marsten hath been conspiring with the Goblins! That old goat!\"");
	say();
	message("\"He planned to destroy the Wolves! And the Bears! And to make himself King of the city!\"");
	say();
	var0000 = 0x0001;
	gflags[0x0038] = true;
labelFunc0496_0ABC:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) goto labelFunc0496_0AEB;
	message("\"Lord Marsten was the traitor, and that worm Spektor aided him! Death would be too kind for them!\"");
	say();
	message("\"It seems that Marsten sought to spare Astrid's life, but he failed her even as he betrayed his manhood.\"");
	say();
	var0000 = (var0000 + 0x0001);
	gflags[0x0038] = true;
	gflags[0x0092] = true;
labelFunc0496_0AEB:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) goto labelFunc0496_0B12;
	message("\"Marsten sought to betray Bull Tower! We must act quickly to warn the Tower.\"");
	say();
	var0000 = (var0000 + 0x0001);
	gflags[0x0038] = true;
labelFunc0496_0B12:
	if (!(var0000 == 0x0001)) goto labelFunc0496_0B23;
	message("\"I thank thee for showing me this document. Justice will be served. Thou mayest keep this document if thou wishest.\"");
	say();
	goto labelFunc0496_0B31;
labelFunc0496_0B23:
	if (!(var0000 > 0x0001)) goto labelFunc0496_0B31;
	message("\"I thank thee for showing me these documents. Justice will be served. Thou mayest keep these documents if thou wishest.\"");
	say();
labelFunc0496_0B31:
	if (!(gflags[0x0038] && (!UI_get_item_flag(0xFFBB, 0x0004)))) goto labelFunc0496_0B7E;
	UI_move_object(0xFFBB, [0x0446, 0x09C5, 0x0000]);
	UI_set_new_schedules(0xFFBB, [0x0007, 0x0002], [0x000E, 0x0007], [0x0446, 0x09C5, 0x0446, 0x09C5]);
labelFunc0496_0B7E:
	if (!(gflags[0x0092] && (!UI_get_item_flag(0xFFB3, 0x0004)))) goto labelFunc0496_0BCB;
	UI_move_object(0xFFB3, [0x0448, 0x09D6, 0x0000]);
	UI_set_new_schedules(0xFFB3, [0x0007, 0x0002], [0x000E, 0x0007], [0x0448, 0x09D6, 0x0448, 0x09D6]);
labelFunc0496_0BCB:
	UI_set_new_schedules(0xFFC1, [0x0000, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001B, 0x0007, 0x001B, 0x0010, 0x001A], [0x03B1, 0x0A49, 0x03D7, 0x0A8A, 0x03CE, 0x09FF, 0x039B, 0x0A76, 0x03B2, 0x0A05, 0x041C, 0x0A57]);
	var0013 = 0x0003;
labelFunc0496_0C29:
	if (!(var0013 > 0x0000)) goto labelFunc0496_0CC3;
	var0014 = UI_get_object_position(0xFE9C);
	var0014[0x0001] = ((var0014[0x0001] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0014[0x0002] = ((var0014[0x0002] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0015 = UI_create_new_object2(0x00E4, var0014);
	var0016 = UI_approach_avatar(var0015, 0x0032, 0x0028);
	if (!var0016) goto labelFunc0496_0CAF;
	UI_set_item_flag(var0015, 0x0012);
	var0017 = true;
	goto labelFunc0496_0CB6;
labelFunc0496_0CAF:
	UI_remove_item(var0015);
labelFunc0496_0CB6:
	var0013 = (var0013 - 0x0001);
	goto labelFunc0496_0C29;
labelFunc0496_0CC3:
	var0018 = UI_find_nearby(0xFF6A, 0x00E4, 0x001E, 0x0000);
	if (!var0018) goto labelFunc0496_0CFF;
	enum();
labelFunc0496_0CDD:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc0496_0CFF;
	UI_set_schedule_type(var001B, 0x0003);
	UI_set_npc_id(var001B, 0x0006);
	goto labelFunc0496_0CDD;
labelFunc0496_0CFF:
	if (!var0017) goto labelFunc0496_0D3F;
	if (!gflags[0x0092]) goto labelFunc0496_0D12;
	message("\"Do not worry -- we shall arrest these vermin!\"");
	say();
	goto labelFunc0496_0D16;
labelFunc0496_0D12:
	message("\"Do not worry -- I shall personally see that Marsten is hunted down like the dog he is.\"");
	say();
labelFunc0496_0D16:
	Func097F(0xFF6A, "@Pikemen!@", 0x0000);
	UI_set_schedule_type(0xFF6A, 0x000A);
	Func097F(var0018[0x0001], "@Yes, lord!@", 0x0002);
	abort;
	goto labelFunc0496_0D73;
labelFunc0496_0D3F:
	if (!gflags[0x0092]) goto labelFunc0496_0D52;
	message("\"Do not worry, ");
	message(var0002);
	message("! I shall order the Pikemen to place the traitors under arrest!\"");
	say();
	goto labelFunc0496_0D5C;
labelFunc0496_0D52:
	message("\"Do not worry, ");
	message(var0002);
	message("! I shall order the Pikemen to place the traitor under arrest!\"");
	say();
labelFunc0496_0D5C:
	Func097F(0xFF6A, "@Pikemen!@", 0x0000);
	UI_set_schedule_type(0xFF6A, 0x0014);
	abort;
labelFunc0496_0D73:
	goto labelFunc0496_0D9E;
labelFunc0496_0D76:
	var0010 = Func0992(0xFFFE, "@We did not bring it with us.@", "@I did not bring it.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Until thou dost bring proof, no one will believe us...\"");
	say();
	Func097F(0xFF6A, "@Bring proof!@", 0x0000);
	abort;
labelFunc0496_0D9E:
	case "stockings" attend labelFunc0496_0DEA:
	UI_remove_answer("stockings");
	message("\"Ha! I surmise thou hast heard of my reputation as something of a womanizer. Purely undeserved, I assure thee. I will try to answer thy questions.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0000)) goto labelFunc0496_0DCD;
	message("\"A female mage would wear stockings such as the ones thou didst discover amongst thy possessions.\"");
	say();
	goto labelFunc0496_0DD1;
labelFunc0496_0DCD:
	message("\"Thou must have the stockings that thou didst discover amongst thy possessions? If thou dost not have them, I cannot tell thee anything about them.\"");
	say();
labelFunc0496_0DD1:
	if (!Func097D(0xFE9B, 0x0001, 0x02A5, 0xFE99, 0x0001)) goto labelFunc0496_0DEA;
	message("\"The stockings that thou didst take from Shmed were made in the city of Fawn.\"");
	say();
labelFunc0496_0DEA:
	case "Iolo" attend labelFunc0496_0E84:
	UI_remove_answer("Iolo");
	if (!(gflags[0x00C4] == false)) goto labelFunc0496_0E3A;
	message("\"If thou wilt vouch for thy friend's future behavior, then I shall let him go free.\"");
	say();
	if (!Func0955()) goto labelFunc0496_0E33;
	message("\"Very well. Keep thine eye on him. We do not want people popping in and out of our city as he did!\"");
	say();
	message("\"Here is the key to thy friend's jail cell. Set him free.\"");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0005, 0x0000, true);
	gflags[0x00C4] = true;
	goto labelFunc0496_0E37;
labelFunc0496_0E33:
	message("\"Then he must remain in his cell.\"");
	say();
labelFunc0496_0E37:
	goto labelFunc0496_0E84;
labelFunc0496_0E3A:
	if (!Func097D(0xFE9B, 0x0001, 0x0281, 0x0068, 0x0005)) goto labelFunc0496_0E56;
	message("\"I did already give thee the key to thy friend's cell!\"");
	say();
	goto labelFunc0496_0E84;
labelFunc0496_0E56:
	message("\"Didst thou lose the key I did give thee?\"");
	say();
	if (!Func0955()) goto labelFunc0496_0E80;
	message("\"Very well. Here then, take this copy. And do not lose this one!\"");
	say();
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0005, 0x0000, true);
	goto labelFunc0496_0E84;
labelFunc0496_0E80:
	message("\"Good. I would hate for thee to have lost it...\"");
	say();
labelFunc0496_0E84:
	case "bye" attend labelFunc0496_0ED2:
	Func097F(0xFE9C, "@Goodbye@", 0x0000);
	if (!UI_is_pc_female()) goto labelFunc0496_0EC3;
	if (!gflags[0x003D]) goto labelFunc0496_0EB4;
	Func097F(0xFF6A, "@Until tonight!@", 0x0002);
	goto labelFunc0496_0EC0;
labelFunc0496_0EB4:
	Func097F(0xFF6A, "@Nice legs...@", 0x0002);
labelFunc0496_0EC0:
	goto labelFunc0496_0ECF;
labelFunc0496_0EC3:
	Func097F(0xFF6A, "@Be cunning!@", 0x0002);
labelFunc0496_0ECF:
	goto labelFunc0496_0ED5;
labelFunc0496_0ED2:
	goto labelFunc0496_0572;
labelFunc0496_0ED5:
	endconv;
labelFunc0496_0ED6:
	return;
}


