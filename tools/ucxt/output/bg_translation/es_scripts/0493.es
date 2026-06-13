#game "blackgate"
// externs
extern void Func088B 0x88B ();
extern var Func0909 0x909 ();
extern void Func088A 0x88A ();

void Func0493 object#(0x493) ()
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

	if (!(event == 0x0001)) goto labelFunc0493_03F6;
	UI_show_npc_face(0xFF6D, 0x0000);
	var0000 = false;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(0xFF6D);
	if (!(!gflags[0x01BB])) goto labelFunc0493_0033;
	message("You see a ghostly man cowering in the corner. Holding up an ankh in a protective fashion, he looks around the room frantically, but takes no notice of you.*");
	say();
	abort;
labelFunc0493_0033:
	var0003 = UI_get_party_list();
	if (!(UI_get_npc_object(0xFF6D) in var0003)) goto labelFunc0493_0077;
	UI_add_answer("leave");
	var0004 = UI_find_nearby(0xFE9C, 0x02EC, 0x001E, 0x0000);
	if (!var0004) goto labelFunc0493_0072;
	message("He looks into the well, at the swirling pool of trapped souls and his newfound resolve seems to diminish. \"Perhaps this was not such a good idea. Art thou sure that I must go through with this?\"~~You nod. His resolve firms once again.~~\"Yes, thou art quite right. No time for speeches. No time for a wavering will. No time for...\" He sees that you're not buying his attempt to stall.~~\"Well then, this is it.\" He moves toward the well. \"I suppose I didn't make a very good Mayor in life.\" Forsythe's jowls droop.~~\"Well, at least in death, I'll make a name for myself and do the job right.\" With that, he's gone.~~The souls of the well rush out of their confinement, leaving the blackened remains of the powerful artifact.*");
	say();
	Func088B();
	goto labelFunc0493_0077;
labelFunc0493_0072:
	message("\"Thou must merely lead me to the well, and I shall do my duty.\" He seems quite resigned to his fate.*");
	say();
	abort;
labelFunc0493_0077:
	var0005 = Func0909();
	if (!gflags[0x0198]) goto labelFunc0493_0136;
	UI_add_answer("sacrifice");
	if (!gflags[0x0199]) goto labelFunc0493_012A;
	if (!gflags[0x019A]) goto labelFunc0493_011B;
	if (!gflags[0x019B]) goto labelFunc0493_010C;
	if (!gflags[0x019C]) goto labelFunc0493_00FD;
	if (!gflags[0x01A0]) goto labelFunc0493_00EE;
	if (!gflags[0x019E]) goto labelFunc0493_00DF;
	if (!gflags[0x019D]) goto labelFunc0493_00D0;
	if (!gflags[0x01A1]) goto labelFunc0493_00C1;
	gflags[0x01A2] = true;
	goto labelFunc0493_00CD;
labelFunc0493_00C1:
	var0006 = "Caine";
	var0007 = "Caine";
labelFunc0493_00CD:
	goto labelFunc0493_00DC;
labelFunc0493_00D0:
	var0006 = "Rowena";
	var0007 = "Rowena";
labelFunc0493_00DC:
	goto labelFunc0493_00EB;
labelFunc0493_00DF:
	var0006 = "Trent";
	var0007 = "Trent";
labelFunc0493_00EB:
	goto labelFunc0493_00FA;
labelFunc0493_00EE:
	var0006 = "Mistress Mordra";
	var0007 = "Mistress Mordra";
labelFunc0493_00FA:
	goto labelFunc0493_0109;
labelFunc0493_00FD:
	var0006 = "Quenton";
	var0007 = "Quenton";
labelFunc0493_0109:
	goto labelFunc0493_0118;
labelFunc0493_010C:
	var0006 = "the barmaid, Paulette";
	var0007 = "Paulette";
labelFunc0493_0118:
	goto labelFunc0493_0127;
labelFunc0493_011B:
	var0006 = "Markham of the Keg";
	var0007 = "Markham";
labelFunc0493_0127:
	goto labelFunc0493_0136;
labelFunc0493_012A:
	var0006 = "the Ferryman";
	var0007 = "Ferryman";
labelFunc0493_0136:
	if (!(!gflags[0x01AA])) goto labelFunc0493_0171;
	if (!((var0001 == 0x0000) && (var0001 == 0x0001))) goto labelFunc0493_0171;
	if (!(var0002 == 0x000E)) goto labelFunc0493_0161;
	message("The man looks strangely relaxed, almost too relaxed. He also ignores your attempt to converse with him. It would seem that he is not in control of his actions.*");
	say();
	abort;
	goto labelFunc0493_0171;
labelFunc0493_0161:
	if (!(!(var0002 == 0x000A))) goto labelFunc0493_0171;
	message("\"No! Back! Please, leave me alone!\" The Mayor looks terrified. It seems that you must give up trying to get anything useful out of him for the time being.*");
	say();
	abort;
labelFunc0493_0171:
	if (!(!gflags[0x01CC])) goto labelFunc0493_0197;
	if (!(!gflags[0x01AA])) goto labelFunc0493_0186;
	message("You see a middle-aged ghost cowering in the corner of this burned-out room. He's shaking from head to toe, and, as you approach, he jumps out, waving an ankh in your face.~~ \"Thou'lt not have me, foul beast! Back, back I say! In the name of the Virtues, back!\" He slowly notices that this is having no effect other than to surprise you and looks more closely in your direction. He looks from you to a picture of you on the wall. Back and forth he looks, squinting his eyes until they go wide with relief.~~\"Oh, thank thee for coming. Lord British finally called thee to help us.\" He's obviously suffering from some delusion. \"I am Mayor Forsythe. Dost thou think it will take long for thee to defeat the Liche?\"");
	say();
	goto labelFunc0493_0190;
labelFunc0493_0186:
	message("\"Ah, hello, ");
	message(var0005);
	message(". May I be off assistance to thee?\"");
	say();
labelFunc0493_0190:
	gflags[0x01CC] = true;
	goto labelFunc0493_01C9;
labelFunc0493_0197:
	if (!gflags[0x01A2]) goto labelFunc0493_01AA;
	message("\"Greetings, ");
	message(var0005);
	message(".\" The mayor smiles at you half-heartedly.");
	say();
	goto labelFunc0493_01C9;
labelFunc0493_01AA:
	if (!gflags[0x01AA]) goto labelFunc0493_01B9;
	var0008 = "";
	goto labelFunc0493_01BF;
labelFunc0493_01B9:
	var0008 = "Is that Liche gone yet? ";
labelFunc0493_01BF:
	message("\"Ah yes, good Avatar. 'Tis good to see thee again. ");
	message(var0008);
	message("Of what service can I be to one so great as thee?\" He bows.");
	say();
labelFunc0493_01C9:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x01AA])) goto labelFunc0493_01E7;
	UI_add_answer("Liche");
labelFunc0493_01E7:
	converse attend labelFunc0493_03F5;
	case "name" attend labelFunc0493_01FD:
	message("\"As I told thee, my name is Forsythe.\"");
	say();
	UI_remove_answer("name");
labelFunc0493_01FD:
	case "job" attend labelFunc0493_0216:
	message("He seems confused by your question. \"Did I not already reveal that? I am the mayor.\"");
	say();
	if (!gflags[0x017C]) goto labelFunc0493_0216;
	UI_add_answer("Tortured One");
labelFunc0493_0216:
	case "Liche" attend labelFunc0493_023E:
	message("\"Why yes, the Liche has been a horrible scourge on my poor town. First he drives away all visitors by raising the dead. Then, in an attempt to stop him, the town is destroyed in a terrible fire. Well, I suppose that is not strictly his fault, but, well, something had to be done about him.\" Forsythe looks a little flustered.");
	say();
	UI_remove_answer("Liche");
	UI_add_answer("his fault");
	if (!(!var0000)) goto labelFunc0493_023E;
	UI_add_answer("fire");
labelFunc0493_023E:
	case "his fault" attend labelFunc0493_0251:
	message("\"Well, the alchemist is the one who started the fire!\"");
	say();
	UI_remove_answer("his fault");
labelFunc0493_0251:
	case "Tortured One" attend labelFunc0493_0272:
	message("\"That is what we call Caine. He is the alchemist who created the fire.\"");
	say();
	if (!(!var0000)) goto labelFunc0493_026B;
	UI_add_answer("fire");
labelFunc0493_026B:
	UI_remove_answer("Tortured One");
labelFunc0493_0272:
	case "fire" attend labelFunc0493_02AA:
	message("He puts his arm around your shoulders and whispers, \"Mistress Mordra, our healer, thought she found a way to get rid of Horance once and for all. All we have to do is make a gold cage, or was it an old cage. Well, no matter.~~\"We make this cage, and someone...\" He smiles at you, \"...lowers it into the Well of Souls to do something or other to it. When this is done, thou shalt catch the Liche off guard late at night and snap it tight around him. Sounds easy thus far, yes?~~ \"Well, now. After that, thou needest only pour on him the magic liquid that the alchemist was making.\" He pauses here as if a little embarrassed.~~");
	say();
	message("\"I apparently got the proportions a bit off when I told the alchemist about the formula. Anyway, it should be as easy as falling off a log, for thee. I guess thou hadst better be running along now, Mistress Mordra can tell thee ever so much more about this than can I. Be careful though, she is a dangerous old wench.\"");
	say();
	var0000 = true;
	UI_remove_answer("fire");
	if (!gflags[0x01AA]) goto labelFunc0493_029A;
	message("\"Of course, now thou hast already taken care of all that!\" He smile gracioulsy.");
	say();
	goto labelFunc0493_02AA;
labelFunc0493_029A:
	UI_add_answer(["Horance", "Mistress Mordra", "proportions"]);
labelFunc0493_02AA:
	case "proportions" attend labelFunc0493_02BD:
	message("\"'Twas so long ago that I barely remember. A smattering of curing, a dash of a potion of invisibility, and... that's right, a -ton- of the essence of mandrake root!\"");
	say();
	UI_remove_answer("proportions");
labelFunc0493_02BD:
	case "Horance" attend labelFunc0493_02D0:
	message("\"Well, if I've got all this Liche lore straight, then, Horance, who used to be a good and kindly mage, has become a nasty, horrible, undead mage.\" He smiles patronizingly. \"Now run along. Thou canst ask Mordra if thou needest more information.\"");
	say();
	UI_remove_answer("Horance");
labelFunc0493_02D0:
	case "Mistress Mordra" attend labelFunc0493_02E4:
	message("\"She resides just across the way, and can help thee with everything thou mightest need to rid us of the Liche. Thank thee ever so much. It has been nice talking with thee. Goodbye.\" He scurries back into his corner and holds his ankh in a protective fashion.*");
	say();
	UI_remove_answer("Mistress Mordra");
	abort;
labelFunc0493_02E4:
	case "sacrifice" attend labelFunc0493_0330:
	if (!(!gflags[0x019F])) goto labelFunc0493_030B;
	if (!(!gflags[0x01A2])) goto labelFunc0493_0305;
	message("\"Oh, goodness no. I do not think I'm the one thou wantest for that job. No, I should think not. Maybe thou shouldst ask all of the townsfolk first. If none of them will do it, I might just think about it. Yes, that's right, thou shouldst just ask the others, then come back here to tell me who the poor soul is.\" He smiles at his own cleverness.");
	say();
	gflags[0x019F] = true;
	goto labelFunc0493_0308;
labelFunc0493_0305:
	Func088A();
labelFunc0493_0308:
	goto labelFunc0493_0329;
labelFunc0493_030B:
	if (!(!gflags[0x01A2])) goto labelFunc0493_0326;
	message("The Mayor's eyes dart back and forth as you ask him to sacrifice himself for the good of his people. \"There is still one thou hast neglected to ask. Go and find ");
	message(var0006);
	message(". Then come back and we'll see.\" Spectral sweat drips from his ghostly forehead.");
	say();
	UI_add_answer(var0007);
	goto labelFunc0493_0329;
labelFunc0493_0326:
	Func088A();
labelFunc0493_0329:
	UI_remove_answer("sacrifice");
labelFunc0493_0330:
	case "Caine" attend labelFunc0493_0343:
	message("\"Just look for the crater near the northeast coast. Thou shalt find him there.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0343:
	case "Rowena" attend labelFunc0493_0356:
	message("\"The town healer said something about Rowena sitting on a throne in the Dark Tower on the northwestern point.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0356:
	case "leave" attend labelFunc0493_0373:
	message("\"As thou wishest!\"");
	say();
	UI_remove_from_party(0xFF6D);
	UI_set_schedule_type(0xFF6D, 0x000B);
labelFunc0493_0373:
	case "Trent" attend labelFunc0493_0386:
	message("\"Trent is in the smithy, not far from here, across the road.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0386:
	case "Mistress Mordra" attend labelFunc0493_0399:
	message("\"She can be found in her house, right across the road.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_0399:
	case "Quenton" attend labelFunc0493_03AC:
	message("\"Quen spends just about all of his time in the Keg Of Spirits tavern, near the ferry dock.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03AC:
	case "Paulette" attend labelFunc0493_03BF:
	message("\"Ah, that lovely girl is the barmaid of the Keg Of Spirits tavern, down by the ferry dock.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03BF:
	case "Markham" attend labelFunc0493_03D2:
	message("\"That cantankerous man runs the tavern, the Keg Of Spirits. Thou canst find it near the ferry dock.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03D2:
	case "Ferryman" attend labelFunc0493_03E5:
	message("\"Well, now. Just how didst thou come to this island? That is right. -That- ferryman. He is on the ferry of Skara Brae, to the southeast.\"");
	say();
	UI_remove_answer(var0007);
labelFunc0493_03E5:
	case "bye" attend labelFunc0493_03F2:
	message("\"Oh, yes, right. If I have forgotten to tell thee something, thou mayest come back and ask, all right.\" He sighs heavily as you start to leave, then returns to his vigil in the corner.*");
	say();
	abort;
labelFunc0493_03F2:
	goto labelFunc0493_01E7;
labelFunc0493_03F5:
	endconv;
labelFunc0493_03F6:
	if (!(event == 0x0000)) goto labelFunc0493_03FF;
	abort;
labelFunc0493_03FF:
	return;
}


