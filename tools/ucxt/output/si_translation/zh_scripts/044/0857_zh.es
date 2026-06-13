#game "serpentisle"
// externs
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0857 0x857 ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = UI_count_objects(0xFE9B, 0x034A, 0xFE99, 0x000F);
	if (!(var0000 > 0x0001)) goto labelFunc0857_00B0;
	message("\"Thou dost have more than one! How many art thou willing to sell?\"");
	say();
	var0001 = UI_input_numeric_value(0x0000, var0000, 0x0001, 0x0000);
	if (!(var0001 != 0x0000)) goto labelFunc0857_00A9;
	var0000 = UI_remove_party_items(var0001, 0x034A, 0xFE99, 0x000F, 0x0000);
	var0002 = (0x0078 * var0001);
	var0000 = Func099B(0xFE9C, var0002, 0x03B8, 0xFE99, 0xFE99, 0x0000, true);
	if (!(var0001 == 0x0001)) goto labelFunc0857_0092;
	message("\"I will take thy Stoneheart and give thee ");
	message(var0002);
	message(" guilders for it...\"");
	say();
	message("\"There. 'Tis done!\"");
	say();
	goto labelFunc0857_00A6;
labelFunc0857_0092:
	message("\"I will take thy ");
	message(var0001);
	message(" Stonehearts and give thee ");
	message(var0002);
	message(" guilders for them...\"");
	say();
	message("\"There. 'Tis done!\"");
	say();
labelFunc0857_00A6:
	goto labelFunc0857_00AD;
labelFunc0857_00A9:
	message("\"But thou said thou wouldst sell the Stoneheart!\"");
	say();
labelFunc0857_00AD:
	goto labelFunc0857_00E3;
labelFunc0857_00B0:
	message("\"There. 'Tis done!\"");
	say();
	var0000 = UI_remove_party_items(0x0001, 0x034A, 0xFE99, 0x000F, 0x0000);
	var0000 = Func099B(0xFE9C, 0x0078, 0x03B8, 0xFE99, 0xFE99, 0x0000, true);
labelFunc0857_00E3:
	return;
}


