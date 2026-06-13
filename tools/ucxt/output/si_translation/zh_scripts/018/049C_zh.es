#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func09A0 0x9A0 (var var0000, var var0001);
extern void Func0982 0x982 (var var0000, var var0001);

void Func049C object#(0x49C) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	if (!(event == 0x0001)) goto labelFunc049C_003A;
	UI_item_say(0xFE9C, "@Hello.@");
	0xFF64->Func07D1();
	Func097F(0xFF64, "@Speaking to me?@", 0x0002);
	UI_set_schedule_type(0xFF64, 0x0003);
labelFunc049C_003A:
	if (!((event == 0x0000) && (UI_get_schedule_type(0xFF64) == 0x0007))) goto labelFunc049C_008C;
	if (!(UI_get_random(0x000A) < 0x0007)) goto labelFunc049C_005D;
	abort;
labelFunc049C_005D:
	var0002 = ["@Leave us!@", "@Go thy way!@", "@Do not steal...@", "@I am destiny.@", "@Ignore the others.@", "@I am Master here.@"];
	Func097F(0xFF64, var0002[UI_get_random(UI_get_array_size(var0002))], 0x0000);
labelFunc049C_008C:
	if (!((event == 0x0007) && UI_get_item_flag(0xFF64, 0x001D))) goto labelFunc049C_00FE;
	if (!gflags[0x02BC]) goto labelFunc049C_00FE;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049F], 0x0032);
	gflags[0x02BC] = false;
	UI_clear_item_flag(0xFF64, 0x001D);
	Func0982(0xFF64, 0x0032);
	UI_run_schedule(0xFF65);
	UI_set_alignment(0xFF65, 0x0000);
	UI_set_alignment(0xFF61, 0x0000);
	UI_set_schedule_type(0xFF65, 0x0003);
labelFunc049C_00FE:
	if (!(event == 0x0009)) goto labelFunc049C_032A;
	UI_run_schedule(0xFF64);
	UI_clear_item_say(0xFF64);
	UI_show_npc_face0(0xFF64, 0x0000);
	var0004 = UI_get_item_flag(0xFF64, 0x001C);
	if (!(var0004 == false)) goto labelFunc049C_0148;
	UI_set_item_flag(0xFF64, 0x001C);
	message("\"I do not believe we have met. My name is Draygan. I am lord of all the land that I survey.\"");
	say();
	message("\"At present, I am hard at work fulfilling mine appointed destiny. Conversing with thee is nothing but a useless distraction from achieving that end.\"");
	say();
	goto labelFunc049C_0150;
labelFunc049C_0148:
	message("\"We meet again, I see.\"");
	say();
	message("\"And thou art still of no use to my destiny. I do not have time to prattle with thee, stranger. Stay away from this camp, and from my followers. As the lord of this place, I order this to be so.\"");
	say();
labelFunc049C_0150:
	UI_add_answer(["lord", "destiny"]);
	UI_add_answer("bye");
labelFunc049C_0164:
	converse attend labelFunc049C_0329;
	case "change subject" attend labelFunc049C_0177:
	UI_pop_answers();
	message("\"But we were soon to hear the best part...\"");
	say();
labelFunc049C_0177:
	case "destiny" attend labelFunc049C_01A2:
	UI_remove_answer("destiny");
	message("\"I was born a pauper's son. My father was a rancid beggar-man who lived in the dirt of the road. I hated it as I hated him. But there was one thing he always told me. He told me that one day I would be a rich and powerful man. I believe this is my destiny. When I was still a lad, I stole his near-empty coin purse and sought my fortune.\"");
	say();
	message("\"I have acquired naught but half of my legacy... though I already have the power!\"");
	say();
	UI_push_answers();
	UI_add_answer(["fortune", "power", "change subject"]);
labelFunc049C_01A2:
	case "fortune" attend labelFunc049C_01C5:
	UI_remove_answer("fortune");
	message("\"It was one year ago that I led my band of men to this spot. We had all heard the tales of gold and fabulous gems that could be found here. We came by ship -- the Emerald Lady. As we planned to settle here, they all brought their wives and children. For months we suffered through bad luck. Then one of the miners made an important discovery. That was before I went on the hunting expedition -- but, ah, I am ahead of myself. It hath been too long since I have had a fresh face to converse with. Damned distraction!\"");
	say();
	UI_add_answer(["suffered", "discovery", "hunting expedition"]);
labelFunc049C_01C5:
	case "suffered" attend labelFunc049C_01D8:
	UI_remove_answer("suffered");
	message("\"For three months we toiled near the site of our original landing. But we found nothing. It made the men so discouraged that they nearly surrendered. At last, we moved camp and came here.\"");
	say();
labelFunc049C_01D8:
	case "discovery" attend labelFunc049C_01EB:
	UI_remove_answer("discovery");
	message("\"One of the men, a fellow by the name of Hamlin, discovered a nugget of gold as large as my thumb. It was not far from our present location. Rest his soul.\"");
	say();
labelFunc049C_01EB:
	case "hunting expedition" attend labelFunc049C_020B:
	UI_remove_answer("hunting expedition");
	message("\"Not long after the first significant find, we had planned a great feast as a celebration. I led a group of hunters into the forest to hunt for game. We were attacked by a vicious pack of wolves. Only I survived to make it back to camp. It was then that I discovered my power. But the failed expedition was a bad omen. Soon my men were divided and our group fell into rebellion.\"");
	say();
	UI_add_answer(["divided", "rebellion"]);
labelFunc049C_020B:
	case "divided" attend labelFunc049C_0226:
	UI_remove_answer("divided");
	message("\"A man named Falcon declared himself the leader of a group of dissenters that was comprised of nearly half of our number.\"");
	say();
	message("\"He was a man of exceedingly weak character. He suggested that we return home penniless, without a single piece of treasure! All because a few of the women and children had a difficult time of it in the wilderness.\"");
	say();
	message("\"Well, all that is the past, and there is nothing one can do for the dead. And we have the treasure...\"");
	say();
labelFunc049C_0226:
	case "rebellion" attend labelFunc049C_0241:
	UI_remove_answer("rebellion");
	message("\"Simple disobedience, really. Oh, yes, and someone cut Hamlin's throat and stole his gold. I do not know who did it.\"");
	say();
	message("\"After this, most of the men chose to leave. So what was I to do? I gave them their fair share of the gold that we had found, and sent them back to the ship with my blessings.\"");
	say();
	message("\"They were led by the weakling, Falcon. After they left, I never saw them again. Ah, well...\"");
	say();
labelFunc049C_0241:
	case "power" attend labelFunc049C_0263:
	UI_remove_answer("power");
	message("\"I need not bore thee with the details of how I learned of this power. Suffice it to say that I cannot die.\"");
	say();
	message("\"Thou wouldst do well to consider that a warning. Do not think of stealing my gold, for it is thee who shall lose thy life. I cannot die because I am destined to become wealthy.\"");
	say();
	message("\"Hurd and Ivor work the mines night and day. Beryl cooks and cleans. They are good workers. They shall make me wealthy.\"");
	say();
	UI_add_answer("warning?");
labelFunc049C_0263:
	case "warning?" attend labelFunc049C_0276:
	UI_remove_answer("warning?");
	message("\"If we ever come into conflict over the gold that I know lies somewhere in this land, I shall kill thee dead without an ounce of regret.\"");
	say();
labelFunc049C_0276:
	case "lord" attend labelFunc049C_0299:
	UI_remove_answer("lord");
	message("\"I am the Master of the Great Northern Forest, and none can dispute it.\"");
	say();
	message("\"And if thou shouldst ever speak to a disfigured cripple named Morghrim --\"");
	say();
	message("\"and I would recommend against that --\"");
	say();
	message("\"pay no mind to what he may say. Morghrim is an evil and depraved man. Thou shouldst avoid him like the plague.\"");
	say();
	message("\"This is the one and only piece of friendly advice I shall give to thee.\"");
	say();
labelFunc049C_0299:
	case "bye" attend labelFunc049C_0326:
	if (!(!gflags[0x02BD])) goto labelFunc049C_02C9;
	gflags[0x02BE] = true;
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0001), [(byte)0x23, (byte)0x55, 0x049B], 0x004B);
labelFunc049C_02C9:
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0002), [(byte)0x23, (byte)0x55, 0x049E], 0x012C);
	var0003 = UI_delayed_execute_usecode_array(Func09A0(0x0005, 0x0003), [(byte)0x23, (byte)0x55, 0x049D], 0x00C8);
	Func097F(0xFE9C, "@Interesting....@", 0x0000);
	Func097F(0xFF64, "@Do not return!@", 0x0003);
	UI_set_schedule_type(0xFF64, 0x0007);
	abort;
labelFunc049C_0326:
	goto labelFunc049C_0164;
labelFunc049C_0329:
	endconv;
labelFunc049C_032A:
	return;
}


