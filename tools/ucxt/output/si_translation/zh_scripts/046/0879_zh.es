#game "serpentisle"
// externs
extern void Func097F 0x97F (var var0000, var var0001, var var0002);

void Func0879 0x879 ()
{
	message("\"To be pleased... To bid you to go to the Pillars of Purity.\"");
	say();
	message("\"To ask you to prepare yourself in virtue. Then to grasp the Pillar of Fire and let the Test begin...\"");
	say();
	message("\"To admit you to the Underground City.\"");
	say();
	Func097F(0xFF56, "@A moment!@", 0x0000);
	UI_set_new_schedules(0xFF56, 0x0000, 0x001D, UI_get_object_position(0xFF56));
	UI_run_schedule(0xFF56);
	abort;
	return;
}


