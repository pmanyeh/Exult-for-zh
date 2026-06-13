#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0494 object#(0x494) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	var0000 = Func097D(0xFE9B, 0x0001, 0x01DF, 0xFE99, 0x0002);
	if (!(event == 0x0001)) goto labelFunc0494_0043;
	UI_item_say(0xFE9C, "@Hail there, Gwani person.@");
	0xFF6C->Func07D1();
	Func097F(0xFF6C, "@Hello there, Avatar!@", 0x0003);
	UI_set_schedule_type(0xFF6C, 0x0003);
labelFunc0494_0043:
	if (!(event == 0x0009)) goto labelFunc0494_036F;
	UI_run_schedule(0xFF6C);
	UI_clear_item_say(0xFF6C);
	UI_show_npc_face0(0xFF6C, 0x0000);
	var0001 = Func097D(0xFE9B, 0x0001, 0x032A, 0x0009, 0x0002);
	var0002 = UI_get_item_flag(0xFF6C, 0x001C);
	UI_add_answer(["name", "bye"]);
	if (!var0001) goto labelFunc0494_009F;
	UI_add_answer("got blood");
labelFunc0494_009F:
	if (!var0002) goto labelFunc0494_00AC;
	message("\"It is thee again!\"");
	say();
	goto labelFunc0494_00B7;
labelFunc0494_00AC:
	message("\"Thou must be one Gwenno spoke of!\"");
	say();
	UI_add_answer("Gwenno");
labelFunc0494_00B7:
	if (!(gflags[0x025D] && gflags[0x0260])) goto labelFunc0494_00C8;
	UI_add_answer("valuable secret");
labelFunc0494_00C8:
	if (!gflags[0x0004]) goto labelFunc0494_00DC;
	if (!(!gflags[0x0263])) goto labelFunc0494_00DC;
	UI_add_answer("Where are the other Gwani?");
labelFunc0494_00DC:
	if (!(var0000 && (!gflags[0x025E]))) goto labelFunc0494_00EE;
	UI_add_answer("Here is the amulet.");
labelFunc0494_00EE:
	converse attend labelFunc0494_036E;
	case "Here is the amulet." attend labelFunc0494_0137:
	UI_remove_answer("Here is the amulet.");
	message("\"Many thanks for returning this, Avatar.\"");
	say();
	message("\"Here something to reward good deed.\"");
	say();
	var0003 = UI_remove_party_items(0x0001, 0x01DF, 0xFE99, 0x0002, false);
	var0004 = Func099B(0xFE9C, 0x0001, 0x022F, 0xFE99, 0x0000, false, true);
	gflags[0x025E] = true;
labelFunc0494_0137:
	case "name" attend labelFunc0494_0167:
	message("\"I am Yenani, mate of Myauri, mother of Neyobi and Kapyundi, leader of Gwani people and teller of Gwani history.\"");
	say();
	UI_set_item_flag(0xFF6C, 0x001C);
	UI_remove_answer("name");
	UI_add_answer(["Myauri", "Neyobi", "Kapyundi", "history"]);
labelFunc0494_0167:
	case "history" attend labelFunc0494_017A:
	UI_remove_answer("history");
	message("\"Many years ago the Gwani ruled these icy lands with the Great Horn of the Gwani. It was a powerful tool of balance that could make the ice dance. But we lost the Great Horn of the Gwani when it was stolen from us by a stranger who came in the night. He took the Horn to the place men call Skullcrusher. We have since found that we Gwani do not need it to live in balance with the universe. May it go to whoever has the good fortune of finding it.\"");
	say();
labelFunc0494_017A:
	case "Myauri" attend labelFunc0494_018D:
	message("\"Long have Gwani been led by my wisdom, and hunting skills of mate Myauri. Together we are heart and soul of Gwani people.\"");
	say();
	UI_remove_answer("Myauri");
labelFunc0494_018D:
	case "Kapyundi" attend labelFunc0494_01A0:
	message("\"He is proud and skilled hunter.\"");
	say();
	UI_remove_answer("Kapyundi");
labelFunc0494_01A0:
	case "Neyobi" attend labelFunc0494_01EC:
	UI_remove_answer("Neyobi");
	var0005 = UI_get_item_flag(0xFF6D, 0x001E);
	if (!var0005) goto labelFunc0494_01D0;
	message("\"My daughter have severe fever. She dying and only thou canst save her!\"");
	say();
	UI_add_answer("save Neyobi");
	goto labelFunc0494_01EC;
labelFunc0494_01D0:
	message("\"I thank thee for bringing the one thing that could save daughter.\"");
	say();
	if (!gflags[0x025D]) goto labelFunc0494_01E8;
	message("\"To reward thee I can shall give thee a valuable secret.\"");
	say();
	UI_add_answer("valuable secret");
	goto labelFunc0494_01EC;
labelFunc0494_01E8:
	message("\"Remember that the Gwani people are in thy debt. Perhaps we shall be able to reward thee one day.\"");
	say();
labelFunc0494_01EC:
	case "save Neyobi" attend labelFunc0494_01FF:
	message("\"Talk to Baiyanda, healer of our people. She will know what to do.\"");
	say();
	UI_remove_answer("save Neyobi");
labelFunc0494_01FF:
	case "valuable secret" attend labelFunc0494_0223:
	if (!gflags[0x0260]) goto labelFunc0494_0218;
	message("\"For thy aid to my people, I present to thee this gift of knowledge. Here is the secret for travelling through Skullcrusher Mountains -- When thou dost reach this place, remember the phrase: @Isal Sal Cra Gaas Iskar.@ Skullcrusher is south of\tour village. At mountains go westward and follow all way round. There is a cave like any other there. But inside are five pillars and five serpent runestones and a man of metal guards this place.\"");
	say();
	gflags[0x0265] = true;
	goto labelFunc0494_021C;
labelFunc0494_0218:
	message("\"I shall give to thee the secret for passing through the mountains of Skullcrusher, which is what one must do to reach the lands farther to the north.\"");
	say();
labelFunc0494_021C:
	UI_remove_answer("valuable secret");
labelFunc0494_0223:
	case "Gwenno" attend labelFunc0494_025F:
	var0006 = UI_get_schedule_type(0xFF6B);
	if (!(var0006 == 0x000F)) goto labelFunc0494_0254;
	message("\"Gwenno was good friend to us. She spent weeks teaching me human language. Over time I slowly teaching others.\tMany days we have mourned death of good woman Gwenno. She horribly killed by men of one we call The Trapper. She spoke of thee often.\"");
	say();
	gflags[0x0262] = true;
	UI_add_answer(["Spoke of me?"]);
	goto labelFunc0494_0258;
labelFunc0494_0254:
	message("\"We of Gwani overjoyed to learn Gwenno's resurrection.\"");
	say();
labelFunc0494_0258:
	UI_remove_answer("Gwenno");
labelFunc0494_025F:
	case "Spoke of me?" attend labelFunc0494_0272:
	UI_remove_answer("Spoke of me?");
	message("\"She spoke of one called the Avatar. She said one called the Avatar would come and return her to her mate. She also said Avatar would save Gwani from extinction.\"");
	say();
labelFunc0494_0272:
	case "Gwani" attend labelFunc0494_0292:
	message("\"We are peaceful people and chose to live apart from races of goblins and humanity.\"");
	say();
	UI_add_answer(["goblins", "humanity"]);
	UI_remove_answer("Gwani");
labelFunc0494_0292:
	case "goblins" attend labelFunc0494_02A5:
	message("\"Goblins hunt us without mercy. Hatred for us almost greater than hatred for humans.\"");
	say();
	UI_remove_answer("goblins");
labelFunc0494_02A5:
	case "humanity" attend labelFunc0494_02BF:
	message("\"Humans also hunt us, although fewer of them than goblins. Still, one human menaces us and being greatest single threat to our race.  This is man we know only as the Trapper.\"");
	say();
	UI_remove_answer("humanity");
	UI_add_answer("The Trapper");
labelFunc0494_02BF:
	case "got blood" attend labelFunc0494_0316:
	UI_remove_answer("got blood");
	message("\"Thou brought blood of Ice Dragon! I must have!\"");
	say();
	var0007 = UI_remove_party_items(0x0001, 0x032A, 0x0009, 0x0002, false);
	if (!var0007) goto labelFunc0494_0312;
	message("\"Daughter can be saved! I thank thee.\"");
	say();
	if (!gflags[0x025D]) goto labelFunc0494_0301;
	message("\"Now, as I promised I reward thee with a valuable secret.\"");
	say();
	UI_add_answer("valuable secret");
labelFunc0494_0301:
	gflags[0x0260] = true;
	UI_clear_item_flag(0xFF6D, 0x001E);
	goto labelFunc0494_0316;
labelFunc0494_0312:
	message("\"Thou must give me the blood of an ice dragon so I save daughter.\"");
	say();
labelFunc0494_0316:
	case "The Trapper" attend labelFunc0494_0329:
	message("\"He is human called Hazard. He lives in cave north on Ice Plains. I fear he not stop hunt us until he hunt us to extinction.\"");
	say();
	UI_remove_answer("The Trapper");
labelFunc0494_0329:
	case "Where are the other Gwani?" attend labelFunc0494_0340:
	UI_remove_answer("Where are the other Gwani?");
	message("\"We were attacked by the Trapper! All of our tribe dead except Myauri, Neyobi and myself. I want to give thee magical serpent tooth, but it in amulet of Baiyanda. Amulet is now with the Trapper. Thou find his lair north, in cave along mountains.\"");
	say();
	gflags[0x0261] = true;
labelFunc0494_0340:
	case "bye" attend labelFunc0494_036B:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "@Be safe, my friend.@", 0x0001);
	Func097F(0xFF6C, "@And thee, as well.@", 0x0005);
	goto labelFunc0494_036E;
labelFunc0494_036B:
	goto labelFunc0494_00EE;
labelFunc0494_036E:
	endconv;
labelFunc0494_036F:
	return;
}


