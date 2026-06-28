#game "blackgate"
// externs
extern void Func060F object#(0x60F) ();

void Func0639 object#(0x639) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0639_0035;
	UI_halt_scheduled(item);
	var0000 = UI_execute_usecode_array(item, [(byte)0x59, (byte)0x30, (byte)0x6D, (byte)0x27, 0x0001, (byte)0x52, "@Kal Ort Por@", (byte)0x61, (byte)0x6F, (byte)0x70, (byte)0x6A, (byte)0x55, 0x0639]);
labelFunc0639_0035:
	if (!(event == 0x0002)) goto labelFunc0639_0081;
	var0001 = UI_get_object_position(item);
	UI_sprite_effect(0x0007, var0001[0x0001], var0001[0x0002], 0x0000, 0x0000, 0x0002, 0xFFFF);
	item->Func060F();
	UI_set_schedule_type(item, 0x000F);
	UI_move_object(item, [0x05AA, 0x0500, 0x0000]);
labelFunc0639_0081:
	return;
}


