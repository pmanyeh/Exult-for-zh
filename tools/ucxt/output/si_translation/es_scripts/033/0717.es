#game "serpentisle"
void Func0717 object#(0x717) ()
{
	if (!(UI_get_weather() == 0x0003)) goto labelFunc0717_0015;
	UI_set_weather(0x0000);
	goto labelFunc0717_001C;
labelFunc0717_0015:
	UI_set_weather(0x0003);
labelFunc0717_001C:
	return;
}


