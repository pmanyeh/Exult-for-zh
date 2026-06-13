#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0919 0x919 ();
extern void Func092E 0x92E (var var0000);

void Func0458 object#(0x458) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc0458_01FE;
	UI_show_npc_face(0xFFA8, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = UI_part_of_day();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0113])) goto labelFunc0458_0048;
	message("You see a handsome, creative-looking young man.");
	say();
	gflags[0x0113] = true;
	goto labelFunc0458_0052;
labelFunc0458_0048:
	message("\"Greetings, ");
	message(var0000);
	message(",\" says Seara.");
	say();
labelFunc0458_0052:
	converse attend labelFunc0458_01F3;
	case "name" attend labelFunc0458_006E:
	message("\"I am called Seara, ");
	message(var0000);
	message(". A pleasure to meet thee.\"");
	say();
	UI_remove_answer("name");
labelFunc0458_006E:
	case "job" attend labelFunc0458_00A5:
	if (!gflags[0x011F]) goto labelFunc0458_0090;
	message("\"I am a member of our local Artist's Guild here in Minoc.\"");
	say();
	UI_add_answer(["Artist's Guild", "Minoc"]);
	goto labelFunc0458_00A5;
labelFunc0458_0090:
	message("\"Please, ");
	message(var0000);
	message(", now is not the time to speak in such a casual way! Why, not far from this very spot there have been not one, but two murders committed!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc0458_00A5:
	case "Artist's Guild" attend labelFunc0458_00C8:
	message("\"Yes, we have an Artist's Guild here in Minoc. I am a member. The other members are Xanthia and Gladstone. Thou canst purchase some of the finest crafts available anywhere in Britannia there. I, for example, make clocks.\"");
	say();
	UI_add_answer(["Xanthia", "Gladstone", "clocks"]);
	UI_remove_answer("Artist's Guild");
labelFunc0458_00C8:
	case "Xanthia" attend labelFunc0458_00DB:
	message("\"Xanthia is a very talented young woman. She makes very elaborate and distinctive candelabras.\"");
	say();
	UI_remove_answer("Xanthia");
labelFunc0458_00DB:
	case "Gladstone" attend labelFunc0458_00EE:
	message("\"Gladstone is a sculptor and a glassblower. He also is in charge of most of the business decisions for the Guild.\"");
	say();
	UI_remove_answer("Gladstone");
labelFunc0458_00EE:
	case "clocks" attend labelFunc0458_0101:
	message("\"I make all types of clocks and watches that tell the time reliably to the second. I would be happy to sell thee one but right now I have a two year backlog to fill.\"");
	say();
	UI_remove_answer("clocks");
labelFunc0458_0101:
	case "Minoc" attend labelFunc0458_0121:
	message("\"Until the monument was to be built and now these murders I believed this town to be a good place to live.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["monument", "murders"]);
labelFunc0458_0121:
	case "murders" attend labelFunc0458_013B:
	message("\"It is horrible. Frederico and Tania were looking for their son, Sasha. He had run away to join the Fellowship. How could this have happened to them?\" Seara slowly shakes his head.");
	say();
	UI_remove_answer("murders");
	UI_add_answer("Sasha");
labelFunc0458_013B:
	case "Sasha" attend labelFunc0458_017B:
	if (!(!gflags[0x00FF])) goto labelFunc0458_0169;
	message("\"I met him a few weeks ago when he came to town looking for the local Fellowship branch. I once let him stay the night at the Guild Hall. He said his father would beat him if he knew he was thinking of joining The Fellowship and I believed him. Sasha's father could be a cruel man. He is basically a good lad, just looking for the truth like a lot of us are. Unfortunately, he is looking in the wrong place.\"");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer(["gypsies", "Fellowship"]);
	gflags[0x00FF] = true;
	goto labelFunc0458_017B;
labelFunc0458_0169:
	message("\"I have not seen or heard of Sasha since we last spoke of him. I do not know if he ever joined The Fellowship.\"");
	say();
	UI_remove_answer("Sasha");
	UI_add_answer("Fellowship");
labelFunc0458_017B:
	case "gypsies" attend labelFunc0458_018E:
	message("\"Their camp is just outside of town. There are not too many of them left. I understand that Sasha's aunt, Margareta, is an amazing fortune teller. For a few gold coins, she can tell thee many things that may be very useful to thee.\"");
	say();
	UI_remove_answer("gypsies");
labelFunc0458_018E:
	case "Fellowship" attend labelFunc0458_01B8:
	if (!var0001) goto labelFunc0458_01A3;
	message("\"No offense intended to thee, but I do not share thy beliefs. In fact I think few of the members of thy Fellowship are sincere in all their talk of unity, trust and worthiness. But Sasha is old enough to make up his mind for himself, though I regret not sending him home that night.\"");
	say();
	goto labelFunc0458_01B1;
labelFunc0458_01A3:
	Func0919();
	message("\"No, I am not a member or anything like that, but I have heard the basic speech from Sasha so many times that I have it memorized. I never tried to dissuade him from joining The Fellowship even though I have no belief in it. I think Sasha is old enough to start making his decisions for himself. Now I truly regret not sending him home the moment I saw him.\"");
	say();
	UI_remove_answer("philosophy");
labelFunc0458_01B1:
	UI_remove_answer("Fellowship");
labelFunc0458_01B8:
	case "monument" attend labelFunc0458_01D2:
	message("\"That shipwright Owen is a self-righteous fool. His statue will be nothing more than a monument to all the hurtful bad feelings he has caused in this town. I cannot believe that such a meaningless and obvious charade\tcould jeopardize our Guild's future.\"");
	say();
	UI_remove_answer("monument");
	UI_add_answer("future");
labelFunc0458_01D2:
	case "future" attend labelFunc0458_01E5:
	message("\"Thou hadst best ask Gladstone about that.\"");
	say();
	UI_remove_answer("future");
labelFunc0458_01E5:
	case "bye" attend labelFunc0458_01F0:
	goto labelFunc0458_01F3;
labelFunc0458_01F0:
	goto labelFunc0458_0052;
labelFunc0458_01F3:
	endconv;
	message("\"A pleasant day to thee, ");
	message(var0000);
	message(". Do come see us again.\"*");
	say();
labelFunc0458_01FE:
	if (!(event == 0x0000)) goto labelFunc0458_020C;
	Func092E(0xFFA8);
labelFunc0458_020C:
	return;
}


