#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func048C object#(0x48C) ()
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

	if (!(event == 0x0001)) goto labelFunc048C_02D6;
	UI_show_npc_face(0xFF74, 0x0000);
	if (!(!gflags[0x01B4])) goto labelFunc048C_001E;
	message("This undead fellow looks through you. Though he is obviously aware of his surroundings, you are quite sure that he doesn't even see you.*");
	say();
	abort;
labelFunc048C_001E:
	if (!gflags[0x01CA]) goto labelFunc048C_002D;
	var0000 = "Paulette";
	goto labelFunc048C_0033;
labelFunc048C_002D:
	var0000 = "barmaid";
labelFunc048C_0033:
	var0001 = "it's not all his fault";
	var0002 = false;
	if (!gflags[0x0198]) goto labelFunc048C_004A;
	UI_add_answer("sacrifice");
labelFunc048C_004A:
	var0003 = UI_part_of_day();
	var0004 = UI_get_schedule_type(0xFF74);
	if (!(!gflags[0x01AA])) goto labelFunc048C_0096;
	if (!((var0003 == 0x0000) || (var0003 == 0x0001))) goto labelFunc048C_0096;
	if (!(var0004 == 0x000E)) goto labelFunc048C_0086;
	message("You attempt to start a conversation with the portly ghost, but he seems distanced from you and everything else.*");
	say();
	abort;
	goto labelFunc048C_0096;
labelFunc048C_0086:
	if (!(!(var0004 == 0x0010))) goto labelFunc048C_0096;
	message("The heavy-set ghost looks a bit shaken and his speech is a little slurred as he says, \"Excuse me, yer honor. But I got me a splittin' headache. Do ya mind if we continue this little chat later?\"~~He begins to rub his temples with both hands.*");
	say();
	abort;
labelFunc048C_0096:
	var0005 = Func08F7(0xFF70);
	if (!var0005) goto labelFunc048C_00C8;
	message("\"Oh, hello there, lady Rowena. 'Tis good to see ye again. It brings a ray o' sunshine into this old man's heart ta see yer beauteous face,\" he says, smiling.*");
	say();
	UI_show_npc_face(0xFF70, 0x0000);
	message("She curtsies delicately and smiles back.~~\"Hello, Markham. It is good, indeed, to see that none of this horrible business can keep thee from giving a lady a compliment.\"*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF74, 0x0000);
labelFunc048C_00C8:
	var0006 = Func08F7(0xFF6D);
	if (!var0006) goto labelFunc048C_00FE;
	message("\"Oh, uh, hello there Mayor. I thought ye were sequestered in the Town Hall. Well, uh, it's good ta see ya again.\"*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("\"Yes, well, it is good to see thee again, too.\"*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF74, 0x0000);
	gflags[0x01BD] = true;
labelFunc048C_00FE:
	if (!(!gflags[0x01C4])) goto labelFunc048C_0110;
	message("The corpulent, undead barkeep greets you with a wide, gruesome smile. \"Come, stranger. Have a seat near old Markham and tell me o' yer travels. I don't often get visitors in here anymore.\"");
	say();
	gflags[0x01C4] = true;
	goto labelFunc048C_0114;
labelFunc048C_0110:
	message("Markham hails you and drinks down a tankard of the house spirits. \"Welcome, my friend. Sit with me a while and enliven my eternity with yer wondrous wit.\" He smiles in that charming way that only the half-rotted can.");
	say();
labelFunc048C_0114:
	UI_add_answer(["name", "job", "bye"]);
labelFunc048C_0124:
	converse attend labelFunc048C_02D5;
	case "name" attend labelFunc048C_018A:
	message("The heavy-set zombie wipes his mouth off on the back of his hand. \"I be Markham. Markham o' the Keg.\" He pats the large keg of wine he carries.");
	say();
	var0007 = Func08F7(0xFF6F);
	if (!(var0007 && gflags[0x01B9])) goto labelFunc048C_0183;
	if (!var0002) goto labelFunc048C_0153;
	UI_remove_npc_face(0xFF6E);
labelFunc048C_0153:
	if (!(!gflags[0x01A4])) goto labelFunc048C_0183;
	UI_show_npc_face(0xFF6F, 0x0000);
	message("The lovely ");
	message(var0000);
	message(" strolls over and pats Markham's rather large belly. \"Yes, he's Markham of the Keg, all right.\" She smiles sweetly down at the older man.*");
	say();
	UI_remove_npc_face(0xFF6F);
	UI_show_npc_face(0xFF74, 0x0000);
	message("\"That's enough of that!\" Markham smacks the pretty young woman on her ghostly posterior.~~ \"Make yerself useful and fetch me a haunch o' venison.\" She turns away, giggling. He looks at you with a mirthful expression, \"I just don't know what I'm goin' ta do with that girl.\"");
	say();
labelFunc048C_0183:
	UI_remove_answer("name");
labelFunc048C_018A:
	case "job" attend labelFunc048C_01A3:
	message("\"Why, I run this fine establishment, the Keg O' Spirits.\" For a moment he becomes serious. \"This place once drew folk from all across Britannia, gargoyle and human alike. Until the fire, that is.\"");
	say();
	UI_add_answer(["Keg O' Spirits", "fire"]);
labelFunc048C_01A3:
	case "fire" attend labelFunc048C_0209:
	message("He looks uncomfortable, \"Caine blew the town to the four winds, and now we're all trapped here, slaves of that bastard Horance.\" Tiny blue flames appear in the pupils of his glazed eyes, then go out as he regains his composure.");
	say();
	UI_add_answer(["Caine", "Horance"]);
	var0008 = Func08F7(0xFF6E);
	if (!(var0008 && gflags[0x01BA])) goto labelFunc048C_01F8;
	UI_show_npc_face(0xFF6E, 0x0000);
	message("\"Please, Markham. Have a little pity for Caine. He was trying to create something to save the town when he made his fatal mistake.\" The pale ghost looks deeply troubled.");
	say();
	UI_remove_npc_face(0xFF6E);
	UI_show_npc_face(0xFF74, 0x0000);
	var0002 = true;
	var0001 = "yer right Quen,";
labelFunc048C_01F8:
	message("\"Oh, I suppose ");
	message(var0001);
	message(" he was tryin' ta help us when he called the proverbial fires o' Hell down on us. It just rankles me to have died in my prime.\" His roguish smile once again lightens his ghostly visage.");
	say();
	UI_remove_answer("fire");
labelFunc048C_0209:
	case "Caine" attend labelFunc048C_0223:
	message("A look of disgust comes to his disfigured features. \"That tortured soul haunts the crater made by his foolish mistake. I wouldn't go near him though, he's a bit daft, ya know.\" He refills his mug from the cask at his side and swigs down most of the wine in one swallow.");
	say();
	UI_add_answer("tortured soul");
	UI_remove_answer("Caine");
labelFunc048C_0223:
	case "tortured soul" attend labelFunc048C_023D:
	message("\"That's just the name the rest of us in Skara Brae call him -- the Tortured One,\" he grins, embarrassed.");
	say();
	UI_remove_answer("tortured soul");
	UI_add_answer("Skara Brae");
labelFunc048C_023D:
	case "Skara Brae" attend labelFunc048C_0250:
	message("\"That's the name o' the island yer on.\" He shakes his head.");
	say();
	UI_remove_answer("Skara Brae");
labelFunc048C_0250:
	case "Horance" attend labelFunc048C_028C:
	message("\"For all the years I've been in Skara Brae, he's been a raving lunatic. What with all o' them silly rhymes and his crazy laughter.~~\"Then one night, we all hears thunder when there isn't a cloud in the starry sky, and I seem to recall a full moon...\" He gets a thoughtful look on his face. \"But as I was sayin', there was this thunder, then this deep, dark laughter coming from the tower on the northern point -- Horance's Dark Tower.\" After this he falls silent for a moment.");
	say();
	if (!var0002) goto labelFunc048C_0281;
	UI_show_npc_face(0xFF6E, 0x0000);
	message("The pale ghost moves forward and whispers, \"I was already living in the half world of the dead when these events took place, and ever since, I've felt a strange pull coming from the tower.\"*");
	say();
	UI_remove_npc_face(0xFF6E);
	UI_show_npc_face(0xFF74, 0x0000);
labelFunc048C_0281:
	message("After a brief swig, he continues, \"Then, even worse... I'm out checkin' on the cows when I hears a sound like moanin'. It's off to the east, so I look that way, into the graveyard y'know, and what do I see?~~\"I'll tell ya what I seen. The graves, rippin' open like the people in 'em got a place to go.\" Eyes wide, he tips back another sip.");
	say();
	UI_remove_answer("Horance");
labelFunc048C_028C:
	case "Keg O' Spirits" attend labelFunc048C_029F:
	message("He truly looks sad as he says, \"This place was once my pride and joy. The Keg was known all 'round Britannia, and a few other places, too. Well, now it don't look like too much, but in it's heyday, it saw the likes of nobles, knights, minstrels, and merchants. And o' course, a bit o' riff raff to be sure.\" He winks at you. His spirit seems indomitable.");
	say();
	UI_remove_answer("Keg O' Spirits");
labelFunc048C_029F:
	case "sacrifice" attend labelFunc048C_02C5:
	if (!(!gflags[0x019A])) goto labelFunc048C_02B9;
	message("You relate the need for a sacrifice to enter the Well of Souls. Afterwards, Markham seems to think long and hard.~~\"So, yer wantin' me to go mad as a March hare, an' jump right into this... Well O' Souls?\" He looks at you incredulously.~~\"Listen now. I haven't had courage like that since I were a young lad. Since then I got some sense, too. You'll have to look elsewhere fer yer sacrifice.\"");
	say();
	gflags[0x019A] = true;
	goto labelFunc048C_02BE;
labelFunc048C_02B9:
	message("\"All right, now. I already told ya. I ain't interested.\" He looks a little put out by your persistence.*");
	say();
	abort;
labelFunc048C_02BE:
	UI_remove_answer("sacrifice");
labelFunc048C_02C5:
	case "bye" attend labelFunc048C_02D2:
	message("\"Oh, are ya leavin' then? Well, ya take care now. And watch out for those walkin' dead. Some o' them aren't too happy about their state, and none too picky about who they complain to, neither.\"*");
	say();
	abort;
labelFunc048C_02D2:
	goto labelFunc048C_0124;
labelFunc048C_02D5:
	endconv;
labelFunc048C_02D6:
	if (!(event == 0x0000)) goto labelFunc048C_02DF;
	abort;
labelFunc048C_02DF:
	return;
}


