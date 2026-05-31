#game "blackgate"
// externs
extern var Func0908 0x908 ();

void Func08C1 0x8C1 ()
{
	var var0000;

	var0000 = Func0908();
	message("\"Sweet Rowena, I am so happy to see thee out of that horrid tower.\" Mordra's eyes begin to fill with tears of joy.*");
	say();
	UI_show_npc_face(0xFF70, 0x0001);
	message("\"It was terrible, but the worst part was being away from mine husband. The whole time I was there with Horance, I felt like a hollow shell of a person. I must be with Trent to be whole again.\"*");
	say();
	UI_remove_npc_face(0xFF70);
	UI_show_npc_face(0xFF71, 0x0000);
	message("\"Yes, thou art quite right. ");
	message(var0000);
	message(", she must needs be taken to her husband, swiftly. I trust that thou wilt do so.\" She leaves the statement hanging and says her goodbyes to Rowena.*");
	say();
	abort;
	return;
}


