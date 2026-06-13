#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func0911 0x911 (var var0000);
extern void Func0878 0x878 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func0477 object#(0x477) ()
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

	if (!(event == 0x0001)) goto labelFunc0477_02E0;
	UI_show_npc_face(0xFF89, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF89));
	var0003 = UI_get_npc_object(0xFF89);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0171])) goto labelFunc0477_0059;
	message("Though he does not seem hostile, the man greets you in a fighting stance.");
	say();
	gflags[0x0171] = true;
	goto labelFunc0477_005D;
labelFunc0477_0059:
	message("\"What dost thou need?\" asks De Snel.");
	say();
labelFunc0477_005D:
	var0004 = UI_is_dead(0xFF84);
	if (!var0004) goto labelFunc0477_0074;
	UI_add_answer("Sprellic");
labelFunc0477_0074:
	var0005 = UI_is_dead(0xFF83);
	var0006 = UI_is_dead(0xFF82);
	var0007 = UI_is_dead(0xFF81);
	if (!(var0005 && (var0006 && var0007))) goto labelFunc0477_00A7;
	UI_add_answer("duellists");
labelFunc0477_00A7:
	if (!gflags[0x016A]) goto labelFunc0477_00B4;
	UI_add_answer("honor flag");
labelFunc0477_00B4:
	converse attend labelFunc0477_02BA;
	case "name" attend labelFunc0477_00CA:
	message("\"I am called Master De Snel.\"");
	say();
	UI_remove_answer("name");
labelFunc0477_00CA:
	case "job" attend labelFunc0477_00E6:
	message("\"I operate the famous fighting school here in Jhelom, the Library of Scars. I also train fighters personally from time to time, if they show potential.\"");
	say();
	UI_add_answer(["Jhelom", "Library of Scars", "potential"]);
labelFunc0477_00E6:
	case "potential" attend labelFunc0477_0100:
	message("\"I teach a fighting style of mine own invention. It enables one to gain complete mastery over his opponent. I could arrange a little demonstration for thee...\"");
	say();
	UI_add_answer("demonstration");
	UI_remove_answer("potential");
labelFunc0477_0100:
	case "Jhelom" attend labelFunc0477_0113:
	message("\"This city is devoted to the art of combat. Not mere slavish military discipline, but pure violent confrontation. It is a place after mine own heart.\"");
	say();
	UI_remove_answer("Jhelom");
labelFunc0477_0113:
	case "Library of Scars" attend labelFunc0477_0145:
	if (!(var0002 == 0x0007)) goto labelFunc0477_0139;
	message("\"An elite school of fighters with a long, proud history. Many great fighters have trained within its walls. The group even has its own special weaponry.\"");
	say();
	UI_add_answer(["fighters", "weaponry"]);
	goto labelFunc0477_013E;
labelFunc0477_0139:
	message("\"I do not feel like discussing business at the moment. Some other time perhaps.\"");
	say();
	abort;
labelFunc0477_013E:
	UI_remove_answer("Library of Scars");
labelFunc0477_0145:
	case "fighters" attend labelFunc0477_0158:
	message("\"I train my students to be fierce and ruthless fighters!\"");
	say();
	UI_remove_answer("fighters");
labelFunc0477_0158:
	case "weaponry" attend labelFunc0477_018D:
	message("He unsheathes his own sword and shows it to you. The sword has an elaborate serpentine pattern engraved in it. \"Thou mayest recognize a weapon of the Library of Scars by its engraving. It is the sign of the snake. Striking quick, silent, deadly, as are we!\"");
	say();
	UI_remove_answer("weaponry");
	var0008 = Func0931(0xFE9B, 0x0001, 0x027C, 0xFE99, 0xFE99);
	if (!var0008) goto labelFunc0477_018D;
	UI_add_answer("dagger");
labelFunc0477_018D:
	case "dagger" attend labelFunc0477_01FD:
	message("You produce the dagger found at the scene of the murders in Minoc. The serpentine engraving matches the markings of the Library of Scars exactly. De Snel looks at it and then back at you. He cannot conceal his surprise.~\"From where didst thou get that dagger?\"");
	say();
	UI_push_answers();
	var0009 = Func090B(["found it", "murder site"]);
	if (!(var0009 == "found it")) goto labelFunc0477_01BA;
	message("De Snel peers at you, obviously aware you are lying.");
	say();
labelFunc0477_01BA:
	if (!(var0009 == "murder site")) goto labelFunc0477_01C8;
	message("You look De Snel in the eye and tell him that you found it at the scene of the murders in Minoc. He gives you a curious look.");
	say();
labelFunc0477_01C8:
	message("\"That dagger was stolen from the Library of Scars weeks ago. I have no further knowledge of it.\"");
	say();
	message("\"By the way, hast thou had a demonstration of my training technique?\"");
	say();
	if (!Func090A()) goto labelFunc0477_01DD;
	message("\"Then perhaps thou shouldst have another.\"");
	say();
	goto labelFunc0477_01E1;
labelFunc0477_01DD:
	message("\"Then perhaps thou shouldst try one.\"");
	say();
labelFunc0477_01E1:
	UI_pop_answers();
	UI_remove_answer("dagger");
	UI_add_answer("demonstration");
	gflags[0x016C] = true;
	Func0911(0x0032);
labelFunc0477_01FD:
	case "demonstration" attend labelFunc0477_0248:
	if (!gflags[0x016C]) goto labelFunc0477_0227;
	message("\"Very well. Let us begin!\"*");
	say();
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
	goto labelFunc0477_0248;
labelFunc0477_0227:
	message("\"I must apologize for the discourtesy, but mine unequaled talents demand that I charge thee 40 gold for a training demonstration. Wilt thou accept?\"");
	say();
	if (!Func090A()) goto labelFunc0477_023D;
	Func0878(0x0004, 0x0028);
	goto labelFunc0477_0248;
labelFunc0477_023D:
	message("\"Very well, then!\" His scowl indicates his displeasure. \"If thou dost not like it, perhaps the Library of Scars is not the place for thee.\"");
	say();
	UI_remove_answer("demonstration");
labelFunc0477_0248:
	case "Sprellic" attend labelFunc0477_025B:
	message("\"As thou hast probably seen, a few of our members had a dispute with a local troublemaker over our honor flag. We of the Library of Scars have a fierce dedication to our institution. I do not know what exactly happened to this upstart, but I understand that he is now dead. I am not trying to suggest the Library of Scars had anything to do with it, of course. Only that it would be wise not to cross us.\"");
	say();
	UI_remove_answer("Sprellic");
labelFunc0477_025B:
	case "duellists" attend labelFunc0477_0299:
	message("\"I have heard that thou didst kill several of our members while champion of a duel defending the thief of our honor flag.\" His eyes narrow as he stares at you intensely. \"Outstanding! I am a man who values nothing higher than the application of skill. I salute thee on thy victory. Perhaps thou wouldst like to join our group?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc0477_0292;
	if (!gflags[0x016C]) goto labelFunc0477_0287;
	message("\"Thy companions and thee look fit enough for an informal practice session. Consider it a demonstration of my fighting style.\"");
	say();
	UI_add_answer("demonstration");
	goto labelFunc0477_0292;
labelFunc0477_0287:
	message("\"As my style of fighting is the superior style, I am only interested in training the best. Perhaps thy companions and thee qualify. We might find out, that is, if thou art courageous enough.\"");
	say();
	UI_add_answer("demonstration");
labelFunc0477_0292:
	UI_remove_answer("duellists");
labelFunc0477_0299:
	case "honor flag" attend labelFunc0477_02AC:
	message("\"Fortunately for Sprellic our honor flag was returned. If it had not been we would have had no choice but to regain our honor with his blood.\"");
	say();
	UI_remove_answer("honor flag");
labelFunc0477_02AC:
	case "bye" attend labelFunc0477_02B7:
	goto labelFunc0477_02BA;
labelFunc0477_02B7:
	goto labelFunc0477_00B4;
labelFunc0477_02BA:
	endconv;
	if (!gflags[0x016C]) goto labelFunc0477_02DC;
	message("\"Thou canst walk away so easy without a demonstration! Thou shalt have one anyway!\"*");
	say();
	UI_set_alignment(var0003, 0x0002);
	UI_set_schedule_type(var0003, 0x0000);
	goto labelFunc0477_02E0;
labelFunc0477_02DC:
	message("\"May thy stay in Jhelom be a memorable one,\" De Snel laughs as he turns and walks away.*");
	say();
labelFunc0477_02E0:
	if (!(event == 0x0000)) goto labelFunc0477_02EE;
	Func092E(0xFF89);
labelFunc0477_02EE:
	return;
}


