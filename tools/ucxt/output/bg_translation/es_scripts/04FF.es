#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func04FF object#(0x4FF) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0000)) goto labelFunc04FF_0009;
	abort;
labelFunc04FF_0009:
	UI_show_npc_face(0xFF01, 0x0000);
	var0000 = Func08F7(0xFF0F);
	var0001 = Func08F7(0xFFFE);
	var0002 = Func08F7(0xFFFF);
	var0003 = Func08F7(0xFFFC);
	var0004 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02C0])) goto labelFunc04FF_00F5;
	message("You see a lovely naked woman. She is not in the least concerned that she is wearing no clothes.*");
	say();
	if (!(var0001 && var0002)) goto labelFunc04FF_0094;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark's eyes widen and his jaw drops.*");
	say();
	UI_remove_npc_face(0xFFFE);
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Close thy mouth, boy. An insect may fly in. And put thine eyes back in thine head. They shall look strange dangling out of their sockets.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF01, 0x0000);
labelFunc04FF_0094:
	message("\"Me Mama!\" the woman exclaims proudly.");
	say();
	if (!gflags[0x02D4]) goto labelFunc04FF_00EE;
	if (!var0000) goto labelFunc04FF_00E6;
	UI_show_npc_face(0xFF0F, 0x0000);
	message("\"Forget it, Myrtle. The jig is up. They know all about us.\"*");
	say();
	UI_show_npc_face(0xFF01, 0x0000);
	message("\"Murray! Didst thou give us away? How couldst thou do it? This just isn't going to be much fun anymore knowing that someone is aware of the truth!\"*");
	say();
	UI_show_npc_face(0xFF0F, 0x0000);
	message("\"Sorry, dear.\"*");
	say();
	UI_remove_npc_face(0xFF0F);
	UI_show_npc_face(0xFF01, 0x0000);
	var0004 = true;
	goto labelFunc04FF_00EE;
labelFunc04FF_00E6:
	message("You tell the woman what Papa said about their past lives.~~\"Well, blast it! Why did he tell our secret? I will never forgive him! What a knave!\"");
	say();
	var0004 = true;
labelFunc04FF_00EE:
	gflags[0x02C0] = true;
	goto labelFunc04FF_0103;
labelFunc04FF_00F5:
	message("\"Hmm?\" asks Mama.");
	say();
	if (!gflags[0x02D4]) goto labelFunc04FF_0103;
	var0004 = true;
labelFunc04FF_0103:
	converse attend labelFunc04FF_01E7;
	case "name" attend labelFunc04FF_0127:
	if (!(!var0004)) goto labelFunc04FF_011C;
	message("\"Me Mama!\" the woman exclaims again.");
	say();
	goto labelFunc04FF_0120;
labelFunc04FF_011C:
	message("\"All right. My name is Myrtle. But I like to be called Mama.\"");
	say();
labelFunc04FF_0120:
	UI_remove_answer("name");
labelFunc04FF_0127:
	case "job" attend labelFunc04FF_0151:
	if (!(!var0004)) goto labelFunc04FF_013D;
	message("\"Me live with Papa here in cave!\"");
	say();
	goto labelFunc04FF_0141;
labelFunc04FF_013D:
	message("\"Well, I would not call it a job, but I just live here in Bee Cave with Papa.\"");
	say();
labelFunc04FF_0141:
	UI_add_answer(["live", "Papa", "cave"]);
labelFunc04FF_0151:
	case "live" attend labelFunc04FF_0197:
	if (!(!var0004)) goto labelFunc04FF_018C;
	message("Mama explains. \"Eat. Sleep. Love.\"*");
	say();
	if (!var0003) goto labelFunc04FF_0189;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"What else is there?\"*");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF01, 0x0000);
labelFunc04FF_0189:
	goto labelFunc04FF_0190;
labelFunc04FF_018C:
	message("\"We do our best to eat, sleep, and love each other down here isolated from the rest of society.\"");
	say();
labelFunc04FF_0190:
	UI_remove_answer("live");
labelFunc04FF_0197:
	case "Papa" attend labelFunc04FF_01B8:
	if (!(!var0004)) goto labelFunc04FF_01AD;
	message("\"Mmmmmmm. Papa! Mama love Papa!\"");
	say();
	goto labelFunc04FF_01B1;
labelFunc04FF_01AD:
	message("\"He's mostly a lazy beggar, but I still love him.\"");
	say();
labelFunc04FF_01B1:
	UI_remove_answer("Papa");
labelFunc04FF_01B8:
	case "cave" attend labelFunc04FF_01D9:
	if (!(!var0004)) goto labelFunc04FF_01CE;
	message("\"Cave good. Warm. Safe.\"");
	say();
	goto labelFunc04FF_01D2;
labelFunc04FF_01CE:
	message("\"It's been good to us. It keeps us warm. We are able to find food. I do not miss the old life.\"");
	say();
labelFunc04FF_01D2:
	UI_remove_answer("cave");
labelFunc04FF_01D9:
	case "bye" attend labelFunc04FF_01E4:
	goto labelFunc04FF_01E7;
labelFunc04FF_01E4:
	goto labelFunc04FF_0103;
labelFunc04FF_01E7:
	endconv;
	message("\"'Bye!\"*");
	say();
	return;
}


