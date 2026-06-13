#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08BE 0x8BE (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04C0 object#(0x4C0) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04C0_01B4;
	UI_show_npc_face(0xFF40, 0x0000);
	var0000 = Func0909();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF40));
	var0002 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0269])) goto labelFunc04C0_004F;
	message("The large, muscle-bound man smiles pleasantly at you.");
	say();
	gflags[0x0269] = true;
	goto labelFunc04C0_0059;
labelFunc04C0_004F:
	message("\"Greetings, ");
	message(var0000);
	message(",\" says Menion.");
	say();
labelFunc04C0_0059:
	converse attend labelFunc04C0_01AF;
	case "name" attend labelFunc04C0_0075:
	message("\"I am Menion, ");
	message(var0000);
	message(".\" He shakes your hand.");
	say();
	UI_remove_answer("name");
labelFunc04C0_0075:
	case "job" attend labelFunc04C0_0091:
	message("\"I am a trainer. I help warriors become bigger and stronger and better fighters. I also forge swords to match the strength in my students' arms.\"");
	say();
	UI_add_answer(["train", "forge", "students"]);
labelFunc04C0_0091:
	case "students" attend labelFunc04C0_00AB:
	message("\"I have taught many a warrior how to use his -- or her -- force against an opponent.\"");
	say();
	UI_remove_answer("students");
	UI_add_answer("force");
labelFunc04C0_00AB:
	case "force" attend labelFunc04C0_00D1:
	message("\"Yes, ");
	message(var0000);
	message(". The key to effective fighting is striking hard and accurately at one's foe.\"");
	say();
	UI_remove_answer("force");
	UI_add_answer(["hard", "accurately"]);
labelFunc04C0_00D1:
	case "hard" attend labelFunc04C0_00E4:
	message("\"Physical strength permits the attacker a better chance of penetrating the other fighter's armour. Obviously, in a lethal combat, that is an important objective.\"");
	say();
	UI_remove_answer("hard");
labelFunc04C0_00E4:
	case "accurately" attend labelFunc04C0_00F7:
	message("\"Needless to say, some targets on an individual are better than others. 'Tis always best to hit something that will either seriously incapacitate one's foe, or create enough pain to distract him.\"");
	say();
	UI_remove_answer("accurately");
labelFunc04C0_00F7:
	case "train" attend labelFunc04C0_0130:
	if (!(var0001 == 0x0007)) goto labelFunc04C0_012C;
	message("\"I will train thee for 45 gold. Wilt thou pay?\"");
	say();
	if (!Func090A()) goto labelFunc04C0_0125;
	Func08BE([0x0000, 0x0004], 0x002D);
	goto labelFunc04C0_0129;
labelFunc04C0_0125:
	message("\"Fine.\"");
	say();
labelFunc04C0_0129:
	goto labelFunc04C0_0130;
labelFunc04C0_012C:
	message("\"Perhaps this would be a more appropriate topic when I am at work.\"");
	say();
labelFunc04C0_0130:
	case "forge" attend labelFunc04C0_01A1:
	message("\"Dost thou wish to make a sword?\"");
	say();
	if (!((var0002 == 0x0003) || ((var0002 == 0x0004) || (var0002 == 0x0005)))) goto labelFunc04C0_0196;
	var0003 = Func090A();
	if (!(!var0003)) goto labelFunc04C0_016A;
	message("\"Perhaps sometime when thou hast more time.\"");
	say();
	goto labelFunc04C0_0193;
labelFunc04C0_016A:
	message("He smiles. \"I would be very happy to show thee the steps necessary to create a very fine blade.\" He quickly jots down a few things on a scroll and turns to give it to you.*");
	say();
	var0004 = UI_add_party_items(0x0001, 0x031D, 0x000D, 0x0000, true);
	if (!var0004) goto labelFunc04C0_018F;
	message("\"May thy blade be sturdy and sharp!\"*");
	say();
	goto labelFunc04C0_0193;
labelFunc04C0_018F:
	message("\"Perhaps when thou hast fewer things to occupy thy pack, I can give this to thee.\"");
	say();
labelFunc04C0_0193:
	goto labelFunc04C0_019A;
labelFunc04C0_0196:
	message("\"I can help thee with that when I am at work.\"");
	say();
labelFunc04C0_019A:
	UI_remove_answer("forge");
labelFunc04C0_01A1:
	case "bye" attend labelFunc04C0_01AC:
	goto labelFunc04C0_01AF;
labelFunc04C0_01AC:
	goto labelFunc04C0_0059;
labelFunc04C0_01AF:
	endconv;
	message("\"May the strength in thine arms always match the strength of thy will.\"*");
	say();
labelFunc04C0_01B4:
	if (!(event == 0x0000)) goto labelFunc04C0_01C2;
	Func092E(0xFF40);
labelFunc04C0_01C2:
	return;
}


