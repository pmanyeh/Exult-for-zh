#game "blackgate"
// externs
extern void Func08FF 0x8FF (var var0000);

void Func02DF shape#(0x2DF) ()
{
	var var0000;

	if (!(event == 0x0001)) goto labelFunc02DF_001C;
	var0000 = (("@I believe those are for the trainers to use.*" + "If thou art in need of practice, why not ") + "seek out a trainer?@");
	Func08FF(var0000);
labelFunc02DF_001C:
	return;
}


