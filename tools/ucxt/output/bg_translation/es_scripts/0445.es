#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0445 object#(0x445) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0000)) goto labelFunc0445_0009;
	abort;
labelFunc0445_0009:
	UI_show_npc_face(0xFFBB, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	var0001 = UI_find_nearest(0xFE9C, 0x018A, 0xFFFF);
	if (!(!gflags[0x00C6])) goto labelFunc0445_004B;
	message("You see a thoroughly disheartened young man who is miserably languishing behind bars.");
	say();
	gflags[0x00C6] = true;
	goto labelFunc0445_0055;
labelFunc0445_004B:
	message("\"Hello again, ");
	message(var0000);
	message(",\" says Weston.");
	say();
labelFunc0445_0055:
	converse attend labelFunc0445_032F;
	case "name" attend labelFunc0445_006B:
	message("\"I am Weston.\"");
	say();
	UI_remove_answer("name");
labelFunc0445_006B:
	case "job" attend labelFunc0445_00A3:
	message("\"I have none so long as I am left to rot here in this prison.\"");
	say();
	if (!var0001) goto labelFunc0445_009C;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"Thy job is to pay for the crime thou hast committed.\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_009C:
	UI_add_answer("prison");
labelFunc0445_00A3:
	case "prison" attend labelFunc0445_00E8:
	message("\"My crime was stealing apples from the Royal Orchards. This I did and I admit it freely. If given the same set of circumstances I would do it again.\"");
	say();
	if (!var0001) goto labelFunc0445_00D4;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"A-ha! Not only an unrepentant criminal but also a potential professional thief! Looks like this one has ended in the right place and just in the nick o' time.\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_00D4:
	UI_remove_answer("prison");
	UI_add_answer(["stealing apples", "circumstances"]);
labelFunc0445_00E8:
	case "stealing apples" attend labelFunc0445_012D:
	message("\"I had offered to buy them first, but Figg, the caretaker of the orchard, set an exorbitant price which I am certain he would have pocketed for himself. So, yes, I admit to stealing them.\"");
	say();
	if (!var0001) goto labelFunc0445_0119;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"See how the common criminal blames his type of immoral behavior on others, all the while denying it in himself! This one is irredeemable, he is.\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0119:
	UI_remove_answer("stealing apples");
	UI_add_answer(["Figg", "admit"]);
labelFunc0445_012D:
	case "Figg" attend labelFunc0445_016F:
	message("\"He gives baskets of fruit free to The Fellowship without Lord British's consent, I am quite certain.\"");
	say();
	gflags[0x0094] = true;
	if (!var0001) goto labelFunc0445_0168;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"Thou shouldst not listen to this obvious slander, ");
	message(var0000);
	message("! It is hearsay!\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0168:
	UI_remove_answer("Figg");
labelFunc0445_016F:
	case "admit" attend labelFunc0445_0182:
	message("\"Mine only regrets are that I did not try to steal something bigger and that\tI did not get away with it.\"");
	say();
	UI_remove_answer("admit");
labelFunc0445_0182:
	case "circumstances" attend labelFunc0445_01C7:
	message("\"I am not from Britain, ");
	message(var0000);
	message(". I am from Paws and it is another reason why they believe I can be trifled with.\"");
	say();
	if (!var0001) goto labelFunc0445_01B9;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"This prisoner is from Paws! I bloody knew it! To his credit he was in town nearly an entire day before he stole something. For a citizen of Paws that is as honest as they come!\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_01B9:
	UI_remove_answer("circumstances");
	UI_add_answer("Paws");
labelFunc0445_01C7:
	case "Paws" attend labelFunc0445_020C:
	message("\"Paws is a town where thou mayest feel the icy grip of poverty about thine heart.\"");
	say();
	UI_remove_answer("Paws");
	UI_add_answer(["town", "poverty"]);
	if (!var0001) goto labelFunc0445_020C;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"Oh bloody 'ell! Now I suppose he is going to go and tell us his whole pathetic life's story! Couldst thou wait until I get out mine handkerchief so I do not interrupt thee with all my wailing!\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_020C:
	case "town" attend labelFunc0445_021F:
	message("\"Not so long ago Paws was a thriving rustic coastal village. But as Britain grew larger most of our local businesses moved there. We became a farming town and the seven year drought gave us a lashing that we have yet to recover from.\"");
	say();
	UI_remove_answer("town");
labelFunc0445_021F:
	case "poverty" attend labelFunc0445_0264:
	message("\"I do not wish to bemoan my fate, but my family lives in Paws -- my wife Alina and my child Cassie. They were starving and I came to Britain to get food for them.\"");
	say();
	if (!var0001) goto labelFunc0445_0250;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"Oh, now! Do not go and bring up poverty as an excuse as to why thou hast turned to crime! My father was so poor he and his family had to eat dirt. But he still raised me proper. Beat the stuffings out of me if he ever so much as imagined I did anything wrong, I can tell thee that!\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0250:
	UI_remove_answer("poverty");
	UI_add_answer(["family", "starving"]);
labelFunc0445_0264:
	case "family" attend labelFunc0445_0277:
	message("\"I do not want any mercy for myself. I have admitted my guilt. But my life does not only belong to myself. It belongs to my wife and family as well. Without me they will suffer unbearable hardships, such as they might not survive.\"");
	say();
	UI_remove_answer("family");
labelFunc0445_0277:
	case "starving" attend labelFunc0445_02BC:
	message("\"Although there are fools who will speak otherwise, the people of Britannia are being crushed by the vicious tyranny of the class system. While a few have more than they could ever enjoy, there are many who go to sleep hungry every night. My wife and daughter to name two of them.\"");
	say();
	if (!var0001) goto labelFunc0445_02A8;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"Oh, that reminds me it is nearly time for my meal break! The trout is supposed to be delicious today at the Farmer's Market.\"");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_02A8:
	UI_remove_answer("starving");
	UI_add_answer(["fools", "class system"]);
labelFunc0445_02BC:
	case "fools" attend labelFunc0445_02CF:
	message("\"Fools like our good friend the guard would have us believe that nothing has changed in Britannia for over two hundred years. That we can live our lives as if all of our problems do not exist. I say to thee that it is people like that who cause our problems in the first place.\"");
	say();
	UI_remove_answer("fools");
labelFunc0445_02CF:
	case "class system" attend labelFunc0445_0321:
	message("\"While I am certain Lord British is a just and fair ruler, he must be quite unaware of all that goes on in his kingdom. Surely he would not tolerate such inequity.\"");
	say();
	if (!var0001) goto labelFunc0445_0300;
	UI_show_npc_face(0xFEFE, 0x0000);
	message("\"All right! That is enough noise out of thee! All day long yakkata-yakkata about the awful terrible class system! Why, the next thing thou knowest thou shalt be sayin' society is to blame for thy crimes. Not a word from anybody about any appreciation for keeping the laws and order. No, of course not! But all the pity in the world for the dangerous lawbreakers who are the real threat to society.\"*");
	say();
	UI_remove_npc_face(0xFEFE);
	UI_show_npc_face(0xFFBB, 0x0000);
labelFunc0445_0300:
	message("\"Wouldst thou speak with Lord British about me? I would bet that he is completely unaware of my case! Please! Wilt thou speak with him?\"");
	say();
	if (!Func090A()) goto labelFunc0445_0315;
	message("\"Oh, I thank thee, Avatar! My fate and the fates of my wife and daughter are in thine hands!\"");
	say();
	gflags[0x00CD] = true;
	goto labelFunc0445_031A;
labelFunc0445_0315:
	message("Weston lowers his head. \"Then why art thou speaking with me? Go away and leave me to my misery.\"*");
	say();
	abort;
labelFunc0445_031A:
	UI_remove_answer("class system");
labelFunc0445_0321:
	case "bye" attend labelFunc0445_032C:
	goto labelFunc0445_032F;
labelFunc0445_032C:
	goto labelFunc0445_0055;
labelFunc0445_032F:
	endconv;
	message("\"I thank thee for visiting me.\" *");
	say();
	return;
}


