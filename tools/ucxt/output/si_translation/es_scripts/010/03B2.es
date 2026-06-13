#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func0954 0x954 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08FB 0x8FB ();
extern var Func0955 0x955 ();
extern void Func086B 0x86B ();
extern void Func08FE 0x8FE ();
extern var Func09AE 0x9AE (var var0000);

void Func03B2 shape#(0x3B2) ()
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

	var0000 = Func0953();
	var0001 = UI_part_of_day();
	var0002 = Func0954();
	var0003 = Func097D(0xFE9B, 0x0001, 0x03E4, 0xFE99, 0xFE99);
	var0004 = Func097D(0xFE9B, 0x0001, 0x03E9, 0xFE99, 0xFE99);
	var0005 = Func097D(0xFE9B, 0x0001, 0x03DE, 0xFE99, 0xFE99);
	var0006 = Func097D(0xFE9B, 0x0001, 0x0128, 0xFE99, 0x0003);
	var0007 = Func097D(0xFE9B, 0x0001, 0x03F5, 0xFE99, 0xFE99);
	if (!((var0001 > 0x0001) || (var0001 < 0x0006))) goto labelFunc03B2_0097;
	var0001 = "day";
	goto labelFunc03B2_009D;
labelFunc03B2_0097:
	var0001 = "evening";
labelFunc03B2_009D:
	if (!(event == 0x0001)) goto labelFunc03B2_00C5;
	UI_item_say(0xFE9C, "@Greetings, sir.@");
	item->Func07D1();
	Func097F(item, "@Greetings to thee.@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc03B2_00C5:
	if (!(event == 0x0009)) goto labelFunc03B2_051F;
	UI_set_schedule_type(item, 0x000A);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFECC, 0x0000);
	var0008 = UI_get_npc_id(item);
	if (!(gflags[0x02FC] || gflags[0x0313])) goto labelFunc03B2_0107;
	message("\"Who would have thought that lowly Surok would be speaking with the Champion of Balance? I am honored.");
	say();
	message("\"How may I aid thee, ");
	message(var0000);
	message("?\"");
	say();
	goto labelFunc03B2_0153;
labelFunc03B2_0107:
	if (!(!var0008)) goto labelFunc03B2_0137;
	if (!(!gflags[0x026F])) goto labelFunc03B2_0120;
	message("\"Ah, a new face! And who art thou, stranger, that thou doth risk death by coming here to Serpent's Fang? A servant of Chaos? Hmmm... I think not.\"");
	say();
	message("\"I am Surok, the Healer of Serpent's Fang and I perceive that thou art lost. Perhaps I can aid thee, if thou dost wish.\"");
	say();
	goto labelFunc03B2_012C;
labelFunc03B2_0120:
	message("\"'Tis lucky for thee that a patrol didst find thee, stranger! Thou wert unconscious and bleeding from many wounds... Ah, but I forget my manners!\"");
	say();
	message("\"I am Surok, the Healer of Serpent's Fang and I didst heal thee of thy wounds.\"");
	say();
	gflags[0x026F] = false;
labelFunc03B2_012C:
	UI_set_npc_id(item, 0x0001);
	goto labelFunc03B2_0153;
labelFunc03B2_0137:
	if (!(!gflags[0x026F])) goto labelFunc03B2_0145;
	message("\"Thou dost return? Perhaps to regale me with stories of thine exploits?\"");
	say();
	goto labelFunc03B2_0153;
labelFunc03B2_0145:
	message("\"Ah, ");
	message(var0000);
	message(", thou hast awakened. Good. Thou hast been revived by mine art. Thou art able to resume thine adventures now.\"");
	say();
	gflags[0x026F] = false;
labelFunc03B2_0153:
	UI_add_answer(["healing", "information", "bye"]);
	if (!(UI_get_array_size(Func08FB()) > 0x0000)) goto labelFunc03B2_017C;
	message("\"Ah, one of thy companions hath been slain. 'Tis within my power to heal thy friend if thou dost wish...\"");
	say();
	UI_add_answer("resurrection");
labelFunc03B2_017C:
	var0009 = 0x0000;
	var000A = 0x0006;
labelFunc03B2_0188:
	converse attend labelFunc03B2_051E;
	case "healing" attend labelFunc03B2_01A7:
	message("\"Dost thou need healing?\"");
	say();
	if (!Func0955()) goto labelFunc03B2_01A3;
	Func086B();
	goto labelFunc03B2_01A7;
labelFunc03B2_01A3:
	message("\"As thou dost wish.\"");
	say();
labelFunc03B2_01A7:
	case "resurrection" attend labelFunc03B2_01B9:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc03B2_01B9:
	case "information" attend labelFunc03B2_01FC:
	if (!((!gflags[0x02F4]) || (UI_get_timer(0x0002) > 0x0004))) goto labelFunc03B2_01F8;
	message("\"I have been here at Serpent's Fang longer than most. Perhaps I can aid thee with information. What dost thou wish to know of?\"");
	say();
	UI_push_answers();
	var0009 = 0x0001;
	UI_add_answer(["people", "places", "strange items", "nothing more"]);
	goto labelFunc03B2_01FC;
labelFunc03B2_01F8:
	message("\"I must be about my duties. Perhaps we can discuss this another time, my friend.\"");
	say();
labelFunc03B2_01FC:
	case "people" attend labelFunc03B2_0238:
	UI_remove_answer("people");
	message("\"There are very few of us here, ");
	message(var0002);
	message(". I can tell thee what I know, but it is not much. Whom here at Serpent's Fang dost thou wish to know of?\"");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	UI_add_answer(["Isstanar", "Elissa", "Tsandar", "Guards", "Strangers", "nothing more"]);
labelFunc03B2_0238:
	case "places" attend labelFunc03B2_026E:
	UI_remove_answer("places");
	message("\"I know of many places, ");
	message(var0002);
	message(". Which dost thou wish to know of?\"");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	UI_add_answer(["Abandoned Outpost", "The Maze", "Aram-Dol's Lair", "nothing more"]);
labelFunc03B2_026E:
	case "strange items" attend labelFunc03B2_02D3:
	UI_remove_answer("strange items");
	message("\"Show me thine items, I will tell thee what I know, if anything.\"");
	say();
	UI_push_answers();
	var0009 = 0x0002;
	if (!var0003) goto labelFunc03B2_0298;
	UI_add_answer("Loriel's Gift");
labelFunc03B2_0298:
	if (!var0004) goto labelFunc03B2_02A5;
	UI_add_answer("Gauntlets");
labelFunc03B2_02A5:
	if (!var0005) goto labelFunc03B2_02B2;
	UI_add_answer("Axe");
labelFunc03B2_02B2:
	if (!var0006) goto labelFunc03B2_02BF;
	UI_add_answer("Ring");
labelFunc03B2_02BF:
	if (!var0007) goto labelFunc03B2_02CC;
	UI_add_answer("Helm");
labelFunc03B2_02CC:
	UI_add_answer("nothing more");
labelFunc03B2_02D3:
	case "Gauntlets" attend labelFunc03B2_02F5:
	UI_remove_answer("Gauntlets");
	message("\"Hmmm... These are obviously enchanted to aid thee in the speedy deliverance of thy blows, yet I have never seen their like. They do have the look of an Order armourer, 'tis true, yet the stench of evil doth linger upon them. Thou wouldst be wise not to trust in these gloves, ");
	message(var0002);
	message("!\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_02F5:
	case "Axe" attend labelFunc03B2_0317:
	UI_remove_answer("Axe");
	message("\"'Tis truly a wonderful weapon, ");
	message(var0002);
	message("! Where didst thou come by such? I do not know exactly what it does, but I am sure that thou dost use it well...\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0317:
	case "Ring" attend labelFunc03B2_0339:
	UI_remove_answer("Ring");
	message("\"Thou didst take great risk in acquiring this ring, ");
	message(var0002);
	message(". 'Tis Shal's ring itself. I would wager that thou fought many foul creatures in the Fiend's Lair... but dost thou know the true power of this ring? 'Twill allow thee to cast spells without reagents! Thou hast perhaps one of the most potent artifacts ever made!\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0339:
	case "Loriel's Gift" attend labelFunc03B2_035B:
	UI_remove_answer("Loriel's Gift");
	message("\"Why, thou dost wear the Belt of Strength! 'Twas made by Commander Ardiniss's wife, Loriel, many years ago. If I remember correctly, she made the belt from the hair of Giants and then enchanted it.  Loriel was a gifted mage, but alas, was yet another victim of this damnable war with Chaos! As thou dost wear her handiwork, thou shouldst remember her, ");
	message(var0002);
	message("...\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_035B:
	case "Helm" attend labelFunc03B2_0394:
	UI_remove_answer("Helm");
	message("\"Thou dost possess the Helm of Light! 'Twas worn by Issik the Architect when he did create the Maze. Didst thou discover the secret of the Maze, ");
	message(var0002);
	message("?\"");
	say();
	if (!Func0955()) goto labelFunc03B2_0381;
	message("\"Thou art truly the Champion of Balance! None other except Issik could navigate that Maze of Death. From my talks with Issik, the Helm will never cease giving light and the only manner of dousing it's brilliance is to cover it over or put it in a bag.\"");
	say();
	goto labelFunc03B2_038B;
labelFunc03B2_0381:
	message("\"Then how didst thou come by the Helm? Issik disappeared into his creation and never returned. *Ah, 'tis of no matter. Do not listen to the ramblings of an old man, ");
	message(var0002);
	message(".\"");
	say();
labelFunc03B2_038B:
	var000A = Func09AE(var000A);
labelFunc03B2_0394:
	case "Isstanar" attend labelFunc03B2_03B6:
	UI_remove_answer("Isstanar");
	message("\"He is the Commander of our outpost, though he was not such a year ago. Do not cross him, ");
	message(var0000);
	message(", for he is terrible in his anger! He believes that those who have not given their lives for the cause of Order are not truly worthy. He has become the @Ultimate Warrior of Order@ and has cast his human body away to become metal. I believe that his soul has become as hardened as his exterior.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_03B6:
	case "Elissa" attend labelFunc03B2_03D2:
	UI_remove_answer("Elissa");
	message("\"She is our Mage. If thou hast gold enough, I am certain she would be willing to teach thee spells. Though she is young, she would like nothing better than to stay youthful -- forever.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_03D2:
	case "Tsandar" attend labelFunc03B2_03F4:
	UI_remove_answer("Tsandar");
	message("\"Tsandar is a friend, and I will not speak ill of him. Though I wish that he would confide in me what it is that bothers him these days. He is troubled and perhaps with good cause. I will speak no more on this subject, ");
	message(var0002);
	message(".\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_03F4:
	case "Guards" attend labelFunc03B2_0410:
	UI_remove_answer("Guards");
	message("\"The Automatons that thou dost see about our Outpost are our servitors. They act as guards as thou no doubt know already, but they also serve in other ways. Cooks, tailors, blacksmiths... all of these menial tasks can be performed by our metal men.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0410:
	case "Strangers" attend labelFunc03B2_0432:
	UI_remove_answer("Strangers");
	message("\"Other than thyself, ");
	message(var0002);
	message(", there have been few that were brave enough to enter our Keep. There are three women that profess to be on the side of Order, but I doubt their word. Indeed, I believe them to be agents of Chaos, but they have not attacked us here at Serpent's Fang, and have fought the Chaos creatures that venture forth from the surrounding tunnels. They wait, but for what I am not certain.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0432:
	case "Abandoned Outpost" attend labelFunc03B2_044E:
	UI_remove_answer("Abandoned Outpost");
	message("\"Nine months ago, our Commander was Ardiniss. He led an expedition into our southwest outpost to clear it of infiltrating Chaos agents, and to set mystic traps to kill those that would surely come again. We knew that he was successful in creating the pitfalls, but he never returned. We assumed he was slain by those he sought to slay. He was a good man. If thou dost find his body in thy wanderings, 'twould be kind of thee to return him here to Serpent's Fang.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_044E:
	case "The Maze" attend labelFunc03B2_046A:
	UI_remove_answer("The Maze");
	message("\"Hah! 'Twas built by an exceedingly crafty architect indeed! An item of importance was hidden there, and that is all I shall say on the matter.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_046A:
	case "Aram-Dol's Lair" attend labelFunc03B2_0486:
	UI_remove_answer("Aram-Dol's Lair");
	message("\"Aram Dol is a foul thing that should be destroyed! It exists only to destroy and I fear that if our forces do not return soon, that creature of loathsome chaos will continue to test our defenses and send its unholy servants to our gate! Aram Dol is a powerful sorcerer, and controls items of great power. If thou wert to destroy this demon, I am certain that Isstanar would reward thee!\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_0486:
	case "Loriel's Gift" attend labelFunc03B2_04A8:
	UI_remove_answer("Loriel's Gift");
	message("\"Thou dost wear the Belt of Strength?! How didst thou come by it? It was thought lost these many months. No... no, I do not want to know, ");
	message(var0002);
	message(", though I would not show the others the Belt. They would not be as understanding as I and perhaps would demand that thou returnest it.\"");
	say();
	var000A = Func09AE(var000A);
labelFunc03B2_04A8:
	case "nothing more" attend labelFunc03B2_04E4:
	if (!(var0009 == 0x0001)) goto labelFunc03B2_04C5;
	UI_pop_answers();
	message("\"As thou dost wish...\"");
	say();
	goto labelFunc03B2_04E4;
labelFunc03B2_04C5:
	if (!(var0009 > 0x0001)) goto labelFunc03B2_04E0;
	UI_pop_answers();
	var0009 = (var0009 - 0x0001);
	goto labelFunc03B2_04C5;
labelFunc03B2_04E0:
	message("\"Is there anything else I can help thee with?\"");
	say();
labelFunc03B2_04E4:
	case "bye" attend labelFunc03B2_051B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, (("@Good " + var0001) + "!@"), 0x0000);
	Func097F(item, "@Be careful!@", 0x0002);
	UI_set_schedule_type(item, 0x000B);
	abort;
labelFunc03B2_051B:
	goto labelFunc03B2_0188;
labelFunc03B2_051E:
	endconv;
labelFunc03B2_051F:
	return;
}


