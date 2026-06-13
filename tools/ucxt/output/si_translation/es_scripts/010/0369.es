#game "serpentisle"
// externs
extern void Func088D 0x88D (var var0000, var var0001);

void Func0369 shape#(0x369) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc0369_001E;
	var0000 = UI_get_container(item);
	if (!var0000) goto labelFunc0369_0017;
	return;
labelFunc0369_0017:
	Func088D(item, 0x0369);
labelFunc0369_001E:
	return;
}


