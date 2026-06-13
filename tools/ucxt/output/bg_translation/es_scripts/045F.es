#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func089F 0x89F (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func045F object#(0x45F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc045F_025B;
	UI_show_npc_face(0xFFA1, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA1));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x00F6]) goto labelFunc045F_004A;
	UI_add_answer("cute");
labelFunc045F_004A:
	if (!(!gflags[0x011A])) goto labelFunc045F_005C;
	message("You see a stern but friendly-looking man, dressed in a military fashion. As you watch him, you get the feeling he is sizing you up as well.");
	say();
	gflags[0x011A] = true;
	goto labelFunc045F_0060;
labelFunc045F_005C:
	message("\"How may I be of service to thee?\" says Jakher.");
	say();
labelFunc045F_0060:
	converse attend labelFunc045F_0256;
	case "name" attend labelFunc045F_007D:
	message("\"I am Jakher, named after a great general from the ancient times of Sosaria. Welcome to Minoc.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Minoc");
labelFunc045F_007D:
	case "job" attend labelFunc045F_00AE:
	if (!gflags[0x011F]) goto labelFunc045F_009F;
	message("\"Along with Karenna, I am a trainer in the fighting arts. My specialty is strength and strategy. On the field of battle, if one does not use his head while using one's muscles, he is in danger of losing it.\"");
	say();
	UI_add_answer(["Karenna", "trainer"]);
	goto labelFunc045F_00AE;
labelFunc045F_009F:
	message("\"Perhaps that is something of which we should speak in a more appropriate time. Right now our concern should be to discover who could have been responsible for the two murders\tthat have just been discovered in William's sawmill.\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc045F_00AE:
	case "trainer" attend labelFunc045F_00F2:
	if (!(var0002 == 0x001B)) goto labelFunc045F_00E7;
	message("\"My price is 20 gold for each training session. Art thou still interested?\"");
	say();
	if (!Func090A()) goto labelFunc045F_00DC;
	Func089F([0x0002, 0x0000], 0x0014);
	goto labelFunc045F_00E4;
labelFunc045F_00DC:
	message("\"The true value of what I teach is beyond measure. My time is precious to me and therefore valuable. If thou didst pay me a paltry sum and I trained thee anyway, it would be an insult to us both.");
	say();
	message("\"'Tis a pity few truly comprehend the value of strategy and tactics. Thou mayest hack and slash with thy sword all that thou wilt, but it cannot do thy thinking for thee.\"");
	say();
labelFunc045F_00E4:
	goto labelFunc045F_00F2;
labelFunc045F_00E7:
	message("\"I am not in the habit of running training sessions at this particular time.\"");
	say();
	UI_remove_answer("trainer");
labelFunc045F_00F2:
	case "Minoc" attend labelFunc045F_0112:
	message("\"Ours is a city of commerce, although lately its primary trade seems to be gossip and envy. Before these murders, the latest local scandal had been the statue to be built of Owen, the shipwright.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["murders", "Owen"]);
labelFunc045F_0112:
	case "murders" attend labelFunc045F_0132:
	message("\"I suspect the killer -- or killers -- are from out of town, and probably long gone by now. There has not been a local murder for\tsome time before today. Our fair measure of prosperity has made the people here mostly tolerant of each other. That is why the gypsies settled here. The apparent lack of motive is puzzling.\"");
	say();
	UI_remove_answer("murders");
	UI_add_answer(["gone", "gypsies"]);
labelFunc045F_0132:
	case "gone" attend labelFunc045F_0145:
	message("\"I doubt that anyone in our community is the killer. If the stranger, or strangers, involved were to remain for long after the crime, they would soon be revealed. Therefore,the killers are no longer in town.\"");
	say();
	UI_remove_answer("gone");
labelFunc045F_0145:
	case "Karenna" attend labelFunc045F_01A5:
	message("\"A skillful and fierce battler, but a bit short-sighted when it comes to tactics, I'm afraid. Still, a woman as attractive as\tshe is diverting enough when encountered. But do not mention to her that I said that. It would just encourage her. It is uncomfortable enough sharing the same roof with her as it is.\"");
	say();
	var0003 = Func08F7(0xFFA2);
	if (!var0003) goto labelFunc045F_018D;
	UI_show_npc_face(0xFFA2, 0x0000);
	message("\"What art thou whispering about over there?\"*");
	say();
	UI_show_npc_face(0xFFA1, 0x0000);
	message("\"Nothing! Nothing at all!\" Jakher winks at you.*");
	say();
	UI_remove_npc_face(0xFFA2);
	UI_show_npc_face(0xFFA1, 0x0000);
labelFunc045F_018D:
	UI_remove_answer("Karenna");
	var0004 = true;
	UI_add_answer(["short-sighted", "roof"]);
labelFunc045F_01A5:
	case "short-sighted" attend labelFunc045F_01F4:
	message("\"She is the sort of person who labors under the belief that all problems can be solved in one of three ways. Hit them harder. Hit them faster. Or, hit them some more.\"");
	say();
	var0003 = Func08F7(0xFFA2);
	if (!var0003) goto labelFunc045F_01ED;
	UI_show_npc_face(0xFFA2, 0x0000);
	message("\"Art thou talking about me? I feel mine ears burning!\"*");
	say();
	UI_show_npc_face(0xFFA1, 0x0000);
	message("\"Thou art dreaming, Karenna. Why would I talk about thee?\" He giggles conspiratorially at you.*");
	say();
	UI_remove_npc_face(0xFFA2);
	UI_show_npc_face(0xFFA1, 0x0000);
labelFunc045F_01ED:
	UI_remove_answer("short-sighted");
labelFunc045F_01F4:
	case "roof" attend labelFunc045F_0207:
	message("\"There used to be two training halls in Minoc but one of them burned down after being struck by lightning. Now we are both forced to share this one.\"");
	say();
	UI_remove_answer("roof");
labelFunc045F_0207:
	case "cute" attend labelFunc045F_021A:
	message("\"Ah, so Karenna said I was cute, did she? Yes, I have known she has had her sights set on me for years.\"");
	say();
	UI_remove_answer("cute");
labelFunc045F_021A:
	case "Owen" attend labelFunc045F_0231:
	message("\"I have known Owen as long as anyone in this town. Several years ago, three ships that he built sank. The brother of Karl, one of our more colorful local residents, was killed. No investigation was ever made into the cause of the sinkings, but Owen once confided to me that he secretly blamed himself. He started drinking heavily, and eventually took up with The Fellowship.\"");
	say();
	UI_remove_answer("Owen");
	gflags[0x00F8] = true;
labelFunc045F_0231:
	case "gypsies" attend labelFunc045F_0248:
	message("\"Thou wouldst do better to ask Karenna. She is a good friend of the gypsies and would know more about them than I.\"");
	say();
	UI_remove_answer("gypsies");
	gflags[0x00F4] = true;
labelFunc045F_0248:
	case "bye" attend labelFunc045F_0253:
	goto labelFunc045F_0256;
labelFunc045F_0253:
	goto labelFunc045F_0060;
labelFunc045F_0256:
	endconv;
	message("\"It has been a pleasure speaking with thee.\"*");
	say();
labelFunc045F_025B:
	if (!(event == 0x0000)) goto labelFunc045F_0269;
	Func092E(0xFFA1);
labelFunc045F_0269:
	return;
}


