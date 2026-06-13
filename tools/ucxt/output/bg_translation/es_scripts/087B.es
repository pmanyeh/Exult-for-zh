#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func087B 0x87B ()
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

	message("With Elynor standing before the gathered members of The Fellowship, the ceremony begins. \"My brothers in The Fellowship, I greet you on this occasion and thank you for your attendance. The events which have transpired in this town threaten to drive us apart. I do not need to remind you that the first value of the Triad of Inner Strength states that we must Strive For Unity. Now is the time when all those who hate and fear us may be conspiring against us.\"");
	say();
	message("\"There are those who fear awareness for it illuminates their own limitations. There are those who despise change for the better because they have spent their whole lives teaching themselves to love the mediocrity with which they have surrounded themselves. These are the people who perceive our Fellowship as a threat.\"");
	say();
	message("\"And there are those who are very uncertain about the merits of our Fellowship. Those who have heard the words of those who are against us but who see with their own eyes the substantial good that The Fellowship does and the difference it makes in the lives of its members every single day. Those undecided may still be brought into our family. We must Trust Our Brothers-yet-to-be. But most importantly, we must keep our enemies from spreading their prejudices against us. To do that we must show their beliefs to be untrue.\"");
	say();
	message("\"We must prove ourselves worthy of the trust we would have our fellow citizens\tplace in us. Once we have sufficiently displayed this worthiness, it will only be a matter of time before we receive our reward of trust. It is as inevitable as night following day. As our enemies will one day receive their own inevitable reward for which they have made themselves worthy.\"");
	say();
	message("\"Now I would like to hear from our members who have gathered here this evening. Share with us how The Fellowship has helped thee!\"");
	say();
	var0000 = Func08F7(0xFFAE);
	if (!var0000) goto labelFunc087B_0038;
	UI_show_npc_face(0xFFAE, 0x0000);
	message("\"The Fellowship has improved mine ability to run my business,\" says Gregor.*");
	say();
	UI_remove_npc_face(0xFFAE);
labelFunc087B_0038:
	var0001 = Func08F7(0xFFA6);
	if (!var0001) goto labelFunc087B_006A;
	UI_show_npc_face(0xFFA6, 0x0000);
	message("\"The Fellowship has taught me how to face mine own potential for greatness unquestioningly,\" says Owen.*");
	say();
	UI_show_npc_face(0xFFAF, 0x0000);
	message("\"Thank thee for sharing, brother!\"*");
	say();
	UI_remove_npc_face(0xFFA6);
labelFunc087B_006A:
	var0002 = Func08F7(0xFFA5);
	if (!var0002) goto labelFunc087B_008E;
	UI_show_npc_face(0xFFA5, 0x0000);
	message("You notice that Burnside has apparently nodded off. After a nudge from the person next to him, his eyes pop open. \"Umm... what was that question again...?\" he asks sheepishly.*");
	say();
	UI_remove_npc_face(0xFFA5);
labelFunc087B_008E:
	var0003 = Func08F7(0xFFA3);
	if (!var0003) goto labelFunc087B_00B2;
	UI_show_npc_face(0xFFA3, 0x0000);
	message("\"The Fellowship has helped me to have more courage to deal with the unexpected terrors of life,\" says William.*");
	say();
	UI_remove_npc_face(0xFFA3);
labelFunc087B_00B2:
	var0004 = Func08F7(0xFF9F);
	if (!var0004) goto labelFunc087B_00D6;
	UI_show_npc_face(0xFF9F, 0x0000);
	message("\"The Fellowship has helped me to have the firm hand that is necessary as the supervisor of the mine,\" says Mikos.*");
	say();
	UI_remove_npc_face(0xFF9F);
labelFunc087B_00D6:
	var0005 = Func08F7(0xFFFE);
	if (!var0005) goto labelFunc087B_00FA;
	UI_show_npc_face(0xFFFE, 0x0000);
	message("\"Everything about this Fellowship gives me the creeps!\" says Spark.*");
	say();
	UI_remove_npc_face(0xFFFE);
labelFunc087B_00FA:
	var0006 = Func08F7(0xFFFF);
	if (!var0006) goto labelFunc087B_011E;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("\"Elynor is certainly going out of her way to make them feel like they are persecuted,\" says Iolo.*");
	say();
	UI_remove_npc_face(0xFFFF);
labelFunc087B_011E:
	var0007 = Func08F7(0xFFFD);
	if (!var0007) goto labelFunc087B_0142;
	UI_show_npc_face(0xFFFD, 0x0000);
	message("\"These Fellowship members seem fixated upon their own personal gain and very little else,\" says Shamino.*");
	say();
	UI_remove_npc_face(0xFFFD);
labelFunc087B_0142:
	var0008 = Func08F7(0xFFFC);
	if (!var0008) goto labelFunc087B_0166;
	UI_show_npc_face(0xFFFC, 0x0000);
	message("\"Why are these people so fascinated by The Fellowship anyway? I do not understand it.\"*");
	say();
	UI_remove_npc_face(0xFFFC);
labelFunc087B_0166:
	UI_show_npc_face(0xFFAF, 0x0000);
	message("With that Elynor is once again the center of attention of the meeting. \"Let us now begin our evening's meditations.\" After a few minutes of silence you begin to realize\tthat this meditation is going to continue for quite some time and that now might be a good time to leave inconspicuously.*");
	say();
	abort;
	return;
}


