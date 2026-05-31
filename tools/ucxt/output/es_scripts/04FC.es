#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func0909 0x909 ();
extern var Func090A 0x90A ();
extern void Func08A5 0x8A5 ();

void Func04FC object#(0x4FC) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	if (!(event == 0x0001)) goto labelFunc04FC_01BC;
	UI_show_npc_face(0xFF04, 0x0000);
	var0000 = Func08F7(0xFF03);
	var0001 = Func08F7(0xFF0C);
	var0002 = false;
	var0003 = Func0909();
	UI_add_answer(["name", "job", "bye"]);
	if (!(!gflags[0x02C9])) goto labelFunc04FC_0050;
	message("You see a rather reserved-looking gargoyle.");
	say();
	gflags[0x02C9] = true;
	goto labelFunc04FC_0054;
labelFunc04FC_0050:
	message("Kallibrus smiles and greets you with a nod.");
	say();
labelFunc04FC_0054:
	converse attend labelFunc04FC_01B1;
	case "name" attend labelFunc04FC_0071:
	message("\"To be known as Kallibrus.\"");
	say();
	UI_remove_answer("name");
	UI_add_answer("Kallibrus");
labelFunc04FC_0071:
	case "Kallibrus" attend labelFunc04FC_0092:
	message("\"To be not my true name. To have been given this name by Cairbre, who could not pronounce my Gargish name.\"");
	say();
	UI_remove_answer("Kallibrus");
	if (!(!var0002)) goto labelFunc04FC_0092;
	UI_add_answer("Cairbre");
labelFunc04FC_0092:
	case "job" attend labelFunc04FC_00B6:
	message("\"To work as a warrior for hire most of the time. To be between jobs now. To help friend Cosmo find unicorn.\"");
	say();
	gflags[0x02E0] = true;
	UI_remove_answer("job");
	UI_add_answer(["Cosmo", "unicorn"]);
labelFunc04FC_00B6:
	case "Cairbre" attend labelFunc04FC_00F6:
	message("\"To have been partners for many, many years. To have been bonded for even longer!\"");
	say();
	if (!var0001) goto labelFunc04FC_00EB;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("\"He, uh, means by bonded, that we are very good friends.\" He turns to the gargoyle.~~\"I told thee to be careful how thou dost phrase things. Thou couldst start many false rumors if thou wert not more specific.\"~~The gargoyle nods sheepishly.*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF04, 0x0000);
labelFunc04FC_00EB:
	var0002 = true;
	UI_remove_answer("Cairbre");
labelFunc04FC_00F6:
	case "Cosmo" attend labelFunc04FC_0117:
	message("\"To have known him for many years, but not as long as Cairbre. To be good friend.\"");
	say();
	UI_remove_answer("Cosmo");
	if (!(!var0002)) goto labelFunc04FC_0117;
	UI_add_answer("Cairbre");
labelFunc04FC_0117:
	case "unicorn" attend labelFunc04FC_0137:
	message("\"To be unsure but to think it has something to do with a woman and, to say how... sex?\"");
	say();
	UI_remove_answer("unicorn");
	UI_add_answer(["woman", "sex"]);
labelFunc04FC_0137:
	case "sex" attend labelFunc04FC_0161:
	message("\"To know nothing about this word. To mean something similar to reproduce?\"");
	say();
	var0004 = Func090A();
	if (!var0004) goto labelFunc04FC_0156;
	message("\"To tell you gargoyles reproduce differently than humans seem to, but to explain too poorly to be useful.\"");
	say();
	goto labelFunc04FC_015A;
labelFunc04FC_0156:
	message("\"To be quite confused.\" He shrugs.");
	say();
labelFunc04FC_015A:
	UI_remove_answer("sex");
labelFunc04FC_0161:
	case "woman" attend labelFunc04FC_01A3:
	message("\"To be related to difference in genders, I know, but to see no such thing in gargoyles. To believe there is a certain human... woman... who sent him here.~~\"To have heard Cosmo say, `love,' but Cairbre claims there is no such thing. To comprehend not, but to help friends anyway.\"");
	say();
	if (!var0001) goto labelFunc04FC_019C;
	message("*");
	say();
	UI_show_npc_face(0xFF0C, 0x0000);
	message("\"That is what I like about him, ");
	message(var0003);
	message(", loyal to the end!\" he says, patting the gargoyle on the shoulder.*");
	say();
	UI_remove_npc_face(0xFF0C);
	UI_show_npc_face(0xFF04, 0x0000);
labelFunc04FC_019C:
	UI_remove_answer("woman");
labelFunc04FC_01A3:
	case "bye" attend labelFunc04FC_01AE:
	goto labelFunc04FC_01B1;
labelFunc04FC_01AE:
	goto labelFunc04FC_0054;
labelFunc04FC_01B1:
	endconv;
	message("\"To say `til next time, ");
	message(var0003);
	message(",\" he says.*");
	say();
labelFunc04FC_01BC:
	if (!(event == 0x0000)) goto labelFunc04FC_01C7;
	Func08A5();
labelFunc04FC_01C7:
	return;
}


