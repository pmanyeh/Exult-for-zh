#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func094F 0x94F (var var0000, var var0001);

void Func043B object#(0x43B) ()
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
	var var0012;
	var var0013;
	var var0014;
	var var0015;
	var var0016;
	var var0017;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	var0003 = Func0942(0xFFFD);
	var0004 = Func0942(0xFFFF);
	var0005 = Func0942(0xFFFE);
	var0006 = UI_find_nearby(0xFFC5, 0x017D, 0x0014, 0x0000);
	var0007 = [0x040A, 0x07E9, 0x0000];
	if (!(event == 0x0007)) goto labelFunc043B_006A;
	var0008 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc043B_006A:
	if (!((event == 0x0000) || (event == 0x000E))) goto labelFunc043B_008B;
	UI_run_schedule(0xFFC5);
	Func097F(0xFFC5, "@I must work...@", 0x0002);
labelFunc043B_008B:
	if (!(event == 0x0001)) goto labelFunc043B_00B9;
	UI_item_say(0xFE9C, "@Excuse me, friend.@");
	0xFFC5->Func07D1();
	Func097F(0xFFC5, "@How may I be of service?@", 0x0002);
	UI_set_schedule_type(0xFFC5, 0x0003);
labelFunc043B_00B9:
	if (!(event == 0x0009)) goto labelFunc043B_093E;
	UI_clear_item_say(0xFFC5);
	UI_run_schedule(0xFFC5);
	UI_show_npc_face0(0xFFC5, 0x0000);
	var0009 = UI_get_item_flag(0xFFC5, 0x001C);
	var000A = UI_get_item_flag(0xFFD0, 0x001C);
	if (!((gflags[0x0168] == false) && var0006)) goto labelFunc043B_03EF;
	UI_set_item_flag(0xFFC5, 0x001C);
	gflags[0x0168] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	UI_set_new_schedules(0xFFC5, [0x0002, 0x0005, 0x0006, 0x0007], [0x001A, 0x0006, 0x001A, 0x000E], [0x0479, 0x076B, 0x04BC, 0x0741, 0x0479, 0x076B, 0x049D, 0x0752]);
	UI_run_schedule(0xFFC5);
	message("\"Oh, please, ");
	message(var0000);
	message(", a favor!\"");
	say();
	if (!(var0009 == false)) goto labelFunc043B_0177;
	message("\"My name is Ruggs. I am a poor sailor whose visage offends the good people of Fawn, and I have been forbidden entry into the city.\"");
	say();
	goto labelFunc043B_017B;
labelFunc043B_0177:
	message("\"My visage offends the good people of Fawn, and I have been forbidden entry into the city.\"");
	say();
labelFunc043B_017B:
	message("\"I have not heard from the lady I love since mine exile, and I can find no one willing to carry her word of my continuing devotion.\"");
	say();
	message("\"Please, ");
	message(var0000);
	message(", I beg of thee, wouldst thou take this letter to her for me?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043B_020C;
	message("\"Oh, I knew by the nobility of thy face that thou wouldst take pity on a wretch such as myself!\"");
	say();
	message("\"Take this to Delphynia, the herbalist. Thou mayest find her at the greenhouse.\"");
	say();
	message("\"If thou shouldst bring a return message, I will introduce thee to my shipmate, Scots, who makes maps.\"");
	say();
	message("\"Perhaps his cartography would be of aid to thee.\"");
	say();
	var0008 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0004, 0x0005, false, true);
	gflags[0x0152] = true;
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_01D0:
	for (var000E in var000B with var000C to var000D) attend labelFunc043B_01F6;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_01F3;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_01F3:
	goto labelFunc043B_01D0;
labelFunc043B_01F6:
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	abort;
	goto labelFunc043B_03D4;
labelFunc043B_020C:
	message("\"I have searched all my life for a woman who would overlook my deformity and learn to love me. Somehow I will find a way to tell Delphynia of my love...\"");
	say();
	if (!(var0003 == true)) goto labelFunc043B_031C;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"How can thine heart be so hard, Avatar? Thou wouldst search every corner of the land and sea to help me find Gwenno.\"");
	say();
	message("\"Wilt thou reconsider and aid this poor soul's search for love?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc043B_02B4;
	UI_set_conversation_slot(0x0000);
	message("\"There may be hope after all... Here is the scroll.\"");
	say();
	var0008 = Func099B(0xFE9C, 0x0001, 0x031D, 0x0004, 0x0005, false, true);
	message("\"Take this to Delphynia, the herbalist. Thou mayest find her at the greenhouse.\"");
	say();
	message("\"If thou shouldst bring a return message, I will introduce thee to my shipmate, Scots, who makes maps.\"");
	say();
	message("\"Perhaps his cartography would be of aid to thee.\"");
	say();
	gflags[0x0152] = true;
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_0278:
	for (var000E in var000B with var000F to var0010) attend labelFunc043B_029E;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_029B;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_029B:
	goto labelFunc043B_0278;
labelFunc043B_029E:
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	abort;
	goto labelFunc043B_031C;
labelFunc043B_02B4:
	message("\"I am sure that thou hast thy reasons, Avatar. But I am sorely disappointed.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"The Avatar! Forgive me... unlike these local folk, I know whom thou art!\"");
	say();
	message("\"I am certain that thy business is far more urgent.\"");
	say();
	gflags[0x0167] = true;
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_02E3:
	for (var000E in var000B with var0011 to var0012) attend labelFunc043B_0309;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_0306;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_0306:
	goto labelFunc043B_02E3;
labelFunc043B_0309:
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	abort;
labelFunc043B_031C:
	if (!(var0004 == true)) goto labelFunc043B_033D;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"Have a drink or two... Thou wilt soon forget her.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043B_033D:
	if (!(var0005 == true)) goto labelFunc043B_0383;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"Oh, no... Why is it that everyone expects the Avatar to help with their love life?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Why... I...\"");
	say();
	if (!(var0003 == true)) goto labelFunc043B_0383;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Thou wouldst not be so hard, Shamino, if thou hadst lost thy love!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
labelFunc043B_0383:
	gflags[0x0167] = true;
	UI_si_path_run_usecode(0xFFC5, var0007, 0x0000, item, 0x043B, false);
	var000B = UI_find_nearby(0xFE9C, 0x017D, 0x0014, 0x0000);
	enum();
labelFunc043B_03AD:
	for (var000E in var000B with var0013 to var0014) attend labelFunc043B_03D3;
	if (!(UI_get_npc_id(var000E) == 0x0001)) goto labelFunc043B_03D0;
	UI_set_schedule_type(var000E, 0x0003);
labelFunc043B_03D0:
	goto labelFunc043B_03AD;
labelFunc043B_03D3:
	abort;
labelFunc043B_03D4:
	UI_set_item_flag(0xFFC5, 0x001C);
	gflags[0x0168] = true;
	UI_clear_item_flag(0xFE9C, 0x0010);
	goto labelFunc043B_0476;
labelFunc043B_03EF:
	if (!(var0009 == false)) goto labelFunc043B_041B;
	if (!(gflags[0x003E] == true)) goto labelFunc043B_040A;
	message("\"Greetings, good Knight! The sight of thee and thy companions is always heartening, for the Goblins fear such as thee.\"");
	say();
	message("\"I am Ruggs, a poor sailor from Britannia.\tHow may I serve thee today?\"");
	say();
	goto labelFunc043B_040E;
labelFunc043B_040A:
	message("\"I am Ruggs, a poor sailor exiled from Britannia and from Fawn. How may I serve thee today?\"");
	say();
labelFunc043B_040E:
	UI_set_item_flag(0xFFC5, 0x001C);
	goto labelFunc043B_042C;
labelFunc043B_041B:
	if (!gflags[0x0004]) goto labelFunc043B_0428;
	message("\"All is lost, Avatar! All is lost!\"");
	say();
	goto labelFunc043B_042C;
labelFunc043B_0428:
	message("\"'Tis always a pleasure to see another Britannian at Fawn, Avatar. How may I serve thee today?\"");
	say();
labelFunc043B_042C:
	if (!(!gflags[0x0004])) goto labelFunc043B_0443;
	UI_add_answer(["Britannia", "Fawn"]);
	goto labelFunc043B_0450;
labelFunc043B_0443:
	UI_add_answer(["Where is everyone?", "What happened?"]);
labelFunc043B_0450:
	if (!((Func097D(0xFE9B, 0x0001, 0x031D, 0x001B, 0x0000) && (!gflags[0x01A7])) && (!gflags[0x0004]))) goto labelFunc043B_0476;
	UI_add_answer("letter");
labelFunc043B_0476:
	UI_add_answer("bye");
labelFunc043B_047D:
	converse attend labelFunc043B_093D;
	case "Where is everyone?" attend labelFunc043B_04A8:
	UI_remove_answer("Where is everyone?");
	message("\"All dead! Hast thou not seen their bodies heaped about the desolate buildings?\"");
	say();
	message("\"I do not remember it clearly, for my sanity was lost when I found Delphynia's body.\"");
	say();
	message("\"Lady Yelinda was also spared, but she hath gone into the swamps of Gorlab. I should have gone after her, but I did not. I alone remain in Fawn.\"");
	say();
	UI_add_answer(["Delphynia", "Lady Yelinda"]);
labelFunc043B_04A8:
	case "What happened?" attend labelFunc043B_04CE:
	UI_remove_answer("What happened?");
	message("\"What fell companion didst thou harbor, ");
	message(var0000);
	message("? The Bard Iolo did come here, and he hath turned Fawn into a mockery...\"");
	say();
	UI_add_answer(["Iolo", "mockery"]);
labelFunc043B_04CE:
	case "Iolo" attend labelFunc043B_04E9:
	UI_remove_answer("Iolo");
	message("\"Mad Iolo, he doth call himself now! His eyes are all afire, and he doth act like a man possessed.\"");
	say();
	message("\"Such cruel acts did he commit, that I cannot relate them lest my soul shrivel and die.\"");
	say();
	message("\"Yet Mad Iolo did laugh the entire time...\"");
	say();
labelFunc043B_04E9:
	case "mockery" attend labelFunc043B_0504:
	UI_remove_answer("mockery");
	message("\"There is nothing thou canst do -- all is done for, all is lost!\"");
	say();
	message("\"The City of Beauty hath become the City of Blood and Ruin. Only I am left alive.\"");
	say();
	message("\"Dost thou not see the irony? Only I, the ugliest of all, yet remain to dwell in Fawn!\"");
	say();
labelFunc043B_0504:
	case "Britannia" attend labelFunc043B_0528:
	message("\"Our ship was hired by Batlin to transport scholars to explore a new land and spread word of The Fellowship.\"");
	say();
	message("\"Now, even if we wanted to return without Batlin, we cannot venture onto the sea for fear of these terrible storms.\"");
	say();
	UI_remove_answer("Britannia");
	UI_add_answer(["Batlin", "storms"]);
labelFunc043B_0528:
	case "Batlin" attend labelFunc043B_0567:
	message("\"Thou hast not heard of Batlin? He was the founder of The Fellowship movement, in Britannia.\"");
	say();
	message("\"He is a pious and worthy man, for all that he doth have strange companions.\"");
	say();
	var0015 = Func0992(0x0001, "@His description doth not much fit the Batlin we know, doth it, Avatar?@", 0x0000, false);
	if (!(var0015 != 0xFE9C)) goto labelFunc043B_0559;
	UI_set_conversation_slot(0x0000);
labelFunc043B_0559:
	UI_remove_answer("Batlin");
	UI_add_answer("companions");
labelFunc043B_0567:
	case "companions" attend labelFunc043B_0598:
	message("\"Batlin bade Leon stay and preach to the populace of Fawn and left the ship with three companions: Palos, Brunt and Deadeye.\"");
	say();
	message("\"We have not seen them since. Although they promised to return soon.\"");
	say();
	UI_remove_answer("companions");
	UI_push_answers();
	UI_add_answer(["Leon", "Palos", "Brunt", "Deadeye", "change subject"]);
labelFunc043B_0598:
	case "change subject" attend labelFunc043B_05A8:
	message("\"Very well...\"");
	say();
	UI_pop_answers();
labelFunc043B_05A8:
	case "Leon" attend labelFunc043B_05CA:
	message("\"Leon was especially chosen by Batlin to come and bring the hope of The Fellowship to this land.\"");
	say();
	message("\"He hath been the only thing that hath kept us all sane since we have been stranded here.\"");
	say();
	message("\"I strive to emulate him, in mine own humble way.\"");
	say();
	UI_remove_answer("Leon");
	UI_add_answer("emulate");
labelFunc043B_05CA:
	case "emulate" attend labelFunc043B_05E1:
	message("\"Leon hath shown me that, by speaking well, people may see beyond my deformity and respect me. I cannot change the way I look, but I can change my speech.\"");
	say();
	message("\"And, as Leon sows the seeds of The Fellowship, I sow seeds in the soil. Gardening distracts my thoughts from being trapped ashore.\"");
	say();
	UI_remove_answer("emulate");
labelFunc043B_05E1:
	case "Palos" attend labelFunc043B_05FF:
	UI_remove_answer("Palos");
	message("\"I do not know much about him. Most of the time he remained below or went about heavily cloaked. I do not think that he was of the race of Men...\"");
	say();
	message("\"We were all very thankful that he was so strong, I tell thee that.\"");
	say();
	UI_add_answer("strong");
labelFunc043B_05FF:
	case "strong" attend labelFunc043B_0620:
	UI_remove_answer("strong");
	message("\"Palos was fearfully strong, ");
	message(var0000);
	message(".\"");
	say();
	message("\"During a storm, the main mast was struck by lightning and came crashing down,\tjamming the winch that operated the sea anchor.\"");
	say();
	message("\"Without the sea anchor, we would have been quickly lost to the angry waves. But Palos strode across the deck and shoved the mast aside to free the winch... All by himself.\"");
	say();
labelFunc043B_0620:
	case "Brunt" attend labelFunc043B_0644:
	message("\"Brunt is little more than a common mercenary, ");
	message(var0000);
	message(".\"");
	say();
	message("\"I suspect that Batlin hired him to act as a personal guard in this foreign land. He is not fit for much else.\"");
	say();
	UI_remove_answer("Brunt");
	UI_add_answer("not fit");
labelFunc043B_0644:
	case "not fit" attend labelFunc043B_0662:
	message("\"Brunt is no seaman, 'tis true.\"");
	say();
	message("\"If I had not seen his face the day he boarded, I would have thought him a Daemon. He was so green.\"");
	say();
	UI_remove_answer("not fit");
	UI_add_answer("green");
labelFunc043B_0662:
	case "green" attend labelFunc043B_067F:
	message("\"He was seasick the entire voyage, ");
	message(var0000);
	message("! I have never seen anyone worse.\"");
	say();
	message("\"And what a temper! 'Tis to be hoped he is better mannered on land.\"");
	say();
	UI_remove_answer("green");
labelFunc043B_067F:
	case "Deadeye" attend labelFunc043B_0699:
	message("\"Deadeye is the only one of Batlin's companions that I truly know. I cannot say that I'm happy about the association, either.\"");
	say();
	UI_remove_answer("Deadeye");
	UI_add_answer("association");
labelFunc043B_0699:
	case "association" attend labelFunc043B_06BA:
	message("\"I served with Deadeye on another ship, several years back. He used to bully the crew by telling them that white eye of his could curse a man.\"");
	say();
	message("\"Deadeye liked to provoke a fight and dare the other man to hit him. No one would, for fear of that eye.\"");
	say();
	message("\"Sailors are a superstitious lot, I fear, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("association");
labelFunc043B_06BA:
	case "storms" attend labelFunc043B_06EF:
	UI_remove_answer("storms");
	message("\"I've been a seafarin' man for more than twenty years, ");
	message(var0000);
	message(". And I cannot recall a time that I've seen storms as strange as these.\"");
	say();
	message("\"I've seen lightning that jumps from cloud to cloud. I've seen lightning that shoots down like a pitchfork from the heavens. And I've seen lightning that dances across the masts of a ship.\"");
	say();
	message("\"But I've never seen lightning that changes a man into a rock, or makes a ship disappear before thy very eyes.\"");
	say();
	UI_push_answers();
	UI_add_answer(["changes a man", "ship disappear", "change subject"]);
labelFunc043B_06EF:
	case "changes a man" attend labelFunc043B_0710:
	message("\"I saw it happen, ");
	message(var0000);
	message("!\"");
	say();
	message("\"I was holding the door open for one of the crew who was running for shelter when one of those storms hit.\"");
	say();
	message("\"There was this bright flash and a deafening crash... And when mine eyes cleared, Geof was gone and a chicken stood gawking at me in the very spot Geof had been in.\"");
	say();
	UI_remove_answer("changes a man");
labelFunc043B_0710:
	case "ship disappear" attend labelFunc043B_072F:
	message("\"With my very own eyes, I saw it!\"");
	say();
	message("\"I was on the Fawn docks chatting with a salt named Olon, in the days before I was banned\tfrom the city.\"");
	say();
	message("\"All of a sudden one of those storms hit and Olon and I dove for cover under a rowboat.\"");
	say();
	message("\"We saw the ship that had just put out be hit by the lightning and it just... disappeared! Never found a trace of it or her crew.\"");
	say();
	UI_remove_answer("ship disappear");
labelFunc043B_072F:
	case "Lady Yelinda" attend labelFunc043B_0755:
	UI_remove_answer("Lady Yelinda");
	gflags[0x01B1] = true;
	message("\"The Great Lady did flee Fawn in a terrible hurry, due to the Curse. All she left behind was her Diamond Necklace.\"");
	say();
	message("\"She hath been made as disfigured as I am. Imagine, to plummet from Beauty to Ugliness!\"");
	say();
	message("\"It hath driven her insane.\"");
	say();
	UI_add_answer("Diamond Necklace");
labelFunc043B_0755:
	case "Diamond Necklace" attend labelFunc043B_076C:
	UI_remove_answer("Diamond Necklace");
	message("\"I did find the necklace lying in the throne room.\"");
	say();
	message("\"But I did not take it, for it belongs to the Lady. And the rats shall not disturb it.\"");
	say();
labelFunc043B_076C:
	case "Delphynia" attend labelFunc043B_07D8:
	UI_remove_answer("Delphynia");
	if (!gflags[0x0004]) goto labelFunc043B_0790;
	message("\"I found her pitiful body dumped in the street, with her insides... twisted... torn out...\"");
	say();
	message("\"She was long dead...\"");
	say();
	message("\"I brought her body to where it is now. I could not leave my love to lie in the open, for the rats to gnaw.\"");
	say();
	goto labelFunc043B_07D8;
labelFunc043B_0790:
	if (!(gflags[0x0168] == false)) goto labelFunc043B_07A9;
	message("\"Delphynia is the most beautiful of all women! Pray, forgive me, ");
	message(var0000);
	message(". I speak with the tongue of a man bound by the chains of love.\"");
	say();
	message("\"Delphynia is Fawn's horticulturist and healer, of late. I met her when I accompanied Batlin into town for supplies.\"");
	say();
	goto labelFunc043B_07D8;
labelFunc043B_07A9:
	if (!(gflags[0x0167] == true)) goto labelFunc043B_07B9;
	message("\"Delphynia is Fawn's horticulturist and healer, of late. I met her when I accompanied Batlin into town for supplies.\"");
	say();
	message("\"Thou wilt understand why I love her, if thou shouldst meet her.\"");
	say();
labelFunc043B_07B9:
	if (!(gflags[0x0152] && (var000A == false))) goto labelFunc043B_07D0;
	message("\"Delphynia is Fawn's horticulturist and healer, of late. I met her when I accompanied Batlin into town for supplies.\"");
	say();
	message("\"To me, she is the most beautiful woman in Fawn. When thou dost meet her, I'm sure that thou wilt agree with me.\"");
	say();
	goto labelFunc043B_07D8;
labelFunc043B_07D0:
	message("\"Thou hast met her... Delphynia is the most beautiful woman in all Fawn, to\tme.\"");
	say();
	message("\"She is also a fine horticulturist and healer.\tI met her when I accompanied Batlin into town for supplies.\"");
	say();
labelFunc043B_07D8:
	case "Fawn" attend labelFunc043B_07FC:
	message("\"'Tis the city over there, ");
	message(var0000);
	message(". They claim to honor Beauty, which my face naturally offends.\"");
	say();
	message("\"They are hard pressed, what with the Goblins and all.\"");
	say();
	UI_remove_answer("Fawn");
	UI_add_answer("Goblins");
labelFunc043B_07FC:
	case "Goblins" attend labelFunc043B_0872:
	UI_remove_answer("Goblins");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc043B_0821;
	message("\"It is such a relief to be able to shelter behind the walls of Fawn. I think the goblins cannot reach us here.\"");
	say();
	goto labelFunc043B_0872;
labelFunc043B_0821:
	if (!(gflags[0x003E] == true)) goto labelFunc043B_084F;
	if (!(gflags[0x014E] == false)) goto labelFunc043B_0840;
	message("\"Now that the Goblins hold thy Pikemen tower, Fawn doth have little hope of withstanding a determined attack.\"");
	say();
	message("\"I fear that my companions and I will be the next delicacy in the Goblin stewpot without thy protection.\"");
	say();
	message("\"We do not have city gates to hide behind.\"");
	say();
	goto labelFunc043B_084C;
labelFunc043B_0840:
	message("\"'Tis a blessing that thou and thine honored Pikemen companions did wrest the Fawn tower from the Goblins.\"");
	say();
	message("\"Fawn could not have long resisted a determined attack. And my companions and I would have been the next delicacy in the Goblin stewpot, I fear.\"");
	say();
	message("\"We have no city gates to hide behind.\"");
	say();
labelFunc043B_084C:
	goto labelFunc043B_0872;
labelFunc043B_084F:
	if (!(gflags[0x014E] == false)) goto labelFunc043B_0866;
	message("\"Now that the Goblins hold the Pikemen tower, Fawn doth have little hope of withstanding a determined attack.\"");
	say();
	message("\"I fear that my companions and I will be the next delicacy in the Goblin stewpot.\"");
	say();
	message("\"We do not have city gates to hide behind.\"");
	say();
	goto labelFunc043B_0872;
labelFunc043B_0866:
	message("\"'Tis a blessing that the honored Pikemen ripped the Fawn tower from them Goblins.\"");
	say();
	message("\"Fawn could not have long resisted a determined attack. And my companions and I would have been the next delicacy in the Goblin stewpot, I fear.\"");
	say();
	message("\"We have no city gates to hide behind.\"");
	say();
labelFunc043B_0872:
	case "letter" attend labelFunc043B_08B6:
	var0016 = UI_remove_party_items(0x0001, 0x031D, 0x001B, 0x0000, false);
	message("\"Oh, blessings upon thee, ");
	message(var0000);
	message("!\"");
	say();
	message("\"Delphynia knows of my love, though she is unsure of her feelings for me.\"");
	say();
	message("\"As long as she hath not rejected me out of hand, I will be content to wait. Thy good deed hath given me reason to live!\"");
	say();
	message("\"As promised, I will send thee to my shipmate, Scots.\"");
	say();
	var0017 = true;
	UI_remove_answer("letter");
	UI_add_answer("Scots");
labelFunc043B_08B6:
	case "Scots" attend labelFunc043B_08D8:
	message("\"Scots is a fine fellow, though he often seems a bit distracted. He is a cartographer.\"");
	say();
	message("\"Perhaps his maps will aid thee, though they are not as accurate as he wishes.\"");
	say();
	message("\"Thou mayest find him somewhere within our camp.\"");
	say();
	UI_remove_answer("Scots");
	UI_add_answer("not as accurate");
labelFunc043B_08D8:
	case "not as accurate" attend labelFunc043B_08F3:
	message("\"Since we dare not stray too far from shelter, Scots cannot explore and map.\"");
	say();
	message("\"He hath worked from existing maps that he received from the Fawn fishermen, so he is only sure of the accuracy of the coastline.\"");
	say();
	message("\"Scots often complains that we cannot even explore by ship. None of us are happy to be stranded here.\"");
	say();
	UI_remove_answer("not as accurate");
labelFunc043B_08F3:
	case "bye" attend labelFunc043B_093A:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye, Ruggs.@", 0x0000);
	if (!gflags[0x0004]) goto labelFunc043B_092B;
	var0008 = ("" & ("@Woe is me...@" & "@My love is slain!@"));
	Func094F(0xFFC5, var0008);
	goto labelFunc043B_0937;
labelFunc043B_092B:
	Func097F(0xFFC5, "@Fair weather to thee.@", 0x0005);
labelFunc043B_0937:
	goto labelFunc043B_093D;
labelFunc043B_093A:
	goto labelFunc043B_047D;
labelFunc043B_093D:
	endconv;
labelFunc043B_093E:
	return;
}


