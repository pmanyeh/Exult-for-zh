#game "blackgate"
// externs
extern var Func08FC 0x8FC (var var0000, var var0001);
extern var Func090A 0x90A ();
extern void Func08E2 0x8E2 ();
extern void Func08E1 0x8E1 ();
extern void Func092F 0x92F (var var0000);

void Func04BC object#(0x4BC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04BC_0205;
	UI_show_npc_face(0xFF44, 0x0000);
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF44));
	if (!(var0000 == 0x0007)) goto labelFunc04BC_004F;
	var0002 = Func08FC(0xFF44, 0xFF47);
	if (!var0002) goto labelFunc04BC_004A;
	message("The gargoyle is too involved with the Fellowship meeting to talk to you at this moment.*");
	say();
	goto labelFunc04BC_004E;
labelFunc04BC_004A:
	message("\"To be unable to talk now. To see me after the Fellowship meeting.\" He continues on his way.*");
	say();
labelFunc04BC_004E:
	abort;
labelFunc04BC_004F:
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!(!gflags[0x024D])) goto labelFunc04BC_0074;
	message("You see a very distraught gargoyle.");
	say();
	gflags[0x024D] = true;
	goto labelFunc04BC_0078;
labelFunc04BC_0074:
	message("\"To give you greetings, human.\"");
	say();
labelFunc04BC_0078:
	if (!gflags[0x0250]) goto labelFunc04BC_00A8;
	var0003 = true;
	if (!(gflags[0x0241] && (!gflags[0x0240]))) goto labelFunc04BC_0094;
	UI_add_answer("altar conflicts");
labelFunc04BC_0094:
	if (!gflags[0x023F]) goto labelFunc04BC_00A8;
	UI_add_answer("found note");
	UI_remove_answer("altar conflicts");
labelFunc04BC_00A8:
	converse attend labelFunc04BC_0200;
	case "name" attend labelFunc04BC_00EF:
	message("\"To be able to call me Sarpling.\"");
	say();
	gflags[0x0250] = true;
	UI_remove_answer("name");
	if (!(!var0003)) goto labelFunc04BC_00EF;
	if (!(gflags[0x0241] && (!gflags[0x0240]))) goto labelFunc04BC_00DB;
	UI_add_answer("altar conflicts");
labelFunc04BC_00DB:
	if (!gflags[0x023F]) goto labelFunc04BC_00EF;
	UI_add_answer("found note");
	UI_remove_answer("altar conflicts");
labelFunc04BC_00EF:
	case "job" attend labelFunc04BC_0108:
	message("\"To provide various magics and items in Terfin.\"");
	say();
	UI_add_answer(["buy", "Terfin"]);
labelFunc04BC_0108:
	case "Terfin" attend labelFunc04BC_0122:
	message("\"To be the city in which you are located. To be the city of gargoyles.\"");
	say();
	UI_add_answer("gargoyles");
	UI_remove_answer("Terfin");
labelFunc04BC_0122:
	case "gargoyles" attend labelFunc04BC_014C:
	message("\"To know Quan is the Fellowship leader. To believe he gives good guidance.\" He appears thoughtful.~~ \"To have spoken to Draxinusom?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04BC_0141;
	message("\"To see Forbrak or Quaeven, then. To know they see all the citizens regularly.\"");
	say();
	goto labelFunc04BC_0145;
labelFunc04BC_0141:
	message("\"To see first, Draxinusom. To be leader of the city. To know many of the residents.\"");
	say();
labelFunc04BC_0145:
	UI_remove_answer("gargoyles");
labelFunc04BC_014C:
	case "Fellowship" attend labelFunc04BC_015F:
	message("\"To be an important part of my life. To support The Fellowship fully.\"");
	say();
	UI_remove_answer("Fellowship");
labelFunc04BC_015F:
	case "altar conflicts" attend labelFunc04BC_0172:
	message("\"To know nothing about the altars. To wonder what you mean?\"");
	say();
	UI_remove_answer("altar conflicts");
labelFunc04BC_0172:
	case "found note" attend labelFunc04BC_018C:
	message("A surprised expression, mixed with fear, covers his face.~~ \"To be all Runeb's decisions! To be all Runeb's doing! To want nothing to do with the destruction of the altars, or with the assassination plot!\"");
	say();
	UI_remove_answer("found note");
	UI_add_answer("Assassination plot!");
labelFunc04BC_018C:
	case "Assassination plot!" attend labelFunc04BC_019D:
	message("\"To not already know about the plot?\" he wails.~~ \"To have caused problems this time, Sarpling,\" he says to himself. \"To have brought much trouble!~~ \"To tell you Runeb wanted to frame Quan for the altars. To kill Quan if plan failed, and to be in control of The Fellowship in Terfin. To be Runeb's goal.~~ \"To be in much danger you and me!\"*");
	say();
	gflags[0x0240] = true;
	abort;
labelFunc04BC_019D:
	case "buy" attend labelFunc04BC_01CE:
	UI_remove_answer("buy");
	if (!(var0001 == 0x0007)) goto labelFunc04BC_01CA;
	message("\"To want reagents or jewelry and potions?\"");
	say();
	UI_add_answer(["reagents", "jewelry and potions"]);
	goto labelFunc04BC_01CE;
labelFunc04BC_01CA:
	message("\"To sell you things when my shop is open.\"");
	say();
labelFunc04BC_01CE:
	case "reagents" attend labelFunc04BC_01E0:
	Func08E2();
	UI_remove_answer("reagents");
labelFunc04BC_01E0:
	case "jewelry and potions" attend labelFunc04BC_01F2:
	Func08E1();
	UI_remove_answer("jewelry and potions");
labelFunc04BC_01F2:
	case "bye" attend labelFunc04BC_01FD:
	goto labelFunc04BC_0200;
labelFunc04BC_01FD:
	goto labelFunc04BC_00A8;
labelFunc04BC_0200:
	endconv;
	message("\"To give you farewell, human.\"*");
	say();
labelFunc04BC_0205:
	if (!(event == 0x0000)) goto labelFunc04BC_0213;
	Func092F(0xFF44);
labelFunc04BC_0213:
	return;
}


