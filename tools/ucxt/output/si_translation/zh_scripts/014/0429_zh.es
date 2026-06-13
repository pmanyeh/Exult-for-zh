#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func081E 0x81E ();
extern void Func081F 0x81F ();
extern void Func081D 0x81D ();

void Func0429 object#(0x429) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFDA);
	var0004 = false;
	var0005 = false;
	var0006 = UI_part_of_day();
	if (!((var0006 > 0x0001) || (var0006 < 0x0006))) goto labelFunc0429_0046;
	var0006 = "day";
	goto labelFunc0429_004C;
labelFunc0429_0046:
	var0006 = "evening";
labelFunc0429_004C:
	if (!(event == 0x0001)) goto labelFunc0429_008A;
	UI_item_say(0xFE9C, "@Pardon me...@");
	0xFFD7->Func07D1();
	Func097F(0xFFD7, (((("Good " + var0006) + ", ") + var0000) + "."), 0x0002);
	UI_set_schedule_type(0xFFD7, 0x0003);
labelFunc0429_008A:
	if (!(event == 0x0000)) goto labelFunc0429_0136;
	var0007 = UI_get_random(0x0006);
	if (!(var0007 == 0x0001)) goto labelFunc0429_00B0;
	UI_item_say(0xFFD7, "@Wouldst thou like another?@");
labelFunc0429_00B0:
	if (!(var0007 == 0x0002)) goto labelFunc0429_00C4;
	UI_item_say(0xFFD7, "@Refill?@");
labelFunc0429_00C4:
	if (!(var0007 == 0x0003)) goto labelFunc0429_00D8;
	UI_item_say(0xFFD7, "@Lodgings available!@");
labelFunc0429_00D8:
	if (!(var0007 == 0x0004)) goto labelFunc0429_00EC;
	UI_item_say(0xFFD7, "@Good, clean rooms!@");
labelFunc0429_00EC:
	if (!(var0007 == 0x0005)) goto labelFunc0429_0122;
	if (!Func0942(0xFFDA)) goto labelFunc0429_0118;
	UI_item_say(0xFFD7, "@We need more clean mugs, son!@");
	Func097F(0xFFDA, "@Aye, mother!@", 0x0002);
	goto labelFunc0429_0122;
labelFunc0429_0118:
	UI_item_say(0xFFD7, "@Mine aching back!@");
labelFunc0429_0122:
	if (!(var0007 == 0x0006)) goto labelFunc0429_0136;
	UI_item_say(0xFFD7, "@Sigh...@");
labelFunc0429_0136:
	if (!(event == 0x0009)) goto labelFunc0429_0671;
	UI_run_schedule(0xFFD7);
	UI_clear_item_say(0xFFD7);
	UI_show_npc_face0(0xFFD7, 0x0000);
	var0008 = UI_get_item_flag(0xFFD7, 0x001C);
	if (!(var0008 == false)) goto labelFunc0429_0192;
	message("\"Welcome to the Sleeping Bull, ");
	message(var0000);
	message("! Enter before we suffer another storm.\" *\"I am Devra... My son, Argus, and I are running the inn since Angus disappeared.\"");
	say();
	UI_set_item_flag(0xFFD7, 0x001C);
	UI_add_answer(["storm", "Argus", "disappeared"]);
	goto labelFunc0429_01AC;
labelFunc0429_0192:
	message("\"Welcome back, ");
	message(var0002);
	message(". 'Tis so good to see thee again, after all these storms. Argus will be glad to see thee.\"");
	say();
	UI_add_answer(["storm", "Argus", "disappeared"]);
labelFunc0429_01AC:
	UI_add_answer(["food", "drink", "room", "exchange money", "bye"]);
labelFunc0429_01C2:
	converse attend labelFunc0429_0670;
	case "storm" attend labelFunc0429_01E5:
	message("\"I have lived here since before I was married, and I've never seen anything like these mage-born storms. Why, one caught old man Jothum in his field and changed his plow horse into a goat, in front of his eyes.\" *\"But Jothum was lucky, 'twas only his horse. We never did find what happened to Theron.\"");
	say();
	UI_remove_answer("storm");
	UI_add_answer(["mage-born", "Theron"]);
labelFunc0429_01E5:
	case "mage-born" attend labelFunc0429_01FF:
	message("\"If thou shouldst be hit with lightning -- normal lightning, mind thee -- thou art dead. Plain and simple. They bury thy charred body the next day.\" *\"But storms that change things, or make them disappear, or exchange them for something else, well now, it seems to me that 'tis magic, right enough. I don't have to be from Moonshade to conjure that answer!\"");
	say();
	UI_remove_answer("mage-born");
	UI_add_answer("Moonshade");
labelFunc0429_01FF:
	case "Moonshade" attend labelFunc0429_0276:
	message("\"Fine city, though 'tis plagued by wizards and mages. The place reeks of sorcery.\" *\"Hast thou heard anything more of what might be causing these storms? I wonder if anyone has done anything to stop them.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0429_022D;
	message("\"Is it the work of magic? Do they know who is responsible?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0429_0226;
	message("\"Wonderful! I hope that this means that the storms will end soon...\"");
	say();
	goto labelFunc0429_022A;
labelFunc0429_0226:
	message("\"I had hoped that the storms would end soon, before they cause us to close...\"");
	say();
labelFunc0429_022A:
	goto labelFunc0429_026F;
labelFunc0429_022D:
	message("\"Well, I still think 'tis the work of them mages! No good comes of controlling that type of power, I'll tell thee...\"");
	say();
	if (!(var0003 == true)) goto labelFunc0429_026F;
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("\"Aye, mother. And thou wilt tell all who will listen! Do not harass what few customers we do have...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Hast thou ever heard a boy so rude as to talk to his mother that way?\"");
	say();
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("\"I am no boy, mother. For now, I'm the innkeeper here and I'll thank thee to remember that we have a mage staying here now.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0429_026F:
	UI_remove_answer("Moonshade");
labelFunc0429_0276:
	case "Theron" attend labelFunc0429_028D:
	message("\"Theron was a simple man, not quite right in the head, if thou knowest what I mean. He worked for Angus and me for nigh on three years as a wood chopper... Until one of those storms.\"");
	say();
	message("\"Angus pulled Theron inside when the storm hit, but Theron ran back out to bring in his favorite axe... Next thing there was a blinding flash, and Theron was gone!\"");
	say();
	UI_remove_answer("Theron");
labelFunc0429_028D:
	case "Argus" attend labelFunc0429_02A7:
	message("\"Argus is mine oldest boy. He's a captain in the Pikemen... Or he was until he came home to take over his father's place.\" *\"Mine husband always thought that Wilfred, our youngest, would be the one to take the inn. But he hath become too high and mighty to be an honest innkeeper!\"");
	say();
	UI_remove_answer("Argus");
	UI_add_answer("Wilfred");
labelFunc0429_02A7:
	case "Wilfred" attend labelFunc0429_02C0:
	message("\"Wilfred is a Monitorian knight, ");
	message(var0000);
	message(". He always was headstrong... And I think his father harried him overmuch.\" *\"He ran away to be like his brother... Only better, he said.\"");
	say();
	UI_remove_answer("Wilfred");
labelFunc0429_02C0:
	case "disappeared" attend labelFunc0429_02F2:
	message("\"Thou dost seem like an honest, hard-working person. Perhaps thou canst help me discover what happened to Angus.\" *\"'Tis a right mystery. He disappeared and then my slippers disappeared...\"");
	say();
	if (!(!gflags[0x01E9])) goto labelFunc0429_02DA;
	message("\"Now I've got no husband and a pair of old, smelly boots.\"");
	say();
	goto labelFunc0429_02DE;
labelFunc0429_02DA:
	message("\"Now I've got no husband, but I do have my slippers...\"");
	say();
labelFunc0429_02DE:
	UI_remove_answer("disappeared");
	UI_add_answer(["mystery", "slippers"]);
labelFunc0429_02F2:
	case "slippers" attend labelFunc0429_0395:
	if (!(!gflags[0x01E9])) goto labelFunc0429_0384;
	message("\"They were hanging on the line to dry when one of those storms hit. When I went out to gather the wash later, there were these huge boots hanging where my slippers had been.\" *\"I'd gladly give these things away, if only I had my slippers back!\"");
	say();
	var0009 = Func0992(0x0001, "@Avatar, those look like thy swamp boots!@", "@Those look like my swamp boots!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"If thou hast my slippers, ");
	message(var0000);
	message(", I would gladly trade thee these boots for them. I have no great fondness for them other than to keep my feet dry.\"");
	say();
	var000A = Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005);
	if (!(var000A == true)) goto labelFunc0429_0379;
	message("\"Here are thy boots then... And I thank thee for my slippers.\"");
	say();
	var000B = Func099B(0xFE9C, 0x0001, 0x024B, 0xFE99, 0x0006, false, true);
	var000C = UI_remove_party_items(0x0001, 0x024B, 0xFE99, 0x0005, false);
	gflags[0x01E9] = true;
	goto labelFunc0429_037D;
labelFunc0429_0379:
	message("\"Then I hope that thou dost not mind if I keep these... I have no way to buy new slippers, what with the storms and all.\" *\"If thou shouldst find my slippers again, I will give these back.\"");
	say();
labelFunc0429_037D:
	gflags[0x0293] = true;
	goto labelFunc0429_038E;
labelFunc0429_0384:
	message("\"Thank thee again, ");
	message(var0002);
	message(", for returning my favorite slippers.\"");
	say();
labelFunc0429_038E:
	UI_remove_answer("slippers");
labelFunc0429_0395:
	case "mystery" attend labelFunc0429_03BC:
	message("\"On the night Angus disappeared, I'd gone to bed and Angus had remained to sweep. If thou dost ask me though, he stayed up to keep an eye on that strange mage that was staying here.\" *\"I was stirred from a sound sleep by the sound of voices downstairs in the cellar. After I heard a crash, I went down to look, but I did not see anyone. I thought the mage's companion might have tried to slip down to have another drink for free, and thought no more of it until the morning.\"");
	say();
	gflags[0x01E4] = true;
	UI_remove_answer("mystery");
	UI_add_answer(["strange mage", "cellar", "mage's companion"]);
labelFunc0429_03BC:
	case "strange mage" attend labelFunc0429_03DE:
	message("\"He was a rather portly man, if I remember rightly. He had been here once before...\"");
	say();
	message("\"I cannot seem to recall what his name was. He was not the talkative sort, least not to me.\"");
	say();
	message("\"Thou couldst ask Ensorcio, they talked quite a bit. Or... I know... Thou canst look in the registry! 'Tis on the bar.\"");
	say();
	UI_remove_answer("strange mage");
	UI_add_answer("Ensorcio");
labelFunc0429_03DE:
	case "Ensorcio" attend labelFunc0429_03FC:
	message("\"Thou hast not met the great Ensorcio yet? Count thy blessings!\"");
	say();
	message("\"Ensorcio is the smoldering black cloud that sits here day after day, drinking himself into a fit. All he does is glower about how those fools in Moonshade threw him out, and how he'll avenge himself.\"");
	say();
	UI_remove_answer("Ensorcio");
	UI_add_answer("fools in Moonshade");
labelFunc0429_03FC:
	case "fools in Moonshade" attend labelFunc0429_0413:
	message("\"Ensorcio is an exiled mage. Who doth know what he did? I am too afraid to ask...\"");
	say();
	message("\"If he was thrown out by that lot, thou canst wager that it could not have been good. Although Angus did not trust mages, he allowed Ensorcio to stay... Angus said that a mage had to have a clear head to cast spells, and we should worry if Ensorcio ever sobered.\"");
	say();
	UI_remove_answer("fools in Moonshade");
labelFunc0429_0413:
	case "cellar" attend labelFunc0429_0431:
	message("\"Aye, the cellar. We've had a lout or two think that they could slip down and take a bottle or two on the sly.\" *\"But Angus always seemed to know when they tried it... Threw them out with a few bruises for their trouble.\"");
	say();
	message("\"'Tis why I didn't worry 'til morn... When I found everything in disarray and Angus gone.\"");
	say();
	UI_remove_answer("cellar");
	UI_add_answer("disarray");
labelFunc0429_0431:
	case "disarray" attend labelFunc0429_0448:
	message("\"The casks and barrels were scattered all over the floor down there. It looked like there may have been a fight, but I did not see any blood.\" *\"It took the rest of the day to put all back in order down there. And make sure that nothing was missing.\"");
	say();
	message("\"I waited a week or so before I sent word to Wilfred and Argus about their father not returning.\"");
	say();
	UI_remove_answer("disarray");
labelFunc0429_0448:
	case "mage's companion" attend labelFunc0429_0462:
	message("\"I do not know his name either... He never spoke to anyone other than the mage that I know of.\" *\"He always walked about with his hood raised, as if he were cold or something. He always gave me the shivers.\"");
	say();
	UI_remove_answer("mage's companion");
	UI_add_answer("shivers");
labelFunc0429_0462:
	case "shivers" attend labelFunc0429_0482:
	message("\"Hast thou ever been in a sickroom, ");
	message(var0000);
	message("? A sickroom where someone is about to die?\" *\"There is a tension in the air, a stillness... And that always seemed to hover about the mage's large companion.\" *\"He was probably the one that stole whatever it was from Ensorcio that night, too.\"");
	say();
	UI_remove_answer("shivers");
	UI_add_answer("stole");
labelFunc0429_0482:
	case "stole" attend labelFunc0429_049F:
	message("\"I remember that Ensorcio came storming in that morning, much earlier than usual, ranting about something being missing. I'll admit that I was a bit short with him, ");
	message(var0000);
	message(".\" *\"After all, I had to put all those barrels back myself, what with Angus gone and all. And that high and mighty mage never offered to lift a finger for anything more than another mug of ale!\"");
	say();
	var000D = true;
	UI_remove_answer("stole");
labelFunc0429_049F:
	case "food" attend labelFunc0429_04F2:
	if (!((UI_get_schedule_type(0xFFD7) == 0x0007) || (UI_get_schedule_type(0xFFD7) == 0x0017))) goto labelFunc0429_04E7;
	message("\"Thou wilt not find our cooking fancy as in Moonshade. But 'tis hardy fare and thou wilt find the portions ample.\"");
	say();
	if (!(!var0004)) goto labelFunc0429_04E1;
	message("\"I've done all the cooking here since Donal hired me, before I married Angus. I've had my share of compliments, if I do say so myself.\"");
	say();
	var0004 = true;
	UI_add_answer(["Donal", "Angus"]);
labelFunc0429_04E1:
	Func081E();
	goto labelFunc0429_04F2;
labelFunc0429_04E7:
	message("\"I will sell thee some food when we are open!\"");
	say();
	UI_remove_answer("food");
labelFunc0429_04F2:
	case "Donal" attend labelFunc0429_050C:
	message("\"Donal was Angus' father, the son of Silverpate the pirate. Donal hired me as cook when I was merely a strip of a lass... 'Tis when I caught Angus' eye.\" *\"Donal never showed any tendency to leave of a sudden, like his no-account father. That's why I told Angus I'd wed him... I thought that maybe that adventuring blood died with the old pirate.\"");
	say();
	UI_remove_answer("Donal");
	UI_add_answer("Silverpate");
labelFunc0429_050C:
	case "Silverpate" attend labelFunc0429_0526:
	message("\"Thou hast not yet heard of Silverpate? I was beginnin' to think the walls shouted it, as fast as the guests hear about it around here!\" *\"According to stories... and 'twere only stories, mind thee... Silverpate was a pirate who took his treasure and started this here inn. He was supposed to have hid his treasure somewhere around here before he disappeared.\"");
	say();
	UI_remove_answer("Silverpate");
	UI_add_answer("treasure");
labelFunc0429_0526:
	case "treasure" attend labelFunc0429_053F:
	message("\"What a lot of nonsense! Why we've had two whole generations of kin and neighbors lookin' everywhere imaginable for it.\" *\"I even looked a bit... at first. But if it hasn't been found after all this time, ");
	message(var0000);
	message(", with all those looking for it... I'd tell thee not to waste thy time looking!\"");
	say();
	UI_remove_answer("treasure");
labelFunc0429_053F:
	case "Angus" attend labelFunc0429_0552:
	message("\"Angus is mine husband. He was the innkeeper here after Donal died.\" *\"We raised two fine sons and he hoped to pass the inn to one of them when he were too old to run things. Only he disappeared... same as old Silverpate.\"");
	say();
	UI_remove_answer("Angus");
labelFunc0429_0552:
	case "drink" attend labelFunc0429_0589:
	if (!((UI_get_schedule_type(0xFFD7) == 0x0007) || (UI_get_schedule_type(0xFFD7) == 0x0017))) goto labelFunc0429_057E;
	message("\"Thou wilt like our selection, I'm certain.\"");
	say();
	Func081F();
	goto labelFunc0429_0589;
labelFunc0429_057E:
	message("\"Please return when we are open!\"");
	say();
	UI_remove_answer("drink");
labelFunc0429_0589:
	case "room" attend labelFunc0429_063B:
	message("\"The cost is 8 gold coins per person. Wouldst thou like a room for the night?\"");
	say();
	if (!Func0955()) goto labelFunc0429_0637;
	var000E = (UI_get_array_size(UI_get_party_list()) * 0x0008);
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var000E)) goto labelFunc0429_0601;
	message("\"Room number 3 is available. I am sure thou wilt like it. Here is the key.\"");
	say();
	var0010 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0003, 0x0009, 0x0000, true);
	var0011 = UI_remove_party_items(var000E, 0x0284, 0xFE99, 0xFE99, 0x0000);
	message("\"The rooms are upstairs. If thou dost need anything, thou shouldst call.\"");
	say();
	goto labelFunc0429_0634;
labelFunc0429_0601:
	var0009 = Func0992(0x0001, "@But we do not have enough money...@", 0x0000, false);
	if (!(var0009 != 0xFE9C)) goto labelFunc0429_062C;
	UI_show_npc_face0(0xFFD7, 0x0000);
	message("\"I have no heart to turn any of thee out in these storms. With all of our help run away, I'm in sore need of help.\" *\"But I cannot allow thee to stay for free. Thou wilt have to take thy chances outside.\"");
	say();
	goto labelFunc0429_0634;
labelFunc0429_062C:
	message("\"I'm afraid that thou cannot afford my rooms.\" *\"With the help all run away, I'd allow thee to stay for free, but I'd soon be out of business.\"");
	say();
	message("\"Thou wilt have to take thy chances outside.\"");
	say();
labelFunc0429_0634:
	goto labelFunc0429_063B;
labelFunc0429_0637:
	message("\"Some other time, then.\"");
	say();
labelFunc0429_063B:
	case "exchange money" attend labelFunc0429_0646:
	Func081D();
labelFunc0429_0646:
	case "bye" attend labelFunc0429_066D:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Be seeing thee!@", 0x0000);
	Func097F(0xFFD7, "@Come again soon!@", 0x0002);
	goto labelFunc0429_0670;
labelFunc0429_066D:
	goto labelFunc0429_01C2;
labelFunc0429_0670:
	endconv;
labelFunc0429_0671:
	return;
}


