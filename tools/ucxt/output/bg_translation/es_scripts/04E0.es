#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func04E0 object#(0x4E0) ()
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

	if (!(event == 0x0000)) goto labelFunc04E0_0009;
	abort;
labelFunc04E0_0009:
	UI_show_npc_face(0xFF20, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF20));
	var0002 = Func0908();
	var0003 = "Avatar";
	var0004 = UI_is_pc_female();
	if (!gflags[0x02A1]) goto labelFunc04E0_0047;
	var0005 = var0002;
labelFunc04E0_0047:
	if (!gflags[0x02A2]) goto labelFunc04E0_0053;
	var0005 = var0003;
labelFunc04E0_0053:
	if (!(!(var0001 == 0x0007))) goto labelFunc04E0_0063;
	message("The man looks up in surprise and says, \"I am not working at the moment and I ask thee to respect my privacy. If thou dost wish to speak with me, come to The Baths in the late evening hours.\"*");
	say();
	abort;
labelFunc04E0_0063:
	UI_add_answer(["name", "job", "bye"]);
	var0006 = UI_get_timer(0x0004);
	var0007 = UI_get_timer(0x0002);
	var0008 = UI_get_timer(0x0003);
	if (!((gflags[0x029C] && (var0007 < 0x0002)) || ((gflags[0x029D] && (var0006 < 0x0002)) || (gflags[0x029E] && (var0008 < 0x0002))))) goto labelFunc04E0_00C5;
	message("The man looks at you with surprise and says, \"Hold, ");
	message(var0004);
	message("! Thou didst just enjoy thyself, didst thou not? Please come back when thou art rested!\"*");
	say();
	abort;
	goto labelFunc04E0_0160;
labelFunc04E0_00C5:
	if (!(!gflags[0x02AD])) goto labelFunc04E0_0156;
	message("You see a strikingly handsome man with eyes that pierce your soul.");
	say();
	if (!var0004) goto labelFunc04E0_00DD;
	message("\"Hello, gorgeous!");
	say();
	goto labelFunc04E0_00F3;
labelFunc04E0_00DD:
	message("\"Hello. Uhm, art thou sure thou dost not really want to speak with Wench or Martine?\"");
	say();
	if (!Func090A()) goto labelFunc04E0_00EE;
	message("\"Fine, sailor, whatever makes thy blood boil...");
	say();
	goto labelFunc04E0_00F3;
labelFunc04E0_00EE:
	message("\"Then thou hadst best speak with one of them. They are probably more to thy liking!\"*");
	say();
	abort;
labelFunc04E0_00F3:
	message("\"What is thy name?\"");
	say();
	var0009 = Func090B([var0002, var0003]);
	if (!(var0009 == var0002)) goto labelFunc04E0_0137;
	if (!var0004) goto labelFunc04E0_0123;
	message("\"Well, I am very pleased to meet thee, ");
	message(var0002);
	message(".\"");
	say();
	goto labelFunc04E0_012D;
labelFunc04E0_0123:
	message("\"Hello, ");
	message(var0002);
	message(".\"");
	say();
labelFunc04E0_012D:
	var0005 = var0002;
	gflags[0x02A1] = true;
labelFunc04E0_0137:
	if (!(var0009 == var0003)) goto labelFunc04E0_014F;
	message("Roberto does a double-take. \"The Avatar, eh? And I thought I had heard it all...\"");
	say();
	gflags[0x02A2] = true;
	var0005 = var0003;
labelFunc04E0_014F:
	gflags[0x02AD] = true;
	goto labelFunc04E0_0160;
labelFunc04E0_0156:
	message("\"Hello again, ");
	message(var0005);
	message(",\" Roberto says.");
	say();
labelFunc04E0_0160:
	converse attend labelFunc04E0_027D;
	case "name" attend labelFunc04E0_0180:
	message("\"I am known in these parts as Roberto.\"");
	say();
	if (!var0004) goto labelFunc04E0_0179;
	message("Roberto takes your hand and says, \"And thou art the most beautiful woman I have ever laid eyes upon!\"");
	say();
labelFunc04E0_0179:
	UI_remove_answer("name");
labelFunc04E0_0180:
	case "job" attend labelFunc04E0_0199:
	message("Roberto smiles broadly. \"Thou dost not really want to know that, dost thou?\" He shakes his head, suppressing a laugh. \"Very well -- it is my task to see that thou art truly comfortable whilst at The Baths.\"");
	say();
	UI_add_answer(["The Baths", "comfortable"]);
labelFunc04E0_0199:
	case "The Baths" attend labelFunc04E0_01C7:
	if (!var0004) goto labelFunc04E0_01B0;
	var000A = "beautiful women ";
	goto labelFunc04E0_01B6;
labelFunc04E0_01B0:
	var000A = "handsome men ";
labelFunc04E0_01B6:
	message("\"Nice place, is it not? I certainly enjoy working here! It brings me much wealth, and I have many opportunities to meet ");
	message(var000A);
	message("such as thyself!\"");
	say();
	UI_remove_answer("The Baths");
labelFunc04E0_01C7:
	case "comfortable" attend labelFunc04E0_01ED:
	message("\"What would suit thee? We could swim in the spring pools, or I could give thee a massage. If thou dost prefer to converse, we could simply talk. Or if thou wouldst like, we could wander into the Community Room and... communicate!\"");
	say();
	UI_remove_answer("comfortable");
	UI_add_answer(["swim", "massage", "talk", "Community Room"]);
labelFunc04E0_01ED:
	case "Community Room" attend labelFunc04E0_0236:
	message("\"Thou dost want to join me in the Community Room?\"");
	say();
	if (!Func090A()) goto labelFunc04E0_0225;
	message("Roberto leads you into a private room.~~\"It really isn't a Community Room at all. We shall be all alone!\" ~~A while later, after you have received the man's full attention, you emerge from the Community Room a much happier Avatar.");
	say();
	gflags[0x029E] = true;
	UI_set_timer(0x0003);
	var000B = UI_remove_party_items(0x0032, 0x0284, 0xFE99, 0xFE99, true);
	goto labelFunc04E0_022F;
labelFunc04E0_0225:
	message("\"Do not worry about it, ");
	message(var0005);
	message(". We can do something else.\"");
	say();
labelFunc04E0_022F:
	UI_remove_answer("Community Room");
labelFunc04E0_0236:
	case "swim" attend labelFunc04E0_0249:
	message("Roberto helps you with your clothing and leads you into the warm spring water. It feels terrific, and you feel like going to sleep, but you know you have a quest to complete. After a while, Roberto helps you out of the water and you dress.");
	say();
	UI_remove_answer("swim");
labelFunc04E0_0249:
	case "massage" attend labelFunc04E0_025C:
	message("Roberto helps you with your clothing and leads you to a comfortable table. You lie face down and the man expertly kneads and rubs your aching muscles, slowly sending you over the edge into a state of total relaxation. After a while, Roberto helps you up and you dress.");
	say();
	UI_remove_answer("massage");
labelFunc04E0_025C:
	case "talk" attend labelFunc04E0_026F:
	message("Roberto smiles. \"That is all right. What shall we talk about? Adventuring? Secret passages and dungeons?\"~~ Roberto leans closer and whispers, \"Didst thou know that there are secret passages connecting the buildings on Buccaneer's Den? 'Tis true! I am fairly sure the entrance is through the House of Games, and I am quite sure there is a way into The Baths.\"~~You and Roberto speak of a number of other subjects until you realize that you are spending far too much time in the spa. There is a quest to fulfill!");
	say();
	UI_remove_answer("talk");
labelFunc04E0_026F:
	case "bye" attend labelFunc04E0_027A:
	goto labelFunc04E0_027D;
labelFunc04E0_027A:
	goto labelFunc04E0_0160;
labelFunc04E0_027D:
	endconv;
	message("\"I hope to see thee again, ");
	message(var0005);
	message(".\"*");
	say();
	return;
}


