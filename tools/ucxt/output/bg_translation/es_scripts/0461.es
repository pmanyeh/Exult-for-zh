#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func0909 0x909 ();

void Func0461 object#(0x461) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc0461_0009;
	abort;
labelFunc0461_0009:
	UI_show_npc_face(0xFF9F, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc0461_0043;
	var0001 = Func08FC(0xFF9F, 0xFFAF);
	if (!var0001) goto labelFunc0461_003E;
	message("Mikos is lost in meditation at the Fellowship meeting and does not hear you.*");
	say();
	abort;
	goto labelFunc0461_0043;
labelFunc0461_003E:
	message("\"I must run to the Fellowship meeting! I shall speak with thee another time!\"*");
	say();
	abort;
labelFunc0461_0043:
	var0002 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0107]) goto labelFunc0461_0066;
	UI_add_answer("silver fluid");
labelFunc0461_0066:
	if (!(!gflags[0x011C])) goto labelFunc0461_0078;
	message("A sneering man watches as you approach. His eyes shift back and forth suspiciously.");
	say();
	gflags[0x011C] = true;
	goto labelFunc0461_007C;
labelFunc0461_0078:
	message("Mikos heaves his shoulders and sighs. \"What dost thou want this time?\"");
	say();
labelFunc0461_007C:
	converse attend labelFunc0461_0139;
	case "name" attend labelFunc0461_0092:
	message("\"I am Mikos.\"");
	say();
	UI_remove_answer("name");
labelFunc0461_0092:
	case "job" attend labelFunc0461_00AB:
	message("\"I am the foreman of the Minoc mine.\"");
	say();
	UI_add_answer(["Minoc", "mine"]);
labelFunc0461_00AB:
	case "Minoc" attend labelFunc0461_00BE:
	message("He spits on the ground. \"A pox on them! Down here I am safe from all of their arguing. Next, they will be killing each other.\"");
	say();
	UI_remove_answer("Minoc");
labelFunc0461_00BE:
	case "mine" attend labelFunc0461_00DE:
	message("\"This mine is run by the Britannian Mining Company. It is inside what was once the dungeon Covetous. They mine for iron ore, lead and other minerals with highly trained miners and special mining machinery.\"");
	say();
	UI_remove_answer("mine");
	UI_add_answer(["miners", "machinery"]);
labelFunc0461_00DE:
	case "miners" attend labelFunc0461_00F8:
	message("\"Currently most of the miners are away as the machines are being repaired. Right now we have two engineers, Owings and Malloy, down in a branch of the main tunnel. Do not disturb them, for they are involved in a special project. We also have a gargoyle, Fodus, who is helping to maintain a semblance of the mine's usual operations.\"");
	say();
	UI_remove_answer("miners");
	UI_add_answer("Owings and Malloy");
labelFunc0461_00F8:
	case "machinery" attend labelFunc0461_010B:
	message("\"This place is full of machinery that is very dangerous if thou dost not know what thou art doing. Thou dost not wish to see what one of those digging contraptions can do to a man if he gets too close!\"");
	say();
	UI_remove_answer("machinery");
labelFunc0461_010B:
	case "Owings and Malloy" attend labelFunc0461_011E:
	message("Mikos shakes his head slowly. \"I am not sure where the Britannian Mining Company found them.\"");
	say();
	UI_remove_answer("Owings and Malloy");
labelFunc0461_011E:
	case "silver fluid" attend labelFunc0461_012B:
	message("You repeat the words to Mikos that you heard Fodus say. Mikos gives you a shocked look. \"I have no idea what he is talking about, but I would say it is typical for a gargoyle. Just trying to shirk of his duty. Say, thou hadst better leave this place if thou ist spending all thy time disrupting the work of the mine!\"*");
	say();
	abort;
labelFunc0461_012B:
	case "bye" attend labelFunc0461_0136:
	goto labelFunc0461_0139;
labelFunc0461_0136:
	goto labelFunc0461_007C;
labelFunc0461_0139:
	endconv;
	message("\"Do not wander around down here, ");
	message(var0002);
	message(". Thou shouldst leave right away.\"*");
	say();
	return;
}


