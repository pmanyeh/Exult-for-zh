#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern void Func092E 0x92E (var var0000);

void Func049B object#(0x49B) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc049B_0183;
	UI_show_npc_face(0xFF65, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	UI_add_answer(["name", "job", "bye"]);
	var0003 = UI_wearing_fellowship();
	if (!var0003) goto labelFunc049B_004A;
	message("\"");
	message(var0001);
	message("? Thou, too, hast joined the evil organization? But how is this possible? Canst thou not see their tenets vie with the very virtues themselves? Dost thou not feel more like a sheep than a man? I am truly sorry, for if one of Britannia's greatest heroes has fallen in with such filth, then there is no hope for our great land!\" He turns away in disgust.*");
	say();
	abort;
labelFunc049B_004A:
	if (!(!gflags[0x01FF])) goto labelFunc049B_005C;
	message("You see a man with an unhappy look upon his face.");
	say();
	gflags[0x01FF] = true;
	goto labelFunc049B_0066;
labelFunc049B_005C:
	message("Cubolt looks up. \"Yes, ");
	message(var0001);
	message("?\"");
	say();
labelFunc049B_0066:
	converse attend labelFunc049B_0178;
	case "name" attend labelFunc049B_0083:
	message("\"I am Cubolt of Moonglow.\"");
	say();
	UI_add_answer("Moonglow");
	UI_remove_answer("name");
labelFunc049B_0083:
	case "job" attend labelFunc049B_00A2:
	message("\"I am a farmer, ");
	message(var0001);
	message(". I manage my farm with the help of Tolemac, my brother, and Morz, our family friend.\"");
	say();
	UI_add_answer(["Tolemac", "Morz"]);
labelFunc049B_00A2:
	case "Moonglow" attend labelFunc049B_00BC:
	message("\"The city occupies the entire island now, including the Lycaeum. Most of the residents still live south, though. We are due east of Britain proper.\"");
	say();
	UI_add_answer("residents");
	UI_remove_answer("Moonglow");
labelFunc049B_00BC:
	case "Morz" attend labelFunc049B_00D6:
	message("\"My brother and I have known Morz for most of our lives. He is very friendly when he is not too busy worrying about his stutter. Unfortunately, he listens to Tolemac too often.\"");
	say();
	UI_add_answer("stutter");
	UI_remove_answer("Morz");
labelFunc049B_00D6:
	case "stutter" attend labelFunc049B_00E9:
	message("Cubolt looks down at the ground, shaking his head sadly. \"He started when he was five years old. He and my brother were wrestling in the back of a wagon driven by his parents. They hit a bump and he fell out -- and landed on his head. Ever since, he hath had his stutter.\" He looks back up at you. \"The odd thing is, neither he nor Tolemac remember the accident. Or at least, Tolemac doth not. I cannot convince Morz to talk about it.\"");
	say();
	UI_remove_answer("stutter");
labelFunc049B_00E9:
	case "residents" attend labelFunc049B_010A:
	message("\"Zelda, the clerk at the Lycaeum, would be the best person to talk to about Moonglow's residents. Or the bartender, though I do not know his name. I know that the Observatory head and the Lycaeum head are twins, but I have never met either of them. I do know that thou dost not want to talk to Rankin or Balayna at The Fellowship. They are ill news to our once-pleasant city.\"");
	say();
	if (!(!var0002)) goto labelFunc049B_0103;
	UI_add_answer("Fellowship");
labelFunc049B_0103:
	UI_remove_answer("residents");
labelFunc049B_010A:
	case "Tolemac" attend labelFunc049B_0132:
	message("\"He is my younger brother. Need I say more? I am a little concerned about him though. I am used to his rebellious behavior, but recently he has joined The Fellowship. That frightens me. They frighten me. I have tried to get him to come to his senses, but he is too busy enjoying making me worry to listen. Also, he is trying to get Morz to join. I wish I could get him to reconsider.\"");
	say();
	if (!(!var0002)) goto labelFunc049B_0124;
	UI_add_answer("Fellowship");
labelFunc049B_0124:
	UI_add_answer("reconsider");
	UI_remove_answer("Tolemac");
labelFunc049B_0132:
	case "Fellowship" attend labelFunc049B_0149:
	message("He spits on the ground. \"A bane to Britannia is what The Fellowship is. They have some odd philosophy that teaches thee to forget who thou art and follow them. The process is dehumanizing, and I think it meshes poorly with the eight virtues. Not only that, but their leader here in Moonglow has persuaded Tolemac to join.\"");
	say();
	var0002 = true;
	UI_remove_answer("Fellowship");
labelFunc049B_0149:
	case "reconsider" attend labelFunc049B_016A:
	message("\"Unfortunately, Tolemac will not listen to me. However,\" he begins to smile hopefully, \"he just might listen to thee, ");
	message(var0001);
	message(". Perhaps thou couldst talk him into reconverting. I would very much appreciate that! Perhaps,\" he adds, \"thou couldst also ask Morz not to join.\"");
	say();
	gflags[0x01D6] = true;
	gflags[0x01D7] = true;
	UI_remove_answer("reconsider");
labelFunc049B_016A:
	case "bye" attend labelFunc049B_0175:
	goto labelFunc049B_0178;
labelFunc049B_0175:
	goto labelFunc049B_0066;
labelFunc049B_0178:
	endconv;
	message("\"Take care, ");
	message(var0001);
	message(".\"*");
	say();
labelFunc049B_0183:
	if (!(event == 0x0000)) goto labelFunc049B_0191;
	Func092E(0xFF65);
labelFunc049B_0191:
	return;
}


