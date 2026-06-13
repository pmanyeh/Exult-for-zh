#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func098D 0x98D ();
extern var Func0932 0x932 (var var0000);
extern void Func0976 0x976 (var var0000, var var0001);
extern void Func0936 0x936 (var var0000, var var0001);
extern void Func092E 0x92E (var var0000);
extern void Func08F0 0x8F0 ();

void Func044F object#(0x44F) ()
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

	var0000 = Func0954();
	var0001 = UI_get_item_flag(0xFFB1, 0x001C);
	var0002 = Func097D(0xFE9B, 0x0001, 0x011D, 0xFE99, 0x0006);
	var0003 = false;
	if (!(event == 0x0001)) goto labelFunc044F_005A;
	UI_item_say(0xFE9C, "@Hail, Knight.@");
	0xFFB1->Func07D1();
	Func097F(0xFFB1, "@Hail.@", 0x0002);
	UI_set_schedule_type(0xFFB1, 0x0003);
labelFunc044F_005A:
	if (!(event == 0x0000)) goto labelFunc044F_00B1;
	if (!gflags[0x0083]) goto labelFunc044F_00B1;
	var0004 = UI_die_roll(0x0001, 0x0003);
	if (!(var0004 == 0x0001)) goto labelFunc044F_0089;
	UI_item_say(0xFFB1, "@Strong hit!@");
labelFunc044F_0089:
	if (!(var0004 == 0x0002)) goto labelFunc044F_009D;
	UI_item_say(0xFFB1, "@Nice form!@");
labelFunc044F_009D:
	if (!(var0004 == 0x0003)) goto labelFunc044F_00B1;
	UI_item_say(0xFFB1, "@I could do better.@");
labelFunc044F_00B1:
	if (!(event == 0x0007)) goto labelFunc044F_0182;
	if (!gflags[0x0083]) goto labelFunc044F_0172;
	var0005 = UI_get_oppressor(0xFFB1);
	var0005 = (0x0000 - var0005);
	if (!(!var0005)) goto labelFunc044F_00E0;
	var0005 = 0xFE9C;
labelFunc044F_00E0:
	if (!((var0005 != 0xFE9C) && (!(var0005 in Func098D())))) goto labelFunc044F_014B;
	var0000 = Func098D();
	var0000 = (var0000 & 0xFE9C);
	enum();
labelFunc044F_0104:
	for (var0008 in var0000 with var0006 to var0007) attend labelFunc044F_011E;
	if (!Func0932(var0008)) goto labelFunc044F_011B;
	goto labelFunc044F_0124;
labelFunc044F_011B:
	goto labelFunc044F_0104;
labelFunc044F_011E:
	var0008 = 0xFE9C;
labelFunc044F_0124:
	UI_set_opponent(0xFFB1, var0008);
	UI_set_opponent(var0005, var0008);
	Func0976(0xFFB1, 0x0003);
	Func0976(var0005, 0x0003);
	return;
labelFunc044F_014B:
	if (!(!gflags[0x0007])) goto labelFunc044F_0168;
	gflags[0x0007] = true;
	Func0936(UI_get_npc_object(var0005), UI_get_npc_object(0xFFB1));
	return;
labelFunc044F_0168:
	Func092E(var0005);
	return;
	goto labelFunc044F_0182;
labelFunc044F_0172:
	var0009 = UI_execute_usecode_array(item, [(byte)0x55, 0x01D0]);
labelFunc044F_0182:
	if (!(event == 0x0009)) goto labelFunc044F_060D;
	UI_clear_item_say(0xFFB1);
	UI_run_schedule(0xFFB1);
	UI_show_npc_face0(0xFFB1, 0x0000);
	Func08F0();
	if (!(!var0001)) goto labelFunc044F_01BD;
	message("\"What can I do for thee? I am Templar.\"");
	say();
	UI_set_item_flag(0xFFB1, 0x001C);
	goto labelFunc044F_01C1;
labelFunc044F_01BD:
	message("\"Yes?\"");
	say();
labelFunc044F_01C1:
	UI_add_answer("duties");
	if (!(gflags[0x00A0] && ((!gflags[0x0296]) && gflags[0x0048]))) goto labelFunc044F_01DE;
	UI_add_answer("grisly brush");
labelFunc044F_01DE:
	if (!(gflags[0x00A4] && gflags[0x0048])) goto labelFunc044F_01EF;
	UI_add_answer("Goblins");
labelFunc044F_01EF:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc044F_0208;
	UI_add_answer("brown bottle");
labelFunc044F_0208:
	if (!(gflags[0x01CA] && gflags[0x0048])) goto labelFunc044F_0219;
	UI_add_answer("Argus");
labelFunc044F_0219:
	if (!gflags[0x0048]) goto labelFunc044F_0226;
	UI_add_answer("traitor");
labelFunc044F_0226:
	UI_add_answer("bye");
labelFunc044F_022D:
	converse attend labelFunc044F_060C;
	case "grisly brush" attend labelFunc044F_0263:
	UI_remove_answer("grisly brush");
	message("\"A peculiar brush? I suspect that I already know what it is, but let me see...\"");
	say();
	if (!var0002) goto labelFunc044F_025F;
	message("\"That is a Goblin hairbrush! Made out of the bones of their victims, or so the legends claim.\"");
	say();
	message("\"Perhaps crafted from the thigh bone of one of mine old friends. Someday, thou or I too may be odd bits of furnishings in some Goblin hut!\"");
	say();
	gflags[0x0296] = true;
	UI_add_answer("Goblin artifacts");
	goto labelFunc044F_0263;
labelFunc044F_025F:
	message("\"I cannot identify the object if thou dost not show it to me. I will not waste my time making wild guesses.\"");
	say();
labelFunc044F_0263:
	case "Goblin artifacts" attend labelFunc044F_028D:
	UI_remove_answer("Goblin artifacts");
	message("\"Goblins have some pretty strange things. Jewelry made from human bones. Drums made with human skin. Much broken glass. Very macabre.\"");
	say();
	message("\"I suspect their own village must be brimming with such little nightmares.\"");
	say();
	message("\"They eat nearly anything, except their own kind. Goblins are especially fond of children. We had to build the city walls to keep their scouts from stealing our babies.\"");
	say();
	message("\"The Goblins consider the pelts of the Gwani to be great prizes -- thou canst recognize a Goblin chief by the pelt he wears.\"");
	say();
	message("\"The chief always keeps the prize artifacts for himself. But he must lock them away in a safe place, or his followers will steal them!\"");
	say();
	UI_add_answer("Gwani pelts");
labelFunc044F_028D:
	case "Gwani pelts" attend labelFunc044F_02A4:
	UI_remove_answer("Gwani pelts");
	message("\"The furs are taken from the Gwani, a race of fierce warriors which live in the far north. They are said to be even more vicious than the Goblins.\"");
	say();
	message("\"Gwani fur provides great warmth, but it is also valued for its great beauty -- it sparkles in the light.\"");
	say();
labelFunc044F_02A4:
	case "duties" attend labelFunc044F_02ED:
	UI_remove_answer("duties");
	if (!(!gflags[0x0048])) goto labelFunc044F_02DC;
	message("\"What business is it of thee, stranger? Canst thou not see that I am recovering from wounds?\"");
	say();
	message("\"I do not wish to spend my limited vitality in idle chatter. I am a warrior, not a clerk...\"");
	say();
	Func097F(0xFFB1, "@Excuse me...@", 0x0000);
	UI_set_schedule_type(0xFFB1, 0x0014);
	abort;
	goto labelFunc044F_02ED;
labelFunc044F_02DC:
	message("\"I am a Knight of Monitor, and a member of the Command of the Bear. I also serve Lord Marsten as his tactical adviser.\"");
	say();
	UI_add_answer(["Command of the Bear", "adviser"]);
labelFunc044F_02ED:
	case "Command of the Bear" attend labelFunc044F_0300:
	UI_remove_answer("Command of the Bear");
	message("\"We are by far the strongest of the three commands. The envy of the Serpent Isle.\"");
	say();
labelFunc044F_0300:
	case "adviser" attend labelFunc044F_033B:
	UI_remove_answer("adviser");
	message("\"Adviser for military matters, that is. Some consider me to be an expert in tactics.\"");
	say();
	message("\"For instance, hast thou ever noticed that the Goblins tend to attack in patterns? By observing them, I can sometimes predict when and how they are going to strike next. I like to imagine what it must be like, to be huddled around the fires of their village as they draw their plans against us. The better I can understand them, the better I can defend against them.\"");
	say();
	if (!gflags[0x0048]) goto labelFunc044F_0337;
	UI_push_answers();
	UI_add_answer(["patterns", "when", "how", "change subject"]);
	goto labelFunc044F_033B;
labelFunc044F_0337:
	message("\"But I must not speak of these things to a stranger. Thou couldst be a spy for them...\"");
	say();
labelFunc044F_033B:
	case "patterns" attend labelFunc044F_035A:
	UI_remove_answer("patterns");
	message("\"They are creatures of habit, to be sure. If thou dost know their customs, then thou hast the knowledge to defeat them.\"");
	say();
	message("\"They always set their travel camps in the same pattern. The chieftain's hut is the largest, and is in the center.\"");
	say();
	message("\"Each day ends with a drunken revel, and then the exhausted celebrants stumble to their huts and sleep until long past daybreak.\"");
	say();
	message("\"When raiding a Goblin camp, strike in the morning, just as the sun is coming up. This is when the guards are fewest, and the chance for success is greatest.\"");
	say();
labelFunc044F_035A:
	case "when" attend labelFunc044F_036D:
	UI_remove_answer("when");
	message("\"The Goblins do not seem to like the sun and their most favored time to strike their enemies is precisely after the sun hath set for the night. Many is the time when Goblin armies have marched to the edge of a city or encampment and then they have waited until nightfall. Often these sieges lasted all night long.\"");
	say();
labelFunc044F_036D:
	case "how" attend labelFunc044F_0380:
	UI_remove_answer("how");
	message("\"The Goblins do not practice any sophisticated sort of military strategy or tactics. Mostly they rely on sheer numbers as well as the fear that they inspire in the hearts of men and women.\"");
	say();
labelFunc044F_0380:
	case "change subject" attend labelFunc044F_0390:
	UI_pop_answers();
	message("\"What else dost thou desire of me?\"");
	say();
labelFunc044F_0390:
	case "Goblins" attend labelFunc044F_03C5:
	UI_remove_answer("Goblins");
	message("\"'Tis a bloody war we are fighting. That I am alive, today, speaking with thee is a miracle.\"");
	say();
	message("\"The Goblins are foul but fascinating creatures. They are more intelligent than one would think. In a bestial way, of course.\"");
	say();
	message("\"If only I could speak with their general Pomdirgun! Imagine what that mind must be like -- so calculating, so incisive, yet so utterly inhuman.\"");
	say();
	if (!gflags[0x002C]) goto labelFunc044F_03B5;
	message("\"Perhaps in my next life I shall see him again. But not for any prolonged period of time, I hope.\"");
	say();
labelFunc044F_03B5:
	UI_add_answer(["war", "miracle", "Pomdirgun"]);
labelFunc044F_03C5:
	case "war" attend labelFunc044F_0415:
	UI_remove_answer("war");
	message("\"We have been fighting the damn Goblins since our forefathers landed on these shores. This city was built on the site of a Goblin village.\"");
	say();
	var000A = Func097D(0xFE9B, 0x0001, 0x017F, 0xFE99, 0x0001);
	if (!(gflags[0x002C] || var000A)) goto labelFunc044F_0402;
	message("\"Now that thou hast recovered the Helm of Monitor from their fiendish hands, the scales have again tipped in our favor.\"");
	say();
	message("\"How I look forward to the day when the Goblins have been exterminated from this land!\"");
	say();
	goto labelFunc044F_040E;
labelFunc044F_0402:
	message("\"There had been a balance of sorts, until the ambush of Astrid's patrol. As Knight Champion, she wore the Helm of Monitor, and now the Goblins have it.\"");
	say();
	message("\"The power of the Helm cannot be understated! With it, Pomdirgun can once again assemble the Goblin Horde, and invade the lands of Men.\"");
	say();
	message("\"Somehow, we must regain the Helm!\"");
	say();
labelFunc044F_040E:
	UI_add_answer("forefathers");
labelFunc044F_0415:
	case "forefathers" attend labelFunc044F_0441:
	UI_remove_answer("forefathers");
	message("\"The greatest battle of the Goblin wars took place in the days when Gurnordir was King of the Goblins.\"");
	say();
	message("\"He was the mightiest Goblin who ever lived, and he led the Goblin Horde in the invasion which placed Monitor itself under siege.\"");
	say();
	message("\"The Goblins stormed the walls, and fought their way inside the city. However, the Bears surrounded them, and Gurnordir was at last slain.\"");
	say();
	message("\"From his dead body was taken the Helm of Courage, and his ashes are enshrined in Knight's Test.\"");
	say();
	UI_add_answer(["Helm of Courage", "ashes"]);
labelFunc044F_0441:
	case "Helm of Courage" attend labelFunc044F_045C:
	UI_remove_answer("Helm of Courage");
	message("\"We now call it the Helm of Monitor, and it is worn by the Knight Champion. But it first came from the Goblins.\"");
	say();
	message("\"Whence it came before they got their hands upon it, no one can say.\"");
	say();
	message("\"The Helm doth have mystical powers, which we believe are due to being imbued with the essence of Courage.\"");
	say();
labelFunc044F_045C:
	case "ashes" attend labelFunc044F_048C:
	UI_remove_answer("ashes");
	message("\"As Renfry can tell thee, we Monitorians have a special reverence for the Ashes of the Dead.\"");
	say();
	message("\"When a Knight dies, his body must be brought back to Monitor for cremation. The ashes are then placed in the Crypts.\"");
	say();
	message("\"In the case of Gurnordir, his ashes have a strange power. Like all ashes, they are imbued with the essence of the living being.\"");
	say();
	if (!gflags[0x004A]) goto labelFunc044F_0484;
	message("\"As thou hast seen, the ashes are used in the climax of the Test of Knighthood. Somehow, they have the power to summon one's totem animal.\"");
	say();
	goto labelFunc044F_048C;
labelFunc044F_0484:
	message("\"In the climax of the Test of Knighthood, one doth mix one's own blood with the Ashes of Gurnordir.\"");
	say();
	message("\"Through a mystical process, this causes one's own totem animal to appear. Thus, it is revealed to which Command thou dost belong.\"");
	say();
labelFunc044F_048C:
	case "miracle" attend labelFunc044F_04C9:
	UI_remove_answer("miracle");
	message("\"It shames me to say that I am the sole survivor from the ambush of Astrid's patrol. The Goblins left me for dead, but I was merely dazed.\"");
	say();
	message("\"There was a heap of bodies where Astrid had last been fighting, but her body was not there. It is obvious to me that they took her alive.\"");
	say();
	message("\"I managed to reach Knight's Test, where Shmed gave me shelter and sent for Harnna to bandage my wounds. When I recover, I am going there again!\"");
	say();
	UI_push_answers();
	if (!(!var0003)) goto labelFunc044F_04B9;
	UI_add_answer("ambush");
labelFunc044F_04B9:
	UI_add_answer(["Astrid", "alive", "change subject"]);
labelFunc044F_04C9:
	case "ambush", "traitor" attend labelFunc044F_0510:
	UI_remove_answer("ambush");
	UI_remove_answer("traitor");
	var0003 = true;
	if (!gflags[0x0044]) goto labelFunc044F_04F3;
	message("\"A Goblin magically transformed himself into a man and hid amongst us as Simon. Amazing! One day we must learn the secret of how they could accomplish this thing.\"");
	say();
	goto labelFunc044F_0510;
labelFunc044F_04F3:
	message("\"It was as if they knew our plans! They were lying in wait across our path, and were upon us in moments. What carnage!\"");
	say();
	message("\"It grieves me to say this, but there must be a traitor in Monitor. Someone must have revealed our plans to the Goblins.\"");
	say();
	message("\"As a Bear, I know that our Command is innocent. Caladin doth have many faults, but being devious is not one of them.\"");
	say();
	message("\"The traitor is either a Wolf or a Leopard. Perhaps if thou dost ask around, thou mightest find clues in this mystery.\"");
	say();
	UI_add_answer(["Wolf", "Leopard"]);
labelFunc044F_0510:
	case "Wolf" attend labelFunc044F_052F:
	UI_remove_answer("Wolf");
	message("\"The Wolves have been disloyal to Monitor since Brendann took charge. He would have us guard the roads, not the city itself!\"");
	say();
	message("\"If anyone is the spy, it must be Krayg. He is often out in the woods, alone -- and he never brings back booty or prisoners.\"");
	say();
	message("\"What can he be doing? He says that he doth have an old injury, but he's merely a snivelling coward.\"");
	say();
	gflags[0x004E] = true;
labelFunc044F_052F:
	case "Leopard" attend labelFunc044F_0546:
	UI_remove_answer("Leopard");
	message("\"Marsten, the leader of the Leopard Command, officially runs the town and he doth have his hands full. Not only are there the Goblins to worry about, but there is also a thief stealing money from the treasury. Spektor, his right hand man, is in charge of that as well. Needless to say it hath made things unpleasant between the commands as of late.\"");
	say();
	gflags[0x00B6] = true;
labelFunc044F_0546:
	case "Astrid" attend labelFunc044F_0559:
	UI_remove_answer("Astrid");
	message("\"She was the greatest Knight that I have ever had the honor of fighting beside. Carrying on her standard is a challenge to which I will dedicate myself for the rest of my life.\"");
	say();
labelFunc044F_0559:
	case "alive" attend labelFunc044F_056C:
	UI_remove_answer("alive");
	message("\"Being captured alive by the Goblins is a far worse fate than being killed by them on the battlefield. Survivors tell horrifying stories of torture, mutilation and things I should not even speak of.\"");
	say();
labelFunc044F_056C:
	case "Pomdirgun" attend labelFunc044F_0590:
	UI_remove_answer("Pomdirgun");
	if (!gflags[0x002C]) goto labelFunc044F_0588;
	message("\"With Pomdirgun dead, those wicked Goblins will be much easier to defeat. His evil brain was constantly able to devise strategies that perplexed us. Thou hast done us a great service and I thank thee.\"");
	say();
	goto labelFunc044F_0590;
labelFunc044F_0588:
	message("\"He is the Goblin leader -- a king or a chieftain, depending on how one translates the Goblin tongue.\"");
	say();
	message("\"Pomdirgun claims to be a direct descendant of Gurnordir. Having heard him curse us on the field of battle, I know that he speaks our tongue -- quite a feat for one of those creatures.\"");
	say();
labelFunc044F_0590:
	case "brown bottle" attend labelFunc044F_05C7:
	UI_remove_answer("brown bottle");
	message("\"How strange! Thou wouldst never find an intact bottle in a Goblin camp -- the creatures delight in smashing glass. Their barbarian urges are very strong.\"");
	say();
	message("\"This must have been left by a Man. At last -- evidence to identify our traitor!\"");
	say();
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc044F_05C3;
	message("\"Such an unusual bottle... Perhaps Lucilla can identify it for thee.\"");
	say();
	goto labelFunc044F_05C7;
labelFunc044F_05C3:
	message("\"Thou must inquire to see if anyone can identify this bottle.\"");
	say();
labelFunc044F_05C7:
	case "Argus" attend labelFunc044F_05E2:
	UI_remove_answer("Argus");
	message("\"He was a Knight of Monitor with whom I had an altercation. He took bribes, and when my friend accused him of it, Argus slew him on the List Field.\"");
	say();
	message("\"Then there was a hue and cry, for the honor of the List Field was at stake! The Wolves wanted to protect Argus, but the Bears were for justice!\"");
	say();
	message("\"Shortly afterward, Argus left town. He must have been guilty, or he would have stayed to prove his innocence.\"");
	say();
labelFunc044F_05E2:
	case "bye" attend labelFunc044F_0609:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Bye!@", 0x0000);
	Func097F(0xFFB1, "@Vigilance!@", 0x0002);
	goto labelFunc044F_060C;
labelFunc044F_0609:
	goto labelFunc044F_022D;
labelFunc044F_060C:
	endconv;
labelFunc044F_060D:
	return;
}


