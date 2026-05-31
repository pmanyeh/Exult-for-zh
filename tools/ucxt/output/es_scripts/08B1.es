#game "blackgate"
// externs
extern var Func0908 0x908 ();
extern var Func0907 0x907 (var var0000);

void Func08B1 0x8B1 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0908();
	message("\"Once again, Avatar, thou hast proven that thou art ever the defender of Britannia and the innocent. I cannot adequately express my gratitude; however, please take this small token of my thanks. I hope it will help thee in thy quest.\"");
	say();
	var0001 = UI_create_new_object(0x0229);
	if (!var0001) goto labelFunc08B1_005B;
	var0002 = UI_set_item_quality(var0001, 0x0064);
	if (!Func0907(UI_get_npc_object(0xFE9C))) goto labelFunc08B1_0045;
	message("He hands you his personal staff. It appears to be magical.");
	say();
	goto labelFunc08B1_0057;
labelFunc08B1_0045:
	var0003 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("He places his personal staff on the ground. It appears to be magical.~\"I have something for thee, Avatar, but I see that thou canst not carry it now. I will set it here upon the floor for thee.\"");
	say();
labelFunc08B1_0057:
	gflags[0x01AB] = true;
labelFunc08B1_005B:
	message("For a moment Horance looks downcast. \"I feel that some of the responsibility for what happened in this town is upon my shoulders. For, in my search to uncover the truths of the universe, I unwittingly released that foul spirit which destroyed this town. I will spend the rest of my days in the attempt to restore this once lovely town.~~\"I will make it into a shining example of Spirituality, a shrine where people of good heart may live in peace and harmony. And again, I thank thee for giving me this chance. Goodbye, ");
	message(var0000);
	message(".\"*");
	say();
	abort;
	return;
}


