#game "serpentisle"
// externs
extern var Func08A0 0x8A0 (var var0000);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func08A5 0x8A5 ()
{
	var var0000;

	var0000 = Func08A0(0x0001);
	UI_item_say(var0000, "@Happy happy!@");
	var0000 = Func08A0(0x0001);
	Func097F(var0000, "@Joy joy!@", 0x0003);
	gflags[0x02CB] = true;
	return;
}


