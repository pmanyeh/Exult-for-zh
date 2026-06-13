#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0856 0x856 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	Func097F(item, "@Attack him!@", 0x0000);
	if (!(UI_part_of_day() < 0x0002)) goto labelFunc0856_001E;
	var0000 = 0x0003;
	goto labelFunc0856_0024;
labelFunc0856_001E:
	var0000 = 0x0006;
labelFunc0856_0024:
	if (!(var0000 > 0x0000)) goto labelFunc0856_00DD;
	var0001 = UI_create_new_object2(0x02B3, [0x0000, 0x0000, 0x0000]);
	if (!var0001) goto labelFunc0856_00D0;
	UI_set_schedule_type(var0001, 0x0000);
	UI_set_alignment(var0001, 0x0002);
	UI_set_oppressor(0xFE9C, var0001);
	var0002 = UI_approach_avatar(var0001, 0x0050, 0x0028);
	var0003 = UI_get_random(0x0006);
	if (!(var0003 == 0x0001)) goto labelFunc0856_009C;
	Func097F(var0001, "@Lor glak!@", UI_get_random(0x0014));
labelFunc0856_009C:
	if (!(var0003 == 0x0002)) goto labelFunc0856_00B6;
	Func097F(var0001, "@Ska ska krak!@", UI_get_random(0x0014));
labelFunc0856_00B6:
	if (!(var0003 == 0x0003)) goto labelFunc0856_00D0;
	Func097F(var0001, "@Grik!@", UI_get_random(0x0014));
labelFunc0856_00D0:
	var0000 = (var0000 - 0x0001);
	goto labelFunc0856_0024;
labelFunc0856_00DD:
	var0002 = UI_set_npc_prop(item, 0x0003, 0x001B);
	abort;
	return;
}


