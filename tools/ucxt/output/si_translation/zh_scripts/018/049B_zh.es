#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern var Func0994 0x994 ();
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func049B object#(0x49B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = Func0942(0xFF64);
	if (!(event == 0x0002)) goto labelFunc049B_00AC;
	if (!((Func0994() != 0x0007) || (UI_get_item_flag(0xFF65, 0x0004) || (UI_get_item_flag(0xFF64, 0x0004) || (!gflags[0x02BE]))))) goto labelFunc049B_0043;
	abort;
labelFunc049B_0043:
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049B], (0x0014 + UI_get_random(0x0032)));
	if (!(UI_npc_nearby(0xFF62) || (UI_npc_nearby(0xFF64) || (UI_npc_nearby(0xFF63) || UI_npc_nearby(0xFF61))))) goto labelFunc049B_008B;
	abort;
labelFunc049B_008B:
	var0003 = UI_approach_avatar(0xFF65, 0x0078, 0x0028);
	if (!var0003) goto labelFunc049B_00AB;
	UI_set_schedule_type(0xFF65, 0x0003);
labelFunc049B_00AB:
	abort;
labelFunc049B_00AC:
	if (!(event == 0x0001)) goto labelFunc049B_00DA;
	UI_item_say(0xFE9C, "@Hello.@");
	0xFF65->Func07D1();
	Func097F(0xFF65, "@Speaking to me?@", 0x0002);
	UI_set_schedule_type(0xFF65, 0x0003);
labelFunc049B_00DA:
	if (!(event == 0x0009)) goto labelFunc049B_062A;
	UI_run_schedule(0xFF65);
	UI_show_npc_face0(0xFF65, 0x0000);
	UI_set_item_flag(0xFF65, 0x001C);
	UI_clear_item_say(0xFF65);
	if (!var0002) goto labelFunc049B_017F;
	message("\"My name is Beryl. I need thine help, but I cannot speak now...\"");
	say();
	UI_show_npc_face1(0xFF64, 0x0000);
	message("\"What art thou saying to that stranger, Beryl?\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	if (!gflags[0x02BD]) goto labelFunc049B_0144;
	message("\"I shall meet thee as before. Now, go...\"");
	say();
	Func097F(0xFF65, "@Nothing, Draygan...@", 0x0000);
	gflags[0x02BE] = true;
	goto labelFunc049B_0154;
labelFunc049B_0144:
	message("\"Nothing, Lord Draygan.\"");
	say();
	Func097F(0xFF65, "@Nothing.@", 0x0000);
labelFunc049B_0154:
	UI_set_schedule_type(0xFF64, 0x0009);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049B], 0x0032);
	abort;
	goto labelFunc049B_0411;
labelFunc049B_017F:
	if (!UI_get_item_flag(0xFF64, 0x0004)) goto labelFunc049B_02A8;
	if (!UI_get_item_flag(0xFF65, 0x001E)) goto labelFunc049B_01B3;
	message("\"I am content now, ");
	message(var0001);
	message(". There is such a peacefulness in my life, now that Morghrim doth care for me.\"");
	say();
	Func097F(0xFF65, "@Good fortune!@", 0x0000);
	abort;
	goto labelFunc049B_02A5;
labelFunc049B_01B3:
	UI_set_item_flag(0xFF65, 0x001E);
	message("\"I am so glad that the tyrant is dead! Thanks to thee, ");
	message(var0001);
	message(".\"");
	say();
	message("\"Do not fear for me -- I can care for myself, now that Draygan cannot use his magical secrets to control me.\"");
	say();
	if (!UI_npc_nearby(0xFF61)) goto labelFunc049B_0249;
	UI_show_npc_face1(0xFF61, 0x0000);
	message("\"Thou canst come and stay with me, woman, until thou art ready to return to thy kind. My camp is clean, and the forest animals enjoy thy company.\"");
	say();
	UI_remove_npc_face1();
	UI_set_conversation_slot(0x0000);
	message("\"I shall accept thy kind offer, Forest Master.\"");
	say();
	Func097F(0xFF61, "@Stay with me.@", 0x0000);
	Func097F(0xFF65, "@I shall.@", 0x0005);
	UI_set_new_schedules(0xFF65, [0x0000, 0x0002, 0x0006], [0x000E, 0x0007, 0x000C], [0x02B1, 0x0676, 0x02B9, 0x0686, 0x02C1, 0x06AD]);
	UI_run_schedule(0xFF65);
	abort;
	goto labelFunc049B_02A5;
labelFunc049B_0249:
	message("\"I shall go to the Forest Master and beg for a place by his side. He is old, and doth need a help from time to time.\"");
	say();
	message("\"Thank thee Avatar for thine help. Thou hast given me back my life.\"");
	say();
	Func097F(0xFF65, "@Fear not for me!@", 0x0000);
	Func097F(0xFE9C, "@Live long and prosper!@", 0x0000);
	UI_set_new_schedules(0xFF65, [0x0000, 0x0002, 0x0006], [0x000E, 0x0007, 0x000C], [0x02B1, 0x0676, 0x02B9, 0x0686, 0x02C1, 0x06AD]);
	UI_run_schedule(0xFF65);
	abort;
labelFunc049B_02A5:
	goto labelFunc049B_0411;
labelFunc049B_02A8:
	if (!(gflags[0x02BF] && (!UI_get_item_flag(0xFF64, 0x0004)))) goto labelFunc049B_02CF;
	message("\"Why dost thou wait? Use the arrow! Use it to strike down the tyrant Draygan!\"");
	say();
	message("\"Then we shall find the secret of his power, and he shall not stop me from obtaining my freedom.\"");
	say();
	Func097F(0xFF65, "@Use the arrow!@", 0x0000);
	abort;
labelFunc049B_02CF:
	if (!(gflags[0x02C0] && (!UI_get_item_flag(0xFF64, 0x0004)))) goto labelFunc049B_0341;
	message("\"Tell me -- hast thou prepared the arrow? To defeat the tyrant Draygan?\"");
	say();
	if (!Func0955()) goto labelFunc049B_0330;
	if (!Func097D(0xFE9B, 0x0001, 0x0238, 0xFE99, 0xFE99)) goto labelFunc049B_031C;
	gflags[0x02BF] = true;
	message("\"Then use it! Use it to numb the tyrant Draygan!\"");
	say();
	message("\"Then we shall find the secret of his power, and prevent him from stopping mine escape.\"");
	say();
	Func097F(0xFF65, "@Use the arrow!@", 0x0000);
	abort;
	goto labelFunc049B_032D;
labelFunc049B_031C:
	message("\"Do not thou give me false hopes, stranger! I see no arrow...\"");
	say();
	Func097F(0xFF65, "@Bring the arrow...@", 0x0000);
	abort;
labelFunc049B_032D:
	goto labelFunc049B_0341;
labelFunc049B_0330:
	message("\"Thou must treat an arrow with the juices from the King's Savior plant.\"");
	say();
	Func097F(0xFF65, "@Prepare the arrow!@", 0x0000);
	abort;
labelFunc049B_0341:
	if (!gflags[0x02B9]) goto labelFunc049B_03F4;
	message("\"Tell me -- hast thou obtained the plant which I told thee of? The King's Savior?\"");
	say();
	if (!Func0955()) goto labelFunc049B_03DD;
	if (!(Func097D(0xFE9B, 0x0001, 0x01D3, 0xFE99, 0x0000) || Func097D(0xFE9B, 0x0001, 0x01D3, 0xFE99, 0x0001))) goto labelFunc049B_0391;
	gflags[0x02C0] = true;
	message("\"Very good. Now, thou must treat an arrow with the juices from the King's Savior plant. I have hidden some arrows away in my quarters. If thou dost need one, get one there.\"");
	say();
	Func097F(0xFF65, "@Prepare the arrow!@", 0x0000);
	abort;
	goto labelFunc049B_03DA;
labelFunc049B_0391:
	if (!Func097D(0xFE9B, 0x0001, 0x0238, 0xFE99, 0xFE99)) goto labelFunc049B_03C2;
	gflags[0x02BF] = true;
	message("\"And thou hast enchanted the arrow? Then use it -- use it to numb the tyrant Draygan!\"");
	say();
	message("\"Then we shall find the secret of his power, and prevent him from stopping mine escape!\"");
	say();
	Func097F(0xFF65, "@Use the arrow!@", 0x0000);
	abort;
	goto labelFunc049B_03DA;
labelFunc049B_03C2:
	message("\"Do not give me false hopes, stranger! I see no King's Savior.\"");
	say();
	message("\"I fear Draygan more each day...\"");
	say();
	UI_add_answer(["afraid", "Draygan", "King's Savior"]);
labelFunc049B_03DA:
	goto labelFunc049B_03F1;
labelFunc049B_03DD:
	message("\"Then I despair! For without this herb, Draygan cannot be stopped. I am so afraid...\"");
	say();
	UI_add_answer(["afraid", "Draygan", "King's Savior"]);
labelFunc049B_03F1:
	goto labelFunc049B_0411;
labelFunc049B_03F4:
	gflags[0x02BD] = true;
	gflags[0x02BE] = false;
	message("\"My name is Beryl. I am so glad that thou hast met me privately. We cannot speak for long, lest Draygan or his minions find us.\"");
	say();
	message("\"I live in fear of Draygan and his terrible power.\"");
	say();
	UI_add_answer(["afraid", "Draygan"]);
labelFunc049B_0411:
	UI_add_answer(["bye"]);
labelFunc049B_041B:
	converse attend labelFunc049B_0629;
	case "afraid" attend labelFunc049B_044C:
	UI_remove_answer("afraid");
	message("\"Of the two-score settlers who came to this place led by Draygan, only three of us survive! And the other two work for him!\"");
	say();
	message("\"Draygan burned the ship and left the others to die! I know he played a part in the death of mine husband, as well.\"");
	say();
	UI_push_answers();
	UI_add_answer(["other two", "burned ship", "dead husband", "change subject"]);
labelFunc049B_044C:
	case "other two" attend labelFunc049B_045F:
	UI_remove_answer("other two");
	message("\"Beware them! They follow Draygan's orders\tunquestioningly! They would even kill at his word!\"");
	say();
labelFunc049B_045F:
	case "burned ship" attend labelFunc049B_0483:
	UI_remove_answer("burned ship");
	message("\"One of the settlers, Falcon, wanted to leave the settlement. Many others chose to go as well. I did not believe it when Draygan allowed Falcon's group to leave so easily.\"");
	say();
	message("\"I discovered why. Draygan had the ship burned, leaving them all to be eaten by the wolves!\"");
	say();
	UI_add_answer(["settlement", "wolves"]);
labelFunc049B_0483:
	case "dead husband" attend labelFunc049B_04A1:
	UI_remove_answer("dead husband");
	message("\"Mine husband, Carvell, died when Draygan took a group of men in search of gold. Only Draygan returned.\"");
	say();
	message("\"He told a story of how they were attacked by the wolves, but he lied. I did not find the truth until a short while ago, when Draygan drunkenly boasted of killing Carvell and the others. That was when I ran away.\"");
	say();
	UI_add_answer("ran away");
labelFunc049B_04A1:
	case "ran away" attend labelFunc049B_04B8:
	UI_remove_answer("ran away");
	message("\"Yes, I could not stay here with the man who murdered mine husband! I went deep into the woods... but Draygan's lackeys found me and brought me back.\"");
	say();
	message("\"Now they watch me closely -- but not closely enough!\"");
	say();
labelFunc049B_04B8:
	case "settlement" attend labelFunc049B_04D2:
	UI_remove_answer("settlement");
	message("\"A year ago, a group of us left by ship and came to the Northlands. We were in search of the gold and precious gems that are said to fill this land. Our original camp was to the south, but we had no luck there and we made our way to this place. Once here, Draygan seized control! We had to do his bidding or suffer the consequences.\"");
	say();
	UI_add_answer("consequences");
labelFunc049B_04D2:
	case "consequences" attend labelFunc049B_04E5:
	UI_remove_answer("consequences");
	message("\"There were beatings, and other things... I would rather not talk about that.\"");
	say();
labelFunc049B_04E5:
	case "wolves" attend labelFunc049B_04F8:
	UI_remove_answer("wolves");
	message("\"Surely thou hast heard them! With every cry thou canst hear how they hunger for our flesh!\"");
	say();
labelFunc049B_04F8:
	case "Draygan" attend labelFunc049B_051F:
	UI_remove_answer("Draygan");
	message("\"I feared that no one could save me from Draygan, for he is invincible!\"");
	say();
	UI_push_answers();
	UI_add_answer(["save", "invincible", "change subject"]);
labelFunc049B_051F:
	case "change subject" attend labelFunc049B_052F:
	message("\"And what shall we speak of?\"");
	say();
	UI_pop_answers();
labelFunc049B_052F:
	case "save" attend labelFunc049B_0542:
	UI_remove_answer("save");
	message("\"But that is before thou didst come here! Thou must save me from this devil Draygan!\"");
	say();
labelFunc049B_0542:
	case "invincible" attend labelFunc049B_055C:
	UI_remove_answer("invincible");
	message("\"He cannot be harmed by blade or knife nor by any magic that I have seen. Whatever he and his expedition found, it hath given him unimaginable power.\"");
	say();
	UI_add_answer("cannot be harmed");
labelFunc049B_055C:
	case "cannot be harmed" attend labelFunc049B_0587:
	UI_remove_answer("cannot be harmed");
	message("\"I have been thinking about this for some time. Perhaps Draygan can be defeated by something that doth not actually bring harm to him. Thou couldst treat an arrow with the plant that is called King's Savior!\"");
	say();
	UI_add_answer(["arrow"]);
	if (!(!gflags[0x02B9])) goto labelFunc049B_0587;
	UI_add_answer("King's Savior");
labelFunc049B_0587:
	case "arrow" attend labelFunc049B_059E:
	UI_remove_answer("arrow");
	message("\"An arrow thusly treated would put anyone stricken by it in a deep sleep. Dost thou not see? The arrow would not harm him, but it would allow the herbal medicine to take effect!\"");
	say();
	message("\"This would give us the chance to find and steal the source of Draygan's power. Unless we do this, I am doomed to be his slave.\"");
	say();
labelFunc049B_059E:
	case "King's Savior" attend labelFunc049B_05CD:
	UI_remove_answer("King's Savior");
	message("\"According to legend, the plant is found in the deepest and most dangerous part of the forest.\"");
	say();
	message("\"Only one man can help thee. The Forest Master could guide thee to King's Savior -- but beware him! He possesses strange powers.\"");
	say();
	gflags[0x02B9] = true;
	UI_push_answers();
	UI_add_answer(["Forest Master", "strange powers", "change subject"]);
labelFunc049B_05CD:
	case "Forest Master" attend labelFunc049B_05E8:
	UI_remove_answer("Forest Master");
	message("\"His name is Morghrim. His face is horribly scarred, yet I do not fear him the way I fear Draygan.\"");
	say();
	message("\"Morghrim is a strange man, foreign in some way I cannot explain. But he is the only one who hath treated me kindly since Carvell was murdered. I stayed with him a short time after I ran away.\"");
	say();
	message("\"His dwelling place lies far southwest of here, in a grove of silverleaf trees. Perhaps he shall deign to aid thee.\"");
	say();
labelFunc049B_05E8:
	case "strange powers" attend labelFunc049B_05FB:
	UI_remove_answer("strange powers");
	message("\"I cannot say what they were, for he was careful to never let me see any such display. But thou wilt feel his power if thou dost meet him. Take care that thou dost not anger him.\"");
	say();
labelFunc049B_05FB:
	case "bye" attend labelFunc049B_0626:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Go now. Be safe.@", 0x0000);
	Func097F(0xFF65, "@Do not forget me!@", 0x0003);
	goto labelFunc049B_0629;
labelFunc049B_0626:
	goto labelFunc049B_041B;
labelFunc049B_0629:
	endconv;
labelFunc049B_062A:
	return;
}


