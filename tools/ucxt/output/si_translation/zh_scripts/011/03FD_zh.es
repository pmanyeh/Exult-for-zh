#game "serpentisle"
// externs
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func03FD shape#(0x3FD) ()
{
	var var0000;
	var var0001;
	var var0002;

	UI_close_gumps();
	var0000 = UI_get_item_frame(item);
	if (!(event == 0x0001)) goto labelFunc03FD_0087;
	if (!(var0000 == 0x0003)) goto labelFunc03FD_0031;
	var0001 = Func0992(0x0001, "@It hath been picked clean.@", "@No more berries...@", true);
	goto labelFunc03FD_0087;
labelFunc03FD_0031:
	var0002 = UI_add_cont_items(0xFE9C, 0x0001, 0x0194, 0x0000, 0x0004, 0x0012);
	if (!(!var0002)) goto labelFunc03FD_0077;
	UI_set_item_frame(item, (var0000 + 0x0001));
	UI_play_sound_effect(0x000C);
	var0001 = Func0992(0x0001, "@Thou hast plucked a berry!@", "@I have a berry!@", true);
	goto labelFunc03FD_0087;
labelFunc03FD_0077:
	var0001 = Func0992(0x0001, "@But thine hands are full!@", "@I have no room for berries...@", true);
labelFunc03FD_0087:
	return;
}


