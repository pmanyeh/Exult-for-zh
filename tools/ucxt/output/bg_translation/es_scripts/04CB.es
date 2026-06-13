#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func090B 0x90B (var var0000);

void Func04CB object#(0x4CB) ()
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

	if (!(event == 0x0001)) goto labelFunc04CB_0245;
	UI_show_npc_face(0xFF35, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "the Avatar";
	var0003 = UI_part_of_day();
	var0004 = UI_get_npc_object(0xFF35);
	var0005 = UI_get_npc_object(0xFF34);
	var0006 = UI_get_schedule_type(var0004);
	var0007 = UI_get_alignment(var0004);
	UI_add_answer(["name", "job", "bye", "Fellowship"]);
	if (!(var0007 == 0x0002)) goto labelFunc04CB_0084;
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_schedule_type(var0005, 0x0000);
labelFunc04CB_0084:
	if (!gflags[0x0284]) goto labelFunc04CB_0091;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04CB_0091:
	if (!(!gflags[0x0288])) goto labelFunc04CB_00A3;
	message("You see a broad-shouldered man with a solemn look about him.");
	say();
	gflags[0x0288] = true;
	goto labelFunc04CB_00AD;
labelFunc04CB_00A3:
	message("\"Yes, ");
	message(var0000);
	message("?\" says Cador.");
	say();
labelFunc04CB_00AD:
	converse attend labelFunc04CB_023A;
	case "name" attend labelFunc04CB_0127:
	message("The man shakes your hand. \"I am Cador.\"");
	say();
	if (!(var0006 == 0x001A)) goto labelFunc04CB_0120;
	message("\"And thy name is?\"");
	say();
	var0008 = Func090B([var0001, var0002, var0000]);
	if (!(var0008 == var0002)) goto labelFunc04CB_0116;
	message("\"What? Dost thou mean to tell me that thou art the one who brought those gargoyles to our precious land?\" He turns quite angry.~~\"Daemon lover!\"*");
	say();
	UI_set_schedule_type(var0004, 0x0000);
	UI_set_alignment(var0004, 0x0002);
	UI_set_schedule_type(var0005, 0x0000);
	UI_set_alignment(var0005, 0x0002);
	abort;
	goto labelFunc04CB_0120;
labelFunc04CB_0116:
	message("\"I am happy to make thine acquaintance, ");
	message(var0000);
	message(".\"");
	say();
labelFunc04CB_0120:
	UI_remove_answer("name");
labelFunc04CB_0127:
	case "job" attend labelFunc04CB_0143:
	message("\"I oversee the local branch of the Britannian Mining Company in Vesper. We mine many different minerals.\"");
	say();
	UI_add_answer(["Vesper", "We", "minerals"]);
labelFunc04CB_0143:
	case "minerals" attend labelFunc04CB_0156:
	message("\"Gold and lead.\"");
	say();
	UI_remove_answer("minerals");
labelFunc04CB_0156:
	case "Vesper" attend labelFunc04CB_0176:
	message("\"That is the name of our town. Liana at town hall can give thee any more information that thou mightest need, but I have lived here with my family since the branch opened.\"");
	say();
	UI_add_answer(["Liana", "family"]);
	UI_remove_answer("Vesper");
labelFunc04CB_0176:
	case "Fellowship" attend labelFunc04CB_019A:
	message("\"It is a wonderful organization. They perform many works of charity and special events -- parades and such.\"  He points to his medallion. \"As thou canst see, I am a member. I fully believe in the triad of inner strength.\"");
	say();
	if (!gflags[0x0284]) goto labelFunc04CB_018C;
	message("\"As a matter of fact, two Fellowship officials were just here. They said it was important to see how a town's economy worked before starting a branch in that town. Dost thou realize what that means?\" He smiles proudly. \"They are going to build a Fellowship branch here in Vesper.\"");
	say();
labelFunc04CB_018C:
	UI_add_answer("triad");
	UI_remove_answer("Fellowship");
labelFunc04CB_019A:
	case "triad" attend labelFunc04CB_01AD:
	message("\"Those are The Fellowship's three basic principles: Strive for Unity, Trust thy Brother, and Worthiness Precedes Reward.\"");
	say();
	UI_remove_answer("triad");
labelFunc04CB_01AD:
	case "Elizabeth and Abraham" attend labelFunc04CB_01C0:
	message("\"They were the two Fellowship officials that were here! They only stayed for a minute or two. I have no idea where they are now.\"");
	say();
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04CB_01C0:
	case "We" attend labelFunc04CB_01E0:
	message("\"I work with Mara and a gargoyle named Lap-Lem.\"");
	say();
	UI_add_answer(["Mara", "Lap-Lem"]);
	UI_remove_answer("We");
labelFunc04CB_01E0:
	case "Mara" attend labelFunc04CB_01F3:
	message("\"She is a fantastic worker. Better than most men I have mined with.\"");
	say();
	UI_remove_answer("Mara");
labelFunc04CB_01F3:
	case "Lap-Lem" attend labelFunc04CB_0206:
	message("\"Well, for a gargoyle, he is not too lazy. He works much harder than that other one who left, Anmanivas. But I would fain let him go if we did not need the extra hand.\"");
	say();
	UI_remove_answer("Lap-Lem");
labelFunc04CB_0206:
	case "Liana" attend labelFunc04CB_0219:
	message("\"She keeps the records at town hall.\"");
	say();
	UI_remove_answer("Liana");
labelFunc04CB_0219:
	case "family" attend labelFunc04CB_022C:
	message("\"Yes, my wife, Yvella, and my daughter, Catherine.\"");
	say();
	UI_remove_answer("family");
labelFunc04CB_022C:
	case "bye" attend labelFunc04CB_0237:
	goto labelFunc04CB_023A;
labelFunc04CB_0237:
	goto labelFunc04CB_00AD;
labelFunc04CB_023A:
	endconv;
	message("\"It has been a pleasure, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc04CB_0245:
	if (!(event == 0x0000)) goto labelFunc04CB_024E;
	abort;
labelFunc04CB_024E:
	return;
}


