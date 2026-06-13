#game "serpentisle"
// externs
extern var Func0954 0x954 ();
extern var Func0956 0x956 (var var0000);

void Func09B1 0x9B1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;

	var0000 = Func0954();
	message("\"If thou didst enjoy my song, I would appreciate a small contribution to my room and board.\"");
	say();
	var0001 = Func0956(["Nothing", "Monetari", "Guilders", "Filari", "Gold Coins"]);
	if (!(var0001 == "Monetari")) goto labelFunc09B1_0032;
	var0002 = 0x03B7;
labelFunc09B1_0032:
	if (!(var0001 == "Guilders")) goto labelFunc09B1_0042;
	var0002 = 0x03B8;
labelFunc09B1_0042:
	if (!(var0001 == "Filari")) goto labelFunc09B1_0052;
	var0002 = 0x03B4;
labelFunc09B1_0052:
	if (!(var0001 == "Gold Coins")) goto labelFunc09B1_0062;
	var0002 = 0x0284;
labelFunc09B1_0062:
	if (!(var0001 == "Nothing")) goto labelFunc09B1_0072;
	var0002 = 0x0284;
labelFunc09B1_0072:
	var0003 = UI_count_objects(0xFE9B, var0002, 0xFE99, 0xFE99);
	if (!(var0001 != "Nothing")) goto labelFunc09B1_00FF;
	if (!(var0003 != 0x0000)) goto labelFunc09B1_00EC;
	var0004 = UI_input_numeric_value(0x0000, var0003, 0x0001, 0x0000);
	if (!(var0004 >= 0x0001)) goto labelFunc09B1_00E4;
	var0005 = UI_remove_party_items(var0004, var0002, 0xFE99, 0xFE99, false);
	message("\"Many thanks, ");
	message(var0000);
	message(". Perhaps thou wouldst care to hear another song. Or, if thou art tired, I can return later...\"");
	say();
	UI_add_answer(["song", "bye"]);
	goto labelFunc09B1_00E9;
labelFunc09B1_00E4:
	message("\"Perhaps some other time...\"");
	say();
	abort;
labelFunc09B1_00E9:
	goto labelFunc09B1_00FC;
labelFunc09B1_00EC:
	message("\"I am afraid thy purse is empty of ");
	message(var0001);
	message(", ");
	message(var0000);
	message(".\"");
	say();
labelFunc09B1_00FC:
	goto labelFunc09B1_0104;
labelFunc09B1_00FF:
	message("\"Very well... then I shall play no more.\"");
	say();
	abort;
labelFunc09B1_0104:
	return;
}


