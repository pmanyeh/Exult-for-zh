#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0487 object#(0x487) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0487_0266;
	UI_show_npc_face(0xFF79, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = Func08F7(0xFF7A);
	var0003 = Func08F7(0xFF78);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x017D]) goto labelFunc0487_004E;
	UI_add_answer("locket");
labelFunc0487_004E:
	if (!(!gflags[0x0190])) goto labelFunc0487_006D;
	message("The man before you examines you with shifty eyes. He has a slightly crouched posture as if constantly poised to strike out at the world around him.");
	say();
	gflags[0x0190] = true;
	if (!gflags[0x0180]) goto labelFunc0487_006A;
	UI_add_answer("strangers");
labelFunc0487_006A:
	goto labelFunc0487_0071;
labelFunc0487_006D:
	message("\"What?\" asks Battles.");
	say();
labelFunc0487_0071:
	converse attend labelFunc0487_0261;
	case "name" attend labelFunc0487_008E:
	message("\"Battles. M'self, I be a stranger to New Magincia.\"");
	say();
	UI_add_answer("New Magincia");
	UI_remove_answer("name");
labelFunc0487_008E:
	case "job" attend labelFunc0487_00A7:
	message("\"I be hired as a bodyguard for Master Robin, as is me partner, Leavell. The pay be good.\"");
	say();
	UI_add_answer(["Robin", "Leavell"]);
labelFunc0487_00A7:
	case "Robin" attend labelFunc0487_00FA:
	message("\"Robin be a high stakes gamblin' gent who makes his living inna casino at Buccaneer's Den.\"");
	say();
	if (!var0002) goto labelFunc0487_00E6;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("\"A living that would not have been anything near as profitable if not for thy good works, Battles.\"*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("\"Thank yer, Milord.\"*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_00E6:
	UI_remove_answer("Robin");
	UI_add_answer(["gamblin' gent", "casino"]);
labelFunc0487_00FA:
	case "gamblin' gent" attend labelFunc0487_0132:
	message("\"Gamblin' is how Robin makes his living. I do not think he has had a regular post in all of his life!\"");
	say();
	if (!var0002) goto labelFunc0487_012B;
	UI_show_npc_face(0xFF7A, 0x0000);
	message("\"Why, I thank thee for the compliment, Battles!\"*");
	say();
	UI_remove_npc_face(0xFF7A);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_012B:
	UI_remove_answer("gamblin' gent");
labelFunc0487_0132:
	case "casino" attend labelFunc0487_0145:
	message("\"The casino in Buccaneer's Den is called the House of Games and it the most fabulous place I have ever seen in me life. I shall never forget the first time Robin took me there. He walked away with a hundred gold pieces for less than an hour's work!\"");
	say();
	UI_remove_answer("casino");
labelFunc0487_0145:
	case "Leavell" attend labelFunc0487_0198:
	message("\"He's a lady's man, he is. But do not be thinkin' he cannot handle hissel' inna fight. T'would be yer last mistake.\"");
	say();
	if (!var0003) goto labelFunc0487_0184;
	UI_show_npc_face(0xFF78, 0x0000);
	message("\"I can near out wrestle thee, Battles, ye old dog!\"*");
	say();
	UI_show_npc_face(0xFF79, 0x0000);
	message("\"Har! Har! Har! Har!\"");
	say();
	UI_remove_npc_face(0xFF78);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_0184:
	UI_remove_answer("Leavell");
	UI_add_answer(["lady's man", "fight"]);
labelFunc0487_0198:
	case "lady's man" attend labelFunc0487_01D0:
	message("\"Why, I reckon Leavell has broken near as many hearts as I have made stop beating!\"");
	say();
	if (!var0003) goto labelFunc0487_01C9;
	UI_show_npc_face(0xFF78, 0x0000);
	message("\"So many!\"*");
	say();
	UI_remove_npc_face(0xFF78);
	UI_show_npc_face(0xFF79, 0x0000);
labelFunc0487_01C9:
	UI_remove_answer("lady's man");
labelFunc0487_01D0:
	case "fight" attend labelFunc0487_01E3:
	message("\"Just the practice Leavell has had in fending off jealous husbands 'twould make any man a master combatant!\"");
	say();
	UI_remove_answer("fight");
labelFunc0487_01E3:
	case "strangers" attend labelFunc0487_01F6:
	message("\"Strangers? ~~Thou must mean us!\" Battles snorts loudly.");
	say();
	UI_remove_answer("strangers");
labelFunc0487_01F6:
	case "New Magincia" attend labelFunc0487_0216:
	message("\"We be looking to get off this boring rock, New Magincia, and back to Buccaneer's Den. If ye have a way to get us there, and away from these peasant knaves, Master Robin shall pay ye well.\"");
	say();
	UI_remove_answer("New Magincia");
	UI_add_answer(["boring rock", "peasant knaves"]);
labelFunc0487_0216:
	case "boring rock" attend labelFunc0487_0229:
	message("\"Canst thou imagine spending thine entire life here with nothing happening day after day after day? 'Tis enough to drive a man mad!\"");
	say();
	UI_remove_answer("boring rock");
labelFunc0487_0229:
	case "peasant knaves" attend labelFunc0487_023C:
	message("\"The people here are so lacking in education that they never even heard of gamblin' before! Never heard of gamblin'? That is what life is all about!\"");
	say();
	UI_remove_answer("peasant knaves");
labelFunc0487_023C:
	case "locket" attend labelFunc0487_0253:
	message("\"I sar a locket jus' like the one thou be describin' in the possession o' Master Robin. The last time I sar it was... Lessee... It was right before the three of us went drinkin' at the Modest Damsel.\"");
	say();
	gflags[0x0185] = true;
	UI_remove_answer("locket");
labelFunc0487_0253:
	case "bye" attend labelFunc0487_025E:
	goto labelFunc0487_0261;
labelFunc0487_025E:
	goto labelFunc0487_0071;
labelFunc0487_0261:
	endconv;
	message("\"Be seein' ye.\"*");
	say();
labelFunc0487_0266:
	if (!(event == 0x0000)) goto labelFunc0487_0274;
	Func092E(0xFF79);
labelFunc0487_0274:
	return;
}


