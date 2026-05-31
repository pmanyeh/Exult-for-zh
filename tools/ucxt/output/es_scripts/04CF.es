#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func094D 0x94D ();
extern void Func094E 0x94E ();

void Func04CF object#(0x4CF) ()
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
	var var000D;

	if (!(event == 0x0001)) goto labelFunc04CF_027F;
	UI_show_npc_face(0xFF31, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = "the Avatar";
	var0003 = Func08F7(0xFFFC);
	var0004 = false;
	var0005 = false;
	var0006 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!var0003) goto labelFunc04CF_0072;
	message("\"Ah, me good friend, Dupre. What kinna do fer ye this fine day?\"");
	say();
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Ah, master Yongi, always ready to offer a tankard of thy finest.\"");
	say();
	UI_remove_npc_face(0xFFFC);
	UI_show_npc_face(0xFF31, 0x0000);
labelFunc04CF_0072:
	if (!(!gflags[0x028C])) goto labelFunc04CF_0088;
	message("Tending the bar is a jovial-looking man. \"Welcome ta the Gilded Lizard.\"");
	say();
	var0006 = true;
	gflags[0x028C] = true;
	goto labelFunc04CF_008C;
labelFunc04CF_0088:
	message("\"Welcome back ta the Gilded Lizard. What may I do fer ye?\" asks Yongi.");
	say();
labelFunc04CF_008C:
	converse attend labelFunc04CF_027A;
	case "name" attend labelFunc04CF_0100:
	message("\"Me name is Yongi, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
	if (!var0006) goto labelFunc04CF_0100;
	message("\"And ye are?\"");
	say();
	var0007 = Func090B([var0000, var0002, var0001]);
	if (!(var0007 == var0002)) goto labelFunc04CF_00D8;
	message("\"Aye, ");
	message(var0001);
	message(". Right ye are. If ye dinna care ta tell me, I don't mind a bit.\" He winks.");
	say();
labelFunc04CF_00D8:
	if (!(var0007 == var0000)) goto labelFunc04CF_00EC;
	message("\"Welcome ta me tavern, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04CF_00EC:
	if (!(var0007 == var0001)) goto labelFunc04CF_0100;
	message("\"Right ye are, ");
	message(var0001);
	message(". There's no need ta tell anyone yer name.\"");
	say();
labelFunc04CF_0100:
	case "job" attend labelFunc04CF_0119:
	message("\"Why, I tend me bar. And lend me ear ta the customers,\" he adds, touching his right ear for emphasis.");
	say();
	UI_add_answer(["customers", "buy"]);
labelFunc04CF_0119:
	case "Vesper" attend labelFunc04CF_013A:
	message("\"Why, I wouldna wanna live anyplace else. 'Course, this town would be a better place if we could rid ourselves of those jackals, the gargoyles.\"");
	say();
	if (!(!var0005)) goto labelFunc04CF_0133;
	UI_add_answer("gargoyles");
labelFunc04CF_0133:
	UI_remove_answer("Vesper");
labelFunc04CF_013A:
	case "gargoyles" attend labelFunc04CF_016B:
	message("\"Gargoyles! What about them? They be the vilest, evilest, cruelest, most despicable things ever ta crawl upon this great land. I kinna tell ye too well ta stay away from them. I kin only imagine whata fine town this'd be if there weren't na more gargoyles. 'Course, I know those dogs are probably sayin' the same about us. Everybody knows they're gonna come an' kill allus in our sleep one evenin'.\"");
	say();
	if (!(!var0004)) goto labelFunc04CF_015C;
	message("\"Why, only the other day one attacked Blorn. G'won, ask him about it.\"");
	say();
	var0004 = true;
	UI_add_answer("Blorn");
labelFunc04CF_015C:
	var0005 = true;
	UI_remove_answer("gargoyles");
	gflags[0x0283] = true;
labelFunc04CF_016B:
	case "customers" attend labelFunc04CF_0191:
	message("\"Well, all I really know in Vesper are me regulars: Cador, Mara, and Blorn. Ye might be wantin' ta talk to Auston, the mayor, or his clerk, Liana. Ah, now there's a fine, young lass.\" He winks at you.");
	say();
	UI_add_answer(["Cador", "Mara", "Blorn", "Vesper"]);
	UI_remove_answer("customers");
labelFunc04CF_0191:
	case "Cador" attend labelFunc04CF_01BF:
	var0008 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0008) goto labelFunc04CF_01B4;
	message("\"He used ta come here every night, 'til he was killed in a brawl.\" The bartender's eyes narrow as he talks.");
	say();
	goto labelFunc04CF_01B8;
labelFunc04CF_01B4:
	message("\"He be in here every night after work. Good man, hard worker.\"");
	say();
labelFunc04CF_01B8:
	UI_remove_answer("Cador");
labelFunc04CF_01BF:
	case "Mara" attend labelFunc04CF_01ED:
	var0009 = UI_is_dead(UI_get_npc_object(0xFF34));
	if (!var0009) goto labelFunc04CF_01E2;
	message("\"She worked with Cador at the mines. She was more man than most men, that one was. An' she died like it, too -- in a brawl here at the tavern!\" He says, eyeing you suspiciously.");
	say();
	goto labelFunc04CF_01E6;
labelFunc04CF_01E2:
	message("\"She works with Cador at the mines. Hard as stone, that one. She be more man than most of the men in town.\"");
	say();
labelFunc04CF_01E6:
	UI_remove_answer("Mara");
labelFunc04CF_01ED:
	case "Blorn" attend labelFunc04CF_0228:
	message("\"There be one who knows what's what. He knows what be wrong with this town! Gargoyles! That is what be wrong. He hates 'em, 'e does.\"");
	say();
	if (!(!var0004)) goto labelFunc04CF_0208;
	message("\"He was even accosted by one of those jackals not too long ago. Ask 'im about it, why don't ye.\"");
	say();
	var0004 = true;
labelFunc04CF_0208:
	if (!(!gflags[0x0283])) goto labelFunc04CF_021D;
	if (!(!var0005)) goto labelFunc04CF_021D;
	UI_add_answer("gargoyles");
labelFunc04CF_021D:
	UI_remove_answer("Blorn");
	gflags[0x0283] = true;
labelFunc04CF_0228:
	case "buy" attend labelFunc04CF_0248:
	message("\"Be ye wantin' food or drink?\"");
	say();
	UI_add_answer(["food", "drink"]);
	UI_remove_answer("buy");
labelFunc04CF_0248:
	case "food" attend labelFunc04CF_025A:
	Func094D();
	UI_remove_answer("food");
labelFunc04CF_025A:
	case "drink" attend labelFunc04CF_026C:
	Func094E();
	UI_remove_answer("drink");
labelFunc04CF_026C:
	case "bye" attend labelFunc04CF_0277:
	goto labelFunc04CF_027A;
labelFunc04CF_0277:
	goto labelFunc04CF_008C;
labelFunc04CF_027A:
	endconv;
	message("\"May the road rise up ta meet ye!\"*");
	say();
labelFunc04CF_027F:
	if (!(event == 0x0000)) goto labelFunc04CF_0349;
	var000A = UI_part_of_day();
	var000B = UI_get_schedule_type(UI_get_npc_object(0xFF31));
	var000C = UI_die_roll(0x0001, 0x0004);
	if (!((var000A >= 0x0001) && (var000A <= 0x0003))) goto labelFunc04CF_02CB;
	if (!(var000B == 0x000E)) goto labelFunc04CF_02CB;
	var000D = "@Zzzzz . . .@";
labelFunc04CF_02CB:
	if (!((var000A == 0x0004) || ((var000A == 0x0005) || ((var000A == 0x0006) || ((var000A == 0x0007) || (var000A == 0x0000)))))) goto labelFunc04CF_033F;
	if (!(var000B == 0x000B)) goto labelFunc04CF_033F;
	if (!(var000C == 0x0001)) goto labelFunc04CF_030F;
	var000D = "@Refreshments here!@";
labelFunc04CF_030F:
	if (!(var000C == 0x0002)) goto labelFunc04CF_031F;
	var000D = "@Get a fine cup o' wine here!@";
labelFunc04CF_031F:
	if (!(var000C == 0x0003)) goto labelFunc04CF_032F;
	var000D = "@We have the best spirits here!@";
labelFunc04CF_032F:
	if (!(var000C == 0x0004)) goto labelFunc04CF_033F;
	var000D = "@No gargoyles allowed!@";
labelFunc04CF_033F:
	UI_item_say(0xFF31, var000D);
labelFunc04CF_0349:
	return;
}


