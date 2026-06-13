#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func08F7 0x8F7 (var var0000);
extern void Func0859 0x859 ();
extern void Func0858 0x858 ();
extern void Func085A 0x85A ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04E5 object#(0x4E5) ()
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

	if (!(event == 0x0001)) goto labelFunc04E5_02D7;
	UI_show_npc_face(0xFF1B, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1B));
	var0002 = Func0931(0xFE9B, 0x0001, 0x03D5, 0xFE99, 0x0001);
	UI_add_answer(["name", "job", "bye"]);
	if (!(gflags[0x0135] || gflags[0x0104])) goto labelFunc04E5_005D;
	UI_add_answer("Crown Jewel");
labelFunc04E5_005D:
	if (!(!gflags[0x02B2])) goto labelFunc04E5_00D6;
	message("You see a fat, cheerful-looking merchant.");
	say();
	if (!(var0001 == 0x0007)) goto labelFunc04E5_00CB;
	message("\"Hello, hello my friend! Thou dost look like thou needest to spend money!\"*");
	say();
	var0003 = Func08F7(0xFFFD);
	if (!var0003) goto labelFunc04E5_00BE;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"This place looks quite well-off.\"*");
	say();
	UI_remove_npc_face(0xFFFD);
	var0004 = Func08F7(0xFFFF);
	if (!var0004) goto labelFunc04E5_00BE;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"The entire island is very opulent. It is not the same island we once knew.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04E5_00BE:
	UI_show_npc_face(0xFF1B, 0x0000);
	goto labelFunc04E5_00CF;
labelFunc04E5_00CB:
	message("\"Hello! How art thou, my friend?\"");
	say();
labelFunc04E5_00CF:
	gflags[0x02B2] = true;
	goto labelFunc04E5_00DA;
labelFunc04E5_00D6:
	message("\"How may I help thee?\" Budo asks.");
	say();
labelFunc04E5_00DA:
	converse attend labelFunc04E5_02D2;
	case "name" attend labelFunc04E5_00F0:
	message("\"Budo the Fourth at thy service! 'Tis a fine day today, is it not?\"");
	say();
	UI_remove_answer("name");
labelFunc04E5_00F0:
	case "job" attend labelFunc04E5_0159:
	if (!(var0001 == 0x0007)) goto labelFunc04E5_012A;
	var0005 = "thou hast come to the right place!@";
	var0006 = "";
	var0007 = "";
	UI_add_answer(["weapons", "armour", "provisions", "ship deed"]);
	goto labelFunc04E5_013C;
labelFunc04E5_012A:
	var0005 = "thou shouldst come to my shoppe when ";
	var0006 = "it is open! I would be so pleased to ";
	var0007 = "help thee then.@";
labelFunc04E5_013C:
	message("\"I am a provisioner, like my father before me, and like his father before him, and like his father before him. Budo's is an island tradition! Just as The Fellowship will be someday!~~\"If thou art interested in weapons, armour, provisions, or a ship deed, ");
	message(var0005);
	message("");
	message(var0006);
	message("");
	message(var0007);
	message("");
	say();
	UI_add_answer("Fellowship");
labelFunc04E5_0159:
	case "armour" attend labelFunc04E5_0168:
	message("\"Budo's carries nothing but the finest quality armour in all Britannia. I have all the best types of equipment available.\"");
	say();
	Func0859();
labelFunc04E5_0168:
	case "weapons" attend labelFunc04E5_0177:
	message("\"Budo's offers thee excellent weaponry with superb craftsmanship. Thou wilt not find a better buy for thy money anywhere else!\"");
	say();
	Func0858();
labelFunc04E5_0177:
	case "provisions" attend labelFunc04E5_0186:
	message("\"Budo's also carries a variety of useful things for thy convenience.\"");
	say();
	Func085A();
labelFunc04E5_0186:
	case "ship deed" attend labelFunc04E5_0214:
	if (!gflags[0x02B6]) goto labelFunc04E5_019B;
	message("\"But I have already sold thee the deed to 'The Lusty Wench'! She was the only ship I had at this particular time! I am sorry!\"");
	say();
	goto labelFunc04E5_020D;
labelFunc04E5_019B:
	message("\"I can sell thee the deed to my ship 'The Lusty Wench.' She is beautiful, my friend. She is guaranteed to last and is the sleekest vessel on the seas! She goes for 800 gold. Want her?\"");
	say();
	if (!Func090A()) goto labelFunc04E5_0209;
	var0008 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0008 >= 0x0320)) goto labelFunc04E5_0202;
	var0009 = UI_add_party_items(0x0001, 0x031D, 0x0012, 0x0002, false);
	if (!var0009) goto labelFunc04E5_01FB;
	message("\"A wise move. A magnificent ship for thee!\" He takes your gold.");
	say();
	var000A = UI_remove_party_items(0x0320, 0x0284, 0xFE99, 0xFE99, true);
	gflags[0x02B6] = true;
	goto labelFunc04E5_01FF;
labelFunc04E5_01FB:
	message("\"Thou art carrying too much, my friend! Unload thyself of some of thy belongings and I will sell thee the deed to this beautiful ship.\"");
	say();
labelFunc04E5_01FF:
	goto labelFunc04E5_0206;
labelFunc04E5_0202:
	message("\"But thou dost not have enough gold! Perhaps thou shouldst visit the House of Games and increase the bulges in thy pockets!\"");
	say();
labelFunc04E5_0206:
	goto labelFunc04E5_020D;
labelFunc04E5_0209:
	message("\"But thou wilt never see a ship like this one anywhere in the world! Too bad!\"");
	say();
labelFunc04E5_020D:
	UI_remove_answer("ship deed");
labelFunc04E5_0214:
	case "Fellowship" attend labelFunc04E5_0237:
	message("\"The Fellowship has helped me to become a very rich man! Although the business is an inherited enterprise, I owe everything to The Fellowship!\"");
	say();
	UI_remove_answer("Fellowship");
	UI_add_answer(["rich man", "inherited", "everything"]);
labelFunc04E5_0237:
	case "rich man" attend labelFunc04E5_0251:
	message("\"My great-grandfather started this business many, many years ago. He was moderately successful, thanks to the Thieves' Guild. But that era has passed.\"");
	say();
	UI_add_answer("Thieves' Guild");
	UI_remove_answer("rich man");
labelFunc04E5_0251:
	case "inherited" attend labelFunc04E5_0264:
	message("\"My great-grandfather passed the shoppe on to his son, and so forth, down to me. We are born merchants! That is why I know why thou hast come to Budo's! Thou wantest to become a part of the great Budo Legacy! Thou dost need to buy something!\"");
	say();
	UI_remove_answer("inherited");
labelFunc04E5_0264:
	case "everything" attend labelFunc04E5_027E:
	message("\"There was a period shortly after my father died, just as I had inherited the shoppe, when business was poor. There was a danger that I would not be able to keep the shoppe open. But The Fellowship convinced me that I should join them. I proved my worthiness and The Fellowship helped me financially.\"");
	say();
	UI_remove_answer("everything");
	UI_add_answer("worthiness");
labelFunc04E5_027E:
	case "worthiness" attend labelFunc04E5_0291:
	message("\"I do not mind telling thee. The Fellowship shares in one half of my profit.\"");
	say();
	UI_remove_answer("worthiness");
labelFunc04E5_0291:
	case "Thieves' Guild" attend labelFunc04E5_02A4:
	message("\"It is no more. They dwindled away during my grandfather's time. By the time The Fellowship arrived, when I was a boy, there was no trace of them except in family mementos. Even the pirates are different.\"");
	say();
	UI_remove_answer("Thieves' Guild");
labelFunc04E5_02A4:
	case "Crown Jewel" attend labelFunc04E5_02C4:
	if (!var0002) goto labelFunc04E5_02B9;
	message("The cube vibrates a moment.~~\"That ship sails here frequently. I know it makes regular runs to the mainland, stops here, then moves on to the Isle of the Avatar the next morning. Then it repeats the trip, going the other direction.\"");
	say();
	goto labelFunc04E5_02BD;
labelFunc04E5_02B9:
	message("\"It stops here regularly. Don't know much more about it. The crew is very secretive.\" Budo looks away, obviously not wanting to talk about the ship.");
	say();
labelFunc04E5_02BD:
	UI_remove_answer("Crown Jewel");
labelFunc04E5_02C4:
	case "bye" attend labelFunc04E5_02CF:
	goto labelFunc04E5_02D2;
labelFunc04E5_02CF:
	goto labelFunc04E5_00DA;
labelFunc04E5_02D2:
	endconv;
	message("\"I hope I can help thee again some time, my friend!\"*");
	say();
labelFunc04E5_02D7:
	if (!(event == 0x0000)) goto labelFunc04E5_035E;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF1B));
	var000B = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0007)) goto labelFunc04E5_0358;
	if (!(var000B == 0x0001)) goto labelFunc04E5_031B;
	var000C = "@Weapons? Armour?@";
labelFunc04E5_031B:
	if (!(var000B == 0x0002)) goto labelFunc04E5_032B;
	var000C = "@Provisions here!@";
labelFunc04E5_032B:
	if (!(var000B == 0x0003)) goto labelFunc04E5_033B;
	var000C = "@Budo's is open for business!@";
labelFunc04E5_033B:
	if (!(var000B == 0x0004)) goto labelFunc04E5_034B;
	var000C = "@Step right in! We're open!@";
labelFunc04E5_034B:
	UI_item_say(0xFF1B, var000C);
	goto labelFunc04E5_035E;
labelFunc04E5_0358:
	Func092E(0xFF1B);
labelFunc04E5_035E:
	return;
}


