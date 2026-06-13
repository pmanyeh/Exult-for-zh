#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern void Func085B 0x85B ();

void Func04F4 object#(0x4F4) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0001)) goto labelFunc04F4_01A5;
	UI_show_npc_face(0xFF0C, 0x0000);
	var0000 = Func08F7(0xFF03);
	var0001 = Func08F7(0xFF04);
	var0002 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02C8])) goto labelFunc04F4_004C;
	message("The warrior carries himself with confidence.");
	say();
	gflags[0x02C8] = true;
	goto labelFunc04F4_0056;
labelFunc04F4_004C:
	message("\"Hail, ");
	message(var0002);
	message(",\" says Cairbre.");
	say();
labelFunc04F4_0056:
	converse attend labelFunc04F4_019A;
	case "name" attend labelFunc04F4_0072:
	message("\"Thou mayest call me Cairbre, ");
	message(var0002);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc04F4_0072:
	case "job" attend labelFunc04F4_0092:
	message("\"I am a sell-sword. But at the moment, I am trying to help my friend regain his senses.\"");
	say();
	UI_remove_answer("job");
	UI_add_answer(["friend", "senses"]);
labelFunc04F4_0092:
	case "friend" attend labelFunc04F4_00B9:
	message("\"I was not about to let Cosmo venture down here by himself. So, I offered to accompany him, as did Kallibrus.\"");
	say();
	if (!var0001) goto labelFunc04F4_00AB;
	message("He points to the gargoyle.");
	say();
	goto labelFunc04F4_00B2;
labelFunc04F4_00AB:
	UI_add_answer("Kallibrus");
labelFunc04F4_00B2:
	UI_remove_answer("friend");
labelFunc04F4_00B9:
	case "Kallibrus" attend labelFunc04F4_00CC:
	message("\"He is a comrade in arms of mine, and also a friend of Cosmo's. I have yet to meet a more trustworthy companion, for he more than disproves all the rumors about gargoyles.\"");
	say();
	UI_remove_answer("Kallibrus");
labelFunc04F4_00CC:
	case "senses" attend labelFunc04F4_0119:
	message("\"'Tis a long story. Cosmo is looking for the unicorn that supposedly inhabits this cavern.\" He looks you in the eye and shrugs.~~\"He is a fool.\"");
	say();
	if (!var0000) goto labelFunc04F4_0101;
	message("*");
	say();
	UI_show_npc_face(0xFF03, 0x0000);
	message("\"I heard that, Cairbre!\"*");
	say();
	UI_remove_npc_face(0xFF03);
	UI_show_npc_face(0xFF0C, 0x0000);
labelFunc04F4_0101:
	gflags[0x02E0] = true;
	UI_remove_answer("senses");
	UI_add_answer(["unicorn", "fool"]);
labelFunc04F4_0119:
	case "unicorn" attend labelFunc04F4_012C:
	message("\"The unicorn is traditionally a way to prove the purity of a young maiden. However, less commonly known is that it will also reveal a young man's, uh, lack of, um, wild oats.\"");
	say();
	UI_remove_answer("unicorn");
labelFunc04F4_012C:
	case "fool" attend labelFunc04F4_014C:
	message("\"Ophelia does not love him! She simply sent him on this quest to be rid of him. I doubt she expects him to find the unicorn, let alone return to her.\"");
	say();
	UI_remove_answer("fool");
	UI_add_answer(["Ophelia", "rid"]);
labelFunc04F4_014C:
	case "Ophelia" attend labelFunc04F4_015F:
	message("\"He met her in Jhelom. She was serving in the Bunk and Stool. Apparently it was `love at first sight,' as he calls it.\"");
	say();
	UI_remove_answer("Ophelia");
labelFunc04F4_015F:
	case "rid" attend labelFunc04F4_0179:
	message("\"The nature of her request is quite ironic, for I would expect that the unicorn would have shunned her quite some time ago. He is not to her tastes, I would imagine, and, were he to truly know her, she would not be to his. But, alas, love is blind, as they say.\"");
	say();
	UI_add_answer("they");
	UI_remove_answer("rid");
labelFunc04F4_0179:
	case "they" attend labelFunc04F4_018C:
	message("\"I do not know who `they' are, but that is what they say, is it not?\"");
	say();
	UI_remove_answer("they");
labelFunc04F4_018C:
	case "bye" attend labelFunc04F4_0197:
	goto labelFunc04F4_019A;
labelFunc04F4_0197:
	goto labelFunc04F4_0056;
labelFunc04F4_019A:
	endconv;
	message("\"'Til next time, ");
	message(var0002);
	message(".\"*");
	say();
labelFunc04F4_01A5:
	if (!(event == 0x0000)) goto labelFunc04F4_01B0;
	Func085B();
labelFunc04F4_01B0:
	return;
}


