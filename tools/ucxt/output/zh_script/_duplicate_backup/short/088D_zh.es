#game "blackgate"
// externs
extern var Func08F7 0x8F7 (var var0000);

void Func088D 0x88D ()
{
	var var0000;
	var var0001;

	var0000 = Func08F7(0xFFFF);
	if (!var0000) goto labelFunc088D_0046;
	UI_show_npc_face(0xFFFF, 0x0000);
	message("你感覺還好嗎？");
	say();
	UI_show_npc_face(0xFFEB, 0x0000);
	message("Gargan 咳嗽、喘息，然後點燃了他的煙斗。一吸氣，他就開始痙攣性地咳嗽，直到最後才喘過氣來。");
	say();
	message("從來沒有感覺這麼好。");
	say();
	UI_remove_npc_face(0xFFFF);
	UI_show_npc_face(0xFFEB, 0x0000);
	var0001 = 0x0000;
labelFunc088D_0046:
	return;
}


