#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func0883 0x883 ();
extern void Func0885 0x885 ();
extern void Func0884 0x884 ();
extern var Func0886 0x886 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func040C object#(0x40C) ()
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

	if (!(event == 0x0001)) goto labelFunc040C_04FE;
	UI_show_npc_face(0xFFF4, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = Func08F7(0xFFFE);
	var0003 = UI_is_pc_female();
	if (!((gflags[0x005A] == true) && (gflags[0x0048] == false))) goto labelFunc040C_00CE;
	message("\"Hast thou properly searched the stables?\"");
	say();
	if (!Func090A()) goto labelFunc040C_00C9;
	message("\"What didst thou find?\"");
	say();
	UI_clear_answers();
	var0004 = ["nothing", "a bucket", "a body"];
	if (!gflags[0x003C]) goto labelFunc040C_006D;
	var0004 = (var0004 & "a key");
labelFunc040C_006D:
	var0005 = Func090B(var0004);
	if (!(var0005 == "a key")) goto labelFunc040C_0099;
	if (!(!var0002)) goto labelFunc040C_008E;
	message("\"Hmmm, a key. Perhaps if thou dost ask Christopher's son about it, he may know what it is for.\"");
	say();
	goto labelFunc040C_0092;
labelFunc040C_008E:
	message("\"Ask Spark about it. He may know something.\"");
	say();
labelFunc040C_0092:
	gflags[0x0048] = true;
	goto labelFunc040C_0226;
labelFunc040C_0099:
	if (!(var0005 == "a body")) goto labelFunc040C_00A8;
	message("\"I know that! What ELSE didst thou find? Thou shouldst look again, Avatar!\"*");
	say();
	abort;
labelFunc040C_00A8:
	if (!(var0005 == "a bucket")) goto labelFunc040C_00B7;
	message("\"Yes, obviously it is filled with poor Christopher's own blood. But surely there was something else that might point us in the direction of the killer or killers - thou shouldst look again, Avatar.\"*");
	say();
	abort;
labelFunc040C_00B7:
	if (!(var0005 == "nothing")) goto labelFunc040C_00C6;
	message("\"Thou shouldst look again, 'Avatar'!\"*");
	say();
	abort;
labelFunc040C_00C6:
	goto labelFunc040C_00CE;
labelFunc040C_00C9:
	message("\"Well, do so, then come speak with me!\"*");
	say();
	abort;
labelFunc040C_00CE:
	if (!gflags[0x0059]) goto labelFunc040C_011F;
	message("\"Hmmm. Hast thou reconsidered mine offer to investigate the murder?\"");
	say();
	if (!Func090A()) goto labelFunc040C_00EF;
	message("\"Splendid. Then thou must really be the Avatar after all!\"");
	say();
	gflags[0x0059] = false;
	Func0883();
	goto labelFunc040C_0226;
	goto labelFunc040C_011F;
labelFunc040C_00EF:
	message("\"Then leave our people to work it out for themselves.\"*");
	say();
	UI_remove_npc_face(0xFFF4);
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc040C_011E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Avatar! I am ashamed of thee! Thou shouldst reconsider!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc040C_011E:
	abort;
labelFunc040C_011F:
	if (!(!gflags[0x004C])) goto labelFunc040C_0222;
	UI_halt_scheduled(item);
	UI_set_schedule_type(UI_get_npc_object(0xFFF4), 0x000B);
	message("You see a middle-aged nobleman.");
	say();
	gflags[0x004C] = true;
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc040C_01A9;
	message("\"Iolo! Who is this stranger?\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Why, this is the Avatar!\" Iolo proudly proclaims. \"Canst thou believe it? May I introduce thee? This is Finnigan, the Town Mayor. And this is ");
	message(var0001);
	message(", the Avatar!");
	say();
	if (!var0003) goto labelFunc040C_0175;
	message("\"I simply cannot believe she is here!\"*");
	say();
	goto labelFunc040C_0179;
labelFunc040C_0175:
	message("\"I simply cannot believe he is here!\"*");
	say();
labelFunc040C_0179:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("The Mayor looks you up and down, not sure if he believes Iolo or not. He looks at Iolo skeptically.");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I swear to thee, it is the Avatar!\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFF4, 0x0000);
	goto labelFunc040C_01AD;
labelFunc040C_01A9:
	message("\"I have heard that thou art the Avatar. I am not certain that I believe it.");
	say();
labelFunc040C_01AD:
	message("The mayor looks at you again as if he were studying every pore on your face. Finally, he smiles.");
	say();
	message("\"Welcome, Avatar.\"");
	say();
	message("But just as suddenly, Finnigan's face becomes stern.");
	say();
	message("\"A horrible murder has occurred. If thou art truly the Avatar, perhaps thou canst help us solve it. I would feel better if thou takest this matter into thine hands. Thou shalt be handsomely rewarded if thou dost discover the name of the killer. Dost thou accept?\"");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc040C_0216;
	var0007 = Func08F7(0xFFF5);
	if (!var0007) goto labelFunc040C_01F4;
	message("\"Petre here knows something about all of this.\"*");
	say();
	UI_show_npc_face(0xFFF5, 0x0000);
	message("The peasant interjects. \"I discovered poor Christopher and the Gargoyle Inamo early this morning.\"*");
	say();
	UI_remove_npc_face(0xFFF5);
	goto labelFunc040C_0202;
labelFunc040C_01F4:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("\"Petre, the stables caretaker, discovered poor Christopher and Inamo early this morning.\"");
	say();
labelFunc040C_0202:
	UI_show_npc_face(0xFFF4, 0x0000);
	message("The Mayor continues. \"Hast thou searched the stables?\"");
	say();
	Func0885();
	goto labelFunc040C_021F;
labelFunc040C_0216:
	message("\"Well, thou could not be the real Avatar then!\"*");
	say();
	gflags[0x0059] = true;
	abort;
labelFunc040C_021F:
	goto labelFunc040C_0226;
labelFunc040C_0222:
	message("\"Yes, Avatar?\" Finnigan asks.");
	say();
labelFunc040C_0226:
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!gflags[0x005B]) goto labelFunc040C_0246;
	UI_add_answer("report");
labelFunc040C_0246:
	if (!gflags[0x003F]) goto labelFunc040C_0259;
	UI_add_answer(["Fellowship", "Klog"]);
labelFunc040C_0259:
	if (!(gflags[0x0042] && (!gflags[0x003D]))) goto labelFunc040C_026B;
	UI_add_answer("password");
labelFunc040C_026B:
	if (!(gflags[0x0045] && (!gflags[0x0044]))) goto labelFunc040C_027D;
	UI_add_answer("Pay me now, please");
labelFunc040C_027D:
	converse attend labelFunc040C_04F9;
	case "name" attend labelFunc040C_0293:
	message("\"My name is Finnigan.\"");
	say();
	UI_remove_answer("name");
labelFunc040C_0293:
	case "job" attend labelFunc040C_02A6:
	message("\"I am the Mayor of Trinsic and have been since I arrived here three years ago.\"");
	say();
	UI_add_answer("Trinsic");
labelFunc040C_02A6:
	case "Trinsic" attend labelFunc040C_02DF:
	if (!var0003) goto labelFunc040C_02BD;
	var0008 = "by one who claimed she was the Avatar.";
	goto labelFunc040C_02C3;
labelFunc040C_02BD:
	var0008 = "by one who claimed he was the Avatar.";
labelFunc040C_02C3:
	message("\"Trinsic was once the city of Honor. I suppose it still is. Our Rune of Honor was taken many years ago ");
	message(var0008);
	message(" I believe it now resides in the Royal Museum in Britain, yet the empty pedestal still remains in the center of town. I feel this is symbolic of the town itself. It is rather empty -- of people, of life, and of honor. 'Tis sad, really.\"");
	say();
	message("\"Then there is this murder, of course. We have temporarily closed the gates of the city and require a password to get in or out.\"");
	say();
	UI_remove_answer("Trinsic");
	UI_add_answer("password");
labelFunc040C_02DF:
	case "Pay me now, please" attend labelFunc040C_032C:
	message("\"Of course, ");
	message(var0001);
	message(". Here is thy gold.\"");
	say();
	var0009 = UI_add_party_items(0x0064, 0x0284, 0xFE99, 0xFE99, true);
	if (!(!var0009)) goto labelFunc040C_0319;
	message("\"Oh, I am sorry, ");
	message(var0001);
	message(". Thou still cannot carry this amount. Thou must return to me later.\"");
	say();
	goto labelFunc040C_0325;
labelFunc040C_0319:
	message("\"Here thou art.\"");
	say();
	gflags[0x0045] = false;
	gflags[0x0044] = true;
labelFunc040C_0325:
	UI_remove_answer("Pay me now, please");
labelFunc040C_032C:
	case "murder" attend labelFunc040C_036F:
	if (!(!gflags[0x003D])) goto labelFunc040C_036B;
	message("\"A crime like this has never happened in Trinsic before. I cannot believe this happened to Christopher and Inamo. Please -- explore the town! I would appreciate it if thou wouldst bring me a report on thy progress. Be sure to ask everyone in town about the murder. After speaking with Christopher's son, thou mightest next want to speak with Gilberto, the guard on watch at the dock last night.\"");
	say();
	message("The mayor hesitates, then leans in to speak quietly.");
	say();
	message("\"Actually, I have seen something like this before. It was about four years ago, in Britain.\"");
	say();
	UI_add_answer(["Gilberto", "Christopher", "Inamo", "Britain", "report"]);
	gflags[0x005B] = true;
	UI_remove_answer("murder");
	goto labelFunc040C_036F;
labelFunc040C_036B:
	message("\"I hope thou art progressing on the murder investigation.\"");
	say();
labelFunc040C_036F:
	case "Britain" attend labelFunc040C_0382:
	message("\"'Twas before I came to Trinsic. There was a murder with strikingly similar aspects. A body was found mutilated exactly like poor Christopher. It appeared to be a ritualistic killing. I would wager that whoever was responsible for that murder is the culprit behind this one.\"");
	say();
	UI_remove_answer("Britain");
labelFunc040C_0382:
	case "son" attend labelFunc040C_0395:
	message("\"Christopher's son is called Spark. Their house is in the northwest area of town.\"");
	say();
	UI_remove_answer("son");
labelFunc040C_0395:
	case "Gilberto" attend labelFunc040C_03B5:
	message("\"He was struck from behind early this morning and was knocked senseless. Johnson, the morning watch, found him unconscious. He is recuperating at Chantu the Healer's house on the west side of town.\"");
	say();
	UI_remove_answer("Gilberto");
	UI_add_answer(["Johnson", "Chantu"]);
labelFunc040C_03B5:
	case "Chantu" attend labelFunc040C_03C8:
	message("\"He is our town healer. He hath been here for years. Nice fellow.\"");
	say();
	UI_remove_answer("Chantu");
labelFunc040C_03C8:
	case "report" attend labelFunc040C_0426:
	if (!gflags[0x0044]) goto labelFunc040C_03DD;
	message("\"I am satisfied with thy report. Please carry on thine investigation, Avatar.\"");
	say();
	goto labelFunc040C_041F;
labelFunc040C_03DD:
	if (!(!gflags[0x005D])) goto labelFunc040C_0405;
	message("\"Art thou ready to answer some questions concerning the investigation?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc040C_03FE;
	gflags[0x005D] = true;
	Func0884();
	goto labelFunc040C_0402;
labelFunc040C_03FE:
	message("\"Oh. Well, carry on with thine investigation.\"");
	say();
labelFunc040C_0402:
	goto labelFunc040C_041F;
labelFunc040C_0405:
	message("\"Shall we continue thy report?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc040C_041B;
	Func0884();
	goto labelFunc040C_041F;
labelFunc040C_041B:
	message("\"Oh. Well, carry on with thine investigation.\"");
	say();
labelFunc040C_041F:
	UI_remove_answer("report");
labelFunc040C_0426:
	case "Fellowship" attend labelFunc040C_0439:
	message("\"Why, they are an extremely helpful group. Their branch office is just east of mine. Very optimistic group of people.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc040C_0439:
	case "Klog" attend labelFunc040C_044C:
	message("\"He is the Fellowship branch leader. Kind man.\"");
	say();
	UI_remove_answer("Klog");
labelFunc040C_044C:
	case "Johnson" attend labelFunc040C_045F:
	message("\"He is probably at the dock right now.\"");
	say();
	UI_remove_answer("Johnson");
labelFunc040C_045F:
	case "Christopher" attend labelFunc040C_0479:
	message("\"Christopher was the local blacksmith. He lives, or rather -lived-, with his son in the northwest part of town. The blacksmith's shop is in the southwest corner. Christopher was not a rich man by any means -- he barely kept himself and his son alive. But he certainly enjoyed his work.\"");
	say();
	UI_remove_answer("Christopher");
	UI_add_answer("son");
labelFunc040C_0479:
	case "Inamo" attend labelFunc040C_048C:
	message("\"The Gargoyle Inamo slept in the stables, as I understand it. I believe he emigrated here from Terfin a few months ago. It seems that he was merely a chance victim of someone intent on violence.\"");
	say();
	UI_remove_answer("Inamo");
labelFunc040C_048C:
	case "password" attend labelFunc040C_04EB:
	if (!(gflags[0x0044] && (!gflags[0x003D]))) goto labelFunc040C_04D5;
	message("\"Oh, dost thou want the password now?\"");
	say();
	if (!Func090A()) goto labelFunc040C_04CD;
	if (!Func0886()) goto labelFunc040C_04C5;
	message("\"Excellent! I have no doubts now that thou art the one true Avatar!\"");
	say();
	message("\"Oh-- I almost forgot! The password to leave or enter the town is `Blackbird'!\"*");
	say();
	gflags[0x003D] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc040C_04CA;
labelFunc040C_04C5:
	message("\"Hmmm. I am afraid that I still have my doubts about thou being the Avatar. My public duty disallows me to give thee the password. I am sorry.\"");
	say();
	abort;
labelFunc040C_04CA:
	goto labelFunc040C_04D2;
labelFunc040C_04CD:
	message("The Mayor shrugs and looks at you as if you were mad.*");
	say();
	abort;
labelFunc040C_04D2:
	goto labelFunc040C_04E4;
labelFunc040C_04D5:
	message("\"I will give thee the password when thou hast given me a report on the progress of thine investigation.\"");
	say();
	UI_add_answer("report");
	gflags[0x0042] = true;
labelFunc040C_04E4:
	UI_remove_answer("password");
labelFunc040C_04EB:
	case "bye" attend labelFunc040C_04F6:
	goto labelFunc040C_04F9;
labelFunc040C_04F6:
	goto labelFunc040C_027D;
labelFunc040C_04F9:
	endconv;
	message("The Mayor nods his head at you and goes on about his business.*");
	say();
labelFunc040C_04FE:
	if (!(event == 0x0000)) goto labelFunc040C_057E;
	var000C = UI_get_schedule_type(UI_get_npc_object(0xFFF4));
	var000D = UI_die_roll(0x0001, 0x0004);
	if (!(var000C == 0x000B)) goto labelFunc040C_0578;
	if (!(var000D == 0x0001)) goto labelFunc040C_053B;
	var000E = "@What a day...@";
labelFunc040C_053B:
	if (!(var000D == 0x0002)) goto labelFunc040C_054B;
	var000E = "@Another day, another gold coin...@";
labelFunc040C_054B:
	if (!(var000D == 0x0003)) goto labelFunc040C_055B;
	var000E = "@I shall search the area here...@";
labelFunc040C_055B:
	if (!(var000D == 0x0004)) goto labelFunc040C_056B;
	var000E = "@I am too old for this...@";
labelFunc040C_056B:
	UI_item_say(0xFFF4, var000E);
	goto labelFunc040C_057E;
labelFunc040C_0578:
	Func092E(0xFFF4);
labelFunc040C_057E:
	return;
}


