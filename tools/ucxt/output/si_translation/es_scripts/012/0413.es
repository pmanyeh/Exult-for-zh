#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0942 0x942 (var var0000);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func0413 object#(0x413) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = false;
	if (!((event == 0x0007) && UI_get_item_flag(item, 0x001D))) goto labelFunc0413_002D;
	var0002 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0329]);
labelFunc0413_002D:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFED) == 0x0009))) goto labelFunc0413_007B;
	if (!(UI_get_random(0x000A) < 0x0006)) goto labelFunc0413_0050;
	abort;
labelFunc0413_0050:
	var0003 = ["@Zounds!@", "@A true warrior!@", "@Tell me a story!@", "@Look! A stranger!@", "@May I be thy friend?@", "@Beware the mages...@"];
	Func097F(0xFFED, var0003[UI_get_random(0x0006)], 0x0000);
labelFunc0413_007B:
	if (!(event == 0x0001)) goto labelFunc0413_00A9;
	UI_item_say(0xFE9C, "@Little boy!@");
	0xFFED->Func07D1();
	Func097F(0xFFED, "@Hi!@", 0x0002);
	UI_set_schedule_type(0xFFED, 0x0003);
labelFunc0413_00A9:
	if (!(event == 0x0009)) goto labelFunc0413_0426;
	UI_run_schedule(0xFFED);
	UI_clear_item_say(0xFFED);
	UI_show_npc_face0(0xFFED, 0x0000);
	var0004 = UI_get_item_flag(0xFFED, 0x001C);
	if (!gflags[0x0004]) goto labelFunc0413_00FD;
	if (!gflags[0x00F1]) goto labelFunc0413_00EF;
	message("\"I am so glad to see thee, ");
	message(var0000);
	message("! There hath been so much trouble here of late...\"");
	say();
	goto labelFunc0413_00F3;
labelFunc0413_00EF:
	message("\"I need thine help! I need thine help! I am in so much trouble...\"");
	say();
labelFunc0413_00F3:
	UI_add_answer("trouble");
	goto labelFunc0413_0134;
labelFunc0413_00FD:
	if (!(var0004 == false)) goto labelFunc0413_0123;
	UI_set_item_flag(0xFFED, 0x001C);
	message("\"Art thou the great hero from a distant land?! Oh, my name is Freli. I am glad to meet thee!\"");
	say();
	UI_add_answer(["hero", "distant land"]);
	goto labelFunc0413_0134;
labelFunc0413_0123:
	message("\"'Tis the Avatar! 'Tis the Avatar, from far away!\"");
	say();
	UI_add_answer(["Avatar", "far away"]);
labelFunc0413_0134:
	if (!(gflags[0x0267] && (!gflags[0x00F6]))) goto labelFunc0413_0146;
	UI_add_answer("looking for scroll");
labelFunc0413_0146:
	if (!(gflags[0x018D] && (!gflags[0x00E7]))) goto labelFunc0413_0158;
	UI_add_answer("Delin");
labelFunc0413_0158:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0413_0171;
	UI_add_answer("kidnap");
labelFunc0413_0171:
	UI_add_answer(["bye"]);
labelFunc0413_017B:
	converse attend labelFunc0413_0425;
	case "kidnap" attend labelFunc0413_01B1:
	UI_remove_answer("kidnap");
	message("\"Thou shouldst ask Andrio -- I am certain that he could help thee! He is very bright.\"");
	say();
	if (!UI_npc_nearby(0xFFFC)) goto labelFunc0413_01B1;
	UI_set_schedule_type(0xFFFC, 0x0003);
	Func097F(0xFFFC, "@I can help!@", 0x0002);
labelFunc0413_01B1:
	case "hero", "Avatar" attend labelFunc0413_01DD:
	UI_remove_answer(["hero", "Avatar"]);
	message("\"I know thou hast participated in many daring exploits. I so want to hear about everything! Life is so dreary here. I have nothing but my study of magic to interest me.\"");
	say();
	UI_add_answer(["dreary", "study", "magic"]);
labelFunc0413_01DD:
	case "dreary" attend labelFunc0413_01FD:
	UI_remove_answer("dreary");
	message("\"Why, nothing ever happens here in Moonshade. At least, nothing to match thy fascinating activities. I would wager not even Filbercio hath seen as much as thee.\"");
	say();
	UI_add_answer(["Moonshade", "Filbercio"]);
labelFunc0413_01FD:
	case "Moonshade" attend labelFunc0413_021D:
	UI_remove_answer("Moonshade");
	message("\"'Twas founded several centuries ago, ");
	message(var0000);
	message(". Legend holds that the Mad Mage himself journeyed from a far away place, arriving here and laying claim to the land.\"");
	say();
	UI_add_answer("Mad Mage");
labelFunc0413_021D:
	case "Mad Mage" attend labelFunc0413_0230:
	UI_remove_answer("Mad Mage");
	message("\"His true name is Erstam. He is called the Mad Mage because he fled the city many years ago to leave behind our civilization. No one truly knows why he left, but some who were there claim he made references to the townspeoples' 'petty bickering'.\"");
	say();
labelFunc0413_0230:
	case "Filbercio" attend labelFunc0413_024A:
	UI_remove_answer("Filbercio");
	message("\"The MageLord? He is the greatest of all wizards, or so I have heard. He rules with a kind but stern hand. Of course, I would not count on his friendship were I to be seen with his lover.\"");
	say();
	UI_add_answer("lover");
labelFunc0413_024A:
	case "lover" attend labelFunc0413_0263:
	UI_remove_answer("lover");
	message("\"This is but rumor, ");
	message(var0000);
	message(". However, it hath been said that he is seen late at night in the presence of the Mistress of Cold, Frigidazzi.\"");
	say();
labelFunc0413_0263:
	case "study" attend labelFunc0413_0283:
	UI_remove_answer("study");
	message("\"Well, I certainly love magic and all, but it's taking too long! I have been learning for years, thou wouldst think me a master at this point. I do not believe it fair -- that traveller needed no tutelage, he simply paid Torrissio and was off.\"");
	say();
	UI_add_answer(["traveller", "Torrissio"]);
labelFunc0413_0283:
	case "traveller" attend labelFunc0413_0296:
	UI_remove_answer("traveller");
	message("\"I had not the chance to meet him, but those who did called him Batlin. He was not here long, and left in a rush, but I overheard that he purchased spells from Torrissio.\"");
	say();
labelFunc0413_0296:
	case "Torrissio" attend labelFunc0413_02F7:
	UI_remove_answer("Torrissio");
	message("\"Torrissio can be quite mean, I have heard. Andrio is afraid of him, I know that.\"");
	say();
	if (!Func0942(0xFFFC)) goto labelFunc0413_02EC;
	UI_show_npc_face1(0xFFFC, 0x0000);
	message("\"I am not!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Yes, thou art!\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"'Tis a lie! Besides, thou art afraid of him as well!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"That is, uh, not at all true!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0413_02EC:
	message("\"Why, Andrio will not even pass his house before 9 in the morning.\"");
	say();
	UI_add_answer("nine");
labelFunc0413_02F7:
	case "nine" attend labelFunc0413_030A:
	UI_remove_answer("nine");
	message("\"That is when he leaves his laboratory to go out into the city.\"");
	say();
labelFunc0413_030A:
	case "magic" attend labelFunc0413_0323:
	UI_remove_answer("magic");
	message("\"I mean no disrespect, ");
	message(var0000);
	message(". I find it a most fascinating topic. I could\tspend days creating brilliant flashes of light, moving stones with my mind, and summoning animals from nothing. 'Tis the arcane art that keeps mine interest in daily life. I simply want to be further along in my studies.\"");
	say();
labelFunc0413_0323:
	case "distant land", "far away" attend labelFunc0413_033F:
	UI_remove_answer(["distant land", "far away"]);
	message("\"I have heard that thou hast travelled a great many miles to come here. When thou hast the time, I would love to listen to stories of thine homeland.\"");
	say();
labelFunc0413_033F:
	case "trouble" attend labelFunc0413_0364:
	UI_remove_answer("trouble");
	message("\"It was so terrible! Everyone is dead, and the city is destroyed...\"");
	say();
	message("\"I was in the Seminarium when the Glowing Man came. Fedabiblio tried to\tstop him, but could not...\"");
	say();
	if (!(!var0001)) goto labelFunc0413_0364;
	UI_add_answer("Fedabiblio");
labelFunc0413_0364:
	case "Fedabiblio" attend labelFunc0413_0396:
	var0001 = true;
	UI_remove_answer("Fedabiblio");
	if (!gflags[0x00F1]) goto labelFunc0413_038E;
	message("\"Thou art a Mage beyond compare, ");
	message(var0000);
	message("!\"");
	say();
	message("\"I thought that Fedabiblio was dead after the Glowing Man turned him into a statue. I had no idea how to change him back... I hope Fedabiblio rewarded thee richly for saving him!\"");
	say();
	goto labelFunc0413_0396;
labelFunc0413_038E:
	message("\"He is dead, he is dead... The Glowing Man turned him into cold, cold stone. He is standing in the Seminarium...\"");
	say();
	message("\"And I do not know how to change him back!\"");
	say();
labelFunc0413_0396:
	case "Delin" attend labelFunc0413_03C6:
	UI_remove_answer("Delin");
	message("\"He is my long-lost father. Here is a scroll thou canst give him from me.\"");
	say();
	var0002 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0046, 0x0000, 0x0000, true);
	gflags[0x00E7] = true;
labelFunc0413_03C6:
	case "looking for scroll" attend labelFunc0413_03F8:
	UI_remove_answer("looking for scroll");
	message("\"I know that one! It is written entirely in Serpent Runic, and kept in the library of the Seminarium.\"");
	say();
	if (!gflags[0x00F1]) goto labelFunc0413_03E6;
	message("\"Thou shouldst ask Fedabiblio for the key. I am sure he will give it to thee since thou didst save him.\"");
	say();
	goto labelFunc0413_03EA;
labelFunc0413_03E6:
	message("\"Only Fedabiblio had the key. But now he hath been turned to stone!\"");
	say();
labelFunc0413_03EA:
	if (!(!var0001)) goto labelFunc0413_03F8;
	UI_add_answer("Fedabiblio");
labelFunc0413_03F8:
	case "bye" attend labelFunc0413_0422:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(0xFFED, "@Please come again!@", 0x0002);
	Func08FF();
	goto labelFunc0413_0425;
labelFunc0413_0422:
	goto labelFunc0413_017B;
labelFunc0413_0425:
	endconv;
labelFunc0413_0426:
	return;
}


