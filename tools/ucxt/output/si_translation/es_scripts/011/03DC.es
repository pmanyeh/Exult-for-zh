#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);

void Func03DC shape#(0x3DC) ()
{
	var var0000;
	var var0001;

	if (!(!gflags[0x012A])) goto labelFunc03DC_000F;
	UI_play_sound_effect(0x0030);
	abort;
labelFunc03DC_000F:
	if (!Func097D(0xFE9B, 0x0001, 0x03DC, 0xFE99, 0xFE99)) goto labelFunc03DC_002C;
	UI_play_sound_effect(0x0030);
	abort;
labelFunc03DC_002C:
	UI_close_gumps();
	UI_play_sound_effect(0x001B);
	Func097F(0xFE9C, "@Yleg Ort!@", 0x0000);
	UI_obj_sprite_effect(item, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_set_item_frame(item, (UI_get_random(0x0008) - 0x0001));
	if (!(UI_get_random(0x0003) == 0x0001)) goto labelFunc03DC_00C4;
	var0000 = ["@Let us go!@", "@It shows the way!@", "@Try again.@", "@That direction?@", "@Is it broken?@", "@I do not think it works.@"];
	var0001 = Func0992(0x0001, 0x0000, 0x0000, true);
	if (!(var0001 != 0xFE9C)) goto labelFunc03DC_00C4;
	Func097F(var0001, var0000[UI_get_random(UI_get_array_size(var0000))], 0x0005);
labelFunc03DC_00C4:
	return;
}


