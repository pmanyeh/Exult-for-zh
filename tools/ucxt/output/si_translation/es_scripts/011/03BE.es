#game "serpentisle"
// externs
extern var Func097D 0x97D (var var0000, var var0001, var var0002, var var0003, var var0004);
extern var Func0992 0x992 (var var0000, var var0001, var var0002, var var0003);
extern void Func0887 0x887 (var var0000);

void Func03BE shape#(0x3BE) ()
{
	var var0000;
	var var0001;
	var var0002;

	var0000 = Func097D(0xFE9B, 0x0001, 0x0289, 0xFE99, 0x000D);
	if (!(event == 0x0001)) goto labelFunc03BE_008C;
	if (!(var0000 || gflags[0x02FF])) goto labelFunc03BE_004C;
	UI_si_path_run_usecode(0xFE9C, UI_get_object_position(item), 0x000D, item, 0x03BE, true);
	UI_set_path_failure([0x0400], item, 0x000E);
	goto labelFunc03BE_008C;
labelFunc03BE_004C:
	if (!((!var0000) || (!gflags[0x02FF]))) goto labelFunc03BE_007B;
	var0001 = Func0992(0x0001, "@Maybe we can climb down?!@", "@Maybe I can climb down?!@", true);
	var0002 = Func0992(0x0001, "@But with what?@", 0x0000, true);
	goto labelFunc03BE_008B;
labelFunc03BE_007B:
	var0001 = Func0992(0x0001, "@We need the rope!@", "@I need the rope!@", true);
labelFunc03BE_008B:
	abort;
labelFunc03BE_008C:
	if (!((event == 0x000D) || ((event == 0x000E) || (event == 0x0002)))) goto labelFunc03BE_00A4;
	Func0887(item);
labelFunc03BE_00A4:
	return;
}


