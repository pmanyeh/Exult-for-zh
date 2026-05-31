#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0909 0x909 ();
extern void Func08F0 0x8F0 ();
extern void Func08EF 0x8EF ();

void Func048E object#(0x48E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc048E_025C;
	UI_show_npc_face(0xFF72, 0x0000);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0127, 0x0000, 0xFE99);
	var0001 = Func0909();
	var0002 = UI_find_nearest(0xFF72, 0x02EB, 0xFFFF);
	var0003 = false;
	if (!gflags[0x01CE]) goto labelFunc048E_0050;
	message("Trent glares, giving his eyes an intensity that leaves no doubt in your mind about his attitude. \"If I thought that thou wert going to run off at a moment's notice I'd not have asked thee to help me free my love.~~\"Now please, take the cage and go to\tMordra. She will instruct thee in its use.\" His manner smoothes, \"I have placed mine only chance at reunion with Rowena in thy capable hands.\"*");
	say();
	gflags[0x01CE] = false;
	abort;
labelFunc048E_0050:
	if (!(gflags[0x01CF] && (!gflags[0x01A8]))) goto labelFunc048E_0060;
	message("\"Please, do not disturb me whilst I build this cage, for my thoughts are on nothing but the destruction of that foul Horance!\" He continues the construction of the Soul Cage.*");
	say();
	abort;
labelFunc048E_0060:
	if (!(!gflags[0x01B6])) goto labelFunc048E_0079;
	if (!var0002) goto labelFunc048E_0074;
	message("The large, angry-looking ghost ignores your presence and continues to hammer on a strange iron cage.*");
	say();
	goto labelFunc048E_0078;
labelFunc048E_0074:
	message("The large, angry-looking ghost ignores your presence, while obviously searching for some item.*");
	say();
labelFunc048E_0078:
	abort;
labelFunc048E_0079:
	if (!var0000) goto labelFunc048E_0086;
	UI_add_answer("ring");
labelFunc048E_0086:
	if (!gflags[0x0198]) goto labelFunc048E_0093;
	UI_add_answer("sacrifice");
labelFunc048E_0093:
	if (!gflags[0x01A6]) goto labelFunc048E_00A6;
	UI_show_npc_face(0xFF72, 0x0001);
	Func08F0();
labelFunc048E_00A6:
	if (!gflags[0x01A5]) goto labelFunc048E_00BD;
	UI_show_npc_face(0xFF72, 0x0001);
	gflags[0x01C1] = false;
	Func08EF();
labelFunc048E_00BD:
	if (!(!gflags[0x01C7])) goto labelFunc048E_00CF;
	message("You see in the fire of the ghostly forge a large, heavily-muscled ghost with a full beard and mustache. He does not notice your approach.");
	say();
	gflags[0x01C7] = true;
	goto labelFunc048E_00EE;
labelFunc048E_00CF:
	if (!var0002) goto labelFunc048E_00E3;
	message("Trent continues his work on the strangely-shaped iron cage.");
	say();
	UI_add_answer("iron cage");
	goto labelFunc048E_00EE;
labelFunc048E_00E3:
	message("Trent seems to be searching for something.");
	say();
	UI_add_answer("something");
labelFunc048E_00EE:
	UI_add_answer(["name", "job", "bye"]);
labelFunc048E_00FE:
	converse attend labelFunc048E_025B;
	case "name" attend labelFunc048E_012C:
	message("A deep furrow, accentuated by thick eyebrows, creases the ghost's weary brow. He doesn't look away from his work. \"I am Trent. Now, please, leave me to my work.\"");
	say();
	if (!var0002) goto labelFunc048E_0125;
	message("He continues hammering on a strangely-shaped iron cage.");
	say();
	if (!(!var0003)) goto labelFunc048E_0125;
	UI_add_answer("iron cage");
labelFunc048E_0125:
	UI_remove_answer("name");
labelFunc048E_012C:
	case "something" attend labelFunc048E_0139:
	message("\"I cannot find the iron cage!\" he shouts. \"Some fool must have taken it! When I find out who did it and where it is, that fool will sorely regret having removed it from my shop!\"*");
	say();
	abort;
labelFunc048E_0139:
	case "job" attend labelFunc048E_014C:
	message("\"Art thou blind! Canst thou not see that I am a smith?\" He doesn't seem the sort for idle conversation.");
	say();
	UI_remove_answer("job");
labelFunc048E_014C:
	case "iron cage" attend labelFunc048E_0170:
	message("Anger radiates from the large ghost in almost tangible waves. He looks up from the cage and you see that the light of fire isn't coming from the forge, it's coming from his eyes. \"I build this cage to destroy that bastard, Horance, who took my wife from me.\"~~For a moment, you think he is going to strike out at you, then he unclenches his fists with a heavy sigh and returns to his work.");
	say();
	var0003 = true;
	UI_remove_answer("iron cage");
	UI_add_answer(["Horance", "wife"]);
labelFunc048E_0170:
	case "Horance" attend labelFunc048E_0183:
	message("His whole body tenses as you speak.~~\"Horance...\" The word comes out like a curse. \"I will see his foul spirit burn before mine eyes. Then I will laugh as he cries out pitifully for mercy.\" For some reason you think that you'd rather avoid hearing that laugh.");
	say();
	UI_remove_answer("Horance");
labelFunc048E_0183:
	case "wife" attend labelFunc048E_01A3:
	message("One hot tear slips from the ghost's eye and falls on a heated piece of the iron cage. It sizzles, and then is gone.~~\"Rowena was my life, mine only joy in this world.\" His voice is almost tender, but then he returns to his guttural tones. \"He killed her and took that joy from me. Now I am only a hollow shell of a man, burning with hatred.\"");
	say();
	UI_remove_answer("wife");
	UI_add_answer(["Rowena", "killed"]);
labelFunc048E_01A3:
	case "killed" attend labelFunc048E_01B6:
	message("\"In an attempt to steal her away from my side, the evil fiend sent his undead minions to bring her to the dark tower. The mindless creatures slew her as she struggled.\" The ghost turns to you in anguish, \"I could do nought to save her... the sheer numbers of skeletal warriors bore me to the ground as she was bereft of life.\"~~Insane determination flickers in the big ghost's eyes, \"For this I will never forgive and never forget.");
	say();
	UI_remove_answer("killed");
labelFunc048E_01B6:
	case "Rowena" attend labelFunc048E_01E3:
	message("He holds up one hand as you say the name of his late wife. \"Please, do not say that name. It takes from me\ta little of mine Hatred, which is all I have now. Wouldst thou rob me of the one thing that keeps me alive?\" It would seem that he is unaware of the fact that he is, indeed, no longer alive. An odd expression crosses his face.~~\"I gave her a music box for our wedding, and now it is all I have left to remember her by.\" His tone changes.~~\"Do thou see what thou hast done?! I cannot work when I think of her!\" He returns to his work with renewed passion.");
	say();
	var0004 = UI_find_nearest(0xFE9C, 0x02F0, 0xFFFF);
	if (!var0004) goto labelFunc048E_01DC;
	message("You notice the music box he spoke of sitting nearby.");
	say();
labelFunc048E_01DC:
	UI_remove_answer("Rowena");
labelFunc048E_01E3:
	case "ring" attend labelFunc048E_024B:
	var0005 = UI_remove_party_items(0x0001, 0x0127, 0x0000, 0xFE99, false);
	message("You hold out the ring to Trent. At first he ignores you. Then, recognizing the ring, he takes it from you and holds it before him. Something in him snaps and his huge frame slumps forward.~~You let the ghost cry for a while, and when he finishes, you see a remarkable change in his appearance.");
	say();
	UI_remove_npc_face(0xFF72);
	UI_show_npc_face(0xFF72, 0x0001);
	message("The flames that once burned in his eyes are now gone, replaced by a deep shade of blue. He looks like a new man, or rather, ghost as it were.~ \"Forgive my behavior, ");
	message(var0001);
	message(". I know not what came over me. I remember flames, but they burned no hotter than mine own Hatred.\" He looks pained at the memory.~~ \"Thou hast seen her? Thou hast seen Rowena? And she still cares for me. Well, all the more reason to finish this Soul Cage. We must free her from Horance's vile sorcery.\"");
	say();
	gflags[0x01A5] = true;
	UI_remove_answer(["iron cage", "name", "job", "Horance", "wife", "Rowena", "killed", "ring", "bye"]);
	gflags[0x01C1] = true;
	Func08EF();
labelFunc048E_024B:
	case "bye" attend labelFunc048E_0258:
	message("If he heard you, he ignores the fact as you take your leave. You truly feel pity for this deeply wounded spirit.*");
	say();
	abort;
labelFunc048E_0258:
	goto labelFunc048E_00FE;
labelFunc048E_025B:
	endconv;
labelFunc048E_025C:
	if (!(event == 0x0000)) goto labelFunc048E_0265;
	abort;
labelFunc048E_0265:
	return;
}


