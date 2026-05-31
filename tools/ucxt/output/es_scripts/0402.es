#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func0402 object#(0x402) ()
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

	if (!(event == 0x0001)) goto labelFunc0402_0659;
	var0000 = Func0908();
	var0001 = "Avatar";
	var0002 = UI_get_party_list();
	var0003 = UI_is_pc_female();
	var0004 = UI_get_npc_object(0xFFFE);
	var0005 = false;
	var0006 = false;
	var0007 = false;
	if (!(!gflags[0x0015])) goto labelFunc0402_004C;
	UI_show_npc_face(0xFFFE, 0x0001);
	goto labelFunc0402_006D;
labelFunc0402_004C:
	if (!(var0004 in var0002)) goto labelFunc0402_0063;
	UI_show_npc_face(0xFFFE, 0x0000);
	goto labelFunc0402_006D;
labelFunc0402_0063:
	UI_show_npc_face(0xFFFE, 0x0001);
labelFunc0402_006D:
	if (!gflags[0x0046]) goto labelFunc0402_0079;
	var0008 = var0000;
labelFunc0402_0079:
	if (!gflags[0x0047]) goto labelFunc0402_0085;
	var0008 = var0001;
labelFunc0402_0085:
	var0009 = Func0909();
	if (!(!gflags[0x0015])) goto labelFunc0402_012B;
	message("You see a boy who appears to be a young teen. He is dirty and unkempt. He looks as if he has been crying, but he sits up straight and looks sharp when he sees you.");
	say();
	message("\"Who art thou and what dost thou want?\" You realize the boy has a sling in hand.");
	say();
	message("You face the boy and tell him who you are.");
	say();
	var000A = Func090B([var0000, var0001]);
	if (!(var000A == var0000)) goto labelFunc0402_00C8;
	message("\"So? What makes thee so special?\"*");
	say();
	var0008 = var0000;
	gflags[0x0046] = true;
	goto labelFunc0402_00D6;
labelFunc0402_00C8:
	message("\"The last time I heard -that- one I fell off a prehistoric creature from Eodon!\"");
	say();
	var0008 = var0001;
	gflags[0x0047] = true;
labelFunc0402_00D6:
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0402_0116;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Boy, this is the Avatar! ");
	say();
	if (!(!var0003)) goto labelFunc0402_0101;
	message("Upon my word he is! He has come to help thee!\"*");
	say();
	goto labelFunc0402_0105;
labelFunc0402_0101:
	message("Upon my word she is! She has come to help thee!\"*");
	say();
labelFunc0402_0105:
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0001);
labelFunc0402_0116:
	message("Then the boy narrows his eyes, studying you. He slowly lowers his weapon, ready to act in case it's a trap. You admire the boy's obvious experience in dealing with strangers.");
	say();
	message("You and Spark stare at each other. He is not sure what to do. Finally, he nods his head. \"All right. I believe thee. Thou dost look like paintings I have seen. I am sorry, ");
	message(var0009);
	message(".\"");
	say();
	gflags[0x0015] = true;
	goto labelFunc0402_0135;
labelFunc0402_012B:
	message("\"Yes, ");
	message(var0008);
	message("?\" Spark asks. \"What dost thou want?\"");
	say();
labelFunc0402_0135:
	UI_add_answer(["name", "job", "murder", "bye"]);
	if (!gflags[0x0048]) goto labelFunc0402_0155;
	UI_add_answer("key");
labelFunc0402_0155:
	if (!gflags[0x003E]) goto labelFunc0402_0162;
	UI_remove_answer("key");
labelFunc0402_0162:
	if (!(var0004 in var0002)) goto labelFunc0402_0173;
	UI_add_answer("leave");
labelFunc0402_0173:
	if (!(gflags[0x0049] && (!(var0004 in var0002)))) goto labelFunc0402_0189;
	UI_add_answer("join");
labelFunc0402_0189:
	if (!(gflags[0x003E] && (!gflags[0x0064]))) goto labelFunc0402_01A4;
	UI_add_answer(["gold", "medallion", "scroll"]);
labelFunc0402_01A4:
	converse attend labelFunc0402_0642;
	case "name" attend labelFunc0402_01BA:
	message("\"I have always been called Spark.\"");
	say();
	UI_remove_answer("name");
labelFunc0402_01BA:
	case "job" attend labelFunc0402_01D6:
	message("\"I have no job. I am only fourteen, so I am just learning how to best help Father in the smithy,\" he says, proudly. But then he suddenly realizes something which terrifies him. \"And now that Father is dead, I am an orphan!\"");
	say();
	UI_add_answer(["smithy", "Father", "orphan"]);
labelFunc0402_01D6:
	case "smithy" attend labelFunc0402_01E9:
	message("\"Father was the best blacksmith in Britannia. People were always coming from everywhere to get him to make this and that.\"");
	say();
	UI_remove_answer("smithy");
labelFunc0402_01E9:
	case "orphan" attend labelFunc0402_01FC:
	message("\"My mother died a long time ago. I can just barely remember her.\"");
	say();
	UI_remove_answer("orphan");
labelFunc0402_01FC:
	case "murder" attend labelFunc0402_0252:
	if (!(!gflags[0x0043])) goto labelFunc0402_0222;
	message("\"I cannot believe Father is dead. And poor Inamo, too. It is so strange. I -dreamed- it was happening. Well, in a way.~~\"Last night I was having a nightmare about Father. I dreamed that he screamed, and it woke me up. I looked around the house, but he was not in his bed. I was wide awake, so I went out to find him.\"");
	say();
	UI_add_answer(["Inamo", "nightmare", "find"]);
	goto labelFunc0402_024B;
labelFunc0402_0222:
	message("\"I am sure thou canst find the man who killed Father!\"");
	say();
	message("\"Dost thou want me to repeat everything I know about the murder?\"");
	say();
	if (!Func090A()) goto labelFunc0402_0247;
	message("\"What dost thou want to know about?\"");
	say();
	UI_add_answer(["my story", "key", "chest"]);
	goto labelFunc0402_024B;
labelFunc0402_0247:
	message("\"All right.\"");
	say();
labelFunc0402_024B:
	UI_remove_answer("murder");
labelFunc0402_0252:
	case "chest" attend labelFunc0402_0272:
	if (!gflags[0x003E]) goto labelFunc0402_0267;
	message("\"I am not sure if it's the same one, but I think I saw Father with a scroll just like the one in the chest one or two days ago. I know he was making something special for someone. I am fairly certain it was at his shop. As for the medallion, he usually wore it. I do not know why it was in the chest. And the gold-- I have never seen so much gold in my life. I cannot imagine why father had it.\"");
	say();
	goto labelFunc0402_026B;
labelFunc0402_0267:
	message("\"Thou shouldst try opening the chest.\"");
	say();
labelFunc0402_026B:
	UI_remove_answer("chest");
labelFunc0402_0272:
	case "my story" attend labelFunc0402_0292:
	message("\"It is so strange. I -dreamed- it was happening. Well, in a way.~~\"Last night I was having a nightmare about Father. I dreamed that he screamed, and it woke me up. I looked around the house, but he was not in his bed. I was wide awake, so I went out to find him.\"");
	say();
	UI_remove_answer("my story");
	UI_add_answer(["find", "nightmare"]);
labelFunc0402_0292:
	case "nightmare" attend labelFunc0402_02A5:
	message("\"I know it sounds witless, but... I dreamed that a big red-faced man was watching down on everything and... He looked down... And he noticed Father... That is all I remember.\"");
	say();
	UI_remove_answer("nightmare");
labelFunc0402_02A5:
	case "find" attend labelFunc0402_02BF:
	message("\"No, I did not find him. At least, not right away. But I did see something.\"");
	say();
	UI_add_answer("something");
	UI_remove_answer("find");
labelFunc0402_02BF:
	case "something" attend labelFunc0402_02DF:
	message("\"I was in front of the stables. I saw a man and a wingless gargoyle running from behind the building. They ran toward the dock. Then I went inside and found... Father.\"~~Spark's voice falters, and he begins to sob a little.");
	say();
	UI_add_answer(["man", "gargoyle"]);
	UI_remove_answer("something");
labelFunc0402_02DF:
	case "man" attend labelFunc0402_02F9:
	message("\"All I saw of him was that the man had a hook for a right hand.\"");
	say();
	UI_add_answer("hook");
	UI_remove_answer("man");
labelFunc0402_02F9:
	case "gargoyle" attend labelFunc0402_030C:
	message("\"I cannot tell one gargoyle from another. I could not identify him, except that he had no wings.\"");
	say();
	UI_remove_answer("gargoyle");
labelFunc0402_030C:
	case "hook" attend labelFunc0402_03DD:
	if (!(!gflags[0x0043])) goto labelFunc0402_03D2;
	if (!(!(var0004 in var0002))) goto labelFunc0402_03CB;
	message("\"Wilt thou go find the Man with the Hook? Let me help thee!\" the boy pleads. His tears cease, and his face takes on a determined, forceful look.");
	say();
	gflags[0x0043] = true;
	message("\"Take me with thee! Please! I must avenge Father's death! If thou dost not take me with thee, I will follow thee anyway!\"");
	say();
	message("The boy is all excited now. \"I am an expert with a slingshot! I can strike sewer rats with almost every shot! And I am small -- I do not eat much! Please take me! Please ask me to join thee!\"*");
	say();
	var000B = Func08F7(0xFFFF);
	if (!var000B) goto labelFunc0402_0378;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("Iolo whispers to you. \"I do not know about taking a child on the road with us, ");
	message(var0009);
	message(".\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFFE, 0x0001);
	message("Suddenly, Spark lets his sling fly. His target, a small fly hovering above Iolo's head, is smacked out of the air. You laugh as Iolo\tyelps, jumps away, curses and runs his fingers through his hair. ");
	say();
	UI_play_sound_effect(0x0001);
	goto labelFunc0402_037C;
labelFunc0402_0378:
	message("Suddenly, Spark lets his sling fly. His target, a small fly hovering above your head, is smacked out of the air. ");
	say();
labelFunc0402_037C:
	message("\"I told thee I am good! May I join?\"");
	say();
	var000C = Func090A();
	if (!var000C) goto labelFunc0402_03B2;
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Hooray!\" the boy leaps with delight.");
	say();
	UI_add_answer("leave");
	UI_add_to_party(0xFFFE);
	goto labelFunc0402_03C4;
labelFunc0402_03B2:
	message("\"Fine.\" The boy looks angry. \"But I'll follow thee anyway.\"");
	say();
	UI_add_to_party(0xFFFE);
	UI_add_answer("leave");
labelFunc0402_03C4:
	gflags[0x0049] = true;
	goto labelFunc0402_03CF;
labelFunc0402_03CB:
	message("\"I know thou wilt find that man.\"");
	say();
labelFunc0402_03CF:
	goto labelFunc0402_03D6;
labelFunc0402_03D2:
	message("\"I know thou wilt find that man.\"");
	say();
labelFunc0402_03D6:
	UI_remove_answer("hook");
labelFunc0402_03DD:
	case "join" attend labelFunc0402_0443:
	message("\"'Tis about time thou didst ask again!\"");
	say();
	var000D = 0x0000;
	enum();
labelFunc0402_03F0:
	for (var0010 in var0002 with var000E to var000F) attend labelFunc0402_0408;
	var000D = (var000D + 0x0001);
	goto labelFunc0402_03F0;
labelFunc0402_0408:
	if (!(var000D < 0x0008)) goto labelFunc0402_0431;
	UI_add_to_party(0xFFFE);
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Hooray!\"");
	say();
	goto labelFunc0402_0435;
labelFunc0402_0431:
	message("\"Well, on second thought, it looks like too big of a crowd. I do not like crowds.\"");
	say();
labelFunc0402_0435:
	UI_remove_answer("join");
	UI_add_answer("leave");
labelFunc0402_0443:
	case "leave" attend labelFunc0402_04CB:
	message("\"Don't make me go!\" Spark cries. \"Dost thou really want me to go?\" He looks at you with puppy-dog eyes.");
	say();
	var0011 = Func090A();
	if (!var0011) goto labelFunc0402_04C7;
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFE, 0x0001);
	message("\"Well, should I just wait here or dost thou want me to go home to Trinsic?\"");
	say();
	UI_clear_answers();
	var000A = Func090B(["wait here", "go home"]);
	if (!(var000A == "wait here")) goto labelFunc0402_04AA;
	message("\"All right. I shall wait here until thou dost return and ask me to rejoin.\"*");
	say();
	UI_remove_from_party(0xFFFE);
	UI_set_schedule_type(UI_get_npc_object(0xFFFE), 0x000F);
	abort;
	goto labelFunc0402_04C4;
labelFunc0402_04AA:
	message("Spark bows his head and murmurs, \"Goodbye, then.\"*");
	say();
	UI_remove_from_party(0xFFFE);
	UI_set_schedule_type(UI_get_npc_object(0xFFFE), 0x000B);
	abort;
labelFunc0402_04C4:
	goto labelFunc0402_04CB;
labelFunc0402_04C7:
	message("\"Thou wilt not be sorry!\"");
	say();
labelFunc0402_04CB:
	case "Father" attend labelFunc0402_04E5:
	message("\"Father was the blacksmith. I cannot believe that he has been murdered! He had no enemies that I know of. Unless it was The Fellowship.\"");
	say();
	UI_add_answer("Fellowship");
	UI_remove_answer("Father");
labelFunc0402_04E5:
	case "Fellowship" attend labelFunc0402_0503:
	message("\"Well, at first they harassed Father and me when they came around asking us to join. I suppose they do good things. Many people like them. Father eventually joined the group after he went to Britain and took one of their tests.\"");
	say();
	UI_add_answer("tests");
	gflags[0x003F] = true;
	UI_remove_answer("Fellowship");
labelFunc0402_0503:
	case "tests" attend labelFunc0402_0523:
	message("\"I do not know anything about them. I never took one. Maybe thou shouldst ask the man at the Fellowship Branch. Klog.\"");
	say();
	UI_add_answer(["branch", "Klog"]);
	UI_remove_answer("tests");
labelFunc0402_0523:
	case "branch" attend labelFunc0402_0536:
	message("\"The Fellowship has branches all over Britannia.\"");
	say();
	UI_remove_answer("branch");
labelFunc0402_0536:
	case "Klog" attend labelFunc0402_0556:
	message("\"He is the head of the Fellowship Branch here in Trinsic. He and Father got into an argument a week ago when Klog and two of his friends came over to talk with Father.\"");
	say();
	UI_add_answer(["argument", "friends"]);
	UI_remove_answer("Klog");
labelFunc0402_0556:
	case "argument" attend labelFunc0402_0569:
	message("\"I don't know what it was about. Perhaps thou shouldst ask Klog.\"");
	say();
	UI_remove_answer("argument");
labelFunc0402_0569:
	case "friends" attend labelFunc0402_057C:
	message("\"I do not remember what they look like. I did not recognize them.\tThey were most likely some other members of The Fellowship.\"");
	say();
	UI_remove_answer("friends");
labelFunc0402_057C:
	case "key" attend labelFunc0402_05BE:
	if (!gflags[0x003E]) goto labelFunc0402_0591;
	message("\"That key opened my Father's chest, did it not?\"");
	say();
	goto labelFunc0402_05B7;
labelFunc0402_0591:
	var0012 = Func0931(0xFE9B, 0x0001, 0x0281, 0x00FD, 0xFE99);
	if (!var0012) goto labelFunc0402_05B3;
	message("\"That looks like the key to Father's chest. I wondered where it was!\"");
	say();
	goto labelFunc0402_05B7;
labelFunc0402_05B3:
	message("\"What key? Dost thou have the key to Father's chest? Where is it?\"");
	say();
labelFunc0402_05B7:
	UI_remove_answer("key");
labelFunc0402_05BE:
	case "gold" attend labelFunc0402_05D9:
	message("The boy's eyes widen. \"I had no idea that Father had that much money hidden away!\"");
	say();
	message("\"I suppose I could give it to thee if thou art going to look for those who killed my Father!\"");
	say();
	UI_remove_answer("gold");
	var0006 = true;
labelFunc0402_05D9:
	case "medallion" attend labelFunc0402_05F0:
	message("\"Father was a member of The Fellowship. I don't know why the medallion was in the chest -- he usually wore it.\"");
	say();
	UI_remove_answer("medallion");
	var0007 = true;
labelFunc0402_05F0:
	case "scroll" attend labelFunc0402_060E:
	message("\"I am not sure if it's the same one, but I think I saw Father with a scroll just like that one or two days ago. I know he was making something special for someone. I am fairly certain it was at his shop.\"");
	say();
	UI_add_answer("shop");
	UI_remove_answer("scroll");
	var0005 = true;
labelFunc0402_060E:
	case "shop" attend labelFunc0402_0621:
	message("\"It's in the southwest corner of town.\"");
	say();
	UI_remove_answer("shop");
labelFunc0402_0621:
	case "Inamo" attend labelFunc0402_0634:
	message("\"He was a very nice gargoyle. He helped Father a lot and did tasks in the stables. I cannot think why anyone would want to kill him!\"");
	say();
	UI_remove_answer("Inamo");
labelFunc0402_0634:
	case "bye" attend labelFunc0402_063F:
	goto labelFunc0402_0642;
labelFunc0402_063F:
	goto labelFunc0402_01A4;
labelFunc0402_0642:
	endconv;
	message("\"All right, I will speak with thee later.\"*");
	say();
	if (!(var0005 && (var0006 && var0007))) goto labelFunc0402_0659;
	gflags[0x0064] = true;
labelFunc0402_0659:
	if (!(event == 0x0000)) goto labelFunc0402_0662;
	abort;
labelFunc0402_0662:
	return;
}


