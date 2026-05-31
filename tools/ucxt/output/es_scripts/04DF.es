#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04DF object#(0x4DF) ()
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

	if (!(event == 0x0000)) goto labelFunc04DF_0009;
	abort;
labelFunc04DF_0009:
	UI_show_npc_face(0xFF21, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF21));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x029A]) goto labelFunc04DF_0047;
	var0005 = var0002;
labelFunc04DF_0047:
	if (!gflags[0x029B]) goto labelFunc04DF_0053;
	var0005 = var0003;
labelFunc04DF_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04DF_0063;
	message("The woman looks up in surprise and says, \"I am not working at the moment and I ask thee to respect my privacy. If thou dost wish to speak with me, come to The Baths in the late evening hours.\"*");
	say();
	abort;
labelFunc04DF_0063:
	UI_add_answer(["name", "job", "bye"]);
	var0006 = UI_get_timer(0x0004);
	var0007 = UI_get_timer(0x0003);
	var0008 = UI_get_timer(0x0002);
	if (!((gflags[0x029D] && (var0006 < 0x0002)) || ((gflags[0x029E] && (var0007 < 0x0002)) || (gflags[0x029C] && (var0008 < 0x0002))))) goto labelFunc04DF_00BF;
	message("This attractive woman looks at you with surprise and says, \"Honey, thou just enjoyed thyself, didst thou not? Please come back when thou art rested.\"*");
	say();
	abort;
	goto labelFunc04DF_016B;
labelFunc04DF_00BF:
	if (!(!gflags[0x02AC])) goto labelFunc04DF_0161;
	message("You see a beautiful young woman with a tropical air.");
	say();
	if (!(!var0004)) goto labelFunc04DF_00D8;
	message("\"Hello, handsome!");
	say();
	goto labelFunc04DF_00EE;
labelFunc04DF_00D8:
	message("\"Hello, dear. Art thou sure thou dost not want to speak with Roberto?\"");
	say();
	if (!Func090A()) goto labelFunc04DF_00E9;
	message("\"All right, honey. Whatever heats thy blood...\"");
	say();
	goto labelFunc04DF_00EE;
labelFunc04DF_00E9:
	message("\"Then thou had best speak with him! He is probably more to thy liking.\"*");
	say();
	abort;
labelFunc04DF_00EE:
	message("\"What is thy name?\"");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04DF_0133;
	if (!(!var0004)) goto labelFunc04DF_011F;
	message("\"How art thou, ");
	message(var0002);
	message("? I am so happy to meet thee!\"");
	say();
	goto labelFunc04DF_0129;
labelFunc04DF_011F:
	message("\"Hello, ");
	message(var0002);
	message(".\"");
	say();
labelFunc04DF_0129:
	var0005 = var0002;
	gflags[0x029A] = true;
labelFunc04DF_0133:
	if (!(var0009 == var0003)) goto labelFunc04DF_015A;
	message("\"Oh please! Not another Avatar!\"");
	say();
	if (!(!var0004)) goto labelFunc04DF_0150;
	message("Martine takes a deep breath, then smiles.");
	say();
	message("\"Well, honey, it does not matter who thou art. We shalt have a good time anyway.\"");
	say();
labelFunc04DF_0150:
	gflags[0x029B] = true;
	var0005 = var0003;
labelFunc04DF_015A:
	gflags[0x02AC] = true;
	goto labelFunc04DF_016B;
labelFunc04DF_0161:
	message("\"Hello again, ");
	message(var0005);
	message(",\" Martine says.");
	say();
labelFunc04DF_016B:
	converse attend labelFunc04DF_027A;
	case "name" attend labelFunc04DF_0181:
	message("\"The name I use here is Martine. Thou dost understand...\" She winks at you.");
	say();
	UI_remove_answer("name");
labelFunc04DF_0181:
	case "job" attend labelFunc04DF_01AC:
	if (!(!var0004)) goto labelFunc04DF_0197;
	message("\"Honey, my job is to make thee happy.");
	say();
	goto labelFunc04DF_019B;
labelFunc04DF_0197:
	message("\"My dear, my job is to serve thee.");
	say();
labelFunc04DF_019B:
	message("\"'Tis important that thou art comfortable whilst visiting The Baths.\"");
	say();
	UI_add_answer(["The Baths", "comfortable"]);
labelFunc04DF_01AC:
	case "The Baths" attend labelFunc04DF_01CA:
	message("\"'Tis a fabulous place to work. I absolutely love it. I would not work anywhere else. I have more gold than I could possibly spend.\"");
	say();
	if (!(!var0004)) goto labelFunc04DF_01C3;
	message("Martine blows a kiss at you. \"I meet many kinds of interesting people, too!\"");
	say();
labelFunc04DF_01C3:
	UI_remove_answer("The Baths");
labelFunc04DF_01CA:
	case "comfortable" attend labelFunc04DF_01F0:
	message("\"Thou dost have many choices. We could take a swim in our spring pools. Or I could perform a massage on thee. Or we could simply talk.~~\"But if thou dost want to really get to know me better, we should visit the Community Room...\"");
	say();
	UI_remove_answer("comfortable");
	UI_add_answer(["swim", "massage", "talk", "Community Room"]);
labelFunc04DF_01F0:
	case "Community Room" attend labelFunc04DF_0233:
	message("\"Thou dost want to join me in the Community Room?\"");
	say();
	if (!Func090A()) goto labelFunc04DF_0228;
	message("Martine leads you into a private room.~~\"It really is not a Community Room at all. We shall be all alone!\"~~ A while later, after the woman has shown you more tricks than a crooked street mage, you emerge from the Community Room a much happier Avatar.");
	say();
	gflags[0x029C] = true;
	UI_set_timer(0x0002);
	var000A = UI_remove_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04DF_022C;
labelFunc04DF_0228:
	message("\"That's all right, honey.\"");
	say();
labelFunc04DF_022C:
	UI_remove_answer("Community Room");
labelFunc04DF_0233:
	case "swim" attend labelFunc04DF_0246:
	message("Martine helps you with your clothing and leads you into the warm spring water. It feels fabulous, and you would love to go to sleep; but you know you have a quest to finish. After a while, Martine helps you out of the water and you dress.");
	say();
	UI_remove_answer("swim");
labelFunc04DF_0246:
	case "massage" attend labelFunc04DF_0259:
	message("Martine helps you with your clothing and leads you to a comfortable table. You lie on your stomach and the woman expertly kneads and rubs your aching muscles, slowly sending you into a state of oblivion. After a while, Martine helps you up and you dress.");
	say();
	UI_remove_answer("massage");
labelFunc04DF_0259:
	case "talk" attend labelFunc04DF_026C:
	message("Martine smiles. \"That is just fine with me, honey. I would wager thou hast many stories to tell about adventuring, yes? Say! Hast thou been in the secret passages in the mountains? Didst thou know they are all connected? I know that there is a secret door that leads right into the back of this building!\" She whispers, \"I believe the entrance is through the House of Games.\"~~You and Martine speak of a number of other subjects until you realize you have spent too much time in the spa. There is a quest to finish!");
	say();
	UI_remove_answer("talk");
labelFunc04DF_026C:
	case "bye" attend labelFunc04DF_0277:
	goto labelFunc04DF_027A;
labelFunc04DF_0277:
	goto labelFunc04DF_016B;
labelFunc04DF_027A:
	endconv;
	message("\"I hope to see thee again soon, honey!\"");
	say();
	if (!(!var0004)) goto labelFunc04DF_028D;
	message("Martine blows you a kiss.*");
	say();
	goto labelFunc04DF_0291;
labelFunc04DF_028D:
	message("Martine waves goodbye.*");
	say();
labelFunc04DF_0291:
	return;
}


