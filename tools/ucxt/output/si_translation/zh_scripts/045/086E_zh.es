#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func086E 0x86E ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;

	var0000 = UI_count_objects(0xFE9B, 0x02F8, 0xFE99, 0xFE99);
	message("\"Ah, thou dost wish to sell me gems? But, of course I will buy all that thou dost have! Master Ducio has a constant need for gems in his most important works! I will buy gems from thee for 100 guilders each.\"");
	say();
	message("\"How many gems wouldst thou like to sell?\"");
	say();
	if (!(var0000 != 0x0000)) goto labelFunc086E_00B3;
	var0001 = UI_input_numeric_value(0x0000, var0000, 0x0001, 0x0000);
	if (!(var0001 != 0x0000)) goto labelFunc086E_00AC;
	var0002 = (var0001 * 0x0064);
	var0003 = 0x03B8;
	var0004 = "gems";
	if (!(var0001 == 0x0001)) goto labelFunc086E_0068;
	var0004 = "gem";
labelFunc086E_0068:
	var0005 = UI_remove_party_items(var0001, 0x02F8, 0xFE99, 0xFE99, false);
	message("\"Very well...~Here, take thy ");
	message(var0002);
	message(" guilders, and I wilt take thy ");
	message(var0001);
	message(" ");
	message(var0004);
	message(" in exchange.\"");
	say();
	var0006 = Func099B(0xFE9C, var0002, var0003, 0xFE99, 0xFE99, false, true);
	goto labelFunc086E_00B0;
labelFunc086E_00AC:
	message("\"Perhaps another time, then...\"");
	say();
labelFunc086E_00B0:
	goto labelFunc086E_00B7;
labelFunc086E_00B3:
	message("\"Thou dost not have any gems to sell!\"");
	say();
labelFunc086E_00B7:
	return;
}


