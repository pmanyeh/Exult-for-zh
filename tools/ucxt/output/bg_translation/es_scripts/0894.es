#game "blackgate"
// externs
extern void Func0896 0x896 ();
extern void Func0895 0x895 ();
extern void Func08FF 0x8FF (var var0000);

void Func0894 0x894 (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!gflags[0x031B]) goto labelFunc0894_0010;
	UI_set_schedule_type(var0000, 0x000B);
labelFunc0894_0010:
	if (!(event == 0x0001)) goto labelFunc0894_02D0;
	UI_show_npc_face(0xFEDF, 0x0000);
	if (!(gflags[0x0324] && (!gflags[0x031C]))) goto labelFunc0894_0031;
	message("\"I -must- return his life to him. He -will- have a new heart!\" The determination is quite evident by his forceful glare and stance.");
	say();
labelFunc0894_0031:
	if (!gflags[0x0328]) goto labelFunc0894_003A;
	Func0896();
labelFunc0894_003A:
	if (!gflags[0x031B]) goto labelFunc0894_0043;
	Func0895();
labelFunc0894_0043:
	if (!(!gflags[0x0315])) goto labelFunc0894_00A9;
	gflags[0x0315] = true;
	message("The stone statue stands with a lowered head. Despite its granite features, a downcast look is apparent on its face. Surprisingly, it turns to speak with you.");
	say();
	Func08FF("@Why, by the stars, I believe it \r\n\t\t\t\tis a creature!@");
	message("Slowly, as if with great effort, it raises it head.");
	say();
	UI_show_npc_face(0xFEDF, 0x0000);
	var0001 = UI_get_item_frame(UI_find_nearest(0xFE9C, 0x019E, 0x0028));
	if (!(!((var0001 == 0x0004) || (var0001 == 0x0005)))) goto labelFunc0894_0094;
	message("\"What dost thou... want?\" it asks slowly.");
	say();
	goto labelFunc0894_009F;
labelFunc0894_0094:
	message("\"Help him?\" it asks carefully, pointing to the fallen statue lying beside it.");
	say();
	UI_add_answer("help");
labelFunc0894_009F:
	UI_add_answer("Creature?");
	goto labelFunc0894_00AD;
labelFunc0894_00A9:
	message("\"In what way may I assist thee?\"");
	say();
labelFunc0894_00AD:
	UI_add_answer(["name", "job", "bye"]);
	var0002 = false;
	var0003 = false;
labelFunc0894_00C5:
	converse attend labelFunc0894_02CF;
	UI_show_npc_face(0xFEDF, 0x0000);
	case "name" attend labelFunc0894_0104:
	UI_remove_answer("name");
	if (!gflags[0x031D]) goto labelFunc0894_00EE;
	message("He tilts his head and stares at you quizzicaly.~ \"I apologize. Did I not already tell thee my master called me Bollux?\"");
	say();
	goto labelFunc0894_00F6;
labelFunc0894_00EE:
	message("\"My master named me Bollux.");
	say();
	gflags[0x031D] = true;
labelFunc0894_00F6:
	if (!(!var0003)) goto labelFunc0894_0104;
	UI_add_answer("master");
labelFunc0894_0104:
	case "job" attend labelFunc0894_0117:
	message("\"I am a guardian of the Shrines of the Principles.\"");
	say();
	UI_add_answer("guardian");
labelFunc0894_0117:
	case "guardian" attend labelFunc0894_012A:
	UI_remove_answer("guardian");
	message("\"We were... created to protect the Shrines of the Principles. Only the... Avatar should use their power. Adjhar and I were... keeping watch... when the wall fell on Adjhar. And the loud noise came...  I carried him here so that I could restore him, but I do not... know how.\"");
	say();
labelFunc0894_012A:
	case "Creature?" attend labelFunc0894_0156:
	UI_remove_answer("Creature?");
	message("\"We are called stone golems... because we are made out of stone and rock.\"");
	say();
	if (!(!var0002)) goto labelFunc0894_014F;
	UI_add_answer("made");
	var0002 = true;
labelFunc0894_014F:
	UI_add_answer("stone");
labelFunc0894_0156:
	case "master", "Astelleron" attend labelFunc0894_0188:
	UI_remove_answer(["Astelleron", "master"]);
	var0003 = true;
	message("\"Astelleron made us. He is our master.\"");
	say();
	if (!(!var0002)) goto labelFunc0894_0188;
	UI_add_answer("made");
	var0002 = true;
labelFunc0894_0188:
	case "stone" attend labelFunc0894_019B:
	UI_remove_answer("stone");
	message("\"We were... fashioned... out of the rock from the quarry on this small island.\"");
	say();
labelFunc0894_019B:
	case "made" attend labelFunc0894_01CD:
	var0002 = true;
	UI_remove_answer("made");
	message("\"I know nothing about the process, but Astelleron once told me he used something called... magic to give us life and... animation.\" The golem pauses, obviously conscious of his next thought.~\"He did not like his... solitude. He said he was... lonely.\"");
	say();
	UI_add_answer(["magic", "lonely"]);
	if (!(!var0003)) goto labelFunc0894_01CD;
	UI_add_answer("Astelleron");
labelFunc0894_01CD:
	case "magic" attend labelFunc0894_01E7:
	UI_remove_answer("magic");
	message("\"I do not know what... it is, but there are many books in his house. Perhaps... there is something there about... magic.\"");
	say();
	UI_add_answer("books");
labelFunc0894_01E7:
	case "books" attend labelFunc0894_0231:
	UI_remove_answer("books");
	if (!(!gflags[0x0323])) goto labelFunc0894_022D;
	message("\"I have a book here that Adjhar said told about... our... creation. This might help bring Adjhar back.\"");
	say();
	var0004 = UI_add_party_items(0x0001, 0x0282, 0x0090, 0xFE99, false);
	if (!var0004) goto labelFunc0894_0226;
	message("He hands to you a very old tome. It is evident the book has seen much use, for the leather covering is wearing away to reveal the wood beneath and the pages are quite dog-earred.~\"I already put rocks down,\" he adds, \"just like the... book said to.\"");
	say();
	gflags[0x0323] = true;
	goto labelFunc0894_022A;
labelFunc0894_0226:
	message("Thou art... carrying too much. Put something down and I can give this to you.\"");
	say();
labelFunc0894_022A:
	goto labelFunc0894_0231;
labelFunc0894_022D:
	message("\"There are several... more books lying about the house. I do not... know what they are about.  Adjhar read them.\"");
	say();
labelFunc0894_0231:
	case "lonely" attend labelFunc0894_0244:
	UI_remove_answer("lonely");
	message("\"Astelleron said it was how... a person feels when no one is around. He told us how... happy he felt after we were... born.~ He called me... a son.\"");
	say();
labelFunc0894_0244:
	case "help" attend labelFunc0894_0299:
	UI_remove_answer("help");
	message("\"My companion... Adjhar... He is dying. Thou must help repair him. Please, I beg... thee.\"");
	say();
	if (!(!gflags[0x0323])) goto labelFunc0894_0292;
	message("\"I have a book here that Adjhar said told about... our... creation. This might help bring him back.\"");
	say();
	var0004 = UI_add_party_items(0x0001, 0x0282, 0x0090, 0xFE99, false);
	if (!var0004) goto labelFunc0894_028E;
	message("He hands to you a very old tome. It is evident the book has seen much use, for the leather covering is wearing away to reveal the wood beneath and the pages are quite dog-earred. \"I have already set up five... rocks to mark a spot for the... blood.\"");
	say();
	UI_add_answer("blood");
	gflags[0x0323] = true;
	goto labelFunc0894_0292;
labelFunc0894_028E:
	message("Thou art... carrying too much. Put something down and I can give this to you.\"");
	say();
labelFunc0894_0292:
	UI_add_answer("Adjhar");
labelFunc0894_0299:
	case "Adjhar" attend labelFunc0894_02AC:
	UI_remove_answer("Adjhar");
	message("\"He is my brother... and my friend. We protected the... Shrines together. We cannot let him... stay like that. Help me... assist him.\"");
	say();
labelFunc0894_02AC:
	case "blood" attend labelFunc0894_02BF:
	UI_remove_answer("blood");
	message("\"I did not... understand the book, but I remember... blood...\"");
	say();
labelFunc0894_02BF:
	case "bye" attend labelFunc0894_02CC:
	message("\"Good... bye.\"*");
	say();
	abort;
labelFunc0894_02CC:
	goto labelFunc0894_00C5;
labelFunc0894_02CF:
	endconv;
labelFunc0894_02D0:
	return;
}


