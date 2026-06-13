#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();

void Func04F1 object#(0x4F1) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0000)) goto labelFunc04F1_0009;
	abort;
labelFunc04F1_0009:
	UI_show_npc_face(0xFF0F, 0x0000);
	if (!gflags[0x02D3]) goto labelFunc04F1_001E;
	message("\"Go away, bee killers!\"*");
	say();
	abort;
labelFunc04F1_001E:
	var0000 = false;
	var0001 = Func08F7(0xFFF6);
	var0002 = Func08F7(0xFFFF);
	if (!gflags[0x02D4]) goto labelFunc04F1_003E;
	var0000 = true;
labelFunc04F1_003E:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02BF])) goto labelFunc04F1_0060;
	message("You see a naked man who looks a bit wild. He is not in the least concerned that he has on no clothes.");
	say();
	gflags[0x02BF] = true;
	goto labelFunc04F1_0064;
labelFunc04F1_0060:
	message("\"Huh?\" asks Papa.");
	say();
labelFunc04F1_0064:
	converse attend labelFunc04F1_02C4;
	case "name" attend labelFunc04F1_008E:
	if (!var0000) goto labelFunc04F1_007C;
	message("\"I am Murray.\"");
	say();
	goto labelFunc04F1_0080;
labelFunc04F1_007C:
	message("\"Me Papa!\" The man grins, revealing several missing teeth. He nonchalantly scratches his behind.");
	say();
labelFunc04F1_0080:
	UI_remove_answer("name");
	UI_add_answer("Where are thy clothes?");
labelFunc04F1_008E:
	case "job" attend labelFunc04F1_00B4:
	if (!var0000) goto labelFunc04F1_00A3;
	message("\"Hey, what job? I am having a great time here. Leave me alone!\"");
	say();
	goto labelFunc04F1_00A7;
labelFunc04F1_00A3:
	message("The man looks confused. \"Job? Me no job. Me live. Me live here with Mama. No need job. Cave provides all.\"");
	say();
labelFunc04F1_00A7:
	UI_add_answer(["Mama", "cave"]);
labelFunc04F1_00B4:
	case "Where are thy clothes?" attend labelFunc04F1_00D4:
	if (!var0000) goto labelFunc04F1_00C9;
	message("\"They make me itch so I do not wear any.\"");
	say();
	goto labelFunc04F1_00CD;
labelFunc04F1_00C9:
	message("\"Clothes?!\" The man laughs heartily and slaps his belly. \"No clothes, no clothes,\" he assures you, still chuckling.");
	say();
labelFunc04F1_00CD:
	UI_remove_answer("Where are thy clothes?");
labelFunc04F1_00D4:
	case "Mama" attend labelFunc04F1_00F4:
	if (!var0000) goto labelFunc04F1_00E9;
	message("\"Quite a lady, is she not?\" He nudges you and winks.");
	say();
	goto labelFunc04F1_00ED;
labelFunc04F1_00E9:
	message("\"Mmm. Mama! Me Papa. She Mama. We make zug-zug. Maybe someday make Boy or Girl!\"");
	say();
labelFunc04F1_00ED:
	UI_remove_answer("Mama");
labelFunc04F1_00F4:
	case "cave" attend labelFunc04F1_0152:
	if (!var0000) goto labelFunc04F1_0109;
	message("\"We love the cave. The bees do not bother us. When they sleep we get our honey. We cook mice on the campfire. They are really not bad. Thou shouldst try them!\"");
	say();
	goto labelFunc04F1_010D;
labelFunc04F1_0109:
	message("\"Cave good to us. We stay away from bees. They no hurt us. We no hurt them. We take honey when they sleep. We eat the mice in cave. Cook them up on campfire. Very good!\"*");
	say();
labelFunc04F1_010D:
	var0002 = Func08F7(0xFFFF);
	if (!var0002) goto labelFunc04F1_013B;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I may puke.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF0F, 0x0000);
labelFunc04F1_013B:
	UI_remove_answer("cave");
	UI_add_answer(["bees", "honey", "mice"]);
labelFunc04F1_0152:
	case "bees" attend labelFunc04F1_01CE:
	if (!var0000) goto labelFunc04F1_0167;
	message("\"They won't bother thee if thou dost not bother them.\"");
	say();
	goto labelFunc04F1_01C0;
labelFunc04F1_0167:
	message("\"They friendly if we no hurt them.\"");
	say();
	if (!var0001) goto labelFunc04F1_01C0;
	message("The man sees Tseramed and frowns. He points at you accusingly. \"Hunt bees?\"");
	say();
	if (!Func090A()) goto labelFunc04F1_0187;
	message("\"Go away!\" The man spits at you and turns away.*");
	say();
	gflags[0x02D3] = true;
	abort;
	goto labelFunc04F1_01BB;
labelFunc04F1_0187:
	message("He points at Tseramed. \"Him bee hunter! Go away!\" The man spits at you and turns away.*");
	say();
	UI_show_npc_face(0xFFF6, 0x0000);
	message("\"This is an act, I tell thee! These people are not savages! They are Britannians!\"*");
	say();
	UI_remove_npc_face(0xFFF6);
	if (!var0002) goto labelFunc04F1_01BB;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"He seems quite savage to me!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04F1_01BB:
	gflags[0x02D3] = true;
	abort;
labelFunc04F1_01C0:
	UI_remove_answer("bees");
	UI_add_answer("friendly");
labelFunc04F1_01CE:
	case "honey" attend labelFunc04F1_01E1:
	message("The man rubs his belly and smiles, licking his lips.~~ \"Yummmmmmmmmmmmm!\"");
	say();
	UI_remove_answer("honey");
labelFunc04F1_01E1:
	case "mice" attend labelFunc04F1_01F4:
	message("The man rubs his belly and makes smacking noises with his mouth.~~\"Mmmmmmmmmmmmmmm!\"");
	say();
	UI_remove_answer("mice");
labelFunc04F1_01F4:
	case "friendly" attend labelFunc04F1_021B:
	if (!var0000) goto labelFunc04F1_0209;
	message("\"Sure. They know Mama and me. We are their friends.\"");
	say();
	goto labelFunc04F1_020D;
labelFunc04F1_0209:
	message("The man nods. \"They know Mama and me. We are bees' friends. Bees let us have honey when bees sleep. Bees no like giving honey if bees awake.\"");
	say();
labelFunc04F1_020D:
	UI_remove_answer("friendly");
	UI_add_answer("Mama and thee");
labelFunc04F1_021B:
	case "Mama and thee" attend labelFunc04F1_0267:
	if (!var0000) goto labelFunc04F1_0230;
	message("\"I told thee. We have been here a long time.\"");
	say();
	goto labelFunc04F1_0260;
labelFunc04F1_0230:
	message("\"Mama and me live in cave since babies.\"");
	say();
	if (!var0002) goto labelFunc04F1_0259;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Avatar! They must have been abandoned in here! Why, they must be brother and sister!\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF0F, 0x0000);
labelFunc04F1_0259:
	UI_add_answer("babies");
labelFunc04F1_0260:
	UI_remove_answer("Mama and thee");
labelFunc04F1_0267:
	case "babies" attend labelFunc04F1_0287:
	message("The man nods. \"We babies then.\"");
	say();
	UI_remove_answer("babies");
	if (!gflags[0x0152]) goto labelFunc04F1_0287;
	UI_add_answer("Art thou from Yew?");
labelFunc04F1_0287:
	case "Art thou from Yew?" attend labelFunc04F1_02A5:
	message("The man's eyes widen, realizes you are serious, then rolls his eyes to the floor.~~\"Damn! All right. Thou didst catch me. Thou art right. Mama and I are from Yew,\" the man speaks in a perfect voice booming with intelligence. He then laughs heartily. \"We had thee going, though, did we not!\"");
	say();
	gflags[0x02D4] = true;
	UI_remove_answer("Art thou from Yew?");
	UI_add_answer("Yew");
labelFunc04F1_02A5:
	case "Yew" attend labelFunc04F1_02B6:
	message("\"That's right. My real name is Murray. Mama is really Myrtle. I was a fully licensed apothecary in the town until the Britannian Tax Council came after me. They wanted the shirt off my back, so I gave it to them!");
	say();
	message("\"Since then, Myrtle and I prefer to live down here with the bees. Life is so... carefree down here. We have chosen to live with nature. Now, if thou dost not mind, I shall isolate myself from thee and bid thee farewell.\"*");
	say();
	abort;
labelFunc04F1_02B6:
	case "bye" attend labelFunc04F1_02C1:
	goto labelFunc04F1_02C4;
labelFunc04F1_02C1:
	goto labelFunc04F1_0064;
labelFunc04F1_02C4:
	endconv;
	message("Papa smiles and waves.*");
	say();
	return;
}


