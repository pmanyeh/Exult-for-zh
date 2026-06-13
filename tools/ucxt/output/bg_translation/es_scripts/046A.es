#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func046A object#(0x46A) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc046A_018C;
	UI_show_npc_face(0xFF96, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0144])) goto labelFunc046A_0040;
	message("You see an unkempt, yet dapper man talking to himself.");
	say();
	gflags[0x0144] = true;
	goto labelFunc046A_004A;
labelFunc046A_0040:
	message("\"Eh, wot's that? Oh, it's you, ");
	message(var0001);
	message(".\"");
	say();
labelFunc046A_004A:
	converse attend labelFunc046A_0181;
	case "name" attend labelFunc046A_0066:
	message("\"M'name's Tiery, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc046A_0066:
	case "job" attend labelFunc046A_007F:
	message("\"Eh, 'ow's that? Oh, m'job. Why, Oi take good care o' me buddies in the graveyard 'ere in Empath Abbey, Oi do.\"");
	say();
	UI_add_answer(["Empath Abbey", "buddies"]);
labelFunc046A_007F:
	case "Empath Abbey" attend labelFunc046A_0099:
	message("\"What do ye mean did Oi 'umpeth Abby. 'Course Oi didn't. Oi never went anywhere near Abby. 'Oo told ye that?\"");
	say();
	UI_add_answer("'Umpeth Abby");
	UI_remove_answer("Empath Abbey");
labelFunc046A_0099:
	case "'Umpeth Abby" attend labelFunc046A_00B2:
	message("\"Empath Abbey? Why, this 'ere's Empath Abbey, ");
	message(var0001);
	message(". Oi don't mean to pry, but if ye knowest not where ye be, why 'ave ye come 'ere?\" He shakes his head. \"It's just as Oi was tellin' Darek the other day, `If ye never want to be lost,' Oi said, `don't ever go nowheres.'\"");
	say();
	UI_remove_answer("'Umpeth Abby");
labelFunc046A_00B2:
	case "buddies" attend labelFunc046A_00D2:
	message("\"What wrong with the bodies? Oi don' do nothing more than bury 'em! A fellow could get in lots o' trouble spreading rumors like that.\"");
	say();
	UI_add_answer(["bury", "bodies"]);
	UI_remove_answer("buddies");
labelFunc046A_00D2:
	case "bury" attend labelFunc046A_00EC:
	message("\"Barry? Oh, 'im. Oi don't know what ye's talkin' about. Oi never met Barry's woife! 'Twas just a lie they's spreadin' about me.\"");
	say();
	UI_remove_answer("bury");
	UI_add_answer("Barry");
labelFunc046A_00EC:
	case "Barry" attend labelFunc046A_00FF:
	message("\"Oi already told ye that's m'job.\"");
	say();
	UI_remove_answer("Barry");
labelFunc046A_00FF:
	case "bodies" attend labelFunc046A_011F:
	message("\"That's right. M'buddies! Oi bury 'em. It's m'job.\" He squints at you. \"Unless, ");
	message(var0001);
	message(", yer askin' about the people 'ere?\"");
	say();
	UI_add_answer("people");
	UI_remove_answer("bodies");
labelFunc046A_011F:
	case "people" attend labelFunc046A_013F:
	message("\"No! Of course Oi don't use peep holes. What sort o' question is that to ask a fellow, ");
	message(var0001);
	message("?\"");
	say();
	UI_add_answer("peep hole");
	UI_remove_answer("people");
labelFunc046A_013F:
	case "peep hole" attend labelFunc046A_0173:
	message("\"Well, Oi only know a few people 'ere, but Oi'll try an' 'elp as best as Oi am able. 'Oo do ye want to know about? My two best friends are Garth an' Darek, but Oi often talk to Nina an' Bart when Oi get the chance.~~");
	say();
	message("\"Recently, that Perrin fellow from across the way 'as been spendin' some toime with me. 'E's a real nice chap. A l'ttle brainy, perhaps, ");
	message(var0001);
	message(", but Oi like 'im just the same. Anyone else ye'd like to know about?\"");
	say();
	if (!Func090A()) goto labelFunc046A_0168;
	message("\"Well, that Perrin fellow'd be a better one to ask than Oi'd be, ");
	message(var0001);
	message(". 'E knows a lot, that one does.\"");
	say();
	goto labelFunc046A_016C;
labelFunc046A_0168:
	message("\"All right then, glad Oi could introduce ye to a few o' my friends.\"");
	say();
labelFunc046A_016C:
	UI_remove_answer("peep hole");
labelFunc046A_0173:
	case "bye" attend labelFunc046A_017E:
	goto labelFunc046A_0181;
labelFunc046A_017E:
	goto labelFunc046A_004A;
labelFunc046A_0181:
	endconv;
	message("\"G'day, ");
	message(var0001);
	message(". 'Ave a pleasant journey. Oi'll tell Malc 'allo for ye.\"*");
	say();
labelFunc046A_018C:
	if (!(event == 0x0000)) goto labelFunc046A_0195;
	abort;
labelFunc046A_0195:
	return;
}


