#game "blackgate"
// externs
extern void Func01B0 shape#(0x1B0) ();
extern var Func0881 0x881 ();
extern var Func092D 0x92D (var var0000);
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern void Func0696 object#(0x696) ();
extern void Func069A object#(0x69A) ();

void Func009A shape#(0x9A) ()
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

	if (!(event == 0x0000)) goto labelFunc009A_01CB;
	var0000 = UI_find_nearest(item, 0x0150, 0x0001);
	var0001 = UI_find_nearest(item, 0x0152, 0x0001);
	var0002 = UI_find_nearest(item, 0x03E5, 0x0001);
	if (!(var0000 || (var0001 || var0002))) goto labelFunc009A_00F8;
	var0003 = UI_get_random(0x0064);
	if (!(var0003 >= 0x003C)) goto labelFunc009A_005D;
	UI_item_say(item, "@Damn candles!@");
	return;
labelFunc009A_005D:
	if (!(var0003 <= 0x0028)) goto labelFunc009A_00F5;
	var0004 = var0000;
	var0004 = (var0004 & var0001);
	var0004 = (var0004 & var0002);
	enum();
labelFunc009A_0082:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc009A_00CF;
	var0008 = UI_get_object_position(var0007);
	UI_remove_item(var0007);
	UI_sprite_effect(0x0005, (var0008[0x0001] - 0x0001), (var0008[0x0002] - 0x0001), 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x0008);
	goto labelFunc009A_0082;
labelFunc009A_00CF:
	var0009 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x27, 0x0001, (byte)0x01, (byte)0x52, "@An Ailem!", (byte)0x27, 0x0003, (byte)0x70, (byte)0x27, 0x0006]);
	return;
labelFunc009A_00F5:
	goto labelFunc009A_01CB;
labelFunc009A_00F8:
	if (!UI_find_nearest(item, 0x0369, 0x0001)) goto labelFunc009A_0112;
	UI_item_say(item, "@I'm famished!@");
	return;
	goto labelFunc009A_01CB;
labelFunc009A_0112:
	var000A = UI_find_nearest(item, 0x01B0, 0x0002);
	var000B = UI_find_nearest(item, 0x01B1, 0x0002);
	if (!(var000A || var000B)) goto labelFunc009A_0163;
	if (!var000A) goto labelFunc009A_0151;
	UI_item_say(item, "@My door, at last.@");
	event = 0x0001;
	var000A->Func01B0();
	return;
labelFunc009A_0151:
	if (!var000B) goto labelFunc009A_0160;
	UI_item_say(item, "@My door, at last.@");
	return;
labelFunc009A_0160:
	goto labelFunc009A_01CB;
labelFunc009A_0163:
	var000C = UI_find_nearby(item, 0x025F, 0x0000, 0x0010);
	if (!var000C) goto labelFunc009A_01CB;
	enum();
labelFunc009A_017B:
	for (var000F in var000C with var000D to var000E) attend labelFunc009A_01CB;
	if (!((UI_get_item_frame(var000F) == 0x0004) && (UI_get_item_frame(item) >= 0x0010))) goto labelFunc009A_01BF;
	UI_item_say(item, "@Ah, a wall.@");
	var0010 = UI_delayed_execute_usecode_array(item, [(byte)0x23, (byte)0x52, "@I'll follow it.@"], 0x0012);
	return;
	goto labelFunc009A_01C8;
labelFunc009A_01BF:
	UI_item_say(item, "@Where am I?@");
	return;
labelFunc009A_01C8:
	goto labelFunc009A_017B;
labelFunc009A_01CB:
	if (!(!UI_get_cont_items(item, 0x031D, 0x00F0, 0x0004))) goto labelFunc009A_01DE;
	return;
labelFunc009A_01DE:
	if (!(event == 0x0001)) goto labelFunc009A_0220;
	if (!(!Func0881())) goto labelFunc009A_021F;
	var0011 = Func092D(item);
	var0012 = ((var0011 + 0x0004) % 0x0008);
	var0009 = UI_execute_usecode_array(item, [(byte)0x61, (byte)0x59, var0012, (byte)0x55, 0x009A, 0x0000]);
	goto labelFunc009A_0220;
labelFunc009A_021F:
	abort;
labelFunc009A_0220:
	if (!(event == 0x0002)) goto labelFunc009A_093E;
	var0013 = Func0908();
	if (!gflags[0x030E]) goto labelFunc009A_0243;
	UI_show_npc_face(0xFEE2, 0x0001);
	message("\"I'll speak to thee no more, Avatar!\" He ignores you.*");
	say();
	abort;
labelFunc009A_0243:
	if (!(!gflags[0x0310])) goto labelFunc009A_0286;
	UI_show_npc_face(0xFEE2, 0x0000);
	message("At your approach, the old man straightens and looking directly at you he says, \"Well met, ");
	message(var0013);
	message(". I am called Erethian. Although thou dost not know me, I know thee well.");
	say();
	message("I have seen thee destroy Mondain's power and so defeat that misguided mage, I have seen thee vanquish the enchantress Minax, I have also seen, in a very unique way, how thou brought low the hellspawn Exodus.\"");
	say();
	message("He falls silent here and you notice that the old man's eyes are milky white.");
	say();
	gflags[0x0310] = true;
	UI_add_answer(["name", "job", "Mondain", "Minax", "Exodus", "bye"]);
	goto labelFunc009A_02C6;
labelFunc009A_0286:
	if (!(!(gflags[0x032A] || gflags[0x032B]))) goto labelFunc009A_02A8;
	UI_show_npc_face(0xFEE2, 0x0000);
	message("\"Greetings once again, ");
	message(var0013);
	message(". How may I assist thee?\" The blind old man looks unerringly in your direction.");
	say();
	goto labelFunc009A_02B6;
labelFunc009A_02A8:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("\"I'll never get any work done like this! What do you wish of me?\" Erethian seems a little pevish at this point.");
	say();
labelFunc009A_02B6:
	UI_add_answer(["name", "job", "bye"]);
labelFunc009A_02C6:
	if (!gflags[0x0337]) goto labelFunc009A_02E4;
	if (!(!gflags[0x0338])) goto labelFunc009A_02E1;
	if (!(!gflags[0x0330])) goto labelFunc009A_02E1;
	UI_add_answer("black sword");
labelFunc009A_02E1:
	goto labelFunc009A_02F8;
labelFunc009A_02E4:
	if (!(!gflags[0x0312])) goto labelFunc009A_02F8;
	if (!gflags[0x0311]) goto labelFunc009A_02F8;
	UI_add_answer("powerful artifact");
labelFunc009A_02F8:
	if (!gflags[0x0313]) goto labelFunc009A_0338;
	if (!(!gflags[0x032F])) goto labelFunc009A_030F;
	UI_add_answer("daemon mirror");
	goto labelFunc009A_0335;
labelFunc009A_030F:
	if (!(!gflags[0x0330])) goto labelFunc009A_0327;
	if (!(!gflags[0x0338])) goto labelFunc009A_0324;
	UI_add_answer("daemon gem");
labelFunc009A_0324:
	goto labelFunc009A_0335;
labelFunc009A_0327:
	if (!(!gflags[0x0339])) goto labelFunc009A_0335;
	UI_add_answer("daemon blade");
labelFunc009A_0335:
	goto labelFunc009A_0352;
labelFunc009A_0338:
	if (!gflags[0x032F]) goto labelFunc009A_0352;
	if (!gflags[0x0330]) goto labelFunc009A_0352;
	if (!(!gflags[0x0339])) goto labelFunc009A_0352;
	UI_add_answer("daemon blade");
labelFunc009A_0352:
	if (!gflags[0x0318]) goto labelFunc009A_035F;
	UI_add_answer("the Psyche returns");
labelFunc009A_035F:
	if (!gflags[0x0327]) goto labelFunc009A_036C;
	UI_add_answer("great evil");
labelFunc009A_036C:
	if (!gflags[0x0341]) goto labelFunc009A_0379;
	UI_add_answer("Talisman of Infinity");
labelFunc009A_0379:
	var0014 = false;
	var0015 = false;
	var0016 = false;
	var0017 = false;
labelFunc009A_0389:
	converse attend labelFunc009A_0929;
	case "the Psyche returns" attend labelFunc009A_03B7:
	UI_show_npc_face(0xFEE2, 0x0000);
	message("\"Could this possibly be true?\" Erethian's blind eyes light up with unabashed glee. \"What an opportunity I have here.\"");
	say();
	UI_show_npc_face(0xFEE2, 0x0001);
	message("He once again notices your presence. \"Now, do not let any strange ideas of destruction enter thy mind, Avatar. I shan't let thee deprive me of this chance to experience a true wonder of the world. Run along now... Is there not a right to be wronged, somewhere else?");
	say();
	UI_remove_answer("the Psyche returns");
labelFunc009A_03B7:
	case "great evil" attend labelFunc009A_03D4:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("The elderly mage frowns. \"I sense no great evil, but then I never did quite get the knack of cosmic awareness. Nevertheless, don't worry thyself over much. These things tend to work themselves out.\" You feel as if you've just been patted on the head and asked to go play elsewhere.");
	say();
	UI_remove_answer("great evil");
labelFunc009A_03D4:
	case "Talisman of Infinity" attend labelFunc009A_0485:
	if (!(!gflags[0x030F])) goto labelFunc009A_0434;
	gflags[0x030F] = true;
	message("\"Ah, yes. I once had a scroll that told of a talisman by that name. If only I could remember where I put it. Dost thou by chance have the parchment entitled Scroll of Infinity with thee?");
	say();
	if (!Func090A()) goto labelFunc009A_042D;
	if (!(!UI_count_objects(0xFE9B, 0x031D, 0x0032, 0x0001))) goto labelFunc009A_040C;
	message("\"If thou dost not have the scroll, I cannot help thee in this matter.\"");
	say();
	goto labelFunc009A_042A;
labelFunc009A_040C:
	message("\"Here we are. Now then, it appears to be written in a strange format. One might even say a code of sorts... I have it! Apparently, the Talisman currently resides in the Great Void. A plane somewhat removed from ours. If thou wishest to gain access to this void, thou shalt need to craft two lenses: one concave, the other convex. Light focused through the properly enchanted lenses will open a conduit between our realm and the void. I believe this treatise speaks of three Talismans of Principle that send out a call to the Infinity Talisman and bring it here. Once here, it would seem that its sole purpose is to coerce a powerful force into the void.\" A thought hits the mage like lightning strikes a tree. \"Oh no, Avatar... Thou shan't gain any more aid from me. I may be blind, but I see through thy sham. I'll not help thee send the Core into the void.\" Erethian falls silent, and it would appear that he'll speak no more.");
	say();
	UI_remove_npc_face(0xFEE2);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("Arcadion's voice whispers to you like ripple in still pond, \"Fear not, my master. I have some knowledge of these matters.\"*");
	say();
	gflags[0x030E] = true;
	abort;
labelFunc009A_042A:
	goto labelFunc009A_0431;
labelFunc009A_042D:
	message("\"Very well. I shall need the scroll to give thee further information.\"");
	say();
labelFunc009A_0431:
	goto labelFunc009A_047E;
labelFunc009A_0434:
	message("\"Dost thou have the Scroll of Infinity amongst thy possessions?\"");
	say();
	if (!Func090A()) goto labelFunc009A_047A;
	if (!(!UI_count_objects(0xFE9B, 0x031D, 0x0032, 0x0001))) goto labelFunc009A_0459;
	message("\"I needs must touch the scroll to glean its meaning. Else I'll not be able to help thee in this matter.\"");
	say();
	goto labelFunc009A_0477;
labelFunc009A_0459:
	message("\"Here we are. Now then, it appears to be written in a strange format. One might even say a code of sorts... I have it! Apparently, the Talisman currently resides in the Great Void. A plane somewhat removed from ours. If thou wishest to gain access to this void, thou shalt need to craft two lenses: one concave, the other convex. Light focused through the properly enchanted lenses will open a conduit between our realm and the void. I believe this treatise speaks of three Talismans of Principle that send out a call to the Infinity Talisman and bring it here. Once here, it would seem that its sole purpose is to coerce a powerful force into the void.\" A thought hits the mage like lightning strikes a tree. \"Oh no, Avatar... Thou shan't gain any more aid from me. I may be blind, but I see through thy sham. I'll not help thee send the Core into the void.\" Erethian falls silent, and it would appear that he'll speak no more.");
	say();
	UI_remove_npc_face(0xFEE2);
	UI_show_npc_face(0xFEDC, 0x0000);
	message("Arcadion's voice whispers to you like ripple in still pond, \"Fear not, my master. I have some knowledge of these matters.\"*");
	say();
	gflags[0x030E] = true;
	abort;
labelFunc009A_0477:
	goto labelFunc009A_047E;
labelFunc009A_047A:
	message("\"If thou bringest the scroll to me I can aid the in finding the meaning of the archaic text.\"");
	say();
labelFunc009A_047E:
	UI_remove_answer("Talisman of Infinity");
labelFunc009A_0485:
	case "powerful artifact" attend labelFunc009A_0498:
	message("\"I once attempted to create a sword of great power.\" Erethian frowns in concentration then says, \"if thou wishest to continue my work, thou shalt have need of some few pieces of forging equipment... And a place to put them... I know just the spot. Come with me and I'll see what I can do to help thee.\"*");
	say();
	var0015 = true;
	goto labelFunc009A_0929;
labelFunc009A_0498:
	case "black sword" attend labelFunc009A_050D:
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian nods his head when you tell him of your dilemma with the black sword. \"Yes, I can see how the blade would be too clumsy to swing in combat. However, if thou were to bind a magical source of power into the hilt of the blade, thou mightest be able to counteract the unwieldy nature of the sword.\"");
	say();
	if (!UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D)) goto labelFunc009A_04F2;
	UI_show_npc_face(0xFEDD, 0x0000);
	message("The little gem sparks up at this turn of the conversation. \"I believe that in my current form, I could serve perfectly well as the blade's stabilizing force. In truth, this would allow me to give thee access to some of my more dramatic powers.\" The daemon sounds excited at this prospect, perhaps a little too excited.");
	say();
	UI_remove_npc_face(0xFEDD);
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian's voice is quiet as he says, \"Consider well before thou bindest Arcadion into the sword. For it is true that he will be able to solve the sword's problem of balance, but will he be able to solve his own problems as well?\"");
	say();
	UI_add_answer("problems");
	goto labelFunc009A_04FC;
labelFunc009A_04F2:
	if (!gflags[0x032F]) goto labelFunc009A_04FC;
	message("You wonder if perhaps Arcadion might be able to shed some light on this issue, and as if reading your thoughts, Erethian says, \"Beware the daemon. His goals are not those of thine or mine. If he offers to help thee, it is to help himself. Of that thou canst be sure.\"");
	say();
labelFunc009A_04FC:
	gflags[0x0338] = true;
	UI_remove_answer(["black sword", "daemon gem"]);
labelFunc009A_050D:
	case "problems" attend labelFunc009A_0520:
	message("\"This is thy choice to make. Apparently thou hast need to make this sword function, but if the daemon is thy only recourse, I pity thee. For as surely as Arcadion will be bound within the sword, thou wilt be bound to possess it. I can tell thee no more.\"");
	say();
	UI_remove_answer("problems");
labelFunc009A_0520:
	case "name" attend labelFunc009A_0539:
	message("The mage gives you a half smile, \"'Twould seem that thy memory is failing thee, ");
	message(var0013);
	message(". As I have said, my name is Erethian.\"");
	say();
	UI_remove_answer("name");
labelFunc009A_0539:
	case "job" attend labelFunc009A_056E:
	message("\"I am a follower of the principle of Truth. But unlike those of the Lyceaum, I would prefer to seek out the knowledge instead of waiting for it to come to me.");
	say();
	message("It is this curiosity which has brought me to this island from which Exodus, the spawn of Mondain and Minax, sought to rule the world.");
	say();
	message("The books and scrolls here have taught me much of Britannia's\thistory and other... interesting subjects.\"");
	say();
	message("His clouded eyes sparkle with intelligence. But you can't help wondering how books and scrolls are of any use to a man afflicted with blindness.");
	say();
	UI_remove_answer("job");
	UI_add_answer(["Mondain", "Minax", "Exodus", "subjects", "blindness"]);
labelFunc009A_056E:
	case "subjects" attend labelFunc009A_0581:
	message("\"If thou art interested, feel free to inspect them. This is no library.\" As if regretting his gracious gesture, he adds, \"However, I trust that thou wilt take utmost care with the older ones.\" He stops, on the verge of saying more.");
	say();
	UI_remove_answer("subjects");
labelFunc009A_0581:
	case "blindness" attend labelFunc009A_059F:
	if (!(!gflags[0x032B])) goto labelFunc009A_059A;
	var0014 = true;
	goto labelFunc009A_0929;
	goto labelFunc009A_059F;
labelFunc009A_059A:
	message("\"Thou art a tiresome child. Leave me be!\" He ignores your presence.*");
	say();
	abort;
labelFunc009A_059F:
	case "Mondain" attend labelFunc009A_05C7:
	message("Erethian scowls, \"Now there was a mighty wizard. A bit twisted but then who knows what happens to the human mind when 'tis subjected to the powers he wielded.");
	say();
	message("'Tis even said his skull alone had the power to destroy enemies... he must have locked a magical matrix upon it, I'll have to research that.\" He nods his head, seemingly making a mental note, then continues with a wistful look on his aged features,");
	say();
	message("\"I\twould have loved to study that fascinating Gem of Immortality, but alas, I was born in too late an era.\"");
	say();
	UI_add_answer(["Gem of Immortality", "skull"]);
	UI_remove_answer("Mondain");
labelFunc009A_05C7:
	case "Minax" attend labelFunc009A_063A:
	message("A sad sweet smile comes to the wizard's face, \"She was quite a comely lass at one time, with a mind forever searching.\" His expression darkens, \"But then Mondain forced all of the good sense from her.");
	say();
	message("She became a power unto herself, in time. I do not think she quite rivaled her former mentor, Mondain, but she was a force to be reckoned with, nevertheless.");
	say();
	message("And that thou didst, with the Quicksword, Enilno. That\tact will most likely have tales sung about it for the next eon.\" Under his breath he adds, \"Even if Iolo's the only one who sings it.\"");
	say();
	if (!UI_find_nearest(item, 0x01D1, 0x0028)) goto labelFunc009A_062C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("With a look of indignation Iolo says, \"Pardon me, sir. But I'll have thee know that ballads of the Avatar still grace all of the finest drinking establishments of Britannia.\"");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
	message("\"And what a dubious distinction that is.\" The corners of the mage's mouth come up in a delicate smile.");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("An angry retort dies on Iolo's lips as the elderly mage lifts his hands in a gesture of peace.");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
	message("\"Please, forgive the offense I have given. Thou shouldst know that I have seen, almost first hand, the Avatar's bravery in the face of adversity.");
	say();
	message("I have nothing but the highest regard for the Destroyer of the Age of Darkness and Harbinger of the Age of Enlightenment.");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc009A_062C:
	UI_add_answer("Enilno");
	UI_remove_answer("Minax");
labelFunc009A_063A:
	case "Exodus" attend labelFunc009A_065E:
	message("\"That being has become a passion of mine, lately.\" He almost glows with excitement. \"Indeed, 'tis what brought me here. While I\twas at the Lyceaum, I happened upon a passage in a manuscript that described an Island of Fire.");
	say();
	message("Upon further research, I found that the entity known as Exodus was not truly destroyed. The interface between its two parts and the world was merely severed.\"");
	say();
	UI_add_answer(["two parts", "interface"]);
	UI_remove_answer("Exodus");
labelFunc009A_065E:
	case "two parts" attend labelFunc009A_069C:
	message("\"One part, his psyche we shall call it, was taken by the gargoyles who live below us in a realm on the other side of the world. A truly fascinating culture they have, but I digress...\" You begin to wonder just how long this old man has\tbeen out of circulation.");
	say();
	message("He continues, \"The other, I have here. I call it the Dark Core, because without the psyche, it is mostly lifeless.\" His face appears to youthen, and you feel as if you're speaking to a child describing his new toy... or perhaps, pet.");
	say();
	message("\"I believe 'twas the removal of the psyche from the Core that caused this island to sink beneath the waves.\"");
	say();
	UI_add_answer("gargoyles");
	if (!(!var0016)) goto labelFunc009A_0687;
	UI_add_answer("psyche");
labelFunc009A_0687:
	if (!(!var0017)) goto labelFunc009A_0695;
	UI_add_answer("Dark Core");
labelFunc009A_0695:
	UI_remove_answer("two parts");
labelFunc009A_069C:
	case "interface" attend labelFunc009A_06D7:
	message("His expression is unreadable, \"The machine that thou destroyed was Exodus' means of communication with and control of the world.");
	say();
	message("When it was destroyed, his psyche could no longer retain its hold on the Dark Core.");
	say();
	message("I have often wondered if another interface was implemented, would the psyche return, or possibly be regenerated...\"");
	say();
	message("As his\tidle musings begin to run toward possibly dangerous conclusions, his mouth audibly snaps shut.");
	say();
	if (!(!var0016)) goto labelFunc009A_06C2;
	UI_add_answer("psyche");
labelFunc009A_06C2:
	if (!(!var0017)) goto labelFunc009A_06D0;
	UI_add_answer("Dark Core");
labelFunc009A_06D0:
	UI_remove_answer("interface");
labelFunc009A_06D7:
	case "gargoyles" attend labelFunc009A_06F2:
	message("\"Interesting creatures, thou mightest call them balrons, but they are not the beasts that history has made of them.");
	say();
	message("The larger, winged ones are intelligent and magical by nature,\twhile the smaller, wingless ones appear to be the work force for the species.\"");
	say();
	message("He turns his head in your direction with a puzzled expression in his eyes, \"I have the oddest feeling that thou hast heard all of this before...\" Erethian falls silent.");
	say();
	UI_remove_answer("gargoyles");
labelFunc009A_06F2:
	case "psyche" attend labelFunc009A_0709:
	message("\"Eventually, I shall turn my studies to that being. The gargoyles have placed it within a statue, in a shrine they dedicated to their principle of Diligence.");
	say();
	var0016 = true;
	UI_remove_answer("psyche");
labelFunc009A_0709:
	case "Dark Core" attend labelFunc009A_0748:
	if (!UI_find_nearest(UI_get_npc_object(0xFE9C), 0x03DE, 0x0007)) goto labelFunc009A_0729;
	message("\"Yes, here it is. It is the cylinder sitting upon yon pedastal.\" He motions in the direction of the Dark Core.");
	say();
labelFunc009A_0729:
	message("\"I have found it to be quite a treasure trove of useful facts. Its sole purpose seems to be the storage of information.");
	say();
	message("Much of the information is trivial, such as the detailed description\tof the color of the\tsky on a particular day eons ago,");
	say();
	message("while other bits give instructions for the manipulation of the\tworld.");
	say();
	message("Within it I even found the knowledge to raise and sustain this island\twe stand upon. It is truly a remarkable artifact.\"");
	say();
	message("He thinks for a moment, then looks nervously in your direction, \"Please, do be careful around it. Artifacts seem to have a tendency to, shall we say, disappear around thee.\"");
	say();
	var0017 = true;
	UI_remove_answer("Dark Core");
labelFunc009A_0748:
	case "Enilno" attend labelFunc009A_0776:
	message("\"Ah, now there's a question. I've heard naught of it's existence since the Age of Darkness ended. Would that I knew its location.");
	say();
	message("It was reputedly a great item of magic. Didst thou find it so?\" He cocks his head to one side as he asks the question.");
	say();
	var0018 = Func090A();
	if (!var0018) goto labelFunc009A_076B;
	message("\"Yes, 'tis a pity to lose such an item of antiquity. Perhaps as time unfolds it will turn up. These things have a way of surfacing at the strangest times.\"");
	say();
	goto labelFunc009A_076F;
labelFunc009A_076B:
	message("\"No? It didst seem to serve thee well enough to dispatch the enchantress Minax. But then I suppose only a poor bard blames his instrument.\" He winks mischieviously in your general direction.");
	say();
labelFunc009A_076F:
	UI_remove_answer("Enilno");
labelFunc009A_0776:
	case "Gem of Immortality" attend labelFunc009A_0791:
	message("Milky eyes glitter up at you like twin marbles, \"Ah, yes. But thou knowest all too well about that little bauble.");
	say();
	message("After all, it was thee who smashed it into the shards which caused thee so much trouble during the regency of Lord Blackthorn.");
	say();
	message("So much power that even in a shattered state, its magic still flowed. 'Tis sad to lose such an artifact.\" As if suddenly remembering with whom he is speaking, he ammends, \"Much better than having Mondain running about mucking with things, I suppose.\"");
	say();
	UI_remove_answer("Gem of Immortality");
labelFunc009A_0791:
	case "skull" attend labelFunc009A_07A4:
	message("\"'Twould seem that someone,\" he pauses dramatically, \"let that slip into a volcano...\" His wry smile belies his careless tone.");
	say();
	UI_remove_answer("skull");
labelFunc009A_07A4:
	case "daemon mirror" attend labelFunc009A_07C4:
	message("\"Ah, so thou hast met that old windbag. Truly, I feel that I would do better to free myself of that burdensome beast, but he sometimes proves to be useful. If it weren't for his whining, perhaps he and I would get along better.\"");
	say();
	UI_add_answer(["whining", "free"]);
	UI_remove_answer("daemon mirror");
labelFunc009A_07C4:
	case "whining" attend labelFunc009A_07D7:
	message("\"'Tis his favorite passtime. He begs, pleads, and threatens me to free him from that stupid mirror. Believe me, if I could I would have done it long ago.\" Erethian's lined face shows his chagrin.");
	say();
	UI_remove_answer("whining");
labelFunc009A_07D7:
	case "free" attend labelFunc009A_07F1:
	message("\"He wants this special bauble. I once possessed this gem he seeks, and I don't think he'd be very happy once he gets it. I have tried to tell him that 'twould only imprison\thim in a more mobile jail, but alas, his head is made of stone.\"");
	say();
	UI_add_answer("jail");
	UI_remove_answer("free");
labelFunc009A_07F1:
	case "jail" attend labelFunc009A_080B:
	message("\"Quite. Arcadion seeks to have dominion over Britannia and believes that the gem will give him the ability to exert his power here. In truth, the Ether Gem works in the reverse, his power will become accessible to the one who possesses the gem.\"");
	say();
	UI_add_answer("Ether Gem");
	UI_remove_answer("jail");
labelFunc009A_080B:
	case "Ether Gem" attend labelFunc009A_082E:
	message("\"The gem was pilfered from me by an ill tempered dragon. She blew her way into this castle, waylayed the golems that protect the Shrine of Principle, then destroyed a perfectly good secret door on her way to the Test of Courage. I'd have liked to see her squeeze through the hole she made, 'tis hardly big enough for a creature of her bulk.\" The mage's milky eyes twinkle with suppressed mirth.");
	say();
	UI_add_answer(["golems", "Shrine of Principle", "Test of Courage"]);
	UI_remove_answer("Ether Gem");
labelFunc009A_082E:
	case "golems" attend labelFunc009A_0848:
	message("\"Mmmm... Yes. This pair of manshaped, magical constucts used to guard the Shrine of Principle, but alas, one fell pray to falling rocks when the dragon assaulted the castle. The other picked up his, ah... brother, for lack of a better word, and carried him off through the portal to the Test of Love.\"");
	say();
	UI_add_answer("Test of Love");
	UI_remove_answer("golems");
labelFunc009A_0848:
	case "Shrine of Principle" attend labelFunc009A_085B:
	message("\"The shrine lies through the doors at the rear of the main hall. There thou canst find three statues, each one dedicated to a Principle set forth by Lord Britsh at the beginning of the Age of Enlightenment.\" Conspiratorially he adds, \"A bit stuffy, but they make nice cloakracks.\"");
	say();
	UI_remove_answer("Shrine of Principle");
labelFunc009A_085B:
	case "Test of Love" attend labelFunc009A_086E:
	message("\"I not had the chance to inspect that oddity yet, however, thou art welcome to peruse it at thy leisure.\" He smiles like a grandfather giving a present to a child.");
	say();
	UI_remove_answer("Test of Love");
labelFunc009A_086E:
	case "Test of Courage" attend labelFunc009A_089D:
	if (!UI_is_pc_female()) goto labelFunc009A_0886;
	var0019 = "heroine's";
	goto labelFunc009A_088C;
labelFunc009A_0886:
	var0019 = "hero's";
labelFunc009A_088C:
	message("\"I believe 'twas set in motion by Lord British in order to test...\" He gestures in your direction, \"A virtuous ");
	message(var0019);
	message(" fighting ability and courage. The statues in the back of this castle can tell thee more about the tests, though.\" Erethian grins mysteriously.");
	say();
	UI_remove_answer("Test of Courage");
labelFunc009A_089D:
	case "daemon gem" attend labelFunc009A_08F4:
	message("\"So... thou hast made a servant of Arcadion. 'Tis good to be rid of his incessant whining. I hope that thou findest him to be as useful as I didst.\" You're not sure, but his words might be construed as a curse.");
	say();
	if (!UI_get_cont_items(UI_get_npc_object(0xFE9C), 0x02F8, 0xFE99, 0x000D)) goto labelFunc009A_08ED;
	UI_show_npc_face(0xFEDD, 0x0000);
	message("The gem glows brighter, \"'Tis good to see the last of thee, also, old man. Perhaps in another life, I shall be thy master, and thou the slave.\" The daemon lets out a chilling little laugh.");
	say();
	UI_remove_npc_face(0xFEDD);
	UI_show_npc_face(0xFEE2, 0x0001);
	message("Erethian looks a little shaken at hearing the daemon's voice, but quickly recovers his composure. \"I think not, daemon. I'm not at all sure that there is a way for thou to get out of that little gem.\" The elderly mage's expression is unreadable.*");
	say();
	UI_show_npc_face(0xFEE2, 0x0000);
labelFunc009A_08ED:
	UI_remove_answer("daemon gem");
labelFunc009A_08F4:
	case "daemon blade" attend labelFunc009A_090B:
	message("\"I see that thou didst not heed my warning. Alas, my pity shall be thine eternally. And so, what wouldst thou have of me, Master and Slave of the Shade Blade.\"");
	say();
	gflags[0x0339] = true;
	UI_remove_answer("daemon blade");
labelFunc009A_090B:
	case "bye" attend labelFunc009A_0926:
	if (!(!gflags[0x0338])) goto labelFunc009A_0921;
	message("\"Goodbye and good luck... Thou'lt need it.\" The old mage snickers under his breath as if enjoying a personal joke, quite possibly at your expense.*");
	say();
	goto labelFunc009A_0925;
labelFunc009A_0921:
	message("\"Goodbye and good luck...\" Erethian sounds truly sympathetic.");
	say();
labelFunc009A_0925:
	abort;
labelFunc009A_0926:
	goto labelFunc009A_0389;
labelFunc009A_0929:
	endconv;
	if (!var0014) goto labelFunc009A_0934;
	item->Func0696();
labelFunc009A_0934:
	if (!var0015) goto labelFunc009A_093E;
	item->Func069A();
labelFunc009A_093E:
	return;
}


