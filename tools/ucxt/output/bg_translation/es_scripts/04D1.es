#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0909 0x909 ();

void Func04D1 object#(0x4D1) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0001)) goto labelFunc04D1_0224;
	UI_show_npc_face(0xFF2F, 0x0000);
	var0000 = Func0908();
	var0001 = Func0909();
	var0002 = false;
	var0003 = false;
	UI_add_answer(["name", "job", "bye"]);
	if (!gflags[0x0088]) goto labelFunc04D1_0043;
	UI_add_answer("Elizabeth and Abraham");
labelFunc04D1_0043:
	if (!(!gflags[0x028E])) goto labelFunc04D1_0055;
	message("You see a middle-aged man with a furrowed brow, as if he is constantly worried.");
	say();
	gflags[0x028E] = true;
	goto labelFunc04D1_005F;
labelFunc04D1_0055:
	message("\"How may I help thee, ");
	message(var0001);
	message("?\"");
	say();
labelFunc04D1_005F:
	converse attend labelFunc04D1_0219;
	case "name" attend labelFunc04D1_0075:
	message("\"Please call me Auston.\"");
	say();
	UI_remove_answer("name");
labelFunc04D1_0075:
	case "job" attend labelFunc04D1_0088:
	message("He sighs before responding. \"I am the Mayor of Vesper.\"");
	say();
	UI_add_answer("Vesper");
labelFunc04D1_0088:
	case "Vesper" attend labelFunc04D1_00AE:
	message("\"It was a pleasant place in days past. But now, ");
	message(var0001);
	message(", the turmoil between our people and those gargoyles has caused many problems.\"");
	say();
	UI_add_answer(["problems", "people"]);
	UI_remove_answer("Vesper");
labelFunc04D1_00AE:
	case "problems" attend labelFunc04D1_00E4:
	message("\"I am worried that the gargoyles may get restless and attack us. Blorn has not helped things.\" He points to his chest. \"I am the one charged with maintaining order here. If there is not any, it will be my responsibility. I have asked Eldroth what to do in case of an uprising and I am trying to plan accordingly.\"");
	say();
	UI_add_answer("gargoyles");
	if (!(!var0003)) goto labelFunc04D1_00CF;
	UI_add_answer("Eldroth");
labelFunc04D1_00CF:
	if (!(!var0002)) goto labelFunc04D1_00DD;
	UI_add_answer("Blorn");
labelFunc04D1_00DD:
	UI_remove_answer("problems");
labelFunc04D1_00E4:
	case "gargoyles" attend labelFunc04D1_00FD:
	message("\"I don't trust them any more than thou dost, ");
	message(var0000);
	message(", but, officially, they are citizens, too. I am afraid they may try to forcefully gain control of the town someday.\"");
	say();
	UI_remove_answer("gargoyles");
labelFunc04D1_00FD:
	case "Liana" attend labelFunc04D1_0110:
	message("\"She is my clerk. She is very efficient. I couldn't govern Vesper without her.\"");
	say();
	UI_remove_answer("Liana");
labelFunc04D1_0110:
	case "people" attend labelFunc04D1_017F:
	var0004 = UI_is_dead(UI_get_npc_object(0xFF35));
	if (!var0004) goto labelFunc04D1_013C;
	UI_add_answer("shame");
	var0005 = " -- 'tis a shame about him -- ";
	goto labelFunc04D1_0142;
labelFunc04D1_013C:
	var0005 = " ";
labelFunc04D1_0142:
	message("\"I try to stay in touch with as many of the citizens as I can, but I do not know all of them that well. I know Cador");
	message(var0005);
	message("has been in charge of the local branch of the Britannian Mining Company ever since it opened. He is married to Yvella. I believe they are members of that Fellowship organization.~~\"Of course, there's Eldroth, and a trainer, and also, Yongi. And,\" he scowls as he adds the last one, \"Blorn. Also, thou shouldst speak with Liana. She knows a few of the people that I do not. I am afraid that I do not know everyone as well as I should.\"");
	say();
	UI_add_answer(["trainer", "Yongi", "Liana"]);
	if (!(!var0003)) goto labelFunc04D1_016A;
	UI_add_answer("Eldroth");
labelFunc04D1_016A:
	if (!(!var0002)) goto labelFunc04D1_0178;
	UI_add_answer("Blorn");
labelFunc04D1_0178:
	UI_remove_answer("people");
labelFunc04D1_017F:
	case "shame" attend labelFunc04D1_0192:
	message("\"I would have thought thou wouldst know.\" He strokes his beard.~~\"Cador was slain in a fight at the Gilded Lizard. 'Twas the first act of this kind ever in Vesper. Quite odd.\"");
	say();
	UI_remove_answer("shame");
labelFunc04D1_0192:
	case "Eldroth" attend labelFunc04D1_01A9:
	message("\"Eldroth acts as our counselor. He has been giving advice to the people of our town for... well, longer than I can remember. He owns the provisions shop.\"");
	say();
	var0003 = true;
	UI_remove_answer("Eldroth");
labelFunc04D1_01A9:
	case "trainer" attend labelFunc04D1_01BC:
	message("\"Zaksam is our trainer. He can teach thee how to better defend thyself. Should the gargoyles cause trouble, I am comforted that he would defend our side.\"");
	say();
	UI_remove_answer("trainer");
labelFunc04D1_01BC:
	case "Yongi" attend labelFunc04D1_01CF:
	message("\"He serves drinks at the tavern. Many have claimed him to be the best bartender on this side of the desert. People come from all around Britannia to speak with him,\" he says proudly.");
	say();
	UI_remove_answer("Yongi");
labelFunc04D1_01CF:
	case "Blorn" attend labelFunc04D1_01E6:
	message("\"I am not sure what to think about him. I do not know what he does for a living, but I know the gargoyles hate him more than they do the rest of us. I am frightened of what will happen, since it is obvious that he holds mutual feelings towards them.\"");
	say();
	var0002 = true;
	UI_remove_answer("Blorn");
labelFunc04D1_01E6:
	case "Elizabeth and Abraham" attend labelFunc04D1_020B:
	if (!(!gflags[0x01EF])) goto labelFunc04D1_0200;
	message("\"They are Fellowship members. They were just here to see about starting a branch in Vesper. I imagine we will allow it. I believe the couple have gone to Moonglow. They said they were on their way there to conduct a training session for the branch leader there. But I do know that they were going to stop at the Britannian Mining Company branch on the way out of town. I do not know why.\"");
	say();
	gflags[0x0284] = true;
	goto labelFunc04D1_0204;
labelFunc04D1_0200:
	message("\"I have not seen that Fellowship couple for many, many days. I have no idea where they could be now.\"");
	say();
labelFunc04D1_0204:
	UI_remove_answer("Elizabeth and Abraham");
labelFunc04D1_020B:
	case "bye" attend labelFunc04D1_0216:
	goto labelFunc04D1_0219;
labelFunc04D1_0216:
	goto labelFunc04D1_005F;
labelFunc04D1_0219:
	endconv;
	message("\"Goodbye, ");
	message(var0001);
	message(".\"*");
	say();
labelFunc04D1_0224:
	if (!(event == 0x0000)) goto labelFunc04D1_022D;
	abort;
labelFunc04D1_022D:
	return;
}


