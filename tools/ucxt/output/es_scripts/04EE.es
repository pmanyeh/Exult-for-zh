#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08CA 0x8CA (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);

void Func04EE object#(0x4EE) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04EE_017C;
	UI_show_npc_face(0xFF12, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0145])) goto labelFunc04EE_003C;
	message("The man before you stretches and inhales deeply.");
	say();
	goto labelFunc04EE_0046;
labelFunc04EE_003C:
	message("\"Glorious day, ");
	message(var0000);
	message(".\" Perrin grins.");
	say();
labelFunc04EE_0046:
	converse attend labelFunc04EE_0171;
	case "name" attend labelFunc04EE_0069:
	message("\"Please, ");
	message(var0001);
	message(", call me Perrin. I reside here in Empath Abbey.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Empath Abbey");
labelFunc04EE_0069:
	case "job" attend labelFunc04EE_00BA:
	message("\"I am a scholar, ");
	message(var0001);
	message(". Dost thou want training in the realm of books?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc04EE_00B6;
	message("\"My price is 45 gold for each training session, but I will also teach thee what little I know about magic. Is this acceptable?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc04EE_00A9;
	Func08CA([0x0002, 0x0006], 0x002D);
	goto labelFunc04EE_00B3;
labelFunc04EE_00A9:
	message("\"Very well, ");
	message(var0001);
	message(".\"");
	say();
labelFunc04EE_00B3:
	goto labelFunc04EE_00BA;
labelFunc04EE_00B6:
	message("\"Forgive me, I am a bit overzealous in my search for students. I hope thou wilt return in the future.\"");
	say();
labelFunc04EE_00BA:
	case "Empath Abbey" attend labelFunc04EE_00DD:
	message("\"This is a pleasant location. I like the privacy, which gives me a chance to study when I need to. The Brotherhood is across the road, and I am near a healer. Also, I have begun a study on the effects of dealing with death for undertakers. I am using Tiery as a case study.\"");
	say();
	UI_add_answer(["Brotherhood", "healer", "Tiery"]);
	UI_remove_answer("Empath Abbey");
labelFunc04EE_00DD:
	case "Brotherhood" attend labelFunc04EE_0100:
	message("\"That is the abbey. The monks who reside there are famous for their ability to produce exquisite wine. Nearby is the Highcourt and a prison.\"");
	say();
	UI_remove_answer("Brotherhood");
	UI_add_answer(["wine", "highcourt", "prison"]);
labelFunc04EE_0100:
	case "wine" attend labelFunc04EE_0113:
	message("\"Thou shouldst try some. The monks have been making it for more than three hundred years!\"");
	say();
	UI_remove_answer("wine");
labelFunc04EE_0113:
	case "highcourt" attend labelFunc04EE_0126:
	message("\"The official there is named Sir Jeff. From what I hear, he runs his ship very tight. I do not envy the jailer that works with him. It must be extremely difficult to be near such a strict disciplinarian all day long.\"");
	say();
	UI_remove_answer("highcourt");
labelFunc04EE_0126:
	case "prison" attend labelFunc04EE_0139:
	message("\"It is located just behind the court. And,\" he grins, \"I am proud to say that is at least one thing about which I know nothing.\"");
	say();
	UI_remove_answer("prison");
labelFunc04EE_0139:
	case "Tiery" attend labelFunc04EE_014C:
	message("\"He is the undertaker who lives just north of the Brotherhood.\"");
	say();
	UI_remove_answer("Tiery");
labelFunc04EE_014C:
	case "healer" attend labelFunc04EE_0163:
	message("\"I have yet to meet her, but I know she loves animals. I have seen her playing with the deer and squirrels that inhabit this region.\"");
	say();
	UI_remove_answer("healer");
	gflags[0x013B] = true;
labelFunc04EE_0163:
	case "bye" attend labelFunc04EE_016E:
	goto labelFunc04EE_0171;
labelFunc04EE_016E:
	goto labelFunc04EE_0046;
labelFunc04EE_0171:
	endconv;
	message("\"Goodbye, ");
	message(var0000);
	message(". Best of luck in thy journeys.\"*");
	say();
labelFunc04EE_017C:
	if (!(event == 0x0000)) goto labelFunc04EE_018A;
	Func092E(0xFF12);
labelFunc04EE_018A:
	return;
}


