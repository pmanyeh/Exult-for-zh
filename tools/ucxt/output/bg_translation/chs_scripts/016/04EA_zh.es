#game "blackgate"
// externs
extern void Func092E 0x92E (var var0000);

void Func04EA object#(0x4EA) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	if (!(event == 0x0001)) goto labelFunc04EA_0016;
	UI_show_npc_face(0xFF16, 0x0000);
	message("你看到一位表情非常严肃的中年女演员。她无法和你说话，因为她正专注于受难剧中她扮演的角色。也许你该去和 Paul 谈谈。*");
	say();
labelFunc04EA_0016:
	if (!(event == 0x0000)) goto labelFunc04EA_009D;
	var0000 = UI_part_of_day();
	var0001 = UI_get_schedule_type(UI_get_npc_object(0xFF16));
	var0002 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x001D)) goto labelFunc04EA_0097;
	if (!(var0002 == 0x0001)) goto labelFunc04EA_005A;
	var0003 = "@来看受难剧！@";
labelFunc04EA_005A:
	if (!(var0002 == 0x0002)) goto labelFunc04EA_006A;
	var0003 = "@友谊会为您呈现...。@";
labelFunc04EA_006A:
	if (!(var0002 == 0x0003)) goto labelFunc04EA_007A;
	var0003 = "@快来看受难剧！@";
labelFunc04EA_007A:
	if (!(var0002 == 0x0004)) goto labelFunc04EA_008A;
	var0003 = "@我们将为您带来娱乐！@";
labelFunc04EA_008A:
	UI_item_say(0xFF16, var0003);
	goto labelFunc04EA_009D;
labelFunc04EA_0097:
	Func092E(0xFF16);
labelFunc04EA_009D:
	return;
}


