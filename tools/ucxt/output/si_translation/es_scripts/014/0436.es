#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0436 object#(0x436) ()
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

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFFD);
	var0004 = UI_find_nearby(item, 0x00F9, 0x0028, 0x0000);
	if (!(event == 0x0007)) goto labelFunc0436_0047;
	var0005 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0436_0047:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFFCA) == 0x0007))) goto labelFunc0436_00B5;
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0436_00B5;
	var0006 = ["@I do not deserve this!@", "@Save me, please!@", "@Such filth!@", "@I wish I had a pillow...@", "@Damn Alyssand!@", "@Curse The Fellowship!@"];
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_009E;
	var0006 = (var0006 & ("@Be still, Voldin.@" & ("@Get away from me...@" & "@Thy dreams are dust.@")));
labelFunc0436_009E:
	Func097F(0xFFCA, var0006[UI_get_random(UI_get_array_size(var0006))], 0x0000);
labelFunc0436_00B5:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFCA) != 0x000F))) goto labelFunc0436_014C;
	0xFFCA->Func07D1();
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0436_011E;
	UI_item_say(0xFE9C, "@Surprise!@");
	UI_set_schedule_type(0xFFCA, 0x000F);
	Func097F(0xFFCA, "@Hello, there...!@", 0x0002);
	0xFFCA->Func07D2();
	var0005 = UI_delayed_execute_usecode_array(0xFFCA, [(byte)0x23, (byte)0x55, 0x0436], 0x0007);
	goto labelFunc0436_014C;
labelFunc0436_011E:
	UI_item_say(0xFE9C, "@Greetings, noble lady!@");
	0xFFCA->Func07D1();
	Func097F(0xFFCA, (("@At thy service, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFCA, 0x0003);
labelFunc0436_014C:
	if (!(event == 0x0002)) goto labelFunc0436_0189;
	UI_run_schedule(0xFFCA);
	UI_clear_item_say(0xFFCA);
	UI_show_npc_face0(0xFFCA, 0x0000);
	message("\"I am so grateful that thou hast come to visit me, ");
	message(var0002);
	message("! Everyone else hath forgotten me. I am so lonely here...\"");
	say();
	UI_add_answer(["plot", "Voldin", "lonely"]);
	goto labelFunc0436_02BC;
labelFunc0436_0189:
	if (!(event == 0x0009)) goto labelFunc0436_0679;
	UI_run_schedule(0xFFCA);
	UI_clear_item_say(0xFFCA);
	UI_show_npc_face0(0xFFCA, 0x0000);
	var0007 = UI_get_item_flag(0xFFCA, 0x001C);
	if (!(gflags[0x0171] || (gflags[0x0170] && (!gflags[0x0172])))) goto labelFunc0436_01DE;
	message("\"Thou dost make my spine shiver, thou who dost associate with the enemies of Beauty!");
	say();
	message("\"I beg thee to depart...\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFFCA, "@Depart from me!@", 0x0000);
	abort;
labelFunc0436_01DE:
	if (!(var0007 == false)) goto labelFunc0436_0262;
	if (!(gflags[0x003E] == true)) goto labelFunc0436_0223;
	if (!(var0001 == true)) goto labelFunc0436_0218;
	message("\"One of Monitor's famed Pikemen! I am Kylista, Priestess of Beauty.\"");
	say();
	message("\"I have always thought it daring of Monitorian women to wear a tattoo. Tell me, do the Monitorian men find this alluring?\"");
	say();
	var0008 = Func0955();
	if (!var0008) goto labelFunc0436_0211;
	message("\"Most men seem to find me attractive... Except for the Pikemen. I had wondered why. Thank thee for the enlightening information.\"");
	say();
	goto labelFunc0436_0215;
labelFunc0436_0211:
	message("\"Perhaps the sight is too common to affect them. I am certain that Fawn males will not be as... unaffected, shall we say.\"");
	say();
labelFunc0436_0215:
	goto labelFunc0436_0220;
labelFunc0436_0218:
	message("\"One of Monitor's famed Pikemen! I am Kylista, Priestess of Beauty.\"");
	say();
	message("\"What a pleasure to meet one who is brave as well as handsome.\"");
	say();
labelFunc0436_0220:
	goto labelFunc0436_0255;
labelFunc0436_0223:
	if (!(var0001 == true)) goto labelFunc0436_0236;
	message("\"Welcome to Fawn. I am Kylista, Priestess of Beauty.\"");
	say();
	message("\"Mayest thou walk in Beauty.\"");
	say();
	goto labelFunc0436_0255;
labelFunc0436_0236:
	message("\"Welcome to Fawn, the city of Beauty. I am Kylista, Priestess of Beauty.\"");
	say();
	message("\"Hast thou come for instruction in the path of Beauty?\"");
	say();
	var0009 = Func0955();
	if (!var0009) goto labelFunc0436_0251;
	message("\"Hmmm... Perhaps we could arrange private instruction...\"");
	say();
	goto labelFunc0436_0255;
labelFunc0436_0251:
	message("\"A pity. Private instruction is available.\"");
	say();
labelFunc0436_0255:
	UI_set_item_flag(0xFFCA, 0x001C);
	goto labelFunc0436_0290;
labelFunc0436_0262:
	if (!(gflags[0x015E] == true)) goto labelFunc0436_0286;
	UI_set_schedule_type(0xFFCA, 0x0000);
	UI_set_attack_mode(0xFFCA, 0x0007);
	message("\"Thou hast found me out! The Oracle is a fraud!\"");
	say();
	abort;
	goto labelFunc0436_0290;
labelFunc0436_0286:
	message("\"Thou dost honor us with thy presence, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0436_0290:
	UI_add_answer(["goblins", "storms", "Oracle", "revelations", "bye"]);
	if (!((gflags[0x0282] || gflags[0x009F]) && (!gflags[0x0294]))) goto labelFunc0436_02BC;
	UI_add_answer("white breastplate");
labelFunc0436_02BC:
	UI_add_answer("bye");
labelFunc0436_02C3:
	converse attend labelFunc0436_0678;
	case "plot" attend labelFunc0436_0308:
	UI_remove_answer("plot");
	message("\"I see now that Captain Voldin and his men did take advantage of me, through the deception called the Oracle.\"");
	say();
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_0300;
	UI_show_npc_face1(0xFFCD, 0x0000);
	message("\"Of course we did, Priestess. Men have always had the advantage over the weaker sex...\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Be still, Voldin. Thou hast been brought low, even as I have.\"");
	say();
labelFunc0436_0300:
	message("\"How could I have been so naive? I was never part of their plans, but only a tool.\"");
	say();
	message("\"Perhaps Lady Yelinda will spare my life, when she understands my role -- I, too, was a victim!\"");
	say();
labelFunc0436_0308:
	case "lonely" attend labelFunc0436_0359:
	UI_remove_answer("lonely");
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_0325;
	message("\"Voldin doth not count -- he is an animal. What I need is companionship...\"");
	say();
labelFunc0436_0325:
	if (!UI_is_pc_female()) goto labelFunc0436_033D;
	message("\"Come and visit me often, ");
	message(var0002);
	message(". I am touched that thou didst come down into this dungeon to visit me.\"");
	say();
	message("\"Perhaps we could become friends.\"");
	say();
	goto labelFunc0436_0359;
labelFunc0436_033D:
	message("\"Look at me, ");
	message(var0002);
	message(". I am a woman in the full bloom of my youth. Such beauty doth not deserve to dwell in the squalor of a jail cell...\"");
	say();
	message("\"They say that thou hast been making friends with young Alyssand, the weaver. I think we, too, could be friends.\"");
	say();
	message("\"And I'm the kind of friend who could keep thee warm on a cold winter's night. Not like that thin-framed weaver wench.\"");
	say();
	message("\"Think of me, ");
	message(var0002);
	message(". I'll be thinking of thee...\"");
	say();
labelFunc0436_0359:
	case "goblins" attend labelFunc0436_0373:
	UI_remove_answer("goblins");
	message("\"The very antithesis of Beauty! Goblins are base savages with no appreciation of Beauty and no grasp of Beauty's truth.\"");
	say();
	UI_add_answer("Beauty's truth");
labelFunc0436_0373:
	case "Beauty's truth" attend labelFunc0436_0391:
	UI_remove_answer("Beauty's truth");
	message("\"All things good possess an innate Beauty that attracts all living things.\"");
	say();
	message("\"To goblins, who are vile, ugly monsters, Beauty is a lie. To Pomdirgun, Beauty is something to be exterminated, not cherished.\"");
	say();
	UI_add_answer("Pomdirgun");
labelFunc0436_0391:
	case "Pomdirgun" attend labelFunc0436_03A8:
	UI_remove_answer("Pomdirgun");
	message("\"Pomdirgun is the epitome of all repulsive things. He hath risen to unite the goblins against all things good and Beautiful.\"");
	say();
	message("\"The heavens have tired of our wandering from Beauty's truth. They have sent Pomdirgun to destroy those that fall short of the mark.\"");
	say();
labelFunc0436_03A8:
	case "storms" attend labelFunc0436_03CA:
	UI_remove_answer("storms");
	message("\"Another sign that the heavens are displeased with our associations with false prophets!\"");
	say();
	message("\"We allowed corruption to enter our city, to visit the very heart of Beauty. Some even encouraged its growth. Now we must pay for our transgressions.\"");
	say();
	message("\"Once we have been brought low enough to see only Beauty, the storms will stop and Fawn will once again prosper. But while all traces of untrue beliefs linger, the punishment will remain.\"");
	say();
	UI_add_answer("false prophets");
labelFunc0436_03CA:
	case "false prophets" attend labelFunc0436_0417:
	UI_remove_answer("false prophets");
	message("\"Those who call themselves Britannians -- the sailors that dwell outside the city gates to the northeast -- are false prophets!\"");
	say();
	message("\"We thought them poor, confused seamen worthy of our embrace. But we were fooled! All they brought were lies!\"");
	say();
	message("\"The one they call Leon denounced Beauty as a mere shadow of The Fellowship's truth! And then -- then -- did the storms come! To smite those who would utter such blasphemy!\"");
	say();
	message("\"The storms will not end until the blight of the blasphemers' existence hath been wiped from Beauty's face!\"");
	say();
	if (!(var0003 == true)) goto labelFunc0436_040A;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"I would say that she feels rather strongly about this, Avatar.\tBut what she is proposing to stop the storms seems a bit extreme.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc0436_040A:
	UI_add_answer(["Leon", "Fellowship"]);
labelFunc0436_0417:
	case "Leon" attend labelFunc0436_0435:
	UI_remove_answer("Leon");
	message("\"Leon seeks to divert unsuspecting people from Beauty's path. He is the one that hath brought the anger of the heavens down upon us!\"");
	say();
	message("\"Lady Yelinda should have ordered him executed for the woes that he hath brought upon our city!\"");
	say();
	UI_add_answer("Lady Yelinda");
labelFunc0436_0435:
	case "Lady Yelinda" attend labelFunc0436_0457:
	UI_remove_answer("Lady Yelinda");
	message("\"Lady Yelinda, honor to her, is the ruler of Fawn.\"");
	say();
	message("\"I recommended that she have these foreign blasphemers killed -- let their blood wash away the evil they have wrought. But Lady Yelinda is a soft-hearted woman who doth not know the harshness of the heavens' anger.\"");
	say();
	message("\"I fear that the Great Captains urged her to leniency in favor of their common ties with the sea.\"");
	say();
	UI_add_answer("Great Captains");
labelFunc0436_0457:
	case "Great Captains" attend labelFunc0436_047E:
	UI_remove_answer("Great Captains");
	message("\"The Great Captains are advisors to Lady Yelinda. They ensure that Lady Yelinda is not overtaxed with the tedious daily problems of ruling the city.\"");
	say();
	message("\"Joth and Garth allowed themselves to be swayed by feelings of kinship with these foreign sailors. Only Voldin recognized their true danger.\"");
	say();
	UI_add_answer(["Joth", "Garth", "Voldin"]);
labelFunc0436_047E:
	case "Joth" attend labelFunc0436_049C:
	UI_remove_answer("Joth");
	message("\"Joth is a good man, with a fine sense of what needs to be done to keep the fleets in good order.\"");
	say();
	message("\"He is not, I fear, a good advisor when it comes to political matters. In fact, Zulith would be better in that respect.\"");
	say();
	UI_add_answer("Zulith");
labelFunc0436_049C:
	case "Zulith" attend labelFunc0436_04B3:
	UI_remove_answer("Zulith");
	message("\"Zulith is Lady Yelinda's secretary. He schedules her audiences and acts as a messenger between her Ladyship and the Great Captains.\"");
	say();
	message("\"His official title is Chancellor, I believe.\"");
	say();
labelFunc0436_04B3:
	case "Garth" attend labelFunc0436_04CA:
	UI_remove_answer("Garth");
	message("\"Garth is no more than a boy! He blows with the wind of anything that catches his fancy, most notably young ladies.\"");
	say();
	message("\"Garth is of little use in all but representing the interests of the merchant captains.\"");
	say();
labelFunc0436_04CA:
	case "Voldin" attend labelFunc0436_053C:
	UI_remove_answer("Voldin");
	if (!((gflags[0x0170] && gflags[0x0172]) && (!gflags[0x016E]))) goto labelFunc0436_0534;
	if (!UI_get_item_flag(0xFFCD, 0x0004)) goto labelFunc0436_0500;
	message("\"He was an evil man, Avatar. Captain Voldin forced me to do his bidding, beating me when I refused!\"");
	say();
	message("\"I am glad that thou didst kill him -- glad!\"");
	say();
	goto labelFunc0436_0531;
labelFunc0436_0500:
	message("\"The whole scheme was his -- not mine! I did only what I was told. He forced me to serve him...\"");
	say();
	if (!UI_npc_nearby(0xFFCD)) goto labelFunc0436_0531;
	UI_show_npc_face1(0xFFCD, 0x0000);
	message("\"Liar! Thou didst enjoy thy role as Priestess, using thy sensual powers over men.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Oh, ");
	message(var0002);
	message("! Thou must rescue me from the presence of this evil man!\"");
	say();
labelFunc0436_0531:
	goto labelFunc0436_053C;
labelFunc0436_0534:
	message("\"Now Voldin is truly what Fawn needs as an advisor! His record of service on land and sea is impeccable.\"");
	say();
	message("\"I fear it takes all his expertise to explain most situations to his companions. Fawn would fare much better if Voldin were Lady Yelinda's only advisor.\"");
	say();
labelFunc0436_053C:
	case "Fellowship" attend labelFunc0436_0553:
	UI_remove_answer("Fellowship");
	message("\"Lies! Lies! Simplistic half truths meant to snare the unwitting and twist Beauty's truth!\"");
	say();
	message("\"How can any person tell heaven's will without benefit of divine guidance? The deluded fools have not heard the voice of the Oracle or felt the heavens' anger.\"");
	say();
labelFunc0436_0553:
	case "Oracle" attend labelFunc0436_056E:
	UI_remove_answer("Oracle");
	message("\"The Oracle was commissioned by Lady Fawn, many years ago, as an instrument to speak the heavens' truths.\"");
	say();
	message("\"The Mages of Old Sosaria labored for nearly a year before the task was done. The revealed wonder was the Oracle.\"");
	say();
	message("\"As Priestess of Beauty, I have the power to call forth a revelation from the Oracle. In times past, before the storms began, people came from all around to hear the Oracle's divine words.\"");
	say();
labelFunc0436_056E:
	case "revelations" attend labelFunc0436_0585:
	message("\"The revelations are truths of heaven filtered through a mouth of stone!\"");
	say();
	message("\"It is a pity that thou wilt not hear a revelation... I have decided to close the rituals to all outsiders. We cannot be too careful, after what happened with the false prophets.\"");
	say();
	UI_remove_answer("revelations");
labelFunc0436_0585:
	case "white breastplate" attend labelFunc0436_0640:
	UI_remove_answer("white breastplate");
	gflags[0x0294] = true;
	if (!Func097D(0xFE9B, 0x0001, 0x01A3, 0xFE99, 0x0000)) goto labelFunc0436_0613;
	message("\"Thou hast the Armour of Beauty! Oh, what a sign from the heavens!\"");
	say();
	message("\"Return it to me... Perhaps the heavens shall once again smile upon Fawn.\"");
	say();
	if (!(Func0955() == true)) goto labelFunc0436_060C;
	var000A = Func0992(0x0001, "@But what about thine own armour, Avatar?@", "@But what of mine own armour?@", false);
	if (!(var000A != 0xFE9C)) goto labelFunc0436_05DE;
	UI_set_conversation_slot(0x0000);
labelFunc0436_05DE:
	message("\"Oh, was that strange armour that appeared in my bedchamber thine?\"");
	say();
	message("\"I cannot recall what I did with it. Perhaps I still have it... Perhaps thou wilt come by some evening and I will look for it.\"");
	say();
	var000B = Func0996(0xFE9B, 0xFFCA, 0x0001, 0x01A3, 0xFE99, 0x0000, false);
	message("\"I thank thee, ");
	message(var0000);
	message("!\"");
	say();
	goto labelFunc0436_0610;
labelFunc0436_060C:
	message("\"Why dost thou not give it to me?\"");
	say();
labelFunc0436_0610:
	goto labelFunc0436_0640;
labelFunc0436_0613:
	message("\"Thou hast seen the Armour of Beauty! Oh, will the heavens never smile upon Fawn again?. I would that thou hadst brought it with thee.\"");
	say();
	var000A = Func0992(0x0001, "@But what about thine own armour, Avatar?@", "@But what of mine own armour?@", false);
	if (!(var000A != 0xFE9C)) goto labelFunc0436_0638;
	UI_set_conversation_slot(0x0000);
labelFunc0436_0638:
	message("\"Oh, was that strange armour that appeared in my bedchamber thine?\"");
	say();
	message("\"I cannot recall what I did with it. Perhaps I still have it... Perhaps thou wilt come by some evening and I will look for it.\"");
	say();
labelFunc0436_0640:
	case "bye" attend labelFunc0436_0675:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Farewell.@", 0x0000);
	Func097F(0xFFCA, (("@Walk in Beauty, " + var0002) + ".@"), 0x0002);
	Func08AA();
	goto labelFunc0436_0678;
labelFunc0436_0675:
	goto labelFunc0436_02C3;
labelFunc0436_0678:
	endconv;
labelFunc0436_0679:
	return;
}


