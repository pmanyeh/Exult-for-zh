#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern var Func0942 0x942 (var var0000);
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func0965 0x965 ();
extern void Func0966 0x966 ();
extern var Func0955 0x955 ();

void Func0438 object#(0x438) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func0954();
	var0001 = UI_is_pc_female();
	var0002 = Func0953();
	var0003 = Func0942(0xFFC7);
	if (!(event == 0x0007)) goto labelFunc0438_0036;
	var0004 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0438_0036:
	if (!(event == 0x0001)) goto labelFunc0438_006C;
	UI_item_say(0xFE9C, "@A moment if thou wilt, sir.@");
	0xFFC8->Func07D1();
	Func097F(0xFFC8, (("@At thy service, " + var0000) + ".@"), 0x0002);
	UI_set_schedule_type(0xFFC8, 0x0003);
labelFunc0438_006C:
	if (!(event == 0x0009)) goto labelFunc0438_04BD;
	UI_run_schedule(0xFFC8);
	UI_clear_item_say(0xFFC8);
	UI_show_npc_face0(0xFFC8, 0x0000);
	var0005 = UI_get_item_flag(0xFFC8, 0x001C);
	if (!(var0005 == false)) goto labelFunc0438_00D0;
	if (!(gflags[0x003E] == true)) goto labelFunc0438_00BB;
	message("\"At last, the values of The Fellowship have reached into the ranks of the Pikemen! I am honored.\"");
	say();
	message("\"I am Leon, a speaker for The Fellowship and former farmer.\"");
	say();
	UI_add_answer("Fellowship");
	goto labelFunc0438_00C3;
labelFunc0438_00BB:
	message("\"I always have time for those who come seeking knowledge. Be welcome.\"");
	say();
	message("\"I am Leon, a speaker for The Fellowship and former farmer.\"");
	say();
labelFunc0438_00C3:
	UI_set_item_flag(0xFFC8, 0x001C);
	goto labelFunc0438_00DA;
labelFunc0438_00D0:
	message("\"As always, I am honored that thou choosest to visit me, ");
	message(var0002);
	message(". How may I help thy quest for Unity?\"");
	say();
labelFunc0438_00DA:
	UI_add_answer(["goblins", "storms", "bye"]);
labelFunc0438_00EA:
	converse attend labelFunc0438_04BC;
	case "Fellowship" attend labelFunc0438_0116:
	message("\"While the Virtues that Lord British expounded are all very well and good, they are nearly impossible for ordinary people to achieve.\"");
	say();
	message("\"Simple people need a simple philosophy.\"");
	say();
	message("\"The Triad of Inner Strength is the answer.\"");
	say();
	UI_remove_answer("Fellowship");
	gflags[0x015F] = true;
	UI_add_answer("Triad of Inner Strength");
	Func0965();
labelFunc0438_0116:
	case "Triad of Inner Strength" attend labelFunc0438_013D:
	UI_remove_answer("Triad of Inner Strength");
	message("\"The Triad of Inner Strength is based on three basic principles that all people can grasp. The first is Unity. The next is Trust, and the last is Worthiness.\"");
	say();
	UI_push_answers();
	UI_add_answer(["Unity", "Trust", "Worthiness"]);
labelFunc0438_013D:
	case "Unity" attend labelFunc0438_0176:
	message("\"Surely thou must know the importance of learning to cooperate and work together.\"");
	say();
	message("\"If we seek to live in harmony with one another, there is nothing we cannot accomplish. One rock doth not make a wall. But many rocks can -- with a common purpose.\"");
	say();
	UI_remove_answer("Unity");
	gflags[0x0162] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_0176;
	UI_pop_answers();
labelFunc0438_0176:
	case "Trust" attend labelFunc0438_01AF:
	message("\"The main stumbling block to Unity lies in a lack of Trust.\"");
	say();
	message("\"If thou dost trust thy brother, thou wouldst not live in fear. Without fear, our lives are happier and Unity may grow and thrive.\"");
	say();
	UI_remove_answer("Trust");
	gflags[0x0161] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_01AF;
	UI_pop_answers();
labelFunc0438_01AF:
	case "Worthiness" attend labelFunc0438_01FB:
	message("\"How wouldst thou feel, if all that thou hadst strived for were given to a man who had done nothing to deserve it?\"");
	say();
	message("\"I will wager that thou wouldst feel the injustice.\"");
	say();
	message("\"If everyone strives to be worthy of that which they seek, such injustices would be few.\"");
	say();
	message("\"Let every person be rewarded according to their merits and Trust and Unity will follow naturally.\"");
	say();
	message("\"Following the Triad of Inner Strength allows one to become attuned to the Inner Voice.\"");
	say();
	UI_remove_answer("Worthiness");
	UI_add_answer("Inner Voice");
	gflags[0x0163] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_01FB;
	UI_pop_answers();
labelFunc0438_01FB:
	case "Inner Voice" attend labelFunc0438_0234:
	message("\"The Inner Voice is within all living beings. It flows from pure instinct and contains all the wisdom and irreproachable logic that anyone would ever need to live peacefully and happily.\"");
	say();
	message("\"If everyone learned to listen to their Inner Voice, I could return to Britannia and farm contentedly for the rest of my life.\"");
	say();
	UI_remove_answer("Inner Voice");
	gflags[0x0160] = true;
	if (!((gflags[0x0162] == true) && ((gflags[0x0161] == true) && ((gflags[0x0163] == true) && (gflags[0x0160] == true))))) goto labelFunc0438_0234;
	UI_pop_answers();
labelFunc0438_0234:
	case "philosophy" attend labelFunc0438_0246:
	UI_remove_answer("philosophy");
	Func0966();
labelFunc0438_0246:
	case "goblins" attend labelFunc0438_02E0:
	UI_remove_answer("goblins");
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0438_026B;
	message("\"Now that Lady Yelinda hath admitted my people within the city walls, we shall be safe from the goblins.\"");
	say();
	goto labelFunc0438_02E0;
labelFunc0438_026B:
	if (!(gflags[0x003E] == true)) goto labelFunc0438_029D;
	if (!(gflags[0x014E] == true)) goto labelFunc0438_028E;
	message("\"Without the fine aid of thee and thy Monitorian comrades, these poor sailors and I would have been lost long ago.\"");
	say();
	message("\"Kylista refused us the safety of the city walls, even when the tower fell to the barbaric goblins.\"");
	say();
	message("\"I never thought that I would rue the day that another intelligent being learned the truths of The Fellowship.\"");
	say();
	message("\"But we would be doing far better if the goblins had not found Unity under the leadership of Pomdirgun.\"");
	say();
	goto labelFunc0438_029A;
labelFunc0438_028E:
	message("\"Hast thou come seeking the wisdom of The Fellowship so that thee and thy Monitorian comrades can reclaim the tower?\"");
	say();
	message("\"Even now, Kylista refuses us refuge within the city walls.\"");
	say();
	message("\"Obviously, she fears the truths of The Fellowship as much as she fears Pomdirgun.\"");
	say();
labelFunc0438_029A:
	goto labelFunc0438_02C4;
labelFunc0438_029D:
	if (!(gflags[0x014E] == true)) goto labelFunc0438_02B8;
	message("\"Without the fine aid of the Pikemen, these poor sailors and I would have been lost long ago.\"");
	say();
	message("\"Kylista refused us the safety of the city walls, even when the tower fell to the barbaric goblins.\"");
	say();
	message("\"I never thought that I would rue the day that another intelligent being learned the truths of The Fellowship.\"");
	say();
	message("\"But we would be doing far better if the goblins had not found Unity under the leadership of Pomdirgun.\"");
	say();
	goto labelFunc0438_02C4;
labelFunc0438_02B8:
	message("\"Thou art one among many that have come seeking the wisdom of The Fellowship to withstand these difficult times.\"");
	say();
	message("\"Thou shouldst not stay overlong outside the city walls, even if Kylista refuses refuge to me and my companions.\"");
	say();
	message("\"Obviously, she fears the truths of The Fellowship as much as she fears Pomdirgun.\"");
	say();
labelFunc0438_02C4:
	UI_add_answer(["Kylista", "Pomdirgun"]);
	if (!(gflags[0x015F] == false)) goto labelFunc0438_02E0;
	UI_add_answer("Fellowship");
labelFunc0438_02E0:
	case "Kylista" attend labelFunc0438_0302:
	message("\"She is the Priestess of Beauty -- the cult that controls Fawn.\"");
	say();
	message("\"Kylista presides over the Oracle, which never varies in supporting her views...\"");
	say();
	message("\"One might suspect that Kylista uses the Oracle to increase her own personal power. But I have no idea how such a thing would be accomplished.\"");
	say();
	UI_remove_answer("Kylista");
	UI_add_answer("Oracle");
labelFunc0438_0302:
	case "Oracle" attend labelFunc0438_0324:
	message("\"It was commissioned by Lady Fawn herself, and built by the Mages of Britannia.\"");
	say();
	message("\"'Twas to be an instrument of truth... I cannot say that that is still so.\"");
	say();
	message("\"It gives revelations throughout the day.\"");
	say();
	UI_remove_answer("Oracle");
	UI_add_answer("revelations");
labelFunc0438_0324:
	case "revelations" attend labelFunc0438_0346:
	message("\"For the most part, they are simple platitudes that further ingrain their reverence of Beauty.\"");
	say();
	message("\"They do nothing to help the people improve their lives.\"");
	say();
	message("\"At other times -- like when the sailors and I were banished from the city -- they reflect the wishes of Kylista and the Great Captains.\"");
	say();
	UI_remove_answer("revelations");
	UI_add_answer("Great Captains");
labelFunc0438_0346:
	case "Great Captains" attend labelFunc0438_0370:
	message("\"They are the counselors of Lady Yelinda, by title. They control the fishing fleets... or did before the storms began.\"");
	say();
	message("\"In reality, they control all of Fawn. It is painfully obvious that Lady Yelinda is merely a figurehead to be manipulated by Zulith at the behest of Garth, Joth, and Voldin.\"");
	say();
	UI_remove_answer("Great Captains");
	UI_add_answer(["Zulith", "Garth", "Joth", "Voldin"]);
labelFunc0438_0370:
	case "Zulith" attend labelFunc0438_038B:
	message("\"'Tis easy enough to overlook him, unless he wants thy notice. He is a simpering little man who styles himself as the consort of Lady Yelinda.\"");
	say();
	message("\"Sadly, she pays no more heed of him than her mirror. Her interests, I think, lie more in line with Jorvin, Captain of the Guard.\"");
	say();
	message("\"Zulith is a puppet for Kylista and the Great Captains. But beware of him, friend, for he can be vicious if slighted.\"");
	say();
	UI_remove_answer("Zulith");
labelFunc0438_038B:
	case "Garth" attend labelFunc0438_03A2:
	message("\"Garth is the most junior of the three Great Captains. His interests seem to lie mostly in impressing the ladies of the city.\"");
	say();
	message("\"I do not think he dares go against the wishes of the other two Captains.\"");
	say();
	UI_remove_answer("Garth");
labelFunc0438_03A2:
	case "Joth" attend labelFunc0438_03B5:
	message("\"Joth is the only one of the Great Captains that seems to have any real interest in the fleets. He would certainly be more at home on the deck of a ship than here on land.\"");
	say();
	UI_remove_answer("Joth");
labelFunc0438_03B5:
	case "Voldin" attend labelFunc0438_03D0:
	message("\"Voldin is perhaps the person who would most benefit from practicing Worthiness.\"");
	say();
	message("\"I have heard that he is diverting funds from the fleets for his own gain. But who can say for sure?\"");
	say();
	message("\"It is his heavy hand that holds the reins of the city. Thou shouldst be careful around him. He is a violent man.\"");
	say();
	UI_remove_answer("Voldin");
labelFunc0438_03D0:
	case "Pomdirgun" attend labelFunc0438_03E7:
	message("\"He hath but lately declared himself chief of all goblins.\"");
	say();
	message("\"Where once they could be discouraged by the mere presence of armed resistance, they now are bold and organized. They no longer flee, but stay and fight.\"");
	say();
	UI_remove_answer("Pomdirgun");
labelFunc0438_03E7:
	case "storms" attend labelFunc0438_0405:
	message("\"The storms at sea cannot compare to these unnatural occurrences. Their very existence says that we are in a land so far from the natural order of things that even the skies lash out at us.\"");
	say();
	message("\"Batlin was right. We cannot hope to survive if Unity is not brought to this place.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer("Batlin");
labelFunc0438_0405:
	case "Batlin" attend labelFunc0438_0444:
	message("\"Thou knowest Batlin?\"");
	say();
	var0006 = Func0955();
	if (!var0006) goto labelFunc0438_0431;
	message("\"What canst thou tell us of home? What news of his noble cause?\"");
	say();
	UI_add_answer(["All Is Well.", "It Hath Been Disbanded."]);
	goto labelFunc0438_043D;
labelFunc0438_0431:
	message("\"What a wondrous man of insight he is!\"");
	say();
	message("\"Without him giving voice to the Triad of Inner Strength, we would all be doomed to failure... failure to live up to Lord British's high standards, or realize the full potential of every one of us.\"");
	say();
	message("\"'Tis a pity that thou didst miss him. He hath gone inland to spread word of The Fellowship.\"");
	say();
labelFunc0438_043D:
	UI_remove_answer("Batlin");
labelFunc0438_0444:
	case "All Is Well." attend labelFunc0438_0457:
	message("\"Marvelous! Soon thou shalt see, everyone shall embrace the Triad of Inner Strength. The storms shall end and we shall live in peace and happiness all our days.\"");
	say();
	UI_remove_answer("All Is Well.");
labelFunc0438_0457:
	case "It Hath Been Disbanded." attend labelFunc0438_048A:
	message("\"This is unthinkable! Surely there hath been some mistake!\"");
	say();
	message("\"There is nothing evil in our principles! They are meant for all, without regard for station of birth.\"");
	say();
	message("\"Batlin must be told of this! If he returns to Britannia to explain to Lord British, I am sure that everything will be settled.\"");
	say();
	message("\"Perhaps our good name was degraded by those wishing to stop our ministering... But that shows a lack of Trust.\"");
	say();
	message("\"I must meditate on this. Mine Inner Voice will no doubt provide an answer for such horrible news.\"");
	say();
	Func097F(0xFFC8, "@This cannot be!@", 0x0000);
	UI_set_schedule_type(0xFFC8, 0x0014);
	abort;
labelFunc0438_048A:
	case "bye" attend labelFunc0438_04B9:
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Many thanks for thine help.@", 0x0000);
	Func097F(0xFFC8, (("@Go in Fellowship, " + var0002) + ".@"), 0x0005);
	goto labelFunc0438_04BC;
labelFunc0438_04B9:
	goto labelFunc0438_00EA;
labelFunc0438_04BC:
	endconv;
labelFunc0438_04BD:
	return;
}


