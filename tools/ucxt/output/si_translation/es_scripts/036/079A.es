#game "serpentisle"
// externs
extern void Func0982 0x982 (var var0000, var var0001);

void Func079A object#(0x79A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	if (!(event == 0x0003)) goto labelFunc079A_003C;
	var0000 = UI_get_party_list();
	var0001 = UI_get_item_quality(item);
	enum();
labelFunc079A_0018:
	for (var0004 in var0000 with var0002 to var0003) attend labelFunc079A_003C;
	var0005 = UI_die_roll(0x0001, var0001);
	Func0982(var0004, var0005);
	goto labelFunc079A_0018;
labelFunc079A_003C:
	return;
}


