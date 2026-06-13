#game "serpentisle"
// externs
extern var Func0994 0x994 ();
extern void Func094A 0x94A (var var0000);
extern var Func0880 0x880 (var var0000);
extern void Func0624 object#(0x624) ();
extern var Func0988 0x988 (var var0000, var var0001);

void Func087F 0x87F (var var0000)
{
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;
	var var000A;
	var var000B;

	UI_close_gumps();
	gflags[0x02D1] = false;
	var0001 = Func0994();
	if (!(var0001 == 0x001F)) goto labelFunc087F_002E;
	Func094A("I am weary, but I cannot fall asleep. It must be because I am already in the realm of dreams.");
	if (!Func0880(var0000)) goto labelFunc087F_002D;
	var0000->Func0624();
labelFunc087F_002D:
	abort;
labelFunc087F_002E:
	if (!UI_in_combat()) goto labelFunc087F_004D;
	Func094A("This is no time to sleep! Rouse thy bones!");
	if (!Func0880(var0000)) goto labelFunc087F_004A;
	var0000->Func0624();
labelFunc087F_004A:
	goto labelFunc087F_012D;
labelFunc087F_004D:
	var0002 = UI_get_item_frame(var0000);
	var0003 = UI_get_item_shape(var0000);
	if (!((var0002 > 0x0003) && (!Func0880(var0000)))) goto labelFunc087F_00ED;
	var0004 = UI_get_object_position(var0000);
	var0005 = UI_find_nearby(var0000, var0003, 0x0002, 0x0000);
	enum();
labelFunc087F_0091:
	for (var0008 in var0005 with var0006 to var0007) attend labelFunc087F_00ED;
	if (!(UI_get_item_frame(var0008) <= 0x0002)) goto labelFunc087F_00EA;
	var0009 = UI_get_object_position(var0008);
	if (!((var0009[0x0001] == var0004[0x0001]) && ((var0009[0x0002] == var0004[0x0002]) && ((var0009[0x0003] + 0x0001) == var0004[0x0003])))) goto labelFunc087F_00EA;
	var0000 = var0008;
labelFunc087F_00EA:
	goto labelFunc087F_0091;
labelFunc087F_00ED:
	if (!Func0880(item)) goto labelFunc087F_010B;
	var000A = UI_execute_usecode_array(0xFE9C, [(byte)0x23, (byte)0x54, 0x0015, 0x0000]);
labelFunc087F_010B:
	var000B = Func0988(UI_get_npc_object(0xFE9C), UI_get_party_list());
	UI_set_schedule_type(0xFE9C, 0x000E);
	UI_nap_time(var0000);
labelFunc087F_012D:
	return;
}


