#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func042C object#(0x42C) ()
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

	if (!(event == 0x0001)) goto labelFunc042C_0287;
	UI_show_npc_face(0xFFD4, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD4));
	var0003 = UI_is_pc_female();
	var0004 = Func08F7(0xFFFE);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x007A]) goto labelFunc042C_005A;
	UI_add_answer("Nell with child");
labelFunc042C_005A:
	if (!gflags[0x0089]) goto labelFunc042C_0067;
	UI_add_answer("Charles is angry");
labelFunc042C_0067:
	if (!(!gflags[0x00AD])) goto labelFunc042C_0079;
	message("You see a flamboyant-looking gentleman. He is very cheerful and outgoing, greeting you with a smile and a wave.");
	say();
	gflags[0x00AD] = true;
	goto labelFunc042C_008B;
labelFunc042C_0079:
	if (!(!var0003)) goto labelFunc042C_0087;
	message("\"In a wink, in a word,~\"I do greet thee, Milord.\"");
	say();
	goto labelFunc042C_008B;
labelFunc042C_0087:
	message("\"To greet thee, On this day,~\"'Tis my pleasure, Milady.\"");
	say();
labelFunc042C_008B:
	converse attend labelFunc042C_0282;
	case "name" attend labelFunc042C_00A1:
	message("\"From out the dawn, when sun doth rise,~\"Until next morn when moon must go,~\"I answer to thy beck and cries,~\"thine humble servant, Carrocio!\"");
	say();
	UI_remove_answer("name");
labelFunc042C_00A1:
	case "job" attend labelFunc042C_00CC:
	message("\"The puppet's curtain I unfurl,~\"And from mine hands the story's told,~\"For pleasure of a boy or girl,~\"To see doth cost one coin of gold.~\"To take good measure of thy power,~\"Forged in fire of virtue's heart,~\"To ring the bell this very hour,~\"Do test thy strength 'til thy muscles smart.\"");
	say();
	if (!(!var0003)) goto labelFunc042C_00B8;
	message("\"And perhaps impress thine own sweetheart!\" Carrocio winks at you.");
	say();
labelFunc042C_00B8:
	message("\"Or dost thou wish to be a king?~\"Yonder sticks a sword in stone.~\"If thou canst only pull it out~ \"Thou wilt be the next upon the throne!\"");
	say();
	UI_add_answer(["puppet show", "see", "strength test"]);
labelFunc042C_00CC:
	case "puppet show" attend labelFunc042C_00EC:
	message("\"My childhood's eye spied father's toil,~\"A puppet's show of splendor royal.~\"Time's breeze has blown, My father's gone,~\"His child has grown, Regrets anon,~\"Gears and wheels move the moppets now, in need of no one,~\"And so I keep his carnival song playing on and on alone.\"");
	say();
	UI_remove_answer("puppet show");
	UI_add_answer(["regrets", "gears and wheels"]);
labelFunc042C_00EC:
	case "strength test" attend labelFunc042C_0111:
	if (!(!(var0002 == 0x0007))) goto labelFunc042C_0106;
	message("\"I am sorry to say~\"I have called it a day.~\"Come to the\tgrounds to test thy fitness~\"when I am, yea verily, open for business.\"");
	say();
	goto labelFunc042C_010A;
labelFunc042C_0106:
	message("\"Take the hammer in thine hands and strike a blow upon the ground,~\"If thine arms be possessed of might then thou shalt hear a ringing sound.~\"Once thou hast struck if thou hearest naught then thou dost know thy strength is flagging.~\"But if thou dost win the strength test game thou shalt receive a stuffed dragon.\"");
	say();
labelFunc042C_010A:
	UI_remove_answer("strength test");
labelFunc042C_0111:
	case "gears and wheels" attend labelFunc042C_0124:
	message("\"I fear an end to my family craft, where the show is run by human heart,~\"But bones do age, not so machines, and we cannot simply replace a part.~\"I carry on as best I can, A machine to play my father's role,~\"Control the marionettes unseen, struggling to imbue them with a soul.\"");
	say();
	UI_remove_answer("gears and wheels");
labelFunc042C_0124:
	case "regrets" attend labelFunc042C_0147:
	message("\"The faces pressed before me, fleeting moments chance of glee, From the lowly mongrel beggar to the resident of throne,~\"Each know their place and gave me chase to find the one for me, Woman whom my life may share, this heart that waits alone.\"");
	say();
	UI_remove_answer("regrets");
	UI_add_answer(["mongrel beggar", "resident of throne", "woman"]);
labelFunc042C_0147:
	case "mongrel beggar" attend labelFunc042C_015A:
	message("\"A beggar man called Snaz will come to watch my show, ~\"to steal and sell all my best jokes, mine own personal foe.\"");
	say();
	UI_remove_answer("mongrel beggar");
labelFunc042C_015A:
	case "resident of throne" attend labelFunc042C_016D:
	message("\"Thine ignorance doth make me skittish,~\"surely thou hast heard of wise Lord British.\"");
	say();
	UI_remove_answer("resident of throne");
labelFunc042C_016D:
	case "woman" attend labelFunc042C_0187:
	message("\"The awakening of mine heart's idyll,~\"Lies 'neath me for I see her still,~\"No bard could e'er describe nor tell,~\"the tenderness of my fair Nell.\"");
	say();
	UI_remove_answer("woman");
	UI_add_answer("Nell");
labelFunc042C_0187:
	case "Nell" attend labelFunc042C_01A7:
	message("\"'Tis said love is a fiery angel,~\"Riding soft silk wings of pure redemption,~\"My puppet's heart still as an anvil,~\"At the wicked thrill of her attention.~\"By mine angel Nell I am anointed,~\"Humble cowardice felled by Passion's blade,~\"As her beloved I was hence appointed,~\"Perchance through destiny a marriage made.\"");
	say();
	UI_remove_answer("Nell");
	UI_add_answer(["wicked thrill", "marriage"]);
labelFunc042C_01A7:
	case "wicked thrill" attend labelFunc042C_01BA:
	message("Carrocio looks as if he is lost in a memory. After a moment he returns to reality.~~\"I would not be a gentleman if I spoke of this more, Forgive me the candor of mine heart's open door.\"~He appears somewhat embarrassed and clears his throat loudly several times.");
	say();
	UI_remove_answer("wicked thrill");
labelFunc042C_01BA:
	case "marriage" attend labelFunc042C_01DA:
	message("\"My coins are arrows rushing to make good,~\"'Til the day when the jeweller sells his ring,~\"For my sure heart is not but carved from wood,~\"And she doth tend to the bed of a king.\"");
	say();
	UI_remove_answer("marriage");
	if (!gflags[0x007A]) goto labelFunc042C_01DA;
	UI_add_answer("Nell with child");
labelFunc042C_01DA:
	case "Nell with child" attend labelFunc042C_0215:
	message("Carrocio gives you a shocked look and drops to his knees before you. \"I beseech thee, ");
	message(var0000);
	message(", ~\"Keep still thy tongue,~\"My Nell has ne'er harmed anyone,~\"It would cause grievous injury to her reputation,~\"Through the town's wagging lips our secret to spread,~\"'Twould make a permanent end of mine occupation,~\"And kill our hope of a happy life dead.\" He looks you in the eyes, pleadingly. \"In thee I must place mine hope and trust,~\"Part, parcel and whole.~\"To ne'er again speak of the spoils of my lust, ~\"Thou must not tell a soul!\"");
	say();
	if (!(!gflags[0x0089])) goto labelFunc042C_020E;
	message("He looks at you awaiting some sort of indication. Will you keep his secret?");
	say();
	var0005 = Func090A();
	if (!var0005) goto labelFunc042C_020A;
	message("\"Thou dost walk with honor,~\"I know thou wilt not tell,~\"Of dignity's stains I do not bother,~\"My concerns are none save for Nell.\"");
	say();
	goto labelFunc042C_020E;
labelFunc042C_020A:
	message("\"Reconsider, I must insist of thee, Thou art too thin of hide,~\"If he knew, Nell's brother would murder me,~\"And I would not see Nell widowed before having the chance to become a bride.\"");
	say();
labelFunc042C_020E:
	UI_remove_answer("Nell with child");
labelFunc042C_0215:
	case "Charles is angry" attend labelFunc042C_0222:
	message("\"I am grateful for thine honesty about thy lack of care,~\"But why hast thou placed thyself in the center of our affair?~\"For Nell's sake I could not bring myself to cause harm to her brother,~\"I shall convince him of mine intentions,~\"I love Nell and no other.~\"Leave me now for I must use this time to properly prepare.\"");
	say();
	abort;
labelFunc042C_0222:
	case "see" attend labelFunc042C_0274:
	if (!(!(var0002 == 0x0007))) goto labelFunc042C_023C;
	message("\"I am sorry to say~\"I have called it a day.~\"Come to the grounds at daybreak~\"when the puppets are, yea verily, up and awake.\"");
	say();
	goto labelFunc042C_026C;
labelFunc042C_023C:
	message("\"See foolish pride and love, brutality and sin, Carrocio's tiny world of moving dolls,~\"Enough to make thee gasp, or cry or grin,~\"All who wish to see 'tis time to hear my calls,~\"For now the puppet show is about to begin!\"*");
	say();
	var0006 = UI_find_nearby_avatar(0x01F7);
	UI_halt_scheduled(var0006[0x0001]);
	var0007 = UI_delayed_execute_usecode_array(var0006[0x0001], [(byte)0x55, 0x01F7], 0x000F);
labelFunc042C_026C:
	UI_remove_answer("see");
	abort;
labelFunc042C_0274:
	case "bye" attend labelFunc042C_027F:
	goto labelFunc042C_0282;
labelFunc042C_027F:
	goto labelFunc042C_008B;
labelFunc042C_0282:
	endconv;
	message("\"Perchance to find in mercy's ear, A voice to know as gentle friend,~\"I bid thee well, but hark return, If thou wouldst see the puppet's play or test thy strength again.\"");
	say();
labelFunc042C_0287:
	if (!(event == 0x0000)) goto labelFunc042C_0330;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFD4));
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x0007)) goto labelFunc042C_032A;
	if (!((var0001 == 0x0003) || ((var0001 == 0x0004) || ((var0001 == 0x0005) || (var0001 == 0x0006))))) goto labelFunc042C_0327;
	if (!(var0008 == 0x0001)) goto labelFunc042C_02ED;
	var0009 = "@See the puppets!@";
labelFunc042C_02ED:
	if (!(var0008 == 0x0002)) goto labelFunc042C_02FD;
	var0009 = "@Canst thou ring the bell?@";
labelFunc042C_02FD:
	if (!(var0008 == 0x0003)) goto labelFunc042C_030D;
	var0009 = "@Next show starts soon!@";
labelFunc042C_030D:
	if (!(var0008 == 0x0004)) goto labelFunc042C_031D;
	var0009 = "@Measure thy might!@";
labelFunc042C_031D:
	UI_item_say(0xFFD4, var0009);
labelFunc042C_0327:
	goto labelFunc042C_0330;
labelFunc042C_032A:
	Func092E(0xFFD4);
labelFunc042C_0330:
	return;
}


