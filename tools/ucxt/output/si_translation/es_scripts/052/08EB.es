#game "serpentisle"
// externs
extern var Func08EA 0x8EA (var var0000);

var Func08EB 0x8EB (var var0000, var var0001)
{
	var var0002;
	var var0003;
	var var0004;

	var0002 = 0x0000;
	var0003 = 0x0001;
	var0004 = var0000;
labelFunc08EB_0012:
	if (!(var0002 < var0001)) goto labelFunc08EB_0033;
	var0004 = (var0004 / 0x0002);
	var0002 = (var0002 + 0x0001);
	goto labelFunc08EB_0012;
labelFunc08EB_0033:
	return Func08EA(var0004);
	return 0;
}


