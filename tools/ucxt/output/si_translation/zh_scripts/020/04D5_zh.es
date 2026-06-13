#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func07D1 object#(0x7D1) ();
extern var Func08FC 0x8FC ();
extern var Func0825 0x825 ();
extern void Func08FE 0x8FE ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern void Func08F5 0x8F5 (var var0000);

void Func04D5 object#(0x4D5) ()
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
	var var000D;
	var var000E;
	var var000F;
	var var0010;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = "my son";
	var0004 = "his";
	if (!var0001) goto labelFunc04D5_0031;
	var0003 = "my daughter";
	var0004 = "her";
labelFunc04D5_0031:
	if (!(event == 0x0000)) goto labelFunc04D5_0179;
	var0005 = UI_find_nearby(0xFF2B, 0xFFFF, 0x0014, 0x0008);
	var0006 = [];
	enum();
labelFunc04D5_0053:
	for (var0009 in var0005 with var0007 to var0008) attend labelFunc04D5_0079;
	if (!(UI_get_schedule_type(var0009) == 0x0004)) goto labelFunc04D5_0076;
	var0006 = (var0006 & var0009);
labelFunc04D5_0076:
	goto labelFunc04D5_0053;
labelFunc04D5_0079:
	if (!(var0006 == [])) goto labelFunc04D5_0084;
	abort;
labelFunc04D5_0084:
	UI_clear_item_say(0xFF2B);
	var000A = var0006[UI_get_random(UI_get_array_size(var0006))];
	UI_clear_item_say(var000A);
	var000B = UI_get_random(0x0006);
	if (!(var000B == 0x0001)) goto labelFunc04D5_00CD;
	UI_item_say(0xFF2B, "@Do not falter!@");
	Func097F(var000A, "@Pardon, Draxta.@", 0x0003);
labelFunc04D5_00CD:
	if (!(var000B == 0x0002)) goto labelFunc04D5_00ED;
	UI_item_say(0xFF2B, "@Rhythm is pure!@");
	Func097F(var000A, "@Walk in Rhythm.@", 0x0003);
labelFunc04D5_00ED:
	if (!(var000B == 0x0003)) goto labelFunc04D5_010D;
	UI_item_say(var000A, "@May we stop?@");
	Func097F(0xFF2B, "@It is not time...@", 0x0003);
labelFunc04D5_010D:
	if (!(var000B == 0x0004)) goto labelFunc04D5_012D;
	UI_item_say(0xFF2B, "@With vigor!@");
	Func097F(var000A, "@Vigor is good.@", 0x0003);
labelFunc04D5_012D:
	if (!(var000B == 0x0005)) goto labelFunc04D5_014D;
	UI_item_say(0xFF2B, "@Do not fail Xenka!@");
	Func097F(var000A, "@I am weak...@", 0x0003);
labelFunc04D5_014D:
	if (!(var000B == 0x0006)) goto labelFunc04D5_0179;
	UI_item_say(0xFF2B, "@Xenka is pleased!@");
	Func097F(var000A, "@Hail the Prophetess!@", 0x0005);
	Func097F(0xFF2B, "@Peace to all.@", 0x000A);
labelFunc04D5_0179:
	if (!(event == 0x0001)) goto labelFunc04D5_01C8;
	if (!(UI_get_npc_id(0xFF31) != 0x0000)) goto labelFunc04D5_019A;
	UI_item_say(0xFF2B, "@Hush...@");
	abort;
labelFunc04D5_019A:
	UI_item_say(0xFE9C, "@Might we speak?@");
	0xFF2B->Func07D1();
	Func097F(0xFF2B, (("@Yes, " + var0003) + "?@"), 0x0002);
	UI_set_schedule_type(0xFF2B, 0x0003);
labelFunc04D5_01C8:
	if (!(event == 0x0009)) goto labelFunc04D5_061D;
	UI_run_schedule(0xFF2B);
	UI_clear_item_say(0xFF2B);
	UI_show_npc_face0(0xFF2B, 0x0000);
	var000C = UI_get_item_flag(0xFF2B, 0x001C);
	if (!(var000C == false)) goto labelFunc04D5_021E;
	UI_set_item_flag(0xFF2B, 0x001C);
	message("\"I tremble before the Hero from Another World! Thou art even as Xenka said!\"");
	say();
	UI_add_answer(["name", "Hero From Another World", "Xenka"]);
	goto labelFunc04D5_0232;
labelFunc04D5_021E:
	message("\"Welcome again, Hero from Another World! Thy destiny hath again brought thee to the place of Xenka's wisdom!\"");
	say();
	UI_add_answer(["Hero From Another World", "Xenka", "destiny"]);
labelFunc04D5_0232:
	if (!(gflags[0x02DD] && UI_get_item_flag(0xFF6B, 0x001E))) goto labelFunc04D5_024A;
	UI_add_answer("Gwenno");
labelFunc04D5_024A:
	if (!Func08FC()) goto labelFunc04D5_025B;
	message("\"Oh! One of thy friends hath met an untimely end. This should not be... If thou art ready to see thy friend again, simply ask and I will return them to thee.\"");
	say();
	UI_add_answer("resurrection");
labelFunc04D5_025B:
	if (!Func0825()) goto labelFunc04D5_0268;
	UI_add_answer("vision");
labelFunc04D5_0268:
	UI_add_answer(["bye"]);
labelFunc04D5_0272:
	converse attend labelFunc04D5_061C;
	case "resurrection" attend labelFunc04D5_0287:
	UI_remove_answer("resurrection");
	Func08FE();
labelFunc04D5_0287:
	case "name" attend labelFunc04D5_02BC:
	UI_remove_answer("name");
	message("\"My name is insignificant, oh great one. I am but a shadow in thy destiny and the glory of Xenka.\"");
	say();
	var000A = Func0992(0x0001, "@Another mystic...@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"But, if thou wilt suffer to call me by name, I am Draxta.\"");
	say();
	UI_add_answer("destiny");
labelFunc04D5_02BC:
	case "destiny" attend labelFunc04D5_02DC:
	UI_remove_answer("destiny");
	message("\"Xenka saw the destinies of every man, woman and child! They are written in her blessed book. I cannot tell thee thy destiny, for I am sworn not to interfere, but thou mayest look within Xenka's wisdom of thine own accord, as any may.\"");
	say();
	UI_add_answer(["blessed book", "not interfere"]);
labelFunc04D5_02DC:
	case "blessed book" attend labelFunc04D5_032F:
	UI_remove_answer("blessed book");
	message("\"A work of divine wisdom, certainly! It is where Xenka inscribed all of her visions.\"");
	say();
	var000A = Func0992(0x0001, "@Such wisdom might aid thee in thy quest, Avatar.@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	if (!UI_find_nearby(item, 0x03E6, 0x000F, 0x0000)) goto labelFunc04D5_031E;
	message("\"Thou mayest find the book here in the Chapel, upon the altar.\"");
	say();
	goto labelFunc04D5_032F;
labelFunc04D5_031E:
	message("\"Thou mayest find the book upon the altar within the Chapel.\"");
	say();
	UI_add_answer(["altar", "Chapel"]);
labelFunc04D5_032F:
	case "altar" attend labelFunc04D5_0342:
	UI_remove_answer("altar");
	message("\"Look for the ankh, the ancient symbol of life. It is only fitting that Xenka's words rest before the symbol of all that her divinely-inspired words shall save!\"");
	say();
labelFunc04D5_0342:
	case "Chapel" attend labelFunc04D5_0355:
	UI_remove_answer("Chapel");
	message("\"The Chapel is where we meditate. It is the central chamber of the abbey. This is where we gather to ponder the mystery of Xenka's prophecies.\"");
	say();
labelFunc04D5_0355:
	case "not interfere" attend labelFunc04D5_0379:
	UI_remove_answer("not interfere");
	message("\"It is written that 'The friends of the Hero from Another World shall become ");
	message(var0004);
	message(" enemies.'\"");
	say();
	message("\"I shall not seek to befriend thee, as I have no wish to bring about the end of the world!\"");
	say();
	UI_add_answer("end of the world");
labelFunc04D5_0379:
	case "end of the world" attend labelFunc04D5_0390:
	UI_remove_answer("end of the world");
	message("\"Xenka's visions were of the world's end, oh great one.\"");
	say();
	message("\"It is written that 'If the Hero from Another World doth fail, the world shall shudder unto death.'\"");
	say();
labelFunc04D5_0390:
	case "Hero From Another World" attend labelFunc04D5_03B4:
	UI_remove_answer("Hero From Another World");
	message("\"Xenka saw that the one hope for our world was that A Hero from Another World would sail a ship upon dry land.\"");
	say();
	message("\"Thoxa hath told us that thy ship was found beyond the shore. And thou wert accompanied by three fine companions, as foretold.\"");
	say();
	UI_add_answer(["Thoxa", "three fine companions"]);
labelFunc04D5_03B4:
	case "Thoxa" attend labelFunc04D5_03CE:
	UI_remove_answer("Thoxa");
	message("\"Thoxa is another follower of the wondrous Xenka, although she would not be content to sit and wait for thine arrival. She would seek to be thy friend and take thee the Hourglass of Fate. I hope that it is not she that turns against thee.\"");
	say();
	UI_add_answer("Hourglass of Fate");
labelFunc04D5_03CE:
	case "Hourglass of Fate" attend labelFunc04D5_03E1:
	UI_remove_answer("Hourglass of Fate");
	message("\"The sands within the glass are the life's blood of our land. Each grain falls closer and closer to its doom if thou shouldst fail in thy quest.\"");
	say();
labelFunc04D5_03E1:
	case "three fine companions" attend labelFunc04D5_03FA:
	UI_remove_answer("three fine companions");
	message("\"It is written that -- 'The Hero from Another World must have the Three to fulfill ");
	message(var0004);
	message(" quest.'\"");
	say();
labelFunc04D5_03FA:
	case "Xenka" attend labelFunc04D5_041E:
	UI_remove_answer("Xenka");
	message("\"Xenka was a very wise woman, oh great one. Divine visions came to her to warn us of the end of our world.\"");
	say();
	message("\"It was she who foresaw thy coming in the Place of Visions. Though she never told us that she foresaw leaving us...\"");
	say();
	UI_add_answer(["Place of Visions", "leaving"]);
labelFunc04D5_041E:
	case "Place of Visions" attend labelFunc04D5_0460:
	UI_remove_answer("Place of Visions");
	if (!Func0825()) goto labelFunc04D5_043A;
	message("\"This is the Place of Visions, Hero. Thou dost stand on hallowed ground.\"");
	say();
	goto labelFunc04D5_0460;
labelFunc04D5_043A:
	message("\"The Place of Visions is upon the very north-western edge of the fields, oh great one. Thou wilt know it by the benches placed before the great wall.\"");
	say();
	message("\"I recall the last night we ever saw Xenka... I was there for her last three visions. Wouldst thou like me to show thee a vision?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04D5_0455;
	message("\"Journey to the Place of Visions, and I shall meet thee there.\"");
	say();
	gflags[0x0273] = true;
	goto labelFunc04D5_0459;
labelFunc04D5_0455:
	message("\"As thou wishest. But bear in mind that the visions may be of aid to thee.\"");
	say();
labelFunc04D5_0459:
	UI_add_answer("visions");
labelFunc04D5_0460:
	case "visions" attend labelFunc04D5_048D:
	UI_remove_answer("visions");
	message("\"From the first vision Xenka said, 'The Hero from Another World must triumph -- even in ");
	message(var0004);
	message(" dreams.' I can tell that thou shalt succeed. The very voice of the universe sings as thou dost move through it.\"");
	say();
	message("\"After the second vision Xenka said, 'The Hero from Another World must cast aside ");
	message(var0004);
	message(" prejudice and follow those of The Fellowship into the Truth of Beauty.'");
	say();
	message("\"Following the third vision Xenka said, 'The Hero from Another World shall need a thief and a braggart as ");
	message(var0004);
	message(" ally.' I must admit, I find that hard to believe.\"");
	say();
labelFunc04D5_048D:
	case "leaving" attend labelFunc04D5_04AF:
	UI_remove_answer("leaving");
	message("\"It was a dreadful blow, oh great one, when we could not find her in any place we searched.\"");
	say();
	message("\"But I believe that some great event, some great crisis will bring forth the prophetess and her psychic wisdom to save this floundering world.\"");
	say();
	gflags[0x026B] = true;
	UI_add_answer("floundering");
labelFunc04D5_04AF:
	case "floundering" attend labelFunc04D5_04C2:
	UI_remove_answer("floundering");
	message("\"Thou hast already survived the strange storms that lash our land. Wouldst thou not agree that we are floundering beneath their fierce beatings?\"");
	say();
labelFunc04D5_04C2:
	case "Gwenno" attend labelFunc04D5_04F7:
	UI_remove_answer("Gwenno");
	message("\"Thy friend Gwenno doth not seem right, oh great one.\"");
	say();
	var000A = Func0992(0x0001, "@She is a fine one to talk...@", 0x0000, false);
	UI_set_conversation_slot(0x0000);
	message("\"Karnax could divine what ails her, to be certain.\"");
	say();
	UI_add_answer("Karnax");
labelFunc04D5_04F7:
	case "Karnax" attend labelFunc04D5_0517:
	UI_remove_answer("Karnax");
	message("\"Karnax is a proud fellow, oh great one. But not so proud that he would interfere with thy quest. He knows much of the history of the land. He will be a great help to thee, if thou dost ask. But only if thou dost ask.\"");
	say();
	UI_add_answer(["proud", "history"]);
labelFunc04D5_0517:
	case "proud" attend labelFunc04D5_052A:
	UI_remove_answer("proud");
	message("\"Karnax's ability to divine is second only to Xenka herself. He can be a bit acerbic if he doth not feel that he is being given the proper respect.\"");
	say();
labelFunc04D5_052A:
	case "history" attend labelFunc04D5_0544:
	UI_remove_answer("history");
	message("\"Karnax hath made an exhaustive study of the history of the Serpent people. He can tell thee most anything about them.\"");
	say();
	UI_add_answer("Serpent people");
labelFunc04D5_0544:
	case "Serpent people" attend labelFunc04D5_0557:
	UI_remove_answer("Serpent people");
	message("\"The Serpent people dwelt in this land long before our forefathers settled here. I do not know what happened to them, but Karnax might.\"");
	say();
labelFunc04D5_0557:
	case "vision" attend labelFunc04D5_05F4:
	UI_remove_answer("vision");
	message("\"Silence, please! We shall now listen to the song of the Void, which whispers of events both past and present...\"");
	say();
	var000D = UI_find_nearest(0xFF2B, 0x0308, 0x0014);
	if (!var000D) goto labelFunc04D5_05E3;
	var000E = UI_get_object_position(var000D);
	var000F = ((0x0008 * (var000E[0x0001] - 0x0920)) + 0x0064);
	var0010 = ((0x0008 * (var000E[0x0002] - 0x0420)) + 0x0028);
	UI_obj_sprite_effect(var000D, 0x0035, var000F, var0010, 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(0xFF2B, "@Behold, the vision!@", 0x0007);
	gflags[0x0273] = false;
	goto labelFunc04D5_05F3;
labelFunc04D5_05E3:
	message("\"Let us move closer to the great wall...\"");
	say();
	Func097F(0xFF2B, "@To the wall...@", 0x0000);
labelFunc04D5_05F3:
	abort;
labelFunc04D5_05F4:
	case "bye" attend labelFunc04D5_0619:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Fare well!@", 0x0000);
	Func097F(item, "@Xenka's blessings!@", 0x0002);
	goto labelFunc04D5_061C;
labelFunc04D5_0619:
	goto labelFunc04D5_0272;
labelFunc04D5_061C:
	endconv;
labelFunc04D5_061D:
	if (!(event == 0x0007)) goto labelFunc04D5_062B;
	Func08F5(0xFF2B);
labelFunc04D5_062B:
	return;
}


