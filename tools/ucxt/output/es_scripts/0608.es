#game "blackgate"
// externs
extern void Func0941 0x941 (var var0000);
extern void Func0911 0x911 (var var0000);

void Func0608 object#(0x608) ()
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

	if (!(event == 0x0003)) goto labelFunc0608_0130;
	Func0941(0x000D);
	var0000 = UI_is_pc_female();
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"Avatar! Stop where thou art! Thou shalt not succeed in thy quest to destroy the Black Gate! Art thou mad??! The Guardian is much too powerful for thee! He shall crush thee like an insect! The fate of Britannia now belongs to him and to The Fellowship! The Guardian is the land's true ruler! Bow down to him, Avatar, and perhaps he shall give thee a place at his side. Bow down to him -now-!\"*");
	say();
	UI_remove_npc_face(0xFFE6);
	UI_show_npc_face(0xFEEF, 0x0000);
	if (!var0000) goto labelFunc0608_004F;
	var0001 = "She";
	var0002 = "her";
	var0003 = "her";
	goto labelFunc0608_0061;
labelFunc0608_004F:
	var0001 = "He";
	var0002 = "his";
	var0003 = "him";
labelFunc0608_0061:
	message("Hook points to you.");
	say();
	message("\"I say -kill- the Avatar! ");
	message(var0001);
	message(" is dangerous! Cut ");
	message(var0002);
	message(" throat! I say we attack -now-!\"*");
	say();
	UI_remove_npc_face(0xFEEF);
	UI_show_npc_face(0xFEEE, 0x0000);
	message("Forskis shouts, \"To kill! To kill!\"*");
	say();
	UI_remove_npc_face(0xFEEE);
	UI_show_npc_face(0xFEED, 0x0000);
	message("Abraham yells, \"Let us make fish bait out of ");
	message(var0003);
	message("!\"*");
	say();
	UI_remove_npc_face(0xFEED);
	UI_show_npc_face(0xFEEC, 0x0000);
	message("\"Death to the Avatar! Long live The Guardian!\" screams Elizabeth.*");
	say();
	UI_remove_npc_face(0xFEEC);
	UI_show_npc_face(0xFFE6, 0x0000);
	message("\"So be it! The Fellowship hereby sentences the Avatar to immediate death! Kill ");
	message(var0003);
	message(" now!\"*");
	say();
	UI_remove_npc_face(0xFFE6);
	var0004 = [0x0193, 0x01FA, 0x0325, 0x0372, 0x0371];
	enum();
labelFunc0608_00F2:
	for (var0007 in var0004 with var0005 to var0006) attend labelFunc0608_012A;
	var0008 = UI_find_nearby(item, var0007, 0x001E, 0x0000);
	enum();
labelFunc0608_010F:
	for (var000B in var0008 with var0009 to var000A) attend labelFunc0608_0127;
	UI_set_schedule_type(var000B, 0x0000);
	goto labelFunc0608_010F;
labelFunc0608_0127:
	goto labelFunc0608_00F2;
labelFunc0608_012A:
	Func0911(0x2710);
labelFunc0608_0130:
	return;
}


