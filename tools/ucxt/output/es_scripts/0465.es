#game "blackgate"
// externs
extern var Func0931 0x931 (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func08DF 0x8DF ();
extern var Func090A 0x90A ();

void Func0465 object#(0x465) ()
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

	if (!(event == 0x0001)) goto labelFunc0465_029F;
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	UI_show_npc_face(0xFF9B, 0x0000);
	if (!(!gflags[0x0154])) goto labelFunc0465_0040;
	if (!(!var0000)) goto labelFunc0465_003D;
	message("The creature ignores you.*");
	say();
	abort;
	goto labelFunc0465_0040;
labelFunc0465_003D:
	Func08DF();
labelFunc0465_0040:
	if (!(!gflags[0x013F])) goto labelFunc0465_0068;
	if (!(!gflags[0x013C])) goto labelFunc0465_005D;
	message("You see a wizened female ape-like creature.");
	say();
	gflags[0x013C] = true;
	gflags[0x013F] = true;
	goto labelFunc0465_0065;
labelFunc0465_005D:
	message("You see a wizened female Emp.");
	say();
	gflags[0x013F] = true;
labelFunc0465_0065:
	goto labelFunc0465_006C;
labelFunc0465_0068:
	message("\"You are hailed, human.\"");
	say();
labelFunc0465_006C:
	if (!gflags[0x012B]) goto labelFunc0465_0079;
	UI_add_answer("Trellek");
labelFunc0465_0079:
	UI_add_answer(["name", "job", "bye"]);
labelFunc0465_0089:
	converse attend labelFunc0465_029A;
	case "name" attend labelFunc0465_009F:
	message("\"I am Salamon,\" she says.");
	say();
	UI_remove_answer("name");
labelFunc0465_009F:
	case "job" attend labelFunc0465_00CE:
	message("\"I am without job. All Emps are without jobs. Food gathering and shelter-building are Emp jobs.\"");
	say();
	if (!(!gflags[0x0131])) goto labelFunc0465_00C1;
	message("She gives you a hard look.~~\"There is a job for Trellek.\"");
	say();
	gflags[0x0151] = true;
	UI_add_answer("Trellek");
labelFunc0465_00C1:
	UI_add_answer(["food-gathering", "shelter-building"]);
labelFunc0465_00CE:
	case "shelter-building" attend labelFunc0465_00E1:
	message("\"Silverleaf trees are where Emp's homes can be found.\"");
	say();
	UI_remove_answer("shelter-building");
labelFunc0465_00E1:
	case "food-gathering" attend labelFunc0465_0107:
	message("\"Only fruits, vegetables, and milk-stuffs are eaten by Emps. Bread is also eaten.\"");
	say();
	UI_remove_answer("food-gathering");
	UI_add_answer(["fruits and vegetables", "milk-stuffs", "bread", "-only-?"]);
labelFunc0465_0107:
	case "milk-stuffs" attend labelFunc0465_011A:
	message("\"Milk and cheese and butter are milk-stuffs.\"");
	say();
	UI_remove_answer("milk-stuffs");
labelFunc0465_011A:
	case "bread" attend labelFunc0465_012D:
	message("\"Bread is hard to make for Emps. No stoves or ovens are owned by Emps. But bread is well liked.\"");
	say();
	UI_remove_answer("bread");
labelFunc0465_012D:
	case "fruits and vegetables" attend labelFunc0465_0147:
	message("\"Fruits and vegetables are our favorites. Many are sweet.\"");
	say();
	UI_remove_answer("fruits and vegetables");
	UI_add_answer("sweet");
labelFunc0465_0147:
	case "sweet" attend labelFunc0465_01AB:
	message("\"Sweet things are desired by Emps. Honey is sweetest! More honey is had by you?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0465_01A0;
	message("Her eyes widen and her lips part around a very large and hopeful smile.~~\"More honey will be given by you?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0465_0199;
	var0003 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!var0003) goto labelFunc0465_0191;
	message("\"You are thanked,\" she says, taking the honey.");
	say();
	goto labelFunc0465_0196;
labelFunc0465_0191:
	message("\"A mean trick was played by you,\" she says, frowning.");
	say();
	abort;
labelFunc0465_0196:
	goto labelFunc0465_019D;
labelFunc0465_0199:
	message("She seems surprised, but quickly recovers.~~\"Your feelings are understood by me,\" she sighs.");
	say();
labelFunc0465_019D:
	goto labelFunc0465_01A4;
labelFunc0465_01A0:
	message("She sighs, obviously disappointed.");
	say();
labelFunc0465_01A4:
	UI_remove_answer("sweet");
labelFunc0465_01AB:
	case "-only-?" attend labelFunc0465_01CB:
	message("\"No dead animal flesh -- what is called `meat' by humans -- is eaten by an Emp.\"");
	say();
	UI_add_answer(["dead animal flesh", "meat"]);
	UI_remove_answer("-only-?");
labelFunc0465_01CB:
	case "meat" attend labelFunc0465_01DE:
	message("\"Meat is without a good taste,\" she shudders. \"It is not preferred!\"");
	say();
	UI_remove_answer("meat");
labelFunc0465_01DE:
	case "dead animal flesh" attend labelFunc0465_01F1:
	message("\"All violence is abhorred by Emps. No killing is desired, even for what you humans call food.\"");
	say();
	UI_remove_answer("dead animal flesh");
labelFunc0465_01F1:
	case "Trellek" attend labelFunc0465_028C:
	if (!gflags[0x0130]) goto labelFunc0465_0281;
	if (!gflags[0x012B]) goto labelFunc0465_0246;
	var0004 = Func0931(0xFE9B, 0x0001, 0x031D, 0x0003, 0xFE99);
	if (!var0004) goto labelFunc0465_023F;
	message("She takes the document from you, smiling when she sees Ben's signature. \"Trellek is permitted to join you. You are wished luck and speed.\"");
	say();
	var0005 = UI_remove_party_items(0x0001, 0x031D, 0x0003, 0xFE99, false);
	gflags[0x0131] = true;
	goto labelFunc0465_0243;
labelFunc0465_023F:
	message("\"The signed contract must be seen by me.\"");
	say();
labelFunc0465_0243:
	goto labelFunc0465_027E;
labelFunc0465_0246:
	message("\"Permission will be given to you later. There is a task that must be performed first.~~\"There is a woodcutter who lives in the western part of the forest. Silverleaf trees are being cut down by him. Emp houses are in Silverleaf trees. Contract must be signed by woodcutter to stop.\"");
	say();
	if (!(!gflags[0x012A])) goto labelFunc0465_027E;
	message("\"My condition is understood by you?\" Not waiting for your response, she hands you a document.");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0003, 0xFE99, false);
	if (!var0006) goto labelFunc0465_027A;
	message("\"You are now in possession of the contract.\"");
	say();
	gflags[0x012A] = true;
	goto labelFunc0465_027E;
labelFunc0465_027A:
	message("\"There is not enough room in your equipment for the contract.\"");
	say();
labelFunc0465_027E:
	goto labelFunc0465_0285;
labelFunc0465_0281:
	message("\"Trellek is another Emp. He should be spoken to by you.~~\"There is much damage to the forest and the Silverleaf trees. The damage is caused by your people, human. The responsibility to reverse the damage is also yours, human.~~\"Trellek should be sought by you,\" she says emphatically. \"He should be asked to join you.\"");
	say();
labelFunc0465_0285:
	UI_remove_answer("Trellek");
labelFunc0465_028C:
	case "bye" attend labelFunc0465_0297:
	goto labelFunc0465_029A;
labelFunc0465_0297:
	goto labelFunc0465_0089;
labelFunc0465_029A:
	endconv;
	message("\"My hope is for your welfare, human.\"*");
	say();
labelFunc0465_029F:
	if (!(event == 0x0000)) goto labelFunc0465_0331;
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF9B));
	var0008 = UI_die_roll(0x0001, 0x0004);
	var0000 = Func0931(0xFE9B, 0x0001, 0x0304, 0xFE99, 0xFE99);
	if (!(var0007 == 0x000B)) goto labelFunc0465_0327;
	if (!var0000) goto labelFunc0465_0327;
	if (!(var0008 == 0x0001)) goto labelFunc0465_02F7;
	var0009 = "@You are greeted.@";
labelFunc0465_02F7:
	if (!(var0008 == 0x0002)) goto labelFunc0465_0307;
	var0009 = "@Nature is home to many.@";
labelFunc0465_0307:
	if (!(var0008 == 0x0003)) goto labelFunc0465_0317;
	var0009 = "@A good day is hoped for you.@";
labelFunc0465_0317:
	if (!(var0008 == 0x0004)) goto labelFunc0465_0327;
	var0009 = "@Nature is wise.@";
labelFunc0465_0327:
	UI_item_say(0xFF9B, var0009);
labelFunc0465_0331:
	return;
}


