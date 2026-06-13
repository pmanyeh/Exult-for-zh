#game "serpentisle"
// externs
extern void Func094E 0x94E (var var0000, var var0001);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

var Func09AE 0x9AE (var var0000)
{
	var0000 = (var0000 - 0x0001);
	if (!(var0000 < 0x0000)) goto labelFunc09AE_01BD;
	if (!(item == UI_get_npc_object(0xFFCC))) goto labelFunc09AE_00A8;
	gflags[0x01A0] = true;
	if (!(UI_get_schedule_type(0xFFCC) == 0x0017)) goto labelFunc09AE_0052;
	Func094E(0xFFC6, "@I need a drink...@");
	UI_set_conversation_slot(0x0000);
	message("\"I've enjoyed jawin' with ye, mate, but I'd better be back to me duties...\"");
	say();
	Func097F(0xFFCC, "@What'll ye have?@", 0x0000);
labelFunc09AE_0052:
	if (!(UI_get_schedule_type(0xFFCC) == 0x0010)) goto labelFunc09AE_008A;
	if (!UI_npc_nearby(0xFFCA)) goto labelFunc09AE_007A;
	Func094E(0xFFCA, "@Be still! Beauty is not irreverent.@");
	UI_set_conversation_slot(0x0000);
labelFunc09AE_007A:
	message("\"This isn't the place for a long talk, mate. Meet me later, back at the tavern, and we'll talk more.\"");
	say();
	Func097F(0xFFCC, "@Not now...@", 0x0000);
labelFunc09AE_008A:
	if (!(UI_get_schedule_type(0xFFCC) == 0x000E)) goto labelFunc09AE_00A8;
	message("\"Better we talk in the morning, mate. As for right now, I'm goin' back to sleep...\"");
	say();
	Func097F(0xFFCC, "@Time for bed!@", 0x0000);
labelFunc09AE_00A8:
	if (!(item == UI_get_npc_object(0xFFF3))) goto labelFunc09AE_0103;
	Func097F(0xFFF3, "@Have a nice day!@", 0x0000);
	gflags[0x0103] = true;
	if (!(UI_get_schedule_type(0xFFF3) == 0x0007)) goto labelFunc09AE_00FF;
	Func094E(0xFFD6, "@I do not pay thee to stand jabbering, Bucia.@");
	UI_set_conversation_slot(0x0000);
	message("\"I must be getting back to work now. But it hath been nice talking with thee.\"");
	say();
	if (!(UI_get_npc_id(0xFFF3) < 0x000F)) goto labelFunc09AE_00FC;
	message("\"If thou wert to be at the Blue Boar Inn at 10 tonight, I could discuss these things further with thee...\"");
	say();
	gflags[0x013E] = true;
labelFunc09AE_00FC:
	goto labelFunc09AE_0103;
labelFunc09AE_00FF:
	message("\"It is getting late! I have truly enjoyed our talk, but I think I shall eat my dinner now.\"");
	say();
labelFunc09AE_0103:
	if (!(item == UI_get_npc_object(0xFFBD))) goto labelFunc09AE_016F;
	gflags[0x0097] = true;
	if (!(gflags[0x005B] && (!gflags[0x0047]))) goto labelFunc09AE_012D;
	Func097F(0xFFBD, "@Remember Cantra...@", 0x0000);
	goto labelFunc09AE_0139;
labelFunc09AE_012D:
	Func097F(0xFFBD, "@Courage to thee!@", 0x0000);
labelFunc09AE_0139:
	if (!(UI_get_schedule_type(0xFFBD) == 0x0006)) goto labelFunc09AE_014B;
	message("\"I must return to my duties. These crops will not wait!\"");
	say();
labelFunc09AE_014B:
	if (!(UI_get_schedule_type(0xFFBD) == 0x0005)) goto labelFunc09AE_015D;
	message("\"Pardon me, but my dinner is wasting. We can talk again later.\"");
	say();
labelFunc09AE_015D:
	if (!(UI_get_schedule_type(0xFFBD) == 0x000E)) goto labelFunc09AE_016F;
	message("\"I must get some sleep! Thou shouldst return tomorrow...\"");
	say();
labelFunc09AE_016F:
	if (!(item == UI_get_npc_object(0x03B2))) goto labelFunc09AE_01B5;
	gflags[0x02F4] = true;
	if (!(UI_get_schedule_type(0x03B2) == 0x0015)) goto labelFunc09AE_0191;
	message("\"I must return to my duties...\"");
	say();
labelFunc09AE_0191:
	if (!(UI_get_schedule_type(0x03B2) == 0x0005)) goto labelFunc09AE_01A3;
	message("\"I am sorry, but my dinner is waiting. We can talk again later.\"");
	say();
labelFunc09AE_01A3:
	if (!(UI_get_schedule_type(0x03B2) == 0x000E)) goto labelFunc09AE_01B5;
	message("\"I need rest! Return tomorrow...\"");
	say();
labelFunc09AE_01B5:
	UI_set_timer(0x0002);
	abort;
labelFunc09AE_01BD:
	return var0000;
	return 0;
}


