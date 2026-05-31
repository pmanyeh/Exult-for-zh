#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047E object#(0x47E) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	if (!(event == 0x0001)) goto labelFunc047E_0353;
	UI_show_npc_face(0xFF82, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF82);
	var0003 = UI_get_npc_object(0xFF83);
	var0004 = UI_get_npc_object(0xFF81);
	var0005 = Func08F7(0xFF83);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0168]) goto labelFunc047E_0075;
	if (!(!(var0001 == 0x0004))) goto labelFunc047E_0075;
	if (!(!gflags[0x016A])) goto labelFunc047E_0075;
	UI_add_answer("return flag");
labelFunc047E_0075:
	if (!(var0001 == 0x0004)) goto labelFunc047E_015F;
	if (!gflags[0x0168]) goto labelFunc047E_010D;
	if (!(!gflags[0x016A])) goto labelFunc047E_010D;
	message("\"I see that coward Sprellic has given thee the flag so that it may be returned to us. Thou hadst better hand it over.\"");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc047E_00C6;
	message("She takes the banner from you.");
	say();
	message("\"This matter is now settled. But tell that worm Sprellic from me that he had better keep his hands off of other people's property in the future.\"*");
	say();
	gflags[0x016A] = true;
	gflags[0x0164] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc047E_010D;
labelFunc047E_00C6:
	message("\"It has come to our attention that thou hast been given our honor flag. Apparently Sprellic gave it to thee to return to us. If thou dost wish to keep it then our quarrel is now with thee.\"*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc047E_010D:
	if (!(gflags[0x0170] && (!gflags[0x0168]))) goto labelFunc047E_015F;
	message("\"Thou mayest fight for Sprellic, but I fight for honor!\"*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	abort;
labelFunc047E_015F:
	if (!(!gflags[0x0178])) goto labelFunc047E_0171;
	message("Standing before you is a statuesque fighting woman with eyes that radiate a familiarity with danger.");
	say();
	gflags[0x0178] = true;
	goto labelFunc047E_0175;
labelFunc047E_0171:
	message("\"It seems we meet again,\" says Syria.");
	say();
labelFunc047E_0175:
	converse attend labelFunc047E_034E;
	case "name" attend labelFunc047E_018B:
	message("\"I am Syria, a fighter from the south.\"");
	say();
	UI_remove_answer("name");
labelFunc047E_018B:
	case "job" attend labelFunc047E_01A7:
	message("\"Currently I am resting from my last voyage as a mercenary. I am\tstudying in Jhelom with the fighting trainer De Snel\tat the Library of Scars.\"");
	say();
	UI_add_answer(["Jhelom", "De Snel", "Library of Scars"]);
labelFunc047E_01A7:
	case "Jhelom" attend labelFunc047E_01C1:
	message("\"This is a city of fighters and duels. If thou dost not like it the way it is, then leave. Duels are fought here for many reasons. I have mine own reasons for fighting them.\"");
	say();
	UI_add_answer("duels");
	UI_remove_answer("Jhelom");
labelFunc047E_01C1:
	case "duels" attend labelFunc047E_01F6:
	if (!(!gflags[0x0164])) goto labelFunc047E_01E4;
	message("\"There is no question that Sprellic is the one who took the honor flag of our school. If he does not wish to fight the duels then he has only to return it.\"");
	say();
	UI_add_answer(["Sprellic", "return"]);
	goto labelFunc047E_01EF;
labelFunc047E_01E4:
	message("\"A pity we could not teach that little fool a lesson. Still, we have regained our honor and that is enough. For now.\"");
	say();
	UI_add_answer("Sprellic");
labelFunc047E_01EF:
	UI_remove_answer("duels");
labelFunc047E_01F6:
	case "return" attend labelFunc047E_022E:
	message("\"Since Sprellic has not done this, it proves that he is sincere in the grievous insult that he has made against us.\"*");
	say();
	if (!var0005) goto labelFunc047E_0227;
	UI_show_npc_face(0xFF83, 0x0000);
	message("\"And I shall grievously insult him-- through his heart!\"*");
	say();
	UI_remove_npc_face(0xFF83);
	UI_show_npc_face(0xFF82, 0x0000);
labelFunc047E_0227:
	UI_remove_answer("return");
labelFunc047E_022E:
	case "Sprellic" attend labelFunc047E_024F:
	if (!(!gflags[0x0164])) goto labelFunc047E_0244;
	message("\"I was on guard when Sprellic took our club's honor flag. I saw him take it but I lost him in the shadows of the night. My punishment was ten lashes for allowing the thief to escape. I mean to repay him for that.\"");
	say();
	goto labelFunc047E_0248;
labelFunc047E_0244:
	message("\"A pity we could not teach that little fool a lesson. Perhaps we have anyway. For his sake, he had better have learned it well.\"");
	say();
labelFunc047E_0248:
	UI_remove_answer("Sprellic");
labelFunc047E_024F:
	case "Library of Scars" attend labelFunc047E_0287:
	message("\"The Library of Scars is the greatest guild of fighters in Britannia.\"*");
	say();
	if (!var0005) goto labelFunc047E_0280;
	UI_show_npc_face(0xFF83, 0x0000);
	message("\"Here! Here!\"*");
	say();
	UI_remove_npc_face(0xFF83);
	UI_show_npc_face(0xFF82, 0x0000);
labelFunc047E_0280:
	UI_remove_answer("Library of Scars");
labelFunc047E_0287:
	case "De Snel" attend labelFunc047E_029A:
	message("\"Master De Snel teaches a style of pure fighting which takes thee beyond all previous disciplines that thou mayest have learned. He is a great man.\"");
	say();
	UI_remove_answer("De Snel");
labelFunc047E_029A:
	case "return flag" attend labelFunc047E_0340:
	message("\"I understand that coward Sprellic has given thee the flag so that it may be returned to us. Thou hadst better hand it over.\"");
	say();
	var0006 = UI_remove_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, 0xFE99);
	if (!var0006) goto labelFunc047E_02DC;
	message("She takes the banner from you.");
	say();
	message("\"This matter is now settled. But tell that worm Sprellic from me that he had better keep his hands off of other people's property in the future.\"");
	say();
	gflags[0x016A] = true;
	gflags[0x0164] = true;
	Func0911(0x0064);
	abort;
	goto labelFunc047E_0339;
labelFunc047E_02DC:
	message("\"It has come to our attention that thou hast been given our honor flag. Apparently Sprellic gave it to thee to return to us. If thou dost wish to keep it then our quarrel is now with thee.\"");
	say();
	if (!(!(var0001 == 0x0004))) goto labelFunc047E_02F2;
	message("\"Meet us at the dueling area at next noon!\"*");
	say();
	goto labelFunc047E_0338;
labelFunc047E_02F2:
	message("\"Prepare to die!\"*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
labelFunc047E_0338:
	abort;
labelFunc047E_0339:
	UI_remove_answer("return flag");
labelFunc047E_0340:
	case "bye" attend labelFunc047E_034B:
	goto labelFunc047E_034E;
labelFunc047E_034B:
	goto labelFunc047E_0175;
labelFunc047E_034E:
	endconv;
	message("\"We do not appreciate people who interfere in our private matters. We shall be watching thee.\"*");
	say();
labelFunc047E_0353:
	if (!(event == 0x0000)) goto labelFunc047E_0361;
	Func092E(0xFF82);
labelFunc047E_0361:
	return;
}


