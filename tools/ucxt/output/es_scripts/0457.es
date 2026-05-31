#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func0952 0x952 ();
extern void Func0953 0x953 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func0457 object#(0x457) ()
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

	if (!(event == 0x0001)) goto labelFunc0457_02D7;
	UI_show_npc_face(0xFFA9, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA9));
	UI_add_answer(["name", "job", "bye"]);
	var0003 = Func0931(0xFE9B, 0x0001, 0x02D8, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc0457_005F;
	UI_add_answer("Caddellite");
labelFunc0457_005F:
	if (!(!gflags[0x0112])) goto labelFunc0457_0071;
	message("You see a man whose long hours of difficult, smouldering work have frozen his face into a rigid expression with eyes like hot coals.");
	say();
	gflags[0x0112] = true;
	goto labelFunc0457_0075;
labelFunc0457_0071:
	message("\"How may I serve thee?\" says Zorn.");
	say();
labelFunc0457_0075:
	converse attend labelFunc0457_02CC;
	case "name" attend labelFunc0457_008B:
	message("\"I am Zorn.\"");
	say();
	UI_remove_answer("name");
labelFunc0457_008B:
	case "job" attend labelFunc0457_00BC:
	if (!gflags[0x011F]) goto labelFunc0457_00AD;
	message("\"I am the blacksmith of Minoc.\"");
	say();
	UI_add_answer(["blacksmith", "Minoc"]);
	goto labelFunc0457_00BC;
labelFunc0457_00AD:
	message("\"Dost thou have no respect for the dead? Indeed, trying to solicit at a terrible time like this! When people have been found murdered over at William's sawmill!\"");
	say();
	gflags[0x011F] = true;
	UI_add_answer("murders");
labelFunc0457_00BC:
	case "blacksmith" attend labelFunc0457_00D6:
	message("\"I make weapons and armour.\"");
	say();
	UI_remove_answer("blacksmith");
	UI_add_answer("weapons and armour");
labelFunc0457_00D6:
	case "Minoc" attend labelFunc0457_00F6:
	message("\"Minoc is quite a city. Money changes hands here. But it does not keep people happy. They find something to squabble over. And now these terrible murders have everyone afraid.\"");
	say();
	UI_remove_answer("Minoc");
	UI_add_answer(["squabble", "murders"]);
labelFunc0457_00F6:
	case "weapons and armour" attend labelFunc0457_0127:
	if (!(var0002 == 0x000D)) goto labelFunc0457_011C;
	message("\"All of the weapons and armour I sell are made by mine own hand. They would serve thee well.\"");
	say();
	UI_add_answer(["buy weapons", "buy armour"]);
	goto labelFunc0457_0120;
labelFunc0457_011C:
	message("\"Perhaps we could speak more of these things another time. Say, perhaps during the business hours of my shop?\"");
	say();
labelFunc0457_0120:
	UI_remove_answer("weapons and armour");
labelFunc0457_0127:
	case "buy weapons" attend labelFunc0457_0148:
	if (!(!(var0002 == 0x000D))) goto labelFunc0457_0141;
	message("\"The smithy is currently closed for outside business. Thou shalt have to return some other time.\"");
	say();
	goto labelFunc0457_0148;
labelFunc0457_0141:
	message("\"I have an assortment of very lethal weapons to show thee.\"");
	say();
	Func0952();
labelFunc0457_0148:
	case "buy armour" attend labelFunc0457_0169:
	if (!(!(var0002 == 0x000D))) goto labelFunc0457_0162;
	message("\"The smithy is currently closed for outside business. Thou shalt have to return some other time.\"");
	say();
	goto labelFunc0457_0169;
labelFunc0457_0162:
	message("\"Thou mayest buy fine armour from me.\"");
	say();
	Func0953();
labelFunc0457_0169:
	case "squabble" attend labelFunc0457_0189:
	message("\"This noise over Owen's monument, for instance. People ought to tend to their own business and let others handle their own, foolish or not.\"");
	say();
	UI_add_answer(["Owen", "monument"]);
	UI_remove_answer("squabble");
labelFunc0457_0189:
	case "Owen" attend labelFunc0457_019C:
	message("\"He is our town shipwright. He is a man who has an exceedingly high opinion of himself.\"");
	say();
	UI_remove_answer("Owen");
labelFunc0457_019C:
	case "monument" attend labelFunc0457_01AF:
	message("\"Owen is building a monument to himself. It is forty feet tall, depicting him holding up a roll of plans. Pigeons will have a place to sit, forevermore. Why argue over something as unimportant as that?\"");
	say();
	UI_remove_answer("monument");
labelFunc0457_01AF:
	case "murders" attend labelFunc0457_01C2:
	message("\"No one in this town ever really hated the gypsies, at least not that I have ever been aware of. Who could have done such a thing?\"");
	say();
	UI_remove_answer("murders");
labelFunc0457_01C2:
	case "Caddellite" attend labelFunc0457_01DC:
	message("You present the Caddellite to Zorn. \"This is amazing! Why I thought that the only place to find Caddellite was the lost island of Ambrosia. What should I make with this?\"");
	say();
	UI_remove_answer("Caddellite");
	UI_add_answer("helmet");
labelFunc0457_01DC:
	case "helmet" attend labelFunc0457_02BE:
	message("You describe the sort of helmet that you require, one that can block out the dangerous sound from the cube generator. Zorn nods. \"Yes, I can make some for thee. I shall start work immediately.\"");
	say();
	var0004 = UI_get_array_size(UI_get_party_list());
	var0005 = UI_count_objects(0xFE9B, 0x02D8, 0xFE99, 0xFE99);
	if (!(var0005 == 0x0000)) goto labelFunc0457_0214;
	message("\"But thou dost not have any Caddellite chunks with which to make helmets!\"");
	say();
labelFunc0457_0214:
	if (!(var0004 > var0005)) goto labelFunc0457_022B;
	message("\"Thou hast ");
	message(var0004);
	message(" in thy party. I am afraid thou does not have enough Caddellite for me to make that many helmets.\"");
	say();
	goto labelFunc0457_02B7;
labelFunc0457_022B:
	var0006 = UI_remove_party_items(var0005, 0x02D8, 0xFE99, 0xFE99, false);
	if (!(var0005 == 0x0001)) goto labelFunc0457_0250;
	message("Zorn takes the Caddellite from you and begins his work.");
	say();
	goto labelFunc0457_025A;
labelFunc0457_0250:
	message("\"Thou hast ");
	message(var0005);
	message(" Caddellite chunks. That is how many helmets I can make for thee.\"");
	say();
labelFunc0457_025A:
	message("Zorn takes the Caddellite from you and begins his work. You watch in fascination as the master blacksmith softens the ore in the fire, then molds it into\tshape. Zorn quickly takes the necessary measurements, then makes some adjustments with the hot material. Finally, it is done.");
	say();
	if (!(var0005 == 0x0001)) goto labelFunc0457_026F;
	message("Zorn dips the helmet in water to cool it.");
	say();
	goto labelFunc0457_0273;
labelFunc0457_026F:
	message("Zorn dips the helmets in water to cool them.");
	say();
labelFunc0457_0273:
	var0007 = UI_add_party_items(var0005, 0x027E, 0xFE99, 0xFE99, false);
	if (!var0007) goto labelFunc0457_02B3;
	gflags[0x0106] = true;
	Func0911(0x00C8);
	message("\"Here, I have met thy request to thy precise specifications.\"");
	say();
	if (!(var0005 == 0x0001)) goto labelFunc0457_02AC;
	message("He hands you the helmet.");
	say();
	goto labelFunc0457_02B0;
labelFunc0457_02AC:
	message("He hands you the helmets.");
	say();
labelFunc0457_02B0:
	goto labelFunc0457_02B7;
labelFunc0457_02B3:
	message("\"Thou art too encumbered!\"");
	say();
labelFunc0457_02B7:
	UI_remove_answer("helmet");
labelFunc0457_02BE:
	case "bye" attend labelFunc0457_02C9:
	goto labelFunc0457_02CC;
labelFunc0457_02C9:
	goto labelFunc0457_0075;
labelFunc0457_02CC:
	endconv;
	message("\"Goodbye, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc0457_02D7:
	if (!(event == 0x0000)) goto labelFunc0457_0357;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFA9));
	if (!(var0002 == 0x000D)) goto labelFunc0457_0351;
	var0008 = UI_die_roll(0x0001, 0x0004);
	if (!(var0008 == 0x0001)) goto labelFunc0457_0314;
	var0009 = "@Weapons?@";
labelFunc0457_0314:
	if (!(var0008 == 0x0002)) goto labelFunc0457_0324;
	var0009 = "@Armour?@";
labelFunc0457_0324:
	if (!(var0008 == 0x0003)) goto labelFunc0457_0334;
	var0009 = "@Helms? Shields?@";
labelFunc0457_0334:
	if (!(var0008 == 0x0004)) goto labelFunc0457_0344;
	var0009 = "@Need armour or weapons?@";
labelFunc0457_0344:
	UI_item_say(0xFFA9, var0009);
	goto labelFunc0457_0357;
labelFunc0457_0351:
	Func092E(0xFFA9);
labelFunc0457_0357:
	return;
}


