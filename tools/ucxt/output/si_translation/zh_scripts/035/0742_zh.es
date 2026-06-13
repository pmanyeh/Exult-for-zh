#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0742 object#(0x742) ()
{
	var var0000;

	UI_error_message(["WARNING: remove this egg at ", UI_get_object_position(item)]);
	abort;
	if (!(event == 0x0003)) goto labelFunc0742_006F;
	var0000 = Func097D(0xFE9B, 0x0001, 0x01DF, 0xFE99, 0x0002);
	if (!var0000) goto labelFunc0742_003F;
	gflags[0x025E] = true;
	UI_remove_item(item);
	goto labelFunc0742_006F;
labelFunc0742_003F:
	var0000 = Func097D(0xFE9B, 0x0001, 0x022F, 0xFE99, 0x0001);
	if (!var0000) goto labelFunc0742_006F;
	gflags[0x025E] = true;
	UI_remove_item(item);
	Func097F(0xFE9C, "@Smell that clean air!@", 0x0003);
labelFunc0742_006F:
	return;
}


