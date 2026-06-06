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
	message("你看到一位四十多歲、矮胖結實的男演員。他現在無法和你說話，因為他正專注於記誦受難劇的台詞。也許你該去和 Paul 談談。");
	say();
labelFunc04EB_0016:
	if (!(event == 0x0000)) goto labelFunc04EB_009D;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF15));
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x001D)) goto labelFunc04EB_0097;
	if (!(var0002 == 0x0001)) goto labelFunc04EB_005A;
	var0003 = "@來看受難劇！@";
labelFunc04EB_005A:
	if (!(var0002 == 0x0002)) goto labelFunc04EB_006A;
	var0003 = "@友誼會為您呈現...。@";
labelFunc04EB_006A:
	if (!(var0002 == 0x0003)) goto labelFunc04EB_007A;
	var0003 = "@快來看受難劇！@";
labelFunc04EB_007A:
	if (!(var0002 == 0x0004)) goto labelFunc04EB_008A;
	var0003 = "@我們將為您帶來娛樂！@";
labelFunc04EB_008A:
	UI_item_say(0xFF15, var0003);
	goto labelFunc04EB_009D;
labelFunc04EB_0097:
	Func092E(0xFF15);
labelFunc04EB_009D:
	return;
}


