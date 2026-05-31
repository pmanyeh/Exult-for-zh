#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);
extern void Func092E 0x92E (var var0000);

void Func04AE object#(0x4AE) ()
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

	if (!(event == 0x0001)) goto labelFunc04AE_02B1;
	UI_show_npc_face(0xFF52, 0x0000);
	var0000 = Func0909();
	var0001 = Func08F7(0xFF51);
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x0227])) goto labelFunc04AE_0043;
	message("You see a beggar leaning on a crutch. His eyes shine like diamonds with sheer bitterness.");
	say();
	gflags[0x0227] = true;
	goto labelFunc04AE_004D;
labelFunc04AE_0043:
	message("\"Happy days, ");
	message(var0000);
	message("?\" Komor asks.");
	say();
labelFunc04AE_004D:
	converse attend labelFunc04AE_02A6;
	case "name" attend labelFunc04AE_0063:
	message("\"My name is Komor.\"");
	say();
	UI_remove_answer("name");
labelFunc04AE_0063:
	case "job" attend labelFunc04AE_00AA:
	message("\"I am a dancer, ");
	message(var0000);
	message(".\" He cannot keep a straight face and almost falls off his crutches.*");
	say();
	UI_add_answer("beggar");
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_00AA;
	UI_show_npc_face(0xFF51, 0x0000);
	message("\"Ha! Ha! Ha! Ha! Ha! Ha! 'Tis a ripe one, Komor!\"*");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_00AA:
	case "beggar" attend labelFunc04AE_00D0:
	message("\"I was not always a beggar. Like Fenn and Merrick, I used to be a farmer, too. But times got worse, and times are always bad in Paws.\"");
	say();
	UI_add_answer(["Fenn", "Merrick", "Paws", "give"]);
	UI_remove_answer("beggar");
labelFunc04AE_00D0:
	case "Fenn" attend labelFunc04AE_011E:
	message("\"Fenn and me are chums and will be to the day we die. We share in each other's vast expanses of wealth.\"*");
	say();
	UI_remove_answer("Fenn");
	UI_add_answer(["chums", "wealth"]);
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_011E;
	UI_show_npc_face(0xFF51, 0x0000);
	message("\"Ha! Ha! Ha! Ha! With thy wit thou shouldst be on stage!\"*");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_011E:
	case "chums" attend labelFunc04AE_0163:
	message("\"Fenn and me have been friends since we were little tiny babes.\"");
	say();
	var0001 = Func08F7(0xFF51);
	if (!var0001) goto labelFunc04AE_015C;
	message("\"I would bet thee that thou didst not think we would end up like this. Eh, Fenn?\"*");
	say();
	UI_show_npc_face(0xFF51, 0x0000);
	message("\"Not in me wildest dreams, Komor.*\"");
	say();
	UI_remove_npc_face(0xFF51);
	UI_show_npc_face(0xFF52, 0x0000);
labelFunc04AE_015C:
	UI_remove_answer("chums");
labelFunc04AE_0163:
	case "wealth" attend labelFunc04AE_0176:
	message("\"Yea verily, Fenn and I share all that we own. Which, in its totality, is the clothes on our backs and the snot in our\tthroats!\"");
	say();
	UI_remove_answer("wealth");
labelFunc04AE_0176:
	case "Merrick" attend labelFunc04AE_0196:
	message("\"A royal rotten egg, he is. Merrick turned his back on us and now spends each night in a warm, cozy bed. Which is more than either one of us have had for some time.\"");
	say();
	UI_add_answer(["turned his back", "bed"]);
	UI_remove_answer("Merrick");
labelFunc04AE_0196:
	case "Paws" attend labelFunc04AE_01A9:
	message("\"A veritable wonderland, is it not?\"");
	say();
	UI_remove_answer("Paws");
labelFunc04AE_01A9:
	case "turned his back" attend labelFunc04AE_01BC:
	message("\"The only thing worse than this miserable existence is having Merrick sniff around and try to recruit us! The bloody parasite!\"");
	say();
	UI_remove_answer("turned his back");
labelFunc04AE_01BC:
	case "bed" attend labelFunc04AE_01DC:
	message("\"Merrick sleeps in the shelter run by The Fellowship. They feed him, too. He had to join before they would help him.\"");
	say();
	UI_add_answer(["shelter", "Fellowship"]);
	UI_remove_answer("bed");
labelFunc04AE_01DC:
	case "shelter" attend labelFunc04AE_01EF:
	message("\"The shelter? 'Tis the large building filled with fawning hypocrites. Thou shouldst have little trouble finding it!\"");
	say();
	UI_remove_answer("shelter");
labelFunc04AE_01EF:
	case "Fellowship" attend labelFunc04AE_0202:
	message("\"We could have joined, but they are a foul lot. Anybody acting so bloody nice must be up to no good. There are some compromises we will not make, even to survive.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04AE_0202:
	case "give" attend labelFunc04AE_0298:
	message("\"Wilt thou give me a bit of money?\"");
	say();
	if (!Func090A()) goto labelFunc04AE_028D;
	message("How much?");
	say();
	UI_push_answers();
	var0002 = Func090B(["0", "1", "2", "3", "4", "5"]);
	var0003 = UI_count_objects(0xFE9B, 0x0284, 0xFE99, 0xFE99);
	if (!(var0003 >= var0002)) goto labelFunc04AE_0282;
	var0004 = UI_remove_party_items(var0002, 0x0284, 0xFE99, 0xFE99, true);
	if (!var0004) goto labelFunc04AE_027B;
	message("\"Thank thee, ");
	message(var0000);
	message(".\"");
	say();
	goto labelFunc04AE_027F;
labelFunc04AE_027B:
	message("\"I am unable to take thy money, for some strange reason.\"");
	say();
labelFunc04AE_027F:
	goto labelFunc04AE_0286;
labelFunc04AE_0282:
	message("\"Hmpf! Thou dost not have that much gold! Thou art almost as poor as I!\"");
	say();
labelFunc04AE_0286:
	UI_pop_answers();
	goto labelFunc04AE_0291;
labelFunc04AE_028D:
	message("\"Fine. Go on and live thy life in peace and happiness.\"");
	say();
labelFunc04AE_0291:
	UI_remove_answer("give");
labelFunc04AE_0298:
	case "bye" attend labelFunc04AE_02A3:
	goto labelFunc04AE_02A6;
labelFunc04AE_02A3:
	goto labelFunc04AE_004D;
labelFunc04AE_02A6:
	endconv;
	message("\"Hold thine head high, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04AE_02B1:
	if (!(event == 0x0000)) goto labelFunc04AE_0338;
	var0005 = UI_part_of_day();
	var0006 = UI_get_schedule_type(UI_get_npc_object(0xFF52));
	var0007 = UI_die_roll(0x0001, 0x0004);
	if (!(var0006 == 0x000B)) goto labelFunc04AE_0332;
	if (!(var0007 == 0x0001)) goto labelFunc04AE_02F5;
	var0008 = "@Spare coin for the wretched?@";
labelFunc04AE_02F5:
	if (!(var0007 == 0x0002)) goto labelFunc04AE_0305;
	var0008 = "@A modest handout, good person?@";
labelFunc04AE_0305:
	if (!(var0007 == 0x0003)) goto labelFunc04AE_0315;
	var0008 = "@Mercy may change thy luck!@";
labelFunc04AE_0315:
	if (!(var0007 == 0x0004)) goto labelFunc04AE_0325;
	var0008 = "@Any money for me, friend?@";
labelFunc04AE_0325:
	UI_item_say(0xFF52, var0008);
	goto labelFunc04AE_0338;
labelFunc04AE_0332:
	Func092E(0xFF52);
labelFunc04AE_0338:
	return;
}


