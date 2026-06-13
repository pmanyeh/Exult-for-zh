#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0822 0x822 ()
{
	var var0000;

	message("\"A young noblewoman is getting ready for the Royal Ball. She has several types of earrings in her jewelry box (two made of gold, three of silver, and four made of copper).\"");
	say();
	message("\"The earrings, however, are all scattered about in the jewelry box.\"");
	say();
	message("\"Without looking into the jewelry box, how many earrings would the noblewoman have to take\tout of the jewelry box to insure a matched pair?\"");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x000A, 0x0001, 0x0000);
	if (!(var0000 == 0x0004)) goto labelFunc0822_0050;
	if (!(!gflags[0x0306])) goto labelFunc0822_0045;
	message("\"Thou art corrcet!\"");
	say();
	gflags[0x030A] = true;
	Func095D(0x0096);
	gflags[0x0306] = true;
	goto labelFunc0822_004D;
labelFunc0822_0045:
	message("\"Thou art correct!\"");
	say();
	gflags[0x030A] = true;
labelFunc0822_004D:
	goto labelFunc0822_0054;
labelFunc0822_0050:
	message("\"I'm sorry, but that is not the correct answer.\"");
	say();
labelFunc0822_0054:
	return;
}


