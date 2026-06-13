#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func0852 0x852 ();
extern void Func0911 0x911 (var var0000);

void Func084F 0x84F ()
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

	UI_show_npc_face(0xFFE6, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	message("The ceremony begins as Batlin stands before the gathered members of The Fellowship in Britain. He begins his sermon. \"My friends, I originally created The Fellowship to help ready Britannia and its people for the future. Today one of the greatest symbols of its past has come here to join our Fellowship. This is a great day, for as our past and present intertwine we shall send a message which shall be heard throughout Britannia. Soon all of its peoples will strive together for unity.\" The gathering breaks into loud cheers. \"When they hear that the Avatar has become a member of The Fellowship those who were at first distrustful of us will come to see the truth of what we stand for. Then we may bring about a day when all of Britannia is worthy of the ample rewards it shall receive.\"");
	say();
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc084F_005C;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you. \"Art thou quite certain, ");
	message(var0000);
	message(", that thou dost wish to join with these people?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc084F_0050;
	message("\"I am not certain if thou art brave or simply foolish.\"*");
	say();
	goto labelFunc084F_0055;
labelFunc084F_0050:
	message("\"It is a relief to me to hear that thou art not certain! Allow me to remind thee that it is not too late to refuse their offer! Let us leave, and quickly!\"*");
	say();
	abort;
labelFunc084F_0055:
	UI_remove_npc_face(0xFFFF);
labelFunc084F_005C:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Now is the time when our members give their testimonials of how they have been applying the Triad of Inner Strength to their lives. Who shall be the first?\"");
	say();
	var0004 = Func08F7(0xFFCB);
	if (!var0004) goto labelFunc084F_008E;
	UI_show_npc_face(0xFFCB, 0x0000);
	message("\"The Fellowship has taught me to live with the shortcomings of others,\" says Gaye.");
	say();
	UI_remove_npc_face(0xFFCB);
labelFunc084F_008E:
	var0005 = Func08F7(0xFFD7);
	if (!var0005) goto labelFunc084F_00C0;
	UI_show_npc_face(0xFFD7, 0x0000);
	message("\"I had lost all enthusiasm for life before I joined The Fellowship,\" says Candice.*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Thank thee for sharing, Candice.\"*");
	say();
	UI_remove_npc_face(0xFFD7);
labelFunc084F_00C0:
	var0006 = Func08F7(0xFFD5);
	if (!var0006) goto labelFunc084F_00E4;
	UI_show_npc_face(0xFFD5, 0x0000);
	message("\"The Fellowship helps me to be more honest with people,\" says Patterson.*");
	say();
	UI_remove_npc_face(0xFFD5);
labelFunc084F_00E4:
	var0007 = Func08F7(0xFFD3);
	if (!var0007) goto labelFunc084F_0108;
	UI_show_npc_face(0xFFD3, 0x0000);
	message("\"The Fellowship has taught me not to let others push me around,\" says Figg.*");
	say();
	UI_remove_npc_face(0xFFD3);
labelFunc084F_0108:
	var0008 = Func08F7(0xFFC9);
	if (!var0008) goto labelFunc084F_012C;
	UI_show_npc_face(0xFFC9, 0x0000);
	message("\"The Triad of Inner Strength has helped me to improve my skills and build better weapons,\" says Grayson.*");
	say();
	UI_remove_npc_face(0xFFC9);
labelFunc084F_012C:
	var0009 = Func08F7(0xFFC6);
	if (!var0009) goto labelFunc084F_015E;
	UI_show_npc_face(0xFFC6, 0x0000);
	message("\"The Fellowship has put me back on the path to prosperity,\" says Gordon.*");
	say();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Yes! Thank thee for sharing, brother!\"*");
	say();
	UI_remove_npc_face(0xFFC6);
labelFunc084F_015E:
	var000A = Func08F7(0xFFC5);
	if (!var000A) goto labelFunc084F_0182;
	UI_show_npc_face(0xFFC5, 0x0000);
	message("\"The Fellowship has taught me not to be afraid of success,\" says Sean.*");
	say();
	UI_remove_npc_face(0xFFC5);
labelFunc084F_0182:
	var000B = Func08F7(0xFFC1);
	if (!var000B) goto labelFunc084F_01A6;
	UI_show_npc_face(0xFFC1, 0x0000);
	message("\"The Fellowship has given my life a whole new purpose. Just today I have recruited two more potential members!\" says Millie.*");
	say();
	UI_remove_npc_face(0xFFC1);
labelFunc084F_01A6:
	var000C = Func08F7(0xFFDE);
	if (!var000C) goto labelFunc084F_01CA;
	UI_show_npc_face(0xFFDE, 0x0000);
	message("\"The Fellowship has taught me about the evils of the class structure,\" says Nanna.*");
	say();
	UI_remove_npc_face(0xFFDE);
labelFunc084F_01CA:
	var0002 = Func08F7(0xFFFF);
	var000D = Func08F7(0xFFFD);
	if (!(var000D && var0002)) goto labelFunc084F_023A;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("You notice Iolo is whispering to Shamino. \"I do not think that ");
	message(var0000);
	message(" doth realize the significance of the situation. ");
	message(var0001);
	message(" cannot be dissuaded. Perhaps thou shouldst give it a try.\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"All right, I shall give it a try.\" He nudges you and whispers. \"Perhaps we should get out of here, ");
	message(var0001);
	message(", before one of us does something they may later regret? Let us leave these premises, all right?\"");
	say();
	var000E = Func090A();
	if (!var000E) goto labelFunc084F_022F;
	message("\"I am glad thou dost see it my way. We can leave whenever thou art ready.\"*");
	say();
	abort;
	goto labelFunc084F_0233;
labelFunc084F_022F:
	message("\"Then I guess it is too late for I already regret coming here.\"*");
	say();
labelFunc084F_0233:
	UI_remove_npc_face(0xFFFD);
labelFunc084F_023A:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Now is the time to welcome the newest member of The Fellowship to sit at our table.\" Batlin beckons you to join him at the podium.");
	say();
	message("He pours a glass of wine into a crystal goblet and takes a sip.");
	say();
	message("The goblet is passed around the hall, each member respectively taking a sip. Finally, the goblet is handed to you. You look at it thoughtfully as you feel all eyes in the room upon you.");
	say();
	if (!var000D) goto labelFunc084F_02C9;
	var000F = Func08F7(0xFFFC);
	var0010 = UI_is_pc_female();
	if (!var0010) goto labelFunc084F_0275;
	var0011 = "she";
	goto labelFunc084F_027B;
labelFunc084F_0275:
	var0011 = "he";
labelFunc084F_027B:
	if (!var000F) goto labelFunc084F_02C9;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("You hear Shamino desperately whispering to Dupre as they stand behind you. \"Dupre, we are having no success in showing the Avatar the mistake ");
	message(var0011);
	message(" must surely be making. Thou art our last hope.\"");
	say();
	UI_remove_npc_face(0xFFFD);
	UI_show_npc_face(0xFFFC, 0x0000);
	message("You feel a tapping on your shoulder and you turn to see Dupre as he whispers in your ear. \"I know a much better place to get a drink than this one. Perhaps thou wouldst like to join thy comrades there?\"");
	say();
	var0012 = Func090A();
	if (!var0012) goto labelFunc084F_02BE;
	message("\"Then let us be off. Now!\"*");
	say();
	abort;
	goto labelFunc084F_02C2;
labelFunc084F_02BE:
	message("\"Then I hope this game amuses thee, for it makes thy comrades sorely worried.\"*");
	say();
labelFunc084F_02C2:
	UI_remove_npc_face(0xFFFC);
labelFunc084F_02C9:
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Now there remains but one more test of thy loyalty to The Fellowship. I presume thou hast read the Book of Fellowship by now. I must ask you two questions. The answers may be found within the book.\" Batlin smiles modestly. \"I am the author, didst thou know? Well, never mind. Here we go.\"");
	say();
	Func0852();
	if (!(!gflags[0x0038])) goto labelFunc084F_0328;
	message("\"Excellent, Avatar!\"");
	say();
	message("Fighting a tremble of hesitation you take a long deep drink from the goblet. Batlin steps up to you. \"May the news spread far and wide that our newest member is none other than the Avatar!\"");
	say();
	message("The other Fellowship members cheer with pleasure.");
	say();
	var0013 = UI_add_party_items(0x0001, 0x03BB, 0xFE99, 0x0001, false);
	gflags[0x0091] = true;
	gflags[0x0006] = true;
	Func0911(0x01F4);
	if (!var0013) goto labelFunc084F_0320;
	message("\"Allow me to present thee with thy Fellowship medallion.\" Batlin gives you the medallion. \"Please -- wear thy medallion at all times for it shall be a symbol to all who see it that thou dost walk with the Fellowship. Ready it to thy neck immediately! Oh, and... welcome to The Fellowship, Avatar.\"*");
	say();
	gflags[0x0090] = true;
	goto labelFunc084F_0324;
labelFunc084F_0320:
	message("\"Thou art too encumbered to receive thy Fellowship medallion. Thou must lighten thy load.\"*");
	say();
labelFunc084F_0324:
	abort;
	goto labelFunc084F_0331;
labelFunc084F_0328:
	message("\"My dear Avatar. Thou must realize that thou must know everything there is to know about The Fellowship before I can induct thee. Please study thy Book of Fellowship and return to me.\"");
	say();
	message("Your mind seems unclear. I would not be surprised if thou dost not understand\tanother soul with whom thou dost speak.\"");
	say();
	abort;
labelFunc084F_0331:
	return;
}


