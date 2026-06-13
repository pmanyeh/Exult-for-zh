#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0428 object#(0x428) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0428_0182;
	UI_show_npc_face(0xFFD8, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0428_003F;
	var0001 = Func08F7(0xFFCA);
	if (!var0001) goto labelFunc0428_003A;
	message("Judith is busy performing with The Avatars and cannot speak at the moment.*");
	say();
	abort;
	goto labelFunc0428_003F;
labelFunc0428_003A:
	message("\"I must run! I am late for my performance with The Avatars! I shall talk with thee later!\"*");
	say();
	abort;
labelFunc0428_003F:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A9])) goto labelFunc0428_0061;
	message("You see an attractive middle-aged woman with music in her eyes.");
	say();
	gflags[0x00A9] = true;
	goto labelFunc0428_0065;
labelFunc0428_0061:
	message("\"Hello!\" Judith says.");
	say();
labelFunc0428_0065:
	converse attend labelFunc0428_017D;
	case "name" attend labelFunc0428_007B:
	message("\"I am Judith. And I already know who thou art!\"");
	say();
	UI_remove_answer("name");
labelFunc0428_007B:
	case "job" attend labelFunc0428_0097:
	message("\"I teach music at The Music Hall. I also fatten my purse a bit by playing with The Avatars!\"");
	say();
	UI_add_answer(["music", "Music Hall", "The Avatars"]);
labelFunc0428_0097:
	case "music" attend labelFunc0428_00B1:
	message("\"Music is my life. I know I will never be a famous bard, but I receive great pleasure from playing and performing. I enjoy teaching as well.\"");
	say();
	UI_remove_answer("music");
	UI_add_answer("teaching");
labelFunc0428_00B1:
	case "Music Hall" attend labelFunc0428_00C4:
	message("\"Lord British appointed me music teacher a couple of years ago. It is a wonderful job!\"");
	say();
	UI_remove_answer("Music Hall");
labelFunc0428_00C4:
	case "The Avatars" attend labelFunc0428_00D7:
	message("\"We are a singing group. We play at the Blue Boar every evening. Please come and hear us! My pupil, Neno, is in the group. We hope to tour the country next year, if we can raise the funds.\"");
	say();
	UI_remove_answer("The Avatars");
labelFunc0428_00D7:
	case "teaching" attend labelFunc0428_00F1:
	message("\"It fulfills my life's purpose to teach others. It also gives me time away from home.\"");
	say();
	UI_remove_answer("teaching");
	UI_add_answer("home");
labelFunc0428_00F1:
	case "home" attend labelFunc0428_010B:
	message("\"Oh, I do not want to speak about mine home. Mine husband and I... well, we are not altogether... happy.\"");
	say();
	UI_remove_answer("home");
	UI_add_answer("husband");
labelFunc0428_010B:
	case "husband" attend labelFunc0428_0125:
	message("\"Thou mightest know him. He is Patterson, the Town Mayor. He is an intelligent and honest man, but we have our differences.~~\"I do not know why I am telling thee all of this!\"");
	say();
	UI_remove_answer("husband");
	UI_add_answer("differences");
labelFunc0428_0125:
	case "differences" attend labelFunc0428_0149:
	message("\"Well, for one thing, he is a member of that group, The Fellowship. Another thing is that he does not spend too much time at home. I cannot believe he works so much.\"");
	say();
	gflags[0x0081] = true;
	UI_remove_answer("differences");
	UI_add_answer(["Fellowship", "works"]);
labelFunc0428_0149:
	case "Fellowship" attend labelFunc0428_015C:
	message("\"They seem to have taken over our lives. They seem to have taken over our country!\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc0428_015C:
	case "works" attend labelFunc0428_016F:
	message("\"He is always saying he has to work late. Some nights he comes home before dawn. Other nights he is out the entire night.~~\"Well, I must not think about it. I only become saddened. I must concentrate on my music.\"");
	say();
	UI_remove_answer("works");
labelFunc0428_016F:
	case "bye" attend labelFunc0428_017A:
	goto labelFunc0428_017D;
labelFunc0428_017A:
	goto labelFunc0428_0065;
labelFunc0428_017D:
	endconv;
	message("Judith goes back to her instrument after a smile and a wave.*");
	say();
labelFunc0428_0182:
	if (!(event == 0x0000)) goto labelFunc0428_0190;
	Func092E(0xFFD8);
labelFunc0428_0190:
	return;
}


