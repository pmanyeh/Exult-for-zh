#game "serpentisle"
// externs
extern var Func0955 0x955 ();

void Func084A 0x84A ()
{
	message("\"None can take the Test of Knighthood without the permission of the Lord of Monitor. Dost thou seek my permission?\"");
	say();
	gflags[0x003C] = true;
	if (!Func0955()) goto labelFunc084A_001D;
	message("\"Very well. Shmed will ask thee the password. Tell him this --\"");
	say();
	message("\"'Courage is the Soul of Life.'\"");
	say();
	gflags[0x002F] = true;
	goto labelFunc084A_0021;
labelFunc084A_001D:
	message("\"Do not take the Test before thou art ready, strange warrior. But do not let fear shake thy resolve.\"");
	say();
labelFunc084A_0021:
	return;
}


