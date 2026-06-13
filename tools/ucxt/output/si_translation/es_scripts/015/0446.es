#game "serpentisle"
// externs
extern void Func091C 0x91C ();
extern var Func0954 0x954 ();
extern void Func07D2 object#(0x7D2) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func07D1 object#(0x7D1) ();
extern void Func094E 0x94E (var var0000, var var0001);
extern var Func0942 0x942 (var var0000);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0956 0x956 (var var0000);
extern void Func0845 0x845 ();
extern void Func0846 0x846 ();
extern var Func0955 0x955 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0446 object#(0x446) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_object_position(item);
	if (!((var0000[0x0001] >= 0x0432) && ((var0000[0x0001] <= 0x0439) && ((var0000[0x0002] >= 0x03E4) && ((var0000[0x0002] <= 0x03EB) && (var0000[0x0003] < 0x0005)))))) goto labelFunc0446_0045;
	Func091C();
	abort;
labelFunc0446_0045:
	var0001 = Func0954();
	if (!(event == 0x0007)) goto labelFunc0446_0065;
	var0000 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x01D0]);
labelFunc0446_0065:
	if (!((event == 0x0001) && (UI_get_schedule_type(0xFFBA) != 0x000F))) goto labelFunc0446_014F;
	var0002 = UI_get_object_position(0xFFBA);
	if (!(gflags[0x0054] && ((UI_get_schedule_type(0xFFBA) == 0x000E) && ((var0002[0x0001] > 0x042F) && ((var0002[0x0001] < 0x043F) && ((var0002[0x0002] > 0x0A50) && (var0002[0x0002] < 0x0A5F))))))) goto labelFunc0446_0107;
	0xFFBA->Func07D2();
	UI_set_schedule_type(0xFFBA, 0x000F);
	Func097F(0xFFBA, "@Yes, love?@", 0x0002);
	var0000 = UI_delayed_execute_usecode_array(0xFFBA, [(byte)0x23, (byte)0x55, 0x02E6], 0x000A);
	UI_play_music(0x001C, Func09A0(0x0005, 0x0001));
	goto labelFunc0446_014F;
labelFunc0446_0107:
	UI_item_say(0xFE9C, "@Miss!@");
	0xFFBA->Func07D1();
	if (!UI_is_pc_female()) goto labelFunc0446_012D;
	Func097F(0xFFBA, "@Yes, dearie?@", 0x0002);
	goto labelFunc0446_0139;
labelFunc0446_012D:
	Func097F(0xFFBA, "@Yes, handsome?@", 0x0002);
labelFunc0446_0139:
	Func097F(0xFFBA, "Hello.", 0x0002);
	UI_set_schedule_type(0xFFBA, 0x0003);
labelFunc0446_014F:
	if (!(event == 0x0009)) goto labelFunc0446_07D5;
	UI_run_schedule(0xFFBA);
	UI_clear_item_say(0xFFBA);
	UI_show_npc_face0(0xFFBA, 0x0000);
	if (!(gflags[0x0054] && (UI_get_schedule_type(0xFFBA) == 0x000E))) goto labelFunc0446_0199;
	message("\"Oh, darling! Let us meet in my bedroom...\"");
	say();
	Func097F(0xFFBA, "@I am so sleepy...@", 0x0000);
	UI_run_schedule(0xFFBA);
	abort;
labelFunc0446_0199:
	if (!(!UI_get_item_flag(0xFFBA, 0x001C))) goto labelFunc0446_01E5;
	if (!(!UI_is_pc_female())) goto labelFunc0446_01B6;
	message("\"Forgive my boldness, but I must say that thou hast a fine build, milord! Surely, thou hast overcome many foes with the powerful thrust of thy weapon...\"");
	say();
	goto labelFunc0446_01BA;
labelFunc0446_01B6:
	message("\"What can I do for thee, dear?\"");
	say();
labelFunc0446_01BA:
	if (!UI_npc_nearby(0xFFB3)) goto labelFunc0446_01D4;
	Func094E(0xFFB3, "@I do hope that I am not interrupting...@");
	UI_set_conversation_slot(0x0000);
labelFunc0446_01D4:
	message("\"My name is Lucilla. Is there anything I can do for thee? Anything at all?\"");
	say();
	UI_set_item_flag(0xFFBA, 0x001C);
	goto labelFunc0446_01E9;
labelFunc0446_01E5:
	message("\"Hello again!\"");
	say();
labelFunc0446_01E9:
	UI_add_answer(["duties"]);
	if (!Func0942(0xFFB3)) goto labelFunc0446_0203;
	UI_add_answer("interrupting");
labelFunc0446_0203:
	if (!gflags[0x0053]) goto labelFunc0446_0210;
	UI_add_answer("rendezvous");
labelFunc0446_0210:
	if (!gflags[0x008F]) goto labelFunc0446_021D;
	UI_add_answer("Andral");
labelFunc0446_021D:
	if (!gflags[0x0092]) goto labelFunc0446_022A;
	UI_add_answer("Spektor");
labelFunc0446_022A:
	if (!(gflags[0x009C] && (!gflags[0x0291]))) goto labelFunc0446_023C;
	UI_add_answer("lost ring");
labelFunc0446_023C:
	if (!(gflags[0x004A] && (!gflags[0x0091]))) goto labelFunc0446_024E;
	UI_add_answer("banquet stew");
labelFunc0446_024E:
	if (!(gflags[0x0045] && (UI_get_schedule_type(0xFFB4) != 0x000F))) goto labelFunc0446_0267;
	UI_add_answer("brown bottle");
labelFunc0446_0267:
	if (!(gflags[0x0048] && (!(UI_get_item_flag(0xFFB4, 0x0004) && (!(gflags[0x0038] && (!gflags[0x0092]))))))) goto labelFunc0446_028A;
	UI_add_answer("traitor");
labelFunc0446_028A:
	UI_add_answer(["name", "buy", "bye"]);
labelFunc0446_029A:
	converse attend labelFunc0446_07D4;
	case "traitor" attend labelFunc0446_02D9:
	UI_remove_answer("traitor");
	message("\"This is all so confusing. Lord Brendann is certain that there must be a traitor, and the Wolves are united behind him.\"");
	say();
	message("\"Yet I have also heard that there is certainly no traitor, and that we should not indulge in hysteria...\"");
	say();
	var0003 = Func0992(0x0001, "@Who told thee this, madam?@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc0446_02D9;
	UI_set_conversation_slot(0x0000);
	message("\"Um... no single person, actually. I have merely heard it said in conversation. In a tavern, one hears everything.\"");
	say();
labelFunc0446_02D9:
	case "brown bottle" attend labelFunc0446_0318:
	UI_remove_answer("brown bottle");
	if (!Func097D(0xFE9B, 0x0001, 0x0268, 0xFE99, 0x0009)) goto labelFunc0446_0310;
	message("\"'Tis a very dirty bottle. Thou didst find this in the woods?\"");
	say();
	message("\"Ah! 'Tis one of Simon's ale bottles. I order them specially for him, as only he can stand the taste.\"");
	say();
	message("\"Fawnish ale -- phew! A horrible brew.\"");
	say();
	gflags[0x005F] = true;
	goto labelFunc0446_0318;
labelFunc0446_0310:
	message("\"If thou couldst bring me the bottle, I am sure that I could identify it. We supply ale and spirits for the entire town from the pub where I work.\"");
	say();
	message("\"If the bottle is of an uncommon type, then perhaps that would be a clue.\"");
	say();
labelFunc0446_0318:
	case "name" attend labelFunc0446_0335:
	UI_remove_answer("name");
	message("\"My name is Lucilla.\"");
	say();
	UI_set_item_flag(0xFFBA, 0x001C);
labelFunc0446_0335:
	case "duties" attend labelFunc0446_0392:
	UI_remove_answer("duties");
	message("\"I run the Slashing Sword, the best pub in Monitor. Thou mightest think that cooking is not a very Knightly activity, but I assure thee, feeding the warriors in this town is indeed a Quest of Courage!\"");
	say();
	if (!(UI_get_schedule_type(0xFFBA) == 0x0017)) goto labelFunc0446_0363;
	message("\"If thou dost want anything to eat or drink, thou hast merely to say so, ");
	message(var0001);
	message(".\"");
	say();
	goto labelFunc0446_0367;
labelFunc0446_0363:
	message("\"Please come by the pub sometime.\"");
	say();
labelFunc0446_0367:
	if (!(!gflags[0x0048])) goto labelFunc0446_0382;
	message("\"And I would love to chat further, but I do not speak with strangers. My standards are very high, and thou art not a Knight of Monitor.\"");
	say();
	Func097F(0xFFBA, "@Not a Knight!@", 0x0000);
	abort;
	goto labelFunc0446_0392;
labelFunc0446_0382:
	UI_add_answer(["The Slashing Sword", "cooking", "Quest of Courage"]);
labelFunc0446_0392:
	case "buy" attend labelFunc0446_03E9:
	if (!(UI_get_schedule_type(0xFFBA) == 0x0017)) goto labelFunc0446_03DE;
	message("\"What wouldst thou like, ");
	message(var0001);
	message("?\"");
	say();
	var0004 = Func0956(["food", "drink"]);
	if (!(var0004 == "food")) goto labelFunc0446_03CE;
	Func0845();
labelFunc0446_03CE:
	if (!(var0004 == "drink")) goto labelFunc0446_03DB;
	Func0846();
labelFunc0446_03DB:
	goto labelFunc0446_03E9;
labelFunc0446_03DE:
	message("\"If thou wouldst return when we are open, perhaps I could serve thee food or drink...\"");
	say();
	UI_remove_answer("buy");
labelFunc0446_03E9:
	case "The Slashing Sword" attend labelFunc0446_041C:
	UI_remove_answer("The Slashing Sword");
	message("\"'Tis a pub that hath been handed down generation to generation, originating with my great-grandfather. Although 'tis a wonderful place to have a meal, most of the men in the town come by to court me!\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0446_040F;
	message("\"I enjoy all the attention...\"");
	say();
	UI_add_answer("court");
labelFunc0446_040F:
	UI_add_answer(["great-grandfather", "men"]);
labelFunc0446_041C:
	case "great-grandfather" attend labelFunc0446_043C:
	UI_remove_answer("great-grandfather");
	message("\"He was not only the founder of the pub, but he was a Champion Knight of Monitor! He wore the Helm of Monitor for several years, before he was bested in a tournament.\"");
	say();
	UI_add_answer(["Champion Knight", "tournament"]);
labelFunc0446_043C:
	case "Champion Knight" attend labelFunc0446_0473:
	UI_remove_answer("Champion Knight");
	message("\"I can hardly speak of the Champion Knight without remembering Astrid's foul death at the hands of the Goblins.\"");
	say();
	if (!gflags[0x002C]) goto labelFunc0446_045C;
	message("\"I am so glad that thou hast recaptured the Helm of Monitor. Thou dost make a fine Champion Knight in thine own right.\"");
	say();
	goto labelFunc0446_0473;
labelFunc0446_045C:
	message("\"I fear that there is none worthy to fill her shoes as Champion Knight!\"");
	say();
	UI_add_answer("worthy");
	if (!(!UI_is_pc_female())) goto labelFunc0446_0473;
	message("\"Except, perhaps, thyself? I must believe that thou hast had thy share of conquests in thy time...\"");
	say();
labelFunc0446_0473:
	case "worthy" attend labelFunc0446_04C5:
	UI_remove_answer("worthy");
	message("\"Monitor is not the town it once was. Our ancestors founded a settlement built on the Principle of Courage.\"");
	say();
	message("\"But today, greed and glory have corrupted our Knights. Monitor needs a champion that is not only a leader on the battlefield, but someone who can stir their hearts and lead them back to what it means to be a Knight.\"");
	say();
	if (!(!gflags[0x002C])) goto labelFunc0446_0495;
	message("\"I wish a new Champion Knight would arise, one who can not only retrieve the Helm of Monitor, but also right the wrongs in this town!\"");
	say();
labelFunc0446_0495:
	if (!(!UI_is_pc_female())) goto labelFunc0446_04A4;
	message("\"Could that person be thee? I would like it to be so.\"");
	say();
	goto labelFunc0446_04C5;
labelFunc0446_04A4:
	var0003 = Func0992(0x0001, "@Perhaps this is a quest for the Avatar?@", 0x0000, false);
	if (!(var0003 != 0xFE9C)) goto labelFunc0446_04C5;
	UI_set_conversation_slot(0x0000);
labelFunc0446_04C5:
	case "tournament" attend labelFunc0446_04E3:
	UI_remove_answer("tournament");
	message("\"All the Knights think about is fighting! And who do they fight? The Goblins? No! They prefer to spar with one another at the List Field!\"");
	say();
	message("\"Luther is the worst. Oh, how I hate him!\"");
	say();
	UI_add_answer("Luther");
labelFunc0446_04E3:
	case "Luther" attend labelFunc0446_0519:
	UI_remove_answer("Luther");
	message("\"What a buffoon! He thinks every woman in this town wants him, but I find him repulsive!\"");
	say();
	message("\"To prove his prowess, he torments the weakest Knights and challenges them to meet him on the List Field.\"");
	say();
	message("\"And when they lose -- which they must, since Luther is such a powerful brute -- he gloats over them.\"");
	say();
	if (!(!gflags[0x00B2])) goto labelFunc0446_0515;
	message("\"They say that that new shield of his doth have special powers, so that now he is truly invincible!\"");
	say();
	message("\"Well, I say if it is magical, then force him to not use it! Monitorians do not use magic weapons or armour...\"");
	say();
	message("\"But no one can tell Luther anything.\"");
	say();
	gflags[0x00AC] = true;
labelFunc0446_0515:
	gflags[0x00AE] = true;
labelFunc0446_0519:
	case "men" attend labelFunc0446_0557:
	UI_remove_answer("men");
	if (!UI_is_pc_female()) goto labelFunc0446_054F;
	message("\"Dost thou not know that men are scum? Yet we cannot leave them alone...\"");
	say();
	message("\"Wouldst thou like to know more about the men of Monitor?\"");
	say();
	if (!Func0955()) goto labelFunc0446_0548;
	message("\"Avoid Brendann -- he sees women as trophies, to be won and then set on a shelf. He is shallow and insincere.\"");
	say();
	message("\"Templar is very attractive, I think. But Caladin is a brute, and Luther is a clod!\"");
	say();
	goto labelFunc0446_054C;
labelFunc0446_0548:
	message("\"'Tis just as well -- there are no great lovers in this place!\"");
	say();
labelFunc0446_054C:
	goto labelFunc0446_0557;
labelFunc0446_054F:
	message("\"Why is it that a woman must have a man? I have looked and looked, and I have not yet found the one for me.\"");
	say();
	message("\"He must be tough, yet gentle with his woman. Brave, but afraid to disappoint his mate. He must be devious enough to win many battles, yet fair enough to consider me as his equal...\"");
	say();
labelFunc0446_0557:
	case "Andral" attend labelFunc0446_056A:
	UI_remove_answer("Andral");
	message("\"For a time we were quite close. I still have great respect for his talents, but in truth he always put me second to his work. I suppose I enjoy being the center of attention too much.\"");
	say();
labelFunc0446_056A:
	case "court" attend labelFunc0446_05B4:
	UI_remove_answer("court");
	message("\"Dost thou find me beautiful? I admit I love the attention! But I have never found the right man for me...\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0446_05B4;
	message("\"But I sense that thou art somehow different, milord.\"");
	say();
	if (!gflags[0x0055]) goto labelFunc0446_0593;
	message("\"Listen, Spektor and I truly have nothing together. Honestly, 'tis nothing.\"");
	say();
labelFunc0446_0593:
	message("\"Wouldst thou like to meet later?\"");
	say();
	gflags[0x0053] = true;
	if (!Func0955()) goto labelFunc0446_05B0;
labelFunc0446_05A1:
	message("\"Then meet me at the pub after we have closed, in the wee hours before dawn. 'Tis the only time I can be alone with thee since I work so late.\"");
	say();
	message("\"I cannot wait.\"");
	say();
	gflags[0x0054] = true;
	goto labelFunc0446_05B4;
labelFunc0446_05B0:
	message("\"Oh. Be that way, then. There are plenty of others who are interested in me!\"");
	say();
labelFunc0446_05B4:
	case "cooking" attend labelFunc0446_05DA:
	UI_remove_answer("cooking");
	message("\"If I do say so myself, I am a master of cooking poultry. Or as they say...\"");
	say();
	if (!(!UI_is_pc_female())) goto labelFunc0446_05D6;
	message("\"Breasts and thighs, breasts and thighs. And which dost thou prefer, milord? But do not answer yet...\"");
	say();
	goto labelFunc0446_05DA;
labelFunc0446_05D6:
	message("\"If I cannot succeed in the bedroom, I might as well try in the kitchen! Homely women make good cooks, they say...\"");
	say();
labelFunc0446_05DA:
	case "Quest of Courage" attend labelFunc0446_060F:
	UI_remove_answer("Quest of Courage");
	message("\"Thou knowest -- the quests to prove that thou art fit to bear thy Knighthood...\"");
	say();
	if (!gflags[0x002C]) goto labelFunc0446_05FA;
	message("\"Like when thou didst retrieve the Helm of Monitor from that vile Pomdirgun.\"");
	say();
	goto labelFunc0446_060F;
labelFunc0446_05FA:
	message("\"Surely, a fine young warrior like thyself dost plan to partake in the Quest to retrieve the Helm of Monitor?\"");
	say();
	if (!Func0955()) goto labelFunc0446_060B;
	message("\"If only we could learn the secret of their hidden camp! But it remains a mystery...\"");
	say();
	goto labelFunc0446_060F;
labelFunc0446_060B:
	message("\"Too dangerous for a coward like thyself? And I thought better of thee...\"");
	say();
labelFunc0446_060F:
	case "interrupting" attend labelFunc0446_0680:
	UI_remove_answer("interrupting");
	message("\"Surely, thou dost know Spektor the Financier?\"");
	say();
	UI_show_npc_face1(0xFFB3, 0x0000);
	message("\"I must be going. Pressing town business, that sort of thing.\"");
	say();
	UI_set_conversation_slot(0x0000);
	message("\"And it is so seldom that we are able to talk! Be sure to give my greetings to Lord Marsten.\"");
	say();
	UI_set_conversation_slot(0x0001);
	message("\"I shall!\"");
	say();
	gflags[0x0055] = true;
	Func097F(0xFFBA, "@Farewell!@", 0x0000);
	Func097F(0xFFB3, "@Anon!@", 0x0002);
	UI_si_path_run_usecode(0xFFB3, [0x041B, 0x0A52, 0x0000], 0x000D, 0xFFB3, 0x044D, true);
	abort;
labelFunc0446_0680:
	case "rendezvous" attend labelFunc0446_06BE:
	UI_remove_answer("rendezvous");
	if (!(!gflags[0x0054])) goto labelFunc0446_06AD;
	message("\"Hast thou changed thy mind about meeting?\"");
	say();
	if (!Func0955()) goto labelFunc0446_06A6;
	goto labelFunc0446_05A1;
	goto labelFunc0446_06AA;
labelFunc0446_06A6:
	message("\"Suit thyself.\"");
	say();
labelFunc0446_06AA:
	goto labelFunc0446_06BE;
labelFunc0446_06AD:
	message("\"The time is not right. I cannot see thee now. Another time, my love...\"");
	say();
	Func097F(0xFFBA, "@Not now!@", 0x0000);
	abort;
labelFunc0446_06BE:
	case "Spektor" attend labelFunc0446_0720:
	UI_remove_answer("Spektor");
	if (!(!gflags[0x0092])) goto labelFunc0446_06FA;
	message("\"Very well, I shall bare my soul to thee.\"");
	say();
	if (!gflags[0x0055]) goto labelFunc0446_06E2;
	message("\"I suspected that thou knewest when thou didst catch Spektor and I together that time. But we could not fool thee...\"");
	say();
labelFunc0446_06E2:
	message("\"Spektor and I were lovers. Canst thou believe it? Yet there was something appealing about that man...\"");
	say();
	message("\"Despite my conscience, I have kept his guilty secret for these many months. It casts filth upon my soul. I am ashamed.\"");
	say();
	UI_add_answer(["lovers", "secret"]);
	goto labelFunc0446_0720;
labelFunc0446_06FA:
	message("\"Now that Spektor hath been arrested for his crimes, I wonder what I shall do with this key that he gave to me for safekeeping. Perhaps I shall give it to thee. Since thou hast determined all of what hath been happening, perhaps thou wilt be able to put it to good use.\"");
	say();
	if (!(!gflags[0x00C1])) goto labelFunc0446_0720;
	var0000 = Func099B(0xFE9C, 0x0001, 0x0281, 0x0062, 0x0005, false, true);
	gflags[0x00C1] = true;
labelFunc0446_0720:
	case "lovers" attend labelFunc0446_0737:
	UI_remove_answer("lovers");
	message("\"This is so embarrassing. To think that I could have had any man in this town, and yet I gave mine heart to... Spektor!\"");
	say();
	message("\"A Knight who had scarce drawn his sword in many moons...\"");
	say();
labelFunc0446_0737:
	case "secret" attend labelFunc0446_0752:
	UI_remove_answer("secret");
	message("\"Spektor played a key part in Lord Marsten's plan to destroy the Bears and Wolves, so that the Leopards could rule Monitor!\"");
	say();
	message("\"They had a secret cache of money and weapons hidden somewhere in the mountains west of town.\"");
	say();
	message("\"I do not know what else they hid there, but Spektor said that they had the power to someday rule all of Serpent Isle!\"");
	say();
labelFunc0446_0752:
	case "lost ring" attend labelFunc0446_0765:
	UI_remove_answer("lost ring");
	message("\"A ring so pretty must be intended for a loved one. Perhaps a ring of marriage or engagement.\"");
	say();
labelFunc0446_0765:
	case "banquet stew" attend labelFunc0446_0797:
	UI_remove_answer("banquet stew");
	if (!UI_remove_party_items(0x0003, 0x0194, 0xFE99, 0x0003, false)) goto labelFunc0446_0793;
	message("\"Very good! Now that I have the meat, thy stew will be ready for the banquet. Thy banquet will be held at the Knight's Banquet Hall. It is located south of the Pub. Thou shalt find it on Banquet Hall Road.\"");
	say();
	gflags[0x0091] = true;
	goto labelFunc0446_0797;
labelFunc0446_0793:
	message("\"Now that thou hast completed the Knight's Test, thou must now bring me the meat for thy banquet stew.\"");
	say();
labelFunc0446_0797:
	case "bye" attend labelFunc0446_07D1:
	Func097F(0xFE9C, "@Must be going...@", 0x0000);
	if (!(!UI_is_pc_female())) goto labelFunc0446_07C2;
	Func097F(0xFFBA, "@Goodbye, lover.@", 0x0002);
	goto labelFunc0446_07CE;
labelFunc0446_07C2:
	Func097F(0xFFBA, "@Goodbye, milady.@", 0x0002);
labelFunc0446_07CE:
	goto labelFunc0446_07D4;
labelFunc0446_07D1:
	goto labelFunc0446_029A;
labelFunc0446_07D4:
	endconv;
labelFunc0446_07D5:
	return;
}


