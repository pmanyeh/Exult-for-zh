#game "blackgate"
// externs
extern var Func0906 0x906 ();

void Func0657 object#(0x657) ()
{
	var var0000;
	var var0001;

	if (!(event == 0x0001)) goto labelFunc0657_004E;
	UI_item_say(item, "@Por Ort Wis@");
	UI_play_sound_effect(150);
	if (!Func0906()) goto labelFunc0657_0036;
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x58, 0x0043, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0657]);
	goto labelFunc0657_004E;
labelFunc0657_0036:
	var0000 = UI_execute_usecode_array(item, [(byte)0x6F, (byte)0x70, (byte)0x6F, (byte)0x6A, (byte)0x55, 0x0606]);
labelFunc0657_004E:
	if (!(event == 0x0002)) goto labelFunc0657_0068;
	var0001 = UI_get_object_position(item);
	UI_wizard_eye(0x002D, 0x00C8);
labelFunc0657_0068:
	return;
}


