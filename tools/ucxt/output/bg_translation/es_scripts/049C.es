#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func049C object#(0x49C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc049C_02BF;
	UI_show_npc_face(0xFF64, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = UI_part_of_day();
	var0003 = false;
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!(var0002 == 0x0007)) goto labelFunc049C_0065;
	var0004 = Func08FC(0xFF64, 0xFF06);
	if (!var0004) goto labelFunc049C_0060;
	message("Glaring, she puts a finger over her lips, indicating that you should be silent.*");
	say();
	abort;
	goto labelFunc049C_0065;
labelFunc049C_0060:
	message("\"I cannot talk now, I must hurry to the Fellowship meeting.\"*");
	say();
	abort;
labelFunc049C_0065:
	if (!(!gflags[0x01FD])) goto labelFunc049C_0077;
	message("You see a woman with a very serious look about her.");
	say();
	gflags[0x01FD] = true;
	goto labelFunc049C_0081;
labelFunc049C_0077:
	message("\"How may I be of assistance, ");
	message(var0000);
	message("?\"");
	say();
labelFunc049C_0081:
	if (!gflags[0x020E]) goto labelFunc049C_008E;
	UI_add_answer("liqueur");
labelFunc049C_008E:
	converse attend labelFunc049C_02A1;
	case "name" attend labelFunc049C_00A4:
	message("She gives you a suspicious look. \"My name is Balayna.\"");
	say();
	UI_remove_answer("name");
labelFunc049C_00A4:
	case "job" attend labelFunc049C_00BD:
	message("\"I am the clerk for the Moonglow branch of The Fellowship.\"");
	say();
	UI_add_answer(["clerk", "Moonglow"]);
labelFunc049C_00BD:
	case "clerk" attend labelFunc049C_00D7:
	message("\"It is my job to keep records during the meetings, and to administrate the decisions of this branch.\"");
	say();
	UI_remove_answer("clerk");
	UI_add_answer("meetings");
labelFunc049C_00D7:
	case "liqueur" attend labelFunc049C_011B:
	var0005 = UI_remove_party_items(0x0001, 0x02ED, 0xFE99, 0x001E, false);
	if (!var0005) goto labelFunc049C_0110;
	message("\"What's this?\" she asks, taking the vial from you. She opens it up and sniffs. \"Very good quality. I wonder why he...\" she clutches her throat and gasps. You notice a wispy smoke rise from the top of the vial now spilling out of her hands. Choking, she falls to the ground, and dies.*");
	say();
	gflags[0x020D] = true;
	UI_kill_npc(UI_get_npc_object(0xFF64));
	abort;
	goto labelFunc049C_011B;
labelFunc049C_0110:
	message("\"I am afraid I must first see what thou art referring to before I can answer thy question.\"");
	say();
	UI_remove_answer("liqueur");
labelFunc049C_011B:
	case "meetings" attend labelFunc049C_014D:
	var0006 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049C_0134;
	message("She stares at you suspiciously.");
	say();
labelFunc049C_0134:
	message("\"We have our meetings at 9 at night -- the customary time. After Rankin's lecture, we all discuss the wonderful aspects of our life that have been enhanced by The Fellowship.\"");
	say();
	if (!(!var0003)) goto labelFunc049C_0146;
	UI_add_answer("Rankin");
labelFunc049C_0146:
	UI_remove_answer("meetings");
labelFunc049C_014D:
	case "Moonglow" attend labelFunc049C_016D:
	message("\"This seemed to be an... appropriate place to start up a branch. There are many good citizens here in Moonglow.\"");
	say();
	UI_add_answer(["good", "citizens"]);
	UI_remove_answer("Moonglow");
labelFunc049C_016D:
	case "good" attend labelFunc049C_018D:
	message("She appears surprised at the statement. \"Well, I believe that many of the people are of strong mind and character. They are just the kind of people The Fellowship needs to go out and spread guidance and prosperity throughout Britannia.\"");
	say();
	UI_remove_answer("good");
	UI_add_answer(["guidance", "prosperity"]);
labelFunc049C_018D:
	case "guidance" attend labelFunc049C_01A0:
	message("\"Many of the people lack the discipline required to reach their highest potential.\"");
	say();
	UI_remove_answer("guidance");
labelFunc049C_01A0:
	case "prosperity" attend labelFunc049C_01B3:
	message("\"The Fellowship is designed to enrich the lives of everyone who resides in this fair land.\"");
	say();
	UI_remove_answer("prosperity");
labelFunc049C_01B3:
	case "citizens" attend labelFunc049C_01C6:
	message("\"I am so busy with my duties that I know very few people here. Phearcy, the bartender, is an outstanding member of the community, as is the farmer, Tolemac. Tolemac's friend, Morz, though shy, is well spoken of. Also, Morz has a brother.\" She glances up, thoughtfully. \"Or is he Tolemac's brother?~~ \"I am not positive whose brother he is, but I do know that I do not know that much about him,\" she sniffs.");
	say();
	UI_remove_answer("citizens");
labelFunc049C_01C6:
	case "Fellowship" attend labelFunc049C_0202:
	var0007 = UI_wearing_fellowship();
	if (!var0006) goto labelFunc049C_01F0;
	message("\"Our Branch has been open here in Moonglow for approximately half a decade. Rankin has been here the entire time, but I started at this branch only a few months ago.\"");
	say();
	if (!(!var0003)) goto labelFunc049C_01ED;
	UI_add_answer("Rankin");
labelFunc049C_01ED:
	goto labelFunc049C_01FB;
labelFunc049C_01F0:
	message("\"The Fellowship is a society of spiritual seekers who strive to reach the highest levels of human potential. We espouse neo-realism through the Triad of Inner Strength. In addition, we manage and organize many festivals and also operate a shelter for the needy.~\"Rankin is the branch head here in Moonglow. He can answer thy questions.\"");
	say();
	UI_add_answer("Triad");
labelFunc049C_01FB:
	UI_remove_answer("Fellowship");
labelFunc049C_0202:
	case "Triad" attend labelFunc049C_021C:
	message("The Triad is basically three principles that, when applied in unison, enable the individual to better reach creativity, satisfaction, and success in life.\"");
	say();
	UI_add_answer("principles");
	UI_remove_answer("Triad");
labelFunc049C_021C:
	case "principles" attend labelFunc049C_023F:
	message("\"The three principles are: Strive for Unity, Trust thy Brother -- and sister -- and Worthiness precedes Reward.\"");
	say();
	UI_add_answer(["Strive", "Trust", "Worthiness"]);
	UI_remove_answer("principles");
labelFunc049C_023F:
	case "Strive" attend labelFunc049C_0252:
	message("\"Essentially, this means that cooperation among people is not only a desirable means for reaching human potential in itself, but it also facilitates the entire process.\"");
	say();
	UI_remove_answer("Strive");
labelFunc049C_0252:
	case "Trust" attend labelFunc049C_0265:
	message("\"This tenet illustrates that, as people, we are all the same, and that neither hatred nor fear of one another is productive. In fact, it is destructive.\"");
	say();
	UI_remove_answer("Trust");
labelFunc049C_0265:
	case "Worthiness" attend labelFunc049C_0278:
	message("\"This basically means that individuals should strive to be worthy of that which they want in life. It is often misquoted as `thou dost receive what thou dost deserve,' but that tends to have negative connotations.\"");
	say();
	UI_remove_answer("Worthiness");
labelFunc049C_0278:
	case "Rankin" attend labelFunc049C_0293:
	message("\"He is the branch head here in Moonglow.\"~She glances around cautiously. \"Thou art travelling through the city, correct? And eventually going to visit another city -- Britain, perhaps?\" She shoots another glance, apparently checking for something. Finally, she leans forward, speaking with a whisper.~\"I am unsure whether Rankin is worthy of his position. I heard him talking to the new member, Tolemac, just before Rankin persuaded him to join. He admitted to having doubts about The Fellowship. He told Tolemac that he thought, perhaps, The Fellowship encouraged its members to be nothing more than sheep, and that those really `in charge' were charlatans, in it simply for the money. What does thou think about that?\" She leans back.");
	say();
	gflags[0x01D8] = true;
	var0003 = true;
	UI_remove_answer("Rankin");
labelFunc049C_0293:
	case "bye" attend labelFunc049C_029E:
	goto labelFunc049C_02A1;
labelFunc049C_029E:
	goto labelFunc049C_008E;
labelFunc049C_02A1:
	endconv;
	if (!gflags[0x01D8]) goto labelFunc049C_02B5;
	message("\"Goodbye, ");
	message(var0000);
	message(". Remember what I have told thee.\"*");
	say();
	goto labelFunc049C_02BF;
labelFunc049C_02B5:
	message("\"Goodbye, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc049C_02BF:
	if (!(event == 0x0000)) goto labelFunc049C_02CD;
	Func092E(0xFF64);
labelFunc049C_02CD:
	return;
}


