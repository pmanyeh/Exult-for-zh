#game "serpentisle"
// externs
extern void Func08E8 0x8E8 ();
extern void Func08E9 0x8E9 ();

void Func071C object#(0x71C) ()
{
	var var0000;

	if (!(event == 0x0003)) goto labelFunc071C_0157;
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x0000)) goto labelFunc071C_0096;
	if (!((!gflags[0x022E]) && ((!gflags[0x0230]) && ((!gflags[0x0231]) && ((!gflags[0x022F]) && (!gflags[0x0232])))))) goto labelFunc071C_0058;
	gflags[0x022E] = true;
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071C_0096;
labelFunc071C_0058:
	if (!(gflags[0x022E] && (gflags[0x0230] && (gflags[0x0231] && ((!gflags[0x022F]) && (!gflags[0x0232])))))) goto labelFunc071C_0093;
	gflags[0x022F] = true;
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071C_0096;
labelFunc071C_0093:
	Func08E8();
labelFunc071C_0096:
	if (!(var0000 == 0x0001)) goto labelFunc071C_00E0;
	if (!(gflags[0x022E] && ((!gflags[0x0230]) && ((!gflags[0x0231]) && ((!gflags[0x022F]) && (!gflags[0x0232])))))) goto labelFunc071C_00DD;
	gflags[0x0230] = true;
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071C_00E0;
labelFunc071C_00DD:
	Func08E8();
labelFunc071C_00E0:
	if (!(var0000 == 0x0002)) goto labelFunc071C_0129;
	if (!(gflags[0x022E] && (gflags[0x0230] && ((!gflags[0x0231]) && ((!gflags[0x022F]) && (!gflags[0x0232])))))) goto labelFunc071C_0126;
	gflags[0x0231] = true;
	UI_obj_sprite_effect(0xFE9C, 0x0015, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	goto labelFunc071C_0129;
labelFunc071C_0126:
	Func08E8();
labelFunc071C_0129:
	if (!(var0000 == 0x0003)) goto labelFunc071C_0157;
	if (!(gflags[0x022E] && (gflags[0x0230] && (gflags[0x0231] && (gflags[0x022F] && (!gflags[0x0232])))))) goto labelFunc071C_0154;
	gflags[0x0232] = true;
	Func08E9();
	goto labelFunc071C_0157;
labelFunc071C_0154:
	Func08E8();
labelFunc071C_0157:
	return;
}


