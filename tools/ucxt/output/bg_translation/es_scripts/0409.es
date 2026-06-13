#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0409 object#(0x409) ()
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

	if (!(event == 0x0001)) goto labelFunc0409_043C;
	UI_show_npc_face(0xFFF7, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_party_list();
	var0002 = UI_get_npc_object(0xFFF7);
	var0003 = Func0908();
	var0004 = Func08F7(0xFFFD);
	var0005 = Func08F7(0xFFFF);
	var0006 = Func08F7(0xFFFC);
	UI_add_answer(["name", "job", "bye"]);
	if (!(var0002 in var0001)) goto labelFunc0409_006B;
	UI_add_answer("leave");
labelFunc0409_006B:
	if (!gflags[0x018D]) goto labelFunc0409_0078;
	UI_add_answer("Henry");
labelFunc0409_0078:
	if (!gflags[0x017D]) goto labelFunc0409_0085;
	UI_add_answer("locket");
labelFunc0409_0085:
	if (!gflags[0x0180]) goto labelFunc0409_0092;
	UI_add_answer("strangers");
labelFunc0409_0092:
	if (!(!gflags[0x001C])) goto labelFunc0409_00A4;
	message("You see your old companion Katrina looking only slightly older than when you saw her during your last visit.");
	say();
	gflags[0x001C] = true;
	goto labelFunc0409_00AE;
labelFunc0409_00A4:
	message("\"Hello again, ");
	message(var0003);
	message("!\" Katrina greets you with a smile.");
	say();
labelFunc0409_00AE:
	converse attend labelFunc0409_0431;
	case "name" attend labelFunc0409_00D5:
	message("\"Why,\" she blinks at you, \"I know it has been a long time, but surely thou cannot have forgotten me. I am Katrina. One of thine old companions.\"");
	say();
	message("You share a friendly laugh at your reunion.");
	say();
	UI_add_answer(["old companions", "time"]);
	UI_remove_answer("name");
labelFunc0409_00D5:
	case "old companions" attend labelFunc0409_00F8:
	message("\"Ah, yes, Iolo, Shamino, and Dupre.\"");
	say();
	UI_remove_answer("old companions");
	UI_add_answer(["Iolo", "Shamino", "Dupre"]);
labelFunc0409_00F8:
	case "time" attend labelFunc0409_010B:
	message("\"Although there is a vast difference in how time passes in our world and in this one, I am certain I have aged at least a bit,\" she says pleasantly.");
	say();
	UI_remove_answer("time");
labelFunc0409_010B:
	case "job" attend labelFunc0409_0159:
	if (!(!(var0002 in var0001))) goto labelFunc0409_0148;
	message("\"Why, after last accompanying thee on thine adventures I settled down to the peaceful life of a shepherd in New Magincia.\"");
	say();
	UI_add_answer(["shepherd", "New Magincia"]);
	if (!(!(var0002 in var0001))) goto labelFunc0409_0145;
	message("\"If thou dost have need of me I could join thy party again.\"");
	say();
	UI_add_answer("join");
labelFunc0409_0145:
	goto labelFunc0409_0159;
labelFunc0409_0148:
	message("\"Following thee around, ");
	message(var0000);
	message("! I shall never miss New Magincia!\"");
	say();
	UI_add_answer("New Magincia");
labelFunc0409_0159:
	case "shepherd" attend labelFunc0409_016C:
	message("\"I watch over my flock, and the townspeople as well, when they need me.\"");
	say();
	UI_remove_answer("shepherd");
labelFunc0409_016C:
	case "join" attend labelFunc0409_01D1:
	var0007 = 0x0000;
	var0001 = UI_get_party_list();
	enum();
labelFunc0409_0182:
	for (var000A in var0001 with var0008 to var0009) attend labelFunc0409_019A;
	var0007 = (var0007 + 0x0001);
	goto labelFunc0409_0182;
labelFunc0409_019A:
	if (!(var0007 < 0x0006)) goto labelFunc0409_01C6;
	message("\"It would be an honor, ");
	message(var0000);
	message("!\"");
	say();
	UI_add_to_party(0xFFF7);
	UI_add_answer("leave");
	UI_remove_answer("join");
	goto labelFunc0409_01CA;
labelFunc0409_01C6:
	message("\"I prefer smaller crowds, Avatar. Perhaps later.\"");
	say();
labelFunc0409_01CA:
	UI_remove_answer("join");
labelFunc0409_01D1:
	case "leave" attend labelFunc0409_0231:
	message("\"Dost thou want me to wait here or shall I go on home?\"");
	say();
	UI_clear_answers();
	var000B = Func090B(["wait here", "go home"]);
	if (!(var000B == "wait here")) goto labelFunc0409_0217;
	message("\"I shall be happy to wait here until thou dost return.\"*");
	say();
	UI_remove_from_party(0xFFF7);
	UI_set_schedule_type(UI_get_npc_object(0xFFF7), 0x000F);
	abort;
	goto labelFunc0409_0231;
labelFunc0409_0217:
	message("\"If thou dost think it best, I shall. If thou dost need me again thou dost have but to ask.\"*");
	say();
	UI_remove_from_party(0xFFF7);
	UI_set_schedule_type(UI_get_npc_object(0xFFF7), 0x000B);
	abort;
labelFunc0409_0231:
	case "New Magincia" attend labelFunc0409_024B:
	message("\"We are isolated here. We get no news from the world outside. Life is much the same as it was the last time thou didst visit Britannia two hundred years ago. I have many friends here.\"");
	say();
	UI_add_answer("isolated");
	UI_remove_answer("New Magincia");
labelFunc0409_024B:
	case "isolated" attend labelFunc0409_0271:
	message("\"That is the way we like it here. Now we have three other strangers on the island -- besides thee. Of course, thou couldst hardly be called a stranger. This is the largest number of visitors we have had in years.~~\"But, never fear, ");
	message(var0003);
	message(", I am seldom lonely.\"");
	say();
	UI_remove_answer("isolated");
	UI_add_answer(["lonely", "visitors"]);
labelFunc0409_0271:
	case "lonely" attend labelFunc0409_0294:
	message("\"I have many friends here. When I am lonely, I speak with Alagner the Sage, Russell the shipwright, or Henry the peddler.\"");
	say();
	UI_remove_answer("lonely");
	UI_add_answer(["Alagner", "Russell", "Henry"]);
labelFunc0409_0294:
	case "Alagner" attend labelFunc0409_02A7:
	message("\"He is a wise man who knows many things and tells wonderful stories. Alagner came here to retreat from the outside world. I know not why.\"");
	say();
	UI_remove_answer("Alagner");
labelFunc0409_02A7:
	case "Russell" attend labelFunc0409_02BA:
	message("\"He has a sailor's heart, an artist's soul and a craftsman's hands. He never lived his dream of sailing the world. His ships do that for him.\"");
	say();
	UI_remove_answer("Russell");
labelFunc0409_02BA:
	case "Henry" attend labelFunc0409_02D4:
	message("\"Henry has been a very dear friend for years. He is a simple but good man who does not have an ounce of hate in his heart for anyone. I am so fond of him that I gave him a valuable heirloom.\"");
	say();
	UI_remove_answer("Henry");
	UI_add_answer("heirloom");
labelFunc0409_02D4:
	case "locket", "heirloom" attend labelFunc0409_02F8:
	message("\"Since he does not have much money, I gave Henry my gold locket so he could present it to his sweetheart Constance. I have not talked to him lately, but I must confess I am worried about him.\"");
	say();
	UI_remove_answer("locket");
	UI_remove_answer("heirloom");
	UI_add_answer("worried");
labelFunc0409_02F8:
	case "worried" attend labelFunc0409_030B:
	message("\"Soon after Henry left carrying the locket, I saw the three strangers on the island, wandering off in the same direction.\"");
	say();
	UI_remove_answer("worried");
labelFunc0409_030B:
	case "visitors", "strangers" attend labelFunc0409_032B:
	message("\"The three visitors come from Buccaneer's Den. I met them shortly after their arrival and we spoke briefly. Robin is the one dressed like a gambler and the other two, Battles and Leavell, appear to be bullies.\"");
	say();
	UI_remove_answer(["strangers", "visitors"]);
	gflags[0x0180] = true;
labelFunc0409_032B:
	case "Iolo" attend labelFunc0409_0379:
	if (!(!var0005)) goto labelFunc0409_0341;
	message("\"Iolo should be in our party adventuring with us.\"");
	say();
	goto labelFunc0409_0372;
labelFunc0409_0341:
	message("\"How hast thou been keeping thyself all these years, Iolo?\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"The years have not been as kind to me as they obviously have been to thee, milady.\"*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"Ha! I see thou art still a scallywag, Iolo.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_0372:
	UI_remove_answer("Iolo");
labelFunc0409_0379:
	case "Shamino" attend labelFunc0409_03C7:
	if (!(!var0004)) goto labelFunc0409_038F;
	message("\"Shamino should be here with us.\"");
	say();
	goto labelFunc0409_03C0;
labelFunc0409_038F:
	message("\"Is that a gray hair I see in thine hair, Shamino?\"*");
	say();
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"It is not! Where?\"*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"Perhaps it is but a trick of the light.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_03C0:
	UI_remove_answer("Shamino");
labelFunc0409_03C7:
	case "Dupre" attend labelFunc0409_0423:
	if (!(!var0006)) goto labelFunc0409_03DD;
	message("\"I cannot help but miss Dupre a little. I have not seen him since he was knighted.\"");
	say();
	goto labelFunc0409_041C;
labelFunc0409_03DD:
	message("\"Sir Dupre, hast thou finished thy studies yet?\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre looks confounded. \"My studies, milady?\"*");
	say();
	UI_show_npc_face(0xFFF7, 0x0000);
	message("\"Of all the various drinking establishments in Britannia!\"*");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Oh, yes, of course, my studies! Continuing mine education has always been of the utmost importance to me.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFFF7, 0x0000);
labelFunc0409_041C:
	UI_remove_answer("Dupre");
labelFunc0409_0423:
	case "bye" attend labelFunc0409_042E:
	goto labelFunc0409_0431;
labelFunc0409_042E:
	goto labelFunc0409_00AE;
labelFunc0409_0431:
	endconv;
	message("\"Pleasant days, ");
	message(var0003);
	message(".\"*");
	say();
labelFunc0409_043C:
	if (!(event == 0x0000)) goto labelFunc0409_044A;
	Func092E(0xFFF7);
labelFunc0409_044A:
	return;
}


