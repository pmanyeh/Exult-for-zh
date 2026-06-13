#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern void Func08FF 0x8FF (var var0000);
extern void Func08FD 0x8FD (var var0000);

void Func0929 0x929 ()
{
	var var0000;
	var var0001;

	var0000 = Func0908();
	var0001 = UI_die_roll(0x0001, 0x0003);
	if (!(var0001 == 0x0001)) goto labelFunc0929_002C;
	Func08FF(["如果你把它拿在手裡去打人，你可能會更成功……", "我是說打別人。"]);
	goto labelFunc0929_0032;
labelFunc0929_002C:
	Func08FD(0x0000);
labelFunc0929_0032:
	return;
}


