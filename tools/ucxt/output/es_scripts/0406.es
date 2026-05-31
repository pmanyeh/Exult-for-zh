#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08EE 0x8EE ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);

void Func0406 object#(0x406) ()
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

	if (!(event == 0x0001)) goto labelFunc0406_03C6;
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = UI_get_party_list();
	var0003 = false;
	var0004 = UI_get_npc_object(0xFFFA);
	var0005 = UI_get_npc_object(0xFFF6);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFFFA, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0406_006B;
	if (!(!var0006)) goto labelFunc0406_0068;
	message("The creature ignores you.*");
	say();
	abort;
	goto labelFunc0406_006B;
labelFunc0406_0068:
	Func08EE();
labelFunc0406_006B:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0136]) goto labelFunc0406_0087;
	var0007 = var0000;
labelFunc0406_0087:
	if (!gflags[0x0137]) goto labelFunc0406_0093;
	var0007 = var0001;
labelFunc0406_0093:
	if (!(!gflags[0x0019])) goto labelFunc0406_0121;
	if (!(!gflags[0x013C])) goto labelFunc0406_00DB;
	message("The ape-like creature peers at you intently for a few minutes. Then, shrugging, it walks cautiously up to you. \"I am Trellek. Your name is?\"");
	say();
	var0008 = Func090B([var0000, var0001]);
	if (!(var0008 == var0000)) goto labelFunc0406_00C2;
	gflags[0x0136] = true;
labelFunc0406_00C2:
	if (!(var0008 == var0001)) goto labelFunc0406_00D0;
	gflags[0x0137] = true;
labelFunc0406_00D0:
	gflags[0x013C] = true;
	gflags[0x0019] = true;
	goto labelFunc0406_011A;
labelFunc0406_00DB:
	message("The Emp peers at you intensely for a few minutes. Then, shrugging, it walks cautiously up to you. \"I am Trellek. Your name is?\"");
	say();
	var0008 = Func090B([var0000, var0001]);
	if (!(var0008 == var0000)) goto labelFunc0406_0102;
	gflags[0x0136] = true;
	var0007 = var0000;
labelFunc0406_0102:
	if (!(var0008 == var0001)) goto labelFunc0406_0116;
	gflags[0x0137] = true;
	var0007 = var0001;
labelFunc0406_0116:
	gflags[0x0019] = true;
labelFunc0406_011A:
	message("\"You are greeted.\"");
	say();
	goto labelFunc0406_012B;
labelFunc0406_0121:
	message("\"You are greeted, ");
	message(var0007);
	message(".\"");
	say();
labelFunc0406_012B:
	if (!(gflags[0x0138] && (!gflags[0x0156]))) goto labelFunc0406_016B;
	if (!gflags[0x0158]) goto labelFunc0406_015D;
	if (!gflags[0x0155]) goto labelFunc0406_0153;
	if (!(!gflags[0x0156])) goto labelFunc0406_0150;
	UI_add_answer("Saralek's idea");
labelFunc0406_0150:
	goto labelFunc0406_015A;
labelFunc0406_0153:
	UI_add_answer("No permission");
labelFunc0406_015A:
	goto labelFunc0406_016B;
labelFunc0406_015D:
	if (!(!gflags[0x0132])) goto labelFunc0406_016B;
	UI_add_answer("wisps");
labelFunc0406_016B:
	if (!gflags[0x00E2]) goto labelFunc0406_0178;
	UI_add_answer("Julius");
labelFunc0406_0178:
	if (!(gflags[0x0151] && (!gflags[0x0132]))) goto labelFunc0406_018A;
	UI_add_answer("join");
labelFunc0406_018A:
	converse attend labelFunc0406_03C1;
	case "name" attend labelFunc0406_01A0:
	message("\"My name is still Trellek.\"");
	say();
	UI_remove_answer("name");
labelFunc0406_01A0:
	case "job" attend labelFunc0406_01CA:
	message("He gives you a puzzled look.~~\"The meaning of `job' is not clear to me. Is `work' the word meant by you?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc0406_01C6;
	message("\"I am a gatherer of food.\"");
	say();
	UI_add_answer("gatherer");
	goto labelFunc0406_01CA;
labelFunc0406_01C6:
	message("\"No job is had by me.\"");
	say();
labelFunc0406_01CA:
	case "gatherer" attend labelFunc0406_01EA:
	message("\"All Emps are food-gatherers. Mainly fruits are sought by us.\"");
	say();
	UI_remove_answer("gatherer");
	UI_add_answer(["fruits", "Emps"]);
labelFunc0406_01EA:
	case "fruits" attend labelFunc0406_01FD:
	message("\"Fruits are pleasant-tasting, like the honey you gave us!\"");
	say();
	UI_remove_answer("fruits");
labelFunc0406_01FD:
	case "Emps" attend labelFunc0406_021D:
	message("\"I am an Emp. Saralek is an Emp. Salamon is an Emp. You,\" he smiles, \"are a human.\"");
	say();
	UI_remove_answer("Emps");
	UI_add_answer(["Saralek", "Salamon"]);
labelFunc0406_021D:
	case "Saralek" attend labelFunc0406_0237:
	message("\"Saralek is my bonded-one. `Wife' is what you would call her. My home is her home.\"");
	say();
	UI_add_answer("home");
	UI_remove_answer("Saralek");
labelFunc0406_0237:
	case "home" attend labelFunc0406_0251:
	message("\"Silverleaf trees are our homes,\" he nods.");
	say();
	UI_remove_answer("home");
	UI_add_answer("Silverleaf trees");
labelFunc0406_0251:
	case "Silverleaf trees" attend labelFunc0406_0264:
	message("\"Silverleaf trees cannot be explained by me in human terms. I am sorry. Another human should be asked by you?\" he shrugs, imitating the human gesture rather well.");
	say();
	UI_remove_answer("Silverleaf trees");
labelFunc0406_0264:
	case "Salamon" attend labelFunc0406_0277:
	message("\"Salamon is the wisest Emp. Humans have been met by her. -Many- things have been seen by her. She is very experienced and knowledgeable.\"");
	say();
	UI_remove_answer("Salamon");
labelFunc0406_0277:
	case "wisps" attend labelFunc0406_0297:
	message("\"Wisps are known to me,\" he nods. \"Wisps are found in the woods. What is your concern?\"");
	say();
	UI_add_answer(["woods", "talk to wisps"]);
	UI_remove_answer("wisps");
labelFunc0406_0297:
	case "No permission" attend labelFunc0406_02B1:
	message("\"For you to talk to wisps is still your wish? Then helping you is my goal. A whistle can be made by me.\"");
	say();
	UI_remove_answer("No permission");
	UI_add_answer("whistle");
labelFunc0406_02B1:
	case "Saralek's idea" attend labelFunc0406_02CB:
	message("\"Correct was my bonded-one. A whistle can be made by me.\"");
	say();
	UI_add_answer("whistle");
	UI_remove_answer("Saralek's idea");
labelFunc0406_02CB:
	case "woods" attend labelFunc0406_02DE:
	message("\"The residence of the wisps is a stone building in a mountain in the middle of the forest.\"");
	say();
	UI_remove_answer("woods");
labelFunc0406_02DE:
	case "whistle" attend labelFunc0406_0320:
	message("\"A whistling sound is made by Emps when talking is done by us. An imitation of that sound can be created by a special whistle,\" he says enthusiastically.~~He begins quickly searching around for a dead, hollow, fallen tree branch. Shortly he finds one that meets his satisfaction. Apparently embarrassed, he turns his back to you, and makes motions similar to one twisting a cork from a flagon.~~After a few minutes of this, he turns around and presents the whistle to you.");
	say();
	var000A = UI_add_party_items(0x0001, 0x02B5, 0xFE99, 0x0001, false);
	if (!var000A) goto labelFunc0406_0315;
	message("\"Here is your whistle.\"");
	say();
	Func0911(0x0032);
	gflags[0x0156] = true;
	goto labelFunc0406_0319;
labelFunc0406_0315:
	message("\"Fewer items must be carried by you to take this whistle.\"");
	say();
labelFunc0406_0319:
	UI_remove_answer("whistle");
labelFunc0406_0320:
	case "talk to wisps" attend labelFunc0406_0351:
	message("\"Your statement is a mystery. For me to talk to wisps is what you want?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc0406_0346;
	message("He looks around, apparently surveying the area.~~ \"No wisps are here for conversation.\"");
	say();
	UI_add_answer("go there");
	goto labelFunc0406_034A;
labelFunc0406_0346:
	message("\"Your want is not conveyed to me.\" He shrugs.");
	say();
labelFunc0406_034A:
	UI_remove_answer("talk to wisps");
labelFunc0406_0351:
	case "Julius" attend labelFunc0406_0372:
	UI_play_music(0x001A, 0x0000);
	message("\"Julius was a good human. His great deed was saving Emp family from big fire years ago.\" He stares at you directly.~~\"But, his story is sad, being about his death from too much smoke in his body. His body is in the cemetery near the Abbey. He is one human that Emps call 'hero'.\"");
	say();
	gflags[0x0129] = true;
	UI_remove_answer("Julius");
labelFunc0406_0372:
	case "join", "go there" attend labelFunc0406_03B3:
	message("\"Your wish is for me to travel with you?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0406_0398;
	message("\"My wish is that also. But that is not the wish of Saralek, my wife. Permission from her must first be gained.\"");
	say();
	gflags[0x0132] = true;
	goto labelFunc0406_03A2;
labelFunc0406_0398:
	message("\"You are very odd, ");
	message(var0007);
	message(".\"");
	say();
labelFunc0406_03A2:
	var0003 = true;
	UI_remove_answer(["go there", "join"]);
labelFunc0406_03B3:
	case "bye" attend labelFunc0406_03BE:
	goto labelFunc0406_03C1;
labelFunc0406_03BE:
	goto labelFunc0406_018A;
labelFunc0406_03C1:
	endconv;
	message("\"Good luck is hoped for you.\"*");
	say();
labelFunc0406_03C6:
	if (!(event == 0x0000)) goto labelFunc0406_046F;
	var000C = UI_part_of_day();
	var000D = UI_get_schedule_type(UI_get_npc_object(0xFFFA));
	var000E = UI_die_roll(0x0001, 0x0004);
	var0006 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!(var000D == 0x000B)) goto labelFunc0406_0455;
	if (!var0006) goto labelFunc0406_0455;
	if (!(var000E == 0x0001)) goto labelFunc0406_0425;
	var000F = "@You are greeted.@";
labelFunc0406_0425:
	if (!(var000E == 0x0002)) goto labelFunc0406_0435;
	var000F = "@Hello is said to you.@";
labelFunc0406_0435:
	if (!(var000E == 0x0003)) goto labelFunc0406_0445;
	var000F = "@A good day is hoped for you.@";
labelFunc0406_0445:
	if (!(var000E == 0x0004)) goto labelFunc0406_0455;
	var000F = "@The day is nice.@";
labelFunc0406_0455:
	if (!(var000D == 0x000E)) goto labelFunc0406_0465;
	var000F = "@Zzzzz...@";
labelFunc0406_0465:
	UI_item_say(0xFFFA, var000F);
labelFunc0406_046F:
	return;
}


