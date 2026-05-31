#game "blackgate"
// externs
extern var Func090A 0x90A ();

void Func08AE 0x8AE (var var0000)
{
	var var0001;

	var0001 = Func090A();
	if (!(!var0001)) goto labelFunc08AE_001F;
	message("\"");
	message(var0000);
	message(", I am sure that some brave soul will eventually come this way. After all, most of the spirits can wait for all eternity if need be, even if they are in excruciating pain.\" He looks a little disappointed as he says his goodbye. However, gratitude is still apparent in his eyes.*");
	say();
	gflags[0x01D1] = true;
	abort;
	goto labelFunc08AE_002B;
labelFunc08AE_001F:
	message("Horance looks as if he expected your response. \"I knew that one so virtuous as thou wouldst never turn aside while others suffer. Thy generosity seems to have no bounds.\"");
	say();
	gflags[0x01AC] = true;
	gflags[0x01D1] = false;
labelFunc08AE_002B:
	return;
}


