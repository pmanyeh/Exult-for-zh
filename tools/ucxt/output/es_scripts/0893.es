#game "blackgate"
void Func0893 0x893 ()
{
	UI_show_npc_face(0xFEE0, 0x0000);
	message("Adjhar appears to have resumed the stance of a more traditional golem guardian -- staunch and distant. However, it is impossible to miss the glimmer of intelligence in his eyes.");
	say();
	UI_add_answer(["name", "job", "bye"]);
labelFunc0893_001E:
	converse attend labelFunc0893_0057;
	case "name" attend labelFunc0893_0034:
	message("\"I am and always will be the one called Adjhar.\"");
	say();
	UI_remove_answer("name");
labelFunc0893_0034:
	case "job" attend labelFunc0893_0047:
	message("\"Now that thou hast mastered the Principle of Love, I no longer serve a function.\"");
	say();
	UI_remove_answer("job");
labelFunc0893_0047:
	case "bye" attend labelFunc0893_0054:
	message("\"Goodbye, Avatar. As always I thank thee for thy kindness in assisting two brothers in need. Forget not the lessons taught by the Shrines.\"*");
	say();
	abort;
labelFunc0893_0054:
	goto labelFunc0893_001E;
labelFunc0893_0057:
	endconv;
	return;
}


