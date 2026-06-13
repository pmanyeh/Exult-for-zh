#game "serpentisle"
// externs
extern void Func095D 0x95D (var var0000);

void Func0823 0x823 ()
{
	var var0000;

	message("\"My cousin Longtooth has claimed to have stumped over 100 creatures with his riddles. My aunt says that he's blowing smoke, and that the number is probably less than 100. I say that he has probably stumped at least one creature with his riddles.\"");
	say();
	message("\"If only one of us is correct, how many creatures has Longtooth stumped with his riddles?\"");
	say();
	var0000 = UI_input_numeric_value(0x0000, 0x00C8, 0x0001, 0x0000);
	if (!(var0000 == 0x0000)) goto labelFunc0823_004C;
	if (!(!gflags[0x0307])) goto labelFunc0823_0041;
	message("\"Thou art correct! Longtooth is a great dragon, but he's lousy at riddling!\"");
	say();
	gflags[0x030B] = true;
	Func095D(0x00C8);
	gflags[0x0307] = true;
	goto labelFunc0823_0049;
labelFunc0823_0041:
	message("\"Thou art correct! Longtooth is a great dragon, but he's lousy at riddling!\"");
	say();
	gflags[0x030B] = true;
labelFunc0823_0049:
	goto labelFunc0823_0050;
labelFunc0823_004C:
	message("\"I am sorry, but that is not the correct answer.\"");
	say();
labelFunc0823_0050:
	return;
}


