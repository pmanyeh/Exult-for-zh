#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);

void Func0492 object#(0x492) ()
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

	if (!(event == 0x0001)) goto labelFunc0492_03F5;
	UI_show_npc_face(0xFF6E, 0x0000);
	if (!(!gflags[0x01BA])) goto labelFunc0492_001E;
	message("The pale ghost seems to see you but cannot speak to you for some reason. In frustration the ghost turns away.*");
	say();
	abort;
labelFunc0492_001E:
	var0000 = false;
	var0001 = Func0909();
	var0002 = Func08F7(0xFF74);
	if (!gflags[0x01C4]) goto labelFunc0492_0040;
	var0003 = "Markham";
	goto labelFunc0492_0046;
labelFunc0492_0040:
	var0003 = "The barkeep";
labelFunc0492_0046:
	if (!gflags[0x0198]) goto labelFunc0492_0053;
	UI_add_answer("sacrifice");
labelFunc0492_0053:
	var0004 = UI_part_of_day();
	var0005 = UI_get_schedule_type(0xFF6E);
	if (!(!gflags[0x01AA])) goto labelFunc0492_00A5;
	if (!((var0004 == 0x0000) || (var0004 == 0x0001))) goto labelFunc0492_00A5;
	if (!(var0005 == 0x000E)) goto labelFunc0492_008F;
	message("As you start to speak to the pale ghost, you notice that he seems to be looking through you, as if you don't exist at all. You wave your hand in front of his face, but there is no response.*");
	say();
	abort;
	goto labelFunc0492_00A5;
labelFunc0492_008F:
	if (!(!(var0005 == 0x0010))) goto labelFunc0492_00A5;
	message("\"Please, please. I... cannot speak with thee right now. I am not sure what has come over me. Please forgive me, ");
	message(var0001);
	message(".\" The wan ghost looks more pale than usual.*");
	say();
	abort;
labelFunc0492_00A5:
	var0006 = UI_get_party_list();
	var0007 = UI_get_npc_object(0xFF70);
	var0008 = UI_get_npc_object(0xFF6D);
	if (!((var0007 in var0006) || (var0008 in var0006))) goto labelFunc0492_0176;
	if (!(var0007 in var0006)) goto labelFunc0492_0122;
	UI_show_npc_face(0xFF70, 0x0000);
	message("\"Hello, Quenton. I hope thou art doing well.\" Rowena gives the pale ghost a winning smile.*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("\"Yes, milady. I am doing as well as can be expected. It gladdens mine heart to see that thou art once again free. Hast thou been to see Trent yet?\"*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("\"Alas, no. This kind person is taking me to him.\" She indicates you.*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("\"These are glad tidings, for he misses thee so.\"*");
	say();
labelFunc0492_0122:
	if (!(var0008 in var0006)) goto labelFunc0492_0172;
	UI_show_npc_face(0xFF6D, 0x0000);
	message("\"Well met, Quenton.\" The Mayor's mustache spreads as he smiles.*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("\"Hello, Mayor. How dost thou fare, milord?\"*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("Forsythe seems taken aback by Quenton's sincere sounding query. \"Why, I fare well, Quenton. I thank thee for thy concern.\"*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF6E, 0x0000);
	message("He smiles in acknowledgement of the Mayor's thanks.*");
	say();
labelFunc0492_0172:
	var0009 = true;
labelFunc0492_0176:
	if (!(!var0009)) goto labelFunc0492_0187;
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0187:
	if (!(!gflags[0x01CB])) goto labelFunc0492_019F;
	message("The pale-looking ghost turns in your direction and gives you a wan smile. \"Hello, could it be that we have met somewhere before, ");
	message(var0001);
	message("?\" You see recognition in his eyes, then it fades.~~\"Forgive me.\" He shakes his head, then smiles. \"I am the shade of Quenton.\"");
	say();
	gflags[0x01CB] = true;
	goto labelFunc0492_01B0;
labelFunc0492_019F:
	message("Quenton turns in your direction. \"Greetings, ");
	message(var0001);
	message(". Come, take rest from thy travels and sit a while with me. I am but a simple shade, but I may have information useful to thee.\"");
	say();
	UI_add_answer("information");
labelFunc0492_01B0:
	UI_add_answer(["name", "job", "shade", "bye"]);
	if (!gflags[0x017C]) goto labelFunc0492_01D0;
	UI_add_answer("Tortured One");
labelFunc0492_01D0:
	converse attend labelFunc0492_03D7;
	case "name" attend labelFunc0492_01EC:
	message("\"I am called Quenton, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc0492_01EC:
	case "job" attend labelFunc0492_01F8:
	message("He smiles at your question, \"I once roamed the sea, for days at a time, gathering mine harvest of fish.\"");
	say();
labelFunc0492_01F8:
	case "information" attend labelFunc0492_020B:
	message("\"I have been around for many, many years. And,\" he smiles, \"I have seen many, many things in that time.\"");
	say();
	UI_remove_answer("information");
labelFunc0492_020B:
	case "Tortured One" attend labelFunc0492_021E:
	message("\"Caine? He was an alchemist here on Skara Brae. Now he spends his days in eternal pain caused by his guilt from causing the fire that destroyed this town.\"");
	say();
	UI_remove_answer("Tortured One");
labelFunc0492_021E:
	case "shade" attend labelFunc0492_0242:
	message("\"My story is a long and a sad one. I hope thou hast some time.\" He appears thoughtful for a moment, and then begins.~~ [\"When I was a young man, I met a lovely woman by the name of Gwen. I made her my wife, and we lived for a time, happy and carefree. She brought a light into the world and we called her Marney, which means the cool breeze after a storm.\" He smiles to himself at some memory, then continues with a furrowed brow.");
	say();
	message("\"Then, one day, my wife was taken from me. I know not where, or by whom, save that they were evil men. Soon after, my sweet Marney became sick at heart and I feared for her health. I could not take time from my fishing to care for her, but I needed gold. So I made a deal with a man who was not to be trifled with. This was mine undoing, for when I failed to repay his loan, he came to me one night and slew me. I had not a chance to fight back or call for help.\" He falls silent.~~\"But that was long before the fire that turned this whole island into the land of the dead.\"");
	say();
	UI_remove_answer("shade");
	UI_add_answer(["Marney", "fire"]);
labelFunc0492_0242:
	case "Marney" attend labelFunc0492_0299:
	message("\"After I was murdered, my good friend, Yorl, cared for her as his own. He tried his best, but her sickness only worsened. After several months she weakened, and died.\" He stops here, tears filling his ghostly eyes, then, angrily, he says, \"And now her spirit is held by Horance the Liche. Thou must rescue her from that foul beast!\" He attempts to grab you, but his hands pass through without resistance.*");
	say();
	if (!var0002) goto labelFunc0492_0288;
	if (!gflags[0x01B4]) goto labelFunc0492_0285;
	UI_show_npc_face(0xFF74, 0x0000);
	message("\"Now, now, Quen. Settle down.\" ");
	message(var0003);
	message(" moves closer to you and whispers, \"Fergive him, ");
	message(var0001);
	message(".~~\"He sometimes loses control like that when he talks about his daughter. Sure'n ya can understand, tho'.\"*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0285:
	goto labelFunc0492_0292;
labelFunc0492_0288:
	message("Quenton regains control of himself. \"Forgive me, ");
	message(var0001);
	message(". I've no right to inflict my woes upon thee. It hurts to think of my sweet Marney in the power of that... creature.\"");
	say();
labelFunc0492_0292:
	UI_remove_answer("Marney");
labelFunc0492_0299:
	case "fire" attend labelFunc0492_02C2:
	message("\"It seems that Mistress Mordra, the town healer, thought she had a plan to stop the Liche, Horance, which she told to the Mayor. I am not sure exactly what she planned, but it involved Trent, the town smith, and Caine, the alchemist. Not long after Caine began his work, a maelstrom of fire tore over the island, destroying everything. Skara Brae burned for days.\"");
	say();
	UI_remove_answer("fire");
	UI_add_answer(["Mistress Mordra", "Liche", "Mayor", "Trent", "Caine"]);
labelFunc0492_02C2:
	case "Liche" attend labelFunc0492_0338:
	message("\"Once, over two centuries ago, I knew a gifted mage named Horance. His two loves in life were the study of magic, and writing lovely poetry. The people of Skara Brae felt safe in the knowledge that this sort of mage protected the town. Then he began to change.~~\"First his beautiful sonnets became a rhyming doggerel. It became the only way in which he would speak. His spells, which he displayed before the townsfolk, became destructive and violent. People began to fear him. My death occurred at about this time. Not long after that, he became reclusive. He had a tower built on the northern point and never removed himself from it.~~ \"Then, one night, the graves in the graveyard opened and the dead began to walk.\"*");
	say();
	if (!var0002) goto labelFunc0492_02FC;
	if (!gflags[0x01B4]) goto labelFunc0492_02FC;
	UI_show_npc_face(0xFF74, 0x0000);
	message(var0003);
	message(" nods his head emphatically, \"'At's right, I seen it, I did.\"*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_02FC:
	message("\"They marched to his tower, and now they roam all over the island, performing his bidding.\"*");
	say();
	if (!var0002) goto labelFunc0492_0331;
	if (!gflags[0x01B4]) goto labelFunc0492_0331;
	UI_show_npc_face(0xFF74, 0x0000);
	message("\"It be gettin' so's a ghost cannot make an honest livin' no more. Hmph.\" ");
	message(var0003);
	message(" looks a bit disgruntled.*");
	say();
	UI_remove_npc_face(0xFF74);
	UI_show_npc_face(0xFF6E, 0x0000);
labelFunc0492_0331:
	UI_remove_answer("Liche");
labelFunc0492_0338:
	case "Mistress Mordra" attend labelFunc0492_034B:
	message("Quenton looks hopeful, \"If thou wouldst like to assist us, she is the best one to speak to. She seems to know the way to rid us of the Liche, at the least.\"");
	say();
	UI_remove_answer("Mistress Mordra");
labelFunc0492_034B:
	case "Mayor" attend labelFunc0492_035E:
	message("\"The mayor...,\" Quenton selects his words carefully. \"...well, he believes that discretion is the better part of Valor. So, he may be able to offer thee some aid, but thou art likely first to need convince him that thou'rt not here to hurt him.\"");
	say();
	UI_remove_answer("Mayor");
labelFunc0492_035E:
	case "Trent" attend labelFunc0492_0371:
	message("\"Ah, the poor man knows the spirit-wrenching feeling of loss almost as well as I. His wife, Rowena, was killed by the walking dead. And Mistress Mordra claims that she saw her sitting on a throne next to the Liche's own. I believe this has driven Trent somewhat mad. He works night and day upon some oddly formed cage. Strange, though, he never seems to finish it. He doth not seem to recall that he died in the fire, either, but a great hatred for Horance still burns in his heart.\"");
	say();
	UI_remove_answer("Trent");
labelFunc0492_0371:
	case "Caine" attend labelFunc0492_038B:
	message("He looks as if he expected your question. \"Alas, Caine, in his attempt to free us of the Liche, instead damned us to become slaves of the selfsame Liche.\"");
	say();
	UI_remove_answer("Caine");
	UI_add_answer("slaves");
labelFunc0492_038B:
	case "slaves" attend labelFunc0492_039E:
	message("\"Yes, we are his slaves. Every night at midnight, we must go to the Dark Tower and become servants of his Black Mass. I only know this because Mordra tells us it is so. I have no recollection of ever having been to the Dark Tower at all.\" His expression betrays his fear.");
	say();
	UI_remove_answer("slaves");
labelFunc0492_039E:
	case "sacrifice" attend labelFunc0492_03C9:
	if (!(!gflags[0x019C])) goto labelFunc0492_03BE;
	message("You explain that you need a spirit to volunteer to freely enter the Well of Souls in order to bring about its destruction. Quenton considers for a while, and then responds, \"Please understand, ");
	message(var0001);
	message(". I truly wish that I had that kind of Courage. But I cannot risk doing anything that might destroy Marney. Remember, her spirit is kept in that well, along with all of the dead of the graveyard.\"");
	say();
	gflags[0x019C] = true;
	goto labelFunc0492_03C2;
labelFunc0492_03BE:
	message("\"No, I am sorry. I cannot risk it.\" He looks very weary.");
	say();
labelFunc0492_03C2:
	UI_remove_answer("sacrifice");
labelFunc0492_03C9:
	case "bye" attend labelFunc0492_03D4:
	goto labelFunc0492_03D7;
labelFunc0492_03D4:
	goto labelFunc0492_01D0;
labelFunc0492_03D7:
	endconv;
	message("\"Goodbye, ");
	message(var0001);
	message(".\"*");
	say();
	if (!Func08F7(0xFF74)) goto labelFunc0492_03F5;
	message("He turns back to his conversation with ");
	message(var0003);
	message(".*");
	say();
labelFunc0492_03F5:
	if (!(event == 0x0000)) goto labelFunc0492_03FE;
	abort;
labelFunc0492_03FE:
	return;
}


