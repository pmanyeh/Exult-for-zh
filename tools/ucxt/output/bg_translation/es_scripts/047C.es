#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func047C object#(0x47C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc047C_0448;
	UI_show_npc_face(0xFF84, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	var0002 = false;
	var0003 = UI_is_dead(UI_get_npc_object(0xFF83));
	var0004 = UI_is_dead(UI_get_npc_object(0xFF82));
	var0005 = UI_is_dead(UI_get_npc_object(0xFF81));
	if (!(var0003 && (var0004 && var0005))) goto labelFunc047C_005F;
	var0002 = true;
labelFunc047C_005F:
	if (!(gflags[0x0168] && (!gflags[0x016A]))) goto labelFunc047C_0071;
	UI_add_answer("I have false flag");
labelFunc047C_0071:
	if (!(var0002 || gflags[0x016A])) goto labelFunc047C_0089;
	UI_add_answer("thou art safe now");
	UI_remove_answer("I have false flag");
labelFunc047C_0089:
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0176])) goto labelFunc047C_00B6;
	message("You see a scrawny and timid-looking man who eyes you fearfully.");
	say();
	message("\"Oh, my!\" he cries. \"'Tis really the Avatar this time! Please do not hurt me, Avatar!\"");
	say();
	gflags[0x0176] = true;
	UI_add_answer("this time");
	goto labelFunc047C_00C0;
labelFunc047C_00B6:
	message("\"Greetings again, ");
	message(var0000);
	message(",\" says Sprellic.");
	say();
labelFunc047C_00C0:
	if (!gflags[0x0186]) goto labelFunc047C_00DB;
	if (!(!gflags[0x0170])) goto labelFunc047C_00DB;
	if (!(!gflags[0x016A])) goto labelFunc047C_00DB;
	UI_add_answer("champion");
labelFunc047C_00DB:
	converse attend labelFunc047C_0443;
	case "name" attend labelFunc047C_00F1:
	message("\"My name is Sprellic.\"");
	say();
	UI_remove_answer("name");
labelFunc047C_00F1:
	case "job" attend labelFunc047C_010A:
	message("\"I am the proprietor of the Bunk and Stool here in Jhelom.\"");
	say();
	UI_add_answer(["Bunk and Stool", "Jhelom"]);
labelFunc047C_010A:
	case "Bunk and Stool" attend labelFunc047C_0143:
	message("\"It is the local inn where all the fighters from the Library of Scars come to drink. They would wreck the place every night if not for Ophelia and Daphne.\"");
	say();
	if (!(!(gflags[0x016A] || var0002))) goto labelFunc047C_012C;
	message("\"But that does not matter for soon I will be dead.\"");
	say();
	UI_add_answer("dead?");
labelFunc047C_012C:
	UI_remove_answer("Bunk and Stool");
	UI_add_answer(["Library of Scars", "Ophelia", "Daphne"]);
labelFunc047C_0143:
	case "Jhelom" attend labelFunc047C_0156:
	message("\"This is a town of fighters who pass their time fighting each other in bloody duels. It is no place for me. I should never have left Minoc!\"");
	say();
	UI_remove_answer("Jhelom");
labelFunc047C_0156:
	case "Library of Scars" attend labelFunc047C_0169:
	message("\"It is the club of fighters run by Master De Snel! Second home to the fiercest and most ruthless fighters in all of Britannia.\"");
	say();
	UI_remove_answer("Library of Scars");
labelFunc047C_0169:
	case "Ophelia" attend labelFunc047C_017C:
	message("\"Ophelia is one of my barmaids. She is gorgeous. If Daphne cannot handle our patrons when they become unruly, Ophelia will simply charm them.\"");
	say();
	UI_remove_answer("Ophelia");
labelFunc047C_017C:
	case "Daphne" attend labelFunc047C_018F:
	message("\"Daphne is one of my barmaids. She is, ahem, rather large. If Ophelia cannot charm our patrons when they become unruly, Daphne wrestles them to the ground.\"");
	say();
	UI_remove_answer("Daphne");
labelFunc047C_018F:
	case "this time", "dead?" attend labelFunc047C_01B2:
	message("\"'Tis a long story. I shall probably be dead before I can finish it.\"");
	say();
	UI_remove_answer(["this time", "dead?"]);
	UI_add_answer("story");
labelFunc047C_01B2:
	case "story" attend labelFunc047C_01F3:
	message("\"My tale is a strange one. It may disturb and puzzle thee. Art thou certain thou wouldst like to hear it?\"");
	say();
	var0006 = Func090A();
	if (!(!var0006)) goto labelFunc047C_01D9;
	message("\"Well, then I hope I was of some assistance to thee. Farewell forever, ");
	message(var0000);
	message(".\"*");
	say();
	abort;
	goto labelFunc047C_01EC;
labelFunc047C_01D9:
	message("\"It all started the previous evening. I had given Ophelia and Daphne the evening off. A stranger had come to mine inn... A very odd stranger.");
	say();
	message("\"He... he claimed he was the -Avatar-!");
	say();
	message("\"...And I believed him, which shows thee how gullible I am!\"");
	say();
	UI_add_answer("stranger");
labelFunc047C_01EC:
	UI_remove_answer("story");
labelFunc047C_01F3:
	case "stranger" attend labelFunc047C_0224:
	message("\"His eccentricity seemed to be surpassed only by his wealth. He booked both rooms in the inn so that he could try each bed and decide for himself which one was the most comfortable. As for food, he was voracious.");
	say();
	if (!var0001) goto labelFunc047C_020C;
	message("\"No offense, but he was also a member of The Fellowship!\"");
	say();
	goto labelFunc047C_0210;
labelFunc047C_020C:
	message("\"He was a member of The Fellowship, too!\"");
	say();
labelFunc047C_0210:
	UI_remove_answer("stranger");
	UI_add_answer(["eccentricity", "food"]);
labelFunc047C_0224:
	case "eccentricity" attend labelFunc047C_0237:
	message("\"I fear that this stranger was not who he claimed to be at all. I was a victim of a great and terrible deception that was perpetrated upon me.\"");
	say();
	UI_remove_answer("eccentricity");
labelFunc047C_0237:
	case "food" attend labelFunc047C_0257:
	message("\"This stranger ordered one of every kind of food and drink on the menu. So if he ever wanted anything, it would be right there to eat. I was cooking for hours. But then it got worse. He went to bed.\"");
	say();
	UI_remove_answer("food");
	UI_add_answer(["cooking", "bed"]);
labelFunc047C_0257:
	case "cooking" attend labelFunc047C_026A:
	message("\"Of course most of the food he left was uneaten! I had to give it away once it started to spoil!\"");
	say();
	UI_remove_answer("cooking");
labelFunc047C_026A:
	case "bed" attend labelFunc047C_0284:
	message("\"After he went to bed, he complained that he was too cold. I brought him more and more blankets, but it was not enough. Finally, he had every blanket in the inn. And he was still cold!\"");
	say();
	UI_remove_answer("bed");
	UI_add_answer("cold");
labelFunc047C_0284:
	case "cold" attend labelFunc047C_02A4:
	message("\"In desperation I ran down the street. It was the middle of the night. All of the shops were closed. The only thing I could find was some sort of old tapestry hanging on a wall. So I took it down.\"");
	say();
	UI_remove_answer("cold");
	UI_add_answer(["night", "tapestry"]);
labelFunc047C_02A4:
	case "night" attend labelFunc047C_02B7:
	message("\"Actually, now as I recall being out in the night air, it was a quite tolerable evening. Alas, I was oblivious to little else but the prospect of earning a goodly sum in the service of the stranger. Woe is me!\"");
	say();
	UI_remove_answer("night");
labelFunc047C_02B7:
	case "tapestry" attend labelFunc047C_02D7:
	message("\"The next thing I remember there was an angry woman chasing after me. For some reason she wanted to kill me! I managed to get away from her and get back to the inn and cover the stranger with the tapestry. Finally he fell asleep.\"");
	say();
	UI_remove_answer("tapestry");
	UI_add_answer(["angry woman", "asleep"]);
labelFunc047C_02D7:
	case "angry woman" attend labelFunc047C_02EA:
	message("\"Actually, I had seen this angry woman before. She would enter mine establishment upon occasion. Unfortunately, this was our first formal acquaintance.\"");
	say();
	UI_remove_answer("angry woman");
labelFunc047C_02EA:
	case "asleep" attend labelFunc047C_030A:
	message("\"I also fell asleep, only I slept late. When I awoke the guest was gone. He had not paid his bill and had taken all the blankets, even the tapestry. Before I could go look for him I had a visitor.\"");
	say();
	UI_remove_answer("asleep");
	UI_add_answer(["gone", "visitor"]);
labelFunc047C_030A:
	case "gone" attend labelFunc047C_031D:
	message("\"As I have said, I was rooked by a professional. A Master Criminal, no doubt -- and one who is still at large!\"");
	say();
	UI_remove_answer("gone");
labelFunc047C_031D:
	case "visitor" attend labelFunc047C_033D:
	message("\"It was the woman who had chased me the night before. Her name was Syria. She said I had stolen the honor flag from the wall of the Library of Scars. She also challenged me to a duel to the death unless I gave it back. And she is much bigger than I! When I tried to explain that I could not give it back, she hit me. It hurt. A lot!\"");
	say();
	UI_remove_answer("visitor");
	UI_add_answer(["hit", "duel"]);
labelFunc047C_033D:
	case "hit" attend labelFunc047C_0350:
	message("\"I will say this of the Lady Syria. She is quite beautiful when she is angry... At least, the visions of her that swam through mine head after she had hit me were quite beautiful. Tragically, I awoke.\"");
	say();
	UI_remove_answer("hit");
labelFunc047C_0350:
	case "duel" attend labelFunc047C_037E:
	message("\"Later that day I ran into a man named Vokes. He is a fighter at the Library of Scars. He asked me to return the honor flag and when I tried to tell him I could not, he hit me. Then he challenged me to a duel to the death to be fought right after my duel with Syria.");
	say();
	message("\"After Vokes left, I encountered a man named Timmons. He asked me to return the honor flag to the Library of Scars. I told him I could not and he also challenged me to a duel to the death. I told him I was busy, but he scheduled the challenge for right after my duel with Vokes.");
	say();
	message("\"Timmons, Vokes and Syria are the three toughest fighters in Jhelom. I could not hope to survive against one of them, let alone all three. The mysterious guest and the honor flag are nowhere to be found. Even now my barmaids are taking bets on the manner of my demise!\"");
	say();
	UI_remove_answer("duel");
	UI_add_answer(["Timmons", "Vokes", "Syria", "demise"]);
labelFunc047C_037E:
	case "Timmons" attend labelFunc047C_0391:
	message("\"Timmons has come to Jhelom only recently. I can tell thee nothing more of him.\"");
	say();
	UI_remove_answer("Timmons");
labelFunc047C_0391:
	case "Vokes" attend labelFunc047C_03A4:
	message("\"He is a fearless warrior, who cherishes any opportunity for combat. Beware of him.\"");
	say();
	UI_remove_answer("Vokes");
labelFunc047C_03A4:
	case "Syria" attend labelFunc047C_03B7:
	message("\"She is not as bad as she may appear to be. No doubt that woman has a temper. But I am sure she is quite nice once thou hast gotten the chance to know her. If not for these sad circumstances, we might have gotten the chance to get to know each other better.\"");
	say();
	UI_remove_answer("Syria");
labelFunc047C_03B7:
	case "demise" attend labelFunc047C_03D5:
	message("\"Mine only hope for survival is to find a champion who could stand up to the fiercest fighters in Jhelom.\"");
	say();
	gflags[0x0186] = true;
	UI_remove_answer("demise");
	UI_add_answer("champion");
labelFunc047C_03D5:
	case "champion" attend labelFunc047C_0403:
	message("\"Wouldst thou be my champion, Avatar?\"");
	say();
	var0007 = Func090A();
	if (!var0007) goto labelFunc047C_03F8;
	message("Sprellic falls to his knees before you in gratitude. \"Avatar, thou hast saved my life! I cannot thank thee enough!\"");
	say();
	gflags[0x0170] = true;
	goto labelFunc047C_03FC;
labelFunc047C_03F8:
	message("\"Oh, well. I had no choice but to ask.\"");
	say();
labelFunc047C_03FC:
	UI_remove_answer("champion");
labelFunc047C_0403:
	case "thou art safe now" attend labelFunc047C_041E:
	message("You tell Sprellic that the situation has been resolved and how it was done.");
	say();
	message("Sprellic practically kisses your feet.");
	say();
	message("\"How can I ever thank thee? Thou art the most noble person I have ever met! I shalt be forever in thy debt! I thank thee!\"");
	say();
	UI_remove_answer("thou art safe now");
labelFunc047C_041E:
	case "I have false flag" attend labelFunc047C_0435:
	message("You tell Sprellic that Kliftin made you a false flag.");
	say();
	message("\"How ingenious! Please! Deliver it to Syria as soon as thou art able! And I thank thee for thy trouble in helping me!\"");
	say();
	UI_remove_answer("I have false flag");
labelFunc047C_0435:
	case "bye" attend labelFunc047C_0440:
	goto labelFunc047C_0443;
labelFunc047C_0440:
	goto labelFunc047C_00DB;
labelFunc047C_0443:
	endconv;
	message("\"Good day to thee, Avatar.\"");
	say();
labelFunc047C_0448:
	if (!(event == 0x0000)) goto labelFunc047C_0456;
	Func092E(0xFF84);
labelFunc047C_0456:
	return;
}


