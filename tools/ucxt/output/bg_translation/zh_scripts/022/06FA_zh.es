#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func06FA object#(0x6FA) ()
{
	if (!(UI_get_item_shape(item) == 0x0113)) goto labelFunc06FA_0012;
	Func08FF("「看來附近的島嶼一點也不穩定。」");
labelFunc06FA_0012:
	if (!((UI_get_item_shape(item) == 0x02D1) || (UI_get_item_shape(item) == 0x03DD))) goto labelFunc06FA_002E;
	Func08FF("「Britannia 似乎有些不對勁。也許 Lord British 會知道這場地震背後的原因。」");
labelFunc06FA_002E:
	return;
}


