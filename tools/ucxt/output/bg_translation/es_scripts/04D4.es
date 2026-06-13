#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();
extern void Func092E 0x92E (var var0000);

void Func04D4 object#(0x4D4) ()
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
	var var000A;
	var var000B;

	if (!(event == 0x0001)) goto labelFunc04D4_02F6;
	UI_show_npc_face(0xFF2C, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = UI_is_dead(UI_get_npc_object(0xFF35));
	var0004 = "the Avatar";
	UI_add_answer(["name", "job", "Fellowship", "bye"]);
	if (!(gflags[0x027E] && (!gflags[0x0285]))) goto labelFunc04D4_005B;
	UI_add_answer("Catherine at noon");
labelFunc04D4_005B:
	if (!gflags[0x0286]) goto labelFunc04D4_0067;
	var0005 = var0000;
labelFunc04D4_0067:
	if (!gflags[0x0287]) goto labelFunc04D4_0073;
	var0005 = var0001;
labelFunc04D4_0073:
	if (!(!gflags[0x0291])) goto labelFunc04D4_00D6;
	message("The matronly woman you see has a look of concern on her face.~~\"Good day, ");
	message(var0001);
	message(". I am Yvella.\" She curtseys. \"Might I know thy name?\"");
	say();
	var0006 = Func090B([var0000, var0004]);
	if (!(var0006 == var0000)) goto labelFunc04D4_00B1;
	message("\"Pleased to meet thee, ");
	message(var0000);
	message(".\"");
	say();
	gflags[0x0286] = true;
	var0005 = var0000;
labelFunc04D4_00B1:
	if (!(var0006 == var0004)) goto labelFunc04D4_00CF;
	message("\"Now, now, ");
	message(var0001);
	message(", thou shouldst not lie like that.\"");
	say();
	gflags[0x0287] = true;
	var0005 = var0001;
labelFunc04D4_00CF:
	gflags[0x0291] = true;
	goto labelFunc04D4_00E0;
labelFunc04D4_00D6:
	message("\"Good day, ");
	message(var0005);
	message(".\"");
	say();
labelFunc04D4_00E0:
	converse attend labelFunc04D4_02EB;
	case "name" attend labelFunc04D4_00FC:
	message("\"I am Yvella, ");
	message(var0001);
	message(".\"");
	say();
	UI_remove_answer("name");
labelFunc04D4_00FC:
	case "job" attend labelFunc04D4_011D:
	message("\"I take care of my daughter, Catherine, while Cador is at work.\"");
	say();
	if (!(!var0002)) goto labelFunc04D4_0116;
	UI_add_answer("Cador");
labelFunc04D4_0116:
	UI_add_answer("Catherine");
labelFunc04D4_011D:
	case "Fellowship" attend labelFunc04D4_013E:
	message("\"Thou hast not heard of The Fellowship? It is a wonderful organization. They hold parades and festivals and have even built shelters for homeless folk throughout Britannia. Mine husband learned of them some time ago, and we have been happy members ever since.\"");
	say();
	if (!(!var0002)) goto labelFunc04D4_0137;
	UI_add_answer("husband");
labelFunc04D4_0137:
	UI_remove_answer("Fellowship");
labelFunc04D4_013E:
	case "Cador", "husband" attend labelFunc04D4_0196:
	if (!var0003) goto labelFunc04D4_0156;
	message("\"Cador was mine husband. He was the overseer at the Britannian Mining Company here in Vesper. I cannot believe he is gone,\" she sobs.~~ \"I told him again and again that tavern was a bad place to spend the evening. And now, he is dead, leaving me and Catherine without a husband and a father!\"");
	say();
	goto labelFunc04D4_017E;
labelFunc04D4_0156:
	message("\"Cador is mine husband. He is the overseer at the Britannian Mining Company here in Vesper.\"");
	say();
	var0007 = UI_part_of_day();
	if (!((var0007 == 0x0006) || (var0007 == 0x0007))) goto labelFunc04D4_017E;
	message("\"He is often at the tavern at this time. I do wish he would not go there every night with that... that...\twoman!\"");
	say();
	UI_add_answer("woman");
labelFunc04D4_017E:
	UI_remove_answer(["Cador", "husband"]);
	UI_add_answer("Vesper");
	var0002 = true;
labelFunc04D4_0196:
	case "woman" attend labelFunc04D4_01A9:
	message("\"Her name is Mara. She is a fellow miner. She is very nice, but also very beautiful. I do not like mine husband spending all that time with her.\"");
	say();
	UI_remove_answer("woman");
labelFunc04D4_01A9:
	case "Vesper" attend labelFunc04D4_01C9:
	message("\"Well, it would be a lovely town if it were not for those... those... gargoyles.  They are disgusting beings. I think Auston should have them run out of town.\"");
	say();
	UI_add_answer(["Auston", "gargoyles"]);
	UI_remove_answer("Vesper");
labelFunc04D4_01C9:
	case "Auston" attend labelFunc04D4_0200:
	message("\"He is our mayor. Eldroth recommended that we elect him, so, of course, we did. However, between the two of us, I think we ought to have someone new if Auston does not do something quickly. As a matter of fact, thou shouldst run for mayor, ");
	message(var0001);
	message(". What dost thou think? Wouldst thou like to run for mayor?\"");
	say();
	var0008 = Func090A();
	if (!var0008) goto labelFunc04D4_01EE;
	message("\"I agree, thou ought to consider it.\"");
	say();
	goto labelFunc04D4_01F2;
labelFunc04D4_01EE:
	message("\"That is too bad. I believe thou wouldst be perfect for the office.\"");
	say();
labelFunc04D4_01F2:
	UI_add_answer("Eldroth");
	UI_remove_answer("Auston");
labelFunc04D4_0200:
	case "Eldroth" attend labelFunc04D4_0213:
	message("\"He is our town advisor. Very wise man that Eldroth. He also sells provisions.\"");
	say();
	UI_remove_answer("Eldroth");
labelFunc04D4_0213:
	case "gargoyles" attend labelFunc04D4_0244:
	message("\"Perfectly wretched beasts. Thank goodness most of them stay on their side of the oasis. I do not know how Cador stands working with them. Well, for him, that is. There is only one who still works there.\"");
	say();
	var0009 = UI_add_party_items(0x0001, 0x031D, 0x0002, 0xFE99, true);
	if (!var0009) goto labelFunc04D4_023D;
	message("\"Here,\" she says fumbling through her robes. Finally, she finds a piece of parchment and hands it to you.");
	say();
labelFunc04D4_023D:
	UI_remove_answer("gargoyles");
labelFunc04D4_0244:
	case "Catherine" attend labelFunc04D4_025B:
	message("\"I worry about her. Every day at noon, she seems to disappear for a few hours. She has these foolish notions that gargoyles are friendly and honorable. I am afraid she may be visiting the other side of the oasis. Oh, I do hope not.\"");
	say();
	gflags[0x027E] = true;
	UI_remove_answer("Catherine");
labelFunc04D4_025B:
	case "Catherine at noon" attend labelFunc04D4_02DD:
	message("\"Thou knowest where my daughter doth go at noon?\"");
	say();
	var000A = Func090A();
	if (!var000A) goto labelFunc04D4_02D9;
	message("\"Wilt thou tell me?\"");
	say();
	var000B = Func090A();
	if (!var000B) goto labelFunc04D4_02C4;
	if (!gflags[0x027D]) goto labelFunc04D4_02B7;
	message("After you tell her, she responds, \"I knew it! That girl must be taught some sense. Associating with those vile creatures. Imagine!\" She shakes her head.");
	say();
	if (!var0003) goto labelFunc04D4_029A;
	message("\"If only her father were here today, he would show that loathsome creature his place!\"");
	say();
	goto labelFunc04D4_02A5;
labelFunc04D4_029A:
	message("\"Just wait until I tell her father about this! He and Mara will certainly take care of the situation.!\"");
	say();
	UI_remove_npc(0xFF2A);
labelFunc04D4_02A5:
	message("\"I thank thee, ");
	message(var0005);
	message(". I will put a stop to this right away!\"*");
	say();
	gflags[0x0285] = true;
	abort;
	goto labelFunc04D4_02C1;
labelFunc04D4_02B7:
	message("After you tell her, she responds, \"I doubt that is true, ");
	message(var0001);
	message(", but I will look into the matter. I thank thee for thy concern.\"");
	say();
labelFunc04D4_02C1:
	goto labelFunc04D4_02CF;
labelFunc04D4_02C4:
	message("\"Get thee away and cease taunting me! Thou art cruel, ");
	message(var0005);
	message("!\"*");
	say();
	abort;
labelFunc04D4_02CF:
	UI_remove_answer("Catherine at noon");
	goto labelFunc04D4_02DD;
labelFunc04D4_02D9:
	message("\"Oh, well. I thank thee for thy concern.\"");
	say();
labelFunc04D4_02DD:
	case "bye" attend labelFunc04D4_02E8:
	goto labelFunc04D4_02EB;
labelFunc04D4_02E8:
	goto labelFunc04D4_00E0;
labelFunc04D4_02EB:
	endconv;
	message("\"Pleasant journey, ");
	message(var0001);
	message(".\"*");
	say();
labelFunc04D4_02F6:
	if (!(event == 0x0000)) goto labelFunc04D4_0304;
	Func092E(0xFF2C);
labelFunc04D4_0304:
	return;
}


