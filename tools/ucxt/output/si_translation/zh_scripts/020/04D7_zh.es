#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func08FC 0x8FC ();
extern void Func08FE 0x8FE ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func04D7 object#(0x4D7) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = UI_get_item_flag(0xFF29, 0x001C);
	if (!(event == 0x0001)) goto labelFunc04D7_004E;
	UI_item_say(0xFE9C, "Most honored one...");
	0xFF29->Func07D1();
	Func097F(0xFF29, "@What?@", 0x0002);
	UI_set_schedule_type(0xFF29, 0x0003);
labelFunc04D7_004E:
	if (!((event == 0x0009) || (event == 0x0002))) goto labelFunc04D7_0436;
	UI_set_schedule_type(0xFF29, 0x000A);
	UI_show_npc_face0(0xFF29, 0x0000);
	if (!var0003) goto labelFunc04D7_0083;
	message("\"We meet again, ");
	message(var0002);
	message(".  How may I aid thee?\"");
	say();
	goto labelFunc04D7_00A3;
labelFunc04D7_0083:
	UI_set_item_flag(0xFF29, 0x001C);
	message("\"Let the bells ring... for Xenka hath returned!!!\"");
	say();
	message("\"So, ");
	message(var0002);
	message(", thou art the one who hath caused me all this grief...\"");
	say();
	message("\"And you, my rock-brained monks! Is this how you serve my visions?! You cannot even take the words down properly!\"");
	say();
	message("\"I knew that thou wouldst need me to unravel the mess that these monks have made of my prophecies.\"");
	say();
labelFunc04D7_00A3:
	UI_add_answer(["returned", "grief", "unravel the mess"]);
	if (!(!gflags[0x0279])) goto labelFunc04D7_00C1;
	UI_add_answer("instructions");
labelFunc04D7_00C1:
	if (!(gflags[0x022B] && (!gflags[0x025E]))) goto labelFunc04D7_00D3;
	UI_add_answer("journey");
labelFunc04D7_00D3:
	if (!(gflags[0x0278] && (!gflags[0x01F9]))) goto labelFunc04D7_00E5;
	UI_add_answer("Staff of the Serpent");
labelFunc04D7_00E5:
	if (!(gflags[0x01F9] && (gflags[0x025E] && (gflags[0x022B] && (!gflags[0x0242]))))) goto labelFunc04D7_00FF;
	UI_add_answer("sacrifice");
labelFunc04D7_00FF:
	if (!gflags[0x0276]) goto labelFunc04D7_011A;
	message("\"There is no time left! Go to Sunrise Isle!\"");
	say();
	UI_remove_npc_face0();
	Func097F(0xFF29, "@Hurry!@", 0x0002);
	abort;
labelFunc04D7_011A:
	if (!gflags[0x0061]) goto labelFunc04D7_0127;
	UI_add_answer("final task");
labelFunc04D7_0127:
	if (!Func08FC()) goto labelFunc04D7_013C;
	message("\"Oh! One of thy friends hath met an untimely end. This should not be...\"");
	say();
	message("\"If thou art ready to see thy friend again, simply ask and I will return them to thee.\"");
	say();
	UI_add_answer("resurrection");
labelFunc04D7_013C:
	UI_add_answer(["bye"]);
labelFunc04D7_0146:
	converse attend labelFunc04D7_0435;
	case "resurrection" attend labelFunc04D7_015B:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc04D7_015B:
	case "returned" attend labelFunc04D7_0182:
	UI_remove_answer("returned");
	message("\"I knew that if I did not promise to return that these laggard monks would drift away from the task I set them.\"");
	say();
	message("\"As it is, they have nearly brought disaster upon us all... including thee, Hero from Another World.\"");
	say();
	UI_remove_answer(["task", "disaster", "Hero"]);
labelFunc04D7_0182:
	case "task" attend labelFunc04D7_019C:
	UI_remove_answer("task");
	message("\"They were to watch for thine arrival, oh mighty Hero, and prepare the people for the approaching danger.\"");
	say();
	UI_add_answer("danger");
labelFunc04D7_019C:
	case "danger" attend labelFunc04D7_01AF:
	UI_remove_answer("danger");
	message("\"I think that magical storms and earthquakes qualify as ample danger, but then I am not a Hero.\"");
	say();
labelFunc04D7_01AF:
	case "disaster" attend labelFunc04D7_01CF:
	UI_remove_answer("disaster");
	message("\"By hopelessly miring my visions in the bog of high and mighty language, they have delayed thee until it is nearly too late.\"");
	say();
	UI_add_answer(["miring my visions", "too late"]);
labelFunc04D7_01CF:
	case "miring my visions" attend labelFunc04D7_01E6:
	UI_remove_answer("miring my visions");
	message("\"I am a blunt, plain-spoken woman, noble Hero. Too plain for those who wanted to feel that they followed the words of some holy sage.\"");
	say();
	message("\"So my visions became cryptic puzzles and poor poetry, like that of some half-witted gleeman. And worse upon worse, they forgot the true meaning behind their flowery words!\"");
	say();
labelFunc04D7_01E6:
	case "too late" attend labelFunc04D7_01FD:
	UI_remove_answer("too late");
	message("\"The world is a heavy thing, Hero. Once it gathers enough force to try and shake those who sicken it from its skin, dost thou think that turning back will be easy?\"");
	say();
	message("\"Better to try and stand beneath a falling boulder and command it to stop.\"");
	say();
labelFunc04D7_01FD:
	case "Hero" attend labelFunc04D7_021F:
	UI_remove_answer("Hero");
	message("\"Do not thy companions dear to thine heart call thee Avatar?\"");
	say();
	message("\"Art thou not from a strange land that thou dost call Earth?\"");
	say();
	message("\"I think then that thou dost indeed fit the title of Hero from Another World.\"");
	say();
	UI_add_answer("Earth");
labelFunc04D7_021F:
	case "Earth" attend labelFunc04D7_0243:
	UI_remove_answer("Earth");
	message("\"I have never seen this wondrous land. I have only felt its presence upon the edge of the Void.\"");
	say();
	message("\"But I have felt great tides of power being directed toward it.\"");
	say();
	UI_add_answer(["Void", "power"]);
labelFunc04D7_0243:
	case "Void" attend labelFunc04D7_025A:
	UI_remove_answer("Void");
	message("\"I cannot explain how it was that I got there, or even that it is not empty...\"");
	say();
	message("\"Thou couldst not grasp it. For it encompasses countless worlds and draws power from the life-forces of each one. It is... amazing!\"");
	say();
labelFunc04D7_025A:
	case "power" attend labelFunc04D7_0271:
	UI_remove_answer("power");
	message("\"I have no name for what that power was. I know not if the intent was hostile or good.\"");
	say();
	message("\"I only felt the power move, as a swimmer feels the currents within a stream.\"");
	say();
labelFunc04D7_0271:
	case "grief" attend labelFunc04D7_0299:
	UI_remove_answer("grief");
	message("\"I was a wife, and a mother, Hero. I did not ask to become a prophetess.\"");
	say();
	message("\"My poor husband took me before the great Mages of Moonshade when these visions came upon me. And those wise men dismissed me saying, 'She is crazy.'\"");
	say();
	message("\"Mine husband, my children... even my children's children are long gone to dust. While I remain alive, enslaved to visions I never asked for!\"");
	say();
	UI_add_answer(["Mages of Moonshade", "visions"]);
labelFunc04D7_0299:
	case "Mages of Moonshade" attend labelFunc04D7_02BB:
	UI_remove_answer("Mages of Moonshade");
	message("\"Arrogant manipulators! Never once did they attempt to divine if my visions were true!\"");
	say();
	message("\"Never once did they offer to try and cure my supposed madness, for we were too poor to pay their fees.\"");
	say();
	message("\"Is it any wonder that they could not stand to live within the rule of an honest man?!\"");
	say();
	UI_add_answer("honest man");
labelFunc04D7_02BB:
	case "honest man" attend labelFunc04D7_02D2:
	UI_remove_answer("honest man");
	message("\"Surely thou knowest of whom I speak... For he is the ruler that sent thee to meet thy fate here.\"");
	say();
	message("\"Thy Lord British demanded honesty of the rogues that call themselves Mages. And when that sat ill in their bellies, they fled to where they could cheat people in peace!\"");
	say();
labelFunc04D7_02D2:
	case "visions" attend labelFunc04D7_02E9:
	UI_remove_answer("visions");
	message("\"At first they were but nightmares... Until I feared to close mine eyes. And then the death and destruction I saw followed mine every waking move.\"");
	say();
	message("\"The people of my village bade mine husband to cast me out, for they feared that my madness might spread. So I came to this island to be free of the whispers and stares.\"");
	say();
labelFunc04D7_02E9:
	case "unravel the mess" attend labelFunc04D7_0300:
	UI_remove_answer("unravel the mess");
	message("\"I can see that thou art unsure of how to progress, great Hero... That is why I am here.\"");
	say();
	message("\"Return here if thou art unsure of how to proceed. I shall guide thee in some small fashion.\"");
	say();
labelFunc04D7_0300:
	case "instructions" attend labelFunc04D7_033E:
	UI_remove_answer("instructions");
	if (!(!gflags[0x024C])) goto labelFunc04D7_033A;
	message("\"Take this Serpent's Tooth... Thou must seek the Dead on the Isle of Crypts.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x0006, 0x0000, true);
	gflags[0x024C] = true;
	goto labelFunc04D7_033E;
labelFunc04D7_033A:
	message("\"Use the tooth that I have given thee! Seek the Dead on the Isle of Crypts.\"");
	say();
labelFunc04D7_033E:
	case "journey" attend labelFunc04D7_036D:
	UI_remove_answer("journey");
	if (!Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x0000)) goto labelFunc04D7_0369;
	message("\"Good, thou hast the tooth that will take thee to Sunrise Isle!\"");
	say();
	goto labelFunc04D7_036D;
labelFunc04D7_0369:
	message("\"Thou must journey to the frozen wastelands and speak with those considered savage. They hold the means to further thy quest with the Serpent Tooth thou dost lack.\"");
	say();
labelFunc04D7_036D:
	case "Staff of the Serpent" attend labelFunc04D7_0380:
	UI_remove_answer("Staff of the Serpent");
	message("\"Without the proper armaments, thou canst not seek the wisdom of the dead. Seek the Staff of the Serpent within the bowels of Furnace.\"");
	say();
labelFunc04D7_0380:
	case "sacrifice" attend labelFunc04D7_03CD:
	UI_remove_answer("sacrifice");
	if (!gflags[0x0061]) goto labelFunc04D7_03AC;
	message("\"I share thy sorrow at the loss of thy friend, ");
	message(var0002);
	message(". Take comfort that his ashes shall be the glue which shall bind the sundered pieces of our land together once more.\"");
	say();
	message("\"But we must hurry... Only a few grains remain to fall. Time is fleeing. Take thy friend's ashes with thee, ");
	message(var0002);
	message(", for the Three must be with thee at the Chaos Shrine deep within the heart of Skullcrusher.\"");
	say();
	goto labelFunc04D7_03CD;
labelFunc04D7_03AC:
	if (!gflags[0x0060]) goto labelFunc04D7_03B9;
	message("\"Do not tarry overlong in thy goodbyes to thy friends, Hero. Our land has little time left for sentiment.\"");
	say();
	goto labelFunc04D7_03CD;
labelFunc04D7_03B9:
	message("\"As I had feared, the imbalance hath grown too powerful...\"");
	say();
	message("\"Only the final sacrifice of one who is in balance can aid thee now. For this, only thy three companions, the lady Gwenno and thyself doth qualify.\"");
	say();
	message("\"Thou must draw straws to see who the Monitor crematorium awaits.\"");
	say();
	gflags[0x0060] = true;
	message("\"I am sorry, Hero. Thou hast drawn the shortest straw. Take comfort that thine ashes shall bind the wounds of the land. Go quickly for the Hourglass is nearly empty.\"");
	say();
labelFunc04D7_03CD:
	case "final task" attend labelFunc04D7_040B:
	UI_remove_answer("final task");
	message("\"Thy time is at hand, ");
	message(var0002);
	message("!\"");
	say();
	message("\"Thy destiny and our fate shall be found upon the island known as Sunrise Isle. Take this Serpent Sword as my final aid to thee... I can do no more.\"");
	say();
	var0004 = Func099B(0xFE9C, 0x0001, 0x02C6, 0x0000, 0x0000, 0x0000, true);
	gflags[0x0276] = true;
	message("\"Go quickly! The end is at hand!\"");
	say();
labelFunc04D7_040B:
	case "bye" attend labelFunc04D7_0432:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFF29, "@Fulfill thy destiny!@", 0x0002);
	goto labelFunc04D7_0435;
labelFunc04D7_0432:
	goto labelFunc04D7_0146;
labelFunc04D7_0435:
	endconv;
labelFunc04D7_0436:
	return;
}


