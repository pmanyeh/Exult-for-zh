#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func0955 0x955 ();

void Func044A object#(0x44A) ()
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

	var0000 = Func0954();
	var0001 = UI_get_item_flag(0xFFB6, 0x001C);
	var0002 = "stranger";
	if (!gflags[0x0048]) goto labelFunc044A_0025;
	var0002 = "Knight";
labelFunc044A_0025:
	if (!(event == 0x0007)) goto labelFunc044A_00F8;
	if (!gflags[0x0083]) goto labelFunc044A_00E6;
	var0003 = UI_get_oppressor(0xFFB6);
	var0003 = (0x0000 - var0003);
	if (!(!var0003)) goto labelFunc044A_0054;
	var0003 = 0xFE9C;
labelFunc044A_0054:
	if (!((var0003 != 0xFE9C) && (!(var0003 in Func098D())))) goto labelFunc044A_00BF;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc044A_0078:
	for (var0002 in var0000 with var0004 to var0005) attend labelFunc044A_0092;
	if (!Func0932(var0002)) goto labelFunc044A_008F;
	goto labelFunc044A_0098;
labelFunc044A_008F:
	goto labelFunc044A_0078;
labelFunc044A_0092:
	var0002 = 0xFE9C;
labelFunc044A_0098:
	UI_set_opponent(0xFFB6, var0002);
	UI_set_opponent(var0003, var0002);
	Func0976(0xFFB6, 0x0003);
	Func0976(var0003, 0x0003);
	return;
labelFunc044A_00BF:
	if (!(!gflags[0x0007])) goto labelFunc044A_00DC;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0003), UI_get_npc_object(0xFFB6));
	return;
labelFunc044A_00DC:
	Func092E(var0003);
	return;
	goto labelFunc044A_00F8;
labelFunc044A_00E6:
	var0006 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc044A_00F8:
	if (!(event == 0x0000)) goto labelFunc044A_03B5;
	var0007 = UI_get_object_position(0xFFB6);
	if (!(var0007[0x0002] > 0x0A41)) goto labelFunc044A_026A;
	var0008 = UI_find_nearby(0xFFB6, 0xFFFF, 0x0014, 0x0008);
	var0008 = Func0988(UI_get_npc_object(0xFFB6), var0008);
	var0009 = [];
	enum();
labelFunc044A_0141:
	for (var000C in var0008 with var000A to var000B) attend labelFunc044A_0167;
	if (!(UI_get_schedule_type(var000C) == 0x001B)) goto labelFunc044A_0164;
	var0009 = (var0009 & var000C);
labelFunc044A_0164:
	goto labelFunc044A_0141;
labelFunc044A_0167:
	if (!(var0009 == [])) goto labelFunc044A_0172;
	abort;
labelFunc044A_0172:
	UI_clear_item_say(0xFFB6);
	var000D = var0009[UI_get_random(UI_get_array_size(var0009))];
	UI_clear_item_say(var000D);
	var000E = UI_get_random(0x0006);
	if (!(var000E == 0x0001)) goto labelFunc044A_01BB;
	UI_item_say(0xFFB6, "@Work harder!@");
	Func097F(var000D, "@Yes, Shazzana.@", 0x0003);
labelFunc044A_01BB:
	if (!(var000E == 0x0002)) goto labelFunc044A_01DB;
	UI_item_say(0xFFB6, "@Do not rest!@");
	Func097F(var000D, "@Sorry, madam.@", 0x0003);
labelFunc044A_01DB:
	if (!(var000E == 0x0003)) goto labelFunc044A_01FB;
	UI_item_say(var000D, "@Slave driver...@");
	Func097F(0xFFB6, "@I heard that!@", 0x0003);
labelFunc044A_01FB:
	if (!(var000E == 0x0004)) goto labelFunc044A_021B;
	UI_item_say(0xFFB6, "@With vigor!@");
	Func097F(var000D, "@Yes, Shazzana.@", 0x0003);
labelFunc044A_021B:
	if (!(var000E == 0x0005)) goto labelFunc044A_023B;
	UI_item_say(0xFFB6, "@Do not slow!@");
	Func097F(var000D, "@Yes, Shazzana.@", 0x0003);
labelFunc044A_023B:
	if (!(var000E == 0x0006)) goto labelFunc044A_0267;
	UI_item_say(0xFFB6, "@Very good!@");
	Func097F(var000D, "@Thanks.@", 0x0003);
	Func097F(0xFFB6, "@Keep working.@", 0x0006);
labelFunc044A_0267:
	goto labelFunc044A_03B5;
labelFunc044A_026A:
	var000F = [0xFFC1, 0xFF6A];
	if (!(!gflags[0x0092])) goto labelFunc044A_0287;
	var000F = (var000F & 0xFFB3);
labelFunc044A_0287:
	enum();
labelFunc044A_0288:
	for (var000C in var000F with var0010 to var0011) attend labelFunc044A_02AD;
	if (!(!UI_npc_nearby(var000C))) goto labelFunc044A_02AA;
	var000F = Func0988(var000C, var000F);
labelFunc044A_02AA:
	goto labelFunc044A_0288;
labelFunc044A_02AD:
	if (!(var000F == [])) goto labelFunc044A_02B8;
	abort;
labelFunc044A_02B8:
	UI_clear_item_say(0xFFB6);
	var000D = var000F[UI_get_random(UI_get_array_size(var000F))];
	UI_clear_item_say(var000D);
	var000E = UI_get_random(0x0006);
	if (!(var000E == 0x0001)) goto labelFunc044A_0301;
	UI_item_say(0xFFB6, "@Do it my way!@");
	Func097F(var000D, "@Don't dictate to me!@", 0x0003);
labelFunc044A_0301:
	if (!(var000E == 0x0002)) goto labelFunc044A_0315;
	UI_item_say(0xFFB6, "@We should not argue.@");
labelFunc044A_0315:
	if (!(var000E == 0x0003)) goto labelFunc044A_0335;
	UI_item_say(var000D, "@Exterminate the Goblins!@");
	Func097F(0xFFB6, "@I agree.@", 0x0003);
labelFunc044A_0335:
	if (!(var000E == 0x0004)) goto labelFunc044A_0375;
	if (!(!gflags[0x00B4])) goto labelFunc044A_035F;
	UI_item_say(0xFFB6, "@The crops sicken.@");
	Func097F(var000D, "@Is the world ending?@", 0x0003);
	goto labelFunc044A_0375;
labelFunc044A_035F:
	UI_item_say(0xFFB6, "@Money is missing.@");
	Func097F(var000D, "@Must find the thief.@", 0x0003);
labelFunc044A_0375:
	if (!(var000E == 0x0005)) goto labelFunc044A_0395;
	UI_item_say(var000D, "@Kill Marsten!@");
	Func097F(0xFFB6, "@But how...?", 0x0002);
labelFunc044A_0395:
	if (!(var000E == 0x0006)) goto labelFunc044A_03B5;
	UI_item_say(var000D, "@As I was saying...@");
	Func097F(0xFFB6, "@Be silent!@", 0x0003);
labelFunc044A_03B5:
	if (!(event == 0x0001)) goto labelFunc044A_03E3;
	UI_item_say(0xFE9C, "@Hail, Knight!@");
	0xFFB6->Func07D1();
	Func097F(0xFFB6, "@Yes?@", 0x0002);
	UI_set_schedule_type(0xFFB6, 0x0003);
labelFunc044A_03E3:
	if (!(event == 0x0009)) goto labelFunc044A_06CA;
	UI_run_schedule(0xFFB6);
	UI_clear_item_say(0xFFB6);
	UI_show_npc_face0(0xFFB6, 0x0000);
	if (!(!var0001)) goto labelFunc044A_0422;
	message("\"We have not had many strangers in our town lately. Let me introduce myself. I am Shazzana, a Knight of the Leopards.\"");
	say();
	UI_add_answer("Leopards");
	UI_set_item_flag(0xFFB6, 0x001C);
	goto labelFunc044A_0426;
labelFunc044A_0422:
	message("\"I am not one to waste time with words. What is thy business with me, Knight?\"");
	say();
labelFunc044A_0426:
	UI_add_answer(["duties"]);
	if (!gflags[0x00A8]) goto labelFunc044A_043D;
	UI_add_answer("mysterious sailor");
labelFunc044A_043D:
	if (!gflags[0x00CC]) goto labelFunc044A_044A;
	UI_add_answer("Pomdirgun");
labelFunc044A_044A:
	if (!gflags[0x0044]) goto labelFunc044A_0457;
	UI_add_answer("Simon");
labelFunc044A_0457:
	UI_add_answer("bye");
labelFunc044A_045E:
	converse attend labelFunc044A_06C9;
	case "Pomdirgun" attend labelFunc044A_0474:
	UI_remove_answer("Pomdirgun");
	message("\"Thou hast killed the Goblin King Pomdirgun. How wonderful!\"");
	say();
labelFunc044A_0474:
	case "Simon" attend labelFunc044A_0487:
	UI_remove_answer("Simon");
	message("\"I understand thou didst determine that the traitor in our town was Simon. I am certain thou didst deal properly with him.\"");
	say();
labelFunc044A_0487:
	case "mysterious sailor" attend labelFunc044A_049E:
	UI_remove_answer("mysterious sailor");
	message("\"The mysterious sailor thou dost speak of was a pirate by the name of Deadeye. We engaged in knightly combat on the List Field and in a more esoteric form of hand to hand combat elsewhere. He was most... diverting.\"");
	say();
	message("\"There was a very strange man who came into town not long ago. He said his name was Batlin. He wanted me to work for him.  But I felt I could not trust him, so I refused.\"");
	say();
labelFunc044A_049E:
	case "duties" attend labelFunc044A_04E1:
	UI_remove_answer("duties");
	if (!(!gflags[0x0048])) goto labelFunc044A_04CC;
	message("\"What business is this of thine? If thou dost wish to train with me, then meet me at the List Field at noon.\"");
	say();
	message("\"If not, then be on thy way.\"");
	say();
	Func097F(0xFFB6, "@At noon...@", 0x0000);
	abort;
	goto labelFunc044A_04E1;
labelFunc044A_04CC:
	message("\"I am one of the best fighters in this town. This is why all of the Knights desire to be trained by me.\"");
	say();
	message("\"I fight harder than any man or woman alive. I commonly win, but when I do not, the victor knows that they were in a terrific fight.\"");
	say();
	UI_add_answer(["best", "train"]);
labelFunc044A_04E1:
	case "best" attend labelFunc044A_052F:
	UI_remove_answer("best");
	message("\"There are few who can match me! The secret is to be in control. A Knight who doth lose his temper in battle is a defeated Knight.\"");
	say();
	message("\"The Bears say that strength is the key. Well, I can strike before those over-muscled brutes can react!\"");
	say();
	message("\"The Wolves pride themselves on cunning. Fools! They cannot think past my blinding sword strikes.\"");
	say();
	message("\"Since thou hast questioned my skill, I challenge thee to a match. Dost thou accept?\"");
	say();
	if (!Func0955()) goto labelFunc044A_0511;
	message("\"Meet me upon the List Field at noon, and I shall teach thee to appreciate my skill with a blade.\"");
	say();
	message("\"If thou dost not show, then I shall know thee for the coward thou art.\"");
	say();
	goto labelFunc044A_0522;
labelFunc044A_0511:
	message("\"Thou art not worthy of thy Knighthood...\"");
	say();
	Func097F(0xFFB6, "@Pah!@", 0x0000);
	abort;
labelFunc044A_0522:
	UI_add_answer(["Bears", "Wolves"]);
labelFunc044A_052F:
	case "train" attend labelFunc044A_05CF:
	UI_remove_answer("train");
	message("\"I teach the art of combat. My technique is based on swiftness and accuracy of movement. If thou wert to be at the List Field at noon, I could spar with thee.\"");
	say();
	if (!(UI_get_array_size(UI_get_party_list()) > 0x0001)) goto labelFunc044A_05CF;
	message("\"I am certain I could also teach thy friend a thing or two...\"");
	say();
	var0012 = UI_get_item_flag(0xFFFD, 0x0006);
	var0013 = UI_get_item_flag(0xFFFE, 0x0006);
	var0014 = UI_get_item_flag(0xFFFF, 0x0006);
	if (!var0012) goto labelFunc044A_0594;
	UI_show_npc_face1(0xFFFD, 0x0000);
	message("\"Art thou referring to me?\"");
	say();
	UI_remove_npc_face1();
labelFunc044A_0594:
	if (!var0014) goto labelFunc044A_05AC;
	UI_show_npc_face1(0xFFFF, 0x0000);
	message("\"I believe she was referring to thee!\"");
	say();
	UI_remove_npc_face1();
labelFunc044A_05AC:
	if (!var0013) goto labelFunc044A_05C4;
	UI_show_npc_face1(0xFFFE, 0x0000);
	message("\"I believe it was thee she was referring to, Avatar.\"");
	say();
	UI_remove_npc_face1();
labelFunc044A_05C4:
	UI_set_conversation_slot(0x0000);
	message("\"I can train anyone.\"");
	say();
labelFunc044A_05CF:
	case "Leopards" attend labelFunc044A_05E2:
	UI_remove_answer("Leopards");
	message("\"The Wolves and the Bears are full of dreams. We Leopards are realistic. We live one day at a time.\"");
	say();
labelFunc044A_05E2:
	case "Wolves" attend labelFunc044A_05F9:
	UI_remove_answer("Wolves");
	message("\"The Wolves have this grand scheme for uniting the Three Cities into a commonwealth, united by trade routes.\"");
	say();
	message("\"How can this be, when the Goblins threaten our very existence? The Wolves are simply not practical.\"");
	say();
labelFunc044A_05F9:
	case "Bears" attend labelFunc044A_061D:
	UI_remove_answer("Bears");
	message("\"The Bears believe in a strong defense, I will give them that! But we cannot hide behind Monitor's walls -- we must seek out our enemies.\"");
	say();
	message("\"Our highest priority should be to raid that hidden Goblin camp, and destroy that evil race!\"");
	say();
	UI_add_answer(["raid", "destroy"]);
labelFunc044A_061D:
	case "raid" attend labelFunc044A_0645:
	UI_remove_answer("raid");
	message("\"We must take back the Helm of Monitor, and avenge the death of Astrid!\"");
	say();
	message("\"War is the ultimate test for any Knight. This is how one doth test one's inner strength.\"");
	say();
	message("\"War is both holy and obscene, beautiful and yet hideous. I love it. I am very good at it.\"");
	say();
	UI_add_answer(["Astrid", "Helm of Monitor"]);
labelFunc044A_0645:
	case "Astrid" attend labelFunc044A_065C:
	UI_remove_answer("Astrid");
	message("\"Astrid was a magnificent Knight Champion! Even though she was a Bear and I a Leopard, we were boon companions.\"");
	say();
	message("\"It takes a rare individual to lead warriors in combat. Astrid united us against the Goblins. Now I fear the Bears and Wolves shall squabble again...\"");
	say();
labelFunc044A_065C:
	case "Helm of Monitor" attend labelFunc044A_0684:
	UI_remove_answer("Helm of Monitor");
	message("\"The Helm was originally taken from the old goblin king, Gurnordir, in the days of the Goblin Horde.\"");
	say();
	message("\"It is an ancient and powerful talisman, endowed with the Principle of Courage. Thus, it can only be worn by the bravest of warriors.\"");
	say();
	if (!gflags[0x002C]) goto labelFunc044A_0680;
	message("\"Now thou art the Champion Knight of Monitor. It was an honor I had wished for myself. But I must admit thou dost wear it well.\"");
	say();
	goto labelFunc044A_0684;
labelFunc044A_0680:
	message("\"Astrid was such a person. When I become the Knight Champion and the Helm is recovered, I shall wear it in Astrid's memory.\"");
	say();
labelFunc044A_0684:
	case "destroy" attend labelFunc044A_069B:
	UI_remove_answer("destroy");
	message("\"If the Goblins refuse to concede that this territory belongs to us, then what else shall we do? Sue for peace?!\"");
	say();
	message("\"We must wage war against them until they are all dead. This is the nature of the world. So be it.\"");
	say();
labelFunc044A_069B:
	case "bye" attend labelFunc044A_06C6:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "Good day to thee.", 0x0000);
	Func097F(0xFFB6, "And to thee.", 0x0002);
	goto labelFunc044A_06C9;
labelFunc044A_06C6:
	goto labelFunc044A_045E;
labelFunc044A_06C9:
	endconv;
labelFunc044A_06CA:
	return;
}


