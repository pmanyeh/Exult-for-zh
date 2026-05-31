#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func08E5 0x8E5 (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func092E 0x92E (var var0000);

void Func0407 object#(0x407) ()
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

	if (!(event == 0x0001)) goto labelFunc0407_040E;
	UI_show_npc_face(0xFFF9, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_is_pc_female();
	var0002 = UI_get_party_list();
	var0003 = UI_get_npc_object(0xFFF9);
	var0004 = Func0908();
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFF9));
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0003 in var0002)) goto labelFunc0407_0066;
	UI_add_answer("leave");
labelFunc0407_0066:
	if (!(!gflags[0x001A])) goto labelFunc0407_0078;
	message("You see a dashing, slender man, stylishly dressed, with a lot of flair.");
	say();
	gflags[0x001A] = true;
	goto labelFunc0407_0082;
labelFunc0407_0078:
	message("\"How may I help thee, ");
	message(var0004);
	message("?\" Sentri asks.");
	say();
labelFunc0407_0082:
	converse attend labelFunc0407_0409;
	case "name" attend labelFunc0407_0098:
	message("\"Thou dost not remember me? I am Sentri! We have gone adventuring together in the past!\"");
	say();
	UI_remove_answer("name");
labelFunc0407_0098:
	case "job" attend labelFunc0407_00D4:
	message("\"When I am not adventuring with old friends, I am a trainer in Britain. I specialize in combat involving swordsmanship. I am quite good at that, as thou dost remember.\"");
	say();
	var0002 = UI_get_party_list();
	if (!(!(var0003 in var0002))) goto labelFunc0407_00C1;
	message("\"But I would drop everything to join thy group if thou art not too encumbered.\"");
	say();
	UI_add_answer("join");
labelFunc0407_00C1:
	UI_add_answer(["Britain", "swordsmanship", "train", "friends"]);
labelFunc0407_00D4:
	case "friends" attend labelFunc0407_00F7:
	message("\"I do not see our old friends Iolo, Shamino, or Dupre much.\"");
	say();
	UI_remove_answer("friends");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0407_00F7:
	case "swordsmanship" attend labelFunc0407_010A:
	message("Sentri draws his sword so quickly it is like a flash of lightning. He does a few fancy moves, slashing the air with the blade. \"No foe shall stand after I am finished with him!\"");
	say();
	UI_remove_answer("swordsmanship");
labelFunc0407_010A:
	case "join" attend labelFunc0407_0166:
	var0006 = 0x0000;
	var0002 = UI_get_party_list();
	enum();
labelFunc0407_0120:
	for (var0009 in var0002 with var0007 to var0008) attend labelFunc0407_0138;
	var0006 = (var0006 + 0x0001);
	goto labelFunc0407_0120;
labelFunc0407_0138:
	if (!(var0006 < 0x0006)) goto labelFunc0407_015B;
	message("Sentri bows. \"I am very pleased to join thy group.\"");
	say();
	gflags[0x00DB] = true;
	UI_add_to_party(0xFFF9);
	UI_add_answer("leave");
	goto labelFunc0407_015F;
labelFunc0407_015B:
	message("\"I like small crowds, Avatar. Thou art travelling with a group too large for my tastes. If thou shouldst lose someone along the way, return and I shall be happy to join thee.\"");
	say();
labelFunc0407_015F:
	UI_remove_answer("join");
labelFunc0407_0166:
	case "leave" attend labelFunc0407_01D4:
	message("\"Dost thou want me to wait here or go home?\"");
	say();
	UI_clear_answers();
	var000A = Func090B(["wait here", "go home"]);
	if (!(var000A == "wait here")) goto labelFunc0407_01B0;
	message("\"Very good. I shall wait here until thou dost return.\"*");
	say();
	gflags[0x00DB] = false;
	UI_remove_from_party(0xFFF9);
	UI_set_schedule_type(UI_get_npc_object(0xFFF9), 0x000F);
	abort;
	goto labelFunc0407_01D4;
labelFunc0407_01B0:
	message("\"Farewell, ");
	message(var0004);
	message(". If thou dost need my services again, I shall be only too happy to comply.\"*");
	say();
	gflags[0x00DB] = false;
	UI_remove_from_party(0xFFF9);
	UI_set_schedule_type(UI_get_npc_object(0xFFF9), 0x000B);
	abort;
labelFunc0407_01D4:
	case "Britain" attend labelFunc0407_01EE:
	message("\"I am becoming weary of the place. It is having growth pains of which the bourgeoisie are unaware. All is not as serene as the noblemen present it.\"");
	say();
	UI_remove_answer("Britain");
	UI_add_answer("not serene");
labelFunc0407_01EE:
	case "not serene" attend labelFunc0407_0208:
	message("\"Well, for example, try going to one of the smaller towns, say, Paws. It is a poor man's place. It reeks, too. And 'tis only just beyond the Britain town limits. More money should be put into improving the land as a whole, not just in building new buildings in the capitol city. I do not know what Lord British is thinking!\"");
	say();
	UI_remove_answer("not serene");
	UI_add_answer("Lord British");
labelFunc0407_0208:
	case "train" attend labelFunc0407_0277:
	if (!(!gflags[0x00DB])) goto labelFunc0407_026A;
	var0005 = UI_get_schedule_type(UI_get_npc_object(0xFFF9));
	if (!((var0005 == 0x001B) || ((var0005 == 0x000B) || (var0005 == 0x000F)))) goto labelFunc0407_025C;
	message("\"My fee is 30 gold for a training session. Is this all right?\"");
	say();
	if (!Func090A()) goto labelFunc0407_0255;
	Func08E5(0x0001, 0x001E);
	goto labelFunc0407_0259;
labelFunc0407_0255:
	message("\"Then I shall rob someone else!\" Sentri laughs aloud.");
	say();
labelFunc0407_0259:
	goto labelFunc0407_0267;
labelFunc0407_025C:
	message("\"I am afraid I must adhere to my policy of training only during my business hours. This applies to -all- of my friends.\"");
	say();
	UI_remove_answer("train");
labelFunc0407_0267:
	goto labelFunc0407_0277;
labelFunc0407_026A:
	message("\"Since I am a member of thy group, I shall train thee for free!\"");
	say();
	Func08E5(0x0001, 0x0000);
labelFunc0407_0277:
	case "Iolo" attend labelFunc0407_02C3:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0407_02B8;
	message("\"How art thou, friend? Thou dost look like thou couldst use a little training thyself!\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"What is this? Everyone doth make fun of my physique!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF9, 0x0000);
	message("\"I am not making fun, Iolo. I am serious!\" Sentri laughs.");
	say();
	goto labelFunc0407_02BC;
labelFunc0407_02B8:
	message("\"I miss that fellow!\"");
	say();
labelFunc0407_02BC:
	UI_remove_answer("Iolo");
labelFunc0407_02C3:
	case "Shamino" attend labelFunc0407_0335:
	var000C = Func08F7(0xFFFD);
	if (!var000C) goto labelFunc0407_032A;
	message("\"Say, Shamino, art thou still spending thy time dressing in women's clothes?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"-What-?!?!\"*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("\"Or art thou wasting away thy life in a healer's den, now that thou art in thy middle ages?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"Careful, friend. Those are fighting words!\"*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("Sentri punches Shamino good-naturedly. \"And that is all they are, my dear friend. Words! 'Tis good to see thee!\"");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF9, 0x0000);
	goto labelFunc0407_032E;
labelFunc0407_032A:
	message("\"'Twould be good to share a joke or two with him!\"");
	say();
labelFunc0407_032E:
	UI_remove_answer("Shamino");
labelFunc0407_0335:
	case "Dupre" attend labelFunc0407_03E8:
	var000D = Func08F7(0xFFFC);
	if (!var000D) goto labelFunc0407_03DD;
	message("\"Ah, my good friend Dupre! Hast thou some good ale on thee?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	var000E = Func0931(0xFFFC, 0x0001, 0x0268, 0xFE99, 0x0003);
	if (!var000E) goto labelFunc0407_03B7;
	message("\"Art thou joking? I -always- have ale!\"*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("\"Then we should have some before someone else does!\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"'Twould be a pleasure. However, I must be prudent and save the ale for when we need it.\"*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("Sentri feels of Dupre's head. \"Art thou feeling all right, Dupre? Or has knighthood done something to thy brain?\"");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF9, 0x0000);
	goto labelFunc0407_03DA;
labelFunc0407_03B7:
	message("\"No, but I would be glad to stop in a pub and share a few pints with thee!\"*");
	say();
	UI_show_npc_face(0xFFF9, 0x0000);
	message("\"Mmmm! Sounds good to me! Next time we pass a place, let us stop!\"");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF9, 0x0000);
labelFunc0407_03DA:
	goto labelFunc0407_03E1;
labelFunc0407_03DD:
	message("\"I want to see that no-good trouble-maker! He is a knight now, I hear! Sir Dupre indeed!\"");
	say();
labelFunc0407_03E1:
	UI_remove_answer("Dupre");
labelFunc0407_03E8:
	case "Lord British" attend labelFunc0407_03FB:
	message("\"I never see him much. He stays in that castle of his all the time. He never gets out. No wonder he hasn't a clue what is going on in this country.\"");
	say();
	UI_remove_answer("Lord British");
labelFunc0407_03FB:
	case "bye" attend labelFunc0407_0406:
	goto labelFunc0407_0409;
labelFunc0407_0406:
	goto labelFunc0407_0082;
labelFunc0407_0409:
	endconv;
	message("\"Until later.\"*");
	say();
labelFunc0407_040E:
	if (!(event == 0x0000)) goto labelFunc0407_041C;
	Func092E(0xFFF9);
labelFunc0407_041C:
	return;
}


