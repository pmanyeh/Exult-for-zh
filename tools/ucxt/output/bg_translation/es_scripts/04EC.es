#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern void Func091A 0x91A ();
extern void Func092E 0x92E (var var0000);

void Func04EC object#(0x4EC) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc04EC_0117;
	UI_show_npc_face(0xFF14, 0x0000);
	var0000 = UI_part_of_day();
	if (!(var0000 == 0x0007)) goto labelFunc04EC_0041;
	var0001 = Func08FC(0xFF14, 0xFFF0);
	if (!var0001) goto labelFunc04EC_003C;
	message("Ellen puts her finger to her lips. There is a Fellowship meeting going on.*");
	say();
	goto labelFunc04EC_0040;
labelFunc04EC_003C:
	message("\"Hello. I am sorry to be rude, but I am late to the Fellowship meeting. May we speak another time?\"*");
	say();
labelFunc04EC_0040:
	abort;
labelFunc04EC_0041:
	if (!(!gflags[0x0050])) goto labelFunc04EC_0053;
	message("This is a woman who seems pleasant and welcoming. \"I am proud to meet the Avatar,\" she says, beaming.");
	say();
	gflags[0x0050] = true;
	goto labelFunc04EC_0057;
labelFunc04EC_0053:
	message("\"Yes, Avatar?\" Ellen asks.");
	say();
labelFunc04EC_0057:
	UI_add_answer(["name", "job", "murder", "bye"]);
labelFunc04EC_006A:
	converse attend labelFunc04EC_0112;
	case "name" attend labelFunc04EC_0080:
	message("\"My name is Ellen.\"");
	say();
	UI_remove_answer("name");
labelFunc04EC_0080:
	case "job" attend labelFunc04EC_0099:
	message("\"I do the bookkeeping at the Fellowship Branch. I work with mine husband, Klog.\"");
	say();
	UI_add_answer(["Fellowship", "Klog"]);
labelFunc04EC_0099:
	case "murder" attend labelFunc04EC_00AC:
	message("\"'Tis awful, is it not? Of course, I was home with Klog all night.\"");
	say();
	UI_remove_answer("murder");
labelFunc04EC_00AC:
	case "Fellowship" attend labelFunc04EC_00CC:
	message("\"Perhaps thou couldst call it a 'confident philosophy'. We meet here at the branch office every night.\"");
	say();
	UI_add_answer(["philosophy", "branch office"]);
	UI_remove_answer("Fellowship");
labelFunc04EC_00CC:
	case "branch office" attend labelFunc04EC_00DF:
	message("\"The Fellowship has branches all over Britannia. It is a most popular philosophical society.\"");
	say();
	UI_remove_answer("branch office");
labelFunc04EC_00DF:
	case "Klog" attend labelFunc04EC_00F2:
	message("\"Mine husband Klog is a wonderful branch leader. He is an inspiration to all of the Trinsic members.\"");
	say();
	UI_remove_answer("Klog");
labelFunc04EC_00F2:
	case "philosophy" attend labelFunc04EC_0104:
	Func091A();
	UI_remove_answer("philosophy");
labelFunc04EC_0104:
	case "bye" attend labelFunc04EC_010F:
	goto labelFunc04EC_0112;
labelFunc04EC_010F:
	goto labelFunc04EC_006A;
labelFunc04EC_0112:
	endconv;
	message("\"Goodbye. I hope to see thee again, soon.\"*");
	say();
labelFunc04EC_0117:
	if (!(event == 0x0000)) goto labelFunc04EC_0125;
	Func092E(0xFF14);
labelFunc04EC_0125:
	return;
}


