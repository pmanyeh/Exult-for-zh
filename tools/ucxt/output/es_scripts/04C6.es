#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func08A4 0x8A4 ();
extern void Func08A3 0x8A3 ();
extern void Func092E 0x92E (var var0000);

void Func04C6 object#(0x4C6) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;

	if (!(event == 0x0001)) goto labelFunc04C6_02E7;
	UI_show_npc_face(0xFF3A, 0x0000);
	var0000 = Func0909();
	var0001 = Func0908();
	var0002 = "Avatar";
	var0003 = Func08F7(0xFFFF);
	var0004 = Func08F7(0xFFFD);
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x025A]) goto labelFunc04C6_0052;
	var0005 = var0001;
labelFunc04C6_0052:
	if (!gflags[0x025B]) goto labelFunc04C6_005E;
	var0005 = var0002;
labelFunc04C6_005E:
	if (!(!gflags[0x026F])) goto labelFunc04C6_0116;
	message("You see a man who, despite being blind, quickly acknowledges you.~~\"I am Jordan. Sir Jordan. And thou art?\"");
	say();
	var0006 = Func090B([var0001, var0002]);
	if (!(var0006 == var0001)) goto labelFunc04C6_0093;
	message("\"My pleasure, ");
	message(var0001);
	message(".\" He shakes your hand.");
	say();
	gflags[0x025A] = true;
	goto labelFunc04C6_010F;
labelFunc04C6_0093:
	message("He laughs. \"Yes, but of course thou art.\"");
	say();
	gflags[0x025B] = true;
	if (!var0003) goto labelFunc04C6_010F;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"'Tis true, Sir Jordan. He is the Avatar.\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
	message("Jordan smiles. \"I see. And who wouldst thou be? Shamino?\"*");
	say();
	if (!var0004) goto labelFunc04C6_00EC;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"No.\" He points to Shamino. \"He is. I am Iolo!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
	goto labelFunc04C6_010B;
labelFunc04C6_00EC:
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"No. I am Iolo, not Shamino!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFF3A, 0x0000);
labelFunc04C6_010B:
	message("\"Of course!\" He says, patronizingly. \"How could I not recognize the great Iolo.\"");
	say();
labelFunc04C6_010F:
	gflags[0x026F] = true;
	goto labelFunc04C6_0120;
labelFunc04C6_0116:
	message("\"Greetings, ");
	message(var0005);
	message(".\"");
	say();
labelFunc04C6_0120:
	if (!(gflags[0x025E] && (!gflags[0x0261]))) goto labelFunc04C6_0132;
	UI_add_answer("statue");
labelFunc04C6_0132:
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x025A]) goto labelFunc04C6_014E;
	var0005 = var0001;
labelFunc04C6_014E:
	if (!gflags[0x025B]) goto labelFunc04C6_015A;
	var0005 = var0002;
labelFunc04C6_015A:
	converse attend labelFunc04C6_02DC;
	case "name" attend labelFunc04C6_0170:
	message("\"As I told thee, my name is Sir Jordan.\"");
	say();
	UI_remove_answer("name");
labelFunc04C6_0170:
	case "job" attend labelFunc04C6_0189:
	message("\"I sell bows and crossbows here at Iolo's South.\"");
	say();
	UI_add_answer(["Iolo's South", "sell"]);
labelFunc04C6_0189:
	case "Iolo's South" attend labelFunc04C6_01A9:
	message("\"The original branch is in Britain. But I do fine business here in the Hold.\"");
	say();
	UI_remove_answer("Iolo's South");
	UI_add_answer(["original branch", "Hold"]);
labelFunc04C6_01A9:
	case "Hold" attend labelFunc04C6_01C9:
	message("\"Serpent's Hold, ");
	message(var0000);
	message(". I have sold many quality bows to the knights here.\"");
	say();
	UI_remove_answer("Hold");
	UI_add_answer("knights");
labelFunc04C6_01C9:
	case "original branch" attend labelFunc04C6_0225:
	message("\"The great archer himself, Iolo, started that branch more than two hundred years ago.\"");
	say();
	if (!var0003) goto labelFunc04C6_021E;
	message("*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I, er, thank thee for thy compliment.\"*");
	say();
	UI_show_npc_face(0xFF3A, 0x0000);
	message("\"'Twould mean more wert thou Iolo!\"*");
	say();
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Listen, here, rogue, I truly -am-...\"*");
	say();
	UI_show_npc_face(0xFF3A, 0x0000);
	message("\"Yes, yes, I know. Thou really -art- Iolo... And I am Lord British!\"*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc04C6_021E:
	UI_remove_answer("original branch");
labelFunc04C6_0225:
	case "knights" attend labelFunc04C6_0238:
	message("\"There are many who live within the walls of the Hold. Sir Denton, the bartender at the Hallowed Dock, knows them all.\"");
	say();
	UI_remove_answer("knights");
labelFunc04C6_0238:
	case "sell" attend labelFunc04C6_0281:
	var0007 = UI_get_schedule_type(UI_get_npc_object(0xFF3A));
	if (!(var0007 == 0x0007)) goto labelFunc04C6_0270;
	message("\"Weapons or missiles?\"");
	say();
	UI_push_answers();
	UI_add_answer(["weapons", "missiles"]);
	goto labelFunc04C6_027A;
labelFunc04C6_0270:
	message("\"I am sorry, ");
	message(var0000);
	message(", but I can only sell things during my shop hours -- from 6 in the morning 'til 6 at night.\"");
	say();
labelFunc04C6_027A:
	UI_remove_answer("sell");
labelFunc04C6_0281:
	case "weapons" attend labelFunc04C6_028C:
	Func08A4();
labelFunc04C6_028C:
	case "missiles" attend labelFunc04C6_0297:
	Func08A3();
labelFunc04C6_0297:
	case "statue" attend labelFunc04C6_02B1:
	message("He looks defensive. \"I had nothing to do with that.~~ \"But, I will tell thee that, on the night of the incident, I heard the sounds of scuffling in the commons. And, later on in the evening, I heard a woman cry out, as if in surprise!\"");
	say();
	UI_add_answer("woman");
	UI_remove_answer("statue");
labelFunc04C6_02B1:
	case "woman" attend labelFunc04C6_02CE:
	message("\"I am not positive, ");
	message(var0005);
	message(", but I believe the voice was that of Lady Jehanne.\" He nods his head knowingly. \"Someone has lost their sense of unity.\"");
	say();
	UI_remove_answer("woman");
	gflags[0x025C] = true;
labelFunc04C6_02CE:
	case "bye" attend labelFunc04C6_02D9:
	goto labelFunc04C6_02DC;
labelFunc04C6_02D9:
	goto labelFunc04C6_015A;
labelFunc04C6_02DC:
	endconv;
	message("\"I hope to see thee again, ");
	message(var0005);
	message(".\"*");
	say();
labelFunc04C6_02E7:
	if (!(event == 0x0000)) goto labelFunc04C6_02F5;
	Func092E(0xFF3A);
labelFunc04C6_02F5:
	return;
}


