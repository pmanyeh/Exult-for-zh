#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04DD object#(0x4DD) ()
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

	if (!(event == 0x0000)) goto labelFunc04DD_0009;
	abort;
labelFunc04DD_0009:
	UI_show_npc_face(0xFF23, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF23));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x029F]) goto labelFunc04DD_0047;
	var0005 = var0002;
labelFunc04DD_0047:
	if (!gflags[0x02A0]) goto labelFunc04DD_0053;
	var0005 = var0003;
labelFunc04DD_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04DD_0063;
	message("The woman looks up in surprise and says, \"I am not working at the moment and I ask thee to respect my privacy. If thou dost wish to speak with me, come to The Baths in the late evening hours.\"*");
	say();
	abort;
labelFunc04DD_0063:
	UI_add_answer(["name", "job", "bye"]);
	var0006 = UI_get_timer(0x0002);
	var0007 = UI_get_timer(0x0003);
	var0008 = UI_get_timer(0x0004);
	if (!((gflags[0x029C] && (var0006 < 0x0002)) || ((gflags[0x029E] && (var0007 < 0x0002)) || (gflags[0x029D] && (var0008 < 0x0002))))) goto labelFunc04DD_00BF;
	message("This attractive woman looks at you with surprise and says, \"A moment! Thou didst just enjoy thyself, didst thou not? Please come back when thou art rested.\"*");
	say();
	abort;
	goto labelFunc04DD_016E;
labelFunc04DD_00BF:
	if (!(!gflags[0x02AA])) goto labelFunc04DD_0164;
	message("You see a gorgeous young woman with seductive eyes.");
	say();
	if (!(!var0004)) goto labelFunc04DD_00D8;
	message("\"Hello, handsome!");
	say();
	goto labelFunc04DD_00EE;
labelFunc04DD_00D8:
	message("\"Hello. Art thou sure thou dost not really want to speak with Roberto?\"");
	say();
	if (!Func090A()) goto labelFunc04DD_00E9;
	message("\"Fine, sweetheart. Whatever makes thy blood boil... ");
	say();
	goto labelFunc04DD_00EE;
labelFunc04DD_00E9:
	message("\"Then thou hadst best speak with Roberto! He is probably more thy type.\"*");
	say();
	abort;
labelFunc04DD_00EE:
	message("Who art thou?\"");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04DD_0133;
	if (!(!var0004)) goto labelFunc04DD_011F;
	message("\"Well, I am very pleased to meet thee, ");
	message(var0002);
	message(".\"");
	say();
	goto labelFunc04DD_0129;
labelFunc04DD_011F:
	message("\"Hello, ");
	message(var0002);
	message(".\"");
	say();
labelFunc04DD_0129:
	var0005 = var0002;
	gflags[0x029F] = true;
labelFunc04DD_0133:
	if (!(var0009 == var0003)) goto labelFunc04DD_015D;
	message("\"Oh ho! A real live Avatar?");
	say();
	if (!(!var0004)) goto labelFunc04DD_014F;
	message("\"Say, we should get to know one another better!\"");
	say();
	goto labelFunc04DD_0153;
labelFunc04DD_014F:
	message("\"And female, as well! And I thought I had seen it all...\"");
	say();
labelFunc04DD_0153:
	var0005 = var0003;
	gflags[0x02A0] = true;
labelFunc04DD_015D:
	gflags[0x02AA] = true;
	goto labelFunc04DD_016E;
labelFunc04DD_0164:
	message("\"Hello again, ");
	message(var0005);
	message(",\" Wench says.");
	say();
labelFunc04DD_016E:
	converse attend labelFunc04DD_0281;
	case "name" attend labelFunc04DD_018F:
	message("\"Thou canst just call me... Wench.\"");
	say();
	if (!(!var0004)) goto labelFunc04DD_0188;
	message("She blows you a kiss.");
	say();
labelFunc04DD_0188:
	UI_remove_answer("name");
labelFunc04DD_018F:
	case "job" attend labelFunc04DD_01A8:
	message("She laughs aloud. \"Thou must be kidding!\" She composes herself and says, \"It is my duty to see that thou art comfortable whilst at The Baths.\"");
	say();
	UI_add_answer(["The Baths", "comfortable"]);
labelFunc04DD_01A8:
	case "The Baths" attend labelFunc04DD_01C6:
	message("\"I have been working here since it opened. I love it. I am not exploited in the least. I make piles of gold and live a great life.\" ");
	say();
	if (!(!var0004)) goto labelFunc04DD_01BF;
	message("She winks at you. \"I meet many nice men, too!\"");
	say();
labelFunc04DD_01BF:
	UI_remove_answer("The Baths");
labelFunc04DD_01C6:
	case "comfortable" attend labelFunc04DD_01EC:
	message("\"Well, we could have a swim in the spring pools, or thou couldst have a massage. Or we could just talk.~~\"Or... thou couldst come with me into the Community Room and I'll 'show' thee my 'job'!\"");
	say();
	UI_remove_answer("comfortable");
	UI_add_answer(["swim", "massage", "talk", "Community Room"]);
labelFunc04DD_01EC:
	case "Community Room" attend labelFunc04DD_0225:
	message("\"Thou dost want to join me in the Community Room?\"");
	say();
	if (!Func090A()) goto labelFunc04DD_0214;
	message("Wench leads you into a private room.~~\"It really isn't a Community Room at all. We shall be all alone,\" she giggles. ~~\"By the way, it is a good thing thou didst choose me. Roberto and Martine enjoy stealing gold from their customers. I may have questionable morals, but I am not a thief! Now, let us get down to business, shall we?\"");
	say();
	message("A while later, after the woman has shown you more tricks than a mage on stage, you emerge from the Community Room a much happier Avatar.");
	say();
	gflags[0x029D] = true;
	UI_set_timer(0x0004);
	goto labelFunc04DD_021E;
labelFunc04DD_0214:
	message("\"'Tis not a problem, ");
	message(var0005);
	message(".\"");
	say();
labelFunc04DD_021E:
	UI_remove_answer("Community Room");
labelFunc04DD_0225:
	case "swim" attend labelFunc04DD_0238:
	message("Wench helps you with your clothing and leads you into the warm spring water. It feels terrific, and you would prefer to go to sleep, but you know you have a quest to fulfill. After a while, Wench helps you out of the water and you dress.");
	say();
	UI_remove_answer("swim");
labelFunc04DD_0238:
	case "massage" attend labelFunc04DD_024B:
	message("Wench helps you with your clothing and leads you to a comfortable table. You lie on your stomach and the woman expertly kneads and rubs your aching muscles, slowly sending you into a state of total relaxation. After a while, Wench helps you up and you dress.");
	say();
	UI_remove_answer("massage");
labelFunc04DD_024B:
	case "talk" attend labelFunc04DD_0273:
	message("Wench shrugs. \"Fine with me! What shall we talk about? I know! Want to know a secret?\"");
	say();
	if (!Func090A()) goto labelFunc04DD_0264;
	message("\"Didst thou know that there are secret passages in the mountains connecting the buildings on Buccaneer's Den? 'Tis true! I am fairly sure the entrance is through the House of Games,\tand I do know that there is a way into The Baths from the passages!\"");
	say();
	goto labelFunc04DD_0268;
labelFunc04DD_0264:
	message("Wench pouts. \"Well never mind, then!\"");
	say();
labelFunc04DD_0268:
	message("You and Wench speak of a number of other subjects when you realize that you are spending too much time in the spa. There is a quest to fulfill!");
	say();
	UI_remove_answer("talk");
labelFunc04DD_0273:
	case "bye" attend labelFunc04DD_027E:
	goto labelFunc04DD_0281;
labelFunc04DD_027E:
	goto labelFunc04DD_016E;
labelFunc04DD_0281:
	endconv;
	message("\"Oh, please come again soon, ");
	message(var0005);
	message("!\"");
	say();
	if (!(!var0004)) goto labelFunc04DD_029A;
	message("Wench blows you a kiss.*");
	say();
	goto labelFunc04DD_029E;
labelFunc04DD_029A:
	message("Wench waves goodbye.*");
	say();
labelFunc04DD_029E:
	return;
}


