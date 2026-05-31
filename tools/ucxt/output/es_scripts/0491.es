#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func0491 object#(0x491) ()
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

	if (!(event == 0x0001)) goto labelFunc0491_0347;
	UI_show_npc_face(0xFF6F, 0x0000);
	var0000 = Func0909();
	var0001 = UI_is_pc_female();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(0xFF6F);
	var0004 = false;
	var0005 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x017C]) goto labelFunc0491_0055;
	UI_add_answer("Tortured One");
labelFunc0491_0055:
	if (!(!gflags[0x01B9])) goto labelFunc0491_0061;
	message("The lovely apparition goes about her tasks without offering any response.*");
	say();
	abort;
labelFunc0491_0061:
	if (!(!gflags[0x01AA])) goto labelFunc0491_009C;
	if (!((var0002 == 0x0000) || (var0002 == 0x0001))) goto labelFunc0491_009C;
	if (!(var0003 == 0x000E)) goto labelFunc0491_008C;
	message("The lovely barmaid stares off into oblivion, completely unaware of her location and position.*");
	say();
	abort;
	goto labelFunc0491_009C;
labelFunc0491_008C:
	if (!(!(var0003 == 0x000B))) goto labelFunc0491_009C;
	message("The pretty barmaid looks as if she's about to fall over for a moment, then quickly rights herself. \"Oh, I feel a bit... faint.\" She turns away, distracted.*");
	say();
	abort;
labelFunc0491_009C:
	if (!gflags[0x01A4]) goto labelFunc0491_00A7;
	message("\"Go away! Thou art cruel and mean-hearted.\" She turns away, but not before you see the tears in her eyes.*");
	say();
	abort;
labelFunc0491_00A7:
	var0006 = Func08F7(0xFF70);
	if (!var0006) goto labelFunc0491_00E8;
	if (!(!gflags[0x01BE])) goto labelFunc0491_00E8;
	message("Paulette perks up as she sees Rowena.~~\"Hello, milady. 'Tis good to see thee again. How art thou?\"*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("\"I am fine, Paulette. I thank thee for thy concern.\"*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6F, 0x0000);
	message("\"'Tis good news indeed, milady.\"");
	say();
	gflags[0x01BE] = true;
labelFunc0491_00E8:
	var0007 = Func08F7(0xFF6D);
	if (!var0007) goto labelFunc0491_0129;
	if (!(!gflags[0x01BD])) goto labelFunc0491_0129;
	message("\"Hello, Mayor. It has been quite a while since we've seen thee in our tavern. There was a time, I remember, when we couldn't keep thee away.\"*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("The mayor becomes quickly embarrassed as he tries to quiet the rather friendly Paulette.~~\"I, er, used to be a wine connoisseur of sorts,\" he says to you.*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6F, 0x0000);
	message("\"'Tis not all thou wert a connoisseur of,\" adds Paulette, eyes twinkling. \"I seem to remember thou had quite a taste for redheads.\"");
	say();
	gflags[0x01BD] = true;
labelFunc0491_0129:
	if (!gflags[0x0198]) goto labelFunc0491_0136;
	UI_add_answer("sacrifice");
labelFunc0491_0136:
	if (!(!gflags[0x01CA])) goto labelFunc0491_0161;
	if (!var0001) goto labelFunc0491_0150;
	message("You see a pretty, ghostly girl with long black hair. \"Hello, ");
	message(var0000);
	message(". I am called Paulette. How may I help thee?\"");
	say();
	goto labelFunc0491_015A;
labelFunc0491_0150:
	message("Standing before you, with a hand on her hip, is a lovely, young woman with long black hair. \"Ooooh... Thou art a big one, ");
	message(var0000);
	message(".\" She traces the line of your bicep.~~\"I'd wager thou couldst lift me over thine head.\" She smiles enticingly. However, you doubt that you could even touch her in her ghostly state.~~\"Thou mayest call me Paulette, gorgeous. What can I do for thee?\" She winks at you.");
	say();
labelFunc0491_015A:
	gflags[0x01CA] = true;
	goto labelFunc0491_0178;
labelFunc0491_0161:
	if (!var0001) goto labelFunc0491_0174;
	message("\"Yes, ");
	message(var0000);
	message("?\", she asks sweetly.");
	say();
	goto labelFunc0491_0178;
labelFunc0491_0174:
	message("Paulette turns to face you and smiles coquettishly, \"I had thought that thou might return.\" Her eyes sparkle up at you mischievously.");
	say();
labelFunc0491_0178:
	converse attend labelFunc0491_032F;
	case "name" attend labelFunc0491_0194:
	message("\"Why, ");
	message(var0000);
	message(", hast thou forgotten already? I am Paulette.\"");
	say();
	UI_remove_answer("name");
labelFunc0491_0194:
	case "job" attend labelFunc0491_01DC:
	if (!var0001) goto labelFunc0491_01AF;
	message("\"Well, ");
	message(var0000);
	message(", before the fire,\" she shudders, \"I used to be the barmaid here.\"");
	say();
	goto labelFunc0491_01B9;
labelFunc0491_01AF:
	message("\"Well, ");
	message(var0000);
	message(". I used to clean tables here...\" As she says this, she bends over and pretends to wipe a table clean. You notice how low the cut of her bodice really is.~~\"...and serve people, like thyself. Of course, none so handsome.\" Her ghostly features blush prettily.~~\"But that was before,\" she shudders, \"the fire.\"");
	say();
labelFunc0491_01B9:
	UI_add_answer("buy");
	if (!(!var0005)) goto labelFunc0491_01CE;
	UI_add_answer("here");
labelFunc0491_01CE:
	if (!(!var0004)) goto labelFunc0491_01DC;
	UI_add_answer("fire");
labelFunc0491_01DC:
	case "buy" attend labelFunc0491_0244:
	message("\"Thou dost wish to purchase something?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc0491_0233;
	message("\"I am sorry, ");
	message(var0000);
	message(",\" she giggles, \"but all we serve here are... spirits!\"*");
	say();
	var0009 = Func08F7(0xFF74);
	if (!(var0009 && gflags[0x01B4])) goto labelFunc0491_0230;
	UI_show_npc_face(0xFF74, 0x0000);
	message("\"That's a good one, wench,\" laughs the portly ghost.*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6F, 0x0000);
labelFunc0491_0230:
	goto labelFunc0491_023D;
labelFunc0491_0233:
	message("\"Very well, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0491_023D:
	UI_remove_answer("buy");
labelFunc0491_0244:
	case "Tortured One" attend labelFunc0491_0265:
	message("She appears puzzled for an instant, but then she nods her head.~~\"Oh, thou must be referring to Caine. He was the alchemist who was responsible for the fire.\"");
	say();
	UI_remove_answer("Tortured One");
	if (!(!var0004)) goto labelFunc0491_0265;
	UI_add_answer("fire");
labelFunc0491_0265:
	case "fire" attend labelFunc0491_0291:
	message("\"Oh, yes. It was horrible! The tavern caught on fire. I ran to my room, hoping to escape the flames. But then I started coughing. I couldn't breathe.\" Her chest rises and falls quickly as if she's reliving the experience.~~\"Finally, I could take it no longer.\" She brings the back of her hand to her forehead, dramatically. \"I fainted. Then I was here again, just like thou dost see me now.\" Her smile is like that of a child.");
	say();
	var0004 = true;
	UI_remove_answer("fire");
	UI_add_answer("here again");
	if (!(!var0005)) goto labelFunc0491_0291;
	UI_add_answer("tavern");
labelFunc0491_0291:
	case "here again" attend labelFunc0491_02A4:
	message("\"Yes, 'twas quite odd. When I awoke, it was as if I had never left when the fire began. In fact, were it not for the scorch marks everywhere, I would doubt the fire ever happened.\"");
	say();
	UI_remove_answer("here again");
labelFunc0491_02A4:
	case "tavern", "here" attend labelFunc0491_02DF:
	if (!var0001) goto labelFunc0491_02BE;
	var000A = " coyly";
	goto labelFunc0491_02C4;
labelFunc0491_02BE:
	var000A = "";
labelFunc0491_02C4:
	message("\"Why, 'tis called the Keg O' Spirits. That's a fine name for a tavern, dost thou not agree?\" She smiles ");
	message(var000A);
	message(".");
	say();
	UI_remove_answer(["here", "tavern"]);
	var0005 = true;
labelFunc0491_02DF:
	case "sacrifice" attend labelFunc0491_0321:
	if (!(!gflags[0x019B])) goto labelFunc0491_0311;
	message("\"Thou wantest me to... to jump in a well?\" Her eyes widen with astonishment.");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0491_030A;
	message("\"Well, thou canst go jump in a lake!\" She crosses her arms on her buxom chest and turns away from you angrily.*");
	say();
	gflags[0x019B] = true;
	abort;
	goto labelFunc0491_030E;
labelFunc0491_030A:
	message("She recovers her composure, \"Oh. For a moment there, I thought that thou wouldst have me be thy... sacrifice.\"");
	say();
labelFunc0491_030E:
	goto labelFunc0491_031A;
labelFunc0491_0311:
	message("\"Please, just leave me alone!\" she looks as if she's about to cry.*");
	say();
	gflags[0x01A4] = true;
	abort;
labelFunc0491_031A:
	UI_remove_answer("sacrifice");
labelFunc0491_0321:
	case "bye" attend labelFunc0491_032C:
	goto labelFunc0491_032F;
labelFunc0491_032C:
	goto labelFunc0491_0178;
labelFunc0491_032F:
	endconv;
	if (!var0001) goto labelFunc0491_0343;
	message("\"Goodbye, ");
	message(var0000);
	message(".\" The pretty ghost turns away.*");
	say();
	goto labelFunc0491_0347;
labelFunc0491_0343:
	message("Paulette rushes up to you as you say goodbye and gives you a little kiss on the cheek. She backs away slowly, \"Farewell, handsome.\"*");
	say();
labelFunc0491_0347:
	if (!(event == 0x0000)) goto labelFunc0491_0350;
	abort;
labelFunc0491_0350:
	return;
}


