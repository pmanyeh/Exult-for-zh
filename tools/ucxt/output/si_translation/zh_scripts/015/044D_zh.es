#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0988 0x988 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func07D2 object#(0x7D2) ();
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func0955 0x955 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0996 0x996 (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);
extern void Func0865 0x865 ();

void Func044D object#(0x44D) ()
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

	var0000 = Func0954();
	var0001 = Func0953();
	if (!((event == 0x000D) || (event == 0x000E))) goto labelFunc044D_0024;
	UI_set_schedule_type(0xFFB3, 0x000C);
labelFunc044D_0024:
	if (!(event == 0x0000)) goto labelFunc044D_024B;
	if (!gflags[0x0092]) goto labelFunc044D_0094;
	var0002 = UI_die_roll(0x0001, 0x0003);
	if (!(var0002 == 0x0001)) goto labelFunc044D_0053;
	UI_item_say(0xFFB3, "@My money...@");
labelFunc044D_0053:
	if (!(var0002 == 0x0002)) goto labelFunc044D_007D;
	UI_item_say(0xFFB3, "@It was his plan!@");
	if (!UI_npc_nearby(0xFFBB)) goto labelFunc044D_007D;
	Func097F(0xFFBB, "@Quiet!@", 0x0003);
labelFunc044D_007D:
	if (!(var0002 == 0x0003)) goto labelFunc044D_0091;
	UI_item_say(0xFFB3, "@I hate thee!@");
labelFunc044D_0091:
	goto labelFunc044D_024B;
labelFunc044D_0094:
	var0003 = [0xFFC1, 0xFF6A];
	if (!(!gflags[0x0038])) goto labelFunc044D_00B4;
	var0003 = (var0003 & 0xFFBB);
	goto labelFunc044D_00BE;
labelFunc044D_00B4:
	var0003 = (var0003 & 0xFFB6);
labelFunc044D_00BE:
	enum();
labelFunc044D_00BF:
	for (var0006 in var0003 with var0004 to var0005) attend labelFunc044D_00E4;
	if (!(!UI_npc_nearby(var0006))) goto labelFunc044D_00E1;
	var0003 = Func0988(var0006, var0003);
labelFunc044D_00E1:
	goto labelFunc044D_00BF;
labelFunc044D_00E4:
	if (!(var0003 == [])) goto labelFunc044D_00EF;
	abort;
labelFunc044D_00EF:
	UI_clear_item_say(0xFFB3);
	var0007 = var0003[UI_get_random(UI_get_array_size(var0003))];
	UI_clear_item_say(var0007);
	var0008 = UI_get_random(0x0006);
	if (!(var0008 == 0x0001)) goto labelFunc044D_0138;
	UI_item_say(0xFFB3, "@Stop the rumors!@");
	Func097F(var0007, "@Impossible.@", 0x0003);
labelFunc044D_0138:
	if (!(var0008 == 0x0002)) goto labelFunc044D_014C;
	UI_item_say(0xFFB3, "@Must write this down.@");
labelFunc044D_014C:
	if (!(var0008 == 0x0003)) goto labelFunc044D_0192;
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc044D_017C;
	UI_item_say(var0007, "@The Goblins are weak.@");
	Func097F(0xFFB3, "@Be cautious...@", 0x0003);
	goto labelFunc044D_0192;
labelFunc044D_017C:
	UI_item_say(var0007, "@Where are the Goblins?@");
	Func097F(0xFFB3, "@Send a patrol.@", 0x0003);
labelFunc044D_0192:
	if (!(var0008 == 0x0004)) goto labelFunc044D_01D9;
	if (!(!gflags[0x00B4])) goto labelFunc044D_01C3;
	UI_item_say(0xFFB3, "@A storm approaches.@");
	Func097F(var0007, "@Another one?@", 0x0003);
	UI_set_weather(0x0002);
	goto labelFunc044D_01D9;
labelFunc044D_01C3:
	UI_item_say(0xFFB3, "@I am not a thief.@");
	Func097F(var0007, "@Of course not.@", 0x0003);
labelFunc044D_01D9:
	if (!(var0008 == 0x0005)) goto labelFunc044D_0237;
	if (!gflags[0x0044]) goto labelFunc044D_0202;
	UI_item_say(0xFFB3, "@Poor Simon...@");
	Func097F(var0007, "@But he was a traitor!@", 0x0002);
	goto labelFunc044D_0237;
labelFunc044D_0202:
	if (!gflags[0x0038]) goto labelFunc044D_0221;
	UI_item_say(0xFFB3, "@Kill Marsten now!@");
	Func097F(var0007, "@Why so hastily?@", 0x0002);
	goto labelFunc044D_0237;
labelFunc044D_0221:
	UI_item_say(0xFFB3, "@There is no traitor.@");
	Func097F(var0007, "@I disagree.@", 0x0002);
labelFunc044D_0237:
	if (!(var0008 == 0x0006)) goto labelFunc044D_024B;
	UI_item_say(0xFFB3, "@Money is short.@");
labelFunc044D_024B:
	if (!((event == 0x0007) && UI_get_item_flag(0xFFB3, 0x001D))) goto labelFunc044D_02AF;
	if (!gflags[0x0094]) goto labelFunc044D_029D;
	UI_show_npc_face0(0xFFB3, 0x0000);
	message("\"Very well, I have been found out. Listen to my secrets, brute, for I must confess all with my dying breath...\"");
	say();
	message("\"Yes, Marsten and I did plot with the Goblins -- but we did think to cheat them in the end! Then the Leopards would have ruled Monitor.\"");
	say();
	message("\"And it was I who stole from the town treasury, for we needed the money to acquire a cache of powerful weapons -- explosive weapons...\"");
	say();
	message("\"The blood of Cantra's father weighs upon my soul. He did stumble into our secret, so he had to be killed. If our secret had not been protected, Marsten would have killed me.\"");
	say();
	UI_clear_item_flag(0xFFB3, 0x001D);
	UI_reduce_health(0xFFB3, 0x0032, 0x0000);
	gflags[0x00B4] = true;
	abort;
	goto labelFunc044D_02AF;
labelFunc044D_029D:
	var0009 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc044D_02AF:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFB3) != 0x000F))) goto labelFunc044D_0323;
	UI_item_say(0xFE9C, "@Greetings, milord.@");
	0xFFB3->Func07D1();
	if (!gflags[0x0092]) goto labelFunc044D_030D;
	UI_set_schedule_type(0xFFB3, 0x000F);
	Func097F(0xFFB3, "@Not thee!@", 0x0002);
	0xFFB3->Func07D2();
	var0009 = UI_delayed_execute_usecode_array(0xFFB3, [(byte)0x23, (byte)0x55, 0x044D], 0x0007);
	abort;
labelFunc044D_030D:
	Func097F(0xFFB3, "Yes?", 0x0002);
	UI_set_schedule_type(0xFFB3, 0x0003);
labelFunc044D_0323:
	if (!(event == 0x0002)) goto labelFunc044D_032E;
	goto labelFunc044D_0336;
labelFunc044D_032E:
	if (!(event == 0x0009)) goto labelFunc044D_0877;
labelFunc044D_0336:
	UI_run_schedule(0xFFB3);
	UI_clear_item_say(0xFFB3);
	UI_show_npc_face0(0xFFB3, 0x0000);
	if (!gflags[0x0092]) goto labelFunc044D_0374;
	if (!gflags[0x00B4]) goto labelFunc044D_0361;
	message("\"Mine actions stand beyond the shallow morality of any tribunal. No court can condemn me. The only crime of which I am truly guilty is that I allowed myself to be caught.\"");
	say();
	goto labelFunc044D_0371;
labelFunc044D_0361:
	message("\"Very well, I have been found out. There is no point in denying my guilt any longer. It was I who stole the money from the treasury.\"");
	say();
	message("\"I was in league with Lord Marsten, who schemed to become King of Monitor. The Bears and Wolves would have been powerless!\"");
	say();
	message("\"Cantra's father stumbled into our secret cave, so he had to be killed. If the secret of the explosive weapons had been revealed, Marsten would have killed me...\"");
	say();
	gflags[0x00B4] = true;
labelFunc044D_0371:
	goto labelFunc044D_0414;
labelFunc044D_0374:
	var000A = UI_get_item_flag(0xFFB3, 0x001C);
	if (!var000A) goto labelFunc044D_038E;
	message("\"Yes, how may I help?\"");
	say();
	goto labelFunc044D_039C;
labelFunc044D_038E:
	message("\"I am Spektor, treasurer of Monitor.\"");
	say();
	UI_set_item_flag(0xFFB3, 0x001C);
labelFunc044D_039C:
	UI_add_answer(["duties", "exchange coins"]);
	if (!(gflags[0x0093] && (!(gflags[0x0038] || gflags[0x00B3])))) goto labelFunc044D_03BF;
	UI_add_answer("know traitor");
labelFunc044D_03BF:
	if (!(gflags[0x00A2] && (!gflags[0x0299]))) goto labelFunc044D_03D1;
	UI_add_answer("strange coins");
labelFunc044D_03D1:
	if (!gflags[0x00A7]) goto labelFunc044D_03DE;
	UI_add_answer("Gwenno");
labelFunc044D_03DE:
	if (!(!(gflags[0x0078] && gflags[0x00A9]))) goto labelFunc044D_03F0;
	UI_add_answer("enchanter");
labelFunc044D_03F0:
	if (!(gflags[0x00B3] && (!gflags[0x0038]))) goto labelFunc044D_0402;
	UI_add_answer("evidence");
labelFunc044D_0402:
	if (!(gflags[0x00B6] && (!gflags[0x00B4]))) goto labelFunc044D_0414;
	UI_add_answer("thief");
labelFunc044D_0414:
	UI_add_answer("bye");
labelFunc044D_041B:
	converse attend labelFunc044D_0876;
	case "duties" attend labelFunc044D_0449:
	UI_remove_answer("duties");
	message("\"Frankly, I do so many things. I am Monitor's treasurer. Lord Marsten may order things done, but I must find a way to pay for it all!\"");
	say();
	message("\"I handle the books and the paperwork, and I'm the local money exchanger. I also collect and administer the taxes.\"");
	say();
	message("\"Frankly, I'm not much of a fighter, even though I am a Knight.\"");
	say();
	UI_add_answer(["taxes", "Knight", "exchange coins"]);
labelFunc044D_0449:
	case "taxes" attend labelFunc044D_047F:
	UI_remove_answer("taxes");
	message("\"Our Pikemen patrol the major roads connecting Monitor with Fawn and Sleeping Bull, and man the guard towers.\"");
	say();
	message("\"In better times, caravans travelled these routes, and we collected a fat reward from merchants eager for our protection.\"");
	say();
	if (!UI_get_item_flag(0xFEF7, 0x0004)) goto labelFunc044D_0474;
	message("\"With the Goblin King slain, perhaps the roads will again be filled. But the storms also discourage travel...\"");
	say();
	goto labelFunc044D_047F;
labelFunc044D_0474:
	message("\"But now, the rumors of a gathering Goblin invasion have scared the travellers off the roads! Frankly, this is nonsense.\"");
	say();
	UI_add_answer("invasion");
labelFunc044D_047F:
	case "invasion" attend labelFunc044D_0492:
	UI_remove_answer("invasion");
	message("\"The Knights of Monitor have repelled such Goblin aggressions successfully in the past and they shall do so again.\"");
	say();
labelFunc044D_0492:
	case "Knight" attend labelFunc044D_04BF:
	UI_remove_answer("Knight");
	message("\"Well, I dutifully passed the Test of Knighthood when I was fifteen. But frankly, not everyone was born to be a Knight. I admit it.\"");
	say();
	message("\"What I am is an intellectual. Other Knights may scoff, but I don't care. I might be an easy target on the List Field, but in a debate I'm a killer!\"");
	say();
	if (!(!gflags[0x004A])) goto labelFunc044D_04BF;
	message("\"Perhaps thou shouldst consider taking the Test of Knighthood. It is not so difficult, with proper training.\"");
	say();
	message("\"We citizens are so much nicer to thee when thou art a Knight, rather than a stranger. We distrust outsiders.\"");
	say();
	UI_add_answer("Test of Knighthood");
labelFunc044D_04BF:
	case "thief" attend labelFunc044D_04F1:
	UI_remove_answer("thief");
	message("\"Yes, frankly, 'tis true. But I do not like to talk about it.\"");
	say();
	message("\"Someone in Monitor is a thief. Money is being taken from the treasury. 'Tis a mystery.\"");
	say();
	message("\"The Bears think the Wolves are responsible. And, of course, the Wolves think the Bears are responsible. We Leopards are doing our best to keep them from killing each other.\"");
	say();
	message("\"Please keep this to thyself. Only a few select individuals are aware of this crime. Frankly, we do not want a panic.\"");
	say();
	UI_add_answer(["Bears", "Wolves", "Leopards", "frankly"]);
labelFunc044D_04F1:
	case "Bears", "Wolves", "Leopards" attend labelFunc044D_051B:
	UI_remove_answer(["Bears", "Wolves", "Leopards"]);
	message("\"I tire of this entire system. Wolves! Bears! Leopards! Why can we not be united, rather than divided into Commands?\"");
	say();
	message("\"I am a Leopard, and frankly, we're the only level- headed ones. When a Leopard like Lord Marsten is in residence as Lord of Monitor, things are much more in... balance.\"");
	say();
	message("\"As for the Wolves and the Bears, they are like children. \"");
	say();
labelFunc044D_051B:
	case "frankly" attend labelFunc044D_052E:
	UI_remove_answer("frankly");
	message("\"Yes, I do say that a lot, do I not? I apologize. 'Tis a bad habit. Frankly... er, to tell the truth, I should stop.\"");
	say();
labelFunc044D_052E:
	case "Gwenno" attend labelFunc044D_058E:
	UI_remove_answer("Gwenno");
	message("\"There was a woman here a while ago who spent much time in the Hall of Monitor, examining our museum display. Very friendly.\"");
	say();
	var0007 = Func0992(0xFFFD, "@Where did she go from here? Dost thou know?@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc044D_0562;
	UI_set_conversation_slot(0x0000);
labelFunc044D_0562:
	message("\"She left here for the east. To study at the library on Monk Isle, as I recall.\"");
	say();
	UI_add_answer("Monk Isle");
	var0007 = Func0992(0xFFFD, "@Avatar! We must journey onward and find her!@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc044D_058E;
	UI_set_conversation_slot(0x0000);
labelFunc044D_058E:
	case "Monk Isle" attend labelFunc044D_05B6:
	UI_remove_answer("Monk Isle");
	message("\"Frankly, 'tis a mysterious place. I do not know much about it, except the legend that wise monks dwell there.\"");
	say();
	message("\"The only way to go there is by ship, but there are no sailors here -- the storms have discouraged them.\"");
	say();
	message("\"Perhaps thou couldst hire a captain in Fawn -- which is the city of fishermen -- or at the hamlet of Sleeping Bull.\"");
	say();
	UI_add_answer(["Fawn", "Sleeping Bull"]);
labelFunc044D_05B6:
	case "Fawn" attend labelFunc044D_05C9:
	UI_remove_answer("Fawn");
	message("\"Fawn is a coastal town filled with the worshippers of beauty. Frankly, I find those people to be a little too superficial for my liking.\"");
	say();
labelFunc044D_05C9:
	case "Sleeping Bull" attend labelFunc044D_05E7:
	UI_remove_answer("Sleeping Bull");
	message("\"The inn there is a very old establishment, built in the days before the founding of the Three Cities. The village is built around the inn.\"");
	say();
	message("\"Since it is such a crossroads, thou canst often meet all sorts of interesting folk there. And it is the direct link to the City of Mages.\"");
	say();
	UI_add_answer("City of Mages");
labelFunc044D_05E7:
	case "City of Mages" attend labelFunc044D_0626:
	UI_remove_answer("City of Mages");
	message("\"A place where I shall never be seen! I distrust magic in all its forms.\"");
	say();
	message("\"Moonshade is on the Isle of Beyond, which is across the channel from Sleeping Bull. Thou wouldst need a boat to journey there.\"");
	say();
	if (!(!gflags[0x00DB])) goto labelFunc044D_0626;
	var0007 = Func0992(0xFFFD, "@Perhaps thou couldst obtain a new spellbook there...@", 0x0000, false);
	if (!(var0007 != 0xFE9C)) goto labelFunc044D_0626;
	UI_set_conversation_slot(0x0000);
labelFunc044D_0626:
	case "Test of Knighthood" attend labelFunc044D_0641:
	UI_remove_answer("Test of Knighthood");
	message("\"'Tis actually quite easy. Do not believe what the Knights will tell thee. Frankly, if I can pass it, anyone can!\"");
	say();
	message("\"If thou desirest to know more, I would suggest speaking with Caladin. He is the instructor for young Knight candidates.\"");
	say();
	message("\"Also, thou couldst speak with little Cantra. She is preparing to take the Test next month, and is full of information.\"");
	say();
labelFunc044D_0641:
	case "know traitor" attend labelFunc044D_0767:
	UI_remove_answer("know traitor");
	if (!gflags[0x0094]) goto labelFunc044D_0674;
	message("\"What!? What dost thou mean? Art thou calling me a traitor? I may not be much of a fighter, but I can defend myself!\"");
	say();
	UI_set_schedule_type(0xFFB3, 0x0014);
	Func097F(0xFFB3, "@Beware!@", 0x0000);
	abort;
	goto labelFunc044D_0767;
labelFunc044D_0674:
	message("\"Marsten is the traitor? This is too incredible to believe. Hast thou proof?\"");
	say();
	if (!Func0955()) goto labelFunc044D_0756;
	message("\"I must see this. Might I see the evidence?\"");
	say();
	if (!(!(Func097D(0xFE9B, 0x0001, 0x031D, 0x0078, 0xFE99) || (Func097D(0xFE9B, 0x0001, 0x031D, 0x0079, 0xFE99) || Func097D(0xFE9B, 0x0001, 0x031D, 0x007A, 0xFE99))))) goto labelFunc044D_06DC;
	var0007 = Func0992(0xFFFD, "@We did not bring it with us...@", "@I did not bring it.@", false);
	UI_set_conversation_slot(0x0000);
	message("\"Then I can do nothing for thee. Unseen evidence is useless evidence.\"");
	say();
	goto labelFunc044D_0753;
labelFunc044D_06DC:
	if (!Func0955()) goto labelFunc044D_074F;
	var0009 = Func0996(0xFE9B, 0xFFB3, 0x0001, 0x031D, 0x0078, 0xFE99, 0x0000);
	var0009 = Func0996(0xFE9B, 0xFFB3, 0x0001, 0x031D, 0x0079, 0xFE99, 0x0000);
	var0009 = Func0996(0xFE9B, 0xFFB3, 0x0001, 0x031D, 0x007A, 0xFE99, 0x0000);
	message("\"I shall study this evidence, and if thou art right, I will bring it before the other Lords.\"");
	say();
	gflags[0x00B3] = true;
	message("\"Now leave me, so that I may peruse this matter.\"");
	say();
	Func097F(0xFFB3, "@Let me be.@", 0x0000);
	abort;
	goto labelFunc044D_0753;
labelFunc044D_074F:
	message("\"Then I can do nothing for thee. Unseen evidence is useless evidence.\"");
	say();
labelFunc044D_0753:
	goto labelFunc044D_0767;
labelFunc044D_0756:
	message("\"Then be on thy way! Marsten is the traitor -- what a lark!\"");
	say();
	Func097F(0xFFB3, "@Don't waste my time...@", 0x0000);
	abort;
labelFunc044D_0767:
	case "evidence" attend labelFunc044D_078D:
	UI_remove_answer("evidence");
	message("\"Give me time, ");
	message(var0000);
	message("! Such matters are not quickly resolved.\"");
	say();
	Func097F(0xFFB3, "@More time!@", 0x0000);
	abort;
labelFunc044D_078D:
	case "enchanter" attend labelFunc044D_07C1:
	UI_remove_answer("enchanter");
	if (!gflags[0x00B9]) goto labelFunc044D_07A9;
	message("\"I am still not certain if we can trust Iolo, that enchanter friend of thine. Tell him he had better be on his best behavior. That is a friendly warning.\"");
	say();
	goto labelFunc044D_07C1;
labelFunc044D_07A9:
	if (!gflags[0x00B5]) goto labelFunc044D_07BD;
	message("\"Perhaps thou shouldst pay me, say -- a fine -- yes, a fine! That's it. To pay for this rogue Iolo's misdeeds. After all, I am the city treasurer, thou dost know. So t'would be most proper.\"");
	say();
	UI_add_answer("fine");
	goto labelFunc044D_07C1;
labelFunc044D_07BD:
	message("\"Oh, thou must be speaking of that wild rogue mage that was recently arrested trying to disrupt Groat's funeral! I believe he said his name was Iolo. Thou shouldst speak with Lord Marsten. He dealt with him.\"");
	say();
labelFunc044D_07C1:
	case "fine" attend labelFunc044D_082A:
	UI_remove_answer("fine");
	message("\"Wouldst thou be willing to pay a fine of 30 Monetari?\"");
	say();
	var000B = Func0955();
	if (!var000B) goto labelFunc044D_0826;
	var000C = UI_remove_party_items(0x001E, 0x03B7, 0xFE99, 0xFE99, false);
	if (!var000C) goto labelFunc044D_081E;
	message("\"Very well. Here is the key to the offender's cell. Tell him to consider himself lucky. Seldom is the town of Monitor so forgiving of the trespasses of others.\"");
	say();
	var0009 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0068, 0x0000, 0x0000, true);
	gflags[0x00B9] = true;
	goto labelFunc044D_0823;
labelFunc044D_081E:
	message("\"Thou dost not have 30 Monetari! Art thou trying to swindle me! Bah!\"");
	say();
	abort;
labelFunc044D_0823:
	goto labelFunc044D_082A;
labelFunc044D_0826:
	message("\"So! Thy friend is not worth the price of justice, eh? Then let him rot!\"");
	say();
labelFunc044D_082A:
	case "exchange coins" attend labelFunc044D_0835:
	Func0865();
labelFunc044D_0835:
	case "strange coins" attend labelFunc044D_0848:
	UI_remove_answer("strange coins");
	message("\"The coins thou hast described are the currency of the city of Fawn. But where thou mayest have gotten them, without travelling to Fawn, I haven't a clue!\"");
	say();
labelFunc044D_0848:
	case "bye" attend labelFunc044D_0873:
	UI_remove_npc_face0();
	UI_remove_npc_face1();
	Func097F(0xFE9C, "Goodbye!", 0x0000);
	Func097F(0xFFB3, "Go in Courage!", 0x0002);
	goto labelFunc044D_0876;
labelFunc044D_0873:
	goto labelFunc044D_041B;
labelFunc044D_0876:
	endconv;
labelFunc044D_0877:
	return;
}


