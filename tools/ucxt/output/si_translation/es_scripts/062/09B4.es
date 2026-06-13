#game "serpentisle"
// externs
extern var Func0956 0x956 (var var0000);
extern void Func09AC 0x9AC (var var0000, var var0001, var var0002, var var0003);

void Func09B4 0x9B4 (var var0000)
{
	var var0001;
	var var0002;

	var0001 = UI_get_object_position(var0000);
	if (!(var0001[0x0003] != 0x0000)) goto labelFunc09B4_016A;
	if (!(var0000 == 0xFF6B)) goto labelFunc09B4_0046;
	UI_set_schedule_type(var0000, 0x000F);
	message("\"We must plan for every eventuality, Avatar. Should I not be able to remain here, I shall await thee on Monk Isle.\"");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001E, [0x0977, 0x048C]);
	abort;
labelFunc09B4_0046:
	if (!(var0000 == 0xFFE4)) goto labelFunc09B4_0066;
	UI_set_schedule_type(var0000, 0x000F);
	message("\"If I cannot remain here, I shall go home to the inn. Thou canst always find me there.\"");
	say();
	UI_revert_schedule(0xFFE4);
	abort;
labelFunc09B4_0066:
	UI_set_schedule_type(var0000, 0x000F);
	message("\"I shall attempt to wait for thee here, but if I cannot, where shall we meet?\"");
	say();
	var0002 = "Monk Isle";
	if (!gflags[0x01CC]) goto labelFunc09B4_00A8;
	if (!gflags[0x01FE]) goto labelFunc09B4_009B;
	var0002 = (var0002 & ("Fawn" & ("Monitor" & "Moonshade")));
	goto labelFunc09B4_00A5;
labelFunc09B4_009B:
	var0002 = (var0002 & "Moonshade");
labelFunc09B4_00A5:
	goto labelFunc09B4_00CF;
labelFunc09B4_00A8:
	if (!gflags[0x02C3]) goto labelFunc09B4_00B8;
	var0002 = (var0002 & "Monitor");
labelFunc09B4_00B8:
	if (!UI_get_item_flag(0xFFC5, 0x001C)) goto labelFunc09B4_00CF;
	var0002 = (var0002 & "Fawn");
labelFunc09B4_00CF:
	var0001 = Func0956(var0002);
	if (!(var0001 == "Monitor")) goto labelFunc09B4_00FF;
	message("\"Then in an emergency, I shall find thee at the Town Hall in Monitor.\"");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x000C, [0x03D0, 0x09FA]);
	goto labelFunc09B4_0167;
labelFunc09B4_00FF:
	if (!(var0001 == "Moonshade")) goto labelFunc09B4_0126;
	message("\"If I cannot remain here, we shall meet at the Blue Boar Inn in Moonshade.\"");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x08C1, 0x0710]);
	goto labelFunc09B4_0167;
labelFunc09B4_0126:
	if (!(var0001 == "Fawn")) goto labelFunc09B4_014D;
	message("\"If I cannot stay here, I shall travel to Fawn. We can meet at the tavern there.\"");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x03AD, 0x06E2]);
	goto labelFunc09B4_0167;
labelFunc09B4_014D:
	message("\"Let us meet at the abbey on Monk Isle, should I be forced to wander from this spot. No doubt Thoxa can fetch me there.\"");
	say();
	UI_set_new_schedules(var0000, 0x0000, 0x001A, [0x097C, 0x0464]);
labelFunc09B4_0167:
	goto labelFunc09B4_0179;
labelFunc09B4_016A:
	Func09AC(var0000, 0xFFFF, 0x0000, 0x000C);
labelFunc09B4_0179:
	return;
}


