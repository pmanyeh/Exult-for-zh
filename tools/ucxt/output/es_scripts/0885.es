#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func090B 0x90B (var var0000);

void Func0885 0x885 ()
{
	var var0000;
	var var0001;

	if (!Func090A()) goto labelFunc0885_0084;
	message("\"What didst thou find?\"");
	say();
	UI_clear_answers();
	var0000 = ["nothing", "a bucket", "a body"];
	if (!gflags[0x003C]) goto labelFunc0885_002D;
	var0000 = (var0000 & "a key");
labelFunc0885_002D:
	var0001 = Func090B(var0000);
	if (!(var0001 == "a key")) goto labelFunc0885_0048;
	message("\"Hmmm, a key. Perhaps if thou dost ask Christopher's son about it, he may know what it is for.\"");
	say();
	gflags[0x0048] = true;
labelFunc0885_0048:
	if (!(var0001 == "a body")) goto labelFunc0885_005B;
	message("\"I know that! What -else- didst thou find? Thou shouldst look again, Avatar!\"*");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_005B:
	if (!(var0001 == "a bucket")) goto labelFunc0885_006E;
	message("\"Yes, obviously it is filled with poor Christopher's own blood. But surely there was something else that might point us in the direction of the killer or killers - thou shouldst look again, Avatar.\"*");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_006E:
	if (!(var0001 == "nothing")) goto labelFunc0885_0081;
	message("\"Thou shouldst look again, `Avatar'!\"*");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_0081:
	goto labelFunc0885_008D;
labelFunc0885_0084:
	message("\"Then I suggest that thou lookest inside and talkest to me again.\"*");
	say();
	gflags[0x005A] = true;
	abort;
labelFunc0885_008D:
	return;
}


