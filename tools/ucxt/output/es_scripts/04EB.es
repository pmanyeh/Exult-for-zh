#game "blackgate"
// externs
extern void Func092E 0x92E (var var0000);

void Func04EB object#(0x4EB) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04EB_0016;
	UI_show_npc_face(0xFF15, 0x0000);
	message("You see a short, stocky actor in his mid- to late forties. He cannot speak to you now because he is concentrating on his lines for the Passion Play. Perhaps you should speak to Paul.");
	say();
labelFunc04EB_0016:
	if (!(event == 0x0000)) goto labelFunc04EB_009D;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF15));
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x001D)) goto labelFunc04EB_0097;
	if (!(var0002 == 0x0001)) goto labelFunc04EB_005A;
	var0003 = "@See the Passion Play!@";
labelFunc04EB_005A:
	if (!(var0002 == 0x0002)) goto labelFunc04EB_006A;
	var0003 = "@The Fellowship presents...@";
labelFunc04EB_006A:
	if (!(var0002 == 0x0003)) goto labelFunc04EB_007A;
	var0003 = "@Come view the Passion Play!@";
labelFunc04EB_007A:
	if (!(var0002 == 0x0004)) goto labelFunc04EB_008A;
	var0003 = "@We shall entertain thee!@";
labelFunc04EB_008A:
	UI_item_say(0xFF15, var0003);
	goto labelFunc04EB_009D;
labelFunc04EB_0097:
	Func092E(0xFF15);
labelFunc04EB_009D:
	return;
}


