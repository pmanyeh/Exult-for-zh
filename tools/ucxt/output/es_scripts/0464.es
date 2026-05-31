#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08ED 0x8ED ();
extern var Func090A 0x90A ();
extern var Func08F7 0x8F7 (var var0000);

void Func0464 object#(0x464) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc0464_01F0;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9C, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0464_0040;
	if (!(!var0000)) goto labelFunc0464_003D;
	message("The creature ignores you.*");
	say();
	abort;
	goto labelFunc0464_0040;
labelFunc0464_003D:
	Func08ED();
labelFunc0464_0040:
	if (!(!gflags[0x013E])) goto labelFunc0464_0068;
	if (!(!gflags[0x013C])) goto labelFunc0464_005D;
	message("The ape-like creature in front of you approaches very cautiously.  After a few minutes of staring you up and down, it cocks its head toward you.~~\"You are human.\"");
	say();
	gflags[0x013C] = true;
	gflags[0x013E] = true;
	goto labelFunc0464_0065;
labelFunc0464_005D:
	message("The Emp in front of you approaches very cautiously. After a few minutes of staring you up and down, he cocks his head towards you.~~\"You are human.\"");
	say();
	gflags[0x013E] = true;
labelFunc0464_0065:
	goto labelFunc0464_006C;
labelFunc0464_0068:
	message("\"You are greeted by me, human.\" Tavenor slowly approaches.");
	say();
labelFunc0464_006C:
	UI_add_answer(["name", "job", "bye"]);
	var0001 = false;
labelFunc0464_0080:
	converse attend labelFunc0464_01EB;
	case "name" attend labelFunc0464_0096:
	message("\"Tavenor is my name.\"");
	say();
	UI_remove_answer("name");
labelFunc0464_0096:
	case "job" attend labelFunc0464_00BE:
	if (!(!gflags[0x012E])) goto labelFunc0464_00B3;
	message("\"The meaning of `job' is not understood.\"");
	say();
	UI_add_answer("explain job");
	goto labelFunc0464_00BE;
labelFunc0464_00B3:
	message("\"No job is had by me. Food is gathered by me and my family.\"");
	say();
	UI_add_answer("food");
labelFunc0464_00BE:
	case "explain job" attend labelFunc0464_013B:
	message("\"`Job' now understood by me. No job is had by me. Food is gathered by me and my family.\" He watches you carefully. \"Your job is to cut down Silverleaf trees, yes?\"");
	say();
	gflags[0x012E] = true;
	var0002 = Func090A();
	if (!var0002) goto labelFunc0464_00E2;
	message("\"That is as I expected. You are a menace. You are asked to stop, please.\" He turns away from you.*");
	say();
	abort;
	goto labelFunc0464_012E;
labelFunc0464_00E2:
	message("\"The truth is known to me, but, belief is hard for me.\"");
	say();
	var0003 = Func08F7(0xFFFA);
	if (!var0003) goto labelFunc0464_011F;
	message("*");
	say();
	UI_show_npc_face(0xFFFA, 0x0000);
	message("\"The truth is spoken by the human,\" Trellek says to the other Emp. \"He is to be trusted. His good will was felt by me.\"*");
	say();
	UI_remove_npc_face(0xFFFA);
	UI_show_npc_face(0xFF9C, 0x0000);
	message("The Emp nods at Trellek, and then turns to you. \"The truth is now clear to me. You are wished good luck.\"");
	say();
	goto labelFunc0464_0123;
labelFunc0464_011F:
	message("The Emp eyes you a little longer. \"Your good intentions are known to    me. You are asked to be the messenger. Humans will not be destroyers, please.\"");
	say();
labelFunc0464_0123:
	UI_remove_answer("explain job");
	gflags[0x012E] = true;
labelFunc0464_012E:
	UI_add_answer(["food", "Silverleaf trees"]);
labelFunc0464_013B:
	case "food" attend labelFunc0464_015E:
	message("\"Fruit and milk are Emp foods. Especially fruits are liked by me. Meats,\" he shakes his head,~~\"are -not- liked by Emps.\"");
	say();
	UI_remove_answer("food");
	UI_add_answer(["meats", "fruits", "milk"]);
labelFunc0464_015E:
	case "milk" attend labelFunc0464_017F:
	message("\"Milk is good. Milk with honey is preferred by me.\"");
	say();
	if (!(!var0001)) goto labelFunc0464_0178;
	UI_add_answer("honey");
labelFunc0464_0178:
	UI_remove_answer("milk");
labelFunc0464_017F:
	case "Silverleaf trees" attend labelFunc0464_0192:
	message("\"Silverleaf trees are Emp homes.\"");
	say();
	UI_remove_answer("Silverleaf trees");
labelFunc0464_0192:
	case "meats" attend labelFunc0464_01A5:
	message("\"Meats are from killed animals. Killing is bad. Destroying is bad.\"");
	say();
	UI_remove_answer("meats");
labelFunc0464_01A5:
	case "fruits" attend labelFunc0464_01C6:
	message("\"Fruits are good and sweet -- like honey!\"");
	say();
	UI_remove_answer("fruits");
	if (!(!var0001)) goto labelFunc0464_01C6;
	UI_add_answer("honey");
labelFunc0464_01C6:
	case "honey" attend labelFunc0464_01DD:
	message("\"Honey is favorite food of all Emps!\"");
	say();
	var0001 = true;
	UI_remove_answer("honey");
labelFunc0464_01DD:
	case "bye" attend labelFunc0464_01E8:
	goto labelFunc0464_01EB;
labelFunc0464_01E8:
	goto labelFunc0464_0080;
labelFunc0464_01EB:
	endconv;
	message("\"You are told `goodbye.'\"*");
	say();
labelFunc0464_01F0:
	if (!(event == 0x0000)) goto labelFunc0464_01F9;
	abort;
labelFunc0464_01F9:
	return;
}


