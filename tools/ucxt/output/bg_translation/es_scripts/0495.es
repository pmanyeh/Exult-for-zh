#game "blackgate"
void Func0495 object#(0x495) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0000)) goto labelFunc0495_0009;
	abort;
labelFunc0495_0009:
	UI_show_npc_face(0xFEE8, 0x0000);
	var0000 = 0x0000;
	var0001 = UI_get_party_list();
	var0002 = 0x0000;
	enum();
labelFunc0495_0027:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc0495_003F;
	var0002 = (var0002 + 0x0001);
	goto labelFunc0495_0027;
labelFunc0495_003F:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02C7])) goto labelFunc0495_00B8;
	message("You see a three-headed hydra. The head on the left speaks.~~ \"Wake up, there is something here.\"");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("The head on the right looks up and at you.~~\"I wonder if it is good to eat.\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("The middle head wakes with a start, sees you, becomes alarmed, and begins to snort excitedly.*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"Fear not, brother; we know it's there.\"*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"I wonder if it talks?\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	gflags[0x02C7] = true;
	goto labelFunc0495_00D9;
labelFunc0495_00B8:
	message("\"We are not talking to thee! We are trying to eat thee!\"*");
	say();
	UI_set_alignment(UI_get_npc_object(0xFF6B), 0x0002);
	UI_set_schedule_type(UI_get_npc_object(0xFF6B), 0x0000);
	abort;
labelFunc0495_00D9:
	converse attend labelFunc0495_0470;
	case "name" attend labelFunc0495_0133:
	message("\"My name is Shandu. My brother next to me is Shanda. My brother next to him is Shando.\"*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"It does not matter what our names are!\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda shakes his head and glares at you.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("name");
	UI_add_answer(["Shandu", "Shanda", "Shando"]);
labelFunc0495_0133:
	case "Shandu" attend labelFunc0495_0146:
	message("\"That is me.\"~~Shandu smiles and licks his lips.~~ \"I like it when my food says my name!\"");
	say();
	UI_remove_answer("Shandu");
labelFunc0495_0146:
	case "Shanda" attend labelFunc0495_0189:
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda rolls his eyes and exhales a puff of smoke from his nostrils.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"Shanda says that thou shouldst refrain from saying his name. He does not like it when his food says his name.\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Shanda");
labelFunc0495_0189:
	case "Shando" attend labelFunc0495_01E1:
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"That is me. I am the oldest brother.\"*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"We are all connected, Shando! Thou cannot be older!\"*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"Mine head was the first to breathe the air.\"*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("Shandu spits.~~\"What does it matter? Our food does not care which of us is the eldest!\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Shando");
labelFunc0495_01E1:
	case "job" attend labelFunc0495_0252:
	message("\"Job?\"");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda opens his mouth wide and emits a burst of flame.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"He thinks that is a joke. Job! Ha! I think it is amusing, too. I have never heard my food tell jokes.\"*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"Ah, but brothers, we -do- have a job.\"*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"We do?\"*");
	say();
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"We guard the Caddellite, do we not? Our purpose in life is to guard the Caddellite!\"");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_add_answer("Caddellite");
labelFunc0495_0252:
	case "Caddellite" attend labelFunc0495_02AC:
	if (!(var0000 == 0x0000)) goto labelFunc0495_029A;
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda becomes excited and snorts as if he were saying several sentences.");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("Caddellite");
	UI_add_answer("What did he say?");
	var0000 = 0x0001;
	goto labelFunc0495_02AC;
labelFunc0495_029A:
	message("\"Thou dost want to know about Caddellite? Very well, I shall tell thee about Caddellite.\"~~The hydra shifts its weight a moment, then grins wickedly.~~\"We are guarding it.\"");
	say();
	UI_remove_answer("Caddellite");
	UI_add_answer("guarding");
labelFunc0495_02AC:
	case "What did he say?" attend labelFunc0495_02C6:
	message("\"He wasn't talking to thee!\"");
	say();
	UI_remove_answer("What did he say?");
	UI_add_answer("Caddellite");
labelFunc0495_02C6:
	case "guarding" attend labelFunc0495_033D:
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"The creature seems to echo everything we say, Shandu.\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda makes a horrid growling noise.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"Shanda says he is hungry!\"*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"So am I!\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"Now that thou dost mention it, I am feeling a few hunger pangs myself. If we did not have to protect the Caddellite, I would eat this creature in a single gulp!\"");
	say();
	UI_remove_answer("guarding");
	UI_add_answer(["echo", "protect"]);
labelFunc0495_033D:
	case "echo" attend labelFunc0495_0388:
	message("\"Hearing this creature repeat whatever we say is making me hungry!\"*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"It amuses me! Obviously it is a creature of severely limited intelligence!\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda lets out a low growl.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"Shanda says he wants something to eat!\"");
	say();
	UI_remove_answer("echo");
labelFunc0495_0388:
	case "protect" attend labelFunc0495_03D6:
	message("\"I suppose we must protect the Caddellite from creatures like thee who come around once every 1000 years or so wanting to take it.\"*");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda growls louder than before, then breathes a bit of fire.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"Creature! Thou art making Shanda angry! He thinks that thou art attempting to steal the Caddellite! Beware!\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE8, 0x0000);
	UI_remove_answer("protect");
	UI_add_answer("steal");
labelFunc0495_03D6:
	case "steal" attend labelFunc0495_045A:
	message("Shandu becomes enraged.~~\"I knew it! It is trying to steal our Caddellite!\"~~Shandu addresses his brothers.~~\"We must not delay any longer.\"*");
	say();
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda roars angrily!*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"That is a good idea, my brother!\"~~Shandu turns to you.~~ [\"This creature vaguely resembles a troll, only it smells a little more pleasant. Dost thou think it might taste better than a troll, Shando?\"*");
	say();
	UI_show_npc_face(0xFEE6, 0x0000);
	message("\"We shall not know until we try!\"*");
	say();
	UI_remove_npc_face(0xFEE6);
	UI_show_npc_face(0xFEE7, 0x0000);
	message("Shanda nods his head furiously, licking his lips.*");
	say();
	UI_remove_npc_face(0xFEE7);
	UI_show_npc_face(0xFEE8, 0x0000);
	message("\"Very well! Let's eat it!\"*");
	say();
	UI_set_alignment(UI_get_npc_object(0xFF6B), 0x0002);
	UI_set_schedule_type(UI_get_npc_object(0xFF6B), 0x0000);
	abort;
labelFunc0495_045A:
	case "bye" attend labelFunc0495_046D:
	message("\"Thou cannot say 'bye' to us! How rude!\"");
	say();
	UI_remove_answer("bye");
labelFunc0495_046D:
	goto labelFunc0495_00D9;
labelFunc0495_0470:
	endconv;
	message("\"Leaving so soon?\"*");
	say();
	return;
}


