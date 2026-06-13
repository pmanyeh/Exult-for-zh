#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func08C1 0x8C1 ();
extern void Func08C2 0x8C2 ();
extern void Func091F 0x91F (var var0000, var var0001);
extern void Func08BF 0x8BF (var var0000);
extern var Func090A 0x90A ();
extern void Func08C0 0x8C0 ();

void Func048F object#(0x48F) ()
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

	if (!(event == 0x0001)) goto labelFunc048F_03E7;
	UI_show_npc_face(0xFF71, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = false;
	var0003 = false;
	var0004 = false;
	var0005 = false;
	var0006 = UI_part_of_day();
	var0007 = false;
	var0008 = false;
	var0009 = UI_get_schedule_type(0xFF71);
	if (!(!gflags[0x01B7])) goto labelFunc048F_0056;
	message("The old, ghostly woman hums the tune to an ancient ballad and smiles up at you. This old woman brings to mind every grandmother you've ever seen.~~Apparently she is not entirely oblivious to your presence. However, when you speak to her, it seems as if your words fall on deaf ears. She looks puzzled for a moment, then moves her arms in magical passes. You recognize the words to be a variant of the Seance spell.");
	say();
	gflags[0x01B7] = true;
labelFunc048F_0056:
	if (!(!gflags[0x01AA])) goto labelFunc048F_0097;
	if (!((var0006 == 0x0000) || (var0006 == 0x0001))) goto labelFunc048F_0097;
	if (!(var0009 == 0x000E)) goto labelFunc048F_0081;
	message("The old, ghostly woman looks very strange. Her eyes are open, but she doesn't seem to be awake, or at least not aware of her surroundings.*");
	say();
	abort;
	goto labelFunc048F_0097;
labelFunc048F_0081:
	if (!(!(var0009 == 0x0010))) goto labelFunc048F_0097;
	message("\"I am sorry, ");
	message(var0000);
	message(". Do not take offense, but I must rest before we speak further. I thank thee for thy patience, young one.\" She looks very weary as she turns away.*");
	say();
	abort;
labelFunc048F_0097:
	if (!(!gflags[0x01D0])) goto labelFunc048F_00AB;
	if (!gflags[0x01C0]) goto labelFunc048F_00AB;
	UI_add_answer("ingredients");
labelFunc048F_00AB:
	var000A = UI_get_party_list();
	if (!UI_get_item_flag(UI_get_npc_object(0xFF70), 0x0006)) goto labelFunc048F_00C6;
	Func08C1();
labelFunc048F_00C6:
	if (!UI_get_item_flag(UI_get_npc_object(0xFF6D), 0x0006)) goto labelFunc048F_00DA;
	Func08C2();
labelFunc048F_00DA:
	if (!gflags[0x0198]) goto labelFunc048F_00E7;
	UI_add_answer("sacrifice");
labelFunc048F_00E7:
	var000B = false;
	var000C = false;
	if (!(!gflags[0x01C8])) goto labelFunc048F_010D;
	message("\"Hello, ");
	message(var0000);
	message(". Thou mayest call me Mistress Mordra.\" She peers at you closely.~~\"And thou must be ");
	message(var0001);
	message(", the Avatar.\" She looks you over thoroughly.");
	say();
	gflags[0x01C8] = true;
	goto labelFunc048F_011B;
labelFunc048F_010D:
	message("\"Greetings once again, ");
	message(var0001);
	message(".\"");
	say();
	var0008 = true;
labelFunc048F_011B:
	var000D = UI_get_avatar_ref();
	var000E = UI_find_nearest(var000D, 0x0190, 0x0019);
	if (!(var000E == 0x0000)) goto labelFunc048F_014C;
	var000E = UI_find_nearest(var000D, 0x019E, 0x0019);
labelFunc048F_014C:
	if (!(!(var000E == 0x0000))) goto labelFunc048F_016A;
	var000F = 0x0000;
	Func091F(var000E, var000F);
	var0002 = true;
labelFunc048F_016A:
	var000A = UI_get_party_list2();
	enum();
labelFunc048F_0172:
	for (var0012 in var000A with var0010 to var0011) attend labelFunc048F_0190;
	UI_clear_item_flag(var0012, 0x0008);
	Func08BF(var0012);
	goto labelFunc048F_0172;
labelFunc048F_0190:
	message("She lifts up her arms and in one of them you see an ankh. Words which you vaguely recognize flow from her lips and the ankh glows brightly. She stops chanting and the ankh dims. After her analysis of your condition is complete, \"Ah, it is good to see that the world has been treating thee well. How may I serve thee, 'O Virtuous One?\"");
	say();
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x01A8] && (!gflags[0x01AA]))) goto labelFunc048F_01B6;
	UI_add_answer("cage made");
labelFunc048F_01B6:
	converse attend labelFunc048F_03E6;
	case "name" attend labelFunc048F_01D2:
	message("She smiles at you. \"Thou art quite forgetful, ");
	message(var0001);
	message(". As I have told thee, I am known as Mordra.\"");
	say();
	UI_remove_answer("name");
labelFunc048F_01D2:
	case "job" attend labelFunc048F_01EE:
	message("\"I was the healer of this town before the fire erupted that shattered the lives of those here. I also dabbled in secret magical arts for a while.\" She winks at you slyly.");
	say();
	UI_add_answer(["lives", "fire", "magical arts"]);
labelFunc048F_01EE:
	case "ingredients" attend labelFunc048F_0201:
	message("\"If I tell thee, thou must be sure to get them right. Otherwise, what happened when I told that blasted mayor will happen again. And, while we here in Skara Brae have no more lives to lose, thou hast quite a valuable one! ~~\"The ingredients necessary for the concoction to dissolve the liche are a potion of invisibility, a dose of a potion of curing, and one\tvial of the essence of mandrake -- I have one set aside somewhere in mine house. Remember, only -one- vial of the mandrake!\"");
	say();
	UI_remove_answer("ingredients");
labelFunc048F_0201:
	case "cage made" attend labelFunc048F_0236:
	UI_remove_answer("cage made");
	message("\"The Soul Cage must be empowered with the might of the dead. The way to accomplish this is to go to the back of the Dark Tower, to the Well of Souls. Thou must lower the cage into the well, where the souls trapped there will lose a little of themselves to imbue it with the required power.~~\"I know this sounds harsh, but it is a necessary evil if thou wouldst see them freed.\" She looks at you sharply.~~\"The next step is to wait until midnight, then clap the cage upon the recumbent form of the Liche. This is the period of time in which he drains the spirits of the townsfolk in his Black Service.\"~~After a brief moment, she continues. \"Finally, thou must pour a magical formula upon the Liche within the cage. This formula is the same substance that destroyed the town.~~\"Do be careful when procuring it from the alchemist, Caine.\"");
	say();
	UI_add_answer(["Dark Tower", "Well of Souls", "Black Service"]);
	if (!(!gflags[0x01C0])) goto labelFunc048F_0232;
	UI_add_answer("formula");
labelFunc048F_0232:
	var0004 = true;
labelFunc048F_0236:
	case "formula" attend labelFunc048F_0254:
	message("\"Thou must have Caine's assistance in creating the formula, but I can give thee the ingredients.\"");
	say();
	gflags[0x01C0] = true;
	UI_remove_answer("formula");
	UI_add_answer("ingredients");
labelFunc048F_0254:
	case "Dark Tower" attend labelFunc048F_0279:
	message("\"The Dark Tower lies on the northwestern point of Skara Brae. There is something odd about its construction, for I find it very hard to penetrate with my magical senses.~Within it,\" she says, \"thou wilt find the Well of Souls.\"");
	say();
	UI_remove_answer("Dark Tower");
	if (!(!var0007)) goto labelFunc048F_0275;
	UI_add_answer("Well of Souls");
labelFunc048F_0275:
	var0013 = true;
labelFunc048F_0279:
	case "Well of Souls" attend labelFunc048F_0294:
	var0007 = true;
	message("\"The Well of Souls is a powerful artifact, located beneath the Dark Tower, from which the Liche draws his power. The souls of the dead are incarcerated there, doomed to the torment of Horance's all-consuming appetite.\" An expression of pain shows in her features.");
	say();
	UI_remove_answer("Well of Souls");
	var0007 = true;
labelFunc048F_0294:
	case "Black Service" attend labelFunc048F_02D1:
	if (!(!gflags[0x01AA])) goto labelFunc048F_02B8;
	message("Angrily, Mordra says, \"Each night, at the stroke of midnight, the spirits of Skara Brae travel to the Dark Tower and are used to infuse Horance with power to continue his dark existence. None of the others are aware when this happens, but I feel it without being able to stop myself.\"");
	say();
	if (!(!var0013)) goto labelFunc048F_02B5;
	UI_add_answer("Dark Tower");
labelFunc048F_02B5:
	goto labelFunc048F_02CA;
labelFunc048F_02B8:
	message("\"Even though the Liche is gone, we are still drawn to the place of his Black Service. He must have bound us with a geas and tied it to the power of the Well of Souls. Oh, what a crafty villain he was.\" Grudging respect for a skilled mage is mixed with disgust in Mordra's expression.");
	say();
	if (!(!var0007)) goto labelFunc048F_02CA;
	UI_add_answer("Well of Souls");
labelFunc048F_02CA:
	UI_remove_answer("Black Service");
labelFunc048F_02D1:
	case "lives" attend labelFunc048F_030A:
	message("\"Wouldst thou like to know about the townsfolk of Skara Brae?\"");
	say();
	if (!var0008) goto labelFunc048F_02E7;
	message("\"I might have some new information on my fellow townsfolk that could be of use to thee,\" she says, adding a smile.");
	say();
labelFunc048F_02E7:
	var0014 = Func090A();
	if (!var0014) goto labelFunc048F_02F9;
	Func08C0();
	goto labelFunc048F_0303;
labelFunc048F_02F9:
	message("\"Very well, ");
	message(var0000);
	message(". What wouldst thou care to know about?\"");
	say();
labelFunc048F_0303:
	UI_remove_answer("lives");
labelFunc048F_030A:
	case "fire" attend labelFunc048F_033A:
	message("\"'Twas the doom of this town, although I place no blame upon the alchemist, Caine. For I was the one who told him the recipe that I am sure will rid us of Horance the Liche.\"");
	say();
	UI_remove_answer("fire");
	if (!(!var0005)) goto labelFunc048F_032B;
	UI_add_answer("Caine");
labelFunc048F_032B:
	UI_add_answer("recipe");
	var000B = true;
	var000C = true;
labelFunc048F_033A:
	case "recipe" attend labelFunc048F_035B:
	message("\"'Twas but a simple mixture of a few ingredients. It should have worked.\" Her eyes narrow.~~\"I expect that mayor of ours, Forsythe, fouled things up!\"");
	say();
	UI_remove_answer("recipe");
	if (!(!var0003)) goto labelFunc048F_035B;
	UI_add_answer("mayor");
labelFunc048F_035B:
	case "mayor" attend labelFunc048F_0380:
	message("\"That man is a bumbling idiot. It is his fault that the island was destroyed. I gave him the exact portions of the reagents to be used in the magical formula, and he paraphrased it to the alchemist, Caine. By the size of the fire, I am sure he misquoted the amount of mandrake root by\ttenfold. Damn that foolish man!\"~~Her brow creases and you\tcan see that this is a subject that she likes to avoid.");
	say();
	var0003 = true;
	UI_remove_answer("mayor");
	if (!(!var0005)) goto labelFunc048F_0380;
	UI_add_answer("Caine");
labelFunc048F_0380:
	case "Caine" attend labelFunc048F_0397:
	message("\"Now those who reside here call him `the Tortured One.' That is because he is in eternal pain, caused by searing flames licking at his flesh.~~The pain is imagined, but to him, 'tis as real as thou or I... or, at least, as real as\tthou art!\"");
	say();
	var0005 = true;
	UI_remove_answer("Caine");
labelFunc048F_0397:
	case "magical arts" attend labelFunc048F_03AA:
	message("Her eyes twinkle mischievously. \"If I were to reveal them to thee, they wouldn't be secret any longer, now would they?\"");
	say();
	UI_remove_answer("magical arts");
labelFunc048F_03AA:
	case "sacrifice" attend labelFunc048F_03D0:
	if (!(!gflags[0x01A0])) goto labelFunc048F_03C4;
	message("She smiles at first, then turns serious. \"I have tied my spirit to powers beyond the realm of this mortal world. Were I to enter the Well of Souls, this entire island and a good bit of the mainland would be destroyed in a magical discharge. Wouldst thou lose the town of Skara Brae for all eternity?\"");
	say();
	gflags[0x01A0] = true;
	goto labelFunc048F_03C9;
labelFunc048F_03C4:
	message("\"Thou knowest full well that I cannot. If thou wouldst\tsee mass destruction, thou shalt have to cause it thyself.\" She turns away quickly for a woman of her age.*");
	say();
	abort;
labelFunc048F_03C9:
	UI_remove_answer("sacrifice");
labelFunc048F_03D0:
	case "bye" attend labelFunc048F_03E3:
	message("\"Goodbye, young ");
	message(var0001);
	message(". Take care of thyself, but should ill befall thee, I hope that thou wilt come back here and let me minister to thine ailments.\" She smiles kindly as you leave.*");
	say();
	abort;
labelFunc048F_03E3:
	goto labelFunc048F_01B6;
labelFunc048F_03E6:
	endconv;
labelFunc048F_03E7:
	if (!(event == 0x0000)) goto labelFunc048F_03F0;
	abort;
labelFunc048F_03F0:
	return;
}


