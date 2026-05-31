#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func0469 object#(0x469) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0469_0137;
	UI_show_npc_face(0xFF97, 0x0000);
	var0000 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0143])) goto labelFunc0469_003A;
	message("The man greets you with stern, suspicious eyes.");
	say();
	gflags[0x0143] = true;
	goto labelFunc0469_0044;
labelFunc0469_003A:
	message("\"What is thy business, ");
	message(var0000);
	message("?\"");
	say();
labelFunc0469_0044:
	converse attend labelFunc0469_012C;
	case "name" attend labelFunc0469_0060:
	message("\"I am Sir Jeff, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc0469_0060:
	case "job" attend labelFunc0469_0079:
	message("\"I am the High Court official at the prison here in the Abbey.\"");
	say();
	UI_add_answer(["official", "Abbey"]);
labelFunc0469_0079:
	case "official" attend labelFunc0469_0093:
	message("\"I am the judiciary part of Britannia's government. It is my job to see that criminals are brought to justice.\"");
	say();
	UI_add_answer("criminals");
	UI_remove_answer("official");
labelFunc0469_0093:
	case "criminals" attend labelFunc0469_00B3:
	message("\"We have two prisoners already, but there are many scoundrels who still roam free.\"");
	say();
	UI_add_answer(["prisoners", "scoundrels"]);
	UI_remove_answer("criminals");
labelFunc0469_00B3:
	case "prisoners" attend labelFunc0469_00CD:
	message("\"Thou, of course, hast never met them,\" he says, his brow narrowing, \"but we have a pirate, and,\" he pauses, \"a troll. If thou dost wish to see them, speak with Goth, the jailer.\"");
	say();
	UI_add_answer("Goth");
	UI_remove_answer("prisoners");
labelFunc0469_00CD:
	case "scoundrels" attend labelFunc0469_00E0:
	message("\"See for thyself, the posted bills for known villains are in the log book in the courtroom.\"");
	say();
	UI_remove_answer("scoundrels");
labelFunc0469_00E0:
	case "Goth" attend labelFunc0469_010B:
	message("\"He has only been working here for a few weeks, but I already know he is not trustworthy. There is something obviously unscrupulous about him. He is not a friend of thine, is he?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0469_0100;
	message("\"I suspected as much.\" He turns away from you.*");
	say();
	abort;
	goto labelFunc0469_0104;
labelFunc0469_0100:
	message("\"No,\" he says, watching you closely, \"of course he is not.\"");
	say();
labelFunc0469_0104:
	UI_remove_answer("Goth");
labelFunc0469_010B:
	case "Abbey" attend labelFunc0469_011E:
	message("\"The monks live and study there, but they do little more than winemaking. Well, I know one of them tends the garden.\"");
	say();
	UI_remove_answer("Abbey");
labelFunc0469_011E:
	case "bye" attend labelFunc0469_0129:
	goto labelFunc0469_012C;
labelFunc0469_0129:
	goto labelFunc0469_0044;
labelFunc0469_012C:
	endconv;
	message("\"Keep thine heart and mind on the straight path, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0469_0137:
	if (!(event == 0x0000)) goto labelFunc0469_0140;
	abort;
labelFunc0469_0140:
	return;
}


