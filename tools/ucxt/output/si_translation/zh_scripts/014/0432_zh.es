#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0953 0x953 ();
extern void Func07D1 object#(0x7D1) ();
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern void Func08AB 0x8AB ();
extern void Func08AA 0x8AA ();

void Func0432 object#(0x432) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = Func0954();
	var0001 = Func0953();
	var0002 = UI_is_pc_female();
	if (!(event == 0x0007)) goto labelFunc0432_002D;
	var0003 = UI_execute_usecode_array(item, [(byte)0x23, (byte)0x55, 0x0112]);
labelFunc0432_002D:
	if (!(event == 0x0001)) goto labelFunc0432_0063;
	UI_item_say(0xFE9C, "@Greetings, good sir.@");
	0xFFCE->Func07D1();
	Func097F(0xFFCE, (("@Greetings, " + var0000) + ".@"), 0x0005);
	UI_set_schedule_type(0xFFCE, 0x0003);
labelFunc0432_0063:
	if (!(event == 0x0009)) goto labelFunc0432_0337;
	UI_run_schedule(0xFFCE);
	UI_clear_item_say(0xFFCE);
	UI_show_npc_face0(0xFFCE, 0x0000);
	var0004 = UI_get_item_flag(0xFFCE, 0x001C);
	if (!(var0004 == false)) goto labelFunc0432_00BE;
	if (!(gflags[0x003E] == true)) goto labelFunc0432_00A7;
	message("\"Welcome ta Fawn. I am Great Captain Joth. Thou canst call me Joth.\" *\"'Tis always a pleasure ta meet a Pikeman.\"");
	say();
	goto labelFunc0432_00B1;
labelFunc0432_00A7:
	message("\"I cannot remember seeing thee here... I am Great Captain Joth. Thou canst call me Joth.\" *\"Welcome ta Fawn, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0432_00B1:
	UI_set_item_flag(0xFFCE, 0x001C);
	goto labelFunc0432_00C2;
labelFunc0432_00BE:
	message("\"Good ta see thee again.\"");
	say();
labelFunc0432_00C2:
	UI_add_answer(["storms", "goblins", "bye"]);
labelFunc0432_00D2:
	converse attend labelFunc0432_0336;
	case "storms" attend labelFunc0432_00F8:
	message("\"'Twas a storm what ran me ship aground and took me from the sea! 'Tis fitting that these daemon storms will be the end of us all.\" *\"They have taken all me old friends -- plucked 'em right off the water or drowned 'em deep. Never thought I'd live ta see the day when Fawn's fleet was brought low.\"");
	say();
	UI_remove_answer("storms");
	UI_add_answer(["aground", "friends", "fleet"]);
labelFunc0432_00F8:
	case "aground" attend labelFunc0432_013D:
	UI_remove_answer("aground");
	message("\"'Twere a handful o' years ago, and me body remembers it like 'twere yesterday. I was fouled in a mass of rigging when me ship was thrown inta the shoals.\"");
	say();
	message("\"Seth, the healer, patched me up right enough, but that were the end of me sea-goin' days.\"");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0432_0125;
	message("\"Life's not been the same for me since. I do miss the sea!\"");
	say();
	goto labelFunc0432_0133;
labelFunc0432_0125:
	message("\"Never dreamed a crusty old salt like meself would end my days on the Great Captain's Council.\"");
	say();
	UI_add_answer(["Great Captain's Council"]);
labelFunc0432_0133:
	UI_add_answer(["Seth"]);
labelFunc0432_013D:
	case "Seth" attend labelFunc0432_0157:
	message("\"Seth's gone too. Only the goblins got 'im. Put 'im in their big ol' stewpots, they did.\" *\"What's the world comin' ta, I ask thee? If it isn't vile monsters, 'tis Nature herself what has turned against us.\"");
	say();
	UI_remove_answer("Seth");
	UI_add_answer("Nature herself");
labelFunc0432_0157:
	case "Nature herself" attend labelFunc0432_016A:
	message("\"'Tis plain that thou art not a seaman... The rain's the tears o' Nature. An' the wind, that be the breath o' Nature. Whene'er there be a bad storm, 'tis Nature's anger.\" *\"I'll wager that she be fearsome upset about now.\"");
	say();
	UI_remove_answer("Nature herself");
labelFunc0432_016A:
	case "Great Captain's Council" attend labelFunc0432_018D:
	message("\"Aye. 'Tis the Great Captains what advise Lady Yelinda in the workings of trade and the fleet. Things what some feel that women have no interest in.\" *\"The Great Captains be meself, Garth and Voldin.\"");
	say();
	UI_remove_answer("Great Captain's Council");
	UI_add_answer(["Lady Yelinda", "Garth", "Voldin"]);
labelFunc0432_018D:
	case "Lady Yelinda" attend labelFunc0432_01A0:
	message("\"She be the ruler of Fawn. 'Tis Lady Yelinda what doth do the meetin' an' greetin' of all what wish ta trade with Fawn. An' Lady Yelinda be the one what makes the official decrees an' laws an' such. After she counsels with us, of course. Ha.\"");
	say();
	UI_remove_answer("Lady Yelinda");
labelFunc0432_01A0:
	case "Garth" attend labelFunc0432_01BA:
	message("\"Garth be no more than a green lad with a passion for the ladies. Never been ta sea that I know of. Some Great Captain that is.\" *\"But 'is family's had money an' lots o' trade smarts. Could do worse for a council member, I reckon. Could put poor ol' drunken Olon in the seat. Ha.\"");
	say();
	UI_remove_answer("Garth");
	UI_add_answer("Olon");
labelFunc0432_01BA:
	case "Olon" attend labelFunc0432_01D1:
	message("\"Olon was one of the best fishermen we had, 'til the day he watched his ship go down.\" *\"'Twere durin' one of these weird storms, an' Olon had missed castoff. He was fixin' ta row out ta the ship when it were hit by that freak lightning. All of a sudden, it weren't no ship. It were a grain wagon. All hands drowned, and Olon thinks he's a doomed man.\"");
	say();
	message("\"If thou wert ta ask me, I'd tell thee that we all be doomed, so why not bury our troubles in the bottom of an ale glass? But no one hath asked ol' Joth nothin', so I go about me business.\"");
	say();
	UI_remove_answer("Olon");
labelFunc0432_01D1:
	case "Voldin" attend labelFunc0432_01F1:
	message("\"Now Voldin were a captain, all right. An' a guardsman ta boot. He likes ta run things... be in charge.\" *\"Suppose 'twere only natural that he end on the Council. Now he doth have Garth and me ta bully, and Zulith and Kylista at his beck an' call.\"");
	say();
	UI_remove_answer("Voldin");
	UI_add_answer(["Zulith", "Kylista"]);
labelFunc0432_01F1:
	case "Zulith" attend labelFunc0432_0204:
	message("\"Look for a bright green flare... that'd be Zulith in his flashy Chancellor's robes.\" *\"Puffs like he's important, runnin' messages from the palace ta the Great Captains. But ever'one laughs real quiet behind their sleeves. Zulith is a vengeful little man, and thou had best be wary around him.\"");
	say();
	UI_remove_answer("Zulith");
labelFunc0432_0204:
	case "Kylista" attend labelFunc0432_0237:
	if (!(var0002 == true)) goto labelFunc0432_021B;
	message("\"Now thou art talkin' o' the other end o' Zulith's tether. Kylista is the Priestess of Beauty, but -- between thee an' me -- I think she would rather be called Lady Kylista, if it pleases thee.\" *\"She doth perform a pretty show at the Oracle, no doubt, callin' for those revelations.\"");
	say();
	goto labelFunc0432_0223;
labelFunc0432_021B:
	message("\"A wondrous fling between the covers, she is! Kylista certainly knows the secrets of usin' Beauty ta obtain what she wants. If not before the Oracle callin' revelations, then in a man's bedchamber.\"");
	say();
	message("\"Kylista is the Priestess of Beauty, but -- between thee an' me -- I think she would rather be called Lady Kylista, if it pleases thee. She hath a firm hold on Zulith's tether, 'tis certain.\"");
	say();
labelFunc0432_0223:
	UI_remove_answer("Kylista");
	UI_add_answer(["Oracle", "revelations"]);
labelFunc0432_0237:
	case "Oracle" attend labelFunc0432_024A:
	message("\"'Tis a wonder ta behold, make no mistake. A true magical type of thing. Used ta draw quite a crowd, before the storms went so bad.\" *\"Pretty ta look at, for sure.\"");
	say();
	UI_remove_answer("Oracle");
labelFunc0432_024A:
	case "revelations" attend labelFunc0432_025D:
	message("\"Straight from the heavens, ta hear Kylista speak of it. Never found much use in 'em meself. A fisherman don't see much beauty out haulin' in nets all day long.\"");
	say();
	UI_remove_answer("revelations");
labelFunc0432_025D:
	case "friends" attend labelFunc0432_0270:
	message("\"Good seamen all. Fishermen an' captains alike. These cursed storms have taken every good man from Fawn's shores an' left me alone with these land crawlers.\" *\"'Tis enough ta make a man think about walkin' inta the sea at high tide...\"");
	say();
	UI_remove_answer("friends");
labelFunc0432_0270:
	case "fleet" attend labelFunc0432_02A4:
	UI_remove_answer("fleet");
	message("\"Fawn used ta be able ta bring in enough fish for us an' the other cities besides. Now there's nothing but a few old rowboats left.");
	say();
	if (!(gflags[0x0170] && (gflags[0x0172] && (!gflags[0x016E])))) goto labelFunc0432_0299;
	message("\"An' there be nobody brave enough to even sail the rowboats! Not in these storms...\"");
	say();
	goto labelFunc0432_02A4;
labelFunc0432_0299:
	message("\"An' what's worse, Lady Yelinda tells me that I'm ta be in charge of the restorations!\"");
	say();
	UI_add_answer("restorations");
labelFunc0432_02A4:
	case "restorations" attend labelFunc0432_02BF:
	message("\"Restorations she calls it! Like there was something ta restore! But drawn the reports and plans, I have. As ordered.\"");
	say();
	message("\"But tell me, if thou canst, how Fawn is ta build ships when most of the shipwrights are drowned? Or tell me how we're ta acquire the wood ta build with if these storms have us runnin' like rabbits ta a hole?\"");
	say();
	message("\"An' Voldin sits holdin' the money tellin' me 'tis unsafe ta begin buildin'. As if I had ballast for brains! But he doth not have ta report to Lady Yelinda. I do!\"");
	say();
	UI_remove_answer("restorations");
labelFunc0432_02BF:
	case "goblins" attend labelFunc0432_02D9:
	message("\"The goblins have always been like fleas infestin' this part o' the land. We'd stomp on 'em good an' hard, an' they'd go crawl back ta whate'er hole they crawled out of.\" *\"But since this Pomdirgun brute came along, there's been no drivin' 'em back.\"");
	say();
	UI_remove_answer("goblins");
	UI_add_answer("Pomdirgun");
labelFunc0432_02D9:
	case "Pomdirgun" attend labelFunc0432_02F3:
	message("\"Pomdirgun's larger than most goblins. Certainly meaner or he would never have gotten the brutes all under his command. I'm almost willin' ta believe that he's half daemon, like some folk say.\"");
	say();
	UI_remove_answer("Pomdirgun");
	UI_add_answer("daemon");
labelFunc0432_02F3:
	case "daemon" attend labelFunc0432_0306:
	message("\"There are daemon ruins all around this land. Thou canst not miss them -- they are all covered with evil lookin' serpents.\" *\"Some say that the daemons are still here. They say that civilized man drove them underground when we settled here.\" ~\"Haven't ever seen one. Wouldn't want to neither.\"");
	say();
	UI_remove_answer("daemon");
labelFunc0432_0306:
	case "bye" attend labelFunc0432_0333:
	Func08AB();
	UI_remove_npc_face0();
	Func097F(0xFE9C, "@Goodbye!@", 0x0000);
	Func097F(0xFFCE, "@Keep a weather eye!@", 0x0002);
	Func08AA();
	goto labelFunc0432_0336;
labelFunc0432_0333:
	goto labelFunc0432_00D2;
labelFunc0432_0336:
	endconv;
labelFunc0432_0337:
	return;
}


