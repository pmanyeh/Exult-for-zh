#game "serpentisle"
void Func03F5 shape#(0x3F5) ()
{
	if (!(event == 0x0005)) goto labelFunc03F5_0012;
	UI_infravision(UI_get_container(item), true);
labelFunc03F5_0012:
	if (!(event == 0x0006)) goto labelFunc03F5_0024;
	UI_infravision(UI_get_container(item), false);
labelFunc03F5_0024:
	return;
}


