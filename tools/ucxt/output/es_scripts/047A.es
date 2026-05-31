#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047A object#(0x47A) ()
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
	var var0018;
	var var0019;

	if (!(event == 0x0001)) goto labelFunc047A_054A;
	UI_show_npc_face(0xFF86, 0x0000);
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFF86));
	UI_add_answer(["name", "job", "bye"]);
	var0004 = Func08F7(0xFF85);
	if (!(!gflags[0x0174])) goto labelFunc047A_005F;
	message("A pretty woman gives you a friendly grin and then coyly turns her eyes away from you.");
	say();
	gflags[0x0174] = true;
	goto labelFunc047A_0069;
labelFunc047A_005F:
	message("\"I bid thee welcome once again, ");
	message(var0000);
	message(",\" says Ophelia.");
	say();
labelFunc047A_0069:
	if (!gflags[0x02D7]) goto labelFunc047A_0076;
	UI_add_answer("Cosmo");
labelFunc047A_0076:
	if (!gflags[0x016E]) goto labelFunc047A_0083;
	UI_add_answer("Sprellic");
labelFunc047A_0083:
	var0005 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0006 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0007 = UI_is_dead(UI_get_npc_object(0xFF81));
	var0008 = UI_is_dead(UI_get_npc_object(0xFF84));
	if (!gflags[0x0165]) goto labelFunc047A_00EA;
	if (!(var0005 && (var0006 && var0007))) goto labelFunc047A_00D6;
	UI_add_answer("winnings");
labelFunc047A_00D6:
	if (!var0008) goto labelFunc047A_00EA;
	UI_add_answer("Sprellic dead");
	UI_remove_answer("Sprellic");
labelFunc047A_00EA:
	converse attend labelFunc047A_053F;
	case "name" attend labelFunc047A_0106:
	message("\"My name is Ophelia, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc047A_0106:
	case "job" attend labelFunc047A_0122:
	message("\"I am a barmaid. I do most of the work at The Bunk and Stool here in Jhelom.\"");
	say();
	UI_add_answer(["work", "Bunk and Stool", "Jhelom"]);
labelFunc047A_0122:
	case "work" attend labelFunc047A_0149:
	message("\"Ever since Sprellic, the owner, was challenged to those duels by the three students at the Library of Scars, he has been busy preparing himself. I have been running the place all by myself... although Daphne has been helping me, I suppose.\"");
	say();
	gflags[0x016E] = true;
	UI_remove_answer("work");
	UI_add_answer(["Sprellic", "Library", "Daphne"]);
labelFunc047A_0149:
	case "Daphne" attend labelFunc047A_01A6:
	message("\"Honestly, I cannot imagine why thou wouldst be interested in her.\" She lets out a throaty laugh.*");
	say();
	var0004 = Func08F7(0xFF85);
	if (!var0004) goto labelFunc047A_019F;
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"I heard that, Ophelia. Thou art a spiteful wench!\"*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("\"Now, now, Daphne. Temper, Temper! We don't want to scare off the patrons with a poor disposition in addition to a poor face!\"*");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"Witch!\"*");
	say();
	UI_remove_npc_face(0xFF85);
	UI_show_npc_face(0xFF86, 0x0000);
labelFunc047A_019F:
	UI_remove_answer("Daphne");
labelFunc047A_01A6:
	case "Bunk and Stool" attend labelFunc047A_01CC:
	message("\"'Tis said that indeed many strange things happen at this bar. As of late, in addition to being an inn and a pub, where thou mayest buy fine food and drink, it has become a betting parlor.\"");
	say();
	UI_remove_answer("Bunk and Stool");
	UI_add_answer(["strange", "food", "room", "betting"]);
labelFunc047A_01CC:
	case "Jhelom" attend labelFunc047A_01DF:
	message("\"It is a pretty rough place to work, but,\" she whispers to you in confidence, \"I must confess I find myself attracted to the type of men that live here.\"");
	say();
	UI_remove_answer("Jhelom");
labelFunc047A_01DF:
	case "Library" attend labelFunc047A_01F2:
	message("\"Surely thou hast heard of our famous school for fighters by now! What kind of a world traveller art thou? Do not answer. 'Twas a rhetorical question,\" she sniffs.");
	say();
	UI_remove_answer("Library");
labelFunc047A_01F2:
	case "food" attend labelFunc047A_0205:
	message("\"Thou shalt have to see Daphne about that. Thou wouldst not expect me to have to go into the kitchen?\" Ophelia laughs.");
	say();
	UI_remove_answer("food");
labelFunc047A_0205:
	case "room" attend labelFunc047A_02CF:
	if (!(var0003 == 0x0010)) goto labelFunc047A_02C4;
	message("\"For naught more than 5 gold thou canst get a lovely room. Dost thou wish to stay the night?\"");
	say();
	if (!Func090A()) goto labelFunc047A_02BD;
	var0009 = UI_get_party_list();
	var000A = 0x0000;
	enum();
labelFunc047A_022F:
	for (var000D in var0009 with var000B to var000C) attend labelFunc047A_0247;
	var000A = (var000A + 0x0001);
	goto labelFunc047A_022F;
labelFunc047A_0247:
	var000E = (var000A * 0x0005);
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var000E)) goto labelFunc047A_02B0;
	var0010 = UI_add_party_items(0x0001, 0x0281, 0x00FF, 0xFE99, true);
	if (!var0010) goto labelFunc047A_02A3;
	message("\"Here is thy key. Be warned, 'twill only work in this establishment, and only for one use.\"");
	say();
	var0011 = UI_remove_party_items(var000E, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc047A_02AD;
labelFunc047A_02A3:
	message("\"Sorry, ");
	message(var0000);
	message(", thou must lose some weight, er, some bundles, before I can give thee the room key.\"");
	say();
labelFunc047A_02AD:
	goto labelFunc047A_02BA;
labelFunc047A_02B0:
	message("\"I am truly sorry, ");
	message(var0000);
	message(", but the rooms cost more gold than thou hast.\"");
	say();
labelFunc047A_02BA:
	goto labelFunc047A_02C1;
labelFunc047A_02BD:
	message("\"Our rooms are not good enough, I suppose,\" she says, scowling.");
	say();
labelFunc047A_02C1:
	goto labelFunc047A_02C8;
labelFunc047A_02C4:
	message("\"Right now I am not at work so please do not address me as if I were.\"");
	say();
labelFunc047A_02C8:
	UI_remove_answer("room");
labelFunc047A_02CF:
	case "Sprellic" attend labelFunc047A_02E9:
	message("\"No one knows old Sprellic better than myself. Although he does not look it, he may well be the deadliest fighting master in all of Britannia.\"");
	say();
	UI_remove_answer("Sprellic");
	UI_add_answer("master");
labelFunc047A_02E9:
	case "master" attend labelFunc047A_0303:
	message("\"After he defeats the fighters of the Library of Scars, he may open his own school teaching his own unique style of fighting.\"");
	say();
	UI_remove_answer("master");
	UI_add_answer("school");
labelFunc047A_0303:
	case "school" attend labelFunc047A_031D:
	message("\"It will be a great fighting school. Already, fighting men and women are coming to Jhelom to become Sprellic's students. They all long to know the secret that I can tell thee right now.\"");
	say();
	UI_remove_answer("school");
	UI_add_answer("secret");
labelFunc047A_031D:
	case "secret" attend labelFunc047A_033E:
	if (!(!var0001)) goto labelFunc047A_0333;
	message("Ophelia motions you closer to her. She whispers to you. \"Sprellic is really the Avatar returned to us after all these years.\" She nods solemnly.");
	say();
	goto labelFunc047A_0337;
labelFunc047A_0333:
	message("Ophelia motions you closer to her. She whispers to you. \"Sprellic can call upon the Avatar to come and be his champion.\" She nods solemnly.");
	say();
labelFunc047A_0337:
	UI_remove_answer("secret");
labelFunc047A_033E:
	case "strange" attend labelFunc047A_0351:
	message("\"In case thou hast not noticed, this is a rough town. We see all types of odd characters in this place.\" She looks you over carefully.");
	say();
	UI_remove_answer("strange");
labelFunc047A_0351:
	case "betting" attend labelFunc047A_044E:
	if (!(var0006 || (var0005 || (var0007 || var0008)))) goto labelFunc047A_0372;
	message("\"Sorry, all bets are off, due to the... er, unfortunate passing on of one or more of the parties involved.\"");
	say();
	goto labelFunc047A_0447;
labelFunc047A_0372:
	message("\"I am taking wagers on Sprellic's duels. Wouldst thou like to place a bet?\"");
	say();
	var0012 = Func090A();
	if (!var0012) goto labelFunc047A_0443;
	message("\"How much wouldst thou like to bet that Sprellic defeats all three of his challengers?\"");
	say();
labelFunc047A_0386:
	var0012 = UI_input_numeric_value(0x0000, 0x00C8, 0x000A, 0x0000);
	if (!(var0012 == 0x0000)) goto labelFunc047A_03AA;
	message("\"Perhaps thou art not truly serious about thy convictions. Mayhaps Daphne will take thy line of bets.\"");
	say();
	goto labelFunc047A_0440;
labelFunc047A_03AA:
	message("\"Thou wouldst bet ");
	message(var0012);
	message(" gold that Sprellic will win?\"");
	say();
	var0013 = Func090A();
	if (!(!var0013)) goto labelFunc047A_03CB;
	message("\"Very well. How much wouldst thou like to bet?\"");
	say();
	goto labelFunc047A_0386;
	goto labelFunc047A_0440;
labelFunc047A_03CB:
	var000F = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var000F >= var0012)) goto labelFunc047A_043C;
	message("\"Very well. Let me give thee markers for thy gold. Each one is worth 10 gold coins. If Sprellic wins, thou mayest come collect twice that amount of gold from me.~~\"Should he lose, ");
	message(var0000);
	message(", thy markers are, of course, worthless.\"");
	say();
	var0014 = UI_add_party_items((var0012 / 0x000A), 0x0399, 0xFE99, 0x0000, false);
	if (!var0014) goto labelFunc047A_0435;
	var0015 = UI_remove_party_items(var0012, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0165] = true;
	message("\"I shall soon see thee again, ");
	message(var0000);
	message(".\" You notice she is suppressing a tiny giggle. \"When thou dost return to collect thy winnings.\" For a moment it seems she cannot make eye contact with you.");
	say();
	goto labelFunc047A_0439;
labelFunc047A_0435:
	message("\"Thou must return later when thou hast enough room in thy pack for these markers.\"");
	say();
labelFunc047A_0439:
	goto labelFunc047A_0440;
labelFunc047A_043C:
	message("\"Thou hast not the amount of gold thou dost want to bet! Art thou trying to swindle me?\"");
	say();
labelFunc047A_0440:
	goto labelFunc047A_0447;
labelFunc047A_0443:
	message("\"Then if thou wouldst like to bet against Sprellic, thou mayest see Daphne, but I warn thee thou wilt be throwing thy money away!\"");
	say();
labelFunc047A_0447:
	UI_remove_answer("betting");
labelFunc047A_044E:
	case "winnings" attend labelFunc047A_04C5:
	if (!(!gflags[0x016F])) goto labelFunc047A_04BA;
	var0016 = UI_count_objects(0xFE9B, 0x0399, 0xFE99, 0x0000);
	var0017 = (var0016 * 0x0014);
	var0018 = UI_add_party_items(var0017, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0018) goto labelFunc047A_04B3;
	var0019 = UI_remove_party_items(var0016, 0x0399, 0xFE99, 0x0000, false);
	message("\"I see thou hast returned to collect thy winnings.\" She shrugs and pays them to you.");
	say();
	gflags[0x016F] = true;
	goto labelFunc047A_04B7;
labelFunc047A_04B3:
	message("\"Thou cannot carry that much gold! Return later when thou canst take all thy winnings at one time!\"");
	say();
labelFunc047A_04B7:
	goto labelFunc047A_04BE;
labelFunc047A_04BA:
	message("\"Thou hast already collected thy winnings!\"");
	say();
labelFunc047A_04BE:
	UI_remove_answer("winnings");
labelFunc047A_04C5:
	case "Cosmo" attend labelFunc047A_0519:
	message("\"Who? Oh, he is a local boy who comes in here and moons over me on occasion. Do not concern thyself with him. I do not.\"");
	say();
	if (!var0004) goto labelFunc047A_0512;
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"Why what kind of way is that to speak of he who will soon become thy betrothed! Finally, I can make thee move out of mine house! Every moment of sharing my life with thee has been intolerable!\"*");
	say();
	UI_show_npc_face(0xFF86, 0x0000);
	message("\"Do not get thine hopes up yet, my dear Daphne! I have put a condition on our marriage and poor Cosmo will never be able to fulfill it!\"");
	say();
	UI_show_npc_face(0xFF85, 0x0000);
	message("\"Thou dost never know! The thought of thee in thy wedding gown with thy groom Cosmo at thy side is simply delicious! Perhaps he is the man who will finally teach thee to be a lady at last!\"");
	say();
	UI_remove_npc_face(0xFF85);
	UI_show_npc_face(0xFF86, 0x0000);
labelFunc047A_0512:
	UI_remove_answer("Cosmo");
labelFunc047A_0519:
	case "Sprellic dead" attend labelFunc047A_0531:
	message("\"Hmpf! If thou didst bet against him, then I suppose thou shalt be rich! I wouldst bet that thou wert the one who killed him, too!\"");
	say();
	message("She turns away from you with a sneer.*");
	say();
	UI_remove_answer("Sprellic dead");
	abort;
labelFunc047A_0531:
	case "bye" attend labelFunc047A_053C:
	goto labelFunc047A_053F;
labelFunc047A_053C:
	goto labelFunc047A_00EA;
labelFunc047A_053F:
	endconv;
	message("\"Do come and visit us again, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc047A_054A:
	if (!(event == 0x0000)) goto labelFunc047A_0558;
	Func092E(0xFF86);
labelFunc047A_0558:
	return;
}


