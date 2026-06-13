#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0919 0x919 ();
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func0422 object#(0x422) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc0422_0271;
	UI_show_npc_face(0xFFDE, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFFDE));
	var0002 = UI_wearing_fellowship();
	if (!(var0000 == 0x0007)) goto labelFunc0422_0067;
	var0003 = Func08FC(0xFFDE, 0xFFE6);
	if (!var0003) goto labelFunc0422_0052;
	message("Nanna gives you a stern look for bothering her during The Fellowship meeting, much like the look of an elementary school teacher you once had.*");
	say();
	abort;
	goto labelFunc0422_0067;
labelFunc0422_0052:
	if (!gflags[0x00DA]) goto labelFunc0422_0062;
	message("\"I cannot imagine where Batlin may be. He has never missed a Fellowship meeting!\"");
	say();
	goto labelFunc0422_0067;
	goto labelFunc0422_0067;
labelFunc0422_0062:
	message("\"Oh! Hello! I must not stop to speak now. I am on my way to The Fellowship meeting!\"*");
	say();
	abort;
labelFunc0422_0067:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x00A3])) goto labelFunc0422_0089;
	message("You see a working-class elderly woman who exudes sweetness.");
	say();
	gflags[0x00A3] = true;
	goto labelFunc0422_008D;
labelFunc0422_0089:
	message("\"Yes, may I help thee?\" Nanna asks.");
	say();
labelFunc0422_008D:
	converse attend labelFunc0422_026C;
	case "name" attend labelFunc0422_00A3:
	message("\"Oh, everyone simply calls me 'Nanna'.\"");
	say();
	UI_remove_answer("name");
labelFunc0422_00A3:
	case "job" attend labelFunc0422_00BF:
	message("\"I watch over the Royal Nursery. I am the nanny of these wonderful children.\"");
	say();
	UI_add_answer(["Royal Nursery", "nanny", "children"]);
labelFunc0422_00BF:
	case "Royal Nursery" attend labelFunc0422_013C:
	message("\"There have been a great number of babies born in Britannia in recent years, so Lord British established this nursery. It is nice that the noblemen and noblewomen have this luxury so that they may attend to their daily duties.\"");
	say();
	UI_remove_answer("Royal Nursery");
	UI_add_answer("luxury");
	var0004 = Func08F7(0xFFFE);
	if (!(var0001 == 0x0007)) goto labelFunc0422_0135;
	if (!var0004) goto labelFunc0422_0107;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Whew! Dost thou smell what I smell, Avatar?\"*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc0422_0107:
	var0005 = Func08F7(0xFFFF);
	if (!var0005) goto labelFunc0422_012B;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I believe that is the smell of diapers, boy. When thou art a father one day, thou wilt come to know that smell quite well.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc0422_012B:
	UI_show_npc_face(0xFFDE, 0x0000);
labelFunc0422_0135:
	UI_remove_answer("Royal Nursery");
labelFunc0422_013C:
	case "nanny" attend labelFunc0422_015C:
	message("\"Well, I feed them and change their diapers and read aloud all the books thou dost see lying around. Luckily, I have Sherry to help me.\"");
	say();
	UI_remove_answer("nanny");
	UI_add_answer(["books", "Sherry"]);
labelFunc0422_015C:
	case "books" attend labelFunc0422_016F:
	message("\"Lord British brought them from his homeland. They are very foreign to us here in Britannia, but the children enjoy them just the same.\"");
	say();
	UI_remove_answer("books");
labelFunc0422_016F:
	case "Sherry" attend labelFunc0422_0182:
	message("\"Sherry is a special mouse who has lived here in the castle for many, many years. She recites stories for the children.\"");
	say();
	UI_remove_answer("Sherry");
labelFunc0422_0182:
	case "children" attend labelFunc0422_01B8:
	message("\"They are lovely, are they not? Every day they seem to learn more and more. Most of the time they are a joy.\" Nanna whispers to you conspiratorially, \"And other times I could happily throw them out with the bathwater!\"");
	say();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFFE0));
	if (!(var0006 == 0x0019)) goto labelFunc0422_01B1;
	message("\"The children must be outside playing with Sherry now.\"");
	say();
	UI_add_answer("Sherry");
labelFunc0422_01B1:
	UI_remove_answer("children");
labelFunc0422_01B8:
	case "luxury" attend labelFunc0422_01D2:
	message("\"Yes, I suppose it really is a luxury. The poorer people in Britannia certainly do not have such a service for caring for their children. The rich do have an advantage.\" You detect a hint of bitterness in her voice.");
	say();
	UI_remove_answer("luxury");
	UI_add_answer("advantage");
labelFunc0422_01D2:
	case "advantage" attend labelFunc0422_01F2:
	message("\"I do not mean to complain by any means. I adore my work. But contrary to the thinking of many of the noblemen and women, a class structure exists in Britannia more than ever before. Taxes are unbearable. The rich get richer, and the poor get poorer, as the saying goes.\"");
	say();
	UI_remove_answer("advantage");
	UI_add_answer(["class structure", "taxes"]);
labelFunc0422_01F2:
	case "taxes" attend labelFunc0422_0205:
	message("\"The Britannian Tax Council drains us all dry. Especially the lower and middle classes.\"");
	say();
	UI_remove_answer("taxes");
labelFunc0422_0205:
	case "class structure" attend labelFunc0422_0229:
	message("\"Well, look around! There are rich men who live in opulent castles. And right outside are poor people who live in hovels. Thou dost know how there are winged gargoyles and wingless gargoyles? Well, it seems the human race is getting to be just as divided. There is no unity in the land anymore. It is why I have joined The Fellowship.\"");
	say();
	UI_remove_answer("class structure");
	UI_add_answer(["Fellowship", "philosophy"]);
	gflags[0x0082] = true;
labelFunc0422_0229:
	case "Fellowship" attend labelFunc0422_023B:
	Func0919();
	UI_remove_answer("Fellowship");
labelFunc0422_023B:
	case "philosophy" attend labelFunc0422_025E:
	if (!var0002) goto labelFunc0422_0250;
	message("She notices your medallion. \"But thou dost know all that already!");
	say();
	goto labelFunc0422_0257;
labelFunc0422_0250:
	message("\"Thou shouldst really come to a meeting. Thou wouldst learn a lot!\"");
	say();
	Func091A();
labelFunc0422_0257:
	UI_remove_answer("philosophy");
labelFunc0422_025E:
	case "bye" attend labelFunc0422_0269:
	goto labelFunc0422_026C;
labelFunc0422_0269:
	goto labelFunc0422_008D;
labelFunc0422_026C:
	endconv;
	message("\"Good day! Do come back and visit again soon!\"*");
	say();
labelFunc0422_0271:
	if (!(event == 0x0000)) goto labelFunc0422_027F;
	Func092E(0xFFDE);
labelFunc0422_027F:
	return;
}


