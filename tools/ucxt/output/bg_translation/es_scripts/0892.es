#game "blackgate"
// externs
extern var Func090A 0x90A ();
extern var Func0907 0x907 (var var0000);
extern void Func06F9 object#(0x6F9) ();

void Func0892 0x892 ()
{
	var var0000;
	var var0001;

	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar appears to have resumed the stance of a more traditional golem guardian -- staunch and unmoving. However, it is impossible to miss the glimmer of intelligence in his eyes.");
	say();
	UI_add_answer(["name", "job", "bye"]);
	var0000 = false;
labelFunc0892_0022:
	converse attend labelFunc0892_00C9;
	case "name" attend labelFunc0892_0038:
	message("\"As thou must know by now, my creator chose to call me Adjhar.\"");
	say();
	UI_remove_answer("name");
labelFunc0892_0038:
	case "job" attend labelFunc0892_0052:
	message("\"I was created to be one of many protectors to the Shrines of the Three Principles. However,\" he pauses, \"my duty also included being the keeper of the Talisman of Love.\"");
	say();
	UI_remove_answer("job");
	UI_add_answer("Talisman");
labelFunc0892_0052:
	case "Talisman" attend labelFunc0892_00AF:
	message("\"Dost thou want the Talisman of Love?\"");
	say();
	UI_remove_answer("Talisman");
	if (!Func090A()) goto labelFunc0892_00AB;
	message("\"I was put here to protect the Shrines and prevent any from acquiring the Talisman. Any except the Avatar who demonstrated knowledge and understanding of Love. The Talisman is thine, Avatar.\"~He brings his stone hand to his heart and opens a panel on the front of his chest. Reaching inside with his other hand, he brings forth a beautiful yellow talisman.");
	say();
	var0000 = UI_create_new_object(0x03BB);
	UI_set_item_frame(var0000, 0x000A);
	var0001 = Func0907(UI_get_npc_object(0xFE9C));
	if (!var0001) goto labelFunc0892_00A4;
	message("He places the Talisman in your palm. ~\"Thou hast earned this and the honors and powers associated with it. Thou art truly an Avatar.\"");
	say();
	gflags[0x0328] = true;
	goto labelFunc0892_00CA;
	goto labelFunc0892_00A8;
labelFunc0892_00A4:
	message("\"I am sorry, but thou must be less burdened to receive this one of three greatest of all blessings.\"");
	say();
labelFunc0892_00A8:
	goto labelFunc0892_00AF;
labelFunc0892_00AB:
	message("\"Thou art truly deserving of such an artifact. But if thou dost not wish to utilize the Shrines, I must respect thy wishes.\"");
	say();
labelFunc0892_00AF:
	case "bye" attend labelFunc0892_00C6:
	message("\"I bid thee farewell.\"*");
	say();
	if (!gflags[0x0328]) goto labelFunc0892_00C5;
	message("\"Mark the wisdom of the Shrine of Love well, Avatar.\"*");
	say();
labelFunc0892_00C5:
	abort;
labelFunc0892_00C6:
	goto labelFunc0892_0022;
labelFunc0892_00C9:
	endconv;
labelFunc0892_00CA:
	if (!(gflags[0x0328] && (!gflags[0x0327]))) goto labelFunc0892_00E0;
	event = 0x0007;
	var0000->Func06F9();
	abort;
labelFunc0892_00E0:
	return;
}


