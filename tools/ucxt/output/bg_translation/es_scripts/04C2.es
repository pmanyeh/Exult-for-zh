#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A1 0x8A1 ();

void Func04C2 object#(0x4C2) ()
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
	var var000C;

	if (!(event == 0x0001)) goto labelFunc04C2_02B0;
	UI_show_npc_face(0xFF3E, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x026B])) goto labelFunc04C2_0044;
	message("The woman greets you with a curtsey.");
	say();
	gflags[0x026B] = true;
	goto labelFunc04C2_004E;
labelFunc04C2_0044:
	message("\"Good day, ");
	message(var0001);
	message(",\" says Lady Jehanne.");
	say();
labelFunc04C2_004E:
	if (!gflags[0x027C]) goto labelFunc04C2_006A;
	if (!(gflags[0x025C] && (!gflags[0x025D]))) goto labelFunc04C2_006A;
	UI_add_answer("commons");
	var0002 = true;
labelFunc04C2_006A:
	converse attend labelFunc04C2_02AF;
	case "name" attend labelFunc04C2_00A3:
	message("\"I am the Lady Jehanne, ");
	message(var0001);
	message(".\"");
	say();
	gflags[0x027C] = true;
	UI_remove_answer("name");
	if (!(gflags[0x025C] && (!gflags[0x025D]))) goto labelFunc04C2_00A3;
	if (!(!var0002)) goto labelFunc04C2_00A3;
	UI_add_answer("commons");
labelFunc04C2_00A3:
	case "job" attend labelFunc04C2_00CE:
	message("\"I am the provisioner of Serpent's Hold.\"");
	say();
	if (!(!gflags[0x0274])) goto labelFunc04C2_00C1;
	message("\"And,\" she adds, \"I also have a ship for sale shouldst thou be interested in that.\"");
	say();
	UI_add_answer("ship");
labelFunc04C2_00C1:
	UI_add_answer(["Serpent's Hold", "provisions"]);
labelFunc04C2_00CE:
	case "ship" attend labelFunc04C2_0167:
	message("\"Well, it was once the magnificent `Constellation.' However, 'twas destroyed by the ship's captain, himself, to prevent it from falling into the hands of attacking pirates. What little remained was rebuilt into an even finer ship, `The Dragon's Breath?' Art thou interested in purchasing it for 600 gold?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04C2_0156;
	var0004 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0004 >= 0x0258)) goto labelFunc04C2_0149;
	var0005 = UI_add_party_items(0x0001, 0x031D, 0x0013, 0xFE99, false);
	if (!var0005) goto labelFunc04C2_013C;
	message("\"Here is thy deed.\"");
	say();
	var0006 = UI_remove_party_items(0x0258, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x0274] = true;
	goto labelFunc04C2_0146;
labelFunc04C2_013C:
	message("\"Sadly, ");
	message(var0001);
	message(", thou hast not the room for this deed.\"");
	say();
labelFunc04C2_0146:
	goto labelFunc04C2_0153;
labelFunc04C2_0149:
	message("\"I understand, ");
	message(var0001);
	message(", thou hast not the funds at this time.\"");
	say();
labelFunc04C2_0153:
	goto labelFunc04C2_0160;
labelFunc04C2_0156:
	message("\"Perhaps sometime in the future, ");
	message(var0001);
	message(".\"");
	say();
labelFunc04C2_0160:
	UI_remove_answer("ship");
labelFunc04C2_0167:
	case "Serpent's Hold" attend labelFunc04C2_0187:
	message("\"Most of us here are knights, noble warriors sworn to protect Britannia and Lord British. Mine own lord,\" she beams with pride, \"is such a knight -- Sir Pendaran.\"");
	say();
	UI_remove_answer("Serpent's Hold");
	UI_add_answer(["Sir Pendaran", "knights"]);
labelFunc04C2_0187:
	case "Sir Pendaran" attend labelFunc04C2_01A7:
	message("\"We met three years ago. He's quite brave and strong. I just love to watch him fight.\" She smiles.~~\"I am not really sure he will mix well with the rest of The Fellowship, though.\"");
	say();
	UI_remove_answer("Sir Pendaran");
	UI_add_answer(["fight", "Fellowship"]);
labelFunc04C2_01A7:
	case "fight" attend labelFunc04C2_01C7:
	message("\"He and Menion used to spar together, after their exercises. 'Twas a beautiful... sight, ");
	message(var0001);
	message(",\" she says, blushing.");
	say();
	UI_remove_answer("fight");
	UI_add_answer("used to");
labelFunc04C2_01C7:
	case "used to" attend labelFunc04C2_01DA:
	message("\"At the time, Pendaran was the only man who could keep up with Menion. Now that Menion has begun instructing others, he no longer has the time to practice with my Lord.\"");
	say();
	UI_remove_answer("used to");
labelFunc04C2_01DA:
	case "Fellowship" attend labelFunc04C2_0201:
	var0007 = UI_wearing_fellowship();
	if (!var0007) goto labelFunc04C2_01F6;
	message("\"Well, er, I mean, he would not have mixed well -before- he joined, that is,\" she stammers.");
	say();
	goto labelFunc04C2_01FA;
labelFunc04C2_01F6:
	message("\"It's nothing really. He was just a little bit more... individualistic before he joined. I do not think there's anything wrong with The Fellowship, necessarily; but I did not expect it to be something that would capture Pendaran's interest.\"");
	say();
labelFunc04C2_01FA:
	UI_remove_answer("Fellowship");
labelFunc04C2_0201:
	case "knights" attend labelFunc04C2_0214:
	message("With but a few exceptions, myself included, all of the warriors here in the Hold are knights. Thou mayest wish to speak with Lord John-Paul. He is in charge of Serpent's Hold and might be better able to show thee around.");
	say();
	UI_remove_answer("knights");
labelFunc04C2_0214:
	case "provisions" attend labelFunc04C2_0262:
	var0008 = UI_get_schedule_type(UI_get_npc_object(0xFF3E));
	if (!(var0008 == 0x0007)) goto labelFunc04C2_0257;
	message("\"Thou wishest to buy something?\"");
	say();
	var0009 = Func090A();
	if (!var0009) goto labelFunc04C2_024A;
	Func08A1();
	goto labelFunc04C2_0254;
labelFunc04C2_024A:
	message("\"Well, perhaps next time, ");
	message(var0001);
	message(".\"");
	say();
labelFunc04C2_0254:
	goto labelFunc04C2_025B;
labelFunc04C2_0257:
	message("\"A better time to buy would be when my shop is open.\"");
	say();
labelFunc04C2_025B:
	UI_remove_answer("provisions");
labelFunc04C2_0262:
	case "commons" attend labelFunc04C2_0280:
	message("For an instant, you see indecisiveness in her expression, then she suddenly gives in, her words coming out in a torrent of information.~~\"I am afraid to speak, but knowing thou wouldst see through any facade, I can no longer silence the truth. My Lord, Sir Pendaran, has not been the same gentle soul since he joined the Fellowship.~~\"'Twas not too long ago that my Pendaran was a noble knight, one a lady could be proud of. But now,\" she shakes her head, \"in protest of a wrong he perceives in Britannia's government, he has defaced the statue of our beloved Lord British.\" She begins to sob.~~\"And, he has battled and wounded a fellow knight who chanced upon him during his hour of misdeed. He came to me,\" she tries to choke back her tears, \"with another's blood on his sword!\"~~After a few moments of your comforting, she regains her composure.~~\"Please do not be too harsh with him,\" she begs.");
	say();
	gflags[0x025D] = true;
	UI_remove_answer("commons");
	UI_add_answer("another");
labelFunc04C2_0280:
	case "another" attend labelFunc04C2_0299:
	message("\"I know not who, ");
	message(var0001);
	message(", and Pendaran would not say!\"");
	say();
	UI_remove_answer("another");
labelFunc04C2_0299:
	case "bye" attend labelFunc04C2_02AC:
	message("\"May fortune follow thee, ");
	message(var0001);
	message(".\"*");
	say();
	abort;
labelFunc04C2_02AC:
	goto labelFunc04C2_006A;
labelFunc04C2_02AF:
	endconv;
labelFunc04C2_02B0:
	if (!(event == 0x0000)) goto labelFunc04C2_0378;
	var000A = UI_part_of_day();
	var0008 = UI_get_schedule_type(UI_get_npc_object(0xFF3E));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0008 == 0x0007)) goto labelFunc04C2_0324;
	if (!(var000B == 0x0001)) goto labelFunc04C2_02F4;
	var000C = "@Provisions!@";
labelFunc04C2_02F4:
	if (!(var000B == 0x0002)) goto labelFunc04C2_0304;
	var000C = "@Buy in advance!@";
labelFunc04C2_0304:
	if (!(var000B == 0x0003)) goto labelFunc04C2_0314;
	var000C = "@Best provisions in town!@";
labelFunc04C2_0314:
	if (!(var000B == 0x0004)) goto labelFunc04C2_0324;
	var000C = "@Be equipped!@";
labelFunc04C2_0324:
	if (!(var0008 == 0x001A)) goto labelFunc04C2_036E;
	if (!(var000B == 0x0001)) goto labelFunc04C2_033E;
	var000C = "@Wondrous fine food!@";
labelFunc04C2_033E:
	if (!(var000B == 0x0002)) goto labelFunc04C2_034E;
	var000C = "@Fine drink!@";
labelFunc04C2_034E:
	if (!(var000B == 0x0003)) goto labelFunc04C2_035E;
	var000C = "@Mmmmm...@";
labelFunc04C2_035E:
	if (!(var000B == 0x0004)) goto labelFunc04C2_036E;
	var000C = "@I am full.@";
labelFunc04C2_036E:
	UI_item_say(0xFF3E, var000C);
labelFunc04C2_0378:
	return;
}


