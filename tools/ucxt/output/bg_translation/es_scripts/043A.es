#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func043A object#(0x43A) ()
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

	if (!(event == 0x0001)) goto labelFunc043A_0258;
	UI_show_npc_face(0xFFC6, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFC6));
	if (!(var0002 == 0x0007)) goto labelFunc043A_006D;
	var0004 = Func08FC(0xFFC6, 0xFFE6);
	if (!var0004) goto labelFunc043A_0058;
	message("Gordon is too involved in listening to the Fellowship meeting to hear you.*");
	say();
	abort;
	goto labelFunc043A_006D;
labelFunc043A_0058:
	if (!gflags[0x00DA]) goto labelFunc043A_0068;
	message("\"Where oh where is Batlin? He is late for the meeting!\"");
	say();
	goto labelFunc043A_006D;
	goto labelFunc043A_006D;
labelFunc043A_0068:
	message("\"Oh, my! I must leave immediately! I am late for the Fellowship meeting!\"*");
	say();
	abort;
labelFunc043A_006D:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00BB])) goto labelFunc043A_008F;
	message("You see a friendly face looking back at you.");
	say();
	gflags[0x00BB] = true;
	goto labelFunc043A_0099;
labelFunc043A_008F:
	message("\"How art thou this fine day, ");
	message(var0000);
	message("?\" asks Gordon.");
	say();
labelFunc043A_0099:
	converse attend labelFunc043A_024D;
	case "name" attend labelFunc043A_00AF:
	message("\"My name is Gordon.\"");
	say();
	UI_remove_answer("name");
labelFunc043A_00AF:
	case "job" attend labelFunc043A_00C8:
	message("\"I sell fish and chips from my wagon.\"");
	say();
	UI_add_answer(["fish and chips", "wagon"]);
labelFunc043A_00C8:
	case "fish and chips" attend labelFunc043A_014B:
	if (!(!(var0003 == 0x0007))) goto labelFunc043A_00E3;
	message("\"Come back later when I am open for business.\"*");
	say();
	abort;
	goto labelFunc043A_0144;
labelFunc043A_00E3:
	message("\"I have the best fish and chips thou shalt taste in all of Britannia. My price is only 8 gold coins per serving. Wouldst thou like to have some?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc043A_0140;
	var0006 = UI_remove_party_items(0x0008, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0006) goto labelFunc043A_0139;
	var0007 = UI_add_party_items(0x0001, 0x0179, 0xFE99, 0x001E, true);
	if (!var0007) goto labelFunc043A_0132;
	message("He hands you a plate.");
	say();
	message("\"They are indeed the best fish and chips in all of Britannia.\"");
	say();
	goto labelFunc043A_0136;
labelFunc043A_0132:
	message("\"Thou art carrying too many things to take thy fish and chips from me!\"");
	say();
labelFunc043A_0136:
	goto labelFunc043A_013D;
labelFunc043A_0139:
	message("\"Thou dost not have enough gold to get any fish and chips. Sorry!\"");
	say();
labelFunc043A_013D:
	goto labelFunc043A_0144;
labelFunc043A_0140:
	message("\"Come back again when thou art hungry and I am sure thou shalt change thy mind.\"");
	say();
labelFunc043A_0144:
	UI_remove_answer("fish and chips");
labelFunc043A_014B:
	case "wagon" attend labelFunc043A_016B:
	message("\"I just painted my wagon recently. It receives more attention. Business is much better now. I am saving my money to travel to Buccaneer's Den.\"");
	say();
	UI_remove_answer("wagon");
	UI_add_answer(["business", "Buccaneer's Den"]);
labelFunc043A_016B:
	case "business" attend labelFunc043A_018B:
	message("\"Ever since I became a member of The Fellowship, business has been increasing steadily. I have refined and improved the recipe for my fish batter and it has since become a favorite meal of nearly everyone in Britain. I have even served my fish and chips to Lord British himself.\"");
	say();
	UI_add_answer(["Fellowship", "Lord British"]);
	UI_remove_answer("business");
labelFunc043A_018B:
	case "Lord British" attend labelFunc043A_019E:
	message("\"Thou dost know-- the bloke who wears a crown and acts like a king.\"");
	say();
	UI_remove_answer("Lord British");
labelFunc043A_019E:
	case "Fellowship" attend labelFunc043A_01D4:
	if (!var0001) goto labelFunc043A_01CA;
	message("\"I am glad to see that thou art a member. Will I see thee at the next meeting?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc043A_01C3;
	message("\"Then I shall see thee at nine o'clock sharp!\"");
	say();
	goto labelFunc043A_01C7;
labelFunc043A_01C3:
	message("\"Thou shouldst apply thyself more stringently to the ways of The Fellowship! Our meeting is at nine o'clock. I can see thou dost certainly need to attend.\"");
	say();
labelFunc043A_01C7:
	goto labelFunc043A_01CD;
labelFunc043A_01CA:
	Func0919();
labelFunc043A_01CD:
	UI_remove_answer("Fellowship");
labelFunc043A_01D4:
	case "philosophy" attend labelFunc043A_01E6:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc043A_01E6:
	case "Buccaneer's Den" attend labelFunc043A_0206:
	message("\"I wish to win some money at Buccaneer's Den. It is a pirate resort and they have a fabulous House of Games there.\"");
	say();
	UI_add_answer(["pirate resort", "House of Games"]);
	UI_remove_answer("Buccaneer's Den");
labelFunc043A_0206:
	case "pirate resort" attend labelFunc043A_0219:
	message("\"As I am certain thou knowest, Buccaneer's Den was once a den of thieves and villains. As such, it held a romantic appeal for those who longed for a taste of such an adventurous existence. I confess, I am one of those people. When thou dost spend thy life selling fish from a wagon, thou art in need of excitement. The pirates eventually realized just how much they are secretly envied, and so they have turned their island into a place of thrilling amusements.\"");
	say();
	UI_remove_answer("pirate resort");
labelFunc043A_0219:
	case "House of Games" attend labelFunc043A_022C:
	message("\"It is said they have several games of chance there! Gold can be won wagering on the outcome of a race of fine stallions.\"");
	say();
	UI_remove_answer("House of Games");
labelFunc043A_022C:
	case "Fellowship" attend labelFunc043A_023F:
	message("\"I saw thee receive thy medallion. I can certainly say the Fellowship has done wonders for my life and I know it will be the same for thee as well.\" He gives thee a knowing grin.");
	say();
	UI_remove_answer("Fellowship");
labelFunc043A_023F:
	case "bye" attend labelFunc043A_024A:
	goto labelFunc043A_024D;
labelFunc043A_024A:
	goto labelFunc043A_0099;
labelFunc043A_024D:
	endconv;
	message("\"Have a pleasant day, ");
	message(var0000);
	message(".\" *");
	say();
labelFunc043A_0258:
	if (!(event == 0x0000)) goto labelFunc043A_02DF;
	var0002 = UI_part_of_day();
	var0003 = UI_get_schedule_type(UI_get_npc_object(0xFFC6));
	var0009 = UI_die_roll(0x0001, 0x0004);
	if (!(var0003 == 0x0007)) goto labelFunc043A_02D9;
	if (!(var0009 == 0x0001)) goto labelFunc043A_029C;
	var000A = "@Fish 'n' chips!@";
labelFunc043A_029C:
	if (!(var0009 == 0x0002)) goto labelFunc043A_02AC;
	var000A = "@Hot fish 'n' chips!@";
labelFunc043A_02AC:
	if (!(var0009 == 0x0003)) goto labelFunc043A_02BC;
	var000A = "@Fish 'n' chippies!@";
labelFunc043A_02BC:
	if (!(var0009 == 0x0004)) goto labelFunc043A_02CC;
	var000A = "@Fish 'n' chips here!@";
labelFunc043A_02CC:
	UI_item_say(0xFFC6, var000A);
	goto labelFunc043A_02DF;
labelFunc043A_02D9:
	Func092E(0xFFC6);
labelFunc043A_02DF:
	return;
}


