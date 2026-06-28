#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func06FA object#(0x6FA) ()
{
	if (!(UI_get_item_shape(item) == 0x0113)) goto labelFunc06FA_0012;
	Func08FF("「看来附近的岛屿一点也不稳定。」");
labelFunc06FA_0012:
	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc06FA_002E;
	Func08FF("「不列颠尼亚似乎有些不对劲。也许不列颠王会知道这场地震背后的原因。」");
labelFunc06FA_002E:
	return;
}


