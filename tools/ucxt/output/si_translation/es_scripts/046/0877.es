#game "serpentisle"
// externs
extern var Func0953 0x953 ();
extern var Func099B 0x99B (var var0000, var var0001, var var0002, var var0003, var var0004, var var0005, var var0006);

void Func0877 0x877 ()
{
	var var0000;
	var var0001;

	var0000 = Func0953();
	if (!(gflags[0x01FD] == true)) goto labelFunc0877_0015;
	message("\"To be honored to see you, Avatar of Virtue! To be certain that you are the Hero we have dreamed about.\"");
	say();
	goto labelFunc0877_001F;
labelFunc0877_0015:
	message("\"To be certain that you are the Hero we have dreamed about, ");
	message(var0000);
	message(".\"");
	say();
labelFunc0877_001F:
	message("\"To be relieved that you came before the dreaming sickness spread. To have feared that none would remain awake to give you the ring. Now it is yours.\"");
	say();
	var0001 = Func099B(0xFE9C, 0x0001, 0x0377, 0xFE99, 0x0001, false, true);
	gflags[0x0207] = true;
	UI_add_answer(["information", "aid", "dreaming sickness"]);
	return;
}


