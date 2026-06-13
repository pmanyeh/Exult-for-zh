#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0994 0x994 ();
extern var Func0942 0x942 (var var0000);
extern var Func0839 0x839 ();
extern void Func0917 0x917 (var var0000, var var0001);
extern var Func0910 0x910 (var var0000);
extern void Func083A 0x83A (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0428 object#(0x428) ()
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

	var0000 = UI_get_npc_id(0xFFD8);
	var0001 = UI_get_schedule_type(0xFFD8);
	var0002 = Func0954();
	var0003 = UI_is_pc_female();
	var0004 = Func0953();
	var0005 = "lad";
	var0006 = Func0994();
	var0007 = Func0942(0xFFD6);
	var0008 = Func0942(0xFFDA);
	var0009 = Func0942(0xFFAF);
	if (!(var0003 == true)) goto labelFunc0428_005C;
	var0005 = "lass";
labelFunc0428_005C:
	if (!(Func0839() && (var0000 == 0x0000))) goto labelFunc0428_007A;
	UI_set_npc_id(0xFFD8, 0x0001);
	var0000 = 0x0001;
labelFunc0428_007A:
	if (!(event == 0x0002)) goto labelFunc0428_010A;
	var000A = UI_find_nearby(0xFFD8, 0x025F, 0x0028, 0x0010);
	enum();
labelFunc0428_0096:
	for (var000D in var000A with var000B to var000C) attend labelFunc0428_00BF;
	var000E = UI_get_item_flag(var000D, 0x0012);
	if (!(!var000E)) goto labelFunc0428_00BC;
	UI_remove_item(var000D);
labelFunc0428_00BC:
	goto labelFunc0428_0096;
labelFunc0428_00BF:
	var000F = UI_find_nearby(item, 0x00FB, 0x0019, 0x0000);
	Func0917(var000F, 0x0001);
	var0010 = UI_find_nearby(item, 0x0096, 0x0019, 0x0000);
	var0011 = Func0910(var0010);
	var0012 = UI_find_nearby(item, 0x03C1, 0x0064, 0x0010);
	Func083A(var0012);
labelFunc0428_010A:
	if (!(event == 0x0000)) goto labelFunc0428_01BF;
	if (!(var0001 == 0x001D)) goto labelFunc0428_01BF;
	if (!(var0000 == 0x0000)) goto labelFunc0428_0184;
	var000D = UI_find_nearby(0xFFD8, 0x025F, 0x0002, 0x0010);
	var0013 = UI_get_item_quality(var000D);
	if (!(var0013 == 0x000F)) goto labelFunc0428_0184;
	UI_remove_item(var000D);
	UI_move_object(0xFFD8, [0x0503, 0x08C7, 0x0000]);
	UI_set_new_schedules(0xFFD8, 0x0000, 0x001A, [0x0503, 0x08C7]);
	UI_run_schedule(0xFFD8);
labelFunc0428_0184:
	if (!(var0000 > 0x0002)) goto labelFunc0428_01BF;
	UI_set_schedule_type(0xFFD8, 0x000F);
	var0011 = UI_execute_usecode_array(0xFFD8, [(byte)0x23, (byte)0x30, (byte)0x32]);
	var0000 = (var0000 + 0x0001);
	UI_set_npc_id(0xFFD8, var0000);
labelFunc0428_01BF:
	if (!(event == 0x0001)) goto labelFunc0428_0211;
	UI_item_say(0xFE9C, "@Captain?@");
	0xFFD8->Func07D1();
	Func097F(0xFFD8, "@Aye, matey?@", 0x0002);
	if (!gflags[0x01D1]) goto labelFunc0428_01F6;
	UI_set_schedule_type(0xFFD8, 0x0003);
	goto labelFunc0428_0211;
labelFunc0428_01F6:
	UI_show_npc_face0(0xFFD8, 0x0000);
	message("\"Could ye unlock this door and let me go?\"");
	say();
	Func097F(0xFFD8, "@I am cold...@", 0x0000);
	abort;
labelFunc0428_0211:
	if (!(event == 0x0009)) goto labelFunc0428_07C4;
	UI_run_schedule(0xFFD8);
	UI_show_npc_face0(0xFFD8, 0x0000);
	if (!gflags[0x0004]) goto labelFunc0428_025C;
	message("\"I had hoped ta see ye again, ");
	message(var0005);
	message(".\" ~\"Mine health is failin' me, an' I wanted ta be sure the Arabella went ta someone I can trust to care for her.\" *\"I have no living kin no more...\" ~\"So I want ye ta take her.\"");
	say();
	message("\"Thou art a brave ");
	message(var0005);
	message(".\" ~\"An' thou wert willin' ta spend a bit o' thy time listening ta an old man's tales.\" *\"Thou... art...\" ~\"Worthy...\"");
	say();
	var0014 = Func0992(0x0001, "@He is dead!@", "@He is dead.@", false);
	UI_kill_npc(0xFFD8);
	abort;
labelFunc0428_025C:
	var0015 = UI_get_item_flag(0xFFD8, 0x001C);
	if (!(var0015 == false)) goto labelFunc0428_02AF;
	message("\"How pleasant to make thine acquaintance, ");
	message(var0005);
	message(".\" ~\"I be Hawk, captain of the good ship Arabella.\"");
	say();
	UI_set_npc_id(0xFFD8, 0x0000);
	UI_set_new_schedules(0xFFD8, 0x0000, 0x001A, [0x0503, 0x08C7]);
	UI_run_schedule(0xFFD8);
	UI_set_item_flag(0xFFD8, 0x001C);
	goto labelFunc0428_02B9;
labelFunc0428_02AF:
	message("\"A pleasure ta see ye again, ");
	message(var0004);
	message("!\"");
	say();
labelFunc0428_02B9:
	if (!(var0000 == 0x0000)) goto labelFunc0428_03AB;
	message("\"I could use a stiff drink, ");
	message(var0005);
	message(".\"");
	say();
	message("\"Thou canst talk ta me at the pub!\"");
	say();
	var0016 = UI_get_object_position(0xFFD8);
	if (!((var0016[0x0001] >= 0x0AF1) && ((var0016[0x0001] <= 0x0AFE) && ((var0016[0x0002] >= 0x00C1) && (var0016[0x0002] <= 0x00DE))))) goto labelFunc0428_039B;
	var000D = UI_create_new_object(0x025F);
	if (!var000D) goto labelFunc0428_034D;
	var0011 = UI_set_item_quality(var000D, 0x0000);
	UI_set_item_frame(var000D, 0x0000);
	UI_set_item_flag(var000D, 0x0012);
	var0011 = UI_update_last_created([0x0AFC, 0x00CF, 0x0000]);
labelFunc0428_034D:
	var000D = UI_create_new_object(0x025F);
	if (!var000D) goto labelFunc0428_0391;
	var0011 = UI_set_item_quality(var000D, 0x000F);
	UI_set_item_frame(var000D, 0x0001);
	UI_set_item_flag(var000D, 0x0012);
	var0011 = UI_update_last_created([0x0AF6, 0x00DE, 0x0003]);
labelFunc0428_0391:
	UI_set_schedule_type(0xFFD8, 0x001D);
labelFunc0428_039B:
	Func097F(0xFFD8, "@I need a drink!@", 0x0000);
	abort;
	goto labelFunc0428_03B5;
labelFunc0428_03AB:
	message("\"So what can I do for ye, ");
	message(var0005);
	message("?\"");
	say();
labelFunc0428_03B5:
	if (!(var0006 == 0x0009)) goto labelFunc0428_03D0;
	message("\"I thank ye for releasing me from that cell!\" ~\"I never expected ta end up in jail over not wantin' ta sail in these blasted storms!\" *\"If there's anything that I can do for ye, thou shouldst tell me.\" ~\"Cap'n Hawk is a man of his word!\"");
	say();
	UI_add_answer(["jail", "storms"]);
labelFunc0428_03D0:
	if (!((!gflags[0x01CC]) && (!gflags[0x01CB]))) goto labelFunc0428_03E3;
	UI_add_answer("journey");
labelFunc0428_03E3:
	if (!(gflags[0x01CC] && (!UI_get_item_flag(0x01E0, 0x001C)))) goto labelFunc0428_03FC;
	UI_add_answer("leave island");
labelFunc0428_03FC:
	if (!(gflags[0x0108] && (!gflags[0x028C]))) goto labelFunc0428_040E;
	UI_add_answer("pinecone");
labelFunc0428_040E:
	if (!(gflags[0x010A] && (!gflags[0x0295]))) goto labelFunc0428_0420;
	UI_add_answer("blue egg");
labelFunc0428_0420:
	UI_add_answer(["bye"]);
labelFunc0428_042A:
	converse attend labelFunc0428_07C3;
	case "jail" attend labelFunc0428_0450:
	message("\"Now if that ain't gratitude for ye!\" ~\"Here I refused ta risk the Arabella and them passengers ta the terrible fierce weather.\" *\"And one of them goes and calls the Pikemen on me!\"");
	say();
	UI_remove_answer("jail");
	UI_add_answer(["Arabella", "passengers", "Pikemen"]);
labelFunc0428_0450:
	case "Arabella" attend labelFunc0428_0469:
	message("\"The Arabella is my ship, ");
	message(var0005);
	message(".\" ~\"She's named after me dear, departed wife...\" ~\"And dearer ta me than a good, stiff drink!\"");
	say();
	UI_remove_answer("Arabella");
labelFunc0428_0469:
	case "passengers" attend labelFunc0428_048C:
	message("\"I had three passengers for the trip over to Moonshade.\" ~\"There's a fellow named Kane, a scurvy merchant named Flindo, and a pretty lass named Selina.\"");
	say();
	UI_remove_answer("passengers");
	UI_add_answer(["Kane", "Flindo", "Selina"]);
labelFunc0428_048C:
	case "Kane" attend labelFunc0428_04A6:
	message("\"Seems I heard tell he was a sheepherder or something.\" ~\"Kane wants ta go talk ta some of those fancy wizards over in Moonshade...\" *\"See if they kin help him find what happened ta his older brother who disappeared a few months ago.\" ~\"Ye can't miss him... He always has a bird with him.\"");
	say();
	UI_remove_answer("Kane");
	UI_add_answer("bird");
labelFunc0428_04A6:
	case "bird" attend labelFunc0428_04BF:
	message("\"Bird must have been a sailor, ");
	message(var0005);
	message("!\" ~\"Never seen anything like it! The bird has a real fondness for a stout drink.\" *\"It doth talk purty well, too.\"");
	say();
	UI_remove_answer("bird");
labelFunc0428_04BF:
	case "Flindo" attend labelFunc0428_0553:
	message("\"That worm!\" ~\"He'd spit in yer last cup of grog he would, if he thought he could make money off it!\"");
	say();
	if (!(var0007 == true)) goto labelFunc0428_0541;
	UI_show_npc_face1(0xFFD6, 0x0000);
	message("\"Thou art a fine one to talk, thou bilge-water rat!\" ~\"Thou wouldst hold an honest merchant hostage to thy drinking sprees!\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"Why, thou overgrown dung beetle!\" ~\"I told ye when I landed that those seas were no safe place ta be with these forsaken storms!\" *\"And thou shouldst suck salt spray for days on end, ye 'honest' merchant!\" ~\"Then thou'd know the difference between a drunk and a man with a thirst!\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"Thou art the braggart that said he could sail through the fires of hell and back!\" ~\"And the only thirst thou hast is for more money, thou thief!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"Thief, is it!? When I turned down every offer thou didst make ta make me sail out ta sea again?\" ~\"And I fear nothing the sea can throw at me, thou barnacle!\" *\"But I'll not deal with things born of magics, for I'm no fool and no mage!\" ~\"And I warned ye about saying false ta my name before...\"");
	say();
	if (!(var0008 == true)) goto labelFunc0428_0520;
	UI_show_npc_face1(0xFFDA, 0x0000);
	message("\"Now stop that, both of you!\" ~\"This is precisely what happened before!\" *\"If thou dost break any more of my furniture, I will break thine head for thee!\"");
	say();
	UI_remove_npc_face1();
labelFunc0428_0520:
	if (!(var0009 == true)) goto labelFunc0428_053A;
	UI_show_npc_face1(0xFFAF, 0x0000);
	message("\"Will you two be quiet!\" ~\"You are loud enough to wake the dead...\" ~\"And I am beginning to lose patience with both of you!\"");
	say();
	UI_remove_npc_face1();
labelFunc0428_053A:
	UI_set_conversation_slot(0x0000);
labelFunc0428_0541:
	message("\"Flindo was the one that bribed the Pikemen into pulling me away from the fight he started!\"");
	say();
	UI_remove_answer("Flindo");
	UI_add_answer("bribed");
labelFunc0428_0553:
	case "bribed" attend labelFunc0428_057D:
	message("\"Aye, bribed!\" ~\"I heard some of those scum...\"");
	say();
	if (!(var0008 == true)) goto labelFunc0428_056B;
	message("\"...Er, Pikemen. Sorry, Argus.\"");
	say();
labelFunc0428_056B:
	message("\"Talking just after I woke up.\" ~\"Seems like Flindo payed them ta rough me up so that I'd decide not ta stay and go back ta Moonshade.\" *\"But, moneybags Flindo didn't count on those swine getting greedy!\"");
	say();
	UI_remove_answer("bribed");
	UI_remove_answer("greedy");
labelFunc0428_057D:
	case "greedy" attend labelFunc0428_0590:
	message("\"They thought they could make me pay for my release, but I have no money ta speak of...\" ~\"Then they thought they could convince Flindo ta pay my way out, but either he'd spent all his money bribing them ta rough me up or he wouldn't pay it out of spite!\"");
	say();
	UI_remove_answer("greedy");
labelFunc0428_0590:
	case "Selina" attend labelFunc0428_05BE:
	message("\"Pretty little thing, ");
	message(var0005);
	message("... Brought her over from Moonshade a while back. Might have been the return trip from takin' that fat sage Batlin across.\"");
	say();
	message("\"An' a sullen, bossy sort of fellow he was, too. Did not even have the decency ta lift a mug wit' me during the crossing! Bah! But what was I talkin' about... Ah yes, that lovely slip of a lass, Selina.\"");
	say();
	message("\"She must have been someone's servant. Said she wanted ta go home for a visit. Said she might be here for me ta take her back.\"");
	say();
	UI_remove_answer("Selina");
	UI_add_answer(["servant", "home"]);
labelFunc0428_05BE:
	case "servant" attend labelFunc0428_05D1:
	message("\"Selina certainly isn't one of those over-dressed mages, for sure!\" ~\"She's too timid ta be anything but a servant.\"");
	say();
	UI_remove_answer("servant");
labelFunc0428_05D1:
	case "home" attend labelFunc0428_05E4:
	message("\"I don't think she said, but I did perceive it was somewhere like Monitor.\"");
	say();
	UI_remove_answer("home");
labelFunc0428_05E4:
	case "Pikemen" attend labelFunc0428_0612:
	message("\"Well, to honor the fine keeper of this establishment...\"");
	say();
	if (!gflags[0x003E]) goto labelFunc0428_0600;
	message("\"'An thee, o' course, ");
	message(var0005);
	message("...\"");
	say();
labelFunc0428_0600:
	message("\"I'll try ta be kind.\" ~\"So I'll merely say that Monitor's finest are no longer cut from the same sailcloth as Argus...\" *\"If what I've seen and heard is any judge, I'd say that the Pikemen are more interested in money than in valor... and me treasure.\"");
	say();
	UI_remove_answer("Pikemen");
	UI_add_answer("treasure");
labelFunc0428_0612:
	case "treasure" attend labelFunc0428_0629:
	message("\"Aye, treasure... from me wilder, younger days.\"");
	say();
	message("\"Those Pikemen scoundrels tried ta convince me ta tell 'em where I keep me map. 'Tis lucky fer me that Argus would never let 'em search me room. I never keep it on me... Hide it in me room most times.\"");
	say();
	UI_remove_answer("treasure");
labelFunc0428_0629:
	case "storms" attend labelFunc0428_0642:
	message("\"I've sailed the seas almost all the days of my life, ");
	message(var0005);
	message(".\" ~\"And I'll tell ye that there's nothing on the water that I can't sail a ship through.\" *\"But how can a man fight something that plucks a ship out o' the water, or turns a ship's sails into slabs of stone?\" ~\"And I'll not think me a coward ta tell ye that these storms have me plenty mindful of how deep them seas are!\"");
	say();
	UI_remove_answer("storms");
labelFunc0428_0642:
	case "journey" attend labelFunc0428_068C:
	UI_remove_answer("journey");
	if (!(var0000 == 0x0001)) goto labelFunc0428_068B;
	message("\"I can take ye to Moonshade, ");
	message(var0005);
	message(".\" ~\"Wait for me out on the Arabella, and we'll try to outrace these blasted storms!\"");
	say();
	Func097F(0xFFD8, "The Arabella sails in two minutes!", 0x000A);
	var0017 = UI_get_npc_object(0xFFD8);
	UI_set_npc_id(0xFFD8, 0x0002);
	var0000 = 0x0002;
labelFunc0428_068B:
	abort;
labelFunc0428_068C:
	case "leave island" attend labelFunc0428_06B4:
	if (!gflags[0x01BD]) goto labelFunc0428_06A9;
	message("\"So ye're still trying ta leave this island?\"");
	say();
	message("\"Well, I didn't want ta mention it before, but\tthere are caves in the southern mountains.\" ~\"Legend says they lead ta the mainland, if thou canst find the right path...\" ~\"But none who ventured there have ever returned!\" ~\"I wager that Julia doth have possession of a key that would let thee in down there, but I would think twice if I were thee before I made such a journey!\"");
	say();
	gflags[0x00ED] = true;
	goto labelFunc0428_06AD;
labelFunc0428_06A9:
	message("\"Not on my ship, thou won't!\" ~\"'Tis too dangerous ta sail these waters in these storms!\" *\"If thou dost want ta travel elsewhere, why not speak ta the mages?\" ~\"They know how ta magic themselves for short distances...\" *\"And I've heard it said that Old Erstam the Mad Mage can travel anywhere he pleases!\"");
	say();
labelFunc0428_06AD:
	UI_remove_answer("leave island");
labelFunc0428_06B4:
	case "blue egg" attend labelFunc0428_073D:
	if (!Func097D(0xFE9B, 0x0001, 0x0241, 0xFE99, 0x0003)) goto labelFunc0428_0707;
	message("\"A rotten egg!\" ~\"Why art thou shoving such a thing at me?\"");
	say();
	if (!Func0942(0xFFE2)) goto labelFunc0428_0704;
	UI_show_npc_face1(0xFFE2, 0x0000);
	message("\"Take that thing out of here!\" ~\"My patrons are trying to eat!\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	Func097F(0xFFE4, "@Phew!@", 0x0005);
	abort;
labelFunc0428_0704:
	goto labelFunc0428_0736;
labelFunc0428_0707:
	message("\"A blue aig?\" ~\"");
	message(var0005);
	message(", I have never seen or heard of any such thing in all my\ttravels.\" *\"Might be that thou shouldst ask a scholar, like Fedabiblio the Magister, though.\"");
	say();
	var0014 = Func0992(0x0001, "@But he sent us to thee!@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!(var0014 != 0xFE9C)) goto labelFunc0428_0736;
	message("\"Then ye be out of luck, matey.\"");
	say();
labelFunc0428_0736:
	UI_remove_answer("blue egg");
labelFunc0428_073D:
	case "pinecone" attend labelFunc0428_0799:
	if (!Func097D(0xFE9B, 0x0001, 0x0108, 0xFE99, 0xFE99)) goto labelFunc0428_0786;
	message("\"Anyone can see 'tis a pinecone...\" ~\"What's thy question?\"");
	say();
	var0014 = Func0992(0x0001, "@But where doth it come from?@", "@Where can I find pinecones?@", false);
	UI_show_npc_face0(0xFFD8, 0x0000);
	UI_set_conversation_slot(0x0000);
	message("\"In the northern woods, of course.\" ~\"But thou canst not travel there no more -- no ship will sail there, and the Swamp of\tGorlab will let no man pass!\"");
	say();
	goto labelFunc0428_078E;
labelFunc0428_0786:
	message("\"Pinecones come from the northern woods.\" ~\"Purty things, ain't they? I collect 'em and give 'em to sweet gals like Bucia at the Canton.\"");
	say();
	message("\"Can't git 'em now.\" ~\"Ain't gonna sail my ship no more, and a ship is the only way past Gorlab Swamp.\"");
	say();
labelFunc0428_078E:
	gflags[0x028C] = true;
	UI_remove_answer("pinecone");
labelFunc0428_0799:
	case "bye" attend labelFunc0428_07C0:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Fair weather, Captain!@", 0x0000);
	Func097F(0xFFD8, "@Smooth sailin'!@", 0x0002);
	goto labelFunc0428_07C3;
labelFunc0428_07C0:
	goto labelFunc0428_042A;
labelFunc0428_07C3:
	endconv;
labelFunc0428_07C4:
	return;
}


