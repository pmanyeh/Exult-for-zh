#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func09AD 0x9AD (var var0000);
extern void Func0805 0x805 ();
extern void Func0806 0x806 ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0426 object#(0x426) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFD7);
	var0004 = false;
	var0005 = false;
	if (!(event == 0x0001)) goto labelFunc0426_005A;
	UI_item_say(0xFE9C, "@Hello!@");
	0xFFDA->Func07D1();
	Func097F(0xFFDA, (("@Yes, " + var0000) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFDA, 0x0003);
labelFunc0426_005A:
	if (!(event == 0x0000)) goto labelFunc0426_00FA;
	var0006 = UI_get_random(0x0006);
	if (!(var0006 == 0x0001)) goto labelFunc0426_0080;
	UI_item_say(0xFFDA, "@Dost thou want a drink?@");
labelFunc0426_0080:
	if (!(var0006 == 0x0002)) goto labelFunc0426_0094;
	UI_item_say(0xFFDA, "@Art thou hungry?@");
labelFunc0426_0094:
	if (!(var0006 == 0x0003)) goto labelFunc0426_00BE;
	if (!Func0942(0xFFD9)) goto labelFunc0426_00B4;
	UI_item_say(0xFFDA, "@Sing us a song, Byrin!@");
	goto labelFunc0426_00BE;
labelFunc0426_00B4:
	UI_item_say(0xFFDA, "@Have some ale.@");
labelFunc0426_00BE:
	if (!(var0006 == 0x0004)) goto labelFunc0426_00D2;
	UI_item_say(0xFFDA, "@Dost thou want a room?@");
labelFunc0426_00D2:
	if (!(var0006 == 0x0005)) goto labelFunc0426_00E6;
	UI_item_say(0xFFDA, "@No brawls!@");
labelFunc0426_00E6:
	if (!(var0006 == 0x0006)) goto labelFunc0426_00FA;
	UI_item_say(0xFFDA, "@Do not break the chairs!@");
labelFunc0426_00FA:
	if (!(event == 0x0009)) goto labelFunc0426_06FA;
	UI_run_schedule(0xFFDA);
	UI_clear_item_say(0xFFDA);
	UI_show_npc_face0(0xFFDA, 0x0000);
	var0007 = UI_get_item_flag(0xFFDA, 0x001C);
	if (!(var0007 == false)) goto labelFunc0426_014F;
	if (!(gflags[0x003E] == true)) goto labelFunc0426_013E;
	message("\"Greetings, fellow Pikeman!\" ~\"Come in outta them strange storms and rest a bit...\" *\"This be the Inn of the Sleeping Bull.\" *\"And I be Argus, the innkeeper.\"");
	say();
	goto labelFunc0426_0142;
labelFunc0426_013E:
	message("\"Greetings, stranger.\" *\"Come in outta them strange storms and rest a bit...\" *\"This be the Inn of the Sleeping Bull.\" *\"And I be Argus, the innkeeper.\"");
	say();
labelFunc0426_0142:
	UI_set_item_flag(0xFFDA, 0x001C);
	goto labelFunc0426_0159;
labelFunc0426_014F:
	message("\"Welcome back, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0426_0159:
	UI_add_answer(["storms", "Sleeping Bull", "food", "drink", "room", "bye"]);
	if (!(gflags[0x01D9] == true)) goto labelFunc0426_0187;
	UI_add_answer(["duel", "bribes"]);
labelFunc0426_0187:
	converse attend labelFunc0426_06F9;
	case "storms" attend labelFunc0426_01AD:
	message("\"These ain't natural storms... Or I was never a Wolf Captain.\" *\"If thou wert to ask me, living all these years across from Moonshade, I'd say they were magic born. And I'm afeard they'll drive us out of business if they last too long.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer(["Wolf Captain", "Moonshade", "out of business"]);
labelFunc0426_01AD:
	case "Wolf Captain" attend labelFunc0426_020E:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_01C4;
	message("\"I see that thou'rt also of the Wolf Command, though I must confess I can't recall having seen thee.\" *\"Until my father disappeared six months ago, I was a Captain in the Monitor Wolf Command.\" *\"Now, however, I am the innkeeper and I'll not stand by the formalities of rank. Thou'rt welcome here.\"");
	say();
	goto labelFunc0426_01F7;
labelFunc0426_01C4:
	message("\"I am sorry, ");
	message(var0000);
	message(". I did not realize that thou wert not from hereabouts.\"");
	say();
	if (!(var0003 == true)) goto labelFunc0426_01F3;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("\"Ha! Thou wert fishin' for a way to tell thy tales!\" *\"I thought I broke thee of lying when thou wert a lad...\" *\"Mind thee... Captain... I can still warm thy backside if I've a mind to.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"And I do not doubt that she could... and would!\"");
	say();
labelFunc0426_01F3:
	message("\"Until my father disappeared six months ago, I was a Captain in the Monitor Wolf Command.\"");
	say();
labelFunc0426_01F7:
	UI_remove_answer("Wolf Captain");
	UI_add_answer(["father disappeared", "Monitor", "Wolf Command"]);
labelFunc0426_020E:
	case "father disappeared" attend labelFunc0426_0228:
	message("\"Aye, Angus disappeared... And not during one of those storms neither. We could have understood that.\" *\"And mother... er, Devra... Said that one of our guests disappeared the very same evening.\"");
	say();
	UI_remove_answer("father disappeared");
	UI_add_answer("one of our guests");
labelFunc0426_0228:
	case "one of our guests" attend labelFunc0426_0242:
	message("\"Thou must needs ask mother what she remembers of that night. I weren't here.\" *\"Mother was understandably aggrieved by the time she called me home.\" *\"She had hoped that Lord Wilfred would come to run the inn as father had hoped, but I came instead...\" *\"And I don't recall if she mentioned the guest's name, to be honest.\"");
	say();
	UI_remove_answer("one of our guests");
	UI_add_answer("Lord Wilfred");
labelFunc0426_0242:
	case "Lord Wilfred" attend labelFunc0426_025C:
	message("\"Blast! Did I call him that? Old habits die hard...\" *\"I'd thank thee not to repeat that in Devra's hearing for she'd have mine ears for sure.\" *\"Wilfred is my younger brother. And, like most brothers, we have our share of spats.\"");
	say();
	UI_remove_answer("Lord Wilfred");
	UI_add_answer("spats");
labelFunc0426_025C:
	case "spats" attend labelFunc0426_027C:
	message("\"I grew up here in the inn, scrubbing pots and whatever else were needed.\" *\"But I dreamed of seeing more of the world. I went wandering when I was a young lad...\" *\"And Angus, our father, raised Wilfred using me as the bad example. But instead of making Wilfred hold to his wishes, Angus drove Wilfred into my footsteps, determined to best anything I did.\"");
	say();
	UI_remove_answer("spats");
	UI_add_answer(["bad example", "best"]);
labelFunc0426_027C:
	case "bad example" attend labelFunc0426_029E:
	message("\"Father said I were too much like my great-grandfather, Silverpate.\tHe never thought I'd amount to much, even after I'd made Captain.\"");
	say();
	message("\"It like to broke his heart when Wilfred ran away to Monitor. That's where the @Lord@ Wilfred hies from...\"");
	say();
	message("\"He acts like a swaggering noble, with all his self-important ambition.\"");
	say();
	UI_remove_answer("bad example");
	UI_add_answer("Silverpate");
labelFunc0426_029E:
	case "Silverpate" attend labelFunc0426_02B8:
	message("\"Silverpate were a pirate, I'll make no bones about it. He built this inn when he retired from the sea.\" *\"His son, Donal -- my father's father -- took over when Silverpate disappeared. Some think he might have gone back to the sea. Others say that his evil past caught up to him... No one ever saw him again. But there've been plenty wantin' to hunt for his treasure.\"");
	say();
	UI_remove_answer("Silverpate");
	UI_add_answer("treasure");
labelFunc0426_02B8:
	case "treasure" attend labelFunc0426_02F0:
	message("\"Family legend doth say that Silverpate used part of his treasure to build the inn. Everyone seems to think that he hid whatever was left somewhere around here before he disappeared.\" *\"But I'll tell thee, there ain't no treasure. And I should know...\"");
	say();
	if (!(var0003 == true)) goto labelFunc0426_02E9;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("\"Aye, indeed! Thou and thy friends didst pry into everything and dug holes from here to Monitor when thou wert young! I never stopped thee... I thought thy father had done the same when he was young.\" *\"But I whaled thee good when I caught thee digging in me garden!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Aye... I stood up to dinner that night. I remember.\"");
	say();
	UI_remove_npc_face1();
labelFunc0426_02E9:
	UI_remove_answer("treasure");
labelFunc0426_02F0:
	case "best" attend labelFunc0426_030A:
	message("\"I became a Captain in Monitor, but that was not good enough for Wilfred. He had to be a knight... and a Bear at that.\" *\"'Tis sad to see the likes of him and his friends making a mockery of Monitor's ideals.\"");
	say();
	UI_remove_answer("best");
	UI_add_answer("ideals");
labelFunc0426_030A:
	case "ideals" attend labelFunc0426_0336:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_0321;
	message("\"Thou hast seen the changes, I'm sure...\"");
	say();
	goto labelFunc0426_032B;
labelFunc0426_0321:
	message("\"'Tis sad to say, ");
	message(var0000);
	message("...\"");
	say();
labelFunc0426_032B:
	message("\"Courage and Valor have become so debased that Knights like Wilfred are little more than braggarts and mercenaries! Where once the pinnacle of honor was a Monitorian knight, now people see them as vain bullies.\" *\"It sickens me... I had nearly decided to renounce my commission when mother sent word of father's disappearance.\"");
	say();
	UI_remove_answer("ideals");
labelFunc0426_0336:
	case "Monitor" attend labelFunc0426_0367:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_034D;
	message("\"What can I tell thee that thou dost not already know?\"");
	say();
	goto labelFunc0426_0351;
labelFunc0426_034D:
	message("\"Where to start?\"");
	say();
labelFunc0426_0351:
	message("\"Monitor is a city to the south of here. 'Tis dedicated to Courage and Valor. Monitorian soldiers are called the Pikemen and wear a tattoo on their faces.\"");
	say();
	message("\"There are three Pikemen Commands -- the wolves, the leopards, and the bears. I am a Captain in the Wolf Command. Each Command runs the city for a portion of the year.\"");
	say();
	UI_remove_answer("Monitor");
	UI_add_answer("runs the city");
labelFunc0426_0367:
	case "runs the city" attend labelFunc0426_037E:
	message("\"The senior officer of the Command becomes Lord of Monitor for that Command's portion of the year. This ensures the continuing balance of Commands.\"");
	say();
	message("\"'Twas meant to keep the battling for supremacy between the Commands at a minimum.\" *\"If each Command knows that it will have a chance to control the city during the year, more attention is given to the military functions of the Command rather than the political.\"");
	say();
	UI_remove_answer("runs the city");
labelFunc0426_037E:
	case "Wolf Command" attend labelFunc0426_03A6:
	if (!(gflags[0x003E] == true)) goto labelFunc0426_0395;
	message("\"A hardy bunch, are we not? Not as hot-headed as those Bears, and much more tightly knit than those Leopards.\"");
	say();
	goto labelFunc0426_039F;
labelFunc0426_0395:
	message("\"We are a hardy bunch, ");
	message(var0000);
	message(". Not as hot-headed as those Bears, and much more tightly knit than those Leopards.\"");
	say();
labelFunc0426_039F:
	UI_remove_answer("Wolf Command");
labelFunc0426_03A6:
	case "Moonshade" attend labelFunc0426_03C6:
	message("\"I've ne'er been there myself, not being overly fond of wizards and their feuds. But if thou desirest spells or items of enchantment, that is the place to go.\" *\"If thou art looking to go to the City of Mages, thou wilt need a boat.\"");
	say();
	UI_remove_answer("Moonshade");
	UI_add_answer(["wizard feuds", "boat"]);
labelFunc0426_03C6:
	case "wizard feuds" attend labelFunc0426_03D9:
	message("\"There isn't a sorcerer alive what doesn't scheme to become MageLord of that city! The whole place is split into rival factions that bicker constantly with each other.\"");
	say();
	UI_remove_answer("wizard feuds");
labelFunc0426_03D9:
	case "boat" attend labelFunc0426_03F3:
	message("\"The Magic Storms have wrecked every boat on this coast except one. That vessel belongs to Captain Hawk.\"");
	say();
	UI_remove_answer("boat");
	UI_add_answer("Captain Hawk");
labelFunc0426_03F3:
	case "Captain Hawk" attend labelFunc0426_0432:
	message("\"'Tis no use to think of hiring him. He was in a fracas here, broke things up a bit.\" *\"The Pikemen dragged Hawk away when he took a swing at their commander. He's being held at Bull Tower until he pays their fine.\"");
	say();
	if (!(var0003 == true)) goto labelFunc0426_0420;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("\"Fine! More like ransom, I'd call it! Thou knowest as well as I, Argus, that Hawk can't pay...\" *\"Not if he doesn't put out from here. And he swore he wouldn't until these storms stop.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0426_0420:
	gflags[0x01CD] = true;
	UI_remove_answer("Captain Hawk");
	UI_add_answer("Pikemen");
labelFunc0426_0432:
	case "Pikemen" attend labelFunc0426_0456:
	message("\"I didn't call them, ");
	message(var0000);
	message(". I've known Hawk since I was a boy and, being a Pikeman myself, I have little to worry about with him.\"");
	say();
	message("\"To be sure, he can put up a mighty fight and break things... But he always pays for the damages when he wakes. Someone else must have pulled them in after him.\"");
	say();
	UI_remove_answer("Pikemen");
	UI_add_answer("someone else");
labelFunc0426_0456:
	case "someone else" attend labelFunc0426_0469:
	message("\"I'd wager my sword that it was that merchant, Flindo. He was mightily put out when Hawk refused to sail to Moonshade until the storms eased up.\"");
	say();
	UI_remove_answer("someone else");
labelFunc0426_0469:
	case "out of business" attend labelFunc0426_0483:
	message("\"Aye, few people care to stray too far from shelter these days.\" *\"Even Hawk put in here and refused to budge because of the storms... Though his passengers are less than thrilled with his decision.\" *\"And all our help ran off to the cities, hoping that it would be safer around all those buildings.\"");
	say();
	UI_remove_answer("out of business");
	UI_add_answer("passengers");
labelFunc0426_0483:
	case "passengers" attend labelFunc0426_049D:
	message("\"Hawk hath two passengers staying here until he puts out again -- if he ever pays the Pikemen, that is. One of them is the fellow with the parrot. Kane, I think his name is. The other is an arrogant fellow named Flindo. He's a merchant.\" *\"I was glad to have them, being as we only have four other guests.\"");
	say();
	UI_remove_answer("passengers");
	UI_add_answer("guests");
labelFunc0426_049D:
	case "guests" attend labelFunc0426_04D9:
	message("\"Yes... There be Ensorcio. He's an exiled mage from Moonshade.\" *\"There be Selina, who hath not been here very long. She is very afraid of these storms...\"");
	say();
	if (!(var0003 == true)) goto labelFunc0426_04CE;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("\"Bah! She's no more afraid of those storms than thou art! She follows thee about right well enough, storm or no!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Mother!\"");
	say();
labelFunc0426_04CE:
	message("\"Byrin's here, which is a blessing. 'Tis good to have a gleeman to pass the weary hours between storms. And then there be that new fellow, Miggim. I don't know too much about him... He hath only been here a few days and is rarely out of his room.\"");
	say();
	UI_remove_answer("guests");
labelFunc0426_04D9:
	case "Sleeping Bull" attend labelFunc0426_04F7:
	message("\"'Tis an uncommon name, to be sure. It doth have something to do with the village that once was here. According to family tales, this land once belonged to a mage who hated all people. This mage created a huge stone bull to kill trespassers on his land.\"");
	say();
	message("\"'Twas the bull's defeat that gave the village its name... And, in turn, became the name of the inn itself.\"");
	say();
	UI_remove_answer("Sleeping Bull");
	UI_add_answer("bull's defeat");
labelFunc0426_04F7:
	case "bull's defeat" attend labelFunc0426_0512:
	message("\"One day the mage heard a local noble's son claim that he could defeat the bull. The mage told the boy he was welcome to try, but death would be the reward of failure.\"");
	say();
	message("\"When the boy asked what would reward his success, the mage wagered his land. That night the boy stole the ring from the bull's nose, turning it back to inanimate stone.\"");
	say();
	message("\"The village was named after the huge stone bull that once stood in the center of the market square. I do not know what happened to the bull, if ever there was one, for I searched for it as a lad and never found it.\"");
	say();
	UI_remove_answer("bull's defeat");
labelFunc0426_0512:
	case "duel" attend labelFunc0426_052C:
	message("\"I will not lie to thee... I did, indeed, kill a man in a duel of honor. As I called the duel, it was he who named the conditions.\" *\"He were equally trained and armed as myself, else I would have demanded to cross swords with his seconds. And I would have asked him to yield, but my blow glanced off his hilt and took him square in the throat.\"");
	say();
	UI_remove_answer("duel");
	UI_add_answer("called the duel");
labelFunc0426_052C:
	case "called the duel" attend labelFunc0426_053F:
	message("\"He likened me to my forefather, Silverpate -- loudly, and in public. I asked for his apology, and when he further heaped filth upon my name... I called him to duel before witnesses.\"");
	say();
	UI_remove_answer("called the duel");
labelFunc0426_053F:
	case "bribes" attend labelFunc0426_0560:
	UI_push_answers();
	message("\"By the stone bull's horns! I'd like to know who insists on telling these false tales! I was cleared of all allegations by my commander and I'll have thine apology for spreading such a lie!\"");
	say();
	message("\"Wilt thou apologize? Or shall I take my recompense from thine hide?\"");
	say();
	UI_add_answer(["apologize", "don't apologize"]);
labelFunc0426_0560:
	case "apologize" attend labelFunc0426_056D:
	message("\"I accept thine apology...\" *\"Thou art wise, for I had no wish to do thee harm. But I shall not stand by while my name is abused. Forgive me, but I must withdraw until I am more sure of my temper.\"");
	say();
	abort;
labelFunc0426_056D:
	case "don't apologize" attend labelFunc0426_0580:
	message("\"So be it then!\" ~\"Prepare thyself to be thrashed!\"");
	say();
	Func09AD(0xFFDA);
	abort;
labelFunc0426_0580:
	case "food" attend labelFunc0426_05E7:
	if (!((UI_get_schedule_type(0xFFDA) == 0x0007) || (UI_get_schedule_type(0xFFDA) == 0x0017))) goto labelFunc0426_05DC;
	if (!(!var0005)) goto labelFunc0426_05D6;
	message("\"Mother doth do all the cooking here... and she is very good.\"");
	say();
	if (!(var0003 == true)) goto labelFunc0426_05D2;
	UI_show_npc_face1(0xFFD7, 0x0000);
	message("\"What a nice son! He compliments me so!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"It IS true.\"");
	say();
labelFunc0426_05D2:
	var0005 = true;
labelFunc0426_05D6:
	Func0805();
	goto labelFunc0426_05E7;
labelFunc0426_05DC:
	message("\"Return when we be open, and I will sell thee a meal!\"");
	say();
	UI_remove_answer("food");
labelFunc0426_05E7:
	case "drink" attend labelFunc0426_0624:
	if (!((UI_get_schedule_type(0xFFDA) == 0x0007) || (UI_get_schedule_type(0xFFDA) == 0x0017))) goto labelFunc0426_0619;
	message("\"I am certain our selection will please thee, ");
	message(var0000);
	message(".\"");
	say();
	Func0806();
	goto labelFunc0426_0624;
labelFunc0426_0619:
	message("\"If thou wilt return when we are open, I will sell thee a drink!\"");
	say();
	UI_remove_answer("drink");
labelFunc0426_0624:
	case "room" attend labelFunc0426_06CF:
	message("\"The cost is 8 gold coins per person. Wouldst thou like a room for the night?\"");
	say();
	if (!Func0955()) goto labelFunc0426_06C4;
	var0008 = UI_get_party_list();
	var0009 = 0x0000;
	enum();
labelFunc0426_0644:
	for (var000C in var0008 with var000A to var000B) attend labelFunc0426_065C;
	var0009 = (var0009 + 0x0001);
	goto labelFunc0426_0644;
labelFunc0426_065C:
	var000D = (var0009 * 0x0008);
	var000E = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000E >= var000D)) goto labelFunc0426_06BD;
	message("\"Here is the key to room number 3.\"");
	say();
	var000F = UI_remove_party_items(var000D, 0x0284, 0xFE99, 0xFE99, 0x0000);
	var0010 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0003, 0x0009, 0x0000, true);
	message("\"The rooms are upstairs.\"");
	say();
	goto labelFunc0426_06C1;
labelFunc0426_06BD:
	message("\"I do believe thou dost not have enough gold coins for a room.\"");
	say();
labelFunc0426_06C1:
	goto labelFunc0426_06C8;
labelFunc0426_06C4:
	message("\"Some other time, then.\"");
	say();
labelFunc0426_06C8:
	UI_remove_answer("room");
labelFunc0426_06CF:
	case "bye" attend labelFunc0426_06F6:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(0xFFDA, "@Come again!@", 0x0002);
	goto labelFunc0426_06F9;
labelFunc0426_06F6:
	goto labelFunc0426_0187;
labelFunc0426_06F9:
	endconv;
labelFunc0426_06FA:
	return;
}


