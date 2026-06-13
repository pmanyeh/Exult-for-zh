#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern void Func0911 0x911 (var var0000);
extern void Func092E 0x92E (var var0000);

void Func047F object#(0x47F) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc047F_019A;
	UI_show_npc_face(0xFF81, 0x0000);
	var0000 = Func0909();
	var0001 = UI_part_of_day();
	var0002 = UI_get_npc_object(0xFF81);
	var0003 = UI_get_npc_object(0xFF82);
	var0004 = UI_get_npc_object(0xFF83);
	if (!(!gflags[0x0179])) goto labelFunc047F_004F;
	message("You see a very serious young man. He carries himself like a learned and mannered gentleman.");
	say();
	gflags[0x0179] = true;
	goto labelFunc047F_0053;
labelFunc047F_004F:
	message("\"Dost thou wish to speak with me?\" asks Timmons.");
	say();
labelFunc047F_0053:
	if (!gflags[0x0168]) goto labelFunc047F_0068;
	if (!(!gflags[0x0164])) goto labelFunc047F_0065;
	message("\"I see thou hast the honor flag. As little more than an interested third party in this affair, I ask thee to return the flag to Syria. Please do so.\"*");
	say();
	abort;
labelFunc047F_0065:
	goto labelFunc047F_00D9;
labelFunc047F_0068:
	if (!gflags[0x0170]) goto labelFunc047F_00D9;
	if (!(var0001 == 0x0004)) goto labelFunc047F_00CC;
	message("\"Well, ");
	message(var0000);
	message(", I must prove myself to De Snel. If thou art the one who suffers, I will apologize, but I will not back down!\"");
	say();
	message("\"Prepare to die!\"*");
	say();
	Func0911(0x0064);
	UI_set_alignment(var0002, 0x0003);
	UI_set_alignment(var0003, 0x0003);
	UI_set_alignment(var0004, 0x0003);
	UI_set_schedule_type(var0002, 0x0000);
	UI_set_schedule_type(var0003, 0x0000);
	UI_set_schedule_type(var0004, 0x0000);
	abort;
	goto labelFunc047F_00D9;
labelFunc047F_00CC:
	message("\"Well, ");
	message(var0000);
	message(", I must prove myself to De Snel. If thou art the one who suffers, so be it! Meet us at the dueling area at next noon!\"*");
	say();
	goto labelFunc047F_00D9;
labelFunc047F_00D9:
	UI_add_answer(["name", "job", "bye"]);
labelFunc047F_00E9:
	converse attend labelFunc047F_018F;
	case "name" attend labelFunc047F_0105:
	message("\"Timmons is my name, ");
	message(var0000);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc047F_0105:
	case "job" attend labelFunc047F_011E:
	message("\"At the moment I have no job. I left all that behind in New Magincia. I have come to Jhelom to study under Master De Snel in the Library of Scars.\"");
	say();
	UI_add_answer(["Jhelom", "Library of Scars"]);
labelFunc047F_011E:
	case "Jhelom" attend labelFunc047F_0138:
	message("\"I am afraid I would not be able to help thee. I know little of this town, except for the duels. I am newly arrived here myself. Perhaps thou shouldst ask someone else.\"");
	say();
	UI_add_answer("duels");
	UI_remove_answer("Jhelom");
labelFunc047F_0138:
	case "duels" attend labelFunc047F_0160:
	if (!(!gflags[0x0164])) goto labelFunc047F_0155;
	message("\"I had heard of this man Sprellic who claims he is a greater fighter than any in the Library of Scars and how he had stolen the honor flag from their wall. So I sought this man out and challenged him to a duel myself.\"");
	say();
	UI_add_answer("Library of Scars");
	goto labelFunc047F_0159;
labelFunc047F_0155:
	message("\"Unfortunately, the duels with Sprellic were called off before I had the opportunity to impress Master De Snel.\"");
	say();
labelFunc047F_0159:
	UI_remove_answer("duels");
labelFunc047F_0160:
	case "Library of Scars" attend labelFunc047F_0181:
	if (!(!gflags[0x0164])) goto labelFunc047F_0176;
	message("\"A sailor on a ship at port in New Magincia first told me of the Library of Scars, of how it was the greatest fighting guild in Britannia and how its trainer, Master De Snel, had created the perfect fighting style. I immediately spent every coin I had to come here. But De Snel now refuses to accept me as a student. I know if I can defeat a fighter who claims to be better than anyone in the guild, and help restore its honor in the process, De Snel will have to finally accept me.\"");
	say();
	goto labelFunc047F_017A;
labelFunc047F_0176:
	message("\"Master De Snel, the trainer at the Library of Scars, has refused me entry until I have proven myself in combat. The only way to prove oneself in combat in the town of Jhelom is by duelling. But my mother raised me to be a perfect gentleman. So far I have not succeeded in offending anyone sufficiently to have them challenge me to a duel. Hmmm. Perhaps I am just not suited to be a member of the Library of Scars.\"");
	say();
labelFunc047F_017A:
	UI_remove_answer("Library of Scars");
labelFunc047F_0181:
	case "bye" attend labelFunc047F_018C:
	goto labelFunc047F_018F;
labelFunc047F_018C:
	goto labelFunc047F_00E9;
labelFunc047F_018F:
	endconv;
	message("\"It was a pleasure speaking to thee, ");
	message(var0000);
	message(".\"*");
	say();
labelFunc047F_019A:
	if (!(event == 0x0000)) goto labelFunc047F_01A8;
	Func092E(0xFF81);
labelFunc047F_01A8:
	return;
}


