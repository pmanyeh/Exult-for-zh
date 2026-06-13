#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);

void Func072F object#(0x72F) ()
{
	var var0000;
	var var0001;
	var var0002;

	if (!(event == 0x0003)) goto labelFunc072F_0067;
	if (!(gflags[0x02AB] && (gflags[0x02AC] && (gflags[0x02AD] && (gflags[0x02AE] && (gflags[0x02AF] && gflags[0x02B0])))))) goto labelFunc072F_0067;
	if (!(!Func097D(0xFE9B, 0x0001, 0x02C1, 0x00F1, 0xFE99))) goto labelFunc072F_0067;
	var0000 = UI_create_new_object(0x02C1);
	if (!var0000) goto labelFunc072F_0067;
	var0001 = UI_set_item_quality(var0000, 0x00F1);
	var0002 = UI_get_object_position(item);
	var0001 = UI_update_last_created(var0002);
labelFunc072F_0067:
	return;
}


