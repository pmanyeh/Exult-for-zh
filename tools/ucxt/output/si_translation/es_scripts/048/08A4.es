#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func08A4 0x8A4 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = 0x0001;
	var0001 = UI_get_party_list();
	var0002 = ["Ohh, ahh!", "That feels wonderful!", "Do thou that again!", "'Tis a marvel!", "More! More!", "Wondrous!", "What a sensation!"];
	enum();
labelFunc08A4_0029:
	for (var0005 in var0001 with var0003 to var0004) attend labelFunc08A4_0079;
	var0006 = UI_get_object_position(var0005);
	UI_sprite_effect(0x0015, var0006[0x0001], var0006[0x0002], 0x0000, 0x0000, 0x0000, 0xFFFF);
	Func097F(var0005, var0002[var0000], var0000);
	var0000 = (var0000 + 0x0001);
	goto labelFunc08A4_0029;
labelFunc08A4_0079:
	gflags[0x02CA] = true;
	return;
}


