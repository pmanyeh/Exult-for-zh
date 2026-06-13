#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04E2 object#(0x4E2) ()
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

	if (!(event == 0x0001)) goto labelFunc04E2_026D;
	UI_show_npc_face(0xFF1E, 0x0000);
	var0000 = Func0908();
	var0001 = UI_wearing_fellowship();
	var0002 = "Avatar";
	var0003 = UI_get_npc_object(0xFF1E);
	if (!gflags[0x02A3]) goto labelFunc04E2_003B;
	var0004 = var0000;
labelFunc04E2_003B:
	if (!gflags[0x02A4]) goto labelFunc04E2_0047;
	var0004 = var0002;
labelFunc04E2_0047:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x02A5]) goto labelFunc04E2_006A;
	if (!gflags[0x02A7]) goto labelFunc04E2_006A;
	UI_add_answer("Mole says...");
labelFunc04E2_006A:
	if (!(!gflags[0x02AF])) goto labelFunc04E2_00BB;
	message("This tall, middle-aged pirate looks at you with suspicion.~~\"Before I will look twice at thee, I must know who thou art.\" His voice is menacing.");
	say();
	var0005 = Func090B([var0000, var0002]);
	if (!(var0005 == var0000)) goto labelFunc04E2_009C;
	message("The pirate chews on something in his mouth before replying. \"Hi,\" he finally says.");
	say();
	gflags[0x02A3] = true;
	var0004 = var0000;
labelFunc04E2_009C:
	if (!(var0005 == var0002)) goto labelFunc04E2_00B4;
	message("The pirate looks as if you have just insulted his mother.~~\"I... do... not... like... Avatars!!\"~~The pirate spits on the ground. \"But thou dost not look as much like fishbait as the last Avatar I spoke with. All right. I will speak with thee.\"");
	say();
	gflags[0x02A4] = true;
	var0004 = var0002;
labelFunc04E2_00B4:
	gflags[0x02AF] = true;
	goto labelFunc04E2_00D7;
labelFunc04E2_00BB:
	if (!(gflags[0x02A6] || (!gflags[0x02A5]))) goto labelFunc04E2_00D3;
	message("\"What dost thou want?\" Blacktooth asks in a threatening voice. \"Oh, 'tis thee, ");
	message(var0004);
	message(".\"");
	say();
	goto labelFunc04E2_00D7;
labelFunc04E2_00D3:
	message("\"I thought thou didst not want to be my friend!\" Blacktooth grumbles.");
	say();
labelFunc04E2_00D7:
	converse attend labelFunc04E2_0256;
	case "name" attend labelFunc04E2_00ED:
	message("\"I am Blacktooth. See?\" The pirate smiles, revealing his teeth.");
	say();
	UI_remove_answer("name");
labelFunc04E2_00ED:
	case "job" attend labelFunc04E2_0106:
	message("\"Making fishbait out of Avatars!\" He laughs aloud. \"I have had all I can stand of puny weaklings running around claiming they are an Avatar! I am seeking a particular Avatar that was here last week. A particular Avatar that is a Fellowship member!\"");
	say();
	UI_add_answer(["Avatar", "Fellowship"]);
labelFunc04E2_0106:
	case "Avatar" attend labelFunc04E2_0120:
	message("\"He was through here a week ago. Tried to filch some gold off of me! Imagine! The nerve of that bastard! He was gone before I had realized what he had done.\"");
	say();
	UI_remove_answer("Avatar");
	UI_add_answer("filch");
labelFunc04E2_0120:
	case "filch" attend labelFunc04E2_013D:
	message("\"We were playing cards in the pub. Damn me if he did not deal from the bottom. I can usually spot tricks like that, but he was good!\"");
	say();
	if (!var0001) goto labelFunc04E2_0136;
	message("The pirate notices your Fellowship medallion. \"I see that thou art one of them, too!\"");
	say();
labelFunc04E2_0136:
	UI_remove_answer("filch");
labelFunc04E2_013D:
	case "Fellowship" attend labelFunc04E2_0175:
	if (!var0001) goto labelFunc04E2_0154;
	var0006 = "@No offense to thee, but ";
	goto labelFunc04E2_015A;
labelFunc04E2_0154:
	var0006 = "@Between thou and me, ";
labelFunc04E2_015A:
	message(var0006);
	message("I do not trust 'em. I think they are all hiding something. I think they are all tricksters. Take mine old friend Mole, for example. Well, mine old ex-friend Mole. He has changed a great deal since joining them.\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["Mole", "changed"]);
labelFunc04E2_0175:
	case "Mole" attend labelFunc04E2_0188:
	message("\"He is another aging pirate that has retired and lives on the island. We were mates for years, but then he joined that damned Fellowship. Now he thinks his droppings do not smell foul, if thou knowest what I mean.\"");
	say();
	UI_remove_answer("Mole");
labelFunc04E2_0188:
	case "changed" attend labelFunc04E2_021A:
	message("\"He has abandoned all of his pirate ways! He is a bloody saint now, and whenever he sees me he tries to convince me to join The Fellowship. I avoid him at all costs now. I cannot stand to see him this way. It burns my blood!\"~~Then, in a moment of weakness, the tough pirate says in a small voice, \"I miss him, too. We were best mates.\" You could swear there are tears in his eyes.*");
	say();
	var0007 = Func08F7(0xFFFE);
	if (!var0007) goto labelFunc04E2_01E6;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("Spark whispers, \"Oh, come on, be a man!\"*");
	say();
	UI_remove_npc_face(0xFFFE);
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc04E2_01DC;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("Dupre turns away to suppress a smirk.*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc04E2_01DC:
	UI_show_npc_face(0xFF1E, 0x0000);
labelFunc04E2_01E6:
	message("You can see that the pirate is upset, so you decide to leave him alone.~~\"Yeah, go away. That's right! I never can keep any friends!");
	say();
	if (!gflags[0x02A4]) goto labelFunc04E2_01F4;
	message("\"That would be just like an Avatar to leave me like this!");
	say();
labelFunc04E2_01F4:
	if (!var0001) goto labelFunc04E2_01FE;
	message("\"Typical Fellowship member! That's right! Leave me alone! Go away!");
	say();
labelFunc04E2_01FE:
	message("\"I shall just remain here alone and destitute! Where is my dagger? I shall slit my throat!!\"");
	say();
	UI_remove_answer("changed");
	gflags[0x02A5] = true;
	if (!gflags[0x02A7]) goto labelFunc04E2_021A;
	UI_add_answer("Mole says...");
labelFunc04E2_021A:
	case "Mole says..." attend labelFunc04E2_0248:
	message("\"He said that? Really?\" Blacktooth looks as if he may cry again.~~\"I must go take a look for him. I thank thee, ");
	message(var0004);
	message(", for considering my feelings in this matter.\" Blacktooth gives you a big hug, then turns away to look for Mole.*");
	say();
	UI_remove_answer("Mole says...");
	gflags[0x02A6] = true;
	Func0911(0x0014);
	UI_set_schedule_type(var0003, 0x000C);
	abort;
labelFunc04E2_0248:
	case "bye" attend labelFunc04E2_0253:
	goto labelFunc04E2_0256;
labelFunc04E2_0253:
	goto labelFunc04E2_00D7;
labelFunc04E2_0256:
	endconv;
	if (!(gflags[0x02A6] || (!gflags[0x02A5]))) goto labelFunc04E2_0269;
	message("\"Another time, then.\"*");
	say();
	goto labelFunc04E2_026D;
labelFunc04E2_0269:
	message("\"Yeah, goodbye! Leave! They all leave me alone eventually!\"*");
	say();
labelFunc04E2_026D:
	if (!(event == 0x0000)) goto labelFunc04E2_02ED;
	var0009 = UI_get_schedule_type(UI_get_npc_object(0xFF1E));
	if (!(var0009 == 0x000B)) goto labelFunc04E2_02E7;
	var000A = UI_die_roll(0x0001, 0x0004);
	if (!(var000A == 0x0001)) goto labelFunc04E2_02AA;
	var000B = "@Har!@";
labelFunc04E2_02AA:
	if (!(var000A == 0x0002)) goto labelFunc04E2_02BA;
	var000B = "@Avast!@";
labelFunc04E2_02BA:
	if (!(var000A == 0x0003)) goto labelFunc04E2_02CA;
	var000B = "@Blast!@";
labelFunc04E2_02CA:
	if (!(var000A == 0x0004)) goto labelFunc04E2_02DA;
	var000B = "@Damn parrot droppings...@";
labelFunc04E2_02DA:
	UI_item_say(0xFF1E, var000B);
	goto labelFunc04E2_02ED;
labelFunc04E2_02E7:
	Func092E(0xFF1E);
labelFunc04E2_02ED:
	return;
}


