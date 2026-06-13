#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func08F0 0x8F0 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func043F object#(0x43F) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_get_item_flag(0xFFC1, 0x001C);
	var0003 = UI_get_array_size(UI_get_party_list());
	var0004 = false;
	var0005 = false;
	var0006 = false;
	var0007 = false;
	var0008 = false;
	if (!(event == 0x0007)) goto labelFunc043F_010B;
	if (!gflags[0x0083]) goto labelFunc043F_00F9;
	var0009 = UI_get_oppressor(0xFFC1);
	var0009 = (0x0000 - var0009);
	if (!(!var0009)) goto labelFunc043F_0067;
	var0009 = 0xFE9C;
labelFunc043F_0067:
	if (!((var0009 != 0xFE9C) && (!(var0009 in Func098D())))) goto labelFunc043F_00D2;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc043F_008B:
	for (var000C in var0000 with var000A to var000B) attend labelFunc043F_00A5;
	if (!Func0932(var000C)) goto labelFunc043F_00A2;
	goto labelFunc043F_00AB;
labelFunc043F_00A2:
	goto labelFunc043F_008B;
labelFunc043F_00A5:
	var000C = 0xFE9C;
labelFunc043F_00AB:
	UI_set_opponent(0xFFC1, var000C);
	UI_set_opponent(var0009, var000C);
	Func0976(0xFFC1, 0x0003);
	Func0976(var0009, 0x0003);
	return;
labelFunc043F_00D2:
	if (!(!gflags[0x0007])) goto labelFunc043F_00EF;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0009), UI_get_npc_object(0xFFC1));
	return;
labelFunc043F_00EF:
	Func092E(var0009);
	return;
	goto labelFunc043F_010B;
labelFunc043F_00F9:
	var000D = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc043F_010B:
	if (!(event == 0x0000)) goto labelFunc043F_0170;
	if (!gflags[0x0083]) goto labelFunc043F_016F;
	var000E = UI_die_roll(0x0001, 0x0003);
	UI_clear_item_say(0xFFC1);
	if (!(var000E == 0x0001)) goto labelFunc043F_0143;
	Func097F(0xFFC1, "@What a hit!@", 0x0000);
labelFunc043F_0143:
	if (!(var000E == 0x0002)) goto labelFunc043F_0159;
	Func097F(0xFFC1, "@Most impressive!@", 0x0000);
labelFunc043F_0159:
	if (!(var000E == 0x0003)) goto labelFunc043F_016F;
	Func097F(0xFFC1, "@What dost thou call that?@", 0x0000);
labelFunc043F_016F:
	return;
labelFunc043F_0170:
	if (!(event == 0x0001)) goto labelFunc043F_01C2;
	Func097F(0xFE9C, "@Greetings, Knight.@", 0x0000);
	0xFFC1->Func07D1();
	if (!(gflags[0x0090] && (!gflags[0x004C]))) goto labelFunc043F_01AC;
	Func097F(0xFFC1, "@Away with thee!@", 0x0000);
	UI_set_schedule_type(0xFFC1, 0x0014);
	abort;
labelFunc043F_01AC:
	Func097F(0xFFC1, "@Greetings.@", 0x0002);
	UI_set_schedule_type(0xFFC1, 0x0003);
labelFunc043F_01C2:
	if (!(event == 0x0009)) goto labelFunc043F_0D17;
	UI_run_schedule(0xFFC1);
	UI_clear_item_say(0xFFC1);
	UI_show_npc_face0(0xFFC1, 0x0000);
	Func08F0();
	if (!(!var0002)) goto labelFunc043F_01F3;
	message("\"I have not seen thee in Monitor before. Thou art new here. Welcome!\"");
	say();
	goto labelFunc043F_01F7;
labelFunc043F_01F3:
	message("\"So 'tis thee again. Well met! How shall I aid thee?\"");
	say();
labelFunc043F_01F7:
	UI_add_answer(["name", "duties"]);
	if (!(gflags[0x0093] && (!gflags[0x0038]))) goto labelFunc043F_0216;
	UI_add_answer("know traitor");
labelFunc043F_0216:
	if (!(gflags[0x004A] && (!gflags[0x0048]))) goto labelFunc043F_0228;
	UI_add_answer("Knighthood");
labelFunc043F_0228:
	if (!(gflags[0x0033] && (!gflags[0x004A]))) goto labelFunc043F_023A;
	UI_add_answer("Test of Knighthood");
labelFunc043F_023A:
	if (!(gflags[0x009A] && (!gflags[0x004C]))) goto labelFunc043F_024C;
	UI_add_answer("missing urn");
labelFunc043F_024C:
	if (!(gflags[0x002D] && (!gflags[0x00A5]))) goto labelFunc043F_025E;
	UI_add_answer("Marsten");
labelFunc043F_025E:
	if (!(gflags[0x00BB] || gflags[0x00BC])) goto labelFunc043F_026F;
	UI_add_answer("trainer");
labelFunc043F_026F:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc043F_0288;
	UI_add_answer("brown bottle");
labelFunc043F_0288:
	if (!(gflags[0x0048] && (!UI_get_item_flag(0xFFB4, 0x0004)))) goto labelFunc043F_02A1;
	UI_add_answer("traitor");
labelFunc043F_02A1:
	if (!gflags[0x002C]) goto labelFunc043F_02AE;
	UI_add_answer("Helm of Monitor");
labelFunc043F_02AE:
	if (!gflags[0x0044]) goto labelFunc043F_02BB;
	UI_add_answer("Simon");
labelFunc043F_02BB:
	if (!gflags[0x00CC]) goto labelFunc043F_02C8;
	UI_add_answer("Pomdirgun");
labelFunc043F_02C8:
	UI_add_answer("bye");
labelFunc043F_02CF:
	converse attend labelFunc043F_0D16;
	case "Helm of Monitor" attend labelFunc043F_02E5:
	UI_remove_answer("Helm of Monitor");
	message("\"Thou hast recovered the Helm of Monitor and proven thyself to be our Champion Knight. Thou art the best of us, the standard by which we shall all be measured. Remember, if thou shouldst leave our city, thou dost carry our honor with thee. It is thy duty to not only to serve Monitor, but to help restore the balance of the world. This is the mission of the Champion Knight.\"");
	say();
labelFunc043F_02E5:
	case "Simon" attend labelFunc043F_02F8:
	UI_remove_answer("Simon");
	message("\"So, Simon was a Goblin in disguise! 'Twas a clever bit of deduction on thy part to uncover his secret.\"");
	say();
labelFunc043F_02F8:
	case "Pomdirgun" attend labelFunc043F_030B:
	UI_remove_answer("Pomdirgun");
	message("\"No one in this town will mourn for that vicious Goblin bastard. I only wish I could have been with thee so I could have watched his life end.\"");
	say();
labelFunc043F_030B:
	case "brown bottle" attend labelFunc043F_0326:
	UI_remove_answer("brown bottle");
	message("\"Thou didst find evidence in the woods? Good thinking! Thou shouldst have been a Bear, not a Wolf...\"");
	say();
	message("\"I know naught of bottles, but thou mightest ask Lucilla at the tavern. Or perhaps Krayg the Provisioner.\"");
	say();
	message("\"Perhaps Luther is right! As provisioner, Krayg could obtain many kinds of bottles...\"");
	say();
labelFunc043F_0326:
	case "Marsten" attend labelFunc043F_0346:
	UI_remove_answer("Marsten");
	if (!gflags[0x0038]) goto labelFunc043F_0342;
	message("\"The villain Marsten currently resides in our prison, thanks to thee.\"");
	say();
	goto labelFunc043F_0346;
labelFunc043F_0342:
	message("\"He is the chieftain of the Leopard Command, and the current Lord of our Town.\"");
	say();
labelFunc043F_0346:
	case "name" attend labelFunc043F_03AA:
	UI_remove_answer("name");
	if (!(!var0002)) goto labelFunc043F_03A6;
	UI_set_item_flag(0xFFC1, 0x001C);
	message("\"I am called Caladin, after mine own grandfather. He was a Champion Knight!\"");
	say();
	UI_add_answer("Champion Knight");
	if (!(!gflags[0x004C])) goto labelFunc043F_03A3;
	message("\"And if I ever discover who has his urn, I shall wring their neck! Canst thou imagine, someone stealing the Ashes of the Dead?\"");
	say();
	UI_add_answer("Ashes of the Dead");
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000)) goto labelFunc043F_03A3;
	UI_add_answer("I have an urn.");
	var0006 = true;
labelFunc043F_03A3:
	goto labelFunc043F_03AA;
labelFunc043F_03A6:
	message("\"Hast thou forgotten? Why, I am Caladin!\"");
	say();
labelFunc043F_03AA:
	case "Champion Knight" attend labelFunc043F_03E7:
	UI_remove_answer("Champion Knight");
	message("\"The Champion Knight of Monitor is the one who hath won the right to wear the Helm of Courage.\"");
	say();
	var000F = Func097D(0xFE9B, 0x0001, 0x017F, 0xFE99, 0x0001);
	if (!(gflags[0x002C] || var000F)) goto labelFunc043F_03E3;
	message("\"As thou hast recovered it, that right naturally has fallen to thee.\"");
	say();
	goto labelFunc043F_03E7;
labelFunc043F_03E3:
	message("\"Currently, the Helm is in the hands of the Goblins. They took the Helm when they slew Astrid, our last Champion Knight. The Helm must be recovered and Astrid must be avenged...!\"");
	say();
labelFunc043F_03E7:
	case "Ashes of the Dead", "missing urn" attend labelFunc043F_0445:
	UI_remove_answer(["Ashes of the Dead", "missing urn"]);
	UI_push_answers();
	message("\"I am not superstitious, mind thee, but I do believe that a man's ashes are sacred. They represent his soul, his heart, his honor.\"");
	say();
	message("\"To know that my grandfather's ashes have been taken from the Crypts...\"");
	say();
	UI_add_answer(["honor", "Crypts", "change subject"]);
	if (!(Func097D(0xFE9B, 0x0001, 0x0392, 0xFE99, 0x0000) && ((!var0006) && (!var0007)))) goto labelFunc043F_0445;
	UI_add_answer("I have an urn.");
	var0006 = true;
labelFunc043F_0445:
	case "honor" attend labelFunc043F_0464:
	UI_remove_answer("honor");
	message("\"Nothing is more important than one's honor! I am a valiant man, and I can promise thee three things --\"");
	say();
	message("\"I shall never surrender my sword to my foe.\"");
	say();
	message("\"My promised word shall never be broken.\"");
	say();
	message("\"Fear is beneath me, and I refuse to let the creeping stink of fright soil my mind. I shall always be fearless.\"");
	say();
labelFunc043F_0464:
	case "Crypts" attend labelFunc043F_047B:
	UI_remove_answer("Crypts");
	message("\"The Ashes of the Dead are kept in the mountain caves, where wild beasts cannot defile the urns.\"");
	say();
	message("\"Renfry is the caretaker there. If thou dost desire to pay thy respects to the dead, thou shalt no doubt encounter him there.\"");
	say();
labelFunc043F_047B:
	case "change subject" attend labelFunc043F_048B:
	message("\"Certainly...\"");
	say();
	UI_pop_answers();
labelFunc043F_048B:
	case "I have an urn." attend labelFunc043F_056C:
	UI_remove_answer("I have an urn.");
	gflags[0x028E] = true;
	var0007 = true;
	message("\"Thou dost? An Urn of the Dead? How didst thou chance upon it? Perhaps thou hast slain the thieves who insulted mine ancestor's soul!\"");
	say();
	var0010 = Func0992(0xFFFD, "@Why... um... we found it, milord.@", "@I found it.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Might I examine it, please?\"");
	say();
	if (!Func0955()) goto labelFunc043F_0564;
	if (!Func097D(0xFE9B, 0x0001, 0x0392, 0x00FF, 0x0000)) goto labelFunc043F_055D;
	message("\"This is my grandfather! Thou hast reunited the souls of my family!\"");
	say();
	var0011 = UI_remove_party_items(0x0001, 0x0392, 0x00FF, 0x0000, true);
	gflags[0x004C] = true;
	message("\"Please accept this gift as an expression of my sincerest gratitude.\"");
	say();
	if (!Func0955()) goto labelFunc043F_0556;
	if (!(var0003 < 0x0002)) goto labelFunc043F_0515;
	var0012 = "thee.";
	goto labelFunc043F_052E;
labelFunc043F_0515:
	if (!(var0003 > 0x0002)) goto labelFunc043F_0528;
	var0012 = "thee and thy fine companions!";
	goto labelFunc043F_052E;
labelFunc043F_0528:
	var0012 = "thee and thy companion.";
labelFunc043F_052E:
	message("\"Here are coins enough to buy room and board at any inn for ");
	message(var0012);
	message("\"");
	say();
	var000D = Func099B(0xFE9C, (var0003 * 0x0032), 0x03B7, 0xFE99, 0xFE99, true, true);
	goto labelFunc043F_055A;
labelFunc043F_0556:
	message("\"Thou art a fool, to turn thy back on coins freely offered.\"");
	say();
labelFunc043F_055A:
	goto labelFunc043F_0561;
labelFunc043F_055D:
	message("\"Ah, 'tis not the urn I am looking for.\"");
	say();
labelFunc043F_0561:
	goto labelFunc043F_056C;
labelFunc043F_0564:
	message("\"Then perhaps thou art the thief! I shall not speak with thee further!\"");
	say();
	gflags[0x0090] = true;
labelFunc043F_056C:
	case "duties" attend labelFunc043F_05A8:
	UI_remove_answer("duties");
	message("\"I am the leader of the Command of the Bear. The Bears are the bravest, most virile warriors in Monitor! Courage is our name.\"");
	say();
	message("\"Do not smirk! The Command of the Bear is unmovable. The Goblins dare not assault Monitor, for they know that we are here.\"");
	say();
	message("\"I am also one of the best combat trainers in the land, shouldst thou need such aid.\"");
	say();
	if (!(!gflags[0x007F])) goto labelFunc043F_0595;
	UI_add_answer("Command");
labelFunc043F_0595:
	UI_add_answer(["Bears", "Courage", "trainer", "Goblins"]);
labelFunc043F_05A8:
	case "Command" attend labelFunc043F_05BB:
	UI_remove_answer("Command");
	message("\"The Knights of Monitor each serve a particular commmand. Each command espouses its own unique military strategy.\"");
	say();
labelFunc043F_05BB:
	case "Bears" attend labelFunc043F_05CE:
	UI_remove_answer("Bears");
	message("\"The Bear Command follows a strategy of protection. We are concerned with protecting our home and making it impregnable, thereby giving us the perfect base from which to give any sort of military operation a successful launch.\"");
	say();
labelFunc043F_05CE:
	case "Courage" attend labelFunc043F_05E1:
	UI_remove_answer("Courage");
	message("\"Our city was founded on the Principle of Courage. Valor is the Virtue we follow. If one cannot show his own prowess in everything undertaken, then one is not worthy to be a Knight of Monitor!\"");
	say();
labelFunc043F_05E1:
	case "Goblins" attend labelFunc043F_0625:
	UI_remove_answer("Goblins");
	message("\"The wretched beasts! I suppose thou hast heard of the ambush at Fawn Tower. They do not fight fair!\"");
	say();
	message("\"Poor Astrid... she was an inspiring warrior, as well as a lusty wench. Damn, but she could kill Goblins...\"");
	say();
	UI_add_answer("Fawn Tower");
	if (!(!UI_get_item_flag(0xFEF7, 0x0004))) goto labelFunc043F_0621;
	message("\"The Wolves and Leopards are useless in a crisis like this, but the Bears shall exact revenge from the Goblins. And if I ever find out who betrayed that patrol...\"");
	say();
	UI_add_answer(["useless", "betrayed"]);
	goto labelFunc043F_0625;
labelFunc043F_0621:
	message("\"At least that miserable Pomdirgun hath gone to his grave. Or by the way of the Goblins, probably the cooking pot, more like.\"");
	say();
labelFunc043F_0625:
	case "Fawn Tower" attend labelFunc043F_0653:
	UI_remove_answer("Fawn Tower");
	message("\"The Pikemen of Monitor are the guardians of Serpent Isle. Our three Towers protect the Serpent Highway, and defend against Goblin invasions.\"");
	say();
	message("\"Besides the Tower here, there is a second at Sleeping Bull. The third Tower was near Fawn, and hath been overrun by Goblins.\"");
	say();
	if (!gflags[0x014E]) goto labelFunc043F_0649;
	message("\"Now that we have recaptured the Fawn Tower, our security is again guaranteed.\"");
	say();
	goto labelFunc043F_0653;
labelFunc043F_0649:
	if (!gflags[0x002C]) goto labelFunc043F_0653;
	message("\"But it shall surely be retaken by our Pikemen, now that thou hast defeated the King of the Goblins and recaptured the Helm of Monitor! Excellent work!\"");
	say();
labelFunc043F_0653:
	case "useless" attend labelFunc043F_066A:
	UI_remove_answer("useless");
	message("\"Worse than useless! Why, the Leopards are led by so-called warriors who spend all day sitting on their arses! Marsten is too old, and Spektor... He reads books!\"");
	say();
	message("\"As for the Wolves, everyone knows that Brendann is weak. If thou dost ask me, he spends too much time playing stud, and not enough with his sword and axe.\"");
	say();
labelFunc043F_066A:
	case "betrayed" attend labelFunc043F_068F:
	UI_remove_answer("betrayed");
	message("\"So maybe I should keep my own counsel, but I'm not the quiet type. The Fawn Tower was betrayed!\"");
	say();
	message("\"How else did the Goblins surprise the entire patrol? Astrid was no fool. Someone betrayed her.\"");
	say();
	if (!(!var0008)) goto labelFunc043F_068F;
	UI_add_answer("traitor");
labelFunc043F_068F:
	case "traitor" attend labelFunc043F_0717:
	UI_remove_answer("traitor");
	var0008 = true;
	message("\"Whoever betrayed Astrid's patrol must have been a Knight -- no one else could have done it.\"");
	say();
	if (!gflags[0x00C0]) goto labelFunc043F_06B7;
	message("\"I don't trust that weakling Krayg, but if he says to look for evidence in the woods, perhaps thou shouldst.\"");
	say();
	message("\"However, he might be sending thee to another ambush! Hmmm...\"");
	say();
	goto labelFunc043F_06CC;
labelFunc043F_06B7:
	if (!gflags[0x0048]) goto labelFunc043F_06C4;
	message("\"Krayg is the most likely suspect, as thou didst hear Luther proclaim at the banquet.\"");
	say();
	goto labelFunc043F_06C8;
labelFunc043F_06C4:
	message("\"The Bears suspect Krayg the Provisioner of being involved, but the Wolves deny it -- of course!\"");
	say();
labelFunc043F_06C8:
	message("\"Someone should question that weakling, and see if his guilt can be proven.\"");
	say();
labelFunc043F_06CC:
	if (!(UI_get_item_flag(0xFFB8, 0x0004) || UI_get_item_flag(0xFFB5, 0x0004))) goto labelFunc043F_0717;
	UI_push_answers();
	if (!UI_get_item_flag(0xFFB8, 0x0004)) goto labelFunc043F_06FC;
	UI_add_answer("Was Lydia the traitor?");
labelFunc043F_06FC:
	if (!UI_get_item_flag(0xFFB5, 0x0004)) goto labelFunc043F_0710;
	UI_add_answer("Was Shmed the traitor?");
labelFunc043F_0710:
	UI_add_answer("change subject");
labelFunc043F_0717:
	case "Was Lydia the traitor?" attend labelFunc043F_073C:
	UI_remove_answer("Was Lydia the traitor?");
	message("\"Listen, ");
	message(var0001);
	message(" -- just because a woman tries to kill thee, is no reason to defame her good name.\"");
	say();
	message("\"I'll admit Lydia dishonored herself by poisoning thee. 'Twas a shameful act.\"");
	say();
	message("\"Yet I cannot believe that she'd betray her entire city to the Goblins. Impossible!\"");
	say();
	message("\"I tell thee, Krayg is the traitor...\"");
	say();
labelFunc043F_073C:
	case "Was Shmed the traitor?" attend labelFunc043F_0757:
	UI_remove_answer("Was Shmed the traitor?");
	message("\"Ha! Shmed was the worst coward in Monitor. We let him hide in Knight's Test to spare ourselves the agony of exiling him.\"");
	say();
	message("\"He was terrified of Goblins! So how could he have become their spy? This makes no sense.\"");
	say();
	message("\"Besides, the matter at Knight's Test smacks of wizardry. I think thou hast an unknown enemy from among the Mages of Moonshade!\"");
	say();
labelFunc043F_0757:
	case "trainer" attend labelFunc043F_078C:
	UI_remove_answer("trainer");
	if (!(!gflags[0x00BB])) goto labelFunc043F_0784;
	if (!(!UI_is_pc_female())) goto labelFunc043F_077C;
	message("\"Yes, I am a trainer. I specialize in making men out of boys. Strength is the key. Once that is gained I then turn to emphasizing the fundamentals of combat. But thou shouldst ask me of this another time.\"");
	say();
	goto labelFunc043F_0784;
labelFunc043F_077C:
	message("\"Yes, I am a trainer. The key to winning in combat is to be strong and to achieve a deadly precision in the application of that strength. Those are the things I teach. I teach ways to make weak warriors stronger, and to make strong warriors invincible!\"");
	say();
	message("\"As thou hast probably guessed, I am especially good with female students... But thou shouldst ask me of this another time.\"");
	say();
labelFunc043F_0784:
	message("\"Come to the List Field at noon any day and I shall be happy to train thee. 'Tis at the south end of town, and is where all the Knights go to fight in tournaments and improve their fighting skills.\"");
	say();
	var0013 = true;
labelFunc043F_078C:
	case "Test of Knighthood" attend labelFunc043F_07D9:
	UI_remove_answer("Test of Knighthood");
	if (!gflags[0x0048]) goto labelFunc043F_07A8;
	message("\"But why talk of this? Thou hast already faced the ordeal of that particular location and earned thy Knighthood! Perhaps we should change the subject.\"");
	say();
	goto labelFunc043F_07C2;
labelFunc043F_07A8:
	if (!UI_is_pc_female()) goto labelFunc043F_07B6;
	message("\"A woman of Courage! I perceive that thou hast the spirit of a warrior.\"");
	say();
	goto labelFunc043F_07BA;
labelFunc043F_07B6:
	message("\"Glad to see that ye have some spirit, my boy! Knighthood is what divides the real men from the weak-willed boys.\"");
	say();
labelFunc043F_07BA:
	message("\"To become a Knight of Monitor, thou must first ask permission of the Lord of Monitor. Then thou must journey to the Dungeon called Knight's Test. If thou canst survive that ordeal, then thou canst receive thy Knighthood.\"");
	say();
	gflags[0x003C] = true;
labelFunc043F_07C2:
	UI_push_answers();
	UI_add_answer(["ordeal", "location", "Knighthood", "change subject"]);
labelFunc043F_07D9:
	case "ordeal" attend labelFunc043F_0808:
	UI_remove_answer("ordeal");
	message("\"Fiery explosions! Wild animals! Puzzles to queer the mind, and mysteries beyond the understanding of mortals!\"");
	say();
	message("\"Well, perhaps I exaggerate some. The Test is difficult, and many have died. But if thou dost know the secrets of the dungeon, the Quest is not so hard.\"");
	say();
	message("\"After all, most Monitorians take the Test when they are fifteen years of age! Young Cantra will take it soon. With training, thou canst succeed.\"");
	say();
	UI_add_answer(["secrets", "Cantra"]);
	UI_add_answer("trainer");
labelFunc043F_0808:
	case "secrets" attend labelFunc043F_0845:
	UI_remove_answer("secrets");
	if (!gflags[0x003B]) goto labelFunc043F_0831;
	message("\"I do not have time to repeat everything again! Go thou and ask young Cantra -- she hath nothing better to do.\"");
	say();
	Func097F(0xFFC1, "@Ask Cantra!@", 0x0000);
	abort;
	goto labelFunc043F_0845;
labelFunc043F_0831:
	message("\"I'll give thee three clues:\"");
	say();
	message("\"In the first chamber, speed is the clue. Do not look back, or ye'll be a goner.\"");
	say();
	message("\"Later on, seek that which cannot be seen. It may be hard to find.\"");
	say();
	message("\"To overcome, thou must find the Claw, and the Urn of Gurnordir. Use the claw to draw thy blood, then mix the blood with the ashes in the Urn. Then thy fate shall be made known to thee.\"");
	say();
	gflags[0x003B] = true;
labelFunc043F_0845:
	case "Cantra" attend labelFunc043F_085C:
	UI_remove_answer("Cantra");
	message("\"I am surprised thou dost not know of the girl. She hath a bright curiosity, and is always pestering visitors.\"");
	say();
	message("\"Cantra is the daughter of the town healer, Harnna. Her father hath been missing for many weeks. She doth favor him -- very proud, very ambitious, and eager for her Knighthood.\"");
	say();
labelFunc043F_085C:
	case "location" attend labelFunc043F_0885:
	UI_remove_answer("location");
	message("\"Knight's Test is located in the mountains just north of the city -- thou canst easily find it by taking the Serpent Highway north, then following the first trail leading west. A sign points the way.\"");
	say();
	if (!(!gflags[0x002F])) goto labelFunc043F_087A;
	message("\"But before going, thou must speak with Lord Marsten. Only he can give thee the password. Shmed will not admit thee to the dungeon without it.\"");
	say();
labelFunc043F_087A:
	message("\"There have also been many Goblins in the area, so beware!\"");
	say();
	UI_add_answer("Shmed");
labelFunc043F_0885:
	case "Shmed" attend labelFunc043F_089C:
	UI_remove_answer("Shmed");
	message("\"He is the Keeper of Knight's Test. Shmed is a Wolf, and if thou dost ask me, he hath gone soft. Hardly ever see him on the List Field.\"");
	say();
	message("\"I have no use for him. But he doth do a fair job of administering the Test.\"");
	say();
labelFunc043F_089C:
	case "Knighthood" attend labelFunc043F_091D:
	UI_remove_answer("Knighthood");
	if (!(!gflags[0x004A])) goto labelFunc043F_08C1;
	message("\"When thou hast completed the Test, then there will be a great banquet held for thee!\"");
	say();
	message("\"Thou shalt receive thy tattoo, and shalt wear the pelt of thy totem animal.\"");
	say();
	message("\"But we can discuss this upon thy return... if thou dost have the courage to take the Test of Knighthood...\"");
	say();
	goto labelFunc043F_091D;
labelFunc043F_08C1:
	message("\"Congratulations on having passed the Test of Knighthood! I greet thee as almost a brother.\"");
	say();
	if (!(!(gflags[0x007E] && (gflags[0x003E] && gflags[0x0091])))) goto labelFunc043F_08D8;
	message("\"Thou must prepare for thy banquet.\"");
	say();
labelFunc043F_08D8:
	if (!(!gflags[0x003E])) goto labelFunc043F_08E3;
	message("\"Seek out Lydia, and have her give thee the Tattoo of the Knight. Take none of her lip, mind!\"");
	say();
labelFunc043F_08E3:
	if (!(!gflags[0x007E])) goto labelFunc043F_08F5;
	message("\"Cellia the Furrier shall make thee the Cloak of Knighthood, if thou shalt take to her the body of thy totem animal.\"");
	say();
	UI_add_answer("totem animal");
labelFunc043F_08F5:
	if (!(!gflags[0x0091])) goto labelFunc043F_0904;
	message("\"The banquet cannot begin until thou hast brought the meat from thy totem animal to Lucilla at the pub.\"");
	say();
	message("\"She can then make the stew for the banquet.\"");
	say();
labelFunc043F_0904:
	if (!(gflags[0x003E] && (gflags[0x007E] && gflags[0x0091]))) goto labelFunc043F_0919;
	message("\"Thou art ready! Now thou must meet Lord Marsten at the Great Hall, in the south part of town.\"");
	say();
	goto labelFunc043F_091D;
labelFunc043F_0919:
	message("\"When thou hast finished thy work, then Lord Marsten can preside at thy banquet.\"");
	say();
labelFunc043F_091D:
	case "totem animal" attend labelFunc043F_0930:
	UI_remove_answer("totem animal");
	message("\"Upon completing Knight's Test there is a ceremony wherein one's totem animal is chosen. It is always either a wolf, a leopard or a bear.\"");
	say();
labelFunc043F_0930:
	case "know traitor" attend labelFunc043F_0CCA:
	UI_remove_answer("know traitor");
	message("\"What? Thou dost know who did betray Astrid to the Goblins! How dost thou know? Tell me now!\"");
	say();
	var0010 = Func0992(0xFFFE, "@We found evidence among the Goblins. Documents signed by\r\n\t\t\t\t\t\t\tthe traitor!@", "@I found evidence in the Goblin camp.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"May I see this evidence?\"");
	say();
	if (!(Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) || (Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99) || Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)))) goto labelFunc043F_0CA2;
	if (!(((Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) + Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) + Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) > 0x0001)) goto labelFunc043F_09EB;
	var0010 = Func0992(0xFFFD, "@Here are the scrolls.@", "@Here are the scrolls.@", false);
	goto labelFunc043F_09FB;
labelFunc043F_09EB:
	var0010 = Func0992(0xFFFD, "@Here it is.@", "@Here it is.@", false);
labelFunc043F_09FB:
	UI_set_conversation_slot(0x0000);
	message("\"What is this scroll? By the blazes of Furnace! This is proof!\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99)) goto labelFunc043F_0A27;
	message("\"This is proof that Lord Marsten hath been conspiring with the Goblins! That old goat!\"");
	say();
	message("\"He planned to destroy the Bears! And the Wolves! And to make himself King of the city!\"");
	say();
	gflags[0x0038] = true;
labelFunc043F_0A27:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99)) goto labelFunc043F_0A4C;
	message("\"Lord Marsten was the traitor, and that worm Spektor aided him! Death would be too kind for him!\"");
	say();
	message("\"It seems that Marsten sought to spare Astrid's life, but he failed her even as he betrayed his Knighthood.\"");
	say();
	gflags[0x0038] = true;
	gflags[0x0092] = true;
labelFunc043F_0A4C:
	if (!Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99)) goto labelFunc043F_0A69;
	message("\"Marsten sought to betray Bull Tower! I will send a messenger to alert them immediately!\"");
	say();
	gflags[0x0038] = true;
labelFunc043F_0A69:
	if (!(gflags[0x0038] && (!UI_get_item_flag(0xFFBB, 0x0004)))) goto labelFunc043F_0AB6;
	UI_move_object(0xFFBB, [0x0446, 0x09C5, 0x0000]);
	UI_set_new_schedules(0xFFBB, [0x0007, 0x0002], [0x000E, 0x0007], [0x0446, 0x09C5, 0x0446, 0x09C5]);
labelFunc043F_0AB6:
	if (!(gflags[0x0092] && (!UI_get_item_flag(0xFFB3, 0x0004)))) goto labelFunc043F_0B03;
	UI_move_object(0xFFB3, [0x0448, 0x09D6, 0x0000]);
	UI_set_new_schedules(0xFFB3, [0x0007, 0x0002], [0x000E, 0x0007], [0x0448, 0x09D6, 0x0448, 0x09D6]);
labelFunc043F_0B03:
	UI_set_new_schedules(0xFFC1, [0x0000, 0x0003, 0x0004, 0x0005, 0x0006, 0x0007], [0x000E, 0x001B, 0x0007, 0x001B, 0x0010, 0x001A], [0x03B1, 0x0A49, 0x03D7, 0x0A8A, 0x03CE, 0x09FF, 0x039B, 0x0A76, 0x03B2, 0x0A05, 0x041C, 0x0A57]);
	var0014 = 0x0003;
labelFunc043F_0B61:
	if (!(var0014 > 0x0000)) goto labelFunc043F_0BFB;
	var0015 = UI_get_object_position(0xFE9C);
	var0015[0x0001] = ((var0015[0x0001] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0015[0x0002] = ((var0015[0x0002] + 0x0014) - (UI_die_roll(0x0000, 0x0001) * 0x0028));
	var0016 = UI_create_new_object2(0x00E4, var0015);
	var0017 = UI_approach_avatar(var0016, 0x0050, 0x0028);
	if (!var0017) goto labelFunc043F_0BE7;
	UI_set_item_flag(var0016, 0x0012);
	var0005 = true;
	goto labelFunc043F_0BEE;
labelFunc043F_0BE7:
	UI_remove_item(var0016);
labelFunc043F_0BEE:
	var0014 = (var0014 - 0x0001);
	goto labelFunc043F_0B61;
labelFunc043F_0BFB:
	var0018 = UI_find_nearby(0xFFC1, 0x00E4, 0x001E, 0x0000);
	if (!var0018) goto labelFunc043F_0C37;
	enum();
labelFunc043F_0C15:
	for (var001B in var0018 with var0019 to var001A) attend labelFunc043F_0C37;
	UI_set_schedule_type(var001B, 0x0003);
	UI_set_npc_id(var001B, 0x0005);
	goto labelFunc043F_0C15;
labelFunc043F_0C37:
	if (!var0005) goto labelFunc043F_0C77;
	if (!gflags[0x0092]) goto labelFunc043F_0C4A;
	message("\"Do not worry -- we shall arrest these dogs!\"");
	say();
	goto labelFunc043F_0C4E;
labelFunc043F_0C4A:
	message("\"Do not worry -- I shall personally see that Marsten is hunted down like the dog he is.\"");
	say();
labelFunc043F_0C4E:
	Func097F(0xFFC1, "@Pikemen!@", 0x0000);
	UI_set_schedule_type(0xFFC1, 0x000A);
	Func097F(var0018[0x0001], "@Yes, lord!@", 0x0002);
	abort;
	goto labelFunc043F_0C9F;
labelFunc043F_0C77:
	if (!gflags[0x0092]) goto labelFunc043F_0C84;
	message("\"Do not worry, Avatar! I shall order the Pikemen to place the traitors under arrest!\"");
	say();
	goto labelFunc043F_0C88;
labelFunc043F_0C84:
	message("\"Do not worry, Avatar! I shall order the Pikemen to place the traitor under arrest!\"");
	say();
labelFunc043F_0C88:
	Func097F(0xFFC1, "@Pikemen!@", 0x0000);
	UI_set_schedule_type(0xFFC1, 0x0014);
	abort;
labelFunc043F_0C9F:
	goto labelFunc043F_0CCA;
labelFunc043F_0CA2:
	var0010 = Func0992(0xFFFE, "@We did not bring it with us.@", "@I did not bring it.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Until thou dost bring proof, no one will believe thee, including myself!\"");
	say();
	Func097F(0xFFC1, "@Bring proof!@", 0x0000);
	abort;
labelFunc043F_0CCA:
	case "bye" attend labelFunc043F_0D13:
	if (!((!gflags[0x004A]) && (!gflags[0x0033]))) goto labelFunc043F_0CF8;
	message("\"I am not usually so talkative to an outsider. Thou shalt not find many in this town who welcome strangers!\"");
	say();
	message("\"A word of advice: If thou desirest to be accepted in Monitor, thou shouldst consider taking the Test of Knighthood.\"");
	say();
	message("\"If thou art not a Knight, then thou art nothing!\"");
	say();
	UI_add_answer("Test of Knighthood");
	gflags[0x0033] = true;
	goto labelFunc043F_0D13;
labelFunc043F_0CF8:
	Func097F(0xFE9C, "@Until later...@", 0x0000);
	Func097F(0xFFC1, "@Courage!@", 0x0002);
	goto labelFunc043F_0D16;
labelFunc043F_0D13:
	goto labelFunc043F_02CF;
labelFunc043F_0D16:
	endconv;
labelFunc043F_0D17:
	return;
}


