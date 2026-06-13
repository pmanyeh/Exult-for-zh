#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0103 shape#(0x103) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0994();
	var0001 = UI_get_npc_id(item);
	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = Func0953();
	var0005 = false;
	if (!((event == 0x0007) && (var0001 == 0x0001))) goto labelFunc0103_004C;
	UI_clear_item_flag(item, 0x001D);
	UI_reduce_health(item, 0x0032, 0x0000);
	gflags[0x0120] = true;
labelFunc0103_004C:
	if (!(event == 0x0001)) goto labelFunc0103_0074;
	UI_item_say(0xFE9C, "@Ranger!@");
	item->Func07D1();
	Func097F(item, "@Yes?@", 0x0002);
	UI_set_schedule_type(item, 0x0003);
labelFunc0103_0074:
	if (!(event == 0x0000)) goto labelFunc0103_00FC;
	if (!(var0001 != 0x0001)) goto labelFunc0103_00FC;
	var0006 = UI_get_random(0x0006);
	if (!(var0006 == 0x0001)) goto labelFunc0103_00A2;
	UI_item_say(item, "@Try our wine!@");
labelFunc0103_00A2:
	if (!(var0006 == 0x0002)) goto labelFunc0103_00B4;
	UI_item_say(item, "@Yes, ma'am! Back to work!@");
labelFunc0103_00B4:
	if (!(var0006 == 0x0003)) goto labelFunc0103_00C6;
	UI_item_say(item, "@Work, work, work...@");
labelFunc0103_00C6:
	if (!(var0006 == 0x0004)) goto labelFunc0103_00D8;
	UI_item_say(item, "@What art thou doing?@");
labelFunc0103_00D8:
	if (!(var0006 == 0x0005)) goto labelFunc0103_00EA;
	UI_item_say(item, "@Come and see the wine press!@");
labelFunc0103_00EA:
	if (!(var0006 == 0x0006)) goto labelFunc0103_00FC;
	UI_item_say(item, "@Magic wine!@");
labelFunc0103_00FC:
	if (!(event == 0x0009)) goto labelFunc0103_0732;
	if (!(var0001 == 0x0000)) goto labelFunc0103_0407;
	UI_set_schedule_type(item, 0x0007);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEEE, 0x0000);
	message("\"How may I help thee? As a Ranger, I must help thee in any way that I can.\"");
	say();
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0103_013B;
	UI_add_answer("strange wine");
labelFunc0103_013B:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0103_0154;
	UI_add_answer("brown bottle");
labelFunc0103_0154:
	if (!(gflags[0x0118] && (!gflags[0x029C]))) goto labelFunc0103_0166;
	UI_add_answer("mystery shield");
labelFunc0103_0166:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0103_017F;
	UI_add_answer("kidnap");
labelFunc0103_017F:
	UI_add_answer(["Ranger", "bye"]);
labelFunc0103_018C:
	converse attend labelFunc0103_0406;
	case "kidnap" attend labelFunc0103_01C2:
	UI_remove_answer("kidnap");
	message("\"Thou shouldst report such a crime as this to Julia. She can aid thee.\"");
	say();
	if (!UI_npc_nearby(0xFFE9)) goto labelFunc0103_01C2;
	UI_set_schedule_type(0xFFE9, 0x0003);
	Func097F(0xFFE9, "@Yes?@", 0x0000);
labelFunc0103_01C2:
	case "Ranger" attend labelFunc0103_01EC:
	UI_remove_answer("Ranger");
	message("\"A Ranger is much like any other city guard, ");
	message(var0002);
	message(". It is our job to catch thieves, and stop fights. Nothing very exciting...\"");
	say();
	message("\"...Until one of the Mages manages to destroy a section of town with his experiments. Then things become lively.\"");
	say();
	UI_add_answer(["Mage", "lively"]);
labelFunc0103_01EC:
	case "Mage" attend labelFunc0103_021A:
	UI_remove_answer("Mage");
	message("\"Moonshade is the city of Mages, ");
	message(var0002);
	message(".\"");
	say();
	message("\"Mages are very powerful, and many of them can do things that make my skin crawl! And oftimes their experiments escape and then the Rangers must step in and take control.\"");
	say();
	message("\"But, 'tis my job... cleaning after the Mages.\"");
	say();
	UI_add_answer(["things", "escape"]);
labelFunc0103_021A:
	case "things" attend labelFunc0103_0237:
	UI_remove_answer("things");
	message("\"I pretend I do not see half of what the Mages can do, ");
	message(var0002);
	message(". I find 'tis easier to keep my sanity that way.\"");
	say();
	message("\"Some can summon fire or ice. Others can summon storms or daemons. And none of it I want to know about, to tell thee truth.\"");
	say();
labelFunc0103_0237:
	case "escape" attend labelFunc0103_0252:
	UI_remove_answer("escape");
	message("\"Either the mage tries a spell that is too advanced for him, or he simply loses concentration. I do not know.\"");
	say();
	message("\"All I know is that suddenly we have people running through the streets trying to escape whatever the Mage was attempting to conjure...\"");
	say();
	message("\"And 'tis no mean feat for us poor Rangers to overcome something that overpowered a Mage, I can tell thee!\"");
	say();
labelFunc0103_0252:
	case "lively" attend labelFunc0103_0276:
	UI_remove_answer("lively");
	message("\"Oh, yes! It might be as simple as putting out a fire and rebuilding a section or two of wall after.\"");
	say();
	message("\"But sometimes 'tis far more dangerous... Like a dragon, or one of Rotoluncia's daemons, or somesuch. Never know from one day to the next what thou wilt have to face.\"");
	say();
	UI_remove_answer(["dragon", "daemon"]);
labelFunc0103_0276:
	case "dragon" attend labelFunc0103_0290:
	UI_remove_answer("dragon");
	message("\"To be honest, I have never had to face one myself. But my commander remembers when she was a new Ranger, when the Strictures were newly in place. A Mage summoned a dragon that burned half of the city.\"");
	say();
	UI_add_answer("Strictures");
labelFunc0103_0290:
	case "Strictures" attend labelFunc0103_02A3:
	UI_remove_answer("Strictures");
	message("\"I cannot tell thee much about them... Not being a Mage and all. Perhaps thou couldst ask a Mage.\"");
	say();
labelFunc0103_02A3:
	case "Rotoluncia" attend labelFunc0103_02BA:
	UI_remove_answer("Rotoluncia");
	message("\"Rotoluncia's forte is fire spells. So I suppose it follows that she would seek to summon daemons to her service.\"");
	say();
	message("\"To be truthful, she hath not yet succeeded in binding a daemon. But it disturbs me to think that she might... and that I might have to face one some day.\"");
	say();
labelFunc0103_02BA:
	case "daemons" attend labelFunc0103_02D1:
	UI_remove_answer("daemons");
	message("\"Everyone says that daemons come from the hot depths of the world. That they are foul creatures of flame and melted flesh.\"");
	say();
	message("\"I hope never to find if it is true...\"");
	say();
labelFunc0103_02D1:
	case "strange wine" attend labelFunc0103_0313:
	UI_remove_answer("strange wine");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0103_0302;
	message("\"It looks to be wine from our press, ");
	message(var0002);
	message(". But thou shouldst ask my commander, to be sure.\"");
	say();
	goto labelFunc0103_030C;
labelFunc0103_0302:
	message("\"'Tis true that we deal in wine, ");
	message(var0002);
	message(". But without seeing the bottle, I would not be able to help thee.\"");
	say();
labelFunc0103_030C:
	UI_add_answer("commander");
labelFunc0103_0313:
	case "commander" attend labelFunc0103_0334:
	UI_remove_answer("commander");
	message("\"Julia is our commander, ");
	message(var0002);
	message(". She's a stern woman, but worthy of thy respect.\"");
	say();
	message("\"There are those that consider her a handsome woman, when her mouth is closed... If thou knowest what I mean.\"");
	say();
	var0005 = true;
labelFunc0103_0334:
	case "brown bottle" attend labelFunc0103_0360:
	UI_remove_answer("brown bottle");
	message("\"What an odd bottle! Who would bottle their wares in such an ugly container? I hope that whatever was inside is not as coarse as the bottle suggests.\"");
	say();
	message("\"Our commander oversees the bottling of our wine, ");
	message(var0002);
	message(". Thou mightest ask if she knows who doth use such a bottle, but I would not stake much on it, if I were thee.\"");
	say();
	if (!(var0005 == false)) goto labelFunc0103_0360;
	UI_add_answer("commander");
labelFunc0103_0360:
	case "mystery shield" attend labelFunc0103_038E:
	UI_remove_answer("mystery shield");
	message("\"It certainly is a fine looking piece of equipment, ");
	message(var0002);
	message(". I wish we had arms as nice.\"");
	say();
	message("\"Thou shouldst ask Ernesto if he recognizes it. He is the arms expert among the Rangers.\"");
	say();
	message("\"On a guess, I'd say it came from Monitor. Everyone knows that they practically sleep with weapons such as this.\"");
	say();
	UI_add_answer(["Ernesto", "Monitor"]);
labelFunc0103_038E:
	case "Ernesto" attend labelFunc0103_03AE:
	UI_remove_answer("Ernesto");
	message("\"Ernesto is our second in command, ");
	message(var0002);
	message(". Thou wilt find him somewhere around the wine press, I'll warrant.\"");
	say();
	UI_add_answer("wine press");
labelFunc0103_03AE:
	case "wine press" attend labelFunc0103_03CB:
	UI_remove_answer("wine press");
	message("\"One other thing that the Rangers do, ");
	message(var0002);
	message(", is produce the wine sold throughout Moonshade.\"");
	say();
	message("\"Our wine press is very special. I'm certain that either Ernesto or the commander would be happy to show it to thee. We are all very proud of it.\"");
	say();
labelFunc0103_03CB:
	case "Monitor" attend labelFunc0103_03DE:
	UI_remove_answer("Monitor");
	message("\"Monitor is on the mainland. 'Tis the city of warriors. That is why I thought the shield might be from there.\"");
	say();
labelFunc0103_03DE:
	case "bye" attend labelFunc0103_0403:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@So long!@", 0x0000);
	Func097F(item, "@Fare well!@", 0x0002);
	goto labelFunc0103_0406;
labelFunc0103_0403:
	goto labelFunc0103_018C;
labelFunc0103_0406:
	endconv;
labelFunc0103_0407:
	if (!(var0001 == 0x0001)) goto labelFunc0103_0732;
	UI_set_schedule_type(item, 0x0007);
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEE7, 0x0000);
	message("\"My name is Ernesto the Ranger. How may I be of service, ");
	message(var0002);
	message("?\"");
	say();
	if (!(gflags[0x0115] && (!gflags[0x0293]))) goto labelFunc0103_0444;
	UI_add_answer("slippers");
labelFunc0103_0444:
	if (!(gflags[0x0285] && (!gflags[0x0297]))) goto labelFunc0103_0456;
	UI_add_answer("strange wine");
labelFunc0103_0456:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0103_046F;
	UI_add_answer("brown bottle");
labelFunc0103_046F:
	if (!(gflags[0x0118] && (!gflags[0x029C]))) goto labelFunc0103_0481;
	UI_add_answer("mystery shield");
labelFunc0103_0481:
	if (!(gflags[0x00EA] && (!UI_get_item_flag(0xFFE1, 0x0004)))) goto labelFunc0103_049A;
	UI_add_answer("kidnap");
labelFunc0103_049A:
	UI_add_answer(["Ranger", "bye"]);
labelFunc0103_04A7:
	converse attend labelFunc0103_0731;
	case "kidnap" attend labelFunc0103_04F0:
	UI_remove_answer("kidnap");
	message("\"This is such a terrible crime. And it involves magic!");
	say();
	if (!UI_npc_nearby(0xFFE9)) goto labelFunc0103_04E4;
	message("\"Thou shouldst report such a crime as this to Julia. She can aid thee.\"");
	say();
	UI_set_schedule_type(0xFFE9, 0x0003);
	Func097F(0xFFE9, "@Yes?@", 0x0000);
	goto labelFunc0103_04F0;
labelFunc0103_04E4:
	message("\"Do not tell that I told thee this, but do not take such a matter to Julia -- \"");
	say();
	message("\"She shall only extort a bribe, then send thee elsewhere.\"");
	say();
	message("\"Instead, speak to one of the Adepts. Perhaps Gustacio, if he'll give thee his ear, or Fedabiblio. They can help thee.\"");
	say();
labelFunc0103_04F0:
	case "Ranger" attend labelFunc0103_0514:
	UI_remove_answer("Ranger");
	message("\"A Ranger is in service to the MageLord and the Council. 'Tis our duty to guard the city and keep order...\"");
	say();
	message("\"We also make fine wine that is sold throughout all of Moonshade.\"");
	say();
	UI_add_answer(["MageLord", "Council"]);
labelFunc0103_0514:
	case "MageLord" attend labelFunc0103_0551:
	UI_remove_answer("MageLord");
	if (!(gflags[0x0004] && (UI_get_schedule_type(0x038A) != 0x000F))) goto labelFunc0103_0540;
	message("\"Shamino the Anarch is the current MageLord. He hath brought great change to our city...\"");
	say();
	message("\"No longer must a Mage or Mundane be bound by petty rules. It is quite exciting!\"");
	say();
	goto labelFunc0103_0551;
labelFunc0103_0540:
	message("\"The current MageLord is Filbercio, ");
	message(var0002);
	message(". He is a wise ruler, who ensures the safety of the people by keeping the Mages within the confines of the Strictures.\"");
	say();
	UI_add_answer("Strictures");
labelFunc0103_0551:
	case "Strictures" attend labelFunc0103_056E:
	UI_remove_answer("Strictures");
	message("\"I can only tell thee what is common knowledge, ");
	message(var0002);
	message(". That the Strictures are meant to curtail the use of dangerous spells within the city.\"");
	say();
	message("\"That way, should anything go wrong during the casting, the Rangers do not have to worry about saving half the populace as well as containing the disaster.\"");
	say();
labelFunc0103_056E:
	case "Council" attend labelFunc0103_0592:
	UI_remove_answer("Council");
	message("\"The Council is composed of Adepts that balance the MageLord's power. They represent the voice of the Mages within the city.\"");
	say();
	message("\"Of course, the Mundanes have little or no voice in the Council. I suppose that the Rangers are the closest thing to representatives for the Mundanes that Moonshade doth have.\"");
	say();
	UI_add_answer(["Mages", "Mundanes"]);
labelFunc0103_0592:
	case "Mages" attend labelFunc0103_05AB:
	UI_remove_answer("Mages");
	message("\"Mages are those that make any use of magic, ");
	message(var0002);
	message("... Adept or no. And since Moonshade is the city of Mages, it is the Mages that control the city.\"");
	say();
labelFunc0103_05AB:
	case "Mundanes" attend labelFunc0103_05C2:
	UI_remove_answer("Mundanes");
	message("\"Mundanes are those that cannot call upon magic without the use of magic items that contain a specific spell. They have no magical ability in and of themselves.\"");
	say();
	message("\"And here in Moonshade, I'm afraid, Mundanes are little better than chattel.\"");
	say();
labelFunc0103_05C2:
	case "slippers" attend labelFunc0103_05DC:
	UI_remove_answer("slippers");
	message("\"Too small for me, I'm afraid. I don't think that these belong to any of the Rangers. Thou couldst ask Bucia.\"");
	say();
	UI_add_answer("Bucia");
labelFunc0103_05DC:
	case "Bucia" attend labelFunc0103_05FA:
	UI_remove_answer("Bucia");
	message("\"She is Moonshade's provisioner, and she would know who bought such a pair, I'm sure... Bucia loves all sorts of information, if thou takest my meaning.\"");
	say();
	message("\"Thou canst usually find her at the Capessi Canton.\"");
	say();
	UI_add_answer("Capessi Canton");
labelFunc0103_05FA:
	case "Capessi Canton" attend labelFunc0103_0611:
	UI_remove_answer("Capessi Canton");
	message("\"The Capessi Canton is Bucia's shop. Well, at least I know that she runs it, whether or not she owns it.\"");
	say();
	message("\"Thou canst find almost anything there. But remember, Bucia loves to talk. Don't say that I didn't warn thee.\"");
	say();
labelFunc0103_0611:
	case "strange wine" attend labelFunc0103_0655:
	UI_remove_answer("strange wine");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0010)) goto labelFunc0103_064B;
	message("\"'Tis our wine, sure enough! Can't fool my nose after all these years working with the Mad Mage's wine press!\"");
	say();
	message("\"I wonder if this was the bottle that disappeared... Thou shouldst ask my commander about the wine.\"");
	say();
	gflags[0x0297] = true;
	UI_add_answer("Mad Mage");
	goto labelFunc0103_0655;
labelFunc0103_064B:
	message("\"As fond as I am of good wine, ");
	message(var0002);
	message(", I cannot help thee unless I see the bottle. No offense, but thy description could fit several wines that I know of.\"");
	say();
labelFunc0103_0655:
	case "Mad Mage" attend labelFunc0103_0676:
	UI_remove_answer("Mad Mage");
	message("\"Erstam is the Mad Mage, ");
	message(var0002);
	message(".\"");
	say();
	message("\"Long ago, he was the teacher of the Adepts here in Moonshade. But then, like any man I suppose, he became obsessed with the thought of his own mortality.\"");
	say();
	message("\"His attempts to wrest life from death have been rather pathetic. And he hath gone completely mad.\"");
	say();
labelFunc0103_0676:
	case "brown bottle" attend labelFunc0103_0694:
	UI_remove_answer("brown bottle");
	message("\"Hmmm. I can't recall having seen a bottle like this one. But then I don't generally try any vintages but our own.\"");
	say();
	message("\"Thou shouldst ask Julia, though. If anyone would know, it would be Julia.\"");
	say();
	UI_add_answer("Julia");
labelFunc0103_0694:
	case "Julia" attend labelFunc0103_06B1:
	UI_remove_answer("Julia");
	message("\"Perhaps I should have referred to her as Commander, for that is what she is... Commander of the Rangers.\"");
	say();
	message("\"She's a bit sour, I'm afraid, ");
	message(var0002);
	message(". Leading the Rangers is a thankless job, and she hath become quite disillusioned over the last few years.\"");
	say();
labelFunc0103_06B1:
	case "mystery shield" attend labelFunc0103_06D5:
	UI_remove_answer("mystery shield");
	message("\"I thought that thou didst have a challenge for me! This one is easy... It is a Pikemen's shield from Monitor.\"");
	say();
	message("\"I wish that the Council would give us the funds for arms like this!\"");
	say();
	UI_add_answer(["Pikemen", "Monitor"]);
labelFunc0103_06D5:
	case "Pikemen" attend labelFunc0103_06F2:
	UI_remove_answer("Pikemen");
	message("\"The Pikemen are to Monitor as the Rangers are to Moonshade, ");
	message(var0002);
	message(". But more so...\"");
	say();
	message("\"For the Pikemen maintain guard towers all along the roads on the mainland. So they are much more widely respected than the Rangers.\"");
	say();
labelFunc0103_06F2:
	case "Monitor" attend labelFunc0103_0709:
	UI_remove_answer("Monitor");
	message("\"Monitor is on the southern edge of the mainland. Its citizens are noted for their bravery.\"");
	say();
	message("\"I went there once, as a young lad. That's what inspired me to become a Ranger.\"");
	say();
labelFunc0103_0709:
	case "bye" attend labelFunc0103_072E:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell!@", 0x0000);
	Func097F(item, "@Peace be with thee.@", 0x0002);
	goto labelFunc0103_0731;
labelFunc0103_072E:
	goto labelFunc0103_04A7;
labelFunc0103_0731:
	endconv;
labelFunc0103_0732:
	if (!(var0001 == 0x0002)) goto labelFunc0103_0765;
	UI_clear_item_say(item);
	UI_show_npc_face0(0xFEEE, 0x0000);
	message("\"Please, I cannot speak with thee at this time. My grief doth take the words from my mouth and leave me only with tears.\" ~\"Please away, I do not wish to be seen in this state.\"");
	say();
	Func097F(item, "@If only I had flowers...@", 0x0002);
	UI_set_schedule_type(item, 0x000F);
	UI_remove_npc_face0();
labelFunc0103_0765:
	return;
}


