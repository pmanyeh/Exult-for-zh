#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func08AA 0x8AA ();
extern void Func08A9 0x8A9 ();
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func0479 object#(0x479) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc0479_02E8;
	UI_show_npc_face(0xFF87, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF87));
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0186]) goto labelFunc0479_004A;
	UI_add_answer("Sprellic");
labelFunc0479_004A:
	if (!gflags[0x0167]) goto labelFunc0479_005E;
	if (!(!gflags[0x0168])) goto labelFunc0479_005E;
	UI_add_answer("false flag");
labelFunc0479_005E:
	if (!(!gflags[0x0173])) goto labelFunc0479_0070;
	message("You see a battle-scarred old soldier.");
	say();
	gflags[0x0173] = true;
	goto labelFunc0479_0074;
labelFunc0479_0070:
	message("\"Greetings!\" says Kliftin. \"Hast thou gotten into any scrapes lately?\"");
	say();
labelFunc0479_0074:
	converse attend labelFunc0479_02E3;
	case "name" attend labelFunc0479_008A:
	message("\"I am Kliftin.\"");
	say();
	UI_remove_answer("name");
labelFunc0479_008A:
	case "job" attend labelFunc0479_00A9:
	message("\"In my day I was a pretty damned good soldier. Now I am the master of the Armoury here in Jhelom.\"");
	say();
	UI_add_answer(["soldier", "Armoury", "Jhelom", "buy"]);
labelFunc0479_00A9:
	case "buy" attend labelFunc0479_00EC:
	if (!((var0002 == 0x0007) || (var0002 == 0x0013))) goto labelFunc0479_00DB;
	message("\"I sell armour and weapons here. I have something to meet thine every need. Dost thou wish to see armour or weapons?\"");
	say();
	UI_push_answers();
	UI_add_answer(["armour", "weapons"]);
	goto labelFunc0479_00E5;
labelFunc0479_00DB:
	message("\"My shop is presently closed for business, but do return again, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0479_00E5:
	UI_remove_answer("buy");
labelFunc0479_00EC:
	case "armour" attend labelFunc0479_00F7:
	Func08AA();
labelFunc0479_00F7:
	case "weapons" attend labelFunc0479_0102:
	Func08A9();
labelFunc0479_0102:
	case "soldier" attend labelFunc0479_0115:
	message("\"Surely thou dost not want to listen to old war stories?! I have seen my share of death and destruction. Leave it at that.\"");
	say();
	UI_remove_answer("soldier");
labelFunc0479_0115:
	case "Armoury" attend labelFunc0479_0135:
	message("\"I sell and collect weapons of all types. Business is always excellent, although my best customers keep getting killed in duels!\"");
	say();
	UI_remove_answer("Armoury");
	UI_add_answer(["duels", "buy"]);
labelFunc0479_0135:
	case "Jhelom" attend labelFunc0479_0148:
	message("\"Jhelom is a rough place. If thou dost not like trouble then I can think of many better places for thee to be than here.\"");
	say();
	UI_remove_answer("Jhelom");
labelFunc0479_0148:
	case "duels" attend labelFunc0479_0162:
	message("\"Every day at noon in the Town Square people come to settle their differences. They fight to the blood or to the death. It is a madness! Like that Sprellic fellow for instance.\"");
	say();
	UI_remove_answer("duels");
	UI_add_answer("Sprellic");
labelFunc0479_0162:
	case "Sprellic" attend labelFunc0479_019F:
	if (!(!gflags[0x0186])) goto labelFunc0479_017F;
	message("\"Sprellic, our rather mild-mannered innkeeper, stole the honor flag from the wall of the Library of Scars and refused to return it. Now he must fight three of our best local fighters in a duel to the death.\"");
	say();
	UI_add_answer("fighters");
	goto labelFunc0479_0198;
labelFunc0479_017F:
	if (!(!gflags[0x0167])) goto labelFunc0479_0194;
	message("You relate Sprellic's story to the old man who listens intently. \"It sounds to me like the work of Sullivan, the Trickster. He is a legendary thief and swindler who has never once been caught! Indeed, few even believe he actually exists. Thou shalt not be able to dissuade the duellists with a tale like that.\"");
	say();
	UI_add_answer("dissuade");
	goto labelFunc0479_0198;
labelFunc0479_0194:
	message("\"It is good of thee to help that poor Sprellic fellow in his hour of need.\"");
	say();
labelFunc0479_0198:
	UI_remove_answer("Sprellic");
labelFunc0479_019F:
	case "fighters" attend labelFunc0479_01B2:
	message("\"Thou canst ask about the entire matter at the pub if thou dost wish to know more about it.\"");
	say();
	UI_remove_answer("fighters");
labelFunc0479_01B2:
	case "dissuade" attend labelFunc0479_01CC:
	message("\"The only thing that can dissuade them from wanting to kill poor Sprellic is to return the honor flag! It must have been taken away by Sullivan, but the duellists do not know that! If we had a duplicate of the honor flag we could give them that instead!\"");
	say();
	UI_remove_answer("dissuade");
	UI_add_answer("duplicate");
labelFunc0479_01CC:
	case "duplicate" attend labelFunc0479_01EC:
	message("\"In my day I was fairly handy at stitching wounds... Hmmm, perhaps I can make a duplicate of the honor flag. The deception only has to work long enough for them to formally call off the duel.\"");
	say();
	UI_remove_answer("duplicate");
	UI_add_answer(["deception", "sewing"]);
labelFunc0479_01EC:
	case "sewing" attend labelFunc0479_01FF:
	message("\"I stitched so many of my comrades back together after all the battles I fought in. Now that I am retired, sewing has sort of become mine hobby.\" He looks at you with a little embarrassment. \"There is nothing wrong with that!\"");
	say();
	UI_remove_answer("sewing");
labelFunc0479_01FF:
	case "deception" attend labelFunc0479_0219:
	message("\"Even if they notice that it is not their true honor flag they would never admit it. To do so would make them look foolish. They would rather simply challenge anyone who might say it is not their honor flag to yet another\tduel! But let us deal with one duel at a time here.\"");
	say();
	UI_remove_answer("deception");
	UI_add_answer("honor flag");
labelFunc0479_0219:
	case "honor flag" attend labelFunc0479_027D:
	message("\"Dost thou want me to make an honor flag that can be given to the Library of Scars so the duels can be stopped?\"");
	say();
	var0003 = Func090A();
	if (!var0003) goto labelFunc0479_0265;
	if (!gflags[0x0170]) goto labelFunc0479_024E;
	message("\"Then thou must be sure to come pick it up from me before thou dost go to the Duelling Area. It is the area outside my shop next to the Library of Scars. I had best get busy if I am to have it finished in time! Please return to my shop in a few hours.\"*");
	say();
	gflags[0x0167] = true;
	gflags[0x017B] = true;
	UI_set_timer(0x0000);
	abort;
	goto labelFunc0479_0262;
labelFunc0479_024E:
	message("\"Then thou must be sure to come pick it up from me before Sprellic goes to the Duelling Area. I had best get busy if I am to have it finished in time. Please return to my shop in a few hours.\"*");
	say();
	gflags[0x017B] = true;
	gflags[0x0167] = true;
	UI_set_timer(0x0000);
	abort;
labelFunc0479_0262:
	goto labelFunc0479_0276;
labelFunc0479_0265:
	if (!gflags[0x0170]) goto labelFunc0479_0272;
	message("\"Thou dost wish to deal with the Library of Scars personally? Very well then, but be warned -- the only type of honor they believe in is victory.\"");
	say();
	goto labelFunc0479_0276;
labelFunc0479_0272:
	message("\"How canst thou have the key to saving Sprellic's life in thine hand and do nothing as he faces certain death?!\"");
	say();
labelFunc0479_0276:
	UI_remove_answer("honor flag");
labelFunc0479_027D:
	case "false flag" attend labelFunc0479_02D5:
	var0004 = UI_get_timer(0x0000);
	if (!(!(var0004 > 0x0002))) goto labelFunc0479_02A1;
	message("\"Disturb me not! The flag is not finished! Come to my shop later.\"");
	say();
	goto labelFunc0479_02CE;
labelFunc0479_02A1:
	message("\"Here is the imitation I have made of the Library of Scars' honor flag.\"");
	say();
	var0005 = UI_add_party_items(0x0001, 0x011E, 0xFE99, 0xFE99, false);
	if (!var0005) goto labelFunc0479_02CA;
	message("\"The time for the duels must be drawing near. Good luck to Sprellic, and to thee as well!\"");
	say();
	gflags[0x0168] = true;
	goto labelFunc0479_02CE;
labelFunc0479_02CA:
	message("\"Thou must put something down if thou art to carry the flag!\"");
	say();
labelFunc0479_02CE:
	UI_remove_answer("false flag");
labelFunc0479_02D5:
	case "bye" attend labelFunc0479_02E0:
	goto labelFunc0479_02E3;
labelFunc0479_02E0:
	goto labelFunc0479_0074;
labelFunc0479_02E3:
	endconv;
	message("\"Good day.\"*");
	say();
labelFunc0479_02E8:
	if (!(event == 0x0000)) goto labelFunc0479_0377;
	var0001 = UI_part_of_day();
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFF87));
	var0006 = UI_die_roll(0x0001, 0x0004);
	if (!((var0002 == 0x0007) || (var0002 == 0x0013))) goto labelFunc0479_0371;
	if (!(var0006 == 0x0001)) goto labelFunc0479_0334;
	var0007 = "@Fine arms and armour for sale!@";
labelFunc0479_0334:
	if (!(var0006 == 0x0002)) goto labelFunc0479_0344;
	var0007 = "@Just look at this fine armoury!@";
labelFunc0479_0344:
	if (!(var0006 == 0x0003)) goto labelFunc0479_0354;
	var0007 = "@I have the fiercest weapons!@";
labelFunc0479_0354:
	if (!(var0006 == 0x0004)) goto labelFunc0479_0364;
	var0007 = "@I have the strongest armour!@";
labelFunc0479_0364:
	UI_item_say(0xFF87, var0007);
	goto labelFunc0479_0377;
labelFunc0479_0371:
	Func092E(0xFF87);
labelFunc0479_0377:
	return;
}


