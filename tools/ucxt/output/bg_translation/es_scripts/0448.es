#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0448 object#(0x448) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0448_01AC;
	var0000 = Func0908();
	var0001 = "Avatar";
	UI_show_npc_face(0xFFB8, 0x0000);
	if (!gflags[0x0078]) goto labelFunc0448_002A;
	var0002 = var0000;
labelFunc0448_002A:
	if (!gflags[0x0079]) goto labelFunc0448_0036;
	var0002 = var0001;
labelFunc0448_0036:
	if (!gflags[0x0077]) goto labelFunc0448_0041;
	message("Nell will not speak to you.*");
	say();
	abort;
labelFunc0448_0041:
	if (!(!gflags[0x00C9])) goto labelFunc0448_0097;
	message("You see a servant girl who looks at you in wonder. \"Thou dost look familiar. Who art thou?\"");
	say();
	var0003 = Func090B([var0000, var0001]);
	if (!(var0003 == var0000)) goto labelFunc0448_0070;
	message("\"Oh. Hello. I am Nell.\"");
	say();
	gflags[0x0078] = true;
	goto labelFunc0448_0078;
labelFunc0448_0070:
	message("\"I thought so! I have seen thy portrait before. And I had heard that thou wouldst be visiting! I'm Nell.\"");
	say();
	gflags[0x0079] = true;
labelFunc0448_0078:
	if (!gflags[0x0078]) goto labelFunc0448_0084;
	var0002 = var0000;
labelFunc0448_0084:
	if (!gflags[0x0079]) goto labelFunc0448_0090;
	var0002 = var0001;
labelFunc0448_0090:
	gflags[0x00C9] = true;
	goto labelFunc0448_00A1;
labelFunc0448_0097:
	message("\"Hello, ");
	message(var0002);
	message(".\"");
	say();
labelFunc0448_00A1:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0448_00B1:
	converse attend labelFunc0448_01A1;
	case "name" attend labelFunc0448_00C7:
	message("\"I told thee my name is Nell.\"");
	say();
	UI_remove_answer("name");
labelFunc0448_00C7:
	case "job" attend labelFunc0448_00E0:
	message("\"I am a chambermaid. I am responsible for keeping the castle tidy. Just a servant girl, really.\"");
	say();
	UI_add_answer(["castle", "servant"]);
labelFunc0448_00E0:
	case "castle" attend labelFunc0448_00F3:
	message("\"It is very large. Keeps me very busy. Thou wouldst not believe how dusty it gets.\"");
	say();
	UI_remove_answer("castle");
labelFunc0448_00F3:
	case "servant" attend labelFunc0448_0119:
	message("\"I suppose I'll always be a servant. My parents are servants. My brother is a servant. My fiance is a servant. My child will probably be a servant.\"");
	say();
	UI_add_answer(["parents", "brother", "fiance", "child"]);
	UI_remove_answer("servant");
labelFunc0448_0119:
	case "parents" attend labelFunc0448_012C:
	message("\"They work in the castle as well. Boots is my mother. Bennie is my father. They have been here for years. I was born in this castle and played in the nursery.\"");
	say();
	UI_remove_answer("parents");
labelFunc0448_012C:
	case "brother" attend labelFunc0448_0143:
	message("\"Thou mightest run into him. He is also a servant in the castle. Charles. Other than not being as smart as I am, he is all right. For a bumbling ass, that is!\" She laughs.");
	say();
	gflags[0x0076] = true;
	UI_remove_answer("brother");
labelFunc0448_0143:
	case "fiance" attend labelFunc0448_015A:
	message("\"That would be Carrocio, that dear man who runs the Punch and Judy Show. He writes the loveliest love poetry. We are getting married as soon as Carrocio can afford a wedding ring.\"");
	say();
	gflags[0x0075] = true;
	UI_remove_answer("fiance");
labelFunc0448_015A:
	case "child" attend labelFunc0448_0193:
	message("Nell looks worried. \"Shhh! I do not want anyone to know. 'Tis not showing yet, is it? Carrocio and I are getting married as soon as possible. He -is- the father. I think. Then again, it could be... no, probably not him. Or could it be...? Hmmm. That would be interesting! Wait! What am I saying? The father is most definitely Carrocio! Please do not tell anyone. 'Twould be embarrassing. All right?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc0448_017F;
	message("\"I know I can trust thee, ");
	message(var0002);
	message(".\"");
	say();
	goto labelFunc0448_0188;
labelFunc0448_017F:
	message("\"But thou wouldst ruin my reputation! Please -- a servant girl needs all the self-esteem she can get without that burden!\" Nell turns away from you.*");
	say();
	gflags[0x0077] = true;
	abort;
labelFunc0448_0188:
	UI_remove_answer("child");
	gflags[0x007A] = true;
labelFunc0448_0193:
	case "bye" attend labelFunc0448_019E:
	goto labelFunc0448_01A1;
labelFunc0448_019E:
	goto labelFunc0448_00B1;
labelFunc0448_01A1:
	endconv;
	message("\"Goodbye, ");
	message(var0002);
	message(".\"*");
	say();
labelFunc0448_01AC:
	if (!(event == 0x0000)) goto labelFunc0448_01BA;
	Func092E(0xFFB8);
labelFunc0448_01BA:
	return;
}


