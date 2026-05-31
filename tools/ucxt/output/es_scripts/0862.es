#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);
extern var Func090B 0x90B (var var0000);
extern void Func0861 0x861 ();
extern void Func0911 0x911 (var var0000);

void Func0862 0x862 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = Func08F7(0xFFFF);
	var0001 = false;
	var0002 = false;
	var0003 = false;
	var0004 = false;
	message("\"Then prove it. Talk to me.\"");
	say();
	UI_clear_answers();
	var0005 = Func090B(["Hello, Chuckles", "Hello, Fool", "Hi, Chuckles", "Hi, Chuck"]);
	if (!(var0005 == "Hi, Chuck")) goto labelFunc0862_004F;
	message("\"Hi there! What is on thy mind?\"");
	say();
	var0001 = true;
	UI_clear_answers();
	goto labelFunc0862_0052;
labelFunc0862_004F:
	Func0861();
labelFunc0862_0052:
	if (!(var0001 == true)) goto labelFunc0862_008B;
	var0005 = Func090B(["trouble", "too much", "many problems", "I need answers"]);
	if (!(var0005 == "too much")) goto labelFunc0862_0088;
	message("\"Ah, I do know what thou dost mean! Thou dost need help, yes?\"");
	say();
	var0002 = true;
	UI_clear_answers();
	goto labelFunc0862_008B;
labelFunc0862_0088:
	Func0861();
labelFunc0862_008B:
	if (!(var0002 == true)) goto labelFunc0862_00F1;
	var0005 = Func090B(["Yes, I do", "Absolutely", "Canst thou help?", "Most assuredly"]);
	if (!((var0005 == "Yes, I do") || (var0005 == "Canst thou help?"))) goto labelFunc0862_00EE;
	message("\"Hmmm. I might could give thee a clue.\"");
	say();
	if (!var0000) goto labelFunc0862_00E3;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"I would like to give Chuckles a black eye!\"");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFE7, 0x0000);
labelFunc0862_00E3:
	var0003 = true;
	UI_clear_answers();
	goto labelFunc0862_00F1;
labelFunc0862_00EE:
	Func0861();
labelFunc0862_00F1:
	if (!(var0003 == true)) goto labelFunc0862_0132;
	var0005 = Func090B(["That would be big of thee", "I need it immediately", "That would be worthwhile", "I wish thou wouldst"]);
	if (!((var0005 == "That would be big of thee") || (var0005 == "I wish thou wouldst"))) goto labelFunc0862_012F;
	message("\"What wilt thou give me for a clue?\"");
	say();
	var0004 = true;
	UI_clear_answers();
	goto labelFunc0862_0132;
labelFunc0862_012F:
	Func0861();
labelFunc0862_0132:
	if (!(var0004 == true)) goto labelFunc0862_01F5;
	var0005 = Func090B(["I shan't murder thee", "gold", "my friendship", "a smile", "nothing"]);
	if (!(var0005 == "gold")) goto labelFunc0862_0195;
	message("Chuckles holds his hand up. \"'Tis not right. I give thee a clue for free. 'Tis here in this scroll.\"");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0001, 0xFE99, false);
	if (!var0006) goto labelFunc0862_0190;
	gflags[0x006F] = true;
	Func0911(0x0032);
	UI_clear_answers();
	message("\"So long, my friend! Do not forg... I mean, do not lose how to play The Game!\"*");
	say();
	abort;
	goto labelFunc0862_0195;
labelFunc0862_0190:
	message("\"Oh! Thou dost not have room for the scroll! Put down thy things and I shall give it to thee!\"*");
	say();
	abort;
labelFunc0862_0195:
	if (!(var0005 == "a smile")) goto labelFunc0862_01D8;
	message("\"How nice! All right! I shall give thee a clue. 'Tis here in this scroll.\"");
	say();
	var0006 = UI_add_party_items(0x0001, 0x031D, 0x0001, 0xFE99, false);
	if (!var0006) goto labelFunc0862_01D3;
	gflags[0x006F] = true;
	Func0911(0x0032);
	UI_clear_answers();
	message("\"So long, my friend! Do not forg... I mean, do not lose how to play The Game!\"*");
	say();
	abort;
	goto labelFunc0862_01D8;
labelFunc0862_01D3:
	message("\"Oh! Thou dost not have room for the scroll! Put down some of thy things and I can give it to thee!\"*");
	say();
	abort;
labelFunc0862_01D8:
	if (!((var0005 == "I shan't murder thee") || ((var0005 == "my friendship") || (var0005 == "nothing")))) goto labelFunc0862_01F5;
	Func0861();
labelFunc0862_01F5:
	return;
}


