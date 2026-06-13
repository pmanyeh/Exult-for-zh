#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();

void Func046F object#(0x46F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc046F_0148;
	UI_show_npc_face(0xFF91, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0149])) goto labelFunc046F_003C;
	message("You see a troll, sulking in his cell. As he breathes, you can see his ribs protrude out from under his hide.");
	say();
	goto labelFunc046F_0040;
labelFunc046F_003C:
	message("\"What you want?\" growls Gharl.");
	say();
labelFunc046F_0040:
	converse attend labelFunc046F_0143;
	case "name" attend labelFunc046F_0056:
	message("\"I Gharl.\"");
	say();
	UI_remove_answer("name");
labelFunc046F_0056:
	case "job" attend labelFunc046F_0072:
	message("He shakes his head. \"No job. Hunt. Eat. Sleep. Now,\" he gestures around the cell, \"no hunt, no eat, just sleep.\"");
	say();
	UI_add_answer(["hunt", "eat", "sleep"]);
labelFunc046F_0072:
	case "hunt" attend labelFunc046F_0085:
	message("\"I good hunter. Catch many things.\"");
	say();
	UI_remove_answer("hunt");
labelFunc046F_0085:
	case "sleep" attend labelFunc046F_009F:
	message("\"I still do that,\" he says, shrugging. \"But not as good as when home.\"");
	say();
	UI_remove_answer("sleep");
	UI_add_answer("home");
labelFunc046F_009F:
	case "home" attend labelFunc046F_00B2:
	message("He stares at you oddly and says, \"With other trolls, fleshface! Under bridges.\"");
	say();
	UI_remove_answer("home");
labelFunc046F_00B2:
	case "eat" attend labelFunc046F_00CC:
	message("\"No eat.\" He shakes his head. \"Not feed. Hate jailer!\" he growls.");
	say();
	UI_remove_answer("eat");
	UI_add_answer("offer food");
labelFunc046F_00CC:
	case "offer food" attend labelFunc046F_0122:
	message("\"You give me food?\" His face displays a mixture of surprise and hope. \"You give me food, I tell you secret. Yes?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc046F_0116;
	var0003 = UI_remove_party_items(0x0001, 0x0179, 0xFE99, 0xFE99, 0x0000);
	if (!var0003) goto labelFunc046F_010E;
	message("He quickly devours the food.~~\"I thank. You want secret?\"");
	say();
	UI_add_answer("secret");
	goto labelFunc046F_0113;
labelFunc046F_010E:
	message("\"You taunt me. I not like you.\"*");
	say();
	abort;
labelFunc046F_0113:
	goto labelFunc046F_011B;
labelFunc046F_0116:
	message("\"Go away.\"*");
	say();
	abort;
labelFunc046F_011B:
	UI_remove_answer("offer food");
labelFunc046F_0122:
	case "secret" attend labelFunc046F_0135:
	message("\"Trolls have powerful ally. He warn us in head when trouble around corner.\"");
	say();
	UI_remove_answer("secret");
labelFunc046F_0135:
	case "bye" attend labelFunc046F_0140:
	goto labelFunc046F_0143;
labelFunc046F_0140:
	goto labelFunc046F_0040;
labelFunc046F_0143:
	endconv;
	message("He grunts and turns away.*");
	say();
labelFunc046F_0148:
	if (!(event == 0x0000)) goto labelFunc046F_0151;
	abort;
labelFunc046F_0151:
	return;
}


