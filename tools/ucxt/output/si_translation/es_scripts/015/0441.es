#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0813 0x813 ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func0955 0x955 ();
extern void Func0811 0x811 ();

void Func0441 object#(0x441) ()
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

	var0000 = UI_get_item_flag(0xFFBF, 0x001C);
	var0001 = "stranger";
	if (!var0000) goto labelFunc0441_001F;
	var0001 = Func0954();
labelFunc0441_001F:
	if (!gflags[0x0048]) goto labelFunc0441_002B;
	var0001 = "Knight";
labelFunc0441_002B:
	var0002 = Func097D(0xFE9B, 0xFE99, 0x037C, 0xFE99, 0x0007);
	var0003 = Func0954();
	if (!(event == 0x0007)) goto labelFunc0441_0060;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0441_0060:
	if (!(event == 0x0001)) goto labelFunc0441_0098;
	Func097F(0xFE9C, "@Pardon me....@", 0x0000);
	0xFFBF->Func07D1();
	Func097F(0xFFBF, (("@Yes, " + var0001) + "?@"), 0x0002);
	UI_set_schedule_type(0xFFBF, 0x0003);
labelFunc0441_0098:
	if (!(event == 0x0009)) goto labelFunc0441_0428;
	UI_run_schedule(0xFFBF);
	UI_clear_item_say(0xFFBF);
	var0005 = false;
	if (!(UI_get_schedule_type(0xFFBF) == 0x0007)) goto labelFunc0441_00C4;
	var0005 = true;
labelFunc0441_00C4:
	UI_show_npc_face0(0xFFBF, 0x0000);
	if (!(!var0000)) goto labelFunc0441_0106;
	if (!gflags[0x004A]) goto labelFunc0441_00E8;
	message("\"I am Cellia the Furrier. What may I do for thee, ");
	message(var0001);
	message("?\"");
	say();
	goto labelFunc0441_00F9;
labelFunc0441_00E8:
	message("\"When thou hast become a Knight, I can be of service to thee. Until then, go thy way.\"");
	say();
	Func097F(0xFFBF, "@Farewell.@", 0x0000);
	abort;
labelFunc0441_00F9:
	UI_set_item_flag(0xFFBF, 0x001C);
	goto labelFunc0441_0134;
labelFunc0441_0106:
	if (!gflags[0x004A]) goto labelFunc0441_0119;
	message("\"Glad to see thee again, ");
	message(var0001);
	message(". What may I do for thee?\"");
	say();
	goto labelFunc0441_0134;
labelFunc0441_0119:
	message("\"Glad to see thee again, ");
	message(var0001);
	message(".\"");
	say();
	message("\"When thou hast become a Knight, I can be of service to thee. Until then, be thou gone.\"");
	say();
	Func097F(0xFFBF, "@Farewell.@", 0x0000);
	abort;
labelFunc0441_0134:
	if (!(gflags[0x004A] && (!gflags[0x007D]))) goto labelFunc0441_0146;
	UI_add_answer("slain wolf");
labelFunc0441_0146:
	if (!(gflags[0x007D] && (!gflags[0x007E]))) goto labelFunc0441_0158;
	UI_add_answer("cloak");
labelFunc0441_0158:
	if (!(gflags[0x009D] && (!gflags[0x0292]))) goto labelFunc0441_016A;
	UI_add_answer("fur cap");
labelFunc0441_016A:
	UI_add_answer(["buy", "furrier", "bye"]);
labelFunc0441_017A:
	converse attend labelFunc0441_0427;
	case "slain wolf" attend labelFunc0441_025F:
	UI_remove_answer("slain wolf");
	message("\"Now that thou hast completed the Test, I must make a cloak for thee from the skin of the animal thou didst slay.\"");
	say();
	if (!(!var0005)) goto labelFunc0441_019E;
	message("\"When I am in my shop, bring me the body which thou didst obtain at Knight's Test.\"");
	say();
	goto labelFunc0441_025F;
labelFunc0441_019E:
	message("\"Give to me the body.\"");
	say();
	if (!var0002) goto labelFunc0441_022F;
	var0004 = UI_remove_party_items(0xFE99, 0x037C, 0xFE99, 0x0007, true);
	message("\"Oooh, 'tis a large one.\"");
	say();
	var0006 = UI_get_cont_items(var0004, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc0441_01F8;
	enum();
labelFunc0441_01DA:
	for (var0009 in var0006 with var0007 to var0008) attend labelFunc0441_01F8;
	var000A = UI_set_last_created(var0009);
	var0004 = Func0813();
	goto labelFunc0441_01DA;
labelFunc0441_01F8:
	var000B = Func0992(0xFFFD, "@The Avatar is quite skilled at killing large animals.@", 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0441_021D;
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
labelFunc0441_021D:
	message("\"Return in one day. I shall have thy cloak by then.\"");
	say();
	UI_set_timer(0x0004);
	gflags[0x007D] = true;
	goto labelFunc0441_025F;
labelFunc0441_022F:
	var000B = Func0992(0x0001, "@But we do not have the body with us.@", "@I do not have the wolf's body.@", false);
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I cannot make thee a cloak without an animal's skin!\"");
	say();
	message("\"Return to Knight's Test, and bring me the slain wolf. Or else thou canst not achieve thy knighthood!\"");
	say();
	Func097F(0xFFBF, "@Go!@", 0x0000);
	abort;
labelFunc0441_025F:
	case "cloak" attend labelFunc0441_0313:
	UI_remove_answer("cloak");
	if (!(UI_get_timer(0x0004) < 0x0017)) goto labelFunc0441_02C1;
	message("\"It is not time! I must have the full 24 hours!\"");
	say();
	var000B = Func0992(0x0001, (("@Take care, " + var0003) + ". She hath a very sharp knife!@"), 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0441_02B1;
	UI_set_conversation_slot(0x0000);
	UI_remove_npc_face1();
	message("\"And I know exactly where and how to use it...\"");
	say();
labelFunc0441_02B1:
	Func097F(0xFFBF, "@Give me time!@", 0x0000);
	abort;
	goto labelFunc0441_0313;
labelFunc0441_02C1:
	message("\"It is ready.\"");
	say();
	var000B = Func0992(0xFFFD, (("@'Tis beautiful, " + var0003) + "!@"), 0x0000, false);
	if (!(var000B != 0xFE9C)) goto labelFunc0441_02F6;
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"What didst thou expect?\"");
	say();
labelFunc0441_02F6:
	var0004 = Func099B(0xFE9C, 0x0001, 0x00E3, 0xFE99, 0x0003, 0x0000, true);
	gflags[0x007E] = true;
labelFunc0441_0313:
	case "furrier" attend labelFunc0441_0352:
	UI_remove_answer("furrier");
	message("\"I am the furrier, tanner and tailor of Monitor. It is my duty to make cloaks from the animals slain by our valiant Knights. If one were to travel far north, it is exactly the sort of thing one should wear.\"");
	say();
	message("\"I skin the carcasses myself.\"");
	say();
	message("\"Other pelts I obtain from the northern trappers. They supply exotic furs which are rare here in Monitor -- especially Gwani pelts!\"");
	say();
	UI_add_answer(["trappers", "Gwani pelts"]);
	if (!(gflags[0x004A] && (!gflags[0x007D]))) goto labelFunc0441_0352;
	message("\"Now that thou hast completed the Test of Knighthood, thou must bring me the body of the animal thou didst slay.\"");
	say();
	message("\"I shall make a cloak from its skin for thee.\"");
	say();
	message("\"This is the cloak which thou must wear to the Ceremony of Initiation.\"");
	say();
labelFunc0441_0352:
	case "Gwani pelts" attend labelFunc0441_0371:
	UI_remove_answer("Gwani pelts");
	message("\"Hast thou not heard stories of these creatures? They are terrible, ferocious, savage creatures!\"");
	say();
	message("\"They live in the snowlands of the far north, where the Goblins sometimes go to war on them.\"");
	say();
	message("\"It is exceedingly rare for the Goblins to slay a Gwani, but when they do, their chieftain immediately lays claim to the carcass.\"");
	say();
	message("\"Only the toughest Goblin chiefs wear the Gwani cloak. And only the toughest Knights can slay such a fearsome Goblin!\"");
	say();
labelFunc0441_0371:
	case "trappers" attend labelFunc0441_0397:
	UI_remove_answer("trappers");
	message("\"Luther brings me leopard pelts now and again, but mostly I must rely on the trappers to bring me exotic furs.\"");
	say();
	message("\"The trappers live in the Great Northern Forest, at the foot of the Impassable Mountains.\"");
	say();
	message("\"A trapper named Hazard sells me snow leopard pelts. Unfortunately, his men only make it as far south as Monitor a few times a year.\"");
	say();
	message("\"Sometimes he even sends Gwani pelts! He likes hunting Gwani because it is such a challenge.\"");
	say();
	UI_add_answer("Luther");
labelFunc0441_0397:
	case "Luther" attend labelFunc0441_03B6:
	UI_remove_answer("Luther");
	message("\"Actually, when Luther doth go on the hunt he rarely catches anything!\"");
	say();
	message("\"Like all the other Bears, I think he prefers to hunt other warriors! He always bullies the strangers that come into town.\"");
	say();
	message("\"He is a bully and someone should teach him a lesson! I have noticed that Luther doth completely relax his guard whenever he loses his temper. And nothing angers him so much as when he is taunted. Do with the information what thou wilt. I simply love to cause dissension.\"");
	say();
	gflags[0x0042] = true;
labelFunc0441_03B6:
	case "buy" attend labelFunc0441_03EE:
	if (!(UI_get_schedule_type(0xFFBF) == 0x0007)) goto labelFunc0441_03E3;
	message("\"Dost thou wish to buy one of my pelts or cloaks?\"");
	say();
	if (!Func0955()) goto labelFunc0441_03DC;
	Func0811();
	goto labelFunc0441_03E0;
labelFunc0441_03DC:
	message("\"Some other time, perhaps.\"");
	say();
labelFunc0441_03E0:
	goto labelFunc0441_03EE;
labelFunc0441_03E3:
	message("\"If thou wouldst come to my shop during the day, I could sell thee something...\"");
	say();
	UI_remove_answer("buy");
labelFunc0441_03EE:
	case "fur cap" attend labelFunc0441_0401:
	UI_remove_answer("fur cap");
	message("\"The fur cap thou hast described is from Northern Forest, but it is too fancy for any woman from this part of the world. In truth it doth remind me of a piece of work I created for Frigidazzi, a mage in the city of Moonshade. Yes, that must be it.\"");
	say();
labelFunc0441_0401:
	case "bye" attend labelFunc0441_0424:
	Func097F(0xFE9C, "@Good day to thee.@", 0x0000);
	Func097F(0xFFBF, "@Happy Hunting!@", 0x0002);
	goto labelFunc0441_0427;
labelFunc0441_0424:
	goto labelFunc0441_017A;
labelFunc0441_0427:
	endconv;
labelFunc0441_0428:
	return;
}


