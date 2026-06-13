#game "serpentisle"
// externs
extern void Func02C0 shape#(0x2C0) ();

void Func020A shape#(0x20A) ()
{
	if (!(event == 0x0001)) goto labelFunc020A_0010;
	UI_item_say(item, "Locked");
labelFunc020A_0010:
	if (!(UI_get_item_quality(item) == 0x00FF)) goto labelFunc020A_0020;
	item->Func02C0();
labelFunc020A_0020:
	return;
}


