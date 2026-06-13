#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0860 0x860 (var var0000, var var0001, var var0002);
extern void Func092E 0x92E (var var0000);

void Func0411 object#(0x411) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc0411_00F4;
	UI_show_npc_face(0xFFEF, 0x0000);
	var0000 = Func0909();
	var0001 = UI_wearing_fellowship();
	UI_add_answer(["name", "job", "murder", "services", "bye"]);
	if (!gflags[0x003F]) goto labelFunc0411_0048;
	UI_add_answer(["Fellowship", "Klog"]);
labelFunc0411_0048:
	if (!(!gflags[0x0052])) goto labelFunc0411_005A;
	message("You see a solemn fellow in healer's robes.");
	say();
	gflags[0x0052] = true;
	goto labelFunc0411_005E;
labelFunc0411_005A:
	message("\"Hello, again,\" Chantu says. \"How may I help thee?\"");
	say();
labelFunc0411_005E:
	converse attend labelFunc0411_00EF;
	case "name" attend labelFunc0411_0074:
	message("\"My name is Chantu,\" he says with a slight bow.");
	say();
	UI_remove_answer("name");
labelFunc0411_0074:
	case "job" attend labelFunc0411_0080:
	message("\"I am the Trinsic healer. I can perform a heal, a poison cure, or a resurrection on any of thy friends. Or on thee, of course.\"");
	say();
labelFunc0411_0080:
	case "murder" attend labelFunc0411_0093:
	message("\"'Tis a sad state for Britannia when events such as these happen. Christopher was a good man. I hope that the villain is caught.\"");
	say();
	UI_remove_answer("murder");
labelFunc0411_0093:
	case "services" attend labelFunc0411_00A7:
	Func0860(0x001E, 0x0032, 0x0190);
labelFunc0411_00A7:
	case "Fellowship" attend labelFunc0411_00CE:
	message("The healer frowns. \"The Fellowship does not appreciate the efforts of healers in Britannia. Although they do admirable things, The Fellowship is short-sighted when evaluating the need for healers. They believe that our work can be done through their so-called 'Triad of Inner Strength'.\"");
	say();
	if (!var0001) goto labelFunc0411_00C7;
	message("Chantu notices your medallion and his eyes widen.");
	say();
	message("\"Excuse me, ");
	message(var0000);
	message(", I did not mean to offend thee.\"");
	say();
labelFunc0411_00C7:
	UI_remove_answer("Fellowship");
labelFunc0411_00CE:
	case "Klog" attend labelFunc0411_00E1:
	message("The healer shrugs. \"He does his duty as he sees fit. And I do mine.\"");
	say();
	UI_remove_answer("Klog");
labelFunc0411_00E1:
	case "bye" attend labelFunc0411_00EC:
	goto labelFunc0411_00EF;
labelFunc0411_00EC:
	goto labelFunc0411_005E;
labelFunc0411_00EF:
	endconv;
	message("\"Goodbye.\"*");
	say();
labelFunc0411_00F4:
	if (!(event == 0x0000)) goto labelFunc0411_0174;
	var0002 = UI_get_schedule_type(UI_get_npc_object(0xFFEF));
	var0003 = UI_die_roll(0x0001, 0x0004);
	if (!(var0002 == 0x001D)) goto labelFunc0411_016E;
	if (!(var0003 == 0x0001)) goto labelFunc0411_0131;
	var0004 = "@Feeling better?@";
labelFunc0411_0131:
	if (!(var0003 == 0x0002)) goto labelFunc0411_0141;
	var0004 = "@How are we today?@";
labelFunc0411_0141:
	if (!(var0003 == 0x0003)) goto labelFunc0411_0151;
	var0004 = "@Thy fever has lessened.@";
labelFunc0411_0151:
	if (!(var0003 == 0x0004)) goto labelFunc0411_0161;
	var0004 = "@Try to sleep...@";
labelFunc0411_0161:
	UI_item_say(0xFFEF, var0004);
	goto labelFunc0411_0174;
labelFunc0411_016E:
	Func092E(0xFFEF);
labelFunc0411_0174:
	return;
}


