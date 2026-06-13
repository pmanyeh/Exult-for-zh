#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0498 object#(0x498) ()
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

	if (!(event == 0x0001)) goto labelFunc0498_02EE;
	UI_show_npc_face(0xFF68, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	var0003 = UI_is_pc_female();
	if (!(!gflags[0x01FA])) goto labelFunc0498_004B;
	message("You see a woman who meets your gaze with an icy stare.");
	say();
	gflags[0x01FA] = true;
	goto labelFunc0498_0069;
labelFunc0498_004B:
	message("\"What dost thou need now?\"");
	say();
	if (!gflags[0x01DB]) goto labelFunc0498_005C;
	UI_add_answer("Brion's feelings");
labelFunc0498_005C:
	if (!gflags[0x01DC]) goto labelFunc0498_0069;
	UI_add_answer("Nelson's feelings");
labelFunc0498_0069:
	converse attend labelFunc0498_02E9;
	case "name" attend labelFunc0498_0099:
	message("\"I am Zelda.\"");
	say();
	UI_remove_answer("name");
	if (!gflags[0x01DB]) goto labelFunc0498_008C;
	UI_add_answer("Brion's feelings");
labelFunc0498_008C:
	if (!gflags[0x01DC]) goto labelFunc0498_0099;
	UI_add_answer("Nelson's feelings");
labelFunc0498_0099:
	case "job" attend labelFunc0498_00BF:
	message("\"I am the advisor at the Lycaeum.\"");
	say();
	UI_add_answer(["Lycaeum", "advisor"]);
	if (!gflags[0x01F6]) goto labelFunc0498_00BF;
	UI_add_answer("North East sea");
labelFunc0498_00BF:
	case "Lycaeum" attend labelFunc0498_00D2:
	message("She rolls her eyes. \"The Lycaeum is the building in which thou dost stand. It is a great library designed to house a wealth of knowledge. Though the structure has changed a bit over the past two hundred years, the essence of learning has not.\"");
	say();
	UI_remove_answer("Lycaeum");
labelFunc0498_00D2:
	case "advisor" attend labelFunc0498_00F2:
	message("\"Yes,\" she says. \"My job is to manage and regulate the events in the Lycaeum. And,\" she adds, \"provide assistance to the people here in Moonglow -- when they need it!\"");
	say();
	UI_remove_answer("advisor");
	UI_add_answer(["events", "townspeople"]);
labelFunc0498_00F2:
	case "events" attend labelFunc0498_0113:
	message("\"I am in charge of maintaining the reading areas and bringing in new books. In addition, I help organize special group sessions for Jillian's tutorials and set up educational entertainment programs.\"");
	say();
	UI_remove_answer("events");
	if (!(!var0002)) goto labelFunc0498_0113;
	UI_add_answer("Jillian");
labelFunc0498_0113:
	case "North East sea" attend labelFunc0498_0126:
	message("\"I have not the time for these petty geography questions. Check an atlas!\"");
	say();
	UI_remove_answer("North East sea");
labelFunc0498_0126:
	case "townspeople" attend labelFunc0498_015A:
	message("\"I have little time for this,\" she sighs. \"I know only the Lycaeum head and his twin, Brion, at all well. The trainer also studies here in the Lycaeum.\" She looks up at the ceiling, as if reading from an invisible, overhead list.~~\"Thou dost already know about Penumbra. Mariah is here. If thou wishest to know about a member of The Fellowship, ask the clerk there. Otherwise,\" she eyes you coldly, \"let me return to my duties.\" As an afterthought, she adds, \"And keep thy voice down. People are trying to read.\"");
	say();
	UI_add_answer(["Mariah", "Lycaeum head", "Brion", "Penumbra"]);
	if (!(!var0002)) goto labelFunc0498_0153;
	UI_add_answer("trainer");
labelFunc0498_0153:
	UI_remove_answer("townspeople");
labelFunc0498_015A:
	case "Mariah" attend labelFunc0498_016D:
	message("\"Well, they say she used to be an adept mage, but all I see is a woman who wanders around complimenting the furniture. Thou mayest speak to her if thou wishest, but I doubt she will make sense to thee. And do not disorganize the shelves while looking for her!\"");
	say();
	UI_remove_answer("Mariah");
labelFunc0498_016D:
	case "Jillian", "trainer" attend labelFunc0498_0194:
	message("\"Jillian? She is very well-behaved. Also quiet and tidy. I believe she is an excellent scholar. If thou art going to seek her out, try not to overturn any shelves. Some new books have just arrived and I have not finished placing all of them.\"");
	say();
	UI_remove_answer(["Jillian", "trainer"]);
	var0002 = true;
	UI_add_answer("new books");
labelFunc0498_0194:
	case "new books" attend labelFunc0498_01AE:
	message("\"Yes, they arrived not long ago, including the recently rediscovered copy of DeMaria and Spector's work,`The Avatar Adventures.' If thou canst avoid creating too much of a disturbance, I recommend it to thee.\"");
	say();
	UI_remove_answer("new books");
	UI_add_answer("Avatar Adventures");
labelFunc0498_01AE:
	case "Avatar Adventures" attend labelFunc0498_01EE:
	message("\"If I tell thee this last thing, wilt thou depart so I may return to my job?\"");
	say();
	if (!var0003) goto labelFunc0498_01C9;
	var0004 = "her";
	goto labelFunc0498_01CF;
labelFunc0498_01C9:
	var0004 = "his";
labelFunc0498_01CF:
	var0005 = Func090A();
	if (!var0005) goto labelFunc0498_01E9;
	message("\"We discovered the tome in the lower depths of the basement. We have no way to account for the accuracy of the contents, but have noticed many parallels between the events in the work and the events in Britannia's recent history.~~ \"The book is a copy of the Avatar's diary, written about two hundred years ago during ");
	message(var0004);
	message(" most recent visit to Britannia. Of course,\" she smiles sardonically, \"it has been annotated by others.~~\"It was recently published to give the general public more courage and confidence.~~\"And now, goodbye.\"");
	say();
	abort;
	goto labelFunc0498_01EE;
labelFunc0498_01E9:
	message("\"Fine.\"");
	say();
	abort;
labelFunc0498_01EE:
	case "Penumbra" attend labelFunc0498_021C:
	if (!var0003) goto labelFunc0498_0205;
	var0006 = "she";
	goto labelFunc0498_020B;
labelFunc0498_0205:
	var0006 = "he";
labelFunc0498_020B:
	message("She shakes her head, muttering, \"Why doth ");
	message(var0006);
	message(" waste my time in this manner?\" Looking back up at you, she says, \"Penumbra is the sage who put herself to sleep two centuries ago. Rumor has it that only the Avatar can awaken her.\"");
	say();
	UI_remove_answer("Penumbra");
labelFunc0498_021C:
	case "Lycaeum head" attend labelFunc0498_022F:
	message("\"Nelson is very competent, although a little eccentric. I do wish he would refrain from showing off his collection of trinkets to everyone who enters the building. It always makes such a commotion.\"");
	say();
	UI_remove_answer("Lycaeum head");
labelFunc0498_022F:
	case "Brion" attend labelFunc0498_0290:
	message("Her chilly expression melts away. \"Brion,\" she says, smiling, \"is very open-minded and idealistic. He knows the heavens quite well.\" She looks up to emphasize `heavens.' \"I find him very attractive. But, I do not know how to convey mine intentions.\" She turns away, shyly.~~\"Unless, perchance, ");
	message(var0001);
	message(" wilt aid me?\" she asks, hopefully. \"Wilt thou agree to tell him for me, ");
	message(var0001);
	message("?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc0498_0280;
	message("\"Thank thee, ");
	message(var0001);
	message(". Thank thee.\" She blushes.");
	say();
	var0008 = UI_add_party_items(0x0001, 0x0154, 0xFE99, 0x0006, 0x0000);
	if (!var0008) goto labelFunc0498_027D;
	message("\"For thy kindness, I will give thee this white potion I found once while straightening the basement.\"");
	say();
labelFunc0498_027D:
	goto labelFunc0498_0285;
labelFunc0498_0280:
	message("Her cold glare returns. \"Very well.\"*");
	say();
	abort;
labelFunc0498_0285:
	gflags[0x01DA] = true;
	UI_remove_answer("Brion");
labelFunc0498_0290:
	case "Brion's feelings" attend labelFunc0498_029D:
	message("She looks down for a moment. \"I thought as much.\" As she raises her head, tears are visible in her eyes. \"I thank thee for trying.\"*");
	say();
	abort;
labelFunc0498_029D:
	case "Nelson's feelings" attend labelFunc0498_02C8:
	message("\"Nelson? I never really thought about him.\" She shrugs. \"Hmm, I suppose he is not a bad second best. I will try,\" she says, smiling.");
	say();
	gflags[0x01E3] = true;
	Func0911(0x0014);
	UI_remove_answer("Nelson's feelings");
	if (!(!gflags[0x01DA])) goto labelFunc0498_02C8;
	UI_add_answer("second best?");
labelFunc0498_02C8:
	case "second best?" attend labelFunc0498_02DB:
	message("\"Well, his brother, Brion, is quite attractive, I think.\"");
	say();
	UI_remove_answer("second best?");
labelFunc0498_02DB:
	case "bye" attend labelFunc0498_02E6:
	goto labelFunc0498_02E9;
labelFunc0498_02E6:
	goto labelFunc0498_0069;
labelFunc0498_02E9:
	endconv;
	message("\"Good day.\"*");
	say();
labelFunc0498_02EE:
	if (!(event == 0x0000)) goto labelFunc0498_02F7;
	abort;
labelFunc0498_02F7:
	return;
}


