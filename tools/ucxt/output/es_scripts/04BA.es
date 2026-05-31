#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func092F 0x92F (var var0000);

void Func04BA object#(0x4BA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04BA_023D;
	UI_show_npc_face(0xFF46, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = false;
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!(var0000 == 0x0007)) goto labelFunc04BA_0058;
	var0002 = Func08FC(0xFF46, 0xFF47);
	if (!var0002) goto labelFunc04BA_0053;
	message("\"To have not the time to speak now. To talk after meeting.\"*");
	say();
	goto labelFunc04BA_0057;
labelFunc04BA_0053:
	message("\"To have not the time to speak now. To hurry to Fellowship meeting.\"*");
	say();
labelFunc04BA_0057:
	abort;
labelFunc04BA_0058:
	if (!(!gflags[0x024B])) goto labelFunc04BA_006A;
	message("The gargoyle, a contented grin on his face, greets you with a handshake.");
	say();
	gflags[0x024B] = true;
	goto labelFunc04BA_006E;
labelFunc04BA_006A:
	message("\"To express happiness at your return,\" says Quaeven.");
	say();
labelFunc04BA_006E:
	converse attend labelFunc04BA_0238;
	case "name" attend labelFunc04BA_008B:
	message("\"To be known as Quaeven, human.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Quaeven");
labelFunc04BA_008B:
	case "Quaeven" attend labelFunc04BA_009E:
	message("\"To mean `problem finder.' To be an observant one.");
	say();
	UI_remove_answer("Quaeven");
labelFunc04BA_009E:
	case "job" attend labelFunc04BA_00B7:
	message("\"To be master of the Recreation Facility and Learning Center. To be in charge of much information valuable to the gargoyle race.\"");
	say();
	UI_add_answer(["Recreation Facility", "Learning Center"]);
labelFunc04BA_00B7:
	case "Recreation Facility" attend labelFunc04BA_00CA:
	message("\"To be a good place for gargoyles to go to exercise their muscles. To have many resources available, including stuffed bags to punch and practice fighting skills.\"");
	say();
	UI_remove_answer("Recreation Facility");
labelFunc04BA_00CA:
	case "Learning Center" attend labelFunc04BA_00DD:
	message("\"To be located in the same building as the Recreation Center. To provide an excellent atmosphere for strengthening gargoyle minds. To have a large supply of books and educational material.\"");
	say();
	UI_remove_answer("Learning Center");
labelFunc04BA_00DD:
	case "Fellowship" attend labelFunc04BA_0120:
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc04BA_0100;
	message("\"To be a member, too.\" He holds up his medallion. To have needed The Fellowship to become happy.\"");
	say();
	UI_add_answer("needed The Fellowship");
	goto labelFunc04BA_0119;
labelFunc04BA_0100:
	message("\"To want to know about the organization or the tenets?\"");
	say();
	UI_add_answer("organization");
	if (!(!var0001)) goto labelFunc04BA_0119;
	UI_add_answer("tenets");
labelFunc04BA_0119:
	UI_remove_answer("Fellowship");
labelFunc04BA_0120:
	case "organization" attend labelFunc04BA_013A:
	message("\"To be a group of spiritual seekers striving to reach the highest levels of gargoyle potential. To share with all gargoyles and humans.\"");
	say();
	UI_add_answer("share");
	UI_remove_answer("organization");
labelFunc04BA_013A:
	case "share" attend labelFunc04BA_0162:
	message("\"To share tenets and material well-being.\"");
	say();
	UI_add_answer("material well-being");
	if (!(!var0001)) goto labelFunc04BA_015B;
	UI_add_answer("tenets");
labelFunc04BA_015B:
	UI_remove_answer("share");
labelFunc04BA_0162:
	case "material well-being" attend labelFunc04BA_017C:
	message("\"To support financially and personally a poorhouse in Paws. To organize feasts and festivals in Britannia to help morale. To be a much needed group by all gargoyles and men. To have needed The Fellowship myself!\"");
	say();
	UI_add_answer("needed The Fellowship");
	UI_remove_answer("material well-being");
labelFunc04BA_017C:
	case "tenets" attend labelFunc04BA_019A:
	message("\"To apply an optimistic order of thought through the Triad of Inner Strength.\"");
	say();
	UI_add_answer("Triad");
	var0001 = true;
	UI_remove_answer("tenets");
labelFunc04BA_019A:
	case "Triad" attend labelFunc04BA_01AD:
	message("\"To be the three concepts of Strive for Unity, Trust your Brother, and Worthiness Precedes Reward.\"");
	say();
	UI_remove_answer("Triad");
labelFunc04BA_01AD:
	case "needed The Fellowship" attend labelFunc04BA_01CD:
	message("\"To have had poor life before The Fellowship. To have been pained, ignored, and mistreated by many.~~\"To be happy now in my new life and, to hope to hear the voice soon.\" His eyes widen in excitement. \"To be bringing happiness to another's life soon.\"");
	say();
	UI_add_answer(["voice", "another"]);
	UI_remove_answer("needed The Fellowship");
labelFunc04BA_01CD:
	case "voice" attend labelFunc04BA_01E0:
	message("\"To be a good voice that will help me make choices, and to help win on Buccaneer's Den.\"");
	say();
	UI_remove_answer("voice");
labelFunc04BA_01E0:
	case "another" attend labelFunc04BA_0204:
	message("He continues on, excitedly.~~\"To be working on my first convert. To know the joy and well-being I will bring. To feel content and happy.\"");
	say();
	gflags[0x023E] = true;
	UI_add_answer(["working", "convert"]);
	UI_remove_answer("another");
labelFunc04BA_0204:
	case "working" attend labelFunc04BA_0217:
	message("\"To need a little more persuasion,\" he looks down, \"but to be almost ready to join!\"");
	say();
	UI_remove_answer("working");
labelFunc04BA_0217:
	case "convert" attend labelFunc04BA_022A:
	message("\"To be Betra, the provisioner. To feel confident he will join soon.\"");
	say();
	UI_remove_answer("convert");
labelFunc04BA_022A:
	case "bye" attend labelFunc04BA_0235:
	goto labelFunc04BA_0238;
labelFunc04BA_0235:
	goto labelFunc04BA_006E;
labelFunc04BA_0238:
	endconv;
	message("\"To hope for your well-being and happiness.\"*");
	say();
labelFunc04BA_023D:
	if (!(event == 0x0000)) goto labelFunc04BA_024B;
	Func092F(0xFF46);
labelFunc04BA_024B:
	return;
}


