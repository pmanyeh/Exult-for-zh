#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0942 0x942 (var var0000);
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func085E 0x85E ();
extern void Func085F 0x85F ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08FF 0x8FF ();

void Func041E object#(0x41E) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = false;
	var0004 = "him";
	if (!var0001) goto labelFunc041E_0029;
	var0005 = "her";
labelFunc041E_0029:
	if (!(event == 0x0000)) goto labelFunc041E_00BF;
	var0006 = UI_get_random(0x0006);
	if (!(var0006 == 0x0001)) goto labelFunc041E_005B;
	UI_item_say(0xFFE2, "@Petra, bring wine!@");
	Func097F(0xFFE4, "@In a minute...@", 0x0002);
labelFunc041E_005B:
	if (!(var0006 == 0x0002)) goto labelFunc041E_006F;
	UI_item_say(0xFFE2, "@These are hard times...@");
labelFunc041E_006F:
	if (!(var0006 == 0x0003)) goto labelFunc041E_0083;
	UI_item_say(0xFFE2, "@Rooms for rent!@");
labelFunc041E_0083:
	if (!(var0006 == 0x0004)) goto labelFunc041E_0097;
	UI_item_say(0xFFE2, "@Care for a drink?@");
labelFunc041E_0097:
	if (!(var0006 == 0x0005)) goto labelFunc041E_00AB;
	UI_item_say(0xFFE2, "@Hungry?@");
labelFunc041E_00AB:
	if (!(var0006 == 0x0006)) goto labelFunc041E_00BF;
	UI_item_say(0xFFE2, "@Have a seat...@");
labelFunc041E_00BF:
	if (!(event == 0x0001)) goto labelFunc041E_00F5;
	UI_item_say(0xFE9C, "@Might I speak with thee?@");
	0xFFE2->Func07D1();
	Func097F(0xFFE2, (("@Certainly, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFE2, 0x0003);
labelFunc041E_00F5:
	if (!(event == 0x0009)) goto labelFunc041E_0839;
	UI_run_schedule(0xFFE2);
	UI_clear_item_say(0xFFE2);
	UI_show_npc_face0(0xFFE2, 0x0000);
	var0007 = UI_get_item_flag(0xFFE2, 0x001C);
	if (!(var0007 == false)) goto labelFunc041E_0154;
	if (!(UI_get_schedule_type(0xFFE2) == 0x0007)) goto labelFunc041E_013F;
	message("\"Welcome to the Blue Boar Inn. I am the innkeeper. My name is Rocco.\"");
	say();
	goto labelFunc041E_0143;
labelFunc041E_013F:
	message("\"I do not believe we've met. I'm Rocco, the innkeeper at the Blue Boar.\"");
	say();
labelFunc041E_0143:
	message("\"'Tis good to have more visitors again. We had despaired, what with the storms and all.\"");
	say();
	UI_set_item_flag(0xFFE2, 0x001C);
	goto labelFunc041E_015E;
labelFunc041E_0154:
	message("\"So good to see thee again, ");
	message(var0000);
	message(". Always good to have visitors.\"");
	say();
labelFunc041E_015E:
	UI_add_answer(["Blue Boar", "visitors"]);
	UI_add_answer(["food", "drink", "room"]);
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc041E_0194;
	UI_add_answer("brown bottle");
labelFunc041E_0194:
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc041E_01A6;
	UI_add_answer("slippers");
labelFunc041E_01A6:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc041E_01BF;
	UI_add_answer("kidnap");
labelFunc041E_01BF:
	UI_add_answer("bye");
labelFunc041E_01C6:
	converse attend labelFunc041E_0838;
	case "kidnap" attend labelFunc041E_022F:
	UI_remove_answer("kidnap");
	message("\"I cannot say that I'm surprised, ");
	message(var0002);
	message(". Thy coming hath mightily disturbed the Mages.\"");
	say();
	message("\"Now there are many suspects -- Torrissio is certainly a sly one, and Mortegro doth have odd interests -- but we both know whom thy enemy must be...\"");
	say();
	gflags[0x0142] = true;
	gflags[0x013F] = true;
	message("\"'Tis that she-witch, Rotoluncia! Everyone knows that she doth work against thee.\"");
	say();
	if (!UI_npc_nearby(0xFFE4)) goto labelFunc041E_022F;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"Perhaps ");
	message(var0002);
	message(" should go to Julia, dear. The Rangers must investigate this crime.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Nah -- she'll only try to extort money from ");
	message(var0004);
	message(". Julia is a thief...\"");
	say();
	message("\"If I wert thou, ");
	message(var0002);
	message(", I'd think about leaving town. Rotoluncia is not an enemy that a Mundane can handle!\"");
	say();
labelFunc041E_022F:
	case "Blue Boar" attend labelFunc041E_0264:
	UI_remove_answer("Blue Boar");
	message("\"Interesting name, is it not?\"");
	say();
	var0008 = Func0992(0x0001, "@That sounds just like the one in Britannia!@", "@I have heard of that name before.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Anything is possible, I suppose. I inherited this inn from my parents, and they from theirs. 'Tis an old name... perhaps from the time of the crossing.\"");
	say();
	UI_add_answer("crossing");
labelFunc041E_0264:
	case "crossing" attend labelFunc041E_0287:
	UI_remove_answer("crossing");
	message("\"It hath been a long time since I heard the tale in full. Let me see if I remember it at all... For the most part it had something to do with an usurper king and the Mages. But for my folk, it was simply for money, I think.\"");
	say();
	UI_add_answer(["usurper king", "Mages", "money"]);
labelFunc041E_0287:
	case "usurper king" attend labelFunc041E_02BE:
	UI_remove_answer("usurper king");
	message("\"Back in the old lands, a domineering man named... Brattish, or Brutish, or somesuch, usurped the throne. His rule was hard and unjust, so many people fled across the seas to this land.\"");
	say();
	var0008 = Func0992(0x0001, "@It sounds like he is talking about Lord British!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	UI_add_answer(["old lands", "this land"]);
labelFunc041E_02BE:
	case "old lands" attend labelFunc041E_02D1:
	UI_remove_answer("old lands");
	message("\"Let me think a moment. I am terrible with names like this... Aha! I have it! The old lands were known as Sosaria.\"");
	say();
labelFunc041E_02D1:
	case "this land" attend labelFunc041E_02F1:
	UI_remove_answer("this land");
	message("\"Well, when the people arrived here, they thought to name the land after their old home... ah, one moment... New Sosaria. But then they found the ruins scattered here and there, with all those snakes pictured on them, so most folks call this The Serpent Isle. Though some still refer to it by its proper name, New Sosaria.\"");
	say();
	UI_add_answer(["ruins", "snakes"]);
labelFunc041E_02F1:
	case "ruins" attend labelFunc041E_0304:
	UI_remove_answer("ruins");
	message("\"Well, the ruins are on the mainland anyway. I saw the ones around Monitor when I was just a lad. There is nothing special about them, merely piles of old stone from settlers way before the New Sosarians.\"");
	say();
labelFunc041E_0304:
	case "snakes" attend labelFunc041E_0317:
	UI_remove_answer("snakes");
	message("\"Either this place had far more snakes when those people lived here, or they worshipped them, or something. There are snakes carved all over those ruins. I don't even think that the Mages know what they mean.\"");
	say();
labelFunc041E_0317:
	case "Mages" attend labelFunc041E_0337:
	UI_remove_answer("Mages");
	message("\"As well as I can remember, most of the people that fled from the usurper were Mages. I don't think that any of them are still alive, but thou canst never tell. Perhaps the Mad Mage is that old, who knows? Certainly not the current MageLord.\"");
	say();
	UI_add_answer(["Mad Mage", "MageLord"]);
labelFunc041E_0337:
	case "Mad Mage" attend labelFunc041E_034A:
	UI_remove_answer("Mad Mage");
	message("\"The Mad Mage is a crazy old man that lives on an island not far from here. Thinks he can create life... From what I hear, he once lived here in Moonshade -- was a teacher or something, 'til he went mad.\"");
	say();
labelFunc041E_034A:
	case "MageLord" attend labelFunc041E_036A:
	UI_remove_answer("MageLord");
	message("\"Filbercio is the most recent MageLord, ");
	message(var0000);
	message(". He is a man of curious passions. Not what thou wouldst expect from most Mages.\"");
	say();
	UI_add_answer("passions");
labelFunc041E_036A:
	case "passions" attend labelFunc041E_037D:
	UI_remove_answer("passions");
	message("\"I'll simply say that I am mighty glad that my Petra is metal. That alone may keep her safe from his wandering eye.\"");
	say();
labelFunc041E_037D:
	case "money" attend labelFunc041E_0390:
	UI_remove_answer("money");
	message("\"Aye, plain money. The folks that came over were lesser sons and daughters who could never hope to inherit anything. They came hoping to start their own businesses, like the Blue Boar. 'Twas named in honor of my great-great grandsire's inn.\"");
	say();
labelFunc041E_0390:
	case "visitors" attend labelFunc041E_03B7:
	UI_remove_answer("visitors");
	message("\"Of course, there's not much business now due to the terrible storms. But in better times our rooms are always full. Wert thou interested in anyone in particular?\"");
	say();
	UI_push_answers();
	UI_add_answer(["the sage Batlin", "the scholar Gwenno", "nothing more"]);
labelFunc041E_03B7:
	case "the sage Batlin" attend labelFunc041E_03F2:
	UI_remove_answer("the sage Batlin");
	message("\"Such a one did come through here, perhaps two\tmonths ago.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_03EA;
	Func094E(0xFFE4, "@'Twas three months ago, Rocco.@");
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"Yes, she's right... it was three months ago.\"");
	say();
labelFunc041E_03EA:
	message("\"There was some sort of a scandal, as I recall. It was said that this Batlin stole an ancient artifact of some kind. He fled by ship -- perhaps Captain Hawk could tell thee more.\"");
	say();
	var0009 = true;
labelFunc041E_03F2:
	case "the scholar Gwenno" attend labelFunc041E_0440:
	UI_remove_answer("the scholar Gwenno");
	message("\"Thou dost know her! She and I are the closest of friends. She stayed here for many weeks.\"");
	say();
	var0008 = Func0992(0xFFFD, "@Just how well dost thou know Gwenno?@", "@Gwenno is my friend's missing wife.@", false);
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"I swear I am innocent! We were only friends, ");
	message(var0000);
	message(".\"");
	say();
	UI_push_answers();
	UI_add_answer(["Where did she go?", "Why was she here?", "How long ago?", "change subject"]);
labelFunc041E_0440:
	case "Where did she go?" attend labelFunc041E_045A:
	UI_remove_answer("Where did she go?");
	message("\"When she had studied all of the materials which were available here, she determined to go to\tthe Isle of Monks to read the scrolls kept there.\"");
	say();
	UI_add_answer("Isle of Monks");
labelFunc041E_045A:
	case "Isle of Monks" attend labelFunc041E_046D:
	UI_remove_answer("Isle of Monks");
	message("\"The Xenkan Monks live north of here on a forested island. They tend to keep to themselves, studying the prophecies of long-dead mystics. But thou canst not go there, for there is no sailor crazy enough to make the journey. The magical\tstorms have destroyed every boat on this coast, save Hawk's -- and he won't sail.\"");
	say();
labelFunc041E_046D:
	case "Why was she here?" attend labelFunc041E_0480:
	UI_remove_answer("Why was she here?");
	message("\"The good lady said that it was her task to study all of the cultures and beliefs there were in the Serpent Isles. She was planning to write a report, and she said that her discoveries would startle her countrymen.\"");
	say();
labelFunc041E_0480:
	case "How long ago?" attend labelFunc041E_04AF:
	UI_remove_answer("How long ago?");
	message("\"It hath been a long time since we last saw Gwenno. Many months.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_04AF;
	Func094E(0xFFE4, "@Eight months, dear Rocco.@");
	UI_show_npc_face0(0xFFE2, 0x0000);
labelFunc041E_04AF:
	case "nothing more", "change subject" attend labelFunc041E_04C2:
	message("\"I am sorry I was not more helpful...\"");
	say();
	UI_pop_answers();
labelFunc041E_04C2:
	case "food" attend labelFunc041E_0515:
	if (!((UI_get_schedule_type(0xFFE2) == 0x0007) || (UI_get_schedule_type(0xFFE2) == 0x0017))) goto labelFunc041E_050A;
	message("\"We serve nothing pretentious, but it fills the belly and warms the soul.\"");
	say();
	if (!(!var0003)) goto labelFunc041E_0504;
	message("\"Petra is a surprisingly good cook, considering that she is an automaton.\"");
	say();
	var0003 = true;
	UI_add_answer(["automaton", "Petra"]);
labelFunc041E_0504:
	Func085E();
	goto labelFunc041E_0515;
labelFunc041E_050A:
	message("\"Return when we be open!\"");
	say();
	UI_remove_answer("food");
labelFunc041E_0515:
	case "automaton" attend labelFunc041E_0558:
	UI_remove_answer("automaton");
	message("\"We have a lot of them around here -- magical creations, scavenged from the Serpent ruins and restored to service by our Mages. But Petra is unique, being an experiment by Torrissio the Sly. While all the others are mere machines, my Petra is a warm, caring person.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0551;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"Do not mention that name again, Rocco! Why summon more trouble than we already have?\"");
	say();
	UI_remove_npc_face1();
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"She doth not care much for Torrissio -- considering that he created her for vile and exploitive reasons. But Petra escaped, and now I care for her.\"");
	say();
labelFunc041E_0551:
	UI_add_answer("Torrissio");
labelFunc041E_0558:
	case "Torrissio" attend labelFunc041E_056B:
	UI_remove_answer("Torrissio");
	message("\"Torrissio is called the Sly for good reason. He doth meet with other people's wives on the sly. And he takes great delight in hurting people, but never enough to catch the Council's attention... Torrissio is not a nice man.\"");
	say();
labelFunc041E_056B:
	case "Petra" attend labelFunc041E_057E:
	UI_remove_answer("Petra");
	message("\"She's my serving wench, as well as being a damn fine cook -- which, considering she can neither eat nor taste, is rather incredible.\"");
	say();
labelFunc041E_057E:
	case "drink" attend labelFunc041E_05B5:
	if (!((UI_get_schedule_type(0xFFE2) == 0x0007) || (UI_get_schedule_type(0xFFE2) == 0x0017))) goto labelFunc041E_05AA;
	message("\"We serve only the finest of beverages.\"");
	say();
	Func085F();
	goto labelFunc041E_05B5;
labelFunc041E_05AA:
	message("\"Come talk to me when we be open for business!\"");
	say();
	UI_remove_answer("drink");
labelFunc041E_05B5:
	case "room" attend labelFunc041E_067E:
	UI_remove_answer("room");
	if (!(gflags[0x00D8] == false)) goto labelFunc041E_05D8;
	message("\"We've nothing fancy -- simply clean rooms, and we keep the ruffians out.\"");
	say();
	message("\"But thou lookest to be a respectable person.\"");
	say();
	gflags[0x00D8] = true;
labelFunc041E_05D8:
	message("\"The cost is 12 guilders per person. Wouldst thou like a room for the night?\"");
	say();
	if (!Func0955()) goto labelFunc041E_067A;
	var000A = (UI_get_array_size(UI_get_party_list()) * 0x000C);
	var000B = UI_count_objects(0xFE9B, 0x03B8, 0xFE99, 0xFE99);
	if (!(var000B >= var000A)) goto labelFunc041E_0648;
	message("\"Here is thy key.\"");
	say();
	var000C = Func099B(0xFE9C, 0x0001, 0x0281, 0x00B8, 0x000B, 0x0000, true);
	var000D = UI_remove_party_items(var000A, 0x03B8, 0xFE99, 0xFE99, 0x0000);
	message("\"'Tis the northwest corner room.\"");
	say();
	goto labelFunc041E_0677;
labelFunc041E_0648:
	var0008 = Func0992(0x0001, "@But Avatar, we do not have the guilders!@", 0x0000, false);
	if (!(var0008 != 0xFE9C)) goto labelFunc041E_0673;
	UI_show_npc_face0(0xFFE2, 0x0000);
	message("\"Then thou canst not stay at the inn. In these hard times, I cannot afford to keep thee and thy companions for free.\"");
	say();
	goto labelFunc041E_0677;
labelFunc041E_0673:
	message("\"Thou hast not enough guilders for my rooms.\"");
	say();
labelFunc041E_0677:
	goto labelFunc041E_067E;
labelFunc041E_067A:
	message("\"Some other time, perhaps.\"");
	say();
labelFunc041E_067E:
	case "brown bottle" attend labelFunc041E_06C0:
	UI_remove_answer("brown bottle");
	message("\"I do indeed recognize the description. Such bottles are used to contain that foul brew which the sailor-folk of Fawn prefer. I cannot tolerate the swill myself, nor can any of my customers. That's why I do not stock it.\"");
	say();
	var0008 = Func0992(0x0001, "@Perhaps we should investigate this place called Fawn.@", 0x0000, false);
	UI_show_npc_face0(0xFFE2, 0x0000);
	if (!(var0008 != 0xFE9C)) goto labelFunc041E_06B9;
	message("\"Good luck to thee! With no ships sailing, there is no way to go to Fawn from here.\"");
	say();
labelFunc041E_06B9:
	UI_add_answer("Fawn");
labelFunc041E_06C0:
	case "Fawn" attend labelFunc041E_06F9:
	UI_remove_answer("Fawn");
	message("\"'Tis somewhere on the western portion of the mainland. I never went there. Though I heard tell that it is a city built on great piers out in the water.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_06F9;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"Sounds dangerous to me...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"That is because thou canst not swim, Petra.\"");
	say();
labelFunc041E_06F9:
	case "Stefano" attend labelFunc041E_073B:
	UI_remove_answer("Stefano");
	message("\"He looked as pale as a corpse, ");
	message(var0000);
	message(". He babbled something about a Death Knight and ran out as though his pants were on fire. Sounds like he's in trouble again.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0734;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"Again?! When is Stefano not in trouble?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc041E_0734:
	UI_add_answer("Death Knight");
labelFunc041E_073B:
	case "Death Knight" attend labelFunc041E_0778:
	UI_remove_answer("Death Knight");
	message("\"I would thank thee not to repeat that in here. As Petra says, no use borrowing trouble...\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0774;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"I knew thou wert learning, Rocco.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Oh, go on with thee!\"");
	say();
labelFunc041E_0774:
	message("\"Some say that it is a Daemon summoned to hunt the unfortunate person. Others say that it is an automaton designed to kill. I do not know, nor do I wish to ask!\"");
	say();
labelFunc041E_0778:
	case "slippers" attend labelFunc041E_07CE:
	UI_remove_answer("slippers");
	message("\"They are not anything that I would wear, and Petra's metal feet are never cold... least not as she would notice.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_07C7;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"I would know that it was cold, dear Rocco, but it would not trouble me.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"See there?\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"But thou mightest ask Bucia. She may sell something like that.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Good idea, Petra!\"");
	say();
labelFunc041E_07C7:
	UI_add_answer("Bucia");
labelFunc041E_07CE:
	case "Bucia" attend labelFunc041E_080B:
	UI_remove_answer("Bucia");
	message("\"Bucia is the proprietor of the Capessi Canton in the bazaar. She is Moonshade's only provisioner.\"");
	say();
	if (!Func0942(0xFFE4)) goto labelFunc041E_0807;
	UI_show_npc_face1(0xFFE4, 0x0000);
	message("\"And its greatest gossip, as well!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Petra, honestly!\"");
	say();
labelFunc041E_0807:
	message("\"Bucia may be able to tell thee if she sells anything like them. And who purchased them.\"");
	say();
labelFunc041E_080B:
	case "bye" attend labelFunc041E_0835:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Fare well@", 0x0000);
	Func097F(0xFFE2, "@Come again!@", 0x0002);
	Func08FF();
	goto labelFunc041E_0838;
labelFunc041E_0835:
	goto labelFunc041E_01C6;
labelFunc041E_0838:
	endconv;
labelFunc041E_0839:
	return;
}


