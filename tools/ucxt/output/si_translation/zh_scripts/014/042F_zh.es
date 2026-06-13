#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0818 0x818 ();
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func08A9 0x8A9 ();
extern var Func0955 0x955 ();
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func042F object#(0x42F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	var0001 = false;
	var0002 = false;
	if (!(event == 0x0007)) goto labelFunc042F_0028;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc042F_0028:
	if (!(event == 0x0001)) goto labelFunc042F_0056;
	UI_item_say(0xFE9C, "@Excuse me, sir.@");
	0xFFD1->Func07D1();
	Func097F(0xFFD1, "@Do I know thee?@", 0x0005);
	UI_set_schedule_type(0xFFD1, 0x0003);
labelFunc042F_0056:
	if (!(event == 0x0009)) goto labelFunc042F_0A0E;
	UI_run_schedule(0xFFD1);
	UI_clear_item_say(0xFFD1);
	UI_show_npc_face0(0xFFD1, 0x0000);
	var0004 = UI_get_item_flag(0xFFD1, 0x001C);
	if (!(gflags[0x014D] == true)) goto labelFunc042F_00A5;
	message("\"Unless thou bearest word from my son, I will not bother with thee! Go back to Fedabiblio and tell him I have no business with the affairs of Mages!\"");
	say();
	if (!(gflags[0x00E7] == true)) goto labelFunc042F_00A1;
	UI_add_answer("letter");
	goto labelFunc042F_00A2;
labelFunc042F_00A1:
	abort;
labelFunc042F_00A2:
	goto labelFunc042F_0174;
labelFunc042F_00A5:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_00D2;
	if (!UI_is_pc_female()) goto labelFunc042F_00C3;
	message("\"I cannot understand why Monitorians prefer their women scarred.\"");
	say();
	message("\"Forgive me... I am forgetting myself. I am... ah...\"");
	say();
	message("\"I am Delin, Fawn's provisioner. How may I serve thee, lady Pikeman?\"");
	say();
	goto labelFunc042F_00CF;
labelFunc042F_00C3:
	message("\"I do not recall seeing thy face among the Fawn Tower garrison. Have I met thee? I regret I cannot remember...\"");
	say();
	message("\"I am Delin, Fawn's provisioner. Forgive me if thou dost already know me...\"");
	say();
	message("\"How may I serve thee, noble Pikeman?\"");
	say();
labelFunc042F_00CF:
	goto labelFunc042F_00F2;
labelFunc042F_00D2:
	if (!UI_is_pc_female()) goto labelFunc042F_00E4;
	message("\"Ah... art thou one of my daughter's friends? I cannot seem to recall thee...\"");
	say();
	message("\"I am Delin, Fawn's provisioner. Is there something I can do for thee?\"");
	say();
	goto labelFunc042F_00F2;
labelFunc042F_00E4:
	message("\"Hast thou need of my services, ");
	message(var0000);
	message("? Or art thou here to court my daughter? I fear I cannot recall...\"");
	say();
	message("\"I am Delin, provisioner of Fawn. In case we have not been introduced.\"");
	say();
labelFunc042F_00F2:
	UI_set_item_flag(0xFFD1, 0x001C);
	if (!(gflags[0x0195] && (!gflags[0x0292]))) goto labelFunc042F_010E;
	UI_add_answer("fur cap");
labelFunc042F_010E:
	if (!(gflags[0x0196] && (!gflags[0x0293]))) goto labelFunc042F_0120;
	UI_add_answer("slippers");
labelFunc042F_0120:
	if (!(UI_get_schedule_type(0xFFD1) == 0x0007)) goto labelFunc042F_0135;
	UI_add_answer("provisions");
labelFunc042F_0135:
	if (!(gflags[0x0157] == true)) goto labelFunc042F_0144;
	UI_add_answer("Moonshade");
labelFunc042F_0144:
	if (!gflags[0x0156]) goto labelFunc042F_0151;
	UI_add_answer("Batlin");
labelFunc042F_0151:
	if (!(gflags[0x00E7] == true)) goto labelFunc042F_0160;
	UI_add_answer("letter");
labelFunc042F_0160:
	UI_add_answer(["storms", "Goblins"]);
	UI_add_answer("bye");
labelFunc042F_0174:
	converse attend labelFunc042F_0A0D;
	case "fur cap" attend labelFunc042F_01BA:
	UI_remove_answer("fur cap");
	if (!Func097D(0xFE9B, 0x0001, 0x03EC, 0xFE99, 0x0004)) goto labelFunc042F_01AC;
	message("\"'Tis a nice fur cap, ");
	message(var0000);
	message(". If thou dost wish more, I fear thou wilt have to venture to Monitor thyself. Though I have forgotten the maker's name at this time...\"");
	say();
	message("\"I have not had a supply wagon bring arms or furs in a score of days. 'Tis the storms!\"");
	say();
	goto labelFunc042F_01BA;
labelFunc042F_01AC:
	message("\"I fear I have no more fur caps in stock, ");
	message(var0000);
	message(". I fear thou wilt have to venture to Monitor thyself, if thou dost wish one.\tThough I have forgotten the maker's name at this time...\"");
	say();
	message("\"I have not had a supply wagon bring arms or furs in a score of days. 'Tis the storms!\"");
	say();
labelFunc042F_01BA:
	case "slippers" attend labelFunc042F_020B:
	UI_remove_answer("slippers");
	if (!Func097D(0xFE9B, 0x0001, 0x024B, 0xFE99, 0x0005)) goto labelFunc042F_01EF;
	message("\"Fine slippers, though well-worn. Not something that thou wouldst find here, ");
	message(var0000);
	message(".\"");
	say();
	message("\"Such frail things would be quickly ruined by the cold and wet here in Fawn... Just like my poor Elissia...\"");
	say();
	goto labelFunc042F_01FD;
labelFunc042F_01EF:
	message("\"I have never carried slippers, ");
	message(var0000);
	message(", though my poor Elissia yearned for them so.\"");
	say();
	message("\"Such frail things would be quickly ruined by the cold and wet here in Fawn... Just like my poor Elissia...\"");
	say();
labelFunc042F_01FD:
	if (!(!var0001)) goto labelFunc042F_020B;
	UI_add_answer("Elissia");
labelFunc042F_020B:
	case "provisions" attend labelFunc042F_0221:
	message("\"I provide Fawn with adventuring supplies... Though I regret that my stock is not great at the moment. These storms have made the supply wagons from the other cities rare indeed.\" *\"What dost thou wish to purchase?\"");
	say();
	Func0818();
	UI_remove_answer("provisions");
labelFunc042F_0221:
	case "storms" attend labelFunc042F_0271:
	message("\"The storms... oh, yes. They're very interesting to watch. Though my daughter will not allow me to go outside where I can see better.\" *\"So many pretty colors, and such unusual results...\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_0253;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Father, thou WILT stay indoors when those storms come through town!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah... I suppose I must if thou sayest so, my dear.\"");
	say();
labelFunc042F_0253:
	UI_remove_answer("storms");
	UI_push_answers();
	UI_add_answer(["daughter", "colors", "results", "change subject"]);
labelFunc042F_0271:
	case "change subject" attend labelFunc042F_0281:
	UI_pop_answers();
	message("\"Of course. Um, what was it we were discussing...?\"");
	say();
labelFunc042F_0281:
	case "daughter" attend labelFunc042F_02CB:
	message("\"Thou hast met my daughter? I had forgotten, I'm sorry. Alyssand is very pretty, but she worries too much about me.\" *\"She doth not believe that I'd be all right without her.\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_02BD;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Thou dost need me, father. Thy business is much too complex for thee to run by thyself!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Ah, er... I can do fine without thee, my dear.\"");
	say();
	message("\"Hmmm... what were we discussing, ");
	message(var0000);
	message("?\"");
	say();
labelFunc042F_02BD:
	UI_remove_answer("daughter");
	UI_add_answer("Alyssand");
labelFunc042F_02CB:
	case "Alyssand" attend labelFunc042F_030E:
	message("\"Alyssand is around somewhere... Or at least she was. She never leaves me alone for long.\" *\"She hovers over me quite a bit since Keth disappeared... Alyssand's my daughter. Didst thou know?\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_0300;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"Father, that is my business!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Er... I am sorry, daughter.\"");
	say();
	goto labelFunc042F_0307;
labelFunc042F_0300:
	UI_add_answer("Keth");
labelFunc042F_0307:
	UI_remove_answer("Alyssand");
labelFunc042F_030E:
	case "Keth" attend labelFunc042F_0335:
	message("\"Hast thou seen Keth? If so, thou shouldst tell him that Alyssand still doth have the engagement ring... Or did have it... I think she said something about losing it.\" *\"'Tis not right to say that thou wilt marry someone and then not return...\"");
	say();
	UI_remove_answer("Keth");
	UI_push_answers();
	UI_add_answer(["engagement ring", "not return", "change subject"]);
labelFunc042F_0335:
	case "engagement ring" attend labelFunc042F_040D:
	message("\"Keth was passing proud of that ring. He ordered it specially from someone in Moonshade...\" \"Mine Elissia was from Moonshade. Oh, my poor Elissia... She's gone. Gone.\"");
	say();
	var0003 = Func0992(0xFFFE, "@Art thou daft, old man!@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_03B2;
	UI_set_conversation_slot(0x0000);
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc042F_03B2;
	var0005 = var0003;
labelFunc042F_0377:
	if (!(var0005 == var0003)) goto labelFunc042F_0394;
	var0005 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042F_0377;
labelFunc042F_0394:
	if (!(var0005 != 0xFE9C)) goto labelFunc042F_03B2;
	message("\"Elissia... Dear, sweet Elissia...\"");
	say();
	var0005 = Func0992(var0005, "@Be gentle with him. I fear he's a bit confused.@", 0x0000, false);
labelFunc042F_03B2:
	UI_set_conversation_slot(0x0000);
	message("\"I'm sorry... very sorry, ");
	message(var0000);
	message(". I still mourn the loss of my wife.\"");
	say();
	message("\"Now, thou didst ask about Alyssand's ring... I would call her and ask her to show it to thee, but Alyssand lost her ring not long ago.\"");
	say();
	UI_remove_answer("engagement ring");
	if (!Func097D(0xFE9B, 0x0001, 0x0377, 0xFE99, 0x0000)) goto labelFunc042F_03ED;
	UI_add_answer("ring");
	goto labelFunc042F_03F1;
labelFunc042F_03ED:
	message("\"I cannot know if the ring thou didst find is my daughter's unless I see it. Perhaps if thou dost bring it to me I can ascertain whether thou shouldst speak with Alyssand.\"");
	say();
labelFunc042F_03F1:
	if (!(!var0001)) goto labelFunc042F_03FF;
	UI_add_answer("Elissia");
labelFunc042F_03FF:
	if (!(!var0002)) goto labelFunc042F_040D;
	UI_add_answer("Moonshade");
labelFunc042F_040D:
	case "ring" attend labelFunc042F_0459:
	message("\"Why, it certainly doth look like it... Alyssand will be so happy!\"");
	say();
	message("\"I would reward thee for returning it to her, ");
	message(var0000);
	message(", but a storm stripped my cash box of all my funds the other day.\"");
	say();
	message("\"I went to open my shop the next morning and there was a bundle of food in place of the Filari Alyssand had put there the night before.\"");
	say();
	var0003 = Func0992(0x0001, "@That is what happened to our food!@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_0448;
	UI_set_conversation_slot(0x0000);
labelFunc042F_0448:
	Func08A9();
	UI_remove_answer("ring");
	UI_add_answer("Filari");
labelFunc042F_0459:
	case "Filari" attend labelFunc042F_04DF:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_0476;
	message("\"I had forgotten that thou wert from Monitor, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc042F_047A;
labelFunc042F_0476:
	message("\"Thou must be a stranger...\"");
	say();
labelFunc042F_047A:
	message("\"Filari are Fawn's currency... A small silver disk with a colored gem in the center.\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x03B4, 0xFE99, 0xFE99)) goto labelFunc042F_04D4;
	message("\"Yes... yes. Those are Filari.\"");
	say();
	message("\"That is as much as the storm took from me...\"");
	say();
	var0003 = Func0992(0x0001, "@These must be his coins then, Avatar!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!(UI_get_schedule_type(0xFFD1) == 0x0007)) goto labelFunc042F_04CA;
	message("\"I would accept thy money if thou dost wish to purchase something.\"");
	say();
	Func0818();
	goto labelFunc042F_04D4;
labelFunc042F_04CA:
	message("\"If thou wouldst come to my shop when I am open I wouldst gladly sell thee something, ");
	message(var0000);
	message("...\"");
	say();
labelFunc042F_04D4:
	gflags[0x0299] = true;
	UI_remove_answer("Filari");
labelFunc042F_04DF:
	case "not return" attend labelFunc042F_04F2:
	message("\"Of course Keth hath not returned! He would have come to see Alyssand the moment he set foot on shore.\" *\"No one hath seen him or his crewmates since one of those storms.\"");
	say();
	UI_remove_answer("not return");
labelFunc042F_04F2:
	case "colors" attend labelFunc042F_0505:
	message("\"Oh, yes! Thou shouldst watch one of these storms some time. The lightning is all different colors...\" *\"Of course, if thou strayest too far out to watch, thou mayest not enjoy it too much.\"");
	say();
	UI_remove_answer("colors");
labelFunc042F_0505:
	case "results" attend labelFunc042F_051F:
	message("\"Results? Results of what? What were we talking about...\" *\"Now I remember! The storms! There are two reasons these storms are fun to watch.\"");
	say();
	UI_remove_answer("results");
	UI_add_answer("two reasons");
labelFunc042F_051F:
	case "two reasons" attend labelFunc042F_05FF:
	message("\"Sometimes 'tis FLASH!, and something thou wert standing across from is gone.\"");
	say();
	message("\"But sometimes 'tis FLASH!, and something thou wert watching is a big, orange pumpkin.\"");
	say();
	message("\"I like the last one best... 'Tis fun to guess what will be there after the flash.\"");
	say();
	var0003 = Func0992(0xFFFF, 0x0000, 0x0000, false);
	if (!((var0003 != 0xFFFD) && UI_npc_nearby(0xFFFD))) goto labelFunc042F_056F;
	var0003 = Func0992(var0003, "@Sounds like he doth have a sense of humor like thine, Iolo!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	goto labelFunc042F_0590;
labelFunc042F_056F:
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_0590;
	var0003 = Func0992(var0003, "@This man is quite jovial!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
labelFunc042F_0590:
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_05F8;
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0002)) goto labelFunc042F_05F1;
	var0005 = var0003;
labelFunc042F_05AF:
	if (!(var0005 == var0003)) goto labelFunc042F_05CC;
	var0005 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042F_05AF;
labelFunc042F_05CC:
	if (!(var0005 != 0xFE9C)) goto labelFunc042F_05F1;
	UI_set_conversation_slot(0x0000);
	message("\"'Tis such an incredible sight. Ho ho hee!\"");
	say();
	var0005 = Func0992(var0005, "@'Tis not very funny if what was hit was a person!@", 0x0000, false);
labelFunc042F_05F1:
	UI_set_conversation_slot(0x0000);
labelFunc042F_05F8:
	UI_remove_answer("two reasons");
labelFunc042F_05FF:
	case "Goblins" attend labelFunc042F_064F:
	message("\"Why wouldst thou want to talk about them? The storms are much more fun...\"");
	say();
	var0003 = Func0992(0xFFFE, "@We do not have time for this!@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_0630;
	UI_set_conversation_slot(0x0000);
	message("\"Oh, all right! Don't be testy!\"");
	say();
labelFunc042F_0630:
	message("\"Thou dost not need to scowl so. Everyone is so serious these days! 'Tis not healthy, thou knowest.\" *\"The Goblins are large, mean and hateful. They prefer to eat humans and they make it unsafe to travel. But I never travel since they took away my son, Freli...\"");
	say();
	UI_remove_answer("Goblins");
	UI_push_answers();
	UI_add_answer(["unsafe", "Freli", "change subject"]);
labelFunc042F_064F:
	case "unsafe" attend labelFunc042F_06D3:
	message("\"Nothing is safe... Not even life. I lost my dear Elissia after childbirth...\"");
	say();
	var0003 = "friends are";
	if (!(UI_get_array_size(UI_get_party_list()) < 0x0003)) goto labelFunc042F_0676;
	var0003 = "friend is";
labelFunc042F_0676:
	var0003 = Func0992(0xFFFD, ("@If thou couldst return to the subject at hand, " + ("Delin, we would be most grateful.@" & "@I fear that my <Check> becoming a bit impatient.@")), 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc042F_069F;
	UI_set_conversation_slot(0x0000);
labelFunc042F_069F:
	message("\"I wandered off again, didn't I? What was I saying...?\" *\"The Goblins have killed our healer, and now we have to make do with a horticulturist. Imagine that! And, of course, the Goblins have attacked the Fawn Tower.\"");
	say();
	UI_remove_answer("unsafe");
	UI_add_answer("Fawn Tower");
	UI_push_answers();
	UI_add_answer(["healer", "horticulturist", "change subject"]);
	if (!(!var0001)) goto labelFunc042F_06D3;
	UI_add_answer("Elissia");
labelFunc042F_06D3:
	case "Elissia" attend labelFunc042F_0778:
	var0001 = true;
	message("\"Oh, she was a true beauty, I tell thee! Soft golden hair and the brightest eyes that thou hast seen.\" *\"Though she came from Moonshade, no one had cause to fear her. She had not a drop of magic...\"");
	say();
	message("\"Other than her smile.\"");
	say();
	if (!(UI_npc_nearby(0xFFFD) && (UI_get_array_size(UI_get_party_list()) > 0x0002))) goto labelFunc042F_0763;
	var0003 = 0xFFFD;
labelFunc042F_0704:
	if (!(var0003 == 0xFFFD)) goto labelFunc042F_0721;
	var0003 = Func0992(0x0001, 0x0000, 0x0000, false);
	goto labelFunc042F_0704;
labelFunc042F_0721:
	UI_show_npc_face1(var0003, 0x0000);
	message("\"Our friend Iolo shares thy grief, milord. His wife is lost somewhere in these lands.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"For thy sake, I hope that she doth live, stranger Iolo.\"");
	say();
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"If Gwenno were lost from me forever, perhaps I too would be a little confused.\"");
	say();
	message("\"Condolences to thee, Delin, and apologies if we have been unfeeling.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"They say that I shall feel better soon...\"");
	say();
	message("\"But I don't believe it.\"");
	say();
labelFunc042F_0763:
	if (!(!var0002)) goto labelFunc042F_0771;
	UI_add_answer("Moonshade");
labelFunc042F_0771:
	UI_remove_answer("Elissia");
labelFunc042F_0778:
	case "healer" attend labelFunc042F_0792:
	message("\"His name was, ah... Seth, I believe. Good healer, but he had a nasty temper.\" *\"I am certain that the Goblins found him a bitter meal. Ha!\"");
	say();
	UI_remove_answer("healer");
	UI_add_answer("Seth");
labelFunc042F_0792:
	case "Seth" attend labelFunc042F_07A5:
	message("\"Seth? Oh, the healer! Didst thou know him, too?\" *\"Always insisted on going herb gathering alone... 'Tis what finally killed him. Wouldn't take any guards along with him, even after the Goblin attacks increased.\"");
	say();
	UI_remove_answer("Seth");
labelFunc042F_07A5:
	case "horticulturist" attend labelFunc042F_07BF:
	message("\"Did I say something about a horticulturist? I thought we were talking about healers...\" *\"When Seth was killed, Delphynia took his place. We could not obtain a replacement from anywhere because of the storms.\"");
	say();
	UI_remove_answer("horticulturist");
	UI_add_answer("Delphynia");
labelFunc042F_07BF:
	case "Delphynia" attend labelFunc042F_07D6:
	message("\"Delphynia is a fine horticulturist, to be sure. But she hath had little or no training as a healer.\"");
	say();
	message("\"And it doth not seem right having a woman as a healer. Women should concern themselves with the delights of life, not the sorrows.\"");
	say();
	UI_remove_answer("Delphynia");
labelFunc042F_07D6:
	case "Fawn Tower" attend labelFunc042F_0821:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_0800;
	message("\"But then thou knowest all about Goblin treachery, being a Pikeman and all.\"");
	say();
	if (!(gflags[0x014E] == true)) goto labelFunc042F_07F9;
	message("\"Everyone is so relieved that thy fine Pikemen companions have retaken the Tower from Pomdirgun. But they do not understand that it is only a matter of time before we die... Admittedly though, I will grant that most any death would be better than becoming a Goblin's supper.\"");
	say();
	goto labelFunc042F_07FD;
labelFunc042F_07F9:
	message("\"Everyone is so worried, now that Pomdirgun hath taken the Tower from thy Pikemen companions. But they do not understand that it is only a matter of time before we die... But I intend to try my luck with the storms, rather than becoming a Goblin's supper.\"");
	say();
labelFunc042F_07FD:
	goto labelFunc042F_0813;
labelFunc042F_0800:
	if (!(gflags[0x014E] == true)) goto labelFunc042F_080F;
	message("\"Everyone is so relieved that the Tower hath been retaken from Pomdirgun. But they do not understand that it is only a matter of time before we die... Admittedly though, I will grant that most any death would be better than becoming a Goblin's supper.\"");
	say();
	goto labelFunc042F_0813;
labelFunc042F_080F:
	message("\"Everyone is so worried, now that Pomdirgun holds the Tower.\" ~\"But they do not understand that it is only a matter of time before we die... But I intend to try my luck with the storms, rather than becoming a Goblin's supper.\"");
	say();
labelFunc042F_0813:
	UI_remove_answer("Fawn Tower");
	UI_add_answer("Pomdirgun");
labelFunc042F_0821:
	case "Pomdirgun" attend labelFunc042F_0838:
	message("\"I am certain that Pomdirgun would be very disappointed to learn that thou dost not know of him. He hath gone to great lengths to be sure that we in Fawn know the name of the Goblin leader that will bring us to our knees...\"");
	say();
	message("\"...Or his stewpot.\"");
	say();
	UI_remove_answer("Pomdirgun");
labelFunc042F_0838:
	case "Freli" attend labelFunc042F_0864:
	message("\"Freli... Didst thou say Freli? Hast thou seen him? I have not seen him since the Magister took him away.\" *\"I would give anything to be able to see him again, or to have some word from him. Elissia died bringing him into this world... He is all that I have to remember her by, except for Alyssand of course. But Freli favors his mother more.\"");
	say();
	gflags[0x018D] = true;
	UI_remove_answer("Freli");
	UI_add_answer("Magister");
	if (!(!var0001)) goto labelFunc042F_0864;
	UI_add_answer("Elissia");
labelFunc042F_0864:
	case "Magister" attend labelFunc042F_08A7:
	UI_remove_answer("Magister");
	message("\"The Magister comes like a thief in the night, to test the children of the land for magic talent. If a Mage Child is discovered, the Magister steals the child.\"");
	say();
	message("\"Just as he stole my little Freli...\"");
	say();
	message("\"Thou dost not work for the Magister, dost thou?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc042F_089F;
	message("\"Thou hast no cause to spy on me! I have not seen or heard from my son since he left here! I am not responsible for anything he may have done!\" *\"Tell thine employer that he took Freli, let him be responsible!\"");
	say();
	gflags[0x014D] = true;
	Func097F(0xFFD1, "@Spy not on me!@", 0x0000);
	abort;
	goto labelFunc042F_08A7;
labelFunc042F_089F:
	message("\"Good! Because the Magister hath no call to spy on me.\"");
	say();
	message("\"I have had no contact with Freli since he was taken away. No mortal can win in a struggle against wizards...\"");
	say();
labelFunc042F_08A7:
	case "Moonshade" attend labelFunc042F_08CC:
	var0002 = true;
	message("\"Moonshade is where my wife was from... She was the most patient of women.\" *\"Moonshade is ruled by Mages. To them, if thou art not a Mage, thou art nothing. The Mages shed no tears when mine Elissia left the town. She was nothing in their eyes... But everything in mine.\"");
	say();
	UI_remove_answer("Moonshade");
	if (!(!var0001)) goto labelFunc042F_08CC;
	UI_add_answer("Elissia");
labelFunc042F_08CC:
	case "Batlin" attend labelFunc042F_0913:
	message("\"Bats? What bats?\"");
	say();
	var0003 = Func0992(0x0001, "@Not bats! B-A-T-L-I-N!@", "@Not bats! B-A-T-L-I-N!@", false);
	UI_set_conversation_slot(0x0000);
	message("\"No need to shout. I'm not deaf.\"");
	say();
	message("\"Batlin... ah, I remember he came here asking about some sort of rock sculpture or something. Black rock...\"");
	say();
	message("\"I told him I am a simple merchant. I do not carry such luxuries. I directed him to Monitor. There is a sculptor there.\"");
	say();
	UI_remove_answer("Batlin");
	UI_push_answers();
	UI_add_answer(["Monitor", "change subject"]);
labelFunc042F_0913:
	case "Monitor" attend labelFunc042F_093F:
	if (!(gflags[0x003E] == true)) goto labelFunc042F_0927;
	message("\"And people accuse me of being forgetful! Thou art a Knight, and doth ask me about Monitor?\"");
	say();
labelFunc042F_0927:
	message("\"Monitor is south of us, ");
	message(var0000);
	message(", on the coast. Their soldiers, the Pikemen, act as guards for the roads, and as highwaymen for Monitor's coffers...\"");
	say();
	UI_remove_answer("Monitor");
	UI_add_answer("highwaymen");
labelFunc042F_093F:
	case "highwaymen" attend labelFunc042F_0952:
	message("\"Yes, highwaymen! They charge each traveller and merchant who would make use of the road they guard!\" *\"An exorbitant amount doth go to Monitor every year, I'm certain. And then we must feed them in their Tower, and offer them our goods at a discount!\"");
	say();
	UI_remove_answer("highwaymen");
labelFunc042F_0952:
	case "letter" attend labelFunc042F_09DD:
	UI_remove_answer("letter");
	message("\"A letter from Freli! Oh, what joy!\"");
	say();
	if (!UI_remove_party_items(0x0001, 0x031D, 0x0046, 0x0000, 0x0000)) goto labelFunc042F_09C2;
	message("\"Let me have it! Alyssand must hear of this.\"");
	say();
	if (!Func0942(0xFFD2)) goto labelFunc042F_09A5;
	UI_show_npc_face1(0xFFD2, 0x0000);
	message("\"I am here, father! Tell me how Freli fares. Hath he become a Mage?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"A moment, a moment... It will take me a moment. His writing is terrible!\"");
	say();
labelFunc042F_09A5:
	message("\"Oh, for this piece of good work, ");
	message(var0000);
	message(", thou must be rewarded!\"");
	say();
	message("\"Let me see... ah, yes! How wouldst thou like a discount on anything within the store? Yes, yes... half my normal price -- but just this once!\"");
	say();
	gflags[0x00E7] = false;
	gflags[0x01A1] = true;
	gflags[0x014D] = false;
	goto labelFunc042F_09DD;
labelFunc042F_09C2:
	message("\"Thou art having fun with me, stranger! I see no letter.\"");
	say();
	Func097F(0xFFD1, "@Out with ye!@", 0x0000);
	UI_set_schedule_type(0xFFD1, 0x0014);
	abort;
labelFunc042F_09DD:
	case "bye" attend labelFunc042F_0A0A:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Thanks for thine help!@", 0x0000);
	Func097F(0xFFD1, "@Come back any time!@", 0x0005);
	Func08AA();
	goto labelFunc042F_0A0D;
labelFunc042F_0A0A:
	goto labelFunc042F_0174;
labelFunc042F_0A0D:
	endconv;
labelFunc042F_0A0E:
	return;
}


