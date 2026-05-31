#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0891 0x891 ();

void Func0890 0x890 ()
{
	var var0000;

	UI_show_npc_face(0xFEE0, 0x0000);
	if (!(!gflags[0x0314])) goto labelFunc0890_0028;
	UI_add_answer(["Don't know", "sacrificed", "bye"]);
	gflags[0x0314] = true;
	goto labelFunc0890_0038;
labelFunc0890_0028:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0890_0038:
	if (!gflags[0x031E]) goto labelFunc0890_0045;
	UI_add_answer("what next");
labelFunc0890_0045:
	converse attend labelFunc0890_022C;
	case "Don't know" attend labelFunc0890_008F:
	message("He kneels over the body and inspects the other golem. As his fingers trace around the gaping hole in Bollux's chest, an expression of understanding fills his visage.~\"H-his heart is gone!\"~ He stares down at his own chest. \"He sacrificed himself by giving me his heart... the fool!\" His words are insulting but his tone is affectionate.");
	say();
	UI_remove_answer(["Don't know", "sacrificed"]);
	message("\"I must help him, as he helped me! Wilt thou assist?\"");
	say();
	if (!Func090A()) goto labelFunc0890_0086;
	message("\"Very good,\" he says, noticeably relieved. \"I thank thee in advance.\"");
	say();
	gflags[0x031E] = true;
	UI_add_answer(["name", "job", "fool"]);
	goto labelFunc0890_008F;
labelFunc0890_0086:
	message("\"Then I must go this one myself,\" he says angrily. \"'Tis no more than one friend would do for another... no more than Bollux did for me!\"");
	say();
	message("He looks at you carefully. His stoney features do nothing to hide the suspicion on his face, or in his voice.~\"It is quite obvious to me thou art but a lost traveler and certainly not the Avatar for whom I mistook thee.\"*");
	say();
	abort;
labelFunc0890_008F:
	case "sacrificed" attend labelFunc0890_00D6:
	message("You quickly relate the details of Bollux's death as he pulled the object from his chest and placed it in the other golem's.~\"He sacrificed himself by giving me his heart... the fool!\" His words are insulting but his tone is affectionate.");
	say();
	UI_remove_answer(["Don't know", "sacrificed"]);
	message("\"I must help him, as he helped me! Wilt thou assist?\"");
	say();
	if (!Func090A()) goto labelFunc0890_00CD;
	message("\"Very good,\" he says, notably relieved. \"I thank thee in advance.\"");
	say();
	gflags[0x031E] = true;
	UI_add_answer(["name", "job", "fool"]);
	goto labelFunc0890_00D6;
labelFunc0890_00CD:
	message("\"Then I must go this one myself,\" he says angrily. \"'Tis no more than one friend would do for another... no more than Bollux did for me!\"");
	say();
	message("He looks at you carefully. His stoney features do nothing to hide the suspicion on his face, or in his voice.~\"It is quite obvious to me thou art but a lost traveler and certainly not the Avatar for whom I mistook thee.\"*");
	say();
	abort;
labelFunc0890_00D6:
	case "name" attend labelFunc0890_00E9:
	UI_remove_answer("name");
	message("\"I am the golem called Adjhar, at thy service.\"");
	say();
labelFunc0890_00E9:
	case "job" attend labelFunc0890_0105:
	message("\"I am one of the guardians of the Shrines of the Principles. That was exactly what Bollux and I were doing when the wall fell and crushed me.\"");
	say();
	UI_add_answer(["Bollux", "Shrines", "wall"]);
labelFunc0890_0105:
	case "Shrines" attend labelFunc0890_0118:
	UI_remove_answer("Shrines");
	message("\"Surely thou hast heard of the Shrines of the Three Principles: Truth, Love, and Courage! We golems were fabricated to protect the Shrines, for only an Avatar -- -the- Avatar -- may utilize the awesome power they can convey.\"");
	say();
labelFunc0890_0118:
	case "wall" attend labelFunc0890_013C:
	UI_remove_answer("wall");
	message("\"I do not remember the incident clearly. However, I will relate what I can recall. Bollux and I were standing guard in the Shrine Room of the Principles when we detected an intrusion into the the castle. I remember nothing more than being aware of great heat, and then part of the wall crumbling atop me, crushing my legs. I suppose Bollux was more forunate. Was it he who carried me here?\"");
	say();
	if (!Func090A()) goto labelFunc0890_0138;
	message("\"Then it is imperative that we find a way to bring him back! If nothing else, I owe him my gratitude.\"");
	say();
	goto labelFunc0890_013C;
labelFunc0890_0138:
	message("\"Strange,\" he says, puzzled. \"I am at a loss then to explain my arrival here.~Regardless, I -must- find a way to restore life to him!\"");
	say();
labelFunc0890_013C:
	case "Bollux" attend labelFunc0890_0156:
	message("\"Hast thou not already met him? He is my older brother, and my friend.\"");
	say();
	UI_remove_answer("Bollux");
	UI_add_answer("older");
labelFunc0890_0156:
	case "older" attend labelFunc0890_0169:
	message("\"Master Astelleron -- we actually called him our father -- created him before he did me. And he instilled Bollux with a personality first.\"");
	say();
	UI_remove_answer("older");
labelFunc0890_0169:
	case "what next" attend labelFunc0890_01BA:
	UI_remove_answer("what next");
	message("\"Dost thou have the book entitled, `The Stone of Castambre?'\"");
	say();
	if (!Func090A()) goto labelFunc0890_01B2;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc0890_01A7;
	message("His eyes reveal his hope. As he takes the book from you, it almost appears as if he is smiling.\"");
	say();
	Func0891();
	goto labelFunc0890_01AF;
labelFunc0890_01A7:
	message("\"I must see the book the book to use it. Perhaps thou hast mislaid it about somewhere.\" He stares directly at you. \"'Tis vital that I have that tome. I beg thee, retrieve it for me!\"");
	say();
	gflags[0x031F] = true;
labelFunc0890_01AF:
	goto labelFunc0890_01BA;
labelFunc0890_01B2:
	message("\"Please go and recover it then. I believe it contains information that may help my companion.\"");
	say();
	gflags[0x031F] = true;
labelFunc0890_01BA:
	case "fool" attend labelFunc0890_021C:
	UI_remove_answer("fool");
	message("\"Poor Bollux did not know of the Stone of Castambre. His sacrifice was, perhaps, unnecessary. Hast thou, perchance, come across MacCuth's \"The Stone of Castambre?\"");
	say();
	if (!Func090A()) goto labelFunc0890_0218;
	message("\"Dost thou have it with thee?\"");
	say();
	if (!Func090A()) goto labelFunc0890_020D;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0282, 0x0090, 0xFE99);
	if (!var0000) goto labelFunc0890_0202;
	message("His eyes reveal his hope. As he takes the book from you, it almost appears as if he is smiling.\"");
	say();
	Func0891();
	goto labelFunc0890_020A;
labelFunc0890_0202:
	message("\"I must see the book the book to use it. Perhaps thou hast mislaid it about somewhere.\" He stares directly at you. \"'Tis vital that I have that tome. I beg thee, retrieve it for me!\"");
	say();
	gflags[0x031F] = true;
labelFunc0890_020A:
	goto labelFunc0890_0215;
labelFunc0890_020D:
	message("\"Please go and recover it then. I believe it contains information that may help my companion.\"");
	say();
	gflags[0x031F] = true;
labelFunc0890_0215:
	goto labelFunc0890_021C;
labelFunc0890_0218:
	message("\"Then I recommend thou dost search within my master's chambers for it. The pages contain words which may help my companion.\"");
	say();
labelFunc0890_021C:
	case "bye" attend labelFunc0890_0229:
	message("\"I can offer nothing more for thine assistance than my deepest appreciation. Please journey in peace.\"*");
	say();
	abort;
labelFunc0890_0229:
	goto labelFunc0890_0045;
labelFunc0890_022C:
	endconv;
	return;
}


